---
title: "033 · Machine Learning and Algorithmic Techniques for Error Correction — Anxiao Andrew Jiang"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ajiang"
source_hash: "9aeda0081b573c0095578680381f27dfaec50cba0a5ff41c91851965064f53e2"
sequence: 33
generator: "outreach-garden: managed"
---

# 033 · Machine Learning and Algorithmic Techniques for Error Correction

## At a glance

- **Professor:** Anxiao Andrew Jiang
- **Institution:** Texas A&M University
- **Paper:** [Machine Learning and Algorithmic Techniques for Error Correction](https://people.engr.tamu.edu/ajiang/Publications/2018/ITA_2018.pdf)
- **Authors:** Anxiao (Andrew) Jiang
- **Year:** undated (paper references works up to 2018, likely around 2018-2019)

## Paper overview

This paper studies how to improve error correction in data storage and communication by leveraging the natural redundancy inherent in data such as languages, images, and videos. It proposes a collaborative decoding model combining traditional error-correcting codes with decoders that exploit natural redundancy, analyzes the computational complexity of related problems, and presents approximation and exact algorithms for eliminating stopping sets in LDPC codes to enhance decoding performance.

### Why it matters

**Research problem:** How to effectively use natural redundancy (NR) in data to assist error-correcting codes (ECC) in correcting errors, specifically focusing on the stopping set elimination (SSE) problem in LDPC codes, which involves minimizing the number of erasures corrected by a costly NR-decoder to enable the ECC-decoder to successfully decode the remaining errors.

**Why it matters:** Data storage and communication systems face increasing challenges in ensuring long-term reliability due to exponential data growth and error rates. Utilizing natural redundancy in data can significantly enhance error correction beyond traditional ECC methods, improving data reliability and system performance. The SSE problem is fundamental to optimizing this collaborative decoding approach, but it is computationally hard, necessitating efficient algorithms.

**Key contributions:**

- Formulation of the stopping set elimination (SSE) problem for collaborative ECC and NR decoding.
- Proof that the SSE problem and its variant with iteration constraints (SSE1) are NP-hard.
- Development of an approximation algorithm for SSE1 with approximation ratio dv(dc - 1).
- Exact linear-time algorithms for SSE∞ and SSEk problems when the stopping graph is a tree.
- Extension of algorithms and analysis to p-cyclic stopping graphs with bounded cycles.

## About the professor

**Anxiao Andrew Jiang** — Professor of Computer Science and Engineering, Professor of Electrical and Computer Engineering (courtesy appointment), Computer Science and Engineering, Electrical and Computer Engineering, Texas A&M University.

Research interests: information theory and coding theory, data storage, machine learning, networks and algorithm design

### Research links

- [Faculty/profile page](http://faculty.cse.tamu.edu/ajiang)
- [Resolved homepage](https://people.engr.tamu.edu/ajiang/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Error Correcting Codes
**The paper assumes:** error correcting codes, LDPC codes, Tanner graphs, decoding algorithms, stopping sets
**Already in this field?** Skip this entirely if you already understand the fundamentals of error correcting codes, LDPC codes, Tanner graph representations, and standard decoding methods.

This background focuses on foundational knowledge of error correcting codes (ECC), especially LDPC codes and Tanner graphs, which are essential to understanding the stopping set elimination problem and collaborative decoding model in the paper. The rigorous course offers a deep, structured university-level treatment of ECC theory and decoding algorithms, while the fast track provides a concise, visual introduction to core ECC concepts and common codes. Choose the rigorous course for thorough mastery and the fast track for a quick but solid conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [LDPC and Polar Codes in 5G Standard](https://www.youtube.com/playlist?list=PLyqSpQzTE6M81HJ26ZaNv0V3ROBrcv-Kc) — NPTEL-NOC IITM · 37 videos · 14.7h across 37 episodes

**Watch only this:** Episodes 11 to 23 (Low Density Parity Check Codes: definition, properties and introduction to protograph construction through Debugging and Improvements to the MATLAB Implementation), about 4.5 hours — these cover LDPC code basics, Tanner graphs, iterative decoding, and practical decoding implementations.

*Why it unblocks this paper:* This NPTEL-NOC IITM course on 'LDPC and Polar Codes in 5G Standard' covers LDPC codes in detail, including Tanner graph construction, iterative decoding algorithms, and practical implementation aspects, directly relevant to the paper's focus on LDPC stopping sets and collaborative decoding.

*If you want all of it:* All 37 episodes, about 14.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Error Detection & Correction Codes Explained | Block Codes, CRC, Hamming](https://www.youtube.com/playlist?list=PLgwJf8NK-2e4YXLjJ-Btbp2cbtDH8ilfK) — Engineering Funda · 21 videos · 5.4h across 21 episodes

**Watch only this:** First 7 episodes (Introduction to Block Codes Explained through Hamming Code Explained), about 1.75 hours — these cover the basics of block codes, parity checks, and Hamming codes essential for grasping ECC fundamentals.

*Why it unblocks this paper:* This Engineering Funda playlist offers concise, clear explanations of error detection and correction codes including block codes, Hamming codes, cyclic codes, and convolutional codes, providing a quick but solid foundation in ECC concepts relevant to understanding the paper's context.

*If you want all of it:* All 21 episodes, about 5.4 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on collaborative decoding using natural redundancy and LDPC codes, start with foundational knowledge on error-correcting codes and decoding strategies, followed by a focused study on LDPC codes, which are central to the paper's decoding framework. Next, explore approximation algorithms for NP-hard problems to grasp the computational complexity and algorithmic solutions presented. Then, study the core concept of stopping set elimination in LDPC codes, which is the key method for optimizing collaborative decoding. Finally, review the paper author's own talks or related advanced presentations to gain direct insights into the specific contributions and context of this research.

### Error-Correcting Codes and Decoding *(prerequisite)*
Understanding the basics of error-correcting codes, including syndrome decoding and decoding algorithms, is essential to grasp how traditional ECC works and how it integrates with natural redundancy decoding. This foundation supports comprehension of the collaborative decoding model proposed in the paper.

*How the paper uses it:* The paper builds on traditional ECC decoding methods as part of the collaborative decoding framework.

▶ [V3f: Syndrome decoding (Error-Correcting Codes)](https://www.youtube.com/watch?v=0G5Xu66FabA) — Cryptography 101 · 23:01

### Low-Density Parity-Check Codes *(prerequisite)*
LDPC codes are the fundamental error-correcting codes underlying the paper's decoding framework. A rigorous university lecture on LDPC decoding provides the necessary depth on their structure, decoding algorithms, and properties, which are crucial for understanding stopping sets and their elimination.

*How the paper uses it:* The paper focuses on stopping set elimination in LDPC codes to improve decoding performance.

▶ [Lecture 15: LDPC Decoding](https://www.youtube.com/watch?v=Ux2xnlxjvwE) — NPTEL-NOC IITM · 36:29

### Approximation Algorithms for NP-hard Problems *(prerequisite)*
The stopping set elimination problem is NP-hard, so understanding approximation algorithms and their theoretical foundations is critical. This lecture covers the complexity and approximation strategies relevant to the algorithms developed in the paper.

*How the paper uses it:* The paper develops approximation algorithms for the NP-hard stopping set elimination problem.

▶ [P, NP and Approximation Algorithms: Prof. Naveen Garg, IIT ...](https://www.youtube.com/watch?v=hhEx2zNFPAk) — Living Science · 41:04

### Stopping Set Elimination in LDPC Codes
Stopping set elimination is the core method proposed in the paper to optimize collaborative decoding by removing problematic stopping sets in LDPC codes. A detailed university lecture on graph-based codes and LDPC stopping sets provides the necessary technical depth to understand this concept.

*How the paper uses it:* The paper formulates and solves the stopping set elimination problem to enhance collaborative decoding.

▶ [Lecture "Channel Coding: Graph-based Codes", Chapter 3, Vid. 3, "LDPC Codes"](https://www.youtube.com/watch?v=pvUt3QNk9B8) — Communications Engineering Lab - KIT · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of error-correcting codes (ECC) and decoding strategies to grasp how data errors are detected and corrected. Then, learn about Low-Density Parity-Check (LDPC) codes, which are the fundamental ECC type used in the paper. Next, explore the concept of natural redundancy in data, which the paper leverages to improve decoding beyond traditional ECC. After that, study approximation algorithms for NP-hard problems to appreciate the computational challenges and solutions presented. Finally, focus on the core method of stopping set elimination in LDPC codes, which is central to the paper's collaborative decoding approach.

### Error-Correcting Codes and Decoding *(prerequisite)*
Learn the fundamental ideas behind error-correcting codes, including how errors in data transmission or storage are detected and corrected using mathematical codes. Understanding decoding strategies helps to see how these codes recover the original data from corrupted versions.

*How the paper uses it:* The paper builds on traditional ECC decoding methods as part of the collaborative decoding model.

▶ [But what are Hamming codes? The origin of error correction](https://www.youtube.com/watch?v=X8jsijhllIA) — 3Blue1Brown · 20:05

### Low-Density Parity-Check Codes *(prerequisite)*
LDPC codes are a powerful class of error-correcting codes characterized by sparse parity-check matrices, enabling efficient decoding algorithms. Understanding LDPC codes is essential because the paper focuses on improving their decoding performance by eliminating stopping sets.

*How the paper uses it:* The paper studies stopping set elimination specifically in LDPC codes to enhance decoding.

▶ [LDPC CODES INTRODUCTION AND ITS PROPERTIES](https://www.youtube.com/watch?v=5Mif1l8C7Q4) — K MURTHYRAJU · 16:33

### Natural Redundancy in Data *(prerequisite)*
Natural redundancy refers to the inherent patterns and structures in data like language, images, or videos that can be exploited to detect and correct errors beyond what ECC alone can achieve. Recognizing this concept helps understand how additional decoding power is gained by leveraging data properties.

*How the paper uses it:* The paper proposes a collaborative decoding model that combines ECC with decoders exploiting natural redundancy.

▶ [Block Coding | Data Communication | Lecture 54 | Urdu | Hindi](https://www.youtube.com/watch?v=t2uGGzgtGN4) — VU Masters · 11:22

### Approximation Algorithms for NP-hard Problems *(prerequisite)*
Approximation algorithms provide efficient ways to find near-optimal solutions to computationally hard problems where exact solutions are infeasible. Learning about these algorithms clarifies how the paper tackles the NP-hard stopping set elimination problem with provable performance guarantees.

*How the paper uses it:* The paper develops approximation algorithms for the NP-hard stopping set elimination problem.

▶ [P, NP and Approximation Algorithms: Prof. Naveen Garg, IIT ...](https://www.youtube.com/watch?v=hhEx2zNFPAk) — Living Science · 41:04

### Stopping Set Elimination in LDPC Codes
Stopping sets are problematic structures in LDPC code graphs that prevent successful decoding. Eliminating these sets improves decoding performance. Understanding this concept is key to grasping the paper’s main contribution in collaborative decoding.

*How the paper uses it:* The paper formulates and solves the stopping set elimination problem to optimize collaborative decoding.

▶ [Lecture "Channel Coding: Graph-based Codes", Chapter 3, Vid. 3, "LDPC Codes"](https://www.youtube.com/watch?v=pvUt3QNk9B8) — Communications Engineering Lab - KIT · 3 years ago

## Already in your library

- [Lecture 13: LDPC Codes](https://www.youtube.com/watch?v=tB36bi8J0MA) — also for: Machine Learning and Algorithmic Techniques for Error Correction (Anxiao Andrew Jiang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the stopping set elimination (SSE) problem and collaborative decoding using natural redundancy in LDPC codes, as presented in the paper. Starting with a basic simulation of stopping sets and their elimination on tree-structured Tanner graphs, you then implement and evaluate the paper's core approximation algorithm for SSE1 on small LDPC codes. Finally, you extend the approach by exploring deep learning methods to enhance natural redundancy decoding, addressing one of the paper's key future directions.

### Beginner — Stopping Set Elimination on LDPC Stopping Trees
*Effort: a weekend, ~8 hours*

You build a small Python simulation that constructs stopping trees derived from LDPC Tanner graphs and implements the exact linear-time algorithm for stopping set elimination (SSE∞) on these trees. The project visualizes the stopping tree, the stopping sets, and the elimination sets computed by the algorithm.

**Why it shows you understood the paper:** This project shows you understand the structure of stopping sets in LDPC codes and the special-case exact algorithm for stopping trees, demonstrating comprehension of the paper's algorithmic contributions and complexity results.

**Grounded in:** Exact linear-time algorithms for SSE∞ and SSEk with stopping trees (Section V.B and V.C)

**Tech stack:** Python 3.11, matplotlib, networkx

**Data:** You synthesize small LDPC Tanner graphs with tree-like stopping sets as input, since no public dataset is provided.

**Build it:**

1. Implement a function to generate small LDPC Tanner graphs with tree-structured stopping sets.
2. Implement the exact linear-time SSE∞ algorithm for stopping trees as described in the paper.
3. Visualize the Tanner graph, stopping sets, and the elimination sets using networkx and matplotlib.
4. Write a README explaining the stopping set concept, the algorithm, and how the code corresponds to the paper.
5. Test the implementation on multiple synthetic stopping trees and report runtime and correctness.

**Ships as:** A GitHub repo with code to generate stopping trees, run the exact SSE∞ algorithm, visualize results, and a README linking the implementation to the paper's contribution.

**Stretch goal:** Add support for SSEk algorithms with iteration constraints on stopping trees and compare results.

### Intermediate — Approximation Algorithm for SSE1 on Small LDPC Codes
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's approximation algorithm for the SSE1 problem on small LDPC codes with known parameters (dv, dc). You simulate the stopping graphs from Tanner graphs, run the approximation algorithm, and compare its output size against a naive baseline (e.g., random erasure elimination). You report approximation ratios and runtime metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core approximation algorithm into code, understand its theoretical guarantees, and empirically evaluate its performance on representative LDPC code structures.

**Grounded in:** Development of an approximation algorithm for SSE1 with approximation ratio dv(dc - 1) (Section IV)

**Tech stack:** Python 3.11, networkx, numpy, matplotlib

**Data:** You synthesize small LDPC Tanner graphs with parameters dv and dc, simulating stopping graphs; no public dataset is available.

**Build it:**

1. Implement code to generate small LDPC Tanner graphs with configurable dv and dc.
2. Construct the stopping graph from the Tanner graph as defined in the paper.
3. Implement the approximation algorithm for SSE1 with ratio dv(dc - 1) following the paper's pseudocode.
4. Implement a naive baseline algorithm for comparison (e.g., random selection of erasures).
5. Run experiments comparing approximation algorithm vs baseline on multiple graphs, measuring elimination set size and runtime.
6. Plot results and write a detailed README linking the implementation and results to the paper's claims.

**Ships as:** A GitHub repo with code implementing the SSE1 approximation algorithm, baseline, experiments, plots, and a README explaining the connection to the paper.

**Stretch goal:** Extend the implementation to handle p-cyclic stopping graphs and evaluate approximation ratios as per the paper's Section VI.

### Advanced — Deep Learning Enhanced Natural Redundancy Decoding for SSE
*Effort: 3+ weeks*

You develop a prototype system that integrates a deep learning model to assist the NR-decoder in the collaborative decoding framework, aiming to reduce the number of erasures needing NR-decoding. You simulate or use small-scale LDPC codes and stopping graphs, and design a neural network to predict which bits to erase or decode to optimize stopping set elimination. You compare your approach against the paper's approximation algorithm baseline.

**Why it shows you understood the paper:** This project tackles a key future direction from the paper by applying deep learning to enhance NR-decoding efficiency and accuracy, demonstrating your ability to extend theoretical algorithms with modern ML techniques and address practical system challenges.

**Grounded in:** Future direction: Applying deep learning techniques to mine useful information from natural redundancy for ECC decoding (Concluding remarks)

**Tech stack:** Python 3.11, PyTorch, numpy, networkx, matplotlib

**Data:** Synthetic LDPC Tanner graphs and stopping graphs are generated; natural redundancy data is simulated or simplified due to lack of real NR datasets.

**Build it:**

1. Implement or reuse code to generate LDPC Tanner graphs and stopping graphs as in previous projects.
2. Design a neural network model that takes graph features and partial decoding states as input and predicts erasure sets to minimize NR-decoding effort.
3. Train the model on synthetic data generated from the stopping graphs with labels derived from the approximation algorithm outputs.
4. Integrate the model into a collaborative decoding simulation combining ECC-decoder and NR-decoder steps.
5. Evaluate the model's performance in reducing NR-decoded erasures compared to the approximation algorithm baseline.
6. Document the system design, training procedure, evaluation results, and discuss limitations and future improvements.

**Ships as:** A GitHub repo with code for graph generation, deep learning model, collaborative decoding simulation, evaluation scripts, and a comprehensive README linking the work to the paper's future directions.

**Stretch goal:** Experiment with real natural redundancy data from text or image datasets to improve NR-decoder modeling.

_The paper does not provide released code or datasets; all projects require synthetic data generation based on the paper's descriptions._
