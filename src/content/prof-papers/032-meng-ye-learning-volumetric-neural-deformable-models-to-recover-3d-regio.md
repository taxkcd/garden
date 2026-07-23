---
title: "032 · Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI — Meng Ye"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-deeptag-github-io"
source_hash: "e4f54cb43ee6edb6818511744ac2ac51365a7cc77b7b09d7246f494d9052dbf5"
sequence: 32
generator: "outreach-garden: managed"
---

# 032 · Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI

## At a glance

- **Professor:** Meng Ye
- **Institution:** University of Texas at Arlington
- **Paper:** [Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI](https://arxiv.org/pdf/2411.15233)
- **Authors:** Meng Ye, Bingyu Xin, Bangwei Guo, Leon Axel, Dimitris Metaxas
- **Year:** 2024

## Paper overview

This paper presents a novel deep learning method that recovers the three-dimensional motion of the heart wall from two-dimensional tagged MRI images taken from multiple planes. The method uses volumetric neural deformable models combined with a hybrid point transformer network to accurately estimate dense 3D heart wall motion from sparse 2D motion cues, overcoming challenges of incomplete sampling and complex motion patterns.

### Why it matters

**Research problem:** Accurately recovering the 3D true motion of the myocardial wall from multi-planar 2D tagged MRI images is challenging due to sparse and incomplete apparent motion cues and difficulty in fusing information from orthogonal imaging planes.

**Why it matters:** Precise 3D heart wall motion estimation is critical for assessing cardiac function and diagnosing heart diseases. Current methods are time-consuming, prone to suboptimal convergence, and often fail to capture detailed local motion such as twisting, limiting clinical utility.

**Key contributions:**

- Introduction of learnable volumetric neural deformable models (υNDMs) to recover 3D true heart wall motion from 2D apparent motion cues.
- Development of a simulation framework to synthesize complex 3D heart wall geometry and motion over a cardiac cycle with known ground truth for training and evaluation.
- Design of a novel hybrid point transformer architecture combining point cross-attention and self-attention to effectively fuse sparse multi-planar motion cues into dense 3D motion.
- Demonstration of superior accuracy and efficiency compared to state-of-the-art iterative meshless deformable models and prior neural deformable models.

## About the professor

**Meng Ye** — Assistant Professor, Computer Science and Engineering, University of Texas at Arlington.

Research interests: novel AI methods of Computing, Learning, Imaging and Modeling for Biomedicine, with a special interest in the human heart

### Research links

- [Faculty/profile page](https://deeptag.github.io)

## Learning path

To deeply understand the paper on volumetric neural deformable models for 3D heart wall motion recovery, start by building foundational knowledge on diffeomorphic deformation fields and point transformer networks, which are key mathematical and architectural components of the method. Then, gain context on 3D cardiac motion estimation from MRI to appreciate the clinical and technical challenges. Finally, focus on the paper's core contribution by reviewing the authors' own talk or closely related advanced presentations on neural deformable models.

## Recommended videos (in order)

### Diffeomorphic deformation fields lecture *(prerequisite)*
Diffeomorphic deformation fields provide the mathematical foundation for modeling smooth, invertible local deformations critical to representing realistic heart wall motion. Understanding these concepts is essential to grasp how the paper models local deformations in a physically plausible manner.

*How the paper uses it:* The paper uses a diffeomorphic local deformation field to represent heart wall motion.

▶ [Image Registration - Part 3 - Non Linear Registration](https://www.youtube.com/watch?v=F_tAc3UP88k) — Diffusion Imaging in Python - DIPY · 11:40

### Point transformer networks seminar *(prerequisite)*
Point transformer networks are advanced architectures that enable effective fusion of sparse 2D motion cues into dense 3D motion representations. A seminar-level talk on transformer networks will help understand the hybrid point transformer design used in the paper.

*How the paper uses it:* The hybrid point transformer network is central to fusing sparse multi-planar motion cues into dense 3D motion.

▶ [Neural Networks Architecture Seminar. Lecture 6: Transformer Networks](https://www.youtube.com/watch?v=qqUEA_tGE0g) — Pablo Duboue · 52:54 · 3 years ago

### 3D cardiac motion estimation from MRI conference *(prerequisite)*
This concept provides clinical and technical context on the challenges of recovering heart wall motion from MRI data. Understanding these challenges clarifies the motivation and significance of the paper's contributions.

*How the paper uses it:* The paper addresses challenges in 3D heart wall motion recovery from multi-planar tagged MRI.

▶ [DRIMET: Deep Registration-based 3D Incompressible Motion Estimation in Tagged-MRI with Applicatio...](https://www.youtube.com/watch?v=R1McZ5FPpyA) — IACL JHU · 13:31 · 3 years ago

### Neural deformable models lecture
Neural deformable models are the core methodological framework for representing deformable 3D shapes and motions with neural networks. A detailed lecture on this topic will deepen understanding of the paper's volumetric neural deformable models.

*How the paper uses it:* The paper introduces volumetric neural deformable models (υNDMs) for 3D heart wall motion recovery.

▶ [3DGV Talk ---  Lin Gao: 3D Deep Deformable Generative Mesh Models with Geometry and Texture](https://www.youtube.com/watch?v=-0WpU5_vN5A) — 3DGV Seminar · 1:53:00 · Streamed 4 years ago

## Already in your library

- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
