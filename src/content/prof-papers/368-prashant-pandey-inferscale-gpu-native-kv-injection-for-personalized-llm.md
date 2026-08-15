---
title: "368 · InferScale: GPU-Native KV Injection for Personalized LLM Serving — Prashant Pandey"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-prashant-pandey"
source_hash: "0571e4c8e6b1dc9ea517ea77026bc3337140089f99a133a316842a587b1d4bf3"
sequence: 368
generator: "outreach-garden: managed"
---

# 368 · InferScale: GPU-Native KV Injection for Personalized LLM Serving

## At a glance

- **Professor:** Prashant Pandey
- **Institution:** Northeastern University
- **Paper:** [InferScale: GPU-Native KV Injection for Personalized LLM Serving](https://arxiv.org/abs/2607.27090)
- **Authors:** Peter Li, Prashant Pandey
- **Year:** 2026

## Paper overview

InferScale is a novel system designed to improve the efficiency of serving large language models (LLMs) that use persistent personalized context, such as conversation histories. Unlike existing systems that repeatedly re-inject retrieved memory as prompt tokens, causing latency to grow with memory size, InferScale precomputes and stores key-value (KV) representations of memory facts on the GPU. At serving time, it injects these KV states directly into the model's attention cache, significantly reducing latency and improving throughput without sacrificing accuracy.

### Why it matters

**Research problem:** Current LLM memory systems inject retrieved user-specific context as prompt tokens, requiring repeated prefill computation for each request. This causes the time-to-first-token (TTFT) latency to grow quadratically with the size of retrieved memory, limiting scalability and efficiency in personalized LLM serving.

**Why it matters:** As LLM applications increasingly rely on large, persistent user memories for personalization, the inefficiency of repeated prompt prefilling leads to high latency and poor scalability. Efficient memory reuse is critical to enable responsive, scalable personalized LLM services.

**Key contributions:**

- Demonstration that KV injection is exactly equivalent to prompt injection for causal decoder transformers, preserving output distributions without approximation.
- Introduction of chunked RoPE, a method to store keys before rotary position encoding and apply position rotations at injection time, enabling position-independent KV reuse.
- Development of context-window encoding to encode each memory fact with a window of preceding conversation turns, preserving local context and recovering accuracy lost by independent fact encoding.
- Design and implementation of InferScale, a GPU-native retrieve-and-inject serving engine integrated as a vLLM KV-connector plugin requiring no model fine-tuning or engine modifications.

## About the professor

**Prashant Pandey** — Assistant Professor, Khoury College of Computer Sciences, Northeastern University.

Research interests: Data management

### Research links

- [Faculty/profile page](https://www.khoury.northeastern.edu/people/prashant-pandey)
- [Resolved homepage](https://www.khoury.northeastern.edu/people/prashant-pandey/#main)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer Attention Mechanisms
**The paper assumes:** transformer architectures, self-attention mechanisms, rotary positional embeddings, and causal decoder transformers
**Already in this field?** Skip this entirely if you already understand how transformer attention works, including key-value caching and positional encoding schemes like rotary embeddings.

Understanding transformer attention mechanisms is crucial for grasping the core contributions of the InferScale paper, which hinges on manipulating the key-value cache and positional encodings in causal decoder transformers. The rigorous course option offers a deep, structured university-level treatment of transformers and attention, ideal for thorough comprehension. The fast track provides a concise, visual, and intuition-driven explainer series that covers the essential concepts efficiently for readers pressed for time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos

**Watch only this:** Lectures 1-3 (Transformer, Transformer-Based Models & Tricks, Transformers & Large Language Models), about 5.3 hours — these cover the transformer architecture, attention mechanisms, and their application to LLMs, providing the foundational understanding needed for KV injection and chunked RoPE.

*Why it unblocks this paper:* Stanford CME295 Transformers and Large Language Models Autumn 2025 is a focused, authoritative university course dedicated specifically to transformers and LLMs, covering the architecture, attention mechanisms, and related techniques directly relevant to the paper's core methods.

*If you want all of it:* All 9 lectures, about 16.2 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Transformer Explained and Visualized](https://www.youtube.com/playlist?list=PLRgS_r6tnkkhI-q1auABKLfLWG0suOWln) — Pak · 10 videos · 2.7h across 10 episodes

**Watch only this:** Episodes 1-3 (Position Embeddings, Multi-Head & Self-Attention, Decoder’s Masked Attention), about 45 minutes — these episodes cover the essential attention mechanisms and positional encoding concepts critical to understanding KV injection and chunked RoPE.

*Why it unblocks this paper:* The 'Transformer Explained and Visualized' playlist by Pak offers clear, visual explanations of transformer attention components, positional embeddings, and decoder masked attention, directly addressing the key concepts underlying the paper's contributions in a concise format.

*If you want all of it:* All 10 episodes, about 2.7 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand InferScale, start with foundational concepts including rotary position embeddings and the transformer attention cache, which underpin the novel chunked RoPE and KV injection techniques. Then explore GPU-native vector indexing to grasp the efficient retrieval mechanisms. Finally, focus on the core concept of InferScale itself, prioritizing the authors' own talk to gain direct insights into their system design and contributions.

### rotary position embeddings *(prerequisite)*
Rotary position embeddings (RoPE) are a fundamental positional encoding technique used in modern large language models. Understanding RoPE is critical because InferScale's chunked RoPE method builds on this to enable position-independent KV reuse, a key innovation for efficient personalized LLM serving.

*How the paper uses it:* Chunked RoPE enables position-independent KV reuse by storing keys before rotary position encoding and applying rotations at injection time.

▶ [Rotary Positional Embeddings: Combining Absolute and Relative](https://www.youtube.com/watch?v=o29P0Kpobz0) — Efficient NLP · 3y ago

### transformer attention cache *(prerequisite)*
The transformer attention cache stores key-value states during model inference to avoid recomputing attention over past tokens. Understanding how this cache works is essential to grasp how InferScale injects precomputed KV states directly into the model at serving time, bypassing repeated prompt prefilling.

*How the paper uses it:* InferScale injects KV states directly into the model's attention cache to reduce latency and improve throughput.

▶ [The KV Cache: Memory Usage in Transformers](https://www.youtube.com/watch?v=80bIUggRJf4) — Efficient NLP · 3y ago

### GPU-native vector indexing *(prerequisite)*
GPU-native vector indexing enables fast semantic retrieval of memory facts directly on the GPU, which is crucial for InferScale's efficient retrieval and KV storage. Understanding this technology provides insight into how InferScale achieves low latency and high throughput in personalized LLM serving.

*How the paper uses it:* InferScale uses a GPU-native vector index (Jasper) for semantic retrieval and stores KV representations on the GPU.

▶ [GPU Acceleration and Auto-Optimization for vector indexing in Amazon OpenSearch Service](https://www.youtube.com/watch?v=Q8_t9BsafNk) — Amazon OpenSearch Service · 23:18 · 8mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand InferScale, start by learning about rotary position embeddings, a key positional encoding method used in the paper. Next, grasp the transformer attention cache concept to see how KV states are stored and reused. Then, explore GPU-native vector indexing to understand efficient retrieval and storage on GPUs. Finally, dive into KV injection in transformers, the core method that replaces prompt injection to reduce latency and improve throughput in personalized LLM serving.

### rotary position embeddings *(prerequisite)*
Rotary position embeddings (RoPE) encode positional information in transformer models by rotating query and key vectors, enabling the model to understand token order. This method combines absolute and relative positional information and is more robust for longer sequences than traditional embeddings.

*How the paper uses it:* InferScale uses chunked RoPE to enable position-independent KV reuse, a fundamental innovation for efficient memory injection.

▶ [Rotary Positional Embeddings: Combining Absolute and Relative](https://www.youtube.com/watch?v=o29P0Kpobz0) — Efficient NLP · 3y ago

### transformer attention cache *(prerequisite)*
The transformer attention cache stores key and value vectors computed from previous tokens to avoid recomputing attention for the entire sequence during generation. This cache is critical for efficient autoregressive decoding and enables incremental token generation.

*How the paper uses it:* InferScale injects precomputed KV states directly into the attention cache to avoid repeated prefill computation and reduce latency.

▶ [The KV Cache: Memory Usage in Transformers](https://www.youtube.com/watch?v=80bIUggRJf4) — Efficient NLP · 3y ago

### GPU-native vector indexing *(prerequisite)*
GPU-native vector indexing accelerates similarity search by storing and querying high-dimensional vectors directly on GPUs, enabling fast semantic retrieval. This is essential for large-scale, low-latency retrieval in modern AI systems.

*How the paper uses it:* InferScale uses a GPU-native vector index (Jasper) for semantic retrieval and KV storage, enabling efficient memory reuse on GPUs.

▶ [GPU Acceleration and Auto-Optimization for vector indexing in Amazon OpenSearch Service](https://www.youtube.com/watch?v=Q8_t9BsafNk) — Amazon OpenSearch Service · 23:18 · 8mo ago

### KV injection in transformers
KV injection is a method where precomputed key-value pairs representing context are directly inserted into the transformer's attention cache, bypassing the need to re-encode prompt tokens. This reduces latency and improves throughput while preserving model output equivalence.

*How the paper uses it:* KV injection replaces prompt injection in InferScale, enabling constant-time latency regardless of memory size and improving personalized LLM serving efficiency.

▶ [Why the name Query, Key and Value? Self-Attention in Transformers | Part 4](https://www.youtube.com/watch?v=viCl2T7vx64) — Learn With Jay · 1y ago

### retrieval augmented generation systems
Retrieval augmented generation (RAG) systems combine external knowledge retrieval with language model generation to improve accuracy and grounding. Understanding RAG provides context for why efficient memory retrieval and injection matter.

*How the paper uses it:* InferScale improves upon traditional RAG methods by injecting KV states instead of prompt tokens, reducing latency.

▶ [Introduction to RAG (Retrieval Augmented Generation) | Deep Learning](https://www.youtube.com/watch?v=cXcgyzuljyY) — Gate Smashers · 9:04 · 2mo ago

## Already in your library

- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [I Visualised Attention in Transformers](https://www.youtube.com/watch?v=RNF0FvRjGZk) — also for: Cross-Image Attention for Zero-Shot Appearance Transfer (Hadar Averbuch-Elor)
- [What is Attention Mechanisms in Transformers? (Explained Visually)](https://www.youtube.com/watch?v=LudWfvu3ong) — also for: In-Context Algebra (David Bau)
- [How Attention Mechanism Works in Transformer Architecture](https://www.youtube.com/watch?v=KMHkbXzHn7s) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Lecture 12: RAG Explained - Retrieval Augmented Generation ...](https://www.youtube.com/watch?v=D2K9bStG-cU) — also for: LabSafety Bench: Benchmarking LLMs on Safety Issues in Scientific Labs (Xiangliang Zhang)
- [RAG Explained For Beginners](https://www.youtube.com/watch?v=_HQ2H_0Ayy0) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning ladder to demonstrate your understanding of InferScale's key ideas. The beginner project focuses on reproducing the core concept of KV injection equivalence to prompt injection in a minimal transformer setup. The intermediate project implements a simplified KV injection pipeline with chunked RoPE on a public transformer model and compares latency and accuracy against prompt injection. The advanced project extends InferScale's context-window encoding to improve accuracy by experimenting with larger or adaptive context windows, addressing one of the paper's stated limitations.

### Beginner — KV Injection Equivalence Demo in a Small Transformer
*Effort: a weekend, ~8 hours*

You build a minimal causal decoder transformer in PyTorch or JAX and implement both prompt injection and KV injection for a small fixed memory context. You verify that the output distributions match exactly for both methods, demonstrating the equivalence theorem from the paper.

**Why it shows you understood the paper:** This project shows you understand the fundamental theoretical contribution that KV injection is exactly equivalent to prompt injection for causal decoder transformers, a core insight of InferScale.

**Grounded in:** Demonstration that KV injection is exactly equivalent to prompt injection for causal decoder transformers, preserving output distributions without approximation.

**Tech stack:** Python 3.11, PyTorch or JAX, NumPy

**Data:** Synthetic small token sequences and memory facts generated by you to simulate prompt and KV inputs.

**Build it:**

1. Implement a small causal decoder transformer model with rotary position embeddings.
2. Implement prompt injection by concatenating retrieved memory tokens to the prompt.
3. Implement KV injection by precomputing keys and values for memory tokens and injecting them into the attention cache.
4. Run inference on identical queries with both methods and compare output token probabilities to verify equivalence.
5. Document the code and results with plots or tables showing matching outputs.

**Ships as:** A GitHub repo with code demonstrating KV vs prompt injection equivalence on a toy transformer, including scripts, tests, and a README explaining the equivalence.

**Stretch goal:** Add visualization of attention maps to show identical attention patterns under both injection methods.

### Intermediate — Simplified KV Injection Pipeline with Chunked RoPE
*Effort: 2 weekends, ~20 hours*

You reimplement the core KV injection method with chunked rotary position embeddings on a public causal decoder transformer (e.g., Mistral-7B-Instruct-v0.3). You build a retrieval simulation that precomputes KV states offline and injects them at serving time, comparing latency and output accuracy against naive prompt injection.

**Why it shows you understood the paper:** This project demonstrates practical understanding of InferScale's core method, including chunked RoPE for position-independent KV reuse and the latency benefits of KV injection over prompt injection.

**Grounded in:** Introduction of chunked RoPE, a method to store keys before rotary position encoding and apply position rotations at injection time, enabling position-independent KV reuse.

**Tech stack:** Python 3.11, PyTorch, Hugging Face Transformers, NumPy, Docker

**Data:** Use the Mistral-7B-Instruct-v0.3 model from Hugging Face as a substitute for the paper's Llama-3.1-8B model; synthetic or publicly available conversation histories to simulate memory facts.

**Build it:**

1. Set up the Mistral-7B-Instruct-v0.3 model and tokenizer from Hugging Face.
2. Implement offline KV encoding of memory facts, storing keys before rotary position encoding.
3. Implement chunked RoPE to apply position rotations at injection time for KV reuse.
4. Build a simple retrieval simulation that selects relevant KV chunks for injection.
5. Implement prompt injection baseline by concatenating memory tokens to the prompt.
6. Measure and compare time-to-first-token latency and output similarity between KV injection and prompt injection.
7. Document results with latency and accuracy metrics.

**Verified links from the paper:**

- <https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing KV injection with chunked RoPE on a public model, latency benchmarks against prompt injection, and a detailed README.

**Stretch goal:** Add context-window encoding by including preceding conversation turns in offline KV encoding to improve accuracy.

### Advanced — Adaptive Context-Window Encoding for Improved KV Injection Accuracy
*Effort: 3+ weeks*

You extend the KV injection pipeline by implementing adaptive context-window encoding that dynamically adjusts the size of preceding conversation turns included during offline KV encoding. You evaluate the impact on accuracy and latency, aiming to close the accuracy gap with prompt injection while managing computational overhead.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of context-window encoding's role in accuracy and the trade-offs involved in personalized LLM serving.

**Grounded in:** Exploring larger or adaptive context windows to further close the accuracy gap with prompt injection.

**Tech stack:** Python 3.11, PyTorch, Hugging Face Transformers, NumPy, Docker, Matplotlib

**Data:** Use the Mistral-7B-Instruct-v0.3 model from Hugging Face; simulate conversation histories with varying lengths and complexity to test adaptive context windows.

**Build it:**

1. Build on the intermediate KV injection pipeline with chunked RoPE.
2. Implement context-window encoding that encodes each memory fact with a window of preceding conversation turns.
3. Develop an adaptive mechanism to vary the context window size based on conversation characteristics or retrieval budget.
4. Evaluate accuracy improvements over fixed small context windows and baseline prompt injection.
5. Measure latency and throughput trade-offs introduced by larger or adaptive windows.
6. Document findings with quantitative metrics and qualitative analysis.

**Verified links from the paper:**

- <https://huggingface.co/mistralai/Mistral-7B-Instruct-v0.3> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo demonstrating adaptive context-window encoding for KV injection, with evaluation scripts, results, and a comprehensive README discussing trade-offs and insights.

**Stretch goal:** Experiment with integrating the KV injection pipeline into a retrieval-augmented generation framework to explore end-to-end personalized LLM serving.

_The authors released no code for InferScale itself; the intermediate and advanced projects rely on reimplementing core methods from the paper and using the Mistral-7B-Instruct-v0.3 model from Hugging Face as a substitute for the paper's Llama-3.1-8B model._
