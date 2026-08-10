---
title: "090 · NeuroFilter: Activation-Based Guardrails for Privacy-Conscious LLM Agents — Ferdinando Fioretto"
date: 2026-07-31
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ferdinando-fioretto"
source_hash: "a7b587fe0193a0ef4f4a6ff7b648dd0f2e35dd04c19f959fdc49a0f53a8bed58"
sequence: 90
generator: "outreach-garden: managed"
---

# 090 · NeuroFilter: Activation-Based Guardrails for Privacy-Conscious LLM Agents

## At a glance

- **Professor:** Ferdinando Fioretto
- **Institution:** University of Virginia
- **Paper:** [NeuroFilter: Activation-Based Guardrails for Privacy-Conscious LLM Agents](https://arxiv.org/pdf/2601.14660)
- **Authors:** Saswat Das, Ferdinando Fioretto
- **Year:** 2026

## Paper overview

This paper introduces NeuroFilter, a novel method to protect large language model (LLM) agents from leaking sensitive information during conversations. Unlike existing methods that rely on expensive text-based monitoring, NeuroFilter detects privacy-violating intent by analyzing the internal activations of the model in real-time. It effectively identifies both single-turn and multi-turn privacy attacks, including sophisticated adversarial strategies, while maintaining low computational cost and preserving the utility of the agent.

### Why it matters

**Research problem:** Agentic LLMs require access to sensitive contextual information to perform tasks effectively, but this access creates risks of contextually inappropriate information disclosure. Existing defenses are costly, rely on semantic text analysis, and fail against multi-turn and mosaic attacks that distribute malicious intent across conversation turns.

**Why it matters:** Privacy violations in LLM agents can lead to regulatory exposure (e.g., GDPR, HIPAA) and real-world harms such as increased insurance premiums or denied credit. Ensuring contextual privacy is critical for safe deployment of LLM agents in sensitive domains like healthcare, finance, and legal services.

**Key contributions:**

- Demonstration that privacy-violating intent is linearly detectable in intermediate-layer activations of LLMs.
- Introduction of activation velocity as a trajectory-level signal to detect multi-turn conversational manipulation and mosaic attacks.
- Development of a low-latency, computationally efficient input filtering framework compatible with real-time agentic LLM deployments.
- Comprehensive evaluation across multiple LLM families, sizes, and precisions showing robustness and generalization.
- Empirical evidence that NeuroFilter outperforms state-of-the-art baselines in safety and utility while incurring significantly lower computational costs.

## About the professor

**Ferdinando Fioretto** — Copenhaver Fellow and Associate Professor, Computer Science, University of Virginia.

Research interests: Foundational ML and Generative AI under Constraints, AI for Science and Engineering, Discrete Diffusion Language Models, Decision Focused Learning, LLM Multiagent Systems, Responsible AI

### Research links

- [Faculty/profile page](http://nandofioretto.com)
- [Resolved homepage](https://nandofioretto.github.io/)
- [Lab website](https://nandofioretto.github.io/group/)
- [Google Scholar](https://scholar.google.com/citations?user=ASf9Q04AAAAJ&sortby=pubdate)
- [GitHub](https://github.com/nandofioretto)
- [Social profile](https://twitter.com/nandofioretto)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Neural Network Interpretability
**The paper assumes:** neural network internals, activation representations, linear probing methods, interpretability techniques in deep learning
**Already in this field?** Skip this entirely if you already understand neural network interpretability methods and how to analyze intermediate activations with probing techniques.

Understanding neural network interpretability is crucial for grasping the methodology behind NeuroFilter, which probes internal activations of LLMs to detect privacy-violating intent. The rigorous course option provides a deep, structured academic foundation on neural network interpretability, while the fast track offers a concise, intuition-driven explanation suitable for quickly building core understanding without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS230: Deep Learning | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rOABXSygHTsbvUz4G_YQhOb) — Stanford Online · 10 videos · 12.4h across 10 episodes

**Watch only this:** Watch Lecture 7 - Interpretability of Neural Network (~74 minutes) to focus specifically on interpretability techniques, plus Lecture 2 - Deep Learning Intuition (~74 minutes) for foundational understanding, totaling about 2.5 hours.

*Why it unblocks this paper:* Stanford CS230 includes a dedicated lecture on neural network interpretability (Lecture 7) within a comprehensive deep learning course taught by Andrew Ng, providing rigorous academic coverage directly relevant to understanding activation probing methods used in NeuroFilter.

*If you want all of it:* The entire 10-lecture series totals approximately 12.4 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks / Deep Learning](https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1) — StatQuest with Josh Starmer · 33 videos · 10.9h across 33 episodes

**Watch only this:** Watch the first 10 episodes covering the essential main ideas of neural networks, backpropagation, activation functions, and softmax (~3.2 hours total, ~19 minutes each), which provide a solid fast-track understanding of neural network internals relevant to activation probing.

*Why it unblocks this paper:* StatQuest with Josh Starmer offers a well-produced, clear, and intuition-first playlist on neural networks that covers core concepts including backpropagation, activation functions, and transformers, which underpin the interpretability and probing techniques in NeuroFilter.

*If you want all of it:* The full 33-episode playlist totals about 10.9 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the NeuroFilter paper, start by building foundational knowledge on probing internal activations of LLMs and the use of linear probes in neural networks, as these underpin the detection methodology. Next, explore the context of privacy attacks on conversational agents and real-time safety filtering challenges in LLM agents to appreciate the problem setting and deployment constraints. Finally, focus on the core novel contributions of NeuroFilter itself, including the authors' own talk and related activation velocity detection methods for multi-turn privacy attacks.

### LLM internal activations probing *(prerequisite)*
Understanding how semantic and intent information is encoded in the internal activations of large language models is critical. This section covers advanced research talks that explain how concepts can be linearly decoded from intermediate layers, providing the theoretical basis for NeuroFilter's activation-based detection.

*How the paper uses it:* NeuroFilter relies on detecting privacy-violating intent from intermediate-layer activations of LLMs.

▶ [Detection and Steering in LLMs using Feature Learning](https://www.youtube.com/watch?v=TlLu32yHYfk) — Simons Institute for the Theory of Computing · 1:02:35

### Linear probes in neural networks *(prerequisite)*
Linear probes are a key technique used to extract interpretable signals from neural network activations without modifying the model. This section includes rigorous explainers and conference talks that delve into the theory and application of probing classifiers, essential for understanding NeuroFilter's detection mechanism.

*How the paper uses it:* NeuroFilter trains linear probes on cached activations to identify privacy-violating prompts.

▶ [Linear representations of concepts in modern AI models](https://www.youtube.com/watch?v=nbuCGBhf_Og) — Simons Institute for the Theory of Computing · 36:36

### Privacy attacks on conversational agents *(prerequisite)*
This section provides advanced lectures and talks on the nature of privacy and security risks in conversational AI systems, including adversarial prompt injection and multi-turn attacks. Understanding these threats contextualizes the necessity and design goals of NeuroFilter.

*How the paper uses it:* NeuroFilter aims to detect and prevent privacy violations and adversarial attacks in conversational LLM agents.

▶ [Distinguished Lecture Series: Wenke Lee "Privacy and ...](https://www.youtube.com/watch?v=XOHmAp3GWRI) — ISTatPENNSTATE · 1:15:04

### Real-time safety filtering in LLM agents *(prerequisite)*
Deploying safety filters in real-time LLM agents involves balancing latency, computational cost, and detection accuracy. This section includes university lectures and research talks that discuss these challenges and existing approaches, framing the practical deployment context for NeuroFilter.

*How the paper uses it:* NeuroFilter is designed as a low-latency, computationally efficient input filtering framework for real-time LLM agent deployments.

▶ [Zhijing Jin | Emergent AI safety risks in multi-agent LLMs](https://www.youtube.com/watch?v=1MxpYJJHeik) — Schwartz Reisman Institute · 1:26:46

### Activation velocity detection
Activation velocity is a novel trajectory-level signal introduced by NeuroFilter to detect multi-turn conversational manipulation and mosaic attacks. This section includes recent research talks on activation-based detection methods in multi-agent systems, providing insight into this innovative approach.

*How the paper uses it:* Activation velocity enables NeuroFilter to detect gradual adversarial steering across conversation turns.

▶ [When Agents Go Rogue: Activation-Based Detection of Malicious Behaviors in Multi-Agent Systems](https://www.youtube.com/watch?v=rLv5VIjwL6o) — AI x Security · 7:51 · 2 weeks ago

### NeuroFilter talk *(the paper's own talk)*
The authors' own presentation of NeuroFilter offers the most direct and detailed explanation of their method, experimental results, and implications. Watching this talk provides authoritative insights into the design and evaluation of the activation-based guardrails for privacy in LLM agents.

*How the paper uses it:* This is the authors' own recorded talk about NeuroFilter, the core contribution of the paper.

▶ [Behind the Refusal: Determining Guardrail Activation via Behavioral Monitoring](https://www.youtube.com/watch?v=jpXwnOcNk2U) — AI x Security · 2 weeks ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand NeuroFilter, a method for privacy protection in large language model (LLM) agents. We start with how internal activations of LLMs can reveal semantic and intent information, then cover linear probes as a key technique to detect such information. Next, we explore real-time safety filtering challenges in LLM agents, followed by understanding privacy attacks on conversational agents that NeuroFilter aims to prevent. Finally, we focus on NeuroFilter's core innovation: activation velocity detection for multi-turn privacy attacks.

### LLM internal activations probing *(prerequisite)*
Large language models process inputs through multiple layers, producing internal activations that encode semantic and intent information. Probing these activations helps us understand what the model 'knows' at different stages, revealing hidden concepts without changing the model itself.

*How the paper uses it:* NeuroFilter relies on detecting privacy-violating intent by analyzing intermediate-layer activations of LLMs.

▶ [LLM Internal Concepts Shift During Chat](https://www.youtube.com/watch?v=9urAoDX-Lio) — AI Research Roundup · 4:21

### Linear probes in neural networks *(prerequisite)*
Linear probes are simple classifiers trained on neural network activations to detect specific concepts or behaviors. They provide an interpretable and computationally efficient way to identify whether certain information is linearly encoded in model activations.

*How the paper uses it:* NeuroFilter uses linear probes trained on cached activations to detect privacy-violating prompts efficiently.

▶ [Probing Classifiers: A Gentle Intro (Explainable AI for Deep ...](https://www.youtube.com/watch?v=HJn-OTNLnoE) — Jay Alammar · 11:26

### Real-time safety filtering in LLM agents *(prerequisite)*
Deploying LLM agents safely requires filtering inputs and outputs in real-time to prevent harmful or privacy-violating content. This involves balancing computational efficiency with accuracy to maintain agent utility and responsiveness.

*How the paper uses it:* NeuroFilter addresses the challenge of low-latency, computationally efficient input filtering compatible with real-time LLM deployments.

▶ [Zhijing Jin | Emergent AI safety risks in multi-agent LLMs](https://www.youtube.com/watch?v=1MxpYJJHeik) — Schwartz Reisman Institute · 1:26:46

### Privacy attacks on conversational agents *(prerequisite)*
Conversational agents can be vulnerable to privacy attacks where adversaries extract or leak sensitive information through malicious prompts or multi-turn manipulations. Understanding these threats is crucial to designing effective defenses.

*How the paper uses it:* NeuroFilter aims to detect and prevent single-turn, multi-turn, and mosaic privacy attacks on LLM agents.

▶ [AI Prompt Injection Attacks Explained: How Hackers Target AI ...](https://www.youtube.com/watch?v=hrLAU8nG63c) — Practical DevSecOps · 15:04

### Activation velocity detection
Activation velocity tracks how internal activations change over multiple conversation turns, enabling detection of gradual adversarial steering or multi-turn attacks that are hard to catch with single-turn analysis.

*How the paper uses it:* NeuroFilter introduces activation velocity as a novel trajectory-level signal to detect multi-turn conversational privacy attacks.

▶ [When Agents Go Rogue: Activation-Based Detection of Malicious Behaviors in Multi-Agent Systems](https://www.youtube.com/watch?v=rLv5VIjwL6o) — AI x Security · 7:51 · 2 weeks ago

### NeuroFilter talk *(the paper's own talk)*
A direct presentation from the authors explaining NeuroFilter’s design, methodology, and evaluation, providing insights into how activation-based guardrails enforce privacy in LLM agents.

*How the paper uses it:* This talk offers the clearest overview of NeuroFilter’s approach and results from the original researchers.

▶ [Behind the Refusal: Determining Guardrail Activation via Behavioral Monitoring](https://www.youtube.com/watch?v=jpXwnOcNk2U) — AI x Security · 2 weeks ago

## Already in your library

- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of NeuroFilter's core ideas and contributions. The beginner project reproduces a fundamental mechanism—linear probing of LLM activations for privacy intent detection—using familiar tools and synthetic data. The intermediate project implements NeuroFilter's activation velocity concept to detect multi-turn privacy attacks on a small-scale conversational dataset, comparing against a simple text-based baseline. The advanced project extends NeuroFilter by exploring dynamic probe recalibration to address the limitation of reduced accuracy on fine-tuned models, aligning with the paper's future directions and requiring new skills in continual learning and transfer learning.

### Beginner — Linear Probe for Privacy Intent Detection in LLM Activations
*Effort: a weekend, ~8 hours*

You build a simple linear probe classifier trained on intermediate activations extracted from a small pretrained decoder-only LLM (e.g., GPT-2 small) to detect privacy-violating prompts versus benign prompts. You simulate a small dataset of prompts labeled as privacy-violating or benign based on crafted examples. The project focuses on extracting activations at a specific transformer layer and training a logistic regression model to classify privacy intent.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's key contribution that privacy-violating intent is linearly detectable in intermediate-layer activations, and you can operationalize activation extraction and linear probing on LLM internals.

**Grounded in:** Demonstration that privacy-violating intent is linearly detectable in intermediate-layer activations of LLMs.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), scikit-learn, Jupyter Notebook

**Data:** Synthetic prompt dataset created by you with labeled privacy-violating and benign prompts, as no public dataset is provided by the paper.

**Build it:**

1. Select a small pretrained decoder-only LLM (e.g., GPT-2 small) from Hugging Face.
2. Create a small labeled dataset of prompts with privacy-violating and benign examples.
3. Write code to run prompts through the model and cache intermediate activations at a chosen transformer layer.
4. Train a logistic regression classifier on the cached activations to distinguish privacy-violating from benign prompts.
5. Evaluate classification accuracy and visualize decision boundaries or feature importance.
6. Document the process and results in a README.

**Ships as:** A GitHub repo with code to extract activations, train and evaluate a linear probe, and a README explaining the connection to NeuroFilter's linear detectability claim.

**Stretch goal:** Add visualization of activation distributions for privacy-violating vs benign prompts to better illustrate linear separability.

### Intermediate — Activation Velocity for Multi-Turn Privacy Attack Detection
*Effort: 2 weekends, ~20 hours*

You implement the activation velocity concept from NeuroFilter to detect multi-turn privacy attacks by tracking activation trajectories over conversation turns. Using a small public conversational dataset (e.g., a subset of MultiWOZ or a synthetic multi-turn dialogue dataset), you simulate privacy-violating multi-turn prompts and benign conversations. You train linear probes on activations per turn and compute activation velocity features to classify conversations as safe or adversarial. You compare your method against a simple text-based semantic classifier baseline.

**Why it shows you understood the paper:** This project shows you grasp the novel trajectory-level signal NeuroFilter introduces to detect gradual adversarial steering in multi-turn conversations, and you can implement and evaluate it on real conversational data.

**Grounded in:** Introduction of activation velocity as a trajectory-level signal to detect multi-turn conversational manipulation and mosaic attacks.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), scikit-learn, pandas, Jupyter Notebook

**Data:** A small subset of a public multi-turn conversational dataset (e.g., MultiWOZ) with synthetic privacy-violating multi-turn prompts crafted by you to simulate adversarial steering.

**Build it:**

1. Select a pretrained decoder-only LLM and a multi-turn conversational dataset.
2. Simulate multi-turn privacy-violating conversations by injecting adversarial prompts across turns.
3. Extract intermediate activations for each turn and compute activation velocity (difference vectors between consecutive activations).
4. Train linear probes on activation velocity features to classify conversations as privacy-violating or benign.
5. Implement a simple text-based semantic classifier baseline for comparison.
6. Evaluate and compare detection accuracy, false positive rates, and latency.
7. Write a detailed README explaining activation velocity and your evaluation results.

**Ships as:** A GitHub repo demonstrating activation velocity-based multi-turn privacy attack detection with baseline comparison and evaluation metrics.

**Stretch goal:** Extend to detect mosaic attacks by distributing adversarial intent across more turns and evaluate detection robustness.

### Advanced — Dynamic Probe Recalibration for Fine-Tuned LLM Variants
*Effort: 3-4 weeks*

You develop a system to dynamically recalibrate or adapt NeuroFilter's activation probes after fine-tuning an LLM, addressing the paper's limitation of reduced probe accuracy on fine-tuned models. Starting from your intermediate project code, you fine-tune the base LLM on a small domain-specific corpus, then implement transfer learning or continual learning methods to update the linear probes without full retraining. You evaluate probe accuracy before and after recalibration on privacy-violating and benign prompts, demonstrating improved robustness.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of NeuroFilter, showing you can extend the method to real-world deployment challenges involving model updates and probe lifecycle management.

**Grounded in:** Limitations include reduced confidence and accuracy when applied to fine-tuned model variants, requiring recalibration or transfer learning; future direction includes developing lifecycle management approaches for probe recalibration after model updates.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), scikit-learn, Jupyter Notebook

**Data:** Synthetic privacy-violating and benign prompts as before, plus a small domain-specific corpus for fine-tuning the LLM (e.g., a subset of legal or healthcare text publicly available).

**Build it:**

1. Fine-tune the base pretrained LLM on a small domain-specific corpus.
2. Evaluate baseline linear probe accuracy on the fine-tuned model without recalibration.
3. Implement transfer learning or continual learning methods to adapt the linear probes to the fine-tuned model activations.
4. Retrain or update probes with limited labeled data from the fine-tuned domain.
5. Evaluate probe accuracy improvements and false positive rates after recalibration.
6. Document the recalibration approach, challenges, and results in a comprehensive README.

**Ships as:** A GitHub repo showing dynamic probe recalibration workflows with before/after accuracy metrics and discussion of practical deployment implications.

**Stretch goal:** Integrate a probe ensemble to cover heterogeneous attack goals and evaluate multi-head detection performance.
