---
title: "966 · WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution — Tu Vu"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tu-vu"
source_hash: "7fb2082b23aabb5b4a3cc17f06d0b18fee9f3f26cd974745713b5f6cea4f4917"
sequence: 966
generator: "outreach-garden: managed"
---

# 966 · WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution

## At a glance

- **Professor:** Tu Vu
- **Institution:** Virginia Tech
- **Paper:** [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](https://arxiv.org/pdf/2608.27454)
- **Authors:** Liyan Tang, Cyrus Rashtchian, Chun-Sung Ferng, Andrew Tomkins, Da-Cheng Juan, Tu Vu
- **Year:** 2026

## Paper overview

WikiSkill is a framework that helps AI agents improve their skills over time by organizing their experiences into a persistent knowledge base (a wiki). This structured knowledge supports the continuous refinement and evolution of skills, enabling agents to perform better on complex tasks across various domains. The approach outperforms existing methods and allows skills to transfer effectively between different AI models.

### Why it matters

**Research problem:** How to systematically preserve, organize, and reuse agent experience to support long-term evolution of reusable and transferable procedural skills for AI agents, especially in the context of large language models (LLMs).

**Why it matters:** AI agents need domain-specific expertise encoded as skills to reliably perform complex real-world tasks. Current skill evolution methods scatter insights across optimization histories without a persistent knowledge representation, limiting systematic reuse and progressive improvement. A persistent knowledge base can enable better accumulation and refinement of agent experience, leading to more effective skill evolution and improved agent capabilities.

**Key contributions:**

- Introduced WikiSkill, a novel framework that co-evolves agent skills with a persistent knowledge base to systematically accumulate and refine agent experience.
- Demonstrated that WikiSkill consistently outperforms state-of-the-art skill-evolution methods across five diverse benchmarks and five inference models.
- Showed that skill evolution complements model scaling, with larger models benefiting more from evolved skills and smaller models with skills outperforming larger models without skills.
- Established that evolved skills transfer effectively across different models and model families, sometimes outperforming self-evolved skills.
- Provided ablation studies confirming the critical role of persistent knowledge accumulation in effective skill evolution.

## About the professor

**Tu Vu** — Assistant Professor, Computer Science, Virginia Tech.

Research interests: develop effective and efficient methods for advancing and democratizing artificial intelligence in the era of large language models (LLMs)

### Research links

- [Faculty/profile page](https://tuvllms.github.io)
- [Professor website](https://tuvllms.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=tOevwEEAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Reinforcement Learning
**The paper assumes:** foundations of reinforcement learning, policy iteration, skill acquisition in AI agents
**Already in this field?** Skip this entirely if you already understand the basics of reinforcement learning and how agents learn and improve skills through iterative interaction and feedback.

This background focuses on reinforcement learning (RL), which is essential to understanding how WikiSkill accumulates and evolves AI agent skills through experience and feedback loops. The rigorous course option offers a deep, structured dive into RL algorithms and theory, suitable for readers seeking comprehensive mastery. The fast track provides a concise, intuition-driven animated series that quickly builds core RL concepts with visual examples, ideal for readers needing a practical grasp without extensive time commitment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1 through 10 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods, Off-Policy Actor Critic, Q-Learning, Offline RL, Reward Learning, RL for LLMs, RL for LLM Reasoning), about 10.8 hours — this subset covers core RL algorithms and their application to language models, matching the paper's focus on skill evolution in LLM agents.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning by Stanford Online is a top-tier university course that covers foundational and advanced RL topics, including policy gradients, actor-critic methods, Q-learning, and RL for LLMs, directly relevant to the layered skill evolution and validation mechanisms in WikiSkill.

*If you want all of it:* All 19 lectures, about 20.6 hours

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement Learning Explained – Animated Examples](https://www.youtube.com/playlist?list=PLgcKMlJueAM5OK104-hP_wBpOjZCHGfTf) — Reinforcement Learning Explained–Animated Learning · 9 videos · 0.2h across 9 episodes

**Watch only this:** Episodes 1 through 6 (A Car Learns to Steer Around a Bull, AI Learns to Find Treasure, How AI Learns from Delayed Rewards, Two-Armed Bandit, AI Learns the Best Cannon Angle, Lunar Lander), about 24 minutes — these cover fundamental RL ideas and agent learning dynamics relevant to understanding skill evolution.

*Why it unblocks this paper:* Reinforcement Learning Explained – Animated Examples offers a highly accessible, visual introduction to RL concepts with concrete examples and animations, helping quickly build intuition about agent learning, reward, and policy improvement, which underpin the WikiSkill framework.

*If you want all of it:* All 9 episodes, about 36 minutes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the WikiSkill paper, start with foundational knowledge about large language model (LLM) agents and procedural skill learning in AI, which provide the context for how AI agents operate and learn skills. Next, explore knowledge base construction for AI and skill transfer across models to grasp how persistent structured knowledge supports skill accumulation and how evolved skills generalize across different AI models. Finally, focus on the core concept of the WikiSkill framework itself, prioritizing the authors' own talks and detailed paper presentations for the most authoritative and specific insights.

### Large language model agents *(prerequisite)*
Understanding the architecture and behavior of large language model agents is essential as WikiSkill operates within this context. This foundational knowledge covers how LLM agents function, their capabilities, and challenges, setting the stage for appreciating the need for skill evolution frameworks like WikiSkill.

*How the paper uses it:* WikiSkill is designed to evolve procedural skills specifically for AI agents based on large language models.

▶ [Stanford CS329A Self-Improving AI Agents | Part 1 | Course Overview](https://www.youtube.com/watch?v=6YnLB0XbTnI) — Stanford Online · 1:09:42 · 2mo ago

### Procedural skill learning in AI *(prerequisite)*
Procedural skill learning is the core mechanism by which AI agents acquire and refine task-specific knowledge. Understanding this concept provides insight into how skills are encoded, updated, and leveraged by agents, which is central to WikiSkill's approach to skill evolution.

*How the paper uses it:* WikiSkill focuses on evolving procedural skills through persistent knowledge accumulation.

▶ [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](https://www.youtube.com/watch?v=FByu2XWpyxg) — Knut Jägersberg · 8:30 · 1mo ago

### Knowledge base construction for AI *(prerequisite)*
Constructing and maintaining a persistent, structured knowledge base is critical for accumulating and organizing agent experience. This section covers methods and challenges in building AI knowledge bases that support continual learning and skill refinement.

*How the paper uses it:* WikiSkill's Wiki Layer maintains a persistent knowledge base that accumulates and structures agent experience to support skill evolution.

▶ [Build your own AI Knowledge Base - LLM Wiki Explained](https://www.youtube.com/watch?v=it8v6GNxBDI) — mh_shortly · 9:07 · 6mo ago

### Skill transfer across models *(prerequisite)*
Skill transfer explores how procedural knowledge evolved in one AI model can improve performance in others. Understanding this concept is important for appreciating WikiSkill's demonstrated ability to transfer evolved skills across different models and model families.

*How the paper uses it:* WikiSkill shows that evolved skills transfer effectively across models, sometimes outperforming self-evolved skills.

▶ [Don't Build Agents, Build Skills Instead – Barry Zhang & Mahesh Murag, Anthropic](https://www.youtube.com/watch?v=CEvIs9y1uog) — AI Engineer · 16:22 · 10mo ago

### WikiSkill paper talk *(paper-talk search result; attribution unverified)*
This section provides direct access to the authors' own presentations and detailed discussions of the WikiSkill framework, offering the most authoritative and specific explanations of the methodology, experiments, and results.

*How the paper uses it:* These talks are given by the paper authors or closely related researchers, directly explaining the WikiSkill framework and its contributions.

▶ [WikiSkill: Turning Agent Experience into Better Skills | Paper Club](https://www.youtube.com/watch?v=VaIZxUo-zmc) — Latent Space TV (see @LatentSpacePod for Pod) · 49:09 · 4w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the WikiSkill paper, start by grasping the basics of large language model (LLM) agents, which provide the AI context for skill evolution. Next, learn about procedural skill learning in AI to appreciate how AI agents encode and refine skills. Then, explore knowledge base construction for AI to see how persistent structured knowledge supports skill accumulation. Finally, focus on the core concept of skill evolution with persistent knowledge, which is the central innovation of WikiSkill.

### Large language model agents *(prerequisite)*
Large language model agents are AI systems that use powerful language models to perform tasks autonomously by interacting with environments or users. Understanding how these agents work provides the foundation for appreciating how WikiSkill enhances their capabilities through skill evolution.

*How the paper uses it:* WikiSkill operates in the context of LLM agents that execute tasks and evolve skills over time.

▶ [LLM Agents - Explained!](https://www.youtube.com/watch?v=5CLNoPiMbUc) — CodeEmporium · 14:13 · 1y ago

### Procedural skill learning in AI *(prerequisite)*
Procedural skill learning involves teaching AI agents step-by-step methods or procedures to accomplish tasks reliably. This foundational concept explains how AI agents can encode, refine, and improve skills, which is essential to understanding how WikiSkill evolves these skills.

*How the paper uses it:* WikiSkill focuses on evolving procedural skills for AI agents to improve task performance.

▶ [WikiSkill: Compiling Agent Experience into Persistent Knowledge for Skill Evolution](https://www.youtube.com/watch?v=FByu2XWpyxg) — Knut Jägersberg · 8:30 · 1mo ago

### Knowledge base construction for AI *(prerequisite)*
Building a knowledge base for AI means creating a structured, persistent repository of information that an AI can access and update. This concept is key to understanding how WikiSkill organizes agent experiences into a persistent wiki to support continuous skill refinement.

*How the paper uses it:* WikiSkill maintains a persistent, structured wiki layer that accumulates agent experience for skill evolution.

▶ [Build your own AI Knowledge Base - LLM Wiki Explained](https://www.youtube.com/watch?v=it8v6GNxBDI) — mh_shortly · 9:07 · 6mo ago

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford Webinar - Agentic AI: A Progression of Language ...](https://www.youtube.com/watch?v=kJLiOGle3Lw) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)
- [Stanford CS25: Transformers United V6 I From Language ...](https://www.youtube.com/watch?v=NDdc39KYqDU) — also for: Beyond Final Answers: CRYSTAL Benchmark for Transparent Multimodal Reasoning Evaluation (Sou-Young Jin)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Stanford CS230 | Autumn 2025 | Lecture 8: Agents, Prompts, and RAG](https://www.youtube.com/watch?v=k1njvbBmfsw) — also for: Graph of Attacks: Improved Black-Box and Interpretable Jailbreaks for LLMs (Mohammad Mahmoody)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [AI Agents, Clearly Explained](https://www.youtube.com/watch?v=FwOTs4UxQS4) — also for: TopoAgent: An Agentic Framework for Automated Topology Learning in Medical Imaging (Erin W. Chambers)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)
- [Every Large Language Model Explained in 17 Minutes!](https://www.youtube.com/watch?v=9UpLmjlDgPg) — also for: On the Opportunities of Large Language Models for Programming Process Data (John Edwards)
- [Stanford CS229: Machine Learning Lecture 1 - Andrew Ng (Autumn 2018)](https://www.youtube.com/watch?v=jGwO_UgTS7I) — also for: In the Arms of a Robot: Designing Autonomous Hugging Robots with Intra-Hug Gestures (Hasti Seifi)
- [AI Explained - Knowledge Graphs | Turning Raw Data Into Useful Information](https://www.youtube.com/watch?v=Q5izD6Xlb8o) — also for: ProbRes: Probabilistic Jump Diffusion for Open-World Egocentric Activity Recognition (Sathyanarayanan N. Aakur)
- [Don't learn AI Agents without Learning these Fundamentals](https://www.youtube.com/watch?v=ZaPbP9DwBOE) — also for: Generalizability of Large Language Model-Based Agents: A Comprehensive Survey (Jian Pei)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of WikiSkill's approach to skill evolution with persistent knowledge. The beginner project recreates the core layered workspace concept in a minimal prototype. The intermediate project implements the WikiSkill iterative loop on a small procedural task dataset, comparing skill evolution with and without a persistent wiki. The advanced project extends WikiSkill by exploring automated pruning of the persistent wiki to address scalability, directly tackling a stated limitation of the paper.

### Beginner — WikiSkill Workspace Layer Prototype
*Effort: a weekend, ~8 hours*

You build a minimal prototype that simulates the three-layer workspace of WikiSkill: Raw Layer, Wiki Layer, and Skills Layer. The prototype will allow storing immutable execution traces, accumulating structured knowledge entries, and maintaining a simple skill set that can be updated manually. It will include a basic interface or CLI to add traces, update the wiki, and apply skills.

**Why it shows you understood the paper:** This project shows you grasp the fundamental architectural design of WikiSkill's workspace layering and the role each layer plays in accumulating and evolving agent experience.

**Grounded in:** WikiSkill structures the agent workspace into three layers: (1) Raw Layer storing immutable execution traces, (2) Wiki Layer maintaining a persistent, structured knowledge base that compounds across iterations, and (3) Skills Layer containing evolving procedural skills.

**Tech stack:** Python 3.11, FastAPI (optional for API interface), SQLite or JSON files for storage

**Data:** Simulated execution traces and skill definitions created manually to demonstrate layering.

**Build it:**

1. Design data structures for Raw Layer (immutable traces), Wiki Layer (structured knowledge entries), and Skills Layer (procedural skills).
2. Implement functions to add new execution traces to the Raw Layer and prevent modification.
3. Implement functions to consolidate traces into the Wiki Layer as structured knowledge entries.
4. Implement a simple Skills Layer that holds procedural skills and can be updated manually.
5. Create a basic CLI or web interface to add traces, update wiki entries, and list current skills.
6. Document the layering design and usage instructions in the README.

**Ships as:** A GitHub repo with code implementing the three workspace layers, a README explaining the design and how to use the prototype, and example data showing the layering in action.

**Stretch goal:** Add a simple gating mechanism that validates skill updates before applying them to the Skills Layer.

### Intermediate — WikiSkill Iterative Skill Evolution on Procedural Tasks
*Effort: 2 weekends, ~20 hours*

You implement the core WikiSkill iterative loop: an Inference Agent executes tasks using current skills, a Wiki Maintainer consolidates execution traces into a persistent wiki, a Skill Proposer suggests skill updates based on the wiki and traces, and a gating mechanism validates skill proposals. You apply this to a small public procedural task dataset (e.g., cooking recipes or simple programming tasks) and compare performance with and without the persistent wiki.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement WikiSkill's main method from the paper's description, showing how persistent knowledge accumulation improves skill evolution and agent performance.

**Grounded in:** The system runs an iterative loop where an Inference Agent executes tasks using current skills, a Wiki Maintainer consolidates execution traces into the wiki, a Skill Proposer uses the wiki and traces to propose skill updates, and a gating mechanism validates and either accepts or rolls back skill changes.

**Tech stack:** Python 3.11, FastAPI or Flask, SQLite or JSON for persistent wiki storage, Jupyter Notebook for evaluation and visualization

**Data:** Use a small public procedural task dataset such as cooking recipes from Recipe1M (subset) or a synthetic dataset of step-by-step tasks; no authors' code or data released for WikiSkill.

**Build it:**

1. Select or create a small procedural task dataset with stepwise execution traces.
2. Implement the Inference Agent that executes tasks using current procedural skills.
3. Implement the Wiki Maintainer that consolidates execution traces into a persistent wiki knowledge base.
4. Implement the Skill Proposer that generates candidate skill updates based on the wiki and traces.
5. Implement a gating mechanism that validates skill proposals by measuring performance improvement on a validation set.
6. Run iterative skill evolution experiments comparing with and without the persistent wiki layer.
7. Analyze and visualize performance metrics similar to the paper's benchmarks.

**Ships as:** A GitHub repo with code implementing the WikiSkill iterative loop, scripts to run experiments on the chosen dataset, and a Jupyter Notebook reporting performance comparisons and insights.

**Stretch goal:** Add cross-model skill transfer simulation by evolving skills with one model and applying them to another simulated agent.

### Advanced — Automated Pruning for Scalable WikiSkill Knowledge Accumulation
*Effort: 3+ weeks*

You extend the WikiSkill framework by implementing an automated pruning or summarization mechanism for the persistent wiki knowledge base to maintain scalability over long evolution runs. You evaluate how pruning affects skill evolution quality and wiki size on a procedural task dataset, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of WikiSkill, demonstrating deep comprehension of the framework and contributing a practical extension that could enable longer-term skill evolution.

**Grounded in:** The Wiki Layer accumulates knowledge without an automated pruning mechanism, which may be necessary for longer evolution runs.

**Tech stack:** Python 3.11, FastAPI or Flask, SQLite or JSON for wiki storage, NLP libraries (e.g., spaCy, transformers) for summarization or clustering

**Data:** Use the same procedural task dataset as in the intermediate project or a synthetic long-horizon task dataset to simulate extended evolution runs.

**Build it:**

1. Reimplement or reuse the WikiSkill iterative loop from the intermediate project.
2. Design and implement an automated pruning mechanism for the wiki, such as knowledge entry clustering, summarization, or relevance scoring.
3. Integrate pruning into the wiki maintenance step to remove or merge less useful knowledge entries periodically.
4. Run long-horizon skill evolution experiments comparing pruning vs. no pruning on wiki size and skill performance.
5. Analyze trade-offs between wiki compactness and skill evolution effectiveness.
6. Document the pruning approach, experimental setup, results, and insights in the README.

**Ships as:** A GitHub repo with extended WikiSkill code including pruning, experimental scripts, and a detailed report notebook or markdown documenting the pruning method and its impact.

**Stretch goal:** Explore more flexible acceptance criteria for skill proposals beyond strict validation improvement, as suggested in the paper's future directions.
