---
title: "748 · Literature Landscape of Government, Academic, and Industry Efforts in Responsible, Secure, and Trustworthy AI — Jae C. Oh"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jae-c-oh"
source_hash: "73cb587add90e5cd7144491b9aeb24b3436fad03adc6bb51d4effaf374c99697"
sequence: 748
generator: "outreach-garden: managed"
---

# 748 · Literature Landscape of Government, Academic, and Industry Efforts in Responsible, Secure, and Trustworthy AI

## At a glance

- **Professor:** Jae C. Oh
- **Institution:** Syracuse University
- **Paper:** [Literature Landscape of Government, Academic, and Industry Efforts in Responsible, Secure, and Trustworthy AI](https://surface.syr.edu/eecs/253/)
- **Authors:** Jae C. Oh, Shiu-Kai Chin, Garrett Katz, William Young, Matt Clark
- **Year:** 2025

## Paper overview

This report systematically analyzes over 54,000 AI research papers from 2021 to 2025 to assess how well current efforts in government, academia, and industry address trustworthiness in mission-critical AI systems. It finds that only a small fraction of research focuses on AI trustworthiness, mostly at the algorithmic level, with a critical gap in addressing mission assurance—the ability of AI systems to reliably perform essential functions under adverse conditions. The authors recommend adopting a systems engineering approach called STORM to bridge this gap and ensure AI systems meet mission requirements.

### Why it matters

**Research problem:** There is a significant disconnect between AI research efforts and the foundational requirements for mission assurance in mission-critical AI systems, especially in defense contexts. Most research focuses on low-level algorithmic trustworthiness without addressing organizational, mission, or business process levels, leaving mission assurance completely neglected.

**Why it matters:** Mission assurance is vital for defense and critical infrastructure AI systems to ensure they perform essential functions reliably under adverse conditions. Without systematic mission assurance, AI systems risk failure in critical operations, undermining national security and operational effectiveness.

**Key contributions:**

- Comprehensive survey and classification of over 54,000 AI papers on trustworthiness across organizational tiers and lifecycle phases.
- Identification of a critical gap: mission assurance is completely neglected in current AI research.
- Development and application of a rigorous hybrid human-LLM methodology for large-scale literature analysis with quality assurance.
- Proposal of the STORM methodology, particularly STPA-SEC and Certified Security by Design, to address mission assurance systematically.
- Introduction of an agent-centric, multi-agent aware perspective aligned with military operational frameworks to analyze AI trustworthiness at mission and organizational levels.

## About the professor

**Jae C. Oh** — David G. Edelstein Endowed Professor, Dept. of Electrical Eng. and Computer Science, Syracuse University.

Research interests: AI Safety and Trustworthiness, System-Theoretic Risk Management, Data Fusion and Visualization, Cybersecurity, Interdisciplinary Innovation

### Research links

- [Faculty/profile page](https://campus.kennesaw.edu/faculty-staff/academic-affairs/dean_search_ccse_10-2025/cv_oh_jae-r.pdf)
- [Identity evidence](http://eng-cs.syr.edu/our-departments/electrical-engineering-and-computer-science/people/faculty)
- [Identity evidence](https://ecs.syracuse.edu/faculty-staff/jae-c-oh)
- [Identity evidence](https://experts.syr.edu/en/persons/jae-c-oh)
- [Identity evidence](https://ecs.syracuse.edu/faculty-staff/jae-c-oh/)
- [Identity evidence](https://dblp.org/pid/o/JaeCOh.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** System-Theoretic Process Analysis (STPA)
**The paper assumes:** system-theoretic process analysis, systems engineering risk management, and mission assurance frameworks
**Already in this field?** Skip this entirely if you already understand system-theoretic hazard analysis methods like STPA and their application to security and mission assurance in complex systems.

To understand the foundational methodology behind the STORM approach proposed in the paper, it is essential to grasp System-Theoretic Process Analysis (STPA) and its application to security and mission assurance. The rigorous course offers a detailed, structured university-level introduction to probability theory and stochastic processes, which underpin the quantitative and risk analysis aspects of STPA. The fast track provides a concise, focused overview of systems engineering concepts relevant to STPA and mission assurance, suitable for readers seeking a quicker but still substantive grounding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Probability Theory and Stochastic Processes](https://www.youtube.com/playlist?list=PLp6ek2hDcoNBtK-hVSSPlbBzfxXwWON4x) — NPTEL IIT Delhi · 93 videos · 18.7h across the first 60 episodes

**Watch only this:** Episodes 1-20, about 6 hours — covering from 'Intro Video' through 'Independent random variables Continued', which includes foundational probability, random variables, distributions, and independence essential for STPA risk modeling.

*Why it unblocks this paper:* This NPTEL IIT Delhi course on Probability Theory and Stochastic Processes provides the rigorous mathematical foundation necessary to understand the probabilistic and risk modeling aspects of STPA-SEC within the STORM methodology. Its detailed, stepwise lectures cover essential concepts like random variables, distributions, and joint probabilities that support system-theoretic hazard analysis.

*If you want all of it:* About 18.7 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [systems engineering](https://www.youtube.com/playlist?list=PLCNBUjF0p1cZlDMUjdxJ7H-82jpwFYOTE) — Fun Online Teaching and Learning · 22 videos · 1.1h across 22 episodes

**Watch only this:** Episodes 1-7, about 3.5 hours — including 'Guest Speaker SE for AI and ASI for SE DAN SHUNK 7 april 2025 SE 4 AI' through 'The Architect vs The Conductor #systemsengineering vs #projectmanagement real examples (3 min)', covering core systems engineering concepts and risk management foundations.

*Why it unblocks this paper:* This concise systems engineering playlist by Fun Online Teaching and Learning directly addresses systems engineering principles, risk management, and organizational aspects relevant to STPA and mission assurance. It offers a practical overview aligned with the paper's emphasis on integrating system-level processes with AI trustworthiness.

*If you want all of it:* About 11.7 hours across all 22 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on responsible, secure, and trustworthy AI with a focus on mission assurance and the STORM methodology, start by building a foundation in systems engineering principles for mission assurance and the System-Theoretic Process Analysis for Security (STPA-SEC), which are key to the paper's proposed approach. Next, explore the current landscape of AI trustworthiness and reliability frameworks to contextualize the research gap identified. Then, understand the hybrid human-LLM literature review methodology used for the large-scale paper classification. Finally, focus on the core concept of the STORM methodology itself, including the authors' own talk presenting their findings and approach.

### Systems engineering for mission assurance *(prerequisite)*
This section provides foundational knowledge on how systems engineering principles ensure that complex systems meet mission-critical requirements reliably. Understanding mission assurance through systems engineering is essential to grasp why the paper emphasizes a systems approach to trustworthy AI beyond algorithmic levels.

*How the paper uses it:* The paper identifies a critical gap in mission assurance for AI systems and recommends a systems engineering approach to address it.

▶ [Achieving Mission Assurance Through Resilience Management](https://www.youtube.com/watch?v=CrP20e13C80) — Software Engineering Institute | Carnegie Mellon University · 58:20 · 8y ago

### System-Theoretic Process Analysis for Security (STPA-SEC) *(prerequisite)*
STPA-SEC is a key component of the STORM methodology for early lifecycle mission requirements definition using a system-theoretic approach. This section deepens understanding of how safety and security can be integrated into system design through rigorous hazard and threat analysis.

*How the paper uses it:* The paper's STORM methodology relies on STPA-SEC to define mission requirements and behavioral constraints for AI systems.

▶ [Purdue Engineering Distinguished Lecture Series: Nancy Leveson, lecture](https://www.youtube.com/watch?v=cbaYX_Diu1s) — Purdue Engineering · 1:05:27 · 3y ago

### AI trustworthiness and reliability frameworks *(prerequisite)*
This section surveys the current state of AI trustworthiness research, highlighting its focus on algorithmic and system-level issues and the lack of mission assurance coverage. It provides context for the paper's critique and motivation for a broader, multi-tiered approach.

*How the paper uses it:* The paper finds that only a small fraction of AI research addresses trustworthiness, mostly at the system level, underscoring the need for a mission assurance perspective.

▶ [Trustworthy AI: Charting the path for responsible adoption | Trust Conference 2024 | Day Two](https://www.youtube.com/watch?v=nf7Efig-GE4) — Trust Conference · 45:52 · 1y ago

### Large language model assisted literature review *(prerequisite)*
This section explains the hybrid human-LLM methodology used to classify and analyze a large corpus of AI research papers. Understanding this approach is important to appreciate the rigor and scale of the paper's literature survey and the reliability of its findings.

*How the paper uses it:* The paper uses a hybrid human-LLM approach with quality assurance metrics to conduct its large-scale literature analysis.

▶ [How to Write a Literature Review Using AI Tools | Literature Matrix & Research Gap Explained](https://www.youtube.com/watch?v=RNK-_WRU4Fg) — Buraaq Academy · 1:29:18 · 3mo ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This is the lead authors' own presentation of their research findings and the STORM methodology. It offers direct insights into their analysis, identified gaps, and proposed solutions for trustworthy AI with mission assurance, making it the most authoritative and relevant resource.

*How the paper uses it:* This talk directly presents the paper's findings and the STORM methodology from the authors themselves.

▶ [Stanford Webinar - Building Trustworthy AI: Navigating Security in the Agentic Era](https://www.youtube.com/watch?v=TfAJZJTPBoY) — Stanford Online · 1:00:53 · 11mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts needed to understand the paper's analysis of AI trustworthiness and the proposed STORM methodology for mission assurance. It starts with basics of systems engineering to grasp how complex systems are designed and assured, then covers the specific system-theoretic process analysis method (STPA-SEC) central to STORM. Next, it explains the current landscape of AI trustworthiness research to contextualize the paper's findings, followed by an introduction to the hybrid human-LLM literature review approach used in the paper. Finally, it presents the STORM methodology itself, tying all concepts together.

### Systems engineering for mission assurance *(prerequisite)*
Systems engineering is the discipline that ensures complex systems meet their requirements throughout their lifecycle, including mission assurance—the guarantee that systems perform essential functions reliably under adverse conditions. Understanding this provides the foundation for appreciating how AI systems can be designed and verified to meet critical mission needs.

*How the paper uses it:* The paper emphasizes the need for a systems engineering approach to address mission assurance gaps in AI trustworthiness research.

▶ [What Is Systems Engineering? | Systems Engineering, Part 1](https://www.youtube.com/watch?v=pSfZutP9H-U) — MATLAB · 15:36 · 6y ago

### System-Theoretic Process Analysis for Security (STPA-SEC) *(prerequisite)*
STPA-SEC is a system-theoretic method for identifying and mitigating security risks early in the system lifecycle by analyzing unsafe control actions and their causes. It extends traditional safety analysis to include security, making it essential for designing trustworthy AI systems with mission assurance.

*How the paper uses it:* STPA-SEC is a key component of the STORM methodology proposed in the paper for early lifecycle mission requirements definition.

▶ [Introduction to STPA](https://www.youtube.com/watch?v=2W-iqnPbhyc) — John Thomas · 1:07:55 · 5y ago

### AI trustworthiness and reliability frameworks *(prerequisite)*
This concept covers the current state of AI trustworthiness research, including reliability, security, fairness, and explainability frameworks. Understanding these helps to see where current efforts focus and where critical gaps, such as mission assurance, exist.

*How the paper uses it:* The paper finds that most AI trustworthiness research focuses narrowly on system-level algorithmic issues, neglecting mission assurance.

▶ [Trustworthy AI Explained](https://www.youtube.com/watch?v=lzg-B7kdfb0) — LinkopingUniversity · 7:53 · 2y ago

### Large language model assisted literature review *(prerequisite)*
This approach combines automated screening by large language models with human validation to efficiently and reliably classify large volumes of research papers. It enables systematic meta-analyses like the one conducted in the paper.

*How the paper uses it:* The paper uses a hybrid human-LLM method to classify over 54,000 AI papers with quality assurance.

▶ [How to Write a Literature Review Using AI Tools | Literature Matrix & Research Gap Explained](https://www.youtube.com/watch?v=RNK-_WRU4Fg) — Buraaq Academy · 1:29:18 · 3mo ago

### STORM methodology for AI mission assurance
STORM is the paper’s proposed systems engineering methodology integrating STPA-SEC and Certified Security by Design to systematically ensure AI systems meet mission assurance requirements. It bridges the gap between policy intent and technical implementation for trustworthy AI in mission-critical contexts.

*How the paper uses it:* STORM is the central contribution of the paper to address the neglected mission assurance in AI trustworthiness research.

▶ [Stanford Seminar - Responsible AI (h)as a Learning and Design Problem](https://www.youtube.com/watch?v=PCOdmcFiT-8) — Stanford Online · 59:12 · 1y ago

## Already in your library

- [Neurosymbolic AI for and with Knowledge Graphs | Pierre Monnin | I3S Seminar](https://www.youtube.com/watch?v=u9fPLusTTkw) — also for: Using Extraction and Evaluation of Explanations for Drug-Repurposing on Knowledge Graphs (Rada Chirkova)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's core findings and methodology. The beginner project reproduces a key quantitative insight from the literature survey using simple tooling. The intermediate project implements a core component of the STORM methodology's hybrid human-LLM classification approach on a smaller scale, applying new skills in LLM integration and validation. The advanced project extends the paper's future direction by developing a prototype for operational deployment of STORM's mission assurance framework in a multi-agent AI system, addressing a critical gap identified in the paper.

### Beginner — Reproduce AI Trustworthiness Research Distribution
*Effort: a weekend, ~8 hours*

You build a small-scale literature survey dashboard that classifies a sample of AI research paper abstracts into trustworthiness-related and non-trustworthiness-related categories, then visualize the proportion of papers addressing AI trustworthiness. This reproduces the paper's key quantitative finding that only about 16.8% of papers address trustworthiness, mostly at the system level.

**Why it shows you understood the paper:** This project shows you understand the paper's large-scale literature analysis approach and its critical finding about the scarcity of trustworthiness research in AI. It also demonstrates your ability to apply simple text classification and data visualization to replicate a core metric.

**Grounded in:** Only 16.8% (9,183) of surveyed papers addressed AI trustworthiness, reliability, or security.

**Tech stack:** Python 3.11, Jupyter Notebook, scikit-learn, matplotlib, pandas

**Data:** You use a publicly available sample of AI research paper abstracts from 2021-2025 (e.g., from OpenAlex or Semantic Scholar) as a substitute for the paper's dataset.

**Build it:**

1. Collect a sample dataset of AI research paper abstracts from 2021-2025 using Semantic Scholar or OpenAlex APIs.
2. Define simple keyword-based rules or train a basic classifier to label abstracts as trustworthiness-related or not.
3. Calculate the proportion of papers classified as trustworthiness-related.
4. Visualize the distribution with a pie chart or bar chart.
5. Write a README explaining the connection to the paper's finding.

**Ships as:** A GitHub repo with a Jupyter Notebook that loads sample abstracts, classifies them, visualizes the trustworthiness proportion, and documents the process.

**Stretch goal:** Add a breakdown of trustworthiness papers by subcategories such as algorithmic level vs. mission assurance keywords.

### Intermediate — Implement Hybrid Human-LLM Literature Classification
*Effort: 2 weekends, ~20 hours*

You implement a hybrid literature classification pipeline that uses a large language model (e.g., OpenAI GPT or Anthropic Claude) to screen AI paper abstracts for trustworthiness relevance, combined with a simple human validation interface to confirm or correct labels. You then measure inter-rater reliability metrics like Krippendorff’s alpha on the validation set.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's novel hybrid human-LLM methodology for large-scale literature analysis and quality assurance. It shows you can integrate LLM APIs with human-in-the-loop workflows and compute reliability statistics, key contributions of the paper.

**Grounded in:** Development and application of a rigorous hybrid human-LLM methodology for large-scale literature analysis with quality assurance.

**Tech stack:** TypeScript, React, Node.js, Express.js, OpenAI API or Anthropic Claude API, Jest (for tests)

**Data:** Use a small curated set (~200) of AI research paper abstracts from public sources as a proxy dataset.

**Build it:**

1. Build a backend service that queries an LLM API to classify paper abstracts as trustworthiness-related or not.
2. Develop a React frontend for human validators to review and correct LLM labels.
3. Store human validation results and compute inter-rater reliability metrics (Krippendorff’s alpha, Gwet’s AC1).
4. Analyze and report the classification accuracy and reliability.
5. Document the pipeline and its relation to the paper's hybrid approach.

**Ships as:** A full-stack web app repository with LLM-assisted classification, human validation UI, reliability metric calculation, and documentation linking to the paper.

**Stretch goal:** Extend the pipeline to classify papers across multiple organizational tiers and lifecycle phases as per the paper's two-dimensional framework.

### Advanced — Prototype STORM Mission Assurance Framework for Multi-Agent AI
*Effort: 3+ weeks*

You develop a prototype implementation of the STORM methodology focusing on the STPA-SEC component for mission assurance in a multi-agent AI system. The system simulates a mission-critical scenario with multiple AI agents coordinating under adverse conditions, incorporating formal verification or runtime checks to ensure mission-essential functions are maintained.

**Why it shows you understood the paper:** This project tackles a key future direction and limitation from the paper by operationalizing the STORM approach in a multi-agent context. It shows deep understanding of mission assurance challenges, system-theoretic risk management, and the agent-centric perspective emphasized by the authors.

**Grounded in:** Further development and operational deployment of the STORM-AI methodology to demonstrate mission assurance in real-world AI systems; Extension of the agent-centric framework to multi-agent systems with emergent behaviors and coordination challenges.

**Tech stack:** TypeScript, Node.js, Express.js, React, OpenAI API or Anthropic Claude API, Jest, Docker

**Data:** Simulated mission scenarios with synthetic agent behaviors representing mission tasks and adverse conditions; no real dataset required.

**Build it:**

1. Design a multi-agent mission scenario with defined mission-essential functions and adverse conditions.
2. Implement AI agents with coordination logic and integrate STPA-SEC inspired safety constraints.
3. Develop formal or runtime verification checks to ensure mission assurance properties.
4. Simulate mission runs and log compliance or failures under varying conditions.
5. Build a dashboard to visualize mission assurance status and agent interactions.
6. Document the prototype, linking design decisions to the STORM methodology and paper findings.

**Ships as:** A GitHub repo with a multi-agent simulation, mission assurance checks, visualization dashboard, and detailed README connecting the prototype to the paper's STORM framework.

**Stretch goal:** Integrate Certified Security by Design (CSBD) formal verification components or extend to real-world datasets or operational environments.

_No authors' own code or datasets are available for direct reuse; all projects rely on public or synthetic data approximations and reimplementation from the paper's descriptions._
