---
title: "780 · CancerKG.ORG–A Web-scale, Interactive, Verifiable Knowledge Graph-LLM Hybrid for Assisting with Optimal Cancer Treatment and Care — Michael N. Gubanov"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-michael-n-gubanov"
source_hash: "4ec5f107a9567faea532d758067c155b07452f601bfa100daadfd0623614fb4c"
sequence: 780
generator: "outreach-garden: managed"
---

# 780 · CancerKG.ORG–A Web-scale, Interactive, Verifiable Knowledge Graph-LLM Hybrid for Assisting with Optimal Cancer Treatment and Care

## At a glance

- **Professor:** Michael N. Gubanov
- **Institution:** Florida State University
- **Paper:** [CancerKG.ORG–A Web-scale, Interactive, Verifiable Knowledge Graph-LLM Hybrid for Assisting with Optimal Cancer Treatment and Care](https://arxiv.org/pdf/2501.00223)
- **Authors:** Michael Gubanov, Anna Pyayt, Aleksandra Karolak
- **Year:** 2024

## Paper overview

This paper presents CancerKG, a hybrid system combining a Knowledge Graph (KG) and Large Language Models (LLMs) to provide up-to-date, verifiable, and interactive access to the latest peer-reviewed medical knowledge on colorectal cancer. It integrates multiple advanced user interfaces including an interactive KG, structural search engines, conversational natural language interface, and 3D meta-profiles to assist medical professionals and patients in accessing personalized cancer treatment information efficiently.

### Why it matters

**Research problem:** Rapidly growing and constantly updating medical knowledge on colorectal cancer makes it difficult for patients, families, and medical professionals to quickly access and apply the latest best practices. Existing solutions like standalone LLMs or manually curated knowledge graphs are limited by hallucinations, outdated data, or scalability issues.

**Why it matters:** Timely and accurate access to the latest medical knowledge is critical for optimal cancer treatment and care. Current search methods are slow and inefficient, and outdated or manually curated resources fail to keep pace with the rapid expansion of medical literature, potentially impacting patient outcomes.

**Key contributions:**

- Development of the first web-scale hybrid KG-LLM system for colorectal cancer medical knowledge.
- Unsupervised automatic ingestion and organization of the latest peer-reviewed medical publications into a scalable KG.
- Integration of multiple advanced user interfaces tailored to different data modalities (interactive KG, structural table search, conversational interface, 3D meta-profiles).
- Use of RAG to mitigate LLM hallucinations and ensure verifiable, up-to-date information.
- Novel methods for structural search over complex medical tables with hierarchical and vertical metadata.

## About the professor

**Michael N. Gubanov** — Associate Professor, Computer Science Department, Florida State University.

Research interests: Data Management and LLMs with applications to Medicine

### Research links

- [Faculty/profile page](http://www.mgubanov.com)
- [Lab website](http://mgubanov.com/biglab.php)
- [Google Scholar](https://scholar.google.com/citations?user=4-2U_I8AAAAJ&hl=en)
- [ResearchGate](https://www.researchgate.net/profile/Michael_Gubanov?cp=shp)
- [DBLP](https://dblp.org/pid/10/5842.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Knowledge Graphs and Retrieval Augmented Generation
**The paper assumes:** knowledge graphs, retrieval augmented generation, large language model integration
**Already in this field?** Skip this entirely if you already understand how knowledge graphs are constructed and used with retrieval-augmented generation methods in AI systems.

This background focuses on understanding Knowledge Graphs and Retrieval Augmented Generation (RAG), which are central to the CancerKG system's hybrid architecture combining verifiable knowledge graphs with large language models. The rigorous course offers a deep, structured university-level exploration of Transformers and LLMs foundational to RAG, while the fast track provides a concise, practical introduction to RAG concepts and improvements, ideal for quickly grasping the core ideas without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-6 (Transformer basics, Transformer-based models, LLMs, LLM training, tuning, and reasoning), about 10.8 hours — these provide the essential foundation on Transformer architecture and LLM capabilities crucial for grasping RAG hybrid systems.

*Why it unblocks this paper:* This Stanford CME295 course on Transformers and Large Language Models covers the foundational architectures and techniques underlying RAG systems, including model training, tuning, reasoning, and evaluation, directly relevant to understanding the LLM components and their integration with Knowledge Graphs in CancerKG.

*If you want all of it:* All 9 lectures, about 16.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Retrieval Augmented Generations (RAG)](https://www.youtube.com/playlist?list=PLsAqq9lZFOtWwOR4NFlzBOyO1P0JHzQ-J) — TechViz - The Data Science Guy · 9 videos · 1.6h across 9 episodes

**Watch only this:** Episodes 1-3 (Understanding RAG basics, improving RAG with Parent Context Retriever, and multi-stage document reranking), about 30 minutes — these episodes cover the core RAG concepts and practical improvements relevant to mitigating hallucinations and enhancing retrieval.

*Why it unblocks this paper:* This concise playlist by TechViz - The Data Science Guy focuses specifically on Retrieval Augmented Generation, covering basics, challenges, improvements, and applications including integration with Knowledge Graphs, providing a focused and accessible introduction to the key RAG concepts used in CancerKG.

*If you want all of it:* All 9 episodes, about 1.6 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the CancerKG paper, start with foundational knowledge on Knowledge Graph construction, Large Language Models (LLMs) in medicine, and deep learning techniques for table classification, as these underpin the system's architecture and data processing. Next, study Retrieval Augmented Generation (RAG), the core hybrid method combining LLMs and the Knowledge Graph to ensure verifiable and up-to-date information. Finally, conclude with the authors' own talk or related advanced presentations to grasp the specific innovations and deployment of CancerKG.

### Knowledge Graph construction *(prerequisite)*
Understanding how knowledge graphs are built and maintained is essential to grasp how CancerKG organizes and continuously updates vast medical knowledge. The selected talk from The Knowledge Graph Conference provides an advanced, enterprise-level perspective on building scalable, trustworthy knowledge graphs, which aligns with CancerKG's approach.

*How the paper uses it:* CancerKG relies on a scalable, automatically updated knowledge graph to store and organize medical publications.

▶ [What It Truly Takes to Build a Knowledge Graph in an Enterprise](https://www.youtube.com/watch?v=0qI3zxe-MHE) — The Knowledge Graph Conference · 30:25 · 2mo ago

### Large Language Models in medicine *(prerequisite)*
This section covers the role and capabilities of LLMs specifically in healthcare contexts, crucial for understanding how CancerKG integrates multiple LLMs for medical knowledge extraction and query answering. The Stanford Online lecture offers a rigorous, research-focused introduction suitable for advanced readers.

*How the paper uses it:* CancerKG integrates multiple LLMs to extract and generate cancer treatment knowledge in a verifiable manner.

▶ [Generative AI for Healthcare (Part 1): Demystifying Large Language Models](https://www.youtube.com/watch?v=eLAq8yzvu8Q) — Stanford Online · 58:35 · 1y ago

### Deep learning for table classification *(prerequisite)*
Deep learning methods for classifying complex tabular data are key to CancerKG's ability to process heterogeneous medical tables with hierarchical metadata. The talk by Bojan Tunguz at the Optimized AI Conference provides a detailed and advanced overview of machine learning techniques for tabular data, relevant to CancerKG's deep learning GRU models.

*How the paper uses it:* CancerKG uses deep learning GRU models to classify and cluster medical tables with high accuracy.

▶ [The Past, Present and the Future of Machine Learning for Tabular Data - Bojan Tunguz](https://www.youtube.com/watch?v=OcNBmilICgY) — Optimized AI Conference · 31:33 · 4y ago

### Retrieval Augmented Generation
RAG is the central method combining LLMs with the knowledge graph to mitigate hallucinations and ensure up-to-date, verifiable information in CancerKG. The NPTEL IIT Kharagpur lecture provides a concise, academic-level explanation of RAG suitable for advanced readers.

*How the paper uses it:* CancerKG uses RAG to combine LLMs with a verified knowledge graph as a guardrail against hallucinations.

▶ [Lecture 55 : Retrieval Augmented Generation](https://www.youtube.com/watch?v=GxPW0HDB1So) — NPTEL IIT Kharagpur · 15:08 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand CancerKG, start by learning the basics of cancer biology and colorectal cancer to grasp the medical context. Then build foundational knowledge of large language models (LLMs) in medicine and knowledge graphs, which are key technologies combined in CancerKG. Next, study deep learning methods for classifying complex medical tables, an important technical step in CancerKG's data processing. Finally, learn about Retrieval Augmented Generation (RAG), the core hybrid approach CancerKG uses to integrate LLMs with a knowledge graph for accurate, verifiable cancer knowledge retrieval.

### CancerKG authors talk *(paper-talk search result; attribution unverified)*
This section provides direct insight from the authors about CancerKG’s design and goals, helping ground your understanding in the system’s real-world application and motivation.

*How the paper uses it:* Hearing from the authors clarifies how CancerKG integrates multiple interfaces and models to assist cancer treatment decisions.

▶ [How encrypted immunotherapy could fight cancer | Blaise Kimmel | TEDxOhioStateUniversity](https://www.youtube.com/watch?v=EuB0ogbX_Fw) — TEDx Talks · 14:03 · 2d ago

### Large Language Models in medicine *(prerequisite)*
Learn what large language models are, how they generate text, and their specific applications and challenges in healthcare, providing essential background for CancerKG’s use of multiple LLMs.

*How the paper uses it:* CancerKG leverages multiple LLMs to interpret and generate medical knowledge, so understanding LLMs in medicine is crucial.

▶ [Generative AI for Healthcare (Part 1): Demystifying Large Language Models](https://www.youtube.com/watch?v=eLAq8yzvu8Q) — Stanford Online · 58:35 · 1y ago

### Knowledge Graph construction *(prerequisite)*
Understand what knowledge graphs are, how they organize complex data into connected entities and relationships, and why they are powerful for managing medical knowledge.

*How the paper uses it:* CancerKG’s foundation is an automatically updated knowledge graph that organizes millions of cancer publications.

▶ [353 - An introduction to knowledge graphs](https://www.youtube.com/watch?v=u7Z6osuKPqw) — DigitalSreeni · 26:57 · 1y ago

### Deep learning for table classification *(prerequisite)*
Explore how deep learning models, especially recurrent neural networks like GRUs, can classify and cluster complex tabular data, a key step in processing medical tables in CancerKG.

*How the paper uses it:* CancerKG uses deep learning GRU models to classify medical tables with high accuracy, enabling structured knowledge extraction.

▶ [The Past, Present and the Future of Machine Learning for Tabular Data - Bojan Tunguz](https://www.youtube.com/watch?v=OcNBmilICgY) — Optimized AI Conference · 31:33 · 4y ago

### Retrieval Augmented Generation
Learn how Retrieval Augmented Generation (RAG) combines retrieval from a trusted knowledge base with LLM generation to produce accurate, verifiable responses, addressing hallucination issues.

*How the paper uses it:* CancerKG uses RAG to integrate its knowledge graph with LLMs, ensuring up-to-date and trustworthy cancer treatment information.

▶ [Retrieval Augmented Generation | What is RAG | How does RAG Work | RAG Explained | CampusX](https://www.youtube.com/watch?v=X0btK9X0Xnk) — CampusX · 59:24 · 1y ago

## Already in your library

- [Stanford CS25: V3 I Retrieval Augmented Language Models](https://www.youtube.com/watch?v=mE7IDf2SmJg) — also for: Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding (Tinoosh Mohsenin)
- [9: Generative AI – Large Language Models (LLMs) and ...](https://www.youtube.com/watch?v=KGDe1QvfKJ8) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Lecture 12: RAG Explained - Retrieval Augmented Generation ...](https://www.youtube.com/watch?v=D2K9bStG-cU) — also for: LabSafety Bench: Benchmarking LLMs on Safety Issues in Scientific Labs (Xiangliang Zhang)
- [A Helping Hand for LLMs (Retrieval Augmented Generation) - Computerphile](https://www.youtube.com/watch?v=of4UDMvi2Kw) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [RAG Explained For Beginners](https://www.youtube.com/watch?v=_HQ2H_0Ayy0) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [RAG Explained in 12 Minutes](https://www.youtube.com/watch?v=v0ynfDPpe4E) — also for: Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding (Tinoosh Mohsenin)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Retrieval-augmented generation (RAG), Clearly Explained (Why it Matters)](https://www.youtube.com/watch?v=VioF7v8Mikg) — also for: Agentic RAG-Driven Multi-Omics Analysis for PI3K/AKT Pathway Deregulation in Precision Medicine (Dong Xu)
- [Knowledge Graph Construction - Lecture](https://www.youtube.com/watch?v=5OGMYQaIPKw) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Knowledge Graphs - Computerphile](https://www.youtube.com/watch?v=PZBm7M0HGzw) — also for: CausalTrace: A Neurosymbolic Causal Analysis Agent for Smart Manufacturing (Utkarshani Jaimini)
- [Brief Introduction To Knowledge Graph In NLP](https://www.youtube.com/watch?v=WZilmUNVm2U) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Large Language Models for Health 101](https://www.youtube.com/watch?v=b88FZYNJdIk) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [Workshop: Basics of LLMs & Prompt Engineering | AI in Medical Education Symposium](https://www.youtube.com/watch?v=zriuIpOSL2g) — also for: Text-Attributed Knowledge Graph Enrichment with Large Language Models for Medical Concept Representation (Dongjie Wang)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [\[1hr Talk\] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Everything You Need To Know About Large Language Models (LLMs)](https://www.youtube.com/watch?v=osKyvYJ3PRM) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [All Machine Learning algorithms explained in 17 min](https://www.youtube.com/watch?v=E0Hmnixke2g) — also for: DynaFlow: Transparent and Flexible Intra-Device Parallelism via Programmable Operator Scheduling (Stephanie Wang)
- [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of CancerKG's hybrid Knowledge Graph and LLM system for colorectal cancer medical knowledge. The beginner project focuses on reproducing a core deep learning component for table classification. The intermediate project involves reimplementing the core RAG hybrid approach on a smaller dataset with a simple baseline comparison. The advanced project extends the system to a new medical domain, addressing a stated limitation of generalization beyond colorectal cancer.

### Beginner — Deep Learning Table Classifier for Medical Tables
*Effort: a weekend, ~8 hours*

You build a deep learning model using a BiGRU architecture to classify medical tables into topical categories, inspired by CancerKG's approximately 95% F-measure result. You will preprocess a small set of synthetic or publicly available medical tables, train the model, and evaluate classification performance with cross-validation.

**Why it shows you understood the paper:** This project demonstrates your grasp of CancerKG's key contribution of deep learning-based topical table classification, showing you can implement and evaluate a core component that enables structural search over complex medical tables.

**Grounded in:** Topical table classification using GRU deep learning models achieved approximately 95% F-measure.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, pandas, NumPy, Jupyter Notebook

**Data:** Use a small synthetic dataset of medical tables with topical labels or publicly available biomedical tabular data as a substitute for CancerKG's proprietary table data.

**Build it:**

1. Collect or synthesize a small dataset of medical tables labeled by topic.
2. Preprocess tables into sequences suitable for input to a BiGRU model (e.g., tokenize cell contents).
3. Implement a BiGRU-based classifier in PyTorch for topical classification.
4. Train the model with 10-fold cross-validation and compute F-measure.
5. Analyze and visualize classification results.
6. Document the process and results in a README.

**Ships as:** A GitHub repo with code to preprocess tables, train and evaluate a BiGRU classifier, and a README showing classification metrics and explanation.

**Stretch goal:** Add embedding-based semantic similarity features to improve classification accuracy.

### Intermediate — RAG Hybrid System for Verifiable Medical Knowledge Retrieval
*Effort: 2-3 weekends, ~20 hours*

You reimplement a simplified Retrieval Augmented Generation (RAG) system combining a small knowledge graph with a large language model to answer colorectal cancer treatment queries. You build a small KG from a limited set of peer-reviewed abstracts or summaries, implement semantic search with embeddings, and integrate an open LLM (e.g., GPT-2 or FLAN-T5) for answer generation. You compare your RAG approach against a baseline LLM-only retrieval.

**Why it shows you understood the paper:** This project shows you understand CancerKG's core hybrid approach that mitigates hallucinations by grounding LLM responses in a verifiable KG, and you can build and evaluate a prototype of this architecture on real medical text.

**Grounded in:** CancerKG is a Retrieval Augmented Generation (RAG) hybrid system that combines multiple LLMs with a trustworthy, automatically updated Knowledge Graph.

**Tech stack:** Python 3.11, PyTorch, transformers, sentence-transformers, NetworkX, FastAPI

**Data:** Use a small collection of colorectal cancer abstracts from PubMed or similar public sources to build the KG and retrieval corpus.

**Build it:**

1. Collect a small set (~100) of colorectal cancer abstracts or summaries.
2. Manually construct a simple knowledge graph with entities and relations extracted from the abstracts.
3. Generate embeddings for KG nodes and abstracts using sentence-transformers.
4. Implement a semantic search module to retrieve relevant KG nodes and documents given a query.
5. Integrate a pretrained open LLM (e.g., FLAN-T5 or GPT-2) to generate answers conditioned on retrieved KG facts.
6. Compare answer quality and hallucination rate against LLM-only baseline.
7. Document architecture, evaluation, and results.

**Ships as:** A GitHub repo with code for KG construction, semantic search, LLM integration, and a README with evaluation comparing RAG vs baseline.

**Stretch goal:** Add a simple conversational interface to query the system interactively.

### Advanced — Extending CancerKG Hybrid System to Breast Cancer Domain
*Effort: 3-4 weeks*

You extend the CancerKG architecture and models to a new medical domain—breast cancer—addressing the paper's limitation about generalization beyond colorectal cancer. You build a domain-specific knowledge graph from breast cancer literature, retrain or fine-tune topical table classifiers on breast cancer tables, and adapt the RAG system to support breast cancer treatment queries. You evaluate the system's performance and discuss challenges in domain transfer.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of CancerKG by demonstrating your ability to generalize and adapt the hybrid KG-LLM system to a new cancer domain, involving data ingestion, model retraining, and system integration.

**Grounded in:** Current evaluation is focused on colorectal cancer; generalization to other domains requires retraining models.

**Tech stack:** Python 3.11, PyTorch, transformers, sentence-transformers, NetworkX, FastAPI, Docker

**Data:** Use publicly available breast cancer peer-reviewed publications and tables from PubMed or similar sources as a substitute for the paper's colorectal cancer data.

**Build it:**

1. Collect a corpus of breast cancer publications and extract tables with topical labels.
2. Retrain or fine-tune the BiGRU topical table classifier on breast cancer tables.
3. Construct a breast cancer knowledge graph with entities and relations extracted automatically or semi-automatically.
4. Adapt the RAG retrieval and generation pipeline to use the breast cancer KG and retrained models.
5. Evaluate classification accuracy and retrieval quality compared to colorectal cancer baseline.
6. Document challenges, results, and potential improvements.

**Ships as:** A GitHub repo demonstrating a breast cancer KG-LLM hybrid system with retrained models, evaluation metrics, and detailed README on domain adaptation.

**Stretch goal:** Implement unsupervised fusion improvements to reduce expert supervision in KG updates for breast cancer data.

_The paper's authors did not release code or datasets; all projects require using substitute or synthetic data and reimplementing methods from the paper's descriptions._
