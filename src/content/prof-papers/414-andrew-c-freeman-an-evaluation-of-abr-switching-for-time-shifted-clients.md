---
title: "414 · An Evaluation of ABR Switching for Time-Shifted Clients in MoQ — Andrew C. Freeman"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-andrew-c-freeman"
source_hash: "c77ce0afb7035dd446d8892fdcef7ac4756da3c8be8de2ded96926d0a4600e4c"
sequence: 414
generator: "outreach-garden: managed"
---

# 414 · An Evaluation of ABR Switching for Time-Shifted Clients in MoQ

## At a glance

- **Professor:** Andrew C. Freeman
- **Institution:** Baylor University
- **Paper:** [An Evaluation of ABR Switching for Time-Shifted Clients in MoQ](https://arxiv.org/pdf/2606.26368)
- **Authors:** Abanisenioluwa Orojo, Tanvir Redoy, Samira Afzal, Andrew C. Freeman
- **Year:** 2026

## Paper overview

This paper evaluates adaptive bitrate (ABR) switching techniques for video streaming over the Media over QUIC (MoQ) protocol, focusing on clients that play video with a delay behind the live broadcast (time-shifted clients). The authors extend existing MoQ software to support time-shifted ABR, simulate network conditions, and analyze how different ABR algorithms perform in terms of video quality, buffering, and switching latency.

### Why it matters

**Research problem:** Current MoQ implementations and ABR algorithms primarily focus on live-edge streaming with minimal latency, leaving the performance and behavior of ABR switching for time-shifted clients understudied and unaddressed.

**Why it matters:** Live streaming traffic is rapidly increasing and existing HTTP-based streaming protocols suffer from high latency and scalability issues. MoQ aims to provide low-latency, scalable streaming, but understanding ABR performance for time-shifted playback is essential for applications that tolerate latency to improve video quality or enable advanced content analysis.

**Key contributions:**

- Implementation of time shift-aware ABR switching and multiple ABR algorithms in open-source MoQ reference software.
- Development of a Mininet testing environment for reproducible network simulations.
- Characterization of time shift-aware ABR performance showing that adding a few seconds of playback delay can increase throughput by up to four times.

## About the professor

**Andrew C. Freeman** — Assistant Professor, Computer Science, Baylor University.

Research interests: multimedia systems, low-latency streaming, Media over QUIC, learning-based compression, Gaussian splatting, asynchronous event representations for video, event compression, event applications

### Research links

- [Faculty/profile page](https://acfreeman.dev)
- [Lab website](https://acfreeman.dev/lab)
- [GitHub](https://github.com/ac-freeman)
- [LinkedIn](https://www.linkedin.com/in/acfreeman/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Adaptive Bitrate Video Streaming
**The paper assumes:** adaptive bitrate streaming algorithms, video streaming protocols, network congestion adaptation
**Already in this field?** Skip this entirely if you already understand how adaptive bitrate streaming algorithms work and their role in video delivery over networks.

To understand the adaptive bitrate (ABR) streaming mechanisms evaluated in the paper, background knowledge on adaptive bitrate video streaming and related networking fundamentals is essential. The rigorous course option offers a comprehensive university-level networking foundation including application-layer protocols and streaming basics, while the fast track provides a concise, focused introduction to ABR streaming concepts and practical examples. Choose the rigorous course if you want deep technical grounding; choose the fast track for a quick, clear overview of ABR streaming principles relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Computer Networking CSE 311 Full Course | Networking Fundamentals, Protocols, and Technologies](https://www.youtube.com/playlist?list=PLwmkgSt3xgJqBlMQ-BUDA8BeGI_4fOolw) — StudyHelp CSE · 23 videos · 21.6h across 23 episodes

**Watch only this:** Lectures 5 to 7, about 3 hours — covering HTTP & Application Layer, DNS and video streaming basics, which directly relate to adaptive bitrate streaming and network behavior.

*Why it unblocks this paper:* This university-level Computer Networking course covers fundamental networking concepts including HTTP, transport protocols, and video streaming basics, which are crucial to understanding how ABR algorithms operate over protocols like MoQ.

*If you want all of it:* 21.6 hours across 23 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [HTTP Live Streaming - HLS Tutorials for Begineers](https://www.youtube.com/playlist?list=PLS3bLSAwEluxJC4V1OJ9Tbw1QR2BdVTat) — Tech with Monir · 13 videos · 1.4h across 13 episodes

**Watch only this:** Episodes 1 to 4, about 24 minutes — covering HLS Streaming in 3 Minutes, MPEG DASH vs HTTP Live Streaming, MPEG-DASH Streaming Explained for Beginners, and HTTP Live Streaming Practical Example.

*Why it unblocks this paper:* This short-form playlist provides a clear, concise introduction to HTTP Live Streaming and adaptive bitrate streaming concepts, giving a practical overview suitable for quickly grasping the basics relevant to the paper's ABR evaluation.

*If you want all of it:* 1.4 hours across 13 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on ABR switching for time-shifted clients in MoQ, start by building foundational knowledge on the Media over QUIC (MoQ) protocol and network simulation techniques used for streaming evaluation. Then, grasp the concept of time-shifted video streaming as it differs from live streaming. Finally, focus on adaptive bitrate streaming (ABR) methods and conclude with the authors' own talk to get direct insights into their specific contributions and findings.

### Media over QUIC MoQ protocol *(prerequisite)*
Media over QUIC (MoQ) is the fundamental streaming protocol platform extended and evaluated in the paper. Understanding MoQ's architecture, goals, and current developments is essential to appreciate the protocol-level innovations and challenges addressed by the authors.

*How the paper uses it:* The paper extends the MoQ reference software and evaluates ABR switching within this protocol.

▶ [STSWE25 | Media over QUIC: Current Developments and Future Directions](https://www.youtube.com/watch?v=aDXl5zHtWf4) — Eyevinn · 24:22 · 11 months ago

### Network simulation for streaming *(prerequisite)*
The paper uses a Mininet-based network simulation testbed to evaluate ABR algorithms under controlled network conditions. Familiarity with network simulation tools and methodologies for streaming performance evaluation will help in understanding the experimental setup and results.

*How the paper uses it:* The authors develop a Mininet testing environment for reproducible network simulations to evaluate ABR performance.

▶ [ANGELA: HTTP Adaptive Streaming and Edge Computing Simulator](https://www.youtube.com/watch?v=sl9E6uQIu64) — ATHENA · 19:50 · 4 years ago

### Time-shifted video streaming *(prerequisite)*
Time-shifted streaming involves playback delayed behind the live edge, which changes client behavior and network interactions compared to live streaming. Understanding the concept and implications of time-shifting is critical to grasp why ABR switching behaves differently in this mode.

*How the paper uses it:* The paper focuses on ABR switching performance specifically for time-shifted clients in MoQ.

▶ [[SIGCOMM 2019] Vantage: Optimizing video upload for time-shifted viewing of social live streams](https://www.youtube.com/watch?v=_jhYXEbvuoY) — Devdeep Ray · 4 years ago

### Adaptive bitrate streaming ABR
Adaptive bitrate streaming is the core method evaluated in the paper for video quality adaptation under varying network conditions. A solid understanding of ABR algorithms and their operational principles is necessary to appreciate the paper's contributions and performance analysis.

*How the paper uses it:* The paper evaluates multiple ABR algorithms and proposes a Time Shift-Aware SWITCH mechanism for ABR in MoQ.

▶ [6. Adaptive BitRate Streaming (ABR) for Video - Multimedia Content Delivery in the Internet](https://www.youtube.com/watch?v=xiUNOjmWf1M) — Andrea Araldo · 6 years ago

### Paper authors talk *(the paper's own talk)*
The authors' own talk provides the most direct and specific insights into their research, methodology, and findings. It is invaluable for understanding the nuances of their implementation, evaluation, and future directions.

*How the paper uses it:* This talk directly relates to the paper's topic and likely covers the TSA-SWITCH implementation and evaluation results.

▶ [Ali C. Begen - Streaming Bad: Breaking Latency with MOQ](https://www.youtube.com/watch?v=l4dwczI5Bis) — Software Mansion · 10 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts to understand adaptive bitrate streaming for time-shifted video clients over the Media over QUIC (MoQ) protocol. We start with foundational ideas about time-shifted video streaming and network simulation, then cover the MoQ protocol itself, followed by adaptive bitrate streaming (ABR) fundamentals, and conclude with insights from the paper's core focus on ABR switching in MoQ for time-shifted playback.

### Time-shifted video streaming *(prerequisite)*
Time-shifted video streaming means watching a live broadcast with a delay, allowing viewers to pause, rewind, or watch slightly behind the live edge. Understanding this concept helps grasp why ABR algorithms might behave differently compared to live streaming.

*How the paper uses it:* The paper studies ABR switching specifically for time-shifted clients who play video with a delay behind the live broadcast.

▶ [[SIGCOMM 2019] Vantage: Optimizing video upload for time-shifted viewing of social live streams](https://www.youtube.com/watch?v=_jhYXEbvuoY) — Devdeep Ray · 4 years ago

### Network simulation for streaming *(prerequisite)*
Network simulation creates controlled environments to test how streaming algorithms perform under different network conditions like bandwidth changes or delays. This helps researchers evaluate streaming quality and buffering without needing real-world trials.

*How the paper uses it:* The authors use a Mininet-based network simulation testbed to evaluate ABR performance under various bandwidth profiles.

▶ [Network Simulation: Intuitive, Easier, and Faster](https://www.youtube.com/watch?v=Ifp1u3U-GLs) — MATLAB · 5:40 · 1 year ago

### Media over QUIC MoQ protocol *(prerequisite)*
Media over QUIC (MoQ) is a new streaming protocol designed to reduce latency and improve scalability compared to traditional HTTP streaming. It leverages the QUIC transport protocol to deliver media efficiently, which is the platform extended and evaluated in the paper.

*How the paper uses it:* The paper extends the MoQ reference software to implement time shift-aware ABR switching.

▶ [Replacing WebRTC with Media over QUIC - Luke Curley](https://www.youtube.com/watch?v=l5tvrUOF2Ws) — CommCon · 21:12 · Streamed 2 years ago

### Adaptive bitrate streaming ABR
Adaptive bitrate streaming (ABR) dynamically adjusts video quality based on network conditions to minimize buffering and maximize video quality. It uses multiple bitrate streams and switches between them to match available bandwidth.

*How the paper uses it:* The paper evaluates different ABR algorithms applied to time-shifted playback over MoQ.

▶ [What is Adaptive Bitrate Streaming (ABS) for Video?](https://www.youtube.com/watch?v=z1m9NadpGAg) — Key Code Media · 9 years ago

### Paper authors talk *(the paper's own talk)*
Hearing directly from experts or related talks can provide deeper insights and context about the challenges and innovations in low-latency streaming and MoQ-based ABR switching.

*How the paper uses it:* While no direct author talk on this paper is available, a related talk on MoQ streaming challenges offers relevant context.

▶ [Ali C. Begen - Streaming Bad: Breaking Latency with MOQ](https://www.youtube.com/watch?v=l4dwczI5Bis) — Software Mansion · 10 months ago

## Already in your library

- [Transformers, the tech behind LLMs | Deep Learning Chapter 5](https://www.youtube.com/watch?v=wjZofJX0v4M) — also for: Learning Volumetric Neural Deformable Models to Recover 3D Regional Heart Wall Motion from Multi-Planar Tagged MRI (Meng Ye)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of adaptive bitrate (ABR) switching for time-shifted clients in Media over QUIC (MoQ). The beginner project reproduces a core metric from the paper using network simulation and ABR playback delay. The intermediate project implements the paper's Time Shift-Aware SWITCH (TSA-SWITCH) mechanism on the MOQtail codebase and compares it to a baseline ABR algorithm. The advanced project extends the TSA-SWITCH implementation by optimizing relay-side switch latency, addressing a key limitation identified by the authors.

### Beginner — Simulate Throughput Gains from Time-Shifted ABR Playback Delay
*Effort: a weekend, ~8 hours*

You build a Mininet-based network simulation that mimics bursty bandwidth conditions and run a simple ABR playback client with configurable playback delay (time-shift). You measure throughput and buffering metrics as playback delay varies from live-edge to a few seconds behind live. This reproduces the paper's key result that adding a few seconds of delay can increase throughput by up to four times.

**Why it shows you understood the paper:** This project shows you understand the core performance tradeoff of time-shifted ABR in MoQ and how network conditions and playback delay interact to affect throughput and buffering.

**Grounded in:** Key result: 'We characterize the performance of time shift-aware ABR under various network conditions and ABR configurations, demonstrating that by adding less than four seconds of stream delay can increase the throughput by four times.'

**Tech stack:** Python 3.11, Mininet, bash scripting

**Data:** Simulated network bandwidth traces generated within Mininet to mimic bursty network conditions as described in the paper.

**Build it:**

1. Install and configure Mininet on your system.
2. Create a simple network topology with a client, relay, and server nodes.
3. Implement a basic ABR client script that requests video segments with configurable playback delay.
4. Simulate bursty bandwidth profiles on the network links.
5. Run experiments varying playback delay from live-edge to 4 seconds behind live and record throughput and buffering metrics.
6. Plot throughput vs playback delay to reproduce the paper's throughput gain figure.

**Ships as:** A GitHub repo with Mininet scripts, ABR client code, experiment logs, and plots showing throughput improvements with playback delay.

**Stretch goal:** Add buffering and switch latency metrics to the simulation and analyze their tradeoffs with throughput.

### Intermediate — Implement TSA-SWITCH ABR in MOQtail and Compare to Standard ABR
*Effort: 1-3 weekends, ~20 hours*

You fork and set up the MOQtail open-source reference implementation of Media over QUIC from Baylor Multimedia Lab. You implement the Time Shift-Aware SWITCH (TSA-SWITCH) mechanism as described in the paper to enable ABR switching for time-shifted clients. You run network simulations using the MOQtail Mininet framework and compare TSA-SWITCH performance against a standard ABR baseline in terms of throughput, rebuffering, and switch latency.

**Why it shows you understood the paper:** This project demonstrates you can work with the actual MoQ protocol codebase, implement the paper's core method, and reproduce its evaluation metrics, showing deep comprehension of the protocol and ABR switching mechanisms.

**Grounded in:** Key contribution: 'Implementation of time shift-aware ABR switching and multiple ABR algorithms in open-source MoQ reference software.' Key result: 'Standard ABR algorithms can be applied to time-shifted playback without modification, yielding substantially higher throughput.'

**Tech stack:** Python 3.11, Mininet, Go (MOQtail codebase), bash scripting

**Data:** Use the MOQtail Mininet testing framework and pre-encoded video segments from the MOQtail repository as described in the paper.

**Build it:**

1. Clone the MOQtail repository from https://github.com/BaylorMultimediaLab/moqtail.
2. Set up the MOQtail environment and dependencies following the repository instructions.
3. Implement the TSA-SWITCH mechanism in MOQtail to support time-shifted ABR switching.
4. Configure network simulations with bursty bandwidth profiles using MOQtail's Mininet framework.
5. Run experiments comparing TSA-SWITCH to standard ABR switching for time-shifted clients.
6. Collect and analyze metrics: throughput, rebuffering time, and switch latency; generate plots similar to the paper.

**Verified links from the paper:**

- <https://github.com/BaylorMultimediaLab/moqtail> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo fork with TSA-SWITCH implementation, experiment scripts, and a detailed README with performance comparison plots and analysis.

**Stretch goal:** Add support for multiple ABR algorithms and compare their performance under TSA-SWITCH.

### Advanced — Optimize Relay-Side SWITCH to Reduce Switch Latency in MoQ
*Effort: a few weeks, ~40+ hours*

You extend the MOQtail TSA-SWITCH implementation by profiling and optimizing the relay-side switch execution to reduce the switch latency overhead identified as a limitation in the paper. You experiment with relay-side concurrency, stream prioritization, or caching strategies to minimize redundant data delivery and frame discards. You evaluate the impact of these optimizations on switch latency, throughput, and rebuffering under realistic network conditions.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction from the paper, showing you can critically analyze protocol overheads, modify complex streaming software, and contribute meaningful improvements to MoQ ABR switching.

**Grounded in:** Limitation: 'Switch latency remains higher than the GOP duration, which can cause redundant data delivery and discarded frames.' Future direction: 'Optimizing relay-side SWITCH execution to reduce switch latency.'

**Tech stack:** Python 3.11, Mininet, Go (MOQtail codebase), profiling tools (pprof or similar)

**Data:** Use MOQtail's pre-encoded video segments and Mininet network simulation framework as in the paper.

**Build it:**

1. Profile the existing relay-side SWITCH implementation in MOQtail to identify latency bottlenecks.
2. Implement optimizations such as improved concurrency, stream prioritization tweaks, or caching enhancements at the relay.
3. Modify the TSA-SWITCH code to incorporate these optimizations.
4. Run controlled network simulations to measure switch latency, throughput, and rebuffering before and after optimizations.
5. Analyze results to quantify latency reduction and tradeoffs.
6. Document the optimization approach, results, and implications for future ABR algorithm design in MoQ.

**Verified links from the paper:**

- <https://github.com/BaylorMultimediaLab/moqtail> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo fork with relay-side SWITCH optimizations, profiling data, evaluation scripts, and a comprehensive report on latency improvements and their impact.

**Stretch goal:** Explore hybrid ABR systems coordinating relay and client decisions as suggested in the paper's future directions.
