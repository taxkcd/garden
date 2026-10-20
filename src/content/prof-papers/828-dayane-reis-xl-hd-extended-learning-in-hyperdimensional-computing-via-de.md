---
title: "828 · XL-HD: Extended Learning in Hyperdimensional Computing via Deterministic Projections for In-Memory Accelerators — Dayane Reis"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dayane-reis"
source_hash: "d0cf1514861e2fab686d10bc9a5cf0d16dca44fe95ec8b14056af37672f5a810"
sequence: 828
generator: "outreach-garden: managed"
---

# 828 · XL-HD: Extended Learning in Hyperdimensional Computing via Deterministic Projections for In-Memory Accelerators

## At a glance

- **Professor:** Dayane Reis
- **Institution:** University of South Florida
- **Paper:** [XL-HD: Extended Learning in Hyperdimensional Computing via Deterministic Projections for In-Memory Accelerators](https://arxiv.org/pdf/2605.24788)
- **Authors:** Sabrina Hassan Moon, Abu Kaisar, Mohammad Masum, Sercan Aygun, Dayane Reis
- **Year:** 2026

## Paper overview

This paper presents XL-HD, a new framework for hyperdimensional computing (HDC) that uses deterministic projections based on Sobol sequences to improve energy efficiency and accuracy for edge machine learning. It is designed to run efficiently on in-memory computing hardware, specifically ReRAM crossbars, enabling fast, low-power inference suitable for devices with tight resource constraints.

### Why it matters

**Research problem:** Traditional hyperdimensional computing relies on pseudo-random high-dimensional vectors and symbolic binding, which require large vector dimensionality and heuristic updates to achieve competitive accuracy. This results in high hardware cost and energy consumption, limiting deployment on edge devices with strict latency, power, and memory constraints.

**Why it matters:** Edge devices are proliferating rapidly and require machine learning models that are lightweight, fast, and energy-efficient. Conventional deep learning models are often too computationally and memory intensive for such environments. HDC offers a promising alternative but faces challenges in scalability and hardware efficiency, which must be addressed to enable practical edge AI applications.

**Key contributions:**

- Proposed XL-HD, a deterministic HDC pipeline using Sobol-based binary mappings to streamline encoding and eliminate symbolic binding overhead.
- Introduced in-situ binarization of encoded query hypervectors and designed ReRAM-based IMC hardware for fully binary inference within crossbar arrays.
- Developed a complete end-to-end in-memory inference flow achieving single-cycle throughput, sub-microjoule inference energy, and a compact 0.395 mm² area footprint.

## About the professor

**Dayane Reis** — Assistant Professor, Artificial Intelligence, Cybersecurity and Computing, University of South Florida.

Research interests: VLSI, Low Power Design, AI Accelerators, Emerging Technologies, Hardware Security

### Research links

- [Faculty/profile page](https://www.usf.edu/ai-cybersecurity-computing/people/faculty/reis-dayane.aspx)
- [Professor website](https://aced-lab.netlify.app/)
- [Resolved homepage](https://aced-lab.netlify.app)
- [Google Scholar](https://scholar.google.com/citations?user=851PpGgAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hyperdimensional Computing
**The paper assumes:** hyperdimensional computing theory, high-dimensional vector encoding, symbolic binding in HDC, prototype-based classification
**Already in this field?** Skip this entirely if you already understand the fundamentals of hyperdimensional computing, including vector encoding and binding operations.

This background focuses on hyperdimensional computing (HDC), the core computational paradigm used in the XL-HD paper for efficient encoding and classification with high-dimensional binary vectors. The rigorous course option provides a deep, structured understanding of linear algebra foundations and vector symbolic architectures essential for grasping HDC principles, while the fast track offers a concise, intuition-driven introduction to HDC and related concepts for quicker comprehension. Choose the lane that fits your available time and depth needs; the fast track is a focused primer, not a watered-down version.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Senior Design Playlist](https://www.youtube.com/playlist?list=PLT2zBcpLG9dE) — Insidious Rock · 19 videos · 0.5h across 19 episodes

**Watch only this:** Watch episodes 17-19, about 30 minutes total — 'EEG (Electroencephalogram) Explained', '🎙️Hyperdimensional Computing for Robust Edge AI', and 'An Introduction to Vector Symbolic Architectures (VSA) and Hyperdimensional Computing (HDC)'.

*Why it unblocks this paper:* Although from the same playlist, the last three episodes specifically focus on hyperdimensional computing and vector symbolic architectures, offering a concise and targeted introduction to the core concepts relevant for understanding XL-HD without the full linear algebra background.

*If you want all of it:* Same as minimum watch, 30 minutes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the XL-HD paper, start with foundational knowledge on ReRAM in-memory computing architectures and low-discrepancy Sobol sequences, as these underpin the hardware and deterministic projection methods used. Then, build a solid grasp of hyperdimensional computing fundamentals and binary vector encoding/binding in HDC to appreciate the computational model. Finally, focus on the core concept of deterministic projections in HDC and the authors' own talk to directly learn about the novel XL-HD framework and its hardware implementation.

### ReRAM in-memory computing architectures *(prerequisite)*
Understanding ReRAM-based in-memory computing is crucial because XL-HD maps its entire inference pipeline onto ReRAM crossbar arrays to achieve single-cycle, low-energy binary inference. The selected lecture and seminar videos provide detailed insights into ReRAM device physics, modeling, and architectural design for compute-in-memory accelerators, which form the hardware foundation of XL-HD.

*How the paper uses it:* XL-HD leverages ReRAM crossbar arrays for efficient in-memory binary inference.

▶ [\[REFAI Seminar 11/20/25\] Efficient RRAM-eDRAM Compute-In-Memory Accelerators for Transformers](https://www.youtube.com/watch?v=G5_kQrCTcNw) — Rutgers Efficient AI Seminar · 1:11:05 · 10mo ago

### Low-discrepancy Sobol sequences *(prerequisite)*
Sobol sequences are mathematical constructs used for deterministic, low-discrepancy sampling, which XL-HD employs to generate binary hypervectors with improved uniformity and encoding efficiency. The selected videos explain the theory and practical differences of Sobol sequences, providing the mathematical background necessary to understand XL-HD's deterministic projection approach.

*How the paper uses it:* XL-HD uses Sobol low-discrepancy sequences for deterministic hypervector generation.

▶ [Difference between Standard and Scrambled Sobol Sequences](https://www.youtube.com/watch?v=TmrobpYC8Bs) — Sergei Kucherenko · 5y ago

### Hyperdimensional computing fundamentals *(prerequisite)*
A solid understanding of hyperdimensional computing (HDC) fundamentals is essential to grasp how data is represented and manipulated as high-dimensional vectors for robust and efficient learning. The chosen Stanford seminar offers a rigorous, research-level introduction to HDC, covering foundational concepts that XL-HD builds upon and optimizes.

*How the paper uses it:* XL-HD is an advancement of the hyperdimensional computing paradigm.

▶ [Stanford Seminar - Computing with High-Dimensional Vectors](https://www.youtube.com/watch?v=zUCoxhExe0o) — Stanford Online · 59:10 · 8y ago

### Binary vector encoding and binding in HDC *(prerequisite)*
Binary vector encoding and symbolic binding are key operations in traditional HDC, which XL-HD replaces or optimizes to reduce hardware cost and energy consumption. The selected seminar talk provides an advanced discussion on these operations within HDC, enabling comprehension of the improvements XL-HD introduces.

*How the paper uses it:* XL-HD eliminates symbolic binding overhead by using deterministic binary mappings.

▶ [Random High-Dimensional Binary Vectors, Kernel Methods, & Hyperdimensional Computing – N. Marshall](https://www.youtube.com/watch?v=WUEb9YVas84) — UMN School of Mathematics · 2y ago

### Hyperdimensional computing deterministic projections
This concept is central to XL-HD's contribution, as it replaces pseudo-random vector generation with deterministic Sobol sequence-based projections to improve encoding efficiency and accuracy. The selected recent workshop talk on learned projections in HDC provides a focused, research-level perspective on deterministic projection methods relevant to XL-HD.

*How the paper uses it:* XL-HD's core novelty is its deterministic projection mechanism for HDC encoding.

▶ [PIONEER: Highly Efficient and Accurate Hyperdimensional Computing using Learned Projection](https://www.youtube.com/watch?v=1804-xQjdn8) — Fatemeh Asgarinejad · 24:25 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the XL-HD paper, start by learning the fundamentals of hyperdimensional computing (HDC), which explains how data can be represented and manipulated as high-dimensional vectors. Next, explore ReRAM-based in-memory computing architectures that enable efficient hardware implementations of HDC. Then, grasp the concept of low-discrepancy Sobol sequences, which are used in XL-HD to generate deterministic binary vectors improving encoding efficiency. Finally, study the core method of deterministic projections in HDC as applied in XL-HD to replace pseudo-random vectors and optimize inference.

### Hyperdimensional computing fundamentals *(prerequisite)*
Hyperdimensional computing represents data as very high-dimensional vectors, enabling robust and efficient learning and reasoning. This approach uses operations like binding and bundling on these vectors to encode and manipulate information in a way inspired by brain-like computation.

*How the paper uses it:* XL-HD builds on HDC principles by improving vector encoding and inference efficiency.

▶ [Super Basic Intro To Hyperdimensional Computing](https://www.youtube.com/watch?v=rrDTkADbV-8) — Richard Aragon · 1y ago

### ReRAM in-memory computing architectures *(prerequisite)*
ReRAM (Resistive RAM) is an emerging non-volatile memory technology that can perform computation directly within memory arrays, drastically reducing data movement and energy consumption. In-memory computing architectures using ReRAM enable fast, low-power operations critical for edge AI applications.

*How the paper uses it:* XL-HD maps its entire inference pipeline onto ReRAM crossbar arrays to achieve single-cycle, energy-efficient inference.

▶ [What is Resistive RAM?](https://www.youtube.com/watch?v=EYH8SirhnLU) — Zero To ASIC Course · 6:13 · 1y ago

### Low-discrepancy Sobol sequences *(prerequisite)*
Sobol sequences are a type of low-discrepancy sequence that generate points distributed more uniformly than random sampling. This property helps produce deterministic, well-spread vectors that improve encoding uniformity and accuracy in high-dimensional spaces.

*How the paper uses it:* XL-HD uses Sobol sequences to deterministically generate binary hypervectors, replacing pseudo-random vectors for better efficiency and accuracy.

▶ [Difference between Standard and Scrambled Sobol Sequences](https://www.youtube.com/watch?v=TmrobpYC8Bs) — Sergei Kucherenko · 5y ago

### Hyperdimensional computing deterministic projections
Deterministic projections in HDC replace the traditional pseudo-random vector generation with mathematically defined sequences like Sobol, enabling more compact and efficient encoding. This reduces hardware cost and energy while maintaining or improving accuracy.

*How the paper uses it:* The core innovation of XL-HD is its deterministic projection mechanism using Sobol sequences to streamline encoding and eliminate symbolic binding overhead.

▶ [Hyperdimensional Computing for Structured Query on Tabula Data Embeddings](https://www.youtube.com/watch?v=LSyQu8xe7vI) — Tabular Data Analysis (TaDA) Workshop · 11:19 · 3w ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the XL-HD paper. Starting with a beginner-level implementation of deterministic Sobol sequence projections for binary hypervector encoding, you then move to an intermediate-level reimplementation of the core XL-HD inference pipeline on a benchmark dataset, comparing it to a baseline. Finally, the advanced project challenges you to extend XL-HD by exploring on-device or online training capabilities, addressing a key limitation noted in the paper.

### Beginner — Sobol Sequence Binary Encoding for Hyperdimensional Vectors
*Effort: a weekend, ~8 hours*

You implement a deterministic binary encoding of input features using Sobol low-discrepancy sequences, thresholded at 0.5, to generate binary hypervectors. This small project reproduces the core deterministic projection mechanism described in XL-HD, demonstrating how Sobol sequences replace pseudo-random vector generation.

**Why it shows you understood the paper:** This project shows you understand the paper's key innovation of replacing pseudo-random vectors with deterministic Sobol-based projections, a fundamental step that reduces dimensionality and hardware cost.

**Grounded in:** XL-HD introduces a deterministic projection mechanism based on Sobol LD sequences... thresholded at 0.5 to yield a deterministic bipolar encoding.

**Tech stack:** Python 3.11, NumPy, SciPy

**Data:** Synthetic numeric feature vectors generated to simulate small input data (e.g., 10-dimensional vectors).

**Build it:**

1. Implement Sobol sequence generation using SciPy's `scipy.stats.qmc.Sobol` sampler.
2. Generate Sobol vectors matching the input feature dimensionality and target hypervector dimension (e.g., 1024).
3. Apply thresholding at 0.5 to convert Sobol vectors into binary hypervectors.
4. Encode sample synthetic input vectors using the deterministic Sobol projection.
5. Visualize and verify the binary hypervectors' properties (e.g., distribution of bits, reproducibility).

**Ships as:** A Python script and README demonstrating deterministic Sobol-based binary encoding of input vectors, with example outputs and explanation.

**Stretch goal:** Add a comparison to pseudo-random binary vector encoding to illustrate differences in distribution and dimensionality requirements.

### Intermediate — Reimplementation of XL-HD Inference Pipeline on MNIST
*Effort: 2 weekends, ~20 hours*

You reimplement the core XL-HD inference pipeline using deterministic Sobol sequence projections and binary hypervectors on the MNIST dataset. You train class prototypes offline in real-valued space, binarize them, and perform inference by binary dot-product similarity, comparing accuracy and energy-efficiency metrics to a simple baseline HDC model using pseudo-random vectors.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main method end-to-end, reproducing key results on a standard benchmark and validating the benefits of deterministic projections over pseudo-random baselines.

**Grounded in:** XL-HD achieves competitive accuracy on MNIST, UCIHAR, and ISOLET while maintaining a compact IMC-based inference engine.

**Tech stack:** Python 3.11, NumPy, scikit-learn, Matplotlib

**Data:** MNIST dataset accessed via OpenML (https://openml.org/d/554), a standard handwritten digit classification benchmark.

**Build it:**

1. Download and preprocess MNIST dataset from OpenML.
2. Implement deterministic Sobol sequence projection to encode input images into binary hypervectors.
3. Train class prototype hypervectors offline in real-valued space by averaging encoded training samples per class.
4. Binarize class prototypes by thresholding.
5. Implement binary dot-product similarity for inference between query hypervectors and class prototypes.
6. Evaluate classification accuracy and compare against a baseline HDC model using pseudo-random vector encoding.
7. Plot accuracy and inference energy estimates based on operation counts.

**Verified links from the paper:**

- <https://github.com/ACEDLab/XL-HD> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://openml.org/d/554> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python repository with scripts to run XL-HD style inference on MNIST, compare to baseline, and report accuracy and energy metrics with visualizations.

**Stretch goal:** Incorporate simple fault injection (bit errors) to test robustness of deterministic encoding as reported in the paper.

### Advanced — Exploring On-Device Training for XL-HD with Deterministic Projections
*Effort: 3+ weeks*

You extend the XL-HD framework by designing and simulating an on-device or online training mechanism compatible with deterministic Sobol projections and ReRAM-based in-memory computing constraints. This project addresses the paper's limitation of offline training by proposing a method for incremental prototype updates or online learning, evaluating its impact on accuracy and hardware feasibility.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of XL-HD's architecture and challenges in integrating training with in-memory hardware, potentially opening new research avenues.

**Grounded in:** Training is performed offline in software, so the hardware is optimized for inference rather than on-device learning.

**Tech stack:** Python 3.11, NumPy, PyTorch (optional for simulation), Matplotlib

**Data:** MNIST or UCIHAR datasets as benchmarks for incremental learning experiments.

**Build it:**

1. Review XL-HD's offline training and inference pipeline to identify components suitable for online updates.
2. Design an algorithm for incremental updates of class prototypes in real-valued space compatible with deterministic Sobol encoding.
3. Simulate the online training process with streaming data batches from MNIST or UCIHAR.
4. Evaluate classification accuracy over incremental training steps and compare to offline baseline.
5. Analyze the feasibility of implementing the update mechanism in ReRAM-based in-memory hardware considering write overhead and noise.
6. Document challenges, potential hardware adaptations, and propose future hardware/software co-design improvements.

**Verified links from the paper:**

- <https://openml.org/d/554> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive repository with simulation code, evaluation scripts, and a detailed report discussing on-device training feasibility and results.

**Stretch goal:** Prototype a small-scale FPGA or hardware simulation of the in-memory update mechanism to validate practical constraints.

_The authors released no code for this paper; the intermediate project requires reimplementing the core method from the paper's description. The MNIST dataset from OpenML is used as a substitute for the paper's benchmark data._
