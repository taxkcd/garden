---
title: "396 · Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models — Mohammad A. Islam"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mohammad-a-islam"
source_hash: "a1de540f785ae4453a97421c0d076f482a7e483222e1a6e8307f2faa84e414be"
sequence: 396
generator: "outreach-garden: managed"
---

# 396 · Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models

## At a glance

- **Professor:** Mohammad A. Islam
- **Institution:** University of Texas at Arlington
- **Paper:** [Making AI Less “Thirsty”: Uncovering and Addressing the Secret Water Footprint of AI Models](https://arxiv.org/abs/2304.03271)
- **Authors:** Pengfei Li, Jianyi Yang, Mohammad A. Islam, Shaolei Ren
- **Year:** 2025

## Paper overview

This paper reveals the significant but often overlooked water consumption of AI models, especially large ones like GPT-3. It estimates how much freshwater is used in training and running AI, highlights the environmental impact, and proposes methods to measure and reduce this water footprint for more sustainable AI development.

### Why it matters

**Research problem:** The water footprint of AI models, including water withdrawal and consumption for data center cooling and electricity generation, is largely hidden and unaddressed, despite its growing environmental and social impact.

**Why it matters:** AI's water usage is projected to be enormous, potentially exceeding the annual water withdrawal of several countries, which is critical given global freshwater scarcity and the uneven distribution of water resources. Ignoring this footprint risks exacerbating water stress and undermining sustainability efforts.

**Key contributions:**

- A comprehensive methodology to estimate AI's water footprint covering operational and embodied water.
- Quantitative case study estimating GPT-3's water consumption during training and inference across various data center locations.
- Identification of spatial and temporal diversity in water usage efficiency, enabling strategies to reduce water footprint by scheduling AI workloads.
- Recommendations for increased transparency and reporting of AI water consumption, including scope-2 water use.
- Highlighting the need to address water footprint alongside carbon footprint for truly sustainable AI.

## About the professor

**Mohammad A. Islam** — Assistant Professor, Computer Science and Engineering, University of Texas at Arlington.

Research interests: computer systems research, Cloud, Economics of Computing, Distributed Systems, High-Performance Computing, Security and Privacy, Edge Computing, Cyber-Physical Systems, IoT, and Sensors

### Research links

- [Faculty/profile page](http://crystal.uta.edu/~mislam)
- [Resolved homepage](https://crystal.uta.edu/~mislam/)
- [Google Scholar](https://scholar.google.com/citations?user=rxKWd1cAAAAJ&hl=en)
- [ORCID](https://orcid.org/0000-0002-5778-4366)
- [ResearchGate](https://www.researchgate.net/profile/Mohammad_Islam87)
- [DBLP](https://dblp.uni-trier.de/pers/hd/i/Islam_0001:Mohammad_A=)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Data Center Resource Management
**The paper assumes:** data center infrastructure, resource consumption metrics, and operational management
**Already in this field?** Skip this entirely if you already understand how data centers operate, including their cooling systems, energy and water usage, and resource management strategies.

This background prepares the reader to understand the water and energy resource management aspects of data centers, which is critical for grasping the paper's methodology on AI's water footprint and workload scheduling for sustainability. The rigorous course offers a detailed, structured exploration of data center design and operations, while the fast track provides concise, focused explainers on key data center concepts and water usage, suitable for a quicker but still substantive overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Data Center Facts](https://www.youtube.com/playlist?list=PLXZ-qI5ZBWhxI4H8KtLHPdCjfmTe-rE21) — Data Center News · 19 videos · 1.0h across 19 episodes

**Watch only this:** Episodes 2 (The Truth About Data Center Water Usage), 3 (Data Center Cooling: Early Design Decisions), 4 (Data Center Hot & Cold Spots Explained), and 12 (Innovations In Data Center Cooling), about 12 minutes total — these episodes succinctly cover water use and cooling strategies critical to the paper's topic.

*Why it unblocks this paper:* This short-form series provides clear, concise explainers on data center water usage, cooling methods, and efficiency concepts, directly relevant to the paper's focus on water footprint and operational water use, making it an efficient primer for readers pressed for time.

*If you want all of it:* Approximately 1.0 hour across all 19 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on AI's water footprint, start with foundational knowledge on water footprint estimation methods, electricity generation water consumption, and data center cooling and water use, as these underpin the paper's methodology and context. Then, focus on sustainable AI workload scheduling to grasp optimization strategies for reducing water use. Finally, study the authors' own talk presenting their research findings for direct insights into their approach and results.

### Water footprint estimation methods *(prerequisite)*
This section covers the methodologies to quantify water use, including operational and embodied water footprints, which form the basis for the paper's comprehensive estimation approach. Understanding these methods is essential to appreciate how the authors measure AI's water consumption.

*How the paper uses it:* The paper develops a principled methodology to estimate AI's total water footprint, relying on established water footprint estimation techniques.

▶ [Carbon- & water footprinting, and Life-cycle Assessment (LCA ...](https://www.youtube.com/watch?v=WtsFko-4KWc) — Process Engineering Fundamentals (Kevin Harding) · 1:35:17

### Electricity generation water consumption *(prerequisite)*
Since scope-2 water consumption from electricity generation is a significant part of AI's water footprint, this section explains how water is used in power production, especially hydropower and thermal plants. This knowledge is critical to understand the indirect water use associated with AI workloads.

*How the paper uses it:* The paper highlights scope-2 water consumption from electricity generation as a major but often overlooked component of AI's water footprint.

▶ [Hydroelectric Power Lecture | David Freyberg | Stanford ...](https://www.youtube.com/watch?v=rkQRBBwvhBs) — Stanford Understand Energy · 1:14:08

### Data center cooling and water use *(prerequisite)*
Data centers use large amounts of water for cooling, a key operational water use in AI infrastructure. This section explains cooling technologies and their water demands, providing context for the paper's operational water footprint analysis.

*How the paper uses it:* Operational water use for data center cooling is a core part of the paper's estimation of AI's water footprint.

▶ [How Data Centers Manage Intense Heat: Cooling Systems Explained](https://www.youtube.com/watch?v=JYmu1eNvfNQ) — Equinix · 1 year ago

### Sustainable AI workload scheduling
This section focuses on strategies to reduce AI's water footprint by optimizing when and where AI workloads run, balancing water and carbon efficiency. It directly relates to the paper's proposal for water-wise scheduling to mitigate environmental impact.

*How the paper uses it:* The paper identifies spatial-temporal diversity in water usage effectiveness and suggests scheduling AI workloads accordingly to reduce water consumption.

▶ [How you write an AI prompt dramatically changes its carbon ...](https://www.youtube.com/watch?v=BbYo-SGituY) — TEDx Talks · 8:34

### Paper authors talk on AI water footprint *(the paper's own talk)*
The authors' own talk provides a direct and detailed presentation of their research findings, methodology, and implications, offering the most authoritative and comprehensive insight into the paper's contributions.

*How the paper uses it:* This is the authors' presentation of their work on uncovering and addressing AI's water footprint.

▶ [Ingredients: Dr. Shaolei Ren on AI's extraordinary water ...](https://www.youtube.com/watch?v=Vqvb3G8hJiI) — Proof News · 24:31

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces the environmental impact of AI focusing on water consumption, starting with foundational concepts of water footprint estimation and data center water use. It then covers electricity generation's water impact before concluding with sustainable AI workload scheduling strategies to reduce water use, directly tying to the paper's core contributions.

### Water footprint estimation methods *(prerequisite)*
Learn what a water footprint is and how it is measured, including direct and indirect water use. This foundational knowledge helps understand how AI's water consumption can be quantified and compared to other sectors.

*How the paper uses it:* The paper develops a comprehensive methodology to estimate AI's water footprint, including operational and embodied water.

▶ [Water Footprint - What is a water footprint? how to Calculate it ...](https://www.youtube.com/watch?v=nZtFTVy_Lqg) — Do Question · 9:36

### Data center cooling and water use *(prerequisite)*
Understand how data centers use water primarily for cooling servers that run AI workloads. This explains a major component of AI's operational water consumption and why location and cooling technology matter.

*How the paper uses it:* Data center cooling is a key operational water use component in AI infrastructure analyzed in the paper.

▶ [Why Do AI Data Centres Use So Much Water? | Explained](https://www.youtube.com/watch?v=DpfffbzEcno) — Business Today · 5:13

### Electricity generation water consumption *(prerequisite)*
Explore how generating electricity, especially from certain fuel sources, consumes significant water, contributing to AI's indirect water footprint. This helps grasp scope-2 water use from power production.

*How the paper uses it:* Scope-2 water consumption from electricity generation is a significant but often overlooked part of AI's water footprint.

▶ [Fuel Switching Can Save Water: Freshwater Use for Coal Vs ...](https://www.youtube.com/watch?v=0heQYWhlT8c) — Yale University · 51:49

### Sustainable AI workload scheduling
Discover strategies to reduce AI's water footprint by choosing when and where to run AI workloads based on water usage effectiveness and carbon impact. This introduces practical solutions for sustainable AI operations.

*How the paper uses it:* The paper proposes water-wise scheduling of AI workloads to exploit spatial-temporal variations in water efficiency and reduce water consumption.

▶ [How you write an AI prompt dramatically changes its carbon ...](https://www.youtube.com/watch?v=BbYo-SGituY) — TEDx Talks · 8:34

### Paper authors talk on AI water footprint *(the paper's own talk)*
Hear directly from the authors about their findings on AI's hidden water footprint, including key results and recommendations. This provides authoritative context and highlights the paper's significance.

*How the paper uses it:* Direct source for the authors’ presentation of their findings on AI water consumption and sustainability.

▶ [Ingredients: Dr. Shaolei Ren on AI's extraordinary water ...](https://www.youtube.com/watch?v=Vqvb3G8hJiI) — Proof News · 24:31


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's core contributions on AI's water footprint. The beginner project reproduces a key metric visualization using public data and simple calculations. The intermediate project implements the paper's water footprint estimation methodology on a smaller scale with real electricity and cooling water data, comparing water usage effectiveness across locations. The advanced project extends the paper by designing a prototype scheduler that dynamically balances AI workload placement for both water and carbon efficiency using real-time data, addressing a key future direction.

### Beginner — Visualize Water Usage Effectiveness Variation
*Effort: a weekend, ~8 hours*

You build a simple interactive visualization of water usage effectiveness (WUE) variation across different data center locations and times, based on the paper's reported ranges and spatial-temporal patterns. This involves extracting key numeric estimates from the paper and plotting them with JavaScript/React.

**Why it shows you understood the paper:** This project shows you understand the concept of WUE, its spatial-temporal variability, and its importance for scheduling AI workloads to reduce water footprint.

**Grounded in:** Key result: "Water usage effectiveness (WUE) varies significantly by location and time, suggesting that choosing when and where to run AI can reduce water consumption."

**Tech stack:** JavaScript, React, D3.js or similar visualization library

**Data:** Simulated data derived from numeric ranges and examples reported in the paper's figures and text, since no raw dataset is provided.

**Build it:**

1. Extract numeric WUE values and their spatial-temporal variation examples from the paper text and figures.
2. Create a React app with a simple UI to select location and time parameters.
3. Implement a visualization (e.g., line chart or heatmap) showing WUE variation over time for selected locations.
4. Add explanatory text referencing the paper's findings on WUE variability.
5. Test the app locally and prepare a README explaining the connection to the paper.

**Ships as:** A GitHub repo with a React visualization app demonstrating WUE variation and a README linking the visualization to the paper's key results.

**Stretch goal:** Add user controls to simulate scheduling decisions that pick low-WUE times/locations and show potential water savings.

### Intermediate — Estimate AI Water Footprint Using Public Data
*Effort: 2 weekends, ~20 hours*

You implement the paper's core methodology to estimate AI's water footprint by combining operational water use (cooling water) and scope-2 water from electricity generation. Using publicly available electricity water consumption data (e.g., from U.S. EPA eGRID) and cooling water assumptions, you estimate water use for a smaller AI training workload across multiple locations and compare water usage effectiveness.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's water footprint estimation approach and apply it to real-world data, reproducing the paper's insight about spatial variation and the significance of scope-2 water use.

**Grounded in:** Key contribution: "A comprehensive methodology to estimate AI's water footprint covering operational and embodied water." Key result: "Scope-2 water consumption from electricity generation is a significant part of AI's water footprint but is often overlooked."

**Tech stack:** Python 3.11, Pandas, Matplotlib or Seaborn, Requests or similar for data fetching

**Data:** Public electricity water consumption data from U.S. EPA eGRID data explorer ((link removed — unverified)) used as a proxy for scope-2 water; cooling water use assumptions based on paper's reported values.

**Build it:**

1. Download and preprocess electricity water consumption data from EPA eGRID for selected U.S. data center regions.
2. Define a smaller AI training workload energy profile (e.g., scaled-down GPT-3 training or a known ML benchmark).
3. Calculate operational water use for cooling based on typical data center water use effectiveness assumptions from the paper.
4. Combine scope-2 water from electricity generation with operational water to estimate total water footprint per location.
5. Visualize and compare water usage effectiveness across locations and discuss implications.
6. Write a report linking your methodology and results to the paper's approach and findings.

**Ships as:** A Python repo with scripts to estimate and visualize AI water footprint across locations using public data, plus a detailed README explaining the methodology and comparison to the paper.

**Stretch goal:** Incorporate temporal variation in water usage effectiveness by integrating seasonal or hourly electricity water use data if available.

### Advanced — Prototype AI Workload Scheduler Balancing Water and Carbon Footprints
*Effort: 3+ weeks*

You design and implement a prototype scheduling system that dynamically assigns AI training or inference workloads to data centers based on real-time or simulated water usage effectiveness and carbon intensity data. This system aims to optimize for both water and carbon efficiency simultaneously, addressing the paper's future direction of holistic sustainability-aware scheduling.

**Why it shows you understood the paper:** This project tackles a key future direction from the paper by integrating spatial-temporal water footprint data with carbon footprint data to inform AI workload placement, demonstrating deep comprehension of the paper's methodology, limitations, and sustainability challenges.

**Grounded in:** Future direction: "Design of scheduling algorithms that optimize AI training and inference for both carbon and water efficiency." Key result: "Optimizing for carbon efficiency alone may worsen water efficiency due to differing dependencies on fuel mixes and weather."

**Tech stack:** Python 3.11, FastAPI or Flask for API, React for frontend dashboard, Pandas, Simulated or public datasets for water and carbon footprints

**Data:** Simulated or publicly available datasets for water usage effectiveness (e.g., from the paper's cited sources or EPA eGRID) and carbon intensity (e.g., from public carbon intensity APIs or datasets). No direct access to the paper's proprietary data.

**Build it:**

1. Research and gather public or simulated datasets for water usage effectiveness and carbon intensity across multiple data center locations and times.
2. Design a scheduling algorithm that takes water and carbon footprint metrics as input and outputs workload placement decisions balancing both.
3. Implement a backend service exposing scheduling decisions via API.
4. Build a frontend dashboard to visualize current water and carbon footprints and show scheduling recommendations.
5. Test the scheduler with simulated AI workloads and analyze trade-offs between water and carbon efficiency.
6. Document the system design, algorithm rationale, and how it addresses the paper's future direction.

**Verified links from the paper:**

- <https://huggingface.co/spaces/genai-impact> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A full-stack prototype with backend scheduling logic and frontend visualization demonstrating dynamic AI workload scheduling balancing water and carbon footprints, with documentation linking to the paper's future directions.

**Stretch goal:** Integrate real-time data feeds from public APIs or simulated sensors to update scheduling decisions dynamically.

_The paper's authors released no code or datasets; public data like EPA eGRID is used as a proxy. Exact AI workload energy profiles and cooling water use must be approximated from the paper's reported values and public sources._
