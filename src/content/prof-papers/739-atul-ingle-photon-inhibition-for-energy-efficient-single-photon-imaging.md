---
title: "739 · Photon Inhibition for Energy-Efficient Single-Photon Imaging — Atul Ingle"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-atul-ingle"
source_hash: "09360881afc254093222d4cfd4e084c2193775ea56fc106b83a4d6a393619a57"
sequence: 739
generator: "outreach-garden: managed"
---

# 739 · Photon Inhibition for Energy-Efficient Single-Photon Imaging

## At a glance

- **Professor:** Atul Ingle
- **Institution:** Portland State University
- **Paper:** [Photon Inhibition for Energy-Efficient Single-Photon Imaging](https://arxiv.org/pdf/2409.18337)
- **Authors:** Lucas J. Koerner, Shantanu Gupta, Atul Ingle, Mohit Gupta
- **Year:** 2024

## Paper overview

This paper addresses the high energy consumption problem of single-photon avalanche diode (SPAD) cameras, which detect individual photons but consume significant power per detection. The authors propose a computational imaging technique called photon inhibition that selectively disables SPAD pixels in real-time based on previous photon detections to reduce energy use while maintaining image quality and vision task performance. They design lightweight on-sensor policies that adaptively inhibit pixels, demonstrating substantial energy savings in image reconstruction, edge detection, and object detection tasks.

### Why it matters

**Research problem:** SPAD-based single-photon cameras consume high energy per photon detection due to avalanche multiplication, limiting sensor resolution and widespread adoption, especially in resource-constrained applications.

**Why it matters:** Reducing energy consumption in SPAD cameras is critical to enable higher resolution sensors and broader use in low-light and high dynamic range imaging, as well as in rapid motion scenarios. Current power consumption far exceeds that of conventional CMOS sensors, restricting practical deployment.

**Key contributions:**

- Introduction of photon inhibition to selectively disable SPAD pixels to reduce energy consumption.
- Development of lightweight, on-sensor inhibition policies that adapt to photon detection history in spatio-temporal neighborhoods.
- Proposal of novel energy-aware imaging performance metrics incorporating detection energy costs.
- Design and evaluation of inhibition policies tailored for image reconstruction, edge detection, and object detection tasks.
- Demonstration of substantial photon detection reductions (up to 90%) while maintaining task performance on simulated and real SPAD data.

## About the professor

**Atul Ingle** — Assistant Professor, Computer Science - Maseeh College of Engineering & Computer Science, Portland State University.

Research interests: Computational Imaging, Computer Vision, Signal Processing

### Research links

- [Faculty/profile page](https://www.pdx.edu/profile/atul-ingle)
- [Identity evidence](https://www.AtulIngle.com)
- [Professor website](https://www.atulingle.com/)
- [Resolved homepage](https://web.cecs.pdx.edu/~ingle2/)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=jVYxUqEAAAAJ&view_op=list_works&sortby=pubdate)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Computational Imaging and SPAD Sensors
**The paper assumes:** single-photon avalanche diode sensor operation, computational imaging principles, photon detection and inhibition methods
**Already in this field?** Skip this entirely if you already understand SPAD sensor technology and computational imaging methods for photon-limited cameras.

To understand the paper on photon inhibition for energy-efficient single-photon imaging, it is essential to grasp the principles of SPAD sensors and computational imaging techniques that optimize photon detection and energy use. The rigorous course option offers a deep dive into advanced optical and computational imaging methods relevant to SPAD technology, while the fast track provides a concise, focused introduction to computational imaging concepts that underpin the paper's computational policies and energy-aware metrics. Choose the rigorous course for comprehensive foundational knowledge or the fast track for a quick yet solid conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Winter College on Optics: Advanced Optical Techniques for Bio-imaging | (smr 3104)](https://www.youtube.com/playlist?list=PL6S8U84PCLB1fxzGoFY4QdX9hQQlujtuz) — ICTP Science, Technology and Innovation · 26 videos · 35.3h across 26 episodes

**Watch only this:** Episodes 1 (Introduction to optical microscopy: fundamental concepts and developments in modern microscopy), 3 (Basic principles of photothermal techniques and their applications), 8 and 9 (Bio-imaging processing parts 1 and 2), and 23 (Computational aspects of SIM -&- Light Wedge and Lightsheet‐Raman Microscopy), about 7 hours total — these cover the optical principles, photothermal detection, bio-imaging processing, and computational imaging aspects most relevant to SPAD sensors and photon inhibition.

*Why it unblocks this paper:* This ICTP Winter College on Optics playlist covers fundamental and experimental aspects of advanced microscopy, spectroscopy, and computational imaging techniques, providing the rigorous optical and imaging background necessary to understand SPAD sensor operation and photon detection energy considerations.

*If you want all of it:* 35.3 hours across 26 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computational Imaging](https://www.youtube.com/playlist?list=PLRkvbXoJLGstl0w9O9Q0KIgE3MLZhlj6K) — Yuan Chen · 9 videos · 5.5h across 9 episodes

**Watch only this:** Episodes 1 (10.2 Coded Aperture Imaging), 2 (10.3 Compressive Sensing), and 3 (10.1 Light Fields), about 1.8 hours total — these provide the essential computational imaging techniques relevant to the paper's approach.

*Why it unblocks this paper:* This Computational Imaging playlist by Yuan Chen offers a concise introduction to computational imaging concepts including coded aperture, compressive sensing, light fields, and aberration correction, which are foundational to understanding the computational policies and energy-aware metrics used in photon inhibition for SPAD cameras.

*If you want all of it:* 5.5 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Photon Inhibition for Energy-Efficient Single-Photon Imaging,' start by building foundational knowledge on single-photon avalanche diode (SPAD) imaging technology and computational imaging methods, which underpin the sensor hardware and algorithmic framework used. Next, explore energy-efficient sensor design concepts to appreciate the challenges and context of reducing power consumption in SPAD cameras. Finally, focus on the core concept of photon inhibition itself, prioritizing the authors' own talk on this work to gain direct insights into their novel adaptive inhibition policies and experimental results.

### Single-photon avalanche diode imaging *(prerequisite)*
This section covers the fundamental sensor technology underlying the paper's imaging system. Understanding SPAD operation, avalanche multiplication, and challenges such as power consumption and noise is critical to grasp the motivation and technical context of photon inhibition.

*How the paper uses it:* The paper proposes energy-efficient imaging methods specifically for SPAD-based single-photon cameras.

▶ [Single-photon detectors - Krister Shalm](https://www.youtube.com/watch?v=Vt84rSJa7VI) — Institute for Quantum Computing · 1:27:49 · 13y ago

### Computational imaging methods *(prerequisite)*
Computational imaging integrates hardware and algorithm design to enhance imaging capabilities. This section provides a framework for understanding how computational algorithms can optimize photon detection and image reconstruction, which is central to the photon inhibition approach.

*How the paper uses it:* Photon inhibition is a computational imaging technique that adaptively controls photon detections to improve energy efficiency.

▶ [Laura Waller - Computational Microscopy (March 23, 2022)](https://www.youtube.com/watch?v=5AWx_FLVpmk) — Simons Foundation · 41:22 · 4y ago

### Energy-efficient sensor design *(prerequisite)*
This section contextualizes the importance of reducing power consumption in imaging sensors, including SPADs. It covers general principles and challenges in designing sensors and systems that balance performance with energy efficiency.

*How the paper uses it:* The paper addresses the high energy consumption problem of SPAD cameras and proposes inhibition policies to reduce power use.

▶ [Energy Efficient Sensor Design](https://www.youtube.com/watch?v=oTUGfOHQy0I) — Gyancity Research Lab · 10:20 · 10y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own recorded talk provides the most direct and detailed exposition of their novel photon inhibition method, experimental setup, and results. This talk is essential for an advanced reader to understand the paper's contributions and technical nuances.

*How the paper uses it:* This is the authors' own presentation of their 2024 paper on photon inhibition for energy-efficient single-photon imaging.

▶ [[ECCV 2024 Oral][Indepth Reading]Photon Inhibition for Energy-Efficient Single-Photon Imaging](https://www.youtube.com/watch?v=6ZYeubX_eG4) — Paper With Video · 15:49 · 2y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on photon inhibition for energy-efficient single-photon imaging, start by learning the fundamental technology of Single-Photon Avalanche Diode (SPAD) sensors, which are the hardware basis. Next, grasp the principles of computational imaging, which provide the framework for algorithmic enhancements like photon inhibition. Then, explore energy-efficient sensor design concepts to appreciate the importance of reducing power consumption. Finally, study the core idea of adaptive pixel inhibition policies, the computational technique proposed in the paper to selectively disable pixels and save energy.

### Single-photon avalanche diode imaging *(prerequisite)*
Single-Photon Avalanche Diodes (SPADs) are sensors that detect individual photons by triggering an avalanche of electrons, enabling extremely sensitive imaging in low-light conditions. Understanding how SPADs work, including their avalanche multiplication and timing capabilities, is essential to grasp the hardware challenges and energy costs addressed in the paper.

*How the paper uses it:* The paper builds on SPAD technology as the sensor platform whose energy consumption is reduced via photon inhibition.

▶ [The Basics of Single Photon Avalanche Diodes](https://www.youtube.com/watch?v=pea1Uftrujc) — Kevin Zhang · 11:39 · 10y ago

### Computational imaging methods *(prerequisite)*
Computational imaging combines hardware and software design to improve imaging capabilities beyond traditional optics, often by solving inverse problems and using algorithms to reconstruct images from raw sensor data. This approach enables new imaging techniques that can optimize sensor usage and image quality.

*How the paper uses it:* Photon inhibition is a computational imaging technique that adaptively controls SPAD pixels to reduce energy while maintaining image quality.

▶ [Laura Waller - Computational Microscopy (March 23, 2022)](https://www.youtube.com/watch?v=5AWx_FLVpmk) — Simons Foundation · 41:22 · 4y ago

### Energy-efficient sensor design *(prerequisite)*
Energy-efficient sensor design focuses on reducing the power consumption of sensors and their associated electronics, which is critical for portable and resource-constrained applications. Techniques include selective activation, low-power circuits, and adaptive control to balance performance and energy use.

*How the paper uses it:* The paper targets energy efficiency in SPAD sensors by selectively inhibiting pixels to reduce avalanche power consumption.

▶ [Energy Efficient Sensor Design](https://www.youtube.com/watch?v=oTUGfOHQy0I) — Gyancity Research Lab · 10:20 · 10y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and implement photon inhibition for energy-efficient single-photon imaging as described in the paper. Starting with a basic simulation of photon inhibition policies, you then reimplement and evaluate core inhibition methods on image reconstruction tasks, and finally extend the approach by addressing a stated limitation or future direction such as holistic energy modeling or hardware-aware policy design. Each project builds on your existing software engineering and applied ML skills while introducing computational imaging concepts and energy-aware metrics.

### Beginner — Simulate Basic Photon Inhibition Policy
*Effort: a weekend, ~8 hours*

You build a simple Python simulation that models a SPAD sensor array detecting photons over multiple frames and implements a basic photon inhibition policy that disables pixels based on recent photon detections. The simulation visualizes how inhibition reduces photon detections spatially and temporally.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core photon inhibition mechanism and its effect on reducing photon detections while preserving spatial information, reflecting the paper's fundamental approach.

**Grounded in:** Introduction of photon inhibition to selectively disable SPAD pixels to reduce energy consumption.

**Tech stack:** Python 3.11, matplotlib, numpy, Jupyter Notebook

**Data:** Synthetic photon detection data simulated as Poisson photon arrivals over a 2D pixel grid, mimicking SPAD sensor behavior as described in the paper.

**Build it:**

1. Simulate a 2D grid of SPAD pixels with Poisson-distributed photon arrivals per frame.
2. Implement a simple inhibition policy that disables pixels in the next frame if they detected photons in the current frame.
3. Visualize photon detections and inhibited pixels over multiple frames.
4. Calculate and plot the reduction in total photon detections due to inhibition.
5. Write a README explaining the simulation and how inhibition affects energy consumption.

**Ships as:** A Jupyter notebook or Python script simulating photon inhibition with visualizations and a README explaining the policy and its energy-saving effect.

**Stretch goal:** Add a spatial neighborhood inhibition policy that disables pixels near recently active pixels to mimic local spatio-temporal inhibition.

### Intermediate — Reimplement Photon Inhibition for Image Reconstruction
*Effort: 2 weekends, ~20 hours*

You reimplement the core photon inhibition policies from the paper targeting image reconstruction quality. Using a publicly available low-light image dataset as a proxy for SPAD photon counts, you simulate photon detections and apply inhibition policies to reduce detections. You then reconstruct images and evaluate quality using SSIM and energy-aware metrics.

**Why it shows you understood the paper:** This project shows you can translate the paper's inhibition policies into code, apply them to realistic data, and quantitatively evaluate the trade-off between energy savings and image quality, reproducing key results.

**Grounded in:** 42% fewer photon detections at equal image quality (SSIM) for image reconstruction using inhibition policies.

**Tech stack:** Python 3.11, numpy, scikit-image, matplotlib, Jupyter Notebook

**Data:** Use a public low-light image dataset (e.g., the See-in-the-Dark (SID) dataset) as a substitute for SPAD photon count data by simulating photon arrivals proportional to pixel intensities.

**Build it:**

1. Obtain a low-light image dataset and simulate photon detections per pixel as Poisson counts proportional to pixel intensity.
2. Implement the paper's single-pixel, single-frame inhibition policies based on photon detection history.
3. Apply inhibition policies to reduce photon detections and reconstruct images by aggregating detected photons.
4. Compute image quality metrics (SSIM) and energy-aware metrics incorporating detection counts.
5. Compare reconstruction quality and photon detection counts with and without inhibition.
6. Document the implementation, results, and insights in a detailed README.

**Ships as:** A Python project with scripts/notebooks implementing inhibition policies, image reconstruction, quantitative evaluation, and a README reporting results and reproducing the paper's key findings.

**Stretch goal:** Incorporate a simple edge detection task and evaluate inhibition policies tailored for edge preservation as in the paper.

### Advanced — Extend Photon Inhibition with Holistic Energy Modeling
*Effort: 3+ weeks*

You develop an extended photon inhibition framework that incorporates a holistic energy consumption model including on-sensor computation and readout costs, addressing a key limitation noted in the paper. You design and evaluate inhibition policies optimized under this comprehensive energy model and test them on simulated SPAD data for image reconstruction or object detection.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the paper's limitations and future directions by advancing inhibition policy design with realistic energy costs beyond photon detection, potentially improving practical applicability.

**Grounded in:** Implementation costs of on-sensor computations and readout energy are not fully modeled; future work needed for holistic energy models.

**Tech stack:** Python 3.11, numpy, scikit-image, matplotlib, Jupyter Notebook, PyTorch (optional for policy optimization)

**Data:** Simulated SPAD photon detection data generated as in the intermediate project, or synthetic data modeling dynamic scenes with photon flux variations.

**Build it:**

1. Research and define an energy consumption model that includes photon detection energy, on-sensor computation, and readout costs.
2. Extend existing inhibition policies to incorporate this energy model, possibly formulating an optimization objective balancing image quality and total energy.
3. Implement policy evaluation on simulated photon detection data for image reconstruction or object detection tasks.
4. Compare energy savings and task performance against baseline inhibition policies ignoring computation/readout costs.
5. Document methodology, energy model assumptions, policy design, and evaluation results in a comprehensive report.

**Ships as:** A codebase and report presenting an extended photon inhibition framework with holistic energy modeling, policy implementations, and evaluation results demonstrating improved energy-performance trade-offs.

**Stretch goal:** Prototype a hardware-aware inhibition policy design considering latency and resource constraints for real-time on-chip implementation.
