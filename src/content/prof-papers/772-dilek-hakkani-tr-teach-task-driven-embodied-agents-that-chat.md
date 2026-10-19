---
title: "772 · TEACh: Task-driven Embodied Agents that Chat — Dilek Hakkani-Tür"
date: 2026-10-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dilek-hakkani-tur"
source_hash: "1bb8c0117430a03d253a9217bf365d247b19957749ca319d363ee1d6e860afbf"
sequence: 772
generator: "outreach-garden: managed"
---

# 772 · TEACh: Task-driven Embodied Agents that Chat

## At a glance

- **Professor:** Dilek Hakkani-Tür
- **Institution:** Univ. of Illinois at Urbana-Champaign
- **Paper:** [TEACh: Task-driven Embodied Agents that Chat](https://arxiv.org/pdf/2110.00534)
- **Authors:** Aishwarya Padmakumar, Jesse Thomason, Ayush Shrivastava, Patrick Lange, Anjali Narayan-Chen, Spandana Gella, Robinson Piramuthu, Gokhan Tur, Dilek Hakkani-Tur
- **Year:** 2021

## Paper overview

TEACh is a dataset and benchmark suite designed to study how robots can perform household tasks by engaging in natural language dialogue with humans. It contains over 3,000 human-human interactive dialogues where one person (Commander) instructs another (Follower) to complete tasks in a simulated home environment. The dataset captures complex conversations and actions, including navigation and object manipulation, to enable research on embodied AI agents that understand and act upon conversational instructions.

### Why it matters

**Research problem:** How can embodied AI agents effectively understand and execute complex household tasks through natural language dialogue, including clarifying ambiguous instructions and correcting mistakes, in a simulated environment?

**Why it matters:** Robots operating in human spaces must interact naturally with people, understanding instructions and using conversation to resolve ambiguities and errors. Existing benchmarks often lack interactive dialogue or object manipulation, limiting progress toward practical, conversational robots that can assist with everyday tasks.

**Key contributions:**

- Creation of TEACh, a dataset of 3,000+ human-human dialogues interleaved with embodied task actions in a simulated environment.
- Development of an extensible task definition language to specify and evaluate household tasks.
- Proposal of three benchmarks (EDH, TfD, TATC) to evaluate dialogue understanding, language grounding, and task execution in embodied AI.
- Baseline experiments using an adapted Episodic Transformer model demonstrating the challenges of the dataset.
- Analysis showing the limitations of rule-based agents for complex, compositional tasks in TEACh.

## About the professor

**Dilek Hakkani-Tür** — Professor, Computer Science, Univ. of Illinois at Urbana-Champaign.

Research interests: Machine Learning, Conversational AI, Speech and Language Processing, Large Language Models, Dialogue Systems

### Research links

- [Faculty/profile page](https://siebelschool.illinois.edu/about/people/faculty/dilek)
- [Google Scholar](https://scholar.google.com/citations?user=GMcL_9kAAAAJ&hl=en)
- [LinkedIn](https://www.linkedin.com/in/dilek-hakkani-tur-9517543/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Embodied AI and Dialogue Systems
**The paper assumes:** embodied artificial intelligence, dialogue system design, language grounding in robotics
**Already in this field?** Skip this entirely if you already understand how dialogue systems operate within embodied AI agents and how language instructions are grounded in simulated or robotic environments.

To deeply understand the TEACh paper on embodied AI agents that engage in natural language dialogue to perform household tasks, background knowledge in embodied intelligence and dialogue systems is essential. The rigorous course option offers a structured, university-level deep dive into foundational and advanced concepts in embodied AI and situated intelligence, while the fast track provides a concise, intuition-driven overview of the same core ideas. Choose the course for comprehensive study or the fast track for a focused, time-efficient introduction.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Embodied, Situated, and Grounded Intelligence: Implications for AI](https://www.youtube.com/playlist?list=PLZlVBTf7N6Gp5Pb02ra1qtsGDKTP4O5Jf) — Santa Fe Institute · 11 videos · 6.2h across 11 episodes

**Watch only this:** Episodes 3 to 6 (Nick Cheney: Embodiment Without Situatedness, Louise Connell: Language, Perception and Action Shape the Human Conceptual System, Guy Dove: Language is a Neuroenhancement, Arthur Glenberg: Language Comprehension Requires Affordances), about 2.2 hours total — these episodes focus on embodiment, language grounding, and perception-action integration essential for TEACh.

*Why it unblocks this paper:* This Santa Fe Institute series covers foundational and advanced topics in embodied, situated, and grounded intelligence, directly relevant to understanding how embodied AI agents process language and interact with environments, which is central to the TEACh paper.

*If you want all of it:* All 11 episodes, about 6.2 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the TEACh paper, start with foundational knowledge on task and motion planning in robotics to grasp how agents plan and execute complex actions. Next, build understanding of natural language understanding for instruction following, which is crucial for parsing human dialogue into actionable commands. Then, study transformers for sequence modeling in embodied AI, as the paper adapts Episodic Transformer models for baseline evaluations. Finally, focus on the core concept of TEACh dataset and embodied dialogue agents, prioritizing the authors' own talk for the most direct insights.

### Task and motion planning in robotics *(prerequisite)*
This foundational topic covers how embodied agents plan and execute sequences of actions to complete tasks, integrating both high-level task planning and low-level motion control. Understanding these concepts is essential to appreciate how TEACh agents translate dialogue into physical actions in a simulated environment.

*How the paper uses it:* TEACh requires agents to perform complex household tasks involving navigation and object manipulation, which depend on effective task and motion planning.

▶ [Lecture 22: MIT 6.800/6.843 Robotics Manipulation (Fall 2021)](https://www.youtube.com/watch?v=A-goUwiIdkA) — underactuated · 1:17:25

### Natural language understanding for instruction following *(prerequisite)*
This area focuses on how natural language instructions are parsed, grounded, and converted into executable actions by AI agents. It is critical for embodied agents to correctly interpret human dialogue, especially in the presence of ambiguous or out-of-order utterances as in TEACh.

*How the paper uses it:* TEACh agents must understand and act on complex, unconstrained dialogues to complete household tasks.

▶ [NLP with ACL Fellow Prof. Yue Zhang](https://www.youtube.com/watch?v=L5NyWJivAkM) — Westlake University · 1:44:11

### Transformers for sequence modeling in embodied AI *(prerequisite)*
Transformers have become a powerful architecture for modeling sequences, including language and action sequences in embodied AI. The Episodic Transformer model adapted in TEACh is a key baseline, so understanding transformer-based sequence modeling is vital to grasp the paper's approach and results.

*How the paper uses it:* The paper adapts the Episodic Transformer model to evaluate dialogue-to-action execution in TEACh benchmarks.

▶ [V3 I Low-level Embodied Intelligence w/ Foundation Models](https://www.youtube.com/watch?v=fz8wf9hN20c) — Stanford Online · 1:18:14

### TEACh dataset and embodied dialogue agents *(paper-talk search result; attribution unverified)*
This core concept covers the TEACh dataset itself, the interactive human-human dialogues, the task definition language, and the embodied AI benchmarks proposed. The authors' own talk provides the most direct and detailed insights into the dataset creation, challenges, and baseline modeling approaches.

*How the paper uses it:* This is the central contribution of the paper, presenting a new dataset and benchmarks for embodied agents that chat to complete household tasks.

▶ [Reinforcement Learning for Agents • Talk at Worcester Polytechnic Institute (@WPI) • Dec 2, 2025](https://www.youtube.com/watch?v=z3sVIgRebCg) — Aman Chadha · 10 mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand TEACh, starting with how natural language instructions are understood by AI, followed by how robots plan and execute tasks through motion planning. Next, it covers how sequence models like Transformers are adapted for embodied AI tasks. Finally, it presents the core concept of embodied AI agents that interact via dialogue, culminating in a focused talk on the TEACh dataset and embodied dialogue agents. This progression builds intuition from language understanding to embodied task execution and dialogue interaction.

### Natural language understanding for instruction following *(prerequisite)*
Understanding how AI systems parse and interpret human language instructions is essential for enabling robots to follow commands. This involves mapping natural language to actionable representations that an agent can execute. This foundation helps grasp how TEACh agents process dialogue to perform tasks.

*How the paper uses it:* TEACh requires agents to understand and ground complex, conversational instructions into embodied actions.

▶ [Lecture 1 – NLU Course Overview | Stanford CS224U](https://www.youtube.com/watch?v=tZ_Jrc_nRJY) — Stanford Online · 1:12:59

### Task and motion planning in robotics *(prerequisite)*
Task and motion planning teaches how robots plan sequences of movements and actions to complete tasks in physical or simulated environments. It combines high-level task goals with low-level motion control, which is critical for embodied agents executing household tasks.

*How the paper uses it:* TEACh agents must plan and execute navigation and object manipulation actions to fulfill dialogue instructions.

▶ [Lecture 22: MIT 6.800/6.843 Robotics Manipulation (Fall 2021)](https://www.youtube.com/watch?v=A-goUwiIdkA) — underactuated · 1:17:25

### Transformers for sequence modeling in embodied AI *(prerequisite)*
Transformers are powerful models for handling sequential data, such as language and action sequences. Understanding how Transformers can be adapted to model the sequence of dialogue and actions helps explain the baseline Episodic Transformer used in TEACh.

*How the paper uses it:* The paper adapts the Episodic Transformer to predict action sequences from dialogue history in embodied tasks.

▶ [V3 I Low-level Embodied Intelligence w/ Foundation Models](https://www.youtube.com/watch?v=fz8wf9hN20c) — Stanford Online · 1:18:14

### Embodied AI agents with dialogue interaction
Embodied AI agents perceive and act in environments while interacting naturally with humans through dialogue. This concept covers how agents integrate language understanding, perception, and action to complete tasks collaboratively.

*How the paper uses it:* TEACh focuses on embodied agents that complete household tasks via natural language dialogue with humans.

▶ [Embodied AI Talk Series - dr. Mike Ligthart](https://www.youtube.com/watch?v=Vt7M5FAs6fI) — Embodied AI Utrecht University · 44:20 · 3 yr ago

### TEACh dataset and embodied dialogue agents *(paper-talk search result; attribution unverified)*
This talk specifically presents the TEACh dataset and the challenges of building embodied agents that understand and act on conversational instructions in simulated homes. It provides direct insights into the dataset, benchmarks, and baseline models.

*How the paper uses it:* It is the authors' own presentation detailing TEACh's dataset, benchmarks, and agent modeling approach.

▶ [Reinforcement Learning for Agents • Talk at Worcester Polytechnic Institute (@WPI) • Dec 2, 2025](https://www.youtube.com/watch?v=z3sVIgRebCg) — Aman Chadha · 10 mo ago

## Already in your library

- [Virtual Humans (Embodied Conversational Agents) - Computerphile](https://www.youtube.com/watch?v=42_lCOayS6s) — also for: Let’s be friends! A rapport-building 3D embodied conversational agent for the Human Support Robot (Ubbo Visser)
- [https://www.youtube.com › watch?v=Cey4ICbze-U](https://www.youtube.com/watch?v=Cey4ICbze-U) — also for: Soft Subdivision Motion Planning for Complex Planar Robots (Yi-Jen Chiang)
- [Lecture 1 | Natural Language Processing with Deep Learning](https://www.youtube.com/watch?v=OQQ-W_63UgQ) — also for: Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children (Robert H. Sloan)
- [Stanford CS224N: NLP with Deep Learning | Spring 2024 ...](https://www.youtube.com/watch?v=DzpHeXVSC5I) — also for: Measuring an Artificial Intelligence System’s Performance on a Verbal IQ Test For Young Children (Robert H. Sloan)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the TEACh paper by progressively engaging with its core ideas. The beginner project focuses on reproducing and analyzing dialogue complexity in TEACh, the intermediate project implements a simplified embodied agent model for Execution from Dialogue History (EDH) benchmark, and the advanced project extends the baseline by addressing dialogue noise filtering to improve task execution, directly tackling a stated limitation and future direction of the paper.

### Beginner — Dialogue Analysis and Visualization for TEACh
*Effort: a weekend, ~8 hours*

You build a small tool to parse and analyze the TEACh dialogue transcripts, focusing on dialogue phenomena such as overlapping utterances, instruction granularity, and out-of-order utterances. You create visualizations that highlight these dialogue complexities and produce summary statistics similar to those reported in the paper.

**Why it shows you understood the paper:** This project shows you understand the nature and challenges of TEACh dialogues, including their unconstrained and interleaved structure, which is central to the paper's motivation and difficulty for embodied agents.

**Grounded in:** TEACh dialogues are unconstrained, not turn-based, yielding variation in instruction granularity, completeness, relevance, and overlap.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, pandas, seaborn

**Data:** Use the TEACh dataset dialogues available at https://github.com/alexa/teach (third_party_artifacts).

**Build it:**

1. Clone and explore the TEACh dataset repository to access dialogue transcripts.
2. Write scripts to parse dialogues and extract features such as utterance timing, speaker roles, and overlaps.
3. Compute statistics on utterance length, overlap frequency, and instruction granularity.
4. Create visualizations (e.g., timelines, histograms) to illustrate dialogue phenomena.
5. Document findings in a Jupyter Notebook README explaining the dialogue complexities.

**Verified links from the paper:**

- <https://github.com/alexa/teach> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts and notebooks that analyze and visualize TEACh dialogue complexities, demonstrating the challenges for dialogue understanding.

**Stretch goal:** Add a simple heuristic filter to identify and remove irrelevant or out-of-order utterances from dialogues.

### Intermediate — Simplified Execution from Dialogue History Agent
*Effort: 1-3 weekends*

You implement a simplified embodied agent model inspired by the paper's adapted Episodic Transformer baseline for the Execution from Dialogue History (EDH) benchmark. The model takes dialogue history as input and predicts a short sequence of navigation and manipulation actions in a simulated environment. You evaluate your model against a simple baseline such as random or rule-based action selection and report success metrics similar to the paper.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core method and challenges in grounding dialogue to embodied actions, replicating the paper's central benchmark and baseline modeling approach.

**Grounded in:** They define the Execution from Dialogue History (EDH) benchmark and adapt the Episodic Transformer model for baseline evaluations, showing it outperforms random and unimodal baselines but struggles compared to ALFRED.

**Tech stack:** Python 3.11, PyTorch, NumPy, scikit-learn

**Data:** Use the TEACh dataset dialogues and task definitions from https://github.com/alexa/teach (third_party_artifacts).

**Build it:**

1. Download and preprocess the TEACh EDH benchmark data focusing on dialogue history and action sequences.
2. Implement a simplified sequence-to-sequence model (e.g., transformer or LSTM) to predict actions from dialogue.
3. Implement a simple baseline agent that selects random or rule-based actions.
4. Train and evaluate your model and baseline on a subset of tasks, reporting success rate and action prediction accuracy.
5. Write a report comparing your model's performance to the baseline and discussing challenges.

**Verified links from the paper:**

- <https://github.com/alexa/teach> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for a simplified EDH agent, baseline comparisons, evaluation scripts, and a report analyzing results.

**Stretch goal:** Incorporate basic dialogue context filtering to improve action prediction accuracy.

### Advanced — Dialogue Noise Filtering for Improved Embodied Task Execution
*Effort: few weeks*

You develop an extension to the baseline EDH agent that incorporates a dialogue noise filtering module to handle irrelevant, out-of-order, or overlapping utterances. This module uses heuristics or a learned classifier to filter dialogue history before action prediction. You evaluate the impact of filtering on task success rates, addressing a key limitation of the paper related to dialogue complexity and noise.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of TEACh by improving dialogue understanding and robustness in embodied agents, showing research-level insight and engineering skill.

**Grounded in:** Dialogue complexity, including irrelevant or out-of-order utterances, poses challenges for current models; future directions include enabling agents to filter irrelevant or out-of-order utterances for coherent task execution.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, transformers, NumPy

**Data:** Use the TEACh dataset dialogues and EDH benchmark from https://github.com/alexa/teach (third_party_artifacts).

**Build it:**

1. Review baseline EDH agent implementation and identify how dialogue history is processed.
2. Design and implement a dialogue filtering module using heuristics or a simple classifier to detect irrelevant or out-of-order utterances.
3. Integrate the filtering module into the agent's input pipeline.
4. Train and evaluate the enhanced agent on the EDH benchmark, comparing performance with and without filtering.
5. Analyze results and document improvements and remaining challenges.

**Verified links from the paper:**

- <https://github.com/alexa/teach> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with enhanced EDH agent code, filtering module, evaluation scripts, and a detailed README discussing methodology and results.

**Stretch goal:** Explore joint modeling of Commander and Follower agents for end-to-end task completion as a next step.
