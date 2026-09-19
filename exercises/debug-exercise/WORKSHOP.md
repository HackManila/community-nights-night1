# Find and fix the prepared bug

This is the second exercise. Start a fresh OpenCode session in `exercises/debug-exercise` when the host invites you. It contains a deliberate defect; it is not the completed reference.

## Reproduce the problem

1. Open `index.html`. Complete a quest and observe the XP and button state.
2. Open `tests.html` and run all checks, or run `node check.cjs all` if Node is available.
3. Expect **16/18**: all 10 baseline checks pass and two acceptance checks fail.
4. Read the failing check names and write the expected and observed behavior in `TASK-BRIEF.md`.

## Ask the agent to investigate

```text
Read AGENTS.md and WORKSHOP.md. Run or inspect the failing checks.
Explain why the page appears to work while the checks fail.
Do not edit yet. Identify the relevant function, reproduce the problem,
and propose the smallest fix. Use only this exercise folder.
```

Check the explanation against the code. Agree on the plan before editing.

## Requirements for the fix

- Completing an available quest marks it complete and awards its XP once.
- A repeated completion must be rejected without adding XP or changing state.
- Unknown IDs must be rejected without an error or state change.
- Preserve the input state, unrelated quests, pins, and existing return values.
- Search, category/status filters, pinning, reset, and UI summaries must keep working.

Keep the app dependency-free and working from local files. The task needs no backend, accounts, network calls, or persistence. Preserve the supplied checks and their expected results.

## Check the correction

Run all 18 checks after the fix, then try the page. Complete the beacon for 30 XP and the bridge for 80 total. Check search, filters, pinning, reset, and refresh. Read the repeated-completion check: a disabled button alone does not establish that the function prevents another reward.

Review `git diff -- game.js app.js checks.js` from this folder and `git status` for other changes. Explain which condition was missing, how you reproduced the defect, and which check now passes.

## Completion record

```text
Expected behavior:
Observed failure:
Reproduction steps or failing check:
Cause:
Files changed:
Checks run and their results:
What remains untested:
```
