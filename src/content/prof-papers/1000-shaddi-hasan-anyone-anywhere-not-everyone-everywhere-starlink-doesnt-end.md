---
title: "1000 · Anyone, Anywhere, not Everyone, Everywhere: Starlink Doesn’t End the Digital Divide — Shaddi Hasan"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shaddi-hasan"
source_hash: "ea9ac794f0f00da885ee35aa779ec0e520c9e517b9295b61e615bb9e6b2b01e1"
sequence: 1000
generator: "outreach-garden: managed"
---

# 1000 · Anyone, Anywhere, not Everyone, Everywhere: Starlink Doesn’t End the Digital Divide

## At a glance

- **Professor:** Shaddi Hasan
- **Institution:** Virginia Tech
- **Paper:** [Anyone, Anywhere, not Everyone, Everywhere: Starlink Doesn’t End the Digital Divide](https://dl.acm.org/doi/pdf/10.1145/3772356.3772383)
- **Authors:** Wesley Woo, Juan Fraire, Sylvia Ratnasamy, Scott Shenker, Shaddi Hasan
- **Year:** 2025

## Paper overview

This paper analyzes the limitations of Starlink, a low Earth orbit (LEO) satellite internet service, in bridging the digital divide in the United States. It finds that despite Starlink's technological advances, its current satellite constellation size and pricing model are insufficient to provide universal, affordable, and reliable internet access to all underserved and unserved locations. The study highlights capacity constraints driven by peak demand and affordability barriers, concluding that Starlink is only part of the solution and cannot fully close the digital divide alone.

### Why it matters

**Research problem:** Can Starlink's current and future LEO satellite constellation provide universal, meaningful, and affordable internet access to all unserved and underserved residential locations in the United States?

**Why it matters:** Universal and meaningful internet access is critical for health, education, emergency services, and economic inclusion. Despite widespread coverage, many populations remain unserved or underserved due to capacity and affordability issues, perpetuating socioeconomic inequalities. Understanding the limits of new technologies like Starlink is essential to inform policy and complementary solutions to close the digital divide.

**Key contributions:**

- A capacity model for Starlink that links peak demand density to constellation size requirements.
- Quantitative analysis showing that Starlink's current constellation (~8,000 satellites) is insufficient to serve all un(der)served US locations without high oversubscription or a constellation size exceeding 40,000 satellites.
- Affordability analysis demonstrating that approximately 74.5% of un(der)served locations cannot afford Starlink's residential plan even with subsidies.
- Identification of diminishing returns in serving the long tail of low-density locations, disincentivizing constellation scaling.
- A critical perspective cautioning against viewing LEO constellations as a silver bullet for the digital divide.

## About the professor

**Shaddi Hasan** — Assistant Professor, Computer Science, Virginia Tech.

Research interests: networks, information and communication technologies for development (ICTD), HCI, and distributed systems

### Research links

- [Faculty/profile page](https://people.cs.vt.edu/shaddi)
- [Professor website](https://www.shaddih.com/)
- [Google Scholar](https://scholar.google.com/citations?user=IHburiYAAAAJ&hl=en&inst=13410158990364976897)
- [GitHub](https://www.github.com/spin-vt)
- [Social profile](https://twitter.com/shaddih)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Satellite Network Capacity Modeling
**The paper assumes:** satellite communication systems capacity modeling, network traffic demand analysis, and spectrum allocation principles
**Already in this field?** Skip this entirely if you already understand satellite network capacity modeling and how physical and regulatory constraints affect constellation design and service quality.

To understand the core analytical model in this paper about Starlink's satellite network capacity and its limitations, background knowledge on satellite network capacity modeling is essential. The rigorous course option provides a deep, structured university-level introduction to satellite communication principles, including spectrum, beamforming, and link budgets, which underpin capacity modeling. The fast track offers a concise, visual explainer series on satellite communication systems that covers key concepts quickly for those with limited time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [satellite communication by nptel](https://www.youtube.com/playlist?list=PLAnjLC20C-XQnoowCtt-67WmyxoQPu2Fi) — Mahesh Doddi · 40 videos · 18.5h across 40 episodes

**Watch only this:** Watch episodes 1-16 (Introduction through Link Budget 7), about 7.5 hours — these cover satellite orbits, space segment design, and the critical link budget calculations that determine capacity constraints.

*Why it unblocks this paper:* This NPTEL course on satellite communication by Mahesh Doddi covers detailed technical aspects such as orbits, space and ground segments, and link budgets, which are fundamental to understanding satellite network capacity modeling relevant to the paper's analytical approach.

*If you want all of it:* All 40 episodes, about 18.5 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Satellite Communication Systems — Complete Technology Series](https://www.youtube.com/playlist?list=PLFgx_ju5UJXkKgOgMwCnvpSaR5XCcK9rS) — Parag Kar · 6 videos · 1.1h across 6 episodes

**Watch only this:** Watch episodes 1-4 (Why Satellite Links Are So Difficult; Satellite Spectrum Sharing; Why Satellite Systems Use FDD; Satellite Network Architecture), about 44 minutes — these cover the essential concepts of satellite capacity, spectrum, and network design.

*Why it unblocks this paper:* This short series breaks down complex satellite technology concepts into simple visual explanations, including spectrum sharing, satellite network architecture, and beamforming, providing an accessible overview of satellite network capacity relevant to the paper.

*If you want all of it:* All 6 episodes, about 1.1 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper's analysis of Starlink's limitations in bridging the digital divide, start with foundational knowledge of satellite communication systems and the socioeconomic context of the digital divide. Then, build technical understanding of network capacity planning, oversubscription, and spectrum allocation with beamforming in satellite networks. Finally, focus on the core concept of modeling Starlink's constellation capacity and constraints, culminating with the authors' own talk presenting their findings.

### Satellite communication systems fundamentals *(prerequisite)*
This section provides foundational knowledge about satellite communication principles, frequency bands, and system architectures essential for understanding how LEO satellite networks like Starlink operate. The selected lecture is a university-level course introduction covering recent developments and future trends in satellite communications engineering.

*How the paper uses it:* Understanding satellite communication fundamentals is critical to grasping the physical and regulatory constraints modeled in the paper.

▶ [Lecture 1 Introduction to satellite communications engineering](https://www.youtube.com/watch?v=ZyUfNT00Vx8) — Space Technology and Systems · 39:20 · 3y ago

### Digital divide and broadband access *(prerequisite)*
This section covers the socioeconomic and geographic factors affecting internet access, including policy and infrastructure challenges in closing the digital divide. The chosen panel discussion features experts and policymakers addressing broadband deployment and adoption, providing context for why universal access is critical.

*How the paper uses it:* The paper's motivation centers on the digital divide and the limitations of Starlink in addressing it, making this context essential.

▶ [APAICS Technology Summit | Closing the Digital Divide: Broadband Infrastructure and Access](https://www.youtube.com/watch?v=bxPICcIO2Ik) — Asian Pacific American Institute for Congressional Studies · 43:05 · 1y ago

### Network capacity planning and oversubscription *(prerequisite)*
This section explains the principles of capacity planning and oversubscription trade-offs in wireless and cellular networks, which are directly analogous to the challenges faced by LEO satellite constellations in serving peak demand. The selected webinar provides a detailed, technical overview suitable for advanced readers.

*How the paper uses it:* The paper's capacity model hinges on understanding oversubscription and capacity planning to evaluate Starlink's constellation size requirements.

▶ [Webinar: The Fundamentals of LTE Radio Planning and Optimisation](https://www.youtube.com/watch?v=vw6P-_k88Iw) — Telecoms & Tech Academy · 54:13 · 7y ago

### Spectrum allocation and beamforming in satellite networks *(prerequisite)*
This section delves into spectrum allocation constraints and beamforming techniques that affect satellite network capacity and constellation design. The chosen lecture from a reputable Indian Institute of Science course offers a rigorous introduction to beamforming relevant to Starlink's technical constraints.

*How the paper uses it:* The paper highlights spectrum allocation and beamforming as key technical constraints influencing Starlink's capacity and constellation scaling.

▶ [Lec 31 Introduction to Beamforming](https://www.youtube.com/watch?v=PbRq8YOlquk) — NPTEL - Indian Institute of Science, Bengaluru · 33:48 · 2y ago

### LEO satellite network capacity modeling
This section focuses on the core technical modeling of LEO satellite constellation capacity and the challenges in scaling to meet demand. The selected seminar talk from an IEEE-affiliated research group covers recent advances and challenges in massive LEO constellations, directly relating to the paper's analytical approach.

*How the paper uses it:* The paper's key contribution is an analytical model linking peak demand to Starlink constellation size, making this topic central.

▶ [IoT-over-Satellite / Massive LEO Constellations, challenges and opportunities](https://www.youtube.com/watch?v=f3WZ2bc2LnQ) — Space Technology and Systems · 19:29 · 5y ago

### Starlink digital divide talk *(paper-talk search result; attribution unverified)*
This section presents the authors' own talk on their research findings analyzing Starlink's limitations in bridging the digital divide. It provides direct insight into their methodology, results, and policy implications from the primary source.

*How the paper uses it:* This is the authors' own recorded presentation of the paper, offering the most direct and authoritative explanation of their work.

▶ [Elon Musk Starlink Bridging The Digital Divide](https://www.youtube.com/watch?v=KnJTmn8sr-g) — JCristina · 13:19 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand the paper's analysis of Starlink's limitations in bridging the digital divide. Starting with the basics of satellite communication systems, it then covers the socioeconomic context of the digital divide and broadband access. Next, it explains network capacity planning and oversubscription trade-offs, followed by spectrum allocation and beamforming techniques critical to satellite network design. Finally, it presents the core concept of modeling capacity constraints in LEO satellite constellations like Starlink, enabling a clear grasp of the paper's key contributions and results.

### Satellite communication systems fundamentals *(prerequisite)*
Learn how satellite communication works, including the types of orbits, frequency bands, and basic system components. This foundational knowledge helps understand how data is transmitted between satellites and ground stations, which is essential for grasping Starlink's architecture.

*How the paper uses it:* The paper analyzes Starlink, a LEO satellite internet system, so understanding satellite communication basics is essential.

▶ [Lecture 1 Introduction to satellite communications engineering](https://www.youtube.com/watch?v=ZyUfNT00Vx8) — Space Technology and Systems · 39:20 · 3y ago

### Digital divide and broadband access *(prerequisite)*
Explore what the digital divide means, focusing on socioeconomic and geographic factors that cause disparities in internet access. This context clarifies why universal, affordable connectivity is critical and why Starlink's role is under scrutiny.

*How the paper uses it:* The paper studies Starlink's ability to close the digital divide in underserved US locations.

▶ [The Digital Divide, Explained](https://www.youtube.com/watch?v=aMi3ky04XqY) — Freethink · 6:49 · 6y ago

### Network capacity planning and oversubscription *(prerequisite)*
Understand how network capacity is planned and the concept of oversubscription, where more users share limited bandwidth, affecting service quality. This knowledge is key to appreciating the paper's capacity modeling and oversubscription trade-offs.

*How the paper uses it:* The paper models capacity constraints and oversubscription ratios to evaluate Starlink's service quality.

▶ [Webinar: The Fundamentals of LTE Radio Planning and Optimisation](https://www.youtube.com/watch?v=vw6P-_k88Iw) — Telecoms & Tech Academy · 54:13 · 7y ago

### Spectrum allocation and beamforming in satellite networks *(prerequisite)*
Learn about spectrum allocation—the distribution of frequency bands for communication—and beamforming, a technique to direct signals efficiently. These technical constraints directly influence Starlink's capacity and constellation design.

*How the paper uses it:* The paper discusses how Starlink's spectrum limits and beamforming strategies affect capacity and constellation size.

▶ [What is Beamforming? ("the best explanation I’ve ever heard")](https://www.youtube.com/watch?v=A1n5Hhwtz78) — Iain Explains Signals, Systems, and Digital Comms · 8:53 · 6y ago

### LEO satellite network capacity modeling
Dive into the core method of modeling how many satellites are needed to meet peak demand in a LEO constellation like Starlink. This includes understanding how demand density drives constellation size and the diminishing returns of scaling to low-density areas.

*How the paper uses it:* This is the paper's central analytical model linking demand, capacity, and constellation size to assess Starlink's limitations.

▶ [IoT-over-Satellite / Massive LEO Constellations, challenges and opportunities](https://www.youtube.com/watch?v=f3WZ2bc2LnQ) — Space Technology and Systems · 19:29 · 5y ago

### Starlink digital divide talk
Watch a detailed explanation of how Starlink satellite internet works, including its technical operation and challenges. This video provides practical insight into the system analyzed in the paper.

*How the paper uses it:* Gives a clear overview of Starlink's technology, grounding the paper's analysis in real-world system details.

▶ [How does Starlink Satellite Internet Work?📡☄🖥](https://www.youtube.com/watch?v=qs2QcycggWU) — Branch Education · 28:09 · 4y ago

## Already in your library

- [LEO Satellite Networks: Brief Introduction to Communications Challenges](https://www.youtube.com/watch?v=1tw4SmS4Pc4) — also for: StarCDN: Moving Content Delivery Networks to Space (Ramesh K. Sitaraman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's analysis of Starlink's capacity and affordability limits in bridging the digital divide. The beginner project recreates a core capacity-vs-demand model visualization using public data and simple calculations. The intermediate project implements the paper's constellation sizing model on a smaller dataset, comparing oversubscription effects. The advanced project extends the paper by exploring complementary technologies or policy scenarios to address affordability and capacity gaps, engaging with the paper's stated future directions.

### Beginner — Starlink Capacity vs. Peak Demand Visualization
*Effort: a weekend, ~8 hours*

You build a simple interactive dashboard that visualizes the relationship between peak broadband demand density and required Starlink constellation size for selected US regions. Using FCC National Broadband Map data (publicly available) as a proxy for demand density, you plot how increasing demand density drives constellation size requirements, illustrating the paper's key capacity model concept.

**Why it shows you understood the paper:** This project shows you grasp the core insight that peak demand density—not total demand—determines constellation size, and you can translate that into a clear, data-driven visualization reflecting the paper's capacity model.

**Grounded in:** Key contribution: 'A capacity model for Starlink that links peak demand density to constellation size requirements.'

**Tech stack:** Python 3.11, Pandas, Matplotlib or Plotly, Jupyter Notebook

**Data:** Use FCC National Broadband Map data publicly available from the FCC website as a proxy for peak demand density.

**Build it:**

1. Download and preprocess FCC National Broadband Map data to extract peak demand density per census block or county.
2. Implement the paper's simplified capacity model formula linking peak demand density to constellation size requirements.
3. Create plots showing constellation size vs. peak demand density for selected regions.
4. Build an interactive Jupyter Notebook or simple web dashboard to explore different demand densities and constellation sizes.
5. Document the model assumptions and how the visualization relates to the paper's findings.

**Ships as:** A Jupyter Notebook or small web app with interactive plots demonstrating the capacity model and its dependence on peak demand density.

**Stretch goal:** Add affordability overlays by incorporating median income data to highlight regions where capacity alone is insufficient.

### Intermediate — Reimplementation of Starlink Constellation Sizing Model
*Effort: 1-3 weekends*

You implement the paper's analytical model estimating the constellation size needed to serve unserved and underserved US locations under varying oversubscription ratios. Using publicly available broadband demand data and median income proxies, you replicate the capacity and affordability analyses on a smaller scale, comparing results to a simple baseline that ignores peak demand density.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method from its description, quantitatively analyze capacity and affordability constraints, and understand the trade-offs Starlink faces in scaling its constellation.

**Grounded in:** Key results: 'Starlink would need to increase its constellation size by more than five times...'; '74.5% of un(der)served locations cannot afford Starlink’s $120/month plan even with subsidies.'

**Tech stack:** Python 3.11, Pandas, NumPy, Matplotlib, Jupyter Notebook

**Data:** Use FCC National Broadband Map data for broadband demand and US Census median income data as proxies; no authors' code is available, so reimplement from paper descriptions.

**Build it:**

1. Collect and preprocess FCC broadband demand and US Census income data for a representative subset of locations.
2. Implement the paper's constellation sizing model that links peak demand density and oversubscription ratios to required satellite counts.
3. Calculate affordability metrics using median income and subsidy assumptions.
4. Compare your model's constellation size estimates to a baseline ignoring peak demand density (e.g., total demand only).
5. Visualize and report the capacity vs. affordability trade-offs and oversubscription impacts.
6. Write a README explaining your implementation, assumptions, and how results align with the paper.

**Ships as:** A documented Jupyter Notebook or Python package that reproduces key capacity and affordability analyses from the paper on a smaller dataset, with comparison to a baseline model.

**Stretch goal:** Incorporate a simple sensitivity analysis on pricing or subsidy levels to explore affordability improvements.

### Advanced — Exploring Complementary Solutions to Starlink's Digital Divide Limits
*Effort: a few weeks*

You extend the paper by modeling and simulating complementary technologies or policy interventions to address Starlink's capacity and affordability gaps. For example, you could simulate hybrid network architectures combining LEO satellites with fixed wireless or community networks, or model subsidy scenarios improving affordability. You analyze how these approaches affect coverage, capacity, and cost trade-offs, addressing the paper's future directions.

**Why it shows you understood the paper:** This project shows you can critically engage with the paper's limitations and future directions, applying your engineering and modeling skills to propose and evaluate practical extensions beyond the original analysis.

**Grounded in:** Future directions: 'Exploring complementary technologies and business models to address gaps left by LEO constellations.'; 'Investigating policy interventions to improve affordability and subsidy effectiveness.'

**Tech stack:** Python 3.11, Pandas, NumPy, Matplotlib, Jupyter Notebook, Optional: simulation libraries like SimPy or networkx

**Data:** Use FCC broadband demand data, US Census income data, and publicly available parameters for complementary technologies; simulate or model scenarios as needed.

**Build it:**

1. Review the paper's limitations and future directions to select a complementary technology or policy intervention to model.
2. Gather data and parameters relevant to the chosen extension (e.g., fixed wireless coverage, subsidy levels).
3. Develop a simulation or analytical model combining Starlink capacity constraints with the complementary solution.
4. Analyze how the combined approach affects coverage, capacity, oversubscription, and affordability metrics.
5. Visualize results comparing baseline Starlink-only scenarios to your extended model.
6. Document your methodology, assumptions, and implications for closing the digital divide.

**Ships as:** A comprehensive project repository with code, simulations, and analysis demonstrating how complementary solutions can mitigate Starlink's limitations, including visualizations and a detailed README.

**Stretch goal:** Incorporate user demand variability or multi-tenant architectures to further refine capacity modeling.
