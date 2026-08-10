---
title: "352 · Topology-based individual tree segmentation for automated processing of terrestrial laser scanning point clouds — Leila De Floriani"
date: 2026-08-09
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-leila-de-floriani"
source_hash: "981eda42fb2bad994a4492e5bbaf309ab73bcee7f5061a1d1165f5824dc4ef13"
sequence: 352
generator: "outreach-garden: managed"
---

# 352 · Topology-based individual tree segmentation for automated processing of terrestrial laser scanning point clouds

## At a glance

- **Professor:** Leila De Floriani
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [Topology-based individual tree segmentation for automated processing of terrestrial laser scanning point clouds](https://geovis.umiacs.io/publication/xu-2023-topology/xu-2023-topology.pdf)
- **Authors:** Xin Xu, Federico Iuricich, Kim Calders, John Armston, Leila De Floriani
- **Year:** 2023

## Paper overview

This paper presents a new automated method called Topology-based Tree Segmentation (TTS) to identify and segment individual trees from terrestrial laser scanning (TLS) 3D point clouds. The method uses topological data analysis based on discrete Morse theory to detect tree bottoms and tops without user input, enabling accurate tree segmentation across diverse forest types and point cloud densities. The approach outperforms existing open-source methods in accuracy and robustness, facilitating applications in forest ecology such as biomass estimation and fire risk modeling.

### Why it matters

**Research problem:** Segmenting forest TLS point clouds into individual tree point clouds is challenging due to inconsistent data quality, complex forest structures, and the need for user-intensive parameter tuning in existing methods, limiting large-scale automated forest analysis.

**Why it matters:** Accurate individual tree segmentation is critical for forest inventory, ecological monitoring, biomass estimation, and fire risk assessment. Manual segmentation is laborious and existing automated methods lack robustness and generality, hindering widespread use of TLS data in forest ecology.

**Key contributions:**

- A novel automated topology-based approach for individual tree segmentation on TLS point clouds using discrete Morse theory.
- Extensive evaluation on multiple datasets covering different forest types and point densities.
- Objective comparison with two state-of-the-art open-source methods (3D Forest and FSCT).
- Demonstration of robustness and high accuracy without parameter tuning across diverse forest conditions.

## About the professor

**Leila De Floriani** — Affiliate Professor, Department of Computer Science, Department of Geographical Sciences, University of Maryland Institute for Advanced Computer Studies (UMIACS), Univ. of Maryland - College Park.

Research interests: geometric modeling and processing, topology-based data visualization, topological data analysis

### Research links

- [Faculty/profile page](https://www.cs.umd.edu/people/deflo)
- [Professor website](http://users.umiacs.umd.edu/~deflo/)
- [Lab website](https://geovis.umiacs.io/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Discrete Morse Theory
**The paper assumes:** discrete Morse theory, Forman gradient, simplicial complexes, topological data analysis
**Already in this field?** Skip this entirely if you already understand discrete Morse theory and its application to computational topology.

This background focuses on discrete Morse theory, the core mathematical framework underlying the Topology-based Tree Segmentation (TTS) method in the paper. Understanding discrete Morse theory is essential to grasp how critical points are identified and how topological features are extracted from TLS point clouds for tree segmentation. The rigorous course option offers a deep, structured university-level introduction, while the fast track provides a concise, computation-focused overview suitable for quickly gaining intuition and practical understanding.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Topological Data Analysis](https://www.youtube.com/playlist?list=PL8MAmqMDID4w_Rv2m2-lhrLQYrOz9iYMP) — AlgoTales · 9 videos · 2.3h across 9 episodes

**Watch only this:** Watch episodes 3-6 (Simplicial Complex, Oriented Simplicial Complex, Face of a Simplex, Boundary of a simplex), about 1 hour total — these episodes cover the simplicial complex structures and boundary operators foundational to discrete Morse theory.

*Why it unblocks this paper:* This short playlist offers clear, visual, and intuitive explanations of topological data analysis concepts including simplicial complexes and boundary operators, providing a quick but solid foundation for understanding discrete Morse theory's role in topological segmentation.

*If you want all of it:* All 9 episodes, about 2 hours 15 minutes total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on topology-based individual tree segmentation from terrestrial laser scanning (TLS) point clouds, start by building a strong foundation in the key mathematical and geometric tools used: discrete Morse theory and alpha complexes. Next, gain familiarity with the nature and challenges of TLS point cloud data. Finally, focus on the core concept of the paper itself by watching the authors' own talk or the closest available detailed presentation on tree segmentation methods. This progression ensures comprehension of both the theoretical underpinnings and the applied methodology.

### Discrete Morse theory *(prerequisite)*
Discrete Morse theory is the fundamental mathematical framework that underlies the topological analysis performed in the TTS algorithm. Understanding discrete Morse theory provides insight into how critical points and gradients are computed on simplicial complexes, which is essential for grasping the segmentation approach.

*How the paper uses it:* The TTS algorithm uses discrete Morse theory to compute a Forman gradient that identifies tree bottoms and tops in the TLS point cloud.

▶ [Discrete Morse Theory -- math major seminar.](https://www.youtube.com/watch?v=_2TjYFTrzAg) — MathMajor · 57:53

### Alpha complexes and simplicial complexes *(prerequisite)*
Alpha complexes are a key geometric data structure used to represent the TLS point clouds in a way that supports topological analysis. Understanding alpha complexes and simplicial complexes is crucial to appreciate how the point cloud is structured for segmentation.

*How the paper uses it:* The TTS method constructs an α-complex from the TLS point cloud to apply discrete Morse theory for tree segmentation.

▶ [Voronoi diagram, Delaunay and Alpha complexes: A Visual ...](https://www.youtube.com/watch?v=-XCVn73p3xs) — Applied Algebraic Topology Network · 12:40

### Terrestrial laser scanning point clouds *(prerequisite)*
Terrestrial laser scanning (TLS) point clouds are the raw data input for the segmentation method. Understanding the nature, acquisition, and challenges of TLS data is necessary to appreciate the problem context and the robustness requirements of the TTS algorithm.

*How the paper uses it:* The paper addresses the challenge of segmenting individual trees from TLS point clouds, which have complex structures and varying densities.

▶ [Terrestrial Laser Scanning Concepts](https://www.youtube.com/watch?v=eExlg_mCZdU) — Carina Butterworth · 44:15

### Topology-based individual tree segmentation for automated processing of terrestrial laser scanning point clouds *(the paper's own talk)*
This section focuses on the core concept of the paper: the novel topology-based tree segmentation method (TTS). Watching the authors' own talk or a detailed presentation on tree segmentation methods provides direct insight into the algorithm, its advantages, and evaluation results.

*How the paper uses it:* The authors present the TTS algorithm that segments TLS point clouds into individual trees using discrete Morse theory and α-complexes, outperforming existing methods.

▶ [Real-Time Semantic Mapping of Tree Topology Using Deep Learning and Multi-Sensor Factor Graph](https://www.youtube.com/watch?v=J5LVOPKe0PI) — Rakshith Vishwanatha · 1:27:12 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning what terrestrial laser scanning (TLS) point clouds are and why they are used to capture 3D forest data. Next, grasp the geometric data structures called alpha complexes and simplicial complexes that represent these point clouds for analysis. Then, build intuition on discrete Morse theory, the mathematical foundation used to identify tree features topologically. Finally, explore individual tree segmentation methods to see the context and challenges that the paper's novel topology-based approach addresses.

### Terrestrial laser scanning point clouds *(prerequisite)*
Terrestrial laser scanning (TLS) uses laser sensors to capture detailed 3D point clouds of environments, including forests. Understanding TLS data helps you appreciate the challenges of processing complex, dense, and irregular 3D points representing trees and vegetation.

*How the paper uses it:* The paper segments individual trees from TLS point clouds, so knowing the data type and its characteristics is essential.

▶ [Lecture 1: 3D Laser Scanning - Introduction #GeoTalks](https://www.youtube.com/watch?v=p07CijCMe6U) — Geomatics Engineer - Qusai Al-Nsour® · 1:17:46

### Alpha complexes and simplicial complexes *(prerequisite)*
Alpha complexes are geometric structures built from point clouds that capture shape and connectivity information efficiently. Simplicial complexes generalize these ideas to represent multi-dimensional shapes, enabling topological analysis of spatial data.

*How the paper uses it:* The TTS method constructs an alpha complex from TLS point clouds to analyze tree topology.

▶ [Voronoi diagram, Delaunay and Alpha complexes: A Visual ...](https://www.youtube.com/watch?v=-XCVn73p3xs) — Applied Algebraic Topology Network · 12:40

### Discrete Morse theory *(prerequisite)*
Discrete Morse theory is a combinatorial adaptation of classical Morse theory that studies the topology of shapes by analyzing critical points and gradient flows on simplicial complexes. It helps identify meaningful features like tree bottoms and tops in point cloud data.

*How the paper uses it:* TTS uses discrete Morse theory to compute a Forman gradient that detects critical points corresponding to tree structures.

▶ [A Youtuber's guide to discrete Morse theory [Nick Scoville]](https://www.youtube.com/watch?v=3Sww-U4KV98) — Applied Algebraic Topology Network · 9:53

### Individual tree segmentation methods
Individual tree segmentation methods aim to separate forest point clouds into distinct tree units, which is challenging due to overlapping crowns and varying densities. Understanding existing approaches highlights the novelty and advantages of topology-based segmentation.

*How the paper uses it:* The paper compares TTS against state-of-the-art segmentation methods and addresses their limitations.

▶ [AI powered tree mapping in urban, rural and forest environments](https://www.youtube.com/watch?v=q_gdOcpWmPo) — Manaaki Whenua - Landcare Research Group · 30:25

## Already in your library

- [Decision and Classification Trees, Clearly Explained!!!](https://www.youtube.com/watch?v=_L39rN6gz7Y) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the TTS method for topology-based individual tree segmentation from TLS point clouds. The beginner project focuses on visualizing and interpreting discrete Morse theory concepts on small synthetic point clouds. The intermediate project implements a simplified version of the TTS algorithm on a small TLS forest dataset and compares segmentation accuracy against a baseline. The advanced project extends the method to handle multi-stem trees or fallen trees, addressing a stated limitation and exploring new algorithmic adaptations.

### Beginner — Visualizing Discrete Morse Theory on 3D Point Clouds
*Effort: a weekend, ~8 hours*

You build an interactive visualization tool that demonstrates discrete Morse theory concepts such as critical points (minima, saddles, maxima) and Forman gradients on small synthetic 3D point clouds representing simplified tree shapes. The tool highlights how these topological features correspond to tree bottoms and tops as described in the paper.

**Why it shows you understood the paper:** This project shows you grasp the core topological concepts underlying TTS, especially how discrete Morse theory identifies critical points in point clouds without parameter tuning.

**Grounded in:** The authors propose the TTS algorithm that constructs an α-complex from the TLS point cloud and applies discrete Morse theory to compute a Forman gradient. This identifies critical points (minima and saddles) corresponding to tree bottoms and tops.

**Tech stack:** TypeScript, React, D3.js or Three.js

**Data:** Synthetic small 3D point clouds generated programmatically to simulate simple tree-like structures.

**Build it:**

1. Generate or load a small synthetic 3D point cloud representing a simplified tree shape.
2. Implement or adapt a discrete Morse theory computation to identify critical points and Forman gradients on the point cloud's α-complex.
3. Visualize the point cloud with highlighted critical points (minima, saddles, maxima) and gradient paths using a 3D rendering library.
4. Add interactive controls to explore how changes in the point cloud affect the topological features.
5. Document how these features correspond to tree bottoms and tops as per the paper.

**Ships as:** An interactive web-based visualization demonstrating discrete Morse theory concepts on 3D point clouds, with a README explaining the connection to TTS.

**Stretch goal:** Add visualization of how varying the α parameter affects the α-complex and critical point detection.

### Intermediate — Reimplementing TTS for Individual Tree Segmentation on TLS Data
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the TTS algorithm to segment individual trees from a small terrestrial laser scanning (TLS) point cloud dataset. You construct an α-complex, apply discrete Morse theory to detect tree bottoms and tops, and segment trees bottom-up. You compare your segmentation results against the FSCT baseline method from the cited GitHub repository using metrics like Rand Index or Intersection over Union.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core algorithmic approach into working code and quantitatively evaluate its performance against a known baseline, showing deep comprehension of the method and its practical impact.

**Grounded in:** The authors propose the TTS algorithm that constructs an α-complex from the TLS point cloud and applies discrete Morse theory to compute a Forman gradient. This identifies critical points (minima and saddles) corresponding to tree bottoms and tops. The approach outperforms existing open-source methods in accuracy and robustness.

**Tech stack:** Python 3.11, numpy, scipy, scikit-learn, matplotlib

**Data:** Use the publicly available 3D Forest sample data from https://github.com/VUKOZ-OEL/3dforest-data as a substitute for the paper's TLS datasets.

**Build it:**

1. Download and preprocess a small TLS forest point cloud from the 3D Forest sample data repository.
2. Implement α-complex construction on the point cloud using Delaunay triangulation or a suitable library.
3. Apply discrete Morse theory to compute the Forman gradient and identify critical points (minima and saddles) representing tree bottoms and tops.
4. Segment individual trees bottom-up by labeling minima regions and growing clusters.
5. Run the FSCT baseline method from https://github.com/SKrisanski/FSCT on the same data for comparison.
6. Evaluate segmentation accuracy using Rand Index and Intersection over Union metrics, and document results.

**Verified links from the paper:**

- <https://github.com/SKrisanski/FSCT> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/VUKOZ-OEL/3dforest-data> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python implementation of a simplified TTS segmentation pipeline with quantitative comparison to FSCT on a public TLS dataset, including visualizations and metric reports.

**Stretch goal:** Add parallel computation support to speed up α-complex construction and segmentation.

### Advanced — Extending TTS to Handle Multi-Stem and Fallen Trees in TLS Point Clouds
*Effort: 3+ weeks*

You develop an extension of the TTS algorithm to explicitly detect and segment multi-stem trees and fallen trees, addressing a key limitation noted in the paper. This involves modifying the clustering and labeling steps to distinguish multiple stems as separate entities or to identify fallen trunks using topological or geometric heuristics. You evaluate your extension on a TLS dataset with annotated multi-stem or fallen trees, if available, or simulate such scenarios.

**Why it shows you understood the paper:** This project shows you can critically analyze the paper's limitations and design meaningful algorithmic improvements, demonstrating research-level thinking and the ability to innovate beyond the original method.

**Grounded in:** The method does not explicitly handle exceptional cases such as fallen trees or multiple-stem trees beyond clustering multiple stems as one tree. Future directions include testing on more forests and improving α-complex construction.

**Tech stack:** Python 3.11, numpy, scipy, scikit-learn, matplotlib

**Data:** Use the 3D Forest dataset or simulate TLS point clouds with multi-stem and fallen tree structures if annotated data is unavailable.

**Build it:**

1. Review the original TTS implementation and identify where multi-stem and fallen trees are merged or misclassified.
2. Design heuristics or topological criteria to separate multiple stems within a cluster or detect fallen trees (e.g., based on stem orientation, connectivity, or branch height).
3. Implement the extended segmentation logic within the TTS pipeline.
4. Create or obtain TLS point clouds containing multi-stem and fallen trees for testing.
5. Evaluate segmentation improvements qualitatively and quantitatively against the original TTS results.
6. Document the extension approach, challenges, and results.

**Verified links from the paper:**

- <https://github.com/VUKOZ-OEL/3dforest-data> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** An extended TTS segmentation tool capable of handling multi-stem and fallen trees, with evaluation results and detailed documentation.

**Stretch goal:** Incorporate machine learning classifiers to assist in identifying complex tree structures and occlusions to complement the topology-based approach.
