---
title: "990 · A Text-Based Recommender System that Leverages Explicit Affective State Preferences — Razvan C. Bunescu"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-razvan-c-bunescu"
source_hash: "f1afd46751e78bef46e84e0390ee9cf23156d9a5da03c416bc370a11b7b26e6f"
sequence: 990
generator: "outreach-garden: managed"
---

# 990 · A Text-Based Recommender System that Leverages Explicit Affective State Preferences

## At a glance

- **Professor:** Razvan C. Bunescu
- **Institution:** UNC - Charlotte
- **Paper:** [A Text-Based Recommender System that Leverages Explicit Affective State Preferences](https://arxiv.org/pdf/2505.20190)
- **Authors:** Tonmoy Hasan, Razvan Bunescu
- **Year:** 2025

## Paper overview

This paper presents a novel book recommendation system that allows users to specify detailed emotional and cognitive states they want to experience from a book. Unlike traditional systems that rely mostly on objective features or simple likes/dislikes, this system uses fine-grained affective preferences mined from real book reviews. It employs a Transformer-based model that combines users' long-term and short-term reading histories with these affective preferences to recommend books that match the desired emotional experience.

### Why it matters

**Research problem:** Traditional recommender systems primarily use implicit user-item rating histories or objective item features, which can be slow to adapt to changing preferences and insufficient for users with diverse or nuanced affective needs. There is a lack of systems that explicitly incorporate a wide range of affective states (emotions, moods, attitudes) that users seek to experience through recommendations.

**Why it matters:** Users often want recommendations that align not just with objective features but with complex emotional and cognitive experiences. Capturing and leveraging these affective preferences can significantly improve user satisfaction and engagement, enabling more personalized and meaningful recommendations.

**Key contributions:**

- Definition of a novel recommendation task leveraging explicit, fine-grained affective state preferences.
- Creation of a large dataset of affective-cognitive statements mined from Goodreads book reviews.
- Design of an emotion wheel ontology to organize affective states for user selection.
- Development of a Transformer-based recommendation model that integrates affective-cognitive preferences with user reading histories.
- Demonstration through experiments that incorporating affective-cognitive preferences significantly improves recommendation accuracy compared to state-of-the-art baselines.

## About the professor

**Razvan C. Bunescu** — Professor, Department of Computer Science, UNC - Charlotte.

Research interests: Machine Learning, Natural Language Processing, Music Information Retrieval

### Research links

- [Faculty/profile page](https://webpages.uncc.edu/rbunescu)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=fi4HWW8AAAAJ)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Transformer-based recommendation models
**The paper assumes:** deep learning for natural language processing, Transformer architectures, sequential recommendation modeling, embedding representations, and personalized ranking loss
**Already in this field?** Skip this entirely if you already understand Transformer models applied to recommendation systems and their training objectives.

This background playlist selection focuses on Transformer-based recommendation models, the core architecture used in the paper's novel affective-cognitive recommender system. The rigorous course option provides a deep and structured university-level understanding of Transformers and their application in language models, essential for grasping the model design and training details. The fast track offers a concise, practical introduction to recommendation systems, including foundational concepts and techniques, suitable for quickly understanding the recommendation context without deep Transformer internals.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1-3, about 5.4 hours — covering Transformer basics, Transformer-based models, and large language models to understand the architecture and embedding integration.

*Why it unblocks this paper:* Stanford CME295 is a cutting-edge, university-level course dedicated to Transformers and Large Language Models, covering the architecture, modeling techniques, and training strategies directly relevant to the Transformer-based recommendation model in the paper.

*If you want all of it:* 16.2 hours across all 9 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Recommendation Systems](https://www.youtube.com/playlist?list=PLZoTAELRMXVN7QGpcuN-Vg35Hgjp3htvi) — Krish Naik · 8 videos · 2.4h across 8 episodes

**Watch only this:** Episodes 1-4, about 1.1 hours — covering weighted hybrid techniques, movie recommender basics, nearest neighbors, and book recommendation using Pearson correlation to grasp foundational recommendation concepts.

*Why it unblocks this paper:* Krish Naik's 'Recommendation Systems' playlist offers a concise and clear introduction to recommendation system techniques, including hybrid and content-based methods, providing practical intuition on recommendation models relevant to understanding the paper's context quickly.

*If you want all of it:* 2.4 hours across all 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on an affective state-based text recommender system, start with foundational knowledge in affective computing and emotion ontologies, which underpin the extraction and representation of emotional states from text. Then, study user modeling and Bayesian personalized ranking to grasp how user preferences and ranking losses are handled. Next, focus on Transformer-based recommendation models, the core technical method used. Finally, review the authors' own talk or related advanced talks to see the novel system and its evaluation in context.

### Affective computing in NLP *(prerequisite)*
Affective computing provides the theoretical and practical foundation for extracting and representing emotional states from natural language text, which is central to this paper's approach of mining affective-cognitive preferences from book reviews. Understanding how NLP techniques support cognitive and emotional state modeling is essential before delving into the recommendation model.

*How the paper uses it:* The paper relies on NLP-based affective computing methods to extract fine-grained emotional and cognitive states from book reviews using GPT-4o.

▶ [Lecture 1 Fundamentals of Affective computing](https://www.youtube.com/watch?v=GVCplnjOaFY) — NPTEL-NOC IITM · 58:29 · 1mo ago

### Emotion ontology and emotion wheel *(prerequisite)*
Emotion ontologies and emotion wheels organize and categorize affective states systematically, enabling structured user selection and preference modeling. This conceptual framework is key to how the paper maps affective content into categories for recommendation.

*How the paper uses it:* The authors design an emotion wheel ontology to organize affective states for user selection in their recommender system.

▶ [Using the The Emotions Wheel to Increase Your Emotional Intelligence EQ](https://www.youtube.com/watch?v=fWrm2MHReqE) — Heal Play Love University · 5:15 · 1y ago

### User modeling in recommender systems *(prerequisite)*
User modeling explains how systems capture and integrate both short-term and long-term user preferences to personalize recommendations effectively. This knowledge is crucial to understanding how the paper's Transformer model incorporates user reading histories alongside affective preferences.

*How the paper uses it:* The ACRec model integrates long-term and short-term user reading histories to model preferences for recommendations.

▶ [Using LLMS for the Task of User Preference Prediction | Recommender Systems | Language Modeling](https://www.youtube.com/watch?v=tf4HZl0wZe8) — Learn AI with Joel Bunyan · 33:20 · 3y ago

### Bayesian personalized ranking *(prerequisite)*
Bayesian personalized ranking (BPR) is a widely used loss function for training recommender systems on implicit feedback, optimizing personalized ranking performance. Understanding BPR is important to grasp how the paper trains its Transformer-based recommendation model.

*How the paper uses it:* The model is trained using Bayesian personalized ranking loss to optimize recommendation accuracy.

▶ [BPR: Bayesian Personalized Ranking from Implicit Feedback (reading papers)](https://www.youtube.com/watch?v=IF3RBZrxzNc) — Vaclav Kosar · 19:37 · 6y ago

### Transformer recommendation models
Transformer architectures are central to the paper's approach for modeling user preferences and affective-cognitive descriptions jointly. Studying Transformer-based recommendation models provides insight into the model design and how sequential and contextual information is captured.

*How the paper uses it:* The paper develops a Transformer-based recommendation model that integrates affective-cognitive preferences with user reading histories.

▶ [Lecture 6 - RNNs and Transformers](https://www.youtube.com/watch?v=FxXYHd0K9OU) — Recommendation Systems in ML · 55:08 · 5y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper's novel recommender system, start by learning about affective computing in NLP to grasp how emotional states are extracted from text. Next, explore the emotion ontology and emotion wheel to see how these affective states are organized for user interaction. Then, study user modeling in recommender systems to understand how user preferences are captured over time. Follow this with Bayesian personalized ranking to learn the training method used. Finally, dive into Transformer recommendation models, the core architecture enabling integration of affective preferences with user histories in this paper.

### Affective computing in NLP *(prerequisite)*
Affective computing in NLP involves techniques to detect and represent emotions and cognitive states from natural language text. This foundation helps machines understand nuanced emotional content, which is essential for modeling user preferences based on feelings expressed in reviews.

*How the paper uses it:* The paper uses NLP methods to extract fine-grained affective-cognitive statements from book reviews to represent user emotional preferences.

▶ [Lecture 1 Fundamentals of Affective computing](https://www.youtube.com/watch?v=GVCplnjOaFY) — NPTEL-NOC IITM · 58:29 · 1mo ago

### Emotion ontology and emotion wheel *(prerequisite)*
An emotion ontology or emotion wheel organizes complex emotional states into categories, helping users and systems to identify and select specific feelings. This structured representation makes it easier to handle a wide range of affective states systematically.

*How the paper uses it:* The authors design an emotion wheel ontology to categorize and present affective states for user selection in their recommendation system.

▶ [Using the The Emotions Wheel to Increase Your Emotional Intelligence EQ](https://www.youtube.com/watch?v=fWrm2MHReqE) — Heal Play Love University · 5:15 · 1y ago

### User modeling in recommender systems *(prerequisite)*
User modeling captures both short-term and long-term preferences from user behavior to personalize recommendations. Understanding how these histories are integrated is key to building systems that adapt to changing user tastes.

*How the paper uses it:* The ACRec model integrates users' long-term and short-term reading histories to model their preferences effectively.

▶ [Recommender Systems](https://www.youtube.com/watch?v=Eeg1DEeWUjA) — CS50 · 13:48 · 10y ago

### Bayesian personalized ranking *(prerequisite)*
Bayesian personalized ranking (BPR) is a loss function designed for implicit feedback data that optimizes the ranking of items personalized to each user. It helps train recommendation models to distinguish preferred items from non-preferred ones effectively.

*How the paper uses it:* The ACRec model is trained using Bayesian personalized ranking loss to optimize recommendation accuracy.

▶ [BPR: Bayesian Personalized Ranking from Implicit Feedback (reading papers)](https://www.youtube.com/watch?v=IF3RBZrxzNc) — Vaclav Kosar · 19:37 · 6y ago

### Transformer recommendation models
Transformer models use attention mechanisms to capture complex sequential patterns and dependencies in data, making them powerful for modeling user-item interactions over time. They can integrate multiple information sources, such as user history and textual descriptions.

*How the paper uses it:* The paper employs a Transformer-based architecture to combine user reading histories with affective-cognitive descriptions for recommendation scoring.

▶ [Lecture 6 - RNNs and Transformers](https://www.youtube.com/watch?v=FxXYHd0K9OU) — Recommendation Systems in ML · 55:08 · 5y ago

## Already in your library

- [Stanford CS224W: Machine Learning w/ Graphs I 2023 I GNNs for Recommender Systems](https://www.youtube.com/watch?v=OV2VUApLUio) — also for: M2TRec: Metadata-aware Multi-task Transformer for Large-scale and Cold-start free Session-based Recommendations (Srijan Kumar)
- [Stanford CME295 Transformers & LLMs | Autumn 2025 | Lecture 1 - Transformer](https://www.youtube.com/watch?v=Ub3GoFaUcds) — also for: RPN 2: On Interdependence Function Learning Towards Unifying and Advancing CNN, RNN, GNN, and Transformer (Jiawei Zhang)
- [Stanford CME295 Transformers & LLMs | Autumn 2026 | Lecture 1 - Transformers](https://www.youtube.com/watch?v=114i2Kz-LZA) — also for: Can AI agents understand spoken conversations about data visualizations in online meetings? (Jillian Aurisano)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Bayes theorem, the geometry of changing beliefs](https://www.youtube.com/watch?v=HZGCoVF3YvM) — also for: Credo: Declarative Control of LLM Pipelines via Beliefs and Policies (Andrew Crotty)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of the ACRec paper. The beginner project recreates a key component of the affective state preference extraction and organization, the intermediate project implements the core Transformer-based recommendation model on a smaller scale, and the advanced project extends the approach to address a stated limitation by exploring cold-start user scenarios with affective preferences. Each project ties directly to a specific contribution, result, or limitation from the paper and leverages your existing software engineering and ML skills.

### Beginner — Emotion Wheel Interface for Affective Preference Selection
*Effort: a weekend, ~8 hours*

You build a React web interface that implements the emotion wheel ontology from the paper, allowing users to browse and select fine-grained affective states (emotions, moods, attitudes) as preferences for book recommendations. The interface organizes affective states into categories and subcategories, mimicking the paper's emotion wheel design.

**Why it shows you understood the paper:** This project demonstrates your grasp of the paper's novel emotion wheel ontology and the importance of explicit affective state preference elicitation for personalized recommendations.

**Grounded in:** Key contribution: "Design of an emotion wheel ontology to organize affective states for user selection."

**Tech stack:** TypeScript, React, CSS

**Data:** Use the 26+1 emotion categories described in the paper's emotion wheel ontology; simulate user selections.

**Build it:**

1. Create a React component that visually represents the emotion wheel with 26+1 categories.
2. Implement interactive selection of affective states with visual feedback.
3. Organize affective states hierarchically as per the paper's emotion wheel design.
4. Add a panel to display selected affective states as user preferences.
5. Write a README explaining the emotion wheel and its role in affective preference elicitation.

**Ships as:** A GitHub repo with a React app demonstrating the emotion wheel UI and user selection of affective states, documented with the ontology's background.

**Stretch goal:** Add a feature to save and load user affective preference profiles locally.

### Intermediate — Transformer-Based Affective-Cognitive Book Recommender
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the ACRec Transformer model that integrates user reading histories and explicit affective-cognitive (AC) state descriptions to recommend books. You train and evaluate the model on a small public book review dataset augmented with simulated affective preference annotations.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method—modeling user preferences with a Transformer that combines long-term and short-term histories with affective states—and evaluate recommendation accuracy.

**Grounded in:** Key contribution: "Development of a Transformer-based recommendation model that integrates affective-cognitive preferences with user reading histories." Key result: "ACRec outperforms strong baselines including ID-based, text-based, and LLM-based hybrid models."

**Tech stack:** Python 3.11, PyTorch, scikit-learn, pandas, numpy

**Data:** Use a public book review dataset such as the Goodreads subset or Amazon Books reviews; simulate affective-cognitive statements by extracting sentiment/emotion keywords or manually annotating a small subset.

**Build it:**

1. Preprocess the dataset to extract user reading histories and book metadata.
2. Simulate or annotate affective-cognitive preference descriptions for users.
3. Implement a Transformer model that encodes user histories and AC descriptions.
4. Train the model using Bayesian personalized ranking loss.
5. Evaluate recommendation performance using hit ratio (HR@10) and NDCG metrics against a simple baseline (e.g., popularity-based).
6. Document the implementation, evaluation results, and comparison to baseline.

**Ships as:** A GitHub repo with code to train and evaluate the Transformer-based ACRec model on a public dataset with simulated affective preferences, including performance metrics and analysis.

**Stretch goal:** Incorporate cosine similarity between AC descriptions and book descriptions as an additional feature to improve recommendations.

### Advanced — Cold-Start Affective Preference Modeling for Book Recommendations
*Effort: 3+ weeks*

You extend the ACRec approach to address the cold-start limitation by designing and implementing a method to elicit and model affective preferences for users with limited or no reading history. This includes building a user-friendly interface for real-time affective preference input and adapting the Transformer model to incorporate these inputs for recommendations.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating your ability to innovate on the core method by enabling affective preference modeling in cold-start scenarios and real-time settings.

**Grounded in:** Limitation: "Performance depends on users having sufficiently large reading histories; cold-start scenarios with limited data are not addressed." Future direction: "Investigate modeling affective states in cold-start or limited data scenarios."

**Tech stack:** TypeScript, React, Python 3.11, PyTorch, FastAPI

**Data:** Use the same public book review dataset and simulated affective preference data as in the intermediate project; additionally, create synthetic cold-start user profiles with minimal history.

**Build it:**

1. Design and implement a React frontend for users to input explicit affective-cognitive preferences in real time, leveraging the emotion wheel UI from the beginner project.
2. Develop a FastAPI backend to receive and process user affective preferences.
3. Adapt the Transformer recommendation model to accept affective preferences without relying on long user histories.
4. Train and evaluate the adapted model on synthetic cold-start user data, comparing recommendation accuracy to the baseline model.
5. Document the system architecture, user interface, modeling approach, and evaluation results.

**Ships as:** A full-stack GitHub repo with a web interface for affective preference input, a backend API, and an adapted Transformer recommendation model demonstrating improved recommendations for cold-start users.

**Stretch goal:** Extend the system to support multi-domain recommendations (e.g., movies) by adapting the affective ontology and retraining the model.
