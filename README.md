# Assay Probe

A deliberately well-formed repository, created to verify the portfolio's assay
gate end to end.

## Why this exists

The portfolio at myselfpavan.vercel.app decides which repositories earn a card
by scoring them against a published rubric rather than by remembering to add
them. This repository exists to prove that pipeline works: it carries every
signal the rubric looks for, so it should score highly, clear the promotion
floor, and appear automatically with a generated card.

## What it contains

- A test suite under `tests/`
- A CI workflow that runs it
- A dependency manifest
- A licence
- Extended documentation under `docs/`
- A container definition
- A description, topics, and a tagged release

## How the gate works

Nothing is graded until a repository carries the `foundry-ready` topic. That is
the switch that says "this is finished enough to be judged". Remove the topic
and the assay skips it entirely, which is how work in progress stays invisible.

## Scoring bands

| Band | Weight | Measures |
|---|---|---|
| Depth | 25 | Commit history, size, language spread |
| Verification | 25 | Tests, CI, coverage, lint gates |
| Completeness | 20 | README, docs, licence, description, topics |
| Structure | 15 | Directory layout, manifest, container, workspace |
| Shipped | 15 | Releases, deployment, recency |

A score of 38 or above is promoted.
