---
title: "425 · COMIC: Agentic Sketch Comedy Generation — Brian Curless"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-brian-curless"
source_hash: "50aa9124a9214d78b6da5f95859456e487dddddb2b8b4acb5d40b14ecf9f4f06"
sequence: 425
generator: "outreach-garden: managed"
---

# 425 · COMIC: Agentic Sketch Comedy Generation

## At a glance

- **Professor:** Brian Curless
- **Institution:** University of Washington
- **Paper:** [COMIC: Agentic Sketch Comedy Generation](https://arxiv.org/pdf/2603.11048)
- **Authors:** Susung Hong, Brian Curless, Ira Kemelmacher-Shlizerman, Steve Seitz
- **Year:** 2026

## Paper overview

COMIC is an AI system that automatically generates short, funny sketch comedy videos by using multiple AI agents that write scripts, critique humor, and produce videos. It mimics how human comedy studios work by iteratively improving scripts and videos based on feedback from AI critics aligned with real viewer preferences.

### Why it matters

**Research problem:** Automatically generating long-form, narratively coherent, visually consistent, and genuinely funny sketch comedy videos is a challenging open-ended creative task that requires conceptualizing comedic scenarios, producing funny scripts, and generating high-quality videos.

**Why it matters:** Humor is subjective and complex, making it difficult for AI to reliably produce content that makes audiences laugh. Existing video generation models produce short clips lacking narrative coherence and comedic quality. Automating sketch comedy generation could advance AI creativity and video production.

**Key contributions:**

- First fully automated agentic system for generating comedic sketch videos.
- Introduction of LLM-based humor critics aligned with real viewer preferences via analysis of YouTube comedy engagement.
- Multi-island evolutionary script generation with critic-guided iterative refinement.
- Script-conditioned video rendering with iterative critic feedback and tournament selection.
- Test-time scaling mechanism trading compute for improved video quality without retraining.

## About the professor

**Brian Curless** — Professor, Allen School of Computer Science & Engineering, University of Washington.

### Research links

- [Faculty/profile page](http://homes.cs.washington.edu/~curless)
- [Resolved homepage](http://www.cs.washington.edu/homes/curless)
- [Lab website](https://realitylab.uw.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** multi-agent reinforcement learning
**The paper assumes:** multi-agent reinforcement learning, evolutionary computation, agent-based modeling
**Already in this field?** Skip this entirely if you already understand multi-agent reinforcement learning frameworks and evolutionary algorithms applied to AI agents.

This background playlist selection supports understanding the multi-agent reinforcement learning framework central to the COMIC paper's multi-agent iterative competition and refinement approach. The rigorous course option provides a deep, foundational university-level treatment of reinforcement learning with a dedicated lecture on multi-agent game playing, ideal for readers seeking comprehensive mastery. The fast track offers a concise, focused explainer series on deep multi-agent reinforcement learning fundamentals, suitable for readers who want a quick but solid conceptual grasp without investing many hours.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS234 I Reinforcement Learning I Spring 2024 I Emma Brunskill](https://www.youtube.com/playlist?list=PLoROMvodv4rN4wG6Nk6sNpTEbuOSosZdX) — Stanford Online · 16 videos · 20.2h across 16 episodes

**Watch only this:** Lectures 1-7 plus Lecture 14, about 9.5 hours — covering RL basics, policy search, and the dedicated multi-agent game playing lecture to understand agent interactions and competition.

*Why it unblocks this paper:* Stanford CS234 Reinforcement Learning I by Emma Brunskill is a rigorous, university-level course that covers foundational RL concepts and includes a specific lecture on Multi-Agent Game Playing (Lecture 14), directly relevant to the multi-agent framework used in COMIC.

*If you want all of it:* All 16 lectures, about 20.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Introduction to Deep Multi-Agent Reinforcement Learning](https://www.youtube.com/playlist?list=PLFihX_3MLxS9iS3Hz8VDWAyU4QCdjQUKr) — The Agent Whisperer · 5 videos · 0.8h across 5 episodes

**Watch only this:** All 5 episodes, about 0.8 hours total — a compact introduction to multi-agent RL fundamentals and actor-critic methods.

*Why it unblocks this paper:* The Agent Whisperer's 'Introduction to Deep Multi-Agent Reinforcement Learning' is a concise, well-structured explainer series that introduces the problem formulation, key methods, and centralized training with decentralized execution, providing a quick but clear overview of multi-agent RL concepts relevant to COMIC.

*If you want all of it:* Same as minimum watch, 0.8 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the COMIC system for agentic sketch comedy generation, start by building foundational knowledge on evolutionary algorithms with a focus on multi-island models, followed by large language model (LLM) humor evaluation techniques that align AI critique with human preferences. Next, explore multi-agent iterative refinement frameworks which are central to COMIC's script and video evolution. Finally, study the core concept of COMIC itself through the authors' own talk, gaining direct insight into their multi-agent approach and iterative critic-guided refinement.

### evolutionary algorithms multi-island model *(prerequisite)*
Understanding evolutionary algorithms, especially the multi-island model, is essential as COMIC partitions its script population into isolated islands for iterative improvement. This foundational knowledge explains how populations evolve through fitness and diversity, which underpins COMIC's script refinement process.

*How the paper uses it:* COMIC uses a multi-island evolutionary approach to generate and refine comedic scripts.

▶ [13. Learning: Genetic Algorithms](https://www.youtube.com/watch?v=kHyNqSnzP8Y) — MIT OpenCourseWare · 47:16 · 12 years ago

### large language models humor evaluation *(prerequisite)*
Grasping how large language models can be used to evaluate humor and align with viewer preferences is critical for understanding COMIC's humor critics. This section covers LLM evaluation methodologies and the challenges of aligning AI judgments with subjective human humor.

*How the paper uses it:* COMIC introduces LLM-based humor critics aligned with real viewer preferences via YouTube comedy engagement analysis.

▶ [How to Systematically Setup LLM Evals (Metrics, Unit Tests, LLM-as-a-Judge)](https://www.youtube.com/watch?v=a3SMraZWNNs) — Dave Ebbelaar · 55:02 · 11 months ago

### multi-agent iterative refinement framework *(prerequisite)*
Multi-agent iterative refinement is the core mechanism by which COMIC evolves scripts and videos through agent competition and critique. This section delves into how multiple AI agents coordinate, compete, and refine outputs iteratively to improve quality.

*How the paper uses it:* COMIC's multi-agent framework uses iterative pairwise competitions and critic-guided refinements for script and video generation.

▶ [Multi Agent Systems - a complete guide with hands-on using LangGraph | Agent Design Pattern](https://www.youtube.com/watch?v=RXOvZIn-oSA) — AI Bites · 52:23 · 9 months ago

### script-conditioned video generation *(prerequisite)*
Producing coherent videos conditioned on evolving comedic scripts is key to COMIC's ability to generate narratively consistent and visually aligned sketch comedy. This section explains the state-of-the-art in script-conditioned video generation techniques.

*How the paper uses it:* COMIC renders videos conditioned on scripts with iterative critic feedback to ensure coherence and quality.

▶ [How do AI video generation models work?](https://www.youtube.com/watch?v=Y5zHHoLrvAE) — Google for Developers · 11:53 · 4 months ago

### COMIC agentic sketch comedy talk *(the paper's own talk)*
This is the authors' own talk providing direct insight into the COMIC system, its multi-agent architecture, iterative refinement process, and evaluation results. It is the most authoritative and comprehensive resource on the paper's core contributions.

*How the paper uses it:* This talk is by the paper's authors and covers the full COMIC system and approach.

▶ [Building a Doom-Like World to Explore Agentic Systems - Alexander Chernov - NDC Toronto 2026](https://www.youtube.com/watch?v=ZWND8IF_7Zk) — NDC Conferences · 52:42 · 2 days ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the COMIC paper's approach to automated sketch comedy generation, start by building foundational knowledge of evolutionary algorithms and multi-island models, which underpin the script population management. Next, learn about large language models (LLMs) and how they can be evaluated and aligned for subjective tasks like humor assessment. Then, explore multi-agent iterative refinement frameworks that enable collaborative agent competition and improvement. Finally, grasp script-conditioned video generation techniques that produce coherent videos from evolving comedic scripts. This progression ensures a clear, intuitive understanding from basic concepts to the paper's core innovations.

### evolutionary algorithms multi-island model *(prerequisite)*
Evolutionary algorithms mimic natural selection to iteratively improve solutions by evolving a population through selection, mutation, and crossover. The multi-island model partitions the population into isolated groups (islands) that evolve separately with occasional interactions, promoting diversity and robustness.

*How the paper uses it:* COMIC partitions its script population into multiple isolated islands governed by different critic committees to evolve diverse and high-quality comedic scripts.

▶ [13. Learning: Genetic Algorithms](https://www.youtube.com/watch?v=kHyNqSnzP8Y) — MIT OpenCourseWare · 47:16 · 12 years ago

### large language models humor evaluation *(prerequisite)*
Large language models (LLMs) can generate and evaluate text, but assessing subjective qualities like humor requires specialized evaluation methods. LLM-based humor critics are trained and aligned using real viewer engagement data to reliably judge comedic quality.

*How the paper uses it:* COMIC introduces LLM-based humor critics aligned with YouTube viewer preferences to guide script refinement and video generation.

▶ [How to Systematically Setup LLM Evals (Metrics, Unit Tests, LLM-as-a-Judge)](https://www.youtube.com/watch?v=a3SMraZWNNs) — Dave Ebbelaar · 55:02 · 11 months ago

### multi-agent iterative refinement framework
Multi-agent iterative refinement involves multiple AI agents working collaboratively and competitively to improve outputs through repeated cycles of generation, critique, and selection. This approach mimics human creative workflows by leveraging diverse perspectives and feedback loops.

*How the paper uses it:* COMIC uses a multi-agent framework where writers, critics, editors, and directors iteratively compete and refine scripts and videos to enhance comedic quality.

▶ [Multi Agent Systems - a complete guide with hands-on using LangGraph | Agent Design Pattern](https://www.youtube.com/watch?v=RXOvZIn-oSA) — AI Bites · 52:23 · 9 months ago

### script-conditioned video generation *(prerequisite)*
Script-conditioned video generation creates videos that are coherent and consistent with a given script, ensuring narrative flow and visual alignment. This technique is crucial for producing longer, story-driven videos rather than isolated clips.

*How the paper uses it:* COMIC renders videos conditioned on refined scripts, using iterative critic feedback and tournament selection to produce coherent comedic sketches.

▶ [How do AI video generation models work?](https://www.youtube.com/watch?v=Y5zHHoLrvAE) — Google for Developers · 11:53 · 4 months ago

## Already in your library

- [The Multi-Agent Architecture That Actually Ships — Luke ...](https://www.youtube.com/watch?v=ow1we5PzK-o) — also for: STRUCTUREDAGENT: Planning with AND/OR Trees for Long-Horizon Web Tasks (Yair Zick)
- [Multi-agent Systems Explained in 17 Minutes](https://www.youtube.com/watch?v=Mi5wOpAgixw) — also for: LCGuard: Latent Communication Guard for Safe KV Sharing in Multi-Agent Systems (Mohammad Mohammadi Amiri)
- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 ...](https://www.youtube.com/watch?v=8fNP4N46RRo) — also for: BENCHGUARD: Who Guards the Benchmarks? Automated Auditing of LLM Agent Benchmarks (Sara Mostafavi)
- [[1hr Talk] Intro to Large Language Models](https://www.youtube.com/watch?v=zjkBMFhNj_g) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [Artificial Intelligence - Evolutionary Algorithms](https://www.youtube.com/watch?v=kQP8I2QAqd8) — also for: Large Language Models for Designing Participatory Budgeting Rules (Hau Chan)
- [Evolutionary Algorithms](https://www.youtube.com/watch?v=L--IxUH4fac) — also for: Domain-Informed Representation for Evolutionary Sieving in Integral and Module Lattices (Qi Cheng)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the COMIC system for agentic sketch comedy generation. The beginner project recreates a core mechanism of multi-agent script refinement using LLMs to show grasp of the iterative critic-guided process. The intermediate project implements a simplified multi-island evolutionary script generation and evaluation pipeline on a small public humor dataset to reproduce the paper's core method. The advanced project extends COMIC's framework by incorporating audio elements (e.g., sound effects) into the multi-agent iterative refinement, addressing a stated limitation and exploring richer audio-visual sketch generation.

### Beginner — LLM-based Humor Critic for Script Refinement
*Effort: a weekend (~8 hours)*

You build a small system that uses a large language model (e.g., OpenAI GPT) as a humor critic to evaluate and iteratively refine short comedic scripts. The system generates initial simple comedy sketches, scores them with the LLM critic aligned to humor quality, and refines the scripts based on critic feedback in a loop.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's key contribution of using LLM-based humor critics aligned with viewer preferences to guide iterative script improvement, a core mechanism behind COMIC's multi-agent refinement.

**Grounded in:** Introduction of LLM-based humor critics aligned with real viewer preferences via analysis of YouTube comedy engagement.

**Tech stack:** Python 3.11, OpenAI GPT API or equivalent LLM, Jupyter Notebook or simple CLI

**Data:** You simulate short comedic scripts as text strings; no external dataset needed.

**Build it:**

1. Implement a script generator that produces simple short comedy sketches (e.g., jokes or dialogues).
2. Use an LLM prompt to act as a humor critic that scores or ranks these scripts based on funniness.
3. Implement an iterative loop where scripts are refined by rewriting or editing guided by the critic's feedback.
4. Evaluate improvement by comparing initial and final script scores from the humor critic.
5. Document the prompt engineering and iterative refinement process.

**Ships as:** A GitHub repo with code and README showing iterative script refinement guided by an LLM humor critic, including example scripts and critic scores.

**Stretch goal:** Add a pairwise tournament mechanism to select winning scripts among a population.

### Intermediate — Multi-Island Evolutionary Script Generation with Critic Tournaments
*Effort: 2 weekends (~20 hours)*

You implement a simplified multi-island evolutionary algorithm to generate and evolve comedic scripts. Each island has a distinct LLM-based critic committee that evaluates scripts. Scripts compete in pairwise tournaments within islands, and losing scripts are refined iteratively. You compare your approach against a single-island baseline and report metrics analogous to win rates and diversity.

**Why it shows you understood the paper:** This project faithfully reproduces the paper's core method of multi-island evolutionary script generation with critic-guided iterative refinement, demonstrating comprehension of the multi-agent competition framework and its benefits.

**Grounded in:** Multi-island evolutionary script generation with critic-guided iterative refinement; multi-island approach yields higher win rates and diversity than single-island baselines.

**Tech stack:** Python 3.11, OpenAI GPT API or equivalent LLM, NumPy, Jupyter Notebook or CLI

**Data:** You simulate comedic scripts as short text snippets; no external dataset is available, so you generate initial random scripts or use public joke datasets (e.g., short jokes from open sources) as a proxy.

**Build it:**

1. Implement a population of comedic scripts partitioned into multiple isolated islands.
2. Assign each island a distinct LLM-based critic committee with different prompt variations to simulate diversity.
3. Implement pairwise tournaments within islands where scripts compete and losing scripts are refined by LLM rewriting.
4. Implement migration or communication between islands optionally.
5. Compare multi-island approach against a single-island baseline by measuring script win rates and diversity (e.g., lexical or semantic diversity).
6. Document methodology, metrics, and results.

**Ships as:** A GitHub repo with code and README demonstrating multi-island evolutionary script generation with critic tournaments, including baseline comparisons and metric reports.

**Stretch goal:** Add script-conditioned video rendering stub that scores video outputs with a critic to close the loop.

### Advanced — Extending COMIC with Audio Effects in Multi-Agent Iterative Refinement
*Effort: 3+ weeks*

You extend the COMIC multi-agent iterative competition framework by incorporating sound effects and simple audio elements into the sketch generation pipeline. This involves adding an audio agent that suggests sound effects conditioned on the script, integrating audio-visual rendering, and extending humor critics to evaluate audio-visual coherence and humor quality. You evaluate the impact of audio inclusion on humor ratings and narrative coherence.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by enriching the audio-visual experience beyond dialogue, demonstrating deep understanding of COMIC's multi-agent framework and challenges in maintaining narrative coherence with richer modalities.

**Grounded in:** Incorporate sound effects to enrich audio-visual experience beyond dialogue; improve visual consistency and realism for longer videos.

**Tech stack:** Python 3.11, OpenAI GPT API or equivalent LLM, FFmpeg or similar audio processing tools, PyDub or librosa for audio manipulation, Jupyter Notebook or CLI

**Data:** You use simulated short comedic scripts and open-source sound effect libraries (e.g., freesound.org samples) to condition audio generation; no official COMIC dataset is available.

**Build it:**

1. Implement an audio agent that generates or selects sound effects conditioned on the comedic script text.
2. Integrate audio with simple video rendering or animation stubs (e.g., slides with audio overlays).
3. Extend the humor critic prompts to evaluate audio-visual humor coherence and quality.
4. Implement iterative multi-agent refinement including audio agent and audio-visual critics.
5. Evaluate the effect of adding audio on humor and narrative metrics compared to dialogue-only baseline.
6. Document challenges, methodology, and results.

**Ships as:** A GitHub repo with code and README showing an extended multi-agent iterative refinement system incorporating audio effects, with evaluation results and example audio-visual sketches.

**Stretch goal:** Explore adding music or background scores as additional audio agents and evaluate impact.

_No authors' own code or datasets are released for COMIC; all projects require simulating or substituting data and reimplementing methods from the paper description._
