---
title: "560 · Semantic Data Processing with Holistic Data Understanding — Aditya G. Parameswaran"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-adityagp"
source_hash: "7724e19d01b829f906acce93420175b7f0c1926050a7ec34c57e751c14509a11"
sequence: 560
generator: "outreach-garden: managed"
---

# 560 · Semantic Data Processing with Holistic Data Understanding

## At a glance

- **Professor:** Aditya G. Parameswaran
- **Institution:** University of Illinois Urbana
- **Paper:** [Semantic Data Processing with Holistic Data Understanding](https://arxiv.org/abs/2604.02655)
- **Authors:** Youran Sun, Sepanta Zeighami, Bhavya Chopra, Shreya Shankar, Aditya G. Parameswaran
- **Year:** 2026

## Paper overview

This paper introduces HoldUp, a novel method for semantic data processing that enables large language models (LLMs) to understand datasets holistically rather than processing records independently. HoldUp clusters related records and assigns labels jointly, overcoming limitations of existing semantic operators that ignore dataset context. This approach significantly improves accuracy in classification, scoring, and clustering tasks on real-world datasets.

### Why it matters

**Research problem:** Existing semantic operators using LLMs process each data record independently without considering the context of the entire dataset, leading to inaccurate interpretations and results due to the imprecision of natural language and the lack of holistic data understanding.

**Why it matters:** Accurate semantic data processing is crucial for many applications such as classification, scoring, and clustering in data management. Without considering dataset context, LLM-based semantic operators yield poor accuracy (less than 70% for classification and less than 50% for scoring), limiting their practical utility.

**Key contributions:**

- Identification of the lack of holistic data understanding as a critical flaw in existing semantic operators.
- Proposal of HoldUp, a novel semantic operator that enables holistic dataset understanding for classification, scoring, and clustering.
- Development of a novel clustering algorithm that uses LLMs for subtasks and resolves the LLM data understanding paradox via iterative sampling and aggregation.
- Design of clustering-based classification and scoring methods that jointly assign labels to clusters using graph and optimization techniques.
- Implementation of a budget-aware model cascade framework to balance accuracy and cost.

## About the professor

**Aditya G. Parameswaran** — Adjunct Assistant Professor, Computer Science, University of Illinois Urbana.

Research interests: Data Management and Mining; Information Extraction and Integration; Crowdsourcing; Visual and Interactive Data Analytics

### Research links

- [Professor website](http://data-people.cs.illinois.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph-based clustering algorithms
**The paper assumes:** graph theory, clustering algorithms, graph partitioning, bipartite matching, and probabilistic graph models
**Already in this field?** Skip this entirely if you already have a solid understanding of graph clustering algorithms and their applications in machine learning or data mining.

This background focuses on graph-based clustering algorithms, which are central to understanding the HoldUp method introduced in the paper. The rigorous course option provides a deep, foundational understanding of machine learning clustering techniques including graph-based methods, while the fast track offers a concise, intuition-driven introduction to various clustering algorithms, including graph partitioning and spectral clustering. Readers should pick the course for a thorough study or the fast track for a quick but solid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Spectral Clustering - Stanford University](https://www.youtube.com/playlist?list=PLiAulSm0XXgtkxss6TXOEffq3RhrsbYbV) — Amr Elsayyad · 6 videos

**Watch only this:** Episodes 29 to 34 (all 6 episodes), about 0.8 hours total — covers what makes a good cluster, graph Laplacian matrix, eigendecompositions, spectral graph partitioning, and spectral clustering steps.

*Why it unblocks this paper:* This Stanford University playlist on Spectral Clustering directly covers graph Laplacians, spectral graph partitioning, and clustering steps, which are essential to understanding the graph-based clustering algorithm used in HoldUp.

*If you want all of it:* 0.8 hours across 6 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Clustering algorithms](https://www.youtube.com/playlist?list=PLCATzTZDm4r7NifbSR8qprAz0fXrPi19I) — Katharina Hochwart · 11 videos · 1.1h across the first 10 episodes

**Watch only this:** Episodes 1 to 6 (first 6 episodes), about 36 minutes total — covers K-means, BIRCH micro clustering, CHAMELEON graph partitioning, DBSCAN, OPTICS, and clustering tendency.

*Why it unblocks this paper:* This short playlist provides clear, concise explanations of clustering algorithms including graph partitioning methods, which will quickly build intuition about clustering concepts relevant to HoldUp's approach.

*If you want all of it:* About 1.1 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Semantic Data Processing with Holistic Data Understanding," start with foundational knowledge on large language models (LLMs) and their application to data analytics, followed by graph-based clustering algorithms which are central to the HoldUp method. Next, study iterative sampling and bagging methods that underpin HoldUp's approach to estimating cluster relationships. Then, explore model cascades in machine learning to grasp the cost-accuracy tradeoff strategy used. Finally, focus on the core concept of holistic semantic data processing and the authors' own talk if available, to directly connect theory with the novel contributions of the paper.

### Large language models for data analytics *(prerequisite)*
This section covers foundational understanding of how LLMs are trained and applied to semantic data tasks, which is crucial since HoldUp leverages LLMs for semantic data processing. The selected video provides a rigorous, university-level explanation of LLM training phases and fine-tuning, helping to appreciate the capabilities and limitations of LLMs in data understanding.

*How the paper uses it:* HoldUp relies on LLMs to estimate relationships between data records and to perform semantic classification and scoring.

▶ [How are large language models trained?](https://www.youtube.com/watch?v=JRArFxEfyQU) — Google for Developers · 10:09 · 2mo ago

### Graph-based clustering algorithms *(prerequisite)*
Graph-based clustering is a key technique used by HoldUp to cluster related records jointly by constructing a graph where nodes are records and edges represent probabilities of label differences. The chosen MIT lecture offers a mathematically rigorous treatment of clustering in graphs, suitable for advanced readers seeking to understand the algorithmic foundations behind HoldUp's clustering approach.

*How the paper uses it:* HoldUp uses a novel graph-based clustering algorithm to jointly cluster records based on LLM-estimated edge weights.

▶ [35. Finding Clusters in Graphs](https://www.youtube.com/watch?v=cxTmmasBiC8) — MIT OpenCourseWare · 34:49 · 7y ago

### Iterative sampling and bagging methods *(prerequisite)*
This section explains iterative sampling and bagging, statistical techniques that underpin HoldUp's method of repeatedly querying LLMs on random subsets to estimate edge weights robustly. The Stanford lecture by Trevor Hastie provides a thorough and research-level overview of bagging, making it ideal for understanding the statistical foundations of HoldUp's iterative sampling strategy.

*How the paper uses it:* HoldUp employs a bagging-inspired iterative sampling approach to estimate edge weights for clustering from multiple LLM queries.

▶ [Statistical Learning: 8.4 Bagging](https://www.youtube.com/watch?v=_cKAxjnInfA) — Stanford Online · 13:46 · 4y ago

### Model cascades in machine learning *(prerequisite)*
Understanding model cascades is important to grasp how HoldUp balances accuracy and computational cost by combining clustering-based classification with row-by-row classification. The Carnegie Mellon guest lecture by Scott Fahlman, the inventor of Cascade-Correlation, offers an in-depth and advanced treatment of cascade architectures in machine learning.

*How the paper uses it:* HoldUp uses a model cascade framework to optimize the tradeoff between accuracy and cost in semantic classification.

▶ [Cascade-Correlation and Deep Learning by Scott Fahlman (Spring 2019)](https://www.youtube.com/watch?v=wAlPh6HGr9E) — Carnegie Mellon University Deep Learning · 1:12:31 · 7y ago

### Holistic semantic data processing
This core concept focuses on the joint understanding of datasets beyond independent record processing, which is the main innovation of HoldUp. The selected videos provide academic-level insights into semantic models and semantic layers, which are foundational to holistic semantic data processing. Although no direct author talk on HoldUp was found, these videos contextualize the semantic technologies and models that underpin the paper's contributions.

*How the paper uses it:* HoldUp introduces holistic semantic data processing to improve accuracy by jointly processing records with dataset context.

▶ [5.6 - Semantic Search](https://www.youtube.com/watch?v=NNlXVEsY070) — ISE FIZ Karlsruhe · 24:18 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the HoldUp method for semantic data processing, starting with how large language models (LLMs) are used in data analytics, then covering graph-based clustering algorithms and iterative sampling methods that underpin HoldUp's approach. Next, it explains model cascades in machine learning to grasp HoldUp's cost-accuracy tradeoff strategy. Finally, it presents the core idea of holistic semantic data processing, which is central to the paper's novel contribution.

### Large language models for data analytics *(prerequisite)*
Learn how large language models (LLMs) are trained and applied in data analytics tasks, including their strengths and limitations. This foundation helps understand how LLMs interpret data and why their independent record processing can be insufficient.

*How the paper uses it:* HoldUp leverages LLMs for semantic data processing but overcomes their limitations by jointly processing records.

▶ [How are large language models trained?](https://www.youtube.com/watch?v=JRArFxEfyQU) — Google for Developers · 10:09 · 2mo ago

### Graph-based clustering algorithms *(prerequisite)*
Understand how graph-based clustering algorithms identify groups of related data points by modeling data as graphs and optimizing cluster quality. This intuition is key to grasping how HoldUp clusters records based on relationships estimated via LLM queries.

*How the paper uses it:* HoldUp uses a novel graph-based clustering algorithm to group related records jointly for semantic processing.

▶ [35. Finding Clusters in Graphs](https://www.youtube.com/watch?v=cxTmmasBiC8) — MIT OpenCourseWare · 34:49 · 7y ago

### Iterative sampling and bagging methods *(prerequisite)*
Explore iterative sampling and bagging techniques that improve model robustness by aggregating results from multiple random subsets of data. This concept explains how HoldUp estimates edge weights in its clustering graph through repeated LLM queries on random data subsets.

*How the paper uses it:* HoldUp’s edge weight estimation uses a bagging-inspired iterative sampling approach with LLMs.

▶ [Statistical Learning: 8.4 Bagging](https://www.youtube.com/watch?v=_cKAxjnInfA) — Stanford Online · 13:46 · 4y ago

### Model cascades in machine learning *(prerequisite)*
Learn about model cascades, which combine multiple models to balance accuracy and computational cost by applying complex models only to difficult cases. This concept clarifies HoldUp’s strategy to manage cost by cascading clustering-based classification with row-by-row classification.

*How the paper uses it:* HoldUp employs a model cascade framework to optimize accuracy and cost in semantic data processing.

▶ [Cascade-Correlation and Deep Learning by Scott Fahlman (Spring 2019)](https://www.youtube.com/watch?v=wAlPh6HGr9E) — Carnegie Mellon University Deep Learning · 1:12:31 · 7y ago

### Holistic semantic data processing
Understand the idea of holistic semantic data processing, where datasets are interpreted jointly rather than record-by-record, enabling more accurate semantic understanding. This is the core innovation of HoldUp that addresses the limitations of existing semantic operators.

*How the paper uses it:* HoldUp introduces holistic data understanding to improve semantic processing accuracy by jointly considering dataset context.

▶ [Semantic Layers in the Age of AI are 100% Needed](https://www.youtube.com/watch?v=K_VPF9URZo4) — Alex The Analyst · 6:12 · 6mo ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [StatQuest: K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) — also for: Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding (Thomas F. Stahovich)
- [12. Clustering](https://www.youtube.com/watch?v=esmzYhuFnds) — also for: Clustering in Varying Metrics (Deeparnab Chakrabarty)
- [Hierarchical Cluster Analysis [Simply explained]](https://www.youtube.com/watch?v=8QCBl-xdeZI) — also for: From Overload to Insight: Scaffolding Creative Ideation through Structuring Inspiration (Aniket Kittur)
- [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)
- [Lec-12: Introduction to Ensemble Learning with Real Life Examples | Machine⚙️ Learning](https://www.youtube.com/watch?v=qQjOWmf8I_I) — also for: Prometheus: Toward Resilient Data Centers through Optimized Cooling Infrastructure (Benjamin C. Lee)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the HoldUp method for holistic semantic data processing. The beginner project reproduces a key mechanism of iterative LLM sampling for clustering edge weight estimation on a small scale. The intermediate project implements the core HoldUp clustering-based classification method on a real-world dataset from the paper's references, comparing it to a baseline row-by-row LLM classification. The advanced project extends HoldUp by exploring scalability improvements for larger datasets, addressing a stated limitation and future direction in the paper.

### Beginner — Iterative LLM Sampling for Record Pair Similarity
*Effort: a weekend, ~8 hours*

You build a small prototype that implements the iterative sampling and aggregation procedure to estimate edge weights (probabilities that two records belong to different classes) using repeated LLM queries on random subsets of a dataset. The prototype focuses on a small set of records (e.g., 20-30) and simulates or uses an LLM API to query whether pairs of records should be clustered together.

**Why it shows you understood the paper:** This project demonstrates you understand the core mechanism HoldUp uses to overcome the LLM data understanding paradox by iterative sampling and aggregation for graph edge weight estimation, a key novel contribution of the paper.

**Grounded in:** Development of a novel clustering algorithm that uses LLMs for subtasks and resolves the LLM data understanding paradox via iterative sampling and aggregation.

**Tech stack:** Python 3.11, OpenAI API or HuggingFace transformers, Jupyter Notebook

**Data:** Use a small subset (20-30 records) from the Customer Support Ticket Dataset referenced in the paper (https://www.kaggle.com/datasets/suraj520/customer-support-ticket-dataset) or a similarly small public tabular dataset.

**Build it:**

1. Select a small subset of records from the Customer Support Ticket Dataset or a similar dataset.
2. Write code to generate random subsets (bags) of these records for iterative sampling.
3. Implement a function to query an LLM with pairs of records within these subsets, asking if they belong to the same class.
4. Aggregate the LLM responses across multiple samples to estimate edge weights (probabilities of different labels) between record pairs.
5. Visualize the resulting weighted graph of records and edge weights.

**Verified links from the paper:**

- <https://www.kaggle.com/datasets/suraj520/customer-support-ticket-dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter notebook with code and visualizations showing iterative LLM sampling to estimate pairwise record similarity probabilities, with explanations linking to the paper's clustering algorithm.

**Stretch goal:** Add a simple clustering step (e.g., thresholding edge weights) to form clusters and show how the sampling affects cluster formation.

### Intermediate — HoldUp Clustering-Based Classification on Customer Support Tickets
*Effort: 1-3 weekends*

You implement the core HoldUp method: build a graph of records with edge weights estimated via iterative LLM sampling, cluster the graph, and assign cluster labels jointly via bipartite matching. You apply this to the Customer Support Ticket Dataset and compare classification accuracy against a baseline row-by-row LLM classification approach.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's main semantic operator and reproduce its key accuracy improvements on a real-world dataset, demonstrating comprehension of the holistic data understanding approach and model cascade design.

**Grounded in:** HoldUp processes records jointly, leveraging cross-record relationships to correctly interpret the task within the data context... Experiments across 15 real-world datasets show that HoldUp consistently outperforms existing solutions, providing up to 33% higher accuracy for classification.

**Tech stack:** Python 3.11, OpenAI API or HuggingFace transformers, NetworkX for graph processing, SciPy or CVXPY for bipartite matching, Jupyter Notebook or Python scripts

**Data:** Customer Support Ticket Dataset from https://www.kaggle.com/datasets/suraj520/customer-support-ticket-dataset as used in the paper.

**Build it:**

1. Preprocess the dataset to extract relevant features or text fields for LLM input.
2. Implement iterative sampling to estimate edge weights between records using LLM queries as in the beginner project.
3. Construct a weighted graph with records as nodes and edge weights as probabilities of different labels.
4. Apply a clustering algorithm (e.g., spectral clustering or community detection) using the weighted graph.
5. Implement bipartite matching to assign cluster labels jointly, optimizing label assignment across clusters.
6. Implement a baseline row-by-row LLM classification method for comparison.
7. Evaluate and compare classification accuracy of HoldUp clustering-based classification versus baseline.
8. Document results and analysis in a report or README.

**Verified links from the paper:**

- <https://www.kaggle.com/datasets/suraj520/customer-support-ticket-dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code to run HoldUp clustering-based classification on the Customer Support Ticket Dataset, baseline comparison, and a README reporting accuracy metrics and insights.

**Stretch goal:** Add the model cascade approach from the paper by combining clustering-based classification for difficult records with row-by-row classification for easy cases to balance cost and accuracy.

### Advanced — Scaling HoldUp for Large Datasets with Cost-Efficient Sampling
*Effort: a few weeks*

You extend the HoldUp method to improve scalability and cost-efficiency on larger datasets, addressing the paper's limitation of computational expense and long-context issues. You design and implement a more efficient sampling strategy or proxy model cascade to reduce LLM calls while maintaining accuracy, and evaluate on a larger public dataset or a synthesized large dataset.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of HoldUp's challenges and the ability to innovate on its core algorithm to improve practical usability.

**Grounded in:** The clustering-based approach can be computationally expensive, requiring multiple LLM calls and iterative sampling... Improving cost-efficiency and scalability for very large datasets is a stated future direction.

**Tech stack:** Python 3.11, OpenAI API or HuggingFace transformers, NetworkX or graph-tool, Scikit-learn, Jupyter Notebook or Python scripts

**Data:** Use the Customer Support Ticket Dataset or a larger public tabular dataset with semantic labels; alternatively, synthesize a large dataset with similar characteristics.

**Build it:**

1. Analyze the computational bottlenecks in the intermediate HoldUp implementation on larger data.
2. Design a proxy model (e.g., a lightweight classifier) to pre-filter easy records, reducing LLM calls.
3. Implement a hierarchical or adaptive sampling strategy to focus iterative LLM queries on uncertain or difficult record pairs.
4. Integrate the proxy model and adaptive sampling into a model cascade framework as described in the paper.
5. Evaluate the trade-offs between accuracy, cost (number of LLM calls), and runtime compared to the baseline HoldUp method.
6. Document the methodology, results, and potential improvements.

**Verified links from the paper:**

- <https://www.kaggle.com/datasets/suraj520/customer-support-ticket-dataset> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository demonstrating a scalable HoldUp variant with cost-efficient sampling and proxy models, with evaluation results and a detailed README discussing scalability improvements and limitations.

**Stretch goal:** Explore applying the scalable HoldUp approach to streaming or real-time data scenarios as suggested in the paper's future directions.
