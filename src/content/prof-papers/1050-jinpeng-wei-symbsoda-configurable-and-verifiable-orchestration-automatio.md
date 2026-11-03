---
title: "1050 · symbSODA: Configurable and Verifiable Orchestration Automation for Active Malware Deception — Jinpeng Wei"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jinpeng-wei"
source_hash: "39357290390119ac9db96734276a9448a4260f226d0ca28af5fce5c7f221b2c8"
sequence: 1050
generator: "outreach-garden: managed"
---

# 1050 · symbSODA: Configurable and Verifiable Orchestration Automation for Active Malware Deception

## At a glance

- **Professor:** Jinpeng Wei
- **Institution:** UNC - Charlotte
- **Paper:** [symbSODA: Configurable and Verifiable Orchestration Automation for Active Malware Deception](https://dl.acm.org/doi/pdf/10.1145/3624568)
- **Authors:** Md Sajidul Islam Sajid, Jinpeng Wei, Ehab Al-Shaer, Qi Duan, Basel Abdeen, Latifur Khan
- **Year:** 2023

## Paper overview

This paper presents symbSODA, a cyber defense system that actively deceives malware by creating fake environments and responses to mislead attackers. It uses advanced analysis techniques to understand malware behavior and automatically generates customized deception plans that are executed in real-time. The system improves on previous methods by exploring multiple execution paths of malware, verifying deception plans for consistency, and providing configurable deception strategies to protect systems more effectively.

### Why it matters

**Research problem:** Malware attacks are increasingly sophisticated and evade traditional detection methods. Existing cyber deception techniques lack automation, agility, and the ability to adapt dynamically to malware behavior in real-time. There is a need for a configurable, verifiable, and automated system that can analyze malware behavior comprehensively and orchestrate effective deception strategies dynamically.

**Why it matters:** Malware compromises critical systems and steals sensitive information, causing significant damage. Traditional defenses are often reactive and can be circumvented by skilled attackers. Active cyber deception can proactively mislead attackers, wasting their resources and revealing their tactics, but current solutions are limited in scope and flexibility. Enhancing deception systems improves cybersecurity resilience and reduces the impact of malware attacks.

**Key contributions:**

- Development of symbSODA, a dynamic cyber deception system providing configurable deception as a service with real-time orchestration.
- Introduction of a symbolic execution-based API Call Tracer to extract comprehensive malicious sub-graphs from malware execution.
- Automated mapping of extracted malicious sub-graphs to MITRE ATT&CK techniques to bridge low-level malware behavior and high-level tactics.
- Implementation of a deception planning verifier using assume-guarantee reasoning to ensure conflict-free and consistent deception actions.
- Creation of an embedded deception technique via API hooking enabling real-time execution of deception ploys.

## About the professor

**Jinpeng Wei** — Associate Professor, Software and Information Systems, UNC - Charlotte.

Research interests: theory, methods, and tools that enhance the security of systems software for a wide range of applications; systems software vulnerability detection and mitigation; runtime verification of systems software security properties; stealthy malware detection, analysis and defense; secure software architecture; cloud computing security; security problems in emerging application domains such as Internet of Things

### Research links

- [Faculty/profile page](https://cci.charlotte.edu/people/jinpeng-wei)
- [Professor website](http://webpages.charlotte.edu/jwei8/)
- [Resolved homepage](https://webpages.charlotte.edu/jwei8/Jinpeng_Homepage_files/detail0.htm)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Symbolic Execution in Software Security
**The paper assumes:** symbolic execution, program analysis, software security techniques
**Already in this field?** Skip this entirely if you already understand symbolic execution and its application in malware analysis and software security.

To understand symbSODA's core methodology, especially its use of symbolic execution for malware path exploration and deception planning, this background focuses on symbolic execution in software security. The rigorous course provides a deep, structured university-level lecture series on symbolic execution and related program analysis techniques, ideal for comprehensive understanding. The fast track offers a concise, well-produced short series that introduces symbolic execution and automated reasoning concepts quickly, suitable for readers needing a solid conceptual grasp without extensive time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Software Security](https://www.youtube.com/playlist?list=PLVYZ2jULLUDu8UhB8INpfEp9jukxAvzpM) — mfbotacin · 7 videos · 3.0h across 7 episodes

**Watch only this:** Episode 1: '[SW Security] Symbolic Execution', about 25 minutes — a concise introduction to symbolic execution suitable for quick background.

*Why it unblocks this paper:* This short TAMU software security course playlist includes a dedicated episode on symbolic execution that succinctly introduces the concept, providing a quick, clear overview aligned with the paper's focus.

*If you want all of it:* All 7 episodes, approximately 3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the symbSODA system for configurable and verifiable orchestration automation in active malware deception, start by grasping the foundational techniques it builds upon: symbolic execution for malware analysis, the MITRE ATT&CK framework for mapping malware tactics, assume-guarantee reasoning for verifying deception plans, and API hooking for real-time deception execution. After establishing these prerequisites, focus on the core concept of configurable cyber deception orchestration and conclude with the authors' own talk to gain direct insights into symbSODA's design and evaluation.

### symbolic execution malware analysis *(prerequisite)*
Symbolic execution is a core technique used by symbSODA to explore multiple execution paths of malware, enabling comprehensive behavior analysis beyond single-path execution. Understanding symbolic execution provides the foundation for how symbSODA extracts malicious sub-graphs representing malware behaviors.

*How the paper uses it:* symbSODA uses symbolic execution to analyze malware by exploring multiple execution paths and extracting malicious sub-graphs.

▶ [6.858 Fall 2014 Lecture 10: Symbolic execution](https://www.youtube.com/watch?v=mffhPgsl8Ws) — Nickolai Zeldovich · 1:22:04 · 12y ago

### MITRE ATT&CK framework *(prerequisite)*
The MITRE ATT&CK framework is a standardized knowledge base of adversary tactics and techniques, which symbSODA uses to map low-level malware API call behaviors to high-level attack strategies. Familiarity with this framework is essential to understand how symbSODA contextualizes malware actions for deception planning.

*How the paper uses it:* symbSODA maps extracted malicious sub-graphs to MITRE ATT&CK techniques to bridge low-level malware behavior and high-level tactics.

▶ [MITRE ATT&CK Framework Explained: The Enemy's Playbook](https://www.youtube.com/watch?v=h7j7zl6xrdc) — The CISO Perspective · 14:04 · 7y ago

### assume guarantee reasoning verification *(prerequisite)*
Assume-guarantee reasoning is a formal verification method used by symbSODA to ensure that deception plans are conflict-free and consistent. Understanding this reasoning approach clarifies how symbSODA verifies deception strategies before deployment.

*How the paper uses it:* The system verifies deception plans for conflicts using assume-guarantee reasoning.

▶ [Automated Assume-guarantee Verification](https://www.youtube.com/watch?v=BYh7GRKNhBQ) — Microsoft Research · 1:11:13 · 10y ago

### API hooking for cyber deception *(prerequisite)*
API hooking is a technique that symbSODA employs to embed deception ploys and orchestrate them in real-time by intercepting malware API calls. Knowledge of API hooking is crucial to understand how symbSODA dynamically manipulates malware interactions with the system.

*How the paper uses it:* symbSODA implements embedded deception via API hooking enabling real-time execution of deception ploys.

▶ [API Hooking Explained: How Malware Hijacks System Calls Without Detection | The Malware Encyclopedia](https://www.youtube.com/watch?v=b7QJOXdpqqk) — BlueHat CyberSec Academy: Learn. Think. Defend. · 9:09 · 4mo ago

### configurable cyber deception orchestration
Configurable cyber deception orchestration is the central concept of symbSODA, involving dynamic management and execution of deception strategies tailored to malware behavior. Understanding this concept ties together the system's automation, verification, and real-time response capabilities.

*How the paper uses it:* symbSODA provides configurable deception as a service with real-time orchestration to protect systems effectively.

▶ [How Cyber Deception Catches Attackers | Practical Honeypot & Honeytoken Demo](https://www.youtube.com/watch?v=agnb3Pj_v10) — Prabh Nair · 51:44 · 6d ago

### symbSODA authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk offers direct, authoritative insights into the design, implementation, and evaluation of symbSODA, providing nuanced understanding beyond the paper. This talk is essential for grasping the system's innovations and practical impact.

*How the paper uses it:* Direct insight from the authors on symbSODA's system design and evaluation.

▶ [Exclusive Talk with Sajid Tarar](https://www.youtube.com/watch?v=xsOwVcEs2Ec) — Social Media Talk Show · 39:55 · 1mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces key concepts needed to understand symbSODA, a system for automated malware deception. We start with foundational knowledge of symbolic execution for malware analysis, then cover the MITRE ATT&CK framework to understand malware tactics, followed by assume-guarantee reasoning for verifying deception plans, and API hooking techniques for real-time deception execution. Finally, we explore configurable cyber deception orchestration as the core concept of dynamically managing deception strategies against malware.

### symbolic execution malware analysis *(prerequisite)*
Symbolic execution is a program analysis technique that explores multiple execution paths by treating inputs as symbolic variables rather than concrete values. This allows comprehensive analysis of malware behavior across different branches, which is crucial for understanding complex and polymorphic malware.

*How the paper uses it:* symbSODA uses symbolic execution to explore multiple execution paths in malware, enabling extraction of malicious sub-graphs.

▶ [6.858 Fall 2014 Lecture 10: Symbolic execution](https://www.youtube.com/watch?v=mffhPgsl8Ws) — Nickolai Zeldovich · 1:22:04 · 12y ago

### MITRE ATT&CK framework *(prerequisite)*
The MITRE ATT&CK framework is a standardized knowledge base of adversary tactics and techniques based on real-world observations. It helps security professionals understand and categorize attacker behaviors, which is essential for mapping low-level malware actions to high-level attack strategies.

*How the paper uses it:* symbSODA maps extracted malicious sub-graphs to MITRE ATT&CK techniques to bridge malware behavior and tactics.

▶ [MITRE ATT&CK Framework Explained: The Enemy's Playbook](https://www.youtube.com/watch?v=h7j7zl6xrdc) — The CISO Perspective · 14:04 · 7y ago

### assume guarantee reasoning verification *(prerequisite)*
Assume-guarantee reasoning is a formal verification method that breaks down system verification into smaller components by making assumptions about each part's environment. This approach helps verify that deception plans are consistent and free of conflicts before deployment.

*How the paper uses it:* symbSODA verifies deception plans for conflicts using assume-guarantee reasoning to ensure consistency.

▶ [Automated Assume-guarantee Verification](https://www.youtube.com/watch?v=BYh7GRKNhBQ) — Microsoft Research · 1:11:13 · 10y ago

### API hooking for cyber deception *(prerequisite)*
API hooking is a technique to intercept and modify system API calls at runtime, allowing the system to inject deceptive responses or behaviors. This enables real-time execution of deception ploys to mislead malware during its operation.

*How the paper uses it:* symbSODA uses API hooking to embed deception techniques and orchestrate deception ploys in real-time.

▶ [API Hooking](https://www.youtube.com/watch?v=oQuicSJLd6E) — TutorialsPoint · 8:39 · 8 yr ago

### configurable cyber deception orchestration
Configurable cyber deception orchestration involves dynamically managing and deploying deception strategies tailored to observed malware behaviors. This flexibility enhances defense effectiveness by adapting deception in real-time based on the attack context.

*How the paper uses it:* symbSODA provides configurable deception as a service with real-time orchestration to protect systems effectively.

▶ [How Cyber Deception Catches Attackers | Practical Honeypot & Honeytoken Demo](https://www.youtube.com/watch?v=agnb3Pj_v10) — Prabh Nair · 51:44 · 6d ago

## Already in your library

- [16. Side-Channel Attacks](https://www.youtube.com/watch?v=3v5Von-oNUg) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [10. Symbolic Execution](https://www.youtube.com/watch?v=yRVZPvHYHzw) — also for: Locating Software Faults Based on Minimum Debugging Frontier Set (Zhiyuan Li)
- [Introduction To The MITRE ATT&CK Framework](https://www.youtube.com/watch?v=LCec9K0aAkM) — also for: Guided Reasoning in LLM-Driven Penetration Testing Using Structured Attack Trees (Shan-Chieh Yang)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of symbSODA's approach to active malware deception. The beginner project recreates a core mechanism of API hooking-based deception ploys using existing tools. The intermediate project implements a simplified symbolic execution-based malware behavior tracer and maps extracted API call sequences to MITRE ATT&CK techniques, evaluating accuracy on a small malware sample set. The advanced project extends the system by addressing a stated limitation: implementing kernel-level hooking to resist malware evasion, exploring the feasibility and overhead of Barebox-style hooking.

### Beginner — API Hooking for Malware Deception Ploys
*Effort: a weekend, ~8 hours*

You build a small Windows API hooking framework using the EasyHook library to intercept selected API calls from a benign or simple malware-like process. You then implement a configurable deception ploy that modifies or fakes API call responses in real-time to mislead the process. This reproduces the embedded deception technique via API hooking described in symbSODA.

**Why it shows you understood the paper:** This project shows you understand how symbSODA uses API hooking to embed deception ploys and orchestrate them in real-time, a key contribution of the paper.

**Grounded in:** Creation of an embedded deception technique via API hooking enabling real-time execution of deception ploys.

**Tech stack:** Windows 10/11, C++, EasyHook library, Visual Studio or equivalent

**Data:** You use simple benign Windows applications or publicly available simple malware samples (e.g., from the referenced Ransomware GitHub repo) to test API hooking and deception.

**Build it:**

1. Set up a Windows development environment with EasyHook installed.
2. Write a C++ program that injects hooks into a target process to intercept specific Windows API calls (e.g., file or registry access).
3. Implement a configurable deception ploy that modifies the return values or parameters of hooked API calls to fake responses.
4. Test the hooking and deception on a benign process or simple malware sample from the referenced Ransomware repo.
5. Document the hooking mechanism, deception ploy configuration, and observed effects.

**Verified links from the paper:**

- <https://github.com/EasyHook/EasyHook> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/popescuadi/Ransomware> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the hooking code, sample configuration for deception ploys, and a README explaining how the hooking works and how it relates to symbSODA's real-time deception orchestration.

**Stretch goal:** Add logging and visualization of intercepted API calls to better understand malware behavior during hooking.

### Intermediate — Symbolic Execution-Based Malware API Call Tracer with MITRE ATT&CK Mapping
*Effort: 2 weekends, ~20 hours*

You implement a simplified symbolic execution engine or use an existing symbolic execution framework to trace multiple execution paths of small Windows malware samples, extracting sequences of API calls as malicious sub-graphs (MSGs). You then build a mapping module that associates these MSGs to MITRE ATT&CK techniques using keyword or pattern matching. Finally, you evaluate the recall of MSG extraction and the accuracy of MSG-to-MITRE mapping on a small malware dataset.

**Why it shows you understood the paper:** This project demonstrates your grasp of symbSODA's core method of multi-path malware analysis via symbolic execution and automated mapping to MITRE ATT&CK, key contributions of the paper.

**Grounded in:** Introduction of a symbolic execution-based API Call Tracer to extract comprehensive malicious sub-graphs from malware execution; Automated mapping of extracted malicious sub-graphs to MITRE ATT&CK techniques.

**Tech stack:** Python 3.11, angr symbolic execution framework, MITRE ATT&CK dataset (public)

**Data:** Use a small set of publicly available Windows malware samples (e.g., from VirusTotal or public malware repositories) or simulate malware-like API call sequences for symbolic execution.

**Build it:**

1. Set up Python environment with angr symbolic execution framework.
2. Implement a malware API call tracer that uses symbolic execution to explore multiple execution paths and extract API call sequences as graphs.
3. Develop a simple mapping module that matches extracted API call patterns to MITRE ATT&CK techniques using public ATT&CK descriptions.
4. Evaluate the recall of API call extraction and accuracy of mapping on a small malware sample set.
5. Document the implementation, evaluation results, and comparison to symbSODA's reported metrics.

**Ships as:** A GitHub repo with the symbolic execution tracer, mapping module, evaluation scripts, and a README explaining the approach and results compared to symbSODA.

**Stretch goal:** Incorporate assume-guarantee reasoning to verify consistency of deception plans generated from mapped techniques.

### Advanced — Kernel-Level Hooking to Resist Malware Evasion in Active Deception
*Effort: 3+ weeks*

You design and prototype a kernel-level hooking mechanism inspired by Barebox to intercept system calls at the kernel level, aiming to resist malware that detects and evades user-level API hooking. You integrate this hooking with a deception ploy framework that can modify or fake system call responses in real-time. You evaluate the feasibility, overhead, and effectiveness of kernel-level hooking against malware samples known to evade user-level hooks.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of symbSODA, demonstrating deep understanding and extending the system's robustness against advanced malware evasion.

**Grounded in:** Incorporate kernel-level hooking techniques like Barebox to resist malware evasion of API hooking.

**Tech stack:** C, Linux kernel module development, Windows Driver Kit (optional), Barebox hooking concepts

**Data:** Use malware samples known to detect and evade user-level API hooking (from public repositories or simulated) to test kernel-level hooking effectiveness.

**Build it:**

1. Research kernel-level hooking techniques and Barebox implementation details.
2. Develop a kernel module or driver that hooks selected system calls to intercept and modify behavior.
3. Implement a configurable deception ploy framework at the kernel level to fake or alter system call responses.
4. Test the kernel hooking against malware samples that evade user-level hooks, measuring overhead and detection resistance.
5. Document design decisions, implementation challenges, evaluation results, and comparison to user-level hooking.

**Ships as:** A GitHub repo with kernel hooking code, deception ploy framework, test scripts, and a detailed README discussing how this addresses symbSODA's limitation and future direction.

**Stretch goal:** Extend the system to dynamically switch between user-level and kernel-level hooking based on malware behavior detection.
