# OpenCode readiness

Use this guide to open the workshop and confirm that OpenCode can read its files. Ask an ARK volunteer if a step is unfamiliar.

Workshop files: https://github.com/hackmanila/community-nights-night1

## Open the exercise

Clone the repository or download and extract its ZIP. Open `exercises/quest-board/index.html` and `tests.html` in a browser. Start OpenCode in the same exercise folder:

```sh
cd community-nights-night1/exercises/quest-board
opencode
```

Use your actual folder name; ZIP downloads usually end in `-main`. In OpenCode Desktop, select that exercise folder. A volunteer can help open it in a terminal.

## Install OpenCode if it is missing

Keep an installation that already works. Use the official download for your operating system at https://opencode.ai/docs/.

With Node/npm already installed:

```sh
npm install -g opencode-ai
```

With Homebrew already installed, the alternative is:

```sh
brew install anomalyco/tap/opencode
```

Run `opencode --version` to check the terminal installation. On Windows, ask for help with the official installer; setting up WSL is not part of this exercise.

## Select a model and check access

Use `/connect` to configure a provider and `/models` to choose a model. Desktop has equivalent controls. Select Big Pickle from OpenCode when it is available as free; its model ID is `opencode/big-pickle`.

Follow the account prompts. If you reach a payment request, login problem, or rate limit, ask the host for the workshop fallback or pair at a working laptop. Check before selecting a paid model or enabling automatic top-ups.

Big Pickle’s free-period terms permit collected data to improve the model. Use this public exercise rather than private code or records. Check current availability and terms at https://opencode.ai/docs/zen/.

<!-- pagebreak -->

# Save a baseline and check readiness

## Save the starting files

A clone includes Git history. Check it with `git log -1 --oneline`.

For a ZIP download, run these commands once from the repository root, before editing. The identity settings apply only to this local repository.

```sh
git init
git config user.name "Workshop Participant"
git config user.email "participant@example.invalid"
git add .
git commit -m "Workshop baseline"
cd exercises/quest-board
```

If Git is unavailable, keep an untouched extracted copy and work in a duplicate. OpenCode file undo/redo requires Git. Avoid creating another Git repository inside an exercise.

## Ask OpenCode to inspect the exercise

Select Plan. Tab switches Plan/Build in the default terminal interface. Read the mode label and permission requests. The project already has `AGENTS.md`, so skip `/init`.

> Read AGENTS.md and WORKSHOP.md in this folder. Do not edit anything. Explain what already works, what is missing, and which file contains the game rules.

Check that it names real files and identifies the unfinished completion function. This confirms access to both the model and the exercise. Plan mode and project instructions do not create an operating-system sandbox.

## If a step is blocked

- Cannot find files: check the selected folder.
- Model or login error: show ARK the exact message; use the host’s fallback or pair up.
- No Node: run the checks in `tests.html`. Quest Board needs no package install.
- Starter shows 11/18: expected. Loading errors or syntax errors need help.
- Unexpected command or file access: stop and ask what the action will do.

## Command reference

`/connect` provider · `/models` model · Tab Plan/Build · `@file` file reference · `/undo` and `/redo` recovery with Git.

Read diffs before discarding work. Ask a mentor before using `git reset --hard` or `git clean`.

OpenCode references: https://opencode.ai/docs/agents/ · https://opencode.ai/docs/permissions/ · https://opencode.ai/docs/tui/. Installation and model references checked 19 September 2026. Each laptop still needs the file-read check above.
