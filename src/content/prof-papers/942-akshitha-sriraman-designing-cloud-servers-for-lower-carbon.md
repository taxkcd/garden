---
title: "942 · Designing Cloud Servers for Lower Carbon — Akshitha Sriraman"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-akshitha-sriraman"
source_hash: "6652530797df8a0172b26a78ec4938a2619a88c92f767d925de7ac3c4df3e048"
sequence: 942
generator: "outreach-garden: managed"
---

# 942 · Designing Cloud Servers for Lower Carbon

## At a glance

- **Professor:** Akshitha Sriraman
- **Institution:** Carnegie Mellon University
- **Paper:** [Designing Cloud Servers for Lower Carbon](https://www.microsoft.com/en-us/research/uploads/prodnew/2024/03/2024-GreenSKU-ISCA2024.pdf)
- **Authors:** Jaylen Wang, Daniel S. Berger, Fiodar Kazhamiaka, Celine Irvene, Chaojie Zhang, Esha Choukse, Kali Frost, Rodrigo Fonseca, Brijesh Warrier, Chetan Bansal, Jonathan Stern, Ricardo Bianchini, Akshitha Sriraman
- **Year:** 2026

## Paper overview

This paper addresses the significant carbon emissions caused by cloud compute servers and proposes designing new carbon-efficient server configurations called GreenSKUs. These GreenSKUs use low-carbon components like energy-efficient CPUs, reused DRAM via CXL, and reused SSDs to reduce both operational and embodied emissions. The authors develop a framework (GSF) to evaluate the carbon savings of these designs at scale within Microsoft Azure. Their results show that GreenSKUs can reduce emissions per core by up to 28%, and net cloud emissions by 8%, demonstrating a promising approach to making cloud computing more sustainable.

### Why it matters

**Research problem:** Cloud compute servers are the major contributors to carbon emissions in data centers, and current server designs prioritize performance and cost over carbon efficiency. There is a need to design server SKUs that reduce both operational and embodied carbon emissions while maintaining acceptable performance and adoption feasibility.

**Why it matters:** Information and Communication Technology (ICT) could cause up to 20% of global carbon emissions by 2030, with cloud computing being a significant contributor. Reducing carbon emissions from cloud servers is critical to meeting industry decarbonization goals and mitigating climate change.

**Key contributions:**

- Demonstration of the opportunity to reduce cloud emissions significantly by designing and deploying carbon-efficient server hardware (GreenSKUs).
- Development of three GreenSKU prototypes using low-carbon components: efficient CPUs, reused DRAM via CXL, and reused SSDs.
- Identification and analysis of challenges limiting GreenSKU adoption and carbon savings at scale.
- Creation of the GreenSKU Framework (GSF), a systematic methodology and tool for evaluating carbon savings of server designs at scale.
- Evaluation of GreenSKUs using GSF within Microsoft Azure's production constraints, showing meaningful carbon reductions.

## About the professor

**Akshitha Sriraman** — Assistant Professor, Electrical and Computer Engineering, Computer Science, Carnegie Mellon University.

Research interests: My research bridges computer architecture and software systems, demonstrating the importance of that bridge in enabling efficient, sustainable, and impartial web systems via solutions that span the compute stack.

### Research links

- [Faculty/profile page](http://akshithasriraman.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Data Center Energy and Carbon Modeling
**The paper assumes:** carbon footprint modeling, data center energy consumption analysis, embodied and operational emissions quantification
**Already in this field?** Skip this entirely if you already understand how carbon emissions are modeled and analyzed in data center hardware and operations.

This background focuses on understanding data center energy use and carbon emissions modeling, which is crucial for grasping the GreenSKU Framework's methodology in evaluating carbon savings of cloud server designs. The rigorous course offers a deep dive into energy, sustainability, and environmental aspects relevant to carbon accounting, while the fast track provides a concise, practical overview of data center operations and energy flows to quickly ground the reader in the infrastructure context.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Energy, Sustainability, and the Environment](https://www.youtube.com/playlist?list=PL402E549AA4C3E196) — Stanford Online · 84 videos · 43.9h across the first 60 episodes

**Watch only this:** Episodes 1-4, about 3 hours — covering energy storage, sustainability innovation, climate innovation in digital tech, and AI's role in grids and data centers, providing a solid foundation for carbon emission modeling in cloud environments.

*Why it unblocks this paper:* Stanford Online's 'Energy, Sustainability, and the Environment' course covers foundational concepts in energy systems, sustainability, and environmental impacts, including digital technology and data centers, which directly support understanding carbon modeling and operational versus embodied emissions in cloud servers.

*If you want all of it:* About 43.9 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Data Centers](https://www.youtube.com/playlist?list=PLFXQBJlBdA0HTB4jnM6EaqlNpDOlGKLgB) — MEP Academy · 15 videos · 2.1h across 15 episodes

**Watch only this:** Episodes 1-5, about 40 minutes — covering how data centers work, power flow, cooling methods, redundancy, and UPS systems, giving a practical overview of the energy systems relevant to carbon modeling.

*Why it unblocks this paper:* MEP Academy's 'Data Centers' playlist offers a clear, concise explanation of data center infrastructure, power flow, cooling, and redundancy, which are essential to understanding operational energy use and carbon emissions in cloud servers, directly complementing the paper's focus.

*If you want all of it:* About 2.1 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Designing Cloud Servers for Lower Carbon," start by grasping foundational concepts such as embodied versus operational carbon emissions, the Compute Express Link (CXL) technology critical for DRAM reuse, and the cloud server hardware lifecycle including reuse impacts. These prerequisites provide the necessary background on carbon tradeoffs, enabling technologies, and hardware reuse challenges. Finally, focus on the core concept of the paper by watching the authors' own talk or closely related advanced talks on carbon-efficient server design and GreenSKU innovations.

### Embodied vs operational carbon emissions *(prerequisite)*
Understanding the distinction between embodied and operational carbon emissions is foundational to appreciating the tradeoffs in server component reuse and energy efficiency that the paper addresses. This knowledge helps contextualize why reused components can reduce embodied emissions but might increase operational emissions.

*How the paper uses it:* The paper analyzes tradeoffs between embodied and operational carbon emissions in GreenSKU designs, making this concept essential.

▶ [Webinar on Carbon Neutral Data Center Practices | BIS Research](https://www.youtube.com/watch?v=Imr7YUlDkBY) — BIS Research · 59:42 · 3y ago

### Compute Express Link (CXL) technology *(prerequisite)*
CXL is a key technology enabling the reuse of DRAM in the GreenSKU server designs. A solid understanding of CXL's architecture, cache-coherent interconnect, and memory pooling capabilities is critical to grasp how the paper leverages this technology to reduce carbon emissions.

*How the paper uses it:* The paper's GreenSKU prototypes use reused DRAM attached via CXL, making this technology central to their approach.

▶ [Introduction to Compute Express Link™ (CXL™)](https://www.youtube.com/watch?v=RpAshNmpqLQ) — CXL Consortium · 56:48 · 6y ago

### Cloud server hardware lifecycle and reuse *(prerequisite)*
Knowledge of the cloud server hardware lifecycle and reuse practices is important to understand the embodied carbon savings and maintenance overheads discussed in the paper. This background clarifies the operational complexities and challenges of deploying reused components at scale.

*How the paper uses it:* The paper evaluates reuse impacts on embodied emissions and maintenance overheads in GreenSKU-Full design.

▶ [How to Re-use Old Hardware with CloudStack. Saving Money and the Environment | CCC 2023](https://www.youtube.com/watch?v=KAJCkC00tzQ) — Apache CloudStack · 18:43 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides you through the foundational concepts needed to understand how cloud server hardware design impacts carbon emissions, focusing on the tradeoffs between embodied and operational carbon, the role of Compute Express Link (CXL) technology in enabling reuse of components, and the lifecycle of cloud server hardware. It culminates with an introduction to the paper's core innovation: designing carbon-efficient server configurations called GreenSKUs. The order starts with understanding carbon emissions in data centers, then server hardware reuse, CXL technology, and finally the paper's specific GreenSKU designs.

### Embodied vs operational carbon emissions *(prerequisite)*
Learn the difference between embodied carbon (the emissions from manufacturing and building hardware) and operational carbon (the emissions from running and powering the hardware). Understanding this tradeoff is key to grasping why reusing components can reduce embodied emissions but might increase operational emissions.

*How the paper uses it:* The paper balances embodied and operational carbon emissions to design carbon-efficient servers.

▶ [Embodied Carbon Explained: How LEED v5 Rewards Reuse and Low-Carbon Materials](https://www.youtube.com/watch?v=D1P1hF68eeI) — Archiroots · 6:15 · 1mo ago

### Cloud server hardware lifecycle and reuse *(prerequisite)*
Understand how cloud servers are built, maintained, and eventually replaced or reused. This lifecycle knowledge explains how reusing components like DRAM and SSDs can reduce embodied carbon but may introduce maintenance overheads or performance tradeoffs.

*How the paper uses it:* GreenSKUs incorporate reused DRAM and SSDs to lower embodied emissions while managing maintenance overheads.

▶ [How to Re-use Old Hardware with CloudStack. Saving Money and the Environment | CCC 2023](https://www.youtube.com/watch?v=KAJCkC00tzQ) — Apache CloudStack · 18:43 · 2y ago

### Compute Express Link (CXL) technology *(prerequisite)*
CXL is a cutting-edge interconnect technology that allows servers to attach and share memory resources like DRAM efficiently. This enables reuse of memory components across servers, which is central to the GreenSKU designs.

*How the paper uses it:* The paper uses CXL to attach reused DRAM in GreenSKU prototypes, enabling carbon-efficient memory reuse.

▶ [Introduction to Compute Express Link™ (CXL™)](https://www.youtube.com/watch?v=RpAshNmpqLQ) — CXL Consortium · 56:48 · 6y ago

### Carbon-efficient server design
Explore how hardware choices in server design, such as selecting energy-efficient CPUs and reusing components, directly impact the carbon footprint of cloud servers. This concept ties together the hardware and environmental aspects crucial for sustainable cloud computing.

*How the paper uses it:* GreenSKUs are new server configurations designed to reduce both embodied and operational carbon emissions.

▶ [What’s The Difference Between A Server and a PC?](https://www.youtube.com/watch?v=864HSWFIBY4) — Techquickie · 7:40 · 1y ago

## Already in your library

- [Introduction to the Compute Express Link™ (CXL™) Fabric ...](https://www.youtube.com/watch?v=6TRbkes15Ok) — also for: Anchoring Whole-System Persistence and Resilience in CXL (Jianping Zeng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Designing Cloud Servers for Lower Carbon." The beginner project focuses on reproducing a key carbon metric calculation from the paper using available data and simple modeling. The intermediate project involves implementing the GreenSKU Framework's carbon model on a smaller scale using the authors' open-source code and comparing carbon savings against a baseline. The advanced project extends the paper by exploring GreenSKU designs for heterogeneous compute platforms, addressing a stated future direction and limitation.

### Beginner — Carbon Emissions Calculator for Cloud Server Components
*Effort: a weekend, ~8 hours*

You build a simple Python tool that calculates and compares embodied and operational carbon emissions for cloud server components, such as CPUs, DRAM, and SSDs, based on parameters described in the paper. The tool will allow input of component types and usage profiles to output estimated carbon emissions per core.

**Why it shows you understood the paper:** This project shows you understand the distinction between embodied and operational emissions and how component reuse affects these metrics, a core concept in the paper.

**Grounded in:** Reuse of old DRAM and SSDs reduces embodied emissions but may increase operational emissions.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Use emission factors and component parameters described in the paper's text; no proprietary data required.

**Build it:**

1. Extract carbon emission factors for CPUs, DRAM, and SSDs from the paper's descriptions.
2. Implement functions to calculate embodied and operational emissions per component based on usage time and reuse status.
3. Create a simple CLI or notebook interface to input component configurations and usage durations.
4. Visualize the emissions breakdown per component and total emissions per core.
5. Validate calculations by reproducing the paper's reported 28% emissions reduction per core for a GreenSKU-like configuration.

**Ships as:** A Python repository with a notebook or script that calculates and visualizes carbon emissions for cloud server components, with a README explaining the model and example results.

**Stretch goal:** Add a simple performance penalty model to show tradeoffs between emissions and performance for reused components.

### Intermediate — GreenSKU Framework Carbon Model Evaluation
*Effort: 2 weekends, ~20 hours*

You set up and run the GreenSKU Framework's open-source carbon model from the authors' AzurePublicDataset repository to evaluate carbon savings of GreenSKU designs on a smaller scale. You compare carbon emissions per core between baseline and GreenSKU configurations and reproduce key metrics from the paper.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' released code, understand their carbon modeling methodology, and reproduce their core quantitative results.

**Grounded in:** We develop a novel methodology and associated framework, GSF, that enables a cloud provider to systematically evaluate a GreenSKU’s carbon savings at scale.

**Tech stack:** Python 3.11, Git, Jupyter Notebook

**Data:** Use the GreenSKU Framework implementation and carbon model available at https://github.com/Azure/AzurePublicDataset as the primary artifact; data is included or simulated within the repo.

**Build it:**

1. Clone and set up the GreenSKU Framework repository from AzurePublicDataset.
2. Familiarize yourself with the carbon model code and input parameters.
3. Run baseline and GreenSKU scenarios to compute carbon emissions per core.
4. Compare your results to the paper's reported 28% emissions reduction and 15% reduction when meeting performance requirements.
5. Document your setup, results, and any deviations or challenges encountered.

**Verified links from the paper:**

- <https://github.com/Azure/AzurePublicDataset> — released by the paper's authors

**Ships as:** A GitHub repo fork or new repo with scripts/notebooks running the GSF carbon model, reproducing key metrics, and a detailed README with analysis.

**Stretch goal:** Extend the model to simulate the impact of adding new SKUs on operational complexity and emissions.

### Advanced — Exploring GreenSKUs for Heterogeneous Compute Platforms
*Effort: 3+ weeks*

You design and simulate GreenSKU-like low-carbon server configurations tailored for heterogeneous compute platforms (e.g., GPUs, FPGAs), extending the GreenSKU Framework to model their carbon emissions and performance tradeoffs. This addresses a key limitation and future direction of the paper.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future work by applying its methodology to a new domain, requiring adaptation of carbon modeling and performance evaluation for heterogeneous hardware.

**Grounded in:** The study focuses on general-purpose compute servers and does not address heterogeneous compute platforms. Future direction: Developing GreenSKUs for heterogeneous compute platforms.

**Tech stack:** Python 3.11, Jupyter Notebook, Git, Docker (optional)

**Data:** Use the GreenSKU Framework codebase as a starting point; simulate heterogeneous platform parameters based on publicly available energy and carbon data for GPUs/FPGAs.

**Build it:**

1. Review the GreenSKU Framework code and understand its modeling assumptions for general-purpose servers.
2. Research carbon emission factors and performance characteristics for heterogeneous compute components like GPUs and FPGAs.
3. Extend or adapt the carbon model to include these components and their reuse scenarios.
4. Simulate carbon emissions and performance tradeoffs for heterogeneous GreenSKU designs.
5. Analyze results and compare to baseline heterogeneous server configurations.
6. Prepare a comprehensive report and README documenting your methodology, code, and findings.

**Verified links from the paper:**

- <https://github.com/Azure/AzurePublicDataset> — released by the paper's authors

**Ships as:** A GitHub repository with extended carbon modeling code, simulation scripts, and a detailed report demonstrating carbon savings potential for heterogeneous GreenSKUs.

**Stretch goal:** Incorporate operational strategies to increase adoption feasibility of heterogeneous GreenSKUs across cloud applications.
