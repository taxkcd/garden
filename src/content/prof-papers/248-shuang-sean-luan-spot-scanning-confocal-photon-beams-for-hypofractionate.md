---
title: "248 · Spot-Scanning Confocal Photon Beams for Hypofractionated Brain Radiosurgery — Shuang (Sean) Luan"
date: 2026-08-06
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shuang-sean-luan"
source_hash: "8b273e8b3e96ae0af8637a577360e54bd4c1210812985c2ffa1498018e1c2a0c"
sequence: 248
generator: "outreach-garden: managed"
---

# 248 · Spot-Scanning Confocal Photon Beams for Hypofractionated Brain Radiosurgery

## At a glance

- **Professor:** Shuang (Sean) Luan
- **Institution:** University of New Mexico
- **Paper:** [Spot-Scanning Confocal Photon Beams for Hypofractionated Brain Radiosurgery](https://www.ncbi.nlm.nih.gov/pmc/articles/PMC12099129/)
- **Authors:** Lijun Ma, PhD, Shuang Luan, PhD, Nguyen Phuong Dang, PhD, Benjamin Ziemer, PhD, Steve Braunstein, MD, PhD, Michael McDermott, MD, Cheng Yu, PhD, Gabriel Zada, MD, Eric L Chang, MD
- **Year:** 2025

## Paper overview

This study developed and clinically implemented a new treatment delivery method called dose kernel-based spot scanning (DKSC) for hypofractionated stereotactic radiosurgery (SRS) of brain tumors using the Leksell Gamma Knife system. DKSC uses hundreds of small photon dose kernels scanned along a 3D path inside the tumor to create a highly uniform and conformal radiation dose, improving on conventional methods that have dose inhomogeneity and limitations in treating larger brain lesions. The first patient treatment showed DKSC is feasible, clinically implementable, and offers advantages in dose uniformity and treatment planning.

### Why it matters

**Research problem:** Conventional Leksell Gamma Knife stereotactic radiosurgery (LGK-SRS) treatments for brain tumors have limitations in delivering homogeneous dose distributions, especially for hypofractionated treatments of larger lesions, due to fixed collimator sizes and dose inhomogeneity. This can lead to elevated normal tissue toxicity and challenges in treatment planning.

**Why it matters:** Improving dose homogeneity and conformality in brain radiosurgery can reduce radiation-induced toxicity to normal brain tissue, improve treatment safety, and potentially enhance tumor control, especially for large or aggressive brain tumors requiring hypofractionated SRS.

**Key contributions:**

- Development of a dose kernel-based spot scanning (DKSC) method for hypofractionated brain SRS using LGK.
- Creation of an algorithm to generate a 3D scanning path inside the tumor using a Traveling Salesman approach.
- Integration of DKSC with clinical treatment planning software via scripting to enable clinical implementation.
- First clinical implementation and treatment of a patient with an aggressive brain tumor using DKSC.
- Demonstration that DKSC achieves highly homogeneous dose distributions with reduced maximum dose and improved dose uniformity compared to conventional LGK plans.

## About the professor

**Shuang (Sean) Luan** — Professor, Department of Computer Science, University of New Mexico.

Research interests: (1) biomedical engineering and medical informatics, (2) algorithms design, analysis and implementation, (3) computational geometry

### Research links

- [Faculty/profile page](https://www.cs.unm.edu/~sluan)
- [Resolved homepage](http://www.cs.unm.edu/~sluan/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To fully understand the novel dose kernel-based spot scanning (DKSC) method for hypofractionated brain radiosurgery presented in the paper, start by building foundational knowledge on the Gamma Knife radiosurgery technology and the Traveling Salesman Problem algorithms, as these underpin the hardware constraints and the scanning path optimization respectively. Then, deepen your understanding of stereotactic radiosurgery dose optimization principles and radiation dose kernel modeling, which are critical for appreciating the improvements DKSC offers over conventional methods. Finally, focus on the core concept of the DKSC method itself, including the authors' own detailed lecture on dose planning in stereotactic radiosurgery, to grasp the clinical implementation and advantages of the approach.

### Gamma Knife radiosurgery technology *(prerequisite)*
Understanding the Leksell Gamma Knife ICON system's hardware, capabilities, and constraints is essential because DKSC is implemented on this platform. This knowledge provides context on the fixed collimator sizes, dose delivery mechanisms, and timer limitations that influence the DKSC method's design and clinical feasibility.

*How the paper uses it:* DKSC is implemented on the LGK ICON system, so understanding its hardware and constraints is key.

▶ [Gamma Knife](https://www.youtube.com/watch?v=Szlj6IIwMVM) — Mount Sinai Health System · 7 years ago

### Traveling salesman problem algorithms *(prerequisite)*
The DKSC method uses a Traveling Salesman Problem (TSP) approach to generate an optimized 3D scanning path inside the tumor for dose kernel placement. Learning about dynamic programming solutions to TSP will clarify how the scanning path minimizes travel distance and improves dose delivery efficiency.

*How the paper uses it:* The DKSC scanning path is generated using a Traveling Salesman approach to optimize kernel placement.

▶ [4.7 Traveling Salesperson Problem - Dynamic Programming](https://www.youtube.com/watch?v=XaXsJJh-Q5Y) — Abdul Bari · 8 years ago

### Stereotactic radiosurgery dose optimization *(prerequisite)*
Grasping the principles of dose optimization in stereotactic radiosurgery is crucial to understand how DKSC improves dose uniformity and conformality compared to conventional LGK plans. This includes knowledge of dose-volume histograms, prescription isodose lines, and trade-offs in treatment planning.

*How the paper uses it:* Understanding dose optimization principles is essential to grasp DKSC improvements over conventional plans.

▶ [SRS Lecture 4 dose planning](https://www.youtube.com/watch?v=pdnBruUjZ5A) — UF Neurosurgery Webmaster (UF Dept. of Neurosurgery) · 27:32 · 9 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the novel dose kernel-based spot scanning (DKSC) method for brain radiosurgery presented in the paper. Starting with the basics of Gamma Knife radiosurgery technology, it then covers the Traveling Salesman Problem algorithms used to optimize scanning paths, followed by radiation dose kernel modeling and stereotactic radiosurgery dose optimization principles. Finally, it culminates with the core concept of the DKSC method itself, enabling a clear grasp of how the paper's innovations improve treatment planning and dose uniformity.

### Gamma Knife radiosurgery technology *(prerequisite)*
Gamma Knife radiosurgery is a precise form of brain radiation treatment that uses multiple focused beams of gamma rays to target tumors with minimal damage to surrounding tissue. Understanding the hardware and operational constraints of the Leksell Gamma Knife ICON system is essential to appreciate how the DKSC method is implemented clinically.

*How the paper uses it:* DKSC is implemented on the Leksell Gamma Knife ICON system, so understanding its hardware and constraints is key.

▶ [Gamma Knife® (Stereotactic Radiosurgery)](https://www.youtube.com/watch?v=7ScVu-ZGfu8) — Nucleus Medical Media · 11 years ago

### Traveling salesman problem algorithms *(prerequisite)*
The Traveling Salesman Problem (TSP) is a classic optimization challenge that seeks the shortest possible route visiting a set of points once. Algorithms solving TSP help generate efficient 3D scanning paths for placing dose kernels inside tumors, minimizing treatment time and improving dose delivery.

*How the paper uses it:* The DKSC scanning path is generated using a Traveling Salesman approach to optimize kernel placement.

▶ [What is the Traveling Salesman Problem?](https://www.youtube.com/watch?v=1pmBjIZ20pE) — AlphaOpt · 5 years ago

### Radiation dose kernel modeling *(prerequisite)*
Dose kernels represent the fundamental units of radiation dose distribution from a single radiation shot. Understanding how dose kernels are modeled and combined is critical to grasp how DKSC achieves uniform and conformal dose distributions within brain tumors.

*How the paper uses it:* Dose kernels are the fundamental units of dose delivery in DKSC, critical for treatment planning.

▶ [Radiation units: Absorbed, Equivalent & Effective dose](https://www.youtube.com/watch?v=gn9SUPQtwVk) — Dr. Paulien Moyaert · 4 years ago

### Stereotactic radiosurgery dose optimization *(prerequisite)*
Dose optimization in stereotactic radiosurgery involves planning radiation delivery to maximize tumor dose while minimizing exposure to healthy tissue. This concept is key to understanding how DKSC improves upon conventional Gamma Knife plans by enhancing dose uniformity and conformality.

*How the paper uses it:* Understanding dose optimization principles is essential to grasp DKSC improvements over conventional plans.

▶ [Stereotactic Body Radiotherapy (SBRT) and Stereotactic Radiosurgery (SRS)](https://www.youtube.com/watch?v=DP1vj246qrc) — Global Healthcare Academy · Streamed 4 years ago

### Dose kernel-based spot scanning method
The DKSC method uses hundreds of small photon dose kernels scanned along a continuous 3D path inside the tumor to create a highly uniform and conformal radiation dose. This innovative approach overcomes limitations of fixed collimator sizes and dose inhomogeneity in conventional Gamma Knife treatments.

*How the paper uses it:* Central novel method of the paper that enables improved dose uniformity and conformality in hypofractionated brain SRS.

▶ [SRS Lecture 4 dose planning](https://www.youtube.com/watch?v=pdnBruUjZ5A) — UF Neurosurgery Webmaster (UF Dept. of Neurosurgery) · 27:32 · 9 years ago

## Already in your library

- [R9. Approximation Algorithms: Traveling Salesman Problem](https://www.youtube.com/watch?v=zM5MW5NKZJg) — also for: Distributed Load Balancing on Unrelated Machines (Aaron Bernstein)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate understanding of the DKSC method for hypofractionated brain radiosurgery introduced in the paper. Starting with a beginner-level dose kernel visualization and uniformity metric calculation, progressing to an intermediate-level reimplementation of the DKSC scanning path algorithm with dose simulation and comparison to a simple baseline, and culminating in an advanced project extending DKSC to improve dose painting resolution addressing a stated limitation of the paper.

### Beginner — Dose Kernel Visualization and Uniformity Metric Calculator
*Effort: a weekend, ~8 hours*

You build a small interactive visualization tool that simulates placement of photon dose kernels within a simplified 3D tumor volume and calculates dose uniformity metrics such as maximum dose and coverage percentage. This reproduces the concept of dose kernel placement and dose homogeneity evaluation from the paper on a small scale.

**Why it shows you understood the paper:** This project shows you understand the core idea of dose kernel-based spot scanning and how dose uniformity metrics are used to evaluate plan quality, which are key contributions of the paper.

**Grounded in:** Demonstrates the paper's key contribution of dose kernel-based spot scanning and the result that DKSC achieves highly homogeneous dose distributions with reduced maximum dose compared to conventional plans.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Simulated 3D tumor volume represented as a voxel grid; no real patient data needed.

**Build it:**

1. Create a 3D grid representing a simplified tumor volume.
2. Implement a function to place dose kernels (modeled as Gaussian dose distributions) at specified 3D coordinates within the volume.
3. Calculate cumulative dose distribution by summing dose kernels.
4. Compute dose uniformity metrics: maximum dose, coverage at prescription dose, and dose volume histogram (DVH) approximations.
5. Build simple 3D visualizations of dose kernel placements and dose distribution slices.
6. Document the code and explain how these metrics relate to the paper's reported results.

**Ships as:** A Jupyter notebook with interactive visualizations and calculations demonstrating dose kernel placement and uniformity metrics, with explanations linking to the paper's concepts.

**Stretch goal:** Add a simple GUI with sliders to adjust kernel size and weights and observe effects on dose uniformity.

### Intermediate — Reimplementation of DKSC 3D Scanning Path Algorithm with Dose Simulation
*Effort: 1-3 weekends, ~20 hours*

You implement the core DKSC method by coding the Traveling Salesman Problem (TSP)-based 3D scanning path generation inside a tumor volume and simulate dose kernel placement along this path. You compare the resulting dose uniformity metrics against a simple baseline of fixed-point dose placement (mimicking conventional LGK shots).

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core algorithmic contribution (the TSP path for dose kernel scanning) and quantitatively evaluate dose uniformity improvements, proving comprehension beyond conceptual level.

**Grounded in:** Reimplements the paper's key contribution of the algorithm to generate a 3D scanning path inside the tumor using a Traveling Salesman approach and demonstrates improved dose uniformity metrics compared to conventional plans.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, networkx, ortools (Google OR-Tools for TSP)

**Data:** Simulated tumor volumes as 3D point clouds or voxel grids; no real patient data available, simulation suffices.

**Build it:**

1. Generate or load a 3D tumor volume represented as a set of points or voxels.
2. Implement or use a TSP solver (e.g., Google OR-Tools) to compute an efficient scanning path visiting all kernel placement points inside the tumor.
3. Simulate dose kernel placement along the scanning path with variable kernel sizes and weights.
4. Calculate dose uniformity metrics (maximum dose, coverage, selectivity index, gradient index) for the DKSC plan.
5. Implement a baseline plan with fixed-point dose placement mimicking conventional LGK shots and compute the same metrics.
6. Compare and visualize dose distributions and metrics between DKSC and baseline plans.
7. Write a README explaining the implementation, comparison, and relation to the paper's results.

**Ships as:** A Python project with scripts/notebooks that generate DKSC scanning paths, simulate dose distributions, compare metrics to baseline, and visualize results with explanations.

**Stretch goal:** Incorporate simple optimization of kernel weights along the path to further improve dose uniformity.

### Advanced — Extending DKSC for Improved Dose Painting Resolution on Smaller Lesions
*Effort: few weeks, ~80+ hours*

You develop an extension of the DKSC method to address the paper's limitation of finite spot-scanning size (minimum 4 mm) that limits dose painting resolution. This involves algorithmic modifications to simulate sub-spot dose modulation or overlapping kernel strategies to improve dose uniformity for smaller or irregularly shaped brain lesions. You evaluate the approach via dose uniformity metrics and compare to the original DKSC method.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper, showing deep understanding of the DKSC method and creativity in extending it to clinically relevant challenges, which can initiate meaningful academic discussion.

**Grounded in:** Addresses the limitation that finite spot-scanning size (minimum 4 mm for LGK) may limit dose painting resolution and achievable dose uniformity, exploring ways to improve dose painting resolution for smaller or irregular lesions.

**Tech stack:** Python 3.11, numpy, scipy, matplotlib, networkx, ortools, Jupyter Notebook

**Data:** Simulated small and irregular 3D tumor volumes; no real patient data available, synthetic data generated based on typical lesion sizes described in the paper.

**Build it:**

1. Review the original DKSC scanning path and dose kernel placement implementation from the intermediate project.
2. Design and implement methods to simulate sub-spot dose modulation, such as overlapping smaller dose kernels or variable weighting within the 4 mm minimum spot size constraint.
3. Generate synthetic small and irregular tumor volumes to test the method.
4. Simulate dose distributions using the extended DKSC approach and compute dose uniformity metrics.
5. Compare results against the original DKSC method to quantify improvements in dose painting resolution and uniformity.
6. Document the methodology, results, and implications for clinical implementation as discussed in the paper.

**Ships as:** A comprehensive codebase and report demonstrating the extended DKSC method, dose simulations on small lesions, metric comparisons, and discussion of clinical relevance.

**Stretch goal:** Prototype integration of the extended DKSC approach with a simple treatment planning interface or visualization tool.
