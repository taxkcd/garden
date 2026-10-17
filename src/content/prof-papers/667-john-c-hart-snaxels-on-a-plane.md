---
title: "667 · Snaxels on a Plane — John C. Hart"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-john-c-hart"
source_hash: "04cdde012f7129658a8e33385f54f3ac93b3f62c1b3c613de292c2a2b1723c89"
sequence: 667
generator: "outreach-garden: managed"
---

# 667 · Snaxels on a Plane

## At a glance

- **Professor:** John C. Hart
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [Snaxels on a Plane](http://arxiv.org/abs/1904.09530)
- **Authors:** Kevin Karsch, John C. Hart
- **Year:** 2019

## Paper overview

This paper presents a method called snaxels, which are active contours adapted to work on 3D mesh surfaces, to robustly extract and track closed-loop visual, shadow, and shading contours. These contours form planar maps useful for stylized vector art illustration and animation. The method also converts 3D animated mesh contours into 2D animated SVG curves for efficient vector art animation.

### Why it matters

**Research problem:** Existing algorithms can trace contours on meshed objects but often fail to organize these contours into closed loops that bound regions, which is essential for stylized vector art and animation. Challenges include handling switchbacks caused by surface variations, noise, and maintaining contour correspondences over time for animations.

**Why it matters:** Closed-loop contours and planar maps are critical for producing topologically correct, stylized vector illustrations and animations of 3D objects. Robust and efficient contour extraction and tracking enable applications in illustration, animation, and vector graphics platforms like Flash and PowerPoint.

**Key contributions:**

- Adaptation of snaxels to robustly extract closed-loop visual, shadow, and shading contours on 3D meshes.
- A simpler and more robust method to generate planar maps of mesh regions bounded by these contours.
- A technique to track contour topology changes and maintain correspondences over time for animated meshes.
- Conversion of 3D animated mesh contours into compact, keyframed 2D SVG curve animations suitable for vector art platforms.
- Detection of parabolic points on meshes via contour topology changes.

## About the professor

**John C. Hart** — Professor, Department of Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: computer graphics and data visualization

### Research links

- [Faculty/profile page](https://cs.illinois.edu/directory/profile/jch)
- [Professor website](https://graphics.cs.illinois.edu/jch/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** active contour models
**The paper assumes:** energy-minimizing active contour models, deformable models in computer vision, contour evolution algorithms
**Already in this field?** Skip this entirely if you already understand the theory and implementation of active contour models (snakes) and their applications in image and mesh processing.

To understand the core method of the paper, which adapts snaxels—energy-minimizing active contours—to extract and track closed-loop contours on 3D meshes, a solid grasp of active contour models is essential. The rigorous course option offers a deep, structured university-level treatment of computer vision concepts including contour models, while the fast track provides a shorter, more focused introduction to computer graphics fundamentals that underpin active contour techniques. Choose the rigorous course for a comprehensive foundation or the fast track for a quicker, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1-5 (Introduction, Image Classification with Linear Classifiers, Regularization and Optimization, Neural Networks and Backpropagation, Image Classification with CNNs), about 6 hours total — these cover the foundational vision and learning concepts relevant to active contour models.

*Why it unblocks this paper:* Stanford's CS231N Deep Learning for Computer Vision course covers fundamental concepts in image classification, segmentation, and 3D vision, which are crucial for understanding active contour models and their application to mesh-based contour extraction and tracking as used in the paper.

*If you want all of it:* All 18 lectures, about 21.2 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer Graphics](https://www.youtube.com/playlist?list=PLwdnzlV3ogoWaYiowRtJ8t8FeR-ODfSV1) — NPTEL IIT Guwahati · 36 videos · 21.8h across the first 34 episodes

**Watch only this:** Episodes 3, 4, 5, 6, 7, and 15 (Basics of a graphics system, Introduction to 3D graphics pipeline, Object representation techniques, Various Boundary Representation Techniques, Spline representation – I, Shading models), about 3.8 hours total — these cover the core graphics concepts needed to understand the paper's approach.

*Why it unblocks this paper:* The NPTEL IIT Guwahati Computer Graphics playlist provides focused lectures on 3D graphics pipeline, object representation, and shading models, which give essential background on mesh processing and contour extraction techniques relevant to snaxels.

*If you want all of it:* All 36 episodes, about 21.8 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 'Snaxels on a Plane' paper, start by building foundational knowledge on implicit contour functions and planar maps, which define and organize the contours on meshes. Then, explore contour tracking and topology changes to grasp how the method robustly handles dynamic contour evolution. Finally, focus on the core concept of snaxels on meshes, prioritizing the authors' own talks for the most direct and detailed explanation of their novel method.

### Implicit contour functions *(prerequisite)*
Implicit contour functions define the mathematical surfaces or curves whose zero-level sets correspond to the contours extracted on meshes. Understanding these functions is crucial as the snaxel method relies on implicit contour functions to identify visual, shadow, and shading contours robustly on 3D meshes.

*How the paper uses it:* The paper uses implicit contour functions to define different contour types for snaxel evolution on meshes.

▶ [RI Seminar: David Breen : Level Set Models for Computer ...](https://www.youtube.com/watch?v=RDUH2412ZU0) — CMU Robotics Institute · 1:10:48

### Planar maps in vector graphics *(prerequisite)*
Planar maps organize closed-loop contours into bounded regions, which is essential for stylized vector art and animation. Understanding planar maps helps in appreciating how the snaxel method generates topologically correct region boundaries on mesh surfaces.

*How the paper uses it:* The paper presents a simpler and more robust method to generate planar maps of mesh regions bounded by snaxel contours.

▶ [GTAC 7.2: Coloring and Duality](https://www.youtube.com/watch?v=Zr2v1JS1RaA) — Don Sheehy Lectures · 17:31

### Contour tracking and topology changes *(prerequisite)*
Robust tracking of contours through splits, merges, and annihilations is key for maintaining temporal coherence in animations. This knowledge is important to understand how snaxels handle complex topology changes during mesh deformation and animation.

*How the paper uses it:* The method tracks contour topology changes and maintains correspondences over time for animated meshes.

▶ [GReTA seminar: The Topological Approach to Spatial Model Checking](https://www.youtube.com/watch?v=XBiRAgip7xE) — GReTA Seminar · Streamed 1 year ago

### Snaxels on a Plane talk *(the paper's own talk)*
This section covers the authors' own presentations on the snaxels method, providing the most direct and comprehensive explanation of their approach, implementation, and results. These talks are invaluable for understanding the novel adaptation of snaxels to 3D mesh contour extraction and animation.

*How the paper uses it:* Directly targets the authors' own presentation for the most specific explanation of the method.

▶ [https://www.youtube.com › watch?v=lgfG_UEO6gM](https://www.youtube.com/watch?v=lgfG_UEO6gM) — YouTube result via DuckDuckGo

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the 'Snaxels on a Plane' paper, start by learning about implicit contour functions, which define the contours on 3D meshes. Next, grasp planar maps in vector graphics to see how closed contours organize regions for stylized illustration. Then, study contour tracking and topology changes to appreciate how contours evolve and maintain correspondences over time for animation. Finally, focus on the core concept of snaxels—active contours adapted to meshes—and how they enable robust contour extraction and conversion into 2D SVG animations.

### Implicit contour functions *(prerequisite)*
Implicit contour functions define shapes or contours as the set of points where a function equals a constant, often zero. Understanding this helps visualize how contours can be represented mathematically and extracted from 3D surfaces.

*How the paper uses it:* The paper uses implicit contour functions to define visual, shadow, and shading contours on 3D meshes for snaxel evolution.

▶ [Implicit differentiation, what's going on here? | Chapter 6, Essence of calculus](https://www.youtube.com/watch?v=qb40J4N1fa4) — 3Blue1Brown · 9 years ago

### Planar maps in vector graphics *(prerequisite)*
Planar maps organize closed-loop contours into bounded regions, which is essential for stylized vector illustrations. Learning this concept helps understand how contours partition a surface into meaningful areas for artistic rendering.

*How the paper uses it:* The method generates planar maps bounded by snaxel contours to produce topologically correct stylized vector art.

▶ [GTAC 7.2: Coloring and Duality](https://www.youtube.com/watch?v=Zr2v1JS1RaA) — Don Sheehy Lectures · 17:31

### Contour tracking and topology changes *(prerequisite)*
Contour tracking involves following contours as they evolve, including handling splits, merges, and disappearances. Understanding topology changes is key to maintaining consistent contour correspondences over time, critical for animation.

*How the paper uses it:* The paper robustly tracks contour topology changes like splits and merges to maintain temporal coherence in animations.

▶ [Contours explained #buildingeducation #diy #surveying #builder](https://www.youtube.com/watch?v=8yTZioIVwbU) — SiteVoice · 5:07 · 11 years ago

### Active contours on meshes
Active contours, or snakes, are curves that move to minimize an energy function to fit object boundaries. Adapting them to mesh surfaces (snaxels) allows robust extraction of closed-loop contours directly on 3D geometry.

*How the paper uses it:* Snaxels are the core method adapted from active contours to extract and track closed-loop contours on 3D meshes.

▶ [DIP Lecture 12b: Snakes, active contours, and level sets](https://www.youtube.com/watch?v=RJEMDkhVgqQ) — Rich Radke · 1:21:02

### SVG curve animation from 3D meshes
SVG animations use vector paths that can be smoothly animated in 2D. Understanding how to convert 3D mesh contours into 2D SVG curves enables efficient, stylized vector art animations compatible with common graphics platforms.

*How the paper uses it:* The paper converts 3D animated mesh contours into compact, keyframed 2D SVG curve animations for vector art.

▶ [Animating vector paths in Framer (Animation Lesson 18)](https://www.youtube.com/watch?v=MOmvYoUFQWU) — Framer · 14:36

### Snaxels on a Plane talk *(the paper's own talk)*
A direct presentation by the authors provides a focused overview of the snaxel method, its adaptations, and applications to contour extraction and animation on 3D meshes.

*How the paper uses it:* This talk explains the paper’s method and results from the authors themselves, offering the clearest insight into their approach.

▶ [https://www.youtube.com › watch?v=YbfA5dRlz0U](https://www.youtube.com/watch?v=YbfA5dRlz0U) — YouTube result via DuckDuckGo


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing depth and complexity to demonstrate understanding of the "Snaxels on a Plane" paper. The beginner project focuses on implementing a basic active contour (snaxel) on a simple 3D mesh to extract closed-loop contours, using familiar programming tools. The intermediate project involves reimplementing the core snaxel contour extraction and tracking method on a small 3D mesh dataset, comparing it to a naive contour extraction baseline, and reporting robustness metrics. The advanced project extends the snaxel framework by addressing one of the paper's stated limitations—implementing a GPU-parallelized snaxel evolution to handle larger meshes efficiently, exploring challenges in parallelizing topology changes.

### Beginner — Basic Snaxel Active Contour on a Simple 3D Mesh
*Effort: a weekend, ~8 hours*

You build a minimal implementation of an active contour (snaxel) that evolves on the edges of a simple 3D mesh (e.g., a low-poly sphere) to extract a closed-loop contour representing a visual or shading boundary. The implementation will demonstrate snaxel initialization, energy minimization steps, and contour evolution constrained to mesh edges.

**Why it shows you understood the paper:** This project shows you understand the core concept of snaxels as active contours constrained to mesh edges and how they form closed loops to extract contours on 3D surfaces, a key contribution of the paper.

**Grounded in:** Adaptation of snaxels to robustly extract closed-loop visual, shadow, and shading contours on 3D meshes.

**Tech stack:** Python 3.11, NumPy, PyOpenGL or trimesh for mesh handling, Matplotlib or PyPlot for visualization

**Data:** Use a simple synthetic 3D mesh such as a low-poly sphere or cube generated programmatically or loaded from a common OBJ file.

**Build it:**

1. Load or generate a simple 3D mesh with vertices and edges.
2. Implement initialization of snaxels along edges near an implicit contour function (e.g., zero-crossing of a simple function like dot product with view direction).
3. Implement energy minimization steps to evolve snaxels along mesh edges to minimize contour energy.
4. Visualize the evolving snaxel contour as a closed loop on the mesh.
5. Demonstrate contour extraction on the static mesh and save images or plots.

**Ships as:** A GitHub repo with code to run the snaxel evolution on a simple mesh, producing visualizations of closed-loop contours, and a README explaining the approach and results.

**Stretch goal:** Add simple topology changes such as snaxel splitting or merging on the contour loop.

### Intermediate — Reimplementation of Snaxel Contour Extraction and Tracking on Animated Meshes
*Effort: 2 weekends, ~20 hours*

You reimplement the core snaxel method to extract closed-loop visual contours on a small animated 3D mesh sequence (e.g., a publicly available low-poly animated model). You implement contour tracking over time to maintain correspondences and compare your method against a baseline naive contour extraction (e.g., thresholding vertex normals). You report metrics on contour loop completeness and temporal coherence.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reimplement the paper's main method from scratch, including snaxel evolution, topology handling, and temporal tracking, and to evaluate its robustness compared to a simple baseline.

**Grounded in:** The snaxel active contours can also track contours as the mesh animates, and frame-to-frame correspondences between snaxels lead to a new method to convert the moving contours on a 3-D animated mesh into 2-D SVG curve animations.

**Tech stack:** Python 3.11, NumPy, trimesh or PyMesh for mesh processing, Matplotlib or PyPlot, SVG generation library (e.g., svgwrite)

**Data:** Use a small publicly available animated 3D mesh (e.g., a low-poly walking character from free 3D model repositories) or simulate a simple mesh deformation sequence.

**Build it:**

1. Load the animated mesh sequence and preprocess mesh connectivity.
2. Implement implicit contour functions for visual contours (e.g., view-dependent normal dot product).
3. Implement snaxel initialization and evolution on each frame to extract closed-loop contours.
4. Implement snaxel tracking over frames to maintain contour correspondences.
5. Implement a naive baseline contour extraction method for comparison.
6. Generate 2D SVG curve animations from the tracked snaxels.
7. Evaluate and report metrics on contour completeness and temporal coherence compared to baseline.

**Ships as:** A GitHub repo with code to run snaxel contour extraction and tracking on animated meshes, generate SVG animations, and a README with evaluation results and comparisons.

**Stretch goal:** Add stylization options for the extracted contours, such as smoothing or shape constraints.

### Advanced — GPU-Accelerated Snaxel Evolution for Large Meshes with Parallel Topology Handling
*Effort: 3+ weeks*

You develop a GPU-parallelized implementation of snaxel evolution to handle large meshes (>100K faces) efficiently, addressing the paper's limitation on CPU scalability. You design parallel algorithms for snaxel propagation, topology changes (splits, merges, annihilation), and contour tracking. You benchmark performance and discuss challenges in parallelizing irregular control flow.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of snaxel topology operations and the complexity of parallelizing them, potentially contributing novel engineering solutions.

**Grounded in:** The CPU implementation is limited to meshes up to about 100K faces; larger meshes require parallelization. Fan-out, deletion, and topology changes pose challenges for efficient parallelization due to irregular control flow.

**Tech stack:** C++17, CUDA or OpenCL, Eigen or similar linear algebra library, Assimp or trimesh for mesh loading, Python for benchmarking scripts

**Data:** Use large publicly available 3D meshes from repositories such as Stanford 3D Scanning Repository or simulate large synthetic meshes.

**Build it:**

1. Profile and understand the CPU snaxel evolution algorithm and topology change rules.
2. Design data structures suitable for GPU parallelization of snaxel propagation on mesh edges.
3. Implement GPU kernels for snaxel energy minimization and evolution steps.
4. Implement parallel algorithms for topology changes: splits, merges, and annihilations.
5. Integrate contour tracking over time with parallel updates.
6. Benchmark performance on large meshes and compare to CPU baseline.
7. Document challenges and solutions in handling irregular control flow on GPU.

**Ships as:** A GitHub repo with GPU-accelerated snaxel evolution code, benchmarking results on large meshes, and a detailed README discussing implementation and parallelization challenges.

**Stretch goal:** Extend the GPU implementation to support stylized contour constraints or real-time interactive visualization.
