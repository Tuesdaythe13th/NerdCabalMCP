"""
Contextual Risk Scoring for Enforcement Decisions
"""

from typing import Dict, Any
from dataclasses import dataclass

@dataclass
class RiskFactors:
    similarity_score: float
    commercial_value: int  # USD
    jurisdiction: str
    litigation_cost: int  # USD
    enforcement_difficulty: float  # 0-1
    urgency: str  # 'low', 'medium', 'high', 'critical'

class RiskScorer:
    """Calculate risk scores for enforcement decisions"""

    JURISDICTION_COSTS = {
        'US': 15000,
        'EU': 22000,
        'UK': 18000,
        'CN': 65000,
        'OTHER': 25000
    }

    JURISDICTION_DIFFICULTY = {
        'US': 0.35,
        'EU': 0.55,
        'UK': 0.42,
        'CN': 0.82,
        'OTHER': 0.60
    }

    def calculate_risk_score(self, factors: RiskFactors) -> Dict[str, Any]:
        """
        Calculate comprehensive risk score

        Returns score 0-100 with enforcement recommendation
        """
        # Base score from similarity
        base_score = factors.similarity_score * 40

        # Commercial value factor (normalized to 0-20)
        value_score = min(20, (factors.commercial_value / 100000) * 20)

        # Jurisdiction factor (0-20, inverse of difficulty)
        jurisdiction_score = (1 - factors.enforcement_difficulty) * 20

        # Urgency factor (0-20)
        urgency_map = {'low': 5, 'medium': 10, 'high': 15, 'critical': 20}
        urgency_score = urgency_map.get(factors.urgency, 10)

        total_score = base_score + value_score + jurisdiction_score + urgency_score

        # ROI calculation
        roi = self._calculate_roi(factors)

        # Recommendation
        recommendation = self._get_recommendation(total_score, roi)

        return {
            'risk_score': round(total_score, 2),
            'breakdown': {
                'similarity': round(base_score, 2),
                'commercial_value': round(value_score, 2),
                'jurisdiction': round(jurisdiction_score, 2),
                'urgency': round(urgency_score, 2)
            },
            'roi': roi,
            'recommendation': recommendation,
            'estimated_cost_usd': factors.litigation_cost,
            'expected_value_usd': factors.commercial_value
        }

    def _calculate_roi(self, factors: RiskFactors) -> float:
        """Calculate litigation ROI"""
        if factors.litigation_cost == 0:
            return 0.0

        expected_recovery = factors.commercial_value * 0.6  # 60% recovery rate
        roi = ((expected_recovery - factors.litigation_cost) / factors.litigation_cost) * 100
        return round(roi, 2)

    def _get_recommendation(self, score: float, roi: float) -> str:
        """Get enforcement recommendation"""
        if score >= 75 and roi > 50:
            return "PURSUE: High risk score with positive ROI - recommend immediate enforcement"
        elif score >= 60 and roi > 0:
            return "CONSIDER: Moderate risk with positive ROI - evaluate case details"
        elif score >= 60 and roi <= 0:
            return "NEGOTIATE: Moderate risk but negative ROI - attempt settlement"
        elif score < 60 and roi > 100:
            return "EVALUATE: Lower risk but high ROI potential - conduct deeper analysis"
        else:
            return "MONITOR: Below threshold for active enforcement - continue monitoring"


# MCP-compatible interface
def risk_scoring_tool(args: Dict[str, Any]) -> Dict[str, Any]:
    """
    MCP tool for risk scoring

    Args:
        similarity_score: 0-1 similarity score
        commercial_value: Estimated value in USD
        jurisdiction: Legal jurisdiction
        urgency: Urgency level
    """
    scorer = RiskScorer()

    jurisdiction = args.get('jurisdiction', 'US')

    factors = RiskFactors(
        similarity_score=args.get('similarity_score', 0.0),
        commercial_value=args.get('commercial_value', 0),
        jurisdiction=jurisdiction,
        litigation_cost=scorer.JURISDICTION_COSTS.get(jurisdiction, 25000),
        enforcement_difficulty=scorer.JURISDICTION_DIFFICULTY.get(jurisdiction, 0.60),
        urgency=args.get('urgency', 'medium')
    )

    return scorer.calculate_risk_score(factors)
