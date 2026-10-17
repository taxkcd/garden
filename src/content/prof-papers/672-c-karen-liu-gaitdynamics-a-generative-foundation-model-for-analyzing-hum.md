---
title: "672 · GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running — C. Karen Liu"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-c-karen-liu"
source_hash: "2354a9afcc0a4a21325a88dfd6f0be265cf4456ae58151aeccd970e9376fd03e"
sequence: 672
generator: "outreach-garden: managed"
---

# 672 · GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running

## At a glance

- **Professor:** C. Karen Liu
- **Institution:** Stanford University
- **Paper:** [GaitDynamics: A Generative Foundation Model for Analyzing Human Walking and Running](https://doi.org/10.21203/rs.3.rs-6206222/v1)
- **Authors:** Tian Tan, Tom Van Wouwe, Keenon F. Werling, C. Karen Liu, Scott L. Delp, Jennifer L. Hicks, Akshay S. Chaudhari
- **Year:** 2025

## Paper overview

This paper introduces GaitDynamics, a novel generative foundation model trained on a large and diverse dataset to analyze human gait dynamics, including walking and running. It can accurately estimate forces and motions from partial or full kinematic data, predict the effects of gait modifications on knee loading without experiments, and simulate changes in gait parameters with speed variations. The model is highly efficient, generalizes well to new populations including those with osteoarthritis, and is publicly available for broad use.

### Why it matters

**Research problem:** Traditional gait analysis relies on expensive, time-consuming laboratory experiments and physics-based simulations, limiting its accessibility and scalability. Existing deep learning models are often trained on small, homogeneous datasets and focus on single prediction tasks, lacking flexibility and generalizability.

**Why it matters:** Understanding gait dynamics is crucial for diagnosing diseases, preventing injuries, customizing rehabilitation, and improving athletic performance. More accessible and flexible gait analysis tools can enable widespread clinical and sports applications, benefiting diverse populations including those with mobility impairments.

**Key contributions:**

- Development of the first generative foundation model for human gait dynamics capable of multiple downstream tasks.
- Training on a large, diverse dataset enabling generalization to unseen studies and populations.
- Flexible input handling allowing force estimation from partial kinematic data using diffusion-based inpainting.
- Demonstration of experiment-free prediction of gait modification effects on knee loading.
- Prediction of kinematic and kinetic changes across running speeds consistent with experimental data.

## About the professor

**C. Karen Liu** — Professor of Computer Science, Computer Science Department, Stanford University.

Research interests: computer graphics and robotics, including physics-based animation, character animation, optimal control, reinforcement learning, and computational biomechanics

### Research links

- [Faculty/profile page](https://www.cs.stanford.edu/people/karen-liu)
- [Professor website](https://cs.stanford.edu/~karenliu)
- [Resolved homepage](https://tml.stanford.edu)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Generative Diffusion Models
**The paper assumes:** probabilistic generative modeling, diffusion probabilistic models, and deep learning architectures for sequence generation
**Already in this field?** Skip this entirely if you already understand diffusion models and their application in generative machine learning.

To understand the core methodology behind GaitDynamics, which uses diffusion-based generative modeling to impute missing gait kinematics and estimate forces, background on diffusion models is essential. The rigorous course option offers a deep, structured university-level exploration of diffusion and flow matching models, ideal for thorough comprehension. The fast track provides a shorter, focused playlist that covers the key concepts efficiently for readers pressed for time but still wanting solid foundational knowledge.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CMU 10799 S26: Diffusion & Flow Matching - Lecture Recordings](https://www.youtube.com/playlist?list=PL9aTsZCk17O6ebBauPy7Mn8cQqXgt0Xtb) — Kelly He · 12 videos · 13.2h across 12 episodes

**Watch only this:** Lectures 1 through 7 (Basics of Probabilistic & Generative Modeling, Denoising Diffusion Models, Modal Guest Lecture, Score-based Models, Flow Matching, The Design Space & Fast Sampling, Guidance & Controllable Generation), about 7.7 hours — this covers foundational theory, model training, and controllable generation relevant to the paper's diffusion model.

*Why it unblocks this paper:* This CMU course by Kelly He covers the mathematical foundations and research frontiers of diffusion and flow matching models, directly relevant to the diffusion-based generative foundation model used in GaitDynamics. It includes lectures on score-based models, denoising diffusion, flow matching, guidance, and fast sampling, providing a comprehensive understanding of the underlying theory and practical advances.

*If you want all of it:* All 12 lectures, about 13.2 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Stanford CME296: Diffusion & Large Vision Models](https://www.youtube.com/playlist?list=PLoROMvodv4rNdy8rt2rZ4T2xM0OjADnfu) — Stanford Online · 8 videos · 14.0h across 8 episodes

**Watch only this:** Lectures 1 through 5 (Diffusion, Score matching, Flow matching, Latent Space & Guidance, Architectures), about 8.75 hours — these cover the fundamental diffusion concepts and model architectures needed to understand the generative approach.

*Why it unblocks this paper:* Stanford CME296 offers a well-produced, clear introduction to diffusion-based generative models with a focus on vision but covering core diffusion concepts, score matching, flow matching, and architectures. It is concise and accessible, making it a great quick background to grasp the essentials behind the diffusion approach in GaitDynamics.

*If you want all of it:* All 8 lectures, about 14 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the GaitDynamics paper, start with foundational knowledge on diffusion models and transformer architectures, as these are key technical components of the model. Next, build domain expertise in biomechanics of human gait and ground reaction force estimation methods to grasp the physiological and biomechanical context. Finally, focus on the core concept by watching the authors' own talk on GaitDynamics, which provides direct insight into their novel generative foundation model for gait analysis.

### Diffusion models in generative modeling *(prerequisite)*
Diffusion models are the core generative technique used in GaitDynamics to handle missing kinematics and generate realistic gait data. Understanding their principles and how they compare to other generative models is essential for grasping the model's generative capabilities.

*How the paper uses it:* GaitDynamics uses a diffusion-based generative model to inpaint missing kinematic data and generate full-body gait dynamics.

▶ [Lec 15. Generative Models: Representation Learning Meets Generative Modeling](https://www.youtube.com/watch?v=8zzfcYIELdo) — MIT OpenCourseWare · 1:20:40 · 8mo ago

### Transformer architectures in time series *(prerequisite)*
Transformers enable flexible input handling of kinematic time series data in GaitDynamics, allowing the model to process partial or full kinematic inputs effectively. Understanding transformer-based time series representation learning provides insight into the model's architecture.

*How the paper uses it:* The GaitDynamics model employs a transformer architecture to flexibly handle various input combinations of kinematics for gait analysis.

▶ [A Transformer-based Framework for Multivariate Time Series Representation Learning](https://www.youtube.com/watch?v=K5U9v2SW7_Q) — Health NLP Lab · 19:45 · 5y ago

### Biomechanics of human gait *(prerequisite)*
A solid understanding of human gait biomechanics, including gait cycles, phases, and joint kinematics, is crucial to interpret the physiological relevance of the model's predictions and the biomechanical data it uses.

*How the paper uses it:* GaitDynamics models human walking and running gait dynamics, requiring foundational knowledge of gait biomechanics to appreciate its applications and results.

▶ [Biomechanics Lecture 11: Gait](https://www.youtube.com/watch?v=QB0tJajDvMw) — Rehab Science · 38:20 · 4y ago

### Ground reaction force estimation methods *(prerequisite)*
Ground reaction forces are key biomechanical outputs predicted by GaitDynamics from kinematic inputs. Understanding traditional and modern methods for estimating these forces contextualizes the model's improvements and clinical relevance.

*How the paper uses it:* GaitDynamics accurately estimates ground reaction forces from partial or full kinematic data, outperforming existing methods.

▶ [Biomechanics of Movement | Lecture 2.2: The Walking Gait Cycle and Ground Reaction Forces](https://www.youtube.com/watch?v=LAOS8I6dFy4) — Biomechanics of Movement · 13:04 · 4y ago

### GaitDynamics model talk *(paper-talk search result; attribution unverified)*
The authors' own recorded talk on GaitDynamics provides the most direct and detailed insight into their novel generative foundation model, its architecture, training, capabilities, and applications. This talk is essential for understanding the paper's core contributions and innovations.

*How the paper uses it:* This talk by Tian Tan from Stanford University presents the GaitDynamics model, covering its generative AI approach to gait analysis.

▶ [Webinar: GaitDynamics: A Generative AI Model for Gait Analysis, Part 1 of 2](https://www.youtube.com/watch?v=Ju9H5coz-w0) — FAIR Center · 31:53 · 2w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the GaitDynamics paper, start by learning the fundamentals of human gait biomechanics to grasp the physical movements and forces involved. Next, build intuition on transformer architectures for time series data and diffusion models, which are key AI techniques used in the model. Then, explore ground reaction force estimation methods to see how forces are predicted from motion data. Finally, watch a focused talk on the GaitDynamics model itself to connect all concepts and see the novel contributions in action.

### Biomechanics of human gait *(prerequisite)*
This section introduces the basics of human walking and running mechanics, including the gait cycle phases, joint movements, and the forces involved. Understanding these fundamentals is essential to appreciate what the GaitDynamics model analyzes and predicts.

*How the paper uses it:* The paper models human gait dynamics, so foundational knowledge of gait biomechanics is crucial to understand the input data and predicted outputs.

▶ [GAIT BIOMECHANICS #GAIT ANALYSIS #Human Gait Analysis Series Part-1](https://www.youtube.com/watch?v=gTRtmcA5o5c) — Tony's Tutorial · 23:13 · 5y ago

### Transformer architectures in time series *(prerequisite)*
Transformers are powerful neural networks that can process sequential data like time series by attending to different parts of the input flexibly. Learning how transformers work with time series helps understand how GaitDynamics handles various kinematic inputs to predict full-body dynamics.

*How the paper uses it:* GaitDynamics uses a transformer architecture to flexibly handle partial or full kinematic data sequences for gait analysis.

▶ [A Transformer-based Framework for Multivariate Time Series Representation Learning](https://www.youtube.com/watch?v=K5U9v2SW7_Q) — Health NLP Lab · 19:45 · 5y ago

### Diffusion models in generative modeling *(prerequisite)*
Diffusion models are a class of generative models that learn to create data by gradually denoising from random noise, enabling them to fill in missing information. Understanding diffusion models clarifies how GaitDynamics generates missing kinematics from partial inputs.

*How the paper uses it:* The paper employs a diffusion-based generative model to inpaint missing kinematic data for force estimation.

▶ [But how do AI images and videos actually work? | Guest video by Welch Labs](https://www.youtube.com/watch?v=iv-5mZ_9CPY) — 3Blue1Brown and Welch Labs · 37:20 · 1y ago

### Ground reaction force estimation methods *(prerequisite)*
Ground reaction forces are the forces exerted by the ground on the body during movement, critical for gait analysis. This section explains how these forces can be estimated from motion data, which is central to GaitDynamics' predictive capabilities.

*How the paper uses it:* GaitDynamics predicts ground reaction forces from kinematic inputs, a key task demonstrated to outperform prior methods.

▶ [Biomechanics of Movement | Lecture 2.2: The Walking Gait Cycle and Ground Reaction Forces](https://www.youtube.com/watch?v=LAOS8I6dFy4) — Biomechanics of Movement · 13:04 · 4y ago

### GaitDynamics model talk *(paper-talk search result; attribution unverified)*
This talk by the paper's author presents the GaitDynamics model, explaining its architecture, training on diverse datasets, and applications in gait analysis. It ties together the biomechanics and AI concepts into the novel contributions of the paper.

*How the paper uses it:* Direct presentation of the GaitDynamics model and its capabilities by one of the authors.

▶ [Webinar: GaitDynamics: A Generative AI Model for Gait Analysis, Part 1 of 2](https://www.youtube.com/watch?v=Ju9H5coz-w0) — FAIR Center · 31:53 · 2w ago

## Already in your library

- [CS 198-126: Lecture 12 - Diffusion Models](https://www.youtube.com/watch?v=687zEGODmHA) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [Stanford CS236: Deep Generative Models I 2023 I Lecture 18 - Diffusion Models for Discrete Data](https://www.youtube.com/watch?v=mCaRNnEnYwA) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [MIT 6.S191 (2025): Deep Generative Modeling](https://www.youtube.com/watch?v=SdTZAMDKrNY) — also for: PROBE: Diagnosing Residual Concept Capacity in Erased Text-to-Video Diffusion Models (Ping Liu)
- [MIT 6.S184: Flow Matching and Diffusion Models - Lecture 01 ...](https://www.youtube.com/watch?v=9eJQQVrUUoI) — also for: Video Generators are Robot Policies (Ruoshi Liu)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — also for: MetaSR: Content-Adaptive Metadata Orchestration for Generative Super-Resolution (Aggelos K. Katsaggelos)
- [Diffusion models explained in 4-difficulty levels](https://www.youtube.com/watch?v=yTAMrHVG1ew) — also for: DFlash: Block Diffusion for Flash Speculative Decoding (Zhijian Liu)
- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformer Neural Networks, ChatGPT's foundation, Clearly ...](https://www.youtube.com/watch?v=zxQyTK8quyY) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Transformer Explainer- Learn About Transformer With Visualization](https://www.youtube.com/watch?v=csWluHwfsB8) — also for: When to Trust, How to Distill: Multi-Foundation Model Guidance for Lightweight, Robust Scientific Time Series Forecasting (Sangmi Lee Pallickara)
- [Informer: Time series Transformer - EXPLAINED!](https://www.youtube.com/watch?v=aETHYkoJeNY) — also for: TA-RNN: an Attention-based Time-aware Recurrent Neural Network Architecture for Electronic Health Records (Serdar Bozdag)
- [Temporal Fusion Transformers, EXPLAINED. Advanced Time ...](https://www.youtube.com/watch?v=V14qoa5vZ1I) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [What is generative AI and how does it work? – The Turing Lectures with Mirella Lapata](https://www.youtube.com/watch?v=_6R7Ym6Vy_I) — also for: “AI Watermarking”: Bridging Policy Discourse and Technical Capabilities (Sunoo Park)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the GaitDynamics paper. The beginner project focuses on reproducing a key result using existing tools and partial data. The intermediate project involves running and extending the authors' released code to replicate core model capabilities and compare against a baseline. The advanced project tackles a stated limitation by extending the model to a new movement domain, requiring deeper integration and experimentation.

### Beginner — Partial Kinematics Force Estimation Demo
*Effort: a weekend, ~8 hours*

You build a small Python script or Jupyter notebook that uses the GaitDynamics Google Colab notebook to input partial-body kinematic data (e.g., only lower limb markers) and generate estimated ground reaction forces. You reproduce the paper's result showing force estimation accuracy with partial inputs.

**Why it shows you understood the paper:** This project shows you understand the model's diffusion-based inpainting mechanism for missing kinematics and how it enables force estimation from incomplete data, a key contribution of the paper.

**Grounded in:** When using partial-body kinematics as input (e.g., without trunk kinematics), GaitDynamics maintained its force estimation accuracy by first using a diffusion model to generate unknown kinematics and subsequently using a refinement model to map full-body kinematics to forces.

**Tech stack:** Python 3.11, Jupyter Notebook, Google Colab, PyTorch (via authors' Colab)

**Data:** Use the sample kinematic data provided in the GaitDynamics GitHub Colab notebook, which is derived from the AddBiomechanics dataset aggregated by the authors.

**Build it:**

1. Clone the GaitDynamics GitHub repository and open the provided Google Colab notebook.
2. Load a sample full-body kinematic trial from the notebook's example data.
3. Modify the input to remove trunk kinematics, simulating partial-body input.
4. Run the diffusion model to generate missing kinematics and then the refinement model to estimate ground reaction forces.
5. Visualize and compare the estimated forces against the ground truth provided in the sample data.
6. Document the process and results in a README explaining the partial input approach.

**Verified links from the paper:**

- <https://github.com/stanfordnmbl/GaitDynamics> — released by the paper's authors

**Ships as:** A Jupyter notebook or Python script demonstrating force estimation from partial kinematics with plots comparing estimated and true forces, plus a README explaining the method and results.

**Stretch goal:** Add an interactive UI (e.g., Streamlit) to upload custom partial kinematic data and visualize force estimates in real time.

### Intermediate — Reimplement and Evaluate GaitDynamics Force Estimation
*Effort: 1-3 weekends, ~20 hours*

You clone the full GaitDynamics repository, run the pretrained model on a subset of the AddBiomechanics dataset, and replicate the paper's force estimation metrics (mean absolute error). You then implement a simple baseline (e.g., linear regression from kinematics to forces) and compare performance.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the authors' diffusion-transformer architecture, understand the training and evaluation pipeline, and critically compare the generative model against a baseline, reflecting the core method and results of the paper.

**Grounded in:** GaitDynamics outperforms state-of-the-art models in estimating ground reaction forces with mean absolute errors below clinically meaningful thresholds.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Git

**Data:** Use the AddBiomechanics dataset as accessed via the GaitDynamics repository instructions; if full dataset access is restricted, use the sample data provided in the repo as a substitute.

**Build it:**

1. Clone the GaitDynamics GitHub repository and set up the environment per the README.
2. Download or access the AddBiomechanics dataset or use the provided sample data.
3. Run the pretrained GaitDynamics model to estimate ground reaction forces from full-body kinematics.
4. Implement a simple baseline model (e.g., linear regression) mapping kinematics to forces.
5. Evaluate and compare the mean absolute error of both models on the test subset.
6. Write a report summarizing the results, methodology, and insights.

**Verified links from the paper:**

- <https://github.com/stanfordnmbl/GaitDynamics> — released by the paper's authors

**Ships as:** A GitHub repo with code to run GaitDynamics and baseline models, evaluation scripts, and a report comparing performance metrics replicating the paper's core results.

**Stretch goal:** Extend the evaluation to partial-body kinematics inputs and analyze performance degradation, matching the paper's partial input experiments.

### Advanced — Extending GaitDynamics to Non-Gait Movements
*Effort: few weeks, ~40+ hours*

You extend the GaitDynamics model to handle a new class of human movements beyond walking and running, such as stair climbing or jumping, addressing a stated limitation. This involves collecting or simulating a small dataset of these movements, fine-tuning the model, and evaluating its performance on force and kinematic prediction.

**Why it shows you understood the paper:** This project tackles a key limitation identified by the authors, showing deep comprehension of the model architecture, training requirements, and biomechanical context. It also demonstrates research initiative by broadening the model's applicability.

**Grounded in:** Model is primarily trained on walking and running gait data, limiting applicability to non-gait movements.

**Tech stack:** Python 3.11, PyTorch, NumPy, Matplotlib, Git, Optional: motion capture data processing tools

**Data:** Use publicly available motion capture datasets of non-gait movements (e.g., CMU Motion Capture Database) as a substitute for gait data, or simulate synthetic kinematics consistent with stair climbing or jumping.

**Build it:**

1. Identify and acquire a small dataset of non-gait human movement kinematics and ground reaction forces.
2. Preprocess the data to match the input format expected by GaitDynamics.
3. Fine-tune the pretrained GaitDynamics model on this new data subset.
4. Evaluate the model's ability to predict forces and kinematics on held-out non-gait trials.
5. Analyze performance relative to baseline models or the original gait-trained model.
6. Document challenges, results, and potential improvements in a detailed README.

**Verified links from the paper:**

- <https://github.com/stanfordnmbl/GaitDynamics> — released by the paper's authors

**Ships as:** A GitHub repository containing code for data preprocessing, model fine-tuning, evaluation scripts, and a comprehensive report discussing the extension of GaitDynamics to non-gait movements.

**Stretch goal:** Incorporate self-supervised learning techniques to leverage unlabeled non-gait kinematic data for improved generalization.
