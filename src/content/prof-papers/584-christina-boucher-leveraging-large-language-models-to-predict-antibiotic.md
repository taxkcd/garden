---
title: "584 · Leveraging large language models to predict antibiotic resistance in Mycobacterium tuberculosis — Christina Boucher"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-christina-boucher"
source_hash: "6ce25ff2ba327948e3cc224802b5ed063cd8c8bae48705293efad3c4c9a9ef0e"
sequence: 584
generator: "outreach-garden: managed"
---

# 584 · Leveraging large language models to predict antibiotic resistance in Mycobacterium tuberculosis

## At a glance

- **Professor:** Christina Boucher
- **Institution:** University of Florida
- **Paper:** [Leveraging large language models to predict antibiotic resistance in Mycobacterium tuberculosis](https://europepmc.org/articles/PMC12261485?pdf=render)
- **Authors:** Conrad Testagrose, Sakshi Pandey, Mohammadali Serajian, Simone Marini, Mattia Prosperi, Christina Boucher
- **Year:** 2025

## Paper overview

This study presents LLMTB, a novel large language model (LLM) based on transformer architecture, designed to predict antibiotic resistance in Mycobacterium tuberculosis (MTB) using genomic data. By tokenizing genes and their regulatory regions, LLMTB achieves high accuracy in predicting resistance to 13 antibiotics, outperforming or matching existing methods. The model also provides interpretable insights into resistance mechanisms, including novel genes and regulatory elements, which can help guide personalized treatment and combat drug-resistant tuberculosis.

### Why it matters

**Research problem:** Antibiotic resistance in Mycobacterium tuberculosis poses a significant global health challenge, complicating treatment and control of tuberculosis. Existing methods for predicting resistance rely heavily on manually curated mutation databases or computationally intensive k-mer analyses, which may lag in detecting novel resistance mechanisms or require extensive resources.

**Why it matters:** Tuberculosis remains the leading cause of death from a single infectious agent worldwide, with drug-resistant strains (MDR-TB and XDR-TB) threatening public health efforts. Rapid and accurate prediction of antibiotic resistance is crucial for effective treatment and limiting the spread of resistant strains.

**Key contributions:**

- Development of LLMTB, the first large language model applied to MTB antibiotic resistance prediction.
- Inclusion of intergenic regions to capture regulatory mutations influencing resistance.
- Gene-level tokenization enhancing interpretability and reducing dimensionality.
- Demonstration that LLMTB matches or surpasses existing methods on most antibiotics.
- Provision of attention-based explainability highlighting known and novel resistance genes and regulatory elements.

## About the professor

**Christina Boucher** — Professor, University of Florida.

Research interests: Bioinformatics

### Research links

- [Faculty/profile page](https://cise.ufl.edu/people/faculty/name/christina-boucher)
- [Identity evidence](http://christinaboucher.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** transformer models in machine learning
**The paper assumes:** transformer architectures, self-attention mechanisms, and natural language processing models
**Already in this field?** Skip this entirely if you already understand transformer models and their application in sequence modeling and NLP.

This background focuses on transformer models in machine learning, essential for understanding the LLMTB model's architecture, tokenization, and attention mechanisms used to predict antibiotic resistance in Mycobacterium tuberculosis. The rigorous course offers a deep, structured university-level exploration of transformers and large language models, while the fast track provides a concise, visually intuitive introduction to the core concepts of NLP and transformers. Choose the course for comprehensive mastery or the fast track for a quick but solid conceptual foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CME295: Transformers and Large Language Models I Autumn 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOCXd21gf0CF4xr35yINeOy) — Stanford Online · 9 videos · 16.2h across 9 episodes

**Watch only this:** Lectures 1 to 4 ("Transformer", "Transformer-Based Models & Tricks", "Tranformers & Large Language Models", "LLM Training"), about 7 hours — these cover the core transformer architecture, model variants, and training essentials needed to grasp LLMTB.

*Why it unblocks this paper:* Stanford CME295: Transformers and Large Language Models I Autumn 2025 is a recent, authoritative university course that thoroughly covers transformer architectures, LLM training, tuning, reasoning, and evaluation, directly relevant to understanding the LLMTB model's design and interpretability.

*If you want all of it:* All 9 lectures, about 16.2 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [NLP & Transformers, Visually Explained: From One-Hot to GPT (Animated 6-Part Course)](https://www.youtube.com/playlist?list=PL2V_Zb9FoW8zawFa_xQHDhvrRSLm4Sog_) — Daniel Jora | AI Learner · 6 videos · 0.9h across 6 episodes

**Watch only this:** Episodes 1 to 4 ("From 0 to AI: How Language Representation Began?", "NLP Changed Forever: Word2Vec | GloVe | FastText Explained", "AI Without Transformers: How RNN, LSTM & GRU Dominated NLP", "BERT Killed Old-School NLP!"), about 36 minutes — these cover foundational NLP representations and the transformer breakthrough.

*Why it unblocks this paper:* The "NLP & Transformers, Visually Explained: From One-Hot to GPT" series by Daniel Jora offers a clear, beginner-friendly, animated introduction to NLP and transformer concepts, ideal for quickly building intuition about tokenization, attention, and transformer-based language models relevant to LLMTB.

*If you want all of it:* All 6 episodes, about 54 minutes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on LLMTB, start with foundational knowledge of antibiotic resistance mechanisms in Mycobacterium tuberculosis to grasp the biological context of resistance prediction. Next, build understanding of natural language processing tokenization and attention mechanisms interpretability, which underpin the model's input representation and explainability. Then, explore transformer models applied to genomics to appreciate the architectural innovations enabling LLMTB. Finally, conclude with the authors' own talk or closest available seminar to gain direct insight into their novel LLM approach for MTB resistance prediction.

### antibiotic resistance mechanisms tuberculosis *(prerequisite)*
Understanding the biological mechanisms by which Mycobacterium tuberculosis develops antibiotic resistance is essential to interpret the genomic features and predictions made by LLMTB. This section covers the molecular and cellular basis of resistance, including canonical resistance genes and regulatory elements.

*How the paper uses it:* The paper identifies canonical resistance genes and novel regulatory elements influencing antibiotic resistance in MTB.

▶ [Seminar Dr. M Gutierrez - Is Mycobacterium tuberculosis the greatest cell biologist in the world?](https://www.youtube.com/watch?v=I8KlHddCdBY) — IPBS-Toulouse · 57:22 · 5 years ago

### natural language processing tokenization *(prerequisite)*
Tokenization is a critical preprocessing step in natural language processing that converts raw sequences into meaningful units for model input. Understanding gene and intergenic region tokenization clarifies how LLMTB represents genomic data as tokens, enabling the transformer to learn complex patterns.

*How the paper uses it:* LLMTB tokenizes each gene and its flanking intergenic regions as single tokens to capture genomic context.

▶ [L7: Hugging face tokenizer & tokenization in natural language ...](https://www.youtube.com/watch?v=qzSxuqO1Q28) — IIT Madras - B.S. Degree Programme · 9:22

### attention mechanisms interpretability *(prerequisite)*
Attention mechanisms allow models to weigh the importance of different input tokens, providing interpretability by highlighting influential features. Understanding attention is key to appreciating how LLMTB identifies known and novel resistance-associated genes and regulatory regions.

*How the paper uses it:* LLMTB uses attention-based explainability to highlight canonical and novel resistance genes and regulatory elements.

▶ [C5W3L07 Attention Model Intuition](https://www.youtube.com/watch?v=SysgYptB198) — DeepLearningAI · 9:42

### transformer models in genomics
Transformers have revolutionized sequence modeling by capturing long-range dependencies efficiently. This section focuses on how transformer architectures are adapted for genomic data, which is central to LLMTB's design and performance in predicting antibiotic resistance.

*How the paper uses it:* LLMTB is a BERT-based transformer model trained on genomic sequences to predict antibiotic resistance in MTB.

▶ [Stanford CS25: V1 I Audio Research: Transformers for ...](https://www.youtube.com/watch?v=wvE2n8u3drA) — Stanford Online · 48:19

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational biology of tuberculosis and antibiotic resistance first, then explains natural language processing tokenization and attention mechanisms for interpretability, and finally covers transformer models applied to genomics. This order builds intuition from the biological problem and resistance mechanisms, through the AI techniques used for genomic data representation and model explainability, culminating in understanding the core transformer architecture behind LLMTB.

### antibiotic resistance mechanisms tuberculosis *(prerequisite)*
Start by understanding how Mycobacterium tuberculosis develops resistance to antibiotics, including common genetic and regulatory mechanisms. This biological foundation is essential to appreciate why predicting resistance from genomic data is challenging and important.

*How the paper uses it:* The paper predicts antibiotic resistance in MTB by modeling genomic mutations and regulatory elements that cause resistance.

▶ [Mechanisms of antibiotic resistance](https://www.youtube.com/watch?v=ReKG-vuYHY4) — Osmosis from Elsevier · 4:06 · 2 years ago

### natural language processing tokenization *(prerequisite)*
Learn how tokenization breaks down sequences into meaningful units for language models. In this paper, genes and their flanking regions are tokenized as single units, enabling the model to capture complex genomic patterns efficiently.

*How the paper uses it:* LLMTB uses gene-level tokenization of genomic sequences as input tokens for the transformer model.

▶ [L7: Hugging face tokenizer & tokenization in natural language ...](https://www.youtube.com/watch?v=qzSxuqO1Q28) — IIT Madras - B.S. Degree Programme · 9:22

### attention mechanisms interpretability *(prerequisite)*
Understand how attention mechanisms allow models to focus on important parts of input data and provide interpretability by highlighting influential features. This helps explain which genes or regulatory regions contribute to resistance predictions.

*How the paper uses it:* LLMTB uses attention scores to identify known and novel resistance genes and regulatory elements.

▶ [C5W3L07 Attention Model Intuition](https://www.youtube.com/watch?v=SysgYptB198) — DeepLearningAI · 9:42

### transformer models in genomics
Finally, explore how transformer architectures are adapted to analyze genomic sequences, capturing long-range dependencies and complex patterns. This is the core AI technique behind LLMTB's success in predicting antibiotic resistance.

*How the paper uses it:* LLMTB is a BERT-based transformer model trained on MTB genomic data to predict resistance phenotypes.

▶ [Stanford CS25: V1 I Audio Research: Transformers for ...](https://www.youtube.com/watch?v=wvE2n8u3drA) — Stanford Online · 48:19

## Already in your library

- [Stanford CS229 I Machine Learning I Building Large Language Models (LLMs)](https://www.youtube.com/watch?v=9vM4p9NN0Ts) — also for: Codetations: Intelligent, Persistent Notes and UIs for Programs and Other Documents (Steven L. Tanimoto)
- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)
- [Transformers, explained: Understand the model behind GPT, BERT, and T5](https://www.youtube.com/watch?v=SZorAJ4I-sA) — also for: Byte Latent Transformer: Patches Scale Better Than Tokens (Luke S. Zettlemoyer)
- [Lecture 13: Attention](https://www.youtube.com/watch?v=YAgjfMR9R_M) — also for: Recovering Time-Varying Single-Cell Data Networks (Ziv Bar-Joseph)
- [Attention in transformers, step-by-step | Deep Learning Chapter 6](https://www.youtube.com/watch?v=eMlx5fFNoYc) — also for: Heterogeneous Graph Attention Network (Yanfang (Fanny) Ye)
- [Attention mechanism: Overview](https://www.youtube.com/watch?v=fjJOgb-E41w) — also for: Learning to Optimize Job Shop Scheduling Under Structural Uncertainty (Jing Yuan)
- [Attention Mechanism](https://www.youtube.com/watch?v=oMeIDqRguLY) — also for: A Contrastive Few-shot RGB-D Traversability Segmentation Framework for Indoor Robotic Navigation (Fillia Makedon)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and depth around the LLMTB paper. The beginner project focuses on reproducing and visualizing the attention-based interpretability mechanism on a small scale, using the applicant's existing skills. The intermediate project involves running and extending the authors' LLMTB code on a subset of MTB genomic data to reproduce core prediction metrics and compare with a simple baseline, introducing transformer fine-tuning and genomic tokenization. The advanced project tackles a stated limitation by expanding the model to incorporate whole-genome context beyond gene and intergenic regions, exploring new data preprocessing and model architecture adjustments, thus demonstrating genuine research extension and technical creativity.

### Beginner — Visualize LLMTB Attention on Known Resistance Genes
*Effort: a weekend, ~8 hours*

You build a small Python notebook that loads precomputed attention scores from the LLMTB model (or simulated attention data if unavailable) and visualizes attention weights highlighting canonical resistance genes like rpoB and katG. You create interpretable heatmaps or bar charts showing how the model focuses on these genes for resistance prediction.

**Why it shows you understood the paper:** This project demonstrates you understand the paper's attention-based explainability approach and the biological relevance of gene-level tokenization. A professor would see you grasp how LLMTB links model internals to known resistance mechanisms.

**Grounded in:** Attention analysis identified canonical resistance genes (e.g., rpoB for RIF, katG for INH) and highlighted potential novel resistance-associated genes and regulatory regions.

**Tech stack:** Python 3.11, matplotlib, seaborn, pandas, Jupyter Notebook

**Data:** Use attention score data from the LLMTB GitHub repository if available; otherwise, simulate attention scores based on the paper's reported genes.

**Build it:**

1. Clone the LLMTB repository and explore the attention output format or documentation.
2. Extract or simulate attention scores for a small set of genes including rpoB and katG.
3. Write a Python notebook to load these scores and plot gene-level attention heatmaps or bar charts.
4. Annotate plots with gene names and resistance relevance based on the paper.
5. Document the notebook explaining how attention relates to interpretability in LLMTB.

**Verified links from the paper:**

- <https://github.com/ctestagrose/LLMTB> — released by the paper's authors

**Ships as:** A Jupyter notebook with visualizations of LLMTB attention highlighting known resistance genes, accompanied by explanatory markdown cells.

**Stretch goal:** Add interactive visualization (e.g., using Plotly) to explore attention scores across multiple antibiotics.

### Intermediate — Run and Extend LLMTB on Public MTB Genomic Data
*Effort: 2 weekends, ~20 hours*

You set up the LLMTB model from the authors' GitHub repository and run it on a smaller publicly available MTB genomic dataset or a simulated subset resembling the CRyPTIC data. You reproduce core prediction metrics (F1-score, AUCROC) for a few antibiotics and compare LLMTB's performance against a simple baseline such as a logistic regression on mutation presence.

**Why it shows you understood the paper:** This project shows you can operate the authors' transformer-based model, understand gene-level tokenization, and evaluate antibiotic resistance prediction metrics. It proves you grasp the core method and its advantages over simpler baselines.

**Grounded in:** The authors developed LLMTB, a BERT-based large language model trained on genomic sequences from 12,185 MTB isolates from the CRyPTIC consortium... LLMTB achieved high F1-scores and AUCROC values on first-line antibiotics.

**Tech stack:** Python 3.11, PyTorch, scikit-learn, pandas, Jupyter Notebook

**Data:** Use a publicly available MTB genomic dataset as a substitute for CRyPTIC data, or simulate genomic sequences with gene tokens and resistance labels based on literature.

**Build it:**

1. Clone and install dependencies for the LLMTB repository.
2. Obtain or simulate a small MTB genomic dataset with gene and intergenic region tokens and resistance labels for select antibiotics.
3. Preprocess the data to match LLMTB input format (gene-level tokenization).
4. Run LLMTB training and evaluation on this dataset using provided scripts.
5. Implement a simple baseline model (e.g., logistic regression on mutation presence) and evaluate it on the same data.
6. Compare LLMTB and baseline metrics (F1-score, AUCROC) and document results.

**Verified links from the paper:**

- <https://github.com/ctestagrose/LLMTB> — released by the paper's authors

**Ships as:** A GitHub repo with code to run LLMTB on a small MTB dataset, baseline comparison scripts, and a report notebook summarizing prediction metrics.

**Stretch goal:** Add attention visualization for the trained model to interpret gene importance on your dataset.

### Advanced — Extend LLMTB to Whole-Genome Context for Resistance Prediction
*Effort: 3+ weeks*

You develop an extended version of LLMTB that incorporates whole-genome sequence context beyond gene and flanking intergenic regions, addressing a key limitation noted in the paper. This involves designing new tokenization schemes or input representations, modifying the transformer architecture if needed, and evaluating the impact on resistance prediction performance on MTB data.

**Why it shows you understood the paper:** This project demonstrates deep comprehension of the LLMTB model and its limitations, and the ability to innovate on model design to capture broader genomic context. It shows readiness for research-level work and potential collaboration with the authors.

**Grounded in:** Model currently limited to gene and flanking intergenic regions, potentially missing whole-genome context and non-gene-based resistance mechanisms.

**Tech stack:** Python 3.11, PyTorch, transformers library, pandas, Jupyter Notebook

**Data:** Use the same MTB genomic data as in the intermediate project, extended or simulated to include whole-genome sequences beyond gene boundaries.

**Build it:**

1. Review LLMTB codebase and understand current gene-level tokenization and model input pipeline.
2. Design a new tokenization approach to include whole-genome sequences, possibly using overlapping k-mers or larger context windows.
3. Modify the LLMTB model input pipeline and transformer embedding layers to accept the new tokenization.
4. Train and evaluate the extended model on MTB data, comparing performance to the original LLMTB.
5. Analyze attention maps or feature importance to assess if broader genomic context improves interpretability.
6. Document challenges, results, and potential biological insights from the extended model.

**Verified links from the paper:**

- <https://github.com/ctestagrose/LLMTB> — released by the paper's authors

**Ships as:** A GitHub repository with extended LLMTB code supporting whole-genome context, training and evaluation scripts, and a detailed report on performance and interpretability improvements.

**Stretch goal:** Integrate rule-based alignment or RAG frameworks to dynamically incorporate new resistance mechanisms as future work.

_The CRyPTIC dataset used in the paper is not publicly available; substitute MTB genomic data must be publicly sourced or simulated carefully to approximate gene tokenization and resistance labels._
