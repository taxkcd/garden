---
title: "665 · Towards AI-Driven Human-Machine Co-Teaming for Adaptive and Agile Cyber Security Operation Centers — Massimiliano Albanese"
date: 2026-08-05
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-massimiliano-albanese"
source_hash: "f88d449ea49bc4913d08528c173866079e4a862cf60930692e091bf167f58d99"
sequence: 665
generator: "outreach-garden: managed"
---

# 665 · Towards AI-Driven Human-Machine Co-Teaming for Adaptive and Agile Cyber Security Operation Centers

## At a glance

- **Professor:** Massimiliano Albanese
- **Institution:** George Mason University
- **Paper:** [Towards AI-Driven Human-Machine Co-Teaming for Adaptive and Agile Cyber Security Operation Centers](https://doi.org/10.48550/arXiv.2505.06394)
- **Authors:** Massimiliano Albanese, Xinming Ou, Kevin Lybarger, Daniel Lende, Dmitry Goldgof
- **Year:** 2025

## Paper overview

This paper proposes a new approach to improve Security Operations Centers (SOCs) by integrating large language models (LLMs) as AI apprentices that collaborate with human analysts. The AI agents learn tacit knowledge from analysts to assist in threat detection, alert triage, and incident response, aiming to reduce analyst burnout and improve SOC productivity through adaptive, context-aware decision-making.

### Why it matters

**Research problem:** SOCs face overwhelming alert volumes, shortage of skilled analysts, and poorly integrated tools, leading to analyst burnout and limited effectiveness in detecting and responding to cyber threats. Existing SOC tools lack the ability to capture tacit knowledge and contextual information necessary for adaptive decision-making.

**Why it matters:** The increasing complexity and volume of cyber threats exceed current SOC capabilities, risking organizational security. Analyst burnout and false positives reduce SOC efficiency. Enhancing SOC operations with AI-human collaboration can improve threat detection, reduce cognitive load, and enable proactive defense.

**Key contributions:**

- Introduction of a human-centric co-teaming framework leveraging LLMs as collaborative apprentices in SOCs.
- Development of a multi-module framework addressing data integration, context-aware situational awareness, adaptive decision-making, and explainable AI.
- Use of anthropological methods to capture tacit knowledge from SOC analysts to inform AI learning.
- Proposal of learning strategies including prompt engineering, supervised fine-tuning, RLHF, and RAG tailored for on-premises LLM deployment.
- Design of a scalable multi-graph data model incorporating vulnerabilities, system components, configurations, and external risk factors like geopolitical events.

## About the professor

**Massimiliano Albanese** — Professor / Tenured; Associate Chair for Research; Director, Center for Infrastructure Security in the Era of AI; Executive Director, Institute for Digital Innovation, Department of Information Sciences and Technology, George Mason University.

Research interests: Cybersecurity

### Research links

- [Faculty/profile page](https://computing.gmu.edu/profiles/malbanes)
- [Professor website](https://iseai.gmu.edu/albanese/index.php)
- [Resolved homepage](https://iseai.gmu.edu/albanese/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Large Language Models and Human-AI Interaction
**The paper assumes:** large language model architectures, training methods including RLHF, prompt engineering, and human-AI interaction paradigms
**Already in this field?** Skip this entirely if you already understand how large language models are built, trained, and fine-tuned for interactive human collaboration tasks.

This background focuses on Large Language Models (LLMs) and their interaction with humans, which is essential to understand the AI-driven human-machine co-teaming framework proposed in the paper. The rigorous course provides a deep, structured understanding of LLM architectures, training methods including RLHF and prompt engineering, and human preference learning. The fast track offers a concise, focused introduction to machine learning from human preferences, covering key concepts relevant to LLM alignment and human-AI collaboration, suitable for a quicker but still solid grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS329H: Machine Learning from Human Preferences I Autumn 2024](https://www.youtube.com/playlist?list=PLoROMvodv4rNm525zyAObP4al43WAifZz) — Stanford Online · 8 videos · 10.3h across 8 episodes

**Watch only this:** Lectures 1-5 (Introduction, Preference Models, Model-based Preference Optimization, Mechanism Design, Human-centered Design), about 6.3 hours — these cover the foundational concepts of human preference learning and interaction crucial for the paper's AI apprenticeship approach.

*Why it unblocks this paper:* Stanford CS329H: Machine Learning from Human Preferences I Autumn 2024 directly covers learning from human feedback, preference models, mechanism design, and human-centered AI design, which are core to understanding supervised fine-tuning, RLHF, and human-AI co-teaming in the paper.

*If you want all of it:* All 8 episodes, about 10.3 hours

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on AI-driven human-machine co-teaming for adaptive SOCs, start with foundational concepts such as tacit knowledge extraction methods, reinforcement learning from human feedback, explainable AI in cybersecurity, and the application of large language models in cybersecurity. These prerequisites provide the necessary background on knowledge capture, AI training alignment, transparency, and LLM capabilities in security contexts. Finally, focus on the core concept of human-machine co-teaming in cybersecurity and the authors' own talk or closest available presentation to grasp the novel framework and its implications.

### Tacit knowledge extraction methods *(prerequisite)*
Tacit knowledge capture is critical for the paper's approach, as it enables AI agents to learn the implicit expertise of SOC analysts. Understanding various anthropological and knowledge management techniques for extracting tacit knowledge provides insight into how human expertise can be embedded into AI systems.

*How the paper uses it:* The paper uses anthropological methods to capture tacit knowledge from SOC analysts to inform AI learning.

▶ [Large Language Models for Tacit Knowledge Extraction and Transfer with Mina Cho](https://www.youtube.com/watch?v=br1GIfFzVRE) — University of Minnesota AI Hub · 8 months ago

### Reinforcement learning from human feedback *(prerequisite)*
RLHF is a key learning strategy employed to align LLM agents with human analyst goals, refining AI behavior through iterative human feedback. A detailed understanding of RLHF mechanisms is essential to appreciate how the AI apprentices improve their decision-making and reduce hallucinations.

*How the paper uses it:* The framework incorporates RLHF as a core method for AI agents to learn from human analysts' feedback.

▶ [Reinforcement Learning with Human Feedback](https://www.youtube.com/watch?v=thWM3tRHF-A) — Open Data Science and AI Conference · 28:51

### Explainable AI in cybersecurity *(prerequisite)*
Explainable AI is vital for building trust and transparency in AI-assisted SOC workflows, enabling analysts to understand and validate AI-generated insights. Familiarity with XAI concepts in cybersecurity contexts helps in appreciating the framework's explainability module.

*How the paper uses it:* The paper includes explainable AI modules to enhance trust and decision-making in SOC workflows.

▶ [Building Trust in AI Driven Security The Case for Explainable ...](https://www.youtube.com/watch?v=zfzzSPIU8Z8) — Center for Cyber Security Research, UND · 1:02:23

### Large language models in cybersecurity *(prerequisite)*
Understanding how LLMs function and their application in cybersecurity tasks like threat detection and incident response is foundational. This knowledge contextualizes the paper's use of LLMs as AI apprentices within SOCs and the challenges involved.

*How the paper uses it:* The paper leverages LLMs for adaptive threat detection, alert triage, and incident response in SOCs.

▶ [Evaluating Large Language Models for Cybersecurity Tasks ...](https://www.youtube.com/watch?v=EXL1Ms5k8lc) — Software Engineering Institute | Carnegie Mellon University · 43:05

### Human-machine co-teaming in cybersecurity
This concept is central to the paper, describing the collaborative paradigm where AI agents and human analysts work together in SOCs. Understanding existing research and frameworks on human-machine teaming in cybersecurity provides a direct foundation for the paper's novel approach.

*How the paper uses it:* The paper proposes a human-centric co-teaming framework leveraging LLMs as collaborative apprentices in SOCs.

▶ [Human & Machine Teaming: Threat Hunting w/ Trellix XDR ...](https://www.youtube.com/watch?v=3U5zHLtA4bk) — Cal Poly Pomona Cybersecurity and Awareness Fair · 23:57

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand how large language models (LLMs) can be integrated into cybersecurity operations centers (SOCs) as AI apprentices collaborating with human analysts. We start with the basics of tacit knowledge extraction, then cover reinforcement learning from human feedback to align AI with human goals, followed by explainable AI to build trust in AI decisions. Next, we explore the role of LLMs in cybersecurity, and finally, the core concept of human-machine co-teaming in cybersecurity, which is central to the paper's proposed framework.

### Tacit knowledge extraction methods *(prerequisite)*
Tacit knowledge is the unspoken, experience-based know-how that experts use but find hard to articulate. This section explains practical methods to capture such knowledge, which is crucial for training AI systems to understand nuanced human expertise.

*How the paper uses it:* The paper uses anthropological methods to capture tacit knowledge from SOC analysts to inform AI learning.

▶ [The Knowledge That Underlies Everything | Tacit Knowledge](https://www.youtube.com/watch?v=jRc67mW1LKI) — Benjamin Keep, PhD, JD · 3 years ago

### Reinforcement learning from human feedback *(prerequisite)*
Reinforcement learning from human feedback (RLHF) is a technique where AI models learn to improve by receiving guidance and corrections from humans, helping align AI behavior with human values and goals.

*How the paper uses it:* The paper employs RLHF to fine-tune LLM agents to better assist SOC analysts.

▶ [Reinforcement Learning with Human Feedback (RLHF ...](https://www.youtube.com/watch?v=qPN_XZcJf_s) — StatQuest with Josh Starmer · 18:02

### Explainable AI in cybersecurity *(prerequisite)*
Explainable AI (XAI) provides transparency into AI decision-making, which is vital in cybersecurity to build user trust and enable analysts to understand and act on AI-generated alerts confidently.

*How the paper uses it:* The framework includes explainable AI modules to enhance trust and decision-making in SOC workflows.

▶ [An introduction to Explainable AI](https://www.youtube.com/watch?v=mg_4UvQzC3w) — KIE · 11:46

### Large language models in cybersecurity *(prerequisite)*
This section introduces how large language models (LLMs) work and their applications in cybersecurity, such as threat detection and incident response, highlighting their strengths and challenges.

*How the paper uses it:* The paper integrates LLMs as AI apprentices to assist in SOC tasks like threat detection and alert triage.

▶ [Evaluating Large Language Models for Cybersecurity Tasks ...](https://www.youtube.com/watch?v=EXL1Ms5k8lc) — Software Engineering Institute | Carnegie Mellon University · 43:05

### Human-machine co-teaming in cybersecurity
Human-machine co-teaming refers to collaborative partnerships where AI systems and human experts work together, combining strengths to improve cybersecurity operations and decision-making.

*How the paper uses it:* The core contribution of the paper is proposing a human-centric co-teaming framework leveraging LLMs as collaborative apprentices in SOCs.

▶ [Human & Machine Teaming: Threat Hunting w/ Trellix XDR ...](https://www.youtube.com/watch?v=3U5zHLtA4bk) — Cal Poly Pomona Cybersecurity and Awareness Fair · 23:57

## Already in your library

- [Stanford CS224N | 2023 | Lecture 10 - Prompting ...](https://www.youtube.com/watch?v=SXpJ9EmG3s4) — also for: What Benchmarks Don’t Measure: The Case for Evaluating Abstention Competence in Autonomous Agents (Suresh Venkatasubramanian)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity to demonstrate your understanding of the paper's human-machine co-teaming framework for SOCs using LLMs. The beginner project recreates a simple tacit knowledge capture and feedback loop to show the core AI apprenticeship concept. The intermediate project implements a context-aware alert triage prototype using LLMs with retrieval-augmented generation on a simulated SOC alert dataset, reproducing the paper's adaptive decision-making module. The advanced project extends the intermediate system by addressing the limitation of LLM output variability through a lightweight on-premises fine-tuning and explainability module, exploring a future direction proposed by the authors.

### Beginner — Tacit Knowledge Capture Simulation for SOC Analysts
*Effort: a weekend, ~8 hours*

You build a simple interactive command-line or web app that simulates iterative feedback between a human SOC analyst and an LLM-based AI apprentice. The app prompts the user (acting as the analyst) to input threat triage decisions and then generates AI responses that improve over iterations using prompt engineering and simple supervised fine-tuning with user corrections.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's core idea that LLM agents learn tacit knowledge through iterative human interaction and feedback, a foundational mechanism for human-machine co-teaming in SOCs.

**Grounded in:** The LLM-based AI agents learn tacit knowledge through iterative human interaction.

**Tech stack:** Python 3.11, OpenAI API or local LLM wrapper, FastAPI or simple CLI

**Data:** Simulated SOC alert triage scenarios created as simple text prompts; no real SOC data required.

**Build it:**

1. Design a set of simple SOC alert triage scenarios as text prompts.
2. Implement a prompt engineering pipeline to query an LLM with analyst input and context.
3. Add a feedback loop where the user can correct or rate the AI's response.
4. Simulate supervised fine-tuning by adjusting prompts or storing corrections to improve responses.
5. Build a minimal UI or CLI to run iterative interactions.
6. Document how the AI apprentice improves with feedback.

**Ships as:** A GitHub repo with code and README showing the iterative tacit knowledge capture simulation and sample interactions.

**Stretch goal:** Add a simple retrieval-augmented generation (RAG) component to incorporate external knowledge snippets during interactions.

### Intermediate — Context-Aware SOC Alert Triage with LLM and RAG
*Effort: 2 weekends, ~20 hours*

You implement a prototype SOC alert triage system that integrates an LLM with a retrieval-augmented generation module to provide adaptive, context-aware triage recommendations. Using a small simulated dataset of SOC alerts and contextual data (e.g., vulnerability info, system components), the system ranks alerts and suggests analyst actions, comparing performance against a simple keyword-based baseline.

**Why it shows you understood the paper:** This project faithfully reproduces the paper's core method of combining LLMs with adaptive data modeling and RAG for situational awareness and decision-making in SOCs, demonstrating your ability to operationalize the framework on realistic data.

**Grounded in:** The framework includes modules for data integration, context-aware situational awareness, adaptive decision-making, and explainable AI.

**Tech stack:** Python 3.11, LangChain or similar RAG framework, OpenAI API or local LLM, FastAPI, SQLite or JSON for data storage

**Data:** Simulated SOC alert dataset with metadata on vulnerabilities and system components created by you to mimic SOC alert streams; no real SOC data available.

**Build it:**

1. Create a small synthetic dataset of SOC alerts with associated context (vulnerabilities, system info).
2. Implement a retrieval module to fetch relevant context for each alert.
3. Integrate an LLM with RAG to generate triage recommendations based on alert and context.
4. Develop a simple baseline triage method using keyword matching.
5. Evaluate and compare LLM-based triage vs baseline on precision/recall or accuracy metrics.
6. Build a minimal web UI or API to demonstrate triage workflow.

**Ships as:** A GitHub repo with code, dataset, evaluation scripts, and README documenting the triage system and results.

**Stretch goal:** Add explainable AI outputs that justify triage decisions to improve analyst trust.

### Advanced — On-Premises Fine-Tuning and Explainability for Trustworthy SOC LLM Agents
*Effort: 3+ weeks*

You extend the intermediate alert triage system by implementing lightweight on-premises fine-tuning of an open-source LLM (e.g., LLaMA or GPT4All) using reinforcement learning from human feedback (RLHF) or supervised fine-tuning on analyst corrections. You also develop an explainable AI module that generates human-readable rationales for triage decisions, addressing the paper's limitations on LLM output variability and trust.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by building a practical solution for improving LLM reliability and explainability in sensitive SOC environments, demonstrating research-level insight and engineering skill.

**Grounded in:** Challenges include on-premises deployment constraints and LLM output variability; future directions include lightweight training and enhanced explainable AI modules.

**Tech stack:** Python 3.11, PyTorch, Hugging Face Transformers, FastAPI, LangChain, Open-source LLM weights (e.g., LLaMA, GPT4All)

**Data:** Synthetic SOC alert triage dataset with analyst feedback logs generated during intermediate project; no real SOC data.

**Build it:**

1. Set up an open-source LLM locally for on-premises use.
2. Implement supervised fine-tuning or RLHF using synthetic analyst feedback data.
3. Integrate the fine-tuned model into the alert triage pipeline.
4. Develop an explainability module that produces textual rationales for triage outputs.
5. Evaluate improvements in output consistency and analyst trust via simulated metrics.
6. Document deployment considerations for on-premises SOC environments.

**Ships as:** A GitHub repo with code, fine-tuning scripts, explainability module, evaluation results, and detailed README on addressing LLM variability and trust in SOCs.

**Stretch goal:** Conduct a small user study or simulated analyst evaluation to measure perceived helpfulness and trustworthiness of the system.
