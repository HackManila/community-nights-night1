# Copyable prompt cards
Run one phase at a time. OpenCode should already be in the selected exercise directory.

## Orient (do not edit)
Read AGENTS.md, WORKSHOP.md, and the application files. Do not edit or implement yet. Explain what already works and what is unfinished. Map game rules, user interface, and checks. Ask about uncertain requirements rather than inventing them. Do not read sibling exercises.

## Shape the task
Help me turn this request into a small task brief: [request]. Include the goal, relevant current behavior, constraints, non-goals, normal example, edge example, acceptance criteria and verification. Ask me to resolve missing decisions. Do not implement.

## Plan
Use the brief we agreed. Inspect the actual code and propose the smallest plan. Name the expected files and explain how each acceptance criterion will be checked. Do not install anything or edit files yet. Wait for my approval.

## Build
Implement the approved plan, and only that plan. Preserve the existing action contract and input state. Do not weaken or delete tests. Ask before widening scope. Run checks when available; otherwise tell me exactly what to run. Stop with a summary of changed files, evidence, known failures and remaining uncertainty.

## Debug
Expected: [expected behavior]. Observed: [actual result]. Reproduction: [steps or test name]. Reproduce before editing. Explain the likely cause; propose the smallest fix and a regression check. Do not rewrite the application. After approval, fix and rerun both the targeted check and the baseline.

## Review
Compare the diff against the brief and every acceptance criterion. Look for duplicated rewards, unknown IDs, input mutation, unrelated state changes and UI regressions. Report evidence and gaps separately. Do not silently fix your findings; let me choose the next action.

## Hand off
Summarize the agreed goal, changed files, exact checks actually run and their outcomes, remaining gaps, and what the next human should verify. Do not publish, merge, or claim production readiness.
