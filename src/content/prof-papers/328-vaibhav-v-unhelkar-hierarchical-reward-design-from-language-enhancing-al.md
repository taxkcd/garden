---
title: "328 · Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications — Vaibhav V. Unhelkar"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-vaibhav-v-unhelkar"
source_hash: "98ab3a0c52cf80943d5fd9fd57c92c9d3f9bb33f70cf7f9a9d5d8c0253a1350f"
sequence: 328
generator: "outreach-garden: managed"
---

# 328 · Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications

## At a glance

- **Professor:** Vaibhav V. Unhelkar
- **Institution:** Rice University
- **Paper:** [Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications](https://arxiv.org/abs/2602.18582)
- **Authors:** Zhiqin Qian, Ryan Diaz, Sangwon Seo, Vaibhav Unhelkar
- **Year:** 2026

## Paper overview

This paper introduces a new way to design rewards for AI agents that perform complex tasks by breaking down the reward design into hierarchical levels. Using natural language instructions, the method generates rewards that guide both high-level task choices and low-level actions, improving how well AI behavior aligns with human expectations. Experiments show that this hierarchical approach leads to better task completion and adherence to human-specified behaviors compared to traditional flat reward methods.

### Why it matters

**Research problem:** Existing reward design methods for reinforcement learning agents are limited in capturing nuanced human preferences, especially in long-horizon tasks that involve multiple subtasks. Flat reward functions cannot effectively encode complex behavioral specifications such as subtask ordering and execution details, limiting human-AI alignment.

**Why it matters:** As AI agents are increasingly deployed in human-centric environments like homes, hospitals, and disaster zones, it is critical that their behavior aligns closely with human intentions, safety requirements, and operational rules. Better reward design methods enable responsible AI deployment by ensuring agents not only complete tasks but do so in ways that meet human expectations.

**Key contributions:**

- Formal definition of the Hierarchical Reward Design (HRD) problem, extending classical flat reward design to hierarchical settings.
- Proof that hierarchical rewards are strictly more expressive than flat rewards while remaining compatible with standard RL frameworks.
- Introduction of HRDL, a language-based instantiation of HRD that generates hierarchical rewards from natural language specifications.
- Development of L2HR, an algorithm leveraging LLMs to generate hierarchical reward functions with a structured prompting and training pipeline.
- Comprehensive empirical evaluation across multiple domains showing that hierarchical rewards improve syntactic correctness, task feasibility, and alignment with human specifications compared to flat rewards.

## About the professor

**Vaibhav V. Unhelkar** — Assistant Professor, Computer Science, Rice University.

Research interests: human-robot interaction (HRI), interactive machine learning, human-AI collaboration, applications of robotics in healthcare and disaster response

### Research links

- [Faculty/profile page](https://unhelkar.github.io/index.html)
- [Resolved homepage](https://unhelkar.github.io/)
- [Lab website](https://unhelkar.github.io/group/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Hierarchical Reward Design from Language," start by building foundational knowledge in reinforcement learning reward design and hierarchical reinforcement learning, as these underpin the paper's technical approach. Next, explore the role of large language models in code generation, which is critical for the L2HR method. Then, study the human-AI alignment context to appreciate the motivation and impact of the work. Finally, focus on the core concept of hierarchical reward design and the authors' own related talks to grasp their novel contributions and empirical findings.

### Reward Design in Reinforcement Learning *(prerequisite)*
Understanding how reward functions shape agent behavior and the challenges in encoding complex tasks is essential before delving into hierarchical reward design. This section covers advanced lectures on reward learning in RL from reputable academic sources, providing a rigorous foundation.

*How the paper uses it:* The paper extends classical flat reward design to hierarchical reward design, so a solid grasp of reward design fundamentals is necessary.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=iKWYLSVAtfM) — Stanford Online · 1:09:33

### Hierarchical Reinforcement Learning *(prerequisite)*
Hierarchical reinforcement learning forms the basis for understanding multi-level decision making and how hierarchical rewards integrate with it. This section includes advanced seminars and talks by leading researchers, offering deep insights into hierarchical RL frameworks.

*How the paper uses it:* The hierarchical reward functions generated by L2HR integrate with hierarchical RL algorithms, making this foundational knowledge critical.

▶ [RLVS 2021 - Day 1 - Introduction to hierarchical reinforcement learning](https://www.youtube.com/watch?v=kSFjMely5q8) — ANITI Toulouse · 5 years ago

### Large Language Models for Code Generation *(prerequisite)*
Since the L2HR method leverages large language models to generate hierarchical reward functions from natural language, understanding how LLMs perform code generation is vital. This section features detailed talks on LLMs for code generation from research-focused channels.

*How the paper uses it:* L2HR uses structured prompting and training of LLMs to produce executable hierarchical reward code.

▶ [Large Language Models for Code Generation - Meetup ...](https://www.youtube.com/watch?v=VPy7HpmKCuA) — Crafting Data Science · 33:06

### Human-AI Alignment *(prerequisite)*
Contextualizing the importance of aligning AI agent behavior with human intentions and specifications is key to appreciating the paper's motivation and impact. This section includes university lectures and research talks that rigorously explore AI alignment challenges.

*How the paper uses it:* The paper aims to improve alignment of agent behavior with human specifications through hierarchical reward design.

▶ [MIT 6.S093: Introduction to Human-Centered Artificial ...](https://www.youtube.com/watch?v=bmjamLZ3v8A) — Lex Fridman · 1:07:35

### Hierarchical Reward Design from Language paper talk *(the paper's own talk)*
The authors' own talks provide the most direct and insightful explanation of their novel hierarchical reward design approach using language models. These presentations offer detailed methodology, experimental results, and future directions straight from the researchers.

*How the paper uses it:* Direct source for understanding the authors' presentation and insights on their novel hierarchical reward design approach.

▶ [Minae Kwon's talk on "Reward Design with Language Models"](https://www.youtube.com/watch?v=v4A5kc6ZVsE) — Stanford ILIAD · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in reinforcement learning and reward design, then builds up to hierarchical reinforcement learning and the use of large language models for code generation, culminating in the core idea of hierarchical reward design from language as presented in the paper. The sequence ensures a clear understanding of how AI agents learn from rewards, how hierarchical structures improve learning and alignment, and how language models enable automatic reward function generation.

### Reward Design in Reinforcement Learning *(prerequisite)*
Reward design is fundamental to reinforcement learning because it defines the goals an AI agent tries to achieve. Understanding how rewards shape agent behavior and the challenges in encoding complex tasks is essential before exploring hierarchical or language-based reward methods.

*How the paper uses it:* The paper improves upon traditional flat reward design by introducing hierarchical reward functions that better capture complex human specifications.

▶ [Stanford CS224R Deep Reinforcement Learning | Spring ...](https://www.youtube.com/watch?v=iKWYLSVAtfM) — Stanford Online · 1:09:33

### Hierarchical Reinforcement Learning *(prerequisite)*
Hierarchical reinforcement learning breaks down decision-making into multiple levels, allowing agents to plan and act over longer time horizons with subtasks. This concept is key to understanding how hierarchical rewards guide both high-level choices and low-level actions.

*How the paper uses it:* The paper's hierarchical reward design integrates naturally with hierarchical reinforcement learning frameworks to improve alignment and task feasibility.

▶ [RLVS 2021 - Day 1 - Introduction to hierarchical reinforcement learning](https://www.youtube.com/watch?v=kSFjMely5q8) — ANITI Toulouse · 5 years ago

### Large Language Models for Code Generation *(prerequisite)*
Large language models can generate code from natural language prompts, enabling automatic creation of complex reward functions. Understanding this technology clarifies how the paper's L2HR method translates human instructions into executable hierarchical rewards.

*How the paper uses it:* The L2HR algorithm leverages large language models to generate hierarchical reward functions directly from natural language specifications.

▶ [Large Language Models for Code Generation - Meetup ...](https://www.youtube.com/watch?v=VPy7HpmKCuA) — Crafting Data Science · 33:06

### Hierarchical Reward Design from Language paper talk *(the paper's own talk)*
A direct presentation by researchers on their novel approach to hierarchical reward design using language models, providing insights into the motivation, method, and empirical results.

*How the paper uses it:* This talk covers the paper's main contributions and experimental findings, offering an authoritative overview from the authors.

▶ [Minae Kwon's talk on "Reward Design with Language Models"](https://www.youtube.com/watch?v=v4A5kc6ZVsE) — Stanford ILIAD · 3 years ago

## Already in your library

- [CSL Spring'21 - Lecture 8: Reward Design & Shaping](https://www.youtube.com/watch?v=hj5GWf69h10) — also for: AdaTooler-V: Adaptive Tool-Use for Images and Videos (Yuzhang Shang)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [What is AI Alignment and Why is it Important?](https://www.youtube.com/watch?v=MUjvQvVJxHw) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the Hierarchical Reward Design from Language (HRDL) paper. Starting with a beginner-level project that reproduces a simple hierarchical reward generation example using the authors' code, the intermediate project involves running and extending the L2HR algorithm on a simulated domain to compare hierarchical vs flat rewards on alignment metrics. The advanced project tackles a future direction by integrating human-in-the-loop feedback to adapt hierarchical rewards dynamically during agent deployment, extending the original method towards real-time alignment improvements.

### Beginner — Run and Visualize Hierarchical Reward Generation
*Effort: a weekend, ~8 hours*

You build a small demo that runs the authors' hierarchical reward generation code on a simple natural language task specification and visualizes the generated hierarchical reward function structure. This reproduces the syntax correctness and hierarchical reward code generation aspect from the paper.

**Why it shows you understood the paper:** This project shows you understand the core concept of hierarchical reward generation from language and can operate the authors' released code to produce and inspect hierarchical reward functions, demonstrating comprehension of the L2HR pipeline.

**Grounded in:** Figure 5 and Section 4.2 showing hierarchical reward generation achieves substantially lower syntax error rates than flat reward generation.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, Git

**Data:** Use the example natural language task specifications provided in the authors' GitHub repository https://github.com/unhelkarlab/hrdl.

**Build it:**

1. Clone the authors' repository https://github.com/unhelkarlab/hrdl and install dependencies.
2. Run the provided scripts to generate hierarchical reward functions from example natural language instructions.
3. Parse and visualize the hierarchical reward function structure (e.g., as nested dictionaries or code blocks).
4. Compare syntax correctness statistics reported by the code for hierarchical vs flat reward generation.
5. Write a README explaining the hierarchical reward generation process and your observations.

**Verified links from the paper:**

- <https://github.com/unhelkarlab/hrdl> — released by the paper's authors

**Ships as:** A GitHub repo with runnable code and notebook demonstrating hierarchical reward generation and visualization, plus a README explaining the process and results.

**Stretch goal:** Add a simple UI to input custom natural language instructions and see generated hierarchical rewards interactively.

### Intermediate — Evaluate L2HR Hierarchical Rewards vs Flat Rewards on Rescue World
*Effort: 2 weekends, ~20 hours*

You build an evaluation pipeline that uses the authors' L2HR code to generate hierarchical rewards and flat rewards from natural language specifications in the Rescue World domain. You then train RL agents with these rewards and compare task feasibility and alignment metrics as reported in the paper.

**Why it shows you understood the paper:** This project shows you can run and extend the core L2HR method on a concrete domain, reproduce key empirical results, and understand the hierarchical reward design's impact on agent behavior and alignment metrics.

**Grounded in:** Section 5.3 and Figure 6 showing hierarchical rewards better preserve task feasibility than flat rewards in Rescue World.

**Tech stack:** Python 3.11, PyTorch, OpenAI Gym (or Rescue World simulator if provided), Git

**Data:** Use the Rescue World simulated environment and natural language task specifications from the authors' repository https://github.com/unhelkarlab/hrdl.

**Build it:**

1. Set up the Rescue World environment and dependencies from the authors' repo.
2. Generate hierarchical and flat reward functions from the same natural language specifications using L2HR.
3. Train RL agents (e.g., PPO) using hierarchical and flat rewards separately.
4. Evaluate and compare task feasibility and alignment metrics as defined in the paper.
5. Document your results and compare them to the paper's reported metrics.

**Verified links from the paper:**

- <https://github.com/unhelkarlab/hrdl> — released by the paper's authors

**Ships as:** A GitHub repo with code to generate rewards, train agents, evaluate metrics, and a report comparing hierarchical vs flat reward performance in Rescue World.

**Stretch goal:** Add a simple baseline reward function handcrafted manually to compare against L2HR-generated rewards.

### Advanced — Integrate Real-Time Human Feedback into HRDL for Dynamic Reward Adaptation
*Effort: 3-4 weeks*

You extend the L2HR framework to incorporate real-time human feedback during agent deployment, enabling dynamic adaptation of hierarchical rewards. This involves designing a feedback interface, modifying the reward generation pipeline to accept iterative updates, and evaluating alignment improvements in a simulated domain.

**Why it shows you understood the paper:** This project demonstrates deep understanding of the HRDL framework and addresses a key future direction from the paper by combining hierarchical reward design with human-in-the-loop feedback to improve alignment dynamically.

**Grounded in:** Future direction: 'Integrating more advanced reward generation techniques, including evolutionary optimization and human-in-the-loop feedback.'

**Tech stack:** Python 3.11, PyTorch, Streamlit or Flask for feedback UI, Git

**Data:** Use a simulated domain such as Rescue World or a simplified custom environment with natural language task specifications from the authors' repo.

**Build it:**

1. Study the L2HR codebase and identify points to inject real-time reward updates.
2. Design and implement a simple human feedback interface (e.g., web UI) to collect feedback on agent behavior.
3. Modify the reward generation pipeline to update hierarchical reward functions based on feedback.
4. Run experiments comparing static vs dynamic reward adaptation on task alignment metrics.
5. Analyze results and document the impact of human feedback on agent alignment.

**Verified links from the paper:**

- <https://github.com/unhelkarlab/hrdl> — released by the paper's authors

**Ships as:** A GitHub repo with extended L2HR code supporting human-in-the-loop reward adaptation, a feedback interface, experimental results, and a detailed README.

**Stretch goal:** Explore integrating evolutionary optimization to refine hierarchical rewards automatically alongside human feedback.
