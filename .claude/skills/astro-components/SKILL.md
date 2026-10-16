---
name: astro-components
description: Astro component conventions and best practices. Use when creating or modifying .astro files in web/, working with Astro props, Tailwind CSS styling, or composing pages from the UI primitives.
---

# Astro Components Rules

## Props Definition

If a component has props, define a `Props` type and destructure from `Astro.props`:

```ts
type Props = {
  title: string;
};

const { title } = Astro.props;
```

Reuse existing types from `web/src/types.ts` instead of redefining them.

## Styling

Always use Tailwind CSS. When a tag has many classes, group them with `class:list` and inline comments:

```astro
<div class:list={[
  'flex flex-col', // Layout
  'p-4 gap-2',  // Spacing
  'bg-white rounded shadow-md',  // Visual
]}>
```

## Custom Components

### UI primitives

Build pages from the primitives in `web/src/components/ui/` (`Container`, `PageSection`, `SectionHeader`, `Button`, …) instead of new one-off styles.

### Images

Use Astro's `<Image />` from `astro:assets` and always pass a descriptive `alt`.

### Markdown content

Render content collection entries with `render()` from `astro:content` inside a `prose` container.
