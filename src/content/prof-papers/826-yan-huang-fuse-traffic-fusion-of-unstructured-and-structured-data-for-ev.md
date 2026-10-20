---
title: "826 · FUSE-Traffic: Fusion of Unstructured and Structured Data for Event-aware Traffic Forecasting — Yan Huang"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yan-huang"
source_hash: "123ef83e834c7018402efd1a8ef1a354c84f833e3df2466fc3ec15f8450308f6"
sequence: 826
generator: "outreach-garden: managed"
---

# 826 · FUSE-Traffic: Fusion of Unstructured and Structured Data for Event-aware Traffic Forecasting

## At a glance

- **Professor:** Yan Huang
- **Institution:** University of North Texas
- **Paper:** [FUSE-Traffic: Fusion of Unstructured and Structured Data for Event-aware Traffic Forecasting](https://arxiv.org/pdf/2510.16053)
- **Authors:** Chenyang Yu, Xinpeng Xie, Yan Huang, Chenxi Qiu
- **Year:** 2025

## Paper overview

This paper presents FUSE-Traffic, a new traffic forecasting model that improves predictions by combining traditional traffic data with real-time event information extracted using Large Language Models (LLMs). It addresses challenges in predicting traffic disruptions caused by irregular events like accidents, weather, or public gatherings by dynamically querying event data and integrating it with traffic patterns using graph neural networks and a cross-attention fusion mechanism. The model outperforms existing methods, especially during high-impact events.

### Why it matters

**Research problem:** Accurate traffic forecasting is difficult due to non-periodic external events that disrupt regular traffic patterns. Traditional Graph Neural Networks (GNNs) model periodic traffic well but struggle with event-driven dynamics. Existing event-aware methods rely on manually engineered features or curated event datasets, which are limited and costly. Integrating dynamic, rich event information into traffic forecasting remains a key challenge.

**Why it matters:** Reliable traffic forecasting is essential for Intelligent Transportation Systems to optimize urban resource allocation and improve travel experiences. Non-periodic events cause sudden traffic fluctuations that traditional models fail to predict accurately, limiting practical application and robustness of traffic prediction systems.

**Key contributions:**

- Proposed a novel multimodal traffic forecasting framework combining LLMs for dynamic event querying with GNNs for spatio-temporal traffic modeling.
- Designed an on-demand event information extraction module using LLM prompting and a cross-attention fusion mechanism for fine-grained integration of event semantics with traffic features.
- Conducted comprehensive experiments on three real-world datasets (METR-LA, PEMS-BAY, PEMS03) demonstrating significant performance improvements over state-of-the-art models, especially under high-impact event conditions.

## About the professor

**Yan Huang** — Professor, Computer Science and Engineering, University of North Texas.

### Research links

- [Faculty/profile page](https://engineering.unt.edu/people/yan-huang.html)
- [Professor website](https://www.cse.unt.edu/~huangyan)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Graph Neural Networks
**The paper assumes:** graph neural networks, message passing algorithms, spatio-temporal graph modeling
**Already in this field?** Skip this entirely if you already understand graph neural networks and their application to spatio-temporal data.

This background focuses on Graph Neural Networks (GNNs), which are central to the FUSE-Traffic paper's method for modeling spatio-temporal traffic data and integrating event information. The rigorous course option provides a deep, structured university-level understanding of GNNs, ideal for readers seeking comprehensive mastery. The fast track offers a concise, visual introduction suitable for readers who want a solid grasp of GNN concepts and applications quickly, without committing to a full-length course.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224W Machine Learning with Graphs I Jure Leskovec](https://www.youtube.com/playlist?list=PLoROMvodv4rOP-ImU-O1rYRg2RFxomvFp) — Stanford Online · 47 videos · 24.1h across 47 episodes

**Watch only this:** Lectures 6.1 - 6.3 (Introduction to Graph Neural Networks, Basics of Deep Learning, Deep Learning for Graphs) plus Lectures 7.1 - 7.3 (A general Perspective on GNNs, A Single Layer of a GNN, Stacking layers of a GNN), about 3.5 hours total — these cover core GNN concepts, layers, and architectures relevant to traffic forecasting.

*Why it unblocks this paper:* Stanford CS224W by Jure Leskovec is a top-tier university course that thoroughly covers graph machine learning fundamentals and advanced GNN architectures, directly supporting understanding of the spatio-temporal and fusion mechanisms in FUSE-Traffic.

*If you want all of it:* 24.1 hours across 47 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Graph Neural Networks](https://www.youtube.com/playlist?list=PLV8yxwGOxvvoNkzPfCx2i8an--Tkt7O8Z) — DeepFindr · 27 videos · 6.6h across 27 episodes

**Watch only this:** Episodes 1-3 (Understanding Graph Neural Networks Parts 1-3), plus Episode 18 (Friendly Introduction to Temporal Graph Neural Networks (and some Traffic Forecasting)), about 1.5 hours total — these provide a concise overview of GNN basics and temporal GNNs relevant to the paper.

*Why it unblocks this paper:* DeepFindr's 'Graph Neural Networks' playlist offers clear, intuition-driven explanations and practical examples including traffic forecasting, making it an accessible and focused introduction to GNNs for readers pressed for time.

*If you want all of it:* 6.6 hours across 27 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FUSE-Traffic paper, start with foundational knowledge of Graph Neural Networks for spatio-temporal modeling, as they form the backbone for traffic data representation. Next, explore Large Language Models for event extraction to grasp how unstructured event data is dynamically retrieved and encoded. Then, study cross-attention fusion mechanisms to comprehend how heterogeneous data modalities are integrated. Finally, focus on the authors' own talk about FUSE-Traffic to get direct insights into their novel approach and experimental results.

### Graph neural networks spatio-temporal modeling *(prerequisite)*
This foundational topic covers how graph neural networks model spatial and temporal dependencies in traffic data, which is crucial for understanding the structured data component of FUSE-Traffic. The selected talk provides a research-level presentation on spatio-temporal GNNs applied to forecasting problems, offering relevant technical depth.

*How the paper uses it:* FUSE-Traffic leverages GNNs to model spatio-temporal traffic patterns effectively.

▶ [Spatio-Temporal Graph Neural Networks for Multi-Site PV Power Forecasting | Jelena Simeunović](https://www.youtube.com/watch?v=gCh-iRma6pw) — AMLD Intelligence Summit · 4y ago

### Large language models event extraction *(prerequisite)*
Understanding how LLMs extract event information from unstructured text is key to grasping the dynamic event querying module in FUSE-Traffic. The chosen video is a research paper presentation on event extraction using contrastive pre-training, providing an advanced and relevant perspective on event extraction techniques.

*How the paper uses it:* FUSE-Traffic uses LLM prompting to dynamically retrieve relevant event texts for traffic forecasting.

▶ [\[CS598\] - CLEVE: Contrastive Pre-training for Event Extraction](https://www.youtube.com/watch?v=9QEBqQ-bYXM) — Tommy Sohn · 3y ago

### Cross-attention fusion mechanisms *(prerequisite)*
Cross-attention fusion is essential for integrating heterogeneous data modalities such as traffic embeddings and event text embeddings. Although the candidate videos lack detailed metadata, they are the only available advanced-level resources on this topic, which is critical for understanding the fusion mechanism in FUSE-Traffic.

*How the paper uses it:* FUSE-Traffic employs a cross-attention fusion mechanism to combine event semantics with traffic features.

▶ [https://www.youtube.com › watch?v=Lgk6IwlBdwQ](https://www.youtube.com/watch?v=Lgk6IwlBdwQ) — YouTube result via DuckDuckGo

### FUSE-Traffic authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk is the most direct and authoritative source to understand the novel contributions, design choices, and experimental validations of FUSE-Traffic. It provides insights into the integration of LLMs and GNNs for event-aware traffic forecasting from the creators themselves.

*How the paper uses it:* This talk presents the FUSE-Traffic model, detailing its architecture, event querying strategy, and performance improvements.

▶ [https://www.youtube.com › watch?v=DEP1xf7fggI](https://www.youtube.com/watch?v=DEP1xf7fggI) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand FUSE-Traffic, start by learning how Graph Neural Networks (GNNs) model spatial and temporal dependencies in traffic data, which forms the backbone of traffic forecasting. Next, grasp how Large Language Models (LLMs) extract event information dynamically from unstructured text, enabling awareness of irregular events. Then, study cross-attention fusion mechanisms that integrate these heterogeneous data sources effectively. Finally, explore the specific challenges and approaches in event-aware traffic forecasting to see how these components come together in the paper's novel model.

### Graph neural networks spatio-temporal modeling *(prerequisite)*
Graph Neural Networks extend traditional neural networks to data structured as graphs, capturing relationships between nodes. Spatio-temporal GNNs model how these relationships evolve over time, making them ideal for traffic data where sensors are connected spatially and traffic changes temporally.

*How the paper uses it:* FUSE-Traffic uses spatio-temporal GNNs to model regular traffic patterns and spatial dependencies between sensors.

▶ [Spatio-Temporal Graph Neural Networks for Multi-Site PV Power Forecasting | Jelena Simeunović](https://www.youtube.com/watch?v=gCh-iRma6pw) — AMLD Intelligence Summit · 4y ago

### Large language models event extraction *(prerequisite)*
Large Language Models can process and understand unstructured text to extract relevant event information dynamically. This allows models to incorporate real-time event data like accidents or weather reports that disrupt traffic patterns.

*How the paper uses it:* FUSE-Traffic dynamically queries event texts using LLM prompting to capture non-periodic disruptions affecting traffic.

▶ [\[CS598\] - CLEVE: Contrastive Pre-training for Event Extraction](https://www.youtube.com/watch?v=9QEBqQ-bYXM) — Tommy Sohn · 3y ago

### Cross-attention fusion mechanisms *(prerequisite)*
Cross-attention mechanisms enable the model to selectively integrate information from different data modalities by learning how features from one source attend to features from another. This is crucial for combining structured traffic data with unstructured event text embeddings.

*How the paper uses it:* FUSE-Traffic employs a cross-attention fusion block to merge traffic embeddings with event semantics effectively.

▶ [https://www.youtube.com › watch?v=Lgk6IwlBdwQ](https://www.youtube.com/watch?v=Lgk6IwlBdwQ) — YouTube result via DuckDuckGo

### Event-aware traffic forecasting models
Event-aware traffic forecasting models incorporate external event information to improve prediction accuracy during irregular disruptions. Understanding existing approaches helps contextualize the novelty of FUSE-Traffic’s dynamic event querying and fusion.

*How the paper uses it:* The paper advances event-aware forecasting by integrating LLM-extracted event data with GNN-based traffic modeling.

▶ [Traffic Forecasting - PredictionX](https://www.youtube.com/watch?v=3a_x9LsP1BQ) — Eric Elliott · 5y ago

### FUSE-Traffic authors talk *(paper-talk search result; attribution unverified)*
Hearing directly from the authors provides insights into the motivation, design choices, and challenges of FUSE-Traffic, complementing technical understanding with practical perspectives.

*How the paper uses it:* These talks present the authors’ explanation of their fusion framework combining LLMs and GNNs for event-aware traffic forecasting.

▶ [https://www.youtube.com › watch?v=DEP1xf7fggI](https://www.youtube.com/watch?v=DEP1xf7fggI) — YouTube result via DuckDuckGo

## Already in your library

- [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [The basics of spatio-temporal graph neural networks](https://www.youtube.com/watch?v=RRMU8kJH60Q) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [Graph Neural Networks Explained: A Clear Guide to GNN ...](https://www.youtube.com/watch?v=eGoszzMkGfU) — also for: Predicting Biomedical Interactions with Higher-Order Graph Convolutional Networks (Anne R. Haake)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [AI Explained - Graph Neural Networks | How AI Uses Graphs to Accelerate Innovation](https://www.youtube.com/watch?v=epVW0_iVBX8) — also for: CableRobotGraphSim: A Graph Neural Network for Modeling Partially Observable Cable-Driven Robot Dynamics (Mridul Aanjaneya)
- [Cross Attention in Transformers | 100 Days Of Deep Learning | CampusX](https://www.youtube.com/watch?v=smOnJtCevoU) — also for: DiTVC: One-Shot Voice Conversion via Diffusion Transformer with Environment and Speaking Rate Cloning (Adam Finkelstein)
- [How Cross Attention Powers Translation in Transformers ...](https://www.youtube.com/watch?v=b40PL-sWmSM) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Cross Attention | Method Explanation | Math Explained](https://www.youtube.com/watch?v=aw3H-wPuRcw) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Cross Attention in Transformers Explained: The Bridge Between Encoder and Decoder](https://www.youtube.com/watch?v=McroJ64-Bao) — also for: End-to-end Document Recognition and Understanding with Dessurt (Bryan S. Morse)
- [Cross-attention (NLP817 11.9)](https://www.youtube.com/watch?v=35jpRxa81Hc) — also for: Structural-Functional Brain Connectivity Generation via Multimodal Hypergraph-based Flow Matching (Pew-Thian Yap)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the FUSE-Traffic paper. The beginner project recreates a core mechanism of event-aware fusion on a small scale using familiar tools. The intermediate project implements the paper's core multimodal fusion method on a public traffic dataset, comparing it against a baseline. The advanced project extends the approach by exploring more efficient event querying strategies to address the paper's stated computational cost limitation.

### Beginner — Cross-Attention Fusion of Traffic and Event Embeddings
*Effort: a weekend, ~8 hours*

You build a small prototype that takes pre-extracted traffic feature embeddings and event text embeddings, then implements a cross-attention fusion mechanism to combine them. The project focuses on the fusion block described in the paper, demonstrating how event semantics can be integrated with traffic data embeddings.

**Why it shows you understood the paper:** This project shows you understand the key multimodal fusion mechanism of FUSE-Traffic, specifically how cross-attention can align and integrate graph-based traffic embeddings with textual event embeddings.

**Grounded in:** Section 2.4 describes the cross-modality fusion and alignment block that uses multi-head attention to fuse graph embeddings with text embeddings.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face)

**Data:** Simulated small sets of traffic embeddings (random vectors) and event text embeddings (from a pretrained language model) to focus on fusion mechanism without full dataset dependency.

**Build it:**

1. Generate or load small sets of dummy traffic embeddings (e.g., random tensors).
2. Extract event text embeddings using a pretrained transformer model (e.g., BERT).
3. Implement a cross-attention module that takes traffic embeddings as queries and event embeddings as keys and values.
4. Fuse the embeddings via multi-head attention and output combined representations.
5. Visualize or log attention weights to illustrate fusion behavior.

**Ships as:** A Python notebook or script demonstrating cross-attention fusion with example inputs, including visualizations or printed attention maps.

**Stretch goal:** Add a simple downstream prediction head to show how fused embeddings improve a toy regression task.

### Intermediate — Reimplement FUSE-Traffic Fusion on METR-LA Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core FUSE-Traffic model focusing on the dynamic event querying via LLM prompting and the cross-attention fusion with GNN-based traffic embeddings. You apply it to the METR-LA traffic dataset, using publicly available traffic data and simulated event texts. You compare performance against a baseline GNN-only traffic forecasting model.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper's main method and validate its effectiveness on a real-world dataset, showing comprehension of the event-aware fusion and dynamic event extraction concepts.

**Grounded in:** FUSE-Traffic synergizes LLM-based dynamic event querying with GNN spatio-temporal modeling and cross-attention fusion, showing improved forecasting on METR-LA (Table 5, Section 2.3, 2.4).

**Tech stack:** Python 3.11, PyTorch, DGL or PyTorch Geometric, transformers (Hugging Face), scikit-learn

**Data:** METR-LA traffic dataset (publicly available), with synthetic or manually curated event texts aligned by time and location to simulate event querying.

**Build it:**

1. Download and preprocess the METR-LA traffic dataset for spatio-temporal forecasting.
2. Implement a baseline GNN traffic forecasting model (e.g., DCRNN or Graph WaveNet).
3. Create an event text retrieval module that simulates LLM prompting by selecting relevant event texts based on time and location.
4. Encode event texts using a pretrained language model to obtain event embeddings.
5. Implement the cross-attention fusion mechanism to combine traffic and event embeddings.
6. Train and evaluate the fused model and baseline on multiple prediction horizons (15, 30, 60 minutes), reporting MAE and RMSE.

**Verified links from the paper:**

- <https://github.com/GeoAICenter/FUSE-Traffic_Sigspatial2025> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code, scripts to run experiments on METR-LA, and a README reporting comparative metrics and ablation of event fusion.

**Stretch goal:** Incorporate a simple prompt engineering strategy to improve event text relevance and measure impact on forecasting accuracy.

### Advanced — Efficient Event Querying for Real-Time Traffic Forecasting
*Effort: 3+ weeks*

You extend the FUSE-Traffic framework by designing and implementing an efficient event querying strategy to reduce computational cost of dynamic LLM prompts. This could involve caching, event clustering, or lightweight event summarization. You evaluate the trade-off between query cost and forecasting accuracy on a real traffic dataset with event annotations.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding of the model's architecture and practical deployment challenges in real-time traffic forecasting.

**Grounded in:** Future directions include exploring more efficient event querying strategies to reduce computational cost, addressing a major limitation of the current approach.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), DGL or PyTorch Geometric, Redis or SQLite for caching, scikit-learn

**Data:** Use METR-LA or PEMS-BAY datasets with event annotations or simulated event logs; event texts can be generated or curated to simulate real-time querying.

**Build it:**

1. Reimplement or reuse the intermediate FUSE-Traffic model with dynamic event querying.
2. Design an event caching mechanism to store and reuse previous LLM query results based on spatial-temporal similarity.
3. Implement event clustering or summarization to reduce the number of queries needed per time window.
4. Integrate the efficient querying module into the forecasting pipeline.
5. Benchmark computational cost (e.g., query count, latency) and forecasting accuracy against the original dynamic querying approach.
6. Analyze trade-offs and document findings.

**Verified links from the paper:**

- <https://github.com/GeoAICenter/FUSE-Traffic_Sigspatial2025> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with code for efficient event querying integrated into FUSE-Traffic, evaluation scripts, and a detailed README discussing cost-accuracy trade-offs.

**Stretch goal:** Explore extending the framework to incorporate additional event types or modalities (e.g., social media signals) to further improve robustness.
