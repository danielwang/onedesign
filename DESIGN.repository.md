---
name: ONEdesign
version: "2.0.0 beta"
mode: repository-aware
last-updated: "2026-11-24"
description: The repository version teaches AI how to design UI with the existing nebulaONE system.
---

# Overview

ONEdesign defines how to create clear, consistent, accessible nebulaONE experiences. Interfaces should feel calm, useful, precise, welcoming and dependable. Prioritise clarity, consistency, purposeful restraint, accessibility by default, progressive disclosure and evidence-based adaptation.

This file guides design decisions, not component implementation. It intentionally contains no duplicated visual token values or component geometry. The default accessibility target is WCAG 2.2 AA.

# Authority and scope

- Use the current app theme and shared component library as the implementation source of truth for component APIs, variants, states and styling.
- Use approved Figma specifications as the visual design reference and `design-tokens.tokens.json` as the authoritative source for exported token values. Do not assume the export contains every runtime token or component specification.
- Use this document for component selection, composition, hierarchy, accessibility and interaction intent. Discover actual source paths and supported APIs in the repository; do not invent them.
- If Figma, exported tokens and runtime implementation disagree, report the discrepancy. For a page-level task, retain existing component implementation unless a system-level change is explicitly authorised.
- Follow explicit task scope and repository engineering instructions. Do not interpret this document as permission to refactor the design system.

# Agent workflow

1. Inspect repository instructions, existing screens, shared components, theme and available variants before designing.
2. Identify the user goal, task hierarchy and existing patterns that meet the need.
3. Compose existing components using their supported APIs and theme tokens. Use existing layout utilities for page-level composition.
4. Do not override internal padding, heights, typography, radii, colours, shadows, focus or target sizes with local CSS, utility classes, inline styles or wrapper hacks. Do not duplicate shared components.
5. If a required variant is missing, identify the gap and propose a reusable solution. Do not change the shared component or theme without explicit authorisation.
6. Validate responsive behaviour, keyboard access, contrast, states and consistency. Report unresolved gaps and any required system-level changes separately.

# Colors

Use the theme's semantic roles for surfaces, text, borders, actions, selection, focus and feedback. Use the existing primary button variant for the main action; do not assume the brand accent is the button fill. Keep supporting text quieter than primary text, but never use low-contrast metadata styling for essential information. Reserve client branding for approved client contexts.

Use the existing chart palette and chart components. Distinguish categorical series with labels, legends or patterns; use an approved sequential ramp for ordered data. Never rely on color alone for status, errors, selection or data categories.

# Typography

Use existing heading, body, supporting text, link and component typography styles. Maintain a semantic heading hierarchy independently of visual size. Use the appropriate component variant for labels, navigation and buttons rather than applying generic text styles to their internals. Preserve readable line lengths and avoid truncating essential content. Use monospace only where it aids technical reading. Do not introduce decorative overlines or arbitrary type scales.

# Layout and responsiveness

Use established page shells, layout primitives, grid and spacing utilities. Align related content to shared edges; use smaller gaps within groups and larger gaps between groups. Prefer whitespace over unnecessary containers. Reflow content for narrow screens rather than shrinking desktop layouts. Use the existing responsive breakpoints and content-width conventions. Avoid horizontal scrolling for ordinary reading and forms.

# Buttons

Select a supported size variant appropriate to context and density. Use the existing primary treatment for the main outcome of a view; use secondary or neutral treatments for supporting actions and quieter treatments for low-priority actions. Use an appropriate destructive or success variant only when the meaning warrants it. Label actions by outcome. Add an icon only when it aids recognition. Do not restyle buttons to reproduce a visual spec from documentation.

# Elevation and depth

Use spacing and existing borders for ordinary surfaces. Reserve shadows for genuinely floating layers, such as menus, dialogs and drawers, using their built-in styles. Preserve the app's layering and overlay management; do not introduce arbitrary z-index values or decorative effects.

# Motion

Use built-in motion for immediate feedback, transitions, entrances and dismissals. Motion should clarify cause and effect and never delay access. Respect reduced-motion preferences. Avoid decorative animation, parallax, looping and large transforms.

# Accessibility

Target WCAG 2.2 AA. Verify normal text contrast of at least 4.5:1, large text at least 3:1, and applicable non-text contrast at least 3:1. Preserve visible focus, meaningful accessible names, keyboard operation, logical reading order, usable zoom and text spacing, and accessible target sizes. Test with keyboard, screen readers, touch and high-contrast settings where applicable. Report failures in shared components instead of silently overriding them; accessibility defects still require resolution before claiming compliance.

# Forms and validation

Place labels before fields, describe expected formats and distinguish required fields through text or a documented convention. Preserve entered values after errors. Associate errors with relevant fields and provide clear recovery guidance. Do not use placeholders as labels or rely on color alone for validation.

# Component selection and composition

Choose components by user intent, not appearance. Prefer the existing component or pattern that meets the need. The following selection guidance is a design recommendation; it does not assert that every variant is available in the app.

| Pattern | When to use |
|---|---|
| Button | An action or outcome; use a link for navigation. |
| Card | A meaningful, distinct content group; prefer spacing for ordinary grouping. |
| Dialog | A focused decision or task that needs the user's attention. |
| Drawer | Contextual detail or editing while preserving the surrounding view. |
| Form controls | Match the control to the input type, number of choices and validation needs. |
| Table | Structured comparison or scanning across records. |
| Navigation | Stable destinations organised by user tasks and importance. |
| Inline message | Feedback tied to a field or local task. |
| Banner | Important information affecting a page or workflow. |
| Toast | Brief, non-blocking confirmation; do not rely on it for critical errors. |
| Tooltip or disclosure | Optional explanation; keep essential instructions visible. |

Keep the main task prominent. Group related content and actions. Use progressive disclosure for secondary information. Preserve user input and context during recovery. Consider empty, loading, error, success and permission states where relevant. For destructive or consequential actions, provide appropriate confirmation or recovery. Use familiar patterns before introducing novel interactions.

# Anti-slop rules

AI-generated interfaces must avoid unnecessary decoration and generic AI design patterns.

| Avoid | Prefer |
| --- | --- |
| Gradients | Existing solid theme colours |
| Glassmorphism and glow | Clear surfaces and boundaries |
| Decorative shadows | Elevation for meaningful floating layers |
| Cards inside cards | Spacing and content hierarchy |
| Decorative icons | Meaningful functional icons |
| Emoji as UI icons | Approved icon library |
| Centred-everything layouts | Consistent alignment and reading flow |
| Unnecessary badges | Clear headings and meaningful labels |
| Decorative animations | Purposeful interaction feedback |
| Multiple competing primary actions | Clear action hierarchy |
| Marketing-heavy copy | Direct, task-oriented language |


# Hard UI rules

Avoid unnecessary secondary labels and descriptions. Let the layout do the explaining.
No Rounded card with a colored left-border accent
No emoji as icons or bullets in the UI
No gradient
No pill badges or eyebrow tags above headlines.
No glassmorphism, blur, or glow.
No decorative shadows; shadows only on floating layers, using existing component styles.
No icon in a colored rounded square, and no decorative icons.
No centered-everything layouts.
No three-up feature grids.
No cards inside cards, and no card where spacing would do.
No hero filler (blobs, 3D shapes, tilted screenshots).
No fake content (logos, testimonials, stats, lorem ipsum).
No decorative motion (scroll fade-ins, parallax, shimmer).
No hover scale or lift.
No marketing-adjective copy.
No placeholder-as-label, and no vague errors.
One primary button per view, with outcome-named labels.
No generic framework palette or typeface; use the existing ONEdesign theme and typography, with one accent color for one purpose.
Reuse existing components wherever possible. Do not create new components unless no existing component can meet the need.
Place secondary explanations, complementary details, definitions, and contextual guidance behind an information (ⓘ) icon or another appropriate disclosure control.

# Review before delivery

Confirm that existing components and variants were reused, no internal styling or theme values were overridden, design intent and accessibility were preserved, and any system-level discrepancies were reported rather than silently fixed.
