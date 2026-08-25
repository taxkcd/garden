---
title: "495 · Analyzing Code Injection Attacks on LLM-based Multi-Agent Systems in Software Development — Jugal K. Kalita"
date: 2026-08-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jugal-k-kalita"
source_hash: "84f31d174933ec19dcb6514809ace4359a32d5fe5bc1eac9619ad51e768aa4aa"
sequence: 495
generator: "outreach-garden: managed"
---

# 495 · Analyzing Code Injection Attacks on LLM-based Multi-Agent Systems in Software Development

## At a glance

- **Professor:** Jugal K. Kalita
- **Institution:** UCCS
- **Paper:** [Analyzing Code Injection Attacks on LLM-based Multi-Agent Systems in Software Development](https://arxiv.org/pdf/2512.21818)
- **Authors:** Smita Khapre, Brian Bowers, Jugal Kalita
- **Year:** 2025

## Paper overview

This paper studies how multi-agent AI systems that generate software code can be vulnerable to code injection attacks, where malicious code is inserted to alter system behavior. The authors propose and evaluate different multi-agent architectures for software development, analyze their vulnerabilities, and introduce a security analysis agent to reduce attack success. Despite improvements, some attacks remain effective, indicating the need for further defenses.

### Why it matters

**Research problem:** Multi-agent systems (MAS) powered by large language models (LLMs) are increasingly used for software code generation but are vulnerable to code injection attacks due to their autonomous nature and lack of human oversight. The problem is to understand these vulnerabilities and develop architectures that balance security and efficiency in the software engineering implementation phase.

**Why it matters:** As agentic AI and MAS become widely adopted in industry, especially in software development, security risks like code injection attacks can lead to malicious code execution and data exfiltration. Ensuring the resilience of these systems is critical for safe deployment without human supervision.

**Key contributions:**

- Proposed MAS architectures (coder, coder-tester, coder-reviewer-tester) for software implementation phase using LLMs.
- Developed a comprehensive threat model for code injection attacks on MAS.
- Introduced a security analysis agent to mitigate code injection attacks.
- Demonstrated that coder-reviewer-tester architecture is more resilient but less efficient.
- Showed that the security analysis agent reduces attack success to near zero for many attacks but remains vulnerable to advanced attacks involving poisoned few-shot examples.

## About the professor

**Jugal K. Kalita** — Professor and Chair, Computer Science, UCCS.

Research interests: Artificial Intelligence, Natural Language Processing, Machine Learning, Deep Learning, Bioinformatics, Computer Security

### Research links

- [Faculty/profile page](https://faculty.uccs.edu/jkalita/)
- [Google Scholar](https://scholar.google.com/citations?user=dXITneMAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Large Language Models and Prompt Engineering
**The paper assumes:** large language model architectures, prompt engineering techniques, few-shot learning, and LLM-based code generation
**Already in this field?** Skip this entirely if you already understand how large language models work, how prompts influence their outputs, and the basics of few-shot learning in LLMs.

This background focuses on Large Language Models (LLMs) and prompt engineering, which are essential to understanding the mechanisms behind code injection attacks and defenses in multi-agent AI systems for software development. The rigorous course option provides a deep, structured university-level foundation, while the fast track offers a concise, accessible introduction to the core concepts for quicker comprehension. Readers can choose based on their available time and desired depth.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224N: Natural Language Processing with Deep Learning | 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rMFqRtEuo6SGjY4XbRIVRd4) — Stanford Online · 23 videos · 29.2h across 23 episodes

**Watch only this:** Lectures 1, 7, 8, 9, 10, 15 (Code Generation), and 19 (Advanced Prompting and Prompt Sensitivity), about 9.5 hours total — these cover foundational NLP, transformers, pretraining, prompting, and code generation essential for grasping LLM behavior and prompt-based attacks.

*Why it unblocks this paper:* Stanford CS224N: Natural Language Processing with Deep Learning (2023) is a comprehensive, authoritative course covering LLM architectures, transformers, prompt engineering, and code generation, directly relevant to understanding the paper's multi-agent LLM systems and their vulnerabilities.

*If you want all of it:* 29.2 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Large Language Models (LLMs)](https://www.youtube.com/playlist?list=PLp6ek2hDcoNDDRINFiWGDlPKUwW-g1Hjk) — NPTEL IIT Delhi · 38 videos · 29.0h across 38 episodes

**Watch only this:** Episodes 1 (Introduction and Recent Advances), 15 (Introduction to Transformer: Self & Multi-Head Attention), 22 (Prompt-based Learning), and 23 (Advanced Prompting and Prompt Sensitivity), about 3.5 hours total — these episodes cover the essentials of LLMs, transformers, and prompt engineering relevant to the paper.

*Why it unblocks this paper:* The 'Introduction to Large Language Models (LLMs)' by NPTEL IIT Delhi offers a clear, well-structured introduction to LLM fundamentals, transformers, and prompt-based learning, providing a solid conceptual overview in a shorter time frame suitable for quick background preparation.

*If you want all of it:* 29.0 hours across 38 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on code injection attacks in LLM-based multi-agent systems for software development, start by building foundational knowledge on large language models for code generation and multi-agent system architectures, as these are the core technologies underpinning the study. Then, gain a rigorous understanding of code injection attacks specifically in AI systems, which is central to the paper's threat model and attack analysis. Finally, focus on the paper's core concept by reviewing the authors' own talk or the most relevant advanced presentation on code injection attacks in multi-agent AI systems, to grasp their novel architectures and mitigation strategies.

### Large language models for code generation *(prerequisite)*
This section covers the fundamentals and advanced insights into how large language models (LLMs) are trained and used for generating code, which is the technological foundation of the multi-agent systems studied in the paper. Understanding LLMs' capabilities and limitations in code generation is essential to appreciate the vulnerabilities and defenses proposed.

*How the paper uses it:* LLMs are the core technology enabling the multi-agent systems studied in the paper.

▶ [Training Large Language Models for Secure Code Generation - Or Sahar](https://www.youtube.com/watch?v=EqKPnBrAAoE) — SecureFromScratch · 35:34 · 1 year ago

### Multi-agent system architectures *(prerequisite)*
This section delves into the design and structure of multi-agent systems (MAS), focusing on how multiple AI agents collaborate to perform complex tasks. It provides an advanced understanding of MAS architectures, which is critical for analyzing the proposed coder, coder-tester, and coder-reviewer-tester architectures in the paper.

*How the paper uses it:* The paper proposes and compares different MAS architectures for software implementation.

▶ [Architecting Multi-Agent Systems With Andrew Ng](https://www.youtube.com/watch?v=yi7doi-QGJI) — Sapphire Ventures · 29:06 · 1 year ago

### Code injection attacks in AI systems *(prerequisite)*
This section provides an in-depth exploration of code injection attacks, especially in the context of AI systems and LLMs. It covers emerging attack vectors like special token injection and the mechanics of how attackers can manipulate AI agents, which directly relates to the threat model and attack scenarios analyzed in the paper.

*How the paper uses it:* Understanding the nature and mechanisms of code injection attacks is central to the paper.

▶ [Armned Gashi | Hijacking AI Agents with Special Token Injection (STI)](https://www.youtube.com/watch?v=FFO9CAxLztg) — BSidesZagreb · 38:06 · 5 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand vulnerabilities and defenses in multi-agent AI systems for code generation. We start with the basics of code injection attacks to grasp the security risks, then explore how large language models generate code, followed by an introduction to multi-agent system architectures. Finally, we cover the role of security analysis agents as a mitigation strategy, directly relating to the paper's contributions.

### Code injection attacks in AI systems *(prerequisite)*
Code injection attacks involve maliciously inserting code to alter a system's behavior, a critical security risk especially in AI systems that generate or execute code. Understanding how these attacks work and their impact helps build intuition about the vulnerabilities faced by multi-agent AI systems.

*How the paper uses it:* The paper studies code injection attacks as the primary threat to multi-agent AI systems generating software code.

▶ [Injection Attacks 101: SQL Injection, Code Injection, and XSS](https://www.youtube.com/watch?v=wu6FAsiFhv0) — Aikido Security · 12:44 · 1 year ago

### Large language models for code generation *(prerequisite)*
Large language models (LLMs) are AI systems trained on vast text data that can generate human-like code. Understanding how LLMs generate code helps explain why multi-agent systems use them and why they might be vulnerable to injection attacks.

*How the paper uses it:* The multi-agent systems in the paper rely on LLMs like Code Llama and GPT-4.1-mini for code generation.

▶ [How LLMs Actually Generate Text  (Every Dev Should Know This)](https://www.youtube.com/watch?v=NKnZYvZA7w4) — LearnThatStack · 9:24 · 7 months ago

### Multi-agent system architectures *(prerequisite)*
Multi-agent systems consist of multiple AI agents working together, each with specialized roles. Learning about different architectures clarifies how agents collaborate and where vulnerabilities might arise in the software development process.

*How the paper uses it:* The paper proposes and compares coder, coder-tester, and coder-reviewer-tester architectures for software implementation.

▶ [What do Multi-Agent Architectures look like?](https://www.youtube.com/watch?v=4e3lK7OhuOg) — Software Developer Diaries · 11:11 · 10 months ago

### Security analysis agents in AI
Security analysis agents are specialized AI components designed to detect and mitigate attacks within multi-agent systems. Understanding their function and limitations is key to appreciating the paper's proposed defense mechanisms.

*How the paper uses it:* The paper introduces a security analysis agent to reduce code injection attack success in multi-agent systems.

▶ [You Can Learn AI Agent System Design In 19 Min | RAG, Vector Database, Evals, Function Calling](https://www.youtube.com/watch?v=CyLYY_xb5bQ) — Sean‘s AI Stories and AutoManus · 19:29 · 11 months ago

## Already in your library

- [Indirect Prompt Injection: Architectural Testing Approaches for Real World AI/ML Systems](https://www.youtube.com/watch?v=6KllX1F590o) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 15 - Code Generation](https://www.youtube.com/watch?v=JlK46EzImM8) — also for: A Solver-Aided Hierarchical Language for LLM-Driven CAD Design (Adriana Schulz)
- [Lecture: #9 Language Models for Code Generation - ScaDS.AI Dresden/Leipzig](https://www.youtube.com/watch?v=mto9XS1Bf1c) — also for: FloraForge: LLM-Assisted Procedural Generation of Editable and Analysis-Ready 3D Plant Geometric Models For Agricultural Applications (Bedrich Benes)
- [Large Language Models for Code Generation - Meetup ...](https://www.youtube.com/watch?v=VPy7HpmKCuA) — also for: Hierarchical Reward Design from Language: Enhancing Alignment of Agent Behavior with Human Specifications (Vaibhav V. Unhelkar)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [Large Language Models Explained Simply (In 13 Minutes)](https://www.youtube.com/watch?v=UgvrrHc5BRY) — also for: AI-Oracle Machines for Intelligent Computing (Jie Wang)
- [The Multi-Agent Architecture That Actually Ships — Luke ...](https://www.youtube.com/watch?v=ow1we5PzK-o) — also for: STRUCTUREDAGENT: Planning with AND/OR Trees for Long-Horizon Web Tasks (Yair Zick)
- [Multi Agent Systems - a complete guide with hands-on using LangGraph | Agent Design Pattern](https://www.youtube.com/watch?v=RXOvZIn-oSA) — also for: COMIC: Agentic Sketch Comedy Generation (Brian Curless)
- [Introduction to Multi-Agent Reinforcement Learning](https://www.youtube.com/watch?v=qgb0gyrpiGk) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)
- [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate understanding of the paper's analysis of code injection attacks on LLM-based multi-agent systems (MAS) for software development. The beginner project reproduces a core vulnerability metric on a simple MAS architecture using familiar tools. The intermediate project implements and evaluates the security analysis agent mitigation on a smaller scale, comparing attack success rates. The advanced project extends the paper by exploring improved prompting strategies for the security analysis agent to defend against poisoned few-shot example attacks, addressing a key limitation.

### Beginner — Simulate Code Injection Attacks on a Simple Coder MAS
*Effort: a weekend, ~8 hours*

You build a minimal multi-agent system with a single coder agent that uses a small open-source LLM (e.g., Code Llama 7b) to generate code solutions for simple programming problems. You then simulate basic code injection attacks by injecting malicious prompts or code snippets and measure the attack success rate by checking if the generated code contains the injected malicious payload.

**Why it shows you understood the paper:** This project shows you understand the vulnerability of the simplest MAS architecture (coder-only) to code injection attacks and can reproduce the paper's key finding that such architectures are highly vulnerable with near 100% attack success.

**Grounded in:** Coder and coder-tester architectures are highly vulnerable to code injection attacks with up to 100% attack success.

**Tech stack:** Python 3.11, OpenAI API or Hugging Face transformers (Code Llama 7b), Jupyter Notebook

**Data:** Use the HumanEval dataset as a source of simple function-level programming problems, publicly available from OpenAI.

**Build it:**

1. Set up a simple coder agent that takes a programming problem prompt and generates code using Code Llama 7b or an equivalent open-source LLM.
2. Implement a basic code injection attack by appending malicious code snippets or instructions to the prompt.
3. Run the coder agent on a subset of HumanEval problems with and without the attack.
4. Measure attack success by detecting if the generated code contains the malicious payload.
5. Report attack success rates and compare to baseline (no attack).

**Ships as:** A GitHub repo with code to run the coder agent, simulate attacks, and a README showing attack success metrics replicating the paper's vulnerability results for the coder architecture.

**Stretch goal:** Add a simple tester agent to create a coder-tester MAS and measure if attack success decreases.

### Intermediate — Implement Security Analysis Agent in Coder-Tester MAS
*Effort: 1-3 weekends, ~20 hours*

You implement the coder-tester MAS architecture and add a security analysis agent that inspects generated code for malicious injections before acceptance. You simulate code injection attacks including single and continued attacks, then evaluate how the security analysis agent reduces attack success rates compared to the baseline coder-tester MAS without security analysis.

**Why it shows you understood the paper:** This project demonstrates you can reimplement the paper's core mitigation method—adding a security analysis agent—and quantitatively evaluate its effectiveness in reducing attack success while maintaining code accuracy, reproducing the paper's key contribution.

**Grounded in:** Adding a security analysis agent to the coder-tester architecture reduces attack success to 0% for most attacks while maintaining accuracy and adding minimal overhead.

**Tech stack:** Python 3.11, OpenAI API or Hugging Face transformers (Code Llama 7b, Mistral 7b), Jupyter Notebook, pytest or unittest for testing

**Data:** Use the HumanEval dataset for programming problems; simulate attacks by injecting malicious prompts as described in the paper.

**Build it:**

1. Implement the coder agent and tester agent that generate and test code solutions respectively.
2. Develop a security analysis agent that analyzes generated code for suspicious patterns or injected payloads.
3. Integrate the security analysis agent into the coder-tester MAS pipeline.
4. Simulate various code injection attacks (single and continued) on the MAS.
5. Measure and compare attack success rates and code accuracy with and without the security analysis agent.
6. Document the evaluation results and discuss trade-offs in efficiency.

**Ships as:** A GitHub repo with a multi-agent system implementation including security analysis, scripts to simulate attacks, and a detailed README reporting attack success reduction and accuracy metrics.

**Stretch goal:** Experiment with different prompting strategies for the security analysis agent to improve detection rates.

### Advanced — Enhance Security Analysis Agent Against Poisoned Few-Shot Attacks
*Effort: a few weeks, ~40+ hours*

You extend the security analysis agent by designing and testing improved prompt engineering and detection heuristics to defend against advanced code injection attacks involving poisoned few-shot examples. You evaluate the enhanced agent's robustness on the HumanEval dataset with simulated poisoned few-shot attacks and compare attack success rates to the baseline security analysis agent.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by addressing the vulnerability of the security analysis agent to sophisticated poisoned few-shot attacks, demonstrating deep comprehension of the paper's threat model and mitigation challenges.

**Grounded in:** Advanced attacks using poisoned few-shot examples increase attack success rate up to 71.95% even against the security analysis agent; improving prompts for security analysis agents is a future direction.

**Tech stack:** Python 3.11, OpenAI API or Hugging Face transformers (Code Llama 7b, GPT-4.1-mini if accessible), Jupyter Notebook, Prompt engineering tools or libraries

**Data:** HumanEval dataset for code problems; simulate poisoned few-shot example attacks by injecting malicious examples into prompts as described in the paper.

**Build it:**

1. Review the paper's description of poisoned few-shot example attacks and the baseline security analysis agent prompt design.
2. Design enhanced prompt templates and detection heuristics for the security analysis agent to better identify poisoned examples.
3. Implement the enhanced security analysis agent within the coder-tester MAS framework.
4. Simulate poisoned few-shot example attacks on the MAS using HumanEval problems.
5. Evaluate and compare attack success rates and code accuracy against the baseline security analysis agent.
6. Analyze trade-offs in efficiency and detection robustness; document findings.

**Ships as:** A GitHub repo with the enhanced security analysis agent implementation, attack simulation scripts, and a comprehensive README detailing improvements in defense against poisoned few-shot attacks.

**Stretch goal:** Explore integrating static code analysis tools or anomaly detection models to complement the security analysis agent.
