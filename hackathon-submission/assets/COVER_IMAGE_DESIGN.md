# Cover Image Design Specifications

**For:** NerdCabal Arc Commerce Platform
**Purpose:** Hackathon submission cover image
**Format:** PNG or JPG
**Aspect Ratio:** 16:9 (Recommended)
**Resolution:** 1920 x 1080 pixels (Full HD)

---

## 🎨 Design Concept

### Primary Concept: "Agents in Action"

Visual showing autonomous AI agents orchestrating commerce transactions on a futuristic network grid, with Arc and Circle branding prominent.

**Mood:** Professional, futuristic, trustworthy, innovative
**Style:** Modern, clean, tech-forward
**Vibe:** "The future of commerce is autonomous"

---

## 📐 Layout Specifications

### Dimensions
- **Width:** 1920 pixels
- **Height:** 1080 pixels
- **Safe Area:** 100px margin from all edges (content won't be cut off)
- **Title Area:** Top 300px
- **Visual Area:** Middle 600px
- **Footer Area:** Bottom 180px

### Grid System
```
┌─────────────────────────────────────────────────────┐
│  100px margin                              100px    │
│ ┌─────────────────────────────────────────────────┐│
│ │                                                 ││
│ │        NerdCabal Commerce Platform             ││ Top 300px
│ │   Autonomous AI Agents for Decentralized       ││ (Title)
│ │              Commerce on Arc                    ││
│ │                                                 ││
│ ├─────────────────────────────────────────────────┤│
│ │                                                 ││
│ │                                                 ││
│ │         [Agent Network Visualization]          ││ Middle 600px
│ │           [Circle & Arc Logos]                 ││ (Visual)
│ │            [USDC Symbol]                       ││
│ │                                                 ││
│ │                                                 ││
│ ├─────────────────────────────────────────────────┤│
│ │                                                 ││
│ │  Built with Circle | Arc | USDC | Gateway      ││ Bottom 180px
│ │         Hackathon Submission 2026              ││ (Footer)
│ │                                                 ││
│ └─────────────────────────────────────────────────┘│
│  100px                                      100px   │
└─────────────────────────────────────────────────────┘
```

---

## 🎨 Color Palette

### Primary Colors
- **Arc Blue**: `#0066FF` - Use for primary elements
- **Circle Green**: `#00D632` - Use for accents
- **USDC Blue**: `#2775CA` - Use for coin/payment elements
- **Cyber Purple**: `#7C3AED` - Use for highlights

### Background
- **Dark Navy**: `#0A0E27` - Base background
- **Midnight Blue**: `#1E293B` - Secondary background
- **Gradient**: Linear gradient from `#0A0E27` to `#1E293B`

### Text
- **White**: `#FFFFFF` - Headings and primary text
- **Light Gray**: `#CBD5E1` - Secondary text
- **Blue Gray**: `#64748B` - Tertiary text

### Accents
- **Electric Blue**: `#3B82F6` - Glows and highlights
- **Cyan**: `#06B6D4` - Accents and borders
- **Green**: `#10B981` - Success indicators
- **Gold**: `#F59E0B` - Special highlights

---

## 🖼️ Visual Elements

### 1. Background

**Base Layer:**
- Dark gradient background (`#0A0E27` → `#1E293B`)
- Subtle grid pattern overlay (low opacity ~5%)
- Radial glow from center (blue-purple gradient, 20% opacity)

**Grid Pattern CSS:**
```css
background-image:
  linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px),
  linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px);
background-size: 50px 50px;
```

### 2. Agent Network Visualization

**Central Focus:**
- 8 connected nodes representing the 8 agents
- Nodes arranged in octagon pattern
- Each node is a glowing circle with icon
- Lines connecting nodes with gradient effect
- Data particles flowing along connections
- Subtle pulse animation effect

**Node Design:**
```
Each node:
- Outer glow: Electric blue (#3B82F6, 40% opacity, 20px blur)
- Inner circle: Gradient (#0066FF to #3B82F6)
- Icon: White, centered
- Size: 80px diameter
- Border: 2px solid white (50% opacity)
```

**Agent Icons:**
- 💳 Payment Agent
- 🏦 Treasury Agent
- 🛒 Marketplace Agent
- ⚡ Gateway Agent
- 🤝 Negotiator Agent
- 🛡️ Compliance Agent
- 📊 Analytics Agent
- 🌉 Bridge Agent

### 3. Typography

**Main Headline:**
```
NerdCabal Commerce Platform
- Font: Inter Bold or Helvetica Bold
- Size: 72px
- Color: White (#FFFFFF)
- Letter spacing: -1px
- Line height: 1.2
```

**Tagline:**
```
Autonomous AI Agents for Decentralized Commerce on Arc
- Font: Inter Regular
- Size: 32px
- Color: Light Gray (#CBD5E1)
- Letter spacing: 0px
- Line height: 1.4
```

**Footer Text:**
```
Built with Circle | Arc | USDC | Gateway
- Font: Inter Medium
- Size: 20px
- Color: Blue Gray (#64748B)
- All caps: No
```

### 4. Logo Placement

**NerdCabal Logo:**
- Position: Top-left corner (120px from left, 120px from top)
- Size: 60px x 60px
- Style: Icon only or icon + wordmark

**Circle Logo:**
- Position: Bottom section (evenly spaced)
- Size: 40px height
- Color: White or original Circle green

**Arc Logo:**
- Position: Next to Circle logo
- Size: 40px height
- Color: White or Arc blue

**USDC Icon:**
- Position: Among partner logos
- Size: 40px diameter
- Style: Official USDC logo

### 5. Decorative Elements

**Geometric Shapes:**
- Subtle hexagons in background (low opacity)
- Flowing lines suggesting data streams
- Circular orbits around central visualization
- Particle effects (small dots, glowing)

**Glows & Effects:**
- Soft blue glow behind main headline
- Purple-blue gradient glow around network visualization
- Subtle vignette on edges
- Light ray effects emanating from center (optional)

---

## 🛠️ Design Tools

### Recommended Software

**Figma (Recommended - Free)**
- Web-based, easy to use
- Great for mockups and collaboration
- Export to PNG/JPG easily
- Templates: Search "Tech Presentation Cover"

**Canva (Easiest - Free tier available)**
- Templates: "Tech Presentation", "Blockchain", "AI"
- Drag-and-drop interface
- Export: PNG or JPG (high resolution)
- Pro tip: Use "Presentation (16:9)" size

**Adobe Photoshop (Professional)**
- Full control over every element
- Best for complex compositions
- Steeper learning curve
- Export: Save for Web (PNG-24 or JPG, quality 90)

**Adobe Illustrator (Vector Graphics)**
- Best for logos and clean designs
- Scalable to any size
- Export: Export for Screens (PNG, 2x scale)

**GIMP (Free Alternative to Photoshop)**
- Open-source, fully featured
- Slightly less intuitive than Photoshop
- Export: File → Export As → PNG

---

## 📋 Step-by-Step Creation Guide

### Using Figma (Recommended)

1. **Create New File**
   - Open Figma.com
   - Create new design file
   - Set frame size: 1920 x 1080

2. **Add Background**
   - Rectangle: 1920 x 1080
   - Fill: Linear gradient (270°)
     - Stop 1: `#0A0E27` at 0%
     - Stop 2: `#1E293B` at 100%
   - Add radial gradient overlay (blend mode: Screen, 20% opacity)

3. **Add Grid Pattern**
   - Rectangle with grid background image
   - Opacity: 5%
   - Size: 1920 x 1080

4. **Create Agent Network**
   - Draw 8 circles (80px diameter)
   - Arrange in octagon pattern
   - Add icons (from Lucide or Heroicons)
   - Add connecting lines (2px, gradient stroke)
   - Apply outer glow effect

5. **Add Typography**
   - Headline text: "NerdCabal Commerce Platform"
   - Style with Inter Bold, 72px, white
   - Add tagline below
   - Position in top section

6. **Add Logos**
   - Import Circle, Arc, USDC logos
   - Resize to 40px height
   - Align horizontally in footer
   - Add separator lines between logos

7. **Add Effects**
   - Glow behind headline (blue, 60px blur)
   - Particle elements (small circles, scattered)
   - Vignette (large circle, black fill, gradient opacity)

8. **Export**
   - Select frame
   - Export settings: PNG, 2x
   - Download

### Using Canva

1. **Choose Template**
   - Search "Tech Presentation Cover"
   - Select 1920 x 1080 size
   - Choose dark/tech theme

2. **Customize Colors**
   - Replace colors with Arc Blue (#0066FF)
   - Add Circle Green (#00D632) accents
   - Use dark background (#0A0E27)

3. **Replace Text**
   - Edit headline: "NerdCabal Commerce Platform"
   - Edit tagline
   - Adjust font sizes and colors

4. **Add Elements**
   - Search elements: "network", "blockchain", "connection"
   - Add Circle, Arc, USDC logos
   - Position elements

5. **Download**
   - Click Share → Download
   - Select PNG or JPG
   - Choose highest quality
   - Download

---

## 🎨 Design Variations

### Variation 1: Network-Centric
**Focus:** Agent network visualization large and central
**Style:** Abstract, technical
**Best for:** Emphasizing the multi-agent architecture

### Variation 2: Logo-Forward
**Focus:** Large NerdCabal logo with Circle/Arc branding
**Style:** Clean, corporate
**Best for:** Brand recognition

### Variation 3: Transaction Flow
**Focus:** Visualization of payment flowing through system
**Style:** Dynamic, flowing
**Best for:** Showing the commerce process

### Variation 4: Split-Screen
**Focus:** Left: Problem (old commerce), Right: Solution (our platform)
**Style:** Before/after comparison
**Best for:** Highlighting the innovation

---

## 📏 Accessibility Guidelines

### Contrast Ratios
- Headline vs. background: Minimum 7:1 (AAA)
- Body text vs. background: Minimum 4.5:1 (AA)
- Use [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)

### Readability
- Don't place text over busy backgrounds
- Use text shadows or backgrounds for legibility
- Ensure all text is large enough (min 20px)

### Color Blindness
- Don't rely solely on color to convey information
- Use shapes, icons, and text labels
- Test with [Coblis Color Blindness Simulator](https://www.color-blindness.com/coblis-color-blindness-simulator/)

---

## ✅ Quality Checklist

Before submitting your cover image:

**Technical:**
- [ ] Resolution: 1920 x 1080 (or higher) ✅
- [ ] Aspect ratio: 16:9 ✅
- [ ] Format: PNG or JPG ✅
- [ ] File size: < 5MB ✅
- [ ] No pixelation or blur ✅

**Design:**
- [ ] Readable headline and tagline ✅
- [ ] Clear visual hierarchy ✅
- [ ] Logos visible and recognizable ✅
- [ ] Consistent color palette ✅
- [ ] Professional appearance ✅

**Content:**
- [ ] Project name correct ✅
- [ ] No typos or grammar errors ✅
- [ ] All logos have permission to use ✅
- [ ] Branding consistent with project ✅

**Compliance:**
- [ ] Safe area respected (no cut-off text) ✅
- [ ] High contrast for readability ✅
- [ ] Works in thumbnail size ✅
- [ ] Appropriate for professional setting ✅

---

## 💡 Pro Tips

### Stand Out
- Use motion blur effects on connection lines for dynamism
- Add subtle 3D depth to nodes
- Include small data visualizations (graphs, charts)
- Use light particles to show activity

### Balance
- Don't overcrowd - leave breathing room
- Use rule of thirds for element placement
- Balance dark and light areas
- Symmetry is your friend for tech designs

### Branding
- Make NerdCabal branding prominent
- Respect Circle and Arc brand guidelines
- Use official logos (don't recreate)
- Consistent typography throughout

### Test
- View at thumbnail size (it should still be clear)
- Look at it on mobile screen
- Check in grayscale (does hierarchy still work?)
- Get feedback from others

---

## 🖼️ Example Compositions

### Composition A: Centered Network
```
┌────────────────────────────────────────┐
│  NerdCabal Commerce Platform           │
│  Autonomous AI Agents on Arc           │
├────────────────────────────────────────┤
│                                        │
│        ● ──── ● ──── ●                │
│       ╱│      │      │╲               │
│      ● │    (Arc)    │ ●              │
│       ╲│      │      │╱               │
│        ● ──── ● ──── ●                │
│                                        │
├────────────────────────────────────────┤
│  Circle | Arc | USDC | Gateway        │
└────────────────────────────────────────┘
```

### Composition B: Flowing Data
```
┌────────────────────────────────────────┐
│  NerdCabal                  [Logo]     │
│  Commerce Platform                     │
├────────────────────────────────────────┤
│  ●→→→●→→→●→→→●                        │
│  ↓        ↓        ↓                   │
│  ●  (Arc) ●  (USDC)●                  │
│  ↓        ↓        ↓                   │
│  ●←←←●←←←●←←←●                        │
├────────────────────────────────────────┤
│  Autonomous AI Agents                  │
│  Circle | Arc | USDC                   │
└────────────────────────────────────────┘
```

---

## 📦 Asset Resources

### Icons
- **Lucide**: https://lucide.dev (React icons, free)
- **Heroicons**: https://heroicons.com (Tailwind icons, free)
- **Font Awesome**: https://fontawesome.com (Extensive library, free tier)

### Logos
- **Circle Brand Assets**: Contact Circle for official logos
- **Arc Logo**: From Circle/Arc documentation
- **USDC Logo**: From Circle brand assets
- **NerdCabal**: Create custom or use existing

### Stock Graphics
- **Unsplash**: https://unsplash.com (Free high-quality images)
- **Pexels**: https://pexels.com (Free stock photos)
- **Freepik**: https://freepik.com (Vectors, some free)

### Fonts
- **Inter**: https://fonts.google.com/specimen/Inter (Google Fonts, free)
- **Helvetica**: System font on Mac
- **Arial**: System font, fallback

---

## 🎯 Final Thoughts

**Your cover image is the first impression judges will have of your project.**

Make it:
- **Professional**: Clean, polished, error-free
- **Relevant**: Clearly represents your project
- **Memorable**: Stands out from other submissions
- **On-brand**: Consistent with Circle/Arc aesthetic

**Don't overthink it.** A simple, clean design is better than a cluttered, complex one.

**Spend 2-3 hours max.** Your time is better spent on the actual demo and code.

**Get feedback.** Show it to friends or teammates before submitting.

---

## 📤 Export & Submission

### Final Export Settings

**Figma:**
- Right-click frame → Export
- Format: PNG or JPG
- Scale: 2x (3840 x 2160 exports, then downscale if too large)
- Quality: 90% (for JPG)

**Canva:**
- Download → PNG or JPG
- Quality: Highest
- Size: Standard (1920 x 1080)

**Photoshop:**
- File → Export → Save for Web (Legacy)
- PNG-24 or JPG (Quality: 90)
- Image Size: 1920 x 1080

**File Naming:**
```
nerdcabal-arc-commerce-cover.png
or
nerdcabal-arc-commerce-cover.jpg
```

**Upload to:**
- lablab.ai submission form
- GitHub repository (for reference)
- Project README (embed in docs)

---

**Your cover image is ready! 🎨**

**Make it beautiful, make it yours, and good luck! 🚀**
