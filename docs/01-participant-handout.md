# Working with a coding agent

HackManila Community Nights · Night 1

Use OpenCode to complete a feature in Quest Board. Keep your brief, review the plan, and show how you checked the change. You can work alone or in pairs; swap roles after your first checkpoint.

Workshop files: https://github.com/hackmanila/community-nights-night1

## Open the exercise

Open `exercises/quest-board/index.html` and `tests.html` in your browser. Start OpenCode in `exercises/quest-board`.

Search, filters, pinning, and reset already work. Your task is to complete a quest and award its experience points (XP) once. The function `completeQuest` is unfinished; the interface can already display its result.

## Write your task brief

Use `TASK-BRIEF.md` and the requirements in `WORKSHOP.md`. Begin with this request:

> Let me complete an available quest and earn its XP once. If I try again, the XP should stay the same. Keep search, filters, and pinning working. Explain your plan before editing.

Tell the agent where to look: `game.js` holds the rules, `app.js` connects them to the page, and `checks.js` contains the checks. Keep the current setup and return values. The core task needs no new packages, backend, accounts, network calls, persistence, or redesign.

## Acceptance criteria

Use these conditions to judge the change:

1. Completing an available quest marks it completed and awards its stated XP.
2. A second completion is rejected without changing state or adding XP.
3. An unknown quest ID is rejected without an error or state change.
4. The input state, other quests, and pins remain unchanged.
5. The page updates XP, completion count, button state, and status filters.
6. Search, category filters, pinning, and reset keep working.

Example: complete Restore the beacon at 0 XP. The total becomes 30. Call completion again; the total stays 30. Try an unknown ID; nothing changes.

<!-- pagebreak -->

# Inspect and plan before editing

Ask one thing at a time and read the response before continuing. These prompts also appear in `docs/02-prompt-cards.md`.

## Inspect

> Read AGENTS.md and WORKSHOP.md. Do not edit files. Explain how the game state connects to the page, what is unfinished, and any assumptions. Use only this exercise folder.

Compare the explanation with the files. Ask about unfamiliar terms or a step you cannot explain.

## Plan

> Propose the smallest plan that satisfies my brief. Name the files you will change, the normal and edge cases, and the checks you will run. Explain anything uncertain. Wait for approval before editing.

Before approving, explain the plan to a partner. Check which requirement each change meets and how you will detect a mistake. Ask for a smaller plan if it adds work outside the brief.

## Implement the approved plan

> Implement the agreed task. Preserve the current dependencies, behavior, and action return values. Do not weaken or delete checks. Report which checks ran and what I need to check manually.

## Review

> Compare the diff with each acceptance criterion. Look for repeated rewards, unintended state changes, and UI regressions. Show the checks that support your conclusion and name anything untested.

## Practise working from a failing test

Before editing, run the supplied checks and read one expected failure. After implementing the feature, rerun it and the full suite. The starter begins at 11/18; seven failures describe the missing behavior.

To practise a full test-driven development cycle, choose one new behavior, write a check that fails for the right reason, implement the minimum, then clean up the code while the checks stay green.

<!-- pagebreak -->

# Check your change

## Run the checks

Open `tests.html` and run all checks. If Node is already installed, you can run this from the active exercise folder:

```sh
node check.cjs all
```

Expected results: Quest Board starts at 11/18; the debug exercise starts at 16/18. After the relevant fix, aim for 18/18 without changing the expected results. A page that fails to load or a syntax error needs investigation.

## Try the feature in the browser

Reset to 0 XP. Complete the beacon for 30 XP, then the bridge for 80 total. Try the completed/available filters, search, pins, and reset. Refresh clears the session; saving progress is outside the core task.

Read the repeated-completion check too. A disabled button does not prove the function rejects a second reward. The supplied checks cover game state, so you still need to try the interface.

## Review the changed files

```sh
git status
git diff -- game.js app.js checks.js
```

Run the diff command in the exercise folder. Look for unrelated edits or removed checks. Ask the agent to explain code you do not understand, then compare it with the brief.

## Find the prepared bug

When invited, start a fresh OpenCode session in `exercises/debug-exercise`. Completion appears to work, but two checks fail. Reproduce those failures before editing.

> Expected: [behavior]. Observed: [result]. Reproduction: [steps or check name]. Reproduce the failure, explain the cause, and propose a small fix. After approval, fix it and rerun the checks.

## Recover from a bad edit

Stop the agent, read the diff, and save useful work. With a Git baseline, use OpenCode’s `/undo` and `/redo` to recover, then check the restored behavior. Without Git, use your untouched extracted copy. Ask a mentor before commands that discard files or changes.

<!-- pagebreak -->

# Record what you built

Show your brief, explain the plan, demonstrate the change, and share the checks you ran. Name anything you have not checked. You can demonstrate locally; a public repository or pull request is optional.

## My goal and one edge case

________________________________________________________________________

________________________________________________________________________

## Files changed and why

________________________________________________________________________

________________________________________________________________________

## Checks I ran and their results

________________________________________________________________________

________________________________________________________________________

## Behavior I demonstrated in the browser

________________________________________________________________________

________________________________________________________________________

## One decision I can explain

________________________________________________________________________

## What I have not checked

________________________________________________________________________

## Choose an extension after the core works

Add a progress indicator, sort by reward while keeping pins first, or add prerequisite quests. Define the new behavior and write a failing check before implementing it. For a separate game task, see `docs/04-advanced-phaser.md`.

Use public exercise data. Keep keys and private records out of prompts and code, and read permission requests before approving them.
