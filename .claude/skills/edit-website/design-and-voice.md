# Design and voice

The full rules for code are in the "Design system" section of `CLAUDE.md`; this is what matters for editors' changes.

## Voice

Professional and straightforward first, bold where it counts. Each line should say plainly what we do or what the client gets ("Designing the hyperloop journey before the first passenger boards"). Save the bolder, more personal lines for calls to action ("Tell us what you’re working on."). Short plain headings, one line per section, in the spirit of how Monks presents itself.

- Audience: decision makers at financial institutions, healthcare innovators and luxury brands choosing a creative partner.
- Sound like a sharp person talking, not a brochure. Lead with what the client gets, then how.
- No forced wit or jokes. Confidence comes from specifics, not puns or exclamation marks.
- Headings: short headings of up to about four words use Title Case ("Proof, Not Promises", "Our Expertise", "Branding Work", "How We Work"), as do buttons, navigation and card titles. Longer headings that read as sentences stay in sentence case ("Recent projects across brand, 3D and strategy", "Let’s talk about your project").
- Never use: clarity, "make it clear", seamless, elevate, unlock, empower, transform, crafted, cutting-edge, world-class, "in today’s world", "not just X but Y", or em dashes.
- British English (Singapore audience: "colour", "visualise"), short sentences, active voice. No emoji.
- Never invent clients, numbers, results or testimonials. Describe only what the work shows.
- Keep headings close to their current length; long headings wrap badly on phones.

## Look

- Never change colors, fonts, spacing or sizes as part of a content edit. If the editor asks for a visual change, explain that it changes the design system and check whether they want it in one place or everywhere.
- Palette from blackhat.agency: black ground, white text, yellow (`signal`) for the main action and small accents. One yellow button per view where possible.
- Mostly dark sections. On white or yellow sections all text is dark; never put yellow text on white.
- Work Sans for everything: semibold for main titles, medium at most elsewhere. A serif italic highlight (Source Serif) on one or two words of the most important headings only: write them as `*word*` in the data file. Today: “brands” (home hero), “trust” (Who we work with), “working on” (closing contact).
- New sections are built from `web/src/components/ui/` with their words in a data file. Use the `astro-components` skill and flag it on the pull request.

## Accessibility

- Every image needs alt text that says what it shows; decorative images get an empty alt.
- Link text says where it goes ("Start a project", not "click here").
- Don't put words inside images when they could be text on the page.
