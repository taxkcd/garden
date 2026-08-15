---
title: "402 · XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation — Jeremy Dawson"
date: 2026-08-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jeremy-dawson"
source_hash: "7480f58f0994bf75e74a7c29942754c4b1b2b14b1bac0ea7daa3f70750a7f337"
sequence: 402
generator: "outreach-garden: managed"
---

# 402 · XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation

## At a glance

- **Professor:** Jeremy Dawson
- **Institution:** West Virginia University
- **Paper:** [XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation](https://arxiv.org/abs/2607.14287)
- **Authors:** Md Mahedi Hasan, Md Mushfiqur Rahaman, Alan Pachkovskiy, Imtiaz Ahmed, Jeremy Dawson, Srinjoy Das
- **Year:** 2026

## Paper overview

This paper presents XCT-SAM, a new method to improve defect detection in X-ray computed tomography (XCT) images used in additive manufacturing. It adapts a powerful segmentation model (SAM) to better identify tiny defects in metal parts by first training on alloy microstructure images and then on synthetic XCT data, using a parameter-efficient approach that requires training only a small fraction of the model's parameters. XCT-SAM outperforms existing methods on both synthetic and real XCT datasets, improving accuracy and generalization.

### Why it matters

**Research problem:** Accurate segmentation of microscopic defects in additive manufacturing XCT images is challenging due to severe class imbalance, subtle defect appearances, and large domain gaps between natural image pre-training and XCT data. Existing models like SAM do not generalize well to this domain, and direct fine-tuning is computationally expensive and prone to overfitting.

**Why it matters:** Defects such as pores and inclusions critically affect the mechanical strength and reliability of additively manufactured parts, which are increasingly used in aerospace, automotive, and biomedical applications. Reliable defect segmentation is essential for quality assurance and certification but is difficult due to the internal, low-contrast nature of defects.

**Key contributions:**

- Introduced a two-stage material-to-XCT adaptation strategy to decompose the large domain gap into smaller steps.
- Developed XCT-SAM framework using Conv-LoRA adapters with rank 2 and eight convolutional experts, fine-tuning only 0.647% of SAM parameters.
- Demonstrated superior performance on synthetic and real XCT datasets compared to zero-shot SAM and other fine-tuned baselines.
- Provided an extensive evaluation of objective functions, showing Dice-Focal loss achieves balanced performance under severe class imbalance.

## About the professor

**Jeremy Dawson** — Associate Professor and Program Coordinator for Biometrics Minor, Lane Department of Computer Science and Electrical Engineering, West Virginia University.

Research interests: biometrics datasets, sensor operation, human identification, micro and nanophotonic sensor platforms, signal processing methodologies for DNA systems

### Research links

- [Faculty/profile page](https://directory.statler.wvu.edu/faculty-staff-directory/jeremy-dawson)
- [Identity evidence](https://www.statler.wvu.edu/faculty-staff/faculty/jeremy-dawson)
- [Professor website](https://jeremydawson.faculty.wvu.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** parameter-efficient transfer learning
**The paper assumes:** parameter-efficient transfer learning, low-rank adaptation methods, domain adaptation in deep learning
**Already in this field?** Skip this entirely if you already understand transfer learning techniques that fine-tune only a small subset of model parameters using low-rank or adapter-based methods.

To understand the parameter-efficient domain adaptation techniques central to XCT-SAM, such as Conv-LoRA adapters and low-rank adaptation, these two background options provide complementary depth. The rigorous course offers a comprehensive academic foundation in multi-task and meta learning with focused lectures on transfer and domain adaptation, while the fast track delivers concise, practical explainers on parameter-efficient fine-tuning methods. Choose the course for a deep theoretical and practical grounding; choose the fast track for a quick, clear overview to get up to speed efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS330: Deep Multi-Task and Meta Learning I Autumn 2022](https://www.youtube.com/playlist?list=PLoROMvodv4rNjRoawgt72BBNwL2V7doGI) — Stanford Online · 17 videos · 21.5h across 17 episodes

**Watch only this:** Lectures 3, 12, and 13 — 'Transfer Learning, Meta Learning', 'Bayesian Meta-Learning', and 'Domain Adaptation' — about 3.75 hours total, focusing on transfer and domain adaptation techniques critical to parameter-efficient tuning.

*Why it unblocks this paper:* Stanford CS330 covers transfer learning and domain adaptation in depth, including parameter-efficient methods and curriculum-inspired sequential adaptation, directly relevant to understanding the theoretical and practical foundations of XCT-SAM's approach.

*If you want all of it:* All 17 episodes, about 21.5 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [LLM production Systems](https://www.youtube.com/playlist?list=PLmHyB9D4YDCjvQWh5U7ytLryG3XhxDP3b) — Mistro · 7 videos · 2.4h across 7 episodes

**Watch only this:** Episodes 1 and 2 — 'LLM (Parameter Efficient) Fine Tuning - Explained!' and 'LoRA & QLoRA Fine-tuning Explained In-Depth' — about 40 minutes total, covering the core concepts of parameter-efficient adaptation.

*Why it unblocks this paper:* The 'LLM production Systems' playlist by Mistro provides clear, concise explanations of parameter-efficient fine-tuning methods like LoRA and QLoRA, which are conceptually similar to Conv-LoRA adapters used in XCT-SAM, making it a practical quick-start resource.

*If you want all of it:* All 7 episodes, about 2.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the XCT-SAM paper, start by building a strong foundation in parameter-efficient fine-tuning techniques, which are crucial for adapting large models with minimal parameter updates. Next, study domain adaptation methods in computer vision to grasp how models can be transferred across significantly different image domains, such as from natural images to XCT images. Then, focus on low-rank adaptation methods, the core technical approach enabling efficient Conv-LoRA adapter training in the paper. Following that, explore loss functions designed for handling severe class imbalance, a critical challenge in defect segmentation tasks. Finally, conclude with the paper's core concept of sequential domain adaptation strategy and the authors' own talk if available, to gain direct insight into their novel two-stage adaptation framework for industrial XCT defect segmentation.

### Parameter-efficient fine-tuning *(prerequisite)*
This section covers techniques that allow fine-tuning of large models by updating only a small fraction of parameters, which is essential for understanding how XCT-SAM efficiently adapts the SAM model with Conv-LoRA adapters. The selected lecture from NPTEL IIT Kharagpur provides a detailed and rigorous academic treatment of parameter-efficient fine-tuning methods.

*How the paper uses it:* XCT-SAM fine-tunes only 0.647% of SAM parameters using Conv-LoRA adapters, making parameter-efficient fine-tuning foundational to the approach.

▶ [Lecture 46 : Parameter-efficient fine-tuning - I](https://www.youtube.com/watch?v=3FWKcXZOAUw) — NPTEL IIT Kharagpur · 19:14

### Domain adaptation in computer vision *(prerequisite)*
Understanding domain adaptation is key to bridging the large domain gap between natural image pretraining and XCT image domains. The Stanford CS231N lecture offers a comprehensive university-level overview of deep learning techniques in computer vision, including domain adaptation strategies.

*How the paper uses it:* XCT-SAM uses a two-stage sequential domain adaptation strategy to progressively adapt from alloy microstructure images to XCT defect images.

▶ [Stanford CS231N Deep Learning for Computer Vision | Spring ...](https://www.youtube.com/watch?v=mQOK0Mfyrkk) — Stanford Online · 1:09:54

### Low-rank adaptation methods *(prerequisite)*
Low-rank adaptation (LoRA) is the core technique enabling efficient Conv-LoRA adapter training in XCT-SAM. The video by Chris Alexiuk provides an in-depth explanation of LoRA, its mathematical foundations, and its importance for affordable fine-tuning of large transformer models.

*How the paper uses it:* XCT-SAM employs Conv-LoRA adapters with rank 2 to efficiently fine-tune a small subset of parameters in the SAM backbone.

▶ [Low-rank Adaption of Large Language Models: Explaining the ...](https://www.youtube.com/watch?v=dA-NhCtrrVE) — Chris Alexiuk · 19:17

### Loss functions for class imbalance *(prerequisite)*
Handling severe class imbalance is critical in defect segmentation tasks. This lecture by Christos Kyrkou from the University of Cyprus provides an academic-level discussion on semantic segmentation loss functions, including those designed to address class imbalance.

*How the paper uses it:* XCT-SAM uses a Dice-Focal loss function to effectively handle the severe class imbalance in XCT defect segmentation.

▶ [Lecture 15: Deep Learning - Semantic Segmentation (Part 1)](https://www.youtube.com/watch?v=-cvSSFgp3FY) — Christos Kyrkou · 6 years ago

### Sequential domain adaptation strategy
This concept is central to the paper's methodology, describing the two-stage curriculum-inspired adaptation from alloy microstructure images to synthetic XCT data. The Stanford CS330 lecture on domain adaptation and meta-learning provides a rigorous academic perspective on sequential and multi-task domain adaptation strategies.

*How the paper uses it:* XCT-SAM's core contribution is its sequential domain adaptation strategy that decomposes the large domain gap into manageable steps.

▶ [Stanford CS330 Deep Multi-Task & Meta Learning - Domain Adaptation l 2022 I Lecture 13](https://www.youtube.com/watch?v=Uk6MU_PLDMs) — Stanford Online · 1:15:41 · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts essential to understanding XCT-SAM, a method for efficient domain adaptation in defect segmentation of XCT images. We start with parameter-efficient fine-tuning techniques to grasp how large models can be adapted with minimal updates, then cover domain adaptation in computer vision to understand bridging domain gaps, followed by low-rank adaptation methods which are the core technical enabler in XCT-SAM. Finally, we explore loss functions for class imbalance and the paper's sequential domain adaptation strategy to see how these concepts come together in the proposed approach.

### Parameter-efficient fine-tuning *(prerequisite)*
Learn how large pretrained models can be adapted to new tasks by updating only a small fraction of their parameters, saving computation and reducing overfitting. This includes methods like adapters and LoRA that insert small trainable modules into frozen models.

*How the paper uses it:* XCT-SAM fine-tunes only 0.647% of SAM parameters using Conv-LoRA adapters, enabling efficient adaptation to XCT data.

▶ [Lec 17 | Parameter-Efficient Fine-Tuning (PEFT)](https://www.youtube.com/watch?v=EPDPlGkbF2g) — LCS2 · 1:08:57

### Domain adaptation in computer vision *(prerequisite)*
Understand how models trained on one type of images (e.g., natural images) can be adapted to perform well on a different domain (e.g., XCT images) despite differences in appearance and data distribution.

*How the paper uses it:* XCT-SAM addresses the large domain gap between natural image pretraining and XCT defect images through sequential domain adaptation.

▶ [Domain Adaptation Explained: Making AI Work in New Environments](https://www.youtube.com/watch?v=wpUdR6MVIHQ) — CodeLucky · 6 months ago

### Low-rank adaptation methods *(prerequisite)*
Discover how low-rank adaptation (LoRA) techniques efficiently fine-tune large models by learning low-rank update matrices, drastically reducing the number of trainable parameters while maintaining performance.

*How the paper uses it:* XCT-SAM uses Conv-LoRA adapters with rank 2 to efficiently capture spatial details with minimal parameter updates.

▶ [Low-rank Adaption of Large Language Models: Explaining the ...](https://www.youtube.com/watch?v=dA-NhCtrrVE) — Chris Alexiuk · 19:17

### Loss functions for class imbalance *(prerequisite)*
Explore specialized loss functions like Dice and Focal loss that help models learn effectively when the target classes are highly imbalanced, a common challenge in defect segmentation.

*How the paper uses it:* XCT-SAM employs Dice-Focal loss to handle severe class imbalance in defect segmentation tasks.

▶ [Focal Loss | Lecture 40 (Part 1) | Applied Deep Learning](https://www.youtube.com/watch?v=k1ySBobFRaA) — Maziar Raissi · 5 years ago

## Already in your library

- [10: Generative AI – Adapting LLMs with Parameter-Efficient Fine-Tuning](https://www.youtube.com/watch?v=d-tngNnaG4U) — also for: FedHFT: Efficient Federated Fine-tuning with Heterogeneous Edge Clients (Calton Pu)
- [Lec 29 | Parameter Efficient Fine-Tuning (PEFT)](https://www.youtube.com/watch?v=S0l-qUniC54) — also for: Fed-pilot: Optimizing LoRA Allocation for Efficient Federated Fine-Tuning with Heterogeneous Clients (Rui Hu)
- [LLM (Parameter Efficient) Fine Tuning - Explained!](https://www.youtube.com/watch?v=HcVtpLAGMXo) — also for: FedHFT: Efficient Federated Fine-tuning with Heterogeneous Edge Clients (Calton Pu)
- [[ML 2021 (English version)] Lecture 27: Domain Adaptation](https://www.youtube.com/watch?v=8AKqH6V9kjE) — also for: Geographic Bias Analysis and Cross-Domain Generalization in Deep Learning-Based Building Damage Assessment (Rajiv Bagai)
- [Handling Imbalanced Dataset in Machine Learning: Easy Explanation for Data Science Interviews](https://www.youtube.com/watch?v=GR-OW5asKlk) — also for: One Round Is All You Need: Analytic Federated Learning for Task-Heterogeneous Multi-Label Medical Image Classification (Hana Khamfroush)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of XCT-SAM's approach to parameter-efficient sequential domain adaptation for industrial XCT defect segmentation. The beginner project focuses on reproducing a core loss function comparison to grasp class imbalance handling. The intermediate project involves running and extending the authors' XCT-SAM code on synthetic data to replicate key segmentation metrics. The advanced project tackles a stated limitation by extending XCT-SAM to 3D volumetric defect segmentation, exploring a future direction proposed by the paper.

### Beginner — Dice-Focal Loss Comparison on Synthetic Defect Segmentation
*Effort: a weekend, ~8 hours*

You implement Dice, Focal, and Dice-Focal loss functions in a simple 2D binary segmentation model trained on a small synthetic dataset simulating XCT defect images with severe class imbalance. You compare their effects on segmentation metrics like IoU and Dice score to reproduce the paper's finding that Dice-Focal loss balances performance under class imbalance.

**Why it shows you understood the paper:** This project shows you understand the critical role of loss function design in handling severe class imbalance in XCT defect segmentation, a key contribution of the paper.

**Grounded in:** Provided an extensive evaluation of objective functions, showing Dice-Focal loss achieves balanced performance under severe class imbalance.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, NumPy, Matplotlib

**Data:** Synthetic 2D grayscale images simulating XCT defects with severe class imbalance, generated by simple image processing scripts.

**Build it:**

1. Generate a small synthetic dataset of 2D grayscale images with binary masks representing defects with severe class imbalance.
2. Implement Dice loss, Focal loss, and Dice-Focal combined loss functions in PyTorch.
3. Train a simple U-Net or CNN-based binary segmentation model separately with each loss function on the synthetic dataset.
4. Evaluate and compare IoU, Dice, and F1 scores for each loss function.
5. Visualize segmentation outputs and metric trends to highlight differences.

**Ships as:** A GitHub repo with code, synthetic data generation scripts, training notebooks, metric comparisons, and visualizations demonstrating Dice-Focal loss advantages.

**Stretch goal:** Add support for noisy or low-contrast synthetic images to test robustness of loss functions.

### Intermediate — Run and Extend XCT-SAM on Synthetic Pore Segmentation
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' XCT-SAM codebase on the synthetic pore segmentation dataset provided or described in the paper. You reproduce key metrics such as IoU and Dice scores and then extend the baseline by experimenting with adapter rank (e.g., r=1 vs r=2) or number of convolutional experts to observe effects on segmentation performance and parameter efficiency.

**Why it shows you understood the paper:** This project demonstrates you can operate the authors' parameter-efficient domain adaptation framework, understand the impact of low-rank adaptation and convolutional experts, and reproduce quantitative results from the paper.

**Grounded in:** XCT-SAM outperforms Conv-LoRA-SAM by +0.0472 IoU and +0.0549 Dice on synthetic pore segmentation; lower-rank adaptation (r=2) provides best trade-off between parameter efficiency and segmentation accuracy.

**Tech stack:** Python 3.11, PyTorch, Git, Linux shell

**Data:** Synthetic XCT pore segmentation dataset as described in the paper; if unavailable, simulate synthetic XCT-like images with pores using image processing.

**Build it:**

1. Clone the XCT-SAM repository from https://github.com/Mahedi-61/XCT-SAM.git and set up the environment.
2. Run the provided training scripts on the synthetic pore segmentation dataset to reproduce baseline metrics.
3. Modify Conv-LoRA adapter rank parameter and number of convolutional experts in the code.
4. Retrain and evaluate the model variants, recording IoU and Dice scores.
5. Analyze and document the trade-offs between parameter count and segmentation accuracy.

**Verified links from the paper:**

- <https://github.com/Mahedi-61/XCT-SAM.git> — released by the paper's authors

**Ships as:** A forked GitHub repo with scripts, training logs, metric tables, and a README explaining the experiments and reproduced results.

**Stretch goal:** Add visualization scripts to compare segmentation masks qualitatively across adapter configurations.

### Advanced — 3D Volumetric Extension of XCT-SAM for Multiclass Defect Segmentation
*Effort: 3-4 weeks*

You extend the XCT-SAM framework to operate on 3D volumetric XCT data slices instead of 2D slices, enabling spatial context capture across slices. You also modify the binary segmentation head to support multiclass segmentation of multiple defect types simultaneously. You train and evaluate on a small synthetic 3D dataset simulating multiple defect classes, reporting volumetric IoU and Dice metrics.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, showing deep comprehension of the model architecture, domain adaptation strategy, and practical challenges in volumetric and multiclass defect segmentation.

**Grounded in:** Current models operate on 2D slices and use binary segmentation models, limiting volumetric and multiclass segmentation capabilities; future directions include developing full 3D volumetric modeling approaches and unified multiclass defect segmentation models.

**Tech stack:** Python 3.11, PyTorch, NumPy, SimpleITK or nibabel for 3D data handling, Git

**Data:** Synthetic 3D volumetric XCT-like data with multiple defect classes generated via scripting or simple 3D image simulation; no public 3D XCT dataset is provided by the paper.

**Build it:**

1. Design a synthetic 3D volumetric dataset generator simulating multiple defect classes with spatial continuity.
2. Adapt the XCT-SAM Conv-LoRA adapter modules and ViT backbone to accept 3D input or process 3D patches/slices with context aggregation.
3. Modify the segmentation head for multiclass output with appropriate loss functions (e.g., multiclass Dice-Focal).
4. Train the adapted model sequentially on synthetic 3D alloy microstructure and synthetic 3D XCT defect data.
5. Evaluate volumetric segmentation metrics and compare to a 2D slice-wise baseline.
6. Document challenges, performance trade-offs, and potential improvements.

**Verified links from the paper:**

- <https://github.com/Mahedi-61/XCT-SAM.git> — released by the paper's authors

**Ships as:** A GitHub repo with 3D data generation scripts, modified XCT-SAM code for 3D multiclass segmentation, training and evaluation notebooks, and a detailed README discussing results and limitations.

**Stretch goal:** Experiment with noise and contrast shifts in 3D data to test robustness improvements.

_The paper's authors provide code but no public real XCT datasets; synthetic data must be generated or approximated for training and evaluation._
