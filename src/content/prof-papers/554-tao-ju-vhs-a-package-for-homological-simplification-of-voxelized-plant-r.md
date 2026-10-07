---
title: "554 · VHS: A package for homological simplification of voxelized plant root data for skeletonization — Tao Ju"
date: 2026-09-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tao-ju"
source_hash: "2c3bdee03c11aabb6c0c0496cb870f3cb5e8b3cfd1df53be52338d579af62d26"
sequence: 554
generator: "outreach-garden: managed"
---

# 554 · VHS: A package for homological simplification of voxelized plant root data for skeletonization

## At a glance

- **Professor:** Tao Ju
- **Institution:** Washington University in St. Louis
- **Paper:** [VHS: A package for homological simplification of voxelized plant root data for skeletonization](https://hal.science/hal-05429205/file/VHS.pdf)
- **Authors:** Erin W. Chambers, Tao Ju, David Letscher, Hannah Schreiber, Dan Zeng
- **Year:** 2025

## Paper overview

This paper presents VHS, a C++ software package designed to clean and simplify 3D voxel data of plant roots by removing topological noise and artifacts. This simplification improves the accuracy and usability of curve skeletons, which are simplified representations of root structures used for biological analysis. The method balances topological correctness with geometric accuracy, outperforming previous approaches by both adding and removing voxels to fix errors. It also addresses special artifacts called pseudo-voids that affect skeleton quality.

### Why it matters

**Research problem:** Voxelized 3D images of plant roots often contain topological errors and geometric artifacts due to imaging noise and segmentation inaccuracies, which hinder accurate skeletonization and analysis of root architecture.

**Why it matters:** Understanding root system architecture is crucial for plant biology and crop improvement, but roots are difficult to image and analyze due to their complex, hidden structures. Accurate skeletons derived from voxel data enable detailed trait extraction and genetic studies.

**Key contributions:**

- Development of VHS, a C++ package for homological simplification of voxelized plant root data.
- A novel approach combining both voxel additions and removals to better solve the homological simplification problem.
- Introduction of a method to detect and fill pseudo-voids that cause artifacts in skeletonization.
- Implementation of a persistence-based candidate generation and validation framework for topological simplification.
- Demonstration of improved skeleton quality on real maize root CT scan data compared to previous additive-only methods and alternative approaches.

## About the professor

**Tao Ju** — Washington University in St. Louis.

### Research links

- [Faculty/profile page](https://engineering.washu.edu/faculty/Tao-Ju.html)
- [Identity evidence](https://www.cs.wustl.edu/~taoju)
- [Identity evidence](https://dblp.org/pid/16/2529-1.html)
- [Identity evidence](https://scholar.google.com/citations?user=JsK4KpMAAAAJ&hl=en)
- [Professor website](https://dblp.org/pid/16/2529.html)
- [Google Scholar](https://scholar.google.com/scholar)
- [ORCID](https://orcid.org/0000-0002-5850-4565)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Topology and Persistent Homology
**The paper assumes:** computational topology, persistent homology, topological data analysis, homological algebra basics
**Already in this field?** Skip this entirely if you already understand persistent homology and its computational applications in topological data analysis.

This background covers computational topology and persistent homology, which are central to understanding the VHS paper's approach to homological simplification of voxelized plant root data. The rigorous course option provides a deep, structured university-level introduction to algebraic and computational topology concepts, including persistent homology, suitable for readers seeking a thorough theoretical foundation. The fast track option offers a concise, intuition-driven series focused specifically on persistent homology and its applications, ideal for readers who want a practical and visual understanding in less time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computational Algebraic Topology Lecture Videos](https://www.youtube.com/playlist?list=PLnLAqsCN_2ke8_EUd_KoJsLkPO0BKrrc6) — Vidit Nanda · 37 videos

**Watch only this:** Watch episodes 'Week 1 Lecture 1A Simplicial Complexes' through 'Week 3 Lecture 3C Homology' (episodes 1-13), about 4.5 hours — this covers the core algebraic topology and homology concepts needed to understand the paper's topological framework.

*Why it unblocks this paper:* Vidit Nanda's Computational Algebraic Topology Lecture Videos cover foundational topics such as simplicial complexes, filtrations, homology, and persistent homology, directly supporting the paper's use of persistent homology for topological simplification and the NP-hardness of the homological simplification problem.

*If you want all of it:* About 13.4 hours across all 37 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Persistent homology](https://www.youtube.com/playlist?list=PLM3exOIIKwu7CzwWWPJG3EXHi14iUp0Fj) — Patrick Denny · 20 videos · 8.9h across 20 episodes

**Watch only this:** Watch episodes 1-6 ('Introduction to Persistent Homology' through 'Merge trees and sublevelset persistent homology'), about 2.5 hours — this subset introduces persistent homology concepts and their computational aspects relevant to the paper.

*Why it unblocks this paper:* Patrick Denny's Persistent Homology playlist provides clear, visual, and application-oriented explanations of persistent homology, including introductions, examples, and connections to data analysis, matching the paper's focus on using persistent homology to identify and simplify topological noise.

*If you want all of it:* About 8.9 hours across all 20 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the VHS package and its application to homological simplification of voxelized plant root data, start with foundational knowledge on voxel data processing and skeletonization algorithms to grasp the data representation and downstream analysis context. Then, build a solid understanding of topological data analysis and persistent homology, which underpin the core simplification methods used. Finally, focus on the core concept of homological simplification itself, including the authors' own talks or related advanced presentations on persistent homology and homological algebra.

### voxel data processing lecture *(prerequisite)*
Understanding voxel data representation and the challenges in 3D imaging is essential to appreciate the input data characteristics and the nature of artifacts that VHS aims to simplify. The chosen lecture from ETH Zurich CAAD Praxis provides a rigorous academic treatment of pixels and voxels in spatial data, suitable for advanced learners.

*How the paper uses it:* VHS operates on voxelized 3D plant root data, so understanding voxel data structures and processing is foundational.

▶ [CAAD Praxis HS18: Lecture 05 - Pixel, Voxels and Atom Letters](https://www.youtube.com/watch?v=jxhJEjFw7-4) — ETHZ CAAD · 58:24 · 7y ago

### skeletonization algorithms talk *(prerequisite)*
Skeletonization is the key downstream step that benefits from the topological simplification performed by VHS. The discrete Morse-based graph skeletonization talk offers an advanced, research-level perspective on skeletonization algorithms relevant to biological and geometric data.

*How the paper uses it:* VHS improves skeleton quality by simplifying voxel data before skeletonization, making understanding skeleton algorithms important.

▶ [Discrete Morse-based Graph Skeletonization and Data Analysis](https://www.youtube.com/watch?v=h2b6CnCK-x8) — San Diego Machine Learning · 1:10:59 · 4 years ago

### topological data analysis seminar *(prerequisite)*
Topological Data Analysis (TDA) provides the theoretical framework for using homology and persistence to analyze and simplify complex data. The Stanford seminar by Anthony Bak is a rigorous, research-level presentation illustrating TDA's application to complex problems, aligning well with the paper's use of persistent homology.

*How the paper uses it:* VHS leverages TDA concepts, especially persistent homology, to identify and simplify topological noise in voxel data.

▶ [Stanford Seminar - Topological Data Analysis: How Ayasdi used TDA to Solve Complex Problems](https://www.youtube.com/watch?v=x3Hl85OBuc0) — Stanford Online · 1:11:19 · 12 years ago

### persistent homology lecture *(prerequisite)*
Persistent homology is the core mathematical tool used in VHS to identify and simplify topological noise. The University of Haifa Distinguished Lecture on persistent homology is a comprehensive and advanced presentation suitable for graduate-level understanding.

*How the paper uses it:* Persistent homology is central to VHS's candidate generation and validation framework for topological simplification.

▶ [Weinberger Lecture Two:  Persistent homology](https://www.youtube.com/watch?v=PYTs9zvLoyg) — University of Haifa Mathematics · 1:05:41 · 2y ago

### VHS homological simplification talk *(the paper's own talk)*
The core concept is the homological simplification approach implemented in VHS. Although the authors' own direct talk on VHS is not available, the Topos Institute colloquium by Chad Giusti on persistent homology provides an advanced, research-level discussion closely related to the mathematical foundations of the paper's methods.

*How the paper uses it:* This talk covers persistent homology and related homological concepts that underpin the VHS simplification approach.

▶ [Chad Giusti: "Toward a useful category for persistent homology"](https://www.youtube.com/watch?v=J5L_r0KwFhE) — Topos Institute · 1:02:15 · Streamed 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the VHS paper, start by learning about voxel data and its challenges in 3D imaging, which forms the raw input for the method. Then, build foundational knowledge of topological data analysis (TDA) and persistent homology, the mathematical tools used to identify and simplify topological noise. Finally, explore the specific homological simplification approach presented in the paper that improves skeletonization of plant root voxel data.

### voxel data processing lecture *(prerequisite)*
Voxels are the 3D equivalent of pixels and represent volumetric data in a grid. Understanding how voxel data is structured and the common challenges in processing such data is essential for grasping how VHS cleans and simplifies plant root images.

*How the paper uses it:* The paper operates on voxelized 3D images of plant roots, so understanding voxel data representation and processing is foundational.

▶ [What are Voxels? - Speedy Houdini](https://www.youtube.com/watch?v=dSDuR-45W6Y) — Nine Between · 5:51 · 3 years ago

### topological data analysis seminar *(prerequisite)*
Topological Data Analysis (TDA) uses concepts from algebraic topology to study the shape of data, focusing on features like connected components, holes, and voids. This seminar introduces TDA's intuition and applications, providing a conceptual framework for understanding persistent homology.

*How the paper uses it:* VHS relies on TDA concepts to identify and simplify topological noise in voxel data.

▶ [The fascinating link between Topology and Politics: an introduction to TDA.](https://www.youtube.com/watch?v=KhHDfbwALX8) — The Underlying Math · 8:52 · 10 months ago

### persistent homology lecture
Persistent homology tracks topological features across multiple scales to distinguish noise from meaningful structure. This lecture visually explains how persistent homology works, which is key to how VHS identifies candidate voxels to add or remove for simplification.

*How the paper uses it:* Persistent homology is the core mathematical tool VHS uses to detect and simplify topological noise in root voxel data.

▶ [Introduction to Persistent Homology](https://www.youtube.com/watch?v=2PSqWBIrn90) — Matthew Wright · 8:46 · 10y ago

### VHS homological simplification talk *(the paper's own talk)*
This talk presents the VHS software and its novel approach to homological simplification of voxelized plant root data. It covers the method of combining voxel additions and removals, pseudo-void filling, and the persistence-based candidate validation framework.

*How the paper uses it:* This is the authors' own presentation explaining the VHS method and its advantages in improving skeletonization quality.

▶ [Chad Giusti: "Toward a useful category for persistent homology"](https://www.youtube.com/watch?v=J5L_r0KwFhE) — Topos Institute · 1:02:15 · Streamed 3 years ago

## Already in your library

- [Introduction to Persistent Homology](https://www.youtube.com/watch?v=h0bnG1Wavag) — also for: A Computational Topology-based Spatiotemporal Analysis Technique for Honeybee Aggregation (Elizabeth Bradley)
- [Topological Data Analysis for Machine Learning I: Algebraic ...](https://www.youtube.com/watch?v=gVq_xXnwV-4) — also for: HyperTopo-Adapters: Geometry- and Topology-Aware Segmentation of Leaf Lesions on Frozen Encoders (Toni Kazic)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the VHS paper on homological simplification of voxelized plant root data. The beginner project lets you explore voxel data visualization and basic pseudo-void filling. The intermediate project involves running and extending the authors' VHS code to reproduce simplification results and compare with a baseline. The advanced project tackles a future direction by adapting homological simplification methods to a new biological domain, such as vascular or neural networks, addressing computational challenges and data differences.

### Beginner — Visualize and Fill Pseudo-Voids in Voxelized Root Data
*Effort: a weekend, ~8 hours*

You build a small tool to load a voxelized 3D root dataset (or a synthetic substitute), visualize it in 3D, and implement a simple watershed-based pseudo-void detection and filling algorithm inspired by the paper. This will let you see how pseudo-voids affect skeleton quality and how filling them improves the shape before skeletonization.

**Why it shows you understood the paper:** This project shows you grasp the paper's novel pseudo-void detection and filling method, a key contribution that improves skeleton quality by removing artifacts that cause useless branches.

**Grounded in:** Introduction of a method to detect and fill pseudo-voids that cause artifacts in skeletonization.

**Tech stack:** Python 3.11, NumPy, scikit-image, matplotlib, PyVista or vedo for 3D visualization

**Data:** Use a small voxelized root dataset from the paper's GitHub repository if available, or generate a synthetic 3D voxel shape with cavities to simulate pseudo-voids.

**Build it:**

1. Load or generate a 3D voxel grid representing a plant root structure with pseudo-voids.
2. Visualize the voxel data in 3D to identify cavities visually.
3. Implement a watershed-based algorithm to detect pseudo-void regions inside the voxel shape.
4. Fill detected pseudo-voids by adding voxels to close cavities.
5. Visualize the filled voxel data and compare with the original to show improvement.
6. Write a README explaining the pseudo-void problem and your implementation.

**Ships as:** A GitHub repo with code to visualize voxel data, detect and fill pseudo-voids, plus before/after 3D visualizations and a clear README explaining the method.

**Stretch goal:** Add a simple skeletonization step (e.g., using scikit-image) to show how pseudo-void filling improves skeleton centrality.

### Intermediate — Run and Extend VHS Homological Simplification on Maize Root Data
*Effort: 2 weekends, ~20 hours*

You clone and run the VHS C++ package from the authors' GitHub repository on provided maize root CT scan voxel data or a substitute. You reproduce key simplification results such as topological noise reduction and skeleton coverage metrics. Then you implement a simple additive-only baseline simplification and compare its skeleton quality metrics against VHS, reporting your findings.

**Why it shows you understood the paper:** This project demonstrates you can operate the authors' code, understand the core homological simplification approach combining voxel additions and removals, and critically evaluate its improvements over additive-only methods.

**Grounded in:** Development of VHS, a C++ package for homological simplification of voxelized plant root data; VHS outperforms additive-only simplification methods in skeleton coverage and quality.

**Tech stack:** C++17, CMake, Python 3.11 for analysis and plotting, matplotlib, NumPy

**Data:** Use the voxelized maize root CT scan data provided or referenced by the authors if accessible; otherwise, use a publicly available 3D root voxel dataset as a substitute.

**Build it:**

1. Clone the VHS repository from https://github.com/davidletscher/VHS and build the package following instructions.
2. Obtain or simulate a voxelized maize root dataset compatible with VHS input.
3. Run VHS simplification on the dataset and extract skeleton coverage and topological noise metrics.
4. Implement a simple additive-only voxel addition simplification baseline.
5. Run the baseline on the same dataset and compute the same metrics.
6. Compare and plot the results, highlighting VHS improvements.
7. Document your process, results, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/davidletscher/VHS> — released by the paper's authors

**Ships as:** A GitHub repo containing your VHS runs, baseline implementation, metric computations, comparison plots, and a README explaining the homological simplification approach and your evaluation.

**Stretch goal:** Add parameter studies varying VHS processing window sizes to observe quality/runtime trade-offs.

### Advanced — Adapt Homological Simplification to Vascular Network Voxel Data
*Effort: 3-4 weeks*

You develop an extension of the VHS homological simplification approach to a new domain: 3D voxelized vascular networks (e.g., blood vessels). You adapt candidate generation and validation to handle vascular topology and test on a small vascular voxel dataset (public or synthetic). You evaluate skeleton quality improvements and discuss computational challenges and geometric artifacts.

**Why it shows you understood the paper:** This project tackles a stated future direction by transferring the paper's method beyond plant roots, addressing domain-specific challenges and computational costs, demonstrating deep comprehension and research potential.

**Grounded in:** Testing VHS on other voxelized tree-like structures such as blood vessels or neuron networks; Parallelizing candidate generation and validation to improve computational efficiency.

**Tech stack:** C++17, CMake, Python 3.11, NumPy, matplotlib, scikit-image

**Data:** Use a small publicly available 3D vascular voxel dataset if possible; otherwise, generate synthetic vascular-like voxel structures for testing.

**Build it:**

1. Study the VHS codebase and understand candidate generation and validation steps.
2. Obtain or generate 3D voxel data representing vascular networks.
3. Adapt the candidate generation logic to vascular topology, considering differences from root structures.
4. Implement or optimize candidate validation, possibly with parallelization to reduce runtime.
5. Run homological simplification on vascular data and compute skeleton quality metrics.
6. Compare results with and without simplification, and discuss geometric artifacts observed.
7. Write a comprehensive report and README documenting your adaptation, challenges, and findings.

**Verified links from the paper:**

- <https://github.com/davidletscher/VHS> — released by the paper's authors

**Ships as:** A GitHub repo with your adapted VHS code, vascular voxel data or generator, evaluation scripts, and a detailed README/report discussing method transfer, results, and computational considerations.

**Stretch goal:** Explore discrete Morse theory-based candidate generation to accelerate simplification on vascular data.

_Access to the exact maize root voxel data used in the paper may be limited; substitute with publicly available or synthetic voxel data as needed._
