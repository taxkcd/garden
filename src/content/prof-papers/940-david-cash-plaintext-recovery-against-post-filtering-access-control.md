---
title: "940 · Plaintext Recovery Against Post-Filtering Access Control — David Cash"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-david-cash"
source_hash: "6cc4d664cfe3ac4a0ac1cbf5e41ad1deccd03402b0b0dcff1f427ed2f023cd2b"
sequence: 940
generator: "outreach-garden: managed"
---

# 940 · Plaintext Recovery Against Post-Filtering Access Control

## At a glance

- **Professor:** David Cash
- **Institution:** University of Chicago
- **Paper:** [Plaintext Recovery Against Post-Filtering Access Control](https://arxiv.org/pdf/2608.11730)
- **Authors:** Zachary Espiritu, David Cash
- **Year:** 2026

## Paper overview

This paper demonstrates that fine-grained access control (FGAC) mechanisms in databases, which are designed to restrict user access to only authorized data, can be vulnerable to side-channel attacks. Specifically, it shows that timing and scoring side-channels in systems like PostgreSQL and Elasticsearch/OpenSearch can be exploited using rich query interfaces to reconstruct entire hidden records or approximate text from protected data, breaking the intended data isolation.

### Why it matters

**Research problem:** Fine-grained access control (FGAC) systems often implement post-filtering, where queries run over all data and private results are redacted afterwards. Prior work showed this can leak membership information via side-channels, but did not demonstrate efficient recovery of full records or documents. This paper investigates whether these side-channels can be amplified using rich queries to fully reconstruct sensitive data.

**Why it matters:** FGAC is widely deployed in multi-tenant databases and organizational systems to enforce data isolation and least privilege. If side-channels allow attackers to reconstruct sensitive data, it undermines confidentiality guarantees, risking privacy breaches, compliance violations, and financial harm. Understanding and mitigating these vulnerabilities is critical for secure database deployments.

**Key contributions:**

- Demonstration that rich query interfaces amplify FGAC side-channels from simple membership tests to full record or approximate text reconstruction.
- Development of a timing-based existence oracle in PostgreSQL RLS that supports efficient binary search over large attribute domains and tuple reconstruction via conjunctions.
- Identification of a new prefix-expansion scoring side-channel in Elasticsearch/OpenSearch enabling recovery of n-grams and approximate text from protected corpora.
- Comprehensive experimental evaluation showing high accuracy and efficiency of attacks under realistic conditions including noise and network latency.
- Discussion of mitigations and the fundamental brittleness of post-filtering FGAC architectures when rich queries are supported.

## About the professor

**David Cash** — Professor, Department of Computer Science, University of Chicago.

Research interests: cryptography, computer security, and theoretical computer science

### Research links

- [Faculty/profile page](https://people.cs.uchicago.edu/~davidcash)
- [Google Scholar](https://scholar.google.com/citations?user=K0rhcG0AAAAJ)
- [DBLP](https://dblp.uni-trier.de/pers/hd/c/Cash:David)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Database Security and Access Control
**The paper assumes:** database security models, access control mechanisms, query processing under security policies
**Already in this field?** Skip this entirely if you already understand database security principles, fine-grained access control, and how query execution interacts with security policies.

To understand the vulnerabilities and attack strategies against fine-grained access control (FGAC) in databases as presented in the paper, a solid grasp of database security principles, access control models, and query-based enforcement mechanisms is essential. The rigorous course option offers a structured, university-level introduction to database security and access control, ideal for deep foundational knowledge. The fast track provides a concise, focused playlist covering the same core topics in a shorter time, suitable for readers needing a quick but clear conceptual overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [HTCS701 – Database Security and Access Control | B.Tech (Honours) Cyber Security | AKTU](https://www.youtube.com/playlist?list=PLGWJcf5b3tPqcG5r34h0tEQZ2tNSZIXO8) — TechDecode AIML · 10 videos · 1.4h across 10 episodes

**Watch only this:** Episodes 1-6 (Introduction to Access Control, Types of Access Control Models, Purpose and fundamentals of access control, UNIT 2: Policies of Access Control, Models of Access Control, Access Control Mechanism), about 48 minutes total — these cover the core concepts of access control models and mechanisms necessary to grasp the paper's context.

*Why it unblocks this paper:* This AKTU B.Tech (Honours) Cyber Security course covers access control fundamentals, models, policies, and mechanisms in a structured manner, directly relevant to understanding FGAC and post-filtering architectures exploited in the paper.

*If you want all of it:* All 10 episodes, about 1.4 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Plaintext Recovery Against Post-Filtering Access Control," start by building foundational knowledge on the key technical components involved: the architectural differences between post-filtering and pre-filtering access control, the timing side-channels in row-level security (RLS) systems like PostgreSQL, and the scoring side-channels in full-text search systems such as Elasticsearch/OpenSearch. Then, explore adaptive query strategies that enable efficient side-channel exploitation. Finally, conclude with the authors' own expert talk that directly addresses their novel attacks and findings, providing the most precise and relevant insights.

### Post-filtering vs pre-filtering access control *(prerequisite)*
Understanding the architectural distinction between post-filtering and pre-filtering access control is critical because the paper identifies fundamental brittleness in post-filtering FGAC systems when rich queries are supported. This background clarifies why certain side-channels arise and why mitigation strategies involve trade-offs in performance and functionality.

*How the paper uses it:* The paper discusses how post-filtering FGAC architectures inherently leak information via side-channels and contrasts this with pre-filtering approaches.

▶ [CCNA 200-301 Lecture 11 (TCP, IP Access Control List, Filtering)](https://www.youtube.com/watch?v=EJARCsX0gT0) — URDUIT Academy · 19:42 · 6y ago

### Database row-level security timing attacks *(prerequisite)*
Row-level security (RLS) timing side-channels form the basis of the PostgreSQL attack in the paper. A detailed understanding of RLS mechanisms and how timing variations can leak information about data access policies is essential to grasp the binary search and conjunctive query techniques used for record reconstruction.

*How the paper uses it:* The paper exploits PostgreSQL's RLS timing side-channel to recover full records using adaptive range and conjunctive queries.

▶ [Everything you need to know about Postgres Row Level Security | POSETTE 2024](https://www.youtube.com/watch?v=vZT1Qx2xUCo) — Microsoft Developer · 18:19 · 2y ago

### Full-text search scoring side-channels *(prerequisite)*
The scoring side-channel in full-text search systems like Elasticsearch/OpenSearch is a core component of the paper's second case study. Understanding how scoring oracles and prefix expansions work in multi-tenant search indexes enables comprehension of how approximate text and n-gram recovery is achieved.

*How the paper uses it:* The paper identifies and exploits a new prefix-expansion scoring side-channel in Elasticsearch/OpenSearch to recover indexed terms and approximate text.

▶ [Side-Channel Attacks on Shared Search Indexes](https://www.youtube.com/watch?v=ElwMBoPKWzE) — IEEE Symposium on Security and Privacy · 20:33 · 9y ago

### Adaptive query strategies for side-channel attacks *(prerequisite)*
Adaptive query strategies are the methodological core that allow efficient amplification of simple membership leakage into full record or text reconstruction. Familiarity with how side-channel attacks can be optimized through adaptive querying is important to appreciate the paper's contributions on attack efficiency and accuracy under realistic conditions.

*How the paper uses it:* The paper develops adaptive query strategies to efficiently exploit timing and scoring side-channels for data reconstruction.

▶ [Last-Level Cache Side-Channel Attacks are Practical](https://www.youtube.com/watch?v=vpGI1ggKzC4) — IEEE Symposium on Security and Privacy · 19:32 · 11y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk provides direct insight into their novel side-channel attacks, experimental evaluations, and the implications for FGAC systems. This talk is the most authoritative and detailed resource for understanding the paper's contributions and the practical impact of their findings.

*How the paper uses it:* This talk is by the authors themselves, presenting their research on side-channel attacks against post-filtering access control.

▶ [\[EXPERT\] Business Logic 12 | Bypassing Access Controls using Email Address Parsing Discrepancies](https://www.youtube.com/watch?v=03T-9IN0beY) — TORHAT · 24:01 · 6mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path guides you through the foundational concepts needed to understand how fine-grained access control (FGAC) systems can leak sensitive data via side-channels, culminating in the specific timing and scoring side-channel attacks demonstrated in the paper. We start with basic access control models and side-channel attack intuition, then explore database row-level security and full-text search scoring mechanisms, and finally cover the architectural trade-offs in post-filtering FGAC and adaptive query strategies that enable efficient data reconstruction.

### Post-filtering vs pre-filtering access control *(prerequisite)*
Begin by understanding the difference between post-filtering and pre-filtering access control architectures. Pre-filtering restricts data access before query execution, while post-filtering runs queries over all data and then redacts unauthorized results, which can introduce vulnerabilities.

*How the paper uses it:* The paper shows that post-filtering FGAC architectures are fundamentally brittle when rich queries are supported, leading to side-channel leaks.

▶ [Pre-Filter policy on Access Control Part 3](https://www.youtube.com/watch?v=3IqNCajOrL0) — Securing Networks with Cisco Firepower Threat Defense · 8:50 · 8y ago

### Fine-grained access control side-channels *(prerequisite)*
Learn what side-channel attacks are and how they can leak information unintentionally through indirect channels like timing or scoring, even when direct access is restricted. This builds intuition on why FGAC systems can be vulnerable despite enforcing access policies.

*How the paper uses it:* The paper exploits timing and scoring side-channels in FGAC systems to reconstruct sensitive data beyond simple membership leakage.

▶ [Side Channels Are Everywhere -- What are Side Channels? -- Episode 1.1](https://www.youtube.com/watch?v=qS9dDWCGsIU) — Side Channel Security · 19:47 · 4y ago

### Database row-level security timing attacks *(prerequisite)*
Understand how row-level security (RLS) works in databases like PostgreSQL to restrict access to rows based on policies, and how timing differences in query responses can leak information about protected data.

*How the paper uses it:* The paper develops a timing-based existence oracle in PostgreSQL RLS to efficiently binary search attribute domains and reconstruct full records.

▶ [Everything you need to know about Postgres Row Level Security | POSETTE 2024](https://www.youtube.com/watch?v=vZT1Qx2xUCo) — Microsoft Developer · 18:19 · 2y ago

### Full-text search scoring side-channels *(prerequisite)*
Explore how full-text search systems like Elasticsearch rank documents using scoring mechanisms, and how these scores can unintentionally reveal information about the presence of terms or phrases, creating a side-channel.

*How the paper uses it:* The paper identifies a prefix-expansion scoring side-channel in Elasticsearch/OpenSearch that enables approximate text recovery from protected documents.

▶ [Side-Channel Attacks on Shared Search Indexes](https://www.youtube.com/watch?v=ElwMBoPKWzE) — IEEE Symposium on Security and Privacy · 20:33 · 9y ago

### Adaptive query strategies for side-channel attacks
Learn about adaptive query techniques that iteratively refine queries based on previous responses to efficiently extract hidden information from side-channels, reducing the number of queries needed for reconstruction.

*How the paper uses it:* The paper develops adaptive query strategies combining range, prefix, and conjunctive queries to amplify side-channel leakage into full record or text reconstruction.

▶ [Last-Level Cache Side-Channel Attacks are Practical](https://www.youtube.com/watch?v=vpGI1ggKzC4) — IEEE Symposium on Security and Privacy · 19:32 · 11y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Hear directly from experts about the novel side-channel attacks they discovered, their methodology, and the implications for database security, providing deeper insight into the paper's contributions.

*How the paper uses it:* This video features a detailed discussion of bypassing access controls using side-channel techniques similar to those in the paper.

▶ [\[EXPERT\] Business Logic 12 | Bypassing Access Controls using Email Address Parsing Discrepancies](https://www.youtube.com/watch?v=03T-9IN0beY) — TORHAT · 24:01 · 6mo ago

## Already in your library

- [16. Side-Channel Attacks](https://www.youtube.com/watch?v=3v5Von-oNUg) — also for: Encryption Based Covert Channel for Large Language Models (Yongge Wang)
- [Introduction to Access Control](https://www.youtube.com/watch?v=-s5HIG6E-Nk) — also for: Automatically Tightening Access Control Policies with Restricter (Scott D. Stoller)
- [Side Channel attacks in the cloud - Presented By Gorka Irazoqui Apecechea](https://www.youtube.com/watch?v=gc6k_hK7FKk) — also for: NVBleed: Covert and Side-Channel Attacks on NVIDIA Multi-GPU Interconnect (Nael B. Abu-Ghazaleh)
- [What is a Side Channel Attack and types of side channel attacks](https://www.youtube.com/watch?v=4jZISuiC29M) — also for: Testing side-channel security of cryptographic implementations against future microarchitectures (Daniel Genkin)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's core findings on side-channel attacks against post-filtering fine-grained access control (FGAC). The beginner project reproduces a simple timing side-channel oracle in PostgreSQL RLS to binary search an attribute value. The intermediate project implements the paper's core binary search and conjunctive query attack to reconstruct full rows on a small synthetic dataset. The advanced project extends the attack to a more realistic setting with restricted query templates, addressing a key limitation noted by the authors.

### Beginner — PostgreSQL RLS Timing Oracle for Attribute Binary Search
*Effort: a weekend (~6-8 hours)*

You build a minimal PostgreSQL database with row-level security (RLS) enabled on a small table with a numeric attribute. You implement a timing side-channel oracle by issuing range queries and measuring response times to perform a binary search that recovers the exact attribute value of a hidden row.

**Why it shows you understood the paper:** This project concretely demonstrates the paper's key insight that timing side-channels in PostgreSQL RLS can be exploited via range queries to efficiently recover attribute values, moving beyond simple membership tests.

**Grounded in:** Development of a timing-based existence oracle in PostgreSQL RLS that supports efficient binary search over large attribute domains and tuple reconstruction via conjunctions.

**Tech stack:** PostgreSQL 15+, Python 3.11, psycopg2, bash scripting

**Data:** A small synthetic PostgreSQL table with a few rows and numeric attributes, created locally.

**Build it:**

1. Set up PostgreSQL with RLS enabled on a test table containing numeric attributes.
2. Configure RLS policies to restrict direct access but allow queries that trigger post-filtering.
3. Write a Python script to issue range queries and measure query execution times.
4. Implement a binary search algorithm using timing measurements to infer the hidden attribute value.
5. Validate the recovered attribute against the known ground truth.

**Ships as:** A GitHub repo with PostgreSQL setup scripts, Python oracle code, and a README explaining the timing side-channel and binary search attack.

**Stretch goal:** Add conjunctive queries combining multiple attributes to recover partial tuples.

### Intermediate — Full Row Reconstruction Attack on PostgreSQL RLS via Adaptive Queries
*Effort: 1-3 weekends (~20 hours)*

You implement the paper's core adaptive query strategy to reconstruct full rows protected by PostgreSQL RLS. Using a synthetic dataset with multiple attributes, you combine binary search over attribute domains with conjunctive queries to recover entire tuples. You compare the binary search approach to a naive linear probing baseline and report precision and recall metrics.

**Why it shows you understood the paper:** This project faithfully reproduces the paper's main experimental result that rich query interfaces amplify FGAC side-channels from membership tests to full record reconstruction with high accuracy and efficiency.

**Grounded in:** Full row reconstruction is feasible by combining attribute enumeration with conjunctive queries, achieving near-perfect recall and precision.

**Tech stack:** PostgreSQL 15+, Python 3.11, psycopg2, pandas, matplotlib

**Data:** A synthetic PostgreSQL dataset with multiple numeric and categorical attributes, generated locally to simulate protected records.

**Build it:**

1. Create a synthetic dataset with multiple attributes and load it into PostgreSQL with RLS enabled.
2. Implement the timing-based binary search oracle for each attribute domain.
3. Develop an adaptive query strategy that issues conjunctive range queries to reconstruct full tuples.
4. Implement a baseline linear probing method for attribute recovery.
5. Run experiments comparing binary search and linear probing in terms of query count and accuracy.
6. Visualize and report precision, recall, and query efficiency metrics.

**Ships as:** A GitHub repo containing dataset generation scripts, attack implementation, experimental results, and a detailed README with analysis.

**Stretch goal:** Incorporate noise and network latency simulation to evaluate attack robustness as in the paper.

### Advanced — Evaluating Reconstruction Attacks under Restricted Query Interfaces
*Effort: several weeks (~40+ hours)*

You extend the paper's work by simulating an application-mediated access model that restricts query expressiveness (e.g., limited to predefined templates). You adapt the binary search and conjunctive query reconstruction attack to this constrained setting, evaluating attack feasibility and accuracy. This addresses a key limitation and future direction identified by the authors.

**Why it shows you understood the paper:** This project tackles a fundamental limitation of the original attacks by exploring how query restrictions impact side-channel exploitation, contributing new insights aligned with the paper's future research agenda.

**Grounded in:** Attacks assume the adversary can issue arbitrary or sufficiently expressive queries; app-mediated access with restricted query templates may limit attack feasibility.

**Tech stack:** PostgreSQL 15+, Python 3.11, psycopg2, FastAPI, React, Docker

**Data:** Synthetic dataset similar to the intermediate project, deployed in a containerized PostgreSQL instance with a mock app enforcing restricted query templates.

**Build it:**

1. Develop a mock application layer (e.g., FastAPI + React) that exposes a limited set of query templates to users.
2. Deploy PostgreSQL with RLS and load the synthetic dataset.
3. Implement the binary search and conjunctive query attack adapted to only use allowed query templates.
4. Measure attack success rates, query counts, and reconstruction accuracy under query restrictions.
5. Analyze trade-offs between query expressiveness and attack feasibility.
6. Document findings and suggest mitigation strategies.

**Ships as:** A GitHub repo with the mock app code, attack scripts adapted to restricted queries, experimental results, and a comprehensive README discussing implications.

**Stretch goal:** Explore integration of differential privacy or cryptographic protections to mitigate side-channels.
