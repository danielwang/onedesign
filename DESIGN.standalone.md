---
version: 2.0.0 beta
last date: Nov 24 2026
name: ONEdesign
description: The standalone version teaches AI how to design without access to the existing system.
mode: standalone
colors:
  primitive:
    white: '#FFFFFF'
    black: '#1E2529'
    grey-100: '#F9FAFB'
    grey-200: '#ECF0F3'
    grey-300: '#DFE2E8'
    grey-400: '#C4CDD5'
    grey-500: '#919EAB'
    grey-600: '#637381'
    grey-700: '#454F5B'
    grey-800: '#212B36'
    grey-900: '#161C24'
    blue-light: '#37C5F0'
    blue: '#4759A7'
    blue-dark: '#000041'
    purple: '#6B52A2'
    success-light: '#66DE77'
    success-main: '#0F913B'
    success-dark: '#07683B'
    success-subtle: '#0F913B29'
    warning-light: '#F8C46D'
    warning-main: '#E88310'
    warning-dark: '#A74D08'
    error-light: '#F38A7D'
    error-main: '#D82934'
    error-dark: '#9B1435'
    error-subtle: '#FDE0D4'
    info-light: '#91E7EF'
    info-main: '#44ADDA'
    info-dark: '#1B76AC'
    viz-astronaut-blue: '#003F5C'
    viz-barf-green: '#A1A600'
    viz-burnt-yellow: '#DFA800'
    viz-carmine-pink: '#F95D6A'
    viz-celtic-blue: '#096ADC'
    viz-irish-green: '#0F913B'
    viz-lavender: '#665191'
    viz-lavender-blue: '#9CBAEC'
    viz-lime-green: '#43982C'
    viz-mango: '#FF7C43'
    viz-medium-turquoise: '#37C5F0'
    viz-muddy-yellow: '#C0A700'
    viz-navy-blue: '#2F4B7C'
    viz-onion-green: '#649E1A'
    viz-orange: '#FFA600'
    viz-pea-green: '#83A200'
    viz-periwinkle-blue: '#6DA2FA'
    viz-picton-blue: '#41B6FA'
    viz-pink-lemonade: '#E32F6C'
    viz-plum: '#A05195'
    viz-raspberry: '#D45087'
    viz-rich-lilac: '#C36DCD'
    viz-rose-madder: '#D82934'
    brand-grey: '#767676'
    client-color-1: '#16213E'
    client-color-2: '#EFC07B'
  semantic:
    surface: '{colors.primitive.white}'
    surface-subtle: '{colors.primitive.grey-100}'
    surface-muted: '{colors.primitive.grey-200}'
    text: '{colors.primitive.grey-900}'
    text-muted: '{colors.primitive.grey-600}'
    text-subtle: '{colors.primitive.grey-500}'
    text-on-primary: '{colors.primitive.white}'
    border: '{colors.primitive.grey-300}'
    border-strong: '{colors.primitive.grey-400}'
    action-hover: '{colors.primitive.blue-dark}'
    action-disabled: '{colors.primitive.grey-400}'
    button-primary: '{colors.primitive.grey-800}'
    button-neutral: '{colors.primitive.grey-300}'
    button-outline: '{colors.primitive.grey-600}'
    button-destructive-surface: '{colors.primitive.error-subtle}'
    button-success-surface: '{colors.primitive.success-subtle}'
    button-success-text: '{colors.primitive.success-dark}'
    success: '{colors.primitive.success-main}'
    warning: '{colors.primitive.warning-main}'
    error: '{colors.primitive.error-main}'
    info: '{colors.primitive.info-main}'
    focus: '{colors.primitive.blue-light}'
    data-1: '{colors.primitive.blue}'
    data-2: '{colors.primitive.purple}'
    data-3: '{colors.primitive.info-main}'
    data-4: '{colors.primitive.success-main}'
    data-5: '{colors.primitive.warning-main}'
    data-viz-1: '{colors.primitive.viz-astronaut-blue}'
    data-viz-2: '{colors.primitive.viz-celtic-blue}'
    data-viz-3: '{colors.primitive.viz-lavender}'
    data-viz-4: '{colors.primitive.viz-irish-green}'
    data-viz-5: '{colors.primitive.viz-orange}'
    primary: '{colors.primitive.blue}'
typography:
  primitive:
    family-sans: Segoe UI, system-ui, -apple-system, sans-serif
    family-mono: SFMono-Regular, ui-monospace, Consolas, Menlo, monospace
    weight-regular: 400
    weight-medium: 600
    weight-bold: 700
  heading-1:
    family: Segoe UI
    size: 64px
    weight: 700
    line-height: 80px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  heading-2:
    family: Segoe UI
    size: 48px
    weight: 700
    line-height: 64px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  heading-3:
    family: Segoe UI
    size: 32px
    weight: 700
    line-height: 48px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  heading-4:
    family: Segoe UI
    size: 24px
    weight: 700
    line-height: 36px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  heading-5:
    family: Segoe UI
    size: 20px
    weight: 700
    line-height: 30px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  heading-6:
    family: Segoe UI
    size: 14px
    weight: 700
    line-height: 21px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: capitalize
  body:
    family: Segoe UI
    size: 16px
    weight: 400
    line-height: 24px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  body-small:
    family: Segoe UI
    size: 14px
    weight: 400
    line-height: 22px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  label:
    family: Segoe UI
    size: 16px
    weight: 600
    line-height: 24px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  caption:
    family: Segoe UI
    size: 12px
    weight: 400
    line-height: 18px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  control:
    family: Segoe UI
    size: 14px
    weight: 600
    line-height: 22px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  link:
    family: Segoe UI
    size: 14px
    weight: 400
    line-height: 16.8px
    letter-spacing: 0px
    text-decoration: underline
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: none
  overline:
    family: Segoe UI
    size: 12px
    weight: 700
    line-height: 18px
    letter-spacing: 0px
    text-decoration: none
    font-style: normal
    font-stretch: normal
    paragraph-indent: 0px
    paragraph-spacing: 0px
    text-case: uppercase
  component:
    button-small:
      family: Segoe UI
      size: 12px
      weight: 700
      line-height: 22px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    button-medium:
      family: Segoe UI
      size: 14px
      weight: 700
      line-height: 24px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    label-text:
      family: Segoe UI
      size: 14px
      weight: 600
      line-height: 20px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    button-large:
      family: Segoe UI
      size: 15px
      weight: 700
      line-height: 26px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    avatar-group:
      family: Segoe UI
      size: 12px
      weight: 400
      line-height: 18px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    carousel-text:
      family: Segoe UI
      size: 20px
      weight: 400
      line-height: 36px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    settings-label:
      family: Segoe UI
      size: 12px
      weight: 400
      line-height: 18px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    chart-legend:
      family: Segoe UI
      size: 12px
      weight: 400
      line-height: 24px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    chip-text-sm:
      family: Segoe UI
      size: 12px
      weight: 400
      line-height: 18px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    chip-text-md:
      family: Segoe UI
      size: 14px
      weight: 400
      line-height: 20px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    table-head:
      family: Segoe UI
      size: 14px
      weight: 600
      line-height: 24px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    input-label:
      family: Segoe UI
      size: 14px
      weight: 400
      line-height: 14px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    nav-subheader:
      family: Segoe UI
      size: 12px
      weight: 700
      line-height: 18px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: uppercase
    nav-item-default:
      family: Segoe UI
      size: 14px
      weight: 400
      line-height: 22px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    nav-item-active:
      family: Segoe UI
      size: 14px
      weight: 600
      line-height: 22px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    nav-item-mini-default:
      family: Segoe UI
      size: 10px
      weight: 400
      line-height: 16px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    nav-item-mini-active:
      family: Segoe UI
      size: 10px
      weight: 600
      line-height: 16px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
    dialog-title:
      family: Segoe UI
      size: 18px
      weight: 700
      line-height: 21.6px
      letter-spacing: 0px
      text-decoration: none
      font-style: normal
      font-stretch: normal
      paragraph-indent: 0px
      paragraph-spacing: 0px
      text-case: none
  display: '{typography.heading-1}'
spacing:
  primitive:
    '4': 4px
    '6': 6px
    '8': 8px
    '12': 12px
    '16': 16px
    '24': 24px
    '32': 32px
    '48': 48px
    '64': 64px
    '96': 96px
  3xs: '{spacing.primitive.4}'
  2xs: '{spacing.primitive.6}'
  xs: '{spacing.primitive.8}'
  sm: '{spacing.primitive.12}'
  md: '{spacing.primitive.16}'
  lg: '{spacing.primitive.24}'
  xl: '{spacing.primitive.32}'
  2xl: '{spacing.primitive.48}'
  3xl: '{spacing.primitive.64}'
  4xl: '{spacing.primitive.96}'
rounded:
  primitive:
    xs: 4px
    sm: 6px
    md: 8px
    lg: 12px
    pill: 9999px
  control: '{rounded.primitive.md}'
  card: '{rounded.primitive.lg}'
  pill: '{rounded.primitive.pill}'
elevation:
  primitive:
    shadow-1: '0 1px 2px 0 #919EAB29'
    shadow-4: '0 4px 8px 0 #919EAB29'
    shadow-8: '0 8px 16px 0 #919EAB29'
    shadow-12: '0 12px 24px -4px #919EAB29'
    shadow-16: '0 16px 32px -4px #919EAB29'
    shadow-20: '0 20px 40px -4px #919EAB29'
    shadow-24: '0 24px 48px 0 #919EAB29'
    shadow-card: '0 0 16px 0 #919EAB33'
    shadow-dialog: '-40px 40px 80px -8px #0000003D'
    shadow-dropdown: '-20px 20px 40px -4px #919EAB3D, 0 0 2px 0 #919EAB3D'
    shadow-drawer-left: '40px 40px 80px -8px #919EAB3D'
    shadow-drawer-right: '-40px 40px 80px -8px #919EAB3D'
  low: '{elevation.primitive.shadow-4}'
  medium: '{elevation.primitive.shadow-8}'
  high: '{elevation.primitive.shadow-24}'
  z-base: 0
  z-sticky: 100
  z-dropdown: 200
  z-overlay: 300
  z-dialog: 400
  z-toast: 500
  card: '{elevation.primitive.shadow-card}'
  dialog: '{elevation.primitive.shadow-dialog}'
  dropdown: '{elevation.primitive.shadow-dropdown}'
  drawer-left: '{elevation.primitive.shadow-drawer-left}'
  drawer-right: '{elevation.primitive.shadow-drawer-right}'
motion:
  primitive:
    duration-fast: 120ms
    duration-standard: 200ms
    duration-slow: 320ms
    easing-standard: cubic-bezier(0.2, 0, 0, 1)
    easing-emphasized: cubic-bezier(0.2, 0, 0, 1)
    easing-linear: linear
  feedback:
    duration: '{motion.primitive.duration-fast}'
    easing: '{motion.primitive.easing-standard}'
  transition:
    duration: '{motion.primitive.duration-standard}'
    easing: '{motion.primitive.easing-standard}'
  entrance:
    duration: '{motion.primitive.duration-slow}'
    easing: '{motion.primitive.easing-emphasized}'
  exit:
    duration: '{motion.primitive.duration-standard}'
    easing: '{motion.primitive.easing-standard}'
breakpoints:
  primitive:
    mobile: 0px
    tablet: 768px
    desktop: 1024px
    wide: 1440px
  content-max: 1200px
  reading-max: 720px
  gutter-mobile: 16px
  gutter-tablet: 24px
  gutter-desktop: 32px
components:
  primitive:
    border-width: 1px
    focus-width: 2px
    control-height: 40px
    touch-target: 44px
  button:
    radius: '{rounded.control}'
    icon-gap: '{spacing.xs}'
    large:
      height: 48px
      padding-inline: '{spacing.lg}'
      text-size: '{typography.component.button-large.size}'
      text-line-height: '{typography.component.button-large.line-height}'
      text: '{typography.component.button-large}'
    medium:
      height: 36px
      padding-inline: '{spacing.md}'
      text-size: '{typography.component.button-medium.size}'
      text-line-height: '{typography.component.button-medium.line-height}'
      text: '{typography.component.button-medium}'
    small:
      height: 30px
      padding-inline: '{spacing.sm}'
      text-size: '{typography.component.button-small.size}'
      text-line-height: '{typography.component.button-small.line-height}'
      text: '{typography.component.button-small}'
    text-weight: '{typography.component.button-medium.weight}'
    focus: '{colors.semantic.focus}'
  input:
    radius: '{rounded.control}'
    height: '{components.primitive.control-height}'
    text: '{typography.body-small}'
    border: '{colors.semantic.border}'
  card:
    radius: '{rounded.card}'
    border: '{colors.semantic.border}'
    elevation: '{elevation.card}'
    padding: '{spacing.lg}'
  focus-ring:
    color: '{colors.semantic.focus}'
    width: '{components.primitive.focus-width}'
    offset: 2px
token-source: design-tokens.tokens.json
provenance:
  verified-color-primitives:
  - blue-light
  - blue
  - blue-dark
  - purple
  - black
  - brand-grey
  - client-color-1
  - client-color-2
  supplemental-color-primitives:
  - white
  - grey-100
  - grey-200
  - grey-300
  - grey-400
  - grey-500
  - grey-600
  - grey-700
  - grey-800
  - grey-900
  - success-light
  - success-main
  - success-dark
  - success-subtle
  - warning-light
  - warning-main
  - warning-dark
  - error-light
  - error-main
  - error-dark
  - error-subtle
  - info-light
  - info-main
  - info-dark
  - viz-astronaut-blue
  - viz-barf-green
  - viz-burnt-yellow
  - viz-carmine-pink
  - viz-celtic-blue
  - viz-irish-green
  - viz-lavender
  - viz-lavender-blue
  - viz-lime-green
  - viz-mango
  - viz-medium-turquoise
  - viz-muddy-yellow
  - viz-navy-blue
  - viz-onion-green
  - viz-orange
  - viz-pea-green
  - viz-periwinkle-blue
  - viz-picton-blue
  - viz-pink-lemonade
  - viz-plum
  - viz-raspberry
  - viz-rich-lilac
  - viz-rose-madder
  supplemental-sections:
  - colors.semantic
  - spacing
  - rounded
  - motion
  - breakpoints
  - components.primitive
  - components.button geometry
  - components.input geometry
  - components.card geometry
  - components.focus-ring geometry
  - elevation z-index
  - typography.primitive.family-mono
  - font fallback stack
  note: Supplemental values are inherited guidance, not verified JSON tokens; semantic aliases are local mappings.
  web-typography-source-map:
    h1: heading-1
    h2: heading-2
    h3: heading-3
    h4: heading-4
    h5: heading-5
    h6: heading-6
    body1: body
    body2: body-small
    subtitle1: label
    subtitle2: control
    caption: caption
    link: link
    overline: overline
grid:
  pattern: columns
  gutterSize: 24
  alignment: stretch
  count: 12
  offset: 0
---

# Overview

This design system defines portable guidance for creating clear, consistent, accessible digital interfaces. It covers visual language, content hierarchy, layout, depth, motion, and interaction foundations. It is specific to the ONEdesign visual language while remaining independent of frontend frameworks and component libraries.

The system is guided by clarity, consistency, purposeful restraint, accessibility by default, progressive disclosure, and evidence-based adaptation. Interfaces should feel calm, useful, precise, welcoming, and dependable. Product teams may adapt brand colors, content widths, and component details when documented decisions preserve the principles and accessibility requirements here.

The default accessibility target is WCAG 2.2 AA. Product-dependent decisions are adaptable defaults; they must be validated against the actual content, language, input methods, and user needs of each product.

# Standalone scope and usage

Use this version when the AI environment cannot inspect the actual application theme or shared component library, such as standalone prototyping or concept generation. The embedded token snapshot provides portable visual defaults. It is not authority to modify an existing implementation.

If repository components and theme are available, use the repository-aware DESIGN.md instead. Prefer existing components and variants; do not apply these standalone values as overrides. Treat prototype-only components and supplemental values as provisional until mapped to the actual app. Do not claim a prototype matches Figma or production without verification.

# Design token governance

`design-tokens.tokens.json` is the authoritative source for exported token values. If a conflict exists, the JSON takes precedence. The YAML provenance register identifies inherited supplemental values and local semantic mappings that are not verified by the export. Do not treat these as Figma-exported tokens or invent missing values. Validate the export and all references before each release. Opaque eight-digit hex colors are normalized to six digits; alpha is preserved for translucent colors. Font fallback stacks are implementation guidance.

The JSON contains a paper blur style without a numeric value; no blur token is inferred. The hard UI rules restrict use of exported effects even when those effects exist in the source.

# Colors

## Architecture

Use primitive tokens as the source palette and semantic tokens as the role-based interface contract. Product surfaces should reference semantic roles such as `{colors.semantic.surface}` and `{colors.semantic.text}`, not raw palette values. This allows themes and product adaptations without changing component intent.

## Brand palette additions

| Token | Value |
|---|---|
| `colors.primitive.brand-grey` | `#767676` |
| `colors.primitive.client-color-1` | `#16213E` |
| `colors.primitive.client-color-2` | `#EFC07B` |

Client colors are available for approved client branding, not default UI accents.

## Token roles

| Token | Resolved value | Intended use |
|---|---|---|
| `{colors.semantic.surface}` | `#FFFFFF` | Default page and component surface |
| `{colors.semantic.surface-subtle}` | `#F9FAFB` | Quiet grouping surface |
| `{colors.semantic.surface-muted}` | `#ECF0F3` | Secondary panels and disabled backgrounds |
| `{colors.semantic.text}` | `#161C24` | Primary readable text |
| `{colors.semantic.text-muted}` | `#637381` | Supporting text and descriptions |
| `{colors.semantic.text-subtle}` | `#919EAB` | Non-essential metadata only |
| `{colors.semantic.border}` | `#DFE2E8` | Default separators and outlines |
| `{colors.semantic.border-strong}` | `#C4CDD5` | Emphasized boundaries |
| `{colors.semantic.primary}` | `#4759A7` | Brand emphasis and selected states; primary button uses its dedicated role |
| `{colors.semantic.action-hover}` | `#000041` | Hover and pressed emphasis |
| `{colors.semantic.focus}` | `#37C5F0` | Keyboard focus indicator |
| `{colors.semantic.success}` | `#0F913B` | Successful or complete state |
| `{colors.semantic.warning}` | `#E88310` | Caution requiring attention |
| `{colors.semantic.error}` | `#D82934` | Error, invalid, or destructive state |
| `{colors.semantic.info}` | `#44ADDA` | Informational state |
| `{colors.semantic.data-1}`–`{colors.semantic.data-5}` | `#4759A7`, `#6B52A2`, `#44ADDA`, `#0F913B`, `#E88310` | Ordered data series |

Use color roles consistently for surfaces, text, borders, actions, feedback, focus, and data visualization. Every feedback state must also have a text label, icon, pattern, or other non-color cue. Do not use color alone to communicate status, selection, required fields, errors, or data categories.

## Data-visualization color palette

Use the color palette below for categorical series, charts, maps, and dashboards. Start at the first color and add colors only as needed. For sequential data, use a documented light-to-dark ramp derived from one hue rather than treating categorical colors as a scale.

| Token | Name | Resolved value | Intended use |
|---|---|---|---|
| `{colors.primitive.viz-astronaut-blue}` | Astronaut Blue | `#003F5C` | First series or strongest baseline |
| `{colors.primitive.viz-barf-green}` | Barf Green | `#A1A600` | Secondary categorical series |
| `{colors.primitive.viz-burnt-yellow}` | Burnt Yellow | `#DFA800` | Highlighted comparison |
| `{colors.primitive.viz-carmine-pink}` | Carmine Pink | `#F95D6A` | Alerting or contrasting series |
| `{colors.primitive.viz-celtic-blue}` | Celtic Blue | `#096ADC` | Blue categorical series |
| `{colors.primitive.viz-irish-green}` | Irish Green | `#0F913B` | Positive or growth series |
| `{colors.primitive.viz-lavender}` | Lavender | `#665191` | Purple categorical series |
| `{colors.primitive.viz-lavender-blue}` | Lavender Blue | `#9CBAEC` | Light secondary series |
| `{colors.primitive.viz-lime-green}` | Lime Green | `#43982C` | Green comparison series |
| `{colors.primitive.viz-mango}` | Mango | `#FF7C43` | Warm comparison series |
| `{colors.primitive.viz-medium-turquoise}` | Medium Turquoise | `#37C5F0` | Accent series |
| `{colors.primitive.viz-muddy-yellow}` | Muddy Yellow | `#C0A700` | Yellow comparison series |
| `{colors.primitive.viz-navy-blue}` | Navy Blue | `#2F4B7C` | Dark blue series |
| `{colors.primitive.viz-onion-green}` | Onion Green | `#649E1A` | Green comparison series |
| `{colors.primitive.viz-orange}` | Orange | `#FFA600` | Warm accent series |
| `{colors.primitive.viz-pea-green}` | Pea Green | `#83A200` | Green comparison series |
| `{colors.primitive.viz-periwinkle-blue}` | Periwinkle Blue | `#6DA2FA` | Light blue series |
| `{colors.primitive.viz-picton-blue}` | Picton Blue | `#41B6FA` | Bright blue series |
| `{colors.primitive.viz-pink-lemonade}` | Pink Lemonade | `#E32F6C` | Pink comparison series |
| `{colors.primitive.viz-plum}` | Plum | `#A05195` | Purple comparison series |
| `{colors.primitive.viz-raspberry}` | Raspberry | `#D45087` | Pink comparison series |
| `{colors.primitive.viz-rich-lilac}` | Rich Lilac | `#C36DCD` | Light purple series |
| `{colors.primitive.viz-rose-madder}` | Rose Madder | `#D82934` | Red or critical series |

Test adjacent series for distinguishability and provide a legend, direct labels, or both. Do not encode a single value with red/green alone; use labels, symbols, patterns, or position as additional cues. Text and essential marks must still meet the applicable WCAG 2.2 AA contrast requirement against their background.

Text and meaningful UI graphics must meet WCAG 2.2 AA contrast: at least 4.5:1 for normal text, 3:1 for large text, and 3:1 for essential graphical objects and user-interface components. Focus indicators must be clearly visible and should provide at least 3:1 contrast against adjacent colors. Check contrast on the actual surface, including themes and state changes.

# Typography

The default family is `{typography.primitive.family-sans}`. Use the first available font, then the system sans-serif fallback. Use `{typography.primitive.family-mono}` only for code, identifiers, or tabular technical values. Do not rely on a custom font being installed.

| Token | Size | Weight | Line height | Letter spacing | Use |
|---|---:|---:|---:|---:|---|
| `{typography.display}` | 64px | 700 | 80px | 0px | Alias of heading-1; rare page-level display |
| `{typography.heading-1}` | 64px | 700 | 80px | 0px | Primary page heading |
| `{typography.heading-2}` | 48px | 700 | 64px | 0px | Major section heading |
| `{typography.heading-3}` | 32px | 700 | 48px | 0px | Subsection heading |
| `{typography.heading-4}` | 24px | 700 | 36px | 0px | Component or content group heading |
| `{typography.heading-5}` | 20px | 700 | 30px | 0px | Compact heading |
| `{typography.heading-6}` | 14px | 700 | 21px | 0px | Small heading; source text case: capitalize |
| `{typography.body}` | 16px | 400 | 24px | 0px | Default reading text |
| `{typography.body-small}` | 14px | 400 | 22px | 0px | Supporting or dense text |
| `{typography.label}` | 16px | 600 | 24px | 0px | Alias of subtitle1; prominent metadata, not form labels |
| `{typography.control}` | 14px | 600 | 22px | 0px | Alias of subtitle2; generic compact text, not button labels |
| `{typography.caption}` | 12px | 400 | 18px | 0px | Supplementary metadata |
| `{typography.link}` | 14px | 400 | 16.8px | 0px | Underlined link |
| `{typography.overline}` | 12px | 700 | 18px | 0px | Uppercase overline; not decorative eyebrow tags |

Use one semantic heading level per hierarchy; do not choose a heading only for its visual size. Maintain readable line lengths, preferably `{breakpoints.reading-max}` or less for long-form text. Do not set essential information in all caps, overly tight tracking, or text smaller than 12px, except the exported 10px mini-navigation style for non-essential labels with accessible names and verified readability. Text must remain usable when zoomed to 200% and when users increase text spacing.

## Component typography

All styles use Segoe UI. Use the component-specific style instead of a generic label or control alias. Source text-case and decoration properties are retained in YAML.

| Token | Size | Weight | Line height | Text case |
|---|---:|---:|---:|---|
| `typography.component.button-small` | 12px | 700 | 22px | none |
| `typography.component.button-medium` | 14px | 700 | 24px | none |
| `typography.component.label-text` | 14px | 600 | 20px | none |
| `typography.component.button-large` | 15px | 700 | 26px | none |
| `typography.component.avatar-group` | 12px | 400 | 18px | none |
| `typography.component.carousel-text` | 20px | 400 | 36px | none |
| `typography.component.settings-label` | 12px | 400 | 18px | none |
| `typography.component.chart-legend` | 12px | 400 | 24px | none |
| `typography.component.chip-text-sm` | 12px | 400 | 18px | none |
| `typography.component.chip-text-md` | 14px | 400 | 20px | none |
| `typography.component.table-head` | 14px | 600 | 24px | none |
| `typography.component.input-label` | 14px | 400 | 14px | none |
| `typography.component.nav-subheader` | 12px | 700 | 18px | uppercase |
| `typography.component.nav-item-default` | 14px | 400 | 22px | none |
| `typography.component.nav-item-active` | 14px | 600 | 22px | none |
| `typography.component.nav-item-mini-default` | 10px | 400 | 16px | none |
| `typography.component.nav-item-mini-active` | 10px | 600 | 16px | none |
| `typography.component.dialog-title` | 18px | 700 | 21.6px | none |

# Layout

## Spacing

The spacing scale is based on a small set of repeatable values.

| Token | Resolved value | Typical use |
|---|---:|---|
| `{spacing.3xs}` | 4px | Fine icon or text adjustment |
| `{spacing.2xs}` | 6px | Compact internal gap |
| `{spacing.xs}` | 8px | Related control or label gap |
| `{spacing.sm}` | 12px | Small component padding |
| `{spacing.md}` | 16px | Default control and content gap |
| `{spacing.lg}` | 24px | Card padding and group separation |
| `{spacing.xl}` | 32px | Section-internal separation |
| `{spacing.2xl}` | 48px | Major group separation |
| `{spacing.3xl}` | 64px | Section separation |
| `{spacing.4xl}` | 96px | Page-level separation |

Use the smallest token that preserves clear grouping. Related items use smaller gaps; unrelated groups use larger gaps. Align content to a shared grid. The adaptable default grid is 12 columns with 24px gutters, stretch alignment and zero offset and a maximum content width of `{breakpoints.content-max}`.

On mobile, use `{breakpoints.gutter-mobile}` gutters and a single-column flow. At tablet widths, use `{breakpoints.gutter-tablet}` and allow two-column layouts where content remains readable. At desktop widths, use `{breakpoints.gutter-desktop}`, the 12-column grid, and up to `{breakpoints.content-max}` content width. Wide layouts may add whitespace without widening reading measures.

Interactive controls must provide at least `{components.primitive.touch-target}` square touch area, including when the visible icon is smaller. Avoid density that forces precision tapping, horizontal scrolling for ordinary content, or loss of context at narrow widths.

# Buttons

## Sizes

Use the large, medium, and small button sizes shown in the ONEdesign guideline. All sizes use `{components.button.radius}`, have a minimum visible width of 64px and centered content, and use `{components.button.icon-gap}` between an icon and its label.

| Size | Visible height | Horizontal padding | Label |
|---|---:|---:|---|
| Large | 48px | `{spacing.lg}` | Segoe UI Bold, 15px / 26px |
| Medium | 36px | `{spacing.md}` | Segoe UI Bold, 14px / 24px |
| Small | 30px | `{spacing.sm}` | Segoe UI Bold, 12px / 22px |

These are visible dimensions. Preserve the minimum `{components.primitive.touch-target}` interactive area when a button is smaller than 44px.

## Priority and hierarchy

Choose the button treatment by the importance of the action:

| Priority | Treatment | Guideline examples |
|---|---|---|
| High | Solid `{colors.semantic.button-primary}` fill with `{colors.semantic.text-on-primary}` label | Save |
| Medium | `{colors.semantic.button-neutral}` fill with `{colors.semantic.text}` label; contextual `{colors.semantic.button-destructive-surface}` fill with `{colors.semantic.error}` label; or `{colors.semantic.button-success-surface}` fill with `{colors.semantic.button-success-text}` label | Edit, Add, Delete, Save as draft |
| Low | `{colors.semantic.surface}` fill with 1px `{colors.semantic.button-outline}` border and `{colors.semantic.text}` label | Archive, Cancel |

Use the high-priority treatment for the main outcome of a view. Keep secondary and less consequential actions visually quieter. Labels should name the action or outcome; use an icon alongside text only when it helps identify the action.

# Elevation and depth

Use `{rounded.primitive.xs}`, `{rounded.primitive.sm}`, `{rounded.primitive.md}`, and `{rounded.primitive.lg}` for progressively larger or more prominent surfaces. Use `{rounded.pill}` only for pills, tags, or fully rounded controls. Default borders use `{components.primitive.border-width}` and `{colors.semantic.border}`; use `{colors.semantic.border-strong}` for boundaries that must remain visible without shadow.

Use `{elevation.card}` only for cards that genuinely float; ordinary cards use spacing or borders without shadows. Use `{elevation.dropdown}` for floating menus, `{elevation.dialog}` for dialogs, and `{elevation.drawer-left}` or `{elevation.drawer-right}` for floating drawers. Use generic elevation only for other floating layers when needed. Do not combine strong borders and heavy shadows without a clear hierarchy. Layering follows `{elevation.z-base}`, `{elevation.z-sticky}`, `{elevation.z-dropdown}`, `{elevation.z-overlay}`, `{elevation.z-dialog}`, and `{elevation.z-toast}`. Menus should sit above page content; dialogs should sit above overlays; transient notifications should remain above dialogs only when essential.

# Motion

Use `{motion.feedback}` for immediate state feedback, `{motion.transition}` for ordinary property changes, `{motion.entrance}` for meaningful entrances, and `{motion.exit}` for dismissals. Motion should clarify cause and effect, preserve spatial relationships, and never delay access to content or controls.

Respect reduced-motion preferences by removing non-essential movement, parallax, looping animation, and large transforms. Keep instant state changes and essential status feedback understandable without animation. Avoid decorative motion that distracts, causes discomfort, obscures content, or interferes with reading and input.

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

# Do’s and Don’ts

## Colors

- Do use semantic roles such as `{colors.semantic.primary}` and `{colors.semantic.error}`.
- Do verify contrast on every surface and interaction state.
- Do pair color with text, icons, patterns, or position.
- Don’t use raw primitives as undocumented component decisions.
- Don’t use low-contrast `{colors.semantic.text-subtle}` for essential information.

## Typography

- Do use `{typography.body}` for default reading content and a clear semantic heading hierarchy.
- Do keep long-form measures near `{breakpoints.reading-max}`.
- Don’t use size alone to communicate hierarchy.
- Don’t truncate essential content or rely on tiny captions to carry meaning.

## Layout and responsiveness

- Do use the spacing scale and align related content to shared edges.
- Do reflow content for mobile rather than simply shrinking desktop layouts.
- Do preserve `{components.primitive.touch-target}` targets.
- Don’t require horizontal scrolling for ordinary reading or forms.

## Components

- Do use `{components.card}` defaults as a starting point, applying its shadow only to floating cards and adapt only with a documented reason.
- Do reuse shared components and documented variants across the app so equivalent controls look and behave the same.
- Do provide clear hover, pressed, selected, disabled, and focus states, with consistent keyboard, pointer, and touch behaviour.
- Do propose shared component changes at their source rather than adding page-specific copies or overrides; only implement system changes when explicitly authorised.
- Don’t introduce one-off radii, shadows, or spacing values without a system-level need.
- Don’t create a new component when an existing component or variant can meet the need.

## Accessibility

- Do target WCAG 2.2 AA and test with keyboard, zoom, screen readers, touch, and high-contrast settings.
- Do keep focus visible using `{components.focus-ring}`.
- Do provide meaningful names, instructions, and error recovery.
- Don’t remove focus indicators or make color the only status cue.

## Forms and validation

- Do place labels before fields, describe expected formats, and preserve entered values after errors.
- Do associate errors with the relevant field and summarize them in a clear, readable way.
- Do distinguish required fields with text or a documented convention.
- Don’t validate only on color, placeholder text, or an icon without explanation.

## Motion

- Do use `{motion.feedback}` and `{motion.transition}` for purposeful feedback.
- Do honor reduced-motion preferences.
- Don’t use looping, flashing, parallax, or delayed transitions that interfere with usability.

## Hard UI rules

Avoid unnecessary secondary labels and descriptions. Let the layout do the explaining.
No Rounded card with a colored left-border accent
No emoji as icons or bullets in the UI
No gradient
No pill badges or eyebrow tags above headlines.
No glassmorphism, blur, or glow.
No decorative shadows; shadows only on floating layers, using the named source styles.
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
No generic framework palette or typeface; use the documented ONEdesign palette and typography, with one accent color for one purpose.
Reuse existing components wherever possible. Do not create new components unless no existing component can meet the need.
Place secondary explanations, complementary details, definitions, and contextual guidance behind an information (ⓘ) icon or another appropriate disclosure control.
