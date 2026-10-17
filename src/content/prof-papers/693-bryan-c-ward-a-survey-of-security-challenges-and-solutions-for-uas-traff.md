---
title: "693 · A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS) — Bryan C. Ward"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-bryan-c-ward"
source_hash: "f798a5dd68ea0992ae680ed9ed5980de17a8896f833704353a5010785904b844"
sequence: 693
generator: "outreach-garden: managed"
---

# 693 · A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)

## At a glance

- **Professor:** Bryan C. Ward
- **Institution:** Vanderbilt University
- **Paper:** [A Survey of Security Challenges and Solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS)](https://arxiv.org/pdf/2601.08229v1)
- **Authors:** Iman Sharifi, Mahyar Ghazanfari, Abenezer Taye, Peng Wei, Maheed H. Ahmed, Hyeong Tae Kim, Mahsa Ghasemi, Vijay Gupta, Noah Dahle, Robert Canady, Abel Diaz Gonzalez, Austin Coursey, Bryce Bjorkman, Cailani Lemieux-Mack, Bryan C. Ward, Xenofon Koutsoukos, Gautam Biswas, Heber Herencia-Zapana, Saqib Hasan, Isaac Amundson, Filippos Fotiadis, Ufuk Topcu, Junchi Lu, Qi Alfred Chen, Nischal Aryal, Amer Ibrahim, Abdul Karim Ras, Amir Shirkhodaie
- **Year:** 2026

## Paper overview

This paper surveys the cybersecurity vulnerabilities and defenses for small unmanned aerial systems (sUAS) operating within the UAS Traffic Management (UTM) framework. It analyzes threats across communication, navigation, perception, and software systems, and reviews defense mechanisms such as encryption, authentication, and intrusion detection. The work identifies open challenges for securing sUAS operations in increasingly complex airspace environments.

### Why it matters

**Research problem:** The rapid growth of sUAS in civil and commercial applications introduces significant cybersecurity risks due to their reliance on vulnerable communication, navigation, and surveillance subsystems. Existing surveys lack a detailed, system-oriented analysis tailored to resource-constrained sUAS within the UTM ecosystem.

**Why it matters:** Securing sUAS is critical to ensure safe and reliable integration into national airspace systems, prevent malicious attacks that could cause mission failure or physical harm, and maintain public trust and regulatory compliance as drone operations scale up.

**Key contributions:**

- A unified taxonomy of cybersecurity vulnerabilities and defenses specific to sUAS and UTM.
- Detailed analysis of attack surfaces in communication, navigation, perception, and software subsystems.
- Evaluation of defense mechanisms including classical cryptography, adaptive intrusion detection, and lightweight security protocols.
- Identification of scalability and practical effectiveness issues in current solutions.
- Highlighting open challenges for secure, scalable sUAS integration into future UTM environments.

## About the professor

**Bryan C. Ward** — Assistant Professor, Computer Science and Electrical and Computer Engineering, Vanderbilt University.

Research interests: design, implementation, and security of real-time and embedded systems, such as autonomous vehicles, industrial control systems, and satellites; systems security; real-time and cyber-physical systems; distributed and concurrent systems; operating systems

### Research links

- [Faculty/profile page](https://my.vanderbilt.edu/bryancward)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Cyber-Physical Systems Security
**The paper assumes:** cyber-physical systems security fundamentals and embedded system security
**Already in this field?** Skip this entirely if you already understand the security principles and threat models of cyber-physical systems and embedded devices.

This background is designed to provide foundational knowledge in cyber-physical systems security, specifically tailored to understanding the cybersecurity challenges and defenses for small unmanned aerial systems (sUAS) within the UAS Traffic Management (UTM) ecosystem. The rigorous course offers a deep, structured dive into safety-critical system validation, which underpins secure cyber-physical system design, while the fast track provides a concise, focused introduction to resilient cyber-physical systems security, ideal for quickly grasping core concepts and threat models.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford AA228V I Validation of Safety Critical Systems I 2025](https://www.youtube.com/playlist?list=PLoROMvodv4rOq1LMLI8U7djzDb8--xpaC) — Stanford Online · 17 videos · 20.1h across 17 episodes

**Watch only this:** Lectures 1-6 (Introduction & Overview, System Modeling, Property Specification 1 & 2, Falsification through Optimization, Falsification through Planning), about 7 hours — these cover foundational modeling and validation concepts critical to grasping cyber-physical security challenges.

*Why it unblocks this paper:* Stanford's 'Validation of Safety Critical Systems I' course rigorously covers system modeling, property specification, and runtime monitoring, all essential for understanding and validating security in cyber-physical systems like sUAS and UTM. Its focus on mathematical frameworks and validation techniques aligns well with the paper's system-oriented analysis of vulnerabilities and defense mechanisms.

*If you want all of it:* All 17 episodes, about 20.1 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Resilient Cyber-Physical Systems](https://www.youtube.com/playlist?list=PLj8kRC2E5JOuF999mplICbXsKjW5XCslz) — zhi feng · 8 videos · 7.5h across the first 7 episodes

**Watch only this:** Episodes 1-4 (Resilient Cyber-Physical Systems by Shankar Sastry, Cyber-physical Models of Power System State Estimation Security, Dynamic Data Attacks on Real-Time Power System Operations, Cyber-Physical Systems Security of Power Grid: Risk Modeling and Mitigation), about 4.2 hours — these provide a focused overview of CPS security fundamentals and attack surfaces.

*Why it unblocks this paper:* The 'Resilient Cyber-Physical Systems' playlist by zhi feng offers a concise, well-structured introduction to cyber-physical systems security, covering attack models, risk analysis, and mitigation strategies relevant to power grids and similar systems, which share core principles with sUAS security challenges.

*If you want all of it:* All 7 episodes with durations, about 7.5 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the cybersecurity challenges and solutions for UAS Traffic Management (UTM) and small Unmanned Aerial Systems (sUAS), start with foundational knowledge on the UTM systems and their security context, followed by the specific cybersecurity vulnerabilities in sUAS. Next, explore lightweight cryptography tailored for resource-constrained embedded systems, which is critical for securing sUAS. Finally, focus on the paper authors' own talk presenting their survey and findings to grasp the comprehensive system-oriented analysis and open challenges identified.

### UAS Traffic Management systems security *(prerequisite)*
Understanding the UTM framework and its security context is essential as it defines the operational environment where sUAS operate and face cybersecurity challenges. This section covers the architecture, operational goals, and cooperative ecosystem of UTM, providing a necessary backdrop for the paper's threat and defense analysis.

*How the paper uses it:* The paper surveys cybersecurity challenges within the UTM ecosystem, making UTM system security knowledge foundational.

▶ [Unmanned Aerial Traffic System | Parimal Kopardekar | Talks at Google](https://www.youtube.com/watch?v=iDjZzysw1MY) — Talks at Google · 44:15 · 10y ago

### Cybersecurity vulnerabilities in sUAS *(prerequisite)*
This section delves into the specific vulnerabilities of small unmanned aerial systems, including communication, navigation, and software weaknesses. Understanding these vulnerabilities is critical to appreciate the detailed threat analysis and classification presented in the paper.

*How the paper uses it:* The paper provides a detailed taxonomy and analysis of sUAS-specific cybersecurity vulnerabilities.

▶ [Identifying Small Unmanned Aircraft System (sUAS) Vulnerabilities (2 of 3)](https://www.youtube.com/watch?v=G2kTakFHE7o) — NCyTE Center · 19:07 · 6y ago

### Lightweight cryptography for embedded systems *(prerequisite)*
Lightweight cryptography is key to securing resource-constrained sUAS platforms without imposing prohibitive computational or power overheads. This section covers the design challenges and standards for cryptographic methods suitable for embedded IoT and sUAS devices.

*How the paper uses it:* The paper evaluates lightweight cryptographic protocols as part of defense mechanisms tailored for sUAS.

▶ [Lightweight Cryptography](https://www.youtube.com/watch?v=8P4otA1cC88) — Audit Control Governance Risk and Compliance · 1:20:21 · 1y ago

### Paper authors talk
The authors' own presentation offers direct insights into their comprehensive survey, including their unified taxonomy, analysis of attack surfaces, and open research challenges. This talk synthesizes the paper's contributions and contextualizes them within ongoing research efforts.

*How the paper uses it:* This video is a direct source for the authors' presentation of their survey and findings on sUAS and UTM cybersecurity.

▶ [UAV Traffic Management (UTM)](https://www.youtube.com/watch?v=lkmN_kVZhUg) — Berkeley Hybrid Systems Lab · 31:48 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces you to the key concepts needed to understand cybersecurity challenges and solutions for small unmanned aerial systems (sUAS) within UAS Traffic Management (UTM). Start by learning about the vulnerabilities specific to sUAS, then understand the UTM system context where these drones operate, followed by lightweight cryptography essential for securing resource-constrained devices. Finally, explore machine learning approaches for intrusion detection in cyber-physical systems, which represent emerging defense mechanisms discussed in the paper.

### Cybersecurity vulnerabilities in sUAS *(prerequisite)*
Begin by understanding the specific cybersecurity vulnerabilities that small drones face, such as communication jamming, spoofing, and software exploits. This foundational knowledge clarifies the threat landscape that the paper surveys and motivates the need for tailored defenses.

*How the paper uses it:* The paper analyzes attack surfaces and vulnerabilities specific to sUAS communication, navigation, perception, and software systems.

▶ [Introduction to Small Unmanned Aerial System (sUAS-drone) Cybersecurity (video 1 of 3)](https://www.youtube.com/watch?v=vE3TDmsYrvg) — NCyTE Center · 25:16 · 6y ago

### UAS Traffic Management systems security *(prerequisite)*
Next, learn about the UAS Traffic Management (UTM) framework, which coordinates drone operations in shared airspace. Understanding UTM's operational environment is critical to grasping the security challenges and system-level defenses discussed in the paper.

*How the paper uses it:* The paper situates sUAS cybersecurity within the UTM ecosystem, emphasizing the complexity of secure integration into national airspace.

▶ [Unmanned Aircraft System Traffic Management](https://www.youtube.com/watch?v=B8otqU4KbNA) — NASA X · 24:33 · 5y ago

### Lightweight cryptography for embedded systems *(prerequisite)*
Since sUAS have limited computational resources, lightweight cryptography is essential to provide security without excessive overhead. This section introduces the principles and challenges of designing cryptographic methods suitable for embedded, resource-constrained devices like drones.

*How the paper uses it:* The paper evaluates lightweight security protocols and cryptographic defenses tailored to the SWaP constraints of sUAS.

▶ [Lightweight Cryptography, Challenges in Designing IoT Applications](https://www.youtube.com/watch?v=8rtkOk-MUVc) — Parag Achaliya · 13:26 · 4y ago

### Machine learning for intrusion detection in cyber-physical systems
Finally, explore how machine learning can be used for real-time anomaly and intrusion detection in cyber-physical systems, including sUAS. This emerging approach aims to enhance security by detecting threats onboard despite resource constraints.

*How the paper uses it:* The paper highlights the need for lightweight ML-based detectors for real-time threat detection on sUAS platforms.

▶ [Anomaly-Based Intrusion Detection Explained (Beginner-Friendly IDS Tutorial)](https://www.youtube.com/watch?v=7vgKmbYWHiI) — SimplyExplained · 6:27 · 1y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of cybersecurity challenges and defenses for small unmanned aerial systems (sUAS) within UAS Traffic Management (UTM). Starting with a beginner-level simulation of GPS spoofing attacks, you advance to implementing a lightweight machine-learning-based intrusion detection system, and culminate in an advanced project exploring cooperative anti-jamming strategies across sUAS fleets, addressing a key future direction from the paper.

### Beginner — GPS Spoofing Attack Simulation on sUAS Navigation
*Effort: a weekend, ~8 hours*

You build a small simulation environment that demonstrates GPS spoofing attacks on a sUAS navigation system using the GPS-SDR-SIM software-defined GPS signal simulator. The project will show how spoofed GPS signals can mislead drone navigation and visualize the impact on position estimates.

**Why it shows you understood the paper:** This project shows you understand the navigation attack surface and the practical vulnerabilities of GNSS in sUAS, as well as how software-defined radio tools can be used to simulate such attacks realistically.

**Grounded in:** Demonstrated that sUAS communication links are vulnerable to jamming, spoofing, and man-in-the-middle attacks. [Paper section on GPS spoofing and navigation vulnerabilities]

**Tech stack:** Python 3.11, GPS-SDR-SIM (https://github.com/osqzss/gps-sdr-sim), Matplotlib or Plotly for visualization

**Data:** No external dataset needed; uses GPS-SDR-SIM to generate spoofed GPS signals for simulation.

**Build it:**

1. Set up GPS-SDR-SIM and generate spoofed GPS signal data targeting a simulated drone receiver.
2. Implement a simple Python script to parse and visualize the spoofed GPS data and its deviation from true coordinates.
3. Create plots or animations showing the effect of spoofing on drone position estimates over time.
4. Write a README explaining the GPS spoofing attack mechanism and its implications for sUAS navigation security.

**Verified links from the paper:**

- <https://github.com/osqzss/gps-sdr-sim> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repository with simulation scripts, visualizations of spoofed GPS data impact, and a clear README explaining the vulnerability and attack simulation.

**Stretch goal:** Add a basic inertial sensor fusion simulation to show how combining GNSS with inertial data could mitigate spoofing effects.

### Intermediate — Lightweight ML-Based Intrusion Detection for sUAS Communication
*Effort: 2 weekends, ~20 hours*

You implement a lightweight machine learning model to detect jamming and spoofing attacks on sUAS communication links. Using synthetic or publicly available network traffic data, you train a simple classifier to distinguish normal from attack traffic and evaluate detection accuracy against a baseline threshold method.

**Why it shows you understood the paper:** This project demonstrates your grasp of adaptive intrusion detection mechanisms tailored to resource-constrained sUAS, reflecting the paper's analysis of ML-based security solutions and their trade-offs.

**Grounded in:** Reviewed anti-jamming techniques such as FHSS, DSSS, and machine-learning-based detection, noting limitations due to size, weight, and power constraints. [Paper section on ML-based intrusion detection]

**Tech stack:** Python 3.11, scikit-learn, Jupyter Notebook, NumPy, Pandas

**Data:** Use synthetically generated network traffic data simulating normal and jamming/spoofing attack patterns, as no public sUAS-specific datasets are available.

**Build it:**

1. Generate or simulate network traffic data representing normal and attack scenarios (e.g., jamming/spoofing patterns).
2. Extract relevant lightweight features suitable for onboard sUAS processing (e.g., signal strength variance, packet loss rate).
3. Train a simple ML classifier (e.g., decision tree or logistic regression) to detect attacks.
4. Compare the ML model's detection accuracy and false positive rate against a baseline threshold-based detector.
5. Document the trade-offs in computational overhead and detection performance in the README.

**Ships as:** A GitHub repo containing data generation scripts, ML training and evaluation notebooks, and a report on detection performance and resource trade-offs.

**Stretch goal:** Implement the model in a lightweight embedded-friendly framework (e.g., TensorFlow Lite) and benchmark inference time on a low-power device emulator.

### Advanced — Cooperative Anti-Jamming Strategy Simulation for sUAS Fleets
*Effort: 3+ weeks*

You develop a simulation framework modeling a fleet of sUAS cooperating to detect and mitigate jamming attacks using distributed algorithms. The system implements a cooperative anti-jamming protocol inspired by the paper's future direction, simulating communication among drones to share threat information and adapt their frequency hopping patterns.

**Why it shows you understood the paper:** This project tackles a key open challenge identified in the paper—scalable, cooperative anti-jamming defenses for resource-constrained sUAS fleets—demonstrating your ability to extend survey insights into novel system design and simulation.

**Grounded in:** Development of cooperative anti-jamming strategies across sUAS fleets. [Paper future directions section]

**Tech stack:** Python 3.11, SimPy or NS-3 for network simulation, NumPy, Matplotlib, GitHub Actions for CI

**Data:** Simulated communication and jamming attack scenarios within a multi-agent sUAS fleet; no external dataset required.

**Build it:**

1. Design a simulation environment modeling multiple sUAS nodes communicating over wireless links subject to jamming.
2. Implement a cooperative anti-jamming protocol where drones share jamming detection alerts and coordinate frequency hopping.
3. Simulate various attack intensities and measure metrics such as communication availability and detection latency.
4. Compare cooperative protocol performance against a non-cooperative baseline.
5. Write detailed documentation explaining the protocol design, simulation setup, and results.
6. Optionally, containerize the simulation for reproducible runs and CI integration.

**Ships as:** A comprehensive GitHub repository with simulation code, performance evaluation scripts, and a detailed README discussing the cooperative anti-jamming approach and its benefits.

**Stretch goal:** Extend the simulation to incorporate lightweight onboard ML models for real-time threat detection integrated with the cooperative protocol.
