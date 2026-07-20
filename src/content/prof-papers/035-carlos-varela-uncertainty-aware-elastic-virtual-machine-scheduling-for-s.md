---
title: "035 · Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems — Carlos Varela"
date: 2026-07-20
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-cvarela"
source_hash: "1c6002f5f0f9548a61777f72f12139d74827c256e6ab4f72179ed34c718575db"
sequence: 35
generator: "outreach-garden: managed"
---

# 035 · Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems

## At a glance

- **Professor:** Carlos Varela
- **Institution:** Rensselaer Polytechnic Institute
- **Paper:** [Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems](http://wcl.cs.rpi.edu/papers/ccgrid2018.pdf)
- **Authors:** Shigeru Imai, Stacy Patterson, Carlos A. Varela
- **Year:** 2020

## Paper overview

This paper presents a proactive scheduling framework for cloud-based stream processing systems that dynamically allocates virtual machines (VMs) to handle fluctuating workloads. The framework uniquely incorporates uncertainty in both application performance and workload predictions to optimize the tradeoff between cost and quality of service (QoS).

### Why it matters

**Research problem:** How to elastically schedule VMs for stream processing systems in the cloud to maintain high QoS under variable workloads while minimizing cost, explicitly accounting for uncertainties in performance and workload predictions.

**Why it matters:** Stream processing workloads fluctuate over time, and static or reactive VM allocation can lead to either poor QoS or excessive costs. Existing proactive schedulers often ignore uncertainty in predictions, leading to suboptimal scaling decisions.

**Key contributions:**

- A novel elastic VM scheduling framework that explicitly models uncertainty in both application performance and workload forecasts.
- Integration of online learning to adapt MST models dynamically during execution.
- Use of ARMA-based workload forecasting with uncertainty quantification to predict future workloads.
- Formulation of VM allocation as a probabilistic QoS satisfaction problem, allowing tunable tradeoffs between cost and reliability.

## About the professor

**Carlos Varela** — Professor, Department of Computer Science, Rensselaer Polytechnic Institute.

Research interests: safer flight systems, software verification, cloud and edge computing, middleware for adaptive distributed systems, and concurrent programming models and languages.

### Research links

- [Faculty/profile page](http://www.cs.rpi.edu/~cvarela)
- [Resolved homepage](http://www.cs.rpi.edu/~cvarela/)
- [Lab website](http://wcl.cs.rpi.edu/)

## Learning path

To deeply understand the paper on uncertainty-aware elastic VM scheduling for stream processing systems, start by building foundational knowledge on stream processing resource management, online learning for adaptive systems, ARMA workload forecasting methods, and uncertainty quantification in cloud scheduling. These prerequisites provide the necessary background on the system environment, adaptive modeling, forecasting techniques, and uncertainty handling. Finally, focus on the authors' own talk or closely related advanced talks on elastic VM scheduling under uncertainty to grasp the paper's core contributions and methodology.

## Recommended videos (in order)

### Stream processing systems resource management *(prerequisite)*
Understanding how resources are managed in stream processing environments is foundational to appreciating the challenges and solutions proposed in the paper. This section covers architectures and resource allocation strategies specific to streaming data systems, which are the target application domain of the paper.

*How the paper uses it:* The paper addresses elastic VM scheduling specifically for stream processing systems, so foundational knowledge of resource management in these systems is essential.

▶ [Managing Streaming between Multiple External Resources ...](https://www.youtube.com/watch?v=9V4UqFkuPUM) — Decodable · 49:33

### Online learning for adaptive systems *(prerequisite)*
The paper integrates online learning to dynamically update maximum sustainable throughput models during execution. This section introduces adaptive systems and online learning techniques that enable models to improve over time based on new data, which is critical for the paper's approach to uncertainty-aware scheduling.

*How the paper uses it:* Online learning is a key technique used in the paper to adapt MST models dynamically, improving scheduling decisions under uncertainty.

▶ [Sibyl: Adaptive Data Placement in Storage Systems using ...](https://www.youtube.com/watch?v=5-WedkiB000) — Onur Mutlu Lectures · 16:15

### ARMA workload forecasting methods *(prerequisite)*
ARMA models are used in the paper to forecast workloads with quantified uncertainty. This section provides an advanced understanding of ARMA time series models and their forecasting capabilities, which underpin the workload prediction component of the scheduling framework.

*How the paper uses it:* The paper uses ARMA-based workload forecasting with uncertainty quantification to predict future workloads for VM allocation decisions.

▶ [TSA Lecture 15: Forecasting for ARMA](https://www.youtube.com/watch?v=d5c0Rt_1bgo) — Adam Kashlak · 1:27:47 · 5 years ago

### Uncertainty quantification in cloud scheduling *(prerequisite)*
Explicit modeling and quantification of uncertainty in performance and workload predictions is central to the paper. This section covers advanced concepts in uncertainty quantification relevant to cloud resource management and scheduling, providing the theoretical foundation for the paper's probabilistic approach.

*How the paper uses it:* The paper explicitly models uncertainty in MST and workload predictions using normal distributions to make probabilistic scheduling decisions.

▶ [Mini Tutorial 6:  An Introduction to Uncertainty Quantification for Modeling & Simulation](https://www.youtube.com/watch?v=7w-K_EF2j64) — IDA · 59:45 · 3 years ago
