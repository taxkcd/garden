---
title: "604 · Agentic RAG-Driven Multi-Omics Analysis for PI3K/AKT Pathway Deregulation in Precision Medicine — Dong Xu"
date: 2026-09-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dong-xu"
source_hash: "e0cad97571c82af2c2c8f912dbb7e78add8bee2cb1a100f7f4b7f96e735b64b8"
sequence: 604
generator: "outreach-garden: managed"
---

# 604 · Agentic RAG-Driven Multi-Omics Analysis for PI3K/AKT Pathway Deregulation in Precision Medicine

## At a glance

- **Professor:** Dong Xu
- **Institution:** University of Missouri
- **Paper:** [Agentic RAG-Driven Multi-Omics Analysis for PI3K/AKT Pathway Deregulation in Precision Medicine](https://doi.org/10.3390/a18090545)
- **Authors:** Micheal Olaolu Arowolo, Sulaiman Olaniyi Abdulsalam, Rafiu Mope Isiaka, Kingsley Theophilus Igulu, Bukola Fatimah Balogun, Mihail Popescu, Dong Xu
- **Year:** 2025

## Paper overview

This paper presents ARMOA, an AI-driven system that integrates multiple types of biological data to analyze the PI3K/AKT signaling pathway, which is important in diseases like cancer and diabetes. ARMOA uses advanced AI techniques to identify new biomarkers and drug candidates, improving personalized treatment predictions with high accuracy.

### Why it matters

**Research problem:** Existing methods for analyzing the PI3K/AKT pathway often fail to provide real-time, pathway-specific insights due to challenges like patient heterogeneity, pharmaceutical resistance, fragmented multi-omics data, and lack of autonomous hypothesis generation.

**Why it matters:** The PI3K/AKT pathway is crucial in regulating cell metabolism, growth, and survival and is frequently dysregulated in diseases such as cancer and metabolic disorders. Effective precision medicine targeting this pathway requires integrative, dynamic, and interpretable analysis methods to improve therapy outcomes and drug repurposing.

**Key contributions:**

- Development of an autonomous agentic RAG system that continuously updates and synthesizes multi-source biological data for pathway analysis.
- Integration of multi-omics data using graph neural networks to model complex interactions within the PI3K/AKT pathway.
- Implementation of explainable AI techniques (e.g., SHAP values, GNN attention) to enhance interpretability of predictions.
- Demonstration of ARMOA’s high accuracy (92%) in predicting pathway dysregulation and drug repurposing candidates.
- Validation of predictions through in vitro, in vivo, and clinical data including case studies in breast cancer and type 2 diabetes.

## About the professor

**Dong Xu** — Curators' Distinguished Professor of Electrical Engineering and Computer Science and Paul K. and Dianne Shumaker Professor, College of Engineering, University of Missouri.

Research interests: computational biology and bioinformatics, including single-cell data analysis; protein structure prediction and modeling; protein post-translational modifications; protein localization prediction; computational systems biology; biological information systems; and bioinformatics applications in human, microbes and plants.

### Research links

- [Faculty/profile page](https://precisionhealth.missouri.edu/people/dong-xu-phd)
- [Identity evidence](https://muidsi.missouri.edu/person/dong-xu)
- [Professor website](https://engineering.missouri.edu/faculty/dong-xu/)
- [Lab website](https://digbio.missouri.edu/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=xJeTtCoAAAAJ)
- [ResearchGate](https://www.researchgate.net/profile/Dong-Xu-45)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, graph representation learning, message passing neural networks
**Already in this field?** Skip this entirely if you already understand graph neural networks and their application to biological network data.

This background focuses on Graph Neural Networks (GNNs), which are central to the paper's method for integrating multi-omics data and modeling complex biological interactions in the PI3K/AKT pathway. The rigorous course offers a deep, structured university-level understanding of GNNs, while the fast track provides a concise, intuition-driven introduction suitable for quickly grasping the core concepts. Choose the course for comprehensive mastery or the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 6.1 - Introduction to Graph Neural Networks (approx. 30 min), 7.1 - A general Perspective on GNNs (approx. 30 min), 7.2 - A Single Layer of a GNN (approx. 30 min), 7.3 - Stacking layers of a GNN (approx. 30 min), and 8.2 - Training Graph Neural Networks (approx. 30 min); about 2.5 hours total. This subset covers GNN fundamentals, architecture, and training essential for the paper.

*Why it unblocks this paper:* Stanford CS224W by Jure Leskovec is a top-tier university course that thoroughly covers graph representations, node embeddings, message passing, and graph neural networks, directly relevant to understanding the GNN modeling and explainability techniques used in the paper.

*If you want all of it:* 24.1 hours across 47 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks (Hands-on)](https://www.youtube.com/playlist?list=PLB1nTQo4_y6sfLtCrGAKG_l7xOHjtYqBk) — LLMs Explained - Aggregate Intellect - AI.SCIENCE · 6 videos · 0.6h across 6 episodes

**Watch only this:** All 6 episodes, each about 5 minutes, totaling approximately 0.6 hours. This covers the essentials of GNNs with practical insights in a compact format.

*Why it unblocks this paper:* The 'Graph Neural Networks (Hands-on)' series by LLMs Explained offers a concise, visual, and intuitive introduction to GNN concepts including graph definitions, simple graph convolution, graph attention networks, and node embedding methods, ideal for quickly grasping the core ideas used in the paper.

*If you want all of it:* 0.6 hours across 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the ARMOA paper, start with foundational knowledge on multi-omics data integration and graph neural networks in bioinformatics, as these underpin the modeling of complex biological interactions. Next, study explainable AI techniques critical for interpreting ARMOA's predictions, followed by the biological context of the PI3K/AKT signaling pathway relevant to the paper's precision medicine applications. Finally, focus on the core concept of agentic Retrieval-Augmented Generation (RAG) systems, including the authors' own talks on agentic RAG, to grasp the autonomous data retrieval and synthesis framework central to ARMOA.

### Multi-Omics Data Integration *(prerequisite)*
Multi-omics data integration is essential for combining diverse biological data types such as genomic, transcriptomic, proteomic, and metabolomic datasets. Understanding current methods and challenges in multi-omics integration provides the biological and computational foundation for ARMOA's approach to synthesizing heterogeneous data.

*How the paper uses it:* ARMOA integrates multiple omics data types to analyze the PI3K/AKT pathway comprehensively.

▶ [Ron Shamir | Methods for Disease Analysis Using Multiomic Data | CGSI 2023](https://www.youtube.com/watch?v=7lgZk---t8M) — Computational Genomics Summer Institute CGSI · 37:57 · 2 years ago

### Graph Neural Networks in Bioinformatics *(prerequisite)*
Graph neural networks (GNNs) enable modeling of complex interactions in biological networks by representing entities as nodes and their relationships as edges. Advanced lectures on GNNs in computational biology reveal how these models capture pathway dynamics and interactions, directly relevant to ARMOA's multi-omics integration.

*How the paper uses it:* ARMOA uses GNNs to model complex interactions within the PI3K/AKT pathway from multi-omics data.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 18 - GNNs in Computational Biology](https://www.youtube.com/watch?v=_hy9AgZXhbQ) — Stanford Online · 1:21:19 · 5 years ago

### Explainable AI Techniques *(prerequisite)*
Explainable AI methods such as SHAP values and attention mechanisms are critical for interpreting machine learning predictions, especially in biomedical contexts where understanding feature importance is vital. Detailed academic talks on explainable AI provide insights into these techniques' theoretical foundations and practical implementations.

*How the paper uses it:* ARMOA incorporates SHAP and GNN attention to enhance interpretability of its biomarker and drug candidate predictions.

▶ [Explainable AI for Science and Medicine](https://www.youtube.com/watch?v=B-c8tIgchu0) — Microsoft Research · 1:15:29 · 7 years ago

### PI3K/AKT Signaling Pathway in Disease *(prerequisite)*
The PI3K/AKT pathway regulates critical cellular processes and is frequently dysregulated in diseases like cancer and diabetes. Seminal lectures by leading researchers provide in-depth biological context necessary to appreciate ARMOA's focus on this pathway for precision medicine.

*How the paper uses it:* The paper targets the PI3K/AKT pathway's deregulation as a key mechanism in disease for precision therapeutic strategies.

▶ [Plenary Lecture 1: Lewis Cantley](https://www.youtube.com/watch?v=UM3HSPcOWQY) — European Society of Endocrinology · 32:43 · 11 years ago

### ARMOA paper talk *(the paper's own talk)*
The authors' own talks on agentic RAG systems offer the most direct and detailed explanation of ARMOA's architecture, methodology, and innovations. These presentations cover the integration of autonomous agents with RAG, multi-omics data synthesis, and real-time hypothesis generation, providing critical insights into the paper's core contributions.

*How the paper uses it:* These talks present the ARMOA framework and its agentic RAG-driven approach to multi-omics pathway analysis.

▶ [Build an Agentic RAG system using Langchain, Ollama and Milvus by Stephen Batifol](https://www.youtube.com/watch?v=BNeegP_3IKI) — Devoxx · 30:47 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces the foundational biological and AI concepts needed to understand the ARMOA system for multi-omics analysis of the PI3K/AKT pathway. We start with the biological context of the PI3K/AKT signaling pathway and its role in disease, then cover multi-omics data integration, followed by graph neural networks for modeling complex biological interactions. Next, we explore retrieval-augmented generation (RAG) AI techniques that enable ARMOA's autonomous data retrieval and synthesis, and explainable AI methods for interpreting its predictions. Finally, we focus on the core concept of agentic RAG systems that power ARMOA's dynamic and autonomous analysis.

### PI3K/AKT Signaling Pathway in Disease *(prerequisite)*
Learn the biological basics of the PI3K/AKT signaling pathway, which regulates cell growth, metabolism, and survival, and is often dysregulated in diseases like cancer and diabetes. Understanding this pathway provides the essential biomedical context for why ARMOA focuses on it for precision medicine.

*How the paper uses it:* The paper analyzes the PI3K/AKT pathway because of its critical role in disease mechanisms and therapeutic targeting.

▶ [The PI3K/AKT signalling pathway](https://www.youtube.com/watch?v=ewgLd9N3s-4) — Onkoview · 4:44 · 16 years ago

### Multi-Omics Data Integration *(prerequisite)*
Multi-omics integration combines diverse biological data types such as genomics, transcriptomics, proteomics, and metabolomics to provide a comprehensive view of biological systems. This is fundamental to ARMOA’s approach of synthesizing heterogeneous data for pathway analysis.

*How the paper uses it:* ARMOA integrates multiple omics data sources to model complex interactions in the PI3K/AKT pathway.

▶ [Intro to Multiomics](https://www.youtube.com/watch?v=o0KckPa4oQw) — MHSc Medical Genomics · 15:11 · 1 year ago

### Graph Neural Networks in Bioinformatics *(prerequisite)*
Graph neural networks (GNNs) are specialized AI models that learn from graph-structured data, making them ideal for representing biological networks like protein interactions. GNNs enable ARMOA to model the complex relationships within multi-omics data effectively.

*How the paper uses it:* The paper uses GNNs to represent genes, proteins, and metabolites as nodes and their interactions as edges in the PI3K/AKT pathway.

▶ [Stanford CS224W: Machine Learning with Graphs | 2021 | Lecture 18 - GNNs in Computational Biology](https://www.youtube.com/watch?v=_hy9AgZXhbQ) — Stanford Online · 1:21:19 · 5 years ago

### Retrieval-Augmented Generation AI
Retrieval-Augmented Generation (RAG) enhances large language models by enabling them to retrieve relevant external information dynamically before generating responses. This technique allows ARMOA to autonomously gather and synthesize up-to-date biological knowledge.

*How the paper uses it:* ARMOA’s autonomous agentic system uses RAG to continuously update and synthesize multi-source biological data.

▶ [Retrieval-augmented generation (RAG), Clearly Explained (Why it Matters)](https://www.youtube.com/watch?v=VioF7v8Mikg) — Builders Central · 10:46 · 1 year ago

### Explainable AI Techniques *(prerequisite)*
Explainable AI methods like SHAP values help interpret complex model predictions by attributing importance to input features. ARMOA employs these techniques to make its biomarker and drug candidate predictions transparent and trustworthy.

*How the paper uses it:* The paper incorporates SHAP and GNN attention mechanisms to enhance interpretability of ARMOA’s predictions.

▶ [Explainable AI explained! | #4 SHAP](https://www.youtube.com/watch?v=9haIOplEIGM) — DeepFindr · 15:50 · 5 years ago

### ARMOA paper talk *(the paper's own talk)*
This video specifically explains the concept of agentic RAG systems, which combine retrieval-augmented generation with autonomous AI agents capable of dynamic decision-making and workflow adaptation. Understanding agentic RAG is key to grasping how ARMOA operates in real time.

*How the paper uses it:* The core innovation of ARMOA is its autonomous agentic RAG system that drives multi-omics analysis and hypothesis generation.

▶ [What Is Agentic RAG?](https://www.youtube.com/watch?v=HodCjnGv8Ag) — Krish Naik · 14:50 · 1 year ago

## Already in your library

- [Stanford CS25: V3 I Retrieval Augmented Language Models](https://www.youtube.com/watch?v=mE7IDf2SmJg) — also for: Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding (Tinoosh Mohsenin)
- [9: Generative AI – Large Language Models (LLMs) and ...](https://www.youtube.com/watch?v=KGDe1QvfKJ8) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Lecture 12: RAG Explained - Retrieval Augmented Generation ...](https://www.youtube.com/watch?v=D2K9bStG-cU) — also for: LabSafety Bench: Benchmarking LLMs on Safety Issues in Scientific Labs (Xiangliang Zhang)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [A Helping Hand for LLMs (Retrieval Augmented Generation) - Computerphile](https://www.youtube.com/watch?v=of4UDMvi2Kw) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [RAG Explained For Beginners](https://www.youtube.com/watch?v=_HQ2H_0Ayy0) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [Introduction to RAG (Retrieval Augmented Generation) | Deep Learning](https://www.youtube.com/watch?v=cXcgyzuljyY) — also for: InferScale: GPU-Native KV Injection for Personalized LLM Serving (Prashant Pandey)
- [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [The What and Why of Multi-Omics Integration | 2023 EMSL ...](https://www.youtube.com/watch?v=V-Rbcso4Aag) — also for: Bibliometric review of ATAC-Seq and its application in gene expression (Michael Gribskov)
- [Lecture 9 - Understanding SHAP | Explainable AI (XAI ...](https://www.youtube.com/watch?v=IIgTulcEUFw) — also for: Applying Artificial Intelligence and machine learning in precision nutrition (Haym Hirsh)
- [Lecture 4 - Explainable AI (XAI) methods | SHAP, LIME, Partial ...](https://www.youtube.com/watch?v=RDA09a8ywic) — also for: A Model-Agnostic Approach for Explaining the Predictions on Clustered Data (Jianhua Chen)
- [Shapley Additive Explanations (SHAP)](https://www.youtube.com/watch?v=VB9uV-x0gtg) — also for: CIMLA: Interpretable AI for inference of differential causal networks (Saurabh Sinha)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the ARMOA system for multi-omics analysis of the PI3K/AKT pathway. The beginner project focuses on implementing explainable AI techniques on synthetic multi-omics data to interpret pathway biomarkers. The intermediate project involves reimplementing the core graph neural network integration method on a public multi-omics dataset to predict pathway dysregulation and compare against a baseline. The advanced project extends ARMOA by integrating single-cell omics data, addressing a stated limitation and exploring real-world clinical data integration.

### Beginner — Explainable AI for PI3K/AKT Pathway Biomarker Interpretation
*Effort: a weekend, ~8 hours*

You build a small pipeline that loads a synthetic multi-omics dataset representing genes and proteins related to the PI3K/AKT pathway, trains a simple classifier (e.g., random forest or gradient boosting) to predict pathway dysregulation, and applies SHAP values to interpret feature importance. You visualize the top biomarkers and explain their contributions to the model's predictions.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's use of explainable AI techniques (SHAP values) to interpret multi-omics data and identify key biomarkers, a core contribution of ARMOA.

**Grounded in:** Implementation of explainable AI techniques (e.g., SHAP values, GNN attention) to enhance interpretability of predictions.

**Tech stack:** Python 3.11, scikit-learn, shap, matplotlib, pandas, numpy, Jupyter Notebook

**Data:** Synthetic multi-omics dataset simulating gene/protein expression related to the PI3K/AKT pathway, created by sampling from normal distributions with labeled pathway dysregulation status.

**Build it:**

1. Generate or simulate a small synthetic multi-omics dataset with features representing genes/proteins involved in the PI3K/AKT pathway and binary labels for pathway dysregulation.
2. Train a classifier such as a random forest or gradient boosting model to predict pathway dysregulation from the multi-omics features.
3. Use the SHAP library to compute SHAP values for the trained model to interpret feature importance.
4. Visualize the top contributing biomarkers using summary plots and bar charts.
5. Write a README explaining the dataset, model, and interpretation results linking back to the paper's explainable AI contribution.

**Ships as:** A GitHub repo with a Jupyter notebook demonstrating training, SHAP interpretation, and visualization of key biomarkers, plus a README linking the work to ARMOA's explainability approach.

**Stretch goal:** Add GNN attention visualization by implementing a simple graph neural network on the synthetic data and extracting attention weights.

### Intermediate — Reimplementation of ARMOA's GNN-Based Multi-Omics Integration
*Effort: 1-3 weekends*

You reimplement the core ARMOA method of integrating multi-omics data using graph neural networks to predict PI3K/AKT pathway dysregulation. Using a publicly available multi-omics cancer dataset (e.g., TCGA breast cancer data as a substitute), you construct a graph representing genes and their interactions, train a GNN classifier, and compare performance against a baseline ML model.

**Why it shows you understood the paper:** This project proves you can reproduce the paper's central technical approach—GNN-based multi-omics integration—and evaluate its effectiveness, reflecting deep comprehension of ARMOA's core methodology and results.

**Grounded in:** Integration of multi-omics data using graph neural networks to model complex interactions within the PI3K/AKT pathway.

**Tech stack:** Python 3.11, PyTorch, PyTorch Geometric, scikit-learn, pandas, numpy, matplotlib

**Data:** Public multi-omics dataset from TCGA breast cancer cohort (gene expression, mutation, proteomics) used as a proxy for ARMOA's synthetic data.

**Build it:**

1. Download and preprocess TCGA breast cancer multi-omics data focusing on genes involved in the PI3K/AKT pathway.
2. Construct a graph where nodes represent genes/proteins and edges represent known interactions (e.g., from STRING database or literature).
3. Implement a graph neural network classifier using PyTorch Geometric to predict pathway dysregulation status.
4. Train a baseline model (e.g., random forest) on concatenated multi-omics features for comparison.
5. Evaluate and compare classification accuracy, confusion matrix, and ROC-AUC of GNN vs baseline.
6. Document the implementation, results, and relate findings to ARMOA's reported 92% accuracy and balanced classification.

**Ships as:** A GitHub repo with code to preprocess data, build and train GNN and baseline models, evaluation scripts, and a detailed README linking to ARMOA's methodology and results.

**Stretch goal:** Incorporate explainability by extracting GNN attention weights or applying SHAP to the baseline model.

### Advanced — Extending ARMOA with Single-Cell Omics Integration for PI3K/AKT Analysis
*Effort: a few weeks*

You extend the ARMOA framework by integrating single-cell RNA-seq data related to the PI3K/AKT pathway, addressing a stated limitation of the paper. You develop a pipeline that preprocesses single-cell data, constructs cell-gene graphs, applies graph neural networks for pathway activity prediction, and explores heterogeneity at single-cell resolution. You also discuss challenges of real-world clinical data variability and annotation scarcity.

**Why it shows you understood the paper:** This project tackles a future direction from the paper, demonstrating your ability to apply ARMOA's concepts to new data modalities and real-world challenges, positioning you for research-level contributions and discussions with the professor.

**Grounded in:** Current framework does not yet incorporate single-cell omics, epigenomic data, wearable biosensors, or electronic health records, which are planned for future integration.

**Tech stack:** Python 3.11, Scanpy, PyTorch, PyTorch Geometric, pandas, numpy, matplotlib, Jupyter Notebook

**Data:** Public single-cell RNA-seq dataset from a cancer or metabolic disease study involving PI3K/AKT pathway genes (e.g., from GEO or Single Cell Portal).

**Build it:**

1. Identify and download a public single-cell RNA-seq dataset relevant to PI3K/AKT pathway activity.
2. Preprocess the single-cell data using Scanpy (normalization, filtering, dimensionality reduction).
3. Construct a graph representation linking cells and genes, encoding pathway interactions.
4. Implement a graph neural network to predict pathway dysregulation or cell states related to PI3K/AKT activity.
5. Analyze heterogeneity and visualize key biomarkers at single-cell resolution.
6. Discuss challenges encountered with data heterogeneity, annotation scarcity, and potential solutions such as federated learning or data harmonization.
7. Write a comprehensive README documenting the extension, methods, results, and connection to ARMOA's future directions.

**Ships as:** A GitHub repo with a full pipeline for single-cell data integration and GNN modeling, analysis notebooks, visualizations, and a detailed README framing the work as an extension of ARMOA.

**Stretch goal:** Integrate electronic health record metadata or clinical annotations to enhance prediction and interpretability.

_No ARMOA code or datasets are publicly released; synthetic or public multi-omics datasets must be used as substitutes, and careful design or selection is required to reflect the paper's biological context._
