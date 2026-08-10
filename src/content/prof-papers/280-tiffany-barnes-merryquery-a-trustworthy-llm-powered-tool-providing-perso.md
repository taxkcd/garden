---
title: "280 · MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students — Tiffany Barnes"
date: 2026-08-07
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tiffany-barnes"
source_hash: "9138220656358126e2ebfd0b5bfd0be1ecacc10fda1c2a4588ff12288a198107"
sequence: 280
generator: "outreach-garden: managed"
---

# 280 · MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students

## At a glance

- **Professor:** Tiffany Barnes
- **Institution:** North Carolina State University
- **Paper:** [MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students](https://ojs.aaai.org/index.php/AAAI/article/download/35372/37527)
- **Authors:** Benyamin Tabarsi, Aditya Basarkar, Xukun Liu, Dongkuan (DK) Xu, Tiffany Barnes
- **Year:** 2025

## Paper overview

This paper presents MerryQuery, an AI-powered educational assistant that uses large language models combined with retrieval-augmented generation (RAG) to provide personalized, trustworthy, and course-specific support to both students and educators. It addresses challenges such as academic misconduct, misinformation, and overreliance on AI by offering features like source citation, guided dialogues, multimodal data processing, and instructor controls.

### Why it matters

**Research problem:** Large Language Models (LLMs) have potential in education but face challenges including academic misconduct, misinformation, lack of contextual relevance, and overreliance by students. Existing AI educational tools often lack functionalities critical for trustworthy and pedagogically aligned learning environments.

**Why it matters:** Without proper safeguards and educationally appropriate features, LLMs risk undermining learning integrity and trust, limiting their adoption in educational settings. Educators and students need tools that support learning while preventing misuse and misinformation.

**Key contributions:**

- Development of MerryQuery, an LLM-powered educational assistant tailored for trustworthy and personalized support.
- Integration of Retrieval-Augmented Generation (RAG) to ensure responses are contextually relevant and cite course materials.
- Support for multimodal data processing including text, images, and tables from complex PDFs.
- Instructor features such as chat history monitoring, usage statistics, and granularity control (practice vs. review modes).
- A guided learning dialogue design that scaffolds student problem-solving without providing direct answers in practice mode.

## About the professor

**Tiffany Barnes** — Distinguished Professor, Computer Science, North Carolina State University.

Research interests: artificial intelligence in education, educational data mining, learning analytics, serious games for education, health, and energy, computer science education, broadening participation in computing education and research

### Research links

- [Faculty/profile page](https://www.csc.ncsu.edu/people/tmbarnes)
- [Professor website](https://eliza.csc.ncsu.edu/)
- [Resolved homepage](https://eliza.csc.ncsu.edu/index.html)
- [ORCID](https://orcid.org/0000-0002-6500-9976)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Retrieval-Augmented Generation in NLP
**The paper assumes:** retrieval-augmented generation, large language models, and neural information retrieval
**Already in this field?** Skip this entirely if you already understand how retrieval-augmented generation integrates external document retrieval with large language model generation.

This background focuses on Retrieval-Augmented Generation (RAG), the core technique used by MerryQuery to integrate external knowledge with large language models for trustworthy, context-aware educational assistance. The rigorous course option offers a comprehensive, detailed tutorial series ideal for deep understanding and practical implementation, while the fast track provides a concise, well-structured introduction suitable for quickly grasping the key concepts and architecture of RAG.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Retrieval Augmented Generation Explained](https://www.youtube.com/playlist?list=PLS2hxDii0-fgd1xjNS3skgRVK_n4paNhi) — IT Hawkly · 4 videos · 1.4h across 4 episodes

**Watch only this:** Episodes 2-4, about 1 hour — focusing on vector databases, what RAG is, and inferencing and reasoning, which together explain the essential concepts needed to grasp how RAG enhances LLMs.

*Why it unblocks this paper:* This short series by IT Hawkly offers a clear, concise explanation of RAG fundamentals, vector databases, and inferencing, ideal for quickly understanding the conceptual framework behind RAG without deep implementation details.

*If you want all of it:* 1.4 hours across 4 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the MerryQuery paper, start with foundational knowledge on multimodal data processing and conversational memory mechanisms, which underpin the system's ability to handle complex educational materials and maintain coherent dialogues. Next, explore the role and challenges of large language models in education to contextualize MerryQuery's educational focus. Then, study retrieval-augmented generation (RAG), the core technical method enabling MerryQuery's trustworthy, grounded responses. Finally, watch the authors' own talk on MerryQuery for direct insights into the system design and pedagogical goals.

### Multimodal Data Processing *(prerequisite)*
Multimodal data processing is essential for MerryQuery's ability to handle complex educational content including text, images, and tables extracted from PDFs. Understanding the challenges and methods in multimodal representation and integration provides foundational knowledge for how MerryQuery processes diverse course materials.

*How the paper uses it:* MerryQuery supports multimodal data including documents with embedded images and tables, processed via a multi-step OCR pipeline.

▶ [Lecture 1.1 - Introduction (CMU Multimodal Machine Learning ...](https://www.youtube.com/watch?v=DPkwjgaRvyI) — LP Morency · 1:17:17

### Conversational Memory Mechanisms *(prerequisite)*
Maintaining coherent conversation context despite stateless API calls is critical for MerryQuery's guided dialogues and personalized support. Learning about memory architectures and principles in conversational AI helps understand how MerryQuery preserves dialogue coherence.

*How the paper uses it:* MerryQuery implements a custom memory mechanism to maintain coherent conversations despite stateless OpenAI API calls.

▶ [Architecting Agent Memory: Principles, Patterns, and Best ...](https://www.youtube.com/watch?v=W2HVdB4Jbjs) — AI Engineer · 17:37

### Retrieval-Augmented Generation
Retrieval-Augmented Generation (RAG) is the core method enabling MerryQuery to ground its responses in relevant course materials and provide source citations. A detailed academic lecture on RAG explains the retrieval and generation integration critical to MerryQuery's trustworthy output.

*How the paper uses it:* MerryQuery leverages a RAG model to generate responses with relevant course material citations.

▶ [CMU Advanced NLP Fall 2024 (10): Retrieval and RAG](https://www.youtube.com/watch?v=KfQaYk4k9eM) — Graham Neubig · 1:17:54

### MerryQuery authors talk *(the paper's own talk)*
The authors' own talk provides direct insight into MerryQuery's system design, pedagogical goals, and how it addresses challenges in AI-powered education. This talk offers the most precise and authoritative understanding of the paper's contributions and future directions.

*How the paper uses it:* This talk is by the MerryQuery authors presenting their AI-powered assistant designed to support students and educators with trustworthy, personalized help.

▶ [AI in Education: A Trustworthy LLM for Educators & Students ...](https://www.youtube.com/watch?v=Whpicc5xawQ) — Root Access · 24:03

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand MerryQuery, an AI-powered educational assistant. Start with the basics of Large Language Models (LLMs) in education to grasp their role and challenges, then explore multimodal data processing essential for handling diverse educational materials. Next, learn about conversational memory mechanisms to understand how MerryQuery maintains dialogue coherence. After that, study Retrieval-Augmented Generation (RAG), the core method enabling MerryQuery's trustworthy, context-grounded responses. Finally, watch a talk by the MerryQuery authors for direct insight into their system design and goals.

### Large Language Models in Education *(prerequisite)*
Learn what Large Language Models (LLMs) are and how they are applied in educational settings, including their benefits and challenges such as misinformation and overreliance. This foundational understanding sets the stage for why tools like MerryQuery are needed.

*How the paper uses it:* MerryQuery addresses challenges of using LLMs in education by providing trustworthy, pedagogically aligned support.

▶ [Large Language Models Explained! How LLMs Work for ...](https://www.youtube.com/watch?v=RhPKBmeYNuI) — The Data and AI Guy · 19:15

### Multimodal Data Processing *(prerequisite)*
Understand how AI systems process and integrate multiple data types like text, images, and tables, which is crucial for handling complex educational materials. This knowledge helps appreciate MerryQuery’s ability to work with rich course content.

*How the paper uses it:* MerryQuery supports multimodal data including text, images, and tables from complex PDFs.

▶ [Learn How to Build Multimodal Search and RAG](https://www.youtube.com/watch?v=n5yiUW0wSzA) — DeepLearningAI · 23:15

### Conversational Memory Mechanisms *(prerequisite)*
Explore how conversational AI maintains context and coherence across interactions despite stateless API calls, enabling meaningful, continuous dialogues. This is key to understanding how MerryQuery keeps conversations relevant and coherent.

*How the paper uses it:* MerryQuery implements a custom memory mechanism to maintain coherent conversations.

▶ [Architecting Agent Memory: Principles, Patterns, and Best ...](https://www.youtube.com/watch?v=W2HVdB4Jbjs) — AI Engineer · 17:37

### Retrieval-Augmented Generation
Learn about Retrieval-Augmented Generation (RAG), a technique that grounds AI responses in external documents to ensure accuracy and provide source citations. This method is central to MerryQuery’s trustworthy and course-specific answers.

*How the paper uses it:* MerryQuery uses RAG to ground responses in course materials and provide source citations.

▶ [RAG Explained For Beginners](https://www.youtube.com/watch?v=_HQ2H_0Ayy0) — KodeKloud · 11 months ago

### MerryQuery authors talk *(the paper's own talk)*
Hear directly from the creators of MerryQuery about their motivations, design choices, and how their system supports educators and students. This talk ties together the concepts learned and shows their practical application.

*How the paper uses it:* Provides direct insight from the authors on MerryQuery’s system design and goals.

▶ [AI in Education: A Trustworthy LLM for Educators & Students ...](https://www.youtube.com/watch?v=Whpicc5xawQ) — Root Access · 24:03

## Already in your library

- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [How Large Language Models Work](https://www.youtube.com/watch?v=5sLYAQS9sWQ) — also for: Natural-Language to SysMLv2 Translation via Conformance-Driven Iterative Refinement (Levent Burak Kara)
- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [How do Multimodal AI models work? Simple explanation](https://www.youtube.com/watch?v=WkoytlA3MoQ) — also for: The Goofus & Gallant Story Corpus for Practical Value Alignment (Brent E. Harrison)
- [Lecture 5 – Multimodal Fusion (MIT How to AI Almost Anything, Spring 2025)](https://www.youtube.com/watch?v=Hsv1mOIZ1Ag) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of MerryQuery's core innovations and challenges. The beginner project replicates a key mechanism—custom conversational memory—to show grasp of dialogue coherence. The intermediate project reimplements the core Retrieval-Augmented Generation (RAG) approach on a smaller educational dataset, illustrating grounding and citation. The advanced project extends MerryQuery by exploring automated grading integration, addressing a stated future direction and demonstrating research potential.

### Beginner — Custom Conversational Memory for Coherent Educational Chat
*Effort: a weekend, ~8 hours*

You build a simplified chat interface that uses a custom memory mechanism to maintain conversation context across stateless LLM API calls. The system stores and retrieves relevant previous user queries and assistant responses to generate coherent follow-up answers, mimicking MerryQuery's approach to dialogue coherence.

**Why it shows you understood the paper:** This project shows you understand the importance and implementation of a custom memory mechanism to maintain context in stateless LLM interactions, a key contribution of MerryQuery to support guided learning dialogues.

**Grounded in:** MerryQuery implements a custom memory mechanism to maintain coherent conversations.

**Tech stack:** TypeScript, React.js, Node.js, OpenAI GPT-4o API

**Data:** Simulated short educational dialogues created by you to test memory coherence.

**Build it:**

1. Set up a React frontend with a chat interface for user input and assistant responses.
2. Implement a Node.js backend that calls the OpenAI GPT-4o API for generating responses.
3. Design a custom memory store that saves past user and assistant messages with timestamps.
4. Modify the prompt sent to GPT-4o to include relevant past conversation snippets from memory.
5. Test the system with sample educational queries to verify context-aware responses.
6. Document the memory mechanism design and example conversations in the README.

**Ships as:** A GitHub repo with a working chat app demonstrating conversation coherence via custom memory, and a README explaining the memory design and its role in educational dialogue.

**Stretch goal:** Add a feature to control response granularity (practice vs. review modes) to simulate instructor controls.

### Intermediate — RAG-Based Educational QA with Source Citation
*Effort: 2 weekends, ~20 hours*

You reimplement the core Retrieval-Augmented Generation (RAG) method described in MerryQuery to answer educational questions grounded in course materials. Your system retrieves relevant text passages from a small public educational dataset and uses GPT-4o to generate answers with explicit source citations.

**Why it shows you understood the paper:** This project demonstrates your ability to implement the paper's core method—RAG for trustworthy, context-grounded responses—and to evaluate its effectiveness compared to a baseline LLM without retrieval.

**Grounded in:** Development of MerryQuery, an LLM-powered educational assistant tailored for trustworthy and personalized support. Integration of Retrieval-Augmented Generation (RAG) to ensure responses are contextually relevant and cite course materials.

**Tech stack:** Python 3.11, LangChain, OpenAI GPT-4o API, MongoDB, FAISS or similar vector store

**Data:** Use a publicly available small educational text dataset (e.g., a subset of Wikipedia articles on computer science topics) as a stand-in for course materials.

**Build it:**

1. Set up a Python environment with LangChain and OpenAI API access.
2. Index the educational text dataset into a vector store (e.g., FAISS) for retrieval.
3. Implement a RAG pipeline that retrieves relevant passages given a user query.
4. Generate answers using GPT-4o conditioned on retrieved passages, including source citations.
5. Implement a baseline that uses GPT-4o without retrieval for comparison.
6. Evaluate and document differences in answer accuracy and citation quality.

**Ships as:** A GitHub repo with code to run the RAG pipeline and baseline, example queries with generated answers and citations, and an evaluation report in the README.

**Stretch goal:** Extend the pipeline to handle simple multimodal inputs such as images with captions or tables extracted from PDFs.

### Advanced — Automated Grading Integration for MerryQuery
*Effort: 3-4 weeks*

You design and implement an extension to the MerryQuery concept by integrating an automated grading module that evaluates student answers to practice questions. This module uses LLM-based rubric scoring or similarity metrics to provide formative feedback, addressing one of the paper's stated future directions.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of MerryQuery, demonstrating your ability to extend the system with pedagogically meaningful AI features that support educators and students beyond Q&A.

**Grounded in:** Additional functionalities like automated grading, reinforcement learning from human feedback, and personalized learning strategy generation are still under development.

**Tech stack:** TypeScript, React.js, Node.js, Python 3.11, OpenAI GPT-4o API, FastAPI or Express.js for backend

**Data:** Simulated student answers to educational questions created by you, or publicly available short-answer datasets (e.g., SQuAD or similar) adapted for grading.

**Build it:**

1. Design a grading rubric schema for practice questions aligned with educational goals.
2. Implement a backend grading service that uses GPT-4o to score or provide feedback on student answers.
3. Integrate the grading service with a MerryQuery-like chat interface that supports practice mode.
4. Allow instructors to view grading results and control feedback granularity.
5. Test the system with sample questions and student answers, iterating on grading accuracy.
6. Document the architecture, grading approach, and limitations in the README.

**Ships as:** A GitHub repo with a full-stack app demonstrating automated grading integrated into an educational chat assistant, with sample data and usage instructions.

**Stretch goal:** Incorporate reinforcement learning from human feedback (RLHF) to improve grading accuracy over time.

_No authors' own code or datasets are available for MerryQuery; the intermediate project requires substituting with a public educational text dataset and reimplementing RAG from the paper's description._
