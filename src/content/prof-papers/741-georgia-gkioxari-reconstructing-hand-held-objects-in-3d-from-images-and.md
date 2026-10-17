---
title: "741 · Reconstructing Hand-Held Objects in 3D from Images and Videos — Georgia Gkioxari"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-georgia-gkioxari"
source_hash: "3bd97dd8d1ed393be3d4e367cedd99699761bd0baa2557bd49a01273a489b3ac"
sequence: 741
generator: "outreach-garden: managed"
---

# 741 · Reconstructing Hand-Held Objects in 3D from Images and Videos

## At a glance

- **Professor:** Georgia Gkioxari
- **Institution:** California Inst. of Technology
- **Paper:** [Reconstructing Hand-Held Objects in 3D from Images and Videos](https://arxiv.org/pdf/2404.06507)
- **Authors:** Jane Wu, Georgios Pavlakos, Georgia Gkioxari, Jitendra Malik
- **Year:** 2025

## Paper overview

This paper presents a new method to reconstruct 3D shapes of objects held in hands using only monocular RGB images or videos. It combines a transformer-based model that jointly estimates hand and object geometry from single images with a retrieval system that uses large vision-language models and 3D generative models to find realistic 3D object models. The approach aligns these models with the input images and inferred hand geometry to produce accurate, temporally consistent 3D reconstructions, even from challenging internet videos.

### Why it matters

**Research problem:** Reconstructing the 3D geometry of hand-held objects from monocular RGB images or videos is difficult due to occlusions by the hand, limited visible pixels of the object, and the small size of existing labeled datasets for hand-object interactions.

**Why it matters:** Accurate 3D reconstruction of hand-object interactions is important for computer vision and robotics applications such as imitation learning for robots, augmented reality, and understanding human-object interactions at scale. Existing methods either require manual data collection or fail to generalize well to occluded, in-the-wild scenarios.

**Key contributions:**

- MCC-HO: A transformer-based model for joint 3D reconstruction of hand and hand-held object geometry from monocular RGB images.
- Retrieval-Augmented Reconstruction (RAR): An automatic method leveraging large vision-language and text-to-3D generative models to retrieve realistic 3D object models for improved reconstruction.
- A rigid alignment method combining Chamfer Distance and DINOv2 image feature similarity optimized globally via the Viterbi algorithm for temporally consistent alignment across video frames.
- State-of-the-art performance on multiple hand-object datasets (DexYCB, MOW, HOI4D) for hand-held object reconstruction.
- Demonstration of scalability to unlabeled internet video datasets (100DOH) for large-scale hand-object 3D data generation.

## About the professor

**Georgia Gkioxari** — Assistant Professor of Computing and Mathematical Sciences and Electrical Engineering; William H. Hurt Scholar, Division of Engineering and Applied Science, California Inst. of Technology.

Research interests: advanced visual perception models, 2D Perception, 3D Perception, Spatial Reasoning, Tools

### Research links

- [Faculty/profile page](https://www.eas.caltech.edu/people/georgia-gkioxari)
- [Identity evidence](https://gkioxari.github.io)
- [Identity evidence](https://www.cms.caltech.edu/people/georgia-gkioxari)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 3D Computer Vision and Reconstruction
**The paper assumes:** 3D computer vision, monocular 3D reconstruction, neural implicit surfaces, and geometric alignment methods
**Already in this field?** Skip this entirely if you have prior coursework or hands-on experience in 3D computer vision and monocular reconstruction techniques.

To understand the paper on reconstructing hand-held objects in 3D from monocular images and videos, a solid grasp of 3D computer vision, neural implicit surfaces, transformer-based models, and temporal consistency in video reconstruction is essential. The rigorous course option provides a deep, structured dive into these topics through a top-tier university lecture series, while the fast track offers a concise, visual introduction to core 3D reconstruction concepts for quicker comprehension. Choose the course for comprehensive mastery or the fast track for an efficient conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS231N Deep Learning for Computer Vision I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOmsNzYBMe0gJY2XS8AQg16) — Stanford Online · 18 videos · 21.2h across 18 episodes

**Watch only this:** Lectures 8 (Attention and Transformers), 10 (Video Understanding), and 15 (3D Vision), totaling about 3.5 hours — these cover transformer architectures, temporal video modeling, and 3D reconstruction fundamentals critical to the paper.

*Why it unblocks this paper:* Stanford CS231N Deep Learning for Computer Vision I 2025 is a rigorous, authoritative graduate-level course that covers 3D vision, transformers, video understanding, and generative models, all directly relevant to the paper's methods like MCC-HO and RAR.

*If you want all of it:* 21.2 hours across all 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [CVPR16: 3D Reconstruction](https://www.youtube.com/playlist?list=PL_bDvITUYucAzkqeECqCqAf0GUGws6fYh) — ComputerVisionFoundation Videos · 7 videos · 0.4h across 7 episodes

**Watch only this:** Watch all 7 episodes, about 0.4 hours total — these short videos efficiently cover essential 3D reconstruction concepts relevant to monocular RGB input and geometry inference.

*Why it unblocks this paper:* The CVPR16: 3D Reconstruction playlist provides concise, focused explainers on key 3D reconstruction techniques, including neural regression forests and monocular depth estimation, giving a quick yet solid conceptual foundation for understanding the paper's core challenges and solutions.

*If you want all of it:* 0.4 hours across 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on reconstructing hand-held objects in 3D from images and videos, start by building foundational knowledge on neural implicit surface reconstruction, vision-language models for 3D perception, transformer models for 3D reconstruction, and temporal alignment techniques in video. These prerequisites provide the technical background on core representations, model architectures, and temporal consistency methods used in the paper. Finally, focus on the paper's core concept through the authors' own talk or closely related research talks to grasp the novel joint hand-object reconstruction approach and retrieval-augmented reconstruction method.

### Neural implicit surface reconstruction *(prerequisite)*
Neural implicit surfaces are the core geometric representation used in the paper to model hand and object shapes. Understanding recent advances in neural implicit representations and their application to 3D reconstruction will provide insight into how the paper models geometry efficiently and flexibly.

*How the paper uses it:* The paper represents hand and object geometry as neural implicit surfaces with occupancy, color, and segmentation.

▶ [Implicit Neural Representations: From Objects to 3D Scenes](https://www.youtube.com/watch?v=3uodIr6Ho24) — Andreas Geiger · 26:13 · 6y ago

### Vision-language models for 3D perception *(prerequisite)*
The paper leverages large vision-language models like GPT-4(V) to generate detailed object descriptions that guide 3D model retrieval. Understanding the capabilities and architecture of vision-language models in 3D perception contexts is essential to appreciate the retrieval-augmented reconstruction approach.

*How the paper uses it:* RAR uses GPT-4(V) to generate text descriptions that are passed to a text-to-3D generative model for object retrieval.

▶ [MedAI #134: Merlin: A Vision Language Foundation Model for 3D Computed Tomography | Ashwin Kumar](https://www.youtube.com/watch?v=XWmCkbpXOUw) — Stanford MedAI · 1:06:45 · 1y ago

### Transformer models for 3D reconstruction *(prerequisite)*
Transformers are the key architecture for the joint inference of hand and object geometry from monocular RGB images in the paper. Learning about transformer-based 3D reconstruction models will clarify the design choices and advantages of the MCC-HO model.

*How the paper uses it:* MCC-HO is a transformer-based model that jointly reconstructs hand and object geometry from a single RGB image and estimated 3D hand pose.

▶ [MVP Transformer for Large 3D Scene Recon](https://www.youtube.com/watch?v=VtMBV_h-11c) — AI Research Roundup · 4:57 · 10mo ago

### Temporal alignment and tracking in video *(prerequisite)*
Temporal alignment ensures consistent 3D reconstruction across video frames, a critical component for the paper's approach to handle videos. Understanding temporal alignment methods and algorithms like Viterbi will help grasp how the paper achieves temporal consistency.

*How the paper uses it:* The paper uses a Viterbi algorithm to optimize rigid alignment for temporal consistency in video frames.

▶ [Learning by Aligning Videos in Time (CVPR 2021)](https://www.youtube.com/watch?v=nXAo6Nt56HQ) — Retrocausal AI · 4:33 · 5y ago

### Reconstructing Hand-Held Objects in 3D from Images and Videos (Paper authors talk) *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insight into their novel method MCC-HO and the Retrieval-Augmented Reconstruction (RAR) approach. It covers the joint hand-object transformer model, the use of vision-language and 3D generative models, and temporal alignment strategies, giving a comprehensive understanding of their contributions and results.

*How the paper uses it:* This talk directly presents the paper's novel 3D reconstruction method and its evaluation on multiple datasets.

▶ [Reconstructing Hand-Held Objects from Monocular Video](https://www.youtube.com/watch?v=Xfkm7HP9OQA) — Di Huang · 4:51 · 3y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper on 3D reconstruction of hand-held objects from images and videos. We start with neural implicit surface reconstruction to grasp the core 3D representation, then cover vision-language models that enable the retrieval-augmented approach, followed by transformer models for 3D reconstruction architectures. Next, we explore temporal alignment techniques crucial for consistent video reconstruction, and finally, focus on the paper's core method combining retrieval and generative models to improve 3D shape accuracy.

### Neural implicit surface reconstruction *(prerequisite)*
Neural implicit surfaces represent 3D shapes as continuous functions, encoding geometry and appearance efficiently. This approach allows flexible, high-quality 3D reconstructions from images by learning occupancy and color fields without explicit meshes.

*How the paper uses it:* The paper models hand and object geometry as neural implicit surfaces with occupancy, color, and segmentation.

▶ [Implicit Neural Representations: From Objects to 3D Scenes](https://www.youtube.com/watch?v=3uodIr6Ho24) — Andreas Geiger · 26:13 · 6y ago

### Vision-language models for 3D perception *(prerequisite)*
Vision-language models connect images and text in a shared space, enabling AI to understand and describe visual content. These models can generate detailed textual descriptions from images, which can then guide 3D model retrieval or generation.

*How the paper uses it:* The paper uses GPT-4(V) to generate text descriptions of objects held in hands, enabling retrieval of 3D models.

▶ [Vision-Language Models A Gentle Introduction](https://www.youtube.com/watch?v=sIX9mY185_k) — TogoAI · 20:33 · 10mo ago

### Transformer models for 3D reconstruction *(prerequisite)*
Transformers process spatial and contextual information effectively, making them well-suited for inferring 3D geometry from images. They can jointly model complex relationships, such as between hands and objects, improving reconstruction accuracy.

*How the paper uses it:* MCC-HO is a transformer-based model jointly reconstructing hand and object geometry from monocular RGB images.

▶ [MVP Transformer for Large 3D Scene Recon](https://www.youtube.com/watch?v=VtMBV_h-11c) — AI Research Roundup · 4:57 · 10mo ago

### Temporal alignment and tracking in video *(prerequisite)*
Temporal alignment ensures that 3D reconstructions remain consistent across video frames by tracking objects and poses over time. Algorithms like Viterbi optimize alignment globally to maintain temporal coherence.

*How the paper uses it:* The paper uses a Viterbi algorithm combining Chamfer Distance and image feature similarity for temporally consistent alignment across video frames.

▶ [Temporal Concept Localization on Videos | Satya Krishna Gorti](https://www.youtube.com/watch?v=1DdjpKdn2Xo) — Towards Data Science · 23:44 · 6y ago

## Already in your library

- [Depth Anything V3 (DA3): 3D Reconstruction from Single or Multi Images](https://www.youtube.com/watch?v=INM0sqjRh3Y) — also for: HandMade: Spatial Prompting for Generative 3D Creation with Part-Labeled VR Sketches (Yotam I. Gingold)
- [Neural Implicit Representations for 3D Vision - Prof. Andreas ...](https://www.youtube.com/watch?v=-RsTgHlwhmw) — also for: TwinOR: Photorealistic Digital Twins of Dynamic Operating Rooms for Embodied AI Research (Mathias Unberath)
- [Computer Vision - Lecture 9.1 (Coordinate-based Networks ...](https://www.youtube.com/watch?v=r6n3tZJoTdI) — also for: Efficient Neural Representation of Volumetric Data using Coordinate-Based Networks (Sumanta N. Pattanaik)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)
- [Contrastive learning for Vision Language Models](https://www.youtube.com/watch?v=TJzu36kqwkE) — also for: Contrastive Action-Image Pre-training for Visuomotor Control (Jitendra Malik)
- [Vision Language Models (VLMs) Explained: The AI That Can Truly See!](https://www.youtube.com/watch?v=BJQkFnYR67w) — also for: BIV-Priv-Seg: Locating Private Content in Images Taken by People With Visual Impairments (Danna Gurari)
- [Let's train Vision Language Models (VLM) from scratch using just Text-Only LLMs!](https://www.youtube.com/watch?v=Oj27kALfvr0) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Vision Transformer](https://www.youtube.com/watch?v=vJF3TBI8esQ) — also for: Diffusion Transformers with Representation Autoencoders (Saining Xie)
- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformers in Deep Learning | Introduction to Transformers](https://www.youtube.com/watch?v=lRylkiFdUdk) — also for: You Only Need One Stage: Novel-View Synthesis From A Single Blind Face Image (Huiyuan Yang)
- [Stanford CS25: V3 I Retrieval Augmented Language Models](https://www.youtube.com/watch?v=mE7IDf2SmJg) — also for: Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding (Tinoosh Mohsenin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the paper "Reconstructing Hand-Held Objects in 3D from Images and Videos." The beginner project focuses on implementing a simplified neural implicit surface reconstruction from monocular images, the intermediate project reimplements the core MCC-HO transformer-based joint hand-object 3D reconstruction method on a public dataset, and the advanced project extends the Retrieval-Augmented Reconstruction (RAR) approach to improve robustness by integrating a feedback loop between retrieval and reconstruction stages.

### Beginner — Neural Implicit Surface Reconstruction from Single RGB Images
*Effort: a weekend, ~8 hours*

You build a simple neural implicit surface model that predicts occupancy and color from a single RGB image of a hand-held object, using a small synthetic or publicly available dataset. The project focuses on representing 3D geometry as an implicit function and visualizing the reconstructed surface.

**Why it shows you understood the paper:** This project demonstrates your grasp of neural implicit surface representation, a core geometric modeling technique used in MCC-HO, and your ability to process monocular RGB inputs for 3D reconstruction.

**Grounded in:** The paper states: "They represent geometry as a neural implicit surface with occupancy, color, and segmentation."

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Use a small synthetic dataset of single RGB images with corresponding 3D occupancy grids or meshes, or simulate data by rendering simple objects held by a hand model.

**Build it:**

1. Implement a neural network that takes a single RGB image and 3D query points as input and predicts occupancy values.
2. Train the model on the synthetic dataset to learn the implicit surface representation.
3. Visualize the reconstructed 3D surface using marching cubes or similar methods.
4. Add color prediction conditioned on the input image viewpoint.
5. Document the approach and results in the README.

**Ships as:** A GitHub repo with code to train and visualize a neural implicit surface model from single RGB images, including sample data and instructions.

**Stretch goal:** Add segmentation prediction to separate hand and object regions in the implicit representation.

### Intermediate — Reimplement MCC-HO Joint 3D Hand-Object Reconstruction
*Effort: 1-3 weekends, ~20 hours*

You reimplement the MCC-Hand-Object (MCC-HO) transformer-based model that jointly reconstructs 3D hand and object geometry from monocular RGB images and estimated 3D hand poses. You train and evaluate it on a public hand-object interaction dataset such as DexYCB, comparing reconstruction metrics like Chamfer Distance against a simple baseline (e.g., model-free reconstruction).

**Why it shows you understood the paper:** This project shows you can implement the paper's core method from its description, handle transformer architectures for 3D reconstruction, and evaluate on real datasets, demonstrating comprehension of the joint hand-object modeling and metric evaluation.

**Grounded in:** From the paper: "Given an RGB image and estimated 3D hand, we train a transformer-based model, MCC-Hand-Object (MCC-HO), that jointly infers 3D hand and object geometry."

**Tech stack:** Python 3.11, PyTorch, OpenCV, NumPy, DexYCB dataset

**Data:** Use the DexYCB dataset, a publicly available hand-object interaction dataset mentioned in the paper for evaluation.

**Build it:**

1. Implement the MCC-HO transformer architecture based on the paper's description.
2. Preprocess DexYCB images and estimated 3D hand poses for input.
3. Train the model to jointly reconstruct 3D hand and object geometry.
4. Implement Chamfer Distance and F-score metrics for evaluation.
5. Compare your model's performance against a simple baseline (e.g., direct depth estimation or model-free reconstruction).
6. Write a report summarizing results and insights.

**Ships as:** A GitHub repo with MCC-HO reimplementation code, training scripts on DexYCB, evaluation metrics, and a README with results and comparisons.

**Stretch goal:** Add temporal consistency by implementing a simple frame alignment method for video sequences.

### Advanced — Enhancing Retrieval-Augmented Reconstruction with Feedback Loop
*Effort: a few weeks, ~40+ hours*

You extend the Retrieval-Augmented Reconstruction (RAR) method by integrating a feedback mechanism between the 3D object retrieval and reconstruction stages to improve robustness when no close 3D match is found. This involves using a vision-language model to generate object descriptions, retrieving 3D models via a text-to-3D generative model, and iteratively refining retrieval based on reconstruction errors or alignment quality.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate on the retrieval and reconstruction pipeline, integrate large vision-language and generative models, and improve temporal consistency and reconstruction quality.

**Grounded in:** The paper notes: "RAR depends on the quality of 3D generative models and may fail if no close 3D match is found." and suggests "Incorporating feedback loops between retrieval and reconstruction stages to improve robustness."

**Tech stack:** Python 3.11, PyTorch, OpenCV, Transformers library, GPT-4(V) API or similar, Text-to-3D generative model API (e.g., Genie)

**Data:** Use video sequences from the HOI4D or 100DOH datasets (public or simulated) for testing temporal consistency and retrieval refinement.

**Build it:**

1. Implement the baseline RAR pipeline: generate text descriptions from images using a vision-language model and retrieve 3D object models via a text-to-3D generative model.
2. Implement rigid alignment of retrieved 3D models to inferred geometry using Chamfer Distance and image feature similarity.
3. Design and implement a feedback loop that evaluates reconstruction quality and updates the retrieval query or model selection accordingly.
4. Test the enhanced pipeline on video sequences to assess improvements in reconstruction accuracy and temporal consistency.
5. Document the methodology, experiments, and results.

**Ships as:** A GitHub repo with code for the enhanced RAR pipeline including feedback integration, example data, and a detailed README with experimental results and analysis.

**Stretch goal:** Incorporate physics-inspired constraints or contact modeling to further improve reconstruction realism.

_The paper's authors have not released code or datasets; all projects rely on public datasets or synthetic data and reimplementation from the paper's descriptions._
