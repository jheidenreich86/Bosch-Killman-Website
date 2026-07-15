# BKV PC — Clio Grow & Scheduler Configuration Guide

Goal: a working intake-and-booking pipeline that lives entirely inside Clio, produces the links and embed codes the new website will use, and can be tested end-to-end before the site launches.

Plain-language glossary used throughout:
- **Clio Manage** — the case management side you already use (matters, calendars, billing).
- **Clio Grow** — Clio's intake/CRM side: leads, intake forms, pipelines.
- **Clio Scheduler** — the booking tool inside Grow that shows a client real open time slots.
- **Pipeline** — the board that tracks a lead from "new" to "hired" (or "declined").
- **Embed code** — a snippet the website pastes in so a form or calendar appears on the page.

---

## Phase 0 — Prerequisites (do these first)

- [x] **Confirm your Clio plan includes Grow.** ✔ DONE — Grow is licensed.
- [x] **Confirm who has admin rights in Grow** — ✔ DONE: Julian has admin access to Grow and Manage.
- [x] **Connect Grow to Manage** — ✔ DONE: already linked.
- [ ] **Connect every attorney's real calendar.** Scheduler can only show true availability if each attorney's Manage calendar reflects reality — meaning their Outlook/Google calendar is synced to Clio. Any attorney whose calendar isn't synced will show false openings. This is the step most likely to stall, so start the nagging early. **← the only Phase 0 item still open**

## Phase 1 — Decisions Julian/the partners must make

These aren't technical; they shape everything downstream.

1. **Complete the routing map.** ✔ DECIDED (subject to future changes): Business, Real Estate, Litigation → Julian Heidenreich; Family Law, Criminal → Kara Beurkens; Personal Injury → Julian Heidenreich & Andrea Koop, leads split evenly (round-robin handled by the website); Estate Planning → Jason Osbourn; Environmental → Peter Bosch; Mediation → Kurt Killman; Collection → Nick Rizzo. Backup attorney per area still worth naming for vacation coverage.
2. **Free or paid consultations?** ✔ DECIDED: free initial consultations to start.
3. **Meeting types and lengths.** ✔ DECIDED: 30-minute phone conference and 60-minute office meeting per attorney.
4. **Direct booking vs. gatekept booking.** ✔ DECIDED: direct booking with a **48-hour minimum notice**; staff run conflicts in the gap. The intake forms capture adverse-party names to make that possible.
5. **Who monitors the lead inbox** — ✔ DECIDED: Julian Heidenreich owns the Grow lead inbox.

## Phase 2 — Pipeline setup (Grow)

- [ ] Create one intake pipeline with stages:
  `New Lead → Conflict Check → Consultation Scheduled → Consultation Held → Engagement Sent → Hired / Declined`
- [ ] Set the pipeline to notify the assigned attorney AND the staff owner when a lead lands.

## Phase 3 — Intake form templates (Grow)

Create **one public intake form per practice area** (9 total). Every form shares a common core, then adds matter-specific questions.

**Common core (all forms):**
- Full name, phone, email, preferred contact method
- City/county (venue matters)
- "Have you worked with our firm before?"
- **Adverse party / other side's name(s)** — feeds the conflict check
- "Briefly describe your situation" (long text)
- "Is there a deadline, court date, or time-sensitive event?" (date field)
- Consent line: *"Submitting this form does not create an attorney-client relationship. Please do not include confidential details."* (standard protective language — have the partners approve the wording)

**Matter-specific add-ons (examples to refine together):**
- *Estate Planning:* marital status; minor children; existing will/trust (Y/N); approximate estate complexity (home/business/out-of-state property)
- *Family Law:* opposing spouse/party name (doubles as conflict field); children; any existing case number
- *Personal Injury:* date of incident (statute of limitations!); insurance carrier involved; treatment status
- *Business / Real Estate / Collection:* entity names on both sides; contract or property address; amount in dispute
- *Litigation:* case number if filed; court; upcoming dates
- *Environmental / Mediation:* parties involved; agency involvement; desired outcome

**Per-form settings:**
- [ ] Assign the form's default matter type (matching the practice area)
- [ ] Assign the routed attorney as the lead owner
- [ ] Drop the lead into the `New Lead` (or `Conflict Check`) stage
- [ ] Note each form's **public link / embed code** in the handoff table (Phase 6)

## Phase 4 — Scheduler setup

For **each attorney** in the routing map:
- [ ] Create appointment type: *Phone Conference — [Practice Area] (30 min)*
- [ ] Create appointment type: *Office Meeting — [Practice Area] (60 min)*
- [ ] Set availability windows (e.g., Tue–Thu 9:00–4:00, or per attorney preference)
- [ ] Set minimum notice (48 hours recommended — see Phase 1, item 4) and buffer time between meetings (15 min suggested)
- [ ] Attach or link the matching intake form so booking and intake travel together
- [ ] Turn on automated confirmation email/text and a 24-hour reminder
- [ ] Record each appointment type's **booking link** in the handoff table

## Phase 5 — Automated messages (Grow)

- [ ] Confirmation email template (appointment details + what to bring + the no-attorney-client-relationship line)
- [ ] 24-hour reminder (email and/or text)
- [ ] "We couldn't reach you" follow-up for leads that never book
- [ ] Polite decline template (for conflicts or matters the firm won't take)

## Phase 6 — The website handoff table

Fill this in as links are generated; it's everything the website build needs from Clio:

| Practice area | Attorney | Intake form link/embed | Phone conf. link | Office mtg. link |
|---|---|---|---|---|
| Business | TBD | | | |
| Litigation | TBD | | | |
| Estate Planning | Jason Osbourn | | | |
| Family Law | TBD | | | |
| Real Estate | TBD | | | |
| Personal Injury | TBD | | | |
| Collection | TBD | | | |
| Environmental | TBD | | | |
| Mediation | TBD | | | |

## Phase 7 — End-to-end test (before launch)

- [ ] Submit a fake lead through one intake form ("Test Client — DELETE")
- [ ] Confirm it lands in the pipeline, assigned to the right attorney, with notifications firing
- [ ] Book a slot through Scheduler; confirm it appears on the attorney's Manage calendar AND their Outlook/Google calendar
- [ ] Confirm the confirmation email/text arrives and reads correctly
- [ ] Cancel/reschedule the test booking; confirm the calendars update
- [ ] Delete the test lead

---

*Notes: Clio's admin screens change over time — if a setting above has moved, Clio's help center (help.clio.com) has current walkthroughs for intake forms, pipelines, and Scheduler. Where this guide and their screens disagree, trust their screens.*
