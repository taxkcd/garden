---
title: "446 · Agentic Real2Sim: Physics-based World Modeling with Vision-Language Agents — Changxi Zheng"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-changxi-zheng"
source_hash: "3d41732f47148a5960abce3ebcfcaf938410295da4c4ddb35372cbb8eb10b86a"
sequence: 446
generator: "outreach-garden: managed"
---

# 446 · Agentic Real2Sim: Physics-based World Modeling with Vision-Language Agents

## At a glance

- **Professor:** Changxi Zheng
- **Institution:** Columbia University
- **Paper:** [Agentic Real2Sim: Physics-based World Modeling with Vision-Language Agents](https://arxiv.org/abs/2607.19190v3)
- **Authors:** Guanxiong Chen, Qianjun Xia, Jiawei Peng, Heng Zhang, Bole Ma, Justin Qian, Ziyi Jiao, Bingyang Zhou, Luoxin Ye, Kaifeng Zhang, Kunyi Wang, Weijia Zeng, Yunuo Chen, Pengzhi Yang, Ziqiu Zeng, Siyuan Luo, Huamin Wang, Chao Liu, Alan Yuille, Fan Shi, Changxi Zheng, Yunzhu Li, Chenfanfu Jiang, Peter Yichen Chen
- **Year:** 2026

## Paper overview

This paper presents Agentic Real2Sim, a framework that automatically converts real-world robot-object interaction recordings into detailed, physics-based digital simulations. It uses vision-language models (VLMs) to guide the reconstruction of scenes, objects, and physical parameters, enabling the creation of simulatable episodes that preserve the original interactions. The system supports rigid, deformable, and humanoid motion scenarios and aims to facilitate downstream robotics tasks like policy learning and evaluation.

### Why it matters

**Research problem:** Real-to-sim conversion of physical robot interaction episodes is labor-intensive and complex, requiring recovery of scene geometry, object states, physical parameters, and assembly into runnable simulations. Existing methods often rely on manual tuning and brittle workflows, lacking scalable, automated pipelines that produce physically plausible digital twins for diverse interaction types.

**Why it matters:** Automating real-to-sim conversion is crucial for robotics research and applications, as it enables scalable generation of simulation assets aligned with real-world data. This supports policy learning, evaluation, and deployment in robotics, reducing manual effort and improving the fidelity and utility of simulated environments.

**Key contributions:**

- Introduced an Agentic Real2Sim pipeline converting DROID robot manipulation episodes into MuJoCo-simulated episodic twins preserving actors, objects, trajectories, and physical parameters.
- Demonstrated support for multiple interchangeable VLM backends achieving comparable replay success with significant cost reductions.
- Generalized the framework to handle deformable-object manipulation and humanoid motion, unifying typically separate Real2Sim pipelines under a common interface.

## About the professor

**Changxi Zheng** — Associate Professor of Computer Science, Computer Science, Columbia University.

Research interests: developing simulation methods for complex physical systems, the computational models for optical and acoustic sensing, and the computational design of structures and materials

### Research links

- [Faculty/profile page](https://datascience.columbia.edu/people/changxi-zheng)
- [Identity evidence](http://www.cs.columbia.edu/~cxz)
- [Professor website](http://www.cs.columbia.edu/~cxz/)
- [Resolved homepage](http://www.cs.columbia.edu/~cxz/index.htm)
- [Lab website](http://www.cs.columbia.edu/cg)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Physics-based simulation for robotics
**The paper assumes:** physics-based simulation, rigid and deformable body dynamics, robotics simulation frameworks
**Already in this field?** Skip this entirely if you already have experience with physics simulation methods in robotics or have used simulators like MuJoCo for modeling physical interactions.

This background provides foundational knowledge on physics-based simulation for robotics, essential for understanding the Agentic Real2Sim paper's approach to creating physics-based digital twins from real-world robot-object interactions. The rigorous course option offers a deep, structured university-level lecture series on advanced robotics and physics simulation, while the fast track provides a concise, practical introduction to robotic simulators through a focused tutorial series. Choose the course for comprehensive theoretical grounding and the fast track for a quicker, application-oriented overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [CS287 Advanced Robotics at UC Berkeley Fall 2019 -- Instructor: Pieter Abbeel](https://www.youtube.com/playlist?list=PLwRJQ4m4UJjNBPJdt8WamRAt4XKc639wF) — Pieter Abbeel · 24 videos · 31.3h across 24 episodes

**Watch only this:** Lectures 21 (Physics Simulation) and 22 (Sim2Real and Domain Randomization), about 2.6 hours total — these cover the core physics simulation concepts and domain adaptation relevant to real-to-sim conversion.

*Why it unblocks this paper:* This is a university-level advanced robotics course by Pieter Abbeel at UC Berkeley that includes dedicated lectures on physics simulation and sim2real transfer, directly relevant to understanding the physical modeling and simulation components of the paper.

*If you want all of it:* 31.3 hours across 24 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Gazebo Simulator Tutorials](https://www.youtube.com/playlist?list=PLNw2RD-1J5YYvFGiMafRD_axHrBUGvuIg) — Robotogeddon · 9 videos · 3.2h across 9 episodes

**Watch only this:** Episodes 1 (Introduction & Installation), 2 (GUI Explained - Part II), 3 (GUI Explained - Part I), and 7 (Simulation Recording), about 1.5 hours total — these give a concise overview of simulation setup and operation.

*Why it unblocks this paper:* This Gazebo Simulator tutorial series provides a practical introduction to a popular robotics simulation platform, covering installation, GUI, model editing, and simulation recording, which aligns well with the paper's focus on building and refining physics-based simulations.

*If you want all of it:* 3.2 hours across 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Agentic Real2Sim paper, start by building foundational knowledge in vision-language models for robotics and robot manipulation perception pipelines, as these underpin the system's perception and decision-making capabilities. Next, study physics simulation for deformable objects to grasp the framework's extension beyond rigid bodies. Finally, focus on the core concept of agentic real-to-sim conversion with the authors' own talk to directly learn about their novel pipeline and agentic approach.

### Vision-language models for robotics *(prerequisite)*
Vision-language models (VLMs) are key to the Agentic Real2Sim pipeline, enabling the system to interpret visual data and guide scene reconstruction and simulation parameterization. Understanding recent advances and applications of VLMs in robotics provides essential context for how the paper leverages these models for automated real-to-sim conversion.

*How the paper uses it:* The paper uses interchangeable VLM backends to drive agentic decisions in perception and simulation refinement.

▶ [Stanford Robotics Seminar ENGR319 | Winter 2026 | 𝚿0: An Open Foundation Model](https://www.youtube.com/watch?v=popjDuA-whA) — Stanford Online · 1:04:10 · 5 months ago

### Robot manipulation perception pipelines *(prerequisite)*
Upstream perception pipelines are critical for extracting accurate object segmentation, geometry, and pose information from raw sensor data, which directly impacts the replay success of the real-to-sim conversion. A detailed understanding of these pipelines and their challenges informs the limitations and future directions discussed in the paper.

*How the paper uses it:* The paper identifies perception components as a major bottleneck limiting replay success rates below 50%.

▶ [MIT 6.S191 (2020): Generalizable Autonomy for Robot Manipulation](https://www.youtube.com/watch?v=8Kn4Gi8iSYQ) — Alexander Amini · 47:00 · 6 years ago

### Physics simulation for deformable objects *(prerequisite)*
The paper extends its real-to-sim framework beyond rigid objects to deformable manipulation scenarios, which require specialized physics simulation techniques. Learning about deformable object simulation fundamentals helps appreciate the generalization and shared episode contract introduced by the authors.

*How the paper uses it:* Agentic Real2Sim supports deformable-object manipulation using a common interface with rigid and humanoid scenarios.

▶ [RI Seminar: Dmitry Berenson : What Matters for Deformable Object Manipulation](https://www.youtube.com/watch?v=7Rc3cxN_cus) — CMU Robotics Institute · 1:03:04 · Streamed 8 years ago

### Agentic Real2Sim paper talk *(the paper's own talk)*
The authors' own talk provides the most direct and comprehensive explanation of their novel Agentic Real2Sim pipeline, including its architecture, agentic decision-making, modular design, and experimental results. This talk is essential to fully grasp the paper's contributions and innovations.

*How the paper uses it:* Directly hear authors explain their novel real-to-sim conversion framework.

▶ [Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan](https://www.youtube.com/watch?v=96jN2OCOfLs) — Sequoia Capital · 29:49 · 3 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Agentic Real2Sim, start by learning about vision-language models (VLMs) as they are the key technology enabling perception and decision-making in the pipeline. Next, grasp the basics of robot manipulation perception pipelines to appreciate the challenges in recovering scene and object states from real-world data. Then, study physics simulation for deformable objects to see how the framework extends beyond rigid bodies. After that, explore physics-based digital twin simulation to understand how real-world interactions are mirrored virtually. Finally, learn about agentic decision making in simulation, the core innovation that separates intelligent control from deterministic simulation tools in this work.

### Vision-language models for robotics *(prerequisite)*
Vision-language models combine visual understanding and natural language processing to interpret images and videos in a way that supports reasoning and decision-making. In robotics, VLMs enable systems to perceive their environment and guide actions based on visual and textual cues.

*How the paper uses it:* Agentic Real2Sim uses interchangeable VLM backends to guide scene reconstruction and physical parameter estimation from raw video and sensor data.

▶ [Vision Language Models for Robotics | ROS Developers Open Class #179](https://www.youtube.com/watch?v=mjgoXucDfeA) — The Construct Robotics Institute · 1:14:43 · 2 years ago

### Robot manipulation perception pipelines *(prerequisite)*
Robot manipulation perception pipelines process multi-modal sensor data to detect, segment, and track objects and their states in the environment. These pipelines are complex and critical for enabling robots to understand and interact with the physical world.

*How the paper uses it:* The paper highlights that replay success is limited mainly by upstream visual perception, making understanding these pipelines essential.

▶ [SciRoc Camp:  Robot Perception Tutorial  by Mohammad Wasil](https://www.youtube.com/watch?v=iE4saPqVs2E) — SciRoc Camp GKK Symposium · 58:41 · Streamed 5 years ago

### Physics simulation for deformable objects *(prerequisite)*
Physics simulation for deformable objects models how soft or flexible materials bend, stretch, and respond to forces, which is more complex than simulating rigid bodies. This knowledge is important for simulating realistic interactions with deformable objects.

*How the paper uses it:* Agentic Real2Sim generalizes its framework to handle deformable-object manipulation using physics-based simulation.

▶ [RI Seminar: Dmitry Berenson : What Matters for Deformable Object Manipulation](https://www.youtube.com/watch?v=7Rc3cxN_cus) — CMU Robotics Institute · 1:03:04 · Streamed 8 years ago

### Physics-based digital twin simulation
Physics-based digital twins are virtual replicas of physical systems that evolve in real-time, mirroring the physical asset's behavior using physics simulations. They enable testing, evaluation, and learning in a simulated environment closely aligned with reality.

*How the paper uses it:* The core of Agentic Real2Sim is converting real robot-object interaction episodes into physics-based digital twins for simulation and replay.

▶ ["Predictive Digital Twins: From physics-based modeling to scientific machine learning" Prof. Willcox](https://www.youtube.com/watch?v=ZuSx0pYAZ_I) — Center for Intelligent Systems CIS EPFL · 1:03:41 · 4 years ago

### Agentic decision making in simulation
Agentic decision making involves AI agents making high-level decisions to orchestrate perception and simulation tools, enabling modular and adaptive control rather than fixed deterministic workflows.

*How the paper uses it:* Agentic Real2Sim separates agentic decision-making from deterministic perception and simulation tools, allowing flexible and scalable real-to-sim conversion.

▶ [The Agent Development Lifecycle: Build, Test, Deploy, Monitor | Interrupt 26](https://www.youtube.com/watch?v=jWy39wavbjY) — LangChain · 44:58 · 2 months ago

## Already in your library

- [What is a Digital Twin? Technology, Types, & How it Works](https://www.youtube.com/watch?v=taSbwarjGGw) — also for: TwinOR: Photorealistic Digital Twins of Dynamic Operating Rooms for Embodied AI Research (Mathias Unberath)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Introduction to Vision Language Models (VLM)](https://www.youtube.com/watch?v=2JairFgKPb4) — also for: Prompt-OT: An Optimal Transport Regularization Paradigm for Knowledge Preservation in Vision-Language Model Adaptation (Yalin Wang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Agentic Real2Sim paper. The beginner project focuses on reproducing a core perception step from the pipeline using your existing skills. The intermediate project involves reimplementing the core agentic pipeline on a smaller or substitute dataset to measure replay success, introducing new skills in physics simulation integration. The advanced project extends the framework to address a stated limitation by implementing automated conversion and quantitative evaluation for deformable object manipulation, showcasing research-level initiative and domain adaptation.

### Beginner — Object Segmentation and Pose Estimation from Robot Interaction Video
*Effort: a weekend, ~8 hours*

You build a pipeline that takes a short video of a robot manipulating a rigid object and outputs segmented object masks and estimated 6-DoF poses for the objects over time. This mimics the initial perception step in Agentic Real2Sim where raw video is processed to extract object segmentation and poses.

**Why it shows you understood the paper:** This project demonstrates your grasp of the critical upstream visual perception components that the paper identifies as bottlenecks, showing you understand how real-to-sim conversion begins and why accurate perception is essential for replay success.

**Grounded in:** Replay success rates on the DROID-100 dataset are below 50%, indicating limitations primarily in perception and simulation rather than VLM choice.

**Tech stack:** Python 3.11, OpenCV, PyTorch, Detectron2 or similar segmentation model, NumPy

**Data:** Use a publicly available robot-object interaction video dataset or simulate a short video with a simple rigid object and robot arm in a lab environment.

**Build it:**

1. Collect or simulate a short video of a robot manipulating a rigid object.
2. Use a pretrained segmentation model (e.g., Detectron2) to segment the object and robot in each frame.
3. Implement or adapt a pose estimation method (e.g., PnP with known object geometry) to estimate object poses over time.
4. Visualize the segmentation masks and pose trajectories over the video frames.
5. Write a README explaining how this step fits into the Agentic Real2Sim pipeline and its importance.

**Ships as:** A GitHub repo with code to process input videos, output segmentation masks and pose estimates, and visualizations showing the results alongside explanations linking to the paper's perception bottleneck.

**Stretch goal:** Add a simple feedback loop that refines pose estimates using temporal smoothing or optical flow to improve stability.

### Intermediate — Reimplementing Agentic Real2Sim Core Pipeline on Substitute Rigid-Object Dataset
*Effort: 2 weekends, ~20 hours*

You reimplement the core Agentic Real2Sim pipeline that converts real robot-object interaction episodes into physics-based simulation episodes. You use a substitute dataset of rigid-object manipulation videos and implement a modular pipeline with vision-language agent decisions orchestrating perception and simulation steps. You compare replay success against a simple baseline that does no agentic refinement.

**Why it shows you understood the paper:** This project shows you can translate the paper's core method into a working system, understand the modular agentic architecture, and evaluate replay success metrics, demonstrating comprehension of the main contributions and results.

**Grounded in:** Introduced an Agentic Real2Sim pipeline converting DROID robot manipulation episodes into MuJoCo-simulated episodic twins preserving actors, objects, trajectories, and physical parameters.

**Tech stack:** Python 3.11, PyTorch, MuJoCo or an open-source physics simulator like PyBullet, OpenAI CLIP or an open 31B VLM substitute for vision-language agent, NumPy, OpenCV

**Data:** Use a publicly available robot manipulation video dataset with rigid objects (e.g., a subset of the DROID-100 dataset if accessible, or a substitute dataset like the YCB Video Dataset) to simulate real-to-sim conversion.

**Build it:**

1. Implement deterministic perception modules: object segmentation, pose estimation, and physical parameter initialization.
2. Integrate a vision-language model backend (e.g., OpenAI CLIP) to guide agentic decisions for scene reconstruction and parameter refinement.
3. Set up a physics simulation environment (MuJoCo or PyBullet) to replay the reconstructed episode.
4. Implement a simple baseline pipeline that skips agentic refinement and compare replay success rates.
5. Evaluate and report replay success metrics similar to the paper's approach.
6. Document the pipeline architecture, results, and comparison in a README.

**Ships as:** A GitHub repo with a modular real-to-sim pipeline, scripts to run on the substitute dataset, replay success evaluation, and a detailed README linking the implementation to the paper's core method and results.

**Stretch goal:** Experiment with swapping the vision-language backend to a smaller or cheaper model and analyze cost vs. performance tradeoffs as in the paper.

### Advanced — Automated Real2Sim Conversion and Quantitative Evaluation for Deformable Object Manipulation
*Effort: 3+ weeks*

You extend the Agentic Real2Sim framework to support automated conversion of deformable object manipulation episodes, implementing a shared episode contract for deformable objects and integrating physics simulation for deformables. You design and run a systematic quantitative evaluation of replay success on a small deformable manipulation dataset, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep understanding of the framework's generalization, the challenges in deformable simulation, and the importance of quantitative evaluation, positioning you for research-level discussion and collaboration.

**Grounded in:** Current focus is mainly on rigid-object DROID episodes, with deformable and humanoid conversions demonstrated qualitatively but lacking systematic quantitative evaluation.

**Tech stack:** Python 3.11, PyTorch, MuJoCo or a physics engine supporting deformables (e.g., SOFA, NVIDIA Flex if accessible), OpenAI CLIP or similar VLM, NumPy, OpenCV

**Data:** Use a small publicly available deformable object manipulation video dataset or simulate deformable interactions with synthetic data if none is available.

**Build it:**

1. Design and implement a shared episode contract interface that supports deformable object state and interaction representation.
2. Extend perception modules to extract deformable object geometry and state from video.
3. Integrate deformable physics simulation into the pipeline, enabling episode replay.
4. Automate the real-to-sim conversion pipeline for deformable episodes using agentic vision-language decisions.
5. Develop quantitative replay success metrics suitable for deformable interactions.
6. Run systematic evaluation on the deformable dataset and analyze results.
7. Document the extension, evaluation methodology, and findings in a comprehensive README.

**Ships as:** A GitHub repo with an extended real-to-sim pipeline supporting deformables, evaluation scripts, quantitative results, and a detailed report linking back to the paper's limitations and future directions.

**Stretch goal:** Incorporate humanoid motion episodes into the pipeline using the shared episode contract to further unify the framework.

_The paper's authors have not released code or datasets; substitute datasets must be used or simulated for all projects._
