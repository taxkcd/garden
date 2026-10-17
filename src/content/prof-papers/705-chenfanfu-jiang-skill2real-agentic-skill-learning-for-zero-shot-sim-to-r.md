---
title: "705 · Skill2Real: Agentic Skill Learning for Zero-Shot Sim-to-Real Robot Manipulation — Chenfanfu Jiang"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-chenfanfu-jiang"
source_hash: "b2842110a2d601dcca2915f6f7441fcdad48ca2d432577060fd3159286b86498"
sequence: 705
generator: "outreach-garden: managed"
---

# 705 · Skill2Real: Agentic Skill Learning for Zero-Shot Sim-to-Real Robot Manipulation

## At a glance

- **Professor:** Chenfanfu Jiang
- **Institution:** Univ. of California - Los Angeles
- **Paper:** [Skill2Real: Agentic Skill Learning for Zero-Shot Sim-to-Real Robot Manipulation](https://arxiv.org/pdf/2610.02788)
- **Authors:** Xincheng He, Siyu Ma, Chang Yu, Yunuo Chen, Yanjia Huang, Ying Nian Wu, Yin Yang, Chenfanfu Jiang
- **Year:** 2026

## Paper overview

Skill2Real is a framework that enables robots to learn manipulation skills entirely in simulation and then apply these skills directly in the real world without additional training. It uses a hierarchical skill learning approach with two levels: local manipulation skills (Cerebellum) and task-level skill composition (Brain). The system learns validated, reusable skills through a multi-agent loop involving proposing, verifying, and governing skill updates. This approach improves the robot's ability to perform complex, long-horizon tasks robustly across different environments and robot platforms.

### Why it matters

**Research problem:** How to effectively transfer robot manipulation skills learned in simulation to real-world robots without requiring real-world task training or adaptation, especially for long-horizon tasks requiring skill composition and recovery.

**Why it matters:** Simulation provides scalable training but discrepancies between simulation and reality (appearance, dynamics, contact, embodiment) often cause failure in real-world deployment. Overcoming this sim-to-real gap is critical for practical robot learning and deployment in diverse real-world scenarios.

**Key contributions:**

- Introduced Skill2Real, an agentic policy framework that learns executable robot programs in simulation and transfers frozen skill knowledge through a shared code-based policy interface without real-world adaptation.
- Developed an asymmetric Proposer–Verifier–Governor (PVG) learning loop separating proposing skills, verifying outcomes with privileged simulation evidence, and admitting validated updates.
- Designed a hierarchical policy learning strategy where the Cerebellum learns local manipulation skills and the Brain composes these into long-horizon task programs with planning and recovery.
- Demonstrated zero-shot sim-to-real transfer of hierarchical skills on diverse benchmarks and a real UR5e robot, showing significant improvements in task success rates.

## About the professor

**Chenfanfu Jiang** — Professor, Department of Mathematics, Univ. of California - Los Angeles.

Research interests: visual computing, physical AI, 3D generative AI, embodied AI, robotics.

### Research links

- [Faculty/profile page](https://www.math.ucla.edu/~cffjiang)
- [Lab website](https://www.math.ucla.edu/aivc)
- [Google Scholar](https://scholar.google.com/citations?user=jTivVMEAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Hierarchical Reinforcement Learning
**The paper assumes:** hierarchical reinforcement learning, multi-agent policy learning, skill abstraction in robotics
**Already in this field?** Skip this entirely if you already understand hierarchical reinforcement learning concepts and their application to robot skill learning and policy composition.

This background covers Hierarchical Reinforcement Learning (HRL), which is essential to understand the Skill2Real paper's approach to decomposing robot manipulation into reusable local skills and high-level task composition. The rigorous course option provides a deep, university-level treatment of HRL, suitable for readers wanting a thorough understanding of the algorithms and theory. The fast track offers a concise, intuition-focused playlist that covers the core concepts quickly for readers who want to grasp the essentials without a large time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 14 and 15 (Exploration and Hierarchical RL and IL), about 2.2 hours total — these cover hierarchical reinforcement learning fundamentals and options, which are key to understanding Skill2Real's hierarchical skill framework.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a comprehensive, authoritative course that includes a dedicated lecture on Hierarchical RL and Imitation Learning (Lecture 15), directly covering the hierarchical policy learning and skill composition concepts central to Skill2Real.

*If you want all of it:* About 20.6 hours across all 19 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Hierarchical Reinforcement Learning](https://www.youtube.com/playlist?list=PLHD22PKARkdR5qnXSwYOzZY4VjIDvZWan) — Sean Kugele · 9 videos · 4.2h across 9 episodes

**Watch only this:** Episodes 1-5 (Hierarchical Reinforcement Learning through Learning with Options), about 2.2 hours total — these episodes cover the foundational concepts and learning methods for hierarchical RL relevant to Skill2Real.

*Why it unblocks this paper:* Sean Kugele's Hierarchical Reinforcement Learning playlist is a concise, well-structured series that covers core HRL concepts such as options, semi-Markov decision processes, and hierarchical value function decomposition, providing a clear intuition-first introduction aligned with the paper's hierarchical skill learning approach.

*If you want all of it:* About 4.2 hours across all 9 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Skill2Real paper, start with foundational concepts including sim-to-real transfer in robotics, hierarchical reinforcement learning, and multi-agent learning frameworks, as these underpin the paper's methodology. Then explore the core concept of the Skill2Real framework itself through the authors' own talk, which provides direct insights into their novel agentic skill learning approach and hierarchical skill composition for zero-shot sim-to-real robot manipulation.

### Sim-to-real transfer in robotics *(prerequisite)*
Sim-to-real transfer is a fundamental challenge addressed by Skill2Real, focusing on how to deploy policies learned in simulation onto real robots despite discrepancies in dynamics and perception. Understanding prior approaches and challenges in this area provides essential context for appreciating Skill2Real's contributions to zero-shot transfer.

*How the paper uses it:* Skill2Real tackles the sim-to-real gap by freezing learned skills and transferring them without real-world adaptation.

▶ [ICRA 2021: Auto-Tuned Sim-to-Real Transfer](https://www.youtube.com/watch?v=pEtJQ3uHYZE) — Deepak Pathak · 5 yr ago

### Hierarchical reinforcement learning *(prerequisite)*
Hierarchical reinforcement learning structures policy learning into multiple levels, enabling decomposition of complex tasks into reusable skills and high-level planning. This concept is central to Skill2Real's two-level hierarchy of Cerebellum and Brain policies for local skill learning and task-level composition.

*How the paper uses it:* Skill2Real uses hierarchical policy learning with Cerebellum and Brain levels to improve long-horizon task success.

▶ [Hierarchical Reinforcement Learning with Timed Subgoals (HiTS)](https://www.youtube.com/watch?v=JkPaI3uZU6c) — Nico Gürtler · 4 yr ago

### Multi-agent learning frameworks *(prerequisite)*
Multi-agent frameworks coordinate multiple agents to propose, verify, and govern learning updates, which is the basis for Skill2Real's Proposer–Verifier–Governor loop. Understanding multi-agent orchestration helps grasp how Skill2Real separates skill proposal, validation, and admission.

*How the paper uses it:* Skill2Real's PVG loop is a multi-agent system that improves skill learning by separating proposing, verifying, and governing skill updates.

▶ [Building Scalable Multi-agent Frameworks](https://www.youtube.com/watch?v=uBQiNdPKQ8M) — Clintin Lyle Kruger · 2 yr ago

### Skill2Real paper talk *(paper-talk search result; attribution unverified)*
The authors' own talk on Skill2Real provides the most direct and detailed explanation of their framework, methodology, and experimental results. It offers insights into the shared code-based policy interface, hierarchical skill learning, and zero-shot sim-to-real transfer demonstrated on real robots.

*How the paper uses it:* This talk directly presents the Skill2Real framework and its contributions from the paper's authors.

▶ [Skill2Real: Learning robot skills as code in simulation, then running them on a real arm](https://www.youtube.com/watch?v=1Upq_3eDzIo) — ArXivSignals · 12 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand Skill2Real, start by learning the fundamental challenge of sim-to-real transfer in robotics, which explains why simulation-trained skills often fail in the real world. Next, grasp hierarchical reinforcement learning, the core method for structuring skills into local and task-level policies as used in Skill2Real. Then, explore multi-agent learning frameworks to understand the Proposer–Verifier–Governor loop coordinating skill proposal and validation. Finally, dive into the Skill2Real paper talk for a direct explanation of the framework and its innovations.

### Sim-to-real transfer in robotics *(prerequisite)*
Sim-to-real transfer addresses the challenge of deploying robot skills learned in simulation to real-world robots, overcoming differences in physics, sensors, and environments. Understanding this helps appreciate why Skill2Real’s zero-shot transfer is significant.

*How the paper uses it:* Skill2Real tackles the sim-to-real gap by transferring frozen skills learned entirely in simulation to real robots without adaptation.

▶ [Sim-to-Real Transfer Explained: How Robots Learn in Simulation and Survive the Real World](https://www.youtube.com/watch?v=nCLXJcuXYJY) — Engineering Insider · 4 mo ago

### Hierarchical reinforcement learning *(prerequisite)*
Hierarchical reinforcement learning breaks down complex tasks into simpler sub-skills organized in layers, enabling efficient learning and planning. This concept is key to Skill2Real’s Cerebellum and Brain skill hierarchy.

*How the paper uses it:* Skill2Real uses a two-level hierarchy where local manipulation skills (Cerebellum) are composed into long-horizon task programs (Brain).

▶ [Hierarchical Reinforcement Learning with Timed Subgoals (HiTS)](https://www.youtube.com/watch?v=JkPaI3uZU6c) — Nico Gürtler · 4 yr ago

### Multi-agent learning frameworks *(prerequisite)*
Multi-agent learning frameworks coordinate multiple agents working together, each with specialized roles, to solve complex problems collaboratively. This explains the Proposer–Verifier–Governor loop in Skill2Real.

*How the paper uses it:* Skill2Real’s learning loop uses three agents proposing, verifying, and governing skill updates to improve learning robustness.

▶ [Building Scalable Multi-agent Frameworks](https://www.youtube.com/watch?v=uBQiNdPKQ8M) — Clintin Lyle Kruger · 2 yr ago

### Skill2Real paper talk *(paper-talk search result; attribution unverified)*
This talk directly presents the Skill2Real framework, explaining how it learns executable robot programs in simulation and transfers them to real robots zero-shot. It ties together the concepts of hierarchical skill learning and multi-agent coordination.

*How the paper uses it:* The talk is by the authors and covers the full Skill2Real approach, including the shared code-based policy interface and experimental results.

▶ [Skill2Real: Learning robot skills as code in simulation, then running them on a real arm](https://www.youtube.com/watch?v=1Upq_3eDzIo) — ArXivSignals · 12 days ago

## Already in your library

- [HAI Seminar: Learning by Creating – A Human-Centered Vision for AI in Education](https://www.youtube.com/watch?v=iOyaj5u0-DY) — also for: The Potential of Diverse Youth as Stakeholders in Identifying and Mitigating Algorithmic Bias for a Future of Fairer AI (Amy E. Ogan)
- [Hierarchical reinforcement learning - Doina Precup](https://www.youtube.com/watch?v=e8b0yC6COJ8) — also for: GHOST: Hierarchical Sub-Goal Policies for Generalizing Robot Manipulation (David Held)
- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Multi-Agent AI Systems Explained: The Complete Guide](https://www.youtube.com/watch?v=-zBbij9rrEI) — also for: Social Theory Should Be a Structural Prior for Agentic AI: A Formal Framework for Multi-Agent Social Systems (Kathleen M. Carley)
- [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [Stanford AA203 Optimal and Learning-Based Control](https://www.youtube.com/watch?v=C9mLpI8Td9g) — also for: The Gittins Index: A Design Principle for Decision-Making Under Uncertainty (Ziv Scully)
- [Robot Learning 2026 – Lecture 9: Generalist Robot Policies ...](https://www.youtube.com/watch?v=dtofzDY9zuo) — also for: Video Generators are Robot Policies (Ruoshi Liu)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Skill2Real paper's hierarchical, multi-agent skill learning framework for zero-shot sim-to-real robot manipulation. The beginner project recreates a core mechanism of the Proposer–Verifier–Governor loop in simulation with simplified tasks. The intermediate project implements a minimal hierarchical skill learning system inspired by the Cerebellum and Brain levels on a public robotic manipulation simulator, comparing success rates with a baseline. The advanced project extends the Skill2Real approach by exploring integration of end-to-end policies as callable tools within the code-based policy interface, addressing a key future direction of the paper.

### Beginner — Simulated Proposer–Verifier–Governor Loop for Skill Validation
*Effort: a weekend, ~8 hours*

You build a simplified simulation environment where a Proposer agent suggests parameterized manipulation skills, a Verifier agent evaluates their success using privileged simulation data, and a Governor agent decides whether to accept skill updates. The system runs iterative skill proposals and validations to improve a local manipulation skill's success rate.

**Why it shows you understood the paper:** This project demonstrates your grasp of the PVG multi-agent loop separating proposing, verifying, and governing skill updates, a core contribution of Skill2Real that improves skill learning and transfer.

**Grounded in:** The Proposer–Verifier–Governor loop improves skill learning by separating proposing, diagnosing, and admitting skill updates. Ablation studies show removing the Verifier or Governor reduces transfer success by 13-17 percentage points.

**Tech stack:** Python 3.11, PyBullet (for simulation), NumPy

**Data:** You simulate a simple robotic arm environment with a few manipulation primitives (e.g., pick, place) and synthetic success/failure signals generated from the simulator's privileged state.

**Build it:**

1. Set up a simple PyBullet simulation with a robotic arm and a few objects.
2. Implement a Proposer agent that generates parameterized manipulation skill candidates.
3. Implement a Verifier agent that uses privileged simulation state to evaluate skill success.
4. Implement a Governor agent that decides whether to accept skill updates based on Verifier feedback.
5. Run iterative loops of proposing, verifying, and governing to improve skill success.
6. Log and plot skill success rates over iterations.

**Ships as:** A GitHub repo with code to run the PVG loop in simulation, a README explaining the agents and their roles, and plots showing skill success improvement.

**Stretch goal:** Add a simple Brain-level planner that composes multiple local skills into a short task sequence.

### Intermediate — Hierarchical Skill Learning on Robosuite with Sim-to-Real Transfer Metrics
*Effort: 2 weekends, ~20 hours*

You implement a minimal hierarchical skill learning system inspired by Skill2Real's Cerebellum and Brain levels using the Robosuite simulator. The Cerebellum learns local manipulation skills as reusable code-based policies, and the Brain composes these into longer-horizon task programs. You evaluate success rates on a subset of Robosuite tasks and compare against a baseline flat policy.

**Why it shows you understood the paper:** This project shows you can reimplement the core hierarchical skill learning method from the paper, demonstrating the benefit of skill composition and multi-agent learning for improved task success and sim-to-real transfer metrics.

**Grounded in:** Hierarchical skill learning with Cerebellum and Brain levels improves long-horizon task success. Cerebellum learning raises success from 2.0% to 35.3%, and Brain learning further raises it to 56.3% on unseen tasks.

**Tech stack:** Python 3.11, PyTorch, Robosuite, NumPy

**Data:** Robosuite open-source robotic manipulation simulator tasks are used as a proxy for the paper's benchmarks.

**Build it:**

1. Install Robosuite and set up a few manipulation tasks (e.g., pick-place, stacking).
2. Implement a Cerebellum module that learns local manipulation skills as parameterized policies.
3. Implement a Brain module that composes learned skills into longer-horizon task sequences.
4. Train the Cerebellum skills in simulation using reinforcement learning or imitation learning.
5. Train the Brain to plan skill sequences to solve tasks.
6. Evaluate task success rates and compare against a baseline flat policy without hierarchical skills.
7. Document results and analysis in the README.

**Ships as:** A GitHub repo with hierarchical skill learning code on Robosuite, training scripts, evaluation metrics, and a README describing the approach and results.

**Stretch goal:** Add a simple Proposer–Verifier–Governor loop to validate skill updates during training.

### Advanced — Extending Skill2Real with End-to-End Policies as Callable Tools
*Effort: 3+ weeks*

You extend the Skill2Real hierarchical skill framework by integrating end-to-end learned policies as callable tools within the shared code-based policy interface. This addresses the paper's future direction of supporting more reactive, closed-loop execution while maintaining hierarchical skill composition and zero-shot sim-to-real transfer. You implement a prototype system and evaluate latency and task success improvements on simulated tasks.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper, demonstrating deep comprehension of the Skill2Real architecture and the challenges of balancing hierarchical skill reuse with reactive end-to-end control for real-world deployment.

**Grounded in:** The current system does not incorporate end-to-end policies as callable tools, which could improve closed-loop execution speed and reactivity. Future directions include extending the code-as-policy interface to include end-to-end policies as callable tools.

**Tech stack:** Python 3.11, PyTorch, Robosuite, FastAPI (optional for API interface)

**Data:** Use Robosuite tasks as simulation environment; no authors' code available so reimplementation is required.

**Build it:**

1. Reimplement or adapt a hierarchical skill learning system similar to Skill2Real on Robosuite.
2. Train end-to-end policies for selected subtasks using reinforcement learning.
3. Design and implement an extension of the shared code-based policy interface to call end-to-end policies as tools.
4. Integrate these callable end-to-end policies into the Brain-level skill composition.
5. Evaluate task success rates, execution latency, and reactivity compared to baseline hierarchical skills without end-to-end tools.
6. Document design decisions, implementation details, and evaluation results.

**Ships as:** A GitHub repo with extended hierarchical skill learning code supporting callable end-to-end policies, evaluation scripts, and a detailed README discussing the extension and its impact.

**Stretch goal:** Experiment with real robot backend API simulation or hardware-in-the-loop testing for zero-shot sim-to-real transfer validation.
