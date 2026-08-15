---
title: "412 · Context-Aware Image Denoising with Auto-Threshold Canny Edge Detection to Suppress Adversarial Perturbation — Wu-chi Feng"
date: 2026-08-14
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-wu-chi-feng"
source_hash: "79390215592e2a65fa553f0469df642e8c20b10715a8267477c21515f8fc1a03"
sequence: 412
generator: "outreach-garden: managed"
---

# 412 · Context-Aware Image Denoising with Auto-Threshold Canny Edge Detection to Suppress Adversarial Perturbation

## At a glance

- **Professor:** Wu-chi Feng
- **Institution:** Portland State University
- **Paper:** [Context-Aware Image Denoising with Auto-Threshold Canny Edge Detection to Suppress Adversarial Perturbation](https://arxiv.org/pdf/2101.05833)
- **Authors:** Li-Yun Wang, Yeganeh Jalalpour, Wu-chi Feng
- **Year:** 2021

## Paper overview

This paper introduces a new image denoising algorithm that uses adaptive smoothing guided by auto-threshold Canny edge detection combined with color reduction to remove adversarial noise from images. This helps improve the accuracy and robustness of deep convolutional neural networks (DCNNs) against adversarial attacks.

### Why it matters

**Research problem:** Adversarial attacks add subtle perturbations to images that fool DCNN models into misclassifying them, reducing model reliability in sensitive applications.

**Why it matters:** DCNNs are widely used in critical fields like medical diagnosis and self-driving cars, where misclassification due to adversarial attacks can have serious consequences.

**Key contributions:**

- Use of parameter-free auto-threshold Canny edge detection to generate precise edge maps without manual threshold tuning.
- Extension of adaptive Gaussian smoothing with multiple kernel sizes controlled by a hyperparameter α to better preserve edges while smoothing.
- Integration of color reduction techniques (GK-means and fast GK-means) to further mitigate adversarial perturbations.
- Empirical evaluation on ImageNet-derived dataset showing improved classification accuracy against adversarial attacks compared to existing preprocessing methods.

## About the professor

**Wu-chi Feng** — Chair and professor, Computer Science, Portland State University.

Research interests: Multimedia systems, Video streaming protocols, Video compression systems, Scalable and adaptable video distribution infrastructures

### Research links

- [Faculty/profile page](http://web.cecs.pdx.edu/~wuchi)
- [Resolved homepage](http://cs.pdx.edu/~wuchi/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** image processing and edge detection
**The paper assumes:** fundamentals of digital image processing, edge detection algorithms, and Gaussian smoothing
**Already in this field?** Skip this entirely if you already understand digital image processing basics, especially edge detection methods like Canny and smoothing filters.

This background focuses on image processing fundamentals, especially edge detection techniques like the Canny edge detector, which are central to understanding the paper's adaptive smoothing and denoising approach. The rigorous course provides a deep, structured university-level foundation in machine vision and edge detection, while the fast track offers a concise, visual introduction to edge detection concepts suitable for quick comprehension.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 6.801 Machine Vision, Fall 2020](https://www.youtube.com/playlist?list=PLUl4u3cNGP63pfpS1gV5P9tDxxL_e4W8O) — MIT OpenCourseWare · 23 videos · 32.9h across 23 episodes

**Watch only this:** Lectures 10 and 11, about 2.8 hours — covering iterative solutions for shape from shading and detailed edge detection including Canny edge detection.

*Why it unblocks this paper:* MIT 6.801 Machine Vision covers edge detection in a rigorous academic context, including a dedicated lecture on edge detection and Canny edge detection (Lecture 11). This aligns well with the paper's reliance on auto-threshold Canny edge detection and adaptive smoothing.

*If you want all of it:* 32.9 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Edge detector](https://www.youtube.com/playlist?list=PLWV_-QOCT8gBGSzIJUzI3vxrNPKeofo_F) — Didier KASPAR · 10 videos · 2.3h across 10 episodes

**Watch only this:** Episodes 3 and 4, about 28 minutes — specifically 'Detecting edges in a image using the Canny Edge Detection' and 'Canny Edge Detector' for focused understanding of the algorithm.

*Why it unblocks this paper:* Didier KASPAR's 'Edge detector' playlist provides clear, concise tutorials on Canny edge detection and related edge detection concepts with practical Python/OpenCV examples, making it an excellent quick introduction to the core method used in the paper.

*If you want all of it:* 2.3 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on context-aware image denoising with auto-threshold Canny edge detection for adversarial perturbation suppression, start by grounding yourself in the foundational concepts of adversarial attacks on deep convolutional neural networks, the auto-threshold Canny edge detection method, adaptive Gaussian smoothing, and color reduction via k-means clustering. These prerequisites provide the necessary background on the problem domain and the key techniques used. Finally, focus on the core concept of the paper's novel denoising algorithm, which integrates these techniques to enhance robustness against adversarial attacks.

### Adversarial attacks on deep convolutional neural networks *(prerequisite)*
Understanding adversarial attacks is essential as they motivate the need for robust image preprocessing defenses. This section covers the nature of adversarial perturbations that fool DCNNs and the challenges they pose to model reliability in critical applications.

*How the paper uses it:* The paper addresses adversarial attacks that degrade DCNN classification accuracy by proposing a preprocessing defense.

▶ [Deep Learning Day: Classifiers and Adversarial Attacks by prof. Andrea Cavallaro](https://www.youtube.com/watch?v=WO3zRP9c4p0) — AI Student Society · 5 years ago

### Auto-threshold Canny edge detection *(prerequisite)*
Auto-threshold Canny edge detection is a parameter-free method to generate precise edge maps without manual threshold tuning. Understanding this technique is crucial because it guides the adaptive smoothing step in the proposed denoising algorithm.

*How the paper uses it:* The paper uses auto-threshold Canny edge detection to extract accurate edge features for adaptive smoothing.

▶ [Canny Edge Detector | Edge Detection](https://www.youtube.com/watch?v=hUC1uoigH6s) — First Principles of Computer Vision · 6:02 · 5 years ago

### Adaptive Gaussian smoothing *(prerequisite)*
Adaptive Gaussian smoothing reduces noise while preserving important edge features by using multiple kernel sizes. This technique is central to the paper's approach to suppress adversarial perturbations without blurring critical image details.

*How the paper uses it:* The paper extends adaptive Gaussian smoothing with multiple kernel sizes controlled by a hyperparameter to better preserve edges.

▶ [Smoothing Spatial Filters in digital image processing](https://www.youtube.com/watch?v=x6zoQ-a7A9U) — College Friendly · 5 years ago

### Color reduction with k-means clustering *(prerequisite)*
Color reduction via k-means clustering reconstructs images using fewer representative colors, which helps eliminate subtle adversarial noise. Understanding this method is important to grasp how the paper further mitigates perturbations after smoothing.

*How the paper uses it:* The paper integrates color reduction techniques to reconstruct images with fewer colors, enhancing adversarial noise suppression.

▶ [CS 320 May 1 (Part 1) - K-Means for Color Segmentation](https://www.youtube.com/watch?v=fOd8Rl9BC2k) — Tyler Caraza-Harter · 6 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the fundamental problem of adversarial attacks on deep neural networks to grasp why robust preprocessing is needed. Then learn the key image processing techniques used in the paper: auto-threshold Canny edge detection for precise edge maps, adaptive Gaussian smoothing to reduce noise while preserving edges, and color reduction with k-means clustering to reconstruct images with fewer colors. Finally, explore the paper's novel context-aware image denoising algorithm that integrates these components to defend against adversarial perturbations.

### Adversarial attacks on deep convolutional neural networks *(prerequisite)*
Adversarial attacks subtly alter images to fool deep learning models into misclassifying them, threatening the reliability of AI systems. Understanding this problem motivates the need for robust image preprocessing defenses.

*How the paper uses it:* The paper addresses adversarial attacks that degrade DCNN classification accuracy by proposing a preprocessing defense.

▶ [Adversarial Attacks On Deep Neural Networks](https://www.youtube.com/watch?v=oGOTLa7lDHU) — Sihem Romdhani · 6 years ago

### Auto-threshold Canny edge detection *(prerequisite)*
Canny edge detection identifies edges in images by finding areas of rapid intensity change, using thresholds to filter noise. The auto-threshold variant removes manual tuning by automatically selecting thresholds, producing precise edge maps.

*How the paper uses it:* The paper uses parameter-free auto-threshold Canny edge detection to generate accurate edge maps guiding adaptive smoothing.

▶ [Canny Edge Detector - Computerphile](https://www.youtube.com/watch?v=sRFM5IEqR2w) — Computerphile · 10 years ago

### Adaptive Gaussian smoothing *(prerequisite)*
Gaussian smoothing blurs images to reduce noise, but fixed smoothing can blur important edges. Adaptive Gaussian smoothing uses multiple kernel sizes to smooth differently across the image, preserving edges while removing noise.

*How the paper uses it:* The paper extends adaptive Gaussian smoothing with multiple kernel sizes controlled by a hyperparameter to better preserve edges during denoising.

▶ [Gaussian Filter Explained Simply](https://www.youtube.com/watch?v=BkRFA2OcS0M) — Coursesteach · 6 days ago

### Color reduction with k-means clustering *(prerequisite)*
K-means clustering groups similar colors in an image, allowing reconstruction with fewer representative colors. This reduces subtle color variations caused by adversarial noise, simplifying the image while preserving key features.

*How the paper uses it:* The paper integrates color reduction using k-means to reconstruct images with fewer colors, further suppressing adversarial perturbations.

▶ [K Means Clustering Algorithm | K Means Solved Numerical Example Euclidean Distance by Mahesh Huddar](https://www.youtube.com/watch?v=KzJORp8bgqs) — Mahesh Huddar · 3 years ago

## Already in your library

- [StatQuest: K-means clustering](https://www.youtube.com/watch?v=4b5d3muPQmA) — also for: Using a Lexical and Temporal Analysis of Students’ Self-Explanation to Predict Understanding (Thomas F. Stahovich)
- [Lec-13: K-mean Clustering with Numerical Example | Unsupervised Learning | Machine🖥️ Learning 🙇‍♂️🙇](https://www.youtube.com/watch?v=5FpsGnkbEpM) — also for: Mean Shift, Mode Seeking, and Clustering (Yizong Cheng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core contributions on context-aware image denoising against adversarial attacks. The beginner project focuses on reproducing the auto-threshold Canny edge detection component, the intermediate project implements the full adaptive Gaussian smoothing with color reduction pipeline on a public dataset, and the advanced project extends the method by exploring adaptive hyperparameter selection to address a stated limitation and future direction of the paper.

### Beginner — Auto-Threshold Canny Edge Detection for Image Denoising
*Effort: a weekend, ~8 hours*

You build a Python script that applies auto-threshold Canny edge detection on clean and adversarially perturbed images to generate edge maps without manual threshold tuning. You visualize and compare the edge maps produced by the auto-threshold method versus fixed-threshold Canny edge detection.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's key contribution of using parameter-free auto-threshold Canny edge detection to generate precise edge maps, a foundational step in their denoising pipeline.

**Grounded in:** Use of parameter-free auto-threshold Canny edge detection to generate precise edge maps without manual threshold tuning.

**Tech stack:** Python 3.11, OpenCV, Matplotlib, NumPy

**Data:** Use a small subset of ImageNet validation images or CIFAR-10 images as a substitute for the paper's ImageNet-derived dataset; adversarial perturbations can be simulated with simple DeepFool or FGSM attacks using existing libraries.

**Build it:**

1. Set up a Python environment with OpenCV and NumPy.
2. Implement or use an existing auto-threshold Canny edge detection method that computes thresholds based on image statistics.
3. Apply this method to clean images and adversarially perturbed images generated via a simple attack (e.g., DeepFool or FGSM).
4. Visualize and save edge maps for both auto-threshold and fixed-threshold Canny detectors for comparison.
5. Write a README explaining the method, results, and relation to the paper's contribution.

**Ships as:** A GitHub repo with scripts to generate and visualize auto-threshold Canny edge maps on clean and adversarial images, demonstrating the advantage of parameter-free thresholding.

**Stretch goal:** Add a simple quantitative metric comparing edge map quality or edge preservation between auto-threshold and fixed-threshold methods.

### Intermediate — Adaptive Gaussian Smoothing and Color Reduction for Adversarial Image Denoising
*Effort: 2 weekends, ~20 hours*

You implement the full context-aware denoising pipeline: auto-threshold Canny edge detection, adaptive Gaussian smoothing with multiple kernel sizes controlled by hyperparameter α, and color reduction using k-means clustering. You evaluate the denoising effect by measuring classification accuracy on adversarially perturbed images using a pretrained DCNN model.

**Why it shows you understood the paper:** This project shows you can faithfully reimplement the paper's core method and reproduce its key result of improved classification accuracy against adversarial attacks compared to a simple baseline like Gaussian smoothing alone.

**Grounded in:** Extension of adaptive Gaussian smoothing with multiple kernel sizes controlled by a hyperparameter α to better preserve edges while smoothing; Integration of color reduction techniques (GK-means and fast GK-means) to further mitigate adversarial perturbations; Empirical evaluation on ImageNet-derived dataset showing improved classification accuracy against adversarial attacks compared to existing preprocessing methods.

**Tech stack:** Python 3.11, OpenCV, scikit-learn, PyTorch, NumPy, Matplotlib

**Data:** Use a publicly available subset of ImageNet validation images or CIFAR-10 as a substitute; generate adversarial examples with DeepFool attack using existing adversarial attack libraries.

**Build it:**

1. Implement auto-threshold Canny edge detection as in the beginner project.
2. Implement adaptive Gaussian smoothing applying multiple Gaussian kernels with sizes 3,5,7,9 and combine results weighted by hyperparameter α.
3. Implement color reduction using k-means clustering (scikit-learn) to reduce image colors to a small set.
4. Generate adversarial examples on the dataset using DeepFool attack.
5. Evaluate classification accuracy of a pretrained DCNN (e.g., ResNet50 or Inception-v3) on original, adversarial, and denoised images.
6. Compare results against a baseline of fixed Gaussian smoothing without adaptivity.
7. Document the pipeline, hyperparameter choices, and accuracy results in the README.

**Ships as:** A GitHub repo with a runnable pipeline that denoises adversarial images and reports classification accuracy improvements, demonstrating the paper's core method and results.

**Stretch goal:** Add experiments varying α and kernel sizes to observe their effect on accuracy, replicating the paper's hyperparameter analysis.

### Advanced — Adaptive Hyperparameter Selection for Context-Aware Image Denoising Against Diverse Adversarial Attacks
*Effort: 3-4 weeks*

You extend the paper's method by developing an adaptive scheme to select hyperparameters α and Gaussian kernel sizes dynamically based on the input image or detected attack type. You evaluate this adaptive approach on multiple adversarial attacks (e.g., DeepFool, IFGSM) and compare robustness and classification accuracy against the fixed-parameter method.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, demonstrating deep comprehension of the method and the challenges in generalizing robustness across attack types. It also shows initiative in advancing the research.

**Grounded in:** Explore adaptive selection of hyperparameters like α and kernel sizes for different attack types; Performance varies depending on the type of adversarial attack; Using K-means with large Gaussian kernels can blur essential features, reducing classification accuracy.

**Tech stack:** Python 3.11, OpenCV, scikit-learn, PyTorch, NumPy, Matplotlib

**Data:** Use publicly available ImageNet validation subset or CIFAR-10; generate adversarial examples using multiple attacks (DeepFool, IFGSM) via standard adversarial libraries.

**Build it:**

1. Reimplement the full denoising pipeline from the intermediate project.
2. Implement multiple adversarial attack methods (DeepFool, IFGSM) to generate diverse perturbed images.
3. Design and implement an adaptive hyperparameter selection mechanism that analyzes image or attack characteristics to choose α and kernel sizes dynamically.
4. Evaluate classification accuracy on adversarial images denoised with adaptive parameters versus fixed parameters.
5. Analyze trade-offs in edge preservation and color reduction to avoid blurring essential features.
6. Document methodology, results, and insights in a detailed README.

**Ships as:** A GitHub repo demonstrating an adaptive denoising pipeline with comparative evaluation across multiple attacks, addressing a stated limitation and future direction of the paper.

**Stretch goal:** Integrate the adaptive denoising pipeline with adversarial training of the DCNN to explore combined defense strategies.
