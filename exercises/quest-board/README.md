# Quest Board

Use a coding agent to complete a quest and award its XP once. Search, filters, pinning, and reset already work. The completion function is your task.

## Start

1. Extract the workshop ZIP or clone the repo.
2. Open `index.html` in a browser. You should see six quests.
3. Open `tests.html` and run all checks. The starting result is **11/18**: all 10 baseline checks pass and seven acceptance checks fail.
4. Start OpenCode in this `quest-board` folder, then read `WORKSHOP.md` and write `TASK-BRIEF.md`.
5. Ask the agent to inspect and plan before editing.

Quest Board runs without Node, npm packages, a server, an API key, or a database. OpenCode still needs model access. Follow the [readiness guide](../../docs/00-opencode-readiness.md) if that is not working.

Save edited files and refresh both browser tabs. Refreshing the app resets its state. The check page creates its own test state.

## Terminal checks

If Node is already installed, these run the same state checks as `tests.html`:

```sh
node check.cjs baseline
node check.cjs acceptance
node check.cjs all
```

Acceptance checks return a failing exit code until the feature is implemented. After the change, aim for 18/18 with the original assertions intact, then try the feature in the browser.

## Save a baseline

A clone already includes Git history. ZIP users can initialize Git once at the repository root using the readiness guide. Do not run `git init` inside this exercise folder.

Review `git status` and `git diff` before undoing changes. OpenCode file undo/redo needs Git. If Git is unavailable, keep an untouched copy and work in a duplicate.

## Files

| File | Purpose |
| --- | --- |
| `index.html`, `styles.css` | Page and styles |
| `game.js` | Quest data, state rules, and unfinished completion function |
| `app.js` | Rendering and browser interactions |
| `checks.js`, `check.cjs` | Checks and optional terminal runner |
| `tests.html`, `tests-ui.js` | Browser check runner |
| `WORKSHOP.md`, `TASK-BRIEF.md` | Instructions and your brief |
| `AGENTS.md` | Guidance for the coding agent |

## If something fails

- No quests: extract the whole folder and keep the filenames intact. Ask a volunteer to check browser errors.
- Complete does not work: that is the missing feature. Run the checks and read the task.
- Changes do not appear: save, refresh, and confirm you edited the same folder you opened.
- Node is missing: use `tests.html`.
- Model access fails: show the error to ARK and use the workshop fallback or pair up.

The app uses synthetic data in memory. It does not implement real multiplayer authorization or save progress between sessions. Gatekeeper is a separate hosted activity.

The workshop code is MIT licensed. The starting checks and direct local-file behavior were verified on 19 September 2026. Each attendee still needs to confirm their browser and OpenCode model access.
