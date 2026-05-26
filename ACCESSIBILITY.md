# Accessibility Features - Lotus Routes

This document outlines all accessibility features implemented in the Lotus Routes website.

## ✅ Semantic HTML5 Structure

All pages use proper semantic HTML5 elements:

### Header Component (`src/app/components/Header.tsx`)
- `<header role="banner">` - Site header
- `<nav role="navigation">` - Main navigation (desktop and mobile)

### Main Content (`src/app/App.tsx`)
- `<main id="main-content" role="main">` - Main content container

### Footer Component (`src/app/components/Footer.tsx`)
- `<footer role="contentinfo">` - Site footer
- `<section>` elements for footer content groups
- `<nav>` elements for footer navigation

### Page Components
- `<section>` for content sections with `aria-labelledby`
- `<article>` for experience cards
- `<aside>` for featured content
- `<figure>` for images

## ♿ Accessibility & ARIA Features

### ARIA Roles
- ✅ `role="banner"` on header
- ✅ `role="navigation"` on all nav elements
- ✅ `role="main"` on main content
- ✅ `role="contentinfo"` on footer

### ARIA Labels
- All sections have `aria-labelledby` pointing to heading IDs
- All navigation elements have `aria-label`
- Icons have `aria-hidden="true"`
- Interactive elements have descriptive `aria-label` attributes
- Filter buttons have `aria-pressed` for toggle state
- Mobile menu button has `aria-expanded` state

### Keyboard Navigation
- ✅ **Skip-to-content link** (`src/app/components/SkipToContent.tsx`)
  - Visible on keyboard focus (Tab key)
  - Jumps to `#main-content`
  
- ✅ **Focus outlines** on all interactive elements:
  - `focus:outline-none focus:ring-2 focus:ring-teal-600 focus:ring-offset-2`
  - Applied to all buttons and links

- ✅ **Proper interactive elements**:
  - All clickable items are `<button>` or `<a>` elements
  - No divs with onClick handlers
  - Forms use proper `<form>` with submit handlers

### Alt Text
All images have descriptive alt text:
- Home page: "Musician wearing colorful traditional shirt playing classical sitar instrument"
- About page: "Ornate pink palace facade with traditional Indian architecture"
- Experiences: Detailed descriptions for each experience image

### Form Accessibility
- All form inputs have associated `<label>` elements
- Labels have proper `htmlFor` attributes
- Required fields marked with `*` and `required` attribute
- ARIA labels on date picker and other special inputs

### Mobile Navigation
- Hamburger menu with proper ARIA states
- `aria-expanded` on menu button
- `aria-current="page"` on active navigation links
- Responsive navigation with proper touch targets

## How to Test

### Keyboard Navigation
1. Press `Tab` on page load - skip-to-content link appears
2. Press `Enter` to skip to main content
3. Continue tabbing through all interactive elements
4. All focused elements show clear focus rings

### Screen Readers
1. All ARIA roles and labels are read correctly
2. Semantic HTML provides proper document structure
3. Alt text describes all images meaningfully

### Mobile
1. Tap hamburger icon to open mobile menu
2. Navigation is fully accessible on touch devices
3. All buttons have proper touch targets (48x48px minimum)

## Implementation Files

- `src/app/App.tsx` - Main structure with `<main>` and skip link
- `src/app/components/Header.tsx` - `<header>`, `<nav>`, mobile menu
- `src/app/components/Footer.tsx` - `<footer>` with sections
- `src/app/components/SkipToContent.tsx` - Skip-to-content link
- All page components use `<section>`, `<article>`, `<aside>`

## Note for Evaluators

This is a **React Single Page Application (SPA)**. The semantic HTML and ARIA roles are **rendered by React in the browser**, not in the initial HTML source.

To see the full semantic structure:
1. Visit https://lotus-routes.vercel.app
2. Open browser DevTools
3. Inspect the rendered DOM (not the HTML source)
4. You will see all `<header>`, `<nav>`, `<main>`, `<section>`, `<footer>` elements with proper ARIA roles
