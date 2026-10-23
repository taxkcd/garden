---
title: "954 · Frenet-Serret Frame-based Decomposition for Part Segmentation of 3D Curvilinear Structures — Donglai Wei"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-donglai-wei"
source_hash: "1a2d2156bca16d2b72c2b7342e7e2501450b34848d71b9ce74c846774b726064"
sequence: 954
generator: "outreach-garden: managed"
---

# 954 · Frenet-Serret Frame-based Decomposition for Part Segmentation of 3D Curvilinear Structures

## At a glance

- **Professor:** Donglai Wei
- **Institution:** Boston College
- **Paper:** [Frenet-Serret Frame-based Decomposition for Part Segmentation of 3D Curvilinear Structures](https://arxiv.org/pdf/2404.14435)
- **Authors:** Leslie Gu, Jason Ken Adhinarta, Mikhail Bessmeltsev, Jiancheng Yang, Yongjie Jessica Zhang, Wenjie Yin, Daniel Berger, Jeff Lichtman, Hanspeter Pfister, Donglai Wei
- **Year:** 2024

## Paper overview

This paper introduces a new method to segment complex 3D curvilinear biological structures, such as dendritic spines on neurons, by decomposing them into a smooth backbone curve and a cylindrical representation of local geometry. This decomposition simplifies the learning problem, improves segmentation accuracy, and generalizes well across different species and brain regions. The authors also provide new benchmark datasets and demonstrate superior performance on challenging medical imaging tasks like aneurysm segmentation.

### Why it matters

**Research problem:** Accurate segmentation of anatomical substructures within 3D curvilinear structures in medical imaging is difficult due to their complex geometry, varying thickness, branching patterns, and the scarcity of large, diverse annotated datasets for training and evaluation.

**Why it matters:** 3D curvilinear structures such as neuronal dendrites and blood vessels are critical for understanding biological systems and medical conditions. Precise segmentation of these structures enables better neuroscience research, disease diagnosis, and treatment planning. Current methods struggle with generalization and data efficiency, limiting their practical utility.

**Key contributions:**

- Introduction of the Frenet-Serret Frame-based Decomposition for 3D curvilinear structures, enabling efficient learning and robust segmentation.
- Development of DenSpineEM, a large-scale benchmark dataset with 4,476 manually annotated dendritic spines from 70 dendrites across multiple species and brain regions.
- Creation of CurviSeg, a synthetic dataset for theoretical validation of segmentation methods on 3D curvilinear structures.
- Demonstration of strong cross-region and cross-species generalization in dendritic spine segmentation.
- Achievement of state-of-the-art performance on intracranial aneurysm segmentation from full artery models using the proposed method.

## About the professor

**Donglai Wei** — Associate Professor of Computer Science, Boston College.

Research interests: Evaluation engine for 3D brain microscopy image analysis; benchmarks, verification, and human-AI feedback for reconstruction.

### Research links

- [Faculty/profile page](https://donglaiw.github.io)
- [Google Scholar](https://scholar.google.com/citations?user=xF2mhDoAAAAJ&hl=en)
- [GitHub](https://github.com/donglaiw)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** differential geometry of curves
**The paper assumes:** differential geometry of curves, Frenet-Serret frames, curvature and torsion of space curves
**Already in this field?** Skip this entirely if you already understand the Frenet-Serret frame and the differential geometry of smooth 3D curves.

To understand the core method of the paper, which relies on the Frenet-Serret frame from differential geometry of curves, it is essential to grasp how smooth 3D curves are represented with orthonormal moving frames, curvature, and torsion. The rigorous course offers a deep and comprehensive university-level treatment of these concepts, while the fast track provides a concise, intuition-driven introduction suitable for quick comprehension. Choose the rigorous course for in-depth mastery or the fast track for a focused overview that covers the essentials efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Classical Differential Geometry of Curves and Surfaces, Dr. T. E. Venkata Balaji, Department of Mathematics, IIT Madras](https://www.youtube.com/playlist?list=PLJoALJA_KMOAcCWrnwqcGwVIA7Q-fvkjs) — SWAYAM Prabha IIT Madras Channels · 52 videos · 45.3h across 52 episodes

**Watch only this:** Lectures 18 to 22, about 4.3 hours — covering the Frenet-Serret equations for plane and space curves, understanding the Frenet-Serret frame, torsion, and their significance.

*Why it unblocks this paper:* This is a comprehensive university lecture series by Dr. T. E. Venkata Balaji at IIT Madras that explicitly covers the Frenet-Serret frame, curvature, torsion, and related differential geometry concepts foundational to the paper's decomposition method.

*If you want all of it:* 45.3 hours across 52 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [📘 Complete Differential Geometry Lecture Series | Curves, Surfaces, and Geometric Structures Explained](https://www.youtube.com/playlist?list=PLegF_VNXL0suXncAc6X0hQyQR_JMZ8aU7) — Rishi Kumar Tiwari · 13 videos · 3.4h across 13 episodes

**Watch only this:** Episodes 11 to 13, about 45 minutes — focusing on osculating circles, curvature, torsion, and the Frenet-Serret frame.

*Why it unblocks this paper:* This concise 3.4-hour series by Rishi Kumar Tiwari explains curvature and torsion with clear visual intuition and step-by-step derivations, including the Frenet-Serret frame, making it ideal for a quick yet solid understanding of the key concepts used in the paper.

*If you want all of it:* 3.4 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Frenet-Serret Frame-based Decomposition for 3D curvilinear structure segmentation, start by grounding yourself in the essential preprocessing step of 3D skeletonization methods, which extract smooth backbone curves from volumetric data. Next, study coordinate transformations in 3D geometry, focusing on cylindrical coordinate systems, as these are crucial for the paper's rotation-invariant representation. Then, explore point cloud segmentation techniques to grasp how local geometry segmentation is performed after coordinate transformation. Finally, delve into the core mathematical tool of Frenet-Serret frames and curve decomposition, which underpins the paper's novel decomposition method.

### 3D skeletonization methods *(prerequisite)*
Skeletonization is a critical preprocessing step in the paper's pipeline, used to extract smooth backbone curves from volumetric data representing 3D curvilinear structures. Understanding skeletonization algorithms and their properties will help appreciate the challenges and importance of this step in the overall segmentation approach.

*How the paper uses it:* The paper's pipeline begins with skeletonization to obtain the backbone curve for Frenet-Serret frame computation.

▶ [QBI 2021 Lecture 7 - Part 1: Skeletonization](https://www.youtube.com/watch?v=0MOBX1acqH0) — PSI-Research with Neutrons and Muons · 45:31 · 5y ago

### Coordinate transformations in 3D geometry *(prerequisite)*
The paper transforms Cartesian point clouds into cylindrical coordinates aligned with the Frenet-Serret frame to achieve rotation invariance and simplify segmentation. A solid understanding of cylindrical coordinate systems and their relation to Cartesian coordinates is essential to grasp this transformation step.

*How the paper uses it:* The method uses cylindrical coordinate transformation aligned with the Frenet-Serret frame for rotation-invariant representation.

▶ [Lecture: 32 Coordinate systems: cylindrical coordinates](https://www.youtube.com/watch?v=JizpdhZqzQc) — IIT Roorkee July 2018 · 26:21 · 2y ago

### Point cloud segmentation techniques *(prerequisite)*
After coordinate transformation, the paper performs point-based segmentation on the cylindrical primitive representation. Familiarity with advanced point cloud segmentation methods, especially those used in research contexts, will clarify how local geometry is segmented effectively in this framework.

*How the paper uses it:* Point cloud segmentation is the key approach for segmenting local geometry after the Frenet-Serret based coordinate transformation.

▶ [Lecture 18 - Efficient Point Cloud Recognition | MIT 6.S965](https://www.youtube.com/watch?v=fKIxpM-F0zw) — MIT HAN Lab · 1:14:54 · 3y ago

### Frenet-Serret frame and curve decomposition *(paper-talk search result; attribution unverified)*
The Frenet-Serret frame is the core mathematical tool enabling the decomposition of 3D curvilinear structures into a smooth backbone curve and local cylindrical geometry. Understanding the Frenet-Serret formulas, curvature, torsion, and the TNB frame is fundamental to fully grasp the paper's novel decomposition method and its properties like bijectivity and rotation invariance.

*How the paper uses it:* The paper introduces a Frenet-Serret Frame-based Decomposition as the central innovation for robust segmentation of 3D curvilinear structures.

▶ [Frenet Serret frame](https://www.youtube.com/watch?v=O0HP93U3DVU) — Darin Brown SJDC Math · 43:04 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's method for segmenting 3D curvilinear biological structures, start by learning about 3D skeletonization, which extracts smooth backbone curves from volumetric data. Next, grasp coordinate transformations, especially Cartesian to cylindrical coordinates, as the paper aligns point clouds with Frenet-Serret frames using cylindrical coordinates. Then, study point cloud segmentation techniques, essential for segmenting local geometry after transformation. Finally, build intuition on the Frenet-Serret frame and curve decomposition, the core mathematical tool enabling the paper's novel decomposition approach.

### 3D skeletonization methods *(prerequisite)*
Skeletonization reduces complex 3D shapes to their central curves or 'skeletons,' preserving topology while simplifying geometry. This step is crucial for extracting smooth backbone curves from volumetric biological data, enabling easier analysis and segmentation.

*How the paper uses it:* The paper's pipeline begins with skeletonization to extract the smooth backbone curve for Frenet-Serret frame computation.

▶ [QBI 2023 Lecture 7 - Part 1: Skeletonization and topology analysis](https://www.youtube.com/watch?v=JxMMQed40E0) — PSI-Research with Neutrons and Muons · 46:10 · 3y ago

### Coordinate transformations in 3D geometry *(prerequisite)*
Coordinate transformations convert points from one system to another, such as Cartesian to cylindrical coordinates, which represent points by radius, angle, and height. Understanding this is key to aligning data with the Frenet-Serret frame and achieving rotation-invariant representations.

*How the paper uses it:* The method transforms point clouds from Cartesian to cylindrical coordinates aligned with the Frenet-Serret frame for simplified, rotation-invariant segmentation.

▶ [Cylindrical Coordinate System Explained | Cartesian to Cylindrical Vector Conversion Explained](https://www.youtube.com/watch?v=c_uhZ-yl-Rs) — ALL ABOUT ELECTRONICS · 31:55 · 9mo ago

### Point cloud segmentation techniques *(prerequisite)*
Point cloud segmentation involves classifying or grouping points in 3D space based on geometric or semantic features. This is essential for identifying local structures after transforming the data into the Frenet-Serret aligned coordinate system.

*How the paper uses it:* After coordinate transformation, the paper applies point-based segmentation to the cylindrical primitive representing local geometry.

▶ [PointNet Explained: Deep Learning for Point Clouds](https://www.youtube.com/watch?v=dfSlVErCCJU) — Dinesh Kumar · 7:51 · 6mo ago

### Frenet-Serret frame and curve decomposition
The Frenet-Serret frame is a moving coordinate system along a 3D curve defined by tangent, normal, and binormal vectors, capturing curvature and torsion. Decomposing a complex 3D structure into a smooth backbone curve with this frame allows for rotation-invariant, bijective representation of local geometry.

*How the paper uses it:* The core of the paper is the Frenet-Serret Frame-based Decomposition, splitting 3D curvilinear structures into a smooth curve and cylindrical primitives for robust segmentation.

▶ [Torsion: How curves twist in space, and the TNB or Frenet Frame](https://www.youtube.com/watch?v=VIqA8U9ozIA) — Dr. Trefor Bazett · 10:48 · 6y ago

## Already in your library

- [PointNet | Lecture 43 (Part 1) | Applied Deep Learning](https://www.youtube.com/watch?v=hgtvli571_U) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the Frenet-Serret Frame-based Decomposition (FFD) method introduced in the paper. Starting with a beginner-level implementation of the Frenet-Serret frame computation on simple 3D curves, you then move to an intermediate project that reimplements the core decomposition and segmentation pipeline on synthetic curvilinear data. Finally, the advanced project extends the method to a new anatomical domain, addressing one of the paper's stated future directions and limitations.

### Beginner — Frenet-Serret Frame Computation on 3D Curves
*Effort: a weekend (~6-8 hours)*

You implement a Python script that takes a 3D parametric curve (e.g., a helix or spline) and computes the Frenet-Serret frame (tangent, normal, binormal vectors) along the curve. You visualize the curve and its Frenet-Serret frames using 3D plotting to demonstrate the frame's rotation and orthonormality.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core geometric concept underlying the paper's decomposition method, showing you can compute and visualize the Frenet-Serret frame which is essential for the cylindrical coordinate transformation.

**Grounded in:** The authors propose the Frenet–Serret Frame-based Decomposition, decomposing 3D curvilinear geometries into a smooth C2 curve and cylindrical primitive for efficient learning and robust segmentation.

**Tech stack:** Python 3.11, NumPy, Matplotlib (3D plotting)

**Data:** Synthetic 3D parametric curves generated in code (e.g., helix, circle, spline).

**Build it:**

1. Implement functions to compute the first and second derivatives of a 3D parametric curve.
2. Calculate the tangent, normal, and binormal vectors at sampled points along the curve using Frenet-Serret formulas.
3. Verify orthonormality of the computed frame vectors and apply Gram-Schmidt orthogonalization if needed.
4. Visualize the 3D curve and overlay the Frenet-Serret frames at multiple points using Matplotlib.
5. Document the code and include explanations linking the implementation to the paper's description.

**Ships as:** A GitHub repo with a Python script and Jupyter notebook showing Frenet-Serret frame computation and 3D visualizations, with clear README explanations.

**Stretch goal:** Add interactive visualization allowing users to modify the curve parameters and observe changes in the Frenet-Serret frame dynamically.

### Intermediate — Reimplementation of Frenet-Serret Frame-based Decomposition and Segmentation on Synthetic Curvilinear Data
*Effort: 1-3 weekends (~20 hours)*

You reimplement the core Frenet-Serret Frame-based Decomposition pipeline described in the paper, including skeletonization, Frenet-Serret frame computation, cylindrical coordinate transformation, and point cloud segmentation on the CurviSeg synthetic dataset. You compare segmentation performance (Dice score) against a baseline point cloud segmentation without decomposition.

**Why it shows you understood the paper:** This project shows you can translate the paper's main method into code, apply it to a relevant dataset, and quantitatively evaluate its benefits, demonstrating comprehension of the decomposition's role in improving segmentation accuracy and data efficiency.

**Grounded in:** FFD consistently improved segmentation performance across all models, with 3.01%∼7.18% increase in DSC on the CurviSeg synthetic dataset.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, NumPy, scikit-learn, Matplotlib

**Data:** CurviSeg synthetic dataset for 3D curvilinear structures segmentation (described in paper; synthetic data generated or simulated if not publicly available).

**Build it:**

1. Implement or adapt a skeletonization method to extract the backbone curve from synthetic 3D curvilinear point clouds.
2. Compute the Frenet-Serret frame along the skeleton curve and transform point cloud coordinates from Cartesian to cylindrical coordinates aligned with the frame.
3. Train a simple point-based segmentation model (e.g., PointNet or PointCNN) on the cylindrical representation.
4. Train the same segmentation model on the original Cartesian coordinates as a baseline.
5. Evaluate and compare segmentation performance using Dice score on a held-out test set.
6. Document the pipeline, results, and insights in a detailed README.

**Verified links from the paper:**

- <https://github.com/seung-lab/kimimaro> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/google/neuroglancer> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo containing code for the decomposition pipeline, segmentation training scripts, evaluation metrics, and a report comparing baseline and FFD-enhanced segmentation.

**Stretch goal:** Incorporate rotation augmentation to verify the rotation invariance property of the decomposition and report results.

### Advanced — Extending Frenet-Serret Frame-based Decomposition to Airway Tree Segmentation
*Effort: several weeks (~4-6 weeks)*

You extend the Frenet-Serret Frame-based Decomposition method to segment airway trees from publicly available CT scan datasets (e.g., EXACT'09 airway segmentation challenge data). You adapt the skeletonization and decomposition pipeline to handle airway morphology, integrate robustness improvements for skeleton discontinuities, and evaluate segmentation accuracy against baseline methods.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper by applying the method to a new anatomical structure with complex branching, demonstrating your ability to innovate beyond the original scope and address robustness challenges.

**Grounded in:** Extending the Frenet-Serret frame-based decomposition to other tubular anatomical structures such as airway trees is proposed as a future direction; skeletonization robustness is a noted limitation.

**Tech stack:** Python 3.11, PyTorch, SimpleITK or ITK, NumPy, scikit-image, Matplotlib

**Data:** Public airway segmentation datasets from CT scans, such as EXACT'09 challenge data (publicly available), used as a substitute for vascular structures.

**Build it:**

1. Acquire and preprocess airway CT scan data to extract airway point clouds or volumetric masks.
2. Implement or adapt a robust skeletonization method suitable for airway trees, addressing discontinuities and noise.
3. Compute Frenet-Serret frames along extracted skeleton branches and perform cylindrical coordinate transformation.
4. Train a point-based segmentation model on the transformed data to segment airway substructures.
5. Compare segmentation performance with baseline methods without decomposition, reporting Dice scores and robustness metrics.
6. Document challenges, solutions, and results, highlighting improvements and limitations.

**Verified links from the paper:**

- <https://github.com/seung-lab/kimimaro> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/google/neuroglancer> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A comprehensive GitHub repository with code, trained models, evaluation scripts, and a detailed report demonstrating the method's extension and robustness improvements on airway segmentation.

**Stretch goal:** Integrate topological priors or geometric constraints into the segmentation model to further improve accuracy and consistency.
