---
title: "1006 · Enabling Homomorphic Analytical Operations on Compressed Scientific Data with Multi-stage Decompression — Xin Liang"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-xin-liang"
source_hash: "0db9c07c7ed9b3f3fe38be8387eb7fba01ce720b28559a246086745cc4407a45"
sequence: 1006
generator: "outreach-garden: managed"
---

# 1006 · Enabling Homomorphic Analytical Operations on Compressed Scientific Data with Multi-stage Decompression

## At a glance

- **Professor:** Xin Liang
- **Institution:** Oregon State University
- **Paper:** [Enabling Homomorphic Analytical Operations on Compressed Scientific Data with Multi-stage Decompression](https://arxiv.org/pdf/2603.25206)
- **Authors:** Xuan Wu, Sheng Di, Tripti Agarwal, Kai Zhao, Xin Liang, Franck Cappello
- **Year:** 2026

## Paper overview

This paper presents HSZ, a novel framework that allows scientific data compressed with error-controlled lossy compressors to be partially decompressed in multiple stages. It enables direct analytical operations on intermediate decompressed data without needing full decompression, significantly reducing data access latency. The framework adapts two high-throughput compressors (SZp and SZx) and supports various scientific analytical operations such as statistical computations, numerical differentiation, and multivariate derivation. Experimental results show substantial speedups in performing these operations on compressed data while maintaining error bounds.

### Why it matters

**Research problem:** Scientific applications generate massive floating-point datasets that require compression to manage storage and transmission. However, decompression overhead often dominates the time for analytical operations on the data, especially when these operations are computationally cheaper than full decompression. Existing homomorphic compression techniques for text data do not extend well to floating-point scientific data due to complex compression pipelines and diverse analytical operations. The problem is to design a compression and analytical framework that enables efficient analytical operations on compressed scientific data with guaranteed error control and reduced latency.

**Why it matters:** Scientific simulations produce data at scales that overwhelm storage and I/O capabilities, making compression essential. Yet, the decompression overhead limits the efficiency of post-processing and analysis, which are critical for scientific insights. Reducing the latency of analytical operations on compressed data can accelerate scientific discovery and reduce computational resource usage.

**Key contributions:**

- Design of a generic compression pipeline with multi-stage partial decompression producing four intermediate data representations.
- Adaptation of SZp and SZx compressors and their multidimensional variants to support multi-stage decompression.
- Development of homomorphic algorithms enabling analytical operations directly on intermediate decompressed data for three categories of scientific analytics.
- Implementation of four new compressors (HSZp, HSZp-nd, HSZx, HSZx-nd) within the HSZ framework.
- Comprehensive evaluation on five real-world scientific datasets demonstrating significant speedups in analytical operation throughput.

## About the professor

**Xin Liang** — Associate Professor, School of Electrical Engineering and Computer Science, Oregon State University.

Research interests: Parallel, distributed, and heterogeneous systems. Data management, reduction, refactoring, and streaming. Scientific visualization and data analytics. Large-scale machine learning and deep learning. Cloud and edge computing. Fault tolerant mechanics, algorithms, and implementations. Linear algebra and numerical algorithms.

### Research links

- [Faculty/profile page](https://lxaltria.github.io)
- [Google Scholar](https://scholar.google.com/citations?user=QRj1QroAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Error-controlled lossy compression
**The paper assumes:** error-controlled lossy compression algorithms, floating-point data compression, compression error bounds
**Already in this field?** Skip this entirely if you already understand the theory and practice of error-controlled lossy compression for scientific floating-point data.

To understand the foundations of error-controlled lossy compression crucial for this paper, these two background options provide complementary learning paths. The rigorous course offers a deep, structured dive into data compression theory and applications, ideal for readers seeking thorough mastery. The fast track is a concise playlist of clear, focused explainers that quickly build intuition and cover key concepts, suitable for readers needing a practical overview without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE274 I Data Compression: Theory and Applications I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rPj4uhbgUAaEKwNNak8xgkz) — Stanford Online

**Watch only this:** Watch the first 6 lectures covering fundamentals of lossy compression, quantization, and error control — approximately 4 hours total. This subset covers the core concepts needed to understand error bounds and compression pipelines relevant to HSZ.

*Why it unblocks this paper:* Stanford EE274 is a university-level course on data compression theory and applications, providing rigorous coverage of lossy compression principles that underpin the SZp and SZx compressors adapted in this paper.

*If you want all of it:* The full course playlist duration is approximately 20+ hours (exact total not specified).

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Compression Algorithms](https://www.youtube.com/playlist?list=PLccgyJkIeFcAu4n8IRWZMEgflOTNIExpB) — Leohang Rai · 13 videos

**Watch only this:** Watch episodes 1 through 5, which cover basic compression concepts, lossy compression, and error control — about 1.5 hours total. This subset gives a practical overview sufficient to grasp the paper's compression context.

*Why it unblocks this paper:* Leohang Rai's 'Compression Algorithms' playlist offers concise, well-explained videos on compression fundamentals, including lossy compression and error control, providing a quick yet solid conceptual grounding for the paper's compression techniques.

*If you want all of it:* The full playlist has 13 episodes, roughly 4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Enabling Homomorphic Analytical Operations on Compressed Scientific Data with Multi-stage Decompression,' start with foundational knowledge on error-controlled lossy compression techniques and homomorphic computation on compressed data, as these underpin the framework's design. Then, focus on the core concept of the HSZ framework itself, prioritizing any direct talks by the authors or closely related academic presentations that explain multi-stage decompression and homomorphic analytics on scientific data.

### Error-controlled lossy compression lecture *(prerequisite)*
This section covers the fundamental compression techniques that enable error bounds in lossy compression, which are critical to understanding how HSZ maintains scientific fidelity while compressing data. The chosen lecture provides an academic-level treatment of error-bounded lossy floating-point data compression relevant to scientific datasets.

*How the paper uses it:* HSZ builds upon error-controlled lossy compressors SZp and SZx to guarantee error bounds during compression and decompression.

▶ [The Case for Error-Bounded Lossy Floating-Point Data Compression on Interconnection Networks](https://www.youtube.com/watch?v=RVXHo8_Q388) — Computer Science & IT Conference Proceedings · 18:05 · 5y ago

### Homomorphic computation on compressed data seminar *(prerequisite)*
Understanding homomorphic computation principles is essential to grasp how HSZ performs analytical operations directly on compressed or partially decompressed data without full decompression. The selected seminar provides a rigorous academic overview of homomorphic encryption and computation concepts, foundational for the paper's homomorphic algorithms.

*How the paper uses it:* HSZ develops homomorphic algorithms that operate on intermediate decompressed data representations to accelerate analytics.

▶ [Stanford EE274: Data Compression I 2023 I Lecture 7 - ANS](https://www.youtube.com/watch?v=5Hp4bnvSjng) — Stanford Online · 1:20:03 · 2y ago

### HSZ framework talk *(paper-talk search result; attribution unverified)*
The core concept is the HSZ framework itself, which enables homomorphic analytical operations on compressed scientific data via multi-stage decompression. While no direct author talk on HSZ was found, related academic talks on homomorphic encryption provide some conceptual background but are not specific to HSZ. Given the lack of a direct paper talk, the best available is a rigorous academic talk on homomorphic encryption from a reputable research institute.

*How the paper uses it:* This concept directly addresses the paper's novel framework and its homomorphic analytical operations on compressed data.

▶ [Practical Applications of Homomorphic Encryption](https://www.youtube.com/watch?v=YLbED9OexOY) — Simons Institute for the Theory of Computing · 54:25 · Streamed 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the HSZ framework for homomorphic analytical operations on compressed scientific data. It starts with error-controlled lossy compression basics, then covers homomorphic computation principles on compressed data, followed by the multi-stage decompression pipeline concept. Finally, it focuses on the core HSZ framework enabling analytics on intermediate decompressed data. This order builds intuition progressively from compression fundamentals to the paper's novel contributions.

### Error-controlled lossy compression lecture *(prerequisite)*
Learn the basics of lossy compression techniques that allow data size reduction with controlled error bounds. Understanding how floating-point scientific data can be compressed while guaranteeing error limits is essential to grasp how HSZ maintains scientific fidelity during partial decompression.

*How the paper uses it:* HSZ builds on error-controlled lossy compressors SZp and SZx to enable partial decompression with guaranteed error bounds.

▶ [The Case for Error-Bounded Lossy Floating-Point Data Compression on Interconnection Networks](https://www.youtube.com/watch?v=RVXHo8_Q388) — Computer Science & IT Conference Proceedings · 18:05 · 5y ago

### Homomorphic computation on compressed data seminar *(prerequisite)*
This concept explains how computations can be performed directly on compressed or encrypted data without full decompression, preserving privacy or efficiency. It introduces the intuition behind homomorphic operations that HSZ adapts for scientific data analytics.

*How the paper uses it:* HSZ develops homomorphic algorithms that operate on intermediate decompressed data representations to perform analytics without full decompression.

▶ [What Is Homomorphic Encryption? Full, Partial, and Somewhat Explained](https://www.youtube.com/watch?v=xaOuBG9cT1I) — onlyTech R&D · 5:19 · 9mo ago

## Already in your library

- [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — also for: Leveraging ASIC AI Chips for Homomorphic Encryption (Tushar Krishna)
- [Deep Dive into Homomorphic Encryption - THR3001](https://www.youtube.com/watch?v=JM0bJoCRp0I) — also for: BVOT: Self-Tallying Boardroom Voting with Oblivious Transfer (Alan T. Sherman)
- [What is Homomorphic Encryption Explained | Paillier Cryptosystem | PHE | SHE | FHE](https://www.youtube.com/watch?v=7IUS-ixypos) — also for: Revisiting ML Training under Fully Homomorphic Encryption: Convergence Guarantees, Differential Privacy, and Efficient Algorithms (Dana Dachman-Soled)
- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [Why Fully Homomorphic Encryption Is the Future of Private Computing](https://www.youtube.com/watch?v=RgzeESzBa4Y) — also for: Efficient Privacy-Preserving Sparse Matrix-Vector Multiplication Using Homomorphic Encryption (Wujie Wen)
- [Homomorphic Encryption Explained](https://www.youtube.com/watch?v=hroyj8R8h60) — also for: Verifiable Sustainability in Data Centers (Kanad Ghose)
- [Introduction to CKKS (Approximate Homomorphic Encryption)](https://www.youtube.com/watch?v=iQlgeL64vfo) — also for: Application-Aware Approximate Homomorphic Encryption: Configuring FHE for Practical Use (Daniele Micciancio)
- [The CKKS (a.k.a. HEAAN) FHE Scheme](https://www.youtube.com/watch?v=LNbGeaWKzpI) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [Fully Homomorphic Encryption](https://www.youtube.com/watch?v=O8IvJAIvGJo) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Introduction to Practical FHE and the TFHE Scheme](https://www.youtube.com/watch?v=28XlccZgiUM) — also for: Optimizing Encrypted Neural Networks: Model Design, Quantization and Fine-Tuning Using FHEW/TFHE (Feng-Hao Liu)
- [Multi-Head Attention Explained Visually | Simple Transformer Guide](https://www.youtube.com/watch?v=42L1q1Z4Ojc) — also for: QSVD: Efficient Low-rank Approximation for Unified Query-Key-Value Weight Compression in Low-Precision Vision-Language Models (Sai Qian Zhang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and demonstrate the core ideas of the HSZ framework from the paper. Starting with a small-scale reproduction of multi-stage decompression and homomorphic mean computation, you then implement and benchmark the core HSZ method on a scientific dataset using the authors' released code. Finally, you extend the framework to address a stated limitation by adding support for a new analytical operation or compressor type, showing deeper mastery and innovation.

### Beginner — Multi-stage Decompression and Homomorphic Mean on Synthetic Data
*Effort: a weekend, ~8 hours*

You build a small Python prototype that simulates the multi-stage decompression pipeline described in the paper and implements a homomorphic algorithm to compute the mean directly on intermediate decompressed data (e.g., quantized data stage). This reproduces the key mechanism that enables analytical operations without full decompression.

**Why it shows you understood the paper:** This project demonstrates you understand the core concept of multi-stage decompression and how homomorphic operations can be applied at intermediate stages to reduce latency, a central contribution of the paper.

**Grounded in:** Design of a generic compression pipeline with multi-stage partial decompression producing four intermediate data representations; Development of homomorphic algorithms enabling analytical operations directly on intermediate decompressed data for statistical computations.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic floating-point data generated to mimic scientific data distributions, since no public dataset is provided for this purpose.

**Build it:**

1. Implement a simple multi-stage decompression simulation that produces metadata, decorrelated data, quantized data, and fully decompressed data from synthetic input.
2. Implement a homomorphic mean computation algorithm that operates directly on the quantized data stage without full decompression.
3. Compare the homomorphic mean result with the mean computed on fully decompressed data to verify error bounds.
4. Visualize the error and runtime differences between full decompression and partial decompression with homomorphic mean.
5. Document the pipeline stages and homomorphic operation in the README.

**Ships as:** A Python repository with scripts demonstrating multi-stage decompression simulation and homomorphic mean computation on synthetic data, including plots of accuracy and runtime comparison.

**Stretch goal:** Add homomorphic standard deviation computation on intermediate data to extend statistical analytics.

### Intermediate — HSZ Framework Evaluation on Real Scientific Data
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' HSZ framework implementation from https://github.com/xuanwu02/homoApplication, apply it to a publicly available scientific floating-point dataset (e.g., a climate or physics simulation dataset), and reproduce key performance metrics such as speedup in mean computation and numerical differentiation compared to full decompression.

**Why it shows you understood the paper:** This project shows you can work with the authors' codebase, understand the multi-stage decompression pipeline, and evaluate homomorphic analytical operations on real data, validating the paper's claims about throughput and error bounds.

**Grounded in:** Comprehensive evaluation on five real-world scientific datasets demonstrating significant speedups in analytical operation throughput; HSZ achieves up to 7315× speedup in statistical computations (mean) on compressed scientific data compared to state-of-the-art baselines.

**Tech stack:** Python 3.11, C++ (if needed by HSZ code), Docker (optional for environment setup)

**Data:** A publicly available scientific floating-point dataset such as a climate simulation dataset from a known repository (e.g., CMIP datasets) used as a substitute for the paper's datasets.

**Build it:**

1. Clone the HSZ framework repository from https://github.com/xuanwu02/homoApplication and set up the environment.
2. Obtain a suitable scientific floating-point dataset and preprocess it as required by the HSZ framework.
3. Run HSZ compressors (HSZp, HSZx) to compress the dataset and perform multi-stage decompression.
4. Execute homomorphic analytical operations (mean, numerical differentiation) on intermediate decompressed data.
5. Measure and compare runtime and error metrics against full decompression baseline.
6. Document the setup, results, and insights in the README.

**Verified links from the paper:**

- <https://github.com/xuanwu02/homoApplication> — released by the paper's authors

**Ships as:** A GitHub repo with scripts and instructions to reproduce HSZ framework evaluation on a real scientific dataset, including performance and accuracy reports.

**Stretch goal:** Add comparison with a simple baseline compressor without multi-stage decompression to highlight HSZ advantages.

### Advanced — Extending HSZ with Homomorphic Analytics for Transform-based Compression
*Effort: 3+ weeks*

You develop an extension of the HSZ framework to support homomorphic analytical operations on intermediate decompressed data produced by a transform-based compressor (e.g., wavelet or DCT-based lossy compression). This addresses a key limitation noted in the paper and involves designing new homomorphic algorithms and integrating them into the multi-stage decompression pipeline.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the HSZ framework's architecture and limitations, the ability to innovate by extending it to new compressor types, and skill in algorithm design and system integration.

**Grounded in:** The framework currently focuses on SZp and SZx compressors with prediction-based pipelines; extension to transform-based compressors requires new homomorphic algorithms; future direction: Extending homomorphic analytical operations to more advanced scientific data compressors, including transform-based methods.

**Tech stack:** Python 3.11, C++, Docker, Git

**Data:** Use the same scientific floating-point dataset as in the intermediate project or a similar publicly available dataset.

**Build it:**

1. Study the HSZ framework codebase and understand how multi-stage decompression and homomorphic operations are implemented for SZp and SZx compressors.
2. Select a transform-based compressor (e.g., a simple wavelet-based lossy compressor) and implement a multi-stage decompression pipeline producing intermediate data representations.
3. Design and implement homomorphic algorithms for at least one analytical operation (e.g., mean or numerical differentiation) on the intermediate decompressed data from the transform-based compressor.
4. Integrate the new compressor and homomorphic operations into the HSZ framework structure.
5. Evaluate the extended framework on the chosen dataset, measuring throughput and error bounds compared to full decompression.
6. Document the design decisions, implementation details, evaluation results, and limitations.

**Verified links from the paper:**

- <https://github.com/xuanwu02/homoApplication> — released by the paper's authors

**Ships as:** A GitHub repository containing the extended HSZ framework with transform-based compressor support and homomorphic analytical operations, along with evaluation scripts and documentation.

**Stretch goal:** Implement adaptive stage-selection strategies to optimize decompression stage choice based on the analytical operation and dataset characteristics.

_The intermediate and advanced projects assume the applicant can adapt the authors' HSZ codebase and that a suitable public scientific floating-point dataset is available as a substitute for the paper's proprietary datasets._
