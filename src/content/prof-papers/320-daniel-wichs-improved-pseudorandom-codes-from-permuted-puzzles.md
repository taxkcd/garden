---
title: "320 · Improved Pseudorandom Codes from Permuted Puzzles — Daniel Wichs"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-daniel-wichs"
source_hash: "e2ed062058df8ba31b3eaa9587bf89eef86e2f1a578d8aade77f590e395856fb"
sequence: 320
generator: "outreach-garden: managed"
---

# 320 · Improved Pseudorandom Codes from Permuted Puzzles

## At a glance

- **Professor:** Daniel Wichs
- **Institution:** Northeastern University
- **Paper:** [Improved Pseudorandom Codes from Permuted Puzzles](https://arxiv.org/abs/2512.08918)
- **Authors:** Miranda Christ, Noah Golowich, Sam Gunn, Ankur Moitra, Daniel Wichs
- **Year:** 2026

## Paper overview

This paper presents new constructions of pseudorandom error-correcting codes (PRCs) that serve as robust and undetectable watermarks for AI-generated content, especially language models. The authors introduce the permuted codes conjecture, a new computational hardness assumption, and show how it leads to PRCs that are robust to worst-case edits, secure against adversaries with knowledge of the detection key, and achieve subexponential security. These improvements address key limitations of prior watermarking schemes and PRCs.

### Why it matters

**Research problem:** Existing pseudorandom codes and watermarking schemes for AI-generated content lack one or more of the following: subexponential security against distinguishing attacks, robustness to worst-case edits over small alphabets (especially binary), and robustness against adversaries who know the watermark detection key. The problem is to construct PRCs and watermarking schemes that simultaneously achieve all these properties.

**Why it matters:** AI-generated content is increasingly realistic, raising concerns about misinformation and impersonation. Watermarking is a key tool to identify such content. However, watermarks must be undetectable (to preserve content quality) and robust to adversarial modifications. Achieving strong security and robustness guarantees is critical for practical deployment and trustworthiness of watermarking schemes.

**Key contributions:**

- Formulation of the permuted codes conjecture and its connection to the permuted puzzles conjecture.
- Construction of pseudorandom codes that achieve subexponential security, edit robustness over a binary alphabet, and robustness against adversaries with detection key knowledge.
- Development of decoding algorithms leveraging list recoverability of Reed-Solomon codes to handle worst-case edits.
- Cryptanalysis showing the necessity of alphabet permutations and limitations of prior approaches with quasipolynomial-time attacks.
- First undetectable watermark for large language models robust to a constant rate of worst-case edits with realistic per-token entropy requirements.

## About the professor

**Daniel Wichs** — Professor, Khoury College of Computer Sciences, Northeastern University.

Research interests: cryptography, Computing on encrypted data and program obfuscation, Lattice-based cryptography, Information-theoretic cryptography

### Research links

- [Faculty/profile page](http://www.ccs.neu.edu/home/wichs)
- [Resolved homepage](https://www.khoury.northeastern.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=CO7nYfIAAAAJ&hl=en)
- [DBLP](http://dblp.uni-trier.de/pers/ht/w/Wichs:Daniel)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Algebraic coding theory
**The paper assumes:** algebraic coding theory, Reed-Solomon codes, error-correcting codes, list decoding and list recovery
**Already in this field?** Skip this entirely if you already have a solid understanding of algebraic coding theory and Reed-Solomon codes, including their decoding algorithms.

This background focuses on algebraic coding theory, essential for understanding the constructions and security assumptions in the paper, especially regarding Reed-Solomon and folded Reed-Solomon codes. The rigorous course option offers a deep, structured university-level treatment of algebraic codes, while the fast track provides a concise, accessible introduction covering the core concepts needed to grasp the paper's technical contributions efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Algebraic Coding Theory (Mary Wootters, Stanford University, 2021)](https://www.youtube.com/playlist?list=PLidiQIHRzpXLSQBywYbSZ5PUhkR6VWM2P) — Theoretical Computer Science School (TCSS) · 58 videos · 13.1h across 58 episodes

**Watch only this:** Lectures 1 Video 1 through Lecture 5 Video 2 (17 episodes, ~3.7 hours) — covering motivation, basic definitions, finite fields, linear codes, Reed-Solomon codes, their dual view, and the Berlekamp-Welch decoding algorithm.

*Why it unblocks this paper:* This Stanford University course by Mary Wootters thoroughly covers algebraic coding theory, including Reed-Solomon codes, their dual views, and decoding algorithms, directly relevant to the paper's core constructions and assumptions.

*If you want all of it:* 13.1 hours across 58 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Algebraic Coding Theory](https://www.youtube.com/playlist?list=PLkvhuSoxwjI_UudECvFYArvG0cLbFlzSr) — Mary Wootters · 56 videos · 12.5h across 56 episodes

**Watch only this:** Lectures 1 Video 1 through Lecture 5 Video 2 (17 episodes, ~3.7 hours) — same core coverage as the rigorous course's minimum subset, focusing on foundational concepts and Reed-Solomon codes.

*Why it unblocks this paper:* This concise series by Mary Wootters covers the essential topics of algebraic coding theory with clear explanations and overlaps significantly with the rigorous course, making it a faster way to grasp the key concepts relevant to the paper.

*If you want all of it:* 12.5 hours across 56 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Improved Pseudorandom Codes from Permuted Puzzles," start by grounding yourself in the foundational cryptographic hardness assumptions and algebraic coding theory, especially Reed-Solomon codes and their list decoding techniques. Then, explore the specific computational assumptions related to the permuted codes conjecture. Finally, focus on the paper's core contributions by watching the authors' own talks that explain their novel constructions of pseudorandom error-correcting codes and their applications to watermarking AI-generated content.

### Computational hardness assumptions in cryptography *(prerequisite)*
Understanding the landscape of computational hardness assumptions is critical to grasp the significance of the new permuted codes conjecture introduced in the paper. This section provides context on how cryptographic assumptions underpin security proofs and why new assumptions are proposed.

*How the paper uses it:* The paper introduces the permuted codes conjecture as a new computational hardness assumption underlying their security results.

▶ [Permuted Puzzles and Cryptographic Hardness (TCC 2019)](https://www.youtube.com/watch?v=2Zgyx6PR_j4) — IACR · 2 years ago

### Reed-Solomon codes and list decoding *(prerequisite)*
Reed-Solomon codes and their list decoding algorithms are fundamental algebraic tools used in the paper's constructions. A solid understanding of these codes and their decoding capabilities is necessary to appreciate the robustness and decoding strategies developed.

*How the paper uses it:* The paper's constructions rely on Reed-Solomon and folded Reed-Solomon codes and their list recoverability for decoding worst-case edits.

▶ [Prahladh Harsha - Fast List-Decoding and List-Recovery of Reed-Solomon Codes and Their Variants](https://www.youtube.com/watch?v=ylVLEWV0Y0g) — Workshop on Algebraic Complexity Theory 2026 · Streamed 2 months ago

### Watermarking and robustness to adversarial edits *(prerequisite)*
This section covers the application domain motivating the paper: watermarking AI-generated content and ensuring robustness against adversarial edits. Understanding the challenges and goals in watermarking helps contextualize the paper's contributions.

*How the paper uses it:* The paper aims to construct undetectable, edit-robust watermarks for AI-generated content using pseudorandom codes.

▶ [SoK: How Robust is Image Classification Deep Neural Network Watermarking?](https://www.youtube.com/watch?v=ZHhlnd5J_2k) — IEEE Symposium on Security and Privacy · 4 years ago

### Pseudorandom error-correcting codes
This section delves into the core technical object constructed in the paper: pseudorandom error-correcting codes that achieve strong security and robustness properties. It covers the design, analysis, and cryptanalysis of these codes.

*How the paper uses it:* The paper constructs pseudorandom codes that are robust to worst-case edits and secure under the permuted codes conjecture.

▶ [Pseudorandom Error-Correcting Codes with Applications to Watermarking Generative AI](https://www.youtube.com/watch?v=UMSIc5USW5Y) — Simons Institute for the Theory of Computing · Streamed 1 year ago

### Paper authors talk
Direct talks by the paper's authors provide the most authoritative and detailed explanation of their novel constructions, assumptions, and results. These talks often include insights not fully captured in the paper.

*How the paper uses it:* Miranda Christ, a co-author, presents the paper's main ideas and results in these seminars.

▶ [Miranda Christ: Pseudorandom Error Correcting Codes with Applications to Watermarking Generative AI](https://www.youtube.com/watch?v=kjkyult1kH0) — Brown CS Theory · 3 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the foundational concepts needed to understand the paper's construction of robust, pseudorandom error-correcting codes for watermarking AI-generated content. We start with the basics of computational hardness assumptions in cryptography to set the security context, then cover watermarking and robustness to adversarial edits to motivate the application. Next, we explain Reed-Solomon codes and list decoding as key algebraic tools used in the constructions. Finally, we focus on pseudorandom error-correcting codes, the core technical object of the paper, and conclude with insights from the paper authors themselves to connect theory with practice.

### Computational hardness assumptions in cryptography *(prerequisite)*
Learn what computational hardness assumptions are and why they are crucial for cryptographic security. These assumptions underpin the difficulty of breaking cryptographic schemes and are the foundation for the paper's new permuted codes conjecture.

*How the paper uses it:* The paper introduces the permuted codes conjecture, a new computational hardness assumption central to its security proofs.

▶ [Assumptions in cryptography and complexity theory](https://www.youtube.com/watch?v=WWfikhcFq4w) — Simons Institute for the Theory of Computing · Streamed 3 years ago

### Watermarking and robustness to adversarial edits *(prerequisite)*
Understand the concept of watermarking digital content, especially AI-generated text, and why robustness to adversarial edits is critical. This section explains the practical motivation for designing pseudorandom codes that remain undetectable and resilient against tampering.

*How the paper uses it:* The paper aims to create undetectable watermarks for AI content that are robust to worst-case edits by adversaries.

▶ [SoK: How Robust is Image Classification Deep Neural Network Watermarking?](https://www.youtube.com/watch?v=ZHhlnd5J_2k) — IEEE Symposium on Security and Privacy · 4 years ago

### Reed-Solomon codes and list decoding *(prerequisite)*
Get an intuitive understanding of Reed-Solomon codes, a class of algebraic error-correcting codes, and the concept of list decoding which allows recovery from many errors. These codes form the backbone of the paper's constructions and decoding algorithms.

*How the paper uses it:* The paper builds its pseudorandom codes using Reed-Solomon and folded Reed-Solomon codes with list decoding techniques.

▶ [Reed Solomon Encoding - Intuitive/Simplified](https://www.youtube.com/watch?v=3HRIeWYbIuI) — RISC Zero · 3 years ago

### Pseudorandom error-correcting codes
Explore what pseudorandom error-correcting codes are—codes whose outputs look random to adversaries but still allow error correction. This concept is key to achieving undetectable, robust watermarks as proposed in the paper.

*How the paper uses it:* The paper constructs new pseudorandom codes that achieve subexponential security and robustness against adaptive adversaries.

▶ [Pseudorandom Error-Correcting Codes with Applications to Watermarking Generative AI](https://www.youtube.com/watch?v=UMSIc5USW5Y) — Simons Institute for the Theory of Computing · Streamed 1 year ago

### Paper authors talk
Hear directly from the authors about their novel permuted codes conjecture, the construction of robust pseudorandom codes, and their applications to watermarking generative AI. This talk provides valuable insights and context beyond the written paper.

*How the paper uses it:* Miranda Christ, a co-author, presents the main ideas and contributions of the paper in this seminar talk.

▶ [Miranda Christ: Pseudorandom Error Correcting Codes with Applications to Watermarking Generative AI](https://www.youtube.com/watch?v=kjkyult1kH0) — Brown CS Theory · 3 months ago

## Already in your library

- [What are Reed-Solomon Codes? How computers recover lost data](https://www.youtube.com/watch?v=1pQJkt7-R4Q) — also for: Quantum Advantage via Solving Multivariate Polynomials (Aayush Jain)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper "Improved Pseudorandom Codes from Permuted Puzzles." Starting with a beginner-level implementation of a core mechanism (permuted noisy codewords and their pseudorandomness), moving to an intermediate reimplementation of the paper's core PRC construction with robustness evaluation, and culminating in an advanced project that tackles one of the paper's stated limitations by exploring more efficient decoding algorithms or cryptanalysis of the permuted codes conjecture.

### Beginner — Simulate and Visualize Pseudorandomness of Permuted Noisy Codewords
*Effort: a weekend, ~8 hours*

You build a small Python simulation that generates codewords from a simple linear code (e.g., Reed-Solomon or a small binary linear code), applies random permutations to indices and alphabets, adds noise, and visualizes the distribution of resulting codewords compared to uniform random samples. You implement simple statistical tests (e.g., frequency counts, chi-square) to demonstrate indistinguishability.

**Why it shows you understood the paper:** This project shows you grasp the core concept of the permuted codes conjecture and the necessity of permutations and noise to achieve pseudorandomness, as well as the statistical indistinguishability argument presented in the paper.

**Grounded in:** Statistical evidence that a small number of permuted codeword samples are indistinguishable from uniform for constant-size alphabets.

**Tech stack:** Python 3.11, NumPy, Matplotlib, SciPy

**Data:** Synthetic codewords generated from small Reed-Solomon or binary linear codes simulated in code.

**Build it:**

1. Implement a small Reed-Solomon or binary linear code encoder in Python.
2. Generate codewords for random messages.
3. Apply random permutations to codeword indices and alphabet symbols.
4. Add controlled noise to the permuted codewords.
5. Generate uniform random samples of the same length and alphabet.
6. Perform and visualize statistical tests comparing permuted noisy codewords to uniform samples.

**Ships as:** A GitHub repo with scripts and Jupyter notebooks showing codeword generation, permutation, noise addition, statistical tests, and plots demonstrating pseudorandomness.

**Stretch goal:** Add a simple distinguisher to show how omitting alphabet permutations breaks pseudorandomness.

### Intermediate — Reimplement PRC Construction and Evaluate Edit Robustness
*Effort: 2 weekends, ~20 hours*

You reimplement the core pseudorandom code construction from the paper using folded Reed-Solomon codes with alphabet and index permutations plus noise. You implement encoding and decoding algorithms that tolerate a constant rate of worst-case edits on binary alphabets. You compare decoding success rates against a baseline Reed-Solomon code without permutations and noise, reporting robustness metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's main construction faithfully, understand the role of permutations and noise in achieving pseudorandomness and robustness, and reproduce key robustness metrics under worst-case edits.

**Grounded in:** Under the permuted codes conjecture, existence of binary-alphabet PRCs strongly adaptive to a constant rate of edits with plausible subexponential pseudorandomness security.

**Tech stack:** Python 3.11, NumPy, SymPy or SageMath (optional for algebraic coding), Jupyter Notebook

**Data:** Synthetic messages encoded with folded Reed-Solomon codes simulated in code; synthetic worst-case edit patterns applied.

**Build it:**

1. Implement folded Reed-Solomon code encoding and list-recoverable decoding algorithms.
2. Implement alphabet and index permutation functions.
3. Add noise to codewords as per the paper's construction.
4. Simulate worst-case edit patterns at a constant rate on encoded codewords.
5. Implement decoding algorithms to recover original messages from edited codewords.
6. Compare decoding success rates with a baseline Reed-Solomon code without permutations and noise.
7. Document robustness metrics and analyze results.

**Ships as:** A GitHub repo with code for PRC encoding/decoding, scripts to simulate edits, and a report/notebook comparing robustness metrics.

**Stretch goal:** Extend the implementation to handle adaptive adversarial edits or explore parameter tuning for improved decoding efficiency.

### Advanced — Explore Efficient Decoding or Cryptanalysis of the Permuted Codes Conjecture
*Effort: 3+ weeks*

You design and implement an improved decoding algorithm for the PRCs that reduces brute-force search over edit-distance neighborhoods, or you develop cryptanalytic experiments testing the permuted codes conjecture on Reed-Solomon or folded Reed-Solomon codes. This could involve heuristic attacks, distinguishing algorithms, or statistical tests beyond those in the paper. You document your findings and discuss implications for the conjecture's validity or decoding efficiency.

**Why it shows you understood the paper:** This project tackles a core limitation or future direction of the paper, showing deep engagement with the conjecture's security assumptions or practical decoding challenges, and contributes original experimental insights or algorithmic improvements.

**Grounded in:** The decoding algorithm involves brute forcing over edit-distance neighborhoods, which may have practical efficiency considerations; Cryptanalysis and validation of the permuted codes conjecture and its variants.

**Tech stack:** Python 3.11, NumPy, SciPy, Jupyter Notebook, Optional: C++ for performance-critical code

**Data:** Synthetic codewords from folded Reed-Solomon codes with permutations and noise; synthetic adversarial edit patterns.

**Build it:**

1. Review the paper's decoding algorithm and identify bottlenecks in brute-force search.
2. Design heuristic or algorithmic improvements to reduce decoding complexity.
3. Implement the improved decoding algorithm and benchmark against the original.
4. Alternatively, design cryptanalytic experiments to distinguish permuted noisy codewords from uniform.
5. Run experiments on synthetic data and analyze statistical significance.
6. Document results, limitations, and potential implications for the permuted codes conjecture.

**Ships as:** A GitHub repo with improved decoding or cryptanalysis code, experimental results, and a detailed report discussing findings and future work.

**Stretch goal:** Attempt to generalize cryptanalysis to other code families or propose alternative computational assumptions for PRCs.
