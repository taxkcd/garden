---
title: "162 · LongSight: Compute-Enabled Memory to Accelerate Large-Context LLMs via Sparse Attention — José F. Martínez"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jose-f-martinez"
source_hash: "232fd084f8c6651f56c60ae1ddce2c0b069861f481f3fb147354e3115858b487"
sequence: 162
generator: "outreach-garden: managed"
---

# 162 · LongSight: Compute-Enabled Memory to Accelerate Large-Context LLMs via Sparse Attention

## At a glance

- **Professor:** José F. Martínez
- **Institution:** Cornell University
- **Paper:** [LongSight: Compute-Enabled Memory to Accelerate Large-Context LLMs via Sparse Attention](https://dl.acm.org/doi/10.1145/3725843.3756062)
- **Authors:** Derrick Quinn, E. Ezgi Yücel, Jinkwon Kim, José F. Martínez, Mohammad Alian
- **Year:** 2025

## Paper overview

LongSight is a system that combines algorithm and hardware design to enable transformer-based large language models (LLMs) to efficiently handle extremely long input contexts, up to one million tokens. It repurposes a compute-enabled CXL memory device called DReX to offload and accelerate the memory-intensive attention mechanism in LLMs by implementing a hybrid dense-sparse attention algorithm. This approach significantly improves throughput and reduces latency compared to existing GPU-only methods.

### Why it matters

**Research problem:** Transformer-based LLMs require large input context windows to improve output accuracy and personalization, but as context length grows, the attention mechanism becomes a major computational and memory bottleneck. Key-Value (KV) caching helps but quickly exceeds GPU high-bandwidth memory capacity, limiting context length and throughput.

**Why it matters:** Longer context windows reduce hallucinations and improve personalization in LLM outputs, which is critical for applications involving long documents, multi-turn interactions, and retrieval-augmented generation. Efficiently supporting large contexts is essential for advancing LLM capabilities and practical deployment.

**Key contributions:**

- Corroboration that attention in transformers is dominated by a small subset of past tokens with high dot-product similarity to current queries, enabling sparse attention.
- Proposal of a hybrid dense-sparse attention algorithm that keeps a short-term dense attention window in GPU HBM and offloads long-term sparse attention to a compute-enabled memory device.
- Repurposing of DReX, a compute-enabled CXL memory expander, to accelerate large-context attention in transformer-based LLMs.
- Design and implementation of sign-concordance filtering (SCF) and iterative quantization (ITQ) to enable efficient multi-stage filtering and top-k retrieval in memory.
- System integration of LongSight with GPU and DReX over CXL, including data layout, request handling, and hardware extensions.

## About the professor

**José F. Martínez** — Lee Teng-hui Professor of Engineering, School of Electrical & Computer Engineering, Cornell University.

Research interests: computer architecture: Microprocessors and computer systems; microarchitectures; multiprocessor and multicore architectures; caches and memory subsystems; embedded systems; buses and interconnects.

### Research links

- [Faculty/profile page](http://www.csl.cornell.edu/~martinez)
- [Resolved homepage](https://martinez.csl.cornell.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the LongSight paper, start by building a strong foundation in compute-enabled memory systems and transformer attention mechanisms, as these are critical to grasping the hardware and algorithmic innovations. Next, study sparse attention algorithms to appreciate the core algorithmic technique enabling efficient long-context handling. Finally, focus on the paper's core concept of hybrid dense-sparse attention, which combines these ideas, to fully comprehend LongSight's novel approach to accelerating large-context LLMs.

### Compute-enabled memory systems *(prerequisite)*
This section covers the hardware platform that LongSight repurposes—DReX, a compute-enabled CXL memory expander. Understanding memory-centric computing and in-memory computation principles is essential to appreciate how LongSight offloads sparse attention computations to specialized memory hardware.

*How the paper uses it:* LongSight repurposes DReX, a compute-enabled CXL memory expander, to accelerate large-context attention in transformer-based LLMs.

▶ [Memory-Centric Computing - Talk at TU Graz 2025 - Prof ...](https://www.youtube.com/watch?v=5lhACquy6hw) — Onur Mutlu Lectures · 1:07:48

### Transformer attention mechanisms *(prerequisite)*
This section explains the fundamental self-attention mechanism in transformers, which is the computational bottleneck LongSight aims to optimize. A solid grasp of how attention works mathematically and conceptually is necessary before exploring sparse and hybrid attention techniques.

*How the paper uses it:* LongSight accelerates the transformer attention mechanism, which dominates computation and memory in large-context LLMs.

▶ [Maths Behind Self-Attention Mechanism of Transformers | AI ...](https://www.youtube.com/watch?v=F_jczQeCPh8) — TensorFlow User Group Islamabad · 27:24

### Sparse attention algorithms *(prerequisite)*
Sparse attention algorithms reduce the quadratic complexity of full attention by focusing on a subset of relevant tokens. Understanding these algorithms is crucial to appreciate LongSight's hybrid dense-sparse attention approach and its filtering techniques like sign-concordance filtering and iterative quantization.

*How the paper uses it:* LongSight's hybrid dense-sparse attention algorithm relies on sparse attention to efficiently handle long-term context tokens.

▶ [PyTorch Expert Exchange: Efficient Generative Models: From ...](https://www.youtube.com/watch?v=Eqg0VIiWrgM) — PyTorch · 39:23

### Hybrid dense-sparse attention
This section focuses on the core method of LongSight, which combines dense local attention on recent tokens with sparse attention on long-term context. Understanding this hybrid approach is key to grasping how LongSight achieves high throughput and large context support.

*How the paper uses it:* LongSight implements a hybrid dense-sparse attention algorithm that keeps recent KV pairs dense on GPU and offloads sparse attention to DReX.

▶ [L49: Sparse block attention | efficient multi-head strategies for long-range dependencies](https://www.youtube.com/watch?v=jfu1Yo1Y0PE) — IIT Madras - B.S. Degree Programme · 19:31 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand LongSight, start by learning the basics of transformer attention mechanisms, which are fundamental to how large language models process context. Then, build knowledge about compute-enabled memory systems, the hardware platform LongSight repurposes to accelerate attention. Next, grasp sparse attention algorithms, the core technique enabling efficient long-context handling. Finally, explore the hybrid dense-sparse attention method central to LongSight's innovation, combining local dense and long-term sparse attention for scalability and efficiency.

### Transformer attention mechanisms *(prerequisite)*
Transformer attention mechanisms allow models to weigh the importance of different input tokens dynamically, enabling them to focus on relevant parts of the input sequence. Understanding self-attention math and intuition is key to grasping how LLMs handle context.

*How the paper uses it:* LongSight accelerates the attention mechanism in transformer-based LLMs, so understanding how attention works is foundational.

▶ [Maths Behind Self-Attention Mechanism of Transformers | AI ...](https://www.youtube.com/watch?v=F_jczQeCPh8) — TensorFlow User Group Islamabad · 27:24

### Compute-enabled memory systems *(prerequisite)*
Compute-enabled memory integrates processing capabilities directly within memory hardware to reduce data movement and latency. This approach is critical for accelerating memory-intensive tasks like large-context attention in LLMs.

*How the paper uses it:* LongSight repurposes DReX, a compute-enabled CXL memory expander, to offload and accelerate sparse attention computations.

▶ [Memory-Centric Computing - Talk at TU Graz 2025 - Prof ...](https://www.youtube.com/watch?v=5lhACquy6hw) — Onur Mutlu Lectures · 1:07:48

### Sparse attention algorithms *(prerequisite)*
Sparse attention algorithms reduce computation by focusing only on a subset of relevant tokens rather than attending to all tokens, enabling efficient handling of very long sequences. Understanding sparse attention helps explain how LongSight scales to million-token contexts.

*How the paper uses it:* LongSight's hybrid algorithm offloads sparse attention over long-term context to memory, relying on sparse attention principles.

▶ [DeepSeek Sparse Attention Explained: 80% Cheaper Long-Context AI](https://www.youtube.com/watch?v=hrDr2ZlOasM) — Tales Of Tensors · 18:07 · 4 months ago

## Already in your library

- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [How Attention Mechanism Works in Transformer Architecture](https://www.youtube.com/watch?v=KMHkbXzHn7s) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Attention for Neural Networks, Clearly Explained!!!](https://www.youtube.com/watch?v=PSs6nxngL6k) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of LongSight's approach to accelerating large-context LLM attention via hybrid dense-sparse attention and compute-enabled memory offloading. The beginner project focuses on implementing and visualizing the core sparse attention filtering mechanism in software. The intermediate project reimplements the hybrid dense-sparse attention algorithm on a smaller scale and compares throughput and accuracy to a dense baseline. The advanced project extends the system by exploring adaptive parameter tuning to address a key limitation noted in the paper, using your software engineering and ML skills.

### Beginner — Sparse Attention Filtering Visualization
*Effort: a weekend, ~8 hours*

You build a Python script that simulates the sign-concordance filtering (SCF) and iterative quantization (ITQ) steps used in LongSight to filter key-value pairs for sparse attention. The project visualizes how SCF and ITQ reduce the candidate key set size while preserving relevant keys, using synthetic dot-product similarity data.

**Why it shows you understood the paper:** This project demonstrates your grasp of LongSight's key filtering techniques that enable efficient sparse attention by drastically reducing memory and compute overhead, a core contribution of the paper.

**Grounded in:** Sign-Concordance Filtering (SCF) and Iterative Quantization (ITQ) enable efficient multi-stage filtering and top-k retrieval.

**Tech stack:** Python 3.11, matplotlib, numpy, jupyter notebook

**Data:** Synthetic dot-product similarity scores generated to mimic attention scores between query and past tokens.

**Build it:**

1. Implement a function to generate synthetic dot-product similarity scores between a query vector and a large set of key vectors.
2. Implement sign-concordance filtering (SCF) by quantizing vectors to 1-bit signs and filtering keys based on sign agreement with the query.
3. Implement iterative quantization (ITQ) to improve the balance of sign-bit distributions and enhance filtering effectiveness.
4. Visualize the reduction in candidate keys after each filtering stage and plot the trade-off between filter ratio and recall of top-k keys.
5. Write a README explaining the filtering process and how it relates to LongSight's sparse attention acceleration.

**Ships as:** A Jupyter notebook or Python script with visualizations showing SCF and ITQ filtering stages, demonstrating how sparse attention filtering reduces candidate keys efficiently.

**Stretch goal:** Add a simple simulation of top-k retrieval after filtering and compare recall against full dense attention on synthetic data.

### Intermediate — Hybrid Dense-Sparse Attention Reimplementation
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of LongSight's hybrid dense-sparse attention algorithm in Python using PyTorch. The model processes sequences with a short dense attention window and offloads sparse attention over a longer context simulated in CPU memory. You compare throughput and perplexity against a baseline full dense attention on a public small-scale language modeling dataset.

**Why it shows you understood the paper:** This project shows you can reimplement the core hybrid attention mechanism, demonstrating understanding of how LongSight balances dense and sparse attention to scale context length efficiently while maintaining accuracy.

**Grounded in:** LongSight implements a hybrid dense-sparse attention algorithm combining local dense attention and offloaded sparse attention.

**Tech stack:** Python 3.11, PyTorch, numpy

**Data:** Use the WikiText-2 dataset as a public substitute for language modeling data to evaluate attention mechanisms.

**Build it:**

1. Set up a PyTorch transformer model that supports variable-length input sequences.
2. Implement a sliding window dense attention mechanism over the most recent tokens (e.g., last 512 tokens) in GPU memory.
3. Implement a sparse attention mechanism that filters keys from a longer context stored in CPU memory using a simple dot-product similarity threshold.
4. Combine the dense and sparse attention outputs to produce the final attention output.
5. Train or evaluate the model on WikiText-2 and measure perplexity and throughput compared to a baseline full dense attention model.
6. Document the implementation details, results, and how this relates to LongSight's hybrid attention design.

**Ships as:** A PyTorch codebase with scripts to run hybrid dense-sparse attention and baseline dense attention, with evaluation metrics and a README explaining the approach and results.

**Stretch goal:** Incorporate a basic sign-concordance filtering step in the sparse attention phase to improve filtering efficiency.

### Advanced — Adaptive Parameter Tuning for Hybrid Attention
*Effort: 3+ weeks*

You develop an extension to the hybrid dense-sparse attention implementation that automatically tunes key parameters such as dense window size, top-k selection, and filtering thresholds based on input context characteristics. Using a combination of heuristic rules and lightweight ML models, your system adapts these parameters dynamically to optimize throughput and accuracy trade-offs.

**Why it shows you understood the paper:** This project addresses a key limitation identified in LongSight about context-dependent parameter tuning, demonstrating your ability to extend the system to improve usability and generalization, a future direction suggested by the authors.

**Grounded in:** Optimal parameters for window size, top-k, and filtering thresholds are heavily context-dependent and require tuning.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, numpy

**Data:** Use WikiText-2 or similar public language modeling datasets to evaluate adaptive tuning strategies.

**Build it:**

1. Build upon the intermediate hybrid attention implementation as a base.
2. Implement parameter tuning modules that adjust dense window size, top-k, and filtering thresholds based on runtime metrics such as token similarity distributions and latency.
3. Experiment with heuristic rules and simple ML models (e.g., regression or decision trees) trained on small validation sets to predict optimal parameters.
4. Evaluate the adaptive system's throughput and perplexity compared to fixed-parameter baselines.
5. Write detailed documentation and analysis discussing how adaptive tuning improves performance and usability, relating back to LongSight's limitations and future directions.

**Ships as:** An extended hybrid attention codebase with adaptive parameter tuning, evaluation scripts, and a comprehensive README analyzing the benefits and challenges of adaptive tuning.

**Stretch goal:** Explore integration of adaptive tuning with other transformer architectures or larger datasets to test generalization.
