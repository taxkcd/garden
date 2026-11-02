---
title: "1004 · Quantifying uncertainty in protein representations across models and tasks — Yana Bromberg"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yana-bromberg"
source_hash: "094ce9dc23b7e4b438bf6eaba223824baa000c51c5cc5415304ced48026b532a"
sequence: 1004
generator: "outreach-garden: managed"
---

# 1004 · Quantifying uncertainty in protein representations across models and tasks

## At a glance

- **Professor:** Yana Bromberg
- **Institution:** Emory University
- **Paper:** [Quantifying uncertainty in protein representations across models and tasks](https://www.biorxiv.org/content/biorxiv/early/2025/05/06/2025.04.30.651545.full.pdf)
- **Authors:** R. Prabakaran, Yana Bromberg
- **Year:** 2026

## Paper overview

This paper introduces a method to measure how reliable protein language model embeddings are in representing biological proteins. The authors propose the Random Neighbor Score (RNS), which quantifies the uncertainty of protein embeddings by assessing how many of their nearest neighbors in the model's latent space are biologically irrelevant random sequences. This helps identify low-quality embeddings that do not capture meaningful biological information, improving the reliability of downstream protein prediction tasks.

### Why it matters

**Research problem:** Protein language models (pLMs) generate embeddings used for various biological tasks, but there is no standard way to quantify the confidence or uncertainty of these embeddings. Without such measures, low-quality embeddings can mislead downstream analyses and predictions.

**Why it matters:** Reliable protein embeddings are crucial for accurate predictions of protein structure, function, and variant effects. Uncertainty in embeddings can propagate errors, reducing the trustworthiness of computational biology tools and hindering biological insights.

**Key contributions:**

- Introduction of the Random Neighbor Score (RNS) as a novel, model-agnostic metric to quantify protein embedding uncertainty.
- Demonstration that embeddings with high RNS correlate with poor structural prediction quality and lower downstream task accuracy.
- Systematic evaluation of multiple protein language models and datasets to assess embedding quality and uncertainty.
- Evidence that RNS-based screening improves the performance of variant effect prediction tasks.
- Identification of a 'junkyard' subspace in latent space where low-quality embeddings cluster near random sequences.

## About the professor

**Yana Bromberg** — Principal Investigator - Professor of Bioinformatics, Department of Biology, Department of Computer Science, Emory University.

Research interests: Protein Function and Variant Effect Prediction, Artificial Intelligence

### Research links

- [Faculty/profile page](https://bromberglab.org)
- [Professor website](https://www.bromberglab.org/)
- [Resolved homepage](http://bromberglab.org)
- [Google Scholar](https://scholar.google.co.uk/citations?user=aL6XtIUAAAAJ)
- [ORCID](https://orcid.org/0000-0002-8351-0844)
- [ResearchGate](https://www.researchgate.net/lab/Yana-Bromberg-Lab-3)
- [LinkedIn](https://www.linkedin.com/in/yana-bromberg)
- [CV](https://bromberglab.org/files/yana-bromberg/cv.pdf)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Representation learning and embeddings
**The paper assumes:** machine learning representation learning, embedding spaces, and similarity metrics
**Already in this field?** Skip this entirely if you already understand machine learning embeddings, latent space representations, and nearest neighbor methods in representation learning.

Understanding representation learning and embeddings is crucial for grasping how protein language models generate and organize protein embeddings in latent space, which underpins the Random Neighbor Score method for quantifying embedding uncertainty. The rigorous course option offers a deep, structured dive into machine learning concepts including representation learning, while the fast track provides a concise, intuition-focused introduction to embeddings suitable for quickly building foundational knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229 Machine Learning | Spring 2026](https://www.youtube.com/playlist?list=PLaqpC4kq8Gpw) — Stanford Online · 17 videos · 20.6h across 17 episodes

**Watch only this:** Lectures 1-8 plus Lecture 12, about 9.5 hours — covering introduction, supervised learning, neural networks, and the dedicated representation learning lecture to build a solid foundation for embedding concepts.

*Why it unblocks this paper:* Stanford CS229 Machine Learning | Spring 2026 includes a dedicated lecture on representation learning (Lecture 12) and covers foundational machine learning concepts essential for understanding embedding spaces and nearest neighbor methods, directly relevant to the paper's methodology.

*If you want all of it:* 20.6 hours across 17 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Embeddings](https://www.youtube.com/playlist?list=PLf3SSsDroyrvzCajh-u1jBYksj3MlChEl) — Zaid Alibadi · 11 videos · 8.1h across 11 episodes

**Watch only this:** Episodes 'Transformer Embeddings - EXPLAINED!' and 'Lecture 2 | Word Vector Representations: word2vec', about 1.5 hours — these cover the basics of embeddings and vector representations relevant to understanding protein language model embeddings.

*Why it unblocks this paper:* The 'Embeddings' playlist by Zaid Alibadi offers clear, visual explanations of embeddings, vector semantics, and related concepts in a concise format, providing an accessible introduction to the core ideas behind embedding spaces and similarity measures used in the paper.

*If you want all of it:* 8.1 hours across 11 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on quantifying uncertainty in protein representations, start with foundational concepts in protein language model embeddings and uncertainty quantification in machine learning. Next, build knowledge on nearest neighbor methods in latent spaces and protein structure prediction evaluation metrics, which underpin the paper's methodology and validation. Finally, focus on the core concept of the Random Neighbor Score (RNS) method, including the authors' own talk or closely related advanced academic lectures to grasp the novel contributions and applications.

### Protein language models embeddings *(prerequisite)*
Understanding how protein sequences are represented as embeddings is foundational to grasping embedding uncertainty. This section covers the nature of protein language models, their training on protein sequences, and how embeddings capture biological information in latent space.

*How the paper uses it:* The paper evaluates embedding uncertainty across multiple protein language models, making foundational knowledge of embeddings essential.

▶ [Introduction to Protein Language Models for Synthetic Biology](https://www.youtube.com/watch?v=_j1OTgHkIxw) — Open Data Science and AI Conference · 48:21 · 1y ago

### Uncertainty quantification in machine learning *(prerequisite)*
Core machine learning principles for measuring confidence in model outputs underpin the RNS approach. This section introduces rigorous methods for uncertainty quantification, emphasizing their importance in trustworthy model predictions.

*How the paper uses it:* The Random Neighbor Score (RNS) is a novel uncertainty quantification metric applied to protein embeddings.

▶ [Physical Consistency and Uncertainty Quantification in Machine Learning](https://www.youtube.com/watch?v=8zpxfELic28) — LIDA - Leeds Institute for Data Analytics - · 52:35 · 10mo ago

### Nearest neighbor methods in latent spaces *(prerequisite)*
RNS relies on nearest neighbor analysis in embedding space to detect non-biological neighbors. This section explains the theory and application of k-nearest neighbors algorithms and latent space representations relevant to the paper's methodology.

*How the paper uses it:* RNS calculates the fraction of random sequence neighbors among the k nearest neighbors in latent space.

▶ [Lecture 3 "k-nearest neighbors" -Cornell CS4780 SP17](https://www.youtube.com/watch?v=oymtGlGdT-k) — Kilian Weinberger · 49:42 · 8y ago

### Protein structure prediction evaluation metrics *(prerequisite)*
Correlating embedding uncertainty with structural prediction quality requires understanding evaluation metrics like TM-score. This section covers the principles and metrics used to assess protein structure predictions.

*How the paper uses it:* The paper correlates RNS with TM scores and other structural prediction quality metrics.

▶ [Distinguished Speaker Seminar Series, part 1: The revolution in protein structure prediction](https://www.youtube.com/watch?v=1Njey5S1KhA) — MPI for Biology & Friedrich Miescher Laboratory · 47:36 · 5y ago

### Random Neighbor Score (RNS) method
This section focuses on the central novel metric introduced by the paper to quantify embedding uncertainty. It covers the conceptual basis, computational approach, and implications of the RNS method.

*How the paper uses it:* RNS is the core contribution of the paper, quantifying embedding uncertainty by measuring random sequence neighbors in latent space.

▶ [Stanford AA228/CS238 Decision Making Under Uncertainty I Online Planning and Policy Search](https://www.youtube.com/watch?v=iLMzsV0JOHk) — Stanford Online · 1:20:59 · 1y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Direct insight from authors on their novel Random Neighbor Score method provides the most authoritative and detailed explanation of the work. This section offers the opportunity to hear the authors' perspectives and contextualize their contributions.

*How the paper uses it:* Hearing from the authors themselves enriches understanding of the RNS framework and its biological significance.

▶ [Mohammed AlQuraishi: How, and What, Does AlphaFold Learn About Protein Structure?](https://www.youtube.com/watch?v=rTRPlybLgnA) — Simons Foundation · 58:08 · 4w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides you through the foundational concepts needed to understand how protein language model embeddings work and how their uncertainty can be quantified using the Random Neighbor Score (RNS) method introduced in the paper. We start with the basics of protein language model embeddings, then cover core machine learning ideas about uncertainty quantification and nearest neighbor methods in latent spaces, followed by understanding protein structure prediction evaluation metrics. Finally, we focus on the novel RNS metric itself, connecting all concepts to the paper's contributions.

### Protein language models embeddings *(paper-talk search result; attribution unverified)*
Protein language models (pLMs) convert protein sequences into numerical vectors called embeddings that capture biological information. Understanding how these embeddings represent proteins is essential to grasp how their quality and uncertainty can be assessed.

*How the paper uses it:* The paper evaluates the uncertainty of protein embeddings generated by various pLMs, making this foundational to the study.

▶ [Protein Embeddings Explained: Context, Vectors and Model Weights](https://www.youtube.com/watch?v=FpsJGh0hvTQ) — Bioinforbricklayer · 8:37 · 2w ago

### Uncertainty quantification in machine learning *(prerequisite)*
Uncertainty quantification methods help measure how confident a model is in its predictions or representations. These principles underpin the paper's approach to assessing the reliability of protein embeddings.

*How the paper uses it:* The Random Neighbor Score (RNS) is a novel uncertainty metric for protein embeddings, rooted in machine learning uncertainty concepts.

▶ [Machine Learning for Uncertainty Quantification: Trusting the Black Box](https://www.youtube.com/watch?v=Qgc1-6rbMBU) — IDA · 32:53 · 4y ago

### Nearest neighbor methods in latent spaces *(prerequisite)*
Nearest neighbor algorithms find the closest points in a high-dimensional space, which is critical for analyzing embedding similarity. Understanding this helps explain how RNS identifies biologically irrelevant neighbors.

*How the paper uses it:* RNS calculates the fraction of random sequence neighbors among the nearest neighbors of a protein embedding in latent space.

▶ [K Nearest Neighbour Easily Explained with Implementation](https://www.youtube.com/watch?v=wTF6vzS9fy4) — Krish Naik · 18:02 · 7y ago

### Protein structure prediction evaluation metrics *(prerequisite)*
Metrics like the TM-score quantify how well predicted protein structures match experimentally determined ones. These metrics are used in the paper to correlate embedding uncertainty with structural prediction quality.

*How the paper uses it:* The paper shows that higher RNS correlates with lower TM-scores, linking embedding uncertainty to structure prediction accuracy.

▶ [Protein Structure and Folding](https://www.youtube.com/watch?v=hok2hyED9go) — Amoeba Sisters · 7:46 · 8y ago

## Already in your library

- [Uncertainty Quantification & Machine Learning](https://www.youtube.com/watch?v=Q83PcGVsRWs) — also for: Accurate and Reliable Uncertainty Estimates for Deterministic Predictions: Extensions to Under and Overpredictions (Rebecca E. Morrison)
- [AlphaFold - The Most Useful Thing AI Has Ever Done](https://www.youtube.com/watch?v=P_fHJIYENdI) — also for: InterPro in 2022 (Cathy H. Wu)
- [6: Deep Learning for Natural Language – Embeddings](https://www.youtube.com/watch?v=LqFc0z-pQTg) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Mohammad Al Olaimat)
- [Lecture11 - Protein Language Models - MLCB24](https://www.youtube.com/watch?v=uPoFdCUqBWk) — also for: TCR-EML: Explainable Model Layers for TCR-pMHC Prediction (Ramgopal Mettu)
- [Protein embeddings and deep learning predict... - Maria Littmann - Function - Abstract - ISMB 2022](https://www.youtube.com/watch?v=ZLbIel0wr6g) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to Word Embedding | Static vs Dynamic Embedding | Deep Learning](https://www.youtube.com/watch?v=95eQCwQpS4k) — also for: Learning Who Disagrees: Demographic Importance Weighting for Modeling Annotator Distributions with DiADEM (Christopher Homan)
- [ESM-2 Protein Language Model Explained – Architecture & Training](https://www.youtube.com/watch?v=_9oTqDWGaFc) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [Protein Language Models (PLMs) - What They Are and How They Work](https://www.youtube.com/watch?v=hvIzAC1fbiQ) — also for: Modern resources for intrinsic disorder predictions: protein language models, deep learning, meta-servers, and databases (Lukasz A. Kurgan)
- [Arka Daw - Uncertainty Quantification with Physics-informed Machine Learning](https://www.youtube.com/watch?v=jXoJJExl-2Y) — also for: The future of robotic artificial intelligence in acute care surgery: an early proving ground and a final frontier for autonomous surgical robotics (Axel Krieger)
- [Mini Tutorial 6: An Introduction to Uncertainty Quantification for Modeling & Simulation](https://www.youtube.com/watch?v=7w-K_EF2j64) — also for: Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems (Carlos Varela)
- [Easy introduction to gaussian process regression (uncertainty models)](https://www.youtube.com/watch?v=iDzaoEwd0N0) — also for: Diffusion-Inspired Reconfiguration of Transformers for Uncertainty Calibration (Trong Nghia Hoang)
- [Introduction to Uncertainty Quantification for Deep Learning](https://www.youtube.com/watch?v=LUPPsyspBS0) — also for: The future of robotic artificial intelligence in acute care surgery: an early proving ground and a final frontier for autonomous surgical robotics (Axel Krieger)
- [Uncertainty Quantification (1): Enter Conformal Predictors](https://www.youtube.com/watch?v=xZbuFKWV5NA) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [8.2 David Thompson (Part 2): Nearest Neighbors and the Curse of Dimensionality](https://www.youtube.com/watch?v=dZrGXYty3qc) — also for: A Survey on Locality Sensitive Hashing Algorithms and their Applications (Parth Nagarkar)
- [Lec-7: kNN Classification with Real Life Example | Movie Imdb Example | Supervised Learning](https://www.youtube.com/watch?v=O1nWXTXcCwI) — also for: Deepfake Detection: A Systematic Literature Review (Andrew H. Sung)
- [Latent Space Visualisation: PCA, t-SNE, UMAP | Deep Learning Animated](https://www.youtube.com/watch?v=o_cAOa5fMhE) — also for: Deconstructing Denoising Diffusion Models for Self-Supervised Learning (He He)
- [Autoencoders | Deep Learning Animated](https://www.youtube.com/watch?v=hZ4a4NgM3u0) — also for: MedIL: Implicit Latent Spaces for Generating Heterogeneous Medical Images at Arbitrary Resolutions (P. Thomas Fletcher)
- [The Mystery of 'Latent Space' in Machine Learning Explained!](https://www.youtube.com/watch?v=mX2y3NWmaCQ) — also for: CoRLD: Contrastive Representation Learning Of Deformable Shapes In Images (Miaomiao Zhang)
- [Nazim Bouatta | Machine learning for protein structure prediction, Part 1: Algorithm space](https://www.youtube.com/watch?v=yqeUH4RsJp8) — also for: Traditional machine learning vs. deep learning from dynamic graph representations of proteins’ 3D folds in the task of protein structure classification (Tijana Milenkovic)
- [Deep Learning for Protein Engineering Primer (AlphaFold 2, ProteinMPNN, RFDiffusion)](https://www.youtube.com/watch?v=NN_uRCH7mrQ) — also for: Modern resources for intrinsic disorder predictions: protein language models, deep learning, meta-servers, and databases (Lukasz A. Kurgan)
- [MIT 6.S191: Evidential Deep Learning and Uncertainty](https://www.youtube.com/watch?v=toTcf7tZK8c) — also for: End-to-end deep attention-based multitask pipeline for predicting uncertainty-quantified peptide properties from mass spectrometry data (Fahad Saeed)
- [Vector Databases simply explained! (Embeddings & Indexes)](https://www.youtube.com/watch?v=dN0lsF2cvm4) — also for: CactusDB: Unlock Co-Optimization Opportunities for SQL Queries and AI/ML Model Inferences (Jia Zou)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the Random Neighbor Score (RNS) method introduced in the paper. Starting with a basic reproduction of the RNS calculation on a small protein embedding set, you then implement and evaluate RNS on a public protein language model embedding dataset, and finally extend RNS to residue-level embeddings to address a key limitation noted by the authors. Each project deepens your grasp of protein embedding uncertainty quantification and its impact on downstream biological tasks.

### Beginner — Compute Random Neighbor Score on a Small Protein Embedding Set
*Effort: a weekend, ~8 hours*

You build a script that loads precomputed protein embeddings from a small subset of proteins and a set of random protein sequences, computes nearest neighbors in embedding space, and calculates the Random Neighbor Score (RNS) for each protein. You visualize the distribution of RNS scores and reproduce a simple correlation plot between RNS and a proxy structural quality metric.

**Why it shows you understood the paper:** This project demonstrates you understand the core concept of RNS as a fraction of random neighbors in latent space and its biological relevance by reproducing a key figure from the paper on a manageable scale.

**Grounded in:** Introduction of the Random Neighbor Score (RNS) as a novel, model-agnostic metric to quantify protein embedding uncertainty; correlation of RNS with structural prediction quality.

**Tech stack:** Python 3.11, NumPy, scikit-learn, matplotlib, Jupyter Notebook

**Data:** Use a small subset of protein embeddings generated by the ESM-2 model from the third_party_artifacts (https://github.com/facebookresearch/esm) and a small set of random sequences from Astral40R as described in the paper.

**Build it:**

1. Install required Python packages: numpy, scikit-learn, matplotlib.
2. Download or generate embeddings for a small set (~100) of proteins using ESM-2 via the Facebook ESM repository.
3. Generate or obtain embeddings for a set of random protein sequences (Astral40R) using the same model.
4. Implement a nearest neighbor search (e.g., using scikit-learn's NearestNeighbors) combining protein and random embeddings.
5. Calculate RNS for each protein as the fraction of its k nearest neighbors that are random sequences.
6. Plot the distribution of RNS scores and correlate with a proxy structural quality metric (e.g., TM score if available or simulated).

**Verified links from the paper:**

- <https://github.com/facebookresearch/esm> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Jupyter Notebook with code to compute RNS on a small protein set, visualization of RNS distribution, and a correlation plot demonstrating the relationship between RNS and structural quality.

**Stretch goal:** Add interactive visualization to explore individual protein embeddings and their neighbors in 2D using dimensionality reduction (e.g., t-SNE or UMAP).

### Intermediate — Reimplement Random Neighbor Score and Evaluate on ProtT5 Embeddings
*Effort: 1-3 weekends*

You reimplement the Random Neighbor Score (RNS) method from the paper, applying it to a larger dataset of protein embeddings generated by the ProtT5 model. You compare RNS scores to pseudo-perplexity and downstream task accuracy metrics, reproducing the paper's key findings about RNS correlation with embedding quality and task performance.

**Why it shows you understood the paper:** This project shows you can implement the core RNS method at scale, understand its model-agnostic nature, and evaluate its biological relevance by comparing to multiple metrics, demonstrating comprehension of the paper's systematic evaluation.

**Grounded in:** Systematic evaluation of multiple protein language models and datasets to assess embedding quality and uncertainty; RNS correlation with pseudo-perplexity and downstream task accuracy.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, pandas, matplotlib

**Data:** Use ProtT5 embeddings available from the Rostlab Hugging Face repository (https://huggingface.co/Rostlab/prot_t5_xI_uniref50) and random sequence embeddings generated similarly. Downstream task labels can be simulated or substituted with publicly available variant effect datasets.

**Build it:**

1. Set up environment with PyTorch and other dependencies.
2. Download or generate ProtT5 embeddings for a representative protein dataset.
3. Generate embeddings for random sequences using ProtT5.
4. Implement RNS calculation as fraction of random neighbors among k nearest neighbors.
5. Compute pseudo-perplexity scores for the same proteins if feasible or use proxy metrics.
6. Collect or simulate downstream task labels (e.g., variant effect classification).
7. Analyze correlations between RNS, pseudo-perplexity, and downstream task accuracy.
8. Visualize results with scatter plots and summary statistics.

**Verified links from the paper:**

- <https://huggingface.co/Rostlab/prot_t5_xI_uniref50> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/sacdallago/bio_embeddings> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python package or script that computes RNS on ProtT5 embeddings, compares it to baseline metrics, and reports correlations and visualizations in a reproducible manner.

**Stretch goal:** Add a filtering step using RNS to select high-confidence embeddings and demonstrate improved downstream variant effect prediction accuracy.

### Advanced — Extend RNS to Residue-Level Embeddings for Long Proteins
*Effort: a few weeks*

You develop an extension of the Random Neighbor Score method to quantify uncertainty at the residue-level embedding granularity, addressing the paper's limitation about protein-level averaging losing fine-grained information. You apply this to long or multi-domain proteins, analyze uncertainty patterns along sequences, and propose adaptations for proteins exceeding current model input length limits.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper, demonstrating deep understanding of RNS, protein embedding representations, and challenges with long proteins. It also shows ability to innovate beyond the original method.

**Grounded in:** Extension of RNS to residue-level embeddings for more detailed uncertainty quantification; limitation about protein-level averaging losing residue-level information; handling long proteins >1022 residues.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, matplotlib, Jupyter Notebook

**Data:** Use residue-level embeddings generated by ProtT5 or ESM-2 models for long proteins from UniProt or public protein databases. Random sequence residue embeddings can be generated by shuffling residues or using Astral40R random sequences.

**Build it:**

1. Set up environment with PyTorch and dependencies.
2. Generate or download residue-level embeddings for a set of long or multi-domain proteins using ProtT5 or ESM-2.
3. Generate residue-level embeddings for random sequences similarly.
4. Implement a residue-level RNS calculation by computing the fraction of random neighbors among k nearest neighbors for each residue embedding.
5. Aggregate residue-level RNS scores to visualize uncertainty profiles along protein sequences.
6. Analyze patterns of uncertainty in relation to known protein domains or structural features.
7. Propose and implement strategies to handle proteins longer than model input limits, such as chunking or sliding windows.
8. Document findings and limitations.

**Verified links from the paper:**

- <https://huggingface.co/Rostlab/prot_t5_xI_uniref50> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/facebookresearch/esm> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive Jupyter Notebook or Python package that computes residue-level RNS, visualizes uncertainty profiles for long proteins, and discusses methodological adaptations for long sequence embeddings.

**Stretch goal:** Integrate residue-level RNS profiles into downstream variant effect prediction models to assess improvement in prediction accuracy.

_Access to pre-trained protein language models and embeddings generation tools from the cited repositories is required; downstream task datasets may need to be simulated or substituted due to lack of public release._
