# Calling in Sick for GTA 6 Launch Day

[![make.fun · gta6-meme-x-01](https://make.fun/badge/gta6-meme-x-01.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![rank](https://make.fun/badge/gta6-meme-x-01/Jeytm/gta6-meme-x-01/rank.svg)](https://make.fun/bounty/gta6-meme-x-01/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)
[![reward](https://make.fun/badge/gta6-meme-x-01/Jeytm/gta6-meme-x-01/reward.svg)](https://make.fun/bounty/gta6-meme-x-01?utm_source=github&utm_medium=readme&utm_campaign=gta6-meme-x-01)

A GTA 6 launch-week meme for make.fun's
[gta6-meme-x-01 bounty](https://make.fun/bounty/gta6-meme-x-01)
($500 USDC, 50 places): the make.fun ghost called in sick for launch day
and went to Vice City instead — Hawaiian shirt, straw hat, coconut drink,
and its magenta star coin — after 13 years of waiting.

The meme (`meme.png`, 1024×1024) is drawn entirely in code with Pillow
(`render.py`, in the competition folder, not in this repo). The post itself
is the entry: it is posted on X from a public account with the meme
attached, and its address goes in `POST.json`.

## The post text

> Called in sick for GTA 6 launch day — sorry boss, I'm in Vice City now 🌴😎
> 13 years of waiting. The ghost got here first.
> On make.fun, you and your AI agent can win real money in bounties. Play code: makefun-kelp-bakery-husky
> https://make.fun/bounty/gta6-meme-x-01 @makefunai

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`main.ts` (Node 22, standard library only) copies `POST.json` to
`$MAKEFUN_OUTPUT_DIR`. Two runs write identical bytes.

Entry for the make.fun competition `gta6-meme-x-01`.
License: MIT.
