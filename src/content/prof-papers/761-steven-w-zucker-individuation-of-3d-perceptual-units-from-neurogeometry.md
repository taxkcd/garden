---
title: "761 · Individuation of 3D perceptual units from neurogeometry of binocular cells — Steven W. Zucker"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-steven-w-zucker"
source_hash: "77c59a91e8600c2a4fb9f0a24331b61c9a0fc78c387785270f0f45dcd8691921"
sequence: 761
generator: "outreach-garden: managed"
---

# 761 · Individuation of 3D perceptual units from neurogeometry of binocular cells

## At a glance

- **Professor:** Steven W. Zucker
- **Institution:** Yale University
- **Paper:** [Individuation of 3D perceptual units from neurogeometry of binocular cells](https://arxiv.org/pdf/2410.02870)
- **Authors:** M. V. Bolelli, G. Citti, A. Sarti, S. W. Zucker
- **Year:** 2024

## Paper overview

This paper presents a neurogeometric model for understanding how the brain processes stereo vision to identify three-dimensional objects. It introduces a mathematical framework that models binocular vision using sub-Riemannian geometry and stochastic processes to solve the stereo correspondence problem and segment 3D perceptual units. The approach integrates neural-inspired algorithms with spectral clustering to group corresponding points from left and right retinal images into coherent 3D objects, outperforming traditional Euclidean methods.

### Why it matters

**Research problem:** The fundamental challenge addressed is the stereo correspondence problem: determining the correct pairing of points between the two retinal images to reconstruct accurate 3D perceptual units. This problem is underdetermined because multiple pairings can produce plausible 3D scenes, making it difficult to identify the true 3D structure from binocular inputs.

**Why it matters:** Solving the stereo correspondence problem is critical for computer vision and neuroscience because it underpins 3D scene reconstruction, which is essential for applications in robotics, biomedicine, and understanding human visual perception. Accurate 3D perception enables flexible and general visual understanding, which remains primitive in artificial systems compared to biological vision.

**Key contributions:**

- Extension of sub-Riemannian neurogeometric models to binocular vision in 3D position-orientation space.
- Introduction of a stochastic model for cortical connectivity and derivation of a connectivity kernel encoding 3D good continuation.
- Formulation of a mean field neural population activity model incorporating the connectivity kernel.
- Application of spectral clustering on the affinity matrix derived from the kernel to identify 3D perceptual units and solve the stereo correspondence problem.
- Demonstration that sub-Riemannian metrics outperform Euclidean-type kernels in grouping and stereo matching tasks.

## About the professor

**Steven W. Zucker** — Yale University.

Research interests: Computational vision, Computational neuroscience, Computational biology

### Research links

- [Faculty/profile page](http://www.cs.yale.edu/~vision/zucker/steve.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** sub-Riemannian geometry
**The paper assumes:** graduate-level differential geometry, hypoelliptic operators, and stochastic processes on manifolds
**Already in this field?** Skip this entirely if you already have a solid understanding of differential geometry focused on sub-Riemannian structures and their applications in stochastic analysis.

This background focuses on sub-Riemannian geometry, which is central to understanding the neurogeometric model of binocular vision presented in the paper. The rigorous course option provides a deep, mathematically thorough treatment of stochastic processes and differential geometry relevant to hypoelliptic operators and connectivity kernels. The fast track offers a concise, focused introduction to diffusion on sub-Riemannian manifolds, giving intuition and foundational concepts in a shorter time frame. Choose the course for comprehensive mastery or the fast track for a quicker conceptual grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stochastic and Turbulent Transport - CL677](https://www.youtube.com/playlist?list=PLY9GUh3Wn7c4) — Jason Picardo · 23 videos · 25.9h across 23 episodes

**Watch only this:** Lectures 4 through 11, about 8 hours — covering Markov processes, Fokker-Planck equations, stochastic differential equations, Ito calculus, and geometric random walks, which are essential for understanding the stochastic and geometric foundations of the connectivity kernel.

*Why it unblocks this paper:* Jason Picardo's "Stochastic and Turbulent Transport - CL677" covers stochastic differential equations, Fokker-Planck equations, and geometric random walks, which underpin the stochastic modeling and hypoelliptic operators used in the paper's connectivity kernel derivation and neural population modeling.

*If you want all of it:* 25.9 hours across all 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Course "Diffusion on sub-Riemannian manifolds"](https://www.youtube.com/playlist?list=PLtl6keRohojPodguNPrGs7M8VcJNxYXHZ) — Geometric Analysis · 7 videos · 10.5h across 7 episodes

**Watch only this:** Episodes 1 through 3, about 4.5 hours — these cover the basics of sub-Riemannian geometry and diffusion processes, sufficient to grasp the core mathematical framework used in the paper.

*Why it unblocks this paper:* The "Diffusion on sub-Riemannian manifolds" series by Ugo Boscain provides a focused and accessible introduction to diffusion processes on sub-Riemannian spaces, directly relevant to the hypoelliptic operators and connectivity kernels in the paper, with clear explanations and visual intuition.

*If you want all of it:* 10.5 hours across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To thoroughly understand the paper on neurogeometric modeling of binocular vision and 3D perceptual units, start by grasping the foundational problems and mathematical tools involved. Begin with the stereo correspondence problem, which is the core vision challenge addressed. Then study spectral clustering methods, which are the computational techniques used for segmentation. Next, delve into stochastic differential equations as they model cortical connectivity and neural dynamics in the paper. Follow this with the neurogeometry of the visual cortex to understand the biological and geometric basis of the model. Finally, focus on the core concept of sub-Riemannian geometry as the central mathematical framework, and conclude with the authors' own talk if available for the most direct insight into their work.

### Stereo correspondence problem *(prerequisite)*
Understanding the stereo correspondence problem is essential as it defines the fundamental challenge of matching points between two retinal images to reconstruct 3D scenes. This section covers advanced lectures and university talks that rigorously explain the problem and its computational complexity in computer vision.

*How the paper uses it:* The paper addresses the stereo correspondence problem as the key challenge in reconstructing accurate 3D perceptual units from binocular inputs.

▶ [CVFX Lecture 15: Stereo correspondence](https://www.youtube.com/watch?v=kxsvG4sSuvA) — Rich Radke · 1:14:27 · 12y ago

### Spectral clustering methods *(prerequisite)*
Spectral clustering is a key computational technique used in the paper to segment 3D perceptual units from affinity matrices derived from the connectivity kernel. This section includes advanced seminar talks and university lectures that provide a deep understanding of spectral clustering algorithms and their theoretical foundations.

*How the paper uses it:* The paper applies spectral clustering on the affinity matrix derived from the connectivity kernel to identify 3D perceptual units and solve the stereo correspondence problem.

▶ [Stanford CS229M - Lecture 20: Spectral clustering](https://www.youtube.com/watch?v=UYBRLG64oSQ) — Stanford Online · 1:28:25 · 3y ago

### Stochastic differential equations in neuroscience *(prerequisite)*
Stochastic differential equations (SDEs) model the cortical connectivity and neural population dynamics underlying the connectivity kernel in the paper. This section features advanced seminars and research talks that explain SDEs in the context of neuroscience and machine learning, providing the mathematical and modeling background necessary to understand the paper's approach.

*How the paper uses it:* The paper models cortical connectivity using stochastic differential equations to derive the connectivity kernel encoding 3D good continuation.

▶ [Latent Stochastic Differential Equations for Irregularly-Sampled Time Series - David Duvenaud](https://www.youtube.com/watch?v=93wr5vhI0F4) — Institute for Advanced Study · 1:05:28 · 6y ago

### Neurogeometry of visual cortex *(prerequisite)*
Neurogeometry links the geometry of visual stimuli with the neural architecture of the visual cortex, forming the theoretical foundation of the paper's neurogeometric model. This section includes university lectures and research seminars that explore the structure and function of the visual cortex from a geometric and computational perspective.

*How the paper uses it:* The paper builds on neurogeometric frameworks to model binocular vision and cortical connectivity in a 5D position-orientation space.

▶ [Lecture 04: Primary Visual Cortex](https://www.youtube.com/watch?v=vjv6rYehzqE) — caltech · 1:27:47 · 13y ago

### Sub-Riemannian geometry in vision
Sub-Riemannian geometry is the central mathematical framework used in the paper to model binocular vision and cortical connectivity. This section provides advanced lectures and seminars on sub-Riemannian geometry, focusing on its applications in vision science and geometric control theory, essential for understanding the paper's novel contributions.

*How the paper uses it:* The paper extends sub-Riemannian neurogeometric models to binocular vision in 3D position-orientation space, forming the core mathematical basis of the approach.

▶ [Spectrum and abnormals in sub-Riemannian geometry: the 4D quasi-contact case - Nikhil Savale](https://www.youtube.com/watch?v=iPuM9XonqaY) — Institute for Advanced Study · 58:58 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the fundamental concepts needed to understand the paper's approach to solving the stereo correspondence problem using neurogeometric models. We start with the basics of stereo vision and the stereo correspondence problem, then cover spectral clustering methods used for grouping data points, followed by stochastic differential equations modeling neural connectivity, and finally the specialized sub-Riemannian geometry framework central to the paper's novel binocular vision model.

### Stereo correspondence problem *(prerequisite)*
The stereo correspondence problem involves matching points between two images taken from slightly different viewpoints (like our two eyes) to reconstruct the 3D structure of a scene. Understanding this problem is essential because the paper proposes a new method to solve it more accurately by modeling binocular vision.

*How the paper uses it:* The paper addresses the stereo correspondence problem as the fundamental challenge in reconstructing accurate 3D perceptual units from binocular inputs.

▶ [Stereo 3D Vision (How to avoid being dinner for Wolves) - Computerphile](https://www.youtube.com/watch?v=O7B2vCsTpC0) — Computerphile · 7:26 · 10y ago

### Spectral clustering methods *(prerequisite)*
Spectral clustering is a technique that uses the eigenvectors of an affinity matrix to group data points into clusters based on their similarity. This method is powerful for segmenting complex data structures and is used in the paper to identify coherent 3D perceptual units from binocular image data.

*How the paper uses it:* The paper applies spectral clustering on the affinity matrix derived from the connectivity kernel to segment 3D perceptual units and solve the stereo correspondence problem globally.

▶ [Spectral Clustering Explained (Step-by-Step) | Python Tutorial for Beginners](https://www.youtube.com/watch?v=9xZRFvWwywQ) — Coursesteach · 4:48 · 6mo ago

### Stochastic differential equations in neuroscience *(prerequisite)*
Stochastic differential equations (SDEs) model systems influenced by random noise, such as neural activity and connectivity in the brain. Understanding SDEs helps grasp how the paper models cortical connectivity probabilistically to derive the connectivity kernel encoding neural co-occurrence probabilities.

*How the paper uses it:* The paper models cortical connectivity using stochastic differential equations and derives a connectivity kernel as a fundamental solution to a hypoelliptic operator.

▶ [Simulation of stochastic differential equations](https://www.youtube.com/watch?v=-fTHOikkGN8) — NPTEL-NOC IITM · 35:20 · 6y ago

### Sub-Riemannian geometry in vision
Sub-Riemannian geometry generalizes classical geometry to spaces with constraints on allowed directions of movement, which is useful for modeling the brain's visual processing that depends on position and orientation. This framework underpins the paper's neurogeometric model of binocular vision in a 5D space combining 3D position and orientation.

*How the paper uses it:* The paper extends sub-Riemannian neurogeometric models to binocular vision by representing position and orientation in a 5D space (R3 ⋊ S2) and uses this geometry to define the connectivity kernel.

▶ [What is a sub-Riemannian manifold?](https://www.youtube.com/watch?v=7EfgaHyx6hw) — Young Measures · 11:52 · 2y ago

## Already in your library

- [3. The lateral geniculate nucleus and the visual cortex](https://www.youtube.com/watch?v=T9HYPlE8xzc) — also for: Incorporating Visual Cortical Lateral Connection Properties into CNN: Recurrent Activation and Excitatory-Inhibitory Separation (Yoonsuck Choe)
- [Lecture 9.1: Tomaso Poggio - iTheory: Visual Cortex & Deep Networks](https://www.youtube.com/watch?v=IeD8VXfqPyQ) — also for: Incorporating Visual Cortical Lateral Connection Properties into CNN: Recurrent Activation and Excitatory-Inhibitory Separation (Yoonsuck Choe)
- [35. Finding Clusters in Graphs](https://www.youtube.com/watch?v=cxTmmasBiC8) — also for: Semantic Data Processing with Holistic Data Understanding (Aditya G. Parameswaran)
- [Lecture 34 — Spectral Clustering Three Steps (Advanced) | Stanford University](https://www.youtube.com/watch?v=uxsDKhZHDcc) — also for: A Comparative Study of Gene Co-Expression Thresholding Algorithms (Michael A. Langston)
- [21. Stochastic Differential Equations](https://www.youtube.com/watch?v=qdbkvD4N-us) — also for: Optimal control for stochastic neural oscillators (Frédéric Gibou)
- [But what is a partial differential equation? | DE2](https://www.youtube.com/watch?v=ly4S0oi3Yz8) — also for: Poisson Problems in Computer Graphics (Marc Olano)
- [Visual Processing and the Visual Cortex](https://www.youtube.com/watch?v=MgMNUne9j9c) — also for: Incorporating Visual Cortical Lateral Connection Properties into CNN: Recurrent Activation and Excitatory-Inhibitory Separation (Yoonsuck Choe)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the neurogeometric model for stereo correspondence presented in the paper. Starting with a beginner-level visualization of sub-Riemannian vs Euclidean kernels, you then implement the core spectral clustering method on synthetic stereo data at the intermediate level. Finally, the advanced project extends the model to handle non-parallel retinal planes, addressing a key limitation noted by the authors and exploring computational optimizations.

### Beginner — Visualizing Sub-Riemannian vs Euclidean Kernels for 3D Point Grouping
*Effort: a weekend, ~8 hours*

You build a small Python notebook that simulates a simplified 3D point cloud representing binocular retinal correspondences and computes affinity matrices using both sub-Riemannian and Euclidean kernels. You visualize and compare these affinity matrices and their spectral embeddings to illustrate how sub-Riemannian kernels better capture 3D good continuation.

**Why it shows you understood the paper:** This project shows you grasp the core mathematical concept of sub-Riemannian connectivity kernels and their advantage over classical Euclidean kernels in grouping 3D perceptual units, a central claim of the paper.

**Grounded in:** Sub-Riemannian kernels provide superior performance in grouping and segmentation compared to classical Gaussian kernels based on Euclidean distances.

**Tech stack:** Python 3.11, NumPy, Matplotlib, scikit-learn

**Data:** Synthetic 3D point clouds generated in code to mimic binocular correspondence points with orientation features.

**Build it:**

1. Generate a synthetic 3D point cloud with position and orientation attributes representing binocular correspondences.
2. Implement affinity matrix computation using a Gaussian kernel based on Euclidean distance.
3. Implement affinity matrix computation using a simplified sub-Riemannian kernel approximating the hypoelliptic operator.
4. Visualize and compare the affinity matrices and their spectral embeddings (eigenvectors) using matplotlib.
5. Write a README explaining the difference between the kernels and how the visualization relates to the paper's claims.

**Ships as:** A Jupyter notebook and README showing visual comparisons of affinity matrices and spectral embeddings for Euclidean vs sub-Riemannian kernels on synthetic 3D data.

**Stretch goal:** Add interactive visualization with sliders to tune kernel parameters and observe effects on clustering.

### Intermediate — Implementing Spectral Clustering for Stereo Correspondence Using Neurogeometric Kernels
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core method of constructing the connectivity kernel from stochastic differential equations and performing spectral clustering to identify 3D perceptual units from binocular stereo data. You compare the sub-Riemannian kernel against a Euclidean Gaussian baseline on a synthetic stereo dataset and report clustering quality metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's neurogeometric model and spectral clustering approach into working code, validating the key result that sub-Riemannian kernels outperform Euclidean ones in stereo matching.

**Grounded in:** Application of spectral clustering on the affinity matrix derived from the kernel to identify 3D perceptual units and solve the stereo correspondence problem; sub-Riemannian kernels outperform Euclidean-type kernels in grouping and stereo matching tasks.

**Tech stack:** Python 3.11, NumPy, SciPy, scikit-learn, Jupyter Notebook

**Data:** Synthetic binocular stereo point correspondences generated with known ground truth 3D objects and orientations, created in code to simulate the paper's assumptions.

**Build it:**

1. Implement a stochastic simulation of cortical connectivity using Euler-Maruyama to approximate the connectivity kernel as described in the paper.
2. Construct the affinity matrix for pairs of points from left and right retinal images using the sub-Riemannian kernel.
3. Implement spectral clustering on the affinity matrix to segment 3D perceptual units.
4. Implement a baseline using a classical Gaussian kernel based on Euclidean distance for comparison.
5. Evaluate and compare clustering results using metrics such as normalized mutual information or adjusted Rand index against ground truth.
6. Document the implementation details, results, and comparison in a Jupyter notebook and README.

**Ships as:** A reproducible Jupyter notebook with code implementing the connectivity kernel, spectral clustering, baseline comparison, and quantitative evaluation on synthetic stereo data.

**Stretch goal:** Incorporate parameter tuning for diffusion coefficient and evolution time to observe effects on clustering quality.

### Advanced — Extending Neurogeometric Stereo Model to Non-Parallel Retinal Geometries with Optimized Kernel Computation
*Effort: 3+ weeks*

You extend the paper's model by relaxing the assumption of parallel retinal planes and fixed y-coordinates, implementing a more general retinal geometry for binocular correspondence. You optimize the Monte Carlo kernel estimation for faster computation and demonstrate spectral clustering on dynamic or more complex stereo scenes.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep comprehension of the neurogeometric framework and the computational challenges involved, while contributing a meaningful extension that could interest the research group.

**Grounded in:** The model assumes parallel retinal planes and fixed y-coordinates for initial point pairing, which may limit generality in more complex viewing geometries; future directions include extension to more general retinal geometries and optimization of numerical methods.

**Tech stack:** Python 3.11, NumPy, SciPy, scikit-learn, Jupyter Notebook, Cython or Numba for optimization

**Data:** Synthetic stereo data generated with non-parallel retinal geometries and dynamic scenes simulated in code.

**Build it:**

1. Model binocular retinal geometry with non-parallel planes and variable y-coordinates for point correspondences.
2. Adapt the stochastic differential equation simulation and kernel estimation to this generalized geometry.
3. Implement computational optimizations for Monte Carlo kernel estimation using vectorized code or JIT compilation.
4. Perform spectral clustering on the affinity matrix derived from the optimized kernel.
5. Compare results qualitatively and quantitatively against the original parallel-plane model on synthetic datasets.
6. Prepare detailed documentation and analysis of the extension, optimization, and results.

**Ships as:** A well-documented codebase and Jupyter notebooks demonstrating the extended model, optimized kernel computation, and improved stereo correspondence on generalized retinal geometries.

**Stretch goal:** Explore integration with higher-level visual processing models or real stereo camera data for validation.
