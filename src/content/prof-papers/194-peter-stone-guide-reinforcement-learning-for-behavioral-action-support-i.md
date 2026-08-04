---
title: "194 · GUIDE: Reinforcement Learning for Behavioral Action Support in Type 1 Diabetes — Peter Stone"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-peter-stone"
source_hash: "94d2023bce6e2198b72f34f432f1430d0b5cdee77266fdbbd791490fb0d53267"
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
