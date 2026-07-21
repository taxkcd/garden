---
title: "032 · Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI — Meng Ye"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-deeptag-github-io"
source_hash: "8a9af728b41fab0282e5d21110e99b28fcce136877c2681be7134bae9c38fcf8"
sequence: 32
generator: "outreach-garden: managed (hand-enriched 2026-07-21)"
---

# 032 · Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI

## At a glance

- **Professor:** Meng Ye
- **Institution:** University of Texas at Arlington
- **Paper:** [Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI](https://arxiv.org/pdf/2411.15233)
- **Code / project page:** [github.com/DeepTag/VolumetricNeuralDeformableModels](https://github.com/DeepTag/VolumetricNeuralDeformableModels)
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

---

# Learning path (beginner-first, step-by-step)

> **How to use this.** I'm still building my AI/ML foundations, so this is ordered from the ground up. Climb the steps in order. You do **not** need to master the math — for each step the goal is to (a) recognize the idea when the professor says it, and (b) understand *how the paper uses it*. Each step has a plain-English explainer, one or two videos (⭐ = watch first, ➕ = optional/deeper), and a one-line link back to the paper. Total core time ≈ **3–4 hours**; the ⭐ "minimum path" at the bottom is ≈ **90 minutes**.
>
> Tip: watch at 1.25–1.5× speed, and after each video write yourself one sentence on what it was about. (The original pipeline-generated path is preserved lower down for reference.)

The big picture in one sentence: **the paper takes a few flat 2D MRI slices of a beating heart, and uses a transformer that works on 3D points to reconstruct the full 3D motion of the heart muscle.** Every step below is one piece of that sentence.

---

## Step 0 · What a neural network even is *(skip if comfortable)*

**Plain English:** A neural network is a stack of simple math functions that learns patterns from examples by adjusting internal numbers ("weights"). That's the entire foundation everything else sits on.

- ⭐ [But what *is* a neural network? — Deep learning Ch.1](https://www.youtube.com/watch?v=aircAruvnKk) — 3Blue1Brown · ~19 min · the single best beginner intro; visual, no jargon.
- ➕ [Neural Networks playlist](https://www.youtube.com/playlist?list=PLjUC8HjyxGTSrn4cZEw9Uw8R0STaRcbYY) — StatQuest with Josh Starmer · short episodes if you want more repetition on the basics.

*Why the paper needs it:* the whole method is a neural network that outputs heart-wall motion.

---

## Step 1 · Attention & Transformers — the engine of the paper

**Plain English:** "Attention" lets a model decide *which other pieces of the input each piece should look at*. A "Transformer" is a network built almost entirely out of attention. This is the most important concept in the whole paper, so spend the most time here.

- ⭐ [Transformers, the tech behind LLMs — Deep learning Ch.5](https://www.youtube.com/watch?v=wjZofJX0v4M) — 3Blue1Brown · ~27 min · what a transformer is, visually.
- ⭐ [Attention in transformers, step-by-step — Deep learning Ch.6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — 3Blue1Brown · the attention mechanism itself *(already in your library)*.
- ➕ [Visualizing transformers and attention (TNG Big Tech Day '24)](https://www.youtube.com/watch?v=KJtZARuO3JY) — Grant Sanderson · ~58 min · a slower, talk-style walkthrough of the same ideas.

> **Key sub-idea to lock in — self-attention vs. cross-attention** (the paper uses BOTH):
> - **Self-attention** = one set of things looks at *itself* (each element compares to every other element in the same set). The paper uses it to **refine** motion hints among the heart's own 3D points.
> - **Cross-attention** = one set of things looks at *a different set* (the query comes from set A, what it looks at comes from set B). The paper uses it to let 3D heart points **pull in information from** the 2D image cues.
>
> If you can say this difference out loud, you've understood the core of his architecture.

*Why the paper needs it:* the "hybrid point transformer" = cross-attention (fuse 2D cues → 3D hints) + self-attention (refine hints → dense 3D motion).

---

## Step 2 · Working with 3D points (point clouds)

**Plain English:** Instead of a grid of pixels, you can represent a 3D shape as a cloud of points in space. Special networks process these point sets directly. The paper treats the heart wall as points and predicts a motion vector for each.

- ⭐ [PointNet — Applied Deep Learning, Lecture 43](https://www.youtube.com/watch?v=hgtvli571_U) — Maziar Raissi · ~10 min · the foundational "deep learning on point sets" idea, short and clear.

*Why the paper needs it:* the transformer operates on **points** on the heart wall, not on image pixels — that's why it's a *point* transformer.

---

## Step 3 · Deformable models — shapes that bend

**Plain English:** A "deformable model" is a shape you can bend/stretch by changing a few parameters. A *neural* deformable model uses a network to predict how to bend it. The paper's υNDM bends a heart-shaped model to match the observed motion, using a **global** part (overall size/twist/squeeze) plus a **local** part (fine detail).

- ⭐ [Deformable Convolutional Networks (ICCV'17)](https://www.youtube.com/watch?v=HRLMSrxw2To) — CVF · ~12 min · gentle intuition for "learnable deformation" in networks.
- ➕ [3D Deep Deformable Generative Mesh Models (3DGV Talk, Lin Gao)](https://www.youtube.com/watch?v=-0WpU5_vN5A) — 3DGV Seminar · long (1h53m); skim the first ~20 min only if you want more depth on deforming 3D shapes.

*Why the paper needs it:* υNDM = **v**olumetric **n**eural **d**eformable **m**odel — a heart model the network learns to deform.

---

## Step 4 · Image registration & "diffeomorphic" deformation

**Plain English:** *Registration* = warping one image/shape so it lines up with another. *Diffeomorphic* is a fancy word for a warp that is **smooth and never tears or folds** — physically realistic for living tissue. The paper constrains its local deformation to be diffeomorphic so the recovered heart motion stays physically plausible.

- ⭐ [Deformable Image Registration: The Old and New Paradigms](https://www.youtube.com/watch?v=z-G5ro_7o1Q) — Qian Tao · best single overview connecting classic and deep-learning registration.
- ➕ [Image Registration — Part 3: Non-Linear Registration](https://www.youtube.com/watch?v=F_tAc3UP88k) — DIPY · ~12 min · more technical; watch only if Step 4 still feels fuzzy.

*Why the paper needs it:* the **local** deformation field is a **diffeomorphic** point flow — smooth, invertible, realistic.

---

## Step 5 · The medical side — cardiac MRI & tagged MRI

**Plain English:** MRI scans the heart in thin 2D slices. *Tagged* MRI paints a grid of dark stripes onto the heart muscle; as the heart beats, the stripes move with the tissue, so you can *see* the muscle deform. Terms to know: **myocardium** = heart-muscle wall; **LV / RV** = left / right ventricle; **ED** = end-diastole (heart full/relaxed); **ES** = end-systole (heart contracted/empty). Motion is measured from ED to ES.

- ⭐ [Cardiac MRI: Basic Principles (Dipan Shah, MD)](https://www.youtube.com/watch?v=bB4GpUGgSW4) — Houston Methodist DeBakey CV Education · ~52 min · clinician-friendly; the first ~20 min is enough for the basics.

*Why the paper needs it:* multi-planar **tagged MRI** is the input; its stripes give the sparse **2D apparent motion cues** the method starts from.

---

## Step 6 · The closest published work to this paper

**Plain English:** Another recent method that also recovers 3D motion from tagged MRI — useful to see the problem "in the wild" and to understand what the professor's method improves on.

- ⭐ [DRIMET: Deep Registration-based 3D Incompressible Motion Estimation in Tagged-MRI](https://www.youtube.com/watch?v=R1McZ5FPpyA) — IACL JHU · ~14 min · same problem family, different approach.

*Why it helps:* gives you a comparison point so you can ask, "how does your υNDM improve over registration-based motion estimation like DRIMET?"

---

## Step 7 · Now read the paper itself

With Steps 1–6 done, do this in order:
1. Read the **abstract** + look at **Figure 1** (the heart model + imaging planes).
2. Skim the **method** section — just match each part to a step above (transformer → Step 1, points → Step 2, deformable model → Step 3, diffeomorphic → Step 4).
3. Read the **limitations / future work**.

**Say this sentence out loud until it's yours:**
> *"You represent the heart with a global-plus-local deformable model, and use a point transformer where cross-attention fuses the multi-planar 2D cues and self-attention refines them into dense 3D motion."*

**The one weakness to discuss:** training/evaluation uses a **synthetic** dataset, with motion generated by interpolating between the ED and ES phases. Real patients have irregular, pathological motion that interpolation may not capture — this is the single best thing to ask him about.

---

## ⏱️ Minimum path (~90 min if short on time)

1. ⭐ [Transformers, the tech behind LLMs](https://www.youtube.com/watch?v=wjZofJX0v4M) (Step 1)
2. ⭐ [Attention, step-by-step](https://www.youtube.com/watch?v=eMlx5fFNoYc) (Step 1) — *and* nail self- vs cross-attention
3. ⭐ [PointNet](https://www.youtube.com/watch?v=hgtvli571_U) (Step 2)
4. ⭐ [Deformable Convolutional Networks](https://www.youtube.com/watch?v=HRLMSrxw2To) (Step 3)
5. ⭐ [Cardiac MRI: Basic Principles](https://www.youtube.com/watch?v=bB4GpUGgSW4) — first 20 min (Step 5)

Then read the abstract (Step 7).

---

## 📖 One-line glossary

| Term | Plain English |
|---|---|
| Myocardium | The heart-muscle wall |
| LV / RV | Left / right ventricle (heart chambers) |
| ED / ES | End-diastole (full) / end-systole (contracted) |
| Tagged MRI | MRI with a stripe grid painted on the muscle so you can see it move |
| Apparent motion | The 2D motion you can see on one flat slice (a shadow of the real motion) |
| True motion | The full 3D motion of the tissue |
| Point cloud | A shape represented as a set of 3D points |
| Attention | A model deciding which parts of the input to focus on |
| Self- / cross-attention | Attending within one set / from one set to another set |
| Deformable model | A shape you bend by adjusting parameters |
| Diffeomorphic | A smooth warp that never tears or folds (realistic) |
| υNDM | Volumetric Neural Deformable Model (the paper's method) |

---

## 🎯 Talking points for the meeting

- **Show you read it:** say the one-sentence summary above.
- **Ask a real question:** "How do you plan to bridge from synthetic training data to real patient data with pathological, irregular motion?"
- **Ask about direction:** "For a student joining now — is the next step extending this to real clinical data, or applying the υNDM idea to other organs?"
- **Be honest about level:** "I understand attention and the encoder–decoder idea well; the diffeomorphic and deformable-model parts are newer to me and I'm actively working through them." Honesty + visible effort beats bluffing.

---

# Original auto-generated learning path (preserved)

*The section below is the untouched output from the outreach pipeline, kept for reference. The beginner-first path above reorders and supplements it with more accessible sources.*

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

---

*Learning path hand-enriched on 2026-07-21 for step-by-step study before the meeting. The beginner-first path adds more accessible sources; the original auto-generated path is preserved above for reference.*
