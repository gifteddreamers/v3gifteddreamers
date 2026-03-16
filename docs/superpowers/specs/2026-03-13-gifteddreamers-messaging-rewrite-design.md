# gifteddreamers.org Messaging Rewrite — Design Spec

**Date:** 2026-03-13 (revised 2026-03-15)
**Status:** Draft v2 — pending review
**Approach:** Felt-experience lead → infrastructure framework → Meadows leverage points
**Supersedes:** v1 spec (Mar 13, approved session 35)

---

## Problem

gifteddreamers.org currently presents as a perks consultancy / bookkeeping service. The messaging is 6+ months outdated and does not reflect what Gifted Dreamers actually is: a backbone organization deploying community resilience infrastructure across physical, digital, social, and economic layers.

The current site fails four audiences:
- **The person at 2am** — scared, grieving, carrying something they can't name, wondering if they're crazy. They need validation, tools, and connection. The site gives them perks auditing.
- **Funders and grant reviewers** — they need to see a real organization with live infrastructure, validated research, and a coherent theory of change. The site gives them bookkeeping services.
- **Allies and researchers** — they need to see the intellectual depth, the Meadows framework, the experiment results, and where to plug in. The site doesn't acknowledge they exist.
- **Community builders** — they want to build their own infrastructure, access the same tools, prepare their neighborhood. The site doesn't show them the path.

The site is NOT for service clients. Perks audits and bookkeeping are the revenue model, not the identity.

---

## What Changed Since v1 Spec

1. **Framing shift:** Infrastructure, not services. The v1 website copy (backbone organization, owner-driven reconstruction, democratic governance, no private capture) was the right framework — it was lost when v3 became a services site. This spec restores it for the current context: civic infrastructure under systemic threat.

2. **Voice shift:** Lead with what the visitor is experiencing, not what GD offers. The justNICE blog articles ("Naming What You Feel," "Connecting Isolated Voices," "Psychology of Authoritarian Control") established the voice — direct, validating, research-backed, not academic.

3. **Meadows framework:** Gifted Dreamers' work maps to all 12 of Donella Meadows' leverage points for intervening in a system. This isn't random projects — it's coordinated intervention. The site uses this as the "why these together" explanation for visitors who stay and want the structural frame.

4. **Experiment results:** 6 experiments complete with full analysis, 50+ models, 5,000+ inferences. Real data: confidence is cosmetic (91% of models), premature compression is universal, prompt framing breaks multi-agent coordination, AP exam reasoning is fragile, geometric correlation validated. These belong on the Research page.

5. **Doorway changes:** 6 doorways (down from 8). HowtoClaude removed (outdated, not ready). Planet Earth Society removed (relationship not ready to publish). Lumiel removed (site not live, pending Katherine confirmation). CaminoHelp added (broken but real). Matching Gifts and Volunteer stay as separate pages (DoubleTheDonation widget requirement).

6. **Board expansion:** Two new board members — Evert Bopp (Crisis Cognition, disaster communications), Uriel Castro (Austin real estate, bilingual).

7. **Reframe from "our resources" to "your path":** The $640K credit stack isn't a flex — it's proof the resources exist and a guide for others to access them. We draw the maps, curate the resources, deploy the infrastructure, then show others how to do it themselves.

---

## Design Principles

1. **Lead with what the visitor is experiencing.** The person arriving is scared, grieving, or searching. Meet them there. Validation first, tools second, framework third.

2. **Infrastructure, not services.** We don't deliver programs to communities. We deploy infrastructure that communities control and use to solve their own challenges. Never use the words "program," "service," or "platform" to describe what GD does.

3. **Show the path, not the org.** The site is about what others can do — how they can access the same tools, build their own infrastructure, coordinate with their neighbors. GD draws the maps and walks the path first. The identity is backbone organization, not service provider.

4. **Backbone org framing lives in About, not Hero.** The governance philosophy (no private capture, community control, democratic governance, community transfer on dissolution) is real and important — but belongs deeper in the site. The Hero speaks to the human, not to the institution.

5. **One stack, multiple doorways.** All six tools are layers in one infrastructure stack — crisis triage, rights and preparedness, structural analysis, vocabulary, mutual aid, sovereign infrastructure. The doorways are organized by what the visitor needs, not by GD's org chart.

6. **Meadows as connective tissue (hybrid framing).** The homepage uses accessible felt-experience language. A "Why These Together" section introduces the Meadows leverage point framework for visitors who want the structural logic. The Research page goes deep. Both audiences find what they need.

7. **Disclosure discipline.** UnrigUSA is NOT mentioned (501(c)(4) separation). Moltbook is NOT mentioned (agent identity, disclosure tiering). Agent-facing architecture (The Word's 8 doorways, premature compression detection, Rediscovery Feed) is NOT exposed — only the human-facing value.

8. **No "feel" in headlines.** The word is a turnoff to data-oriented researchers and funders. Use "experiencing" or other language. Fine in body copy where felt-experience context is appropriate.

---

## Site Map

| Path | Nav Label | Content |
|------|-----------|---------|
| `/` | Home | Hero + Thesis + 6 Doorways + Why These Together + How It's Built + GRUHP + Get Involved |
| `/what-we-build` | What We Build | The Word, justNICE, CloudPublica, Common Cloud, GRUHP, CaminoHelp — each with screenshot, need-oriented description, link |
| `/partners` | Partners | Fiscal sponsorship model + "bring us your aligned project" |
| `/research` | Research | Experiment results, Meadows deep dive, 18 papers, 375 feeds, structurally-curious thesis (Tier 1 safe only) |
| `/about` | About | Kristine + Evert + Uriel bios, backbone org model, vision, EIN/legal |
| `/volunteer` | Volunteer | Employer grants + volunteer form + DoubleTheDonation widget |
| `/matching-gifts` | Matching Gifts | Employer matching lookup + DoubleTheDonation widget |
| `/donate` | Donate | General infrastructure mission copy + individual Givebutter fund embeds (GRUHP, etc.) — reference pattern: ctxcf.org/giving-funds/ |
| `/contact` | Contact | Contact form (keep existing) |
| `/privacy` | — (footer) | Use commoncloud.cc privacy policy (source: `commoncloud.git/03-yunohost-server/webapp-cc/privacy/index.html`). Updates: "deploying privacy-first infrastructure" intro, remove tech-perks/accounting references, email → GetInspired@GiftedDreamers.org, no "programs"/"services" language |
| `/terms` | — (footer) | Keep existing |

### Pages Removed (from current site)
- `/services` — perks/bookkeeping mentioned once under "How It's Built" as revenue model
- `/corporate-partners` — folded into Partners
- `/faq` — removed (research page and justNICE articles answer the real questions)
- `/common-cloud` — folded into What We Build
- `/gruhp` — folded into What We Build + homepage callout (still has Givebutter widget)

### Nav Order
What We Build · Partners · Research · Donate · Volunteer · Matching Gifts · About · Contact

---

## Homepage Sections

### 1. Hero

**Headline:** "Something is wrong and you know it."

**Subhead:** "You're not crazy. What you're experiencing has a name."

**Body:** "Civic infrastructure is under systemic threat — the systems that were supposed to protect you are being dismantled, captured, or turned against you. What looks like personal chaos is structural. And there are tools for it."

**No stats bar.** Stats are about the org. The person arriving doesn't care about our numbers yet. They care about whether this place understands what they're carrying.

**Primary CTA:** "Learn More" → CloudPublica (structural analysis)
**Secondary CTA:** "Find Resources" → justNICE (rights, preparedness, survival guides)

### 2. Thesis

> **You're not alone in this.**
>
> The weight you're carrying has a source — and it's not you. The systems that were supposed to protect you are being consolidated, captured, or dismantled. Your personal chaos is structural: the inability to afford what you could last year, the feeling that rules apply to you but not to the people making them, the tools you depend on being turned into surveillance infrastructure, the isolation that makes you believe you're the only one who sees it.
>
> Researchers have names for every one of these experiences. Communities have been organizing around them for decades. But if you don't have the word for what you're experiencing, you can't find the research that validates it. You can't find the others who see it too. You can't find the community that's already building what comes next.
>
> **Vocabulary is infrastructure.** When you can name the problem, you can find each other. When you find each other, you can build.

### 3. Doorways (6 cards, organized by need)

Each card: icon or screenshot, need-oriented headline, one-liner description, link to live tool.

**Not "our projects" — "What do you need?"**

| Need | Tool | One-liner |
|------|------|-----------|
| **I need words for what I'm experiencing** | The Word | Researchers, communities, and systems thinkers have been naming this for decades. Search what you're carrying — we'll show you what they call it. 129+ entries and growing. |
| **I need to understand what's happening** | CloudPublica | Structural analysis, not headlines. 150+ verified sources documenting how an ontology architecture operates across 9 federal domains — from AI-driven arrest quotas to cognitive warfare budgets to education control. |
| **I need to know my rights and prepare** | justNICE | Know your rights. Build your emergency buffers. Mesh networking, data privacy, survival guides, community preparedness — and the research behind why it matters now. |
| **I need help right now** | CaminoHelp | Crisis triage in minutes, not hours. Spanish-first. Food, housing, healthcare, legal — matched to verified local resources in Travis County. |
| **Someone near me can't make rent** | GRUHP | 100% goes to recipients. Groceries. Rent. Utilities. Healthcare. Pets. Zero admin fees. |
| **I need to build infrastructure my community controls** | Common Cloud | Private, secure, sovereign. We build community infrastructure that isn't under threat of surveillance — and show you how to build your own. |

### 4. Why These Together (Meadows — hybrid framing)

> **These aren't random tools. They're coordinated intervention at every level of a system.**
>
> Systems thinker Donella Meadows identified 12 places to intervene in a complex system, from adjusting numbers (least effective) to shifting the underlying paradigm (most effective). Most organizations work at one or two levels. This work spans all twelve — because resilience isn't one thing. It's infrastructure at every layer.
>
> **Physical:** Mesh networks, solar power, community gardens, emergency communications — so your community stays connected when centralized systems fail.
>
> **Digital:** Self-hosted tools, privacy-first infrastructure, sovereign data — so what you build stays yours.
>
> **Information:** Structural investigations, rights resources, crisis navigation — so you can see what's happening and act on it.
>
> **Social:** Mutual aid, network weaving, community organizing frameworks — so isolated people find each other.
>
> **Paradigm:** Vocabulary tools, research, naming — because you can't fight what you can't name, and you can't organize around what you can't articulate.
>
> We draw the maps. We curate the resources. We deploy the infrastructure. Then we show you how to do it yourself.
>
> [Link: "Learn how these map to Meadows' 12 leverage points" → Research page]

### 5. How It's Built (reframed — "here's how you get these too")

> **Every tool we use, you can get.**
>
> We reverse-engineered corporate giving programs and nonprofit credit stacks — Cloudflare, AWS, Datadog, Google, GitLab, Splunk, New Relic, and more. Hundreds of thousands in annual infrastructure, available to any qualifying nonprofit or community organization.
>
> Self-hosted on our own servers. Open where safe. Closed where necessary. Every piece of infrastructure we run can be handed to communities if we dissolve.
>
> *Revenue model: consulting services fund operations. Mission drives everything else.*
>
> **Want to build your own stack?** [We'll show you how.]

### 6. GRUHP Callout

> **When systems fail, people step up.**
>
> GRUHP = Groceries. Rent. Utilities. Healthcare. Pets. 100% goes to recipients. Zero admin fees.
>
> The long-term goal: when revenue exceeds operational needs, GRUHP becomes a Universal Basic Income fund — micro-grants funded by resources reverse-extracted from corporate giving.
>
> [Donate via Givebutter]

### 7. Get Involved

Four paths:
- **Volunteer** → Your employer pays us $25-50/hour. Real infrastructure work, real skills. That money funds GRUHP. → `/volunteer`
- **Bring a Project** → Fiscal sponsorship for aligned 501(c)(3) work. → `/partners`
- **Donate** → Fund community resilience infrastructure — general or specific funds. → `/donate`
- **Support GRUHP** → Direct mutual aid. Zero admin fees. → `/donate` (GRUHP fund)

---

## What We Build Page (`/what-we-build`)

Six cards, each expanded with:
- Screenshot or hero image
- Need-oriented headline (same as homepage doorway)
- 2-3 paragraph description focused on what the visitor gets, not what GD built
- Key stats where relevant
- Link to live tool
- Note on current status (e.g., CaminoHelp: "MVP live. Actively developing trauma-informed triage and expanded resource partnerships.")

### The Word
Search infrastructure for structural knowledge. The primary key is what you're experiencing, not what you already know. Four tables — Names (structural vocabulary), Sources (scholarship), Rediscoveries (independent convergence), Bridges (connections between concepts). Currently 129+ entries across 11 domains. Felt-sense search: type what you're carrying, get the structural name and the research behind it.

Live at word.cloudpublica.org.

### CloudPublica
Independent investigations and research. Structural analysis — not sensational, not opinion. Every claim links to its source. 7 investigations, 5 research articles, 150+ verified sources. Featured: "The Ontology Architecture" — how the federal government deploys a system that defines what entities exist, what relationships are valid, and what actions are permitted across 9 domains of public life. Documents Palantir's $1.83B federal contract portfolio, the $38.3B detention warehouse plan, Stephen Miller's Palantir stock conflict, cognitive warfare budget lines, education control, and the competitive authoritarianism framework.

Live at cloudpublica.org.

### justNICE
Rights, preparedness, and community resilience. Know your rights. Build your emergency buffers. Data privacy guides, mesh networking how-tos, backyard gardening, survival resources, and the research behind why community preparation matters. Blog articles on authoritarian control psychology (BITE model), how isolated people find each other (network weaving), and naming what you're experiencing (Meadows leverage points as felt experience).

Live at justnice.us.

### CaminoHelp
Spanish-first crisis navigation for Travis County. Five-question triage: crisis type, urgency, location, transportation, language. Matched to verified local resources — food, housing, healthcare, legal, mental health, childcare, utilities, pets. PDF export of your action plan.

MVP live at caminohelp.org. Actively developing trauma-informed triage and expanded resource partnerships.

### GRUHP
Groceries. Rent. Utilities. Healthcare. Pets. Direct mutual aid — 100% goes to recipients. Zero admin fees. Integrated with Givebutter (fee-free). The long-term vision: when revenue exceeds operational needs, GRUHP becomes a Universal Basic Income fund.

Donate at givebutter.com/GRUHP.

### Common Cloud
Community-controlled infrastructure — self-hosted, privacy-first, not under threat of surveillance. Tools your community owns, not tools that own your community. Emergency communication networks (Meshcore, solar, Cambium E410, backup Starlink). Sovereign digital infrastructure (NextCloud, Matrix, onion services). We deploy it, then show you how to build your own.

Live at commoncloud.cc.

---

## Partners Page (`/partners`)

### Fiscal Sponsorship

**What it is:** Gifted Dreamers provides 501(c)(3) umbrella for aligned projects — organizations doing work that advances community resilience but haven't yet incorporated as their own nonprofit.

**What we provide:**
- Legal entity (tax-deductible donations under GD's EIN)
- Infrastructure access (AWS, Cloudflare, Datadog credits shared from our stack)
- Coordination and operational support
- Visibility through gifteddreamers.org

**Who should apply:** Organizations building tools, infrastructure, or research that advances community resilience, democratic governance, or civic defense. Must be aligned with GD's principles: infrastructure not services, community control, no private capture.

**How to apply:** Contact form with project description, alignment statement, and current stage. Board reviews quarterly.

**Current sponsees:** Listed when confirmed and ready to publish.

---

## Research Page (`/research`)

### The Structurally-Curious Thesis (Tier 1 safe content only)
Two symmetric failures prevent knowledge from compounding: humans have felt sense without traversal (you can't search for what you can't name), and AI systems have traversal without felt sense (processing without grounding). The Word bridges this gap. Vocabulary is the search infrastructure for structural knowledge.

### Experiment Results
Six experiments complete with full analysis, 50+ models, 5,000+ inferences:

| Experiment | Finding | Models Tested |
|-----------|---------|---------------|
| **01: Phrasing Sensitivity** | Category ordering is architecture-invariant. Cognitive demand gradient: factual < summarization < judgment < creative. Universal across 12 providers, scale-invariant (3B–675B). | 53 |
| **02a: Premature Compression** | Universal. No model detects its own incompleteness from within a partial view. Confidence shift ≈ 0 across all models. | 22 |
| **03: Geometric Correlation** | Validated correlation between behavioral signals and representational geometry. Bridges phrasing sensitivity to internal structure. | TBD from results |
| **05: Confidence Density** | 91% of models show zero correlation between expressed confidence and actual uncertainty. Confidence language is cosmetic, not epistemic. | 34 |
| **09: Multi-Agent Consensus** | Prompt framing breaks coordination. Architecture-dependent vulnerability (some models lose 50 percentage points of consensus under adversarial framing). | 6 |
| **10: AP Rephrase Sensitivity** | AP exam reasoning is fragile — correct concepts, unstable arguments. Rephrase sensitivity persists in structured academic contexts. | 8 |

### Formal Grounding
18 papers read and synthesized across dimensional collapse, confidence calibration, performative confidence, fragile preferences, and rewarding doubt. Cross-paper synthesis showing convergence on Open Problem #20: premature compression as the defining unsolved challenge. Pre-paradigmatic at NeurIPS 2025 (~6,000 papers, no dedicated cluster for this failure mode).

### Meadows Deep Dive
Full mapping of Gifted Dreamers' work to Donella Meadows' 12 leverage points:

| # | Leverage Point | GD Work |
|---|---|---|
| 12 | Parameters/numbers | Volunteer grant rates, GRUHP amounts, credit stack terms |
| 11 | Buffer sizes | Infrastructure credit stack, Starlink backup, emergency reserves |
| 10 | Physical infrastructure | Mesh networks (Meshcore + solar + Cambium E410), community gardens, survival infrastructure |
| 9 | Delays | CaminoHelp (crisis triage in minutes), GRUHP (immediate mutual aid) |
| 8 | Negative feedback loops | GRUHP as safety net, volunteer grants recycling corporate resources to community |
| 7 | Positive feedback loop gain | CloudPublica (making consolidation spirals visible to slow them), Ontology Architecture investigation |
| 6 | Information flows | CloudPublica (structural analysis), justNICE (rights, ICE tracking), CaminoHelp (crisis resources), 375 feeds monitoring |
| 5 | Rules | Fiscal sponsorship (changes what's legally possible for emerging projects), 501(c)(3) umbrella |
| 4 | Self-organization | Common Cloud (communities control own infrastructure), open documentation, mesh networks (neighbors building their own) |
| 3 | Goals | "Deploy what institutions won't build." Reverse the flow: corporate resources → community infrastructure |
| 2 | Paradigm | The Word (vocabulary as paradigm infrastructure), experiments proving confidence is cosmetic, affect labeling research |
| 1 | Transcending paradigms | The structurally-curious stance — holding multiple paradigms simultaneously, Bridges between disciplines, naming as practice |

*Note for implementer: The table above lists leverage points 12→1 following Meadows' original numbering (12 = least effective, 1 = most effective). The homepage "Why These Together" section presents the same mapping as five layers (Physical → Digital → Information → Social → Paradigm) without numbers, bottom-up from infrastructure to paradigm. These are two views of the same structure — the homepage is accessible, the Research page is formal.*

### Intelligence Infrastructure
376 RSS feeds across 12 categories, polling every 15 minutes. Monitoring felt-experience language, structural analysis, OSINT, social triangulation. Research findings flow into The Word as vocabulary entries.

**OSINT Sentinel**: Automated polling agent on Azure VM querying USAspending (Palantir, Anduril, Clearview AI contracts), GDELT, Micah Lee ICE Contracts database, SilenceDidThis, and OCCRP Aleph every 6 hours. First findings: Anduril $363M DHS border towers, Clearview AI $3.75M DHS facial recognition, Palantir VOWS marriage-screening platform. Uses AWS Bedrock (Haiku 4.5) for analysis and 1Password service accounts for credential management.

### Connection to The Word
Research → Names → felt-sense search. Every investigation produces vocabulary. Every experiment validates or challenges existing entries. The research page shows the evidence base; The Word makes it searchable by experience.

---

## About Page (`/about`)

### Board & Leadership

#### Kristine Socall — Founder & Executive Director
> 25 years translating complexity for people who don't have time for jargon — $2.8B in client assets, 350+ bank accounts, 15 currencies, multi-year financial disasters cleaned up and explained in plain language.
>
> Six months after first touching AI, she was running a full-stack infrastructure deployment, publishing structural investigations with 110+ sources, and building vocabulary tools that bridge what people experience with what researchers have named.
>
> She doesn't command AI. She collaborates with it. The relationship between human and machine is the same one that makes therapy work, that makes teaching work: attunement, not authority.

#### Evert Bopp — Board Member
> Founder of Crisis Cognition and co-founder of Disaster Tech Lab. 15+ years deploying emergency communications technology in disaster zones — Philippines, Jamaica, Texas. Cambium Networks Connectivity Hero (2017), SSPI Better Satellite Global Humanitarian Award (2016), Da Vinci Award from Humanity Road (2013), FEMA Certificate of Recognition (2013). Six languages: English, Dutch, German, French, Indonesian, Limburgs. Based in Belgium.
>
> Evert's Crisis Cognition 0-LA system is a modular offline AI platform for disaster response — deployable in 15 minutes with solar power, mesh networking, and local AI inference. It is the physical hardware layer where community resilience infrastructure works when everything else fails.

#### Uriel Castro — Board Member
> Austin-based real estate professional with over a decade of experience at the intersection of land, community, and execution. Texas Real Estate License since 2011. Certified Negotiation Expert. Bilingual (English/Spanish). Active in Austin's Young Real Estate Professionals network. Uriel brings local community knowledge, property expertise, and grounded pragmatism to the board.

### Backbone Organization Model

From the original vision: "Like roads, power grids, and water systems enable communities to function, we provide the infrastructure that enables communities to coordinate, respond, and build resilience."

**Infrastructure, Not Services.** We don't deliver to communities. We deploy infrastructure that communities control and use to solve their own challenges.

**Democratic Governance.** Communities have decision-making power over how infrastructure is used in their context. We maintain the infrastructure; they determine priorities and implementation.

**No Private Capture.** Transparent finances, community oversight, and governance structures that prevent extraction. If Gifted Dreamers dissolved, all infrastructure transfers to community control.

**Economic Sustainability.** Revenue-generating capacity from Day 1. Corporate volunteer grants, consulting services, and reverse-engineered nonprofit credit stacks create pathways to self-sufficiency rather than ongoing dependency.

**Replicable Models.** Every tool, every guide, every piece of infrastructure is designed for adaptation by other communities. Open documentation. Knowledge sharing. We walk the path first, then show others how.

### The Vision
- Reverse the flow: corporate resources → community infrastructure
- Learn it → Document it → Teach it → Share it
- UBI goal: GRUHP becomes universal basic income when revenue exceeds operational needs
- Corporate volunteer grants: $4-7B unclaimed annually

### Legal
- Gifted Dreamers, Inc. — 501(c)(3)
- EIN: 39-3863796
- Based in Austin, TX
- All donations tax-deductible

---

## Volunteer Page (`/volunteer`)

**Separate page required** — DoubleTheDonation widget needs its own page to function.

**Hero:** "Your employer will pay us when you volunteer."

**Key stats:** Microsoft $25/hr, Google $50/hr, Salesforce $10K+/yr. $4-7B unclaimed annually.

**What you'll do:** Infrastructure deployment, AI research, security, content, community organizing. Real skills, real community impact.

**Where the money goes:** GRUHP — direct mutual aid. Zero admin fees.

**Form:** Keep existing volunteer application form + DoubleTheDonation widget.

---

## Matching Gifts Page (`/matching-gifts`)

**Separate page required** — DoubleTheDonation widget needs its own page to function.

**Hero:** "Double your impact. Your employer may match your donation."

**Widget:** DoubleTheDonation employer search/lookup.

**Context:** Brief explanation of employer matching programs and how they fund GRUHP.

---

## Donate Page (`/donate`)

**Hero:** "Fund the Infrastructure"

**General mission copy:** Brief framing of what donations support — deploying community resilience infrastructure across physical, digital, information, and social layers. Not overhead. Not salaries for a bureaucracy. Infrastructure that communities control.

**Individual funds:** Each fund displayed as a card with name, description, and its own Givebutter embed button. Funds are managed on Givebutter — the page renders whatever funds are active.

**Fund list:** TBD — Kristine will provide the current Givebutter funds and their embed codes during implementation.

**Reference pattern:** [ctxcf.org/giving-funds/](https://ctxcf.org/giving-funds/) — general giving context at top, individual named funds below.

---

## Technical Approach

### New Repository
Building in `github.com/Gifted-Dreamers/.org` — preserves prior version at `gifteddreamers/v3gifteddreamers`.

### What Changes
- **SITE-MAP-AND-COPY.md** — complete rewrite (this spec is the source)
- **pages/Home.tsx** — rewrite: hero, thesis, doorways, why-these-together, how-it's-built, GRUHP, get-involved
- **pages/About.tsx** — rewrite: three bios, backbone org model, vision
- **New: pages/WhatWeBuild.tsx** — 6 tool cards (need-oriented)
- **New: pages/Partners.tsx** — fiscal sponsorship
- **New: pages/Research.tsx** — experiments, Meadows, papers, feeds
- **New: pages/Donate.tsx** — general mission copy + individual Givebutter fund embeds
- **pages/Volunteer.tsx** — reframe (keep form/DTD integration)
- **pages/MatchingGifts.tsx** — keep as separate page (keep DTD integration)
- **components/Navbar.tsx** — update nav links
- **components/Footer.tsx** — update footer links
- **App.tsx** — update routes, remove old pages

### What's Removed
- pages/Services.tsx
- pages/FAQ.tsx
- pages/CommonCloud.tsx (content folded into What We Build)
- pages/Gruhp.tsx (content folded into What We Build + homepage callout)
- pages/CorporatePartners.tsx (content folded into Partners)

### What's Kept As-Is
- pages/Contact.tsx
- pages/Privacy.tsx (updated to match commoncloud.cc version — see `/privacy` row in page table)
- pages/Terms.tsx
- components/ContactForm.tsx
- components/CookieConsent.tsx
- Build system (Vite + React + Tailwind)
- Analytics (GA4 with consent)
- Givebutter integration
- DoubleTheDonation integration

### Design System
- Keep existing Tailwind config and color scheme
- Keep existing font (if it works with new tone)
- Doorway cards should use the feeling-card style from justNICE blogs (gold left border, gradient background) — warm, not corporate
- Consider justNICE's maroon (#8B1A2B) + gold (#F5A623) palette as influence — the felt-experience voice should feel consistent across GD sites
- Pullquote styling from justNICE articles for thesis section

### Deployment
- Build in new repo: `Gifted-Dreamers/.org`
- Same CI/CD pattern: GitHub Actions → build → deploy
- Same hosting: AWS via SCP (or migrate to CF Pages if appropriate)

---

## Success Criteria

1. **The 2am person:** Arrives scared. In 10 seconds sees "Something is wrong and you know it. You're not crazy." In 30 seconds finds a doorway to what they need — The Word, justNICE, CaminoHelp, or GRUHP. Leaves feeling less alone.

2. **The funder/reviewer:** Arrives evaluating. In 30 seconds understands: this is a backbone organization deploying real infrastructure across multiple leverage points, with validated research and live tools. Finds the Research page within one click.

3. **The ally/researcher:** Arrives curious. Sees the Meadows framework, the experiment results, the 18-paper synthesis. Knows where to plug in — volunteer, bring a project, contribute to The Word.

4. **The community builder:** Arrives looking for tools. Finds justNICE preparedness guides, Common Cloud infrastructure documentation, mesh networking how-tos. Sees "every tool we use, you can get" and believes it.

5. **Disclosure discipline:** UnrigUSA not mentioned. Moltbook not mentioned. Agent-facing architecture not exposed. Tiering respected. No "feel" in headlines. No "program," "service," or "platform" to describe GD's work.

6. **Infrastructure identity preserved:** The v1 backbone organization framing — infrastructure not services, democratic governance, no private capture, community transfer on dissolution, replicable models — is clearly present in About and threads through the entire site.
