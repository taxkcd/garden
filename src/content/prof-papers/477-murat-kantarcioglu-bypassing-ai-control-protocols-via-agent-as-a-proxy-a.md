---
title: "477 · Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks — Murat Kantarcioglu"
date: 2026-08-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-murat-kantarcioglu"
source_hash: "982b1fa0efe81b474b8a5d1c9b8aa7305581d9daaf5c02625a38a21e5af57868"
sequence: 477
generator: "outreach-garden: managed"
---

# 477 · Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks

## At a glance

- **Professor:** Murat Kantarcioglu
- **Institution:** Virginia Tech
- **Paper:** [Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks](https://arxiv.org/pdf/2602.05066)
- **Authors:** Jafar Isbarov, Murat Kantarcioglu
- **Year:** 2026

## Paper overview

This paper reveals a critical security vulnerability in AI systems that use monitoring-based defenses to control autonomous agents. The authors show that attackers can exploit the agent itself as a proxy to bypass these defenses, even when the monitors are large and sophisticated. They develop a new attack method and optimization algorithm that craft adversarial inputs repeated by the agent to fool the monitoring system, demonstrating that current defenses are fragile and that scaling up models alone does not ensure security.

### Why it matters

**Research problem:** How to secure autonomous AI agents against indirect prompt injection (IPI) attacks that bypass monitoring-based defenses designed to ensure agent alignment and safety.

**Why it matters:** As AI agents increasingly automate critical tasks, vulnerabilities in their security protocols can lead to unauthorized actions and data exfiltration, posing serious risks in real-world applications. Current monitoring defenses are widely deployed but their robustness against adaptive attacks is unclear.

**Key contributions:**

- Introduction of the Agent-as-a-Proxy attack framework exploiting agent repetition to bypass monitors.
- Development of Parallel-GCG, an optimization algorithm for multi-site adversarial string generation.
- Empirical demonstration that hybrid monitoring protocols are more vulnerable to adaptive attacks than chain-of-thought-only monitoring.
- Evidence that model scale does not guarantee security, as similarly capable agents can bypass frontier-scale monitors.

## About the professor

**Murat Kantarcioglu** — Professor of Computer Science and CCI, Computer Science, Virginia Tech.

Research interests: My research centers on developing technologies that can efficiently extract valuable information from data while preserving privacy, security, and trustworthiness. My work spans security, privacy, and trustworthy AI challenges across data science, machine learning, artificial intelligence, blockchains, social networks, databases, and healthcare. I also study risk, incentives, and governance issues in assured information sharing, as well as the use of AI for cybersecurity and homeland security. More recently, my research has focused on security, accountability, fairness, and privacy in agentic AI systems, along with blockchain-enabled approaches for assured information sharing.

### Research links

- [Faculty/profile page](https://www.kantarcioglu.net)
- [Resolved homepage](https://www.kantarcioglu.net/)
- [Lab website](https://cs.vt.edu/)
- [Interview](https://www.youtube.com/results?search_query=Murat+Kantarcioglu+interview)
- [Conferences I am involved with](https://www.kantarcioglu.net/pcm.html)
- [My other service activities](https://www.kantarcioglu.net/other-services.html)
- [Data-Centric Cybersecurity Overview](https://www.kantarcioglu.net/datacentsec.pdf)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adversarial Machine Learning
**The paper assumes:** adversarial machine learning, gradient-based optimization, AI security attacks
**Already in this field?** Skip this entirely if you already understand adversarial attacks on machine learning models and optimization methods for crafting adversarial examples.

To understand the adversarial attack methods and optimization techniques used in the paper on bypassing AI control protocols, a solid grasp of adversarial machine learning is essential. The rigorous course option offers a deep, structured university-level exploration of deep learning concepts including adversarial robustness, while the fast track provides a concise, focused introduction to AI security and adversarial machine learning concepts suitable for quick comprehension. Choose the course for comprehensive foundational knowledge, or the fast track for a practical overview emphasizing security threats and defenses.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS230: Deep Learning I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rNRRGdS0rBbXOUGA0wjdh1X) — Stanford Online · 9 videos · 13.9h across 9 episodes

**Watch only this:** Lectures 1-4, about 6 hours — covering introduction to deep learning, supervised learning, project cycle, and specifically Lecture 4: Adversarial Robustness and Generative Models, which is crucial for grasping adversarial attack frameworks.

*Why it unblocks this paper:* Stanford CS230 Autumn 2025 includes a dedicated lecture on adversarial robustness and generative models, directly relevant to understanding adversarial inputs and optimization techniques like Parallel-GCG used in the paper.

*If you want all of it:* 13.9 hours across 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [AI Security Explained: OWASP LLM, Adversarial ML & AI Governance](https://www.youtube.com/playlist?list=PLbR0nfQrDySo) — CyberXplain Academy · 30 videos · 5.8h across the first 14 episodes

**Watch only this:** Episodes 1-7, about 3 hours — covering AI security basics, adversarial ML fundamentals, prompt injection attacks, and advanced LLM security risks, providing a practical understanding of the attack surface and defense challenges.

*Why it unblocks this paper:* The CyberXplain Academy series 'AI Security Explained' offers a concise, well-structured introduction to adversarial machine learning and AI security topics, including prompt injection and adversarial attacks, matching the paper's focus on AI agent security and monitoring defenses.

*If you want all of it:* 5.8 hours across the first 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks', start by building foundational knowledge on adversarial attacks on AI agents and indirect prompt injection attacks, which are the core vulnerabilities exploited. Then, study AI monitoring and alignment techniques to grasp the existing defense mechanisms that the paper challenges. Finally, focus on the paper's core concept by watching the authors' own talk presenting their novel Agent-as-a-Proxy attack framework and findings.

### Adversarial attacks on AI agents *(prerequisite)*
This section covers foundational knowledge about how adversarial inputs can manipulate AI agent behavior, a critical background for understanding the attack methods developed in the paper. The selected talk is a rigorous keynote from a respected security summit, providing advanced insights into threat modeling and security challenges in agentic AI systems.

*How the paper uses it:* The paper builds on the concept of adversarial attacks to develop a new attack framework that bypasses AI monitoring defenses.

▶ [Keynote | Threat Modeling Agentic AI Systems: Proactive Strategies for Security and Resilience](https://www.youtube.com/watch?v=R49Cv7pJ2KA) — SANS Institute · 27:36 · 1 year ago

### Indirect prompt injection attacks *(prerequisite)*
Indirect prompt injection is the central attack vector exploited in the paper to bypass AI monitoring defenses. The chosen talk is a detailed, practitioner-level presentation from OWASP Foundation that discusses architectural testing approaches for real-world AI/ML systems, providing a deep and practical understanding of indirect prompt injection.

*How the paper uses it:* The paper's Agent-as-a-Proxy attack framework is a sophisticated form of indirect prompt injection targeting monitoring systems.

▶ [Indirect Prompt Injection: Architectural Testing Approaches for Real World AI/ML Systems](https://www.youtube.com/watch?v=6KllX1F590o) — OWASP Foundation · 40:58 · 8 months ago

### AI monitoring and alignment techniques *(prerequisite)*
Understanding existing AI monitoring and alignment techniques is essential to appreciate the vulnerabilities the paper exposes. The selected video is a comprehensive, in-depth session from a recognized AI safety association, focusing on monitoring, evaluation, and control of capable AI systems, which aligns with the paper's focus on monitoring-based defenses.

*How the paper uses it:* The paper empirically evaluates attacks against state-of-the-art hybrid and extract-and-evaluate monitors, demonstrating their fragility.

▶ [AI monitoring and control | IASEAI '26](https://www.youtube.com/watch?v=vyzGJgvOvBE) — International Association for Safe & Ethical AI · 1:00:37 · 4 months ago

### Gradient-based optimization for adversarial string generation
This concept covers the core method Parallel-GCG developed in the paper to craft robust adversarial inputs. The chosen video is a university-level lecture on adversarial attacks and GANs from Stanford Online, providing rigorous coverage of gradient-based optimization techniques relevant to the paper's algorithmic contributions.

*How the paper uses it:* Parallel-GCG is a novel gradient-based optimization algorithm introduced in the paper to generate multi-site adversarial strings.

▶ [Stanford CS230: Deep Learning | Autumn 2018 | Lecture 4 - Adversarial Attacks / GANs](https://www.youtube.com/watch?v=ANszao6YQuM) — Stanford Online · 1:23:00 · 7 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own recorded talk is the most direct and authoritative source to understand their novel Agent-as-a-Proxy attack framework and empirical findings. It provides detailed insights into their methodology, results, and implications for AI security.

*How the paper uses it:* This talk presents the paper's key contributions, attack framework, and evaluation results from the authors themselves.

▶ [Before You Ship Your Agent: An Agent Builder’s Primer on Jailbreaking Attacks](https://www.youtube.com/watch?v=RDqJ2ZFBxgA) — PyData · 32:14 · 11 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on bypassing AI control protocols via Agent-as-a-Proxy attacks, start by learning about AI monitoring and alignment techniques to grasp how current defenses work. Next, build foundational knowledge on adversarial attacks on AI agents and indirect prompt injection attacks, which are the main vulnerabilities exploited. Finally, explore the core method of gradient-based optimization for adversarial string generation, culminating in the paper's novel attack framework.

### AI monitoring and alignment techniques *(prerequisite)*
This section introduces how AI agents are monitored and aligned to ensure they behave safely and as intended. You'll learn about observability, debugging, and control mechanisms that track agent decisions and reasoning paths to maintain alignment.

*How the paper uses it:* The paper shows that these monitoring and alignment defenses are vulnerable to the Agent-as-a-Proxy attack framework.

▶ [How to Monitor, Debug, and Trust Agentic AI Systems - Observability in Agentic AI](https://www.youtube.com/watch?v=GNFWAhcPYN4) — Kasam Shaikh · 39:03 · 6 months ago

### Adversarial attacks on AI agents *(prerequisite)*
Here, you will learn what adversarial attacks are and how attackers craft inputs to manipulate AI agent behavior. This foundational knowledge explains the security risks posed by adversarial examples and how they can fool AI systems.

*How the paper uses it:* The paper develops adversarial inputs that exploit AI agents to bypass monitoring defenses.

▶ [Keynote | Threat Modeling Agentic AI Systems: Proactive Strategies for Security and Resilience](https://www.youtube.com/watch?v=R49Cv7pJ2KA) — SANS Institute · 27:36 · 1 year ago

### Indirect prompt injection attacks *(prerequisite)*
This concept covers how attackers inject malicious prompts indirectly through AI agents or intermediary systems to manipulate AI outputs without direct access. Understanding this attack vector is crucial for grasping how the paper's attacks bypass monitoring.

*How the paper uses it:* The paper's Agent-as-a-Proxy attack is a form of indirect prompt injection that exploits agent repetition to fool monitors.

▶ [Indirect prompt injection | PortSwigger Web LLM Attacks (Practitioner)](https://www.youtube.com/watch?v=z_rdrqsocQs) — ad4m Academy · 11:10 · 1 month ago

### Gradient-based optimization for adversarial string generation
This section explains gradient-based optimization methods used to craft adversarial inputs that can reliably fool AI systems. You'll learn how optimization algorithms iteratively improve attack strings to maximize their effectiveness.

*How the paper uses it:* The paper introduces Parallel-GCG, a gradient-based optimization algorithm to generate robust adversarial strings for attacks.

▶ [Intro to Gradient Descent || Optimizing High-Dimensional Equations](https://www.youtube.com/watch?v=fXQXE96r4AY) — Dr. Trefor Bazett · 11:04 · 3 years ago

### Paper authors talk *(the paper's own talk)*
Watch the authors present their novel Agent-as-a-Proxy attack framework, their optimization method, and empirical results demonstrating vulnerabilities in current AI monitoring defenses.

*How the paper uses it:* This talk provides direct insights from the authors on their attack framework and findings.

▶ [Before You Ship Your Agent: An Agent Builder’s Primer on Jailbreaking Attacks](https://www.youtube.com/watch?v=RDqJ2ZFBxgA) — PyData · 32:14 · 11 days ago

## Already in your library

- [Stanford CS230 | Autumn 2025 | Lecture 4: Adversarial Robustness and Generative Models](https://www.youtube.com/watch?v=aWlRtOlacYM) — also for: Busting the Paper Ballot: Voting Meets Adversarial Machine Learning (Laurent D. Michel)
- [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)
- [What Is AI Alignment? (Explained Simply)](https://www.youtube.com/watch?v=xbQeXOGtwOU) — also for: Artificial Intelligent Disobedience: Rethinking the Agency of Our Artificial Teammates (Reuth Mirsky)
- [Lecture 16 | Adversarial Examples and Adversarial Training](https://www.youtube.com/watch?v=CIfsB_EYsVI) — also for: Adversarial Reinforcement Learning for Detecting False Data Injection Attacks in Vehicular Routing (Aron Laszka)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Agent-as-a-Proxy attack framework and its implications on AI agent monitoring defenses. Starting with a beginner-level reproduction of a core monitoring vulnerability metric, progressing to an intermediate-level reimplementation and evaluation of the Parallel-GCG attack algorithm using the authors' released code, and culminating in an advanced project that extends the attack to black-box monitoring models, addressing a key limitation and future direction from the paper.

### Beginner — Reproduce Attack Success Rates on AlignmentCheck Monitor
*Effort: a weekend, ~8 hours*

You build a minimal experiment that runs a simplified Agent-as-a-Proxy attack against the AlignmentCheck monitor on a small subset of AgentDojo samples. The goal is to reproduce the paper's reported high attack success rates (>90%) for adaptive attacks, focusing on one monitoring model and one agent.

**Why it shows you understood the paper:** This project shows you understand the core vulnerability demonstrated by the paper and can replicate a key empirical result, confirming the fragility of monitoring-based defenses.

**Grounded in:** Attack success rates exceeding 90% against AlignmentCheck and extract-and-evaluate monitors.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** Use the AgentDojo benchmark samples as described in the paper; the authors' code repository includes scripts and sample data subsets.

**Build it:**

1. Clone the authors' repository https://github.com/dspl-lab/agent-as-a-proxy-attack and install dependencies.
2. Set up the AlignmentCheck monitor environment using provided scripts.
3. Run the provided attack scripts on a small sample (e.g., 4 samples) from AgentDojo with one agent model (e.g., GPT-4o mini).
4. Collect and report the attack success rate metric as defined in the paper.
5. Write a README summarizing the experiment setup, results, and comparison to the paper's reported metrics.

**Verified links from the paper:**

- <https://github.com/dspl-lab/agent-as-a-proxy-attack> — released by the paper's authors

**Ships as:** A GitHub repo with code and a README showing reproduction of high attack success rates against AlignmentCheck monitor on a small AgentDojo sample.

**Stretch goal:** Add visualization of attack string perplexity and discuss detectability trade-offs.

### Intermediate — Implement and Evaluate Parallel-GCG Attack on Hybrid Monitors
*Effort: 2 weekends, ~20 hours*

You extend the authors' codebase to run the Parallel-GCG optimization algorithm to craft adversarial attack strings targeting hybrid monitoring protocols. You compare attack success rates against chain-of-thought-only monitoring as a baseline, reproducing the paper's finding that hybrid monitors are more vulnerable to adaptive attacks.

**Why it shows you understood the paper:** This project demonstrates your ability to work with the core attack method, understand multi-objective gradient-based optimization, and empirically evaluate monitoring vulnerabilities, reflecting a deeper grasp of the paper's main technical contribution.

**Grounded in:** Development of Parallel-GCG, an optimization algorithm for multi-site adversarial string generation; Hybrid monitors, despite being more robust to static attacks, are paradoxically more vulnerable to adaptive attacks.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook

**Data:** Use the AgentDojo benchmark and the authors' code from https://github.com/dspl-lab/agent-as-a-proxy-attack for monitors and attack implementations.

**Build it:**

1. Clone and set up the authors' repository with all dependencies.
2. Run baseline experiments using chain-of-thought-only monitoring on a subset of AgentDojo samples.
3. Implement or configure the Parallel-GCG attack algorithm as per the authors' code and run it against hybrid monitoring protocols.
4. Collect attack success rates and compare them to the baseline monitoring results.
5. Document the experimental setup, results, and analysis in a detailed README or Jupyter notebook.

**Verified links from the paper:**

- <https://github.com/dspl-lab/agent-as-a-proxy-attack> — released by the paper's authors

**Ships as:** A GitHub repo with code and analysis showing Parallel-GCG attack effectiveness against hybrid vs. chain-of-thought-only monitors, reproducing key paper results.

**Stretch goal:** Experiment with varying the number of samples used for attack optimization to observe transferability effects.

### Advanced — Extend Agent-as-a-Proxy Attacks to Black-Box Monitoring Models
*Effort: 3+ weeks*

You develop an extension of the Agent-as-a-Proxy attack framework to work under black-box assumptions for the monitoring models, addressing a key limitation noted in the paper. This involves designing a query-efficient black-box optimization or surrogate modeling approach to craft adversarial attack strings without white-box access. You evaluate attack success rates against a simulated black-box monitor.

**Why it shows you understood the paper:** This project tackles a future research direction from the paper, demonstrating your ability to innovate beyond the original work and address practical deployment challenges of adaptive attacks on AI agent monitoring.

**Grounded in:** The attack assumes white-box access to monitoring models; extension to black-box monitors is future work.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, scikit-learn

**Data:** Use AgentDojo benchmark samples and the authors' codebase for baseline attack and monitoring setups; simulate black-box access by restricting gradient information.

**Build it:**

1. Study the authors' white-box Parallel-GCG attack implementation and monitoring models.
2. Design a black-box attack method using zeroth-order optimization or surrogate modeling to approximate monitor responses.
3. Implement the black-box attack pipeline restricting access to only monitor outputs (no gradients).
4. Evaluate attack success rates on a subset of AgentDojo samples against a black-box simulated monitor.
5. Compare results to white-box attack baselines and analyze trade-offs.
6. Document methodology, challenges, and findings in a comprehensive report.

**Verified links from the paper:**

- <https://github.com/dspl-lab/agent-as-a-proxy-attack> — released by the paper's authors

**Ships as:** A GitHub repo with code and documentation demonstrating a black-box Agent-as-a-Proxy attack method and evaluation results, extending the paper's scope.

**Stretch goal:** Incorporate perplexity constraints to generate lower-perplexity, harder-to-detect attack strings as per another future direction.
