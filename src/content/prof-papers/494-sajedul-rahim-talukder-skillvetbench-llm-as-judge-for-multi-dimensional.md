---
title: "494 · SkillVetBench: LLM-as-Judge for Multi-Dimensional Security Risk Evaluation in Open-Source LLM Agent Skills — Sajedul Rahim Talukder"
date: 2026-08-24
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-sajedul-rahim-talukder"
source_hash: "992d9ba7b49c90d2aa3d9864e42f8f225025e44019c53fe8faaa7bec3845a72b"
sequence: 494
generator: "outreach-garden: managed"
---

# 494 · SkillVetBench: LLM-as-Judge for Multi-Dimensional Security Risk Evaluation in Open-Source LLM Agent Skills

## At a glance

- **Professor:** Sajedul Rahim Talukder
- **Institution:** UTEP
- **Paper:** [SkillVetBench: LLM-as-Judge for Multi-Dimensional Security Risk Evaluation in Open-Source LLM Agent Skills](https://arxiv.org/pdf/2606.15899)
- **Authors:** Ismail Hossain, Sai Puppala, Md Jahangir Alam, Tanzim Ahad, Sajedul Talukder
- **Year:** 2026

## Paper overview

This paper introduces SkillVetBench, a public platform that uses large language models (LLMs) as judges to evaluate the security risks of open-source LLM agent skills. It addresses the challenge that existing scanners miss instruction-layer and multi-agent risks by providing a semantic, multi-dimensional risk scoring system combining a novel Skill Agentic Risk Score (SARS), CVSS v4.0 metrics, and marketplace verdict comparisons. The system achieves high detection accuracy, especially for subtle instruction-layer threats, and offers a live leaderboard for ongoing skill vetting.

### Why it matters

**Research problem:** Open-source LLM agent skills extend agent capabilities but pose security risks that are not effectively detected by existing code-layer scanners, especially instruction-layer and multi-agent risks such as prompt injection, memory poisoning, and data exfiltration.

**Why it matters:** Malicious skills can hijack agents, exfiltrate sensitive data, or chain harmful actions across systems, threatening user security and trust in AI ecosystems. Existing defenses are inadequate, leading to undetected supply-chain attacks in live marketplaces.

**Key contributions:**

- Introduction of SARS, a five-dimensional agentic-risk metric tailored for instruction-following LLM skills.
- Integration of SARS with full CVSS v4.0 vector scoring and a dual-view comparison against official marketplace safety reviews.
- Development of a live, public Hugging Face leaderboard evaluating over 1,200 skills with detailed per-finding reports.
- Demonstration of zero false negatives and zero false positives on a labeled 100-skill benchmark, outperforming existing static scanners.
- Detailed vulnerability taxonomy covering seven categories including instruction-layer threats like prompt injection and memory poisoning.

## About the professor

**Sajedul Rahim Talukder** — UTEP.

### Research links

- [Faculty/profile page](https://www.cs.utep.edu/stalukder/research.html)
- [Identity evidence](https://www2.cs.siu.edu/~stalukder)
- [Identity evidence](https://www.cs.utep.edu/stalukder/)
- [Identity evidence](https://www.cs.utep.edu/stalukder/publications.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Large Language Models security evaluation
**The paper assumes:** large language model architectures, instruction-layer vulnerabilities, semantic security risk assessment, prompt injection attacks, CVSS vulnerability scoring
**Already in this field?** Skip this entirely if you already understand large language models, their security vulnerabilities, and how they can be used for semantic risk evaluation.

To deeply understand SkillVetBench's use of large language models (LLMs) as semantic judges for security risk evaluation, background on LLM architectures, their reasoning, agentic behavior, and evaluation is essential. The rigorous course offers a comprehensive academic foundation on transformers and LLMs, while the fast track provides a focused, shorter introduction to the same core concepts, enabling efficient preparation depending on your available time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-4 and 7-8, about 9.5 hours — covering Transformer basics, LLM architectures, training, agentic LLMs, and evaluation, which are critical to grasp the paper's core methods and risk scoring.

*Why it unblocks this paper:* Stanford CME295: Transformers and Large Language Models I Autumn 2025 is a university-level course that covers the evolution, architecture, training, tuning, reasoning, agentic LLMs, and evaluation of large language models. It directly addresses the foundational knowledge needed to understand LLMs as judges and their security implications, including agentic behavior relevant to SkillVetBench.

*If you want all of it:* 16.2 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [AI Security Explained](https://www.youtube.com/playlist?list=PLOspHqNVtKADin6JGozvzSvUQFTQRdum-) — IBM Technology · 24 videos · 5.4h across 24 episodes

**Watch only this:** Episodes 1-7, about 1.5 hours — covering the AI security trilemma, prompt injection, AI agent risks, and trust issues, which directly relate to SkillVetBench's threat model and evaluation approach.

*Why it unblocks this paper:* IBM Technology's 'AI Security Explained' playlist offers concise, focused explainers on AI security risks including prompt injection, agentic AI threats, and LLM vulnerabilities. This series provides a practical, security-oriented overview aligned with the paper's focus on instruction-layer and multi-agent risks in LLMs.

*If you want all of it:* 5.4 hours across 24 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand SkillVetBench, start by grounding yourself in the evaluation of large language models (LLMs) as judges, since the paper leverages LLMs for semantic risk analysis. Next, build knowledge on static versus dynamic vulnerability analysis to appreciate the limitations and future directions of the paper's static-only approach. Then, study the Common Vulnerability Scoring System (CVSS) v4.0, which SkillVetBench integrates with its novel risk metric. Following that, explore instruction-layer security threats, key vulnerabilities SkillVetBench detects beyond traditional scanners. Finally, focus on the core concept of SkillVetBench itself, prioritizing the authors' own talk for direct insight into their novel LLM-based security evaluation platform.

### Large language models evaluation *(the paper's own talk)*
Understanding how LLMs can be used as judges for semantic risk analysis is foundational to grasping SkillVetBench's approach. This section covers the methodologies, challenges, and trustworthiness of LLM-based evaluation frameworks.

*How the paper uses it:* SkillVetBench uses LLMs as judges to semantically analyze skill artifacts without execution.

▶ [LLM Evaluation Explained: When to Trust the Score](https://www.youtube.com/watch?v=GC0HwfyCA4Q) — Stacked Intelligence · 15:08 · 1 month ago

### Static vs dynamic vulnerability analysis *(prerequisite)*
SkillVetBench relies on static analysis, so understanding the differences between static and dynamic vulnerability analysis is crucial to appreciate the paper's limitations and future work directions involving dynamic methods.

*How the paper uses it:* The paper notes static-only analysis cannot detect runtime evasion techniques, motivating integration of dynamic analysis.

▶ [Static Program Analysis for Security | Cambridge IB Tech Talks](https://www.youtube.com/watch?v=GmrvgAcYcWo) — Zeyu Zhang · 35:46 · 1 year ago

### Common Vulnerability Scoring System CVSS v4 *(prerequisite)*
CVSS v4 is a standardized vulnerability scoring system integrated with SkillVetBench's novel SARS metric, so understanding CVSS v4's structure and updates is important for interpreting the multi-dimensional risk scores.

*How the paper uses it:* SkillVetBench combines SARS with full CVSS v4.0 vector scoring for comprehensive risk evaluation.

▶ [What is Common Vulnerability Scoring System (CVSS) v4?](https://www.youtube.com/watch?v=07xVwlndwVw) — Nucleus Security · 14:58 · 3 years ago

### Instruction-layer security threats *(prerequisite)*
Instruction-layer threats like prompt injection and memory poisoning are central vulnerabilities SkillVetBench detects but are missed by conventional scanners, making this knowledge critical to understanding the paper's novelty.

*How the paper uses it:* SkillVetBench achieves perfect recall on instruction-layer threats that conventional tools largely miss.

▶ [Stop LLM Attacks: Prompt Injection & More Explained! | CyberXplain](https://www.youtube.com/watch?v=nGZ7ngzkvwg) — CyberXplain Academy · 33:12 · 2 weeks ago

### SkillVetBench author talk *(the paper's own talk)*
The authors' own talk provides direct, detailed insights into SkillVetBench's design, evaluation, and contributions, offering the most authoritative and comprehensive understanding of the paper's core innovation.

*How the paper uses it:* This talk is by the authors presenting their LLM-as-Judge security evaluation platform SkillVetBench.

▶ [Haystack EU 2025: From LLM-as-a-Judge to Human-in-the-Loop: Rethinking Evaluation in RAG and Search](https://www.youtube.com/watch?v=W9c_ByRQims) — OpenSource Connections · 46:26 · 10 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand SkillVetBench and its approach to security risk evaluation in open-source LLM agent skills, start by learning how large language models (LLMs) can be used as judges for evaluating AI outputs. Then, grasp the basics of vulnerability scoring with CVSS v4, followed by understanding instruction-layer security threats that SkillVetBench uniquely detects. Next, explore the difference between static and dynamic vulnerability analysis to appreciate the paper's limitations and future directions. Finally, dive into the core novel metric, the Skill Agentic Risk Score (SARS), which captures multi-dimensional risks beyond traditional code-level analysis.

### Large language models evaluation *(the paper's own talk)*
Learn how LLMs can be used to evaluate and judge the quality, safety, and compliance of outputs from other AI models. This includes understanding the principles behind LLM-as-a-judge setups, scoring protocols, and common pitfalls in trusting automated AI evaluations.

*How the paper uses it:* SkillVetBench uses LLMs as judges to semantically analyze and score security risks in LLM agent skills.

▶ [LLM Evaluation Explained: When to Trust the Score](https://www.youtube.com/watch?v=GC0HwfyCA4Q) — Stacked Intelligence · 15:08 · 1 month ago

### Common Vulnerability Scoring System CVSS v4 *(prerequisite)*
Understand the CVSS framework, which assigns standardized severity scores to software vulnerabilities based on multiple factors. CVSS v4 introduces improvements for finer granularity and applicability, forming part of SkillVetBench's multi-dimensional risk scoring.

*How the paper uses it:* SkillVetBench integrates CVSS v4.0 metrics alongside SARS for comprehensive vulnerability scoring.

▶ [What is Common Vulnerability Scoring System (CVSS) v4?](https://www.youtube.com/watch?v=07xVwlndwVw) — Nucleus Security · 14:58 · 3 years ago

### Instruction-layer security threats *(prerequisite)*
Explore key security threats at the instruction or prompt level in AI systems, such as prompt injection and memory poisoning, which can manipulate AI behavior or leak sensitive data. These threats are often missed by traditional code scanners but are critical in LLM agent security.

*How the paper uses it:* SkillVetBench detects instruction-layer threats that conventional scanners largely miss.

▶ [Stop LLM Attacks: Prompt Injection & More Explained! | CyberXplain](https://www.youtube.com/watch?v=nGZ7ngzkvwg) — CyberXplain Academy · 33:12 · 2 weeks ago

### Static vs dynamic vulnerability analysis *(prerequisite)*
Learn the difference between static analysis (examining code or artifacts without execution) and dynamic analysis (monitoring behavior during execution). Understanding this distinction clarifies SkillVetBench's static-only approach and its limitations regarding runtime evasion.

*How the paper uses it:* SkillVetBench relies on static analysis, which limits detection of runtime evasion tactics, motivating future dynamic analysis integration.

▶ [The Ultimate SAST Guide: What is Static Application Security Testing? Code Security with Mackenzie](https://www.youtube.com/watch?v=wqErjqFgEa0) — Aikido Security · 12:34 · 10 months ago

### Skill Agentic Risk Score SARS
Discover the novel five-dimensional Skill Agentic Risk Score (SARS) designed to capture nuanced instruction-layer and multi-agent risks that traditional vulnerability scores miss. SARS evaluates instruction fidelity, data gravity, action irreversibility, blast radius, and chain amplification to provide a semantic risk profile.

*How the paper uses it:* SARS is the core novel metric introduced by SkillVetBench to semantically assess multi-dimensional security risks in LLM agent skills.

▶ [Security aspects in Agentic AI | Balaji Sundara](https://www.youtube.com/watch?v=Lqj1sHr9bsA) — APIsec University · 27:15 · 1 year ago

## Already in your library

- [Keynote | Threat Modeling Agentic AI Systems: Proactive Strategies for Security and Resilience](https://www.youtube.com/watch?v=R49Cv7pJ2KA) — also for: Bypassing AI Control Protocols via Agent-as-a-Proxy Attacks (Murat Kantarcioglu)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [LLM Evaluation Basics: Datasets & Metrics](https://www.youtube.com/watch?v=1jReCwBgM84) — also for: Evaluating Large Language Models for Fair and Reliable Organ Allocation (Evi Micha)
- [How to Systematically Setup LLM Evals (Metrics, Unit Tests, LLM-as-a-Judge)](https://www.youtube.com/watch?v=a3SMraZWNNs) — also for: COMIC: Agentic Sketch Comedy Generation (Brian Curless)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Introduction to large language models](https://www.youtube.com/watch?v=zizonToFXDs) — also for: Large Language Models Can Help Mitigate Barren Plateaus in Quantum Neural Networks (Chaowen Guan)
- [What are Large Language Models (LLMs)?](https://www.youtube.com/watch?v=iR2O2GPbB0E) — also for: Generate, Transduct, Adapt: Iterative Transduction with VLMs (Grant Van Horn)
- [Introduction to Large Language Models](https://www.youtube.com/watch?v=RBzXsQHjptQ) — also for: Large Language Models for Designing Participatory Budgeting Rules (Hau Chan)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of SkillVetBench's approach to semantic, multi-dimensional security risk evaluation of LLM agent skills. Starting with a small-scale reproduction of the Skill Agentic Risk Score (SARS) metric on a few example skills, you then implement a core part of the SkillVetBench evaluation pipeline comparing SARS with CVSS v4.0 scores on a small skill set. Finally, you extend the system by exploring ensemble LLM judge scoring to address detection variability, directly engaging with the paper's stated limitations and future directions.

### Beginner — Reproduce Skill Agentic Risk Score (SARS) on Sample Skills
*Effort: a weekend (~8 hours)*

You build a small Python script that computes the five-dimensional Skill Agentic Risk Score (SARS) for a handful of open-source LLM agent skill instruction texts. You manually select or simulate 5-10 skill instruction samples and implement the SARS scoring rules as described in the paper, focusing on instruction fidelity, data gravity, action irreversibility, blast radius, and chain amplification.

**Why it shows you understood the paper:** This project shows you grasp the novel SARS metric's components and how to operationalize semantic risk factors from skill instructions, a core contribution of the paper.

**Grounded in:** Introduction of SARS, a five-dimensional agentic-risk metric tailored for instruction-following LLM skills.

**Tech stack:** Python 3.11

**Data:** Simulated or manually collected small set of open-source LLM agent skill instructions (text only), as the paper's authors did not release a dataset.

**Build it:**

1. Read the paper section describing SARS and its five dimensions.
2. Collect or write 5-10 example skill instruction texts representing different risk profiles.
3. Implement Python functions to score each SARS dimension based on instruction text features.
4. Combine dimension scores into an overall SARS score per skill.
5. Write a README explaining SARS and showing computed scores for each sample skill.

**Ships as:** A Python script and README demonstrating SARS computation on sample skills with explanations.

**Stretch goal:** Add simple visualization of SARS dimension scores per skill using matplotlib or similar.

### Intermediate — Implement Core SkillVetBench Evaluation Pipeline with SARS and CVSS
*Effort: 2 weekends (~20 hours)*

You reimplement the core SkillVetBench evaluation pipeline that computes SARS and CVSS v4.0 scores for a small set of open-source LLM agent skills. You compare SARS scores with CVSS vectors and produce a simple report highlighting instruction-layer risks that CVSS misses. You also benchmark your detection against a baseline static scanner (e.g., VirusTotal or ClawScan) using publicly available skill samples.

**Why it shows you understood the paper:** This project demonstrates you can operationalize the paper's combined multi-dimensional risk scoring approach and understand the complementary roles of SARS and CVSS in detecting instruction-layer threats.

**Grounded in:** Integration of SARS with full CVSS v4.0 vector scoring and a dual-view comparison against official marketplace safety reviews.

**Tech stack:** Python 3.11, requests, pandas

**Data:** A small curated set of ~50 open-source LLM agent skills collected from public repositories or marketplaces (simulated if necessary), plus baseline scanner results from VirusTotal or ClawScan APIs.

**Build it:**

1. Study the paper's description of SARS and CVSS v4.0 scoring integration.
2. Implement SARS scoring as in the beginner project.
3. Implement CVSS v4.0 vector scoring for the same skills, using the FIRST.org CVSS v4.0 specification.
4. Collect baseline scanner results for the skills via VirusTotal or ClawScan APIs.
5. Generate a report comparing SARS and CVSS scores and baseline flags, highlighting instruction-layer risks missed by CVSS and baselines.
6. Write a README documenting the pipeline, scoring methods, and comparison results.

**Verified links from the paper:**

- <https://github.com/supreme-lab/SkillVetBench> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python pipeline and report comparing SARS, CVSS, and baseline scanner results on a small skill set.

**Stretch goal:** Add confidence scoring calibration based on SARS and CVSS agreement to mimic SkillVetBench's confidence estimates.

### Advanced — Extend SkillVetBench with Ensemble LLM Judge Scoring for Robustness
*Effort: 3+ weeks*

You develop an extension to the SkillVetBench static analysis framework that implements ensemble scoring using multiple open-source LLM judge models to reduce variability and bias in detection rates. You integrate at least two different LLMs (e.g., OpenAI GPT-4 and Anthropic Claude if accessible, or open-source LLMs) to evaluate the same skill artifacts, aggregate their SARS and CVSS assessments, and analyze detection consistency. You evaluate the ensemble's performance on a labeled skill benchmark, comparing recall and precision against single-judge baselines.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to extend the core method to improve robustness against judge variability and biases.

**Grounded in:** Detection rates vary significantly by LLM judge model, motivating ensemble scoring for production deployments.

**Tech stack:** Python 3.11, OpenAI API or Hugging Face Transformers, pandas, scikit-learn

**Data:** The labeled 100-skill benchmark described in the paper (simulated or partially collected from public skill repositories), used to evaluate detection performance.

**Build it:**

1. Review the paper's analysis of LLM judge variability and ensemble scoring motivation.
2. Select and set up at least two different LLM judge models accessible via APIs or Hugging Face.
3. Implement code to run SARS and CVSS scoring pipelines independently with each judge.
4. Develop ensemble aggregation logic (e.g., majority vote, weighted average) for final risk scores.
5. Evaluate ensemble detection performance on the labeled skill benchmark, comparing recall and precision to single-judge results.
6. Document findings and discuss implications for robustness and future improvements.

**Verified links from the paper:**

- <https://github.com/supreme-lab/SkillVetBench> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://huggingface.co/spaces/supreme-lab> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python project implementing ensemble LLM judge scoring with evaluation results and analysis.

**Stretch goal:** Incorporate a sandboxed dynamic analysis component to complement static scoring, addressing runtime evasion detection.

_The paper's authors did not release their own code or datasets; intermediate and advanced projects require simulating or collecting representative skill instruction data and labeled benchmarks from public sources or by manual curation._
