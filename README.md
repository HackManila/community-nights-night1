# HackManila Community Nights · Night 1

Use OpenCode to finish a feature in Quest Board. You’ll describe the change, review the agent’s plan, and check the result.

Presented by HackManila and SageDynamics. Venue: Vantis.ph. Organizing support: ARK.

## Get the workshop

```sh
git clone https://github.com/hackmanila/community-nights-night1.git
cd community-nights-night1
```

Or [download the ZIP](https://github.com/hackmanila/community-nights-night1/archive/refs/heads/main.zip) and extract it. You do not need a GitHub account.

1. Open `exercises/quest-board/index.html` in your browser. The app needs no package installation, server, API key, or database.
2. Open `exercises/quest-board/tests.html` and run all checks. **11/18 is the starting result**. Seven checks fail because completion is unfinished.
3. Start OpenCode in the exercise folder:

```sh
cd exercises/quest-board
opencode
```

4. Read `WORKSHOP.md`, write your request in `TASK-BRIEF.md`, and ask the agent to inspect the files and propose a plan before editing.
5. After the change, run the checks again, try the feature in the browser, and review the changed files. The target is **18/18**, with the original checks intact.

OpenCode needs its own model access. Follow [OpenCode readiness](docs/00-opencode-readiness.md). If setup is blocking you, ask an ARK volunteer or pair at a working laptop.

## Materials

- [Workshop slides (PDF)](slides/HackManila_Night1.pdf)

- [Participant handout](docs/01-participant-handout.md) · [printable PDF](docs/Participant_Handout.pdf)
- [Readiness guide](docs/00-opencode-readiness.md) · [printable PDF](docs/OpenCode_Readiness.pdf)
- [Prompts to copy](docs/02-prompt-cards.md) · [Glossary](docs/03-glossary.md)
- [Advanced Phaser task](docs/04-advanced-phaser.md)

Open `index.html` for a local page linking the exercises and materials. GitHub displays HTML source; download or clone the repo to run the app.

## After the first exercise

When the host invites you, open `exercises/debug-exercise`. This version contains a prepared bug and starts at **16/18**. Start a fresh agent session in that folder, reproduce the failures, and fix the cause.

You may work on an existing project if it already runs and you can choose a small change. Use the same brief, plan, and verification steps.

The optional [Gatekeeper challenge](docs/05-gatekeeper-challenge.md) runs at [gate.apps.rnbks.com](https://gate.apps.rnbks.com) once the host starts it. Join with your team’s entry code. The challenge source stays in a separate private organizer repository during the event.

## Save your starting point

A clone includes Git history. For a ZIP download, the readiness guide explains how to create a local baseline. If Git is unavailable, keep an untouched copy of the extracted exercise. OpenCode file undo/redo needs Git.

Use the public exercise data and keep credentials out of prompts, files, screenshots, and Git. Read permission requests before approving them. `AGENTS.md` guides the agent but does not restrict access by itself.

## Hosting

Quest Board, the debugging exercise, slide PDF, and handouts work from a local download. Gatekeeper is the only hosted app. Its source and deployment instructions live in the separate private `hackmanila/gatekeeper` repository. The completed reference and private Tipon notes are also outside this participant repo.
