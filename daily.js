/* =============================================================
   Today's briefing — one fact and one prep note per day,
   keyed by how many days are left.

   Deterministic: the page picks the entry for the current day
   count, so it changes at local midnight with nothing to run.
   The daily agent job edits entries here to keep them current;
   if that job never runs, this file still carries the whole
   countdown, so the page can't go stale.

   `_fallback` covers any day count without its own entry.
   ============================================================= */
window.ICELAND_DAILY = {

  15: {
    fact: 'Iceland has no mosquitoes. Not "few" — none. It is one of the only inhabited places on earth that can say it, and nobody is entirely sure why, since neighbouring Greenland is thick with them.',
    tip:  'Start the layers pile. The useful test for a jacket is not warmth, it is whether it is actually waterproof and actually windproof — "water-resistant" loses badly here.'
  },

  14: {
    fact: 'About two thirds of the country lives in greater Reykjavík. Step an hour inland and the interior highlands are essentially uninhabited — no towns, no fuel, and in most places no road worth the name.',
    tip:  'Download offline maps for the south coast now. Mobile signal thins out fast once you are past Vík.'
  },

  13: {
    fact: 'Reykjavík is shedding daylight at about six and a half minutes a day. Today runs 12h57m; on the 30th, the day you land, it is 11h27m — sunrise 07:33, sunset 19:00. The dark half of the year is already back far enough that tonight carries a minor G1 aurora storm.',
    tip:  'Sketch the driving days against sunset rather than against distance. Eleven and a half hours of light sounds generous until one stop runs long and the last hour into Vík is done in the dark.'
  },

  12: {
    fact: 'Icelandic has drifted so little in a thousand years that modern speakers can pick up the medieval sagas and simply read them.',
    tip:  'Learn exactly one word: takk. Thanks. It covers an enormous amount of ground.'
  },

  11: {
    fact: 'There is no single Icelandic word for "please" — politeness lives in tone and in how you say thank you.',
    tip:  'Read the wind clause on your car hire insurance. Doors caught by a gust get torn off their hinges, it is specifically excluded from most basic cover, and it is common enough to have its own name.'
  },

  10: {
    milestone: 'Ten days',
    fact: 'Vatnajökull is the largest glacier in Europe by volume. It covers roughly eight percent of the entire country, and it is thick enough to have active volcanoes underneath it.',
    tip:  'Ten days out is the moment to book anything with a fixed slot — Blue Lagoon entry and glacier walks both sell out, and September is not as quiet as people expect.'
  },

  9: {
    fact: 'The Icelandic phone book is alphabetised by first name. Surnames are patronymics rather than family names — Jónsdóttir simply means "Jón’s daughter" — so they are not much use for sorting.',
    tip:  'If the Blue Lagoon is on the list, buy the ticket today. Entry is timed and the good slots go first.'
  },

  8: {
    fact: 'Iceland has no railways at all. Never has had a public one. Everything moves by road, and the Ring Road around the island is a little over 1,300 km.',
    tip:  'Charge-test your camera. Batteries drain much faster than you expect in cold wind, so bring spares and keep them in an inside pocket.'
  },

  7: {
    milestone: 'One week',
    fact: 'The island straddles the Mid-Atlantic Ridge, where the North American and Eurasian plates pull apart by roughly two centimetres a year. At Þingvellir you can walk down the gap between them.',
    tip:  'One week. Start the real pile next to the suitcase — the thing that stops you forgetting the gloves at 5am.'
  },

  6: {
    fact: 'Beer was illegal in Iceland until 1 March 1989. Spirits and wine were legal; beer specifically was not. The anniversary is still marked as Bjórdagur — beer day.',
    tip:  'Get into the habit of checking the aurora forecast now, so it is second nature by the time it matters. vedur.is runs the official one.'
  },

  5: {
    fact: 'Icelandic horses have a fifth gait called the tölt — so smooth that riders demonstrate it holding a full glass without spilling. Once a horse leaves the island it is never allowed back.',
    tip:  'Waterproof gloves and something that covers your ears. In Iceland the wind does the damage, not the temperature.'
  },

  4: {
    fact: 'Hallgrímskirkja took 41 years to build. Its front is shaped after the basalt columns you get when lava cools slowly — the same hexagons you will see at Reynisfjara.',
    tip:  'Do not bother hunting for cash. Cards work essentially everywhere, including remote car parks and toilets.'
  },

  3: {
    milestone: 'Three days',
    fact: 'There are around two sheep for every person. Through September they are rounded up off the highlands in the réttir — a sort of national sorting party that has run for centuries.',
    tip:  'Three days. Chargers, a type F plug adapter and 230V, and download something long for the flight.'
  },

  2: {
    fact: 'Reynisfjara’s black sand looks like the safest beach in the world and is not. Sneaker waves there arrive without warning, reach far further up than the previous twenty did, and have killed visitors.',
    tip:  'Two days. Screenshot every booking — do not rely on having signal when you need to show someone a reference number.'
  },

  1: {
    milestone: 'Tomorrow',
    fact: 'Keflavík airport sits in the middle of a lava field. The drive into Reykjavík is forty minutes of black rock and moss, and it is the single best first impression any airport road has ever managed.',
    tip:  'Tomorrow. Passports, chargers, and put the swimsuit somewhere you can reach without unpacking everything.'
  },

  0: {
    milestone: 'Today',
    fact: 'Góða ferð. Have a wonderful trip, both of you.',
    tip:  'Nothing left to prepare. Go.'
  },

  _fallback: {
    fact: 'Iceland sits just below the Arctic Circle, on the seam between two continental plates, and is still being built — new land surfaces there most decades.',
    tip:  'Plenty of time yet. Start a list.'
  }
};
