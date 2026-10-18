# Design and voice

The full rules for code are in the "Design system" section of `CLAUDE.md`; this is what matters for editors' changes.

## Voice

- Audience: decision makers at financial institutions, healthcare innovators and luxury brands choosing a creative partner.
- Plain, confident and specific. Lead with the outcome for the client, then how. Prefer concrete details over adjectives ("powerful", "seamless", "world-class").
- British English (Singapore audience: "colour", "visualise"), short sentences, active voice. No exclamation marks, no emoji.
- Headings use sentence case. Buttons and navigation use sentence case ("Start a project").
- Keep headings close to their current length; long headings wrap badly on phones.

## Look

- Never change colors, fonts, spacing or sizes as part of a content edit. If the editor asks for a visual change, explain that it changes the design system and check whether they want it in one place or everywhere.
- Palette from blackhat.agency: black ground, white text, yellow (`signal`) for the main action and small accents. One yellow button per view where possible.
- Mostly dark sections. On white or yellow sections all text is dark; never put yellow text on white.
- One typeface, Zalando Sans, never heavier than medium.
- Never invent clients, numbers, results or testimonials. Describe only what the work shows.
- New sections are built from `web/src/components/ui/` with their words in a data file. Use the `astro-components` skill and flag it on the pull request.

## Accessibility

- Every image needs alt text that says what it shows; decorative images get an empty alt.
- Link text says where it goes ("Start a project", not "click here").
- Don't put words inside images when they could be text on the page.
