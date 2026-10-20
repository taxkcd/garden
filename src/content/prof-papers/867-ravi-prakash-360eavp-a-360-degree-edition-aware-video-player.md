---
title: "867 · 360EAVP: A 360-degree Edition-Aware Video Player — Ravi Prakash"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ravi-prakash"
source_hash: "3b6a471e0828ba100245ea651a6ce3ec614d528d81fed37f5ebb8f346be7de3c"
sequence: 867
generator: "outreach-garden: managed"
---

# 867 · 360EAVP: A 360-degree Edition-Aware Video Player

## At a glance

- **Professor:** Ravi Prakash
- **Institution:** University of Texas at Dallas
- **Paper:** [360EAVP: A 360-degree Edition-Aware Video Player](https://dl.acm.org/doi/pdf/10.1145/3592834.3592879)
- **Authors:** Gabriel de Castro Araújo, Henrique Domingues Garcia, Mylène C.Q. Farias, Ravi Prakash, Marcelo M. Carvalho
- **Year:** 2023

## Paper overview

This paper presents 360EAVP, an open-source web browser-based video player designed for streaming and viewing 360-degree edited videos on head-mounted displays (HMDs). It extends a previous player by adding features such as real-time viewport-based operation, dynamic editing techniques to guide viewer attention, visibility evaluation of video tiles, an edition-aware adaptive bitrate (ABR) algorithm, viewport prediction using regression methods, and data logging. The player aims to support research on optimizing 360-degree video streaming and improving user experience in virtual reality.

### Why it matters

**Research problem:** Creating coherent narratives and efficient streaming for 360-degree videos is challenging because viewers control their viewport freely, making traditional editing and streaming techniques ineffective. Specifically, guiding viewer attention to regions of interest (RoIs) and optimizing tile-based streaming with adaptive bitrate algorithms on HMDs require new methods that consider dynamic editing and viewport prediction.

**Why it matters:** 360-degree videos and VR/AR technologies are rapidly growing markets with immersive experiences, but current video players lack open-source tools that support edited 360-degree content with adaptive streaming on HMDs. Improving editing and streaming techniques can enhance user experience, reduce bandwidth waste, and enable better research and development in this field.

**Key contributions:**

- Development of 360EAVP, an open-source web browser-based 360-degree video player for HMDs supporting tile-based DASH streaming.
- Implementation of dynamic editing techniques (snap-change and fade-rotation with blinking) to guide viewer attention in 360-degree videos.
- A visible-face identification module that estimates which cube faces are visible in the user's viewport to optimize tile requests.
- An edition-aware adaptive bitrate (ABR) algorithm that incorporates editing timing and viewport prediction to improve streaming quality.
- A viewport prediction module using linear regression and ridge regression to anticipate user head movements.

## About the professor

**Ravi Prakash** — Professor, Department of Computer Science & Hobson Wildenthal Honors College, University of Texas at Dallas.

Research interests: Field-of-View prediction and caching for 360-degree videos, augmented and virtual reality, coexistence of wireless networks (including WiFi networks) in unlicensed and shared frequency bands, sensor networking, mobile computing and distributed algorithms.

### Research links

- [Faculty/profile page](http://www.utdallas.edu/~ravip)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adaptive Bitrate Streaming and Viewport Prediction
**The paper assumes:** adaptive bitrate streaming, viewport prediction methods, tile-based 360-degree video streaming
**Already in this field?** Skip this entirely if you already understand adaptive bitrate streaming techniques and viewport prediction models used in 360-degree video systems.

This background focuses on adaptive bitrate (ABR) streaming and viewport prediction, which are central to understanding the 360EAVP player's edition-aware ABR algorithm and viewport prediction modules. The rigorous option provides a structured, in-depth exploration of ABR concepts, while the fast track offers a concise, practical introduction suitable for quickly grasping the essentials before reading the paper.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [HTTP Live Streaming - HLS Tutorials for Begineers](https://www.youtube.com/playlist?list=PLS3bLSAwEluxJC4V1OJ9Tbw1QR2BdVTat) — Tech with Monir · 13 videos · 1.4h across 13 episodes

**Watch only this:** Episodes 1-4, about 24 minutes — covering HLS basics, MPEG-DASH comparison, and practical streaming examples to grasp adaptive bitrate streaming fundamentals.

*Why it unblocks this paper:* This playlist by Tech with Monir offers a clear, well-structured introduction to HTTP Live Streaming (HLS) and adaptive bitrate streaming concepts, covering the basics needed to understand ABR mechanisms relevant to 360-degree video streaming and tile-based DASH approaches used in 360EAVP.

*If you want all of it:* Approximately 1.4 hours across all 13 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the 360EAVP paper, start by exploring foundational concepts such as viewport prediction and tile-based streaming for 360-degree videos, which are critical for anticipating user head movements and enabling adaptive quality streaming. Then, study visible face identification on cube map projections and dynamic editing techniques to grasp how the system optimizes tile requests and guides viewer attention. Finally, focus on the paper's core contributions, especially the edition-aware adaptive bitrate streaming and the authors' own talk if available, to see how these elements integrate into the 360EAVP player.

### Viewport prediction in 360-degree video *(prerequisite)*
Viewport prediction is fundamental for anticipating user head movements in 360-degree videos, enabling the system to prefetch and prioritize streaming tiles that the user is likely to view. Understanding regression and clustering approaches to viewport prediction provides insight into how 360EAVP predicts viewports to optimize streaming quality.

*How the paper uses it:* The paper implements viewport prediction using linear and ridge regression to anticipate user head movements for adaptive streaming.

▶ [Viewport Prediction for 360° Videos: A Clustering Approach](https://www.youtube.com/watch?v=-RDTAKFOBPs) — ACM MMSys 2020 · 6y ago

### Tile-based streaming for 360-degree video *(prerequisite)*
Tile-based streaming divides 360-degree videos into spatial tiles, allowing adaptive bitrate streaming per tile to optimize bandwidth and quality. This technique is key to 360EAVP's ability to stream high-quality video regions based on predicted viewports and editing schedules.

*How the paper uses it:* 360EAVP builds on tile-based DASH streaming to deliver adaptive quality tiles based on viewport prediction and editing.

▶ [Tile-based Panoramic Live Video Streaming on ICN @ ICC 2019 RAFNET](https://www.youtube.com/watch?v=RjhHfGqm9HY) — Named Data Networking · 7y ago

### Visible face identification on cube map projections *(prerequisite)*
Visible face identification on cube map projections improves the accuracy of determining which video tiles to stream by estimating which cube faces are visible in the user's viewport. This technique enhances tile request efficiency and streaming quality in 360EAVP.

*How the paper uses it:* The paper introduces a visible-face identification module that estimates visible cube faces to optimize tile requests.

▶ [Back Face Detection | Visible Surface Detection | Computer Graphics & Multimedia CGMMT Unit 3 Sem 3](https://www.youtube.com/watch?v=bpGZb6Oy-wo) — IP Academy · 6y ago

### Dynamic editing techniques for immersive video *(prerequisite)*
Dynamic editing techniques in immersive video guide viewer attention and create coherent narratives despite free viewport control. Understanding these techniques contextualizes 360EAVP's snap-change and fade-rotation editing methods that influence streaming and user experience.

*How the paper uses it:* 360EAVP implements dynamic editing techniques such as snap-change and fade-rotation with blinking to guide viewer attention.

▶ [The Future of Apple Immersive Video & Vision Pro with Blackmagic Design’s David Hoffman](https://www.youtube.com/watch?v=kyO7W4gMkRI) — Spatial Insider ᯅ · 6mo ago

### Edition-aware adaptive bitrate streaming
Edition-aware adaptive bitrate streaming is central to 360EAVP, integrating editing timing and viewport prediction to prioritize tile quality and improve streaming performance. Studying this method reveals how 360EAVP balances quality and bandwidth dynamically.

*How the paper uses it:* The paper proposes an edition-aware ABR algorithm that incorporates editing schedules and viewport predictions for tile quality selection.

▶ [SIGCOMM'26: Adaptive Bitrate Live Streaming over HTTP-FLV: A Practical System Perspective](https://www.youtube.com/watch?v=W3HSaawPv2M) — ACM SIGCOMM · 2mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the 360EAVP paper, start by learning the foundational concepts of tile-based streaming and viewport prediction in 360-degree video, which are essential for optimizing streaming quality and user experience. Next, explore dynamic editing techniques that guide viewer attention in immersive videos, followed by visible face identification on cube map projections to improve tile streaming accuracy. Finally, study the edition-aware adaptive bitrate streaming algorithm that integrates these components to deliver high-quality 360-degree video on head-mounted displays.

### Tile-based streaming for 360-degree video *(prerequisite)*
Tile-based streaming divides a 360-degree video into smaller regions or tiles, allowing the system to stream different quality levels for each tile based on the viewer's current viewport. This technique reduces bandwidth usage by focusing resources on the visible parts of the video. Understanding this is key to grasping how 360EAVP optimizes video delivery.

*How the paper uses it:* 360EAVP uses tile-based DASH streaming to adaptively deliver video quality per region based on viewport prediction and editing.

▶ [Tile-based Panoramic Live Video Streaming on ICN @ ICC 2019 RAFNET](https://www.youtube.com/watch?v=RjhHfGqm9HY) — Named Data Networking · 7y ago

### Viewport prediction in 360-degree video *(prerequisite)*
Viewport prediction anticipates where a viewer will look next in a 360-degree video, enabling the system to prefetch and stream the relevant tiles at higher quality. Accurate prediction improves user experience by reducing buffering and quality drops. This concept underpins the adaptive streaming and editing strategies in 360EAVP.

*How the paper uses it:* 360EAVP implements viewport prediction using linear and ridge regression to guide adaptive bitrate decisions.

▶ [Viewport Prediction for 360° Videos: A Clustering Approach](https://www.youtube.com/watch?v=-RDTAKFOBPs) — ACM MMSys 2020 · 6y ago

### Dynamic editing techniques for immersive video *(prerequisite)*
Dynamic editing in 360-degree videos involves techniques like snap-change and fade-rotation to guide viewer attention within an immersive environment. These methods help create coherent narratives despite the viewer's freedom to look anywhere. Understanding these techniques clarifies how 360EAVP enhances storytelling and user engagement.

*How the paper uses it:* 360EAVP incorporates dynamic editing methods to influence viewer focus and improve narrative coherence.

▶ [The Future of Apple Immersive Video & Vision Pro with Blackmagic Design’s David Hoffman](https://www.youtube.com/watch?v=kyO7W4gMkRI) — Spatial Insider ᯅ · 6mo ago

### Visible face identification on cube map projections *(prerequisite)*
Visible face identification determines which faces of a cube map projection are currently visible in the user's viewport. This improves streaming efficiency by requesting only the necessary tiles. This geometric approach is more accurate than simpler bounding methods and is crucial for 360EAVP's tile selection.

*How the paper uses it:* 360EAVP uses visible face identification to optimize tile requests based on the user's viewport on cube map projections.

▶ [13.1 Cube Map](https://www.youtube.com/watch?v=oYmfPZE4THY) — The CGVR Study Lab · 12:30 · 1y ago

### Edition-aware adaptive bitrate streaming
Edition-aware adaptive bitrate (ABR) streaming adjusts video quality dynamically by considering both viewport prediction and editing schedules. This approach prioritizes tile quality to enhance user experience while managing bandwidth. Learning this concept reveals how 360EAVP integrates editing and prediction for optimized streaming.

*How the paper uses it:* 360EAVP's edition-aware ABR algorithm uses editing timing and viewport prediction to select tile quality adaptively.

▶ [Adaptive Bitrate Streaming: How It Works and Why It Matters](https://www.youtube.com/watch?v=5VOKYR7O-Cs) — VdoCipher · 4y ago

## Already in your library

- [What is Adaptive Bitrate Streaming (ABS) for Video?](https://www.youtube.com/watch?v=z1m9NadpGAg) — also for: An Evaluation of ABR Switching for Time-Shifted Clients in MoQ (Andrew C. Freeman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and demonstrate key contributions of the 360EAVP paper. Starting with a beginner-level implementation of viewport-based visible face identification, you then advance to reimplementing and evaluating the paper's viewport prediction and edition-aware ABR algorithm on a simplified setup. Finally, the advanced project tackles a stated limitation by integrating a machine learning-based viewport prediction model to improve adaptive streaming robustness.

### Beginner — Visible Face Identification for 360-degree Video Viewport
*Effort: a weekend, ~8 hours*

You build a simplified visible face identification module that estimates which cube faces of a 360-degree video are visible given a user viewport direction. This reproduces the paper's visible-face identification method using mapped points on cube faces, replacing the bounding sphere method.

**Why it shows you understood the paper:** This project demonstrates your grasp of the geometric problem of mapping user viewport to cube map faces, a core step in optimizing tile requests for adaptive streaming.

**Grounded in:** The visible-face identification method using mapped points on cube faces improves accuracy over bounding sphere methods.

**Tech stack:** JavaScript, Three.js or similar WebGL library, Node.js

**Data:** Simulated viewport directions and cube face mappings; no external dataset required.

**Build it:**

1. Implement a cube map projection representing the six faces of a 360-degree video.
2. Create a function that takes a viewport direction (yaw, pitch) and determines which cube faces are visible using mapped points.
3. Visualize the viewport and highlight visible cube faces in a simple web page.
4. Compare your method against a naive bounding sphere approach by showing differences in visible face detection for sample viewports.

**Ships as:** A web-based demo and code repository showing visible face identification with visualizations and a README explaining the method and comparison.

**Stretch goal:** Add support for partial visibility estimation of cube faces and visualize tile-level visibility.

### Intermediate — Reimplementation of Edition-Aware ABR with Viewport Prediction
*Effort: 2 weekends, ~20 hours*

You reimplement the core edition-aware adaptive bitrate (ABR) algorithm that incorporates viewport prediction using linear and ridge regression. You simulate tile-based streaming decisions based on predicted viewports and editing schedules, comparing against a baseline ABR without edition awareness.

**Why it shows you understood the paper:** This project shows you can implement the paper's core streaming optimization method and evaluate the impact of viewport prediction and editing timing on tile quality selection.

**Grounded in:** An edition-aware adaptive bitrate (ABR) algorithm that incorporates editing timing and viewport prediction to improve streaming quality.

**Tech stack:** Python 3.11, scikit-learn (for regression models), NumPy, Matplotlib

**Data:** Simulated viewport head movement data and editing schedules; no public dataset available from the paper, so synthetic data mimicking typical user head motion and edit timings will be created.

**Build it:**

1. Implement linear and ridge regression models to predict viewport positions from past head movement data.
2. Simulate tile quality selection using an edition-aware ABR algorithm that prioritizes tiles based on predicted viewport and editing timing.
3. Implement a baseline ABR algorithm that does not consider editing or viewport prediction.
4. Evaluate and plot metrics such as tile quality allocation and bandwidth usage comparing both algorithms on synthetic data.
5. Write a README documenting the algorithm, simulation setup, and results.

**Ships as:** A Python repository with scripts to run viewport prediction, edition-aware ABR simulation, baseline comparison, and plots illustrating performance differences.

**Stretch goal:** Extend the simulation to incorporate viewport prediction errors and analyze their impact on ABR performance.

### Advanced — Machine Learning-Based Viewport Prediction for Robust Edition-Aware ABR
*Effort: 3+ weeks*

You develop and integrate a machine learning-based viewport prediction model (e.g., LSTM or Transformer) to improve prediction accuracy over linear regression. You then adapt the edition-aware ABR algorithm to use this enhanced prediction and evaluate its robustness, addressing the paper's limitation regarding prediction errors affecting ABR quality.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by applying advanced ML techniques to viewport prediction, demonstrating your ability to extend the research and improve system performance.

**Grounded in:** The ABR algorithm may produce suboptimal quality if viewport prediction errors occur, especially with subtiles smaller than cube faces. Future directions include investigating more robust viewport prediction methods.

**Tech stack:** Python 3.11, PyTorch or TensorFlow, scikit-learn, NumPy, Matplotlib

**Data:** Synthetic or publicly available 360-degree video head movement datasets if accessible; otherwise, generate realistic synthetic viewport trajectories for training and evaluation.

**Build it:**

1. Research and select a suitable ML model architecture for time-series viewport prediction (e.g., LSTM).
2. Prepare training data from synthetic or real viewport head movement sequences.
3. Train the ML model and evaluate its prediction accuracy against linear and ridge regression baselines.
4. Integrate the ML-based viewport prediction into the edition-aware ABR simulation from the intermediate project.
5. Analyze the impact of improved viewport prediction on tile quality allocation and streaming robustness.
6. Document the methodology, experiments, and findings in a detailed README.

**Ships as:** A comprehensive codebase with ML viewport prediction training and evaluation, integrated ABR simulation, and a report summarizing improvements and limitations.

**Stretch goal:** Experiment with user behavior analytics or reinforcement learning to further optimize tile prioritization and ABR decisions.

_No authors' own code or datasets are publicly available for this paper; synthetic data must be generated to simulate viewport trajectories and editing schedules._
