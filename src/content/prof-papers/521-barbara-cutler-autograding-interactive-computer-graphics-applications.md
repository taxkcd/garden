---
title: "521 · Autograding Interactive Computer Graphics Applications — Barbara Cutler"
date: 2026-09-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-barbara-cutler"
source_hash: "f20ae4633bd52fd1807483191f6824ed771b223ec0183e880750f71f6fb0e1e7"
sequence: 521
generator: "outreach-garden: managed"
---

# 521 · Autograding Interactive Computer Graphics Applications

## At a glance

- **Professor:** Barbara Cutler
- **Institution:** Rensselaer Polytechnic Institute
- **Paper:** [Autograding Interactive Computer Graphics Applications](https://github.com/Submitty/publications/raw/main/2020_SIGCSE_Grading_Computer_Graphics/2020_SIGCSE_Grading_Computer_Graphics.pdf)
- **Authors:** Evan Maicus, Matthew Peveler, Andrew Aikens, Barbara Cutler
- **Year:** 2020

## Paper overview

This paper presents a system integrated into the open-source Submitty platform that automates the testing and grading of computer graphics assignments. It allows scripted keyboard and mouse interactions with student programs, captures visual outputs like screenshots and videos, and evaluates correctness using image difference metrics and custom validation methods. Deployed in an advanced computer graphics course at RPI, the system improved grading efficiency and student learning by providing timely, visual feedback.

### Why it matters

**Research problem:** Manual grading of computer graphics assignments is tedious, time-consuming, and inconsistent due to the graphical and interactive nature of the assignments, hardware dependencies, and the need for manual interaction during grading.

**Why it matters:** Growing enrollments in advanced computer graphics courses increase grading workload, making manual grading inefficient and prone to errors. Automated grading systems for non-visual, text-based assignments exist, but solutions for interactive graphical assignments are lacking.

**Key contributions:**

- Development of an automated grading system for interactive computer graphics assignments integrated into Submitty.
- Support for scripted keyboard and mouse interactions with student programs to automate testing.
- Automated capture and comparison of visual outputs including screenshots and videos.
- Deployment and evaluation in a real advanced computer graphics course with diverse assignments.
- Provision of partial credit grading via customizable image difference tolerances and custom validation methods.

## About the professor

**Barbara Cutler** — Associate Professor, Computer Science, Rensselaer Polytechnic Institute.

Research interests: computer vision, human-computer interaction, machine learning

### Research links

- [Faculty/profile page](http://www.cs.rpi.edu/~cutler)
- [Resolved homepage](http://www.cs.rpi.edu/~cutler/)
- [Google Scholar](https://scholar.google.com/citations?user=8C7AbrYAAAAJ)
- [ResearchGate](https://www.researchgate.net/profile/Christopher-Cutler-5)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Image Processing and Computer Vision
**The paper assumes:** digital image representation, image comparison metrics, computer vision fundamentals, image processing algorithms
**Already in this field?** Skip this entirely if you already have a solid understanding of digital image processing and basic computer vision techniques, including image similarity metrics.

This background focuses on image processing and computer vision fundamentals essential for understanding automated visual output comparison techniques used in the paper, such as image difference metrics and validation methods. The rigorous course provides a deep, structured university-level foundation, while the fast track offers a concise, intuitive introduction suitable for quickly grasping core concepts without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computer Vision and Image Processing - Fundamentals and Applications](https://www.youtube.com/playlist?list=PLwdnzlV3ogoVsma5GmBSsgJM6gHv1QoAo) — NPTEL IIT Guwahati · 44 videos · 37.5h across the first 42 episodes

**Watch only this:** Episodes 1-3 and 11-17, about 7.5 hours — covering introduction, digital image processing basics, image transforms, enhancement, and filtering to grasp image representation and comparison methods relevant to grading.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course comprehensively covers digital image processing and computer vision fundamentals, including image formation, transforms, filtering, segmentation, and feature detection, directly supporting understanding of image comparison and validation techniques used in the paper.

*If you want all of it:* 37.5 hours across the first 42 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Image Processing](https://www.youtube.com/playlist?list=PLFDJ4n_YVwcxiDYbvFWtex32nngKE-uhx) — Awais Lodhi · 40 videos · 11.1h across 40 episodes

**Watch only this:** Episodes 1-10, about 2.7 hours — covering image processing introduction, pixel concepts, sampling, quantization, neighborhoods, resizing, and basic enhancement techniques for a quick but solid foundation.

*Why it unblocks this paper:* This concise series by Awais Lodhi offers clear, visual explanations of image processing fundamentals such as pixel representation, sampling, quantization, neighborhood operations, and histogram equalization, providing an accessible overview of key concepts needed to understand image difference metrics and visual output evaluation.

*If you want all of it:* 11.1 hours across 40 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on autograding interactive computer graphics applications, start by grounding yourself in the key technical prerequisites: image difference metrics for comparing graphical outputs, scripted input automation for GUI testing, and sandboxing/security for safely running untrusted graphical student programs. Then explore the role of visual feedback in computer graphics education to appreciate the pedagogical impact. Finally, focus on the core concept of the paper itself by watching the authors' own talks or advanced university lectures on interactive computer graphics and automated grading systems.

### Image difference metrics in computer vision *(prerequisite)*
Understanding image difference metrics is fundamental to grasping how the paper evaluates the correctness of graphical outputs by comparing student submissions to reference images. This section covers rigorous academic lectures on classification metrics and image similarity, providing a solid foundation in the quantitative evaluation of images.

*How the paper uses it:* The paper uses image difference metrics like MSE to automatically evaluate the visual correctness of student graphics outputs.

▶ [Computer Vision | Lecture 7 | Image Classification Metrics and Overfitting](https://www.youtube.com/watch?v=M337c_pAJEA) — Byte Size ML · 1:21:53 · 3 years ago

### Scripted input automation for GUI testing *(prerequisite)*
This concept explains how automated systems simulate user interactions such as keyboard and mouse inputs to test graphical applications. Understanding scripting and automation techniques is crucial to appreciate how the paper's system drives student programs for grading.

*How the paper uses it:* The system scripts keyboard and mouse inputs to student programs to automate testing of interactive graphics assignments.

▶ [Scripting Basics: How to Automate Repetitive Tasks](https://www.youtube.com/watch?v=Lmcx1vBynCM) — IT Boost by Formip · 8:40 · 1 year ago

### Sandboxing and security for graphical applications *(prerequisite)*
Sandboxing ensures safe execution of untrusted code, which is essential when running student submissions that may contain bugs or malicious code. This section includes an in-depth university-level talk on Linux sandboxing techniques relevant to the paper's security considerations.

*How the paper uses it:* The paper discusses security sandboxing challenges and solutions for safely running graphical student programs during autograding.

▶ [Sandboxing a Linux Application - Martin Ertsås - NDC Security 2022](https://www.youtube.com/watch?v=12rzwnsi1zg) — NDC Conferences · 1:01:40 · 4 years ago

### Visual feedback in computer graphics education *(prerequisite)*
Visual feedback is a key pedagogical tool that helps students debug and learn from their graphical assignments. This section contains academic lectures on computer graphics education and the importance of visual information in learning.

*How the paper uses it:* The paper highlights improved student learning through timely visual feedback such as side-by-side output comparisons.

▶ [Introduction to Computer Graphics](https://www.youtube.com/watch?v=01YSK5gIEYQ) — UC Davis Academics · 49:45 · 11 years ago

### Paper authors talk *(the paper's own talk)*
The core concept section features talks by the paper's authors or advanced university lectures on interactive computer graphics, providing direct insight into the system, methodology, and findings of the paper.

*How the paper uses it:* Direct insight from the authors on their system and findings is invaluable for understanding the paper's contributions and limitations.

▶ [Interactive Graphics 03 - Rendering Algorithms](https://www.youtube.com/watch?v=owx-R-Ary9I) — Cem Yuksel · 53:01 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the basics of computer graphics and the difference between interactive and non-interactive graphics to build foundational intuition. Next, learn about image difference metrics which are crucial for comparing graphical outputs in the paper's autograding system. Then, explore scripted input automation techniques that enable simulating user interactions for testing. After that, grasp sandboxing and security concepts to appreciate safe execution of untrusted graphical programs. Finally, focus on the core concept of automated grading systems for graphical assignments, culminating in how the paper's system integrates these ideas to improve grading efficiency and student learning.

### Basics of Interactive Computer Graphics *(the paper's own talk)*
Learn what computer graphics are, focusing on the distinction between interactive and non-interactive graphics. This foundation helps you understand the nature of the assignments the paper targets and why interaction complicates grading.

*How the paper uses it:* The paper addresses grading challenges specific to interactive computer graphics assignments.

▶ [Types of Computer Graphics || interactive and non-interactive computer graphics](https://www.youtube.com/watch?v=WuDjm6zGkds) — A Z Computing · 10:23 · 5 years ago

### Image difference metrics in computer vision *(prerequisite)*
Understand how images can be quantitatively compared using metrics like Mean Squared Error (MSE). This is essential for evaluating the correctness of graphical outputs by comparing student submissions to reference images.

*How the paper uses it:* The paper uses image difference metrics to automatically assess visual correctness of student graphics outputs.

▶ [Computer Vision | Lecture 7 | Image Classification Metrics and Overfitting](https://www.youtube.com/watch?v=M337c_pAJEA) — Byte Size ML · 1:21:53 · 3 years ago

### Scripted input automation for GUI testing *(prerequisite)*
Discover how keyboard and mouse actions can be scripted to simulate user interactions with graphical programs. This technique enables automated testing of interactive applications without manual intervention.

*How the paper uses it:* The paper’s system scripts keyboard and mouse inputs to automate testing of student graphics programs.

▶ [How To Automate Mouse Clicks And Keystrokes | Keyboard and Mouse Recorder Loop](https://www.youtube.com/watch?v=guX4Jz3p8qQ) — LearnLite Express · 2 years ago

### Sandboxing and security for graphical applications *(prerequisite)*
Learn about sandboxing, which isolates programs to safely run untrusted code without risking the host system. This is important for securely executing student submissions during automated grading.

*How the paper uses it:* The paper discusses sandboxing to securely run student graphical programs during autograding.

▶ [Sandboxing a Linux Application - Martin Ertsås - NDC Security 2022](https://www.youtube.com/watch?v=12rzwnsi1zg) — NDC Conferences · 1:01:40 · 4 years ago

### Automated grading systems for graphical assignments
Explore how automated grading systems can be designed to handle interactive graphical assignments by combining scripted inputs, visual output capture, and image comparison. This integrates all prior concepts into a practical system.

*How the paper uses it:* This is the core concept of the paper: an automated grading system for interactive computer graphics assignments integrated into Submitty.

▶ [Gradescope: An Automated Tool to Help Grading Student Programming Projects](https://www.youtube.com/watch?v=6LS_Z7Vn-qc) — URI Ed Tech · 39:40 · 1 year ago

## Already in your library

- [An Exploration of Automated Grading of Complex Assignments](https://www.youtube.com/watch?v=n4PEPOvLZUo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Image Processing with OpenCV and Python](https://www.youtube.com/watch?v=kSqxn6zGE0c) — also for: Let RGB Be the Language of Vision (Cihang Xie)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper "Autograding Interactive Computer Graphics Applications." The beginner project reproduces a core mechanism of scripted input and screenshot capture for autograding. The intermediate project implements the paper's core automated grading method with image difference metrics on a simplified graphical assignment. The advanced project extends the system by addressing a stated limitation, adding a more sophisticated image comparison metric to improve partial credit grading accuracy.

### Beginner — Scripted Input and Screenshot Capture for Graphics Programs
*Effort: a weekend, ~8 hours*

You build a small tool that launches a simple OpenGL or SDL graphical program, sends scripted keyboard and mouse inputs to it, and captures screenshots of its output at specified times. This reproduces the core mechanism of automated interaction and visual output capture described in the paper.

**Why it shows you understood the paper:** This project shows you understand how the paper automates testing by scripting user inputs and capturing visual outputs, a fundamental step before grading can be automated.

**Grounded in:** The instructor prepares a sequence of actions including keyboard and mouse inputs, and the system captures image and video output from graphical programming assignments.

**Tech stack:** C++, OpenGL or SDL2, Python 3.11, PyAutoGUI or equivalent for scripted input, Pillow for image capture

**Data:** You use a simple graphical program you write yourself (e.g., a window that changes color or draws shapes in response to input) to simulate a student assignment.

**Build it:**

1. Write or obtain a simple graphical program that responds to keyboard and mouse input.
2. Implement a Python script that launches the program and sends scripted keyboard and mouse events.
3. Capture screenshots of the program window at specified times during the scripted interaction.
4. Save the screenshots to disk for later inspection.
5. Document how the scripted inputs and screenshot captures correspond to the paper's autograding input/output mechanism.

**Ships as:** A GitHub repo with the graphical program, the scripted input and screenshot capture code, and a README explaining how this reproduces the paper's input/output automation.

**Stretch goal:** Add video capture (e.g., GIF) of the graphical program during the scripted interaction.

### Intermediate — Automated Grading with Image Difference Metrics on a Simple Graphics Assignment
*Effort: 1-3 weekends*

You implement an automated grading system that runs a simple graphical student program, applies scripted inputs, captures screenshots, and compares them against instructor reference images using mean squared error (MSE) as an image difference metric. You report correctness scores and partial credit based on configurable thresholds.

**Why it shows you understood the paper:** This project reimplements the paper's core automated grading approach, demonstrating comprehension of scripted input automation, visual output capture, and image difference-based correctness evaluation.

**Grounded in:** The system evaluates correctness using image difference metrics (e.g., MSE) or instructor-defined validators, providing partial credit grading via customizable image difference tolerances.

**Tech stack:** Python 3.11, OpenCV for image processing, PyAutoGUI for scripted input, NumPy for MSE calculation

**Data:** You create or simulate a small set of student graphical programs (e.g., simple OpenGL or SDL programs) that produce output images to be graded against instructor reference screenshots.

**Build it:**

1. Develop or collect a small set of simple graphical student programs with known expected outputs.
2. Write scripts to launch each program, apply scripted keyboard and mouse inputs, and capture screenshots.
3. Implement image difference calculation using MSE between student screenshots and instructor reference images.
4. Define thresholds for correctness and partial credit based on MSE values.
5. Generate a report of grading results for each student program.
6. Document the grading pipeline and how it parallels the paper's method.

**Ships as:** A GitHub repo with the grading scripts, sample student programs, reference images, and a README describing the grading approach and results.

**Stretch goal:** Add a simple GUI to visualize side-by-side comparisons of student and reference images with difference heatmaps.

### Advanced — Enhanced Autograding with Perceptual Image Similarity Metrics
*Effort: a few weeks*

You extend the intermediate automated grading system by integrating a perceptual similarity metric (e.g., Structural Similarity Index Measure - SSIM) or a learned perceptual metric to improve partial credit grading accuracy. You compare this enhanced metric against the baseline MSE metric on the same set of graphical assignments and analyze differences in grading outcomes.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, demonstrating deep understanding of the grading challenges and the potential of advanced image comparison methods to improve grading fidelity.

**Grounded in:** A simple MSE comparison worked reasonably well but more sophisticated image comparison schemes could better evaluate student work for partial credit.

**Tech stack:** Python 3.11, OpenCV, scikit-image for SSIM, PyAutoGUI, NumPy, Matplotlib for visualization

**Data:** Use the same simulated student graphical programs and reference images from the intermediate project.

**Build it:**

1. Integrate SSIM or another perceptual similarity metric into the grading pipeline.
2. Run grading on the simulated student programs using both MSE and the new metric.
3. Compare grading results, focusing on partial credit cases and false negatives.
4. Visualize difference maps and provide side-by-side comparisons to illustrate metric differences.
5. Write a report analyzing the benefits and limitations of the perceptual metric versus MSE.
6. Document how this extension relates to the paper's stated limitations and future directions.

**Ships as:** A GitHub repo with the enhanced grading system, comparison analysis, visualizations, and a detailed README discussing improvements over the baseline and alignment with the paper's future work.

**Stretch goal:** Experiment with machine learning-based perceptual similarity models (e.g., LPIPS) if time permits.

_The paper's authors did not release code or datasets, so all projects require you to simulate or create simple graphical programs and reference images to reproduce the paper's methods._
