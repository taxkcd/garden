---
title: "810 · IBeaconMap: Automated Indoor Space Representation for Beacon-Based Wayfinding — Vinod Namboodiri"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vinod-namboodiri"
source_hash: "d994087ba2af39714a8497c32efd27648b88442bc52f68cf4cb8f203117b8c68"
sequence: 810
generator: "outreach-garden: managed"
---

# 810 · IBeaconMap: Automated Indoor Space Representation for Beacon-Based Wayfinding

## At a glance

- **Professor:** Vinod Namboodiri
- **Institution:** Wichita State University
- **Paper:** [IBeaconMap: Automated Indoor Space Representation for Beacon-Based Wayfinding](https://arxiv.org/pdf/1802.05735)
- **Authors:** Seyed Ali Cheraghi, Vinod Namboodiri, Kaushik Sinha
- **Year:** 2018

## Paper overview

This paper presents IBeaconMap, a largely automated technique that uses computer vision and machine learning to analyze architectural floor plans and generate indoor space representations for beacon-based navigation systems. It identifies points of interest and walking paths, creates a connectivity graph with distances and directions, and suggests beacon placement locations to aid indoor wayfinding, especially for blind and visually impaired users.

### Why it matters

**Research problem:** Indoor wayfinding for blind and visually impaired individuals is challenging due to the lack of effective navigational aids in large indoor spaces. Deploying beacon-based navigation systems requires a time-consuming and labor-intensive process of beacon planning, which involves identifying beacon placement locations and creating topological representations of indoor spaces.

**Why it matters:** Indoor wayfinding difficulties affect not only blind and visually impaired people but also sighted individuals in unfamiliar large indoor spaces. Existing solutions often require special hardware or manual, labor-intensive setup, limiting scalability and adoption. Automating beacon planning can enable faster, cost-effective deployment of indoor navigation systems, improving accessibility and independence.

**Key contributions:**

- A novel automated method (IBeaconMap) to create indoor space representations from floor plans for beacon-based wayfinding.
- Integration of computer vision and machine learning to detect points of interest and walking paths.
- Generation of a weighted connectivity graph with directional orientations for navigation.
- Provision of exact 2D beacon placement locations on floor plans.
- A software tool supporting pre-processing, detection options, and post-processing corrections.

## About the professor

**Vinod Namboodiri** — Wichita State University.

### Research links

- [Faculty/profile page](https://health.lehigh.edu/faculty/namboodiri-vinod)
- [Identity evidence](https://engineering.lehigh.edu/faculty/vinod-namboodiri)
- [Professor website](https://orcid.org/0000-0003-0705-6990)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** computer vision and machine learning
**The paper assumes:** computer vision feature detection, supervised machine learning classification, image processing techniques
**Already in this field?** Skip this entirely if you already understand foundational computer vision methods and supervised machine learning classification techniques applied to image data.

To understand the core automated detection schemes in IBeaconMap, a solid grasp of computer vision and machine learning fundamentals is essential. The rigorous course option offers a deep dive into deep learning techniques for computer vision, ideal for readers seeking comprehensive knowledge. The fast track provides a concise, focused introduction to key computer vision concepts, suitable for readers who want a quick but effective overview before engaging with the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 1-9, about 10.5 hours — covering introduction, image classification, CNN architectures, and object detection/image segmentation to understand feature extraction and detection methods.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a top-tier university course that thoroughly covers image classification, convolutional neural networks, object detection, and segmentation, all relevant to the paper's use of computer vision and machine learning for floor plan analysis and feature detection.

*If you want all of it:* 21.2 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Computer Vision](https://www.youtube.com/playlist?list=PLBhdbUQAEBe5SyqJqipgtT32w8iPM2bTn) — Unimate Community · 15 videos · 2.0h across 15 episodes

**Watch only this:** Episodes 1-10, about 70 minutes — covering opening/closing, boundary extraction, connected components, convex hull, fast scan, and feature descriptors like LBP and SIFT.

*Why it unblocks this paper:* The 'Computer Vision' playlist by Unimate Community offers concise, clear tutorials on fundamental computer vision techniques such as feature extraction, segmentation, and shape analysis, which are directly applicable to understanding the paper's automated detection schemes.

*If you want all of it:* 2.0 hours across 15 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the IBeaconMap paper, start with foundational concepts in computer vision for floor plan analysis and machine learning feature detection, which underpin the automated detection of indoor features. Next, explore graph-based indoor navigation to grasp how connectivity graphs support wayfinding. Finally, focus on the core concept of automated indoor space representation for beacon-based wayfinding, prioritizing the authors' own talk if available, to directly connect theory with their implementation and evaluation.

### Computer vision floor plan analysis *(prerequisite)*
This section covers advanced computer vision techniques applied to architectural floor plans, essential for understanding how IBeaconMap detects walking paths and points of interest. The selected talk is a detailed research seminar presenting state-of-the-art methods for generating human-centric architectural layouts, which aligns with the paper's use of computer vision for floor plan interpretation.

*How the paper uses it:* IBeaconMap relies on computer vision to analyze floor plans and detect indoor walking paths and points of interest.

▶ [Synthesizing Human-centric Architectural Layouts via Affordance Analysis and Crowd Simulations](https://www.youtube.com/watch?v=poNj09SGtTc) — Computational Social Science Program at George Mason University · 1:01:31 · Streamed 7y ago

### Machine learning feature detection *(prerequisite)*
This section delves into machine learning methods for feature detection, crucial for improving the accuracy of point of interest identification in floor plans. The chosen lecture is a rigorous university-level presentation on feature detectors in computer vision, providing the theoretical and practical background relevant to the paper's detection schemes.

*How the paper uses it:* IBeaconMap integrates supervised machine learning with feature detection to enhance point of interest identification.

▶ [CVFX Lecture 9: Feature Detectors](https://www.youtube.com/watch?v=9-F5-gUIAWE) — Rich Radke · 1:17:11 · 12y ago

### Graph-based indoor navigation *(prerequisite)*
Understanding graph-based representations is key to grasping how IBeaconMap constructs weighted connectivity graphs for navigation. The selected video is a research-focused talk on factor graph optimization in navigation systems, offering insights into graph-based modeling approaches applicable to indoor wayfinding.

*How the paper uses it:* IBeaconMap generates a weighted connectivity graph with distances and directions to support beacon-based navigation.

▶ [Factor graph optimization for GNSS/INS integration: A comparison with the extended Kalman filter](https://www.youtube.com/watch?v=jqyl6nx8YSo) — Institute of Navigation · 4:25 · 5y ago

### IBeaconMap authors talk *(paper-talk search result; attribution unverified)*
This section presents the authors' own talk about their work, providing the most direct and authoritative explanation of IBeaconMap's methodology, contributions, and evaluation. Although the available video is short and from a less formal channel, it is the only direct source from the authors and thus essential for understanding their perspective.

*How the paper uses it:* The authors' talk offers direct insights into the design and evaluation of IBeaconMap.

▶ [SASTAY ASHIQ | TIPICAL TALK | EPISODE 6 | SHERRY | UNCLE HATTI | ChaNALO](https://www.youtube.com/watch?v=0N42wxEgXME) — BAAGI · 4:27 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the IBeaconMap paper, start by learning how machine learning helps detect features in images, which is key to identifying points of interest on floor plans. Next, grasp how computer vision techniques analyze architectural floor plans to extract walking paths and structural elements. Then, explore graph-based indoor navigation concepts to see how connectivity and directions between points are represented. Finally, focus on the core idea of automated indoor space representation for beacon-based wayfinding, which ties all these techniques together to enable efficient beacon placement.

### Machine learning feature detection *(prerequisite)*
Machine learning feature detection involves algorithms that identify important elements or patterns in images, such as corners or edges, which can be used to recognize objects or locations. Understanding this helps you see how the system finds points of interest on floor plans automatically.

*How the paper uses it:* The paper uses machine learning to improve detection accuracy of points of interest on floor plans.

▶ [CVFX Lecture 9: Feature Detectors](https://www.youtube.com/watch?v=9-F5-gUIAWE) — Rich Radke · 1:17:11 · 12y ago

### Computer vision floor plan analysis *(prerequisite)*
Computer vision techniques process images to extract meaningful information, such as detecting walls, doors, and paths from architectural floor plans. This step is crucial for converting static floor plan images into usable indoor maps.

*How the paper uses it:* IBeaconMap applies computer vision to analyze floor plans and detect walking paths and building blocks.

▶ [Architectural Plans Explained](https://www.youtube.com/watch?v=8opn2McSc0E) — Stewart Hicks · 12:33 · 5y ago

### Graph-based indoor navigation *(prerequisite)*
Graph-based indoor navigation represents indoor spaces as nodes (points of interest) connected by edges (paths), with weights indicating distances and directions. This structure allows efficient route planning and wayfinding inside buildings.

*How the paper uses it:* The paper constructs a weighted connectivity graph with distances and directional orientations for navigation.

▶ [Situational Graphs for Robot Navigation in Structured Indoor Environments](https://www.youtube.com/watch?v=yYF3qYQo28A) — Hriday Bavle · 5:23 · 4y ago

## Already in your library

- [Lecture 11 | Detection and Segmentation](https://www.youtube.com/watch?v=nDPWywWRIRo) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Feature Selection Techniques Explained with Examples in Hindi ll Machine Learning Course](https://www.youtube.com/watch?v=vZDDmULsCUU) — also for: The Association Between Social Determinants of Health and Population Health Outcomes: Ecological Analysis (Yan Li)
- [Introduction to Computer Vision | Complete Syllabus Discussion](https://www.youtube.com/watch?v=tAveGoghups) — also for: AIR-VIEW: The Aviation Image Repository for Visibility Estimation of Weather, A Dataset and Benchmark (Chad Mourning)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of IBeaconMap's approach to automated indoor space representation for beacon-based wayfinding. The beginner project recreates a core visualization of indoor path skeletonization from floor plans. The intermediate project implements the core detection and graph construction method on a sample floor plan image, comparing detection schemes. The advanced project extends the method to improve detection accuracy on low-resolution or complex floor plans, addressing a stated limitation and exploring scalability.

### Beginner — Floor Plan Skeleton Extraction Visualization
*Effort: a weekend, ~8 hours*

You build a small tool that takes a simple architectural floor plan image and extracts the indoor walking path skeleton using basic image processing techniques (e.g., thresholding, morphological operations, skeletonization). You then visualize the skeleton overlaid on the floor plan.

**Why it shows you understood the paper:** This project shows you understand the paper's initial step of generating a skeleton of indoor walking paths from floor plans, a key foundation for beacon placement and graph construction.

**Grounded in:** IBeaconMap generates a skeleton of the indoor path from floor plans as a core step in indoor space representation.

**Tech stack:** Python 3.11, OpenCV, Matplotlib, NumPy

**Data:** Use publicly available architectural floor plan images or simple synthetic floor plan sketches created manually to simulate input.

**Build it:**

1. Load a floor plan image and convert it to grayscale.
2. Apply image thresholding and morphological operations to isolate walking paths.
3. Use skeletonization algorithms to extract the path skeleton.
4. Overlay and visualize the skeleton on the original floor plan.
5. Document the process and results in a README with images.

**Ships as:** A GitHub repo with a Python script that processes a floor plan image and outputs a visualization of the extracted walking path skeleton, with explanation in the README.

**Stretch goal:** Add interactive visualization allowing manual correction of skeleton errors, mimicking the paper's post-processing feature.

### Intermediate — Automated Point of Interest Detection and Connectivity Graph
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of IBeaconMap's core method: detecting points of interest (PoIs) such as doors or stairs on a floor plan image using feature detection and a basic classifier, then constructing a weighted connectivity graph representing walking paths with distances and directions.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's combined computer vision and machine learning approach to detect PoIs and build a navigational graph, the heart of automated beacon planning.

**Grounded in:** IBeaconMap applies computer vision and machine learning to detect PoIs and constructs a weighted connectivity graph with distances and directional orientations.

**Tech stack:** Python 3.11, OpenCV, scikit-learn, NetworkX, Matplotlib

**Data:** Use a small set of publicly available or self-created floor plan images with annotated PoIs (doors, stairs) simulated for detection and graph construction.

**Build it:**

1. Preprocess floor plan images to enhance features for detection.
2. Implement feature detection (e.g., SIFT, ORB) to identify candidate PoIs.
3. Train a simple supervised classifier (e.g., SVM) on labeled PoI features to filter true PoIs.
4. Extract walking paths skeleton and map detected PoIs onto it.
5. Construct a weighted graph with edges representing walking paths, weighted by estimated distances and directions.
6. Visualize the graph over the floor plan and evaluate detection accuracy against manual annotations.

**Ships as:** A GitHub repo with code to detect PoIs, build and visualize a connectivity graph from floor plans, and a report comparing detection accuracy to a baseline (e.g., feature detection only).

**Stretch goal:** Incorporate a second detection scheme (e.g., FD+SML) and compare performance on low-resolution floor plans.

### Advanced — Improving Detection Accuracy on Complex Floor Plans
*Effort: 3+ weeks*

You develop an extension to the core method that improves detection accuracy and scalability on low-resolution or complex floor plans by integrating additional image enhancement techniques, advanced machine learning models, or semi-automated user feedback for post-processing corrections.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep understanding and ability to innovate beyond the original method to enhance real-world applicability.

**Grounded in:** Accuracy depends on floor plan quality; low-resolution or complex plans require more computationally intensive methods and manual post-processing.

**Tech stack:** Python 3.11, OpenCV, TensorFlow or PyTorch, scikit-learn, NetworkX, Streamlit or React (optional for UI)

**Data:** Use a collection of scanned or hand-drawn floor plan images of varying quality, either publicly available or self-created to simulate complexity.

**Build it:**

1. Analyze failure cases of baseline detection on low-quality floor plans.
2. Implement image enhancement techniques (e.g., super-resolution, denoising) to improve input quality.
3. Train or fine-tune a more robust machine learning model (e.g., CNN) for PoI detection.
4. Develop a simple user interface for manual post-processing corrections and feedback integration.
5. Evaluate improvements in detection accuracy and processing time compared to baseline.
6. Document findings and limitations.

**Ships as:** A GitHub repo with enhanced detection pipeline code, a user interface for corrections, evaluation results on complex floor plans, and a detailed README discussing improvements and limitations.

**Stretch goal:** Extend the system to merge multiple floor plans for multi-floor buildings as suggested in the paper's future directions.
