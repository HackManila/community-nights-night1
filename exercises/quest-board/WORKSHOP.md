# Complete a quest and award its XP once

## What already works

Six synthetic quests appear. Search, category/status filters, pin/unpin, and a reset action already work. Refreshing the page starts a new session. Completing a quest is deliberately unfinished. The existing UI is prepared to show completion and XP once that state transition works.

## The deliberately vague request

> Make the quests completable and give the player points.

Before implementing, rewrite that request so a teammate can decide whether the result is correct. You may use these acceptance criteria, but write your own concise task brief and explain it.

## Core feature — completion and one-time rewards

**Goal:** A player can complete an available quest in this local session.

**Acceptance criteria:**
1. A valid, available quest becomes completed and awards exactly its stated XP.
2. Completing that same quest again is a rejected no-op: no extra XP or other state change.
3. An unknown quest ID is a rejected no-op and does not throw an exception.
4. Other quests and pin states remain unchanged; the prior input state is not mutated.
5. The UI updates total XP, completed count, completed button state, and status filters.
6. Search, category filters, pin/unpin, and reset still work.

**Constraints:** Preserve the simple application. No new packages, backend, login, model API, network, or persistence. Preserve the existing action return contract. Use synthetic data only.

**Evidence:** Baseline and acceptance checks, a manual UI walkthrough, and a reviewed code diff. The supplied checks are not exhaustive proof of correctness.

## A brief template

```text
Goal:
Relevant files / existing behavior:
Constraints / out of scope:
Examples (normal + edge case):
Acceptance criteria:
How I will verify it:
```

## Inspection prompt

```text
Read WORKSHOP.md and inspect this project. Do not edit files yet.
Explain how quest state reaches the UI and which function is unfinished.
List any assumptions and propose the smallest plan for the completion task.
Tell me how you would verify it, including one repeated-action case.
```

Read the proposed plan. Correct assumptions. Ask why a dependency, new file, rewrite, or other expansion is necessary before accepting it.

## Implementation prompt — after reviewing the plan

```text
Implement the bounded plan we agreed. Keep the application dependency-free
and preserve existing behavior. Do not change the acceptance criteria or
weaken checks. Stop after this feature. Report the exact checks you actually
ran and anything I still need to verify in the browser.
```

## Verification and review

Run both suites in tests.html, or ask the agent to use `node check.cjs all` when Node is available. Then:

- Start with 0 XP. Complete Restore the beacon: 30 XP, one completed quest, disabled Completed button.
- Complete Repair the footbridge: 80 XP and two completed quests.
- Filter to Completed and Available; check the counts and visible quests.
- Pin and unpin a quest. Search, change categories, and check empty results.
- Reset the demo, then refresh. Both intentionally clear in-memory state.
- Review the diff: did only relevant code change? Were tests weakened? Can you explain the state update?

A disabled button is a UI behavior, not proof that the underlying rule rejects duplicate actions. The repeated-call acceptance check evaluates the state transition directly.

## Debugging prompt

```text
Here is the observed failure: [actual result].
Expected: [expected result]. Steps or failing check: [reproduction].
Reproduce it before changing code. Explain the likely cause, propose a
bounded fix, and rerun the relevant check plus the baseline suite.
Do not replace the whole app.
```

## Optional extension — choose ONE after the core feature passes

**Approachable:** Add a progress bar. Define 0/6, 1/6, and 6/6 behavior; include a text equivalent and verify updates after reset.

**Intermediate:** Add sorting by reward, high-to-low and low-to-high, while preserving pin priority. Specify which rule wins before editing. Verify combined search/category/status filters.

**More advanced:** Add quest prerequisites. A locked quest should not complete until its prerequisite is completed. Define where prerequisites live, show the locked UI, reject premature completion in game.js, and add checks. Do not rely only on a disabled button.

Persistence is outside the core task. A later persistence extension needs explicit behavior for stale/corrupt data and reset; do not add it silently.

## Completion record

```text
My task brief:
My reviewed plan:
Files changed:
What I demonstrated:
Checks run and actual results:
One edge case I checked:
What remains uncertain or untested:
```

Show your change, explain the plan, and share the checks you ran. Name anything still untested.
