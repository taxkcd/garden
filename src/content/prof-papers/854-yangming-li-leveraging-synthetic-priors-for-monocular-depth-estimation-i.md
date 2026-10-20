---
title: "854 · Leveraging Synthetic Priors for Monocular Depth Estimation in Specular Surgical Environments — Yangming Li"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yangming-li"
source_hash: "65ec1cb1e5e4e19c11f704d97026ba252a10d6a739032b132d0c70184bb1359b"
sequence: 854
generator: "outreach-garden: managed"
---

# 854 · Leveraging Synthetic Priors for Monocular Depth Estimation in Specular Surgical Environments

## At a glance

- **Professor:** Yangming Li
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Leveraging Synthetic Priors for Monocular Depth Estimation in Specular Surgical Environments](https://www.techrxiv.org/doi/pdf/10.36227/techrxiv.176704422.21389177/v1)
- **Authors:** Ankan Aich, Yangming Lee
- **Year:** 2025

## Paper overview

This paper presents a new method to improve depth estimation from single-camera endoscopic videos in robotic surgery, especially in challenging environments with shiny (specular) surfaces and transparent fluids. The authors use a synthetic-data-trained model backbone and adapt it efficiently to real surgical images, achieving better accuracy and robustness than previous methods.

### Why it matters

**Research problem:** Monocular depth estimation in minimally invasive robotic surgery is difficult due to specular reflections, transparent fluids, and lack of reliable ground truth data, causing existing models to fail on thin surgical tools and transparent surfaces.

**Why it matters:** Accurate 3D depth perception is critical for safe and autonomous robotic surgery, enabling tasks like tissue tracking and augmented reality overlays. Failures in depth estimation can compromise surgical safety and effectiveness.

**Key contributions:**

- Proposed a robust adaptation framework transferring synthetic priors from foundation models to the surgical domain to address boundary collapse issues.
- Integrated DV-LORA with the DAv2 backbone to achieve state-of-the-art depth reconstruction with minimal trainable parameters.
- Introduced a physically-stratified evaluation protocol on the SCARED dataset to quantify robustness in high-specularity surgical scenes.

## About the professor

**Yangming Li** — Assistant Professor, Department of Electrical and Computer Engineering Technology, Rochester Inst. of Technology.

Research interests: robotics, perception, modeling, planning, execution, probabilistic methods, causal learning techniques, deep learning

### Research links

- [Faculty/profile page](https://www.rit.edu/rocal/publications)
- [Professor website](https://www.rit.edu/academicaffairs/facultyscholarship/person.php?username=ymliee)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** deep learning for monocular depth estimation
**The paper assumes:** deep learning, convolutional neural networks, monocular depth estimation, domain adaptation in computer vision
**Already in this field?** Skip this entirely if you already understand deep learning methods for monocular depth estimation and domain adaptation techniques in computer vision.

To understand the deep learning techniques behind monocular depth estimation, especially as applied to synthetic-to-real adaptation in challenging surgical environments, this background provides two viewing options. The rigorous course offers a comprehensive, foundational deep learning perspective focused on computer vision, while the fast track delivers a concise, intuition-driven introduction to monocular depth estimation methods. Choose the course for deep technical grounding and the fast track for a quick, practical overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 4 (Neural Networks and Backpropagation), 5 (Image Classification with CNNs), 6 (CNN Architectures), and 15 (3D Vision), about 4.5 hours total — these cover the core deep learning and 3D vision concepts relevant to monocular depth estimation.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 covers convolutional neural networks, 3D vision, and domain adaptation topics essential for understanding monocular depth estimation models like Depth Anything V2 and fine-tuning methods such as DV-LORA.

*If you want all of it:* 21.2 hours across all 18 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Camera-based depth](https://www.youtube.com/playlist?list=PLzJtKeB2Dbx-4G0JYALBKz7QIvFiEBWwA) — Yao-Ling Hung · 12 videos · 3.2h across 12 episodes

**Watch only this:** Episodes 1 (Depth Pro - monocular network from Apple. But can it do this?!), 2 (Depth Pro Depth Estimation for Fine Boundary Details with Single Camera), and 8 (How Neural Nets estimate depth from 2D images? Monocular Depth Estimation Explained!), about 48 minutes total — these give a concise yet thorough introduction to monocular depth estimation.

*Why it unblocks this paper:* The 'Camera-based depth' playlist by Yao-Ling Hung provides clear, focused explanations on monocular depth estimation techniques, including state-of-the-art models and practical challenges like fine boundary details, which align well with the paper's focus on surgical environments.

*If you want all of it:* 3.2 hours across all 12 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on leveraging synthetic priors for monocular depth estimation in specular surgical environments, start with foundational topics including monocular depth estimation and synthetic-to-real domain adaptation to grasp the core challenges and techniques. Next, explore the critical adaptation method DV-LORA that enables efficient fine-tuning of large vision models. Finally, focus on the paper's core concept by watching the authors' own talk and related videos on the Depth Anything V2 model, which forms the backbone of their approach.

### Monocular Depth Estimation in Computer Vision *(prerequisite)*
Monocular depth estimation is the fundamental problem addressed by the paper, involving predicting depth from a single RGB image. Understanding state-of-the-art methods and challenges in this area provides essential background for appreciating the paper's contributions in surgical environments.

*How the paper uses it:* The paper improves monocular depth estimation accuracy in challenging surgical scenes using synthetic priors and adaptation.

▶ [On Monocular Depth Estimation: (1) MonoDEVS ; (2) Multi-modal Co-training : Antonio M. López](https://www.youtube.com/watch?v=fD-VZkvaQdo) — Deep Learning For Autonomous Driving Workshops · 38:00 · 5y ago

### Synthetic-to-Real Domain Adaptation *(prerequisite)*
Synthetic-to-real domain adaptation is a key challenge when transferring models trained on synthetic data to real-world images, especially in medical imaging. This section covers methods and challenges in domain adaptation relevant to bridging the synthetic-to-real gap in the paper.

*How the paper uses it:* The paper adapts a synthetic-data-trained model to real surgical images to overcome domain gaps.

▶ [Yasser Benigmin - Domain Adaptation in the Era of Foundation Models](https://www.youtube.com/watch?v=YD-9qyo9O4c) — Cohere · 1:24:49 · 6mo ago

### Dynamic Vector Low-Rank Adaptation
DV-LORA is the central adaptation method used in the paper to efficiently fine-tune the large Depth Anything V2 backbone with minimal trainable parameters. Understanding LoRA and its variants is crucial to grasp how the authors achieve parameter-efficient adaptation.

*How the paper uses it:* The paper integrates DV-LORA with the DAv2 backbone for efficient fine-tuning in the surgical domain.

▶ [LoRA explained (and a bit about precision and quantization)](https://www.youtube.com/watch?v=t509sv5MT0w) — DeepFindr · 17:07 · 3y ago

### Foundation Models for Vision Tasks *(prerequisite)*
Foundation models provide large pretrained backbones that capture rich representations useful for downstream tasks. This section introduces the concept of foundation models in vision, contextualizing the Depth Anything V2 model used as the synthetic prior in the paper.

*How the paper uses it:* The paper leverages the Depth Anything V2 foundation model pretrained on synthetic data as a geometric prior.

▶ [DINOv3 Paper Explained: The Computer Vision Foundation Model](https://www.youtube.com/watch?v=Rt1Oa-2-OFU) — AI Papers Academy · 13:40 · 1y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides the most direct and specific insights into their methodology, experimental setup, and results. Watching this talk will give an advanced understanding of their approach and innovations in monocular depth estimation for surgical environments.

*How the paper uses it:* This talk presents the authors' approach to monocular depth estimation using synthetic priors and DV-LORA adaptation.

▶ [Monocular Depth Estimation using Synthetic Data - Results Demonstration](https://www.youtube.com/watch?v=48hWgkhiFyI) — Alfie brash · 5:31 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the fundamentals of monocular depth estimation, which is the core computer vision problem addressed. Next, grasp the challenge of synthetic-to-real domain adaptation, crucial for transferring models trained on synthetic data to real surgical images. Then, explore specular reflection handling to appreciate the difficulties posed by shiny surgical environments. After that, understand foundation models in vision to see the role of large pretrained backbones like Depth Anything V2. Finally, learn about Dynamic Vector Low-Rank Adaptation (DV-LORA), the efficient fine-tuning method used to adapt the backbone to surgical data.

### Monocular Depth Estimation in Computer Vision *(prerequisite)*
Monocular depth estimation predicts the distance of objects from a single RGB image, enabling 3D scene understanding without specialized sensors. This is a challenging, ill-posed problem due to scale ambiguity and lack of direct depth cues. Learning this concept builds intuition about how the paper reconstructs depth from endoscopic images.

*How the paper uses it:* The paper improves monocular depth estimation specifically for challenging surgical scenes with specularities and transparent fluids.

▶ [Best Depth Estimation Models (MiDaS, Depth Pro, Depth Anything v2, DepthCrafter, Marigold, Metric3D)](https://www.youtube.com/watch?v=egBNsSCajDg) — Kevin Wood | Robotics & AI · 7:25 · 1y ago

### Synthetic-to-Real Domain Adaptation *(prerequisite)*
Domain adaptation techniques help models trained on synthetic data generalize to real-world images by bridging the visual and statistical differences between domains. This is essential when real labeled data is scarce or hard to obtain, as in surgical imaging. Understanding this helps appreciate how the paper adapts synthetic priors to real surgical scenes.

*How the paper uses it:* The authors adapt a synthetic-data-trained model backbone to real surgical images to overcome domain gaps.

▶ [Yasser Benigmin - Domain Adaptation in the Era of Foundation Models](https://www.youtube.com/watch?v=YD-9qyo9O4c) — Cohere · 1:24:49 · 6mo ago

### Specular Reflection Handling in Vision *(prerequisite)*
Specular reflection occurs when light reflects off shiny surfaces, causing bright highlights and distortions that confuse vision algorithms. Understanding the physics and visual effects of specularities is key to grasping why depth estimation in surgical environments is challenging and how robustness can be improved.

*How the paper uses it:* The paper targets robustness in high-specularity surgical scenes where reflections degrade depth estimation quality.

▶ [Specular and diffuse reflection | Geometric optics | Physics | Khan Academy](https://www.youtube.com/watch?v=sd0BOnN6aNY) — Khan Academy · 11:00 · 15y ago

### Foundation Models for Vision Tasks *(prerequisite)*
Foundation models are large pretrained neural networks that serve as general-purpose backbones for many vision tasks, capturing rich geometric and semantic priors. Learning about them clarifies why the paper uses the Depth Anything V2 model as a synthetic prior for depth estimation.

*How the paper uses it:* The paper leverages the Depth Anything V2 foundation model pretrained on synthetic data as the backbone for depth estimation.

▶ [How to Use Depth Anything v2 for Monocular Depth Estimation | VisionAI Research | Ultralytics 🤯 🚀](https://www.youtube.com/watch?v=DKLqHONOsBw) — Ultralytics · 10:46 · 9mo ago

### Dynamic Vector Low-Rank Adaptation
Dynamic Vector Low-Rank Adaptation (DV-LORA) is a parameter-efficient fine-tuning technique that adapts large pretrained models to new domains by updating a small number of parameters. This method enables practical transfer of synthetic priors to real surgical images without retraining the entire backbone.

*How the paper uses it:* The authors integrate DV-LORA with the Depth Anything V2 backbone to efficiently adapt it to surgical data with minimal trainable parameters.

▶ [LoRA - Low-rank Adaption of AI Large Language Models: LoRA and QLoRA Explained Simply](https://www.youtube.com/watch?v=lixMONUAjfs) — Wes Roth · 4:38 · 3y ago

## Already in your library

- [04. Zeeshan Khan Suri - Monocular Depth Estimation Challenge Submission | 1st MDEC @ WACV23](https://www.youtube.com/watch?v=ORV05MuElfg) — also for: Leveraging Synthetic Priors for Monocular Depth Estimation in Specular Surgical Environments (Yangming Li)
- [How Neural Nets estimate depth from 2D images? Monocular Depth Estimation Explained!](https://www.youtube.com/watch?v=sz30TDttIBA) — also for: On the Viability of Monocular Depth Pre-training for Semantic Segmentation (Dong Lao)
- [What is Depth Estimation & How to Implement It with MiDaS by Intel Labs | Monocular Depth Explained🚀](https://www.youtube.com/watch?v=WsCUPg_TxwI) — also for: VRSight: An AI-Driven Scene Description System to Improve Virtual Reality Accessibility for Blind People (Yuhang Zhao)
- [Depth Anything V2 Monocular Depth Estimation (Explanation and Real Time Demo)](https://www.youtube.com/watch?v=fs0jZx9o9rc) — also for: Leveraging Synthetic Priors for Monocular Depth Estimation in Specular Surgical Environments (Yangming Li)
- [Low Rank Adaptation (LoRA) - How to search for a needle in a much smaller haystack](https://www.youtube.com/watch?v=Gy9jrVQTY4Q) — also for: Leveraging Synthetic Priors for Monocular Depth Estimation in Specular Surgical Environments (Yangming Li)
- [Lec 66 Low-Rank Adaptation (LoRA)](https://www.youtube.com/watch?v=cTOhxHunBcU) — also for: CoCoA: Context-Conditional Cultural Alignment for Large Language Models (Wei Xu)
- [W8_L1: Low-rank adaptation (lora)](https://www.youtube.com/watch?v=my_5FjvP1vU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [LoRA & QLoRA Fine-tuning Explained In-Depth](https://www.youtube.com/watch?v=t1caDsMzWBk) — also for: Relations Prediction for Knowledge Graph Completion using Large Language Models (Krzysztof J. Kochut)
- [Low-rank Adaption of Large Language Models: Explaining the ...](https://www.youtube.com/watch?v=dA-NhCtrrVE) — also for: XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation (Jeremy Dawson)
- [What is Low-Rank Adaptation (LoRA) | explained by the inventor](https://www.youtube.com/watch?v=DhRoTONcyZE) — also for: CoCoA: Context-Conditional Cultural Alignment for Large Language Models (Wei Xu)
- [What is LoRA? Low-Rank Adaptation for finetuning LLMs ...](https://www.youtube.com/watch?v=KEv-F5UkhxU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [Domain Adaptation & Synthetic Data - Data Science Festival](https://www.youtube.com/watch?v=Lcceo41Gknc) — also for: Leveraging Synthetic Priors for Monocular Depth Estimation in Specular Surgical Environments (Yangming Li)
- [MedAI #134: Merlin: A Vision Language Foundation Model for 3D Computed Tomography | Ashwin Kumar](https://www.youtube.com/watch?v=XWmCkbpXOUw) — also for: Reconstructing Hand-Held Objects in 3D from Images and Videos (Georgia Gkioxari)
- [World Models explained in 10min..](https://www.youtube.com/watch?v=ECWC-YlAk1o) — also for: DREAM-Chunk: Reactive Action Chunking with Latent World Model (Raymond A. Yeh)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the paper's approach to monocular depth estimation in challenging surgical environments. The beginner project focuses on reproducing a key evaluation metric from the paper using familiar tools. The intermediate project involves reimplementing the core synthetic-prior adaptation method on a substitute dataset to validate its effectiveness. The advanced project extends the method toward a stated future direction by exploring domain adaptation to real human surgical images, addressing a key limitation.

### Beginner — Depth Estimation Metric Calculator for Surgical Images
*Effort: a weekend, ~8 hours*

You build a simple Python script or Jupyter notebook that computes the accuracy metric δ < 1.25 and Squared Relative Error (SqRel) for depth estimation results on the SCARED dataset or a substitute. The project includes visualizations of metric distributions and a comparison to a baseline error level.

**Why it shows you understood the paper:** This project shows you understand the key evaluation metrics used in the paper to quantify depth estimation accuracy and robustness in surgical scenes, including how to interpret and visualize them.

**Grounded in:** The project demonstrates understanding of the paper's key results: "Achieved state-of-the-art accuracy (δ < 1.25) of 98.1% on the SCARED dataset" and "Reduced Squared Relative Error by over 17% compared to the strongest V1-based baseline."

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy, pandas

**Data:** Use the SCARED dataset if accessible; otherwise, simulate depth prediction and ground truth arrays with similar shapes and value ranges as described in the paper.

**Build it:**

1. Obtain or simulate depth prediction and ground truth depth arrays for surgical images.
2. Implement functions to compute the δ < 1.25 accuracy metric and Squared Relative Error as defined in the paper.
3. Calculate these metrics for sample predictions and ground truth pairs.
4. Visualize metric distributions using histograms or boxplots.
5. Compare metrics against a simple baseline (e.g., constant depth prediction).
6. Document the metric definitions and interpretation in the README.

**Ships as:** A Jupyter notebook or Python script with metric calculations, visualizations, and explanations, demonstrating how the paper quantifies depth estimation performance.

**Stretch goal:** Add support for the physically-stratified evaluation protocol by grouping images into specularity clusters and computing metrics per cluster.

### Intermediate — Reimplementation of Synthetic Prior Adaptation for Depth Estimation
*Effort: 1-3 weekends, ~20 hours*

You implement the core method of adapting a synthetic-data pretrained monocular depth estimation model to surgical images using a parameter-efficient fine-tuning technique inspired by DV-LORA. You test this on a publicly available substitute dataset for surgical scenes or a small synthetic-to-real depth dataset, comparing performance against a baseline model without adaptation.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's main technical contribution: leveraging synthetic priors with efficient adaptation to improve depth estimation in challenging domains, and how to evaluate improvements quantitatively.

**Grounded in:** It reproduces the paper's key contribution: "Integrated DV-LORA with the DAv2 backbone to achieve state-of-the-art depth reconstruction with minimal trainable parameters."

**Tech stack:** Python 3.11, PyTorch, OpenCV, numpy, matplotlib

**Data:** Use a publicly available monocular depth dataset with synthetic-to-real domain characteristics (e.g., KITTI or NYU Depth v2 as a substitute), since the paper's SCARED dataset is not publicly linked.

**Build it:**

1. Implement or obtain a pretrained monocular depth estimation backbone model trained on synthetic data (e.g., a lightweight DNN).
2. Implement a parameter-efficient fine-tuning module inspired by DV-LORA (low-rank adaptation with dynamic vectors).
3. Freeze the backbone weights and train only the adaptation module on the target dataset's real images with available ground truth.
4. Evaluate depth estimation accuracy using δ < 1.25 and Squared Relative Error metrics.
5. Compare results against the backbone model without adaptation to show improvement.
6. Document the method, training procedure, and evaluation results.

**Ships as:** A PyTorch codebase with training scripts, evaluation metrics, and a report showing improved depth estimation accuracy via synthetic prior adaptation.

**Stretch goal:** Incorporate a simple specularity detection module to stratify evaluation and analyze robustness in high-specularity images.

### Advanced — Domain Adaptation of Synthetic Priors to Real Human Surgical Videos
*Effort: several weeks, ~80+ hours*

You extend the paper's method by applying synthetic prior adaptation with DV-LORA to a new dataset of real human surgical videos or images, addressing the paper's limitation of evaluation only on porcine cadaver data. You develop a domain adaptation pipeline to reduce the synthetic-to-real gap and evaluate robustness in diverse clinical scenarios.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of domain adaptation challenges and the practical steps needed to bring synthetic-prior-based depth estimation closer to clinical deployment.

**Grounded in:** It addresses the limitation: "Evaluation is limited to the SCARED dataset and porcine cadaver anatomy; clinical validation on human surgeries is not reported." and the future direction: "Extending evaluation to diverse clinical datasets and real human surgical procedures."

**Tech stack:** Python 3.11, PyTorch, OpenCV, numpy, matplotlib, scikit-learn

**Data:** Use publicly available real human surgical video datasets with depth annotations if accessible, or collaborate to obtain anonymized clinical data; otherwise, simulate domain shift scenarios with existing datasets.

**Build it:**

1. Collect or identify a dataset of real human surgical images/videos with depth ground truth or proxy labels.
2. Implement the synthetic prior adaptation method with DV-LORA as in the intermediate project.
3. Develop domain adaptation techniques such as adversarial training, style transfer, or self-supervised fine-tuning to reduce the domain gap.
4. Evaluate depth estimation accuracy and robustness, including stratification by specularity or tissue type.
5. Analyze failure cases and propose improvements to the adaptation pipeline.
6. Document the extended method, experiments, and insights on clinical applicability.

**Ships as:** A comprehensive codebase and report demonstrating domain adaptation of synthetic priors to real human surgical data, with evaluation results and discussion of clinical relevance.

**Stretch goal:** Integrate the adapted depth estimation model into a simple robotic surgery simulation environment to visualize 3D reconstructions in real time.
