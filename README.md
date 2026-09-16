# Iceland — Geoff & Liz

A countdown to Geoff and Liz's Iceland trip. A different hand-drawn animated
scene every day of the wait, a daily briefing, and live conditions in Reykjavík.

Live: https://rockowitzks41.github.io/iceland-countdown/

Static files only — no build step, no framework, no API keys. It can be served
from anywhere.

## Files

| File | What it holds |
|---|---|
| `index.html` | The whole page: markup, styles, and all the logic. |
| `scenes.js` | 15 animated scenes as inline SVG. |
| `daily.js` | One fact and one prep note per day of the countdown. |

## Changing the date

In `index.html`, find the block marked `EDIT ME` near the top of the `<script>`:

```js
var TRIP   = new Date(2026, 8, 30, 0, 0, 0);  // months are 0-indexed: 8 = September
var ANCHOR = new Date(2026, 8, 15, 0, 0, 0);  // when the countdown started
```

`ANCHOR` only drives the "% of the wait is behind you" bar.

## How it stays fresh

Two independent layers, on purpose.

**1. Self-updating (no moving parts).** Everything day-keyed is computed in the
browser from the days remaining, so it rolls over at local midnight whether or
not anything is running:

- the scene (`scenes.js`, picked by `daysLeft % 15`; index 0 is the arrival scene)
- the briefing (`daily.js`, keyed by exact day count, with `_fallback` for anything unlisted)

**2. Live data** fetched in the browser on each load, refreshed while the page
sits open:

- Reykjavík conditions — [Open-Meteo](https://open-meteo.com), no key
- Aurora forecast — [NOAA SWPC](https://services.swpc.noaa.gov) planetary K-index, no key

Both fail **soft**: if a request fails the card shows typical values and a plain
explanation rather than a dash or a broken-looking box. Neither is load-bearing.

**3. A daily agent run** layers something topical on top. Because layers 1 and 2
already cover every day, a missed run degrades to "yesterday's content plus live
weather" — never a dead page.

## Gotcha worth remembering

The countdown only repaints the scene and the briefing when the **day count
changes**, not every tick. So anything it paints has to be declared before
`tick()` is first called. Putting the bootstrap above those declarations left the
briefing permanently blank: `paintBriefing` is hoisted, but `briefSection` was
still `undefined`, so the one call that mattered bailed out — and `lastDays` was
already set by the time the next tick came round. The `tick()` call lives at the
bottom of the script for that reason.
