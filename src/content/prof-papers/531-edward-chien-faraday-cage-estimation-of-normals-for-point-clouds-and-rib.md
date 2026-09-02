---
title: "531 · Faraday Cage Estimation of Normals for Point Clouds and Ribbon Sketches — Edward Chien"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-edward-chien"
source_hash: "635af31170a25e4e573cc9b64b1fd19847dc8e32b7d24af1b9a0012c20d50d72"
sequence: 531
generator: "outreach-garden: managed"
---

# 531 · Faraday Cage Estimation of Normals for Point Clouds and Ribbon Sketches

## At a glance

- **Professor:** Edward Chien
- **Institution:** Boston University
- **Paper:** [Faraday Cage Estimation of Normals for Point Clouds and Ribbon Sketches](https://scrivener.studio/files/faraday_small.pdf)
- **Authors:** Daniel Scrivener, Daniel Cui, Ellis Coldren, S. Mazdak Abulnaga, Mikhail Bessmeltsev, Edward Chien
- **Year:** 2025

## Paper overview

This paper introduces FaCE, a novel method for estimating normals on unoriented point clouds and VR ribbon sketches by modeling the Faraday cage effect. The method treats input points as a conductive cage that shields interior points from external electric fields. By analyzing the maximum electric field strength and its gradient, FaCE estimates normals and identifies interior points, improving surface reconstruction quality especially in complex scenarios like intersecting components and sparse ribbon sketches.

### Why it matters

**Research problem:** Estimating consistent and accurate normals for unoriented point clouds, particularly those with interior structures, intersecting components, or sparse sampling such as VR ribbon sketches, to enable high-quality surface reconstruction.

**Why it matters:** Accurate normal estimation is critical for surface reconstruction from point clouds, which is fundamental in computer graphics, CAD, VR modeling, and other applications. Existing methods struggle with interior structures, intersecting surfaces, and sparse inputs, leading to artifacts like concavities, holes, and surface pitting.

**Key contributions:**

- Novel Faraday cage-inspired model for normal estimation on unoriented point clouds and ribbon sketches.
- Efficient Poisson system formulation enabling fast computation of electric potentials and fields.
- Robust normal orientation consistent with the negative gradient of the winding number, improving handling of intersecting components.
- Interior point filtering to remove artifacts from interior structures in point clouds.
- Demonstrated superior performance on misaligned scans, sparse ribbon sketches, CAD models with interior artifacts, and competitive results on clean inputs.

## About the professor

**Edward Chien** — Assistant Professor, Computer Science, Boston University.

Research interests: Geometry Processing, Computer Graphics, Low-Dimensional Topology and Geometry

### Research links

- [Faculty/profile page](https://scholar.google.com/citations?user=YZ1HFYIAAAAJ&hl=en)
- [Identity evidence](https://cs-people.bu.edu/edchien)
- [Identity evidence](https://cs-people.bu.edu/edchien/)
- [Professor website](http://people.csail.mit.edu/eddchien/)
- [Lab website](http://groups.csail.mit.edu/gdpgroup/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Poisson equations and harmonic functions
**The paper assumes:** partial differential equations, harmonic functions, Poisson equation numerical methods, and potential theory
**Already in this field?** Skip this entirely if you have taken an advanced undergraduate or graduate course covering PDEs and harmonic analysis, including numerical methods for Poisson equations.

To understand the core mathematical foundation of the FaCE method for normal estimation, it is essential to grasp Poisson equations and harmonic functions, as these underpin the computation of electric potentials and fields used in the paper. The rigorous course option provides a detailed, university-level treatment of partial differential equations, including Poisson and Laplace equations, suitable for deep comprehension. The fast track offers a visually intuitive and concise explainer series focused on the key concepts of PDEs, harmonic functions, and the Laplacian, ideal for quickly building intuition without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [First Course on Partial Differential Equations - I](https://www.youtube.com/playlist?list=PLgMDNELGJ1CZpu0rJvVh-bUHGFINS7xIk) — NPTEL - Indian Institute of Science, Bengaluru · 42 videos · 23.7h across 42 episodes

**Watch only this:** Watch lectures 18 to 23 (Laplace and Poisson equations parts 1 to 6), about 3.3 hours — these focus specifically on the Poisson system and harmonic functions relevant to the paper's approach.

*Why it unblocks this paper:* This NPTEL course on Partial Differential Equations covers the Laplace and Poisson equations in depth with multiple lectures dedicated to these topics, providing a rigorous and structured university-level introduction to the mathematical tools central to the FaCE method.

*If you want all of it:* The entire playlist has 42 episodes totaling about 23.7 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [The Math Behind PDEs — Partial Differential Equations, Visualized](https://www.youtube.com/playlist?list=PLSjJDxqj7Cqxo2bYhKwuDvVBiOyLnQHrC) — AxiomMotion · 15 videos · 3.0h across 15 episodes

**Watch only this:** Watch episodes 1 to 4 (ODEs vs PDEs, Heat Equation, Wave Equation, Laplace and Poisson: Harmonic Functions and the Mean-Value Magic), about 48 minutes — these cover the foundational PDE concepts and harmonic functions needed to understand the paper's method.

*Why it unblocks this paper:* This AxiomMotion series provides clear, visual explanations of PDEs including Laplace and Poisson equations and harmonic functions, making it an excellent quick introduction to the key mathematical concepts behind the FaCE method.

*If you want all of it:* The full playlist has 15 episodes totaling about 3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the FaCE method for normal estimation in point clouds and ribbon sketches, start by grounding yourself in the fundamental physical phenomenon of the Faraday cage effect and its electrostatics principles. Next, study the mathematical and computational techniques behind Poisson surface reconstruction, which underpins the harmonic potential computations in FaCE. Then, explore the geometric concept of winding numbers used for consistent normal orientation. Finally, focus on the core novel method introduced by the paper, the FaCE normal estimation approach itself, through advanced academic talks that elucidate the Faraday cage modeling and its application to geometry processing.

### Electrostatics Faraday cage effect *(prerequisite)*
Understanding the physical principles of electrostatic shielding and the Faraday cage effect is essential, as FaCE models point clouds as conductive cages to estimate normals. This section covers rigorous university-level lectures explaining the electric field behavior inside conductors and shielding phenomena.

*How the paper uses it:* FaCE leverages the Faraday cage effect to model input points as a conductive cage that shields interior points from external electric fields.

▶ [8.02x - Lect 5 - E= - grad V, Conductors, Electrostatic Shielding (Faraday Cage)](https://www.youtube.com/watch?v=JhV-GOS4y8g) — Lectures by Walter Lewin. They will make you ♥ Physics. · 50:03 · 11 years ago

### Poisson surface reconstruction *(prerequisite)*
Poisson surface reconstruction is a core computational technique used to solve for harmonic potentials and reconstruct surfaces from point clouds. This section includes detailed research talks and university lectures that explain the mathematical formulation and practical algorithms for Poisson-based surface reconstruction.

*How the paper uses it:* FaCE solves a Poisson system to compute harmonic potentials, which are fundamental to estimating normals and interior points.

▶ [3D Surface Reconstruction Using a Generalized Distance Function](https://www.youtube.com/watch?v=bMhR-UYlKqU) — Microsoft Research · 1:15:00 · 10 years ago

### Winding number in geometry processing *(prerequisite)*
The winding number is a geometric tool used to consistently orient normals and handle complex topologies such as intersecting components. This section presents advanced academic talks on winding numbers and their applications in geometry processing.

*How the paper uses it:* FaCE produces normals consistent with the negative gradient of the winding number, improving handling of intersecting components.

▶ [Winding Numbers on Discrete Surfaces (SIGGRAPH 2023)](https://www.youtube.com/watch?v=QnMx3s4_4WY) — Nicole Feng · 9:31 · 3 years ago

### Point cloud normal estimation *(prerequisite)*
Normal estimation is the fundamental problem addressed by the paper. This section offers advanced lectures and research presentations on state-of-the-art methods for estimating normals in unstructured 3D point clouds, providing context for FaCE's contributions.

*How the paper uses it:* FaCE improves normal estimation accuracy and robustness on unoriented point clouds and sparse ribbon sketches.

▶ [Lecture 18 - Efficient Point Cloud Recognition | MIT 6.S965](https://www.youtube.com/watch?v=xtxRKbd_2W0) — MIT HAN Lab · 1:14:14 · 3 years ago

### FaCE normal estimation method
This section focuses on the core novel method introduced by the paper, explaining the Faraday cage-inspired model for normal estimation. It includes rigorous academic talks that delve into the mathematical and physical modeling behind FaCE.

*How the paper uses it:* FaCE is the paper's central contribution, introducing a novel Faraday cage-inspired model for robust normal estimation on unoriented point clouds and ribbon sketches.

▶ [Mathematics of the Faraday cage - Nick Trefethen](https://www.youtube.com/watch?v=7qBz_hWJlkc) — Stony Brook Mathematics · 47:50 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the FaCE paper, start by learning the basics of point clouds and normal estimation, which are fundamental to 3D surface reconstruction. Next, grasp the physical phenomenon of the Faraday cage effect in electrostatics, as the paper models point clouds as conductive cages to estimate normals. Then, study Poisson surface reconstruction, the mathematical technique used to compute harmonic potentials in the method. Finally, explore the winding number concept for consistent normal orientation, before diving into the core FaCE normal estimation method itself.

### Point cloud normal estimation *(prerequisite)*
Point clouds are sets of points representing 3D shapes, but they lack surface information like orientation. Normal estimation assigns a direction (normal vector) to each point, which is crucial for reconstructing surfaces accurately. Understanding this helps appreciate why FaCE focuses on improving normal estimation for complex and sparse data.

*How the paper uses it:* FaCE addresses the challenge of estimating consistent and accurate normals for unoriented point clouds, improving surface reconstruction.

▶ [Point Clouds: Vertex Normals Estimation](https://www.youtube.com/watch?v=kVGENYi4gz8) — Mister P. MeshLab Tutorials · 11:31 · 13 years ago

### Electrostatics Faraday cage effect *(prerequisite)*
A Faraday cage is a conductive enclosure that blocks external electric fields from penetrating inside, creating a shielding effect. This physical principle explains how electric fields behave around conductive surfaces, which FaCE models to estimate normals by treating point clouds as such cages.

*How the paper uses it:* FaCE models input points as a Faraday cage to estimate normals and identify interior points by analyzing electric field shielding.

▶ [8.02x - Lect 5 - E= - grad V, Conductors, Electrostatic Shielding (Faraday Cage)](https://www.youtube.com/watch?v=JhV-GOS4y8g) — Lectures by Walter Lewin. They will make you ♥ Physics. · 50:03 · 11 years ago

### Poisson surface reconstruction *(prerequisite)*
Poisson surface reconstruction is a mathematical method that uses Poisson equations to compute smooth surfaces from point clouds by solving for harmonic potentials. This technique underlies FaCE’s computation of electric potentials and fields, enabling robust normal estimation and surface reconstruction.

*How the paper uses it:* FaCE solves a Poisson system to compute harmonic potentials for estimating normals and filtering interior points.

▶ [From Point Clouds to Surfaces: A Tutorial on Surface Reconstruction with Open3D and Python](https://www.youtube.com/watch?v=C_WwL2mhxfw) — Nicolai Nielsen · 20:45 · 4 years ago

### Winding number in geometry processing *(prerequisite)*
The winding number measures how many times a curve or surface wraps around a point, helping to determine inside/outside regions and orient normals consistently. FaCE uses normals consistent with the negative gradient of the winding number to better handle intersecting components and interior structures.

*How the paper uses it:* FaCE produces normals consistent with the negative gradient of the winding number, improving handling of complex geometries.

▶ [Winding Numbers on Discrete Surfaces (SIGGRAPH 2023)](https://www.youtube.com/watch?v=QnMx3s4_4WY) — Nicole Feng · 9:31 · 3 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the FaCE method for normal estimation on unoriented point clouds and ribbon sketches. Starting with a basic visualization of the Faraday cage effect on a simple point cloud, you then implement the core FaCE normal estimation method and compare it to a baseline. Finally, you extend the method to address one of the paper's stated limitations by incorporating point charges to improve normal estimation in interior cavities.

### Beginner — Visualizing the Faraday Cage Effect on a Simple Point Cloud
*Effort: a weekend, ~8 hours*

You build a small interactive visualization that simulates the Faraday cage effect by modeling a conductive point cloud and showing how external electric fields are shielded inside. This includes computing and displaying the electric potential and field vectors on and inside a simple 3D point cloud shape.

**Why it shows you understood the paper:** This project demonstrates you grasp the core physical intuition behind FaCE's approach—modeling point clouds as conductive cages and analyzing electric fields to infer geometry.

**Grounded in:** FaCE models the input points as a Faraday cage that shields interior points from external linear and point-charge-induced electric fields.

**Tech stack:** Python 3.11, NumPy, Matplotlib, Plotly or PyVista for 3D visualization

**Data:** Synthetic simple 3D point cloud (e.g., points sampled on a sphere surface) generated by you.

**Build it:**

1. Generate or load a simple 3D point cloud representing a closed shape (e.g., sphere).
2. Implement computation of electric potential and field vectors assuming points act as a conductive cage under external linear fields.
3. Visualize the point cloud with electric field vectors and potential values using a 3D plotting library.
4. Highlight interior points where the field is shielded (low field magnitude).
5. Create an interactive interface or animation to vary external field directions and observe shielding.

**Ships as:** A GitHub repo with code and README showing the visualization of the Faraday cage effect on a simple point cloud, with explanations linking to the FaCE model.

**Stretch goal:** Add visualization of the gradient of the maximum electric field strength over sampled external fields to hint at normal directions.

### Intermediate — Implementing FaCE Normal Estimation on a Public Point Cloud Dataset
*Effort: 2 weekends, ~20 hours*

You implement the core FaCE method from the paper to estimate normals on unoriented point clouds. You apply it to a publicly available point cloud dataset (e.g., Stanford Bunny or a similar well-known model) and compare the normal orientation accuracy against a simple baseline like PCA-based normal estimation.

**Why it shows you understood the paper:** This project proves you can translate the paper's Poisson system formulation and Faraday cage-inspired normal estimation into working code and quantitatively evaluate its effectiveness.

**Grounded in:** FaCE models the input points as a Faraday cage that shields interior points from external linear and point-charge-induced electric fields. It solves a Poisson system to compute harmonic potentials, then uses the maximum electric field strength over sampled external fields and its gradient to estimate normals.

**Tech stack:** Python 3.11, NumPy, SciPy (for sparse linear solvers), Open3D (for point cloud handling and visualization)

**Data:** Publicly available Stanford Bunny point cloud or similar watertight mesh point cloud as a substitute for the paper's data.

**Build it:**

1. Load a public point cloud dataset and preprocess it (downsample if needed).
2. Implement the Poisson system solver to compute harmonic potentials on the point cloud modeled as a Faraday cage.
3. Sample a small number of external linear field directions and compute the maximum electric field strength function.
4. Estimate normals as the gradient of the maximum field strength function and orient them consistently.
5. Implement a baseline normal estimation method (e.g., PCA-based normals) for comparison.
6. Evaluate and compare normal orientation accuracy using metrics such as angular error.
7. Visualize the estimated normals on the point cloud.

**Ships as:** A GitHub repo with code, evaluation scripts, and a README reporting normal estimation accuracy and visual comparisons between FaCE and baseline.

**Stretch goal:** Add interior point filtering to remove points inside the cage and improve reconstruction quality.

### Advanced — Extending FaCE with Point Charges to Improve Normals in Interior Cavities
*Effort: 3+ weeks*

You extend the FaCE method by incorporating point charges as suggested in the paper's future directions to correct normal estimation in domains with enclosed interior cavities. You implement this extension, apply it to synthetic or real point clouds with interior cavities, and evaluate improvements over the base FaCE method.

**Why it shows you understood the paper:** This project shows you can engage deeply with the paper's limitations and future work, proposing and implementing a genuine extension that addresses a known challenge in the method.

**Grounded in:** Future directions: Incorporate point charges to correct normals in interior cavities automatically or via user input.

**Tech stack:** Python 3.11, NumPy, SciPy, Open3D, Matplotlib or PyVista for visualization

**Data:** Synthetic point clouds with interior cavities generated by you or adapted from public datasets with known interior structures.

**Build it:**

1. Review and understand the base FaCE implementation from your intermediate project.
2. Implement the addition of point charges in the Poisson system to model interior cavities.
3. Modify the solver to incorporate these point charges and recompute harmonic potentials and fields.
4. Develop heuristics or simple user input mechanisms to place point charges in interior cavities.
5. Apply the extended method to point clouds with interior cavities and compare normal estimation results to the base FaCE method.
6. Visualize and quantify improvements in normal orientation and surface reconstruction quality.

**Ships as:** A GitHub repo with extended FaCE code, example datasets, visualizations, and a detailed README explaining the extension and evaluation results.

**Stretch goal:** Explore automatic detection and placement of point charges to reduce user input.
