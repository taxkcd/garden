---
title: "589 · Poisson Problems in Computer Graphics — Marc Olano"
date: 2026-08-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-marc-olano"
source_hash: "b98416d377ed3719606cd13e8f6d2f9dbc29df6635da7d27564fb8b39035e8e2"
sequence: 589
generator: "outreach-garden: managed"
---

# 589 · Poisson Problems in Computer Graphics

## At a glance

- **Professor:** Marc Olano
- **Institution:** Univ. of Maryland - Baltimore County
- **Paper:** [Poisson Problems in Computer Graphics](https://doi.org/10.1145/3799820.3812495)
- **Authors:** Adam Bargteil, Marc Olano
- **Year:** 2026

## Paper overview

This course explores how a variety of computer graphics challenges can be formulated and solved as Poisson problems. It covers 13 seminal papers that demonstrate applications such as fluid simulation, image editing, mesh editing, surface reconstruction, and terrain authoring. The course also provides historical context and highlights technical trends in using Poisson equations in graphics.

### Why it matters

**Research problem:** How to effectively model and solve diverse computer graphics and interactive technique problems by casting them as Poisson problems, leveraging mathematical optimization and computational methods.

**Why it matters:** Poisson problems provide a unifying mathematical framework that enables efficient and robust solutions to many graphics challenges, including fluid simulation, image editing, and surface reconstruction. Advances in Poisson solvers and hardware have enabled new applications and improved performance in real-time rendering and interactive techniques.

**Key contributions:**

- Curated a historical and technical overview of Poisson problems in computer graphics through 13 seminal papers.
- Demonstrated the broad applicability of Poisson formulations across multiple graphics domains such as fluid simulation, HDR compression, image editing, mesh editing, and terrain authoring.
- Highlighted the role of advances in Poisson solvers and graphics hardware in enabling new interactive applications.
- Provided a structured seminar-style course that deepens understanding of Poisson problems and their significance in graphics research.

## About the professor

**Marc Olano** — Associate Dean of Academic Programs and Learning, Associate Professor, Computer Science and Electrical Engineering, Univ. of Maryland - Baltimore County.

Research interests: interactive 3D computer graphics, programmable shading, graphics hardware, surface appearance modeling, or almost any other combination of those words.

### Research links

- [Faculty/profile page](http://www.csee.umbc.edu/~olano)
- [Resolved homepage](http://userpages.cs.umbc.edu/olano/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Poisson equation and PDEs
**The paper assumes:** partial differential equations, Poisson equation, numerical methods for PDEs, boundary value problems
**Already in this field?** Skip this entirely if you already have a solid understanding of partial differential equations and numerical solution techniques for the Poisson equation.

To understand the Poisson problems in computer graphics, a solid grasp of the Poisson equation and related partial differential equations (PDEs) is essential. The rigorous course option provides a comprehensive university-level introduction to PDEs with a strong focus on the Poisson equation, suitable for deep technical understanding. The fast track offers a concise, visual, and intuition-driven series that quickly builds foundational knowledge of PDEs and the Poisson equation, ideal for those needing a quicker but still conceptually sound background.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [First Course on Partial Differential Equations - I](https://www.youtube.com/playlist?list=PLgMDNELGJ1CZpu0rJvVh-bUHGFINS7xIk) — NPTEL - Indian Institute of Science, Bengaluru · 42 videos · 23.7h across 42 episodes

**Watch only this:** lectures 18 to 23 (Laplace and Poisson equations 1 through 6), about 3.3 hours — these cover the core theory and solution methods for Poisson problems essential for understanding the paper's approach.

*Why it unblocks this paper:* This NPTEL course is a rigorous university-level introduction to partial differential equations, including a detailed multi-lecture segment specifically on Laplace and Poisson equations, which are central to the paper's mathematical framework.

*If you want all of it:* all 42 episodes, about 23.7 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [The Math Behind PDEs — Partial Differential Equations, Visualized](https://www.youtube.com/playlist?list=PLSjJDxqj7Cqxo2bYhKwuDvVBiOyLnQHrC) — AxiomMotion · 15 videos · 3.0h across 15 episodes

**Watch only this:** episodes 1, 4, and 18 (ODEs vs PDEs; Laplace and Poisson: Harmonic Functions and the Mean-Value Magic; Why Neural Networks Can Solve Equations No Grid Ever Could), about 36 minutes total — these provide a conceptual overview and key insights into Poisson equations relevant to the paper.

*Why it unblocks this paper:* This AxiomMotion series offers a visually rich, intuitive introduction to PDEs, including a focused episode on Laplace and Poisson equations, making it a great quick primer for the mathematical concepts underlying the paper.

*If you want all of it:* all 15 episodes, about 3.0 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Poisson Problems in Computer Graphics,' start by building a solid foundation in Partial Differential Equations (PDEs) and Mathematical Optimization, as these are essential for grasping Poisson problem formulations and solutions. Next, study Numerical Poisson Solvers to comprehend computational methods used in graphics applications. Finally, focus on the core concept of Poisson Problems in Computer Graphics through the authors' own talks or closely related advanced lectures to connect theory with practical graphics applications.

### Partial Differential Equations lecture *(prerequisite)*
Partial Differential Equations (PDEs) form the mathematical foundation for Poisson problems. Understanding their basic concepts, nomenclature, and canonical examples like the heat equation is crucial for following how Poisson equations arise and are solved in graphics contexts.

*How the paper uses it:* Poisson problems are a class of PDEs central to the paper's approach in computer graphics.

▶ [Partial Differential Equations Overview](https://www.youtube.com/watch?v=pvrIagjEk4c) — Steve Brunton · 26:18

### Mathematical Optimization in Graphics lecture *(prerequisite)*
Mathematical optimization techniques underpin the formulation and solution of Poisson problems in graphics. Learning about optimization methods, including minima and maxima, provides the necessary tools to understand how Poisson equations are solved via optimization frameworks.

*How the paper uses it:* Optimization frameworks are key to formulating and solving Poisson problems in graphics, as emphasized by the paper.

▶ [Lecture 01: Introduction and History of Optimization](https://www.youtube.com/watch?v=KUCY8dO4FoE) — IIT KANPUR-NPTEL · 40:09 · 3y ago

### Numerical Poisson Solvers seminar *(prerequisite)*
Numerical methods for solving Poisson equations are critical for implementing the techniques surveyed in the paper. This seminar-level lecture covers fast Poisson solvers and computational strategies essential for practical applications in graphics.

*How the paper uses it:* Core computational methods for solving Poisson equations underpin the techniques surveyed in the paper.

▶ [Lec 20 | MIT 18.086 Mathematical Methods for Engineers II](https://www.youtube.com/watch?v=kyx2QgGkEpc) — MIT OpenCourseWare · 48:25 · 18y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Poisson problems in computer graphics from a beginner to advanced level, start by building a foundation in partial differential equations (PDEs), since Poisson problems are a type of PDE. Next, learn about numerical methods to solve Poisson equations, which are essential for computational applications in graphics. Then, study mathematical optimization concepts that underpin the formulation and solution of these problems. Finally, explore the specific applications of Poisson equations in computer graphics to see how these mathematical tools are used in practice.

### Partial Differential Equations lecture *(prerequisite)*
Partial differential equations describe how quantities change over space and time and are fundamental to modeling physical phenomena. Understanding PDEs, especially the Poisson equation, is crucial as it forms the mathematical basis for many computer graphics problems covered in the paper.

*How the paper uses it:* Poisson problems are a class of PDEs central to the paper's approach in modeling graphics challenges.

▶ [But what is a partial differential equation?  | DE2](https://www.youtube.com/watch?v=ly4S0oi3Yz8) — 3Blue1Brown · 17:39 · 7y ago

### Numerical Poisson Solvers seminar *(prerequisite)*
Numerical solvers provide practical methods to compute solutions to Poisson equations on computers. Learning these techniques helps understand how the theoretical PDEs are turned into efficient algorithms for graphics applications.

*How the paper uses it:* The paper surveys advances in Poisson solvers that enable practical and real-time graphics applications.

▶ [Lec 20 | MIT 18.086 Mathematical Methods for Engineers II](https://www.youtube.com/watch?v=kyx2QgGkEpc) — MIT OpenCourseWare · 48:25 · 18y ago

### Mathematical Optimization in Graphics lecture *(prerequisite)*
Optimization techniques are used to formulate and solve Poisson problems by minimizing energy functions or error terms. Grasping basic optimization concepts clarifies how graphics problems are cast into solvable mathematical frameworks.

*How the paper uses it:* The paper emphasizes mathematical optimization as a key approach to solving Poisson problems in graphics.

▶ [What Is Mathematical Optimization?](https://www.youtube.com/watch?v=AM6BY4btj-M) — Visually Explained · 11:35 · 5y ago

### Poisson Equation Applications in Graphics conference
This section covers how Poisson equations are applied to real-world graphics problems like image editing, fluid simulation, and surface reconstruction. Understanding these applications ties the mathematical concepts to practical uses in computer graphics.

*How the paper uses it:* The paper surveys diverse computer graphics challenges formulated as Poisson problems, highlighting their broad applicability.

▶ [Gradients, Poisson's Equation and Light Transport | Two Minute Papers #20](https://www.youtube.com/watch?v=sSnDTPjfBYU) — Two Minute Papers · 5:55 · 10y ago

## Already in your library

- [2. Optimization Problems](https://www.youtube.com/watch?v=uK5yvoXnkSk) — also for: OptiGuide: An Efficient Domain-Independent Package Recommender System Based on Multi-Objective Optimization and User Decision Guidance (Alexander Brodsky)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of Poisson problems in computer graphics as surveyed in the course. The beginner project lets you implement a simple Poisson image editing technique using your existing web and Python skills. The intermediate project involves reimplementing a core Poisson solver method for surface reconstruction on a small 3D mesh dataset, adding numerical methods skills. The advanced project explores integrating a machine learning approach with a Poisson solver to address a future direction mentioned in the paper, leveraging your applied ML and software engineering background.

### Beginner — Poisson Image Editing with Python and React
*Effort: a weekend, ~8 hours*

You build a small web app that lets users perform Poisson image editing to blend an object from one image into another seamlessly. The backend uses Python to solve the Poisson equation on the image domain, while the React frontend allows interactive selection and preview.

**Why it shows you understood the paper:** This project demonstrates you understand how Poisson equations can be applied to image editing, a key application covered in the paper, and how to implement a basic numerical solver for the Poisson problem.

**Grounded in:** Demonstrates the broad applicability of Poisson formulations in image editing and compositing as covered in the course's survey of seminal papers.

**Tech stack:** Python 3.11, NumPy, SciPy, React, TypeScript, FastAPI

**Data:** Use publicly available sample images (e.g., from Unsplash or any open image dataset) to test the image blending.

**Build it:**

1. Implement a Poisson solver for 2D images using SciPy's sparse linear algebra tools.
2. Create a React frontend that allows users to upload two images and select a region to blend.
3. Connect the frontend to a FastAPI backend that runs the Poisson solver on the selected region.
4. Display the blended image result interactively in the frontend.
5. Write a README explaining the Poisson image editing concept and how your implementation relates to the paper.

**Ships as:** A GitHub repo with a working web app demonstrating Poisson image editing, including code and a clear README linking the implementation to the paper's discussion.

**Stretch goal:** Add support for HDR compression or tone mapping using Poisson formulations as another image editing feature.

### Intermediate — Poisson Surface Reconstruction from Point Clouds
*Effort: 1-3 weekends, ~20 hours*

You reimplement a core Poisson surface reconstruction algorithm to reconstruct a mesh surface from a small 3D point cloud dataset. You compare your implementation's output mesh quality against a simple baseline like ball-pivoting or alpha shapes, reporting reconstruction accuracy or visual quality metrics.

**Why it shows you understood the paper:** This project shows you grasp the numerical and geometric aspects of Poisson problems in mesh editing and surface reconstruction, a central theme of the paper. It also demonstrates your ability to implement and evaluate computational geometry algorithms.

**Grounded in:** Shows how Poisson-based methods have evolved and contributed to practical applications in mesh editing and surface reconstruction, as surveyed in the course.

**Tech stack:** Python 3.11, NumPy, SciPy, Open3D, Matplotlib

**Data:** Use a publicly available small 3D point cloud dataset such as Stanford Bunny or a subset of ModelNet for reconstruction.

**Build it:**

1. Implement the Poisson surface reconstruction algorithm based on the paper's description and related seminal works.
2. Load and preprocess the point cloud data using Open3D.
3. Run your Poisson reconstruction and generate a mesh output.
4. Implement or use a simple baseline reconstruction method for comparison.
5. Evaluate and visualize the reconstructed meshes, reporting metrics like mesh smoothness or fidelity.
6. Document your approach, results, and how this relates to the paper's survey.

**Ships as:** A GitHub repo with code to perform Poisson surface reconstruction, comparison scripts, visualizations, and a detailed README connecting the work to the paper's content.

**Stretch goal:** Experiment with GPU acceleration or parallelization of the Poisson solver to improve performance.

### Advanced — Integrating Machine Learning with Poisson Solvers for Real-Time Graphics
*Effort: a few weeks, ~40+ hours*

You develop a prototype that integrates a learned component (e.g., a neural network) with a traditional Poisson solver to accelerate or enhance real-time rendering or interactive graphics tasks. This project explores a future direction suggested by the paper, combining your applied ML skills with Poisson problem solving.

**Why it shows you understood the paper:** This project demonstrates a deep understanding of the paper's limitations and future directions, applying your ML engineering background to extend Poisson problem methods in a novel way aligned with current research trends.

**Grounded in:** Addresses the paper's future direction of integrating machine learning approaches with Poisson problem solving to advance real-time rendering or interactive graphics.

**Tech stack:** Python 3.11, PyTorch, NumPy, SciPy, Open3D or PyOpenGL, FastAPI or Flask

**Data:** Use synthetic or publicly available graphics datasets suitable for Poisson problem tasks, such as small meshes or images for training and testing.

**Build it:**

1. Research recent ML approaches that complement Poisson solvers (e.g., PoissonNet or learned preconditioners).
2. Implement a baseline Poisson solver for a chosen graphics problem (e.g., image editing or mesh reconstruction).
3. Train a neural network model to predict solver parameters, initial guesses, or corrections to accelerate convergence.
4. Integrate the ML model with the Poisson solver in a pipeline.
5. Evaluate performance improvements and quality trade-offs compared to the baseline solver alone.
6. Document the design, experiments, and how this prototype aligns with the paper's future directions.

**Ships as:** A GitHub repo containing code for the integrated ML-Poisson solver system, training scripts, evaluation results, and a comprehensive README discussing the approach in the context of the paper.

**Stretch goal:** Extend the prototype to run interactively on GPU hardware with real-time user input.
