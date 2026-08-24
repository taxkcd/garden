---
title: "464 · HyperVerITAS: Verifying Image Transformations at Scale on Boolean Hypercubes — Pratik Soni"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-pratik-soni"
source_hash: "c196c38b5610bdb307485ccf73bef6b65c0c31530778fab835f47c37acfaf0cf"
sequence: 464
generator: "outreach-garden: managed"
---

# 464 · HyperVerITAS: Verifying Image Transformations at Scale on Boolean Hypercubes

## At a glance

- **Professor:** Pratik Soni
- **Institution:** University of Utah
- **Paper:** [HyperVerITAS: Verifying Image Transformations at Scale on Boolean Hypercubes](https://petsymposium.org/popets/2026/popets-2026-0036.pdf)
- **Authors:** Garrett Greiner, Toshi Mowery, Pratik Soni
- **Year:** 2026

## Paper overview

HyperVerITAS is a new zero-knowledge proof system designed to verify that images have been transformed correctly while preserving privacy and scalability. It improves upon prior systems by using multilinear polynomial encodings over Boolean hypercubes, enabling efficient proof generation for high-resolution images (up to 33 megapixels) on commodity hardware like laptops. This system supports common image edits such as cropping and grayscaling without requiring trust in the editing software.

### Why it matters

**Research problem:** Existing systems for verifying image provenance and transformations, like VerITAS, require high memory and computational resources, making them impractical for large images or commodity hardware. They also rely on FFT-heavy polynomial commitments and general-purpose SNARKs, which limit scalability and efficiency.

**Why it matters:** Verifying the authenticity and provenance of images is critical in many domains including scientific publishing, AI-generated media, and secure documentation. Ensuring privacy and trustworthiness without relying on trusted editing software is essential for robust content provenance in real-world scenarios.

**Key contributions:**

- Design of a scalable zero-knowledge proof system using multilinear IOPs and Boolean hypercube encodings to reduce memory and computation.
- Support for two deployment modes: a lightweight camera mode with lattice-based linear hash and range proofs, and a server-grade mode using polynomial commitments as hashes.
- Modular and commitment-agnostic architecture supporting pairing-based and post-quantum polynomial commitment schemes.
- Efficient affine transformation proofs that avoid costly R1CS circuit encodings and allow composition of multiple edits in a single proof.
- Comprehensive implementation and evaluation demonstrating practical gains in speed, memory efficiency, and scalability to 30+ megapixel images on commodity hardware.

## About the professor

**Pratik Soni** — Assistant Professor, Kahlert School of Computing, University of Utah.

Research interests: theoretical and applied cryptography, with an emphasis on developing privacy-preserving proof systems (e.g., zk-SNARKs), advanced digital signatures (e.g., adaptor signatures), and secure multi-party computation (e.g., coin-tossing), and exploring their applications in improving privacy, fairness, and accountability in blockchain and ML systems

### Research links

- [Faculty/profile page](https://www.cs.utah.edu/~psoni)
- [Professor website](https://www.cs.utah.edu/)
- [Google Scholar](https://scholar.google.com/citations?user=XvhsqUsAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/168/9476.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** multilinear polynomial algebra
**The paper assumes:** multilinear polynomial algebra, Boolean hypercube representations, polynomial commitment schemes
**Already in this field?** Skip this entirely if you already have a solid understanding of multilinear polynomials and their algebraic manipulation in cryptographic proof systems.

To understand the core multilinear polynomial encoding techniques used in HyperVerITAS, a solid grasp of multilinear polynomial algebra and related linear algebra concepts is essential. The rigorous course option offers a deep, structured university-level treatment of linear algebra fundamentals that underpin multilinear polynomials, while the fast track provides a concise, focused introduction to tensors and multilinear maps, which are key to understanding multilinear polynomial encodings. Choose the rigorous course for a comprehensive foundation or the fast track for a quicker, intuition-driven overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 18.06 Linear Algebra, Spring 2005](https://www.youtube.com/playlist?list=PLE7DDD91010BC51F8) — MIT OpenCourseWare · 36 videos · 28.0h across 36 episodes

**Watch only this:** Lectures 1 through 11 (episodes 1 to 11), about 8.5 hours — covering geometry of linear equations, elimination, matrix multiplication, spaces, and fundamental subspaces to build a strong algebraic foundation.

*Why it unblocks this paper:* MIT 18.06 Linear Algebra is a highly authoritative university course covering foundational linear algebra concepts such as vector spaces, linear transformations, and matrix operations that are essential for understanding multilinear polynomial algebra and Boolean hypercube encodings used in HyperVerITAS.

*If you want all of it:* All 36 episodes, approximately 28 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Tensors (Multi-linear Algebra)](https://www.youtube.com/playlist?list=PLxBAVPVHJPcrp0zSqnBcGNHx-OzIWg7A2) — WHYB maths · 14 videos · 2.2h across 14 episodes

**Watch only this:** Episodes 1 through 12 (Sets & Maps to Tensor Product Spaces), about 1.8 hours — covering the essential algebraic structures and multilinear maps needed to grasp the paper's core techniques.

*Why it unblocks this paper:* The 'Tensors (Multi-linear Algebra)' series by WHYB maths provides a concise, clear introduction to multilinear algebra concepts including multilinear maps and tensor products, which directly relate to multilinear polynomial encodings over Boolean hypercubes in HyperVerITAS.

*If you want all of it:* All 14 episodes, approximately 2.2 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand HyperVerITAS, start by grounding yourself in the foundational cryptographic primitives and mathematical tools it builds upon: zero-knowledge proof systems and polynomial commitment schemes. Next, study the mathematical encoding techniques over Boolean hypercubes that enable the system's scalability. Then, explore affine image transformation proofs to grasp how image edits are efficiently verified. Finally, focus on the core concept of HyperVerITAS itself through the authors' own presentation, which ties together these foundations into their novel scalable proof system for image transformations.

### Zero-knowledge proof systems *(prerequisite)*
Zero-knowledge proofs form the cryptographic backbone of HyperVerITAS, enabling privacy-preserving verification of image transformations. Understanding their principles, especially succinct non-interactive arguments of knowledge (zkSNARKs), is essential to appreciate how HyperVerITAS achieves trustless verification without revealing sensitive data.

*How the paper uses it:* HyperVerITAS builds on zero-knowledge proof frameworks to ensure privacy and correctness of image transformations.

▶ [Zero Knowledge Proofs and Nuclear Disarmament - Boaz Barak](https://www.youtube.com/watch?v=55qWiQqLqZo) — Institute for Advanced Study · 1:14:22 · 9 years ago

### Polynomial commitment schemes *(prerequisite)*
Polynomial commitment schemes are critical cryptographic primitives that allow binding to polynomial evaluations efficiently and succinctly. HyperVerITAS modularly integrates multiple such schemes, including post-quantum secure ones, to achieve scalable and flexible proof generation.

*How the paper uses it:* HyperVerITAS uses polynomial commitments as a core primitive to bind polynomial encodings and support multiple deployment modes.

▶ [Arantxa Zapico, Polynomial Commitments - and where to find them](https://www.youtube.com/watch?v=vVjZ3DQmKF8) — International Centre for Mathematical Sciences · 1:00:37 · 1 year ago

### Boolean hypercube encodings *(prerequisite)*
Boolean hypercube encodings provide the data representation framework that enables multilinear polynomial operations over high-dimensional Boolean domains. This mathematical structure is key to HyperVerITAS's ability to efficiently encode and verify large images without FFT-heavy computations.

*How the paper uses it:* HyperVerITAS leverages multilinear polynomial encodings over Boolean hypercubes to reduce memory and computation costs.

▶ [Boolean function analysis: beyond the Boolean cube - Yuval Filums](https://www.youtube.com/watch?v=cQcorGKjzqQ) — Institute for Advanced Study · 1:02:39 · 8 years ago

### Affine image transformations proofs
Affine transformations are the class of image edits HyperVerITAS currently supports, including cropping and grayscaling. Understanding the mathematical properties and proofs of affine transformations on images clarifies how HyperVerITAS efficiently verifies these edits without costly circuit encodings.

*How the paper uses it:* HyperVerITAS encodes affine image transformations as polynomial maps over Boolean hypercubes, enabling efficient correctness proofs.

▶ [Affine Transformation on Images - Translation, Scaling and Interpolation](https://www.youtube.com/watch?v=iupGRvJf7IQ) — drSigPro · 23:42 · 4 years ago

### HyperVerITAS authors talk
The authors' own presentation of HyperVerITAS provides the most direct and authoritative insight into their system design, contributions, and evaluation results. This talk contextualizes the theoretical foundations and practical implementations in a concise format.

*How the paper uses it:* This talk is the primary source for understanding the design and evaluation of HyperVerITAS from its creators.

▶ [HyperVerITAS: Verifying Image Transformations at Scale on Boolean Hypercubes](https://www.youtube.com/watch?v=h-3ReJz_-H4) — Privacy Enhancing Technologies Symposium · 9:38 · 1 day ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand HyperVerITAS, start by learning the fundamentals of zero-knowledge proof systems, which provide the privacy-preserving cryptographic framework underlying the paper. Next, grasp polynomial commitment schemes, essential for binding polynomial evaluations in proofs. Then, build intuition on affine image transformations, which the system efficiently proves. Finally, explore multilinear polynomial encodings and Boolean hypercube encodings, the core mathematical techniques enabling HyperVerITAS's scalable and efficient verification of image transformations.

### Zero-knowledge proof systems *(prerequisite)*
Zero-knowledge proofs let one party prove a statement is true without revealing any additional information. They are foundational for privacy-preserving cryptography and underpin systems that verify computations or data transformations securely.

*How the paper uses it:* HyperVerITAS builds on zero-knowledge proofs to verify image transformations without revealing the images themselves.

▶ [Zero Knowledge Proofs - Computerphile](https://www.youtube.com/watch?v=HUs1bH85X9I) — Computerphile · 9:39 · 8 years ago

### Polynomial commitment schemes *(prerequisite)*
Polynomial commitment schemes enable one to commit to a polynomial and later prove evaluations at points without revealing the entire polynomial. This cryptographic primitive is crucial for efficient and secure proof systems.

*How the paper uses it:* HyperVerITAS uses polynomial commitments to bind polynomial encodings of images and transformations, supporting both pairing-based and post-quantum secure schemes.

▶ [An overview of Polynomial Commitment | Chih-Cheng Liang](https://www.youtube.com/watch?v=_mZN283uPBs) — Papers We Love Taipei · 30:50 · 5 years ago

### Affine image transformations proofs
Affine transformations include operations like cropping, scaling, and grayscaling, which can be represented as linear maps plus translation. Understanding these helps grasp how image edits can be efficiently verified without complex circuit encodings.

*How the paper uses it:* HyperVerITAS efficiently proves correctness of affine image transformations without costly R1CS encodings, enabling composition of multiple edits in one proof.

▶ [Affine Transformation on Images - Translation, Scaling and Interpolation](https://www.youtube.com/watch?v=iupGRvJf7IQ) — drSigPro · 23:42 · 4 years ago

### Boolean hypercube encodings *(prerequisite)*
Boolean hypercube encodings represent data points as vertices of an n-dimensional cube with Boolean coordinates, enabling structured polynomial operations and efficient proofs over discrete domains.

*How the paper uses it:* HyperVerITAS encodes images and transformations over Boolean hypercubes to enable scalable multilinear polynomial operations.

▶ [Intro to Hypercube Graphs (n-cube or k-cube graphs) | Graph Theory, Hypercube Graph](https://www.youtube.com/watch?v=5CA_RliXe5M) — Wrath of Math · 8:42 · 7 years ago

### HyperVerITAS authors talk
A direct presentation by the authors provides an overview and insights into the design, implementation, and evaluation of HyperVerITAS, complementing foundational knowledge with system-specific details.

*How the paper uses it:* This talk explains the system design and key innovations of HyperVerITAS from the authors themselves.

▶ [HyperVerITAS: Verifying Image Transformations at Scale on Boolean Hypercubes](https://www.youtube.com/watch?v=h-3ReJz_-H4) — Privacy Enhancing Technologies Symposium · 9:38 · 1 day ago

## Already in your library

- [Homomorphic Encryption Simplified](https://www.youtube.com/watch?v=lNw6d05RW6E) — also for: VESTA: A Secure and Efficient FHE-based Three-Party Vectorized Evaluation System for Tree Aggregation Models (Hongyuan Liu)
- [S. Venkitesh. On Probabilistic Approximations of Boolean Functions via Polynomials](https://www.youtube.com/watch?v=VXrIM2ywlHU) — also for: From Promises to Totality: A Framework for Ruling Out Quantum Speedups (Supartha Podder)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder for understanding HyperVerITAS. The beginner project recreates a core concept of multilinear polynomial encoding on small images using familiar tools. The intermediate project implements a simplified version of HyperVerITAS's affine transformation proof on a public image dataset, comparing performance against a baseline. The advanced project extends the system to support a more complex, non-affine image transformation, addressing a stated limitation and exploring scalability.

### Beginner — Multilinear Polynomial Encoding of Small Images
*Effort: a weekend, ~8 hours*

You build a small Python script that encodes a low-resolution grayscale image (e.g., 64x64 pixels) as a multilinear polynomial over a Boolean hypercube. The project includes visualization of the encoding and a simple verification that the polynomial evaluation matches the original image pixels.

**Why it shows you understood the paper:** This project demonstrates you understand the core mathematical encoding technique HyperVerITAS uses to represent images efficiently, a key innovation that reduces memory and computation.

**Grounded in:** Design of a scalable zero-knowledge proof system using multilinear IOPs and Boolean hypercube encodings to reduce memory and computation.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Use a publicly available small grayscale image such as the 'Lenna' test image or generate a synthetic 64x64 grayscale image.

**Build it:**

1. Load or generate a 64x64 grayscale image as a 2D NumPy array.
2. Implement multilinear polynomial encoding over the Boolean hypercube for the image pixels.
3. Write a function to evaluate the polynomial at Boolean points and verify it matches the original image.
4. Visualize the original image and a heatmap of polynomial coefficients or evaluations.
5. Document the encoding process and its relation to HyperVerITAS's approach.

**Ships as:** A GitHub repo with Python code, a README explaining multilinear polynomial encoding, and visualizations showing the encoding correctness.

**Stretch goal:** Add support for RGB images by encoding each channel separately and compare memory usage.

### Intermediate — Affine Image Transformation Proof Prototype
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of HyperVerITAS's affine transformation proof system for verifying cropping and grayscaling on small images (e.g., 256x256). You compare proof generation time and memory usage against a naive baseline that reprocesses images without proof.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method of efficient affine transformation proofs without R1CS, demonstrating grasp of the system's main cryptographic innovation and practical performance benefits.

**Grounded in:** Efficient affine transformation proofs that avoid costly R1CS circuit encodings and allow composition of multiple edits in a single proof.

**Tech stack:** Python 3.11, NumPy, Pillow, Matplotlib

**Data:** Use publicly available small images such as CIFAR-10 or generate synthetic 256x256 RGB images as substitutes for the paper's data.

**Build it:**

1. Implement multilinear polynomial encoding for 256x256 RGB images, encoding each channel separately.
2. Implement affine transformations: cropping and grayscaling as multilinear polynomial operations.
3. Build a proof generator that outputs a proof object encoding correctness of the transformation without revealing the original image.
4. Implement a naive baseline that applies transformations without proof.
5. Measure and compare proof generation time and memory usage between your system and the baseline.
6. Write a README explaining the implementation, results, and relation to HyperVerITAS.

**Ships as:** A GitHub repo with code implementing affine transformation proofs, performance comparison scripts, and documentation linking to the paper's contributions.

**Stretch goal:** Add support for composing multiple affine edits in a single proof and measure impact on performance.

### Advanced — Extending HyperVerITAS to Non-Affine Image Transformations
*Effort: 3+ weeks*

You develop an extension to the HyperVerITAS proof framework to support a non-affine image transformation such as contrast adjustment or nonlinear color mapping. You design and implement the multilinear polynomial encoding adaptations needed, evaluate scalability on medium-resolution images (e.g., 512x512), and analyze proof size and generation time.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, showing deep comprehension of the system's architecture and the challenges in extending it to more complex transformations while maintaining scalability.

**Grounded in:** Extending support to a broader class of affine and non-linear image transformations.

**Tech stack:** Python 3.11, NumPy, Pillow, Matplotlib, Optional: C++ for performance-critical parts

**Data:** Use publicly available medium-resolution images such as from the BSD500 dataset or generate synthetic 512x512 images to simulate real-world inputs.

**Build it:**

1. Study the existing multilinear polynomial encoding and affine transformation proof approach from the paper and your intermediate project.
2. Design a polynomial encoding scheme for a chosen non-affine transformation (e.g., contrast adjustment).
3. Implement the encoding and proof generation for this transformation.
4. Evaluate proof generation time, proof size, and memory usage on 512x512 images.
5. Compare results to affine transformation proofs and discuss scalability trade-offs.
6. Document challenges, design decisions, and potential improvements.

**Ships as:** A GitHub repo with code implementing non-affine transformation proofs, performance evaluation scripts, and a detailed README discussing the extension and its relation to HyperVerITAS.

**Stretch goal:** Explore integrating post-quantum polynomial commitment schemes into your extension to evaluate proof size and verification costs.

_The paper authors have not released code for HyperVerITAS, so the intermediate and advanced projects require reimplementation from the paper's descriptions; public image datasets are used as substitutes for the paper's proprietary or high-resolution images._
