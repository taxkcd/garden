---
title: "491 · Bypassing Prompt Guards in Production with Controlled-Release Prompting — Sanjam Garg"
date: 2026-08-19
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sanjam-garg"
source_hash: "db431bb50bb2fa11264635a3207f32b68cc57146b2ecbc224b5e4a30c05b669f"
sequence: 491
generator: "outreach-garden: managed"
---

# 491 · Bypassing Prompt Guards in Production with Controlled-Release Prompting

## At a glance

- **Professor:** Sanjam Garg
- **Institution:** Univ. of California - Berkeley
- **Paper:** [Bypassing Prompt Guards in Production with Controlled-Release Prompting](https://arxiv.org/pdf/2510.01529)
- **Authors:** Jaiden Fairoze, Sanjam Garg, Keewoo Lee, Mingyuan Wang
- **Year:** 2026

## Paper overview

This paper demonstrates a practical attack called controlled-release prompting that bypasses input filters (prompt guards) used in large language model (LLM) systems to block harmful prompts. The attack exploits the inherent resource asymmetry between lightweight input filters and more powerful main LLMs by encoding malicious prompts in a way that filters cannot decode within their computational limits, but the main LLM can. The authors validate this attack on major commercial chat platforms and evaluate many guard models, showing that effective defense requires computational resources comparable to the main model.

### Why it matters

**Research problem:** Input filtering for AI alignment and safety faces a fundamental limitation: no filter running significantly faster than the protected LLM can universally detect adversarial prompts that induce harmful outputs. The problem is whether this theoretical impossibility manifests as real-world vulnerabilities in deployed LLM systems.

**Why it matters:** Input filters are widely used in production to prevent harmful content generation by blocking malicious prompts before they reach the main model. If these filters can be bypassed, harmful content can be generated, posing safety, ethical, and legal risks including copyright infringement and malicious instructions dissemination.

**Key contributions:**

- Practical instantiation of the theoretical impossibility of prompt filtering without requiring model modification.
- Demonstration of controlled-release prompting attacks on four major chat platforms achieving near-perfect success rates where baseline methods fail.
- Systematic evaluation of 14 open-weight prompt guard models revealing that even reasoning-capable filters cannot reliably detect these attacks without prohibitive resource overhead.
- Extended analysis showing the attack enables extraction of copyrighted training data and exposes fragility in current safety mechanisms.

## About the professor

**Sanjam Garg** — Associate Professor, Computer Science Division, Univ. of California - Berkeley.

Research interests: cryptography and its applications to security and privacy

### Research links

- [Faculty/profile page](http://www.cs.berkeley.edu/~sanjamg)
- [Resolved homepage](https://people.eecs.berkeley.edu/~sanjamg)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** cryptographic time-lock puzzles
**The paper assumes:** cryptographic time-lock puzzles and their computational hardness assumptions
**Already in this field?** Skip this entirely if you already understand cryptographic time-lock puzzles and their role in sequential computational hardness.

This background focuses on cryptographic time-lock puzzles, a core concept underlying the controlled-release prompting attack in the paper. The rigorous course option offers a deep, structured university-level introduction to cryptography fundamentals including computational security concepts essential to understanding time-lock puzzles. The fast track provides a shorter, more accessible playlist that covers the key cryptographic building blocks quickly for readers who want a solid grasp without a full course commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Foundations of Cryptography](https://www.youtube.com/playlist?list=PLgMDNELGJ1CbdGLyn7OrVAP-IKg-0q2U2) — NPTEL - Indian Institute of Science, Bengaluru · 59 videos · 32.9h across 59 episodes

**Watch only this:** Lectures noc20 cs02 lec06 Introduction to Computational Security through noc20 cs02 lec10 Stream Ciphers, about 2.8 hours total — these cover the computational hardness assumptions and cryptographic primitives relevant to time-lock puzzles.

*Why it unblocks this paper:* This NPTEL course from IISc Bengaluru offers a comprehensive foundation in cryptography, covering computational security, pseudorandom generators, and block cipher constructions that underpin time-lock puzzles. It is well-structured and authoritative, ideal for understanding the theoretical and practical cryptographic concepts the paper builds on.

*If you want all of it:* 32.9 hours across 59 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Invitation to Modern Cryptography: CSE207, UCSD Computer Science](https://www.youtube.com/playlist?list=PL-SStBoAJuw0vj8MgTFhY5y9wSFnjGbOB) — Mihir Bellare · 28 videos

**Watch only this:** Episodes 'Block Ciphers and KR Security: What is a block cipher, and DES' through 'Symmetric Encryption: IND-CPA security of CTR$ and CBC$', about 3.5 hours total — these cover the essential cryptographic concepts for grasping time-lock puzzles.

*Why it unblocks this paper:* Mihir Bellare's UCSD course playlist provides clear, concise explanations of modern cryptographic primitives including block ciphers, pseudorandom functions, and symmetric encryption modes. It offers a focused, accessible introduction to the cryptographic building blocks relevant to understanding time-lock puzzles in under a day.

*If you want all of it:* 24.1 hours across 28 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Bypassing Prompt Guards in Production with Controlled-Release Prompting," start by building foundational knowledge on the cryptographic concept of time-lock puzzles, which underpin the attack's encoding scheme. Next, explore the theoretical resource asymmetry in AI safety that explains why input filters cannot match the main LLM's computational power. Then, study adversarial prompting techniques in LLMs to grasp how malicious prompts evade defenses. Follow this with insights into input filtering's role and limitations in AI alignment. Finally, focus on the paper's core contribution by watching the authors' own talk or a closely related expert presentation on controlled-release prompting attacks.

### Time-Lock Puzzles Cryptography *(prerequisite)*
Time-lock puzzles are cryptographic constructs that enable delaying the revelation of information until a certain computational effort is expended. Understanding these puzzles is essential because the paper's attack uses pseudo time-lock puzzles to encode malicious prompts that lightweight filters cannot decode but the main LLM can through multi-step reasoning.

*How the paper uses it:* The paper's controlled-release prompting attack leverages pseudo time-lock puzzles to exploit resource asymmetry between input filters and main LLMs.

▶ [Multi-instance Publicly Verifiable Time-lock Puzzle and its Applications](https://www.youtube.com/watch?v=a-URmUnODe8) — UCL Information Security Research Group · 45:58 · Streamed 5 years ago

### Resource Asymmetry in AI Safety *(prerequisite)*
Resource asymmetry refers to the fundamental computational gap between lightweight input filters and the more powerful main LLMs. This concept explains why no input filter running significantly faster than the main model can universally detect adversarial prompts, forming the theoretical foundation for the paper's attack.

*How the paper uses it:* The paper validates the theoretical impossibility of universal prompt filtering due to resource asymmetry in real-world LLM systems.

▶ [Lecture 8 – Large Multimodal Models (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=p_GGsKgGxSo) — Paul Liang · 49:28 · 11 months ago

### Adversarial Prompting in LLMs *(prerequisite)*
Adversarial prompting involves crafting inputs that manipulate LLM behavior to bypass safety mechanisms or induce harmful outputs. Understanding these techniques provides context for how malicious prompts are constructed and why they evade existing defenses, setting the stage for the paper's novel controlled-release prompting attack.

*How the paper uses it:* The paper builds on adversarial prompting by introducing a two-phase controlled-release approach that bypasses prompt guards.

▶ [Red Teaming Large Language Models - Armin Buescher - NDC Security 2024](https://www.youtube.com/watch?v=QMS19i2BUjM) — NDC Conferences · 58:59 · 2 years ago

### Input Filtering for AI Alignment *(prerequisite)*
Input filtering is a widely used safety mechanism that blocks harmful prompts before they reach the main LLM. Studying its role and inherent limitations in AI alignment helps understand why current filters fail against sophisticated attacks like controlled-release prompting.

*How the paper uses it:* The paper demonstrates that input filtering alone is insufficient for AI safety due to fundamental limitations validated through practical attacks.

▶ [Eliezer Yudkowsky – AI Alignment: Why It's Hard, and Where to Start](https://www.youtube.com/watch?v=EUjc1WuyPT8) — Machine Intelligence Research Institute · 1:29:56 · 9 years ago

### Controlled-Release Prompting Paper Talk
This section features the authors' own talk or a closely related expert presentation that directly explains the controlled-release prompting attack framework, its practical implications, and evaluation results. Watching this talk provides the most accurate and detailed understanding of the paper's core contributions.

*How the paper uses it:* The authors' talk presents the controlled-release prompting attack, demonstrating how it bypasses prompt guards in production LLMs.

▶ [Attacking AI - Jason Haddix - NDC Security 2026](https://www.youtube.com/watch?v=j51uMah-3js) — NDC Conferences · 55:49 · 4 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces foundational concepts needed to understand the paper on controlled-release prompting attacks against large language model (LLM) input filters. It starts with the basics of input filtering and AI alignment challenges, then explains adversarial prompting techniques, followed by the cryptographic idea of time-lock puzzles that underpin the attack encoding. Finally, it presents the core controlled-release prompting attack framework used in the paper. This progression builds intuition step-by-step, enabling learners to grasp the paper’s contributions and implications.

### Input Filtering for AI Alignment *(prerequisite)*
Input filtering is a common safety mechanism that blocks harmful or malicious prompts before they reach an AI model. Understanding its role and inherent limitations helps explain why such filters can be bypassed and why AI alignment remains challenging.

*How the paper uses it:* The paper studies how input filters used in production fail to reliably block adversarial prompts due to fundamental limitations.

▶ [Eliezer Yudkowsky – AI Alignment: Why It's Hard, and Where to Start](https://www.youtube.com/watch?v=EUjc1WuyPT8) — Machine Intelligence Research Institute · 1:29:56 · 9 years ago

### Adversarial Prompting in LLMs *(prerequisite)*
Adversarial prompting involves crafting inputs that trick language models into producing unintended or harmful outputs. Learning how these prompts work and evade defenses is key to understanding the attack strategies in the paper.

*How the paper uses it:* Controlled-release prompting is a novel adversarial prompting technique that encodes malicious instructions to bypass filters.

▶ [The Hidden Threat to AI Adversarial Prompt Attacks Explained](https://www.youtube.com/watch?v=JkG-I2EWNsM) — Byte-Size AI Learning Hub · 6:29 · 5 months ago

### Time-Lock Puzzles Cryptography *(prerequisite)*
Time-lock puzzles are cryptographic constructs that delay access to information until a certain amount of computation is performed. This concept helps explain how the paper’s attack encodes prompts that are hard for filters to decode quickly but solvable by the main LLM.

*How the paper uses it:* The attack uses pseudo time-lock puzzles to exploit resource asymmetry between filters and LLMs.

▶ [Multi-instance Publicly Verifiable Time-lock Puzzle and its Applications](https://www.youtube.com/watch?v=a-URmUnODe8) — UCL Information Security Research Group · 45:58 · Streamed 5 years ago

### Resource Asymmetry in AI Safety *(prerequisite)*
Resource asymmetry refers to the difference in computational power between lightweight input filters and the main large language models. This gap creates a fundamental vulnerability that the paper exploits.

*How the paper uses it:* The paper’s attack leverages the resource asymmetry to bypass input filters that cannot afford the computational cost of decoding complex encodings.

▶ [Lecture 8 – Large Multimodal Models (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=p_GGsKgGxSo) — Paul Liang · 49:28 · 11 months ago

### Controlled-Release Prompting Attack Framework
This framework encodes malicious prompts in a way that appears benign to input filters but can be decoded and executed by the main LLM over multiple conversational turns. It demonstrates a practical bypass of prompt guards in deployed systems.

*How the paper uses it:* This is the central method introduced and evaluated in the paper to bypass prompt guards in production LLMs.

▶ [Attacking AI - Jason Haddix - NDC Security 2026](https://www.youtube.com/watch?v=j51uMah-3js) — NDC Conferences · 55:49 · 4 months ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [9: Generative AI – Large Language Models (LLMs) and ...](https://www.youtube.com/watch?v=KGDe1QvfKJ8) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [Large Language Models for Health 101](https://www.youtube.com/watch?v=b88FZYNJdIk) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [Adversarial Machine Learning explained! | With examples.](https://www.youtube.com/watch?v=YyTyWGUUhmo) — also for: The Black Tuesday Attack: How to Crash the Stock Market with Adversarial Examples to Financial Forecasting Models (Amir Sadovnik)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the controlled-release prompting attack described in the paper. Starting with a small-scale encoding and decoding simulation, you progress to implementing the core two-phase attack on a public LLM interface and evaluating detection by a simple baseline filter. Finally, you extend the approach by exploring a defense mechanism or a novel encoding scheme addressing the paper's limitations or future directions.

### Beginner — Simulate Controlled-Release Prompt Encoding and Decoding
*Effort: a weekend, ~8 hours*

You build a simple Python script that encodes a harmful prompt using a substitution cipher and then decodes it via multi-step reasoning simulation. This reproduces the core idea of the paper's encoding-only phase and activation phase in a minimal setting without requiring access to commercial LLMs.

**Why it shows you understood the paper:** This project shows you grasp the fundamental mechanism of controlled-release prompting: how encoding can evade lightweight filters and how multi-step reasoning can recover the malicious intent.

**Grounded in:** The attack proceeds in two phases: injection of encoded prompts that appear benign to filters, followed by activation where the decoded malicious instructions are executed by the LLM.

**Tech stack:** Python 3.11

**Data:** No external data needed; you create example prompts and their encoded forms manually.

**Build it:**

1. Implement a simple substitution cipher encoder for text prompts.
2. Write a decoder function that simulates multi-step reasoning to recover the original prompt.
3. Demonstrate encoding a harmful prompt, showing the encoded text appears benign.
4. Show decoding the encoded prompt recovers the harmful instructions.
5. Document the process and explain how this simulates the controlled-release prompting phases.

**Ships as:** A GitHub repo with Python scripts and a README explaining the encoding and decoding process, illustrating the two-phase attack concept.

**Stretch goal:** Add a verbose descriptive text encoding scheme as an alternative to substitution cipher.

### Intermediate — Implement Controlled-Release Prompting Attack on Open LLM with Baseline Filter
*Effort: 2 weekends, ~20 hours*

You implement the two-phase controlled-release prompting attack on a publicly accessible LLM (e.g., OpenAI GPT-4 or Anthropic Claude) using substitution cipher encoding. You also implement a simple baseline input filter (e.g., keyword-based or a small classifier) to evaluate detection rates compared to raw malicious prompts.

**Why it shows you understood the paper:** This project demonstrates your ability to operationalize the paper's core attack method and empirically validate the resource asymmetry effect by comparing attack success against a baseline filter.

**Grounded in:** Demonstration of controlled-release prompting attacks on four major chat platforms achieving near-perfect success rates where baseline methods fail.

**Tech stack:** Python 3.11, OpenAI API or Anthropic Claude API, scikit-learn or simple keyword filter

**Data:** You create a small set of malicious prompts and their encoded variants; no proprietary data needed.

**Build it:**

1. Implement the substitution cipher encoding and decoding functions.
2. Develop a script to send encoded prompts to the LLM API and receive responses.
3. Implement a baseline input filter that blocks raw malicious prompts but not encoded ones.
4. Run experiments comparing success rates of raw vs. encoded prompts against the filter.
5. Analyze and report detection rates and attack success in a README with metrics similar to the paper.

**Verified links from the paper:**

- <https://github.com/meta-llama/PurpleLlama> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with attack scripts, baseline filter code, experiment logs, and a report showing controlled-release prompting outperforms baseline filtering.

**Stretch goal:** Integrate a reasoning-capable filter model (e.g., PurpleLlama from https://github.com/meta-llama/PurpleLlama) to evaluate detection improvements.

### Advanced — Design and Evaluate a Multi-Layered Defense Combining Input and Output Filtering
*Effort: 3+ weeks*

You design and implement a defense mechanism that combines input filtering with output filtering to mitigate controlled-release prompting attacks. You evaluate the defense against your intermediate project’s attack implementation, measuring detection rates and latency overhead. This addresses the paper’s future direction on multi-layered defenses.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper’s limitations and future directions by attempting a practical defense that balances robustness and efficiency, advancing beyond the paper’s baseline evaluations.

**Grounded in:** Developing multi-layered defenses combining input filtering with output filtering and other safety mechanisms.

**Tech stack:** Python 3.11, OpenAI API or Anthropic Claude API, scikit-learn or PyTorch for classifiers, Docker for deployment simulation

**Data:** Uses the same malicious prompt sets and encoded variants from the intermediate project.

**Build it:**

1. Implement an input filter that uses lightweight heuristics to flag suspicious prompts.
2. Implement an output filter that analyzes generated responses for harmful content.
3. Integrate both filters into a pipeline that processes user input and model output.
4. Test the pipeline against controlled-release prompting attacks implemented earlier.
5. Measure detection rates, false positives, and latency overhead.
6. Document findings and discuss trade-offs and potential improvements.

**Verified links from the paper:**

- <https://github.com/meta-llama/PurpleLlama> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/datasets/GuardrailsAI/det> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with defense pipeline code, evaluation scripts, and a detailed report discussing effectiveness and efficiency trade-offs.

**Stretch goal:** Explore novel encoding schemes that further exploit resource asymmetry or evade detection and evaluate defense robustness against them.
