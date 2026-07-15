# CLAUDE.md — BKV PC Website

Guardrails and context for AI-assisted work in this repo.

## What this is
The public website for Bosch Killman VanderWal, P.C. (bkvpc.com), a
Grand Rapids, Michigan law firm founded in 1910. Owner: Julian Heidenreich
(managing partner). This is a law-firm property, not a Fractal Visions
product, but it follows the same engineering discipline.

## Hard rules
- This repo is fully firewalled: no code, secrets, or infrastructure shared
  with any other repo. No credential reuse.
- Never commit secrets. Clio API keys and any tokens live in environment
  variables / deployment secrets only.
- Branch-per-sprint / PR-per-sprint. No direct commits to main once the
  production build starts.
- Explain technical concepts in plain language in PR descriptions and docs —
  the owner is a lawyer first, developer second; jargon gets defined.

## Legal/compliance constraints (do not "optimize" these away)
- Michigan attorney advertising rules: case results and testimonials must
  carry the "prior results do not guarantee a similar outcome" disclaimer.
  Testimonials must be real; placeholder testimonials never ship.
- Intake forms carry the no-attorney-client-relationship consent line.
- Intake captures adverse-party names for conflict checks; do not remove
  those fields to shorten forms.
- Family Law form's safety question triggers same-day review — preserve
  that flag path.

## Architecture decisions locked so far
- Design reference: site/index.html (v3) — square corners, hairline rules,
  navy (#15304C family) + gold (#B8934A), Libre Caslon Text + Libre Franklin.
  No rounded pills, no drop shadows, restrained gold.
- Intake/booking runs through Clio Grow forms + Clio Scheduler links; the
  site consumes links from docs/clio-configuration-guide.md Phase 6 table.
- Routing map is data, not code: attorney assignments live in Clio; the site
  should read a small config, never hard-code attorney routing in components.
- Personal Injury round-robin: server-side counter alternating
  Heidenreich/Koop. Must persist across requests (not client-side).
- Ten practice areas: Business, Litigation, Estate Planning, Family Law,
  Criminal, Real Estate, Personal Injury, Collection, Environmental,
  Mediation. No bankruptcy — the firm doesn't practice it.
- Launch requires: redirect map from old Wix URLs (including the retired
  bankruptcy page), proper page titles/descriptions, and NO noindex tags.

## Current status
Design approved (site/index.html). Clio configuration underway per
docs/clio-configuration-guide.md. Production stack not yet chosen.
