---
title: "872 · A Tripartite Plan-Based Model of Narrative for Narrative Discourse Generation — Colin Potts"
date: 2026-10-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-colin-potts"
source_hash: "0b6ffcce21ba882b73217d38652f696a71c06c724b203bea305499dd350db89a"
sequence: 872
generator: "outreach-garden: managed"
---

# 872 · A Tripartite Plan-Based Model of Narrative for Narrative Discourse Generation

## At a glance

- **Professor:** Colin Potts
- **Institution:** Georgia Institute of Technology
- **Paper:** [A Tripartite Plan-Based Model of Narrative for Narrative Discourse Generation](https://ojs.aaai.org/index.php/AIIDE/article/view/12839)
- **Authors:** Camille Barot, Colin M. Potts, R. Michael Young
- **Year:** 2015

## Paper overview

This paper proposes a new model of narrative that divides storytelling into three layers—story, discourse, and narration—to better represent how narratives are constructed and conveyed across different media. It focuses on how narratives influence audience beliefs and how to generate narratives that maintain suspense and surprise by managing these beliefs. The model supports reasoning about audience inferences and separates medium-independent discourse from medium-specific narration, enabling reuse across media like text and film.

### Why it matters

**Research problem:** Existing computational models of narrative either treat narrative as a bipartite structure (story and discourse) or do not adequately represent the dynamics of audience beliefs and intentions in narrative discourse. Moreover, they often fail to integrate medium-specific constraints in narrative generation, limiting their applicability across different media.

**Why it matters:** Narrative generation systems that do not model audience belief changes or medium-specific narration choices cannot effectively produce engaging narratives that maintain suspense or surprise. This limits the ability to generate narratives that are compelling and adaptable to various media formats such as text, movies, or games.

**Key contributions:**

- Introduction of a tripartite narrative model distinguishing story, discourse, and narration layers.
- Extension of discourse planning to explicitly represent and reason about audience belief changes and inferences.
- Separation of medium-independent discourse knowledge from medium-specific narration actions to enable reuse across media.
- A planning-based narrative generation framework that integrates audience inference reasoning to preserve narrative effects like suspense and surprise.
- Demonstration of how the model can generate narratives that manipulate audience beliefs to achieve desired narrative effects.

## About the professor

**Colin Potts** — Associate Professor, College of Computing, Georgia Institute of Technology.

Research interests: Requirements analysis (including goal-based refinement and scenario analysis), Design & evolution for usability and usefulness (including fieldwork methods), IT support for the design process (including design rationale)

### Research links

- [Faculty/profile page](https://sites.cc.gatech.edu/computing/SW_Eng/people/Faculty/Colin.Potts.html)
- [Professor website](http://www.cc.gatech.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Automated Planning and Narrative Generation
**The paper assumes:** automated planning, plan-space planning, narrative generation frameworks, and audience modeling in AI
**Already in this field?** Skip this entirely if you already understand automated planning methods and their application to narrative or discourse generation in AI.

To understand the planning-based narrative generation model in the paper, a solid grasp of automated planning concepts—especially plan-space planning—and how planning frameworks can be adapted for narrative discourse is essential. The rigorous course offers a deep, structured dive into AI planning fundamentals, while the fast track provides a concise, practical introduction to core planning ideas suitable for quickly grasping the necessary background without extensive time investment.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Fundamentals of Artificial Intelligence](https://www.youtube.com/playlist?list=PLwdnzlV3ogoXaceHrrFVZCJKbm_laSHcH) — NPTEL IIT Guwahati · 35 videos · 25.4h across 35 episodes

**Watch only this:** Watch Lectures 21 (Introduction to Planning) and 22 (Plan Space Planning), about 1.5 hours total — these cover the core planning concepts and plan-space planning relevant to the paper's approach.

*Why it unblocks this paper:* This NPTEL IIT Guwahati course includes dedicated lectures on planning and plan-space planning (Lectures 21 and 22), which directly relate to the DPOCL planning algorithm extended in the paper. It provides a rigorous foundation in AI planning necessary to understand the formal narrative planning framework and handcrafted operators.

*If you want all of it:* The full course has 35 episodes totaling about 25.4 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Complete Generative AI & LLM Course - AI Explained (Beginner to Advanced)](https://www.youtube.com/playlist?list=PL55symSEWBbMoaLBdqZ2vrifOnPKuN_yH) — Learn with Manoj · 31 videos · 3.5h across 31 episodes

**Watch only this:** Watch episodes 10 (The AI Masterclass | Part 4 | Finally Understand AI Memory | Embeddings), 15 (The AI Masterclass | Part 9 | Fine Tuning AI for People Who Hate Math), and 16 (The AI Masterclass | Part 10 | Understand LoRA & Local AI Shrinking Models), totaling about 20 minutes — focusing on planning and reasoning basics relevant to narrative planning.

*Why it unblocks this paper:* This concise AI Explained series includes short, clear lessons on search and planning fundamentals that underpin automated planning approaches. It offers a quick, accessible introduction to planning concepts in under 45 minutes, suitable for readers needing a rapid but solid overview.

*If you want all of it:* The full playlist has 31 episodes totaling about 3.5 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "A Tripartite Plan-Based Model of Narrative for Narrative Discourse Generation," start by grounding yourself in foundational concepts such as narrative theory (especially Genette's tripartite model), automated planning in AI, audience modeling in narratives, and the separation of discourse and narration. These prerequisites provide the theoretical and technical background necessary to appreciate the paper's contributions. Finally, focus on the core concept of computational narrative generation and the authors' own talk if available, to see how these foundations are integrated into their novel tripartite narrative generation framework.

### Narrative theory Genette *(prerequisite)*
Understanding Gérard Genette's narrative theory is essential because the paper's tripartite model directly builds on his distinction between story, discourse, and narration layers. This foundational knowledge clarifies the theoretical basis for separating narrative components and informs how the authors structure their computational model.

*How the paper uses it:* The paper explicitly follows Genette’s tripartite model to separate story, discourse, and narration layers in narrative representation.

▶ [UGC NET English Gérard Genette | Transtextuality Explained | Structuralism Explained](https://www.youtube.com/watch?v=8EJ8jtqCMeQ) — English Winglish by Pooja Singh · 10mo ago

### Automated planning in AI *(prerequisite)*
The paper extends planning algorithms to generate narratives that manage audience beliefs and narrative coherence. A solid understanding of automated planning in AI, including planning problem formulation and algorithms, is crucial to grasp how the authors implement their tripartite narrative generation framework.

*How the paper uses it:* The authors extend planning algorithms (DPOCL) to incorporate audience belief inference and reasoning in narrative generation.

▶ [AI Seminar Series 2024: Explainable Planning and Decision Making, Dr. William Yeoh](https://www.youtube.com/watch?v=3HtB1rMRHHU) — Amii · 2y ago

### Audience modeling in narratives *(prerequisite)*
Audience modeling is key to the paper's approach because it explicitly reasons about audience mental states and belief changes to preserve narrative effects like suspense and surprise. Understanding theories and computational approaches to audience modeling helps contextualize the paper's inference frames and reasoning about audience beliefs.

*How the paper uses it:* The model explicitly represents and reasons about audience belief changes to avoid undesired inferences that undermine narrative effects.

▶ [Lecture 44: Digital role-playing narratives](https://www.youtube.com/watch?v=CPohuND2sfw) — AMU MOOCs · 2w ago

### Discourse and narration separation *(prerequisite)*
The paper's novelty includes separating medium-independent discourse from medium-specific narration, enabling reuse across media. Understanding the linguistic and narrative distinction between discourse and narration is foundational to appreciating this separation and its implications for narrative generation.

*How the paper uses it:* The paper separates discourse and narration knowledge to encode medium-independent discourse and medium-specific narration idioms.

▶ [Narrative Discourse: Developments in Theory](https://www.youtube.com/watch?v=zy03TqQy3XE) — Vidya-mitra · 8y ago

### Computational narrative generation
This concept is central to the paper as it presents a computational framework for narrative generation that integrates planning, audience modeling, and layered narrative representation. Understanding the state of the art and challenges in computational narrative generation contextualizes the paper's contributions and innovations.

*How the paper uses it:* The paper proposes a planning-based narrative generation framework that manipulates audience beliefs and separates narrative layers for cross-media reuse.

▶ [Computational Narrative for Empowerment and Expression](https://www.youtube.com/watch?v=6R3CrUgj2Do) — Stanford · 9y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper's approach to computational narrative generation, start by grasping foundational narrative theory, especially Genette's tripartite model, which underpins the paper's structure. Next, learn about automated planning in AI, as the paper extends planning algorithms for narrative generation. Then, explore audience modeling in narratives to appreciate how the paper reasons about audience beliefs. Finally, study the separation of discourse and narration layers to see how the model supports medium-independent and medium-specific narrative generation.

### Narrative theory Genette *(prerequisite)*
This concept introduces Gérard Genette's foundational narrative theory, which divides narrative into distinct layers such as story, discourse, and narration. Understanding this helps clarify how narratives are structured and how the paper builds its tripartite model.

*How the paper uses it:* The paper bases its tripartite narrative model on Genette’s theory separating story, discourse, and narration layers.

▶ [UGC NET English Gérard Genette | Transtextuality Explained | Structuralism Explained](https://www.youtube.com/watch?v=8EJ8jtqCMeQ) — English Winglish by Pooja Singh · 10mo ago

### Automated planning in AI *(prerequisite)*
Automated planning in AI involves algorithms that generate sequences of actions to achieve goals. This foundation is crucial to understand how the paper extends planning algorithms to generate narratives while managing audience beliefs.

*How the paper uses it:* The paper extends planning algorithms (DPOCL) to incorporate audience belief inference and narrative planning.

▶ [1.1. AIPLAN - What Is Planning?](https://www.youtube.com/watch?v=yCZQ18SPP44) — Open Education Edinburgh · 12y ago

### Audience modeling in narratives *(prerequisite)*
Audience modeling studies how narratives affect the beliefs and mental states of the audience. This is key to understanding how the paper reasons about and manipulates audience beliefs to maintain suspense and surprise.

*How the paper uses it:* The model explicitly represents and reasons about audience belief changes to preserve narrative effects.

▶ [Audience Theory](https://www.youtube.com/watch?v=BlS3L8vkFNs) — CEC · 12y ago

### Discourse and narration separation *(prerequisite)*
This concept explains the difference between discourse (medium-independent narrative structure) and narration (medium-specific realization). Understanding this separation is essential to grasp how the paper supports narrative generation adaptable across media.

*How the paper uses it:* The paper separates medium-independent discourse knowledge from medium-specific narration actions for reuse across media.

▶ [Linguistics P-12 , M-16. Narrative Discourse: Focalization and Narration](https://www.youtube.com/watch?v=X6glQ6-8dPM) — e-Content:Languages · 6y ago

### Computational narrative generation
This concept covers how narratives can be generated computationally using AI techniques, integrating story structure, audience modeling, and planning. It ties together the previous concepts to show how the paper’s framework produces engaging narratives.

*How the paper uses it:* The paper presents a planning-based narrative generation framework integrating audience inference reasoning.

▶ [Computational Narrative for Empowerment and Expression](https://www.youtube.com/watch?v=6R3CrUgj2Do) — Stanford · 9y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the tripartite narrative model and its computational planning approach. The beginner project recreates a core mechanism of audience belief tracking in narrative discourse. The intermediate project implements a simplified planning algorithm to generate narrative discourse that manipulates audience beliefs, comparing it to a naive baseline. The advanced project extends the model by exploring learned or adaptive inference rules to reduce handcrafted rule reliance, addressing a key limitation and future direction of the paper.

### Beginner — Audience Belief Tracking Simulator
*Effort: a weekend, ~8 hours*

You build a small interactive simulator that models how audience beliefs change in response to discourse actions in a narrative. The simulator lets users input simple story events and discourse actions, then applies handcrafted inference rules to update and display the audience's mental state over time.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's key idea of explicitly representing and reasoning about audience belief changes during narrative discourse, a core contribution distinguishing it from bipartite models.

**Grounded in:** The model explicitly represents audience belief changes and reasoning: "The evolution of the mental state of the audience along with the discourse is represented by a set of inference frames... This allows the planner to detect potential threats to causal links between steps when the opposite beliefs are created or negated by the inferences."

**Tech stack:** TypeScript, React, Node.js

**Data:** Simulated simple story and discourse actions created manually for demonstration.

**Build it:**

1. Design a data structure to represent audience beliefs and inference frames.
2. Implement a set of simple handcrafted inference rules that update beliefs based on discourse actions.
3. Create a React UI to input story and discourse actions and visualize audience belief states over time.
4. Implement logic to apply inference rules sequentially and update the mental state.
5. Add examples demonstrating how certain discourse actions create or negate audience beliefs.

**Ships as:** An interactive web app with a README explaining the inference rules and how audience belief tracking works in narrative discourse.

**Stretch goal:** Add a visualization of how conflicting inferences create ambiguity or belief revision in the audience model.

### Intermediate — Tripartite Narrative Discourse Planner
*Effort: 2 weekends, ~20 hours*

You implement a simplified planning algorithm that generates narrative discourse plans manipulating audience beliefs to preserve suspense. The system separates story and discourse layers and uses handcrafted inference rules to detect and avoid undesired audience inferences. You compare it against a naive baseline that ignores audience belief reasoning.

**Why it shows you understood the paper:** This project reimplements the paper's core method of extending planning algorithms with audience belief inference to maintain narrative effects, showing comprehension of the tripartite model and planning-based generation framework.

**Grounded in:** A planning-based narrative generation framework that integrates audience inference reasoning to preserve narrative effects like suspense and surprise.

**Tech stack:** Python 3.11, FastAPI, TypeScript (for optional frontend)

**Data:** Manually created small narrative domain with story actions, discourse actions, and inference rules based on paper examples.

**Build it:**

1. Define formal representations for story plans and discourse plans with decomposition schemata.
2. Implement handcrafted inference rules to model audience belief changes triggered by discourse actions.
3. Extend a partial-order causal link planner (DPOCL) to incorporate audience belief inference and detect threats.
4. Implement a naive baseline planner that generates discourse plans without audience belief reasoning.
5. Generate example narratives with both planners and compare how well suspense or surprise is maintained.
6. Document the planning process, inference rules, and evaluation results.

**Ships as:** A command-line or web-based planner demonstrating narrative discourse generation with audience belief reasoning, with comparison to baseline and detailed README.

**Stretch goal:** Add a simple UI to visualize generated discourse plans and audience belief states dynamically.

### Advanced — Adaptive Inference Rule Learning for Narrative Planning
*Effort: 3+ weeks*

You develop an extension to the tripartite narrative planning framework that incorporates adaptive or learned inference rules to reduce reliance on handcrafted domain-dependent rules. Using a small corpus of annotated narrative discourse examples (simulated or public), you train a simple rule induction or classification model to predict audience belief changes, integrating it into the planner to generalize across narrative domains.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper by operationalizing learned inference mechanisms, demonstrating deep engagement with the model's challenges and potential improvements.

**Grounded in:** Incorporate more complex and possibly learned inference mechanisms to reduce reliance on handcrafted rules.

**Tech stack:** Python 3.11, scikit-learn, FastAPI, TypeScript (optional frontend)

**Data:** Simulated small dataset of narrative discourse examples annotated with audience belief changes; no public dataset directly available, so synthetic data generation is required.

**Build it:**

1. Create or simulate a small dataset of narrative discourse actions annotated with resulting audience belief changes.
2. Implement a machine learning model (e.g., decision tree or rule induction) to learn inference rules from this data.
3. Integrate the learned inference model into the narrative discourse planner to replace or augment handcrafted rules.
4. Evaluate the planner's ability to generate coherent narratives preserving suspense compared to the handcrafted rule version.
5. Document the data generation, learning process, integration, and evaluation results.
6. Optionally, build a simple UI to demonstrate adaptive inference in narrative planning.

**Ships as:** A narrative planner enhanced with learned inference rules, with evaluation and documentation showing reduced manual rule dependence.

**Stretch goal:** Experiment with neural models or reinforcement learning to further improve inference generalization.
