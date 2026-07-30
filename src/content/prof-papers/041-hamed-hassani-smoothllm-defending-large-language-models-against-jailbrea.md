---
title: "041 · SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks — Hamed Hassani"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hassani"
source_hash: "4faae8e2136eb24f82b44e888a3baa3092bd65c19cb3473db4e59962933f659f"
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
