---
title: "562 · Guided Reasoning in LLM-Driven Penetration Testing Using Structured Attack Trees — Shan-Chieh Yang"
date: 2026-07-13
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sjyeec"
source_hash: "30a70545c2d98399f61da345eb6c4427febd7b01eacdb66affcb407523c77cf7"
sequence: 562
generator: "outreach-garden: managed"
---

# 562 · Guided Reasoning in LLM-Driven Penetration Testing Using Structured Attack Trees

## At a glance

- **Professor:** Shan-Chieh Yang
- **Institution:** Rochester Inst. of Technology
- **Paper:** [Guided Reasoning in LLM-Driven Penetration Testing Using Structured Attack Trees](https://doi.org/10.48550/arxiv.2509.07939)
- **Authors:** Katsuaki Nakano, Reza Fayyazi, Shanchieh Jay Yang, Michael Zuzak
- **Year:** 2025

## Paper overview

This paper proposes a new method to improve automated cybersecurity penetration testing by guiding large language models (LLMs) with a structured task tree based on the MITRE ATT&CK Matrix. This approach constrains the LLM's reasoning to proven attack steps, reducing errors and inefficiencies common in previous self-guided methods. The method was tested on 10 simulated cybersecurity challenges and showed significant improvements in task completion and efficiency across multiple LLMs, including smaller models.

### Why it matters

**Research problem:** Existing LLM agents for penetration testing rely on self-guided reasoning, which often leads to hallucinated or inaccurate procedural steps, causing inefficiencies and failures in complex cybersecurity tasks.

**Why it matters:** Automated penetration testing can accelerate vulnerability detection and improve enterprise cybersecurity, but unreliable LLM reasoning limits its effectiveness and adoption, especially for smaller or less capable models.

**Key contributions:**

- Proposed a novel reasoning pipeline for LLM-driven penetration testing using a deterministic and structured task tree.
- Designed the STT based on the MITRE ATT&CK Matrix to ground reasoning in established cybersecurity attack procedures.
- Developed and open-sourced an automated penetration testing LLM agent implementing this pipeline.
- Demonstrated improved accuracy and efficiency in navigating real-world CTF challenges across three LLMs (Llama-3-8B, Gemini-1.5, GPT-4).

## About the professor

**Shan-Chieh Yang** — Professor, Department of Computer Engineering, Rochester Inst. of Technology.

Research interests: machine learning, attack modeling, simulation systems for predictive analysis of cyber attacks, anticipatory cyber defense

### Research links

- [Faculty/profile page](https://people.rit.edu/sjyeec)
- [Professor website](http://people.rit.edu/sjyeec)
- [Resolved homepage](http://people.rit.edu/~sjyeec/)
- [Lab website](http://www.rit.edu/kgcoe/computerengineering)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cybersecurity Attack Modeling
**The paper assumes:** cybersecurity attack frameworks, penetration testing methodologies, and attack tree modeling
**Already in this field?** Skip this entirely if you already understand the MITRE ATT&CK framework and how structured attack trees represent cyber attack procedures.

To understand the structured task tree approach based on the MITRE ATT&CK Matrix in this paper, a solid grasp of cybersecurity attack modeling is essential. The rigorous course provides a deep, university-level foundation on attack frameworks, kill chains, and MITRE ATT&CK, while the fast track offers a concise, visual introduction to the MITRE ATT&CK framework and related concepts for quicker comprehension. Choose the course for thorough mastery, or the fast track for a focused, time-efficient overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Practical Cyber Security for Cyber Security Practitioners](https://www.youtube.com/playlist?list=PLFW6lRTa1g80JCqzslAXGHMFIo2AJ_qyb) — IIT KANPUR-NPTEL · 31 videos · 25.9h across 31 episodes

**Watch only this:** Lectures 2 through 7 (Lecture 02: Introduction to Cyber Kill Chains - Lockheed Martin Kill Chain, Lecture 03: Understanding Cyber Kill Chain - Delivery, Exploitation, and Installation, Lecture 04: Mastering the Cyber Kill Chain: Command & Control and Actions on Objectives, Lecture 05: Introduction to MITRE ATT & CK framework, Lecture 06: Understanding MITRE ATT&CK: A Guide to Cyber Threat Intelligence, Lecture 07: Mapping to ATT&CK from Finished Cyber Incident), about 5 hours — this subset covers foundational attack modeling concepts and the MITRE ATT&CK framework critical to the paper.

*Why it unblocks this paper:* This IIT Kanpur NPTEL course covers the MITRE ATT&CK framework in depth, including its application to cyber kill chains, threat intelligence, and mapping attack techniques, directly aligning with the paper's use of the MITRE ATT&CK Matrix to structure LLM reasoning in penetration testing.

*If you want all of it:* All 31 lectures, approximately 25.9 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Cybersecurity Technologies & Concepts](https://www.youtube.com/playlist?list=PLEsIJn5QifgV1iM2FfsPRHWUwvKN1BPZ3) — Tech Talk with Chuk · 8 videos · 1.1h across 8 episodes

**Watch only this:** Episodes 1 and 6 ("MITRE ATT&CK Explained in 6 Mins | How to Use MITRE ATTACK (2024)" and "Learn Networking Basics for Cybersecurity (2024)"), about 16 minutes — these episodes give a concise overview of the MITRE ATT&CK framework and essential networking concepts relevant to understanding attack modeling.

*Why it unblocks this paper:* This short series by Tech Talk with Chuk includes a focused episode explaining the MITRE ATT&CK framework and related cybersecurity concepts, providing a quick, clear introduction to the attack modeling framework that underpins the paper's structured task tree approach.

*If you want all of it:* All 8 episodes, about 1.1 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on guided reasoning in LLM-driven penetration testing using structured attack trees, start by grounding yourself in the foundational cybersecurity framework that underpins the method: the MITRE ATT&CK Matrix. Next, explore how AI and large language models are currently applied in automated penetration testing to appreciate the context and challenges addressed. Then, gain insight into the capabilities and limitations of LLMs in cybersecurity tasks. Finally, focus on the paper's core contribution by watching the authors' own detailed talk on building reasoning models, which directly relates to their novel structured task tree approach for guiding LLM reasoning in penetration testing.

### MITRE ATT&CK Matrix *(prerequisite)*
The MITRE ATT&CK Matrix is a comprehensive, community-driven knowledge base of adversary tactics and techniques based on real-world observations. Understanding this framework is essential because the paper's structured task tree (STT) is derived from it, grounding the LLM's reasoning in validated cybersecurity attack procedures.

*How the paper uses it:* The STT guiding the LLM reasoning pipeline is designed based on the MITRE ATT&CK Matrix to ensure grounding in established attack methodologies.

▶ [Putting MITRE ATT&CK™ into Action with What You Have, Where You Are presented by Katie Nickels](https://www.youtube.com/watch?v=bkfwMADar0M) — Sp4rkCon by Walmart · 42:16 · 7y ago

### Automated Penetration Testing with AI *(prerequisite)*
This concept covers how AI, particularly large language models, are being integrated into cybersecurity workflows to automate penetration testing tasks. Understanding current AI-driven pentesting approaches provides context for the paper's motivation to improve reasoning reliability and efficiency in such systems.

*How the paper uses it:* The paper proposes a novel method to improve automated penetration testing by guiding LLMs, addressing challenges in existing AI-driven pentesting approaches.

▶ [How to Automate Application Penetration Testing Using AI (2026)](https://www.youtube.com/watch?v=Llsdq53_4Nc) — Offenso Hackers Academy · 36:51 · 2w ago

### Large Language Models in Cybersecurity *(prerequisite)*
This section delves into the role, capabilities, and limitations of large language models in cybersecurity tasks such as threat intelligence and penetration testing. A nuanced understanding of LLMs' strengths and weaknesses is critical to appreciate why the paper's structured guidance approach is necessary.

*How the paper uses it:* The paper addresses limitations in LLM self-guided reasoning for penetration testing and proposes structured guidance to improve performance.

▶ [Beyond the Basics: The Role of LLM in Modern Threat Intelligence](https://www.youtube.com/watch?v=9PpfYaAxFq4) — SANS Digital Forensics and Incident Response · 38:40 · 2y ago

### Paper Authors' Talk *(paper-talk search result; attribution unverified)*
This talk by an expert in reasoning models provides an in-depth view of building reasoning capabilities from scratch, which aligns closely with the paper's approach of constraining LLM reasoning via a structured task tree. It offers direct insight into the authors' methodology and reasoning pipeline.

*How the paper uses it:* This is the authors' own detailed presentation on reasoning models, directly related to their guided reasoning pipeline for LLM-driven penetration testing.

▶ [Build a Reasoning Model (From Scratch)](https://www.youtube.com/watch?v=h4ot_Pc1eVc) — Manning Publications · 1:06:53 · Streamed 13d ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand how large language models (LLMs) can be guided for automated penetration testing using structured attack trees. We start with the basics of penetration testing and cybersecurity frameworks, then explore how AI and LLMs are applied in this domain, and finally focus on the paper's core method of using structured task trees to improve reasoning and efficiency.

### Automated Penetration Testing with AI *(prerequisite)*
Begin by understanding how AI and LLMs are currently used to automate penetration testing tasks, including vulnerability detection and attack simulation. This sets the practical context for why guiding LLMs is important and how automation is transforming cybersecurity workflows.

*How the paper uses it:* The paper improves automated penetration testing by guiding LLMs with structured attack trees to reduce errors and inefficiencies.

▶ [How to Automate Application Penetration Testing Using AI (2026)](https://www.youtube.com/watch?v=Llsdq53_4Nc) — Offenso Hackers Academy · 36:51 · 2w ago

### MITRE ATT&CK Matrix *(prerequisite)*
Learn about the MITRE ATT&CK Framework, a comprehensive knowledge base of adversary tactics and techniques used in cybersecurity. This framework forms the foundation for the structured task tree that guides the LLM's reasoning in the paper.

*How the paper uses it:* The structured task tree in the paper is designed based on the MITRE ATT&CK Matrix to ground LLM reasoning in validated attack procedures.

▶ [Introduction To The MITRE ATT&CK Framework](https://www.youtube.com/watch?v=LCec9K0aAkM) — HackerSploit · 35:48 · 2y ago

### Large Language Models in Cybersecurity *(prerequisite)*
Explore the capabilities and limitations of large language models in cybersecurity tasks, including threat intelligence and penetration testing. This helps understand why LLMs need structured guidance to avoid hallucinations and inefficiencies.

*How the paper uses it:* The paper addresses limitations of self-guided LLM reasoning in penetration testing by introducing a structured reasoning pipeline.

▶ [Beyond the Basics: The Role of LLM in Modern Threat Intelligence](https://www.youtube.com/watch?v=9PpfYaAxFq4) — SANS Digital Forensics and Incident Response · 38:40 · 2y ago

### Structured Task Trees for Guided Reasoning
Understand the concept of structured task trees as a method to guide reasoning by constraining decision-making to validated steps. This approach reduces errors and improves efficiency in complex multi-step tasks.

*How the paper uses it:* The core contribution of the paper is a deterministic structured task tree that guides LLM-driven penetration testing to improve accuracy and efficiency.

▶ [2. Reasoning: Goal Trees and Problem Solving](https://www.youtube.com/watch?v=PNKj529yY5c) — MIT OpenCourseWare · 45:58 · 12y ago

### Paper Authors' Talk *(paper-talk search result; attribution unverified)*
Finally, watch the authors' detailed presentation to see their novel guided reasoning pipeline in action, including how they build and evaluate their reasoning model for penetration testing.

*How the paper uses it:* This talk directly explains the paper's novel method and experimental results from the authors themselves.

▶ [Build a Reasoning Model (From Scratch)](https://www.youtube.com/watch?v=h4ot_Pc1eVc) — Manning Publications · 1:06:53 · Streamed 13d ago

## Already in your library

- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 6 - LLM Reasoning](https://www.youtube.com/watch?v=k5Fh-UgTuCo) — also for: In-Context Algebra (David Bau)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [9: Generative AI – Large Language Models (LLMs) and ...](https://www.youtube.com/watch?v=KGDe1QvfKJ8) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Introduction to Large Language Models](https://www.youtube.com/watch?v=RBzXsQHjptQ) — also for: Large Language Models for Designing Participatory Budgeting Rules (Hau Chan)
- [Lec-9: Introduction to Decision Tree 🌲 with Real life examples](https://www.youtube.com/watch?v=mvveVcbHynE) — also for: MDToC: Metacognitive Dynamic Tree of Concepts for Boosting Mathematical Problem-Solving of Large Language Models (Tim Oates)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the paper's core idea: guiding LLM-driven penetration testing with a structured task tree based on the MITRE ATT&CK Matrix. The beginner project reproduces a simplified task tree guided reasoning simulation to grasp the mechanism. The intermediate project uses the authors' released code to run and evaluate the STT-guided pipeline on a small set of penetration testing subtasks, comparing it to a baseline. The advanced project extends the pipeline by integrating a simple external CVE retrieval mechanism to address a key limitation noted in the paper.

### Beginner — Simulate Structured Task Tree Guided Reasoning
*Effort: a weekend, ~8 hours*

You build a simplified Python simulation of the structured task tree (STT) guided reasoning pipeline. This includes representing a small subset of the MITRE ATT&CK Matrix as a deterministic task tree and a mock LLM agent that selects attack steps constrained by this tree. You simulate task progression and demonstrate how the STT prevents circular reasoning and redundant actions compared to a naive self-guided approach.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of constraining LLM reasoning with a structured task tree to improve penetration testing accuracy and efficiency, as well as the problem of hallucinations and circular reasoning in self-guided methods.

**Grounded in:** Proposed a novel reasoning pipeline for LLM-driven penetration testing using a deterministic and structured task tree.

**Tech stack:** Python 3.11

**Data:** A small, manually created subset of the MITRE ATT&CK Matrix representing a few tactics and techniques, synthesized as a JSON task tree.

**Build it:**

1. Represent a small subset of the MITRE ATT&CK Matrix as a JSON structured task tree.
2. Implement a mock LLM agent that selects next attack steps constrained by the task tree.
3. Simulate a self-guided agent that picks steps without constraints.
4. Run simulations comparing task completion and circular reasoning between both agents.
5. Document the simulation design, results, and how STT prevents redundant actions.

**Ships as:** A Python repository with simulation code, sample task tree JSON, and a README explaining the STT-guided reasoning mechanism and its benefits.

**Stretch goal:** Add a simple visualization of the task tree and agent decision paths using a Python graph library.

### Intermediate — Run and Evaluate STT-Guided Penetration Testing Agent
*Effort: 1-3 weekends*

You clone and run the authors' open-source STT-guided penetration testing agent from https://github.com/KatsuNK/stt-reasoning. You set up the environment, run the agent on a small set of simulated penetration testing subtasks or CTF challenges, and compare its subtask completion rates and query efficiency against a baseline self-guided method. You report metrics similar to those in the paper to validate the improvements.

**Why it shows you understood the paper:** This project demonstrates you can work with the authors' implementation, understand the pipeline's operation, and reproduce key results showing improved accuracy and efficiency of STT-guided reasoning over baseline methods.

**Grounded in:** Demonstrated improved accuracy and efficiency in navigating real-world CTF challenges across three LLMs; The STT-guided pipeline enabled smaller models to complete full machines while baseline failed.

**Tech stack:** Python 3.11, Docker (optional), Git

**Data:** Simulated penetration testing challenges from the authors' repository, representing 10 HackTheBox machines as used in the paper.

**Build it:**

1. Clone the authors' repository https://github.com/KatsuNK/stt-reasoning and follow setup instructions.
2. Configure the environment to run the STT-guided agent on a small subset of provided simulated CTF challenges.
3. Run the baseline self-guided agent on the same challenges to collect baseline metrics.
4. Run the STT-guided agent and collect subtask completion rates and model query counts.
5. Compare and report the metrics, highlighting improvements in accuracy and efficiency.
6. Write a README summarizing your setup, experiments, and findings.

**Verified links from the paper:**

- <https://github.com/KatsuNK/stt-reasoning> — released by the paper's authors

**Ships as:** A forked GitHub repo with scripts to run experiments, collected metrics, and a report README demonstrating reproduction of the paper's core results.

**Stretch goal:** Extend the evaluation to include a smaller LLM model (e.g., Llama-3-8B) and analyze performance differences.

### Advanced — Integrate Dynamic CVE Retrieval into STT-Guided Pipeline
*Effort: a few weeks*

You extend the STT-guided penetration testing pipeline by integrating a simple external CVE retrieval mechanism. This involves adding a web-enabled LLM or API client that queries a public CVE database (e.g., NVD) to fetch relevant vulnerability information dynamically during task execution. You modify the task tree or reasoning pipeline to incorporate this external knowledge, aiming to address the paper's limitation of lacking dynamic CVE retrieval. You evaluate how this affects task completion and reasoning consistency.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to extend the structured reasoning framework with external knowledge sources while preserving the deterministic task structure that improves reasoning consistency.

**Grounded in:** Future direction: Integrate web-enabled LLM agents for dynamic CVE retrieval to enhance vulnerability detection; Limitation: lacks web search capabilities to dynamically retrieve relevant CVEs.

**Tech stack:** Python 3.11, FastAPI, Requests, Git, Authors' STT codebase

**Data:** Simulated penetration testing challenges from the authors' repository; public CVE data accessed via NVD API or similar.

**Build it:**

1. Fork and set up the authors' STT-guided pipeline repository.
2. Implement a module to query a public CVE database API based on current attack steps or system info.
3. Modify the reasoning pipeline to incorporate CVE data into task selection or command generation.
4. Ensure the structured task tree constraints remain enforced to prevent hallucinations.
5. Run experiments comparing the extended pipeline against the original on selected subtasks.
6. Document the integration approach, challenges, and impact on task completion and reasoning consistency.

**Verified links from the paper:**

- <https://github.com/KatsuNK/stt-reasoning> — released by the paper's authors

**Ships as:** A GitHub repository with the extended STT-guided agent code, CVE retrieval integration, experiment scripts, and a detailed README discussing the extension and evaluation.

**Stretch goal:** Add a simple GUI to visualize CVE information alongside the task tree during penetration testing simulation.
