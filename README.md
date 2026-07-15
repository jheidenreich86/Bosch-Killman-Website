# BKV PC Website

Rebuild of www.bkvpc.com for Bosch Killman VanderWal, P.C. — a full-service
law firm in Grand Rapids, Michigan, in practice since 1910.

## What this project does
- Modern marketing site replacing the legacy Wix build
- Automated client intake: visitor picks a practice area → routed to the
  assigned attorney → books directly on that attorney's calendar
- Clio integration: intake forms and scheduling run through Clio Grow /
  Clio Scheduler, syncing to Clio Manage
- News & Insights feed: firm wins, legal articles, firm news

## Repo layout
- `site/index.html` — approved homepage design mockup (v3, editorial style,
  navy/gold). This is the design reference; the production build grows from it.
- `docs/clio-configuration-guide.md` — the Clio Grow/Scheduler setup guide,
  including the Phase 6 handoff table of form/booking links the site consumes.
- `docs/intake-question-sets.md` — approved intake questions for all ten
  practice-area forms.

## Key design decisions (see CLAUDE.md for the full list)
- Routing map lives in Clio assignment settings, not hard-coded in the site,
  so reassignments never require a deploy. (The mockup has a demo copy.)
- Personal Injury leads split evenly between two attorneys via a
  server-side round-robin counter — first piece of custom backend logic.
- Direct booking with 48-hour minimum notice; staff run conflict checks
  in the gap.

## Status
Design approved. Clio configuration in progress. Production build not started.
