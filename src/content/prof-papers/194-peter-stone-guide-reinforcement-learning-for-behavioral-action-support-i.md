---
title: "194 · GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes — Peter Stone"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-peter-stone"
source_hash: "ac2b4861cc23054545f379681ebbeb68a97678ddb3794de5476e479c7f65ee88"
sequence: 194
generator: "outreach-garden: managed"
---

# 194 · GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes

## At a glance

- **Professor:** Peter Stone
- **Institution:** University of Texas at Austin
- **Paper:** [GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes](https://arxiv.org/abs/2604.00385)
- **Authors:** Saman Khamesian, Sri Harini Balaji, Di Yang Shi, Stephanie M. Carpenter, Daniel E. Rivera, W. Bradley Knox, Peter Stone, Hassan Ghasemzadeh
- **Year:** 2026

## Paper overview

This paper introduces GUIDE, a reinforcement learning framework designed to support people with Type 1 Diabetes by providing personalized behavioral recommendations, including insulin dosing and carbohydrate intake, to maintain blood glucose within safe ranges. Unlike prior methods focusing only on insulin delivery, GUIDE models multiple self-management behaviors and their timing, improving glucose control in simulated environments based on real patient data.

### Why it matters

**Research problem:** Managing Type 1 Diabetes requires continuous adjustment of insulin and lifestyle behaviors to maintain blood glucose within a safe target range. Current automated insulin delivery systems and reinforcement learning approaches focus mainly on insulin dosing and often neglect behavioral recommendations, which limits glycemic control effectiveness.

**Why it matters:** Despite advances in automated insulin delivery, about 80% of people with Type 1 Diabetes do not meet clinical glucose targets, leading to risks of hypo- and hyperglycemia. Improving decision support that integrates behavioral actions alongside insulin dosing can reduce these risks and improve patient outcomes.

**Key contributions:**

- Development of a reinforcement learning framework (GUIDE) that provides behavioral action support (insulin and carbohydrate intake) rather than insulin-only control.
- Integration of a personalized glucose level predictor trained on real-world patient data to simulate glucose dynamics.
- Design of a structured action space modeling action type, magnitude, and timing to generate realistic self-management recommendations.
- Evaluation of multiple RL algorithms (offline and online) under a unified environment and reward function.
- Demonstration that conservative offline RL (CQL-BC) achieves the highest average time-in-range (85.49%) while maintaining low hypoglycemia exposure.

## About the professor

**Peter Stone** — Department Chair and Founding Director, Department of Computer Science, University of Texas at Austin.

Research interests: machine learning, multiagent systems, and robotics

### Research links

- [Faculty/profile page](https://www.cs.utexas.edu/~pstone)
- [Resolved homepage](https://www.cs.utexas.edu/~pstone/)
- [Lab website](http://z.cs.utexas.edu/users/ai-lab/)
- [Social profile](https://twitter.com/utlarg)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** foundations of reinforcement learning, Markov decision processes, policy optimization algorithms
**Already in this field?** Skip this entirely if you already understand reinforcement learning fundamentals including MDPs and policy learning algorithms.

This background is designed to provide a solid understanding of reinforcement learning (RL), which is central to the GUIDE framework's methodology for personalized diabetes management. The rigorous course option offers a deep dive into RL algorithms, including offline RL methods like CQL-BC used in the paper, while the fast track provides a concise, intuition-driven introduction to core RL concepts and learning dynamics. Choose the rigorous course if you want comprehensive technical mastery; choose the fast track if you want a quick, clear conceptual grasp to understand the paper's main ideas efficiently.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-7, about 7.5 hours — covering introduction, imitation learning, policy gradients, actor-critic methods, off-policy actor-critic, Q-learning, and offline RL (CQL). Stop after Lecture 7 to grasp the core RL algorithms and offline RL techniques used in GUIDE.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a recent, authoritative university course that covers practical deep RL algorithms, including offline RL (Lecture 7) and policy gradient methods relevant to GUIDE's approach. It provides a rigorous foundation to understand the paper's use of CQL-BC, PPO, SAC, and structured action spaces.

*If you want all of it:* 20.6 hours across all 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning Explained – Animated Examples](https://www.youtube.com/playlist?list=PLgcKMlJueAM5OK104-hP_wBpOjZCHGfTf) — Reinforcement Learning Explained–Animated Learning · 9 videos

**Watch only this:** Episodes 1-5, about 25-30 minutes — covering basic RL intuition, learning from delayed rewards, bandit problems, and policy learning through engaging animations. This subset provides a fast, conceptual overview of RL principles relevant to the paper.

*Why it unblocks this paper:* Reinforcement Learning Explained – Animated Examples offers clear, visual explanations of RL concepts and learning dynamics, making it ideal for quickly building intuition about how RL agents learn from delayed rewards and optimize behavior, which underpins GUIDE's methodology.

*If you want all of it:* About 45-50 minutes across all 9 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the GUIDE framework for reinforcement learning in Type 1 Diabetes behavioral action support, start with foundational knowledge on offline reinforcement learning algorithms and structured action spaces, as these underpin the policy learning and action modeling in GUIDE. Next, explore continuous glucose monitoring data modeling to grasp the personalized glucose prediction component. Then, study reinforcement learning applications in healthcare decision support to contextualize GUIDE's approach. Finally, focus on the core concept of GUIDE's reinforcement learning framework for diabetes management, prioritizing the authors' own talks or closely related advanced research presentations.

### Offline reinforcement learning algorithms *(prerequisite)*
Offline RL is critical for GUIDE since it learns policies from logged patient data without active exploration, enabling safer and more reliable behavioral recommendations. Understanding algorithms like CQL-BC, which GUIDE uses to achieve high time-in-range, is foundational to grasping the paper's methodology and results.

*How the paper uses it:* GUIDE uses offline RL methods like CQL-BC to learn policies from logged patient data.

▶ [CS 285: Lecture 15, Part 1: Offline Reinforcement Learning](https://www.youtube.com/watch?v=NV4oSWe1H9o) — RAIL · 38:01

### Structured action spaces in reinforcement learning *(prerequisite)*
GUIDE models actions jointly by type, magnitude, and timing to generate realistic and personalized self-management recommendations. Understanding how structured action spaces are designed and leveraged in RL is essential to appreciate the novelty and effectiveness of GUIDE's action representation.

*How the paper uses it:* GUIDE models actions jointly by type, magnitude, and timing to generate realistic recommendations.

▶ [Ayal Taitler on Stochastic Planning and Reinforcement ...](https://www.youtube.com/watch?v=XahzBpMso2w) — AI Robotics Seminar - University of Toronto · 51:18

### Continuous glucose monitoring data modeling *(prerequisite)*
Personalized glucose prediction models trained on CGM data form the simulation environment where GUIDE is evaluated. Familiarity with CGM technology and data interpretation is necessary to understand how GUIDE simulates glucose dynamics and personalizes recommendations.

*How the paper uses it:* Personalized glucose prediction models trained on CGM data underpin the simulation environment.

▶ [How to Use & Interpret a Continuous Glucose Monitor (CGM) | Dr. Casey Means & Dr. Andrew Huberman](https://www.youtube.com/watch?v=XD1y3LhMk5k) — Huberman Lab Clips · 10:35 · 1 year ago

### Reinforcement learning for healthcare decision support
This concept situates GUIDE within the broader context of RL applications in healthcare, highlighting challenges and methodologies for sequential decision-making in personalized treatment. It provides insight into how RL can be adapted for clinical decision support beyond insulin dosing alone.

*How the paper uses it:* Central method applying RL to personalized behavioral and insulin dosing recommendations.

▶ [Reinforcement Learning in Healthcare: Applications and ...](https://www.youtube.com/watch?v=v1A5cTQkXio) — T-CAIREM · 58:46

### GUIDE reinforcement learning talk *(the paper's own talk)*
The authors' own talks or closely related presentations provide the most direct and detailed exposition of GUIDE's framework, including its integration of behavioral actions, offline RL algorithms, and personalized glucose modeling. These talks offer the best insight into the paper's contributions and evaluation.

*How the paper uses it:* Direct source for understanding the authors' presentation of their novel RL framework.

▶ [Deep Reinforcement Learning based Insulin Controller for Effective Type-1 Diabetic Care](https://www.youtube.com/watch?v=tcS3YsK8Wh0) — MLconf · 19:12 · 7 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts in reinforcement learning (RL) and their application to healthcare decision support, focusing on personalized behavioral action support for Type 1 Diabetes as presented in the GUIDE framework. We start with intuitive, beginner-friendly explanations of RL basics, then explore RL in healthcare contexts, followed by specialized topics like offline RL algorithms, continuous glucose monitoring data modeling, and structured action spaces. This progression builds the intuition and domain understanding necessary to grasp how GUIDE integrates these elements for personalized diabetes management.

### Reinforcement learning basics *(the paper's own talk)*
Learn what reinforcement learning is, how agents learn by interacting with environments through states, actions, and rewards, and how this enables sequential decision-making. This foundational understanding is critical before exploring RL applications in healthcare or advanced RL methods.

*How the paper uses it:* GUIDE uses reinforcement learning as the core method to generate personalized behavioral recommendations for diabetes management.

▶ [Reinforcement Learning: Essential Concepts](https://www.youtube.com/watch?v=Z-T0iJEXiwM) — StatQuest with Josh Starmer · 18:13

### Reinforcement learning for healthcare decision support
Explore how reinforcement learning is applied specifically to healthcare problems, including challenges like personalized treatment and sequential decision-making under uncertainty. This helps contextualize GUIDE’s approach within the broader field of AI-driven health interventions.

*How the paper uses it:* GUIDE applies RL to support behavioral and insulin dosing decisions, improving glycemic control in Type 1 Diabetes.

▶ [Reinforcement Learning in Healthcare: Applications and ...](https://www.youtube.com/watch?v=v1A5cTQkXio) — T-CAIREM · 58:46

### Offline reinforcement learning algorithms *(prerequisite)*
Understand offline RL, where policies are learned from previously collected data without active environment interaction, which is crucial for safety-critical domains like healthcare. Learn why offline RL methods like CQL-BC are effective for learning from logged patient data.

*How the paper uses it:* GUIDE leverages offline RL algorithms such as CQL-BC to learn personalized policies from historical patient data safely and effectively.

▶ [A Gentle Introduction to Offline Reinforcement Learning](https://www.youtube.com/watch?v=tW-BNW1ApN8) — RAIL · 18:53

### Continuous glucose monitoring data modeling *(prerequisite)*
Gain insight into continuous glucose monitors (CGMs), how they collect real-time blood glucose data, and why modeling this data accurately is essential for personalized glucose prediction and simulation environments.

*How the paper uses it:* GUIDE integrates a personalized glucose prediction model trained on real-world CGM data to simulate glucose dynamics for policy evaluation.

▶ [The Complete Guide to Understanding Your CGM Data](https://www.youtube.com/watch?v=DVND90vQ0xI) — Nourished by Science · 26:32

### Structured action spaces in reinforcement learning *(prerequisite)*
Learn about modeling complex actions in RL that combine discrete and continuous components, such as action type, magnitude, and timing, to generate realistic and interpretable recommendations.

*How the paper uses it:* GUIDE models behavioral actions jointly by type, magnitude, and timing to produce realistic self-management recommendations for insulin and carbohydrate intake.

▶ [An introduction to Reinforcement Learning](https://www.youtube.com/watch?v=JgvyzIkgxF0) — Arxiv Insights · 16:27 · 8 years ago

### GUIDE reinforcement learning talk *(the paper's own talk)*
Watch a focused presentation on applying deep reinforcement learning to blood glucose control, illustrating the challenges and solutions in closed-loop diabetes management, closely related to GUIDE’s approach.

*How the paper uses it:* This talk provides direct insights into the authors’ RL framework for personalized diabetes management, complementing the paper’s contributions.

▶ [B2 Deep Reinforcement Learning for Closed-Loop Blood Glucose Control](https://www.youtube.com/watch?v=MEccJF90fCw) — Machine Learning for Healthcare · 6 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate understanding of the GUIDE framework for reinforcement learning-based behavioral action support in Type 1 Diabetes management. The beginner project reproduces a core mechanism of the structured action space and behavioral recommendations. The intermediate project runs and extends the authors' released GUIDE code to evaluate RL algorithms on simulated patient data. The advanced project addresses a key limitation by modeling partial adherence to recommendations, extending GUIDE towards real-world applicability.

### Beginner — Simulate Structured Behavioral Actions for Diabetes Management
*Effort: a weekend, ~8 hours*

You build a simple Python simulation that models the structured action space described in GUIDE, including action type (insulin injection, carbohydrate intake, or no action), magnitude, and timing within an hour. You implement a basic rule-based agent that generates behavioral recommendations and visualize the timing and distribution of these actions over a day.

**Why it shows you understood the paper:** This project shows you understand how GUIDE models multiple self-management behaviors jointly with timing, a key innovation over insulin-only control. A professor would see you grasp the structured action space and its role in personalized recommendations.

**Grounded in:** The action space models action type, magnitude, and timing jointly.

**Tech stack:** Python 3.11, matplotlib, numpy, pandas

**Data:** You synthesize simple simulated patient behavioral data based on descriptions in the paper, as no raw data is needed for this demonstration.

**Build it:**

1. Implement a Python class representing the structured action space with fields for action type, magnitude, and timing.
2. Create a rule-based policy that generates daily sequences of actions mimicking insulin and carbohydrate intake events with timing.
3. Simulate a day's worth of actions and store them in a structured format (e.g., CSV or DataFrame).
4. Visualize the distribution of action types and timing using matplotlib plots.
5. Write a README explaining the action space design and how it relates to GUIDE's behavioral recommendations.

**Ships as:** A GitHub repo with Python code simulating structured behavioral actions and visualizations, plus a README linking the simulation to the paper's action space concept.

**Stretch goal:** Add stochastic variability to action timing and magnitudes to better mimic patient behavior patterns.

### Intermediate — Run and Evaluate GUIDE's Offline RL Algorithms on Simulated Patient Data
*Effort: 1-3 weekends*

You clone and run the GUIDE codebase from the authors' GitHub repository to reproduce the evaluation of offline RL algorithms (e.g., CQL-BC) on the personalized simulation environment. You extend the evaluation by adding a simple baseline (e.g., a heuristic policy) and compare time-in-range (TIR) metrics. You generate plots of TIR and hypoglycemia exposure to replicate key results.

**Why it shows you understood the paper:** This project shows you can operate the authors' code, understand the RL framework integrating behavioral actions, and reproduce core quantitative results. Adding a baseline comparison demonstrates your ability to critically evaluate RL policies.

**Grounded in:** Evaluation of multiple RL algorithms (offline and online) under a unified environment and reward function; CQL-BC algorithm achieved the highest mean time-in-range (85.49%) across 25 individuals.

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib, pandas

**Data:** Uses the personalized data-driven simulation environment derived from the AZT1D dataset as provided in the GUIDE GitHub repository.

**Build it:**

1. Clone the GUIDE repository from https://github.com/SamanKhamesian/GUIDE and install dependencies.
2. Run the provided scripts to train and evaluate the CQL-BC offline RL algorithm on the simulation environment.
3. Implement a simple heuristic baseline policy (e.g., fixed insulin and carb dosing) within the environment.
4. Evaluate and compare the baseline and CQL-BC policies on metrics like time-in-range and hypoglycemia exposure.
5. Plot and analyze the results, replicating figures similar to those in the paper.
6. Document your process and findings in a detailed README.

**Verified links from the paper:**

- <https://github.com/SamanKhamesian/GUIDE> — released by the paper's authors

**Ships as:** A forked GitHub repo with runnable GUIDE code, added baseline policy, evaluation scripts, and plots comparing RL algorithms and baseline performance.

**Stretch goal:** Experiment with modifying the structured action space parameters or reward function to observe effects on policy performance.

### Advanced — Model Partial Adherence in GUIDE to Reflect Real-World Behavioral Variability
*Effort: a few weeks*

You extend the GUIDE framework by implementing a partial adherence model that probabilistically simulates patient non-compliance with recommended actions. You modify the simulation environment to incorporate adherence variability and retrain RL policies under these conditions. You analyze how partial adherence affects glycemic control metrics and propose adjustments to the RL agent to improve robustness.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction stated in the paper, demonstrating deep comprehension of GUIDE's assumptions and real-world challenges. It shows your ability to innovate on the framework and prepare it for clinical relevance.

**Grounded in:** Assumes full patient adherence to recommended actions, which is rarely achievable in real-world settings; future direction: Modeling partial adherence and user acceptance to better reflect real-world behavior.

**Tech stack:** Python 3.11, PyTorch, numpy, matplotlib, pandas

**Data:** Uses the GUIDE simulation environment and AZT1D-based patient models from the authors' repository, extended with synthetic adherence behavior.

**Build it:**

1. Study the GUIDE codebase to understand how recommended actions are applied in the simulation environment.
2. Design and implement a probabilistic adherence model that randomly modifies or skips recommended actions based on adherence rates.
3. Integrate this adherence model into the simulation environment to simulate partial compliance.
4. Retrain or fine-tune the RL agent (e.g., CQL-BC) under the new environment with partial adherence.
5. Evaluate the impact on glycemic control metrics (time-in-range, hypoglycemia exposure) compared to full adherence.
6. Document findings and suggest potential policy adaptations to mitigate adherence variability.

**Verified links from the paper:**

- <https://github.com/SamanKhamesian/GUIDE> — released by the paper's authors

**Ships as:** A GitHub repo with extended GUIDE code supporting partial adherence simulation, retrained RL policies, evaluation scripts, and a comprehensive README discussing results and implications.

**Stretch goal:** Incorporate user acceptance modeling or multi-scale lifestyle factors (e.g., sleep, physical activity) into the adherence framework.
