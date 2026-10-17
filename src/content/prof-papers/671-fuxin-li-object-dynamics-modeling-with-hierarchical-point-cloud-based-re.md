---
title: "671 · Object Dynamics Modeling with Hierarchical Point Cloud-based Representations — Fuxin Li"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fuxin-li"
source_hash: "15efc5f0d4068bbce2c512d463ba387ecbdd14f82d5f7aac6acf76d6ede6bf3d"
sequence: 671
generator: "outreach-garden: managed"
---

# 671 · Object Dynamics Modeling with Hierarchical Point Cloud-based Representations

## At a glance

- **Professor:** Fuxin Li
- **Institution:** Oregon State University
- **Paper:** [Object Dynamics Modeling with Hierarchical Point Cloud-based Representations](https://arxiv.org/pdf/2404.06044)
- **Authors:** Chanho Kim, Fuxin Li
- **Year:** 2024

## Paper overview

This paper presents a novel neural network architecture that models the physical dynamics of objects using 3D point cloud data. It introduces a U-Net style network with continuous point convolutions that capture both within-object and between-object interactions, improving the prediction of object movements and collisions in 3D space. The approach outperforms existing graph neural network methods, especially in scenarios involving gravity and collisions.

### Why it matters

**Research problem:** How to effectively model and predict object dynamics and collisions in 3D space using neural networks, leveraging geometric information from point clouds or meshes to improve physical simulation accuracy.

**Why it matters:** Accurate physical dynamics modeling is crucial for applications like robotics, where understanding object interactions and collisions enables better planning and manipulation. Traditional physics simulators struggle with generalization to real sensory inputs, and prior learning-based methods have limitations in handling complex 3D interactions and long-range forces.

**Key contributions:**

- Introduction of Object PointConv and Relational PointConv layers tailored for modeling within-object and between-object physical interactions.
- Development of a hierarchical U-Net architecture using continuous point convolutions for efficient multi-scale feature learning in 3D object dynamics.
- Extension of PointConv to handle mesh inputs by interpolating features at dynamically selected interaction points on mesh faces for improved collision reasoning.
- Demonstration of superior performance over state-of-the-art graph neural network methods on benchmarks involving rigid and non-rigid object dynamics.

## About the professor

**Fuxin Li** — Professor, Electrical Engineering and Computer Science, Oregon State University.

Research interests: Computer vision, explainable machine learning, deep learning

### Research links

- [Faculty/profile page](https://engineering.oregonstate.edu/about/people/fuxin-li)
- [Identity evidence](http://eecs.oregonstate.edu/people/li-fuxin)
- [Professor website](https://web.engr.oregonstate.edu/~lif/)
- [Resolved homepage](https://web.engr.oregonstate.edu/~lif/#content)
- [Lab website](https://mime.engineering.oregonstate.edu/research/drl/)
- [Google Scholar](https://scholar.google.com/citations?user=snDpfA0AAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/fuxin-li-2b762a10/)
- [Social profile](https://x.com/fuxinli2)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** 3D deep learning on point clouds
**The paper assumes:** deep learning on 3D point clouds, point cloud convolutional networks, neural network architectures for geometric data
**Already in this field?** Skip this entirely if you already understand neural network methods for processing 3D point clouds and continuous convolution operations on irregular geometric data.

To understand the hierarchical PointConv U-Net architecture for modeling object dynamics from 3D point clouds, it is essential to grasp how deep learning operates on irregular 3D data like point clouds, including convolution adaptations and multi-scale feature learning. The rigorous course offers a comprehensive university-level treatment of 3D data representations and point cloud encoders, while the fast track provides a concise, intuition-focused series on point cloud object detection and recognition, suitable for quickly building foundational understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Machine Learning for 3D Data Fall 2023 KAIST CS479](https://www.youtube.com/playlist?list=PLPnHA108gNjXD-pZvP8PWT5daDtiMjnAx) — Coder Study AI · 18 videos · 22.5h across 18 episodes

**Watch only this:** Lectures 2, 3 (3D Representations), Lectures 5 and 6 (Point Cloud Encoders), and Lecture 19 (Rotation Invariance/Equivariance) — about 6 hours total. These cover the core concepts of 3D data formats, point cloud neural networks, and relevant invariances.

*Why it unblocks this paper:* This KAIST CS479 Fall 2023 course covers 3D representations and point cloud encoders in detail, including lectures specifically on point cloud encoders and multi-scale feature learning, directly relevant to understanding PointConv layers and the hierarchical U-Net architecture in the paper.

*If you want all of it:* 22.5 hours across all 18 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Object detection Point Clouds](https://www.youtube.com/playlist?list=PLLFPvsbqobGw3VOMySufB3wLs-rPPVUPy) — Junzhe Shen (Howard) · 15 videos · 3.2h across 15 episodes

**Watch only this:** Episodes 1 (Object Recognition from Point Clouds Using Deep Learning), 2 (Point Cloud Processing and Object Recognition), and 8 (PointNet: Deep Learning on Point Sets for 3D Classification and Segmentation) — about 36 minutes total. These cover the basics of point cloud deep learning and key architectures.

*Why it unblocks this paper:* This short-form playlist by Junzhe Shen (Howard) provides clear, concise explanations of point cloud processing and object recognition using deep learning, including foundational concepts and practical examples, ideal for quickly grasping the essentials behind point cloud neural networks and their applications.

*If you want all of it:* 3.2 hours across all 15 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on Object Dynamics Modeling with Hierarchical Point Cloud-based Representations, start by building a strong foundation in 3D point cloud deep learning and graph neural networks for physical simulation, as these are key prior methods and data modalities the paper builds upon and compares against. Next, study hierarchical U-Net architectures to grasp the multi-scale feature learning design central to the model. Finally, focus on the core concept of point convolutional networks, which are the novel operators introduced by the authors, and conclude with the authors' own talk or the closest available advanced lecture to see their approach in context.

### 3D point cloud deep learning *(prerequisite)*
Understanding how raw 3D data such as point clouds are processed by deep learning models is fundamental to grasping the paper's input representation and feature extraction methods. This includes learning about challenges with irregular data formats and how neural networks can be designed to handle them effectively.

*How the paper uses it:* The paper models object dynamics directly from 3D point clouds, so foundational knowledge of point cloud deep learning is essential.

▶ ["Deep Learning on Meshes and Point Clouds" by Ruben Wiersma](https://www.youtube.com/watch?v=ZE5Y8nD42v8) — Symposium on Geometry Processing 2025 · 1:14:57 · 1y ago

### Graph neural networks for physical simulation *(prerequisite)*
Graph neural networks have been the prior state-of-the-art for modeling physical interactions and dynamics, serving as a baseline and comparison point for the paper's proposed PointConv approach. Understanding GNN-based simulators clarifies the limitations the paper aims to overcome.

*How the paper uses it:* The paper outperforms GNN-based simulators like SGNN, so understanding these methods is critical for appreciating the contributions.

▶ [Tobias Pfaff (DeepMind): Learning to Simulate Complex Physics with Graph Networks](https://www.youtube.com/watch?v=8v27_jzNynM) — Build w Agents - Aggregate Intellect - AI.SCIENCE · 54:04 · Streamed 6y ago

### Hierarchical U-Net architectures *(prerequisite)*
The hierarchical U-Net design enables multi-scale feature learning and long-range interaction modeling, which are key architectural elements in the paper's network. Familiarity with U-Net helps in understanding the encoder-decoder structure and skip connections used.

*How the paper uses it:* The paper proposes a hierarchical U-Net architecture with PointConv layers for efficient multi-scale learning of object dynamics.

▶ [Lec 42: U-Net: Convolutional Networks for Image Segmentation](https://www.youtube.com/watch?v=szZ71VTLB-U) — NPTEL IIT Guwahati · 25:13 · 3y ago

### PointConv neural networks
PointConv layers are the core novel operators introduced in the paper, enabling continuous convolution on point clouds that capture geometric relationships multiplicatively. Understanding convolution operations and their adaptation to point clouds is crucial to grasping the paper's method.

*How the paper uses it:* The paper's key contribution is the design of Object PointConv and Relational PointConv layers for modeling within- and between-object interactions.

▶ [Lecture 12: Convolutional Networks IV](https://www.youtube.com/watch?v=wXpFZIEGVMc) — Carnegie Mellon University Deep Learning · 1:21:42 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on modeling object dynamics with hierarchical point cloud representations, start by learning how 3D point cloud data is processed with deep learning, which is fundamental to the paper's input representation. Next, grasp graph neural networks for physical simulation to appreciate prior methods the paper improves upon. Then, study hierarchical U-Net architectures to understand the multi-scale feature learning backbone. Finally, learn about PointConv neural networks, the core method enabling the paper's novel continuous convolution operations on point clouds for dynamics modeling.

### 3D point cloud deep learning *(prerequisite)*
3D point clouds are sets of points representing object surfaces in space. Deep learning on point clouds involves specialized neural networks that can handle their irregular, unordered nature to extract meaningful geometric features. Understanding this is essential to grasp how the paper processes raw 3D data for dynamics modeling.

*How the paper uses it:* The paper uses point cloud data as input and builds on deep learning methods specialized for 3D point clouds to model object geometry and dynamics.

▶ ["Deep Learning on Meshes and Point Clouds" by Ruben Wiersma](https://www.youtube.com/watch?v=ZE5Y8nD42v8) — Symposium on Geometry Processing 2025 · 1:14:57 · 1y ago

### Graph neural networks for physical simulation *(prerequisite)*
Graph neural networks (GNNs) model physical systems by representing objects and their interactions as nodes and edges in a graph, enabling learning of dynamics and collisions. They are the prior state-of-the-art for physical simulation, providing a baseline to compare against.

*How the paper uses it:* The paper outperforms existing GNN-based simulators by using point cloud convolutions instead of graph message passing for better geometric reasoning.

▶ [Tobias Pfaff (DeepMind): Learning to Simulate Complex Physics with Graph Networks](https://www.youtube.com/watch?v=8v27_jzNynM) — Build w Agents - Aggregate Intellect - AI.SCIENCE · 54:04 · Streamed 6y ago

### Hierarchical U-Net architectures *(prerequisite)*
U-Net architectures use encoder-decoder structures with skip connections to capture multi-scale features efficiently. Hierarchical U-Nets extend this idea to process data at multiple resolutions, crucial for modeling both local and global interactions.

*How the paper uses it:* The paper designs a hierarchical U-Net with downsampling and upsampling of point clouds to capture multi-scale object dynamics and long-range interactions.

▶ [U-NET Paper Walkthrough](https://www.youtube.com/watch?v=oLvmLJkmXuc) — Aladdin Persson · 19:55 · 5y ago

### PointConv neural networks
PointConv is a convolution operation adapted for point clouds that generates convolution weights based on relative point coordinates, enabling continuous convolution on irregular 3D data. This allows the network to learn geometric relationships more effectively than traditional graph message passing.

*How the paper uses it:* The paper introduces Object PointConv and Relational PointConv layers to model within-object and between-object physical interactions using continuous point convolutions.

▶ [Introduction to Convolution Operation](https://www.youtube.com/watch?v=_HATc2zAhcY) — Neso Academy · 30:42 · 9y ago

## Already in your library

- [Convolutional Neural Networks | CNN | Kernel | Stride | Padding | Pooling | Flatten | Formula](https://www.youtube.com/watch?v=Y1qxI-Df4Lk) — also for: FHEON: A Configurable Framework for Developing Privacy-Preserving Encrypted Neural Networks (Michel A. Kinsy)
- [But what is a convolution?](https://www.youtube.com/watch?v=KuXjwB4LzSA) — also for: A Novel Deep Neural Network for Robust Detection of Seizures Using EEG Signals (Wenbing Zhao)
- [Convolutional Neural Networks Explained (CNN Visualized)](https://www.youtube.com/watch?v=pj9-rr1wDhM) — also for: An Integrated Deep Learning and Dynamic Programming Method for Predicting Tumor Suppressor Genes, Oncogenes, and Fusion from PDB Structures (Chee-Hung Henry Chu)
- [But what is a neural network? | Deep learning chapter 1](https://www.youtube.com/watch?v=aircAruvnKk) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [An Introduction to Graph Neural Networks: Models and ...](https://www.youtube.com/watch?v=zCEYiCxrL_0) — also for: Fairness-Aware Graph Representation Learning with Limited Demographic Information (Wenbin Zhang)
- [2021 | Lecture 6.1 - Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=F3PgltDzllc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Stanford CS224W: Machine Learning w/ Graphs I 2023 I Graph Neural Networks](https://www.youtube.com/watch?v=ZfK4FDk9uy8) — also for: Extracting default mode network based on graph neural network for resting state fMRI study (D. Wang)
- [Graph Neural Networks - a perspective from the ground up](https://www.youtube.com/watch?v=GXhBEj1ZtE8) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [An Introduction to Graph Neural Networks](https://www.youtube.com/watch?v=aFnHYEv71U4) — also for: A Survey of AI-Based Anomaly Detection in IoT and Sensor Networks (Marco Álvarez)
- [Message Passing: How Graph Neural Networks Actually Work](https://www.youtube.com/watch?v=1DmNdMUbDkg) — also for: Bayesian Neighborhood Adaptation for Graph Neural Networks (Rui Li)
- [Deep Learning 59: Fundamentals of Graph Neural Network](https://www.youtube.com/watch?v=1miz7yggcTg) — also for: Extracting default mode network based on graph neural network for resting state fMRI study (D. Wang)
- [225 - Attention U-net. What is attention and why is it needed for U-Net?](https://www.youtube.com/watch?v=KOF38xAvo8I) — also for: Unified Local and Global Attention Interaction Modeling for Vision Transformers (Corey Toler-Franklin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and implement key ideas from the paper "Object Dynamics Modeling with Hierarchical Point Cloud-based Representations." Starting with a small-scale reproduction of the PointConv operator on point cloud data, you then build a hierarchical U-Net model for 3D object dynamics prediction on a public dataset, and finally extend the method to incorporate rotation-equivariant features to address a stated limitation of the paper.

### Beginner — Implement PointConv on Synthetic 3D Point Clouds
*Effort: a weekend, ~8 hours*

You build a simplified implementation of the PointConv operator described in the paper, applying it to synthetic 3D point cloud data representing simple objects (e.g., spheres or cubes). You visualize the learned convolution weights and demonstrate how PointConv captures local geometric relationships better than a basic MLP or standard convolution.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of PointConv layers, how continuous convolution weights are generated from relative point coordinates, and why this improves geometric feature learning over traditional graph message passing.

**Grounded in:** Section 3.2 explains PointConv generates weights from relative coordinates, enabling better geometric feature learning than GNNs with positional embeddings.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib

**Data:** Synthetic 3D point clouds generated programmatically (e.g., points sampled on sphere and cube surfaces).

**Build it:**

1. Generate synthetic 3D point clouds for simple shapes like spheres and cubes.
2. Implement the PointConv operator that computes convolution weights from relative coordinates and applies them to point features.
3. Compare PointConv outputs to a baseline MLP applied to point features without geometric weighting.
4. Visualize learned weights and feature maps to illustrate geometric sensitivity.

**Ships as:** A GitHub repo with code implementing PointConv on synthetic point clouds, visualizations of learned weights, and a README explaining the operator and its benefits.

**Stretch goal:** Add a simple within-object vs. between-object interaction distinction by grouping points into two objects and applying separate PointConv layers.

### Intermediate — Hierarchical PointConv U-Net for 3D Object Dynamics Prediction
*Effort: 2 weekends, ~20 hours*

You reimplement the hierarchical U-Net architecture with Object PointConv and Relational PointConv layers to predict object dynamics from 3D point clouds. You train and evaluate your model on a publicly available substitute dataset of 3D object interactions (e.g., a simplified physics simulation dataset with rigid bodies). You compare your results against a simple graph neural network baseline and report Euclidean distance error metrics.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core architecture and training pipeline, understand hierarchical multi-scale feature learning, and reproduce the key result that PointConv layers outperform GNN message passing in physical simulation tasks.

**Grounded in:** The hierarchical U-Net architecture enables efficient long-range interaction modeling (Section 3.5 and Figure 3). Ablation studies confirm PointConv layers outperform GNN message passing within the same U-Net architecture (Table 2).

**Tech stack:** Python 3.11, PyTorch, NumPy, SciPy, Matplotlib

**Data:** A publicly available 3D rigid body physics simulation dataset (e.g., a subset of the Kubric dataset or a synthetic dataset you generate simulating rigid object collisions).

**Build it:**

1. Implement Object PointConv and Relational PointConv layers based on the paper's descriptions.
2. Build a hierarchical U-Net architecture with downsampling and upsampling point cloud layers.
3. Prepare or generate a dataset of 3D object point clouds with ground truth dynamics (positions/velocities).
4. Train the model to predict object dynamics and evaluate using Euclidean distance error.
5. Implement a simple GNN baseline for comparison and report relative performance.

**Ships as:** A GitHub repo with the full training and evaluation pipeline, model code, baseline comparison, and a README documenting the architecture, dataset, and results.

**Stretch goal:** Incorporate mesh-based collision reasoning by interpolating features at interaction points on mesh faces for improved collision prediction.

### Advanced — Rotation-Equivariant Extension of PointConv for Robust Object Dynamics
*Effort: 3+ weeks*

You extend the PointConv U-Net architecture to incorporate rotation-equivariant features, addressing a limitation noted in the paper. You implement rotation-equivariant convolutions or feature representations compatible with PointConv, retrain the model on the intermediate project's dataset, and evaluate robustness to object orientation changes. You analyze performance improvements and discuss computational trade-offs.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future directions, ability to research and implement advanced equivariant neural network techniques, and skill in extending state-of-the-art architectures to improve robustness in 3D physical simulation.

**Grounded in:** Rotation equivariance is not addressed in this work but could be incorporated in future extensions (Limitations and Future Directions).

**Tech stack:** Python 3.11, PyTorch, e3nn or similar equivariant neural network library, NumPy, SciPy

**Data:** Same dataset as intermediate project, with additional data augmentation to test rotation robustness.

**Build it:**

1. Research rotation-equivariant neural network methods compatible with point cloud convolutions.
2. Implement rotation-equivariant feature representations or convolution layers integrated into PointConv.
3. Modify the hierarchical U-Net architecture to use these equivariant layers.
4. Augment training data with random rotations and retrain the model.
5. Evaluate model robustness to rotations and compare to the baseline PointConv U-Net.
6. Analyze computational cost and accuracy trade-offs.

**Ships as:** A GitHub repo with the extended rotation-equivariant PointConv U-Net implementation, training scripts, evaluation results demonstrating improved rotation robustness, and a detailed README discussing the approach and findings.

**Stretch goal:** Explore optimization strategies to improve inference speed of the rotation-equivariant model without sacrificing accuracy.
