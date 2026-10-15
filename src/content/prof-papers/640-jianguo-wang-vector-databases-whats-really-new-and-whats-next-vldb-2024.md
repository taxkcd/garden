---
title: "640 · Vector Databases: What’s Really New and What’s Next? (VLDB 2024 Panel) — Jianguo Wang"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-jianguo-wang"
source_hash: "1dadac7729f32f64528b31bdc19123eb47683c999540fa356ec99b59e4b71bb6"
sequence: 640
generator: "outreach-garden: managed"
---

# 640 · Vector Databases: What’s Really New and What’s Next? (VLDB 2024 Panel)

## At a glance

- **Professor:** Jianguo Wang
- **Institution:** Purdue University
- **Paper:** [Vector Databases: What’s Really New and What’s Next? (VLDB 2024 Panel)](https://cs.purdue.edu/homes/csjgwang/pubs/VLDB2024_Panel.pdf)
- **Authors:** Jianguo Wang, Eric Hanson, Guoliang Li, Yannis Papakonstantinou, Harsha Simhadri, Charles Xie
- **Year:** 2024

## Paper overview

This panel paper discusses the recent surge of interest in vector databases, especially due to their role in supporting Large Language Models (LLMs) by storing vector embeddings that provide relevant context for more accurate responses. Although vector search has been studied for over two decades, the paper explores what is truly new about vector databases today, the challenges they face, and their future role in generative AI systems.

### Why it matters

**Research problem:** Despite the long history of vector similarity search, the emergence of LLMs has created new demands and challenges for vector databases, including how to integrate vector search effectively within relational databases, address fundamental challenges not yet solved, and support retrieval-augmented generation (RAG) for LLMs.

**Why it matters:** LLMs have limitations such as hallucination and lack of domain-specific or up-to-date knowledge. Vector databases help overcome these by serving as external knowledge bases that store domain-specific and real-time data embeddings, enabling LLMs to generate more accurate and context-aware responses. This makes vector databases critical infrastructure in AI ecosystems.

**Key contributions:**

- Identification of the role of vector databases as essential components in LLM ecosystems for retrieval-augmented generation (RAG).
- Comparison between specialized vector databases and vector search integrated into relational databases.
- Highlighting fundamental challenges in vector databases that remain unsolved.
- Discussion of the broader role of databases in supporting generative AI beyond vector search.

## About the professor

**Jianguo Wang** — Assistant Professor, Department of Computer Science, Purdue University.

Research interests: Database Systems for the Cloud and Large Language Models, including Disaggregated Databases and Vector Databases.

### Research links

- [Faculty/profile page](https://www.cs.purdue.edu/homes/csjgwang)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Vector similarity search
**The paper assumes:** vector similarity search algorithms, vector embeddings, approximate nearest neighbor search, high-dimensional indexing
**Already in this field?** Skip this entirely if you already understand vector similarity search methods and indexing techniques used in machine learning and database systems.

This background is designed to prepare readers to deeply understand vector similarity search, a core technology underlying vector databases that support Large Language Models (LLMs) as discussed in the paper. The rigorous course offers a detailed, foundational treatment suitable for those seeking a comprehensive grasp of vector computation and indexing, while the fast track provides a concise, visual introduction to key concepts and metrics in vector search, ideal for quickly building intuition before or alongside reading the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Practical High-Performance Computing](https://www.youtube.com/playlist?list=PLFW6lRTa1g82B-3dkK-RHHEr8ZfMRzkv9) — IIT KANPUR-NPTEL · 74 videos · 23.4h across the first 60 episodes

**Watch only this:** Lectures 3 Part A and B: Vectorization and Multicore Processors (about 46 minutes total) — these lectures introduce vector processing concepts essential for understanding vector similarity computations.

*Why it unblocks this paper:* This IIT Kanpur NPTEL course covers vectorization and related computing fundamentals, providing rigorous background on vector operations and memory architectures that underpin vector similarity search algorithms, which are critical to understanding vector databases in the paper.

*If you want all of it:* About 23.4 hours across the first 60 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [📚 Vector Search & Vector Database Engineering](https://www.youtube.com/playlist?list=PLO6J-cftRL0g) — Engineering Visualized · 7 videos · 0.5h across 7 episodes

**Watch only this:** Episodes 1-5: 'What Are Embeddings?', 'How AI Understands Meaning with Vectors', 'Euclidean Distance Explained Visually', 'Manhattan Distance Explained Visually', and 'Why High-Dimensional Spaces Are Weird' (about 20 minutes total) — these cover the foundational ideas and metrics used in vector search.

*Why it unblocks this paper:* Engineering Visualized’s Vector Search & Vector Database Engineering playlist offers clear, visual explanations of embeddings, distance metrics, and high-dimensional vector space properties, directly addressing the core concepts needed to grasp vector similarity search in an accessible format.

*If you want all of it:* About 0.5 hours across all 7 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on vector databases and their evolving role in supporting Large Language Models (LLMs), start with foundational knowledge on vector similarity search and vector indexing structures, which underpin the core technology of vector databases. Next, explore how vector search integrates with relational databases to grasp the architectural challenges discussed in the paper. Finally, focus on the authors' own talks to gain direct insights into the panel discussion and the future directions of vector databases in generative AI systems.

### Vector Similarity Search *(prerequisite)*
Vector similarity search is the fundamental technique enabling efficient retrieval of relevant vectors, which is critical for vector databases to support LLMs. Understanding approximate nearest neighbor algorithms and indexing methods provides the technical background for the paper's discussion on challenges and innovations in vector search.

*How the paper uses it:* The paper discusses vector similarity search as a long-studied but evolving core technique in vector databases, especially in the context of LLMs.

▶ [Vector Similarity Search in Relational Databases](https://www.youtube.com/watch?v=4D2VdPCY35E) — Free and Open Source Software Conference (FrOSCon) e.V. · 43:45

### Vector Indexing Structures *(prerequisite)*
Vector indexing structures such as HNSW, IVF, and PQ are essential for achieving fast and scalable vector search performance. A solid grasp of these data structures helps understand the performance and scalability challenges highlighted in the paper.

*How the paper uses it:* The paper references fundamental challenges in vector databases, many of which relate to efficient indexing and retrieval of vectors.

▶ [#09 - Vector Indexes, Inverted Indexes, Filters, Tries ✸ TiDB Talk (CMU Intro to Database Systems)](https://www.youtube.com/watch?v=foMMYyycRgk) — CMU Database Group · 2 yr ago

### Relational Databases and Extensions *(prerequisite)*
Understanding relational databases and their extensions is crucial to appreciate the debate on whether vector search should be integrated into relational systems or handled by specialized vector databases. This background supports comprehension of the architectural trade-offs discussed by the panel.

*How the paper uses it:* The paper compares specialized vector databases with vector search features integrated into relational databases, a key theme in the panel discussion.

▶ [Introduction to Relational Databases](https://www.youtube.com/watch?v=WI9dE8-TFAc) — Neso Academy · 4 yr ago

### Retrieval-Augmented Generation (RAG)
Retrieval-Augmented Generation is a key application of vector databases to enhance LLM responses by providing external knowledge. Understanding RAG contextualizes the practical importance of vector databases in generative AI systems as discussed in the paper.

*How the paper uses it:* The paper identifies vector databases as essential components in LLM ecosystems for supporting RAG.

▶ [An Introduction to Retrieval-Augmented Generation](https://www.youtube.com/watch?v=L7C3-qOYScQ) — Sharcnet HPC · 47:49

### Paper Authors' Talk *(paper-talk search result; attribution unverified)*
Direct talks by Jianguo Wang, the paper's first author and panel moderator, provide authoritative insights into the novelty, challenges, and future directions of vector databases in the context of LLMs and generative AI. These talks offer the most relevant and advanced perspective on the paper's content.

*How the paper uses it:* Jianguo Wang's talks directly address the panel discussion topics and reflect his expertise from co-authoring leading vector databases.

▶ [NWDS Talk - Jianguo Wang - Database Systems for LLMs](https://www.youtube.com/watch?v=oMXm2_QoGGg) — UW Database Group · 49:54

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced video path introduces the foundational concepts needed to understand vector databases and their role in supporting Large Language Models (LLMs) as discussed in the paper. Starting with the basics of relational databases, it then covers vector similarity search and vector indexing structures, which are core to how vector databases operate. Finally, it presents concise, clear explainers on vector databases themselves and their application in retrieval-augmented generation (RAG) to improve LLM responses.

### Relational Databases and Extensions *(prerequisite)*
Relational databases are the traditional backbone of data storage and management, organizing data into tables with rows and columns. Understanding how they work is essential before exploring how vector search features can be integrated into them to support AI applications.

*How the paper uses it:* The paper discusses the integration of vector search capabilities within relational databases as a key challenge and opportunity.

▶ [Relational Databases Made Super Simple for Beginners](https://www.youtube.com/watch?v=MpzCQs4u_Oo) — Bart Slodyczka · 49:04

### Vector Similarity Search *(prerequisite)*
Vector similarity search is the technique that allows databases to find data points (vectors) that are closest to a query vector, enabling semantic search and AI applications. This concept is fundamental to how vector databases provide relevant context to LLMs.

*How the paper uses it:* Vector similarity search underpins the retrieval of relevant embeddings that help LLMs generate accurate, context-aware responses.

▶ [Webinar replay: Vector Similarity Search & Indexing Methods](https://www.youtube.com/watch?v=3Zg1iKRxgkU) — Zilliz · 21:02

### Vector Indexing Structures *(prerequisite)*
Vector indexing structures are specialized data structures that enable fast and efficient vector similarity search by organizing vectors for quick retrieval. Knowing these helps understand the performance challenges and solutions in vector databases.

*How the paper uses it:* The paper highlights fundamental challenges in vector databases related to indexing and search performance.

▶ [How HNSW, IVF, & PQ Algorithms Power AI Search](https://www.youtube.com/watch?v=xMCyq4pJcrQ) — SH AI Academy · 9:42

### Vector Databases: Core Concept *(paper-talk search result; attribution unverified)*
Vector databases store and manage vector embeddings, enabling semantic search and AI applications like LLMs to access relevant external knowledge. This video explains what vector databases are and why they are critical in modern AI ecosystems.

*How the paper uses it:* The paper centers on the novelty and role of vector databases in supporting LLMs and generative AI.

▶ [Vector Databases Explained: The Complete Guide for 2026](https://www.youtube.com/watch?v=4pUYfY-b5CQ) — Aishwarya Srinivasan · 9:53

### Retrieval-Augmented Generation (RAG)
Retrieval-Augmented Generation combines LLMs with external knowledge retrieval to produce more accurate and context-aware responses. Understanding RAG shows how vector databases directly enhance LLM capabilities.

*How the paper uses it:* The paper identifies vector databases as essential components enabling RAG for LLMs.

▶ [What is Retrieval-Augmented Generation (RAG)?](https://www.youtube.com/watch?v=T-D1OfcDW1M) — IBM Technology · 3 yr ago

## Already in your library

- [Introduction to RAG (Retrieval Augmented Generation) | Deep Learning](https://www.youtube.com/watch?v=cXcgyzuljyY) — also for: InferScale: GPU-Native KV Injection for Personalized LLM Serving (Prashant Pandey)
- [A Helping Hand for LLMs (Retrieval Augmented Generation) - Computerphile](https://www.youtube.com/watch?v=of4UDMvi2Kw) — also for: LTLGuard: Formalizing LTL Specifications with Compact Language Models and Lightweight Symbolic Reasoning (Stavros Tripakis)
- [RAG Explained For Beginners](https://www.youtube.com/watch?v=_HQ2H_0Ayy0) — also for: MerryQuery: A Trustworthy LLM-Powered Tool Providing Personalized Support for Educators and Students (Tiffany Barnes)
- [Retrieval-augmented generation (RAG), Clearly Explained (Why it Matters)](https://www.youtube.com/watch?v=VioF7v8Mikg) — also for: Agentic RAG-Driven Multi-Omics Analysis for PI3K/AKT Pathway Deregulation in Precision Medicine (Dong Xu)
- [RAG Explained in 12 Minutes](https://www.youtube.com/watch?v=v0ynfDPpe4E) — also for: Multi-RAG: A Multimodal Retrieval-Augmented Generation System for Adaptive Video Understanding (Tinoosh Mohsenin)
- [LLMs — How ChatGPT works & What is RAG? | Retrieval-Augmented Generation Explained 🔥](https://www.youtube.com/watch?v=hYZKrPOyEYk) — also for: Towards LLM Agents for Earth Observation (Carl Vondrick)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder grounded in the 2024 VLDB panel paper on vector databases. The beginner project introduces vector similarity search basics using familiar tools, the intermediate project implements a core vector search method to compare specialized versus integrated approaches, and the advanced project tackles a future direction by exploring architectural trade-offs for vector search inside relational databases to support generative AI.

### Beginner — Simple Vector Similarity Search with FAISS
*Effort: a weekend, ~8 hours*

You build a small vector similarity search demo using Facebook's FAISS library to index and query vector embeddings generated from text snippets. You will create embeddings with a pre-trained sentence transformer model and perform nearest neighbor search to retrieve relevant text.

**Why it shows you understood the paper:** This project shows you understand the core mechanism of vector similarity search, a fundamental building block discussed in the paper, and how vector embeddings provide context for LLMs.

**Grounded in:** Vector databases effectively address LLM limitations by storing vector embeddings of domain-specific data for retrieval-augmented generation.

**Tech stack:** Python 3.11, sentence-transformers, faiss-cpu, Jupyter Notebook

**Data:** Use a small public text dataset such as 20 Newsgroups or a custom set of 100 short documents as a stand-in for domain-specific data embeddings.

**Build it:**

1. Install Python packages: sentence-transformers and faiss-cpu.
2. Load or create a small corpus of text documents (e.g., 100 news snippets).
3. Generate vector embeddings for each document using a pre-trained sentence transformer.
4. Build a FAISS index on the embeddings.
5. Implement a query function that embeds a user query and retrieves the top-k nearest documents.
6. Test the retrieval quality with sample queries and document matches.

**Ships as:** A Jupyter notebook and Python scripts demonstrating vector embedding generation, indexing, and similarity search with example queries and results.

**Stretch goal:** Add a simple web UI with React or Streamlit to input queries and display retrieved documents interactively.

### Intermediate — Comparing Specialized Vector DB and Relational DB Vector Search
*Effort: 2 weekends, ~20 hours*

You implement a small-scale vector search system that compares a specialized vector database approach (using FAISS) against a vector search integrated into a relational database (using PostgreSQL with pgvector extension). You will index the same vector embeddings in both systems and compare query latency and retrieval accuracy on a public dataset.

**Why it shows you understood the paper:** This project demonstrates comprehension of the paper's key contribution comparing specialized vector databases and relational database vector search integration, including practical trade-offs in performance and flexibility.

**Grounded in:** Comparison between specialized vector databases and vector search integrated into relational databases.

**Tech stack:** Python 3.11, sentence-transformers, faiss-cpu, PostgreSQL 15+, pgvector extension, psycopg2

**Data:** Use the publicly available 20 Newsgroups dataset or a similar text corpus to generate vector embeddings for indexing.

**Build it:**

1. Set up PostgreSQL with the pgvector extension installed.
2. Generate vector embeddings for the dataset using a pre-trained sentence transformer.
3. Index embeddings in FAISS and in PostgreSQL's vector column.
4. Implement query functions for both systems to retrieve nearest neighbors.
5. Measure and compare query latency and retrieval accuracy (e.g., recall@k) for a set of test queries.
6. Document the differences in setup complexity, query performance, and retrieval quality.

**Ships as:** A GitHub repository with scripts to build both vector search systems, benchmark results comparing them, and a detailed README explaining findings.

**Stretch goal:** Extend the comparison by adding a simple retrieval-augmented generation (RAG) demo that uses retrieved documents as context for an LLM prompt.

### Advanced — Architectural Exploration of Vector Search Inside Relational Databases for Generative AI
*Effort: 3+ weeks*

You design and prototype an architectural framework that integrates vector search tightly within a relational database to support retrieval-augmented generation (RAG) workflows for LLMs. This includes implementing a vector indexing module inside PostgreSQL, optimizing query execution plans for hybrid relational and vector queries, and demonstrating a small RAG pipeline that queries the vector index and feeds results to an LLM API.

**Why it shows you understood the paper:** This project addresses a key future direction and open challenge from the paper: how to implement vector search inside relational databases balancing performance and flexibility for generative AI applications.

**Grounded in:** Exploring the unique challenges and opportunities of implementing vector search inside relational databases; building future database systems to better support generative AI applications.

**Tech stack:** Python 3.11, PostgreSQL 15+, pgvector, SQLAlchemy, OpenAI API or Hugging Face transformers, Docker

**Data:** Use a public text dataset such as 20 Newsgroups or Wikipedia abstracts to generate embeddings and simulate domain-specific knowledge for RAG.

**Build it:**

1. Set up PostgreSQL with pgvector and configure vector indexing.
2. Design a schema combining relational data and vector embeddings to support hybrid queries.
3. Implement optimized SQL queries that combine vector similarity and relational filters.
4. Build a Python service that performs RAG by querying the vector index and passing retrieved documents to an LLM API for answer generation.
5. Benchmark query performance and demonstrate improved LLM responses with retrieval context.
6. Document architectural trade-offs, challenges encountered, and potential improvements.

**Ships as:** A prototype system with code and documentation showing integrated vector search in a relational database supporting RAG, including performance benchmarks and example LLM outputs.

**Stretch goal:** Explore disaggregated database architectures or caching strategies to further improve vector search performance inside relational databases.
