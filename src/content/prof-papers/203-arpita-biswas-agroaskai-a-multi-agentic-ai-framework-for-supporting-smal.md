---
title: "203 · AgroAskAI: A Multi-Agentic AI Framework for Supporting Smallholder Farmers’ Enquiries Globally — Arpita Biswas"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-arpita-biswas"
source_hash: "5db69498dd301b35f7cbebbd318ea50f55598d0abe687192d8f48a1830a1bf78"
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

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** multi-agent systems
**The paper assumes:** foundations of multi-agent systems, agent coordination, and autonomous agent architectures
**Already in this field?** Skip this entirely if you already understand the principles and design patterns of multi-agent AI systems and their coordination mechanisms.

This background focuses on multi-agent systems, which are central to understanding the design and coordination of specialized autonomous agents in AgroAskAI. The rigorous course option provides a deep, structured university-level introduction to multi-agent systems, ideal for readers seeking comprehensive theoretical and practical foundations. The fast track offers a concise, hands-on masterclass on building multi-agent AI systems with modern tools, suitable for readers who want a practical, intuition-driven overview in a fraction of the time.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Multi-Agent Systems](https://www.youtube.com/playlist?list=PLFW6lRTa1g81K7Ar6OT5YyK8p3sQ0B5bB) — IIT KANPUR-NPTEL · 56 videos · 31.3h across 56 episodes

**Watch only this:** Lectures 1 through 22, about 12 hours — covering fundamental concepts, agent architectures, coordination, communication, and decision-making in multi-agent systems, which directly relate to the paper's multi-agent framework.

*Why it unblocks this paper:* This IIT Kanpur-NPTEL course is a thorough university lecture series on multi-agent systems, covering foundational concepts and architectures essential to understanding the modular, role-specialized agent design and coordination in AgroAskAI.

*If you want all of it:* 31.3 hours across all 56 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Agentic AI Masterclass: Building Multi-Agent Systems with AutoGen, LangGraph & CrewAI](https://www.youtube.com/playlist?list=PLdKd-j64gDcDjZgJw6bECfdcTx0YrrSVF) — Analytics Vidhya · 29 videos · 5.7h across the first 28 episodes

**Watch only this:** First 12 episodes, about 2.5 hours — covering agentic AI basics, AutoGen architecture, building AI agents, message flow, and introductory LangGraph concepts, providing a practical foundation for understanding the paper's system design.

*Why it unblocks this paper:* This Analytics Vidhya Agentic AI Masterclass offers a concise, practical introduction to building multi-agent systems with modern frameworks like AutoGen and LangGraph, aligning well with the paper's focus on multi-agent AI frameworks and internal governance.

*If you want all of it:* About 5.7 hours across the first 28 episodes

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


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of AgroAskAI's multi-agent AI framework for climate adaptation in agriculture. The beginner project reproduces a core mechanism of query parsing and missing information detection. The intermediate project reimplements the multi-agent orchestration and reviewer agent concept on a smaller scale with real weather data and compares it to a simple baseline. The advanced project extends the framework to address a stated limitation by adding offline or low-connectivity support, transferring the multi-agent design to a new domain such as healthcare or energy decision support.

### Beginner — Query Parsing and Missing Info Detection Agent
*Effort: a weekend, ~8 hours*

You build a simplified Parse Agent that takes farmer queries as input, extracts key parameters like location and timestamp, and detects missing critical information needed for context-aware advice. The agent outputs prompts requesting missing data to improve response quality.

**Why it shows you understood the paper:** This project demonstrates your grasp of AgroAskAI's core mechanism for handling incomplete user queries, a key contribution that ensures localized and relevant recommendations.

**Grounded in:** The Parse Agent is always able to detect missing information related to location and timestamp when those information are relevant for the query.

**Tech stack:** Python 3.11, FastAPI, spaCy or similar NLP library

**Data:** Simulated farmer queries crafted to include complete and incomplete examples; no external dataset required.

**Build it:**

1. Implement a simple API endpoint that accepts text queries from farmers.
2. Use an NLP library to parse queries and extract entities like location and date/time.
3. Implement logic to detect if critical parameters are missing based on query type.
4. Return structured output including extracted info and prompts for missing data.
5. Write example queries and test the agent's detection accuracy.

**Ships as:** A GitHub repo with a FastAPI service implementing the Parse Agent, example queries, and README explaining the detection logic and its importance.

**Stretch goal:** Add multilingual support for a second language such as Swahili using translation APIs or multilingual NLP models.

### Intermediate — Multi-Agent AI Framework for Localized Agricultural Advice
*Effort: 2 weekends, ~20 hours*

You reimplement a simplified multi-agent system inspired by AgroAskAI, including a Query Parsing Agent, Weather Data Retrieval Agent, Solution Generation Agent, and Reviewer Agent. The system integrates real-time weather data from a public API and generates localized agricultural advice. You compare your system's advice quality against a baseline that uses only static weather data without internal review.

**Why it shows you understood the paper:** This project shows you can implement the paper's core multi-agent architecture and internal governance mechanism, demonstrating how specialized agents collaborate to produce accurate, context-aware recommendations.

**Grounded in:** Design of a multi-agent AI system with role-specialized agents for agricultural decision support under climate uncertainty. Implementation of an internal Reviewer Agent to evaluate and improve solution accuracy and relevance.

**Tech stack:** Python 3.11, FastAPI, asyncio, OpenWeatherMap API or similar public weather API, pytest

**Data:** Public weather data from OpenWeatherMap API as a substitute for the paper's external weather data sources; simulated farmer queries.

**Build it:**

1. Implement the Query Parsing Agent from the beginner project.
2. Implement a Weather Data Retrieval Agent that fetches real-time weather data for given locations.
3. Implement a Solution Generation Agent that produces simple agricultural advice based on parsed query and weather data.
4. Implement a Reviewer Agent that checks advice for consistency and flags hallucinations or irrelevant info.
5. Create an Agent Manager to orchestrate the agents in a chain-of-responsibility pattern.
6. Compare outputs against a baseline system without the Reviewer Agent and report qualitative differences.

**Verified links from the paper:**

- <https://github.com/ncantonjos04/AgroAskAI> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a modular multi-agent AI system, example queries, test cases, and a README documenting architecture, comparison results, and lessons learned.

**Stretch goal:** Add multilingual interaction support and logging of conversations for transparency.

### Advanced — Offline-Capable Multi-Agent AI Framework for Climate Adaptation
*Effort: 3-4 weeks*

You extend the multi-agent AI framework by implementing offline or low-connectivity capabilities, addressing the paper's limitation on deployment in rural areas with poor internet. This includes caching weather data, enabling shared-access models, and fallback logic for missing real-time data. Optionally, you transfer the framework to a new socially impactful domain such as healthcare decision support under uncertainty, adapting agents accordingly.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to adapt and extend complex multi-agent AI systems for real-world constraints and new domains.

**Grounded in:** Deployment challenges exist in low-connectivity environments, necessitating lightweight or shared-access solutions. Future directions include developing offline capabilities or shared-access models to overcome connectivity barriers.

**Tech stack:** Python 3.11, FastAPI, SQLite or local database for caching, OpenWeatherMap API or similar, Docker, React (optional frontend)

**Data:** Public weather data API for initial data; simulated offline scenarios by disabling network access; optionally healthcare-related public datasets for domain transfer.

**Build it:**

1. Design and implement a caching layer for weather and historical data to enable offline query handling.
2. Modify the multi-agent orchestration to detect connectivity and switch to cached or fallback data.
3. Implement shared-access logic allowing multiple users to share cached data in low-connectivity settings.
4. Optionally, adapt the agents to a new domain (e.g., healthcare) by changing query parsing and solution generation logic.
5. Test the system under simulated offline conditions and evaluate advice quality degradation.
6. Document the architecture, challenges, and potential improvements.

**Verified links from the paper:**

- <https://github.com/ncantonjos04/AgroAskAI> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with an offline-capable multi-agent AI framework, example offline usage scenarios, optional domain transfer code, and detailed README.

**Stretch goal:** Integrate participatory design feedback from potential users to improve usability and cultural appropriateness.

_The authors released no official code for AgroAskAI; the third-party GitHub repository is a related implementation by others and can be used as a reference baseline only. Public weather APIs are substitutes for the paper's external data sources._
