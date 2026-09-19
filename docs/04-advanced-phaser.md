# Optional Phaser task
Use this only when you already have a working browser-game setup, or during the optional clinic. Finish the Quest Board checkpoint first.

## Starting point
Phaser's official “Making your first Phaser 3 game”, completed Part 10, includes a platform game with stars, score and bouncing hazards. Obtain the source/assets from the official tutorial and follow its local-serving instructions. Keep the upstream license/attribution with any downloaded code.
- https://phaser.io/tutorials/making-your-first-phaser-3-game/part1
- https://phaser.io/tutorials/making-your-first-phaser-3-game/part10

Download and run the tutorial separately. This repository contains the task instructions; it does not include the Phaser runtime or assets. Ask for help if local setup blocks you.

## Candidate task: restart without carrying old state
Add a deliberate restart action after game over.
AC: score resets; player returns to its starting position; pickups and hazards reset to the intended initial state; physics and controls resume; repeated restart does not duplicate handlers; no unrelated mechanics change.
Ask the agent to inspect the completed example before deciding which state must be reset. Do not assume the exact file structure or invent an API.

## Evidence
Explain the plan, demonstrate lose → restart twice, demonstrate normal collection after restart, and show a focused diff. Add an automated check where the code can support one. Identify what is only manually verified.

Alternatively, define a health-bar or timed-run variation. Choose one. The learning goal stays brief → inspect → plan → implement → verify.
