---
title: "868 · Decomposed Trust: Privacy, Adversarial Robustness, Ethics, and Fairness in Low-Rank LLMs — Yang Li"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yang-li"
source_hash: "0afd44b4a6f889cedcd6f5dc7beaed3bae23a1ed8f51650e014e9fa60d1a28f4"
sequence: 868
generator: "outreach-garden: managed"
---

# 868 · Decomposed Trust: Privacy, Adversarial Robustness, Ethics, and Fairness in Low-Rank LLMs

## At a glance

- **Professor:** Yang Li
- **Institution:** Iowa State University
- **Paper:** [Decomposed Trust: Privacy, Adversarial Robustness, Ethics, and Fairness in Low-Rank LLMs](https://arxiv.org/pdf/2511.22099)
- **Authors:** Daniel Agyei Asante, Md Mokarram Chowdhury, Yang Li
- **Year:** 2026

## Paper overview

This paper studies how compressing large language models (LLMs) using low-rank factorization affects their trustworthiness in terms of privacy, robustness to attacks, ethical behavior, and fairness. While compression helps reduce model size and computational cost, it can have mixed effects on these trust aspects. The authors analyze multiple models and compression methods, revealing that compression improves training data privacy and adversarial robustness but harms protection of personal information, ethics, and fairness. They also identify which model layers most influence robustness.

### Why it matters

**Research problem:** Large language models are computationally expensive and large, limiting deployment in resource-constrained settings. Low-rank factorization compresses these models to reduce size and computation, but its impact on trustworthiness properties like privacy, adversarial robustness, ethics, and fairness is not well understood.

**Why it matters:** LLMs are increasingly used in sensitive and high-stakes applications where trustworthiness is critical. Deploying compressed models without understanding their trust implications risks privacy breaches, ethical failures, unfair treatment, and vulnerability to attacks.

**Key contributions:**

- First systematic study of low-rank factorization impact on LLM trustworthiness across privacy, adversarial robustness, ethics, and fairness.
- Analysis of interplay between model scale, fine-tuning, and compression on trustworthiness.
- Explainability-driven layerwise attribution identifying key layers influencing adversarial robustness.
- Empirical evaluation across multiple LLM architectures and compression methods to ensure generality.

## About the professor

**Yang Li** — Assistant Professor, Computer Science, Iowa State University.

Research interests: Artificial Intelligence, Machine Learning, and Data Science, Systems and Networking

### Research links

- [Faculty/profile page](https://www.cs.iastate.edu/people/yang-li)
- [Professor website](https://jerryyangli.github.io/)
- [Resolved homepage](https://jerryyangli.github.io/index.html)
- [DBLP](https://dblp.org/pid/37/4190-183.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Low-Rank Matrix Factorization
**The paper assumes:** linear algebra, matrix factorization methods, singular value decomposition, low-rank approximations in machine learning
**Already in this field?** Skip this entirely if you already understand matrix factorization techniques and their application in compressing neural network models.

To understand the foundational mathematical technique of low-rank matrix factorization used in compressing large language models, these two background options provide complementary learning paths. The rigorous course offers a deep, structured university-level treatment of matrix factorization and related linear algebra concepts, while the fast track provides a concise, intuition-focused introduction to singular value decomposition (SVD) and principal component analysis (PCA), key tools in low-rank approximations. Choose the course for comprehensive mastery or the fast track for a quick, practical grasp relevant to the paper's compression methods.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Lecture 7 : Singular Value Decomposition (SVD) and Principal Component Analysis (PCA)](https://www.youtube.com/playlist?list=PLy2BnIM4XXhD_uJkBrD0oUI_bjD9xIKRp) — AIBrilliance · 9 videos · 1.2h across 9 episodes

**Watch only this:** Episodes 1-5 (Part 1 to Part 5), about 40 minutes — covering introduction, SVD definition, example problem, dimensionality reduction, and matrix approximation, which form the core concepts of low-rank factorization.

*Why it unblocks this paper:* This focused lecture series on Singular Value Decomposition (SVD) and Principal Component Analysis (PCA) directly covers the core mathematical tools behind low-rank factorization, essential for understanding the compression techniques analyzed in the paper.

*If you want all of it:* All 9 episodes, about 1.2 hours total.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Linear Algebra Intuition](https://www.youtube.com/playlist?list=PL9krDdPx9b272Y-_h1HHeflYvQnlJMww7) — Mahardika Matika · 41 videos · 9.1h across 41 episodes

**Watch only this:** Episodes 1-5 (Vectors, Linear combinations, Linear transformations and matrices, Matrix multiplication as composition, Three-dimensional linear transformations), about 1.1 hours — sufficient to grasp the essential linear algebra intuition behind low-rank factorization.

*Why it unblocks this paper:* This playlist offers a clear, visual, and intuition-first explanation of linear algebra concepts including matrix transformations and SVD, providing a quick yet solid conceptual foundation for low-rank matrix factorization relevant to the paper.

*If you want all of it:* All 41 episodes, about 9.1 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Decomposed Trust: Privacy, Adversarial Robustness, Ethics, and Fairness in Low-Rank LLMs', start by building foundational knowledge on adversarial robustness, privacy and PII leakage, and ethics and fairness in large language models. Then, focus on the core method of low-rank factorization in LLMs before concluding with the authors' own talk or related research talks on trustworthiness in compressed LLMs. This progression ensures a solid grasp of the trustworthiness dimensions impacted by compression and the technical methods studied.

### Adversarial Robustness in NLP Models *(prerequisite)*
Understanding adversarial robustness is crucial since the paper finds that compression generally improves robustness but fine-tuning can increase vulnerability. The selected lecture by Graham Neubig from CMU provides a rigorous academic treatment of adversarial methods in NLP, covering attacks and defenses, which is foundational to grasping the robustness analysis in the paper.

*How the paper uses it:* The paper empirically evaluates how low-rank factorization affects adversarial robustness in LLMs.

▶ [CMU Neural Nets for NLP 2021 (19): Adversarial Methods](https://www.youtube.com/watch?v=C_S9gSm8NeY) — Graham Neubig · 41:57

### Privacy and PII Leakage in Machine Learning *(prerequisite)*
Privacy and PII leakage are central trust concerns impacted by compression. The IEEE Symposium on Security and Privacy talk on analyzing PII leakage in language models offers a research-focused, in-depth perspective on privacy risks in ML models, aligning well with the paper's privacy analysis.

*How the paper uses it:* The paper studies how compression affects training data privacy and PII leakage in LLMs.

▶ [Analyzing Leakage of Personally Identifiable Information in Language Models](https://www.youtube.com/watch?v=WLw1TlA_S6E) — IEEE Symposium on Security and Privacy · 3y ago

### Ethics and Fairness in Large Language Models *(prerequisite)*
Ethical behavior and fairness degrade under compression according to the paper, making it important to understand these concepts deeply. The talk by the Institute for Ethics in AI Oxford provides a scholarly discussion on how to think about large language models ethically, suitable for advanced readers.

*How the paper uses it:* The paper evaluates ethical behavior and fairness degradation due to low-rank compression in LLMs.

▶ [Ethics in AI Colloquium - 'How to Think About Large Language Models'](https://www.youtube.com/watch?v=HfiLVfImkXQ) — Institute for Ethics in AI Oxford · 1y ago

### Low-Rank Factorization in LLMs
Low-rank factorization is the core compression method studied in the paper. The chosen video provides a detailed explanation of the LoRA method, including mathematical intuition and practical implications, which is essential to understand the compression techniques analyzed.

*How the paper uses it:* The paper systematically studies the impact of low-rank factorization methods on LLM trustworthiness.

▶ [https://www.youtube.com › watch?v=WTeokClNC4o](https://www.youtube.com/watch?v=WTeokClNC4o) — YouTube result via DuckDuckGo

### Paper Author Talk *(paper-talk search result; attribution unverified)*
Hearing the authors discuss their own work provides direct insights into their methodology, findings, and future directions. Although no direct talk by the paper authors on this exact work was found, the Anthropic Research Salon talk on AI alignment and robustness by leading researchers offers relevant advanced perspectives on trust and robustness in AI models.

*How the paper uses it:* Direct author or related expert talks help contextualize the paper's contributions on trustworthiness in compressed LLMs.

▶ [How difficult is AI alignment? | Anthropic Research Salon](https://www.youtube.com/watch?v=IPmt8b-qLgk) — Anthropic · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on trustworthiness in compressed large language models, start by learning about privacy and PII leakage in machine learning to grasp the privacy risks involved. Next, build intuition on adversarial robustness in NLP models, which is key to understanding model security under attacks. Then, explore ethics and fairness in large language models to appreciate the social implications of compression. Finally, study low-rank factorization in LLMs, the core compression method analyzed in the paper, to connect all trust aspects with the technical approach.

### Privacy and PII Leakage in Machine Learning *(prerequisite)*
This section introduces how machine learning models can inadvertently leak sensitive personal information, what PII (Personally Identifiable Information) is, and why protecting it is crucial. Understanding these privacy risks lays the foundation for appreciating the paper's findings on how compression affects privacy safeguards.

*How the paper uses it:* The paper studies how low-rank factorization impacts privacy, notably reducing training data leakage but weakening PII protection.

▶ [Analyzing Leakage of Personally Identifiable Information in Language Models](https://www.youtube.com/watch?v=WLw1TlA_S6E) — IEEE Symposium on Security and Privacy · 3y ago

### Adversarial Robustness in NLP Models *(prerequisite)*
Learn what adversarial robustness means in the context of NLP models—how models can be attacked with small input changes and how they defend against these attacks. This knowledge helps understand the paper's analysis of compression improving robustness against adversarial inputs.

*How the paper uses it:* The paper finds that compression generally enhances adversarial robustness, reducing accuracy drops under attacks.

▶ [CMU Neural Nets for NLP 2021 (19): Adversarial Methods](https://www.youtube.com/watch?v=C_S9gSm8NeY) — Graham Neubig · 41:57

### Ethics and Fairness in Large Language Models *(prerequisite)*
Explore the concepts of ethics and fairness in AI, including bias, moral reasoning, and equitable treatment by language models. This section provides context for the paper's findings that compression harms ethical behavior and fairness in LLMs.

*How the paper uses it:* The paper shows ethical behavior and fairness degrade under compression, critical for trustworthiness.

▶ [Ethical AI Explained | Bias, Fairness & Explainability in LLMs | AI/ML Class 7](https://www.youtube.com/watch?v=JrJ-6LGrwkk) — Fusionpact · 9mo ago

### Low-Rank Factorization in LLMs
Understand low-rank factorization as a method to compress large language models by approximating weight matrices with lower-rank components, reducing size and computation. This technical insight is central to grasping the paper's study of compression effects on trustworthiness.

*How the paper uses it:* Low-rank factorization is the core compression technique analyzed for its impact on privacy, robustness, ethics, and fairness.

▶ [https://www.youtube.com › watch?v=WTeokClNC4o](https://www.youtube.com/watch?v=WTeokClNC4o) — YouTube result via DuckDuckGo

## Already in your library

- [What is LoRA? Low-Rank Adaptation for finetuning LLMs ...](https://www.youtube.com/watch?v=KEv-F5UkhxU) — also for: GradualDiff-Fed: A Federated Learning Specialized Framework for Large Language Model (Tara Salman)
- [LoRA - Low-rank Adaption of AI Large Language Models: LoRA and QLoRA Explained Simply](https://www.youtube.com/watch?v=lixMONUAjfs) — also for: Leveraging Synthetic Priors for Monocular Depth Estimation in Specular Surgical Environments (Yangming Li)
- [LoRA: Low-Rank Adaptation of Large Language Models - Explained visually + PyTorch code from scratch](https://www.youtube.com/watch?v=PXWYUTMt-AU) — also for: Robustness Beyond Known Groups with Low-rank Adaptation (Collin M. Stultz)
- [What is Low-Rank Adaptation (LoRA) | explained by the inventor](https://www.youtube.com/watch?v=DhRoTONcyZE) — also for: CoCoA: Context-Conditional Cultural Alignment for Large Language Models (Wei Xu)
- [Low-rank Adaption of Large Language Models: Explaining the ...](https://www.youtube.com/watch?v=dA-NhCtrrVE) — also for: XCT-SAM: Sequential Parameter-Efficient Domain Adaptation of SAM for Industrial XCT Defect Segmentation (Jeremy Dawson)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [On the Adversarial Robustness of Deep Learning](https://www.youtube.com/watch?v=YgYiECAr9Gs) — also for: ARMOR: Robust and Efficient CNN-Based SAR ATR through Model-Hardware Co-Design (Cauligi S. Raghavendra)
- [Adversarial Robustness](https://www.youtube.com/watch?v=wIX00bZ173k) — also for: Efficient Algorithms for Adversarially Robust Approximate Nearest Neighbor Search (Krzysztof Onak)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper "Decomposed Trust: Privacy, Adversarial Robustness, Ethics, and Fairness in Low-Rank LLMs." Starting with a focused reproduction of a key metric on adversarial robustness using existing tools, you then implement a core compression method and evaluate its trustworthiness trade-offs on a smaller scale. Finally, you extend the work by exploring prompt engineering to mitigate ethical degradation in compressed models, addressing a stated future direction.

### Beginner — Adversarial Robustness Evaluation of Low-Rank Compressed LLM Layers
*Effort: a weekend, ~8 hours*

You build a script to apply gradient-based layerwise attribution on a small pretrained transformer model compressed by low-rank factorization, focusing on the embed_tokens and down_proj layers. You then measure adversarial robustness by simulating simple adversarial attacks and comparing accuracy drops with and without compression.

**Why it shows you understood the paper:** This project shows you grasp the paper's key finding that specific layers influence adversarial robustness and that compression can improve robustness. A professor would see you can reproduce and interpret layerwise attribution and robustness metrics.

**Grounded in:** Layerwise attribution shows embed_tokens and down_proj layers are most influential for adversarial robustness.

**Tech stack:** Python 3.11, PyTorch, transformers, captum (for attribution)

**Data:** Use a publicly available small transformer model (e.g., DistilBERT) as a proxy for LLaMA-2/Qwen-2.5 since the paper's models are not publicly released.

**Build it:**

1. Load a small pretrained transformer model and apply low-rank factorization compression to selected layers (embed_tokens and down_proj equivalents).
2. Implement gradient-based attribution using Captum to identify layer sensitivity to adversarial perturbations.
3. Generate simple adversarial examples (e.g., synonym substitutions or character swaps) on a small NLP benchmark like SST-2.
4. Evaluate and compare model accuracy drops under adversarial attacks before and after compression.
5. Visualize and report which layers contribute most to robustness.

**Ships as:** A GitHub repo with code, a README explaining the layerwise attribution and robustness evaluation, and plots showing layer importance and accuracy under attack.

**Stretch goal:** Add evaluation of other layers to confirm the embed_tokens and down_proj layers' dominant role.

### Intermediate — Reimplementation of Low-Rank Factorization Compression and Trustworthiness Evaluation
*Effort: 2 weekends, ~20 hours*

You reimplement the core low-rank factorization compression method described in the paper on a smaller open-source LLM (e.g., GPT-2 small). You then empirically evaluate its impact on privacy leakage (training data and PII), adversarial robustness, ethics (zero-shot vs few-shot prompting), and fairness on public NLP datasets.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper's core method and systematically evaluate multiple trustworthiness dimensions, reflecting the paper's comprehensive empirical approach.

**Grounded in:** First systematic study of low-rank factorization impact on LLM trustworthiness across privacy, adversarial robustness, ethics, and fairness.

**Tech stack:** Python 3.11, PyTorch, transformers, scikit-learn, textattack (for adversarial robustness)

**Data:** Use GPT-2 small pretrained weights; evaluate on public datasets such as WikiText-2 for privacy leakage proxies, SST-2 for ethics/fairness, and a PII detection dataset like CoNLL-2003 for PII leakage.

**Build it:**

1. Implement low-rank factorization compression (e.g., SVD) on GPT-2 model layers.
2. Measure training data privacy leakage using membership inference attack proxies on WikiText-2.
3. Evaluate PII leakage by testing model responses on PII-containing prompts from CoNLL-2003.
4. Test adversarial robustness using TextAttack adversarial examples on SST-2 sentiment classification.
5. Assess ethical behavior degradation under zero-shot and few-shot prompting using standard ethical benchmarks or prompt templates.
6. Measure fairness metrics on demographic subsets if available in datasets.
7. Compare results against the uncompressed baseline and report trade-offs.

**Ships as:** A GitHub repo with compression code, evaluation scripts, and a detailed README reporting trustworthiness metrics with tables and plots.

**Stretch goal:** Add fine-tuning on a downstream task and observe its effect on trustworthiness metrics.

### Advanced — Prompt Engineering to Mitigate Ethical Degradation in Low-Rank Compressed LLMs
*Effort: 3+ weeks*

You extend the paper by designing and testing prompt engineering strategies to improve ethical behavior in low-rank compressed LLMs under zero-shot and few-shot settings. You implement a pipeline to evaluate ethical responses and jailbreaking vulnerability, comparing baseline prompts with engineered prompts to mitigate degradation.

**Why it shows you understood the paper:** This project tackles a stated future direction and limitation of the paper, showing you can critically engage with the research, propose mitigation methods, and empirically validate them.

**Grounded in:** Ethical behavior degrades significantly under zero-shot prompting after compression but partially recovers with few-shot prompting; future direction includes exploring prompt engineering to enhance trustworthiness.

**Tech stack:** Python 3.11, transformers, OpenAI API or HuggingFace inference, Jupyter Notebook

**Data:** Use a compressed GPT-2 or similar model; ethical benchmarks such as ETHICS dataset or custom jailbreaking prompts from public sources.

**Build it:**

1. Compress a GPT-2 model using low-rank factorization as in the intermediate project.
2. Implement a set of baseline zero-shot and few-shot prompts for ethical behavior evaluation.
3. Design prompt engineering strategies (e.g., instruction tuning, context augmentation) to mitigate ethical degradation.
4. Evaluate ethical behavior and jailbreaking vulnerability under baseline and engineered prompts using automated metrics and manual inspection.
5. Analyze results to identify which prompt strategies best restore ethical behavior in compressed models.
6. Document findings and suggest guidelines for prompt design in compressed LLM deployment.

**Ships as:** A GitHub repo with prompt engineering code, evaluation scripts, and a comprehensive report including quantitative and qualitative results.

**Stretch goal:** Incorporate user feedback or human evaluation to validate ethical improvements.

_The paper's authors released no code or datasets; all projects rely on public smaller LLMs and proxy datasets to faithfully reproduce and extend the paper's findings._
