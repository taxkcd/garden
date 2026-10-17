---
title: "691 · Semantically Enhanced Time Series Databases in IoT‐Edge‐Cloud Infrastructure — Farokh B. Bastani"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-farokh-b-bastani"
source_hash: "5d9077deeaf86e2f25e63d2722dfea35258041a36604a70c0843af2bb9f8dd93"
sequence: 691
generator: "outreach-garden: managed"
---

# 691 · Semantically Enhanced Time Series Databases in IoT‐Edge‐Cloud Infrastructure

## At a glance

- **Professor:** Farokh B. Bastani
- **Institution:** University of Texas at Dallas
- **Paper:** [Semantically Enhanced Time Series Databases in IoT‐Edge‐Cloud Infrastructure](https://arxiv.org/pdf/1902.03533v1)
- **Authors:** Shuai Zhang, Wenxi Zeng, I-Ling Yen, Farokh B. Bastani
- **Year:** 2026

## Paper overview

This paper addresses the challenge of managing and retrieving large volumes of sensor-generated time series data in IoT-based monitoring systems, especially for fault detection and diagnosis. It proposes a semantic model that enriches time series databases (TSDBs) with detailed metadata about sensors, monitored entities, metrics, and measurement units. The authors developed a tool suite called SE-TSDB that adds semantic capabilities on top of existing TSDBs, enabling advanced data retrieval, reasoning, and integration across IoT, edge, and cloud infrastructures. A cloud monitoring case study illustrates the approach.

### Why it matters

**Research problem:** Existing time series databases lack rich semantic descriptions for monitoring data streams, which limits effective data discovery, integration, reasoning, and retrieval in complex IoT-Edge-Cloud infrastructures.

**Why it matters:** IoT monitoring systems generate massive continuous data streams from numerous sensors. Without proper semantics, it is difficult to interpret, locate, and integrate data streams for timely fault detection and diagnosis, especially in large-scale distributed infrastructures where data migrate dynamically.

**Key contributions:**

- Identification of semantic shortcomings in existing TSDBs for IoT monitoring data.
- Development of a comprehensive semantic model (Measurement Description) for time series data specification including system, metric, and unit ontologies.
- Implementation of SE-TSDB tool suite that enhances existing TSDBs with semantic capabilities.
- Design of semantic-based query interfaces supporting exact and similarity-based retrievals.
- Development of a reasoning engine that derives new data streams and performs semantic matchmaking.

## About the professor

**Farokh B. Bastani** — Professor of Computer Science, Computer Science, University of Texas at Dallas.

Research interests: AI-Based Automated Software Synthesis and Testing, Embedded Real-Time Process-Control and Telecommunications Systems, Formal Methods and Automated Program Transformation, High-Assurance Autonomous Decentralized Systems, High-Confidence Software Reliability and Safety Assurance, Inherently Fault-Tolerant and Self-Stabilizing Distributed Systems, Modular Parallel Programs, Tele-Collaborative Systems

### Research links

- [Faculty/profile page](https://www.utdallas.edu/~bastani)
- [Professor website](http://www.utdallas.edu/~Farokh.Bastani)
- ['[NSF Industrial & University Cooperative Research Center (IUCRC)](https://personal.utdallas.edu/~Farokh.Bastani/center/iucrc.html)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Semantic Web and Ontologies
**The paper assumes:** semantic web technologies, ontology modeling, and semantic reasoning
**Already in this field?** Skip this entirely if you already understand semantic web standards, ontology design, and reasoning engines in computer science.

This background focuses on Semantic Web and Ontologies, which are foundational to understanding the semantic modeling and reasoning techniques used in the paper on enhancing time series databases for IoT-Edge-Cloud infrastructures. The rigorous course option offers a structured university-level lecture series for deep comprehension, while the fast track provides a concise, accessible introduction to the core concepts, suitable for quickly grasping the essentials before diving into the paper.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Mastering the Semantic Web: RDF](https://www.youtube.com/playlist?list=PLEesrSYoqz0yeani9iZG8DI7joKULtgWf) — Dr. Al-Hakam Hamdan · 16 videos · 1.6h across 16 episodes

**Watch only this:** Watch episodes 1 through 10 (Intro to Mastering the Semantic Web through RDF Typing), about 58 minutes total — this subset covers the essential RDF concepts and ontology basics needed to follow the semantic modeling approach in the paper.

*Why it unblocks this paper:* This short-form series provides a clear, concise introduction to RDF and Semantic Web basics in about 1.6 hours total, ideal for quickly grasping the key concepts of RDF triples, namespaces, and ontologies that underpin the semantic enhancements in the paper.

*If you want all of it:* About 1.6 hours across all 16 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on semantically enhanced time series databases in IoT-Edge-Cloud infrastructure, start by building foundational knowledge on ontologies in IoT data management and the architecture of time series databases. Then, explore semantic query processing and reasoning techniques, followed by the context of IoT-Edge-Cloud data integration. Finally, focus on the paper's core concept of semantic modeling for time series data, including the authors' own expert talk on time series databases to grasp the specific enhancements proposed.

### Ontologies in IoT Data Management *(prerequisite)*
Understanding ontologies is critical for grasping the semantic model components developed in the paper, such as the System, Metric, and Measurement Unit Ontologies. The selected talk from the Software Engineering Institute at Carnegie Mellon University provides an in-depth academic discussion on applying ontologies to software architecture, which aligns well with the semantic modeling approach in the paper.

*How the paper uses it:* The paper's semantic model relies on ontologies to enrich time series data with meaningful metadata for improved retrieval and reasoning.

▶ [SATURN 2015 Talk: Applying Ontologies to Software Architecture by Ian Maung](https://www.youtube.com/watch?v=bj_OIMPnM3Q) — Software Engineering Institute | Carnegie Mellon University · 1:46:01 · 11y ago

### Time Series Databases Architecture *(paper-talk search result; attribution unverified)*
A solid understanding of time series database architectures is essential to appreciate the semantic enhancements layered on top by SE-TSDB. The talk by Mike Freedman, CTO and co-founder of TimescaleDB, at the CMU Database Group seminar offers a rigorous, research-level overview of re-engineering PostgreSQL as a time series database, providing foundational insights into TSDB design and challenges.

*How the paper uses it:* The paper builds on existing TSDBs by adding semantic layers, so understanding TSDB internals is foundational.

▶ [Time Series Database Lectures #6 - Mike Freedman (TimescaleDB)](https://www.youtube.com/watch?v=IaZ4hJ3G7wc) — CMU Database Group · 58:18 · 8y ago

### Semantic Query Processing and Reasoning *(prerequisite)*
Semantic query processing and reasoning are key to enabling the advanced data derivation and similarity-based retrieval capabilities of SE-TSDB. The chosen lecture from the 'Semantic SEO Public Group' dives into linguistics, query processing, and semantics, offering a comprehensive and academic-level treatment of how semantic understanding enhances query processing.

*How the paper uses it:* The paper's reasoning engine performs semantic matchmaking and query mapping, making semantic query processing knowledge crucial.

▶ [Module 2: Linguistics, Query Processing, & Semantics | Semantic SEO Public Group](https://www.youtube.com/watch?v=iD8K7Jzpgz0) — Kahuna Chauhan · 1:24:31 · 6mo ago

### IoT-Edge-Cloud Data Integration *(prerequisite)*
Contextualizing the distributed IoT-Edge-Cloud infrastructure is important to understand the environment where semantic TSDB enhancements are applied. The webinar by HackerEarth on IoT Edge Computing provides a detailed and research-oriented discussion on moving computation closer to data sources, which directly relates to the paper's infrastructure context.

*How the paper uses it:* The paper targets semantic data management across IoT, edge, and cloud layers, so understanding this infrastructure is foundational.

▶ [IOT Edge Computing | IoT Examples | Use Cases | HackerEarth Webinar](https://www.youtube.com/watch?v=Xm8frqTZRVI) — HackerEarth · 1:07:37 · 9y ago

### Semantically Enhanced Time Series Databases (Core Concept) *(paper-talk search result; attribution unverified)*
The core concept is the semantic enrichment of time series databases to enable advanced retrieval, reasoning, and integration. The lecture by Paul Dix, co-founder and CTO of InfluxData, presented at CMU Database Group, is a substantive, expert-level talk on time series database internals. Although not by the paper authors, it is the closest high-quality, research-focused talk available that directly addresses TSDBs, providing essential background to appreciate the semantic enhancements proposed in the paper.

*How the paper uses it:* This talk provides deep insights into TSDB internals, which the paper extends with semantic models and reasoning.

▶ [Time Series Database Lectures #1 - Paul Dix (InfluxDB)](https://www.youtube.com/watch?v=2SUBRE6wGiA) — CMU Database Group · 54:27 · 9y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on semantically enhanced time series databases in IoT-Edge-Cloud infrastructures, start by learning the foundational concepts of IoT-Edge-Cloud data integration and time series databases architecture. Then, build knowledge about ontologies and semantic query processing, which are essential for grasping the semantic modeling and reasoning techniques used in the paper. Finally, focus on the core concept of semantic modeling for time series data to see how these ideas come together to enhance data retrieval and reasoning.

### IoT-Edge-Cloud Data Integration *(prerequisite)*
This section introduces the distributed infrastructure of IoT, edge, and cloud computing, explaining how data is generated, processed, and integrated across these layers. Understanding this context is crucial because the paper’s semantic enhancements are designed to operate within such complex, layered environments.

*How the paper uses it:* The paper applies semantic enhancements to time series data streams distributed across IoT, edge, and cloud infrastructures.

▶ [Edge Computing | Fog Computing | Cloud Computing](https://www.youtube.com/watch?v=iE1GxmD2csw) — Perfect Computer Engineer · 7:40 · 4y ago

### Time Series Databases Architecture *(prerequisite)*
Learn what time series databases (TSDBs) are, how they differ from traditional databases, and their architecture designed for efficiently storing and querying time-stamped data. This foundation helps appreciate why semantic layers are added on top of existing TSDBs in the paper.

*How the paper uses it:* The paper enhances existing TSDBs with semantic models to improve data retrieval and reasoning.

▶ [What are Time Series Databases?](https://www.youtube.com/watch?v=vuNEWixlsWY) — Irtiza Hafiz · 16:49 · 4y ago

### Ontologies in IoT Data Management *(prerequisite)*
Ontologies provide structured, formal representations of knowledge domains, enabling machines to understand and reason about data semantics. This section explains ontology design and its role in organizing sensor, metric, and unit information in IoT systems.

*How the paper uses it:* The paper’s Measurement Description semantic model uses ontologies for system, metric, and measurement unit specification.

▶ [3.7 How to Design your own Ontology](https://www.youtube.com/watch?v=pabULZ_eQp4) — OpenHPI Tutorials · 15:14 · 7y ago

### Semantic Query Processing and Reasoning *(prerequisite)*
This section covers how semantic information enables advanced query processing beyond exact matches, including reasoning and similarity-based retrieval. It explains how queries can be interpreted semantically to retrieve derived or related data streams.

*How the paper uses it:* The paper implements a reasoning engine and semantic query interfaces to support exact and similarity-based retrievals.

▶ [Query Processing-Part3 (Semantic Analysis)](https://www.youtube.com/watch?v=ZQcnaWeCu_I) — Nauman Iqbal · 13:11 · 6y ago

## Already in your library

- [8. Time Series Analysis I](https://www.youtube.com/watch?v=uBeM1FUk4Ps) — also for: VUS: Effective and Efficient Accuracy Measures for Time-Series Anomaly Detection (John Paparrizos)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of semantic enhancement in time series databases for IoT-Edge-Cloud infrastructures. The beginner project focuses on implementing a simple semantic metadata layer for time series data streams. The intermediate project involves reimplementing the core semantic query and reasoning engine to enable semantic-based retrieval and derived data stream queries. The advanced project extends the semantic discovery mechanism toward provenance-based data stream discovery, addressing one of the paper's stated future directions.

### Beginner — Semantic Metadata Layer for Time Series Data
*Effort: a weekend, ~8 hours*

You build a small prototype that adds semantic metadata to time series data streams collected from simulated IoT sensors. This includes defining simple ontologies for sensors, metrics, and units, and annotating sample time series data with this semantic information.

**Why it shows you understood the paper:** This project shows you grasp the paper's core idea of enriching TSDBs with semantic descriptions to improve data interpretation and retrieval.

**Grounded in:** Development of a comprehensive semantic model (Measurement Description) for time series data specification including system, metric, and unit ontologies.

**Tech stack:** Python 3.11, FastAPI, SQLite, JSON-LD

**Data:** Simulated time series data streams representing sensor readings (e.g., temperature, humidity) with manually created semantic metadata.

**Build it:**

1. Define simple ontologies for sensors, metrics, and measurement units using JSON-LD or a similar format.
2. Simulate or generate small time series datasets representing sensor measurements.
3. Annotate the time series data streams with semantic metadata linking to the ontologies.
4. Build a minimal FastAPI service to store and retrieve time series data along with semantic annotations.
5. Implement a simple API endpoint to query metadata and retrieve annotated data streams.

**Ships as:** A GitHub repo with code to create semantic metadata for time series data, a FastAPI server exposing annotated data, and a README explaining the semantic model and usage.

**Stretch goal:** Add a basic semantic query interface that allows filtering data streams by sensor type or metric using the semantic metadata.

### Intermediate — Semantic Query and Reasoning Engine for TSDB
*Effort: 2 weekends, ~20 hours*

You implement a semantic query processor and reasoning engine that supports exact and similarity-based queries over semantically annotated time series data. You demonstrate retrieval of derived data streams using reasoning rules similar to those in SE-TSDB.

**Why it shows you understood the paper:** This project demonstrates your ability to reimplement the paper's core method of semantic-based query processing and reasoning for enhanced data retrieval in TSDBs.

**Grounded in:** Implementation of SE-TSDB tool suite that enhances existing TSDBs with semantic capabilities; Design of semantic-based query interfaces supporting exact and similarity-based retrievals; Development of a reasoning engine that derives new data streams and performs semantic matchmaking.

**Tech stack:** Python 3.11, FastAPI, SQLite, RDFlib, NetworkX

**Data:** Use the same simulated IoT sensor time series data with semantic annotations from the beginner project.

**Build it:**

1. Extend the semantic metadata model to include reasoning rules for metric composition and unit conversion.
2. Implement a reasoning engine that performs entity-based, metric-based, and measurement-unit based reasoning.
3. Add similarity metrics to support similarity-based query matching over semantic descriptions.
4. Build API endpoints to accept semantic queries and return matching or derived time series data streams.
5. Demonstrate retrieval of derived data streams (e.g., cluster availability derived from host availability) using the reasoning engine.

**Ships as:** A GitHub repo with a semantic query and reasoning engine over annotated time series data, API endpoints for semantic queries, and a README documenting the reasoning approach and example queries.

**Stretch goal:** Integrate a simple visualization dashboard to show query results and derived data streams.

### Advanced — Provenance-Based Semantic Data Stream Discovery
*Effort: 3+ weeks*

You develop an extension to the semantic model and reasoning engine to incorporate provenance metadata for time series data streams. You implement provenance-based discovery mechanisms to enable tracing data origins and support infrastructure-wide semantic data retrieval in an IoT-Edge-Cloud setting.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by adding provenance-aware semantic discovery, demonstrating deep comprehension and research potential.

**Grounded in:** Provenance-based data discovery is proposed but not fully implemented or validated; Develop and validate provenance data models and tools for provenance-based data stream discovery.

**Tech stack:** Python 3.11, FastAPI, SQLite, RDFlib, NetworkX, Docker

**Data:** Simulated IoT-Edge-Cloud time series data streams with extended semantic and provenance metadata describing data lineage and migration.

**Build it:**

1. Design a provenance ontology to capture data origin, transformations, and migration across IoT, edge, and cloud nodes.
2. Extend the existing semantic model and reasoning engine to incorporate provenance metadata.
3. Implement provenance-based query processing to discover data streams based on their lineage and transformations.
4. Simulate a small IoT-Edge-Cloud infrastructure with data migration events and annotate streams with provenance information.
5. Evaluate the effectiveness of provenance-based discovery with example queries and document findings.
6. Containerize the system with Docker for easy deployment and demonstration.

**Ships as:** A GitHub repo with provenance-aware semantic data models, reasoning engine extensions, example datasets, and a README describing the provenance discovery approach and evaluation.

**Stretch goal:** Explore peer-to-peer super-peer architectures for distributed semantic data discovery as outlined in the paper's future directions.
