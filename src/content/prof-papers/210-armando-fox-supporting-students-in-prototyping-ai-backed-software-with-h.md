---
title: "210 · Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs — Armando Fox"
date: 2026-08-04
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-armando-fox"
source_hash: "04df991873091a52b3cf1283c55b73a4887b382390f9d97088be7f4c5e42d785"
sequence: 210
generator: "outreach-garden: managed"
---

# 210 · Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs

## At a glance

- **Professor:** Armando Fox
- **Institution:** Univ. of California - Berkeley
- **Paper:** [Supporting Students in Prototyping AI-backed Software with Hosted Prompt Template APIs](https://doi.org/10.1145/3724363.3729109)
- **Authors:** Timothy J. Aveni, James Smith, Armando Fox, Björn Hartmann
- **Year:** 2025

## Paper overview

This paper presents reagent, an open-source web platform designed to help computer science students prototype software that integrates AI features powered by large language and text-to-image models. The platform simplifies the creation, testing, and integration of AI prompt templates into software projects, reducing technical and administrative barriers. The authors deployed reagent in a university UI design course, finding that it improved students' understanding and ability to build AI-powered applications.

### Why it matters

**Research problem:** Students face technical and logistical challenges when integrating AI models into software prototypes, including prompt engineering, API management, debugging, and cost control, which can hinder learning and experimentation.

**Why it matters:** As AI-powered software becomes more prevalent, it is crucial for CS students to learn how to thoughtfully design and implement AI features. Overcoming barriers to AI integration in education prepares students for future software engineering roles involving AI.

**Key contributions:**

- Design and implementation of reagent, a platform for AI prompt template authoring and API hosting tailored for educational use.
- Integration of reagent into a university UI design course to facilitate student experimentation with AI-backed software features.
- Empirical study of student usage and perceptions of reagent, demonstrating increased understanding and ease of AI integration.
- Insights into student conceptual models of AI, including benefits and risks of model robustness and prompt engineering.
- Recommendations for instructors on teaching AI integration and managing challenges such as debugging and cost control.

## About the professor

**Armando Fox** — Professor, Electrical Engineering & Computer Science, Univ. of California - Berkeley.

Research interests: digital learning, programming systems, software engineering

### Research links

- [Faculty/profile page](https://www.eecs.berkeley.edu/Faculty/Homepages/fox.html)
- [Professor website](http://www.armandofox.com/)
- [Resolved homepage](https://www.armandofox.com)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on reagent, start with foundational knowledge on prompt engineering and AI model API integration, which are critical for grasping how students create and embed AI features in software. Then explore collaborative software development tools and educational platforms for programming to contextualize the collaborative and course deployment aspects of reagent. Finally, focus on the core concept of the reagent platform itself through the authors' own talk, gaining direct insight into the platform's design, deployment, and empirical findings.

### AI model API integration *(prerequisite)*
Grasping how AI models are integrated into software via APIs is foundational to understanding the technical challenges reagent addresses, such as simplifying API calls, managing billing, and debugging AI model invocations.

*How the paper uses it:* Reagent provides a simple API for AI model calls, centralizing billing and usage visibility to reduce student overhead.

▶ [Building the Future of AI Integration: Mastering Model Context ...](https://www.youtube.com/watch?v=dxD9TOSVl7o) — AWS Events · 58:56

### Collaborative software development tools *(prerequisite)*
Collaborative tools and version control are important for understanding reagent’s support for collaborative prompt template authoring among students and instructors, enabling shared editing and iterative refinement.

*How the paper uses it:* Reagent enables collaborative prompt engineering, allowing students and instructors to co-author and debug prompts together.

▶ [Collaboration and Version Control with Git - CS50 Seminars ...](https://www.youtube.com/watch?v=S-gBbnBDUhA) — CS50 · 57:14

### Educational platforms for programming *(prerequisite)*
Knowledge of educational platforms for programming situates reagent within the broader context of digital learning tools and software engineering education, highlighting the importance of scalable and accessible AI integration in curricula.

*How the paper uses it:* Reagent was deployed in a university UI design course to facilitate student experimentation with AI-backed software features.

▶ [Learning Software Engineering During the Era of AI | Raymond Fu | TEDxCSTU](https://www.youtube.com/watch?v=w4rG5GY9IlA) — TEDx Talks · 12:27 · 1 year ago

### Reagent platform talk *(the paper's own talk)*
The authors' own talk about reagent provides direct, authoritative insight into the platform's design, implementation, and empirical study results, making it the most relevant and substantive resource for understanding the paper's core contributions.

*How the paper uses it:* This talk is by the authors and focuses specifically on reagent and its impact in education.

▶ [The AI Prototyping Revolution with Sachin Rekhi](https://www.youtube.com/watch?v=0o8Wr6Tqbeo) — NextView Ventures · 8 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides a beginner through foundational concepts needed to understand how the reagent platform supports AI-backed software prototyping in education. Starting with basics of AI model API integration and prompt engineering, it then covers collaborative software development tools and educational programming platforms to set context. Finally, it introduces the core concept of hosted prompt template APIs, which is central to reagent's design and functionality.

### AI model API integration *(prerequisite)*
Learn how AI models are accessed and integrated into software via APIs, which allow programs to send requests and receive AI-generated responses. This foundational knowledge helps understand how reagent simplifies AI model calls for students.

*How the paper uses it:* Reagent provides a simple API to call AI models, centralizing and abstracting complexity for student use.

▶ [How To Build an API with Python (LLM Integration, FastAPI, Ollama & More)](https://www.youtube.com/watch?v=cy6EAp4iNN4) — Tech With Tim · 1 year ago

### Prompt engineering in AI systems *(prerequisite)*
Understand how crafting effective prompts guides AI models to produce desired outputs. This skill is essential for students to create and refine AI features, which reagent supports through collaborative prompt template authoring.

*How the paper uses it:* Reagent empowers students to iteratively test and collaboratively engineer prompts, a key challenge in AI integration.

▶ [Prompt Engineering Full Course | From Beginner to Pro](https://www.youtube.com/watch?v=YhRfgYH_AoU) — The iScale · 59:16

### Collaborative software development tools *(prerequisite)*
Explore tools and practices that enable multiple developers to work together efficiently on software projects, including version control and real-time collaboration. This context helps appreciate reagent’s collaborative prompt editing features.

*How the paper uses it:* Reagent supports collaborative prompt template authoring among students and instructors to enhance learning and iteration.

▶ [Collaboration and Version Control with Git - CS50 Seminars ...](https://www.youtube.com/watch?v=S-gBbnBDUhA) — CS50 · 57:14

### Educational platforms for programming *(prerequisite)*
Gain insight into how programming education platforms are designed to facilitate learning and project development. This background situates reagent as a specialized platform tailored for AI integration in CS education.

*How the paper uses it:* Reagent is deployed as a web platform integrated into a university UI design course to support AI prototyping.

▶ [Learning Software Engineering During the Era of AI | Raymond Fu | TEDxCSTU](https://www.youtube.com/watch?v=w4rG5GY9IlA) — TEDx Talks · 12:27 · 1 year ago

### Hosted prompt template APIs
Learn about hosted prompt template APIs that manage prompt creation, testing, and AI model invocation centrally, simplifying AI integration. This concept is the core innovation of reagent, enabling easier and collaborative AI feature prototyping.

*How the paper uses it:* Reagent’s core method is a hosted platform for prompt template authoring and API hosting tailored for educational use.

▶ [codeLive: Custom Agent Actions with Prompt Templates and ...](https://www.youtube.com/watch?v=_0NOL36CcKc) — Salesforce Developers · 1:08:16

## Already in your library

- [Prompt Engineering Full Course](https://www.youtube.com/watch?v=2BpCk4d2Cc0) — also for: Improving LLM-Generated Educational Content: A Case Study on Prototyping, Prompt Engineering, and Evaluating a Tool for Generating Programming Problems for Data Science (Sam Lau)
