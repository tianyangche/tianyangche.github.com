# Design QA — editorial portfolio redesign

## Comparison target

- Source visual truth: `/Users/tianyangche/.codex/generated_images/019fde5c-ed7a-7ae1-8cec-1b7a9d26977d/exec-3070b74a-0430-448a-a822-5d0bda64f6b8.png`
- Implementation: `http://localhost:5173/career` (browser-rendered capture reviewed in this task)
- Desktop viewport: 1440 × 1024 CSS px, device scale factor 1.
- Mobile viewport: 390 × 844 CSS px, device scale factor 1.
- State: Career route, default active navigation state.

## Findings

### First comparison

- [P1] Career hierarchy was not faithful to the reference.
  - Evidence: the first rendering used the heading “Engineer” and experience descriptions fell below the main three-column rhythm.
  - Fix: changed the page heading to “Career,” added the “Selected experience” eyebrow, and made each experience row a three-column grid with its impact notes in the right column.

### Post-fix comparison

No actionable P0, P1, or P2 differences remain. The implementation now matches the reference’s key visual language: warm paper background, serif display type, restrained green metadata, hairline dividers, compact wordmark treatment, and an editorial two-column career timeline. The implementation deliberately keeps the real, longer career copy instead of replacing it with the mock’s fictional summaries.

## Required fidelity surfaces

- **Fonts and typography:** Newsreader supplies the high-contrast editorial display face; DM Sans provides the quiet, readable UI and body text. Heading scale, metadata sizing, and navigation hierarchy were checked at desktop and mobile widths.
- **Spacing and layout rhythm:** desktop rendering uses the source’s broad side margins, generous title area, thin divider rhythm, and three-column experience rows. Mobile collapses cleanly to logo, role, date, then notes without horizontal overflow.
- **Colors and visual tokens:** off-white paper (`#f7f5ef`), charcoal ink, warm-gray rules, and a restrained moss-green accent replace the former dark neon palette.
- **Image quality and asset fidelity:** existing company logos are retained as supplied raster assets and displayed as compact monochrome marks. No replacement illustration, custom SVG, or placeholder asset was introduced.
- **Copy and content:** real company history, dates, role names, and impact details remain intact; the NVIDIA entry remains the current role.

## Interaction checks

- Verified About → Career navigation returns to `/career`.
- No browser console errors were present; only React Router future-flag warnings appeared.
- Production build passed with `npm run build`.
- Whitespace check passed with `git diff --check`.

## Follow-up polish

- [P3] Consider shortening selected experience bullets if an even airier career page is desired.

final result: passed
