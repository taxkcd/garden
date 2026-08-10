---
title: "135 · Dream Cubed: Controllable Generative Modeling in Minecraft by Training on Billions of Cubes — Julian Togelius"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-julian-togelius"
source_hash: "b83371e7657933149fdb351907fcbc0836e422ddf1ea71b05f0528564cb57715"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** diffusion probabilistic models
**The paper assumes:** diffusion probabilistic models, generative modeling with diffusion, and discrete versus continuous diffusion processes
**Already in this field?** Skip this entirely if you already understand the fundamentals of diffusion probabilistic models and their application in generative AI.

To understand the core generative modeling techniques used in the paper 'Dream Cubed,' specifically discrete masked diffusion and continuous DDPMs for 3D Minecraft world generation, a solid grasp of diffusion probabilistic models is essential. The rigorous course option offers a deep, structured university-level treatment of diffusion models, suitable for thorough mastery. The fast track provides a concise, intuition-driven introduction to diffusion models, ideal for quickly gaining practical understanding without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME296: Diffusion & Large Vision Models](https://www.youtube.com/playlist?list=PLoROMvodv4rNdy8rt2rZ4T2xM0OjADnfu) — Stanford Online · 8 videos · 14.0h across 8 episodes

**Watch only this:** Lectures 1-6, about 10.5 hours — covering diffusion basics, score matching, flow matching, latent space and guidance, architectures, and model training to understand the core principles and implementation of diffusion models.

*Why it unblocks this paper:* Stanford CME296 is a recent, focused course on diffusion and large vision models, covering foundational theory, architectures, training, and evaluation of diffusion models including diffusion transformers, which aligns closely with the paper's use of 3D diffusion transformers and discrete diffusion techniques.

*If you want all of it:* All 8 episodes, about 14 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Diffusion Models](https://www.youtube.com/playlist?list=PLyXDCTF4yPcSNIvlUmJPYC8s2oskmaFZB) — AI Focus · 17 videos · 1.4h across 17 episodes

**Watch only this:** First 10 episodes, about 40 minutes — covering score matching, denoising diffusion, conditional diffusion, and guidance techniques to grasp the essential concepts behind diffusion models.

*Why it unblocks this paper:* This AI Focus playlist offers short, clear videos introducing popular diffusion models and their applications, providing a quick yet comprehensive overview of diffusion probabilistic models relevant to image and 3D generation, suitable for rapid background preparation.

*If you want all of it:* All 17 episodes, about 1.4 hours.

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the Dream Cubed paper. The beginner project focuses on reproducing a key evaluation metric (the adapted FID) on Minecraft chunk renderings, using your existing Python and ML skills. The intermediate project builds on the authors' released code to run and extend their discrete masked diffusion model on a subset of the Dream-Cubed dataset, reproducing controllable generation modes and FID evaluation. The advanced project tackles a stated limitation by developing a novel evaluation metric that captures 3D structural and gameplay validity aspects beyond FID, using the Dream-Cubed dataset and generated samples.

### Beginner — Adapted FID Metric for Minecraft Chunk Images
*Effort: a weekend, ~8 hours*

You implement the paper's adaptation of the Fréchet Inception Distance (FID) metric to evaluate semantic differences between real and generated Minecraft chunk renderings. Using Python and existing ML libraries, you compute FID scores on a small set of Minecraft chunk images, reproducing the paper's evaluation approach on a manageable scale.

**Why it shows you understood the paper:** This project shows you understand how the paper quantitatively evaluates generative model quality and the limitations of image-based metrics for 3D voxel data, demonstrating grasp of a core contribution.

**Grounded in:** Adaptation of the Fréchet Inception Distance (FID) metric for evaluating semantic differences between real and generated Minecraft world renderings.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, NumPy, Matplotlib

**Data:** Use a small publicly available set of Minecraft chunk images rendered from Dream-Cubed or substitute with procedurally generated Minecraft chunk screenshots if Dream-Cubed images are unavailable.

**Build it:**

1. Collect or generate a small dataset of Minecraft chunk images representing real and generated samples.
2. Implement the adapted FID metric as described in the paper, using a pretrained Inception network or similar feature extractor.
3. Compute and compare FID scores between real and generated chunk images.
4. Visualize the distribution of scores and document limitations of FID for 3D voxel data.
5. Write a README explaining the metric, your implementation, and results.

**Ships as:** A GitHub repo with code to compute adapted FID on Minecraft chunk images, example results, and a README explaining the metric and its limitations.

**Stretch goal:** Add a simple baseline metric such as pixel-wise MSE or SSIM for comparison to FID.

### Intermediate — Controllable Minecraft Chunk Generation with Discrete Masked Diffusion
*Effort: 2 weekends, ~20 hours*

You clone and run the authors' Dream-Cubed repository to train or fine-tune the discrete masked diffusion (MD4) model on a subset of the Dream-Cubed dataset. You reproduce controllable generation modes such as inpainting and biome blending, and evaluate generation quality using the adapted FID metric. You compare results with a simple baseline such as random block sampling or procedural terrain generation.

**Why it shows you understood the paper:** This project demonstrates you can work with the authors' code and dataset, understand the core generative modeling approach, and reproduce key results including controllable generation and quantitative evaluation.

**Grounded in:** Discrete masked diffusion models enable controllable generation modes such as inpainting, outpainting, biome blending, and user-guided block conditioning; both discrete masked diffusion and continuous DDPM models achieve comparable FID scores.

**Tech stack:** Python 3.11, PyTorch, Dream-Cubed codebase, NumPy, Matplotlib

**Data:** Use the Dream-Cubed dataset released by the authors at https://github.com/SakanaAI/DreamCubed, focusing on a manageable subset of Minecraft chunks.

**Build it:**

1. Clone the Dream-Cubed GitHub repository and set up the environment.
2. Download a subset of the Dream-Cubed dataset focusing on a few biomes or chunk types.
3. Train or fine-tune the discrete masked diffusion (MD4) model on this subset.
4. Implement controllable generation modes such as inpainting and biome blending using the model.
5. Evaluate generated chunks using the adapted FID metric from the beginner project.
6. Compare results to a simple baseline like random block sampling or procedural generation.
7. Document your process, results, and insights in a README.

**Verified links from the paper:**

- <https://github.com/SakanaAI/DreamCubed> — released by the paper's authors

**Ships as:** A GitHub repo with code and instructions to reproduce controllable Minecraft chunk generation using discrete masked diffusion, evaluation scripts, and a report on results.

**Stretch goal:** Extend controllable generation to sliding-window outpainting for larger world generation beyond chunk size.

### Advanced — 3D Structural and Gameplay-Aware Evaluation Metric for Minecraft Worlds
*Effort: 3+ weeks*

You develop a novel evaluation metric that addresses the paper's limitation of FID by capturing 3D structural coherence and gameplay functionality of generated Minecraft worlds. Using the Dream-Cubed dataset and generated samples from discrete masked diffusion models, you design and implement metrics that analyze voxel-level internal structure, subsurface features, and functional validity (e.g., connectivity, biome consistency). You validate your metric by correlating it with human preference data or gameplay simulations.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, showing deep understanding of the challenges in evaluating 3D generative models and the ability to extend state-of-the-art methods with novel contributions.

**Grounded in:** FID metric struggles to evaluate internal structure, subsurface features, and functional validity of generated worlds; future direction to develop better evaluation metrics capturing 3D structure and gameplay functionality.

**Tech stack:** Python 3.11, PyTorch, NumPy, SciPy, Dream-Cubed codebase, Minecraft world analysis tools (e.g., Pyubiomes)

**Data:** Use the Dream-Cubed dataset and generated samples from the discrete masked diffusion model (from the intermediate project). Optionally use Pyubiomes (https://github.com/lilyyy411/Pyubiomes) for biome and structure analysis.

**Build it:**

1. Review the limitations of FID for 3D voxel data as described in the paper.
2. Survey existing Minecraft world analysis tools such as Pyubiomes for biome and structural features.
3. Design metrics that quantify 3D structural coherence (e.g., block connectivity, hollow regions) and gameplay-relevant features (e.g., biome blending consistency, village structure presence).
4. Implement these metrics and apply them to real and generated Minecraft chunks from Dream-Cubed.
5. Correlate metric scores with human preference data if available or with qualitative gameplay assessments.
6. Document your methodology, experiments, and findings in a detailed README or report.

**Verified links from the paper:**

- <https://github.com/SakanaAI/DreamCubed> — released by the paper's authors
- <https://github.com/lilyyy411/Pyubiomes> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code implementing new 3D structural and gameplay-aware evaluation metrics, analysis scripts on Dream-Cubed data, and a report discussing improvements over FID.

**Stretch goal:** Integrate your evaluation metric into a training loop to guide or improve generative model sampling quality.
