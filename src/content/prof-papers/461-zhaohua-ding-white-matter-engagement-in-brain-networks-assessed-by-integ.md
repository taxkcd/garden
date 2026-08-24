---
title: "461 · White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity — Zhaohua Ding"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zhaohua-ding"
source_hash: "5d665f1d2f0be2b40a8c5b3a5a49d73cb528619f0e5fbd8eb9819aa983b988f4"
sequence: 461
generator: "outreach-garden: managed"
---

# 461 · White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity

## At a glance

- **Professor:** Zhaohua Ding
- **Institution:** Vanderbilt University
- **Paper:** [White Matter Engagement in Brain Networks Assessed by Integration of Functional and Structural Connectivity](https://europepmc.org/articles/PMC12017882?pdf=render)
- **Authors:** Muwei Li, Kurt G Schilling, Lyuan Xu, Soyoung Choi, Yurui Gao, Zhongliang Zu, Adam W Anderson, Zhaohua Ding, John C Gore
- **Year:** 2024

## Paper overview

This study introduces a novel method to measure how white matter (WM) in the brain participates in functional brain networks by integrating structural connections from diffusion MRI and functional interactions from resting-state fMRI. The method maps the importance of WM voxels based on their role in connecting gray matter (GM) regions functionally and structurally. The findings reveal reproducible spatial patterns of WM engagement, significant gender differences, temporal variability, and correlations with other brain imaging measures, suggesting WM engagement could serve as a biomarker for neurological and cognitive conditions.

### Why it matters

**Research problem:** Understanding how white matter contributes to brain functional networks remains limited, especially in linking the organization of WM voxels with functional connectivity between multiple distributed gray matter regions that communicate through them.

**Why it matters:** White matter pathways are critical for communication between gray matter regions, underpinning complex brain functions. Improved models integrating structural and functional connectivity can enhance understanding of brain function and dysfunction, potentially aiding diagnosis and treatment of neurological disorders.

**Key contributions:**

- Introduced a novel WM engagement metric integrating functional edge importance (EBC) with structural connectivity constraints.
- Demonstrated high reproducibility of WM engagement spatial patterns across large subject cohorts.
- Showed WM engagement correlates with myelin content, regional homogeneity, fiber orientation dispersion, intrinsic neural activity (fALFF), and non-neurite cell density.
- Identified significant gender differences in WM engagement and its temporal variability across most tracts.
- Revealed dynamic temporal modes of WM engagement, with distinct patterns differing by sex.

## About the professor

**Zhaohua Ding** — Research Professor, Electrical and Computer Engineering, Computer Science, Biomedical Engineering, Vanderbilt University.

Research interests: processing and analysis of magnetic resonance images, measuring brain structure and function, understanding structure-function relations of the neural network in human brain

### Research links

- [Faculty/profile page](https://www.vumc.org/vuiis/person/zhaohua-ding-phd)
- [Resolved homepage](https://www.vumc.org/vuiis/person/zhaohua-ding-phd#main-content)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Theory and Network Analysis
**The paper assumes:** graph theory, network centrality measures, brain network modeling, functional and structural connectivity
**Already in this field?** Skip this entirely if you already understand graph theory basics, centrality metrics, and their application to brain connectivity networks.

This background focuses on graph theory and network analysis, essential for understanding the paper's integration of functional and structural brain connectivity using graph metrics like edge betweenness centrality. The rigorous course provides a deep, structured mathematical foundation, while the fast track offers a concise, intuitive introduction to key graph theory concepts relevant to brain network modeling. Choose the course for thorough mastery or the fast track for a quick, clear overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Student Lectures - Networks](https://www.youtube.com/playlist?list=PL4d5ZtfQonW0MsGE4Pn12rxUprPXB4_VS) — Oxford Mathematics · 8 videos · 9.4h across 8 episodes

**Watch only this:** Episodes 1-4, about 4.7 hours — covering foundational network concepts, graph representations, and centrality measures including edge betweenness centrality, which is crucial for the paper's WM engagement metric.

*Why it unblocks this paper:* This Oxford Mathematics 4th Year Student Lecture series offers a comprehensive and mathematically rigorous introduction to networks, integrating graph theory, statistics, and dynamical systems, directly relevant to understanding the graph-theoretic methods used in the paper.

*If you want all of it:* 9.4 hours across all 8 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [NETWORK TOPOLOGY OR GRAPH THEORY](https://www.youtube.com/playlist?list=PLySVDJoIJATc7c13WQI7D_RqScOdz-gt0) — Electrical Tutorial · 22 videos · 5.3h across 22 episodes

**Watch only this:** Episodes 1-6, about 1.4 hours — covering basic graph terms, drawing graphs, and incidence matrices, sufficient to grasp the graph representations and connectivity concepts used in the paper.

*Why it unblocks this paper:* This Electrical Tutorial playlist provides a concise, clear introduction to network topology and graph theory basics, including nodes, edges, incidence matrices, and cut sets, giving an accessible overview of graph concepts underlying the paper's structural connectivity modeling.

*If you want all of it:* 5.3 hours across all 22 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on white matter engagement in brain networks, start with foundational knowledge of diffusion MRI fiber tracking and resting-state fMRI functional connectivity, as these imaging modalities underpin the structural and functional data integration in the study. Next, grasp the graph theory concept of edge betweenness centrality, which is critical for weighting functional connections in the model. Then, explore white matter microstructure imaging biomarkers to appreciate the imaging proxies correlated with white matter engagement. Finally, focus on the paper-specific author talk that directly addresses the novel method and findings of the study.

### Diffusion MRI fiber tracking *(prerequisite)*
Diffusion MRI fiber tracking is essential for understanding how structural connectivity is derived by mapping white matter pathways in the brain. This foundational knowledge enables comprehension of how the paper uses diffusion MRI data to constrain functional connectivity edges through white matter voxels.

*How the paper uses it:* The paper integrates structural connectivity from diffusion MRI fiber tracking to weight functional connectivity edges in calculating white matter engagement.

▶ [Diffusion MRI, Tractography, Connectomics, & their applications](https://www.youtube.com/watch?v=emfNQpQuzVo) — Douglas Research Centre · 1:02:02 · 4 years ago

### Resting-state fMRI functional connectivity *(prerequisite)*
Resting-state fMRI functional connectivity measures temporal correlations between gray matter regions, providing the functional interaction data necessary for the paper's integration model. Understanding this concept is crucial to appreciate how functional networks are characterized and linked to structural pathways.

*How the paper uses it:* The paper uses resting-state fMRI to assess functional connectivity between gray matter nodes, which is combined with structural data to compute white matter engagement.

▶ [Resting State Functional Connectivity: Part 1 - Introduction](https://www.youtube.com/watch?v=5yDN2q7gUaM) — Neuroimaging Research Methods · 13:12 · 5 years ago

### Graph theory edge betweenness centrality *(prerequisite)*
Edge betweenness centrality is a graph theory metric that quantifies the importance of edges in facilitating communication between nodes. This concept is key to understanding how the paper weights functional connectivity edges to reflect their significance in brain networks.

*How the paper uses it:* The paper weights functional connectivity edges by their edge betweenness centrality to calculate the engagement of white matter voxels.

▶ [Betweenness Centrality](https://www.youtube.com/watch?v=ptqt2zr9ZRE) — Anuradha Bhatia · 11:43 · 9 years ago

### White matter microstructure imaging biomarkers *(prerequisite)*
White matter microstructure imaging biomarkers such as myelin content and fiber orientation dispersion provide indirect measures of white matter integrity and composition. Familiarity with these biomarkers helps in understanding the correlations the paper finds between white matter engagement and microstructural properties.

*How the paper uses it:* The paper correlates white matter engagement with imaging biomarkers including myelin content, fiber orientation dispersion, and non-neurite density.

▶ [“Microstructure imaging by diffusion MRI: modeling, simulation, machine learning, application to...](https://www.youtube.com/watch?v=5Zgbrh6Z-BY) — Center for Intelligent Systems CIS EPFL · 39:45 · 4 years ago

### Paper-specific author talk
The paper-specific author talk offers a direct presentation of the novel white matter engagement metric, methodology, and key findings by experts closely involved in the research. This talk provides the most precise and detailed insight into the study's contributions and implications.

*How the paper uses it:* This talk directly relates to the paper's novel method integrating functional and structural connectivity to assess white matter engagement.

▶ [Introduction to Network Neuroscience: Complex Attributes of Structural Connectivity 1. OLAF SPORNS](https://www.youtube.com/watch?v=aOWDZI6W2qM) — The Brain Program / IDEAS Research Center · 1:12:40 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning about diffusion MRI fiber tracking, which reveals the brain's structural wiring through white matter pathways. Next, grasp resting-state fMRI functional connectivity to see how brain regions communicate functionally at rest. Then, explore graph theory's edge betweenness centrality to understand how functional connections are weighted in the network. After that, learn about white matter microstructure imaging biomarkers to appreciate the biological correlates of white matter engagement. Finally, integrate these concepts by studying the paper-specific method that combines structural and functional connectivity to map white matter engagement.

### Diffusion MRI fiber tracking *(prerequisite)*
Diffusion MRI fiber tracking uses water diffusion patterns to map the brain's white matter pathways, revealing how different brain regions are physically connected. This technique forms the structural backbone for understanding brain connectivity.

*How the paper uses it:* The paper uses diffusion MRI fiber tracking to derive structural connectivity weights for white matter voxels in their engagement model.

▶ [Diffusion MRI, Tractography, Connectomics, & their applications](https://www.youtube.com/watch?v=emfNQpQuzVo) — Douglas Research Centre · 1:02:02 · 4 years ago

### Resting-state fMRI functional connectivity *(prerequisite)*
Resting-state fMRI measures spontaneous brain activity correlations between gray matter regions when a person is not performing any task, revealing functional networks. Understanding this helps explain how brain regions communicate dynamically.

*How the paper uses it:* The study uses resting-state fMRI to measure functional connectivity between gray matter nodes, which is integrated with structural data to assess white matter engagement.

▶ [Resting State Functional Connectivity: Part 1 - Introduction](https://www.youtube.com/watch?v=5yDN2q7gUaM) — Neuroimaging Research Methods · 13:12 · 5 years ago

### Graph theory edge betweenness centrality *(prerequisite)*
Edge betweenness centrality quantifies the importance of connections (edges) in a network by counting how many shortest paths pass through them, highlighting critical communication links. This concept helps weight functional connections by their network role.

*How the paper uses it:* The paper weights functional connectivity edges by their edge betweenness centrality to reflect their importance in brain network communication.

▶ [Betweenness Centrality](https://www.youtube.com/watch?v=ptqt2zr9ZRE) — Anuradha Bhatia · 11:43 · 9 years ago

### White matter microstructure imaging biomarkers *(prerequisite)*
White matter microstructure imaging biomarkers, such as myelin content and fiber orientation dispersion, provide biological insights into white matter health and organization using MRI proxies. These biomarkers help interpret imaging findings in terms of tissue properties.

*How the paper uses it:* The paper correlates white matter engagement with imaging biomarkers like myelin content and fiber orientation dispersion to validate their metric biologically.

▶ [“Microstructure imaging by diffusion MRI: modeling, simulation, machine learning, application to...](https://www.youtube.com/watch?v=5Zgbrh6Z-BY) — Center for Intelligent Systems CIS EPFL · 39:45 · 4 years ago

### Structural and functional connectivity integration
Integrating structural and functional connectivity combines physical brain wiring with dynamic communication patterns, offering a comprehensive view of brain networks. This integration is key to understanding how white matter supports functional interactions.

*How the paper uses it:* The core method of the paper integrates diffusion MRI structural connectivity with resting-state fMRI functional connectivity to compute white matter engagement.

▶ [Structure-Function Relationships in Brain Networks (Dr. Bratislav Misic, McGill Univ.)](https://www.youtube.com/watch?v=9FbVYkUGNTs) — Duke Institute for Brain Sciences · 1:01:14 · 4 years ago

### Paper-specific author talk
An in-depth presentation by experts on the novel white matter engagement metric, detailing the methodology, findings, and implications of integrating structural and functional connectivity in brain networks.

*How the paper uses it:* Direct source for the authors' presentation on their novel white matter engagement method and results.

▶ [Introduction to Network Neuroscience: Complex Attributes of Structural Connectivity 1. OLAF SPORNS](https://www.youtube.com/watch?v=aOWDZI6W2qM) — The Brain Program / IDEAS Research Center · 1:12:40 · 5 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's novel white matter (WM) engagement metric integrating structural and functional brain connectivity. The beginner project reproduces a simple WM engagement visualization using public data and basic graph metrics. The intermediate project implements the core WM engagement calculation on a smaller public dataset, comparing it to a baseline functional connectivity measure. The advanced project extends the method to explore individual variability by adapting structural connectivity templates, addressing a key limitation and future direction of the paper.

### Beginner — Visualize White Matter Engagement Using Edge Betweenness Centrality
*Effort: a weekend, ~8 hours*

You build a simple pipeline that computes edge betweenness centrality (EBC) on a functional connectivity graph derived from resting-state fMRI data and visualizes the spatial distribution of WM voxels weighted by EBC. This reproduces a small-scale version of the WM engagement spatial map focusing on a single subject or a small sample.

**Why it shows you understood the paper:** This project shows you understand the core concept of weighting WM voxels by the importance of functional edges (EBC) and how this relates to brain network integration, a key element of the paper's WM engagement metric.

**Grounded in:** The WM engagement metric integrates functional edge importance with structural connectivity constraints.

**Tech stack:** Python 3.11, NetworkX, Nibabel, Matplotlib, NumPy, Jupyter Notebook

**Data:** Use publicly available resting-state fMRI functional connectivity matrices from a small open dataset such as the 1000 Functional Connectomes Project or simulate a small functional connectivity graph; structural connectivity is approximated or omitted for this beginner step.

**Build it:**

1. Load or simulate a functional connectivity matrix representing gray matter nodes.
2. Construct a graph using NetworkX where nodes represent gray matter regions and edges represent functional connectivity.
3. Compute edge betweenness centrality (EBC) for all edges in the graph.
4. Map EBC values onto a simplified white matter voxel grid or region mask (simulated or approximate).
5. Visualize the spatial distribution of WM engagement as a heatmap or 3D plot.
6. Write a README explaining the mapping from functional edges to WM engagement.

**Ships as:** A Jupyter notebook and scripts that produce a visualization of WM engagement based on EBC, with clear documentation linking the method to the paper's metric.

**Stretch goal:** Add a simple structural connectivity weighting by simulating fiber counts or streamline counts to refine the WM engagement map.

### Intermediate — Implement WM Engagement Metric Integrating Structural and Functional Connectivity
*Effort: 1-3 weekends, ~20 hours*

You implement the paper's core WM engagement metric by combining edge betweenness centrality (EBC) from resting-state fMRI functional connectivity with structural connectivity (SC) weights derived from diffusion MRI fiber tracking. You apply this to a smaller public dataset as a substitute for the Human Connectome Project data, and compare WM engagement maps to a baseline functional connectivity-only measure.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's main method from its description, integrating multimodal MRI data and graph theory metrics to produce WM engagement maps, validating reproducibility and comparing to simpler baselines.

**Grounded in:** The authors developed a model that calculates WM engagement by weighting functional connectivity edge betweenness centrality (EBC) between gray matter nodes by structural connectivity (SC) derived from diffusion MRI fiber tracking through each WM voxel.

**Tech stack:** Python 3.11, NetworkX, Nibabel, DIPY (Diffusion Imaging in Python), NumPy, Matplotlib, Jupyter Notebook

**Data:** Use a publicly available diffusion MRI and resting-state fMRI dataset such as the 'Midnight Scan Club' or a small subset of the Human Connectome Project Young Adult data (if accessible), or simulate simplified structural and functional connectivity matrices.

**Build it:**

1. Preprocess diffusion MRI data to generate structural connectivity matrices or use provided SC matrices.
2. Preprocess resting-state fMRI data to generate functional connectivity matrices.
3. Construct a graph of gray matter nodes with edges weighted by functional connectivity.
4. Compute edge betweenness centrality (EBC) for functional edges.
5. Weight EBC values by structural connectivity passing through each WM voxel to compute WM engagement.
6. Visualize and compare WM engagement maps to baseline functional connectivity maps.
7. Document the method, results, and comparison in a detailed README.

**Ships as:** A reproducible pipeline and codebase that computes WM engagement maps integrating SC and FC, with visualizations and baseline comparisons, demonstrating core method understanding.

**Stretch goal:** Incorporate sliding window analysis to explore temporal variability of WM engagement as in the paper.

### Advanced — Adapt WM Engagement Model to Capture Individual Variability in Structural Connectivity
*Effort: few weeks, ~40+ hours*

You extend the WM engagement model by replacing the population-averaged structural connectivity template with individual-specific structural connectivity derived from each subject's diffusion MRI data. You analyze how this adaptation affects WM engagement maps and explore correlations with individual differences, addressing a key limitation and future direction of the paper.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's methodology and limitations, applying advanced diffusion MRI processing to personalize structural connectivity inputs, thus advancing the WM engagement metric toward clinical and individualized applications.

**Grounded in:** The model depends on population-averaged structural connectivity templates, which may not capture individual variability fully. Future direction: Refine structural connectivity templates to incorporate individual variability for personalized mapping.

**Tech stack:** Python 3.11, DIPY, NetworkX, Nibabel, NumPy, Matplotlib, Jupyter Notebook, scikit-learn

**Data:** Use a public dataset with both diffusion MRI and resting-state fMRI from multiple subjects, such as the Human Connectome Project Young Adult dataset (publicly accessible), to extract individual SC and FC matrices.

**Build it:**

1. Process individual diffusion MRI data to generate subject-specific structural connectivity matrices using fiber tracking.
2. Process individual resting-state fMRI data to generate functional connectivity matrices.
3. Compute edge betweenness centrality (EBC) for each subject's functional connectivity graph.
4. Calculate WM engagement maps by weighting EBC with each subject's individual SC matrices.
5. Compare individual WM engagement maps to those generated using population-averaged SC templates.
6. Analyze correlations between individual WM engagement variability and demographic or imaging biomarkers (e.g., sex, age).
7. Document findings, limitations, and potential clinical implications.

**Ships as:** A comprehensive codebase and report demonstrating personalized WM engagement mapping, comparison to population templates, and exploratory analysis of individual variability.

**Stretch goal:** Extend analysis to clinical populations or task-based fMRI data to explore functional specificity of WM engagement.
