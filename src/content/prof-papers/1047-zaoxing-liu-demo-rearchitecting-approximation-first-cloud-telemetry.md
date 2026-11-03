---
title: "1047 · DEMO: Rearchitecting Approximation-First Cloud Telemetry — Zaoxing Liu"
date: 2026-11-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-zaoxing-liu"
source_hash: "163507416a3ef9020fc3390d211245296a63d49dcd61d242454b991ef89faaaa"
sequence: 1047
generator: "outreach-garden: managed"
---

# 1047 · DEMO: Rearchitecting Approximation-First Cloud Telemetry

## At a glance

- **Professor:** Zaoxing Liu
- **Institution:** Univ. of Maryland - College Park
- **Paper:** [DEMO: Rearchitecting Approximation-First Cloud Telemetry](https://dl.acm.org/doi/pdf/10.1145/3744969.3748405)
- **Authors:** Zeying Zhu, Zaoxing Liu
- **Year:** 2025

## Paper overview

This paper presents a new cloud telemetry system architecture that uses approximate data structures called sketches to reduce the cost and latency of monitoring large-scale cloud systems. By applying approximation techniques at data ingestion, query processing, and storage layers, the system achieves significant cost savings and faster query responses while maintaining high accuracy.

### Why it matters

**Research problem:** Current cloud-native telemetry systems like Prometheus incur high operational costs and latency due to exact data ingestion, repeated computations, and expensive storage when processing rule queries over time series data.

**Why it matters:** Cloud telemetry is critical for monitoring network traffic, resource usage, and detecting anomalies such as DDoS attacks. However, the high cost and latency limit scalability and efficiency, impacting cloud users and operators financially and operationally.

**Key contributions:**

- Design of a hybrid, sketch-based caching architecture unifying optimizations across ingestion, query processing, and storage.
- Demonstration of four telemetry deployment scenarios comparing exact and approximate approaches with cost and performance trade-offs.
- Implementation and open-source release of a prototype integrating sketch-based caching with Prometheus.
- Live demonstration showing up to two orders of magnitude reduction in query latency with >95% accuracy.
- Cost-saving analysis estimating significant monthly billing reductions for large-scale telemetry workloads.

## About the professor

**Zaoxing Liu** — Assistant Professor, Computer Science, Univ. of Maryland - College Park.

Research interests: Systems, Networking, and Architecture, Databases and Big Data, Machine Learning and Data Science, Cybersecurity and Cryptography

### Research links

- [Faculty/profile page](https://www.cs.umd.edu/people/zaoxing)
- [Professor website](https://zaoxing.github.io/)
- [Google Scholar](https://scholar.google.com/citations?user=qvK1_5wAAAAJ)
- [Social profile](http://twitter.com/@Alan_Lau)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Streaming algorithms and sketching
**The paper assumes:** streaming algorithms, sketching data structures, approximate query processing
**Already in this field?** Skip this entirely if you already understand streaming algorithms and sketching techniques used in approximate data analytics.

To understand the core innovation of this paper—using sketch-based approximate data structures to optimize cloud telemetry—it's essential to grasp streaming algorithms and sketching techniques. The rigorous course offers a deep, structured university-level exploration of these concepts, while the fast track provides a concise, focused introduction through a short series of research-level talks. Choose the course for comprehensive mastery or the fast track for a quick, targeted overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Track A Session 5A: Streaming and Sketching](https://www.youtube.com/playlist?list=PLNILGaAs-YJayFqCOu2qRX4XwsIW-Dg5w) — ICALP 2021 · 6 videos · 2.4h across 6 episodes

**Watch only this:** Episodes A5A.1 Separations for Estimating Large Frequency Moments on Data Streams and A5A.3 Non-Mergeable Sketching for Cardinality Estimation, about 46 minutes total — these two episodes introduce fundamental sketching concepts and cardinality estimation relevant to the paper.

*Why it unblocks this paper:* This short series from ICALP 2021 provides concise, research-focused talks on streaming and sketching algorithms, giving a quick yet rigorous overview of the state-of-the-art techniques relevant to approximate telemetry systems.

*If you want all of it:* About 2.4 hours across all 6 episodes.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'DEMO: Rearchitecting Approximation-First Cloud Telemetry,' start by building foundational knowledge on cloud telemetry systems and approximate query processing, which provide the context and technical background for the paper's contributions. Next, explore hybrid caching architectures to grasp the design principles unifying ingestion, query, and storage layers. Finally, focus on the paper's core concept of sketch-based telemetry optimization, including the authors' own talk if available, to directly learn about their novel approximation-first telemetry architecture and its benefits.

### Cloud Telemetry Systems *(prerequisite)*
Understanding baseline cloud telemetry systems and their challenges is essential to appreciate the motivation behind the paper's approximation-first architecture. The selected video provides an advanced, research-oriented overview of telemetry in cloud and AI networks, focusing on streaming telemetry and observability gaps, which aligns well with the paper's context.

*How the paper uses it:* The paper addresses limitations in current cloud-native telemetry systems and proposes improvements.

▶ [Observability for AI Networks - Streaming Telemetry, AIOps & Fixing JCT - AI DC Academy Ep 8](https://www.youtube.com/watch?v=Ofhb-h3_o5U) — AI Data Center Academy · 14:39 · 6mo ago

### Approximate Query Processing *(prerequisite)*
Approximate query processing techniques trade exactness for performance gains, a core principle underlying the paper's use of sketches. The chosen video is a university lecture that rigorously introduces approximate query processing methods, providing the theoretical foundation necessary to understand the paper's approach to reducing query latency and cost.

*How the paper uses it:* The paper applies approximation techniques to telemetry queries to achieve faster responses and cost savings.

▶ [38: Approximate Query Processing](https://www.youtube.com/watch?v=JkfvzDfDRe8) — Immanuel Trummer · 49:37 · 5y ago

### Hybrid Caching Architectures *(prerequisite)*
Hybrid caching architectures unify optimizations across multiple system layers, a key design principle in the paper. The selected video is a recent university lecture on multi-level caching and cache hierarchies, offering an in-depth understanding of caching mechanisms relevant to the paper's hybrid sketch-based caching design.

*How the paper uses it:* The paper proposes a hybrid, sketch-based caching architecture spanning ingestion, query processing, and storage.

▶ [Digital Design and Comp. Arch. - L22: Caches (Spring 2025)](https://www.youtube.com/watch?v=EjjbMfHPkbg) — Onur Mutlu Lectures · 1:50:39 · Streamed 1y ago

### Sketch-Based Telemetry Optimization
This is the paper's core concept, focusing on applying sketch data structures to optimize telemetry systems. The best fit is the authors' own talk or a direct presentation of their work; however, no exact author talk was found. Instead, the chosen video is a research conference talk on high-resolution performance telemetry at scale, which closely relates to telemetry optimization and provides advanced insights into telemetry data handling and performance improvements.

*How the paper uses it:* The paper's main contribution is the design and demonstration of sketch-based caching to reduce telemetry cost and latency.

▶ [High Resolution Performance Telemetry at Scale](https://www.youtube.com/watch?v=zJOEmmGOmVQ) — InfoQ · 47:11 · 6y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper on approximation-first cloud telemetry, start by learning the basics of cloud telemetry systems to grasp the monitoring context and challenges. Then, build foundational knowledge of approximate query processing and hybrid caching architectures, which underpin the paper's efficiency gains. Finally, focus on approximate data structures called sketches and their specific application in telemetry optimization, culminating in the core idea of sketch-based telemetry optimization.

### Cloud Telemetry Systems *(prerequisite)*
Cloud telemetry systems collect and analyze data about cloud infrastructure and applications to monitor performance, detect anomalies, and optimize operations. Understanding these systems provides context on why telemetry data is critical and the challenges of scalability, cost, and latency.

*How the paper uses it:* The paper addresses limitations in current cloud telemetry systems like Prometheus, motivating the need for approximation-first architectures.

▶ [What is Open Telemetry and real world Devops dashboards](https://www.youtube.com/watch?v=r1hQ0WhE7rk) — Hitesh Choudhary · 25:32 · 5mo ago

### Approximate Query Processing *(prerequisite)*
Approximate query processing techniques trade off some accuracy to achieve faster query responses and lower resource usage, which is essential for handling large-scale data efficiently. Learning these methods helps understand how the paper reduces latency and cost while maintaining high accuracy.

*How the paper uses it:* The paper applies approximation techniques at query processing to speed up telemetry rule queries.

▶ [38: Approximate Query Processing](https://www.youtube.com/watch?v=JkfvzDfDRe8) — Immanuel Trummer · 49:37 · 5y ago

### Hybrid Caching Architectures *(prerequisite)*
Hybrid caching combines multiple caching layers to optimize data access speed and resource usage across a system. Understanding caching principles and multi-level cache designs clarifies how the paper unifies optimizations across ingestion, query, and storage layers.

*How the paper uses it:* The paper designs a hybrid, sketch-based caching architecture spanning ingestion, query processing, and storage.

▶ [Lec-7: What is Caching in System Design | All Types of Caching with Real life examples](https://www.youtube.com/watch?v=9ZpOqnX6oI0) — Gate Smashers · 8:01 · 5mo ago

### Approximate Data Structures Sketches *(prerequisite)*
Sketches are compact, probabilistic data structures that summarize large data streams with controlled error, enabling efficient approximate computations like counts and quantiles. Learning about sketches is key to understanding the core method the paper uses to reduce telemetry costs and latency.

*How the paper uses it:* The paper leverages sketch-based approximate caching to achieve high-accuracy telemetry approximations.

▶ [2. Data Structures and Dynamic Arrays](https://www.youtube.com/watch?v=CHhwJjR0mZA) — MIT OpenCourseWare · 50:18 · 5y ago

## Already in your library

- [Data Structures Explained for Beginners - How I Wish I was Taught](https://www.youtube.com/watch?v=O9v10jQkm5c) — also for: On the Implementations of the BiTemporal RDF Model: An Experimental Approach (Abdullah Uz Tansel)
- [14. Caching and Cache-Efficient Algorithms](https://www.youtube.com/watch?v=xDKnMXtZKq8) — also for: BootSeer: Analyzing and Mitigating Initialization Bottlenecks in Large-Scale LLM Training (Gene Cooperman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the approximation-first cloud telemetry architecture using sketch-based caching from the paper. The beginner project reproduces a simple latency comparison using approximate sketches versus exact queries. The intermediate project implements a core sketch-based caching mechanism on a public telemetry dataset, comparing query latency and accuracy against Prometheus. The advanced project extends the approximation approach to a new telemetry query type beyond rule queries, addressing a stated limitation and exploring accuracy-cost trade-offs.

### Beginner — Latency Comparison of Sketch-Based Approximate Queries
*Effort: a weekend, ~8 hours*

You build a simple prototype that simulates rule query latency using approximate sketches versus exact queries on a small synthetic time series dataset. The project measures and compares query latency and reports accuracy metrics for quantile queries.

**Why it shows you understood the paper:** This project demonstrates you grasp the core benefit of sketch-based caching in reducing query latency while maintaining high accuracy, reflecting the paper's key result of up to 100x latency reduction with >95% accuracy.

**Grounded in:** Sketch-based caching reduces rule query latency by up to 100x compared to standard Prometheus and maintains high accuracy (>95%) across various statistical queries.

**Tech stack:** Python 3.11, NumPy, Matplotlib

**Data:** Synthetic time series data generated to simulate telemetry metrics with timestamps and values.

**Build it:**

1. Generate synthetic time series data representing telemetry metrics over time.
2. Implement a simple quantile sketch data structure (e.g., GK sketch) to approximate quantiles.
3. Implement exact quantile computation as baseline.
4. Simulate rule queries on both exact data and sketch-based approximate data, measuring query latency.
5. Calculate accuracy of approximate quantile results compared to exact.
6. Plot latency and accuracy comparisons.

**Ships as:** A GitHub repo with code to generate data, run approximate and exact queries, and a README showing latency and accuracy comparison plots.

**Stretch goal:** Add entropy or distinct count sketches and compare their query latency and accuracy.

### Intermediate — Sketch-Based Caching Prototype for Cloud Telemetry Queries
*Effort: 2 weekends, ~20 hours*

You implement a simplified version of the paper's hybrid sketch-based caching architecture that integrates approximate sketches at ingestion and query layers. Using the Google ClusterData 2019 traces as telemetry data, you compare query latency and accuracy of rule queries against exact Prometheus queries.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's core method on real telemetry data, demonstrating the trade-offs between approximation accuracy, query latency, and cost savings, thus validating the paper's main contributions.

**Grounded in:** The authors propose a hybrid, sketch-based caching architecture unifying optimizations across ingestion, query processing, and storage, demonstrating up to 100x latency reduction with >95% accuracy on rule queries.

**Tech stack:** Python 3.11, Pandas, NumPy, Prometheus (local deployment), Docker

**Data:** Google ClusterData 2019 traces from https://github.com/google/cluster-data used as substitute telemetry time series data.

**Build it:**

1. Download and preprocess Google ClusterData 2019 traces to extract relevant telemetry time series.
2. Implement or integrate existing sketch data structures (e.g., Count-Min Sketch, GK sketch) for approximate caching at ingestion.
3. Set up a local Prometheus instance to run exact rule queries on the same data.
4. Implement a query layer that uses sketches to answer approximate queries.
5. Measure and compare query latency and accuracy between approximate and exact queries.
6. Document cost and resource usage implications based on latency and computation.

**Verified links from the paper:**

- <https://github.com/google/cluster-data> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/pingcap/docs> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/prometheus/snmp_exporter> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code, Docker setup for Prometheus, scripts to run approximate and exact queries on real telemetry data, and a README reporting latency, accuracy, and cost trade-offs.

**Stretch goal:** Add a simple cloud-managed analytics simulation layer to demonstrate multi-layer caching benefits.

### Advanced — Extending Approximate Telemetry to Non-Rule Queries
*Effort: 3+ weeks*

You extend the approximation-first telemetry architecture by implementing sketch-based approximate caching for telemetry query types beyond rule queries, such as anomaly detection or streaming aggregation. You evaluate accuracy, latency, and cost trade-offs on real or synthetic telemetry data.

**Why it shows you understood the paper:** This project addresses a stated limitation and future direction of the paper, demonstrating your ability to innovate beyond the original scope by applying approximation techniques to new telemetry query types and analyzing their practical impact.

**Grounded in:** The demonstration focuses on rule queries and may not generalize to all telemetry query types; future directions include extending approximation techniques to other telemetry query types beyond rule queries.

**Tech stack:** Python 3.11, Apache Flink (for streaming analytics), NumPy, Pandas, Docker

**Data:** Use Google ClusterData 2019 traces or synthetically generate telemetry data streams suitable for anomaly detection or streaming aggregation.

**Build it:**

1. Research telemetry query types beyond rule queries, focusing on anomaly detection or streaming aggregation.
2. Design and implement sketch-based approximate data structures suitable for these query types.
3. Set up a streaming analytics environment using Apache Flink or similar to process telemetry data streams.
4. Integrate approximate sketches into the streaming query processing pipeline.
5. Evaluate query latency, accuracy, and resource usage compared to exact processing.
6. Analyze trade-offs and document findings in a detailed report.

**Verified links from the paper:**

- <https://github.com/google/cluster-data> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/pingcap/docs> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/prometheus/snmp_exporter> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/Froot-NetSys/promsketch> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with streaming analytics code integrating approximate sketches, evaluation scripts, and a comprehensive README discussing extension feasibility, trade-offs, and limitations.

**Stretch goal:** Prototype integration of sketch-based caching into a cloud-managed monitoring system like Prometheus or VictoriaMetrics.
