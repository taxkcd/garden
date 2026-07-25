---
title: "003 · PhysiBoSS-Models: A database for multiscale models — Paul Macklin"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mathcancer-org"
source_hash: "09e7ae66d106653a7e9e4a3d0b19b9922afd78e1498b876bc508c7743d793023"
sequence: 3
generator: "outreach-garden: managed"
---

# 003 · PhysiBoSS-Models: A database for multiscale models

## At a glance

- **Professor:** Paul Macklin
- **Institution:** Indiana University
- **Paper:** [PhysiBoSS-Models: A database for multiscale models](https://sol.sbc.org.br/index.php/bsb/article/download/41403/41173)
- **Authors:** Vincent Noël, Marco Ruscone, Randy Heiland, Arnau Montagud, Alfonso Valencia, Emmanuel Barillot, Paul Macklin, Laurence Calzone
- **Year:** 2025

## Paper overview

This paper presents PhysiBoSS-Models, a curated and version-controlled database for multiscale biological models built using the PhysiBoSS platform. PhysiBoSS integrates agent-based modeling of cell populations with stochastic Boolean networks to simulate complex biological behaviors across scales. The database facilitates sharing, reuse, and validation of these models by providing standardized formats, programmatic access via a Python API, and integration with user-friendly tools like PhysiCell Studio.

### Why it matters

**Research problem:** Multiscale biological models combining intracellular signaling and cell population dynamics are complex and difficult to share, version, and reuse due to lack of standardized repositories and accessible tools.

**Why it matters:** Improving model sharing and reuse accelerates research in biology fields such as cancer, immunology, and tissue engineering by enabling validation, benchmarking, and collaborative development of predictive simulations.

**Key contributions:**

- Creation of a curated, version-controlled repository for PhysiBoSS multiscale models
- Standardized folder structure and metadata for models to ensure compatibility and ease of use
- Provision of cross-platform precompiled binaries to lower technical barriers
- Development of a Python API for programmatic search, download, and integration of models
- Integration with PhysiCell Studio graphical interface for accessible model simulation

## About the professor

**Paul Macklin** — Associate Professor, Intelligent Systems Engineering, Indiana University.

Research interests: data-driven computational systems that can help engineer the behavior of multicellular systems, especially in cancer and tissue engineering

### Research links

- [Faculty/profile page](http://mathcancer.org)
- [Resolved homepage](http://biofvm.mathcancer.org/)
- [Social profile](https://mastodon.online/@MathCancer)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PhysiBoSS-Models paper, start by building foundational knowledge on multiscale modeling in systems biology, stochastic Boolean networks for intracellular signaling, and agent-based modeling of biological systems. Then, explore the importance of computational model repositories and version control to appreciate the database infrastructure. Finally, focus on the core concept of the PhysiBoSS multiscale simulation platform and conclude with the authors' own talks on PhysiBoSS and the PhysiBoSS-Models database to gain direct insights into their methodology and contributions.

### Multiscale modeling systems biology *(prerequisite)*
This section provides foundational understanding of how biological processes are modeled across multiple spatial and temporal scales, integrating molecular, cellular, and tissue-level phenomena. It contextualizes the integration of intracellular and population scales, which is central to PhysiBoSS-Models.

*How the paper uses it:* PhysiBoSS-Models integrates multiscale biological modeling combining intracellular signaling and cell population dynamics.

▶ [Multi-scale Modeling](https://www.youtube.com/watch?v=bn4leLHs9Tk) — HHMI's Janelia Research Campus · 1:12:57 · 4 years ago

### Stochastic Boolean networks biology *(prerequisite)*
Understanding stochastic Boolean networks is essential to grasp how intracellular signaling pathways are modeled probabilistically within PhysiBoSS. This section covers the theoretical and practical aspects of Boolean network modeling in biological systems.

*How the paper uses it:* PhysiBoSS integrates stochastic Boolean networks to simulate intracellular signaling within agent-based models.

▶ [CompuCell3D WS 2025: 8.1: Stochastic Boolean Networks with MaBoSS [Pedro dal Castel] August 6, 2025](https://www.youtube.com/watch?v=wC8okEk_aGc) — CompuCell3D · Streamed 11 months ago

### Computational model repositories version control *(prerequisite)*
This section explains the importance of standardized repositories and version control systems like GitHub for managing, sharing, and maintaining computational models. It highlights best practices that underpin the PhysiBoSS-Models database infrastructure.

*How the paper uses it:* PhysiBoSS-Models uses GitHub with version control and continuous integration to manage and share models.

▶ [Lecture 09: Git Version Control and Collaboration - Fall 2022](https://www.youtube.com/watch?v=bAzaZyciTEM) — iCAS Lab · 39:00 · 3 years ago

### PhysiBoSS multiscale simulation platform
This section focuses on the core methodology combining agent-based modeling and Boolean network modeling within the PhysiBoSS platform. It explains how PhysiBoSS enables multiscale simulations that are the foundation for the models stored in the PhysiBoSS-Models database.

*How the paper uses it:* PhysiBoSS is the core simulation platform integrating agent-based and Boolean network modeling used by PhysiBoSS-Models.

▶ [PhysiCell Workshop 2023 Session 8: PhysiBoSS Introduction](https://www.youtube.com/watch?v=XdXnetAneak) — PhysiCell · 2 years ago

### PhysiBoSS-Models database talk *(the paper's own talk)*
Direct talks by the paper authors provide the most precise and detailed insights into the design, features, and applications of the PhysiBoSS-Models database. These talks cover the motivation, implementation, and usage of the database for multiscale biological models.

*How the paper uses it:* Authors' own talks give direct insight into the PhysiBoSS-Models database and its design.

▶ [Multiscale modeling with PhysiBoSS, by Vincent Noël (ISMB/ECCB 2021)](https://www.youtube.com/watch?v=N-QSEFwTUOs) — PerMedCoE · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand PhysiBoSS-Models, starting with agent-based modeling to grasp how cell populations are simulated, then stochastic Boolean networks to understand intracellular signaling modeling, followed by multiscale modeling to see how these scales integrate, and version control to appreciate the importance of standardized, shareable databases. Finally, it covers the core PhysiBoSS platform that combines these methods, culminating in a direct introduction to the PhysiBoSS-Models database itself.

### Agent-based modeling biological systems *(prerequisite)*
Agent-based modeling simulates the behaviors and interactions of individual cells or agents to understand complex biological systems from the bottom up. This approach helps visualize how populations of cells evolve over time based on simple rules at the single-cell level.

*How the paper uses it:* PhysiBoSS integrates agent-based modeling to simulate cell populations as part of its multiscale approach.

▶ [Day 1: An Introduction to Agent Based Modeling - Robert Axtell](https://www.youtube.com/watch?v=2_ZYflRLUFk) — IIM Kozhikode · 1 year ago

### Stochastic Boolean networks biology *(prerequisite)*
Stochastic Boolean networks model intracellular signaling by representing genes or proteins as on/off states with probabilistic transitions, capturing the inherent randomness in biological processes. This method provides a simplified yet powerful way to simulate complex cellular decision-making.

*How the paper uses it:* PhysiBoSS uses stochastic Boolean networks to model intracellular signaling within each cell agent.

▶ [CompuCell3D WS 2025: 8.1: Stochastic Boolean Networks with MaBoSS [Pedro dal Castel] August 6, 2025](https://www.youtube.com/watch?v=wC8okEk_aGc) — CompuCell3D · Streamed 11 months ago

### Multiscale modeling systems biology *(prerequisite)*
Multiscale modeling connects biological phenomena across different scales, from molecular to cellular to tissue levels, enabling comprehensive simulations of complex systems. Understanding this concept clarifies how PhysiBoSS integrates intracellular and population-level models.

*How the paper uses it:* PhysiBoSS-Models database hosts models that combine intracellular signaling and cell population dynamics across scales.

▶ [Multi-scale Modeling](https://www.youtube.com/watch?v=bn4leLHs9Tk) — HHMI's Janelia Research Campus · 1:12:57 · 4 years ago

### Computational model repositories version control *(prerequisite)*
Version control systems like Git enable tracking changes, collaboration, and reproducibility in computational projects by managing different versions of code and data. This is essential for sharing and maintaining complex biological models.

*How the paper uses it:* PhysiBoSS-Models uses GitHub with version control and continuous integration to manage and share models.

▶ [Lecture 6: Version Control (git) (2020)](https://www.youtube.com/watch?v=2sjqTHE0zok) — Missing Semester · 6 years ago

### PhysiBoSS multiscale simulation platform
PhysiBoSS is a platform that uniquely combines agent-based modeling of cell populations with stochastic Boolean networks for intracellular signaling, enabling detailed multiscale biological simulations. Learning about this platform reveals the core methodology behind the models in the database.

*How the paper uses it:* The paper presents a database of models built using the PhysiBoSS platform integrating these modeling approaches.

▶ [PhysiCell Workshop 2023 Session 8: PhysiBoSS Introduction](https://www.youtube.com/watch?v=XdXnetAneak) — PhysiCell · 2 years ago

## Already in your library

- [PhysiCell ws2022 Session 10: Introduction to PhysiBoSS and Boolean Networks](https://www.youtube.com/watch?v=P3sE6YCNPaM) — also for: PhysiBoSS-Models: A database for multiscale models (Paul Macklin)
- [Agent-Based Modeling: What is Agent-Based Modeling?](https://www.youtube.com/watch?v=FVmQbfsOkGc) — also for: PhysiBoSS-Models: A database for multiscale models (Paul Macklin)
- [Introduction to Boolean Networks in Biology](https://www.youtube.com/watch?v=V9EYs8h0ON0) — also for: PhysiBoSS-Models: A database for multiscale models (Paul Macklin)
- [PhysiCell ws2021: Special PhysiBoSS Lecture](https://www.youtube.com/watch?v=2w2-Q-gvO4U) — also for: PhysiBoSS-Models: A database for multiscale models (Paul Macklin)
