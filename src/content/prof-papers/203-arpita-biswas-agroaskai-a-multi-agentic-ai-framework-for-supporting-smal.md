---
title: "203 · AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers’ Enquiries Globally — Arpita Biswas"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-arpita-biswas"
source_hash: "2cbac6ea5e384b390426ad714da926fc88fb804b0e39370afd2f53ce2414fb3f"
sequence: 203
generator: "outreach-garden: managed"
---

# 203 · AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers’ Enquiries Globally

## At a glance

- **Professor:** Arpita Biswas
- **Institution:** Rutgers University
- **Paper:** [AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers’ Enquiries Globally](https://arxiv.org/abs/2512.14910)
- **Authors:** Nadine Angela Cantonjos, Arpita Biswas
- **Year:** 2025

## Paper overview

AgroAskAI is a multi-agent artificial intelligence system designed to help smallholder farmers worldwide make better decisions about adapting to climate change. It uses specialized autonomous agents to understand farmers' questions, gather real-time weather and historical data, and provide clear, actionable advice in multiple languages. The system includes internal checks to ensure accurate and locally relevant recommendations, helping farmers manage risks like droughts, pests, and soil degradation.

### Why it matters

**Research problem:** Smallholder farmers in vulnerable rural areas face complex, dynamic challenges from climate change, including unpredictable weather and resource constraints. Existing AI tools often lack adaptability, local context, and reliable governance, limiting their effectiveness in providing actionable climate adaptation advice.

**Why it matters:** Agriculture is a critical livelihood for many rural communities, but climate-related risks cause significant crop failures and economic losses globally. Effective, scalable, and context-aware decision support is essential to help farmers adapt sustainably and maintain food security.

**Key contributions:**

- Design of a multi-agent AI system with role-specialized agents for agricultural decision support under climate uncertainty.
- Integration of real-time and historical weather data with external APIs for localized, adaptive advice.
- Implementation of an internal Reviewer Agent to evaluate and improve solution accuracy and relevance.
- Support for multilingual user interactions to reach non-English-speaking farmers.
- Empirical evaluation comparing AgroAskAI with ChatGPT and CROPWAT, demonstrating superior actionable and context-aware recommendations.

## About the professor

**Arpita Biswas** — Assistant Professor, Department of Computer Science, Rutgers University.

Research interests: Algorithmic Game Theory, Optimization, and Machine Learning

### Research links

- [Faculty/profile page](https://sites.google.com/view/arpitabiswas)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the AgroAskAI paper, start with foundational knowledge on multi-agent systems and AI governance to grasp the architectural and reliability principles underlying the framework. Next, study the chain of responsibility design pattern to appreciate the orchestration of specialized agents and internal governance. Finally, focus on the authors' own talk about their multi-agent AI framework to see the direct application and innovations in agricultural decision support under climate uncertainty.

### Multi-agent systems in AI lecture *(prerequisite)*
Multi-agent systems form the architectural backbone of AgroAskAI, enabling coordination among specialized autonomous agents. Understanding these systems provides insight into how distributed AI agents collaborate to solve complex, dynamic problems like climate adaptation for farmers.

*How the paper uses it:* AgroAskAI uses a modular multi-agent architecture with specialized agents.

▶ [Agentic AI MOOC | UC Berkeley CS294-196 F25 | Multi-Agent ...](https://www.youtube.com/watch?v=ntjOxjZMaac) — Berkeley RDI · 58:59

### AI governance and hallucination mitigation lecture *(prerequisite)*
Reliable AI outputs require governance mechanisms to detect and reduce hallucinations, ensuring trustworthy and context-aware recommendations. This lecture covers the challenges and strategies for mitigating hallucinations in language models, directly relevant to AgroAskAI's internal Reviewer Agent.

*How the paper uses it:* The system includes internal governance to reduce hallucinations and ensure reliable outputs.

▶ [Santosh Vempala - Why Language Models Hallucinate ...](https://www.youtube.com/watch?v=btToTJw0KFE) — FAR․AI · 5:08

### Chain of responsibility pattern seminar *(prerequisite)*
The chain of responsibility design pattern orchestrates how requests are passed and handled among agents, a key structural element in AgroAskAI's multi-agent coordination and governance. Understanding this pattern clarifies how the system manages complex query processing and internal checks.

*How the paper uses it:* AgroAskAI uses a chain-of-responsibility approach to coordinate autonomous agents.

▶ [The Chain of Responsibility Pattern Explained & Implemented | Behavioral Design Patterns | Geekific](https://www.youtube.com/watch?v=FafNcoBvVQo) — Geekific · 5 years ago

### AgroAskAI multi-agent AI talk *(the paper's own talk)*
This talk by the authors or directly related presenters provides first-hand insights into the design, implementation, and evaluation of AgroAskAI. It highlights the novel multi-agent framework, multilingual support, and internal governance mechanisms tailored for smallholder farmers' climate adaptation.

*How the paper uses it:* Direct insight from authors on their novel multi-agent AI framework.

▶ [Agentic AI & The Future | Keynote Speaker Shawn Kanungo](https://www.youtube.com/watch?v=pwWx6ePaqyA) — Shawn Kanungo · 3 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand AgroAskAI, starting with the basics of multi-agent AI systems, then explaining the chain of responsibility design pattern used to coordinate agents, followed by AI governance techniques to ensure trustworthy outputs, and concluding with the core AgroAskAI multi-agent framework itself. Each step builds intuition with clear, concise videos that connect directly to the paper's innovations in supporting smallholder farmers with reliable, context-aware AI.

### Multi-agent systems in AI lecture *(prerequisite)*
Multi-agent systems involve multiple autonomous AI agents working together to solve complex tasks by coordinating their actions. Understanding this concept is essential to grasp how AgroAskAI uses specialized agents to handle different parts of the farmer's query and data retrieval.

*How the paper uses it:* AgroAskAI is built on a modular multi-agent architecture where specialized agents collaborate to provide adaptive agricultural advice.

▶ [Multi Agent Systems Explained: How AI Agents & LLMs Work Together](https://www.youtube.com/watch?v=sWH0T4Zez6I) — IBM Technology · 7:57 · 7 months ago

### Chain of responsibility pattern seminar *(prerequisite)*
The chain of responsibility is a software design pattern where a request is passed along a chain of handlers until one can process it. This pattern helps organize complex workflows by delegating tasks to the appropriate component, improving modularity and governance.

*How the paper uses it:* AgroAskAI uses a chain-of-responsibility approach to orchestrate its autonomous agents and ensure reliable, stepwise processing of farmer queries.

▶ [The Chain of Responsibility Pattern Explained & Implemented | Behavioral Design Patterns | Geekific](https://www.youtube.com/watch?v=FafNcoBvVQo) — Geekific · 5 years ago

### AI governance and hallucination mitigation lecture *(prerequisite)*
AI hallucinations are when models generate plausible but incorrect information. Governance mechanisms and internal review agents help detect and reduce these errors, ensuring AI outputs are trustworthy and contextually accurate.

*How the paper uses it:* AgroAskAI includes a dedicated Reviewer Agent that evaluates and improves solution accuracy to reduce hallucinations and provide locally grounded advice.

▶ [What Is LLM HAllucination And How to Reduce It?](https://www.youtube.com/watch?v=r0q1n8BJ0QI) — Krish Naik · 12:00

### AgroAskAI multi-agent AI talk *(the paper's own talk)*
This talk provides direct insight into AgroAskAI’s novel multi-agent AI framework designed to support smallholder farmers by integrating real-time data, multilingual support, and internal governance for reliable climate adaptation advice.

*How the paper uses it:* The video offers an overview of AgroAskAI’s architecture and how its specialized agents collaborate to deliver actionable, localized agricultural recommendations.

▶ [Agentic AI & The Future | Keynote Speaker Shawn Kanungo](https://www.youtube.com/watch?v=pwWx6ePaqyA) — Shawn Kanungo · 3 months ago
