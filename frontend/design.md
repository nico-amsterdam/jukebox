# Jukebox PWA Design Style Guide

## Design Philosophy

### Visual Language
- **Retro-Futuristic Aesthetic**: Modern digital interface inspired by classic jukebox design
- **Neon Noir**: Dark backgrounds with vibrant electric accent colors
- **Musical Energy**: Dynamic visual elements that reflect sound and rhythm

### Color Palette
- **Primary Background**: Deep black (#0a0a0a) and dark grays (#1a1a1a)
- **Accent Colors**: Electric blue (#00d4ff), Neon magenta (#ff0080), Bright purple (#8b5cf6)
- **Text Colors**: White (#ffffff) for primary text, Light gray (#e5e5e5) for secondary
- **Status Colors**: Green (#00ff88) for playing, Orange (#ff8800) for voting

### Typography
- **Display Font**: "Orbitron" - futuristic, tech-inspired for headings
- **Body Font**: "Inter" - clean, readable sans-serif for content
- **Monospace**: "JetBrains Mono" - for technical information and timers

## Visual Effects

### Used Libraries
- **Anime.js**: Smooth animations for vote buttons, queue transitions
- **p5.js**: Dynamic sound wave visualizations and audio-reactive graphics
- **Pixi.js**: Particle effects for voting animations and background elements
- **ECharts.js**: Vote count visualizations and queue progress bars

### Animation Effects
- **Vote Button Pulse**: Glowing animation when hovering/tapping
- **Queue Transitions**: Smooth slide animations when songs change position
- **Sound Waves**: Real-time audio visualization during playback
- **Particle Burst**: Celebration effect when songs reach #1 in voting

### Header Effect
- **Animated Background**: Flowing sound waves with p5.js
- **Dynamic Lighting**: Neon glow effects that pulse with the music
- **Floating Elements**: Musical notes and sound wave particles

## Component Styling

### Cards
- Dark background with subtle border glow
- Rounded corners with neon accent borders
- Hover effects with scale and glow animations

### Buttons
- Neon-outlined style with electric fill on hover
- Rounded pill shape for modern feel
- Glowing shadow effects for depth

### Progress Indicators
- Gradient bars with electric color transitions
- Animated fill effects
- Neon glow on completion

## Mobile Optimization
- Touch-friendly button sizes (minimum 44px)
- Swipe gestures for song browsing
- Responsive grid layouts
- Optimized font sizes for mobile reading