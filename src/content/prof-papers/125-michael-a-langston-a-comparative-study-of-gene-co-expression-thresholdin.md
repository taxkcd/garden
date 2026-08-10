---
title: "125 · A Comparative Study of Gene Co-Expression Thresholding Algorithms — Michael A. Langston"
date: 2026-08-01
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-a-langston"
source_hash: "c7ecdb27299b38ff6903c1aa0875876ddbba28e4d3211902ccf12186a8e8613b"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Theory and Network Analysis
**The paper assumes:** graph theory, network analysis, graph clustering algorithms, spectral graph theory
**Already in this field?** Skip this entirely if you already have a solid understanding of graph theory and network analysis concepts including clustering and spectral methods.

Understanding gene co-expression thresholding algorithms requires a solid grasp of graph theory and network analysis concepts such as cliques, spectral methods, and network topology. For a rigorous and comprehensive foundation, the university lecture series offers in-depth coverage of graph machine learning and network structures. For a quicker, intuition-driven introduction focused on core network analysis concepts, the short-form series provides concise, practical labs in social network analysis using R, which aligns well with the paper's focus on clustering and network metrics.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W: Machine Learning with Graphs](https://www.youtube.com/playlist?list=PLoROMvodv4rPLKxIpqhjhPgdQy7imNkDn) — Stanford Online · 60 videos · 22.4h across 60 episodes

**Watch only this:** Lectures 1.1 to 5.3 (17 episodes, about 6.2 hours) — covering graph basics, traditional feature-based methods, node embeddings, PageRank, and clustering methods, which provide the essential background for the paper's graph thresholding and clustering approaches.

*Why it unblocks this paper:* Stanford CS224W: Machine Learning with Graphs is a comprehensive course covering graph representations, spectral methods, clustering, and node embeddings, directly relevant to understanding thresholding algorithms and evaluation metrics like maximal clique ratio used in the paper.

*If you want all of it:* 22.4 hours across 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Social Network Analysis: A Beginner's Lab in R](https://www.youtube.com/playlist?list=PL1M5TsfDV6VsyfMHfkDcUW71ADKcUNCUI) — Mod•U: Powerful Concepts in Social Science · 15 videos · 2.2h across 15 episodes

**Watch only this:** Episodes 1 to 6 (about 48 minutes) — covering basics of social network analysis, network layouts, data structures, and clustering, providing a quick but solid grounding in network concepts relevant to the paper.

*Why it unblocks this paper:* Social Network Analysis: A Beginner's Lab in R offers a concise, practical introduction to key network concepts such as clustering, centrality measures, and network layouts, which are foundational for understanding gene co-expression networks and thresholding effects.

*If you want all of it:* 2.2 hours across 15 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the paper's core contributions on gene co-expression network thresholding. The beginner project reproduces a key metric calculation on a small example to grasp threshold evaluation. The intermediate project implements and compares core thresholding methods on a subset of real biological graphs from the authors' benchmark, reproducing the paper's evaluation approach. The advanced project extends the paper by applying thresholding methods to a new omics data type, addressing a stated limitation and exploring method adaptation.

### Beginner — Compute Total Significant Clusters Ratio (TSCR) on Sample Gene Co-Expression Graph
*Effort: a weekend, ~6 hours*

You build a Python script that takes a small gene co-expression network (graph) with weighted edges and applies a simple threshold to filter edges. Then you run a clustering algorithm (e.g., paraclique or maximal clique finder) on the thresholded graph and compute the total significant clusters ratio (TSCR) metric as defined in the paper. This reproduces the paper's novel metric on a toy example.

**Why it shows you understood the paper:** This project shows you understand the paper's key evaluation metric TSCR and how thresholding affects cluster quality. It demonstrates your grasp of the relationship between threshold selection, graph clustering, and biological significance evaluation.

**Grounded in:** Introduction of a novel performance metric, the total significant clusters ratio (TSCR), to evaluate thresholding quality.

**Tech stack:** Python 3.11, NetworkX, Jupyter Notebook

**Data:** A small synthetic or publicly available gene co-expression graph with weighted edges, e.g., a toy example you create or a small subset from the paper's benchmark (if accessible).

**Build it:**

1. Implement a function to apply a fixed threshold to edge weights in the graph.
2. Implement or use a maximal clique or paraclique clustering algorithm on the thresholded graph.
3. Implement TSCR calculation based on cluster counts and significance as described in the paper.
4. Run the pipeline on the small graph and output the TSCR value.
5. Document the process and explain how TSCR reflects thresholding quality.

**Ships as:** A GitHub repository with a Python script or notebook that computes TSCR on a small gene co-expression graph, with clear README explaining the metric and thresholding impact.

**Stretch goal:** Add visualization of how TSCR changes with varying threshold values on the same graph.

### Intermediate — Implement and Compare MCR-Based and Spectral Thresholding on Benchmark Gene Co-Expression Graphs
*Effort: 2 weekends, ~20 hours*

You reimplement the core maximal clique ratio (MCR)-based and spectral thresholding algorithms described in the paper. Using the publicly available benchmark suite of 83 biological graphs from https://zenodo.org/records/10532019, you apply these thresholding methods to a subset of graphs (e.g., 5-10 transcriptomic graphs). You then run paraclique clustering and compute TSCR to compare the thresholding methods' performance, reproducing the paper's key results.

**Why it shows you understood the paper:** This project shows you can implement the paper's novel thresholding algorithms and evaluation pipeline on real biological data, demonstrating comprehension of the methods and their comparative performance. It also shows you can work with large biological graph data and reproduce scientific evaluation metrics.

**Grounded in:** Comprehensive implementation and systematic comparison of 15 thresholding algorithms for gene co-expression networks; Algorithms proposed specifically for transcriptomic data performed admirably, with the three MCR-based strategies and Spectral-Methods among the best.

**Tech stack:** Python 3.11, NetworkX, NumPy, SciPy, Jupyter Notebook

**Data:** Subset of the benchmark suite of 83 biological graphs from https://zenodo.org/records/10532019, focusing on transcriptomic data graphs.

**Build it:**

1. Download and preprocess a subset of graphs from the benchmark dataset.
2. Implement the MCR-based thresholding algorithm as described in the paper.
3. Implement the spectral thresholding method as described.
4. Apply both thresholding methods to each graph to determine thresholds.
5. Run paraclique clustering on the thresholded graphs.
6. Compute TSCR for each method and graph, and compare results.
7. Document findings and compare to paper's reported performance.

**Verified links from the paper:**

- <https://zenodo.org/records/10532019> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with implementations of MCR and spectral thresholding, scripts to run on benchmark graphs, TSCR evaluation, and a report comparing methods with plots.

**Stretch goal:** Add a baseline thresholding method (e.g., median threshold) for comparison and analyze differences.

### Advanced — Extend Thresholding Methods to Proteomics Data and Evaluate Adaptation of MCR and Spectral Methods
*Effort: 3-4 weeks*

You extend the paper's thresholding methods by applying MCR-based and spectral thresholding algorithms to proteomics co-expression networks, addressing the paper's limitation of focus on transcriptomic and methylation data. You obtain or construct proteomics co-expression graphs from public proteomics datasets (e.g., from PRIDE or other repositories). You adapt the thresholding algorithms as needed for different network topologies, run clustering and TSCR or analogous evaluation metrics, and analyze performance and challenges.

**Why it shows you understood the paper:** This project demonstrates deep understanding of the paper's methods and limitations by applying them to a new omics domain, requiring adaptation and critical evaluation. It shows ability to extend research methods beyond the original scope and engage with open research questions.

**Grounded in:** Limitations: The study focused primarily on transcriptomic and DNA methylation data, limiting generalizability to other omics data types; Future directions: Extending the comparative analysis to other omics data such as proteomics, genomics, and metabolomics.

**Tech stack:** Python 3.11, NetworkX, NumPy, SciPy, Jupyter Notebook

**Data:** Publicly available proteomics co-expression data from a recognized repository such as PRIDE or similar, or constructed from proteomics expression datasets; no direct paper dataset available for proteomics.

**Build it:**

1. Identify and obtain proteomics expression data suitable for co-expression network construction.
2. Construct weighted gene/protein co-expression graphs from the data.
3. Adapt and implement MCR-based and spectral thresholding algorithms for these graphs.
4. Apply thresholding, run clustering (paraclique or maximal clique), and compute TSCR or a proxy metric.
5. Analyze threshold values, cluster quality, and compare to transcriptomic results.
6. Document challenges, adaptations, and insights on method generalizability.

**Ships as:** A GitHub repository with code to construct proteomics co-expression graphs, apply thresholding methods, evaluate clusters, and a detailed report discussing method adaptation and results.

**Stretch goal:** Develop or integrate an alternative evaluation metric analogous to Gene Ontology enrichment suitable for proteomics clusters.

_The paper's authors did not release their own code, so the intermediate project requires reimplementation of core methods from the paper's descriptions; proteomics data must be sourced externally as the paper's benchmark is limited to transcriptomic and methylation data._
