---
title: "125 · A Comparative Study of Gene Co-Expression Thresholding Algorithms — Michael A. Langston"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-a-langston"
source_hash: "342239c41340a46790fa2aae9fd48af4d57fc6a96abbab45f37fd144d6b4d149"
sequence: 125
generator: "outreach-garden: managed"
---

# 125 · A Comparative Study of Gene Co-Expression Thresholding Algorithms

## At a glance

- **Professor:** Michael A. Langston
- **Institution:** University of Tennessee
- **Paper:** [A Comparative Study of Gene Co-Expression Thresholding Algorithms](http://web.eecs.utk.edu/~langston/JCB-Thresholding-Paper.pdf)
- **Authors:** Carissa Bleker, Stephen K. Grady, Michael A. Langston
- **Year:** 2024

## Paper overview

This paper studies different methods to select thresholds for gene co-expression networks, which are graphs representing relationships between genes based on their expression data. The authors implemented and compared 15 thresholding algorithms on a large set of real biological data to determine which methods best identify meaningful gene clusters. They also created publicly available resources for the community to use these methods and data.

### Why it matters

**Research problem:** Determining appropriate threshold values to filter edges in gene co-expression graphs is challenging, with no consensus on the best methods. Thresholding is critical to remove weak or spurious connections so that subsequent biological analyses focus on significant relationships.

**Why it matters:** Gene co-expression networks are widely used in life sciences to understand gene interactions and functions. Incorrect thresholding can lead to false positives or negatives, affecting the quality of biological insights and downstream analyses.

**Key contributions:**

- Comprehensive implementation and systematic comparison of 15 thresholding algorithms for gene co-expression networks.
- Development of new thresholding techniques based on graph density fluctuations and percolation metrics.
- Creation of a benchmark suite of 83 real biological graphs for testing thresholding methods.
- Introduction of a novel performance metric, the total significant clusters ratio (TSCR), to evaluate thresholding quality.
- Public release of software and data repositories to facilitate reproducibility and further research.

## About the professor

**Michael A. Langston** — Professor, Department of Electrical Engineering and Computer Science, University of Tennessee.

Research interests: Big Data Analytics, Combinatorial Optimization, Computer and Data Science, Graph Theoretical Algorithms, High Performance Implementations, Life Science Applications, Machine Learning, Statistical Software

### Research links

- [Faculty/profile page](http://web.eecs.utk.edu/~langston)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on gene co-expression thresholding algorithms, start with foundational knowledge of graph theoretical algorithms in bioinformatics and graph clustering methods, as these underpin the network construction and clustering evaluation in the study. Next, learn about Gene Ontology enrichment analysis, which the paper uses as a biological validation metric. Then, explore thresholding methods for biological networks to grasp the variety of approaches compared in the paper. Finally, focus on the core concept of gene co-expression network thresholding, including the authors' own related lecture, to directly connect with the paper's contributions and context.

### Graph theoretical algorithms in bioinformatics *(prerequisite)*
This section covers foundational graph algorithms applied to biological data, essential for understanding how gene co-expression networks are constructed and analyzed. The selected talk from the Simons Institute provides a rigorous and research-level overview of network properties relevant to biology.

*How the paper uses it:* The paper applies graph theoretical algorithms to analyze gene co-expression networks and develop thresholding methods.

▶ [Introduction to Biological Network Analysis I: Network Basics ...](https://www.youtube.com/watch?v=qTO_ob5d9EQ) — Simons Institute for the Theory of Computing · 57:31

### Graph clustering algorithms *(prerequisite)*
Understanding graph clustering is critical because the paper evaluates thresholding methods based on their impact on clustering quality. The chosen Stanford lecture offers an advanced, graduate-level treatment of spectral clustering, a method closely related to those evaluated in the paper.

*How the paper uses it:* The paper uses clustering algorithms, including spectral methods, to assess the quality of thresholded gene co-expression networks.

▶ [Lecture 34 — Spectral Clustering  Three Steps (Advanced) | Stanford University](https://www.youtube.com/watch?v=uxsDKhZHDcc) — Artificial Intelligence - All in One · 10 years ago

### Gene Ontology enrichment analysis *(prerequisite)*
Gene Ontology enrichment analysis is a key biological metric used in the paper to validate the significance of gene clusters identified after thresholding. The selected lecture by Gerald Quon provides a detailed and research-oriented overview suitable for advanced learners.

*How the paper uses it:* The paper uses Gene Ontology enrichment to evaluate the biological relevance of clusters formed after applying thresholding algorithms.

▶ [MCB 182 Lecture 5.4 - Gene ontology enrichment analysis](https://www.youtube.com/watch?v=-CCMO24Pvuk) — Gerald Quon · 28:32

### Thresholding methods for biological networks *(prerequisite)*
This section introduces various thresholding approaches in biological contexts, providing background to understand the comparative study of thresholding algorithms in the paper. The 'Introduction to Connectome Thresholding' video by the Systems Group offers a research-level seminar on thresholding in biological networks.

*How the paper uses it:* The paper systematically compares multiple thresholding algorithms to identify effective methods for gene co-expression networks.

▶ [Introduction to Connectome Thresholding](https://www.youtube.com/watch?v=MZEQR7gKfNE) — Systems Group · 5 years ago

### Gene co-expression network thresholding
This core section focuses on the central topic of the paper: thresholding in gene co-expression networks. The selected lecture by Gerald Quon provides an advanced academic treatment of co-expression networks, directly relevant to the paper's methodology and context.

*How the paper uses it:* The paper's main focus is on comparing and evaluating thresholding algorithms for gene co-expression networks.

▶ [MCB 182 Lecture 11.5 - Co-expression networks](https://www.youtube.com/watch?v=d8-F5XjPi5E) — Gerald Quon · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces you first to the basics of gene co-expression networks and their thresholding, then covers graph clustering and biological evaluation methods, and finally touches on graph algorithms in bioinformatics. The sequence builds foundational intuition about how gene relationships are represented and filtered, how clusters are identified and validated biologically, and how graph theory underpins these analyses, preparing you to understand the paper's comparative study of thresholding algorithms.

### Gene co-expression network thresholding
Gene co-expression networks represent relationships between genes based on expression data, but to focus on meaningful connections, weak edges must be filtered out using thresholding. This video explains how these networks are constructed and the role of thresholding in identifying significant gene modules.

*How the paper uses it:* Thresholding is the central method studied in the paper to filter edges in gene co-expression networks for meaningful biological analysis.

▶ [Introduction to Weighted Gene Co-expression Network Analysis (WGCNA) | Bioinformatics 101](https://www.youtube.com/watch?v=PvBf65Y8Cqk) — Bioinformagician · 3 years ago

### Graph clustering algorithms *(prerequisite)*
Clustering algorithms group nodes in a graph into modules or communities, which in gene networks correspond to gene clusters with shared functions. Understanding clustering helps grasp how thresholding impacts the detection of biologically relevant gene groups.

*How the paper uses it:* The paper evaluates thresholding methods by how well they enable clustering algorithms to find significant gene modules.

▶ [Lecture 34 — Spectral Clustering  Three Steps (Advanced) | Stanford University](https://www.youtube.com/watch?v=uxsDKhZHDcc) — Artificial Intelligence - All in One · 10 years ago

### Gene Ontology enrichment analysis *(prerequisite)*
Gene Ontology (GO) enrichment analysis assesses whether gene clusters are biologically meaningful by checking if they are statistically overrepresented in known functional categories. This is a key way to validate the quality of clusters found after thresholding and clustering.

*How the paper uses it:* The paper uses GO enrichment to measure the biological significance of clusters resulting from different thresholding methods.

▶ [Gene Set Enrichment Analysis (GSEA) – simply explained!](https://www.youtube.com/watch?v=egO7Lt92gDY) — Biostatsquid · 8:14

### Graph theoretical algorithms in bioinformatics *(prerequisite)*
Graph theory provides the mathematical foundation for representing and analyzing biological networks, including gene co-expression graphs. This video introduces core graph concepts and their applications in biology, helping to understand the algorithms used in the paper.

*How the paper uses it:* The paper applies graph theoretical algorithms to analyze gene co-expression networks and develop thresholding methods.

▶ [Introduction to Biological Network Analysis I: Network Basics ...](https://www.youtube.com/watch?v=qTO_ob5d9EQ) — Simons Institute for the Theory of Computing · 57:31

### Thresholding methods for biological networks *(prerequisite)*
Thresholding methods decide which edges to keep in biological networks based on statistical or structural criteria, crucial for removing noise and highlighting meaningful interactions. This video introduces the concept of thresholding functions and their biological motivation.

*How the paper uses it:* The paper compares 15 thresholding algorithms to identify the best approaches for gene co-expression networks.

▶ [Introduction to Connectome Thresholding](https://www.youtube.com/watch?v=MZEQR7gKfNE) — Systems Group · 5 years ago
