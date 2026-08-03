---
title: "135 · Dream Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes — Julian Togelius"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-julian-togelius"
source_hash: "1b6d25e24ef4d144691e7e5ab9b044dd98ea4d1b64782f246fe73fe1eb3eea47"
sequence: 135
generator: "outreach-garden: managed"
---

# 135 · Dream Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes

## At a glance

- **Professor:** Julian Togelius
- **Institution:** New York University
- **Paper:** [Dream Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes](https://arxiv.org/pdf/2604.22847)
- **Authors:** Tim Merino, Sam Earle, Julian Togelius, Ryunosuke Iwai, Edoardo Cetin
- **Year:** 2026

## Paper overview

This paper introduces Dream-Cubed, a massive dataset of Minecraft worlds at the block level, and presents new 3D diffusion models that generate Minecraft terrain and structures directly as blocks. The models support interactive editing like inpainting and outpainting, enabling controllable and playable 3D world generation. The authors release the dataset, code, and pretrained models to foster future research.

### Why it matters

**Research problem:** Generating large-scale, semantically meaningful, and controllable 3D interactive environments like Minecraft worlds is challenging due to the discrete, compositional nature of blocks and the lack of large-scale datasets and benchmarks for block-level world generation.

**Why it matters:** Minecraft is the best-selling video game and a popular research testbed for AI agents and world modeling. Efficient and controllable generation of Minecraft worlds can enable new creative tools, adaptive game content, and advance AI understanding of complex 3D environments.

**Key contributions:**

- Release of Dream-Cubed, a large-scale, biome-labeled Minecraft block-resolution dataset with procedural and human-authored content.
- First large-scale study of 3D diffusion models for voxel/block-level generation in Minecraft, comparing discrete masked diffusion and continuous DDPM approaches.
- Adaptation of the Fréchet Inception Distance (FID) metric for evaluating semantic differences between real and generated Minecraft world renderings.
- Demonstration of controllable generation workflows including inpainting, outpainting, biome blending, and user-authored block conditioning directly in block space.
- Release of full dataset, code, and pretrained models under an open-source license to support future research.

## About the professor

**Julian Togelius** — Professor, Computer Science and Engineering, New York University.

Research interests: AI, player modelling, procedural content generation, automatic game design, believable bot behaviour, coevolution, neuroevolution, cybersecurity, emerging media, genetic programming and monte carlo tree search

### Research links

- [Faculty/profile page](http://engineering.nyu.edu/people/julian-togelius)
- [Professor website](http://engineering.nyu.edu/faculty/julian-togelius)
- [Resolved homepage](https://engineering.nyu.edu/faculty/julian-togelius)
- [Lab website](http://game.engineering.nyu.edu/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Dream Cubed paper, start with foundational knowledge on diffusion probabilistic models, which underpin the generative techniques used. Then, build on this by studying discrete masked diffusion, the key innovation enabling controllable generation modes in the paper. Next, explore 3D diffusion models for voxel generation to grasp the application of diffusion in 3D block-based environments. Finally, focus on the core concept of the paper by reviewing the authors' own talk to gain direct insights into their dataset, models, and contributions.

### Diffusion probabilistic models *(prerequisite)*
Diffusion probabilistic models (DDPMs) form the theoretical foundation for the generative modeling approaches used in Dream Cubed. Understanding their iterative denoising process and probabilistic formulation is essential before delving into discrete or 3D diffusion variants.

*How the paper uses it:* The paper uses continuous DDPM models as one of the two main generative approaches for Minecraft world generation.

▶ [MIT 6.S192 - Lecture 22: Diffusion Probabilistic Models ...](https://www.youtube.com/watch?v=XCUlnHP1TNM) — Nick Ali Jahanian · 1:01:33

### Discrete masked diffusion *(prerequisite)*
Discrete masked diffusion extends diffusion modeling to discrete token spaces, enabling exact inpainting and block-level conditioning. This concept is critical to understanding the controllable generation modes demonstrated in the paper.

*How the paper uses it:* The paper's MD4 masked diffusion model leverages discrete masked diffusion to support controllable generation such as inpainting and block conditioning.

▶ [CMU 10799 S26: Lecture 12 - Discrete Diffusion & Masked ...](https://www.youtube.com/watch?v=mXEjZblUBPs) — Kelly He · 1:06:47

### 3D diffusion models for voxel generation
3D diffusion models apply diffusion techniques to volumetric data such as voxels, which is directly relevant to generating Minecraft worlds at the block level. Understanding these models provides insight into how the paper's models generate and edit 3D terrain and structures.

*How the paper uses it:* The paper presents the first large-scale study of 3D diffusion models for voxel/block-level generation in Minecraft.

▶ [3D Voxel Generation with Diffusion](https://www.youtube.com/watch?v=FXw5ziwufAA) — 상수 (상수상수) · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

Start by understanding the foundational concept of diffusion probabilistic models, which underpin the generative techniques used in the paper. Next, learn about discrete masked diffusion, the key innovation enabling controllable block-level generation in Minecraft. Then, explore 3D diffusion models for voxel generation to see how these methods extend to 3D block worlds. Finally, grasp the context of procedural content generation in games to appreciate the challenges and significance of generating large-scale interactive Minecraft environments.

### Diffusion probabilistic models *(prerequisite)*
Diffusion probabilistic models are a class of generative models that learn to create data by reversing a gradual noising process, enabling high-quality sample generation. Understanding these models provides the theoretical foundation for both continuous and discrete diffusion approaches used in the paper.

*How the paper uses it:* The paper uses diffusion probabilistic models as the core generative technique for Minecraft world generation.

▶ [Diffusion Models | DDPM Explained](https://www.youtube.com/watch?v=H45lF4sUgiE) — ExplainingAI · 29:29

### Discrete masked diffusion *(prerequisite)*
Discrete masked diffusion models operate on discrete tokens with a masking mechanism that allows parts of the data to remain fixed during generation, enabling controllable editing like inpainting. This approach is crucial for generating and interactively editing Minecraft blocks at a fine-grained level.

*How the paper uses it:* The paper's MD4 model uses discrete masked diffusion to support controllable generation modes such as inpainting and block conditioning.

▶ [CMU 10799 S26: Lecture 12 - Discrete Diffusion & Masked ...](https://www.youtube.com/watch?v=mXEjZblUBPs) — Kelly He · 1:06:47

### 3D diffusion models for voxel generation
3D diffusion models extend diffusion techniques to generate volumetric data like voxels, which are the building blocks of 3D worlds such as Minecraft. Learning about these models helps understand how the paper generates complex 3D Minecraft terrains and structures directly as blocks.

*How the paper uses it:* The paper trains large 3D diffusion transformer models to generate Minecraft terrain and structures at the block level.

▶ [3D Voxel Generation with Diffusion](https://www.youtube.com/watch?v=FXw5ziwufAA) — 상수 (상수상수) · 3 years ago

### Procedural content generation in games *(prerequisite)*
Procedural content generation (PCG) involves algorithmically creating game content, which is essential for scalable and adaptive game worlds. Understanding PCG provides context for why generating large, controllable Minecraft worlds is challenging and valuable.

*How the paper uses it:* The paper addresses challenges in generating large-scale, semantically meaningful, and controllable Minecraft worlds, a key PCG problem.

▶ [PCG: Introduction, Use Cases, and Production Best Practices ...](https://www.youtube.com/watch?v=TbNZ4GKaTow) — Unreal Engine · 39:37
