---
title: "546 · PowerGS: Display-Rendering Power Co-Optimization for Foveated Radiance-Field Rendering in Power-Constrained XR Systems — Yuhao Zhu"
date: 2026-09-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuhao-zhu"
source_hash: "471c1eb71a9dca863695f0f6c8f9590c0ed9071737e7ce7ec08c68ecae870b1c"
sequence: 546
generator: "outreach-garden: managed"
---

# 546 · PowerGS: Display-Rendering Power Co-Optimization for Foveated Radiance-Field Rendering in Power-Constrained XR Systems

## At a glance

- **Professor:** Yuhao Zhu
- **Institution:** University of Rochester
- **Paper:** [PowerGS: Display-Rendering Power Co-Optimization for Foveated Radiance-Field Rendering in Power-Constrained XR Systems](https://horizon-lab.org/pubs/sa25-powergs.pdf)
- **Authors:** Weikai Lin, Sushant Kondguli, Carl Marshall, Yuhao Zhu
- **Year:** 2025

## Paper overview

This paper introduces PowerGS, a framework that jointly optimizes the rendering and display power consumption of 3D Gaussian Splatting (3DGS) models used in Extended Reality (XR) devices, while maintaining visual quality. PowerGS identifies optimal trade-offs between rendering and display power by sampling pruned models and reconstructing iso-quality curves. It also supports foveated rendering to further reduce power. Experiments show significant power savings with minimal quality loss compared to existing methods.

### Why it matters

**Research problem:** How to jointly minimize rendering and display power consumption in 3D Gaussian Splatting models for XR devices under a perceptual quality constraint, given that prior work optimizes only one power component at a time, leading to suboptimal total power usage.

**Why it matters:** XR devices are power-constrained due to limited battery capacity and increasing computational demands. Efficient power optimization is critical to enable high-quality visual experiences without draining battery quickly. Existing methods that optimize rendering or display power alone do not achieve minimal total power consumption.

**Key contributions:**

- Proposed a general formulation for joint optimization of rendering and display power in radiance-field rendering.
- Developed a sample-and-reconstruction framework to obtain iso-quality curves and identify power-minimal models with a closed-form solution.
- Extended the approach to support foveated rendering for further power savings.
- Validated the method through subjective user studies and objective metrics showing significant power reduction with minimal quality loss.

## About the professor

**Yuhao Zhu** — University of Rochester.

Research interests: Computer Systems and Architecture, Computer Imaging and Graphics, Augmented/Virtual Reality, Human (Visual) Perception and Cognition, Computational Art, Art History, and Aesthetics

### Research links

- [Faculty/profile page](https://www.cs.rochester.edu/people/faculty/zhu_yuhao/index.html)
- [Identity evidence](http://www.yuhaozhu.com)
- [Identity evidence](https://www.cs.rochester.edu/~yzhu/)
- [Resolved homepage](https://www.cs.rochester.edu/people/faculty/zhu_yuhao/index.html#main)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Constrained Optimization in Computer Graphics
**The paper assumes:** constrained optimization theory, optimization in computer graphics, perceptual quality constraints
**Already in this field?** Skip this entirely if you already understand constrained optimization methods applied to graphics rendering and perceptual quality trade-offs.

This background focuses on constrained optimization techniques applied in computer graphics, essential for understanding the PowerGS paper's joint power optimization framework under quality constraints. The rigorous course option provides a deep, structured university-level treatment of mathematical methods relevant to graphics optimization, while the fast track offers a shorter, more focused introduction to computer graphics concepts including optimization, suitable for quickly grasping the core ideas without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS 205A:  Mathematical Methods for Robotics, Vision, and Graphics (Fall 2013)](https://www.youtube.com/playlist?list=PLQ3UicqQtfNvQ_VzflHYKhAqZiTxOkSwi) — Justin Solomon · 56 videos · 23.6h across the first 55 episodes

**Watch only this:** Lectures 1 (both parts), 2 (both parts), 3 (all parts), 4 (all parts), 5 (all parts), 6 (all parts), 7 (all parts), 8 (all parts), and 9 (both parts), about 12.5 hours total — covering numerics, linear systems, eigenproblems, and nonlinear equation convergence essential for constrained optimization in graphics.

*Why it unblocks this paper:* Justin Solomon's CS 205A course covers mathematical methods including constrained optimization, eigenproblems, and nonlinear equations, directly relevant to the PowerGS paper's use of iso-quality curves and inverse Michaelis–Menten kinetics in graphics optimization.

*If you want all of it:* About 23.6 hours across the first 55 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer Graphics (CMU 15-462/662)](https://www.youtube.com/playlist?list=PL9_jI1bdZmz2emSh0UQ5iOdT2xRHFHL7E) — Keenan Crane · 25 videos · 29.2h across 25 episodes

**Watch only this:** Lectures 22 (Optimization) and 16 (The Rendering Equation), about 2.5 hours total — focusing on optimization methods and rendering fundamentals relevant to PowerGS.

*Why it unblocks this paper:* Keenan Crane's CMU Computer Graphics course includes a dedicated lecture on Optimization (Lecture 22) and covers foundational graphics topics that provide intuition for constrained optimization in rendering and display power trade-offs.

*If you want all of it:* About 29.2 hours across 25 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the PowerGS paper, start by building foundational knowledge on radiance field rendering and foveated rendering techniques, which are critical to grasp the rendering and display power trade-offs in XR systems. Next, explore perceptual quality metrics to appreciate how visual fidelity constraints are modeled. Then, review power optimization challenges in XR systems to contextualize the joint optimization problem. Finally, focus on the core concept of 3D Gaussian Splatting rendering, the central rendering technique PowerGS optimizes, and conclude with the authors' own talk on the PowerGS framework for a direct and detailed understanding of their novel contributions.

### Radiance field rendering *(prerequisite)*
Radiance field rendering is the foundational neural rendering paradigm underlying 3D Gaussian Splatting and PowerGS. Understanding this concept is essential as it provides the basis for how scenes are represented and rendered in the paper's approach.

*How the paper uses it:* PowerGS builds on 3D Gaussian Splatting, which itself is a real-time radiance field rendering technique.

▶ [[INRIA, MPI] 3D Gaussian Splatting for Real-Time Radiance Field Rendering](https://www.youtube.com/watch?v=JLUZiVuq18U) — Trend in Research · 13:49 · 2 years ago

### Foveated rendering techniques *(prerequisite)*
Foveated rendering techniques spatially vary rendering quality based on gaze to reduce computational and display workload. Since PowerGS extends to foveated rendering for power savings, understanding these techniques is crucial to appreciate the paper's approach to independent optimization of quality regions.

*How the paper uses it:* PowerGS supports foveated rendering by optimizing models for different quality regions independently.

▶ [IEEE VR 2023 Conference Talk: Power Performance and Image quality Tradeoffs in Foveated Rendering](https://www.youtube.com/watch?v=E-NgrcfN4LQ) — Sarita Adve's Research Group · 8:23 · 3 years ago

### Perceptual quality metrics for rendering *(prerequisite)*
Perceptual quality metrics are essential for constraining power optimization to maintain visual fidelity. PowerGS uses a perceptual quality metric (HVSQ) to balance power savings and image quality, so understanding these metrics helps in evaluating the trade-offs involved.

*How the paper uses it:* PowerGS uses perceptual quality metrics to enforce quality constraints during joint power optimization.

▶ [ICG Lab Series Talk: Rafał K. Mantiuk, University of Cambridge](https://www.youtube.com/watch?v=uZhFFimPkCI) — JKU - Institute of Computer Graphics · 51:12 · Streamed 2 years ago

### Power optimization in XR systems *(prerequisite)*
Power optimization in XR systems addresses the challenges of limited battery capacity and high computational demands. This background contextualizes the importance of jointly optimizing rendering and display power, the core problem PowerGS tackles.

*How the paper uses it:* PowerGS addresses the joint minimization of rendering and display power in power-constrained XR devices.

▶ [Physics- and Risk-aware Machine Learning for Power System Operations | Hao Zhu | Smart Grid Seminar](https://www.youtube.com/watch?v=136XEkPx6oc) — Stanford ENERGY · 58:55 · 4 years ago

### 3D Gaussian Splatting rendering
3D Gaussian Splatting is the central rendering technique that PowerGS optimizes for power and quality trade-offs. A deep understanding of 3DGS is necessary to appreciate the pruning, sampling, and reconstruction methods used in PowerGS.

*How the paper uses it:* PowerGS optimizes 3D Gaussian Splatting models for joint rendering and display power savings.

▶ [3D Gaussian Splatting | Guest Lecture for "Computer Graphics in the AI Era"](https://www.youtube.com/watch?v=MBVmQSA24Yk) — Barney (Barnabás) Börcsök · 1:09:43 · 1 year ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the PowerGS paper, start by grasping the basics of radiance field rendering, the foundational neural rendering technique underlying 3D Gaussian Splatting. Next, learn about foveated rendering techniques, which reduce rendering workload by varying quality spatially, a key approach PowerGS leverages. Then, explore 3D Gaussian Splatting, the specific rendering method PowerGS optimizes for power and quality trade-offs. Finally, study the PowerGS framework itself, which jointly optimizes rendering and display power under quality constraints in XR systems.

### Radiance field rendering *(prerequisite)*
Radiance field rendering is a neural rendering approach that synthesizes novel views of a scene by modeling how light radiates from every point in 3D space. Understanding this technique provides the foundation for how 3D scenes are represented and rendered in PowerGS.

*How the paper uses it:* PowerGS builds on radiance field rendering as the underlying paradigm for 3D Gaussian Splatting models it optimizes.

▶ [[INRIA, MPI] 3D Gaussian Splatting for Real-Time Radiance Field Rendering](https://www.youtube.com/watch?v=JLUZiVuq18U) — Trend in Research · 13:49 · 2 years ago

### Foveated rendering techniques *(prerequisite)*
Foveated rendering reduces computational and display workload by rendering high-quality visuals only where the eye is focused, lowering quality in peripheral regions. This technique is crucial for power savings in XR devices and is integrated into PowerGS for further optimization.

*How the paper uses it:* PowerGS extends its joint power optimization framework to support foveated rendering by independently optimizing different quality regions.

▶ [IEEE VR 2023 Conference Talk: Power Performance and Image quality Tradeoffs in Foveated Rendering](https://www.youtube.com/watch?v=E-NgrcfN4LQ) — Sarita Adve's Research Group · 8:23 · 3 years ago

### 3D Gaussian Splatting rendering
3D Gaussian Splatting is a recent breakthrough rendering technique that represents scenes using 3D Gaussians, enabling real-time, high-quality neural rendering. Understanding this method is key to appreciating what PowerGS optimizes for power and quality trade-offs.

*How the paper uses it:* PowerGS targets power optimization specifically for 3D Gaussian Splatting models used in XR rendering.

▶ [3D Gaussian Splatting | The Future of Real-Time Neural Rendering](https://www.youtube.com/watch?v=iKJd9K7cCxs) — ScaleUp University · 10:37 · 5 months ago

## Already in your library

- [TUM AI Lecture Series - The 3D Gaussian Splatting Adventure ...](https://www.youtube.com/watch?v=DjOqkVIlEGY) — also for: WonderHuman: Hallucinating Unseen Parts in Dynamic 3D Human Reconstruction (Xiaohu Guo)
- [Jon Barron - Understanding and Extending Neural Radiance Fields](https://www.youtube.com/watch?v=HfJpQCBTqZs) — also for: NeurOCS: Neural NOCS Supervision for Monocular 3D Object Localization (Enrique Dunn)
- [NeRF: Representing Scenes as Neural Radiance Fields for View Synthesis (ML Research Paper Explained)](https://www.youtube.com/watch?v=CRlN-cYFxTk) — also for: NeurOCS: Neural NOCS Supervision for Monocular 3D Object Localization (Enrique Dunn)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth to demonstrate understanding of the PowerGS paper. The beginner project focuses on reproducing a key visualization of the joint power-quality tradeoff, the intermediate project involves running and extending the authors' PowerGS code to compare power savings and quality metrics, and the advanced project tackles a stated limitation by experimenting with improved perceptual quality metrics to reduce display tint artifacts in foveated rendering. Each project uses the applicant's existing skills while progressively introducing new concepts and tools relevant to the paper.

### Beginner — Visualize Iso-Quality Curves for Rendering and Display Power Tradeoffs
*Effort: a weekend, ~8 hours*

You build a standalone visualization tool that plots iso-quality curves in the rendering-display power space by simulating pruning points of a 3D Gaussian Splatting model. The tool uses a simplified inverse Michaelis–Menten kinetics model to reconstruct these curves and highlights the power-minimal points under a fixed quality constraint.

**Why it shows you understood the paper:** This project shows you understand the core concept of iso-quality curves and the joint optimization formulation central to PowerGS, including how pruning affects power and quality tradeoffs and how the closed-form solution is derived.

**Grounded in:** Developed a sample-and-reconstruction framework to obtain iso-quality curves and identify power-minimal models with a closed-form solution.

**Tech stack:** Python 3.11, Matplotlib, NumPy, Jupyter Notebook

**Data:** Simulated pruning points and power-quality samples based on the paper's description; no real dataset needed.

**Build it:**

1. Implement a function to simulate pruning points with associated rendering and display power values and quality scores.
2. Fit the inverse Michaelis–Menten kinetics model to the simulated data to reconstruct iso-quality curves.
3. Plot the reconstructed iso-quality curves in a 2D rendering vs. display power graph.
4. Highlight the power-minimal points on the curves under a fixed quality constraint.
5. Write a README explaining the relationship between pruning, power, and quality as visualized.

**Ships as:** A Jupyter notebook and Python scripts that visualize iso-quality curves with clear explanations and plots.

**Stretch goal:** Add interactivity to the visualization using a web framework like Streamlit to explore different quality constraints dynamically.

### Intermediate — Run and Extend PowerGS to Compare Power Savings and Quality Metrics
*Effort: 2 weekends, ~20 hours*

You clone and run the official PowerGS codebase to reproduce key power reduction results on a provided 3D Gaussian Splatting scene. Then you extend the code to compare PowerGS against a simple baseline that optimizes only rendering or display power separately, reporting total power consumption and perceptual quality metrics.

**Why it shows you understood the paper:** This project demonstrates you can use the authors' implementation to validate their claims, understand the joint optimization framework, and quantitatively evaluate power-quality tradeoffs, including foveated rendering support.

**Grounded in:** Validated the method through subjective user studies and objective metrics showing significant power reduction with minimal quality loss; PowerGS reduces total power by 13.1% and 52.5% compared to foveated rendering methods optimizing only rendering or display power respectively.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Use the PowerGS GitHub repository's example 3DGS scene data and models as provided at https://github.com/horizon-research/PowerGS.

**Build it:**

1. Clone and set up the PowerGS repository following the provided instructions.
2. Run the PowerGS pipeline on the example scene to reproduce baseline power and quality metrics.
3. Implement a simple baseline that optimizes only rendering power or only display power separately.
4. Compare total power consumption and perceptual quality (e.g., PSNR, SSIM, or HVSQ) between PowerGS and baselines.
5. Visualize and document the power-quality tradeoffs and discuss the benefits of joint optimization.

**Verified links from the paper:**

- <https://github.com/horizon-research/PowerGS> — released by the paper's authors

**Ships as:** A GitHub repo with scripts to run PowerGS and baselines, comparison plots, and a report summarizing results.

**Stretch goal:** Add support for a simple foveated rendering experiment by dividing the scene into quality regions and optimizing independently.

### Advanced — Improve Perceptual Quality Metrics to Reduce Display Tint Artifacts in Foveated Rendering
*Effort: 3+ weeks*

You extend the PowerGS framework to incorporate an improved or alternative perceptual quality metric or training loss that better captures human perception, aiming to reduce the yellow-green tint artifact caused by display power optimization in peripheral regions. You evaluate the impact on power savings and visual fidelity through objective metrics and user perceptual tests.

**Why it shows you understood the paper:** This project addresses a key limitation identified by the authors, showing deep comprehension of the perceptual quality challenges in joint power optimization and the ability to innovate on the training and evaluation methodology.

**Grounded in:** The display power optimization can introduce a yellow-green tint artifact due to reducing blue channel intensity, especially noticeable in peripheral regions; Improve perceptual quality metrics and training losses to better capture human visual perception and reduce artifacts.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, OpenCV

**Data:** Use the PowerGS repository's example scenes and models; simulate or collect additional perceptual data if feasible.

**Build it:**

1. Study the existing HVSQ perceptual quality metric used in PowerGS and identify its limitations regarding color tint artifacts.
2. Research alternative perceptual metrics or design a custom loss function that penalizes color shifts, especially in peripheral regions.
3. Modify the PowerGS training pipeline to incorporate the new perceptual quality metric or loss.
4. Train optimized models with the new metric and compare power savings, PSNR/SSIM, and perceptual quality against the original.
5. Conduct a small user study or qualitative evaluation to assess reduction in tint artifacts.
6. Document findings, challenges, and potential for real-time adaptive quality balancing.

**Verified links from the paper:**

- <https://github.com/horizon-research/PowerGS> — released by the paper's authors

**Ships as:** A forked PowerGS codebase with improved perceptual metric integration, evaluation scripts, and a detailed report on artifact reduction and power-quality tradeoffs.

**Stretch goal:** Explore real-time adaptive power optimization that dynamically adjusts display rendering parameters based on gaze and perceptual feedback.
