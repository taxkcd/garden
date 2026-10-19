---
title: "801 · On a Foundation Model for Operating Systems — Brighten Godfrey"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-brighten-godfrey"
source_hash: "c9c8f776cbc712f85c8305bfd127b0d4306455a4dae63f02f78c5c8b4c1af70b"
sequence: 801
generator: "outreach-garden: managed"
---

# 801 · On a Foundation Model for Operating Systems

## At a glance

- **Professor:** Brighten Godfrey
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [On a Foundation Model for Operating Systems](https://arxiv.org/pdf/2312.07813)
- **Authors:** Divyanshu Saxena, Nihal Sharma, Donghyun Kim, Rohit Dwivedula, Jiayi Chen, Chenxi Yang, Sriram Ravula, Zichao Hu, Aditya Akella, Sebastian Angel, Joydeep Biswas, Swarat Chaudhuri, Isil Dillig, Alex Dimakis, P. Brighten Godfrey, Daehyeok Kim, Chris Rossbach, Gang Wang
- **Year:** 2023

## Paper overview

This paper proposes a new approach to operating systems (OS) by developing a foundation model called FM4OS. This model is trained on diverse OS traces—data capturing hardware metrics, system events, and application workloads—to understand the complex interactions within OS components like CPU scheduling, memory management, and networking. FM4OS aims to replace traditional handcrafted OS policies with adaptable, data-driven decisions that improve performance and generalize across different hardware and workloads. The model can be fine-tuned for various tasks such as policy decision-making, generating synthetic OS data, and predicting system behavior.

### Why it matters

**Research problem:** Operating systems manage complex hardware and software resources but rely on handcrafted policies that lack adaptability across diverse hardware, workloads, and environments. Existing machine learning approaches optimize individual OS components but fail to integrate these components holistically or generalize well. There is a need for a unified, adaptable model that captures the interdependencies among OS components to improve decision-making.

**Why it matters:** OSes are central to modern computing, affecting performance, efficiency, and reliability across applications from robotics to cloud services. Improving OS decision-making can lead to better resource utilization, responsiveness, and adaptability to new hardware and workloads, which is critical as computing environments become more heterogeneous and dynamic.

**Key contributions:**

- Identification of OS traces as a rich, unified dataset capturing complex OS component interactions.
- Proposal of FM4OS, a domain-specific foundation model for operating systems.
- Systematic categorization of FM4OS downstream tasks: policy agent, generative model, and predictive model.
- Discussion of challenges unique to OS settings, including composability of policies and explainability.
- Exploration of generative uses of FM4OS for synthetic trace generation and data augmentation.

## About the professor

**Brighten Godfrey** — Professor, Siebel School of Computing and Data Science, Univ. of Illinois at Urbana-Champaign.

Research interests: building networked systems, applications of ML to networked systems, algorithms and optimization for networks

### Research links

- [Faculty/profile page](http://pbg.cs.illinois.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** transformer models in machine learning
**The paper assumes:** transformer architectures, self-attention mechanisms, sequence modeling, and foundation models in machine learning
**Already in this field?** Skip this entirely if you already understand transformer models and their application in sequence modeling and foundation models.

To understand the FM4OS paper, which centers on a transformer-based foundation model for operating systems, it is crucial to grasp transformer architectures, self-attention mechanisms, and training paradigms. The rigorous course offers a deep, structured dive into transformers and large language models, ideal for readers seeking comprehensive technical mastery. The fast track provides a concise, clear explainer series that covers core transformer concepts quickly and intuitively, suitable for readers who want a solid conceptual foundation without a large time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-4, about 7.2 hours — covering Transformer architecture, transformer-based models and tricks, large language models, and LLM training, which provide the essential foundation for understanding FM4OS's model design and pretraining.

*Why it unblocks this paper:* Stanford CME295 is a university-level course focused specifically on transformers and large language models, covering the architecture, training, tuning, and evaluation in detail. This aligns well with the paper's use of transformer-based foundation models and addresses key challenges like inference latency and explainability.

*If you want all of it:* 16.2 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [LLM Architecture Explained: Transformers, LoRA & RLHF | Full Series](https://www.youtube.com/playlist?list=PLGtYdYqSoNFAl_3Ow5okY4hiUo--MHLBZ) — NeuralCanvas · 7 videos · 0.3h across 7 episodes

**Watch only this:** Episodes 1-4, about 8 minutes — covering how transformers work, tokens, BERT vs GPT, and how transformers learn, which together give a quick but solid conceptual grasp of transformer models.

*Why it unblocks this paper:* NeuralCanvas's 'LLM Architecture Explained' series delivers precise, no-fluff explanations of core transformer concepts and related topics in a very short total time. It efficiently covers the fundamentals needed to understand the FM4OS transformer model and its training approach.

*If you want all of it:* Approximately 14 minutes across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FM4OS paper, start with foundational knowledge of transformer architectures and self-supervised learning, as these underpin the model design and training approach. Next, build a solid understanding of operating system internals and OS trace data analysis to grasp the domain context and data foundation. Finally, focus on the core concept of foundation models applied to operating systems, culminating with the authors' own talk or closest available advanced content on FM4OS or related foundation models in systems.

### Transformer architectures *(prerequisite)*
FM4OS uses transformer-based architectures to model the complex temporal and cross-component relationships in OS trace data. Understanding the transformer model, especially the attention mechanism, is essential to grasp how FM4OS processes and integrates diverse OS signals.

*How the paper uses it:* FM4OS employs transformer architectures for learning from multimodal OS trace data.

▶ [Transformer Neural Networks - EXPLAINED! (Attention is all you need)](https://www.youtube.com/watch?v=TQQlZhbC5ps) — CodeEmporium · 13:05 · 6y ago

### Self-supervised learning *(prerequisite)*
The FM4OS foundation model is pretrained using self-supervised learning on large-scale OS trace data, enabling it to learn useful representations without explicit labels. A rigorous lecture on self-supervised learning provides the theoretical background necessary to understand FM4OS's pretraining strategy.

*How the paper uses it:* FM4OS is pretrained with self-supervised methods to capture OS data patterns.

▶ [Stanford CS229 Machine Learning I Self-supervised learning I 2022 I Lecture 16](https://www.youtube.com/watch?v=6N3OAWIsUOU) — Stanford Online · 1:23:03 · 3y ago

### Operating system internals *(prerequisite)*
A deep understanding of OS components, policies, and their interactions is critical to appreciate the challenges FM4OS addresses in unifying OS decision-making. Advanced university-level lectures on OS design and implementation provide this necessary domain expertise.

*How the paper uses it:* FM4OS models complex interactions among OS components like CPU scheduling and memory management.

▶ [Operating System Design & Implementation](https://www.youtube.com/watch?v=t_McsJ1RGQg) — Neso Academy · 13:16 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand FM4OS, a foundation model for operating systems. We start with basic operating system internals to grasp OS components and policies, then cover transformer architectures as the modeling backbone of FM4OS, followed by self-supervised learning which is the pretraining method used. Finally, we explore the core concept of FM4OS itself, focusing on how foundation models unify OS decision-making.

### Operating system internals *(prerequisite)*
Learn the basic components and functions of operating systems, including how they manage hardware and software resources through policies and mechanisms. This foundation helps understand the complex interactions FM4OS aims to model and improve.

*How the paper uses it:* Understanding OS components and policies is essential to grasp FM4OS context.

▶ [L-1.1: Introduction to Operating System and its Functions with English Subtitles](https://www.youtube.com/watch?v=WJ-UaAaumNA) — Gate Smashers · 18:59 · 8y ago

### Transformer architectures *(prerequisite)*
Transformers are a type of neural network architecture that excel at modeling sequences and relationships in data. FM4OS uses transformer-based models to capture temporal and cross-component relationships in OS trace data.

*How the paper uses it:* FM4OS uses transformer-based architectures for modeling OS traces.

▶ [Transformer Neural Networks - EXPLAINED! (Attention is all you need)](https://www.youtube.com/watch?v=TQQlZhbC5ps) — CodeEmporium · 13:05 · 6y ago

### Self-supervised learning *(prerequisite)*
Self-supervised learning trains models on unlabeled data by creating surrogate tasks, enabling them to learn useful representations. FM4OS is pretrained using self-supervised methods on large-scale OS trace data to capture complex system behaviors.

*How the paper uses it:* FM4OS is pretrained using self-supervised methods on OS trace data.

▶ [What is Self-Supervised Learning? \[Quick Introduction\]](https://www.youtube.com/watch?v=bfCs3wqRSQY) — AISyndicate · 6:30 · 5y ago

## Already in your library

- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [7: Deep Learning for Natural Language – Transformers](https://www.youtube.com/watch?v=IeF7aATDaw4) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [MIT 6.S191: Recurrent Neural Networks, Transformers, and Attention](https://www.youtube.com/watch?v=d02VkQ9MP44) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Serdar Bozdag)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformer Neural Networks, ChatGPT's foundation, Clearly ...](https://www.youtube.com/watch?v=zxQyTK8quyY) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Illustrated Guide to Transformers Neural Network: A step by ...](https://www.youtube.com/watch?v=4Bdc55j80l8) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [Yann LeCun | Self-Supervised Learning, JEPA, World Models, and the future of AI](https://www.youtube.com/watch?v=yUmDRxV0krg) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)
- [Stanford CS231N | Spring 2025 | Lecture 12: Self-Supervised ...](https://www.youtube.com/watch?v=4howBU7THbM) — also for: Weakly Supervised Contrastive Learning for Histopathology Patch Embeddings (Tolga Tasdizen)
- [Self-supervised vision](https://www.youtube.com/watch?v=UaJDdft6BdI) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [What Is Self-Supervised Learning and Why Care?](https://www.youtube.com/watch?v=iGJ1XSkCyU0) — also for: Why the Agent Made that Decision: Contrastive Explanation Learning for Reinforcement Learning (Garrett E. Katz)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of FM4OS, a foundation model for operating systems. The beginner project focuses on analyzing and visualizing OS trace data to grasp the input space FM4OS uses. The intermediate project involves implementing a simplified transformer-based model on synthetic OS trace data to replicate FM4OS's core idea of learning OS component interactions. The advanced project tackles a key limitation by exploring inference speed improvements for real-time OS decision-making, extending the FM4OS concept with model optimization techniques.

### Beginner — OS Trace Data Exploration and Visualization
*Effort: a weekend, ~8 hours*

You build a data analysis and visualization pipeline that ingests simplified OS trace logs containing hardware metrics, system events, and application workload records. The project produces interactive visualizations showing temporal correlations and cross-component interactions within the OS data.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's identification of OS traces as a rich, unified dataset capturing complex OS component interactions, which is foundational to FM4OS.

**Grounded in:** Identification of OS traces as a rich, unified dataset capturing complex OS component interactions.

**Tech stack:** Python 3.11, Jupyter Notebook, pandas, matplotlib, seaborn, plotly

**Data:** Simulated OS trace data representing hardware counters, system event logs, and application workload events, created based on descriptions in the paper since no public dataset is provided.

**Build it:**

1. Design a simple schema for OS trace data including timestamps, CPU usage, memory usage, I/O events, and application requests.
2. Generate synthetic OS trace logs simulating temporal sequences and interactions among components.
3. Load the data into pandas DataFrames and perform exploratory data analysis to identify patterns and correlations.
4. Create visualizations (line plots, heatmaps, scatter plots) to illustrate temporal and cross-component relationships.
5. Build an interactive dashboard using Plotly or Jupyter widgets to explore the trace data dynamically.

**Ships as:** A GitHub repository with Jupyter notebooks and scripts that generate and visualize OS trace data, accompanied by a README explaining the data schema and insights.

**Stretch goal:** Add clustering or anomaly detection on the trace data to highlight unusual OS behavior patterns.

### Intermediate — Transformer Model for OS Trace Sequence Prediction
*Effort: 2 weekends, ~20 hours*

You implement a simplified transformer-based model trained on synthetic OS trace sequences to predict future system states or events. You compare its performance against a simple baseline like an LSTM or moving average model on the same data.

**Why it shows you understood the paper:** This project replicates the paper's core method of using transformer architectures and self-supervised learning on OS trace data to capture temporal and cross-component relationships, demonstrating comprehension of FM4OS's approach.

**Grounded in:** Proposal of FM4OS, a domain-specific foundation model for operating systems; conceptual demonstration that OS traces cover the input space for multiple OS tasks.

**Tech stack:** Python 3.11, PyTorch, numpy, pandas, scikit-learn, matplotlib

**Data:** Synthetic OS trace sequences generated as in the beginner project, structured as time series with multiple features representing OS metrics and events.

**Build it:**

1. Prepare the synthetic OS trace dataset as sequences suitable for model input, with train/test splits.
2. Implement a transformer encoder model to predict next-step OS metrics/events from prior sequence context.
3. Implement a baseline model such as an LSTM or moving average predictor.
4. Train both models on the synthetic data and evaluate prediction accuracy using metrics like MSE or accuracy.
5. Visualize and compare prediction results to demonstrate the transformer's advantage in capturing complex temporal dependencies.

**Ships as:** A GitHub repository containing model code, training scripts, evaluation results, and a README describing the approach and findings.

**Stretch goal:** Extend the model to multi-task learning by predicting multiple OS components simultaneously or fine-tune for a downstream task like anomaly detection.

### Advanced — Accelerating FM4OS Inference for Real-Time OS Decision-Making
*Effort: 3+ weeks, ~80 hours*

You develop and evaluate techniques to reduce transformer inference latency on OS trace data, such as model pruning, quantization, or knowledge distillation. You benchmark inference speed improvements and discuss trade-offs in accuracy and applicability to real-time OS tasks.

**Why it shows you understood the paper:** This project directly addresses a key limitation and future direction from the paper: the high inference latency of transformer models for real-time OS decisions, showing deep engagement with FM4OS challenges.

**Grounded in:** Inference latency of transformer models currently too high for some real-time OS tasks; research on accelerating inference to enable real-time OS decision-making with foundation models.

**Tech stack:** Python 3.11, PyTorch, ONNX Runtime, TorchScript, numpy, pandas

**Data:** Synthetic OS trace sequences as used in the intermediate project, to maintain consistency in evaluation.

**Build it:**

1. Reimplement or reuse the transformer model from the intermediate project.
2. Apply model optimization techniques such as pruning, quantization, or knowledge distillation to reduce model size and inference time.
3. Convert the optimized model to efficient runtime formats (e.g., ONNX, TorchScript) and benchmark inference latency on representative hardware.
4. Evaluate the impact of optimizations on prediction accuracy and latency trade-offs.
5. Document findings and discuss implications for deploying FM4OS in real-time OS environments.

**Ships as:** A GitHub repository with optimized model code, benchmarking scripts, detailed performance reports, and a README explaining methods and results.

**Stretch goal:** Explore hardware-specific acceleration (e.g., GPU, TPU) or design a lightweight transformer variant tailored for OS trace data.
