---
title: "948 · Automatic Calibration in Crowd-sourced Network of Spectrum Sensors — Ali Abedi"
date: 2026-10-23
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ali-abedi"
source_hash: "de5f934089769156ecffc33f51875ca17e10932bba4cabd12dde825dce0bfc7c"
sequence: 948
generator: "outreach-garden: managed"
---

# 948 · Automatic Calibration in Crowd-sourced Network of Spectrum Sensors

## At a glance

- **Professor:** Ali Abedi
- **Institution:** University of Wisconsin - Madison
- **Paper:** [Automatic Calibration in Crowd-sourced Network of Spectrum Sensors](https://dl.acm.org/doi/pdf/10.1145/3626111.3628187)
- **Authors:** Ali Abedi, Joshua Sanz, Anant Sahai
- **Year:** 2023

## Paper overview

This paper addresses the challenge of ensuring trust and data quality in large-scale, crowd-sourced wireless spectrum monitoring networks. It proposes an automatic calibration method that uses existing wireless signals, such as airplane ADS-B transmissions and cellular/broadcast TV signals, to evaluate the reception quality and obstructions around sensor nodes without manual supervision. This enables reliable, scalable spectrum sensing by volunteers who operate sensor nodes.

### Why it matters

**Research problem:** How to automatically and reliably evaluate the quality and trustworthiness of data from distributed, crowd-sourced spectrum sensor nodes, which may suffer from obstructions, poor installation, or even fabricated data, without manual testing of each node.

**Why it matters:** Spectrum monitoring is critical for optimizing wireless spectrum usage, detecting interference, and supporting future wireless networks including IoT and public safety. Large-scale monitoring requires many distributed sensors operated by volunteers, but trust in data quality is essential to prevent poor or fabricated data from undermining the system's reliability and usefulness.

**Key contributions:**

- A methodology using existing wireless signals to automatically evaluate spectrum sensor data quality.
- Leveraging ADS-B airplane signals to determine obstructions affecting sensor directional reception.
- Using signals across multiple frequency bands (cellular, broadcast TV) to assess impact of obstructions on sensor reception.
- Demonstration of the approach with software-defined radios and real-world experiments in different environments (rooftop, behind window, indoor).

## About the professor

**Ali Abedi** — Assistant Professor, Department of Computer Sciences, University of Wisconsin - Madison.

Research interests: computer systems and networking with a special focus on wireless networking/sensing, and low-power and low-cost networking for Internet of Things (IoT) devices

### Research links

- [Faculty/profile page](https://pages.cs.wisc.edu/~abedi)
- [Google Scholar](https://scholar.google.com/citations?user=TOjDxhMAAAAJ)
- [GitHub](https://github.com/aabedii)
- [LinkedIn](https://www.linkedin.com/in/ali-abedi-073198190/)
- [Social profile](https://twitter.com/ali_a_abedi)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Wireless Communication Fundamentals
**The paper assumes:** wireless communication principles, radio frequency propagation, signal attenuation, and spectrum sensing basics
**Already in this field?** Skip this entirely if you already understand wireless signal propagation, frequency bands, and how obstructions affect radio reception.

To understand the automatic calibration method in crowd-sourced spectrum sensor networks, a solid grasp of wireless communication fundamentals is essential, especially signal propagation, frequency bands, and attenuation by obstructions. The rigorous course option offers a deep, structured university-level lecture series covering these topics comprehensively, while the fast track provides a concise, focused introduction suitable for quickly gaining the necessary intuition and background without a large time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Mobile & wireless communication](https://www.youtube.com/playlist?list=PLv4-IILpucYdOyEyvM3oHJFbohZIV0l82) — Engineer Rise · 16 videos · 5.7h across 16 episodes

**Watch only this:** Episodes 1-4, about 1.4 hours — covering full concept and important points of mobile wireless communication system basics.

*Why it unblocks this paper:* This playlist provides a concise and clear overview of mobile and wireless communication fundamentals, including signal propagation and frequency bands, in a practical and accessible manner suitable for quickly grasping the key concepts needed to understand the paper's use of wireless signals for sensor calibration.

*If you want all of it:* All 16 episodes, about 5.7 hours total.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on automatic calibration in crowd-sourced spectrum sensor networks, start with foundational knowledge on radio frequency propagation to grasp how signals attenuate and are obstructed in different environments. Next, explore the concept of signals of opportunity in wireless networks to appreciate how existing transmissions can be leveraged for passive calibration. Then, study trust mechanisms in crowd-sourced sensor networks to understand challenges in ensuring data integrity. Finally, focus on the core concept of wireless spectrum sensing calibration, culminating with the authors' own talk or the closest available advanced seminar on sensor calibration techniques.

### Radio frequency propagation *(prerequisite)*
Understanding radio wave propagation is essential to grasp how physical obstructions and environmental factors affect signal reception quality at different frequencies, which is central to the paper's method of using signal attenuation patterns for sensor calibration.

*How the paper uses it:* The paper uses ADS-B and other wireless signals whose reception is affected by propagation and obstruction characteristics to infer sensor quality.

▶ [Introduction to Radio Wave Propagation by Dr. V Kishen Ajay Kumar](https://www.youtube.com/watch?v=bYJ5EqsvL6k) — Institute of Aeronautical Engineering · 36:33 · 4y ago

### Signals of opportunity in wireless networks *(prerequisite)*
Signals of opportunity refer to existing ambient wireless transmissions that can be exploited for sensing or calibration without active transmissions. Understanding this concept is key to appreciating the paper's approach of using ADS-B, cellular, and broadcast TV signals for passive sensor calibration.

*How the paper uses it:* The paper leverages signals of opportunity like ADS-B and cellular broadcasts to automatically calibrate spectrum sensors without manual intervention.

▶ [Zheng Chen - Distributed Intelligence over Wireless Networks](https://www.youtube.com/watch?v=GShC3Ga2fOk) — Digital Futures: Research Hub for Digitalization · 38:24 · 4y ago

### Crowd-sourced sensor networks trust *(prerequisite)*
Trust in crowd-sourced sensor networks is critical to ensure data integrity and prevent malicious or fabricated data, a challenge the paper acknowledges and aims to address through automatic calibration and future trust mechanisms.

*How the paper uses it:* The paper discusses the need for trust mechanisms to prevent fabricated data in incentivized volunteer sensor networks.

▶ [NDSS 2021 Trust the Crowd: Wireless Witnessing to Detect Attacks on ADS-B-Based Air-Traffic...](https://www.youtube.com/watch?v=T1E3QwavoQc) — NDSS Symposium · 15:00 · 5y ago

### Wireless spectrum sensing calibration *(paper-talk search result; attribution unverified)*
This core concept covers methods to evaluate and improve the quality of spectrum sensor data automatically, which is the main contribution of the paper. Understanding calibration techniques in wireless sensing provides the technical background to appreciate the paper's novel approach.

*How the paper uses it:* The paper proposes an automatic calibration mechanism for spectrum sensors using passive wireless signals and demonstrates its effectiveness.

▶ [Space SEMINAR #4: AI for Calibration & Blind Calibration of Sensors](https://www.youtube.com/watch?v=g5bMGyhA82c) — Faculty of Space Technologies AGH · 53:21 · 1y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on automatic calibration in crowd-sourced spectrum sensor networks, start by learning the basics of radio frequency propagation to grasp how signals travel and are affected by obstructions. Next, explore the concept of signals of opportunity, which explains how existing wireless transmissions can be used for passive sensor calibration. Then, study crowd-sourced sensor network trust to appreciate the challenges in ensuring data integrity from volunteer-operated sensors. Finally, focus on wireless spectrum sensing calibration, the core method used in the paper to automatically evaluate sensor data quality using passive signals.

### Radio frequency propagation *(prerequisite)*
Radio frequency propagation covers how radio waves travel through space and interact with obstacles, which affects signal strength and quality. Understanding this helps explain why sensor reception varies with location and obstructions, a key factor in the paper's calibration approach.

*How the paper uses it:* The paper uses knowledge of RF propagation to interpret how ADS-B and other signals attenuate due to obstructions around sensors.

▶ [Radio Wave Propagation Basics - Where do Signals Go - and How?](https://www.youtube.com/watch?v=UgA6zU59KZw) — DXCommander · 15:24 · 2y ago

### Signals of opportunity in wireless networks *(prerequisite)*
Signals of opportunity are existing wireless transmissions not originally intended for calibration but used to evaluate sensor performance passively. This concept is crucial for the paper's method of leveraging airplane ADS-B and cellular signals without active transmissions.

*How the paper uses it:* The paper's automatic calibration relies on using signals of opportunity like ADS-B and broadcast TV to assess sensor quality without manual intervention.

▶ [Wireless Networking Explained | Cisco CCNA 200-301](https://www.youtube.com/watch?v=Uz-RTurph3c) — CertBros · 12:19 · 3y ago

### Crowd-sourced sensor networks trust *(prerequisite)*
Trust in crowd-sourced sensor networks involves ensuring data integrity and preventing malicious or fabricated data from volunteer sensors. This is essential for reliable large-scale spectrum monitoring where sensors are operated by diverse participants.

*How the paper uses it:* The paper addresses trust challenges by proposing automatic calibration to detect poor or fabricated sensor data in volunteer networks.

▶ [Trustworthiness in Sensor Networks - A Reputation Based Method for Weather Stations](https://www.youtube.com/watch?v=im_3F8B7Dz0) — IEEE COINS Conference · 13:28 · 6y ago

### Wireless spectrum sensing calibration
Wireless spectrum sensing calibration involves methods to automatically evaluate and improve the quality of sensor data by comparing received signals to known references. This is the core technique the paper develops using passive signals to calibrate distributed spectrum sensors.

*How the paper uses it:* The paper's key contribution is an automatic calibration mechanism using ADS-B, cellular, and broadcast TV signals to assess sensor reception quality and obstructions.

▶ [Lecture 006 : Calibration of Interferometric Data](https://www.youtube.com/watch?v=J0GiPP7xPSU) — Astronomy Academy · 16:55 · 11y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression from a simple reproduction of the paper's core calibration concept using ADS-B signals, through an intermediate implementation of multi-band sensor quality evaluation using cellular and broadcast TV signals, to an advanced extension addressing a key limitation by integrating active calibration signals or alternative RF sources. Each project is designed to match your software engineering and applied ML skills while deepening your understanding of automatic calibration in crowd-sourced spectrum sensor networks.

### Beginner — ADS-B Signal Obstruction Visualization
*Effort: a weekend, ~8 hours*

You build a small tool that processes ADS-B airplane signal data to visualize how physical obstructions affect sensor reception quality. Using publicly available ADS-B data streams (e.g., from dump1090) and simulated obstruction scenarios, you plot signal strength or reception counts by direction to replicate the paper's Figure 1 style visualization.

**Why it shows you understood the paper:** This project demonstrates your grasp of how ADS-B signals serve as a passive calibration source to detect directional obstructions around sensors, a key contribution of the paper.

**Grounded in:** ADS-B based measurements clearly correlate with physical obstructions, accurately indicating sensor field of view in different locations.

**Tech stack:** Python 3.11, matplotlib, pandas, dump1090 (ADS-B decoder)

**Data:** Use live or recorded ADS-B data decoded via dump1090 (https://github.com/flightaware/dump1090) as a proxy for airplane signals; simulate obstruction by filtering or attenuating signals from certain directions.

**Build it:**

1. Set up dump1090 to decode ADS-B signals from a public data source or recorded file.
2. Parse ADS-B messages to extract airplane positions and received signal strength at the sensor.
3. Simulate obstructions by selectively attenuating or removing signals from specific directions.
4. Visualize the resulting directional signal strength or reception counts using polar plots.
5. Write a README explaining how the visualization relates to sensor obstruction detection.

**Verified links from the paper:**

- <https://github.com/flightaware/dump1090> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to decode and process ADS-B data, generate directional signal strength plots, and a README linking the visualization to obstruction detection.

**Stretch goal:** Add a simple web interface with interactive plots to explore different obstruction scenarios.

### Intermediate — Multi-Band Sensor Quality Evaluation
*Effort: 2 weekends, ~20 hours*

You implement the paper's core automatic calibration method by processing passive signals across multiple frequency bands (ADS-B at 1090 MHz, cellular bands, and broadcast TV frequencies) to evaluate sensor reception quality. You compare signal attenuation patterns indoors vs outdoors and produce metrics that infer sensor installation environment.

**Why it shows you understood the paper:** This project shows you can reimplement the paper's multi-frequency calibration approach, demonstrating understanding of how combining different signals reveals sensor environment and quality.

**Grounded in:** Using signals across multiple frequency bands (cellular, broadcast TV) to assess impact of obstructions on sensor reception. Combining multiple signal sources enables inference of sensor installation environment (indoor vs outdoor) and verification of installation claims.

**Tech stack:** Python 3.11, pandas, numpy, matplotlib, scikit-learn

**Data:** Use publicly available cellular and broadcast TV signal strength datasets if available, or simulate signal attenuation patterns based on known propagation models; use dump1090 ADS-B data for 1090 MHz band.

**Build it:**

1. Collect or simulate signal strength data for ADS-B, cellular, and broadcast TV bands at different sensor locations (indoor, outdoor, behind window).
2. Implement data processing pipelines to extract signal quality metrics per frequency band.
3. Combine metrics across bands to classify sensor installation environment using simple ML models (e.g., logistic regression).
4. Evaluate classification accuracy and visualize attenuation patterns consistent with the paper's results.
5. Document the methodology and results in a detailed README.

**Verified links from the paper:**

- <https://github.com/flightaware/dump1090> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A repo with data processing scripts, ML classification code, visualizations of signal attenuation, and a README explaining how multi-band signals calibrate sensor quality.

**Stretch goal:** Incorporate real cellular signal data from open datasets or SDR captures to replace simulations.

### Advanced — Active Calibration Signal Integration for Spectrum Sensors
*Effort: 3+ weeks*

You extend the paper's passive calibration approach by integrating active calibration signals or alternative RF sources to address the limitation of sparse passive signals in some environments or frequency bands. You design and implement a prototype system that schedules active test transmissions or leverages alternative signals, and apply ML models to estimate sensor field of view and calibration accuracy.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction of the paper, demonstrating deep comprehension and the ability to innovate beyond the original method toward an end-to-end automatic calibration system.

**Grounded in:** The system currently relies on passive signals and cannot actively test sensor calibration across all bands or absolute power measurements. Future directions include developing end-to-end automatic verification systems and expanding RF sources used for calibration.

**Tech stack:** Python 3.11, scikit-learn, PyTorch or TensorFlow, GNU Radio, Docker

**Data:** Use simulated active calibration signals and passive signal data; optionally use SDR hardware or GNU Radio simulations to generate test signals.

**Build it:**

1. Research and select candidate active calibration signals or alternative RF sources suitable for spectrum sensor calibration.
2. Implement a scheduling mechanism to simulate or generate active test transmissions at selected frequencies.
3. Collect combined passive and active signal data for sensors under different obstruction scenarios.
4. Train ML models to estimate sensor field of view and calibration accuracy from combined signal data.
5. Evaluate model performance and compare against passive-only calibration baseline.
6. Document design decisions, implementation details, and evaluation results.

**Ships as:** A comprehensive repo with code for active signal generation/scheduling, ML calibration models, evaluation scripts, and a detailed README discussing how active calibration improves sensor trustworthiness.

**Stretch goal:** Deploy the system on real SDR hardware and volunteer sensor nodes to validate in real-world conditions.
