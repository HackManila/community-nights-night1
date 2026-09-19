# Quest Board — project guidance

This is a small learning project for HackManila Community Nights, not a production game.

- Read WORKSHOP.md and inspect the files before implementing a task. Identify assumptions.
- Keep changes bounded to the current task. Preserve existing behavior and readable JavaScript.
- Keep the application dependency-free. No package installs, network calls, API keys, backend, accounts, or persistence for the core task.
- Preserve file:// operation: plain scripts, not ES-module imports or fetch-based assets.
- Keep game rules in game.js and DOM behavior in app.js.
- State updates must not mutate the input state. Follow the existing action return shape.
- Do not weaken or delete checks to make a feature appear finished. Explain any genuinely incorrect check before changing it.
- Baseline checks do not demonstrate completion of the new feature. Run acceptance checks too.
- With Node.js available: `node check.cjs baseline`, `node check.cjs acceptance`, or `node check.cjs all`.
- Without Node.js: ask the human to open tests.html and report the results. Do not claim browser checks ran unless they actually did.
- Ask before shell commands, deletion, dependency changes, or actions outside this project. This document is guidance, not an enforced sandbox.
- Stop after the bounded change. Summarize files changed, verification performed, failures, and remaining uncertainty. Do not create commits or publish anything without approval.
