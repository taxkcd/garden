---
title: "041 · SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks — Hamed Hassani"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hassani"
source_hash: "d4fa33ed6de41a669d9c2c09cb93f72fcc5ace9dd4fc0506d3211bf4e4d3b05c"
sequence: 41
generator: "outreach-garden: managed"
---

# 041 · SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks

## At a glance

- **Professor:** Hamed Hassani
- **Institution:** University of Pennsylvania
- **Paper:** [SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks](https://arxiv.org/pdf/2310.03684)
- **Authors:** Alexander Robey, Eric Wong, Hamed Hassani, George J. Pappas
- **Year:** 2024

## Paper overview

This paper introduces SmoothLLM, a novel defense algorithm designed to protect large language models (LLMs) from jailbreaking attacks. Jailbreaking attacks manipulate input prompts to make LLMs generate objectionable content despite alignment efforts. SmoothLLM works by creating multiple randomly perturbed copies of an input prompt and aggregating the model's responses to detect and mitigate adversarial inputs. The method is efficient, compatible with various LLMs, and sets new state-of-the-art robustness against several known jailbreak attacks.

### Why it matters

**Research problem:** Large language models, despite alignment efforts, remain vulnerable to jailbreaking attacks where adversaries craft input prompts that cause the models to produce harmful or objectionable content. Existing defenses often require retraining or are ineffective, especially against sophisticated adversarial suffix jailbreaks.

**Why it matters:** LLMs influence critical domains such as education, healthcare, and business. Jailbreaking attacks undermine trust and safety, posing barriers to the responsible deployment of these models. Effective defenses are essential to prevent misuse and ensure aligned, safe AI outputs.

**Key contributions:**

- Proposed a comprehensive desiderata for LLM jailbreak defenses: attack mitigation, non-conservatism, efficiency, and compatibility.
- Introduced SmoothLLM, the first algorithm specifically designed to mitigate jailbreaking attacks on LLMs without retraining.
- Demonstrated state-of-the-art robustness against multiple jailbreak attacks (GCG, PAIR, RANDOM SEARCH, AMPLE GCG).
- Provided theoretical guarantees on defense success probability under a k-unstable adversarial suffix assumption.
- Showed that SmoothLLM is compatible with both open- and closed-source LLMs and improves robustness with minimal extra queries.

## About the professor

**Hamed Hassani** — Associate Professor, Department of Electrical and Systems Engineering, University of Pennsylvania.

Research interests: Foundations of Machine Learning, Submodular Optimization, Federated Learning, Adversarial Training

### Research links

- [Faculty/profile page](https://www.seas.upenn.edu/~hassani)
- [Resolved homepage](https://www.engineering.upenn.edu/~hassani/)
- [Google Scholar](https://scholar.google.com/citations?user=M9V6y-0AAAAJ)
- [Semantic Scholar](https://www.semanticscholar.org/author/Hamed-Hassani/34112189)
- [DBLP](https://dblp.org/pid/73/4984)
- [LinkedIn](https://www.linkedin.com/in/hamed-hassani-111999319/)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the SmoothLLM paper, start by building foundational knowledge on adversarial attacks on language models and jailbreaking attacks, which define the threat model SmoothLLM defends against. Next, explore black-box adversarial defense methods to grasp the context of SmoothLLM's approach that requires no retraining and works in a black-box setting. Then, study randomized smoothing for robustness, the central technique underlying SmoothLLM's defense. Finally, conclude with the authors' own seminar talk that directly addresses robustness in LLMs and jailbreaking defenses, providing the most relevant and advanced insights into SmoothLLM.

### Adversarial attacks on language models *(prerequisite)*
Understanding adversarial attacks on language models is crucial as it defines the threat landscape that SmoothLLM aims to defend against. This includes knowledge of how adversaries craft inputs to manipulate model outputs and the challenges in defending against such attacks.

*How the paper uses it:* SmoothLLM is designed to mitigate adversarial jailbreak attacks that exploit vulnerabilities in LLMs.

▶ [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — Stanford Online · 1:47:17 · 9 months ago

### Jailbreaking attacks on LLMs *(prerequisite)*
Jailbreaking attacks are a specific type of adversarial attack targeting LLMs to bypass alignment and produce harmful content. Understanding these attacks provides context for the specific vulnerabilities SmoothLLM addresses.

*How the paper uses it:* SmoothLLM specifically targets jailbreaking attacks to improve LLM safety and alignment.

▶ [Large Language Model Security: Jailbreak Attacks](https://www.youtube.com/watch?v=s9eVIDSxVbQ) — Fuzzy Labs · 2 years ago

### Black-box adversarial defense methods *(prerequisite)*
Black-box adversarial defenses operate without access to model internals or retraining, which aligns with SmoothLLM’s practical approach. Familiarity with these methods helps appreciate the efficiency and compatibility advantages of SmoothLLM.

*How the paper uses it:* SmoothLLM is a black-box defense method that requires no retraining and uses multiple queries to improve robustness.

▶ [Recent Progress in Adversarial Robustness of AI Models: Attacks, Defenses, and Certification](https://www.youtube.com/watch?v=RYpmTldTkcw) — IBM Research · 59:43 · 7 years ago

### Randomized smoothing for robustness
Randomized smoothing is the core theoretical technique underlying SmoothLLM’s defense, involving perturbing inputs and aggregating outputs to certify robustness. Understanding this concept is essential to grasp how SmoothLLM achieves its guarantees and empirical success.

*How the paper uses it:* SmoothLLM applies randomized smoothing principles to mitigate adversarial suffix jailbreaks via character-level perturbations.

▶ [Reliable and Interpretable Artificial Intelligence -- Lecture 12 (Randomized Smoothing)](https://www.youtube.com/watch?v=tokD9Wgor3k) — ETH SRI · 5 years ago

### SmoothLLM paper talk *(the paper's own talk)*
The authors’ own seminar talk provides direct insights into the motivation, methodology, theoretical guarantees, and empirical results of SmoothLLM. This talk is the most authoritative and detailed resource to understand the paper’s contributions and context.

*How the paper uses it:* This talk by Hamed Hassani, a co-author, covers robustness in LLMs and jailbreaking defenses, directly relating to SmoothLLM.

▶ [IFML Seminar: 4/5/24 - Robustness in the Era of LLMs: Jailbreaking Attacks and Defenses](https://www.youtube.com/watch?v=CoWz0xEKIdo) — IFML · 2 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand SmoothLLM, a defense against jailbreaking attacks on large language models (LLMs). We start with the basics of adversarial attacks on language models, then explain jailbreaking attacks specifically. Next, we cover black-box adversarial defense methods, followed by the key technique of randomized smoothing. Finally, we conclude with a direct paper talk by the authors to consolidate understanding of SmoothLLM's novel approach.

### Adversarial attacks on language models *(prerequisite)*
Learn what adversarial attacks are in machine learning, focusing on how attackers craft inputs to fool models into making wrong or harmful predictions. This section builds intuition about the threat models that SmoothLLM aims to defend against, especially in the context of language models.

*How the paper uses it:* Understanding adversarial attacks is essential because SmoothLLM defends LLMs against adversarial jailbreak inputs.

▶ [LLM Vulnerabilities Explained: Adversarial Attacks, Jailbreaks & Data Poisoning](https://www.youtube.com/watch?v=MQbJL8JJu1U) — Network Intelligence · 8 months ago

### Jailbreaking attacks on LLMs *(prerequisite)*
This section dives into jailbreaking attacks, a specific type of adversarial attack where malicious prompts trick LLMs into generating objectionable or harmful content despite alignment efforts. It explains the nature and impact of these attacks on AI safety.

*How the paper uses it:* SmoothLLM specifically targets jailbreaking attacks to improve LLM safety and trustworthiness.

▶ [Large Language Model Security: Jailbreak Attacks](https://www.youtube.com/watch?v=s9eVIDSxVbQ) — Fuzzy Labs · 2 years ago

### Black-box adversarial defense methods *(prerequisite)*
Explore defense strategies that do not require access to or retraining of the model internals, known as black-box defenses. This section explains how such methods work by querying the model and analyzing outputs to detect adversarial inputs.

*How the paper uses it:* SmoothLLM is a black-box defense that improves robustness without retraining the underlying LLM.

▶ [Recent Progress in Adversarial Robustness of AI Models: Attacks, Defenses, and Certification](https://www.youtube.com/watch?v=RYpmTldTkcw) — IBM Research · 59:43 · 7 years ago

### Randomized smoothing for robustness
Randomized smoothing is a technique to certify and improve model robustness by averaging predictions over randomly perturbed inputs. This section builds intuition on how smoothing can mitigate adversarial effects by making models less sensitive to small input changes.

*How the paper uses it:* SmoothLLM applies randomized smoothing principles by perturbing input prompts and aggregating outputs to defend against adversarial suffixes.

▶ [Reliable and Interpretable Artificial Intelligence -- Lecture 12 (Randomized Smoothing)](https://www.youtube.com/watch?v=tokD9Wgor3k) — ETH SRI · 5 years ago

### SmoothLLM paper talk *(the paper's own talk)*
Hear directly from the authors about SmoothLLM’s design, theoretical guarantees, and empirical results. This talk consolidates understanding of the novel defense method and its significance in advancing LLM robustness against jailbreak attacks.

*How the paper uses it:* This talk is by Hamed Hassani, a co-author, explaining SmoothLLM’s approach and contributions in detail.

▶ [IFML Seminar: 4/5/24 - Robustness in the Era of LLMs: Jailbreaking Attacks and Defenses](https://www.youtube.com/watch?v=CoWz0xEKIdo) — IFML · 2 years ago

## Already in your library

- [Randomized smoothing for certified robustness](https://www.youtube.com/watch?v=O84mcq7P_es) — also for: SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks (Hamed Hassani)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate understanding of SmoothLLM, a defense against jailbreaking attacks on large language models. The beginner project reproduces a core mechanism of randomized smoothing via character perturbations on prompts. The intermediate project applies and evaluates the SmoothLLM defense using the authors' released code and a known jailbreak attack baseline. The advanced project extends the method by exploring semantic-preserving perturbations to improve robustness without degrading output quality, addressing a key limitation and future direction from the paper.

### Beginner — Character-Level Perturbation and Aggregation for Prompt Robustness
*Effort: a weekend, ~8 hours*

You build a simple Python script that takes an input prompt and generates multiple perturbed copies by randomly swapping, inserting, or patching characters at a low perturbation rate (e.g., 5-10%). You then query a small open-source LLM (e.g., HuggingFace's GPT-2 or similar) with each perturbed prompt and aggregate the outputs by majority voting or simple heuristics to detect potential adversarial suffixes.

**Why it shows you understood the paper:** This project demonstrates you understand the core randomized smoothing principle behind SmoothLLM: that small character-level perturbations can disrupt adversarial suffixes and that aggregating multiple model outputs improves robustness.

**Grounded in:** SmoothLLM applies randomized smoothing principles by generating multiple perturbed versions of an input prompt (via character-level insertions, swaps, or patches) and aggregating the LLM's outputs to identify and reject adversarial jailbreaks.

**Tech stack:** Python 3.11, transformers (HuggingFace), requests or openai API client (optional)

**Data:** Use a small set of manually crafted prompts with known adversarial suffixes from the paper's examples or create synthetic adversarial suffixes by appending harmful instructions.

**Build it:**

1. Implement character-level perturbation functions: insertion, swap, and patch with a configurable perturbation rate q.
2. Write a function to generate N perturbed copies of a given input prompt.
3. Query a small open-source LLM with each perturbed prompt and collect outputs.
4. Implement a simple aggregation method (e.g., majority voting on output categories or keyword detection) to decide if the input is adversarial.
5. Test the system on clean and adversarial prompts to observe robustness improvements.

**Ships as:** A Python script and README demonstrating the perturbation and aggregation pipeline, with example inputs and outputs showing reduced adversarial success on perturbed prompts.

**Stretch goal:** Add a visualization of how perturbation rate q affects robustness and nominal performance trade-offs.

### Intermediate — Reproducing SmoothLLM Defense Against GCG Jailbreak Attacks
*Effort: 1-3 weekends, ~20 hours*

You clone and run the SmoothLLM codebase from the authors' GitHub repository to reproduce their defense against the GCG jailbreak attack on Llama2 or Vicuna models. You evaluate attack success rates (ASRs) with and without SmoothLLM, using character-level swap perturbations and varying the number of samples N. You compare results to the baseline undefended model and report metrics as in the paper.

**Why it shows you understood the paper:** This project shows you can operate the authors' code, understand the experimental setup, and verify the core empirical claims of SmoothLLM's effectiveness and efficiency against a state-of-the-art jailbreak attack.

**Grounded in:** Demonstrated state-of-the-art robustness against multiple jailbreak attacks (GCG, PAIR, RANDOM SEARCH, AMPLE GCG) and showed up to 50× and 100× reduction in ASR for Llama2 and Vicuna respectively with swap perturbations and N > 6 samples.

**Tech stack:** Python 3.11, PyTorch, transformers, Git, Linux shell

**Data:** Use adversarial suffixes generated by the GCG attack from the third-party GCG implementation (https://github.com/llm-attacks/llm-attacks) as used in the paper.

**Build it:**

1. Clone the SmoothLLM repository from https://github.com/arobey1/smooth-llm and install dependencies.
2. Download and set up the Llama2 or Vicuna model from HuggingFace as per the paper's instructions.
3. Obtain or generate adversarial suffixes using the GCG attack codebase (https://github.com/llm-attacks/llm-attacks).
4. Run SmoothLLM defense with varying perturbation types (focus on swaps) and sample counts N on the adversarial prompts.
5. Measure and plot attack success rates compared to undefended baseline, replicating key figures from the paper.
6. Document the trade-offs in nominal performance on clean prompts.

**Verified links from the paper:**

- <https://github.com/arobey1/smooth-llm> — released by the paper's authors
- <https://github.com/llm-attacks/llm-attacks> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/meta-llama/Llama-2-7b-chat-hf> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/lmsys/vicuna-13b-v1.5> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo fork with scripts to run SmoothLLM defense experiments, plots of ASR reductions, and a README explaining the setup and results.

**Stretch goal:** Experiment with different perturbation rates q and report the impact on robustness and output quality.

### Advanced — Semantic-Preserving Perturbations to Improve SmoothLLM Robustness-Performance Trade-off
*Effort: few weeks, ~40+ hours*

You extend SmoothLLM by implementing semantic-preserving perturbations (e.g., synonym replacements, paraphrasing, or denoising autoencoder corrections) instead of or alongside character-level perturbations. You evaluate if these perturbations reduce adversarial success rates while maintaining better nominal performance on clean prompts. You compare results to the original character-level perturbation approach and analyze robustness against adaptive attacks.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by exploring more semantically aware perturbations to mitigate the trade-off between robustness and output quality, demonstrating deep comprehension and innovation beyond replication.

**Grounded in:** Limitations: The defense relies on character-level perturbations which may cause incoherent prompts if perturbation percentage q is too high. Future directions include improving nominal performance trade-offs, possibly via denoising generative models or semantic perturbations instead of character-level changes.

**Tech stack:** Python 3.11, PyTorch, transformers, NLTK or spaCy, pretrained paraphrasing or synonym replacement models

**Data:** Use the same adversarial suffix datasets as in the intermediate project (GCG attack suffixes) and clean NLP benchmark prompts for nominal performance evaluation.

**Build it:**

1. Study and implement semantic-preserving perturbation methods such as synonym replacement using WordNet or paraphrasing models.
2. Integrate these perturbations into the SmoothLLM pipeline as an alternative or complement to character-level perturbations.
3. Run experiments on adversarial prompts to measure attack success rates with semantic perturbations.
4. Evaluate nominal performance on clean prompts using standard NLP benchmarks or prompt completion quality metrics.
5. Compare results with original SmoothLLM character-level perturbation results and analyze trade-offs.
6. Document findings and discuss potential for certified robustness or further improvements.

**Verified links from the paper:**

- <https://github.com/arobey1/smooth-llm> — released by the paper's authors
- <https://github.com/llm-attacks/llm-attacks> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/meta-llama/Llama-2-7b-chat-hf> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/lmsys/vicuna-13b-v1.5> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with extended SmoothLLM code supporting semantic perturbations, experimental results comparing robustness and nominal performance, and a detailed README discussing methodology and outcomes.

**Stretch goal:** Explore ensembles of multiple perturbation types (character-level, semantic, deletions) and evaluate combined defense effectiveness.
