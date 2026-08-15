---
title: "434 · Encryption Based Covert Channel for Large Language Models — Yongge Wang"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yongge-wang"
source_hash: "1b85996e54f8b4d69e2a890910e48e234cf3ea99aab793fade327fd474af69d3"
sequence: 434
generator: "outreach-garden: managed"
---

# 434 · Encryption Based Covert Channel for Large Language Models

## At a glance

- **Professor:** Yongge Wang
- **Institution:** UNC - Charlotte
- **Paper:** [Encryption Based Covert Channel for Large Language Models](https://eprint.iacr.org/2024/586)
- **Authors:** Yongge Wang
- **Year:** 2024

## Paper overview

This paper studies security vulnerabilities in transformer-based large language models (LLMs) like Claude.ai and ChatGPT 4o. It introduces covert channel attacks using encryption methods such as ROT13 to bypass safety controls, demonstrating that these models can be manipulated to produce harmful content, including detailed illegal plans. The paper also discusses how some models log queries and block attacks after detection, raising privacy and research reproducibility concerns.

### Why it matters

**Research problem:** Large language models are vulnerable to covert channel attacks that can bypass safety mechanisms, enabling the generation of harmful or illegal content. Understanding and mitigating these security risks is critical.

**Why it matters:** LLMs are widely deployed and trusted for safe interactions, but covert channels threaten user privacy and safety by enabling malicious content generation. Additionally, logging and blocking attacks affect user privacy and hinder academic research due to lack of repeatability.

**Key contributions:**

- Introduction of encryption-based covert channel attacks on LLMs.
- Demonstration of ROT13 encryption to bypass safety controls in Claude.ai and ChatGPT 4o.
- Empirical evidence showing Claude.ai logs queries and blocks attacks after a few days.
- Detailed case study of ChatGPT 4o generating a step-by-step drug trafficking plan under covert prompting.
- Discussion of implications for user privacy and academic research reproducibility.

## About the professor

**Yongge Wang** — Professor, Software and Information Systems, UNC - Charlotte.

Research interests: Algorithims and Complexity, Information Theory and Theory of Computation, Industrial Centric Applied Cryptography, Security and Privacy

### Research links

- [Faculty/profile page](https://cci.charlotte.edu/people/yongge-wang)
- [Professor website](http://webpages.charlotte.edu/yonwang/)
- [Resolved homepage](https://webpages.charlotte.edu/yonwang/)
- [Google Scholar](http://scholar.google.com/citations?user=GZtrefYAAAAJ&hl=en)
- [DBLP](https://dblp.org/pid/w/YonggeWang.html)
- [GitHub](https://github.com/yonggewang/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer Neural Networks
**The paper assumes:** transformer neural network architectures, attention mechanisms, and sequence modeling
**Already in this field?** Skip this entirely if you already understand how transformer models work, including their attention mechanisms and sequence processing.

Understanding transformer neural networks is essential for grasping the security vulnerabilities and covert channel attacks discussed in the paper on encryption-based covert channels in large language models. The rigorous course option offers a deep, structured university-level treatment of transformers and related NLP concepts, while the fast track provides a concise, intuition-driven explainer series ideal for quickly building foundational knowledge without a heavy time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224N Natural Language Processing with Deep Learning I Spring 2024 I Professor Christopher Manning](https://www.youtube.com/playlist?list=PLoROMvodv4rOaMFbaqxPDoLWjDaRAdP9D) — Stanford Online · 23 videos · 27.5h across 23 episodes

**Watch only this:** Lectures 7-9 (Attention, Final Projects and LLM Intro; Self-Attention and Transformers; Pretraining), about 3.5 hours — these cover the core transformer architecture and foundational LLM concepts necessary to understand the paper's technical approach.

*Why it unblocks this paper:* This is the latest Stanford CS224N Natural Language Processing with Deep Learning course (Spring 2024) taught by Professor Christopher Manning, covering transformers, attention mechanisms, and LLMs in depth, directly relevant to the paper's focus on transformer architectures and security.

*If you want all of it:* 27.5 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Neural Networks / Deep Learning](https://www.youtube.com/playlist?list=PLblh5JKOoLUIxGDQs4LFFD--41Vzf-ME1) — StatQuest with Josh Starmer · 33 videos · 10.9h across 33 episodes

**Watch only this:** Episodes 19-21 (Attention for Neural Networks, Clearly Explained!!!; Transformer Neural Networks, ChatGPT's foundation, Clearly Explained!!!; Decoder-Only Transformers, ChatGPTs specific Transformer, Clearly Explained!!!), about 1 hour — these videos focus tightly on transformers and attention mechanisms relevant to the paper.

*Why it unblocks this paper:* StatQuest with Josh Starmer's Neural Networks / Deep Learning playlist includes clear, well-structured videos culminating in detailed explanations of transformer neural networks, providing an accessible yet thorough introduction to the key concepts underlying the paper's technical content.

*If you want all of it:* 10.9 hours across 33 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Encryption Based Covert Channel for Large Language Models," start by building foundational knowledge on transformer neural networks and reinforcement learning from human feedback (RLHF), as these underpin the architecture and fine-tuning of LLMs relevant to the paper's security analysis. Next, study covert channel attacks as a fundamental security concept enabling hidden communication, followed by encryption-based covert channels which are central to the paper's method of bypassing safety controls. Finally, focus on the paper author's own talk or closely related academic presentations to gain direct insight into the novel covert channel attack introduced in the paper.

### Transformer neural networks *(prerequisite)*
Understanding transformer neural networks is essential as they form the architectural backbone of large language models like Claude.ai and ChatGPT 4o. This knowledge provides insight into how these models process input and why certain vulnerabilities may arise.

*How the paper uses it:* The paper provides a concise overview of transformer neural networks as foundational to LLMs and relevant to security vulnerabilities.

▶ [7: Deep Learning for Natural Language – Transformers](https://www.youtube.com/watch?v=IeF7aATDaw4) — MIT OpenCourseWare · 1:16:38 · 7 months ago

### Reinforcement learning from human feedback *(prerequisite)*
Reinforcement learning from human feedback (RLHF) is a key fine-tuning method that shapes LLM behavior and safety controls. Understanding RLHF helps contextualize how models are trained to avoid harmful outputs and why covert channels can circumvent these mechanisms.

*How the paper uses it:* The paper discusses RLHF as used in instructGPT, which is relevant to the safety mechanisms bypassed by the covert channel attacks.

▶ [Reinforcement Learning from Human Feedback: From Zero to chatGPT](https://www.youtube.com/watch?v=2MBJOuVq380) — Hugging Face · 1:00:38 · Streamed 3 years ago

### Covert channel attacks *(prerequisite)*
Covert channel attacks enable hidden communication by exploiting unintended information flows, a fundamental security concept that underlies the paper's demonstration of encryption-based covert channels in LLMs.

*How the paper uses it:* The paper introduces covert channel attacks as a method to bypass safety mechanisms in transformer-based LLMs.

▶ [16. Side-Channel Attacks](https://www.youtube.com/watch?v=3v5Von-oNUg) — MIT OpenCourseWare · 1:22:16 · 9 years ago

### Encryption based covert channels
Encryption-based covert channels are the central method used in the paper to bypass safety controls in LLMs by hiding malicious prompts within encrypted text. Studying this concept clarifies how encryption can be leveraged to evade detection.

*How the paper uses it:* The paper's key contribution is the introduction of encryption-based covert channel attacks on LLMs using methods like ROT13 and AES.

▶ [Security Foundations for Application-Based Covert Communication Channels](https://www.youtube.com/watch?v=PylzxUMKW4s) — IEEE Symposium on Security and Privacy · 28:00 · 4 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on encryption-based covert channels in large language models, start by learning the foundational architecture of transformers, which underpins LLMs. Next, grasp how reinforcement learning from human feedback (RLHF) fine-tunes these models and influences their safety mechanisms. Then, explore the concept of covert channel attacks, which are hidden communication methods exploited for security breaches. Finally, focus on encryption-based covert channels, the core technique used in the paper to bypass LLM safety controls.

### Transformer neural networks *(prerequisite)*
Transformers are the fundamental neural network architecture behind large language models. They use self-attention mechanisms to process sequences in parallel, enabling efficient and powerful language understanding and generation.

*How the paper uses it:* The paper analyzes transformer architectures as the basis for understanding vulnerabilities exploited by covert channel attacks.

▶ [What are Transformer Neural Networks?](https://www.youtube.com/watch?v=XSSTuhyAmnI) — Ari Seff · 16:44 · 5 years ago

### Reinforcement learning from human feedback *(prerequisite)*
RLHF is a fine-tuning method where human feedback guides the model to produce safer and more aligned outputs. It shapes the behavior of LLMs to avoid harmful or unsafe content.

*How the paper uses it:* The paper discusses RLHF as a key factor in LLM safety controls that covert channel attacks aim to bypass.

▶ [Reinforcement Learning with Human Feedback (RLHF) - How to train and fine-tune Transformer Models](https://www.youtube.com/watch?v=Z_JUqJBpVOk) — Luis Serrano Academy · 15:31 · 2 years ago

### Covert channel attacks *(prerequisite)*
Covert channels are hidden communication paths that bypass normal security controls, allowing secret data exchange. They exploit unintended system behaviors to leak information.

*How the paper uses it:* The paper introduces covert channel attacks as the fundamental security threat enabling encrypted prompts to bypass LLM safety filters.

▶ [Covert Channel](https://www.youtube.com/watch?v=0kAzS-M5Ul8) — swiss chocolate · 10:48 · 5 years ago

### Encryption based covert channels
Encryption-based covert channels use simple or advanced encryption methods to hide malicious instructions within seemingly safe inputs, evading detection by safety mechanisms.

*How the paper uses it:* This is the core method used in the paper to demonstrate how ROT13 encryption bypasses safety controls in Claude.ai and ChatGPT 4o.

▶ [Security Foundations for Application-Based Covert Communication Channels](https://www.youtube.com/watch?v=PylzxUMKW4s) — IEEE Symposium on Security and Privacy · 28:00 · 4 years ago

## Already in your library

- [Stanford CS224N NLP with Deep Learning | 2023 | Lecture 8 - Self-Attention and Transformers](https://www.youtube.com/watch?v=LWMzyfvuehA) — also for: MonarchRT: Efficient Attention for Real-Time Video Generation (Atri Rudra)
- [Stanford CS231N | Spring 2025 | Lecture 8: Attention and Transformers](https://www.youtube.com/watch?v=RQowiOF_FvQ) — also for: GRU-AUNet: A Domain Adaptation Framework for Contactless Fingerprint Presentation Attack Detection (Nima Karimian)
- [Lec 08. Architectures: Transformers](https://www.youtube.com/watch?v=Q1HOKrNeh2M) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Transformer Neural Networks, ChatGPT's foundation, Clearly ...](https://www.youtube.com/watch?v=zxQyTK8quyY) — also for: MLLM-based Speech Recognition: When and How is Multimodality Beneficial? (Jacob Whitehill)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Illustrated Guide to Transformers Neural Network: A step by ...](https://www.youtube.com/watch?v=4Bdc55j80l8) — also for: GOPhage: protein function annotation for bacteriophages by integrating the genomic context (Yanni Sun)
- [John Schulman - Reinforcement Learning from Human Feedback: Progress and Challenges](https://www.youtube.com/watch?v=hhiLw5Q_UFg) — also for: Certificate-Guided Evaluation of Reinforcement Learning Generalization (Suguman Bansal)
- [Stanford CS224N | 2023 | Lecture 10 - Prompting ...](https://www.youtube.com/watch?v=SXpJ9EmG3s4) — also for: What Benchmarks Don’t Measure: The Case for Evaluating Abstention Competence in Autonomous Agents (Suresh Venkatasubramanian)
- [Reinforcement Learning with Human Feedback (RLHF ...](https://www.youtube.com/watch?v=qPN_XZcJf_s) — also for: Towards AI-Driven Human-Machine Co-Teaming for Adaptive and Agile Cyber Security Operation Centers (Massimiliano Albanese)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of encryption-based covert channel attacks on large language models as presented in the paper. The beginner project reproduces a simple ROT13 covert channel attack to bypass safety filters, the intermediate project reimplements the core ROT13 covert channel attack and compares it against a baseline prompt filtering approach, and the advanced project extends the paper by exploring detection mechanisms for more sophisticated encrypted covert channels, addressing a key future direction. Each project builds on your existing software engineering and applied ML skills while progressively adding research-relevant complexity.

### Beginner — ROT13 Covert Channel Attack Demo on ChatGPT
*Effort: a weekend, ~8 hours*

You build a simple script that encrypts prompts using ROT13 and sends them to a publicly accessible LLM API (e.g., OpenAI's ChatGPT) to demonstrate bypassing safety filters. The project includes a minimal interface to encode/decode ROT13 and shows how encrypted prompts can coax the model into generating restricted content.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of the paper's encryption-based covert channel attack and how ROT13 encryption can evade safety controls in transformer-based LLMs.

**Grounded in:** Introduction of encryption-based covert channel attacks on LLMs; Demonstration of ROT13 encryption to bypass safety controls in Claude.ai and ChatGPT 4o.

**Tech stack:** Python 3.11, requests, OpenAI API or similar LLM API

**Data:** No external dataset needed; you simulate encrypted prompts using ROT13 on crafted text inputs.

**Build it:**

1. Implement a ROT13 encoder and decoder in Python.
2. Write a script to send ROT13-encrypted prompts to an LLM API and receive responses.
3. Demonstrate that the LLM responds to encrypted prompts that bypass normal safety filters.
4. Decode the LLM's response and display the decrypted output.
5. Document the process and results in a README.

**Ships as:** A GitHub repo with a Python script demonstrating ROT13 covert channel prompting and a README explaining the attack and results.

**Stretch goal:** Add a simple web UI using Flask or FastAPI to interactively test ROT13 covert channel prompts.

### Intermediate — Reimplementation and Evaluation of ROT13 Covert Channel Attack
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's core ROT13 encryption-based covert channel attack on a transformer-based LLM (using OpenAI's GPT-4 or Claude if accessible). You then implement a simple baseline safety filter that blocks ROT13-encrypted prompts by detecting ROT13 patterns. You compare the success rate of the covert channel attack with and without the baseline filter, reporting metrics such as bypass rate and detection latency.

**Why it shows you understood the paper:** This project demonstrates your ability to faithfully reproduce the paper's core method and empirically evaluate its effectiveness and detection, showing comprehension of both the attack and the paper's empirical results.

**Grounded in:** Successful bypass of safety measures in Claude.ai and ChatGPT 4o using ROT13 encrypted prompts; Claude.ai detected and blocked the covert channel attack within two days.

**Tech stack:** Python 3.11, OpenAI API or Claude API if accessible, pytest or unittest for testing

**Data:** No external dataset; you generate encrypted prompts from a set of crafted test queries simulating harmful content requests.

**Build it:**

1. Implement ROT13 encryption and decryption utilities.
2. Create a set of harmful prompt templates to test covert channel attacks.
3. Send ROT13-encrypted prompts to the LLM API and record responses.
4. Implement a baseline ROT13 pattern detector to block encrypted prompts.
5. Measure and compare the success rate of the attack with and without the filter.
6. Write a report summarizing metrics and observations.

**Ships as:** A GitHub repo with scripts for ROT13 covert channel attack, baseline detection, evaluation metrics, and a detailed README with results and analysis.

**Stretch goal:** Extend the baseline detector to identify other simple substitution ciphers and evaluate robustness.

### Advanced — Detection of Advanced Encryption-Based Covert Channels in LLMs
*Effort: 3-4 weeks*

You develop and evaluate detection mechanisms for more sophisticated encryption-based covert channels beyond ROT13, such as simple AES encryption or obfuscation techniques, to address the paper's limitation and future direction. You implement encrypted prompt generation using AES with a fixed key, craft covert prompts, and design heuristic or ML-based detectors to identify encrypted inputs without compromising user privacy. You evaluate detection accuracy and false positive rates.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by exploring defenses against stronger covert channels, demonstrating deep engagement with the paper's security challenges and privacy trade-offs.

**Grounded in:** Limitations: ROT13 is a simple encryption method and not secure; Future directions: Developing robust defenses against encryption-based covert channel attacks in LLMs.

**Tech stack:** Python 3.11, PyCryptodome for AES encryption, OpenAI API or Claude API, scikit-learn or similar ML library

**Data:** No external dataset; you synthesize encrypted prompts using AES and generate labeled data for detection training and evaluation.

**Build it:**

1. Implement AES encryption and decryption utilities for prompt encoding.
2. Generate a dataset of normal, ROT13-encrypted, and AES-encrypted prompts.
3. Send encrypted prompts to an LLM API and collect responses.
4. Design heuristic and ML-based detectors to classify encrypted prompts.
5. Evaluate detectors on accuracy, false positives, and privacy impact.
6. Document findings and discuss implications for privacy-preserving detection.

**Ships as:** A GitHub repo with encryption tools, detection code, evaluation scripts, and a comprehensive README discussing methods, results, and privacy considerations.

**Stretch goal:** Prototype a privacy-preserving logging mechanism that balances attack detection with user data confidentiality.
