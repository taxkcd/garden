---
title: "159 · Leveraging ASIC AI Chips for Homomorphic Encryption — Tushar Krishna"
date: 2026-08-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-tushar-krishna"
source_hash: "000c3d8017c576d5c0f2681d6f2b8d08e520696fd0d960af3542db24503125d1"
sequence: 159
generator: "outreach-garden: managed"
---

# 159 · Leveraging ASIC AI Chips for Homomorphic Encryption

## At a glance

- **Professor:** Tushar Krishna
- **Institution:** Georgia Institute of Technology
- **Paper:** [Leveraging ASIC AI Chips for Homomorphic Encryption](https://arxiv.org/pdf/2501.07047v4)
- **Authors:** Jianming Tong, Tianhao Huang, Jingtian Dang, Leo de Castro, Anirudh Itagi, Anupam Golder, Asra Ali, Jeremy Kun, Jevin Jiang, Arvind, G. Edward Suh, Tushar Krishna
- **Year:** 2026

## Paper overview

This paper presents CROSS, a compiler framework that enables efficient execution of Homomorphic Encryption (HE) workloads on existing AI accelerators like Google's TPUs. HE allows computation on encrypted data to preserve privacy but is computationally expensive. GPUs accelerate HE but are less energy efficient than specialized ASICs. CROSS overcomes architectural mismatches between HE algorithms optimized for GPUs and TPU hardware by transforming high-precision arithmetic into dense low-precision matrix multiplications and embedding costly data reorderings into computation. This approach achieves state-of-the-art throughput and energy efficiency for HE on TPUs without hardware changes.

### Why it matters

**Research problem:** Homomorphic Encryption offers strong privacy by enabling computation on encrypted data but suffers from prohibitive computational overhead. While GPUs accelerate HE, they are significantly less energy efficient than specialized ASICs. Existing HE algorithms optimized for GPUs do not map well to AI accelerators like TPUs due to differences in arithmetic precision and memory manipulation granularity, leading to poor hardware utilization and performance degradation.

**Why it matters:** Privacy-preserving computation is critical for secure cloud services and AI applications handling sensitive data. Efficient HE execution on widely available hardware like AI accelerators can enable practical deployment of privacy-preserving AI without the high cost of custom ASICs, thus broadening access and adoption.

**Key contributions:**

- Systematic characterization of architectural mismatches when porting GPU-optimized HE algorithms to AI accelerators like TPUs.
- Basis-Aligned Transformation (BAT) to map high-precision modular integer arithmetic to low-precision matrix multiplication engines, enabling efficient use of TPU MXUs.
- Memory-Aligned Transformation (MAT) to create layout-invariant HE operators by embedding data reorderings into offline computation, eliminating runtime overhead.
- Comprehensive evaluation demonstrating CROSS achieves state-of-the-art throughput and energy efficiency for critical HE operators on Google TPUs compared to CPU, GPU, FPGA, and HE ASIC implementations.

## About the professor

**Tushar Krishna** — Associate Professor, School of Electrical & Computer Engineering, Georgia Institute of Technology.

Research interests: AI/ML Accelerators, Compositional & Cognitive AI, Distributed AI Systems, Efficient LLM & Model Inference, AI-Assisted Design, Interconnection & On-Chip Networks, Simulation & Benchmarking, Emerging Tech & Packaging, Memory & Virtual-Memory Systems, Edge & Embodied Computing, Privacy & Security

### Research links

- [Faculty/profile page](http://tusharkrishna.ece.gatech.edu)
- [Professor website](https://tushar-krishna.github.io/#)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper "Leveraging ASIC AI Chips for Homomorphic Encryption," start by building foundational knowledge on homomorphic encryption and AI accelerator architectures, which are critical to grasp the privacy-preserving computations and hardware mapping challenges addressed by CROSS. Next, gain insights into compiler optimizations relevant to hardware to appreciate the transformations CROSS applies. Finally, focus on the paper's core contribution by watching the authors' own detailed presentation of CROSS, which explains their novel compiler framework and its impact on efficient HE execution on TPUs.

### Homomorphic encryption computation lecture *(prerequisite)*
Understanding the fundamentals of homomorphic encryption is essential to appreciate how CROSS enables privacy-preserving computations on encrypted data. The selected lecture provides a rigorous, research-level introduction to HE schemes and their computational properties, which underpin the paper's motivation and technical approach.

*How the paper uses it:* HE fundamentals are critical to grasp the privacy-preserving computations enabled by CROSS.

▶ [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — Microsoft Research · 52:55

### AI accelerator architecture seminar *(prerequisite)*
Knowledge of AI accelerator hardware, especially TPUs, is crucial to understand the architectural mismatches and hardware utilization challenges that CROSS addresses. The chosen seminar by Professor Tushar Krishna, a co-author, provides an advanced perspective on AI accelerator design and data movement optimization relevant to this work.

*How the paper uses it:* Understanding AI accelerator hardware like TPUs is critical to understand CROSS's hardware mapping.

▶ [[REFAI Seminar 12/09/21] Teaching AI the game of AI Accelerator Design](https://www.youtube.com/watch?v=mwFxVIKGeOE) — Rutgers Efficient AI Seminar · 1:21:30 · 4 years ago

### Compiler optimizations for hardware talk *(prerequisite)*
CROSS is fundamentally a compiler framework that applies novel transformations to map HE workloads efficiently onto AI accelerators. A solid grasp of compiler optimization techniques for hardware is necessary to appreciate the design and impact of CROSS's Basis-Aligned and Memory-Aligned Transformations.

*How the paper uses it:* Understanding compiler transformations is key to CROSS's design.

▶ [WiCT Meetup — Saturday, March 14, 2026: Compiler Optimizations for CPU-GPU](https://www.youtube.com/watch?v=02p4PdSCekk) — LLVM · 4 months ago

### CROSS compiler framework talk *(the paper's own talk)*
This is the authors' own detailed presentation of the CROSS framework at HPCA'26, providing the most precise and comprehensive explanation of their approach, technical contributions, and evaluation results. Watching this talk will give an advanced reader direct insight into the innovations and challenges addressed by the paper.

*How the paper uses it:* Directly targets the authors' presentation for the most precise explanation of their approach.

▶ [CROSS: Leveraging ASIC AI Chips for Homomorphic Encryption [HPCA'26]](https://www.youtube.com/watch?v=TFnQPlLZs1E) — jianming Tong · 6 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on leveraging AI ASIC chips for homomorphic encryption, start by learning the fundamentals of homomorphic encryption to grasp the privacy-preserving computation concept. Next, build foundational knowledge of AI accelerator architectures like TPUs to appreciate the hardware context. Then, study modular arithmetic and matrix multiplication basics, which are central to the paper's key compiler transformations. Finally, explore the CROSS compiler framework and its core transformations that enable efficient HE execution on AI accelerators.

### Homomorphic encryption computation lecture *(prerequisite)*
Homomorphic encryption allows computations directly on encrypted data without decrypting it, preserving privacy. Understanding its principles and common schemes provides the foundation to appreciate how privacy-preserving computations are enabled.

*How the paper uses it:* The paper builds on homomorphic encryption to enable efficient encrypted computation on AI accelerators.

▶ [Intro to Homomorphic Encryption](https://www.youtube.com/watch?v=SEBdYXxijSo) — Microsoft Research · 52:55

### AI accelerator architecture seminar *(prerequisite)*
AI accelerators like TPUs are specialized hardware designed for efficient matrix computations and AI workloads. Learning their architecture and capabilities helps understand why mapping HE workloads to such hardware is challenging and beneficial.

*How the paper uses it:* The paper targets TPU hardware to accelerate homomorphic encryption workloads efficiently.

▶ [AI Accelerators: What They Are, How They Work, and Which ...](https://www.youtube.com/watch?v=pLW5rjGH-Po) — Binary Verse AI · 14:19

### Modular arithmetic matrix multiplication lecture *(prerequisite)*
Modular arithmetic involves computations with integers wrapped around a modulus, and matrix multiplication is a key linear algebra operation. Understanding how modular arithmetic can be expressed as matrix multiplication is crucial for the paper's compiler transformations.

*How the paper uses it:* The paper’s Basis-Aligned Transformation converts high-precision modular arithmetic into low-precision matrix multiplications.

▶ [Modular Arithmetic: Overview and Properties (the mod Operator)](https://www.youtube.com/watch?v=POEbZDlRmUk) — Noureddin Sadawi · 18:38

### CROSS compiler framework talk *(the paper's own talk)*
This talk presents the CROSS compiler framework that transforms homomorphic encryption workloads to efficiently run on AI accelerators like TPUs. It explains the key compiler transformations and how they overcome hardware mismatches.

*How the paper uses it:* This is the authors’ own presentation explaining their approach and results in detail.

▶ [CROSS: Leveraging ASIC AI Chips for Homomorphic Encryption [HPCA'26]](https://www.youtube.com/watch?v=TFnQPlLZs1E) — jianming Tong · 6 months ago
