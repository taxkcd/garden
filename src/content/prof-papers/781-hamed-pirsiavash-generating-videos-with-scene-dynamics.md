---
title: "781 · Generating Videos with Scene Dynamics — Hamed Pirsiavash"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hamed-pirsiavash"
source_hash: "590a58a26d8f99e4fb7abf6a038572ff56ab8eaaa5180c9f7290ddefff75e760"
sequence: 781
generator: "outreach-garden: managed"
---

# 781 · Generating Videos with Scene Dynamics

## At a glance

- **Professor:** Hamed Pirsiavash
- **Institution:** Univ. of California - Davis
- **Paper:** [Generating Videos with Scene Dynamics](https://arxiv.org/pdf/1609.02612)
- **Authors:** Carl Vondrick, Hamed Pirsiavash, Antonio Torralba
- **Year:** 2016

## Paper overview

This paper presents a method to learn how scenes change over time by training a generative adversarial network (GAN) to create short, realistic videos from random input. The model separates moving objects (foreground) from the stationary background to better capture motion. It can generate videos from scratch and predict possible future frames from a single image. The learned model also helps improve action recognition in videos without needing labeled data.

### Why it matters

**Research problem:** Learning models of scene dynamics and object motion from large amounts of unlabeled video data to enable video generation and recognition tasks.

**Why it matters:** Understanding how scenes transform over time is fundamental for video recognition and generation, but annotating such data is expensive and ambiguous. Leveraging unlabeled video can provide rich temporal information for learning without costly labeling.

**Key contributions:**

- Proposed a generative adversarial network for video generation that disentangles foreground motion from background.
- Demonstrated generation of short realistic videos from random noise and plausible future video frames from a single static image.
- Showed that the learned model improves unsupervised video representation learning, aiding action classification with minimal labeled data.
- Introduced a large-scale unlabeled video dataset and a method for stabilizing camera motion to focus on object dynamics.

## About the professor

**Hamed Pirsiavash** — Professor, Department of Computer Science, Univ. of California - Davis.

Research interests: computer vision and machine learning

### Research links

- [Faculty/profile page](https://web.cs.ucdavis.edu/~hpirsiav)
- [Google Scholar](http://scholar.google.com/citations?user=c9XXy4MAAAAJ)
- [Semantic Scholar](https://www.semanticscholar.org/author/Hamed-Pirsiavash/2367683)
- [LinkedIn](https://www.linkedin.com/in/hpirsiav/)
- [Social profile](https://twitter.com/hpirsiav10)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Generative Adversarial Networks
**The paper assumes:** generative adversarial networks, deep convolutional neural networks, unsupervised representation learning
**Already in this field?** Skip this entirely if you already understand the fundamentals of generative adversarial networks and their training dynamics.

To understand the core method of the paper, which is a two-stream generative adversarial network (GAN) for video generation, it is essential to grasp the fundamentals of GANs. The rigorous course option provides a deep, structured university-level introduction to GANs within the broader context of deep learning, while the fast track offers a concise, visual, and intuition-focused explainer series on GANs. Choose the course for a thorough foundation and the fast track for a quick but solid conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS230: Deep Learning I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rNRRGdS0rBbXOUGA0wjdh1X) — Stanford Online · 9 videos · 13.9h across 9 episodes

**Watch only this:** Lectures 1-4, about 6 hours 10 minutes — covering introduction to deep learning, supervised and self-supervised learning, full deep learning project cycle, and adversarial robustness and generative models (which includes GANs). Stop after Lecture 4 for focused GAN understanding.

*Why it unblocks this paper:* Stanford CS230: Deep Learning I Autumn 2025 covers generative models including GANs in a rigorous, graduate-level deep learning course. It provides foundational knowledge on adversarial training and generative models essential to understanding the paper's two-stream GAN architecture for video generation.

*If you want all of it:* 13.9 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Generative Adversarial Networks](https://www.youtube.com/playlist?list=PLnn6VZp3hqNvbjaKhiC-LYRwtbhRgTNDj) — Connor Shorten · 14 videos · 1.8h across 14 episodes

**Watch only this:** Episodes 1-5, about 35 minutes — covering DC-GAN, SimGAN, AC-GAN, transfer learning in GANs, and self-supervised GANs, which together give a solid intuition and understanding of GAN fundamentals and variants relevant to the paper.

*Why it unblocks this paper:* Connor Shorten's 'Generative Adversarial Networks' playlist is a well-produced, clear, and concise explainer series specifically on GANs. It covers key GAN variants and training techniques in short episodes, providing an accessible yet comprehensive overview suitable for quick background preparation.

*If you want all of it:* 1.8 hours across 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Generating Videos with Scene Dynamics," start by building foundational knowledge on key prerequisite topics such as spatio-temporal convolutional networks, unsupervised video representation learning, and foreground-background video segmentation. These topics provide the necessary background on modeling motion, learning from unlabeled video data, and separating moving objects from static backgrounds, all crucial for the paper's approach. Finally, focus on the core concept of generative adversarial networks for video generation, featuring the authors' own talk to gain direct insights into their novel two-stream GAN architecture and experimental results.

### Spatio temporal convolutional networks *(prerequisite)*
Spatio-temporal convolutional networks are essential for modeling both spatial appearance and temporal motion in video data. Understanding these networks provides insight into how the paper's model captures dynamic scene changes using spatio-temporal convolutions.

*How the paper uses it:* The paper uses spatio-temporal convolutions to separately model foreground motion and background in their two-stream GAN architecture.

▶ [Lecture 7: Convolutional Networks](https://www.youtube.com/watch?v=ANyxBVxmdZ0) — Michigan Online · 1:08:53 · 6y ago

### Unsupervised video representation learning *(prerequisite)*
Unsupervised video representation learning covers methods to learn useful features from unlabeled video data, which is the foundation for the paper's approach to leverage large-scale unlabeled videos for training their generative model and improving action recognition.

*How the paper uses it:* The paper trains their GAN on millions of unlabeled videos to learn representations that improve action recognition with minimal supervision.

▶ [Stanford Seminar - Representation Learning for Autonomous Robots, Anima Anandkumar](https://www.youtube.com/watch?v=caZyFlSSKtI) — Stanford Online · 55:30 · 4y ago

### Foreground background video segmentation *(prerequisite)*
Foreground-background segmentation techniques help separate moving objects from static backgrounds, a critical step for the paper's two-stream model that disentangles foreground motion from background to better capture scene dynamics.

*How the paper uses it:* The model explicitly disentangles foreground motion from background by stabilizing camera motion and modeling these components separately.

▶ [Video Object Segmentation - Laura Leal-Taixe - UPC Barcelona 2018](https://www.youtube.com/watch?v=g7PVm4TuvxM) — Image Processing Group - UPC/BarcelonaTECH · 22:16 · 8y ago

### Generative adversarial networks video *(paper-talk search result; attribution unverified)*
Generative adversarial networks (GANs) are the core method used in the paper to generate realistic videos from noise and static images. Understanding GANs, especially their adversarial training dynamics, is crucial to grasp how the paper's two-stream GAN works.

*How the paper uses it:* The paper proposes a novel two-stream GAN architecture for video generation that disentangles foreground and background dynamics.

▶ [Learning from Unlabeled Video -- Carl Vondrick (05/05/2020)](https://www.youtube.com/watch?v=XDe7Cf99Ng0) — Aayush Bansal · 1:10:34 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insight into their motivations, methodology, and experimental findings for generating videos with scene dynamics. It offers the most precise and authoritative explanation of their two-stream GAN approach and its implications.

*How the paper uses it:* This talk is a presentation of the exact paper, offering detailed explanations of the model and results from the authors themselves.

▶ [Generating Videos with Scene Dynamics](https://www.youtube.com/watch?v=6GtRpLLdtUw) — Erick Lara · 21:16 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper 'Generating Videos with Scene Dynamics,' start by building foundational knowledge in unsupervised video representation learning and foreground-background video segmentation, which are crucial for learning from unlabeled videos and separating moving objects from static backgrounds. Next, learn about spatio-temporal convolutional networks that model motion and appearance in videos. Then, grasp the fundamentals of generative adversarial networks (GANs), the core method used for video generation in the paper. Finally, watch a concise presentation by the paper's authors to see how these concepts come together in their two-stream GAN architecture for video generation.

### Unsupervised video representation learning *(prerequisite)*
Unsupervised video representation learning involves training models to understand video data without labeled examples, capturing meaningful features from raw video sequences. This foundational skill enables learning from vast amounts of unlabeled video, which is essential for the paper's approach.

*How the paper uses it:* The paper leverages unsupervised learning to train models on millions of unlabeled videos to capture scene dynamics.

▶ [Unsupervised Representation Learning](https://www.youtube.com/watch?v=ceD736_Fknc) — Simons Institute for the Theory of Computing · 1:09:16 · 9y ago

### Foreground background video segmentation *(prerequisite)*
Foreground-background segmentation separates moving objects (foreground) from the static parts of a scene (background), which helps models focus on relevant motion. Understanding this concept is key to grasping how the paper's model disentangles motion from static elements.

*How the paper uses it:* The paper explicitly models foreground motion separately from the stationary background to improve video generation.

▶ [quarter DIP: Real time Foreground Background Segmentation Using Codebook Model](https://www.youtube.com/watch?v=5-tRJC3IDKk) — Shih-Shinh Huang · 17:48 · 7y ago

### Spatio temporal convolutional networks *(prerequisite)*
Spatio-temporal convolutional networks extend convolutional neural networks to process both spatial and temporal information, making them well-suited for video data where motion over time is important. This architecture is a core component of the paper's model to capture scene dynamics.

*How the paper uses it:* The paper uses spatio-temporal convolutions to model motion and appearance in video generation.

▶ [Lecture 5.4 - CNNs for Sequential Data](https://www.youtube.com/watch?v=rT77lBfAZm4) — DLVU · 28:07 · 5y ago

### Generative adversarial networks video
Generative adversarial networks (GANs) are a powerful framework where two neural networks compete to generate realistic data, such as images or videos. Understanding GANs is essential to grasp how the paper generates realistic videos from random noise and static images.

*How the paper uses it:* The paper proposes a two-stream GAN architecture to generate videos with disentangled foreground and background.

▶ [\[Classic\] Generative Adversarial Networks (Paper Explained)](https://www.youtube.com/watch?v=eyxmSmjmNS0) — Yannic Kilcher · 37:04 · 6y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
A presentation by the paper's authors offers direct insight into their novel video generation method, explaining the motivation, architecture, and results in their own words. This helps consolidate understanding after learning the foundational concepts.

*How the paper uses it:* This talk presents the paper's approach to generating videos with scene dynamics using a two-stream GAN.

▶ [Generating Videos with Scene Dynamics](https://www.youtube.com/watch?v=6GtRpLLdtUw) — Erick Lara · 21:16 · 8y ago

## Already in your library

- [How do AI video generation models work?](https://www.youtube.com/watch?v=Y5zHHoLrvAE) — also for: COMIC: Agentic Sketch Comedy Generation (Brian Curless)
- [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Generative Adversarial Networks (GANs) - Computerphile](https://www.youtube.com/watch?v=Sw9r8CL98N0) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Friendly Introduction to Temporal Graph Neural Networks (and ...](https://www.youtube.com/watch?v=WEWq93tioC4) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [The basics of spatio-temporal graph neural networks](https://www.youtube.com/watch?v=RRMU8kJH60Q) — also for: A Spatio-Temporal Expert Prefetching Framework for Efficient MoE-based LLM Inference (Ke Wang)
- [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Stanford CS330 I Unsupervised Pre-Training:Contrastive ...](https://www.youtube.com/watch?v=jDzuGEcnRkA) — also for: MediVLM: A Vision Language Model for Radiology Report Generation from Medical Images (Shayok Chakraborty)
- [Lec 12. Representation Learning: Similarity-Based](https://www.youtube.com/watch?v=yUh1fEGGdl4) — also for: Objective-Specific Privileged Bases via Full-Prefix Matryoshka Learning (Itsik Pe'er)
- [MedAI #56: Fundamentals of Multimodal Representation Learning | Paul Pu Liang](https://www.youtube.com/watch?v=ybJXOtJNpNw) — also for: Global and Local Semantic Completion Learning for Vision-Language Pre-training (Liu Liu)
- [Lec-23: Supervised vs Unsupervised learning with real life example](https://www.youtube.com/watch?v=fM8XdC1EweU) — also for: A Neural-Preconditioned Poisson Solver for Mixed Dirichlet and Neumann Boundary Conditions (Julian Panetta)
- [Video Object Segmentation - Xavier Giro - UPC Barcelona 2019](https://www.youtube.com/watch?v=yDsBZXLCObM) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the 2016 paper "Generating Videos with Scene Dynamics" by Vondrick et al. The beginner project focuses on implementing a simple foreground-background video segmentation to grasp the core idea of disentangling motion. The intermediate project involves reimplementing the two-stream GAN architecture on a small public video dataset to generate short videos and evaluate motion plausibility. The advanced project extends the original method by addressing the limitation of stationary camera assumption, incorporating camera motion stabilization or modeling to improve video generation realism.

### Beginner — Foreground-Background Segmentation on Video Clips
*Effort: a weekend, ~8 hours*

You build a simple video processing pipeline that separates moving foreground objects from a static background using frame differencing and basic image processing techniques. This will help you understand how foreground and background can be disentangled in videos, a key concept in the paper.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core contribution of separating foreground motion from background to better model scene dynamics, showing you can implement a fundamental step of the two-stream approach.

**Grounded in:** We introduce a two-stream generative model that explicitly models the foreground separately from the background, which allows us to enforce that the background is stationary.

**Tech stack:** Python 3.11, OpenCV, NumPy, Matplotlib

**Data:** Use a small set of publicly available short video clips from YouTube or any open video dataset (e.g., UCF101 subset) to test foreground-background segmentation.

**Build it:**

1. Collect or download a few short video clips with moving objects and static backgrounds.
2. Implement frame differencing to detect motion areas between consecutive frames.
3. Apply morphological operations to clean up the motion mask and extract foreground regions.
4. Visualize the separated foreground and background frames side-by-side.
5. Write a README explaining the approach and how it relates to the paper's foreground-background disentanglement.

**Ships as:** A GitHub repo with code that processes input videos to output foreground masks and background frames, plus a README connecting the implementation to the paper's foreground-background modeling.

**Stretch goal:** Add a simple background stabilization step to simulate the paper's camera motion stabilization preprocessing.

### Intermediate — Two-Stream GAN for Short Video Generation
*Effort: 2 weekends, ~20 hours*

You reimplement the core two-stream GAN architecture described in the paper to generate short videos from random noise, separately modeling foreground motion and background. You train on a small public video dataset and compare generated videos qualitatively against a simple baseline autoencoder.

**Why it shows you understood the paper:** This project shows you can implement the paper's main generative model, understand its architecture, and reproduce key results such as generating plausible motion patterns and disentangling foreground and background.

**Grounded in:** Proposed a generative adversarial network for video generation that disentangles foreground motion from background. Our experiments suggest that our model has started to learn about dynamics... the motion patterns are generally correct for their respective scene.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Use a small subset of UCF101 or Kinetics dataset clips resized to 64x64 resolution to approximate the paper's low-res video training data.

**Build it:**

1. Implement the two-stream GAN architecture with separate foreground and background generators using spatio-temporal convolutions.
2. Prepare the video dataset by resizing clips to 64x64 and stabilizing camera motion if possible.
3. Train the GAN on the dataset for several epochs until generated videos show plausible motion.
4. Implement a baseline autoencoder video generator for comparison.
5. Generate sample videos from both models and evaluate perceptual quality qualitatively.
6. Document the architecture, training procedure, and comparison results in a README.

**Ships as:** A GitHub repo with code to train and generate videos using the two-stream GAN and baseline autoencoder, plus sample generated videos and a report comparing their quality.

**Stretch goal:** Add a simple action recognition evaluation by fine-tuning the discriminator on a small labeled subset to show learned representation usefulness.

### Advanced — Modeling Camera Motion for Improved Video Generation
*Effort: 3-4 weeks*

You extend the two-stream GAN model to explicitly handle camera motion by integrating a camera motion stabilization module or a learned camera motion model. This addresses the paper's limitation of assuming stationary cameras and aims to generate more realistic videos with dynamic scenes.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate beyond the original method by incorporating camera motion modeling to improve video generation fidelity.

**Grounded in:** The model assumes a stationary camera and does not explicitly model camera motion. Extending models to handle camera motion and more complex scene dynamics is a future direction.

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, Matplotlib

**Data:** Use a public video dataset with camera motion (e.g., DAVIS or YouTube clips with handheld camera) resized to 64x64 or 128x128 resolution.

**Build it:**

1. Research and implement a camera motion stabilization algorithm (e.g., homography estimation) to preprocess videos.
2. Modify the two-stream GAN architecture to include a camera motion stream or compensate for camera motion in foreground-background separation.
3. Train the extended model on videos with camera motion and compare generated videos to the original two-stream GAN outputs.
4. Evaluate improvements in video realism and motion plausibility qualitatively and quantitatively if possible.
5. Write detailed documentation explaining the camera motion modeling approach, challenges, and results.

**Ships as:** A GitHub repo with the extended two-stream GAN codebase, camera motion preprocessing scripts, generated video samples showing improved realism, and a comprehensive README discussing the extension and evaluation.

**Stretch goal:** Explore scaling video resolution to 128x128 or longer video sequences to further improve generation quality.

_The paper's authors did not release code or datasets; all projects require reimplementation from the paper's descriptions and use publicly available video datasets as substitutes._
