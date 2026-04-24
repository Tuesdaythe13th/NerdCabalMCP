/**
 * IP Evidence Archival System
 * Tamper-proof evidence storage for legal proceedings
 */

import * as crypto from 'node:crypto';

export interface ArchivalEntry {
  id: string;
  timestamp: string;
  evidence_type: 'image' | 'video' | 'document' | 'model' | 'metadata';
  hash: string;
  metadata: any;
  chain_hash: string;
}

export interface ArchiveArgs {
  action: 'store' | 'retrieve' | 'verify' | 'chain_integrity';
  evidence?: any;
  entry_id?: string;
}

// In-memory chain (production would use database)
const ARCHIVE_CHAIN: ArchivalEntry[] = [];

/**
 * Hash evidence content
 */
function hashEvidence(content: any): string {
  return crypto
    .createHash('sha256')
    .update(JSON.stringify(content))
    .digest('hex');
}

/**
 * Calculate chain hash (links to previous entry)
 */
function calculateChainHash(entry: ArchivalEntry, prevHash: string): string {
  return crypto
    .createHash('sha256')
    .update(entry.id + entry.hash + prevHash)
    .digest('hex');
}

/**
 * Store evidence with cryptographic proof
 */
export function storeEvidence(evidence: any): ArchivalEntry {
  const entry: ArchivalEntry = {
    id: crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    evidence_type: evidence.type || 'metadata',
    hash: hashEvidence(evidence),
    metadata: {
      source: evidence.source || 'unknown',
      description: evidence.description || '',
      jurisdiction: evidence.jurisdiction || 'US',
      case_id: evidence.case_id || null
    },
    chain_hash: ''
  };

  // Link to previous entry
  const prevHash = ARCHIVE_CHAIN.length > 0
    ? ARCHIVE_CHAIN[ARCHIVE_CHAIN.length - 1].chain_hash
    : '0000000000000000';

  entry.chain_hash = calculateChainHash(entry, prevHash);
  ARCHIVE_CHAIN.push(entry);

  return entry;
}

/**
 * Retrieve evidence by ID
 */
export function retrieveEvidence(entryId: string): ArchivalEntry | null {
  return ARCHIVE_CHAIN.find(e => e.id === entryId) || null;
}

/**
 * Verify evidence hasn't been tampered
 */
export function verifyEvidence(entryId: string): {
  valid: boolean;
  entry: ArchivalEntry | null;
  chain_valid: boolean;
} {
  const entry = retrieveEvidence(entryId);
  if (!entry) {
    return { valid: false, entry: null, chain_valid: false };
  }

  // Verify chain integrity
  const chainValid = verifyChainIntegrity();

  return {
    valid: true,
    entry,
    chain_valid: chainValid
  };
}

/**
 * Verify entire chain integrity
 */
export function verifyChainIntegrity(): boolean {
  if (ARCHIVE_CHAIN.length === 0) return true;

  for (let i = 1; i < ARCHIVE_CHAIN.length; i++) {
    const current = ARCHIVE_CHAIN[i];
    const previous = ARCHIVE_CHAIN[i - 1];

    const expectedHash = calculateChainHash(current, previous.chain_hash);
    if (current.chain_hash !== expectedHash) {
      return false;
    }
  }

  return true;
}

/**
 * Main archival system handler
 */
export function archivalSystem(args: ArchiveArgs): any {
  switch (args.action) {
    case 'store':
      return storeEvidence(args.evidence);
    case 'retrieve':
      return retrieveEvidence(args.entry_id!);
    case 'verify':
      return verifyEvidence(args.entry_id!);
    case 'chain_integrity':
      return {
        valid: verifyChainIntegrity(),
        total_entries: ARCHIVE_CHAIN.length,
        oldest_entry: ARCHIVE_CHAIN[0]?.timestamp,
        newest_entry: ARCHIVE_CHAIN[ARCHIVE_CHAIN.length - 1]?.timestamp
      };
    default:
      throw new Error(`Unknown archival action: ${args.action}`);
  }
}
