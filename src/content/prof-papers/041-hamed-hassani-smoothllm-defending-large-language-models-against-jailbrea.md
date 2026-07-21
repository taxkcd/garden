---
title: "041 · SmoothLLM: Defending Large Language Models Against Jailbreaking Attacks — Hamed Hassani"
date: 2026-07-21
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hassani"
source_hash: "585cb64b4f636524cc768f8c00f2c78818b446cc3b9f55a8e0893153a87d6a9a"
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

To deeply understand the SmoothLLM paper, start by grounding yourself in the nature of adversarial attacks on language models and black-box adversarial defenses, which form the threat model and operational constraints SmoothLLM addresses. Then, explore theoretical guarantees in adversarial robustness to appreciate the formal underpinnings of SmoothLLM's defense success. Next, study randomized smoothing for robustness, the core methodological principle behind SmoothLLM's perturbation and aggregation approach. Finally, conclude with the authors' own talk or the closest available advanced presentation to get direct insights into their novel defense algorithm and empirical results.

## Recommended videos (in order)

### Adversarial attacks on language models *(prerequisite)*
Understanding the types and mechanisms of adversarial jailbreaking attacks on large language models is essential to grasp the threat SmoothLLM defends against. This includes how adversaries craft inputs to bypass alignment and induce harmful outputs.

*How the paper uses it:* SmoothLLM is designed specifically to mitigate jailbreaking attacks that exploit adversarial suffixes in LLM prompts.

▶ [Zico Kolter - Adversarial Attacks on Aligned Language Models](https://www.youtube.com/watch?v=v1FMHokdWXI) — FAR․AI · 30:55

### Black-box adversarial defense *(prerequisite)*
SmoothLLM operates as a black-box defense without retraining or internal access to the LLM, so understanding black-box adversarial attack and defense strategies is critical. This knowledge contextualizes the efficiency and compatibility advantages of SmoothLLM.

*How the paper uses it:* SmoothLLM's black-box defense approach enables compatibility with closed-source LLMs and avoids costly retraining.

▶ [[ITW 2021] Towards Universal Adversarial Examples and Defenses](https://www.youtube.com/watch?v=ytsGK9w10KU) — Mitsubishi Electric Research Laboratories (MERL) · 19:54 · 4 years ago

### Theoretical guarantees in adversarial robustness *(prerequisite)*
The paper provides theoretical guarantees on defense success probability under a k-unstable adversarial suffix assumption. Familiarity with formal robustness certification and theoretical bounds in adversarial machine learning will deepen understanding of these guarantees.

*How the paper uses it:* SmoothLLM's theoretical success bounds rely on adversarial robustness theory under instability assumptions.

▶ [Generalizable Adversarial Robustness to Unforeseen Attacks - Soheil Feizi](https://www.youtube.com/watch?v=RGgDQumPOU8) — Institute for Advanced Study · 1:14:56 · 6 years ago

### Randomized smoothing for robustness
Randomized smoothing is the central technique SmoothLLM adapts to LLM jailbreak defense by perturbing inputs and aggregating outputs to detect adversarial manipulations. Understanding this method's principles and certified robustness results is key to grasping SmoothLLM's innovation.

*How the paper uses it:* SmoothLLM applies randomized smoothing principles via character-level perturbations and response aggregation to mitigate jailbreak attacks.

▶ [Randomized smoothing for certified robustness](https://www.youtube.com/watch?v=O84mcq7P_es) — Sebastien Bubeck · 32:27

### SmoothLLM authors talk *(the paper's own talk)*
The authors' own presentation or closest advanced talk provides the most direct and authoritative explanation of SmoothLLM's design, empirical results, and theoretical contributions. This talk will offer insights not easily gleaned from the paper alone.

*How the paper uses it:* Hamed Hassani, a co-author, is affiliated with the University of Pennsylvania and has expertise in adversarial training, making his talks highly relevant.

▶ [It's Not About Scale, It's About Abstraction](https://www.youtube.com/watch?v=s7_NlkBwdj8) — Machine Learning Street Talk · 46:22 · 1 year ago
