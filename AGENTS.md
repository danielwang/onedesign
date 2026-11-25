# Repository guidance

## Project

ONEdesign is the documentation website for the nebulaONE design system. It uses Docusaurus 3, React 19, TypeScript, Markdown/MDX, and npm. Deployment targets GitHub Pages at `https://danielwang.github.io/onedesign/`.

Read the relevant source before changing it. Keep changes focused on the requested task and preserve unrelated working-tree edits.

## Design System

- Read [DESIGN.repository.md](./DESIGN.repository.md) in full before making UI changes.
- Follow DESIGN.md for design intent, component selection,
  composition, interaction patterns and accessibility.
- Inspect the existing component library, application theme
  and established UI patterns before implementation.
- Use existing components and their supported variants.
- Treat the shared component library and application theme
  as the source of truth for component implementation.
- Do not override internal component styling to match DESIGN.md.
- Do not introduce hardcoded values when existing tokens
  or component variants are available.
- Report design system discrepancies instead of silently
  correcting them.
- Do not modify shared components or theme definitions
  unless explicitly requested.
