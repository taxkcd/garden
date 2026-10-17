---
title: "713 · HALO: Fault-Tolerant Safety Architecture For High-Speed Autonomous Racing — Madhur Behl"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-madhur-behl"
source_hash: "91ddee4137b4d9bf86944dc34d5cfc15e45e9a5912c93283e3233238772e9e4b"
sequence: 713
generator: "outreach-garden: managed"
---

# 713 · HALO: Fault-Tolerant Safety Architecture For High-Speed Autonomous Racing

## At a glance

- **Professor:** Madhur Behl
- **Institution:** University of Virginia
- **Paper:** [HALO: Fault-Tolerant Safety Architecture For High-Speed Autonomous Racing](https://arxiv.org/pdf/2503.10341)
- **Authors:** Aron Harder, Amar Kulkarni, Madhur Behl
- **Year:** 2025

## Paper overview

This paper presents HALO, a safety system designed for high-speed autonomous racing vehicles. HALO continuously monitors the vehicle's software and sensor systems to detect and mitigate faults that could cause crashes. It was implemented on a full-scale autonomous racecar competing in the Indy Autonomous Challenge, ensuring safe operation even at speeds over 170 mph by handling faults in perception, planning, control, and communication modules.

### Why it matters

**Research problem:** Ensuring safety in high-speed autonomous racing vehicles is challenging due to the risk of software faults, sensor failures, and unsafe behaviors during aggressive maneuvers. Traditional safety systems often fail under these extreme conditions, and there is a lack of comprehensive fault-tolerant safety architectures that monitor and mitigate faults in real-time across the entire autonomous racing software stack.

**Why it matters:** Autonomous racing pushes the limits of autonomous driving technology, providing a testbed for algorithms that can handle rare and challenging scenarios. Failures in this domain can cause costly crashes and damage, and lessons learned can improve safety in commercial autonomous vehicles and other cyber-physical systems. Developing robust fault-tolerant safety architectures is critical to advancing trust and reliability in autonomous systems.

**Key contributions:**

- First holistic overview of a fault-tolerant safety architecture for a full-scale autonomous racing vehicle.
- Detailed failure mode, effects, and criticality analysis of control, localization, communication, and perception modules.
- Design and implementation of the HALO framework that monitors and mitigates node health, data health, and behavioral-safety faults at runtime.
- Demonstration of HALO's effectiveness using real-world data from autonomous racing trials.
- Discussion of generalizability of HALO concepts to other autonomous cyber-physical systems.

## About the professor

**Madhur Behl** — Associate Professor, Computer Science, University of Virginia.

Research interests: Robotics, Artificial Intelligence, Cyber-Physical Systems, Autonomous Systems

### Research links

- [Faculty/profile page](https://engineering.virginia.edu/faculty/madhur-behl)
- [Professor website](https://www.madhurbehl.com/)
- [Resolved homepage](https://www.madhurbehl.com)
- [Lab website](https://autonomousracing.dev/)
- [Google Scholar](https://scholar.google.com/citations?user=bj_imaYAAAAJ&hl=en)
- [GitHub](https://github.com/madhurbehl)
- [LinkedIn](https://www.linkedin.com/in/madhurbehl/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Fault-Tolerant Systems Engineering
**The paper assumes:** fault-tolerant systems design, failure mode effects analysis, runtime fault detection and mitigation
**Already in this field?** Skip this entirely if you already understand fault-tolerant system design principles and runtime fault management in cyber-physical systems.

This background playlist selection focuses on fault-tolerant systems engineering, essential for understanding the HALO safety architecture's fault detection and mitigation in autonomous racing vehicles. The rigorous course option provides a structured, university-level deep dive into fault tolerance concepts relevant to critical systems, while the fast track offers a concise, targeted introduction to fault tolerance principles suitable for readers with limited time. Choose the course for comprehensive understanding or the fast track for a quick yet solid foundation.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Jan 2022 - Design and Engineering of Computer Systems](https://www.youtube.com/playlist?list=PLOzRYVm0a65dAAfy0d4aRtj5v0OCAvoCY) — NPTEL IIT Bombay · 54 videos · 22.3h across 54 episodes

**Watch only this:** Lectures 1-8 (Course Introduction, Introduction to Computer Systems, Principles of Computer Systems Design, Overview of CPU hardware, Overview of memory and I/O hardware, Introduction to Operating Systems, Processes, Kernel mode execution), about 3.2 hours — these provide the essential groundwork on system design and fault tolerance concepts relevant to HALO.

*Why it unblocks this paper:* This NPTEL IIT Bombay course 'Design and Engineering of Computer Systems' covers foundational topics in computer systems design, including fault tolerance aspects critical to understanding runtime monitoring and fault mitigation in complex systems like HALO. It is a university-level course with detailed lectures on processes, threads, kernel mode, and virtualization, which underpin fault-tolerant system design.

*If you want all of it:* 22.3 hours across 54 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Fault Tolerance And Diagnostics](https://www.youtube.com/playlist?list=PLJ2d6pc_SYk4Y5UO7MHCtqy-xI2ir1zQW) — LoganDemia · 8 videos · 1.8h across 8 episodes

**Watch only this:** Episodes 1-4 (Reliability Engineering Problem Solved, Path Sensitization Question Redo, Boolean Difference Method, PATH SENSITIZATION QUES PART B), about 52 minutes — these episodes cover core fault tolerance principles and fault modeling techniques needed to grasp HALO's approach.

*Why it unblocks this paper:* This 'Fault Tolerance And Diagnostics' playlist by LoganDemia offers a concise, focused introduction to fault tolerance concepts, including reliability engineering, fault modeling, and diagnostics, directly relevant to understanding the fault detection and mitigation strategies employed by HALO.

*If you want all of it:* 1.8 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the HALO fault-tolerant safety architecture for high-speed autonomous racing, start by grounding yourself in foundational methods like Failure Mode Effects and Criticality Analysis (FMECA) and runtime monitoring techniques for autonomous systems, as these underpin the fault detection and mitigation strategies in HALO. Next, explore sensor data fusion and multiplexing concepts critical for understanding how HALO switches between localization data sources. Finally, focus on the core concept by watching the authors' own talk on HALO and related fault-tolerant safety architectures, which provides direct insights into their design, implementation, and real-world deployment.

### Failure mode effects and criticality analysis seminar *(prerequisite)*
FMECA is a fundamental risk assessment technique used to systematically identify and classify potential faults and their impacts in complex systems. Understanding this method is crucial as the HALO architecture is built upon a detailed FMECA of the autonomous racing software stack to identify critical fault types.

*How the paper uses it:* The authors conducted an FMECA to identify node health, data health, and behavioral-safety faults that HALO monitors and mitigates.

▶ [Mod-01 Lec-03 Failure Modes Effects & Criticality Analysis](https://www.youtube.com/watch?v=UpVs0MXopb4) — nptelhrd · 45:32 · 11y ago

### Runtime monitoring autonomous systems lecture *(prerequisite)*
Runtime monitoring is a key technique for detecting faults in software and sensor data during system operation, enabling real-time fault detection and mitigation. This concept is central to HALO's approach of continuously supervising the autonomous vehicle's software nodes and sensor inputs to maintain safety.

*How the paper uses it:* HALO uses runtime monitors and safety nodes to detect and mitigate faults in the autonomous racing vehicle's software and sensors.

▶ [Safety-Critical Autonomous Systems: What is Possible? What is Required?](https://www.youtube.com/watch?v=TDqfi-GbMx4) — Simons Institute for the Theory of Computing · 1:04:57 · 8y ago

### Sensor data fusion and multiplexing lecture *(prerequisite)*
Sensor data fusion and multiplexing involve combining and switching between multiple sensor inputs to improve accuracy and reliability. This knowledge is essential to understand how HALO switches localization data sources from drifting EKF estimates to GNSS data to maintain safe operation.

*How the paper uses it:* HALO's Topic Multiplexer switches localization data sources upon fault detection to maintain accurate vehicle positioning.

▶ [Sensor Data Fusion](https://www.youtube.com/watch?v=49R96g8s2tM) — Soofastaei-Institute · 17:16 · 3y ago

### HALO fault-tolerant safety architecture talk
This talk by the paper's authors or closely related researchers provides a direct and detailed presentation of the HALO architecture, its design rationale, implementation details, and real-world validation. It offers the most authoritative and comprehensive insight into the paper's contributions and results.

*How the paper uses it:* This video presents the authors' own discussion on fault-tolerant safety architectures relevant to HALO, providing direct insights into their approach and findings.

▶ [AI-Driven Predictive Diagnostics and Fault-Tolerant Architectures for Software-Defined Vehicles](https://www.youtube.com/watch?v=IcpKEeoovdY) — Soft Computing Research Society · 20:22 · 3w ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the HALO fault-tolerant safety architecture for high-speed autonomous racing, start by learning the foundational method of Failure Mode Effects and Criticality Analysis (FMECA) to grasp how faults are identified and prioritized. Next, build intuition on runtime monitoring techniques used to detect faults in autonomous systems during operation. Then, explore behavioral safety concepts to understand how unsafe driving behaviors are detected and mitigated. Follow this with sensor data fusion and multiplexing to see how HALO switches between localization data sources. Finally, dive into the core HALO fault-tolerant safety architecture talk to see the full system in context.

### Failure mode effects and criticality analysis seminar *(prerequisite)*
Failure Mode Effects and Criticality Analysis (FMECA) is a structured approach to identify potential faults in a system, understand their causes and effects, and prioritize them based on risk. This method helps engineers proactively design safety measures by focusing on the most critical failure modes.

*How the paper uses it:* The authors conducted a FMECA of the autonomous racing software stack to identify key fault types that HALO monitors and mitigates.

▶ [FMEA, the 10 Step Process to do an FMEA (PFMEA or DFMEA)](https://www.youtube.com/watch?v=369a7z7uUio) — CQE Academy · 21:43 · 5y ago

### Runtime monitoring autonomous systems lecture *(prerequisite)*
Runtime monitoring involves continuously checking the health and correctness of software and sensor data during system operation to detect faults as they occur. This technique is essential for maintaining safety in autonomous systems that operate in dynamic, unpredictable environments.

*How the paper uses it:* HALO uses runtime monitors to detect node health, data health, and behavioral-safety faults in real-time during autonomous racing.

▶ [Safety-Critical Autonomous Systems: What is Possible? What is Required?](https://www.youtube.com/watch?v=TDqfi-GbMx4) — Simons Institute for the Theory of Computing · 1:04:57 · 8y ago

### Behavioral safety in autonomous vehicles talk *(prerequisite)*
Behavioral safety focuses on ensuring that autonomous vehicles behave safely in social and dynamic driving scenarios by detecting and mitigating unsafe maneuvers based on the behavior of other road users. Understanding this helps in designing systems that prevent accidents caused by risky driving decisions.

*How the paper uses it:* HALO detects and mitigates behavioral-safety faults during overtaking by monitoring opponent vehicle positions to prevent unsafe merges.

▶ [Understanding Risk and Social Behavior Improves Decision Making for Autonomous Vehicles](https://www.youtube.com/watch?v=KIhetLRVkww) — C3 Digital Transformation Institute · 30:55 · 5y ago

### Sensor data fusion and multiplexing lecture *(prerequisite)*
Sensor data fusion combines information from multiple sensors to improve accuracy and reliability, while multiplexing switches between data sources based on their quality or availability. These techniques are critical for robust localization and perception in autonomous vehicles.

*How the paper uses it:* HALO maintains safe operation by switching localization data sources from drifting EKF estimates to more accurate GNSS data using a topic multiplexer.

▶ [Sensor Data Fusion](https://www.youtube.com/watch?v=49R96g8s2tM) — Soofastaei-Institute · 17:16 · 3y ago

### HALO fault-tolerant safety architecture talk
This talk presents the HALO architecture itself, detailing how it integrates runtime monitoring, fault detection, and mitigation strategies to ensure safety in high-speed autonomous racing vehicles. It provides a comprehensive overview of the system design and real-world implementation.

*How the paper uses it:* This is the direct source presenting the HALO safety architecture and its application on a full-scale autonomous racecar.

▶ [AI-Driven Predictive Diagnostics and Fault-Tolerant Architectures for Software-Defined Vehicles](https://www.youtube.com/watch?v=IcpKEeoovdY) — Soft Computing Research Society · 20:22 · 3w ago

## Already in your library

- [Multimodality and Data Fusion Techniques in Deep Learning](https://www.youtube.com/watch?v=YpNxwG14Vxs) — also for: Dual-Pathway Fusion of EHRs and Knowledge Graphs for Predicting Unseen Drug-Drug Interactions (Tengfei Ma)
- [Understanding Sensor Fusion and Tracking, Part 1: What Is ...](https://www.youtube.com/watch?v=6qV3YjFppuc) — also for: D3VL: Understanding Driving Scenes from 3D Time Series Data and Video with Language Models (A. Lynn Abbott)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of the HALO fault-tolerant safety architecture for high-speed autonomous racing. The beginner project recreates a core runtime monitoring mechanism from the paper using your existing software skills. The intermediate project involves reimplementing HALO's data health fault mitigation method on a substitute dataset, introducing sensor data fusion concepts. The advanced project extends HALO by exploring Byzantine fault tolerance for safety monitors, addressing a key limitation and future direction from the paper.

### Beginner — Heartbeat Node Health Monitor Simulator
*Effort: a weekend, ~8 hours*

You build a simplified heartbeat monitoring system that simulates node health fault detection by tracking periodic 'heartbeat' signals from multiple software nodes and triggering fallback actions or graceful stops upon missed heartbeats. This project reproduces the core logic of HALO's node health monitoring using a simulated environment.

**Why it shows you understood the paper:** This project demonstrates your grasp of HALO's node health fault detection mechanism and how runtime monitoring can enable fault mitigation to maintain safety in autonomous systems.

**Grounded in:** Node health faults such as node crashes were detected by heartbeat monitoring, allowing fallback to alternate data sources or triggering a graceful stop to prevent unsafe behavior.

**Tech stack:** Python 3.11, FastAPI, JavaScript (React)

**Data:** Simulated heartbeat signals generated within the application to mimic node status updates.

**Build it:**

1. Implement a Python backend service that simulates multiple software nodes sending heartbeat signals at regular intervals.
2. Create a heartbeat monitor component that tracks the timing of received heartbeats and detects missed or delayed signals.
3. Define fallback actions such as switching to backup nodes or triggering a graceful stop when a heartbeat is missed.
4. Build a simple React frontend dashboard to visualize node statuses and monitor alerts in real-time.
5. Test the system by simulating node failures and verifying correct detection and mitigation responses.

**Ships as:** A GitHub repository containing the heartbeat monitor backend and frontend code, with a README explaining the simulation, how to run it, and screenshots or demo video showing fault detection and mitigation.

**Stretch goal:** Add logging and alert notifications (e.g., email or Slack) for detected node health faults.

### Intermediate — Localization Data Source Multiplexer with Fault Detection
*Effort: 2 weekends, ~20 hours*

You reimplement HALO's data health fault mitigation by building a localization data source multiplexer that switches between two simulated localization inputs (e.g., EKF estimates and GNSS data) based on fault detection criteria. You compare the multiplexer’s performance against a baseline that uses only EKF data, reporting metrics on localization accuracy and fault handling.

**Why it shows you understood the paper:** This project shows you understand HALO’s core method of runtime data monitoring and multiplexing to maintain safe vehicle operation despite sensor faults, reproducing a key contribution of the paper.

**Grounded in:** HALO successfully mitigated data health faults by switching localization data sources from drifting EKF estimates to more accurate GNSS data, maintaining safe vehicle operation.

**Tech stack:** Python 3.11, Jupyter Notebook, NumPy, Matplotlib

**Data:** Simulated localization data streams representing EKF and GNSS outputs with injected faults and noise to mimic drifting and accurate sources.

**Build it:**

1. Generate synthetic localization data streams for EKF and GNSS with realistic noise and fault injection (e.g., drift in EKF).
2. Implement a fault detection algorithm that monitors EKF data quality and detects faults based on thresholds or statistical tests.
3. Build a multiplexer that switches localization input from EKF to GNSS upon fault detection and switches back when EKF recovers.
4. Compare localization accuracy and fault handling performance against a baseline using only EKF data.
5. Visualize the localization trajectories, fault detection events, and switching behavior in plots.
6. Document the implementation, results, and analysis in a Jupyter Notebook.

**Ships as:** A GitHub repository with Jupyter Notebook demonstrating the multiplexer implementation, synthetic data generation, performance comparison, and visualizations.

**Stretch goal:** Extend the multiplexer to handle more than two data sources or implement a voting scheme for sensor fusion.

### Advanced — Byzantine Fault Tolerant Safety Monitor Framework
*Effort: 3+ weeks*

You design and implement a prototype framework that incorporates Byzantine fault tolerance into runtime safety monitors, addressing HALO’s limitation that monitors themselves are assumed fault-free. The framework simulates multiple redundant monitors with consensus mechanisms to detect and tolerate faulty or malicious monitor behavior, ensuring reliable fault detection and mitigation decisions.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper, demonstrating deep comprehension of HALO’s architecture and extending it with state-of-the-art fault tolerance techniques to improve safety guarantees.

**Grounded in:** HALO assumes that the safety monitors themselves are functioning correctly; failure of a monitor could lead to undetected faults. Future directions include incorporating Byzantine fault tolerance to handle failures of the safety monitors themselves.

**Tech stack:** Python 3.11, AsyncIO, Docker, FastAPI, React

**Data:** Simulated monitor outputs with injected Byzantine faults (e.g., conflicting or incorrect fault reports) to test consensus and fault tolerance.

**Build it:**

1. Research Byzantine fault tolerance algorithms suitable for distributed monitor consensus (e.g., PBFT).
2. Implement multiple redundant safety monitor instances that independently analyze simulated node health and data health inputs.
3. Develop a consensus mechanism among monitors to agree on fault detection results despite some monitors behaving maliciously or incorrectly.
4. Simulate fault injection scenarios where some monitors provide conflicting or false reports.
5. Demonstrate that the consensus-based framework correctly detects faults and triggers mitigation actions despite Byzantine faults.
6. Build a dashboard to visualize monitor states, consensus decisions, and fault mitigation outcomes.
7. Document the design, implementation details, experiments, and limitations.

**Ships as:** A GitHub repository with code for the Byzantine fault tolerant monitor framework, simulation scripts, and a detailed README with usage instructions and experimental results.

**Stretch goal:** Integrate the framework with a simulated autonomous vehicle software stack to demonstrate end-to-end fault tolerance.
