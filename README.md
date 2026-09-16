# Iceland — Geoff & Liz

A countdown to Geoff and Liz's Iceland trip, with a different hand-drawn
animated scene for every day of the wait.

Live: https://rockowitzks41.github.io/iceland-countdown/

## Changing the date

Open `index.html`, find the block marked `EDIT ME` near the top of the
`<script>`, and edit:

```js
var TRIP   = new Date(2026, 8, 30, 0, 0, 0);  // months are 0-indexed: 8 = September
var ANCHOR = new Date(2026, 8, 15, 0, 0, 0);  // when the countdown started
```

`ANCHOR` only drives the "% of the wait is behind you" bar.

## Scenes

`scenes.js` holds 15 scenes as inline SVG. The one shown is picked by how
many days are left, so it changes at local midnight. Index 0 is the arrival
scene and shows on the day itself. Arrow keys (or the on-screen arrows)
browse the rest.
