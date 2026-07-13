---
title: "PhysiBoSS-Models: A database for multiscale models — Paul Macklin"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-mathcancer-org"
source_hash: "db1167ec9f9212207131a487a91073c320bdc175c71f21af2d2dc4306a87bc9a"
sequence: 3
generator: "outreach-garden: managed"
---

# PhysiBoSS-Models: A database for multiscale models

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

To understand the PhysiBoSS-Models paper, start by learning foundational concepts including agent-based modeling in biology, Boolean networks in systems biology, and version control with GitHub for scientific projects. These provide the necessary background on simulation techniques and software management. Finally, focus on the core concept of the PhysiBoSS platform, which integrates these approaches for multiscale biological modeling.

## Recommended videos (in order)

### Agent-based modeling in biology *(prerequisite)*
Agent-based modeling simulates the interactions of autonomous agents, such as cells, to assess their effects on the system. This approach is widely used in biology to model cell populations and their behaviors in complex environments. Understanding this concept is essential to grasp how PhysiBoSS simulates cell populations.

*How the paper uses it:* PhysiBoSS integrates agent-based modeling of cell populations with Boolean networks to simulate complex biological behaviors.

▶ [Agent-Based Modeling: What is Agent-Based Modeling?](https://www.youtube.com/watch?v=FVmQbfsOkGc) — Complexity Explorer · 8 years ago

### Boolean networks in systems biology *(prerequisite)*
Boolean networks model intracellular signaling pathways using simple on/off logic states to represent gene or protein activity. This abstraction helps capture complex regulatory dynamics within cells. Grasping Boolean networks is key to understanding how PhysiBoSS models intracellular processes stochastically.

*How the paper uses it:* PhysiBoSS uses stochastic Boolean networks to represent intracellular signaling within agent-based models.

▶ [Introduction to Boolean Networks in Biology](https://www.youtube.com/watch?v=V9EYs8h0ON0) — Eric Eager · 26:11 · 8 years ago

### Version control and GitHub for scientific projects *(prerequisite)*
Version control systems like Git and platforms like GitHub enable tracking changes, collaboration, and reproducibility in scientific software projects. They are crucial for managing complex model repositories and ensuring consistent sharing and reuse. Understanding these tools explains how PhysiBoSS-Models maintains and distributes its curated database.

*How the paper uses it:* PhysiBoSS-Models uses GitHub for version control and continuous integration to manage model sharing and updates.

▶ [Complete Git and GitHub Tutorial for Beginners](https://www.youtube.com/watch?v=Ez8F0nW6S-w) — Apna College · 2 years ago

### PhysiBoSS platform overview
The PhysiBoSS platform integrates agent-based modeling of cell populations with intracellular stochastic Boolean networks to enable multiscale simulations of biological systems. This video introduces the core concepts and the PhysiBoSS plugin, providing a comprehensive understanding of the platform's capabilities and design.

*How the paper uses it:* PhysiBoSS is the foundational platform underlying the PhysiBoSS-Models database presented in the paper.

▶ [PhysiCell ws2022 Session 10: Introduction to PhysiBoSS and Boolean Networks](https://www.youtube.com/watch?v=P3sE6YCNPaM) — PhysiCell · 23:55 · 3 years ago
