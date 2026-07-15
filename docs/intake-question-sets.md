# BKV PC — Intake Form Question Sets (Clio Grow)

One form per practice area. Each form = the **common core** below + that area's **specific questions**. Field types are noted so whoever builds these in Clio Grow can map them directly (short text, long text, dropdown, date, yes/no).

Design principles used here:
- Short enough to finish on a phone in under 3 minutes — detail belongs in the consultation, not the form.
- Every form captures the **other side's name(s)** so staff can run conflicts during the 48-hour booking window.
- Nothing asks for confessions or confidential strategy. Criminal and Family forms are deliberately the leanest.

---

## Common core (appears on every form, in this order)

| # | Question | Field type | Required |
|---|---|---|---|
| 1 | Full name | Short text | Yes |
| 2 | Phone | Phone | Yes |
| 3 | Email | Email | Yes |
| 4 | Preferred contact method | Dropdown: Phone / Email / Text | Yes |
| 5 | City and county where you live (or where your business operates) | Short text | Yes |
| 6 | Have you worked with our firm before? | Yes/No | Yes |
| 7 | Name(s) of the person, company, or other party on the other side of this matter | Short text | Yes |
| 8 | Is there a deadline, court date, or other time-sensitive event we should know about? | Date + short text | No |
| 9 | Briefly describe your situation (a few sentences is plenty) | Long text | Yes |

**Consent line at the bottom of every form (partners to approve wording):**
> "Submitting this form does not create an attorney-client relationship, and the firm cannot represent you until conflicts are cleared. Please do not include confidential or sensitive details — those are best discussed at your consultation."

---

## 1. Business — routes to Julian Heidenreich

| Question | Field type | Required |
|---|---|---|
| Your company's name (if any) | Short text | No |
| Your role (owner, officer, member, employee, other) | Dropdown | Yes |
| What best describes your need? | Dropdown: Starting a business / Contract or agreement / Business dispute / Buying or selling a business / Other | Yes |
| Approximate amount at stake, if a dispute | Dropdown: Under $10k / $10k–$50k / $50k–$250k / Over $250k / Not sure | No |
| Are there signed agreements involved? | Yes/No | No |

## 2. Litigation — routes to Julian Heidenreich

| Question | Field type | Required |
|---|---|---|
| Which best describes you? | Dropdown: I'm being sued / I want to bring a claim / I received a demand letter / Not sure | Yes |
| Has a case been filed? If so, court and case number | Short text | No |
| Any upcoming court dates or response deadlines | Date | No |
| Is insurance involved (yours or theirs)? | Dropdown: Yes, mine / Yes, theirs / Both / No / Not sure | No |

## 3. Estate Planning — routes to Jason Osbourn

| Question | Field type | Required |
|---|---|---|
| Marital status | Dropdown: Single / Married / Widowed / Divorced | Yes |
| Do you have children under 18? | Yes/No | Yes |
| Do you already have a will or trust? | Dropdown: Will / Trust / Both / Neither / Not sure | Yes |
| Do you own a business? | Yes/No | No |
| Do you own real estate outside Michigan? | Yes/No | No |
| Anything that makes your situation unusual? (blended family, family member with special needs, farm, etc.) | Long text | No |

*Note: the common-core "other party" question reads oddly for estate planning — on this form only, relabel it "Names of your spouse and intended beneficiaries" (still feeds the conflict check).*

## 4. Family Law — routes to Kara Beurkens

| Question | Field type | Required |
|---|---|---|
| What kind of matter? | Dropdown: Divorce / Custody or parenting time / Child support / Prenuptial agreement / Personal protection order / Other | Yes |
| Do you have children with the other party? Ages? | Short text | No |
| Is there an existing case? County and case number if known | Short text | No |
| Is there anything that makes this urgent for you or your children's safety? | Yes/No | No |

*Kept deliberately short. If the safety question is answered Yes, the pipeline should flag the lead for same-day staff review rather than waiting on the 48-hour cycle.*

## 5. Criminal — routes to Kara Beurkens

| Question | Field type | Required |
|---|---|---|
| Have charges been filed? | Dropdown: Yes / No, but I'm under investigation / Not sure | Yes |
| What are you charged with (as written on any paperwork)? | Short text | No |
| Which court, and when is your next court date? | Short text + date | No |
| Is the person needing help currently in custody? | Yes/No | Yes |

*Leanest form of the ten, on purpose: nothing here should invite an admission. The description box inherited from the common core should be relabeled on this form to "What would you like help with?" — and the consent line matters most here.*

## 6. Real Estate — routes to Julian Heidenreich

| Question | Field type | Required |
|---|---|---|
| Your role | Dropdown: Buyer / Seller / Landlord / Tenant / Owner / Other | Yes |
| Property address (or general location if you prefer) | Short text | No |
| Is this a transaction or a dispute? | Dropdown | Yes |
| If a transaction: expected closing date | Date | No |

## 7. Personal Injury — round-robin: Julian Heidenreich / Andrea Koop

| Question | Field type | Required |
|---|---|---|
| Date of the incident | Date | Yes |
| What happened? | Dropdown: Auto accident / Slip, trip, or fall / Injury on someone's property / Other | Yes |
| Are you currently receiving medical treatment? | Dropdown: Yes / No / Finished treatment | Yes |
| Which insurance companies are involved, if known | Short text | No |
| Was a police or incident report made? | Yes/No | No |

*The incident date is required because Michigan's filing deadlines (statutes of limitations) run from it — staff should glance at this on every PI lead.*

## 8. Collection — routes to Nick Rizzo

| Question | Field type | Required |
|---|---|---|
| Your business name | Short text | Yes |
| Who owes the debt (person or business name)? | Short text | Yes |
| Approximate amount owed | Dropdown: Under $5k / $5k–$25k / $25k–$100k / Over $100k | Yes |
| What documentation exists? | Dropdown: Signed contract / Invoices / Court judgment already entered / Other / Little or none | Yes |
| Where is the debtor located (city/state if known)? | Short text | No |

## 9. Environmental — routes to Peter Bosch

| Question | Field type | Required |
|---|---|---|
| Property or site address involved | Short text | Yes |
| Is a government agency involved? | Dropdown: EGLE (Michigan) / EPA (federal) / Local / None yet / Not sure | Yes |
| Have you received any notices, violations, or orders? Dates if so | Short text + date | No |
| Are you buying/selling the property, or responding to a problem? | Dropdown: Transaction / Compliance issue / Contamination or cleanup / Dispute / Other | Yes |

## 10. Mediation — routes to Kurt Killman

| Question | Field type | Required |
|---|---|---|
| What is the dispute about, generally? | Dropdown: Business / Real estate / Family / Employment / Other | Yes |
| Names of ALL parties to the dispute | Long text | Yes |
| Is there a pending court case? Court and case number if so | Short text | No |
| Is mediation court-ordered or voluntary? | Dropdown | Yes |

*Mediation's conflict check is the strictest — a mediator must be neutral, so staff should screen every named party against the firm's client list, not just the "other side."*

---

## Build notes for whoever configures Clio Grow

1. Create these as ten separate **intake form templates**, each with its default matter type and lead owner per the routing map.
2. Family Law's "urgent/safety = Yes" answers should trigger a notification for same-day review.
3. Personal Injury needs **two** identical forms (or one form whose lead assignment the website alternates) — final mechanics depend on how the round-robin is wired; leave both PI attorneys as possible owners.
4. Word every dropdown exactly as written here unless an attorney objects — the wording avoids legalese on purpose.
5. Each form's public link goes into the Phase 6 handoff table in the configuration guide.
