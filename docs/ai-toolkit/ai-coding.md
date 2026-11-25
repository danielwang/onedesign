---
id: ai-coding
title: AI Coding UI
description: AI coding guide
sidebar_position: 1
hide_title: false
---

import MarkdownReader from '@site/src/components/MarkdownReader';
import repositoryDesign from '@site/src/generated/repositoryDesignMarkdown';
import standaloneDesign from '@site/src/generated/standaloneDesignMarkdown';

## Overview

ONEdesign provides AI-friendly design guidance for creating consistent nebulaONE interfaces. It helps AI agents make design decisions, reuse existing components and follow established UX and visual standards.

ONEdesign offers two versions of DESIGN.md for different development environments.

## Choose the right version

| | Repository-aware | Standalone |
|---|---|---|
| File | [`DESIGN.repository.md`](#repository-aware-designmd) | [`DESIGN.standalone.md`](#standalone-designmd) |
| Use case | Existing N1 app | New designs and prototypes |
| Typical tools | Codex, Claude Code | ChatGPT, Gemini, Figma Make, N1 |
| Design principles | Included | Included |
| Component selection | Included | Included |
| Visual tokens | References existing theme | Included |
| Component specifications | References existing library | Included |
| Anti-slop rules | Included | Included |

Choose the version based on whether your AI agent has access to the nebulaONE product component library and app theme.

## Repository-aware DESIGN.md

Use this version when developing or modifying UI within nebulaONE product repo.

It guides AI on **which components and patterns to use, rather than how components are built**.

<MarkdownReader content={repositoryDesign} filename="DESIGN.repository.md" title="Repository-aware DESIGN.md" />

### Installation

1. Download `DESIGN.repository.md`.
2. Place it in the repository root.
3. Add the following instructions to `AGENTS.md` or `CLAUDE.md`.

### Agent instructions

```markdown
- Read `DESIGN.repository.md` before making UI changes.
- Follow its design principles, component selection and interaction patterns.
- Reuse existing components and supported variants.
- Treat the application theme and component library as the source of truth for implementation.
- Do not override component styling or introduce unnecessary hardcoded values.
- Report design system discrepancies rather than silently correcting them.
- Do not modify shared components or theme tokens unless explicitly requested.
```

## Standalone DESIGN.md

Use this version when generating UI **without** access to the nebulaONE product codebase or component library.

It provides a self-contained design reference, including colours, typography, spacing, layout, component styling and interaction patterns.

<MarkdownReader content={standaloneDesign} filename="DESIGN.standalone.md" title="Standalone DESIGN.md" />

### Installation

Use any of the following methods:

- A. Download and attach `DESIGN.standalone.md` to your AI prompt.
- B. Rename it to `DESIGN.standalone.md` and place it in a new project's root.
- C. Include it as reference material in an AI skill.

### Agent instructions

```markdown
- Read `DESIGN.md` before generating UI.
- Follow the documented design tokens, visual direction, UX patterns and anti-slop rules.
- Reuse existing components wherever available.
- Centralise design tokens and component styling.
- Do not invent alternative visual styles or undocumented token values.
```

## Sources of truth

Each design system resource has a distinct responsibility.

| Resource | Responsibility |
|---|---|
| DESIGN.md | Design intent, component selection and UX patterns |
| Figma | Approved visual and component specifications |
| Design tokens JSON | Authoritative exported token values |
| Application theme | Runtime visual styling |
| Component library | Component implementation, variants and behaviour |

DESIGN.md complements these resources. It does not replace them.


## Version management

DESIGN.md is a living document that evolves alongside nebulaONE and its design system.

Both versions share the same design principles and release version. Developers should review the changelog before upgrading.

New releases must not trigger automatic modifications to existing components or theme definitions.


