---
title: "708 · PSMark: A Distributed IoT Benchmark for Publish/Subscribe Under Domain-Based Workloads — Roberto Yus"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-roberto-yus"
source_hash: "a834a773ca9f457d211efc16984b06871a093876f78a4995c2bec11ebb7ae4d4"
sequence: 708
generator: "outreach-garden: managed"
---

# 708 · PSMark: A Distributed IoT Benchmark for Publish/Subscribe Under Domain-Based Workloads

## At a glance

- **Professor:** Roberto Yus
- **Institution:** Univ. of Maryland - Baltimore County
- **Paper:** [PSMark: A Distributed IoT Benchmark for Publish/Subscribe Under Domain-Based Workloads](https://hal.science/hal-05517868)
- **Authors:** Christian Badolato, Nathan Samson, Houssam Hajj Hassan, Chih-Kai Huang, Georgios Bouloukakis, Primal Pappachan, Roberto Yus
- **Year:** 2026

## Paper overview

PSMark is a benchmarking framework designed to evaluate publish/subscribe systems used in Internet of Things (IoT) environments. It simulates realistic IoT workloads with diverse device behaviors and supports distributed deployments and multiple protocols like MQTT and DDS. PSMark helps researchers and developers measure the performance of pub/sub systems under real-world conditions.

### Why it matters

**Research problem:** Existing publish/subscribe benchmarks do not adequately represent the heterogeneous and distributed nature of IoT workloads, lacking support for varying device behaviors, multi-node deployments, and cross-protocol evaluation.

**Why it matters:** Publish/subscribe systems are critical for IoT applications, which involve diverse devices and protocols. Without realistic benchmarks, it is difficult to evaluate and improve these systems' performance and reliability in practical scenarios.

**Key contributions:**

- A distributed benchmarking framework tailored for IoT pub/sub systems
- Support for heterogeneous device behaviors including payload sizes, publication rates, and connection stability
- Cross-protocol evaluation with built-in adapters for MQTT and DDS
- Provision of 12 built-in workloads based on 7 real-world datasets across 4 domains
- Tools and scripts for easy deployment and execution on Docker Compose and Kubernetes

## About the professor

**Roberto Yus** — Assistant Professor, Department of Computer Science and Electrical Engineering, Univ. of Maryland - Baltimore County.

Research interests: Data Management, Knowledge Representation, Internet of Things, Privacy

### Research links

- [Faculty/profile page](https://robertoyus.com)
- [Lab website](https://damslabumbc.github.io/)
- [GitHub](https://github.com/andrewgchio/SmartSPEC)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Publish/Subscribe Systems in IoT
**The paper assumes:** publish/subscribe communication models in Internet of Things systems
**Already in this field?** Skip this entirely if you already understand the fundamentals of pub/sub middleware architectures and their role in IoT communication.

This background is designed to prepare the reader to understand publish/subscribe systems in IoT, focusing on their architecture, communication protocols like MQTT and DDS, and the challenges of distributed heterogeneous IoT workloads as addressed by PSMark. The rigorous course option offers a deep, structured university-level introduction to IoT concepts, suitable for thorough foundational knowledge. The fast track provides a concise, beginner-friendly video series that quickly covers essential IoT messaging protocols and device communication, ideal for readers with limited time who want a practical overview.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Mastering IoT with IOT2050: From PLC to Cloud (Complete beginners guide)](https://www.youtube.com/playlist?list=PLeUt5cH7zxRpvqNZmlvFskB-XCcn-892j) — LEARNACON · 14 videos · 2.2h across 14 episodes

**Watch only this:** Episodes 1 (Industrial IoT (IIoT) Explained: Unlocking Smart Industry) and 8 (What is MQTT? The Ultimate IoT Messaging Protocol Explained) — about 18 minutes total

*Why it unblocks this paper:* This 14-episode beginner-friendly series by LEARNACON includes a focused episode on MQTT, the key IoT messaging protocol used in PSMark, along with foundational Industrial IoT concepts, providing a quick and clear introduction to IoT publish/subscribe systems.

*If you want all of it:* Approximately 2.2 hours across all 14 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand PSMark and its contributions, start with foundational knowledge on distributed systems benchmarking, container orchestration technologies like Docker and Kubernetes, and the core IoT communication protocols MQTT and DDS that PSMark supports. Then, build understanding of publish/subscribe systems in IoT contexts, which is central to the paper's domain. Finally, focus on the authors' own presentation or talks related to PSMark to grasp the framework's design, implementation, and research significance.

### Distributed systems benchmarking *(prerequisite)*
Benchmarking distributed systems is essential to evaluate multi-node deployments and performance under realistic conditions. This section covers the principles and challenges of benchmarking in distributed environments, which underpins PSMark's multi-node evaluation capabilities.

*How the paper uses it:* PSMark enables benchmarking of pub/sub systems in multi-node distributed environments, making understanding distributed benchmarking foundational.

▶ [Master Benchmarking in Go | Measure, Optimize, and Analyze Code Performance](https://www.youtube.com/watch?v=mGFyUx2y6Mk) — Distributed Systems · 1 yr ago

### Container orchestration Kubernetes Docker *(prerequisite)*
PSMark relies on containerization and orchestration technologies such as Docker Compose and Kubernetes for deployment and scalability. Understanding these tools is crucial for grasping how PSMark manages distributed benchmarking workloads and deployments.

*How the paper uses it:* PSMark supports deployment via Docker Compose and Kubernetes, making container orchestration knowledge critical.

▶ [Docker vs. Kubernetes: The ONLY Video You Need to Finally Understand Containers!](https://www.youtube.com/watch?v=oGPjzCBZGzg) — The Coding Gopher · 1 yr ago

### IoT communication protocols MQTT DDS *(prerequisite)*
MQTT and DDS are key IoT communication protocols that PSMark supports for cross-protocol benchmarking. This section explains their architectures and operational models, providing context for PSMark's protocol adapters and evaluation capabilities.

*How the paper uses it:* PSMark includes built-in protocol adapters for MQTT and DDS to enable cross-protocol evaluation.

▶ [What is DDS?](https://www.youtube.com/watch?v=_cw4TuUH_Po) — Real-Time Innovations · 2 yr ago

### PSMark authors talk *(paper-talk search result; attribution unverified)*
Direct presentations by the paper's authors provide the most accurate and detailed insights into PSMark's design, implementation, and contributions. This section offers a precise explanation of the framework from its creators.

*How the paper uses it:* The authors' talks directly explain PSMark's framework and research contributions.

▶ [Benchmark Dataset Design](https://www.youtube.com/watch?v=y0KtvYTgR6w) — Pulselake · 3 wk ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces foundational concepts essential to understanding PSMark, a benchmarking framework for IoT publish/subscribe systems. It starts with basics of container orchestration, then covers distributed systems benchmarking, IoT communication protocols MQTT and DDS, and publish/subscribe systems in IoT. Finally, it presents the core concept of PSMark authors' talk to directly connect theory with the paper's contributions.

### Container orchestration Kubernetes Docker *(prerequisite)*
Container orchestration tools like Docker and Kubernetes manage and automate deployment of containerized applications across multiple machines. Understanding these tools helps grasp how PSMark deploys its distributed benchmarking framework efficiently in real-world environments.

*How the paper uses it:* PSMark supports deployment on Docker Compose and Kubernetes for distributed benchmarking.

▶ [Docker vs. Kubernetes: The ONLY Video You Need to Finally Understand Containers!](https://www.youtube.com/watch?v=oGPjzCBZGzg) — The Coding Gopher · 1 yr ago

### Distributed systems benchmarking *(prerequisite)*
Benchmarking distributed systems involves measuring performance across multiple nodes and understanding challenges like network delays and resource contention. This foundation is crucial to appreciate how PSMark evaluates pub/sub systems in multi-node IoT scenarios.

*How the paper uses it:* PSMark enables benchmarking of pub/sub systems in multi-node distributed environments.

▶ [Master Benchmarking in Go | Measure, Optimize, and Analyze Code Performance](https://www.youtube.com/watch?v=mGFyUx2y6Mk) — Distributed Systems · 1 yr ago

### IoT communication protocols MQTT DDS *(prerequisite)*
MQTT and DDS are popular communication protocols used in IoT for efficient message exchange. Learning their basics clarifies how PSMark supports cross-protocol evaluation and adapts to different pub/sub systems.

*How the paper uses it:* PSMark includes built-in protocol adapters for MQTT and DDS.

▶ [What Is MQTT and How It Works](https://www.youtube.com/watch?v=EZAhu31jSUg) — RealPars · 5 mo ago

### Publish/Subscribe systems IoT
Publish/Subscribe is a messaging pattern where publishers send messages without knowing subscribers, who receive messages based on topics. Understanding this model is key to grasping what PSMark benchmarks in IoT environments.

*How the paper uses it:* PSMark benchmarks publish/subscribe systems used in IoT environments.

▶ [Publisher Subscriber Model in IoT Explained for Beginners! 🚀 (Step-by-Step Guide)](https://www.youtube.com/watch?v=11aN2cV22Bc) — 10 Minute Diploma · 1 yr ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of PSMark, a distributed benchmarking framework for IoT publish/subscribe systems. The beginner project replicates a simple workload simulation with MQTT to grasp heterogeneous device behavior. The intermediate project reimplements core PSMark benchmarking features using the authors' released codebase, enabling cross-protocol evaluation and metric collection. The advanced project extends PSMark by adding support for an additional IoT protocol or integrating privacy-preserving benchmarking features, addressing the paper's stated future directions.

### Beginner — Simulate a Simple MQTT IoT Workload with Variable Device Behaviors
*Effort: a weekend, ~8 hours*

You build a small-scale simulation of an IoT publish/subscribe workload using MQTT protocol, where multiple simulated devices publish messages with varying payload sizes and publication rates to a broker. You measure basic metrics such as message throughput and latency using simple logging.

**Why it shows you understood the paper:** This project demonstrates your grasp of PSMark's core idea of modeling heterogeneous device behaviors in IoT pub/sub systems and the importance of workload variability in benchmarking.

**Grounded in:** PSMark supports heterogeneous device behaviors including payload sizes, publication rates, and connection stability.

**Tech stack:** Python 3.11, paho-mqtt Python client, Docker (optional for MQTT broker)

**Data:** Synthetic IoT device workload simulated with configurable parameters for payload size and publication rate; no external dataset required.

**Build it:**

1. Set up a local MQTT broker using Mosquitto (can be run via Docker).
2. Write a Python script to simulate multiple IoT devices publishing messages with varying payload sizes and rates.
3. Implement basic logging to record message send timestamps and broker acknowledgments.
4. Calculate simple metrics such as message throughput and average latency from logs.
5. Document the workload configuration and results in a README.

**Ships as:** A GitHub repository with scripts to run the MQTT workload simulation, logs of message metrics, and a README explaining the setup and observed device behavior variability.

**Stretch goal:** Add simulated connection instability (random disconnects/reconnects) to devices and measure its impact on throughput and latency.

### Intermediate — Deploy and Run PSMark Benchmark with MQTT and DDS Protocols
*Effort: 2 weekends, ~20 hours*

You clone and deploy the PSMark framework from the official GitHub repository, configure and run one of the built-in workloads to benchmark MQTT and DDS brokers in a distributed multi-node setup. You collect and analyze performance metrics such as throughput, latency, and message loss.

**Why it shows you understood the paper:** This project shows you can operate the authors' distributed benchmarking framework, understand its architecture including protocol adapters, and reproduce cross-protocol evaluation results as described in the paper.

**Grounded in:** PSMark includes protocol adapters for MQTT and DDS and supports distributed multi-node deployments with detailed metrics and logs.

**Tech stack:** Docker Engine (≥28.0.4), Docker Compose, Python 3.11, Linux OS

**Data:** Use the 12 built-in workloads derived from 7 real-world datasets included in the PSMark repository.

**Build it:**

1. Clone the PSMark repository from https://github.com/DAMSlabUMBC/PSMark.git.
2. Follow the setup scripts to build container images and configure scenarios using provided scripts.
3. Deploy PSMark using Docker Compose on a multi-node or multi-container environment.
4. Run benchmark workloads for MQTT and DDS protocols using built-in configurations.
5. Collect and analyze the generated metrics and logs to compare broker performance.
6. Write a report summarizing your deployment experience, metric interpretation, and any challenges.

**Verified links from the paper:**

- <https://github.com/DAMSlabUMBC/PSMark.git> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/DAMSlabUMBC/PSMark> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository fork or personal clone with deployment scripts, configuration files, collected metrics, and a detailed README documenting the benchmarking process and results.

**Stretch goal:** Modify a workload configuration to simulate a new device behavior pattern and observe its effect on benchmark metrics.

### Advanced — Extend PSMark with Support for an Additional IoT Protocol or Privacy-Preserving Metrics
*Effort: 3+ weeks*

You extend the PSMark framework by implementing a new protocol adapter for an emerging IoT communication protocol (e.g., CoAP or AMQP) or by integrating privacy-preserving features into the benchmarking process, such as anonymizing device identifiers or adding differential privacy to metrics. You validate your extension by running benchmarks and comparing results with existing protocols.

**Why it shows you understood the paper:** This project tackles one of the paper's stated future directions and limitations, demonstrating deep comprehension of PSMark's architecture and the challenges of extending it to new protocols or privacy concerns.

**Grounded in:** Future directions include extending PSMark to support additional pub/sub protocols and integrating privacy-preserving features within benchmarking.

**Tech stack:** Docker Engine, Docker Compose, Kubernetes (optional), Python 3.11, Go or Python (depending on protocol adapter implementation)

**Data:** Use PSMark's built-in workloads and scenarios for benchmarking; no new datasets required but may simulate privacy-sensitive data.

**Build it:**

1. Study PSMark's protocol adapter architecture and existing MQTT/DDS adapters.
2. Select an additional IoT protocol (e.g., CoAP) and research its pub/sub API.
3. Implement a new protocol adapter translating PSMark operations to the selected protocol.
4. Alternatively, design and implement privacy-preserving metric modules (e.g., anonymization, noise addition).
5. Integrate your extension into PSMark's deployment scripts and run benchmark workloads.
6. Analyze and document the impact of your extension on benchmarking results and system performance.

**Verified links from the paper:**

- <https://github.com/DAMSlabUMBC/PSMark.git> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/DAMSlabUMBC/PSMark> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A forked PSMark repository with your protocol adapter or privacy module code, updated deployment instructions, benchmark results, and a comprehensive README explaining your extension and findings.

**Stretch goal:** Contribute your extension back to the PSMark community or prepare a technical report comparing multiple privacy-preserving approaches in IoT benchmarking.
