---
title: "889 · ReVISit 2: A Full Experiment Life Cycle User Study Framework — Andrew M. McNutt"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrew-m-mcnutt"
source_hash: "2c593cf0443d9b1fa2e6165dd4dfbe64517acc5c0282ddf49516c1e42c80aba5"
sequence: 889
generator: "outreach-garden: managed"
---

# 889 · ReVISit 2: A Full Experiment Life Cycle User Study Framework

## At a glance

- **Professor:** Andrew M. McNutt
- **Institution:** University of Utah
- **Paper:** [ReVISit 2: A Full Experiment Life Cycle User Study Framework](https://arxiv.org/pdf/2508.03876)
- **Authors:** Zach Cutler, Jack Wilburn, Brian Bollen, Khandaker Abrar Nadib, Tingying He, Andrew McNutt, Hilson Shrestha, Yiren Ding, Lane Harrison, Alexander Lex
- **Year:** 2025

## Paper overview

ReVISit 2 is a software framework designed to help researchers in visualization and human-computer interaction conduct online user studies more easily and reliably. It supports all stages of an experiment's life cycle—from design and piloting to data collection, analysis, and sharing results. The system offers tools like a domain-specific language for experiment specification, participant interaction replay, and integration with visualization tools. It aims to improve reproducibility, reduce errors, and enable complex study designs.

### Why it matters

**Research problem:** Conducting online user studies in visualization and HCI is complex and error-prone due to challenges in designing stimuli, managing experimental design, ensuring data quality, and supporting reproducibility. Existing tools often cover only parts of the experiment life cycle, lack flexibility for nuanced designs, or hinder reproducibility.

**Why it matters:** User studies are essential for validating visualization and interaction techniques, but difficulties in conducting them effectively slow research progress and reduce trust in results. Improving tools for the full experiment life cycle can enhance study quality, reproducibility, and community trust.

**Key contributions:**

- A full experiment life cycle framework supporting design, debugging, piloting, data collection, analysis, and dissemination.
- A JSON-based domain-specific language (DSL) for specifying complex experiments with features like Latin square and dynamic sequencing.
- Python bindings (reVISitPy) enabling experiment prototyping and debugging within Jupyter notebooks.
- Automatic instrumentation and provenance tracking of visualization stimuli, especially Vega-based visualizations, enabling fine-grained participant interaction replay.
- A study browser interface for navigating and debugging experiments.

## About the professor

**Andrew M. McNutt** — Assistant Professor, Kahlert School of Computing, University of Utah.

Research interests: Visualization and human-computer interaction

### Research links

- [Faculty/profile page](https://profiles.faculty.utah.edu/u1136339)
- [Professor website](http://mcnutt.in/)
- [Resolved homepage](https://www.mcnutt.in/#/about)
- [Lab website](https://www.mcnutt.in/#/lab)
- [Google Scholar](https://scholar.google.com/citations?user=AHwQg4kAAAAJ&hl=en&authuser=1)
- [GitHub](https://github.com/mcnuttandrew)
- [Social profile](https://hci.social/@mcnuttandrew)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Human-Computer Interaction Research Methods
**The paper assumes:** human-computer interaction experimental design, user study methodologies, participant interaction logging, and reproducibility practices
**Already in this field?** Skip this entirely if you have prior coursework or experience in human-computer interaction research methods and experimental design.

This background prepares the reader to understand the research methods and experimental design principles central to ReVISit 2, a framework for conducting online user studies in visualization and HCI. The rigorous course offers a deep dive into human-computer interaction concepts and research methods, while the fast track provides a concise, focused introduction to key HCI topics relevant to experiment design and evaluation. Choose the rigorous course for comprehensive foundational knowledge; choose the fast track for a quicker, targeted overview that covers essential concepts efficiently.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Human Computer Interaction](https://www.youtube.com/playlist?list=PLwmkgSt3xgJq70yAdBkrj67B6_gVxntFC) — StudyHelp CSE · 20 videos · 14.7h across 20 episodes

**Watch only this:** Lectures 1, 6, 11, 13, and 14 (Introduction to HCI, Design, Prototyping & Usability Evaluation, What to Evaluate in HCI, Heuristic Evaluation + Usability Testing), about 3.5 hours — these episodes cover the basics of HCI, design principles, and user study evaluation relevant to the paper.

*Why it unblocks this paper:* This concise HCI playlist provides clear, well-structured explanations of HCI fundamentals, usability evaluation, prototyping, and user study methods, offering a quick yet solid grounding in the concepts underlying the paper's contributions.

*If you want all of it:* All 20 lectures, about 14.7 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ReVISit 2 framework and its contributions, start by grounding yourself in the foundational concepts of experiment life cycle frameworks, domain-specific languages (DSLs) for experiments, provenance tracking in visualization, and challenges in online user study design and reproducibility. These prerequisites provide the necessary context on experimental design, specification languages, and data provenance critical to ReVISit 2. Finally, focus on the core concept of the ReVISit 2 experiment specification and participant replay, culminating with the authors' own talk that directly presents the framework and its capabilities.

### Experiment life cycle frameworks *(prerequisite)*
Understanding the full stages of an experiment's life cycle is essential to grasp the scope and motivation behind ReVISit 2. This includes phases such as design, piloting, data collection, analysis, and dissemination, which ReVISit 2 aims to support comprehensively.

*How the paper uses it:* ReVISit 2 supports all phases of the experiment life cycle, making this foundational knowledge critical.

▶ [Introduction into reVISit, a full experiment life cycle user study platform](https://www.youtube.com/watch?v=1aa9UM2M3_Q) — Visualization Design Lab · 16:40 · 11mo ago

### Domain specific languages for experiments *(prerequisite)*
ReVISit 2 uses a JSON-based domain-specific language (DSL) to specify complex experiments, enabling nuanced experimental designs and dynamic sequencing. Understanding DSLs helps appreciate how ReVISit 2 achieves flexible and precise experiment specification.

*How the paper uses it:* The paper introduces a JSON-based DSL and Python bindings for experiment specification, central to ReVISit 2's design.

▶ [A Domain Specific Language for Impact by Simon de Haan and Federico Meini | ElixirConf EU 2023](https://www.youtube.com/watch?v=DugOUm9cka8) — Code Sync · 30:29 · 2y ago

### Provenance tracking in visualization *(prerequisite)*
Provenance tracking captures detailed interaction histories and state changes, which is key for participant interaction replay and ensuring data quality in visualization experiments. This concept underpins ReVISit 2's ability to replay participant interactions and track provenance automatically.

*How the paper uses it:* ReVISit 2 automatically instruments stimuli with provenance tracking to enable fine-grained participant replay.

▶ [Trrack: A Library for Provenance Tracking in Web-Based Visualizations](https://www.youtube.com/watch?v=PpGhL85SEDM) — IEEE Visualization Conference · 6y ago

### Online user study design and reproducibility *(prerequisite)*
Challenges in designing and conducting reproducible online user studies motivate the development of frameworks like ReVISit 2. Understanding these challenges provides context for the system's features aimed at improving data quality and reproducibility.

*How the paper uses it:* The paper addresses the complexity and reproducibility challenges in online user studies that ReVISit 2 aims to solve.

▶ [OR at Cam: Reproducibility](https://www.youtube.com/watch?v=zy4tlmseI80) — Office of Scholarly Communication, Cambridge · 38:21 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the ReVISit 2 paper, start by learning about the full experiment life cycle frameworks to grasp the stages involved in conducting user studies. Next, explore domain-specific languages (DSLs) to understand how experiments can be precisely specified in code. Then, study provenance tracking in visualization to appreciate how participant interactions are recorded and replayed. Finally, focus on the core concept of ReVISit 2: experiment specification and participant replay, which enables complex experiment designs and rich data collection.

### Experiment life cycle frameworks *(prerequisite)*
This concept covers the stages involved in planning, executing, and analyzing experiments, including design, piloting, data collection, and dissemination. Understanding this life cycle helps appreciate how ReVISit 2 supports researchers throughout the entire process.

*How the paper uses it:* ReVISit 2 supports the full experiment life cycle including design, piloting, data collection, analysis, and dissemination.

▶ [Introduction into reVISit, a full experiment life cycle user study platform](https://www.youtube.com/watch?v=1aa9UM2M3_Q) — Visualization Design Lab · 16:40 · 11mo ago

### Domain specific languages for experiments *(prerequisite)*
Domain-specific languages (DSLs) are specialized coding languages tailored to a particular domain, allowing users to specify complex tasks clearly and concisely. Learning about DSLs helps understand how ReVISit 2 uses a JSON-based DSL to define experiments precisely and flexibly.

*How the paper uses it:* ReVISit 2 uses a JSON-based domain-specific language (DSL) for specifying complex experiments.

▶ [What is a Domain Specific Language (DSL)? Scratching the surface](https://www.youtube.com/watch?v=Fy3Xn3m34bA) — Suck Less Daily · 11:28 · 4y ago

### Provenance tracking in visualization *(prerequisite)*
Provenance tracking records the history and sequence of user interactions with visualizations, enabling replay and detailed analysis. This concept is key to understanding how ReVISit 2 captures participant behavior for reproducibility and richer insights.

*How the paper uses it:* ReVISit 2 enables fine-grained participant interaction replay with provenance tracking.

▶ [Trrack: A Library for Provenance Tracking in Web-Based Visualizations](https://www.youtube.com/watch?v=PpGhL85SEDM) — IEEE Visualization Conference · 6y ago

## Already in your library

- [18. Domain Specific Languages and Autotuning](https://www.youtube.com/watch?v=bd-mavr5YlA) — also for: A Solver-Aided Hierarchical Language for LLM-Driven CAD Design (Adriana Schulz)
- [Domain-Specific Languages with Martin Fowler](https://www.youtube.com/watch?v=ZfdAwV0HlEU) — also for: A Solver-Aided Hierarchical Language for LLM-Driven CAD Design (Adriana Schulz)
- [Provenance for Database Transformations](https://www.youtube.com/watch?v=X0sJT0pdnIU) — also for: Efficient Differencing of System-level Provenance Graphs (Tanu Malik)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of ReVISit 2, a full experiment life cycle framework for online visualization user studies. The beginner project focuses on reproducing a core experiment design element using JSON DSL and Python bindings. The intermediate project involves running and extending one of the authors' replication studies using their released code and data. The advanced project tackles a stated limitation by implementing artificial participant simulation to improve piloting and debugging within the ReVISit framework.

### Beginner — Design and Pilot a Simple Visualization User Study with ReVISit DSL
*Effort: a weekend (~8 hours)*

You build a small online user study that replicates a basic just noticeable difference (JND) experiment using the ReVISit JSON-based domain-specific language (DSL) and the Python reVISitPy bindings. You specify a simple experiment with a Latin square design and dynamic sequencing for trial difficulty, then pilot it locally using the Python API in a Jupyter notebook.

**Why it shows you understood the paper:** This project shows you understand how to specify and pilot a visualization experiment using the ReVISit DSL and Python bindings, demonstrating grasp of the core experiment life cycle design and debugging features.

**Grounded in:** A JSON-based domain-specific language (DSL) for specifying complex experiments with features like Latin square and dynamic sequencing; Python bindings (reVISitPy) enabling experiment prototyping and debugging within Jupyter notebooks.

**Tech stack:** Python 3.11, Jupyter Notebook, reVISitPy (Python bindings for ReVISit)

**Data:** Simulated simple trial data for a JND experiment; no external dataset needed.

**Build it:**

1. Install the ReVISit 2 framework and Python bindings (reVISitPy) following the authors' documentation.
2. Write a JSON DSL specification for a simple JND experiment with 2-3 visualization stimuli and a Latin square design.
3. Use reVISitPy in a Jupyter notebook to load the experiment specification and run a local pilot session.
4. Implement dynamic sequencing logic in the DSL to adjust trial difficulty based on participant responses.
5. Collect pilot data locally and visualize basic results within the notebook.

**Ships as:** A GitHub repository containing the JSON DSL experiment specification, Jupyter notebook for piloting, and README explaining the experiment design and piloting process.

**Stretch goal:** Add participant interaction replay visualization for the pilot sessions using ReVISit's provenance tracking features.

### Intermediate — Replicate and Extend Harrison et al.'s JND Study Using ReVISit 2
*Effort: 1-3 weekends (~20 hours)*

You run the authors' replication of Harrison et al.'s just noticeable difference (JND) study using the ReVISit 2 framework and extend it by adding a new visualization type or condition. You analyze the collected data to compare your extension's results with the original findings, demonstrating use of ReVISit's full experiment life cycle and data provenance features.

**Why it shows you understood the paper:** This project shows you can operate the full ReVISit system on a real published study replication, understand its experimental design and data collection methods, and extend it meaningfully while using the authors' released code and data.

**Grounded in:** Successfully replicated Harrison et al.'s study on just noticeable differences (JND) in correlation visualizations, confirming prior findings and extending with new visualization types (hexbin plots and heatmaps).

**Tech stack:** Python 3.11, Jupyter Notebook, reVISitPy, Vega visualization framework, Git

**Data:** Use the authors' replication study repository at https://github.com/revisit-studies/replication-studies-analysis and the pre-registered experiment data at https://osf.io/t6gp2.

**Build it:**

1. Clone the authors' replication study repository and set up the environment as per their README.
2. Run the original Harrison et al. JND experiment replication using ReVISit 2 and verify you can reproduce the reported results.
3. Add a new visualization type (e.g., a heatmap or hexbin plot) to the experiment specification JSON DSL.
4. Deploy the extended experiment and collect pilot data locally or with recruited participants.
5. Analyze the new data and compare it with the original study's results, focusing on confidence intervals and participant responses.
6. Document your extension, analysis, and findings in a detailed README.

**Verified links from the paper:**

- <https://github.com/revisit-studies/replication-studies-analysis> — released by the paper's authors
- <https://osf.io/t6gp2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A forked and extended version of the replication repository with your new visualization condition, analysis notebooks, and documentation of results.

**Stretch goal:** Integrate think-aloud audio recording and transcription features as demonstrated in the Feng et al. replication to enrich data collection.

### Advanced — Implement Artificial Participant Simulation to Enhance ReVISit Piloting
*Effort: a few weeks (~40+ hours)*

You develop an artificial participant simulation module that can interact with ReVISit 2 experiments automatically, generating synthetic participant data to support piloting and debugging. This addresses a key limitation of ReVISit 2 by enabling automated testing of complex dynamic sequencing and interaction logging without human participants.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of ReVISit's architecture, experiment life cycle, and limitations, and contributes a novel extension that improves piloting capabilities and experiment robustness.

**Grounded in:** Simulation of artificial participant data is not yet implemented, limiting some piloting capabilities; future direction includes implementing artificial participant simulation to enhance debugging and piloting.

**Tech stack:** Python 3.11, JavaScript (Node.js), reVISitPy, Jupyter Notebook, Git

**Data:** No external dataset needed; simulation generates synthetic interaction data based on experiment specifications.

**Build it:**

1. Study the ReVISit 2 framework's experiment execution and participant interaction logging mechanisms.
2. Design a simulation engine that can parse the JSON DSL experiment specification and generate plausible participant responses and interaction events.
3. Implement the simulation in Python and/or JavaScript to integrate with reVISitPy and the browser-based experiment runtime.
4. Test the simulator on a dynamic sequencing experiment to verify it can trigger different branches and record interaction provenance.
5. Create a Jupyter notebook demonstrating automated piloting of an experiment using the simulator and visualizing the synthetic participant replay.
6. Document the design, usage, and limitations of the simulation module.

**Ships as:** A GitHub repository with the artificial participant simulation code, integration examples with ReVISit experiments, and a detailed README with usage instructions.

**Stretch goal:** Extend the simulator to support AI-driven adaptive experimental designs that adjust stimuli based on simulated participant behavior.

_The intermediate project depends on the authors' replication repository and OSF data being accessible and compatible with your environment; verify access and setup instructions before starting._
