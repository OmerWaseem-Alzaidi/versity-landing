# Versity Landing Page - Claude Code Instructions

## Project Overview
Landing page for Versity - a verified student community app connecting university students through events, accommodation, and marketplace features. Versity is a global platform for university students everywhere.

## Brand System

### Colors
```
Primary: #493A77 (Deep Purple)
Primary Light: rgba(73, 58, 119, 0.1)
Secondary: #FBBF24 (Gold/Amber)
Background: #FFFFFF
Background Alt: #F9FAFB
Text Primary: #1F2937
Text Secondary: #6B7280
Text Tertiary: #9CA3AF
Stroke: #E5E7EB
Success: #22C55E
Error: #EF4444
```

### Typography
- Headings: Inter (Bold, 700)
- Body: Inter (Regular 400, Medium 500)
- Use Google Fonts: `@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap')`

### Design Principles
- Clean, minimal aesthetic inspired by Notion and Stripe
- Generous whitespace
- Subtle shadows (shadow-sm, shadow-md)
- Rounded corners (rounded-lg, rounded-xl, rounded-2xl)
- High contrast CTAs with primary purple
- Smooth animations (300ms ease transitions)
- Mobile-first responsive design

## Tech Stack
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Three.js + React Three Fiber (3D hero animation)
- Framer Motion (scroll animations)

## Page Structure

### 1. Navigation (sticky)
- Logo (left): "Versity" text in primary purple
- Single CTA button (right): "Download App" - filled purple button

### 2. Hero Section
- Main headline: "Your University Community, Verified"
- Subheadline: "Connect with verified students. Find events, housing, and deals - exclusively for university students."
- Two CTAs: "Get Started" (primary), "Learn More" (secondary/outline)
- 3D Animation: Floating connected nodes/particles representing student network
- Background: Subtle gradient from white to light purple tint

### 3. Social Proof Bar
- Text: "Trusted by students from top universities"
- University logos in grayscale (placeholder logos until real partnerships confirmed)
- Animated subtle scroll or fade-in

### 4. Problem Section
- Headline: "Student Life Shouldn't Be This Hard"
- Three pain points with icons:
  1. "Missing out on campus events because you didn't hear about them"
  2. "Struggling to find safe, affordable student housing"
  3. "Buying from strangers with no way to verify who they are"
- Visual: Split layout with illustration or subtle animation

### 5. Features Section
- Headline: "Everything Students Need, One App"
- Three feature cards with hover effects:

**Events**
- Icon: Calendar/Party icon
- Title: "Campus Events"
- Description: "Discover free events, workshops, and social gatherings. Join WhatsApp groups instantly."
- Visual: Event card preview

**Accommodation**
- Icon: Home icon
- Title: "Student Housing"
- Description: "Find verified roommates and housing listings. Safe, student-only marketplace."
- Visual: Housing listing preview

**Marketplace**
- Icon: Shopping bag icon
- Title: "Buy & Sell"
- Description: "Trade textbooks, furniture, and more with verified students from your university."
- Visual: Marketplace item preview

### 6. How It Works
- Headline: "Get Started in 3 Steps"
- Three steps with numbered badges:
  1. "Download the App" - App store icons
  2. "Verify with .edu Email" - Email verification illustration
  3. "Join Your Community" - Connected students illustration
- Animated step progression on scroll

### 7. Trust & Security Section
- Headline: "Built for Student Safety"
- Key points:
  - ".edu email verification required"
  - "Every user is a real, verified student"
  - "WhatsApp integration for safe communication"
  - "No payments in app - meet and transact safely"
- Visual: Shield/lock icon, verification badge animation
- Background: Light purple tint

### 8. App Preview
- Headline: "See Versity in Action"
- Phone mockup with app screenshots
- Carousel or static display of 3 key screens
- Floating UI elements for depth

### 9. FAQ Section
- Headline: "Frequently Asked Questions"
- Accordion style, 5-6 questions:
  - "Who can use Versity?"
  - "How does verification work?"
  - "Is Versity free?"
  - "How do I contact other students?"
  - "Which universities are supported?"

### 10. Final CTA Section
- Headline: "Ready to Join Your Campus Community?"
- Subtext: "Download Versity and connect with verified students today."
- App Store & Google Play buttons
- Background: Gradient purple

### 11. Footer
- Logo
- Links: About, Privacy Policy, Terms of Service, Contact
- Social links: Instagram, Twitter
- Copyright: "© 2025 Versity. All rights reserved."

## 3D Animation Specifications (Hero)

Create an interactive particle network representing student connections:
- Floating spheres (nodes) in primary purple (#493A77) with varying opacity
- Connecting lines between nearby nodes
- Subtle floating/breathing animation
- Mouse interaction: nodes gently move away from cursor
- Performance: Keep under 100 nodes for mobile performance
- Background: Transparent, layered behind hero text

## Animation Guidelines (Framer Motion)

- Use `whileInView` for scroll-triggered animations
- Fade up animation: `initial={{ opacity: 0, y: 20 }}` → `animate={{ opacity: 1, y: 0 }}`
- Stagger children with `staggerChildren: 0.1`
- Duration: 0.5-0.7s for most animations
- Easing: `ease: "easeOut"`

## File Structure
```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── Navigation.tsx
│   ├── Hero/
│   │   ├── Hero.tsx
│   │   └── ParticleNetwork.tsx
│   ├── SocialProof.tsx
│   ├── Problem.tsx
│   ├── Features.tsx
│   ├── HowItWorks.tsx
│   ├── Trust.tsx
│   ├── AppPreview.tsx
│   ├── FAQ.tsx
│   ├── FinalCTA.tsx
│   └── Footer.tsx
└── lib/
    └── constants.ts
```

## Important Notes
- All text in English
- Mobile-first: Design for 375px width first, then scale up
- Ensure all interactive elements have hover/focus states
- Use semantic HTML for accessibility
- Lazy load the 3D component to improve initial page load