---
title: "922 · Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction — Jiawei Han"
date: 2026-07-12
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-hanj"
source_hash: "2ae1037d97174c2372117508ac0a58cfd45ab4731afefb8731f8beb02f1ef2a6"
sequence: 922
generator: "outreach-garden: managed"
---

# 922 · Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction

## At a glance

- **Professor:** Jiawei Han
- **Institution:** University of Illinois Urbana
- **Paper:** [Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction](https://arxiv.org/abs/2605.05242)
- **Authors:** Zhuofeng Li, Haoxiang Zhang, Cong Wei, Pan Lu, Ping Nie, Yi Lu, Yuyang Bai, Shangbin Feng, Hangxiao Zhu, Ming Zhong, Yuyu Zhang, Jianwen Xie, Yejin Choi, James Zou, Jiawei Han, Wenhu Chen, Jimmy Lin, Dongfu Jiang, Yu Zhang
- **Year:** 2026

## Paper overview

This paper proposes a new way for AI agents to search large text collections by directly interacting with raw documents using command-line tools like grep, instead of relying on traditional retrieval systems that return a fixed set of top documents. This direct interaction allows agents to perform more precise and flexible searches, improving their ability to find and verify relevant information for complex multi-step tasks. The approach outperforms existing retrieval methods on various benchmarks, including multi-hop question answering and information retrieval ranking.

### Why it matters

**Research problem:** Traditional retrieval systems for language agents compress corpus access into a fixed top-k retrieval step, limiting the agent's ability to enforce exact lexical constraints, combine sparse clues, check local context, and iteratively refine hypotheses. This retrieval interface bottleneck restricts agentic search capabilities, especially for complex multi-step reasoning tasks.

**Why it matters:** As language agents become more capable and are tasked with complex, multi-step searches requiring precise evidence gathering and verification, the limitations of conventional retrieval interfaces hinder their performance. Improving the retrieval interface is crucial to unlocking the full potential of agentic search systems.

**Key contributions:**

- Formalization of Direct Corpus Interaction (DCI) as a new retrieval paradigm for agentic search.
- Systematic evaluation of DCI across diverse tasks including document ranking, multi-hop question answering, and end-to-end agentic search.
- Introduction of the concept of retrieval interface resolution to explain DCI's effectiveness in enabling fine-grained evidence localization and verification.
- Development of two DCI agent implementations (DCI-Agent-Lite and DCI-Agent-CC) demonstrating the paradigm's flexibility and performance.
- Comprehensive ablation studies and trajectory analyses revealing that DCI's gains stem from compositional search and local evidence use rather than just higher recall.

## About the professor

**Jiawei Han** — Michael Aiken Chair, Siebel School of Computing and Data Science, University of Illinois Urbana.

Research interests: Artificial Intelligence, Bioinformatics and Computational Biology, Data and Information Systems

### Research links

- [Professor website](http://hanj.cs.illinois.edu/)
- [Lab website](http://dm1.cs.uiuc.edu/)
- [Google Scholar](http://scholar.google.com/citations?user=Kv9AbjMAAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Information Retrieval
**The paper assumes:** foundations of information retrieval, retrieval models, ranking evaluation metrics, and search system architectures
**Already in this field?** Skip this entirely if you already understand core information retrieval principles and how search engines process and rank documents.

This background focuses on foundational concepts in Information Retrieval (IR) crucial for understanding the motivations and technical contributions of the paper on Direct Corpus Interaction (DCI). The rigorous course option offers a deep, structured university-level treatment of IR fundamentals, while the fast track provides a concise, clear introduction to core IR topics for quicker comprehension. Readers should choose based on their available time and desired depth: the fast track covers essential IR principles efficiently, whereas the course delivers comprehensive coverage for thorough understanding.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Introduction to Information Retrieval](https://www.youtube.com/playlist?list=PLyqSpQzTE6M_QawmzfKcVkvte5ijTUozS) — NPTEL-NOC IITM · 72 videos · 26.3h across the first 60 episodes

**Watch only this:** Episodes 1 to 24, about 11 hours — covering Introduction to Information Retrieval, Text Processing, Inverted Index, Index Compression, and Vector Space Models, which provide the essential IR concepts relevant to the paper's approach.

*Why it unblocks this paper:* This NPTEL-NOC IITM course is a comprehensive university-level introduction to Information Retrieval, covering indexing, inverted indexes, compression, vector space models, and query processing, all foundational to understanding why the paper proposes bypassing embedding-based retrievers in favor of direct corpus interaction.

*If you want all of it:* About 26.3 hours across the first 60 episodes.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Week 3: Information Retrieval](https://www.youtube.com/playlist?list=PLaZQkZp6WhWwoDuD6pQCmgVyDbUWl_ZUi) — From Languages to Information · 14 videos · 2.3h across 14 episodes

**Watch only this:** Episodes 1 to 8, about 1.2 hours — including Introduction to Information Retrieval, The Inverted Index, Query Processing, Boolean Retrieval, and Ranked Retrieval basics, sufficient for grasping the key IR concepts behind the paper's motivation.

*Why it unblocks this paper:* This concise playlist from 'From Languages to Information' covers core IR topics such as inverted indexes, query processing, Boolean and ranked retrieval, TF-IDF weighting, and evaluation metrics in a clear and accessible manner, providing a quick yet solid grounding in IR principles relevant to the paper.

*If you want all of it:* About 2.3 hours across all 14 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search via Direct Corpus Interaction,' start by grounding yourself in the foundational concepts of information retrieval interfaces, agentic search systems, and command-line text processing tools. These prerequisites provide the necessary background on retrieval design, the broader context of agentic search, and the technical tools leveraged by the paper's approach. Finally, focus on the paper's core concept with the authors' own talk presenting their novel Direct Corpus Interaction paradigm, which is central to the paper's contributions.

### Information Retrieval Interfaces *(prerequisite)*
Understanding the design and challenges of information retrieval interfaces is crucial to grasp how the paper's Direct Corpus Interaction (DCI) approach innovates beyond traditional retrieval methods. The selected talk is a keynote from a reputable computing association, providing a rigorous and comprehensive academic perspective on user models and interface design in IR systems.

*How the paper uses it:* The paper critiques traditional retrieval interfaces and proposes DCI as a higher-resolution alternative.

▶ [The Case for Scrutable, Personal, Long-Term User Models for Information Retrieval](https://www.youtube.com/watch?v=0EogxHm1jZI) — Association for Computing Machinery (ACM) · 1:08:31 · 5y ago

### Agentic Search Systems *(prerequisite)*
Agentic search systems form the broader context in which DCI operates, involving AI agents performing multi-step reasoning and search tasks. The chosen video offers a detailed, research-focused explanation of agentic search architectures, suitable for advanced learners seeking to understand the environment and challenges that motivate the paper's approach.

*How the paper uses it:* DCI is designed to enhance agentic search by enabling direct, compositional corpus interaction.

▶ [Framework-less Agentic Search](https://www.youtube.com/watch?v=_VAPVcdow-Q) — Chroma · 6:53 · 11mo ago

### Command-line Text Processing Tools *(prerequisite)*
Since DCI leverages command-line tools like grep for direct interaction with raw corpora, a solid understanding of these tools and their capabilities is essential. The selected lecture from an academic course covers command-line basics with a focus on text processing and statistics, providing the depth and rigor appropriate for advanced readers.

*How the paper uses it:* The paper's DCI method uses command-line tools to enable fine-grained, compositional search and verification.

▶ [Part 1 of Command Lines: A lecture on basic commands for text processing and statistics](https://www.youtube.com/watch?v=4nE5bjlnHdE) — Prof. Weimao Ke · 53:21 · 3y ago

### Paper Author Talk *(paper-talk search result; attribution unverified)*
The authors' own presentation of their work is the most direct and authoritative source to understand the novel retrieval paradigm of Direct Corpus Interaction. This talk succinctly covers the motivation, methodology, and key results, providing insights into the paper's contributions and experimental findings.

*How the paper uses it:* This is the authors' own talk on their 2026 paper introducing DCI for agentic search.

▶ [\[PoD\] Beyond Semantic Similarity: Rethinking Retrieval for Agentic Search](https://www.youtube.com/watch?v=fQktIhm5zfg) — HYU NLP Lab. · 10:33 · 2w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts necessary to understand the paper's novel retrieval paradigm. It starts with basics of information retrieval interfaces to grasp how search systems work, then covers agentic search systems to understand the broader AI context. Next, it explains command-line text processing tools, which are key to the paper's direct corpus interaction method. Finally, it presents the core concept of Direct Corpus Interaction retrieval, enabling fine-grained, compositional search beyond traditional methods.

### Information Retrieval Interfaces *(prerequisite)*
Information retrieval interfaces define how users or agents interact with search systems to find relevant documents or data. Understanding these interfaces helps clarify the limitations of traditional retrieval methods and why new designs are needed.

*How the paper uses it:* The paper identifies retrieval interface bottlenecks as a key limitation in agentic search, motivating the need for Direct Corpus Interaction.

▶ [Lect-15: User Interfaces (UIs) for Search System](https://www.youtube.com/watch?v=uOu1IuBLPrI) — Vikram Singh · 35:02 · 5y ago

### Agentic Search Systems *(prerequisite)*
Agentic search systems are AI agents designed to perform complex, multi-step searches by reasoning and interacting with data sources. Learning about these systems provides context for why enhanced retrieval methods like DCI are valuable.

*How the paper uses it:* The paper situates its contribution within agentic search, aiming to improve how agents search and verify information.

▶ [Stop Using AI Wrong — Agentic AI vs RAG Explained](https://www.youtube.com/watch?v=PmpFmclctuM) — Nana Janashia · 21:25 · 3mo ago

### Command-line Text Processing Tools *(prerequisite)*
Command-line tools like grep, awk, and sed allow efficient, precise text searching and manipulation directly on raw documents. These tools form the technical foundation for the paper's direct corpus interaction approach.

*How the paper uses it:* The paper leverages command-line tools to enable agents to interact directly with raw corpora for fine-grained search and verification.

▶ [7 Essential Command Line Text Tools](https://www.youtube.com/watch?v=tD60UhZc7zU) — DevOps Toolbox · 14:01 · 2y ago

### Direct Corpus Interaction Retrieval
Direct Corpus Interaction is a new retrieval paradigm where agents bypass traditional embedding-based retrieval and instead use command-line tools to search raw text directly. This allows more flexible, compositional, and precise evidence gathering.

*How the paper uses it:* This is the core method proposed by the paper to overcome limitations of conventional retrieval in agentic search.

▶ [GrepSeek: Training Search Agents for Direct Corpus Interaction](https://www.youtube.com/watch?v=4VMka08UHpU) — Research Paper Review · 6:58 · 4mo ago

## Already in your library

- [Babak Heydari: Beyond Model Alignment: Adaptive Interaction Architectures for H-AI Complementarity](https://www.youtube.com/watch?v=nNLoriZfLSI) — also for: HAMoBE: Hierarchical and Adaptive Mixture of Biometric Experts for Video-based Person ReID (Feng Liu)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 7 - Agentic LLMs](https://www.youtube.com/watch?v=h-7S6HNq0Vg) — also for: Understanding the LLM-ification of CHI: Unpacking the Impact of LLMs at CHI through a Systematic Literature Review (Ziang Xiao)
- [Andrej Karpathy: From Vibe Coding to Agentic Engineering w/ Stephanie Zhan](https://www.youtube.com/watch?v=96jN2OCOfLs) — also for: Agentic Real2Sim: Physics-based World Modeling with Vision-Language Agents (Changxi Zheng)
- [Complete Agentic AI Course - AI Agents, RAG, Embeddings, Architectures, Framework, VectorDB & Memory](https://www.youtube.com/watch?v=Pn95eOlw5qk) — also for: Agentic Data Environments (Eugene Wu)
- [Agent AI System Design Explained in 27 Minutes](https://www.youtube.com/watch?v=mwN75EiGfCE) — also for: CHIA: An open-source framework for principled, agentic AI-driven hardware/software co-design research (Borivoje Nikolic)
- [Everything You Need to Start Text Processing in UNIX and Linux!](https://www.youtube.com/watch?v=vDQsn7rE0vQ) — also for: The AWK Programming Language (Brian W. Kernighan)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to understand and apply the Direct Corpus Interaction (DCI) retrieval paradigm introduced in the paper. Starting with a simple command-line text search tool to grasp the core idea, you then implement a minimal DCI agent on a public dataset to reproduce key performance gains. Finally, you extend the approach to address scalability limitations by experimenting with runtime context management or hybrid retrieval strategies.

### Beginner — Command-Line Text Search Tool for Agentic Retrieval
*Effort: a weekend, ~8 hours*

You build a simple command-line tool that uses grep and shell commands to search a small text corpus for exact lexical matches and local context snippets. This tool will allow iterative, compositional queries to simulate the fine-grained search capability of DCI.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core mechanism behind DCI—direct interaction with raw text corpora using command-line tools instead of fixed top-k retrieval. A professor would see you understand how flexible, compositional search enables precise evidence localization.

**Grounded in:** Formalization of Direct Corpus Interaction (DCI) as a new retrieval paradigm for agentic search.

**Tech stack:** Shell (bash), grep, Python 3.11

**Data:** A small subset of Wikipedia articles or any local text files to simulate a raw corpus.

**Build it:**

1. Prepare a small text corpus of plain text documents (e.g., Wikipedia article dumps or local text files).
2. Implement a shell script or Python wrapper that runs grep commands to search for exact keywords and extracts surrounding context lines.
3. Add support for composing multiple grep commands to simulate multi-step queries (e.g., chaining grep with pipes).
4. Create a simple CLI interface to input queries and display matched snippets with context.
5. Test the tool with example multi-hop queries requiring compositional search.

**Ships as:** A GitHub repository with the CLI tool code, example corpus, usage instructions, and a README explaining how this simulates DCI's direct corpus interaction.

**Stretch goal:** Add a feature to cache intermediate grep results to simulate runtime context management.

### Intermediate — Minimal DCI Agent on Multi-Hop QA Dataset
*Effort: 2 weekends, ~20 hours*

You implement a minimal version of a DCI agent that uses command-line tools to interact directly with a raw text corpus to answer multi-hop questions. You compare its accuracy against a simple baseline retriever (e.g., BM25) on a public multi-hop QA dataset.

**Why it shows you understood the paper:** This project shows you can operationalize the paper's core method—bypassing embedding-based retrieval to perform compositional, fine-grained search and verification. A professor would see you understand the retrieval interface resolution concept and can reproduce key performance improvements.

**Grounded in:** Systematic evaluation of DCI across diverse tasks including multi-hop question answering; DCI-Agent-Lite showing competitive performance.

**Tech stack:** Python 3.11, Shell (bash), grep, scikit-learn (for baseline BM25)

**Data:** Use a public multi-hop QA dataset such as HotpotQA as a substitute for the paper's multi-hop QA benchmarks.

**Build it:**

1. Download and preprocess the HotpotQA dataset, extracting the raw text corpus of supporting documents.
2. Implement a minimal DCI agent that issues grep and shell commands to locate evidence snippets relevant to multi-hop questions.
3. Implement a simple BM25 retriever baseline using scikit-learn or an existing library.
4. Evaluate both approaches on a subset of HotpotQA questions, measuring exact match or F1 score.
5. Analyze and report the accuracy and efficiency trade-offs between the DCI agent and baseline.

**Verified links from the paper:**

- <https://github.com/DCI-Agent/DCI-Agent-Lite> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the minimal DCI agent code, baseline retriever, evaluation scripts, and a README reporting comparative results and insights.

**Stretch goal:** Incorporate simple runtime context management to selectively retain or forget intermediate evidence snippets.

### Advanced — Scaling DCI with Runtime Context Management and Hybrid Retrieval
*Effort: 3+ weeks*

You extend the minimal DCI agent to address the paper's limitation of cost and latency rising sharply with corpus size. You implement and experiment with runtime context management policies and a hybrid retrieval approach combining DCI with a lightweight semantic retriever to improve scalability on a larger corpus.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of DCI's challenges and potential solutions. A professor would recognize your ability to innovate beyond the paper by improving efficiency and scalability in agentic search.

**Grounded in:** DCI's cost and latency increase sharply with corpus size; future directions include improved runtime context management and hybrid approaches.

**Tech stack:** Python 3.11, Shell (bash), grep, FAISS or ElasticSearch (for lightweight semantic retrieval), Docker (optional for environment management)

**Data:** A larger public text corpus such as a Wikipedia dump or a subset of BEIR datasets to simulate scaling challenges.

**Build it:**

1. Set up a larger raw text corpus suitable for testing scalability (e.g., Wikipedia subset).
2. Extend the minimal DCI agent to implement runtime context management policies that selectively retain or compress intermediate evidence.
3. Integrate a lightweight semantic retriever (e.g., FAISS or ElasticSearch) to pre-filter documents before applying DCI.
4. Evaluate the hybrid system's accuracy, cost (e.g., number of grep calls), and latency compared to pure DCI and pure retrieval baselines.
5. Analyze trade-offs and document findings on scalability improvements and remaining challenges.

**Verified links from the paper:**

- <https://github.com/DCI-Agent/DCI-Agent-Lite> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with the extended DCI agent code, hybrid retrieval integration, evaluation scripts, and a detailed README discussing scalability experiments and results.

**Stretch goal:** Experiment with richer command-line tools or scripting (e.g., awk, sed) to enhance compositional search capabilities.

_The authors did not release their own code for the full DCI-Agent-CC implementation; the intermediate and advanced projects rely on reimplementing core methods from the paper and using the DCI-Agent-Lite third-party code as a reference baseline._
