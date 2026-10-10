---
title: "627 · Reducing the Environmental Impact of Midblock Crossing — Stephan Olariu"
date: 2026-10-10
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-stephan-olariu"
source_hash: "7697e4425c2541a18734fcefd13d401956cc2238c35400efa483a9b493b2b4f3"
sequence: 627
generator: "outreach-garden: managed"
---

# 627 · Reducing the Environmental Impact of Midblock Crossing

## At a glance

- **Professor:** Stephan Olariu
- **Institution:** Old Dominion University
- **Paper:** [Reducing the Environmental Impact of Midblock Crossing](https://arxiv.org/abs/2406.00035)
- **Authors:** Abrar Alali, Stephan Olariu
- **Year:** 2024

## Paper overview

This paper addresses the environmental harm caused by pedestrians crossing streets midblock, which leads to increased fuel consumption and CO2 emissions due to cars slowing down and accelerating. The authors propose two schemes that use timely alerts about pedestrian crossing locations and durations to help cars adjust their speed safely without stopping, thereby reducing fuel use and emissions. Simulations show these methods can reduce fuel consumption and emissions by up to 16.7%.

### Why it matters

**Research problem:** Pedestrian midblock crossings cause cars to decelerate and accelerate abruptly, increasing fuel consumption and CO2 emissions. Despite the known environmental impact, no prior studies have focused on mitigating these effects through vehicular communication and speed adjustment schemes.

**Why it matters:** Midblock pedestrian crossings are common and unavoidable, yet they significantly increase fuel consumption and emissions, contributing to environmental pollution and inefficiency in urban traffic. Reducing these impacts can improve sustainability and traffic flow without compromising pedestrian safety.

**Key contributions:**

- Identification of a research gap in mitigating environmental impacts of midblock pedestrian crossings.
- Development of two speed adjustment schemes leveraging timely pedestrian crossing alerts.
- Comprehensive simulation-based evaluation of these schemes across multiple crossing scenarios.
- Demonstration that timely information dissemination reduces fuel consumption and CO2 emissions by up to 16.7% without increasing trip time.

## About the professor

**Stephan Olariu** — Professor of Computer Science, Department of Computer Science, Old Dominion University.

Research interests: Vehicular clouds, Wireless sensor networks, Vehicular communications, Stochastic modeling

### Research links

- [Faculty/profile page](http://www.cs.odu.edu/~olariu)
- [Resolved homepage](http://www.cs.odu.edu/~olariu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** vehicular communication networks
**The paper assumes:** vehicular communication systems, vehicle-to-everything (V2X) communication protocols, real-time wireless networking for vehicles
**Already in this field?** Skip this entirely if you already understand the fundamentals of vehicular communication networks and V2X protocols.

This background focuses on vehicular communication networks (V2I, V2V, V2P), which are critical for understanding the alert dissemination mechanisms and speed adjustment schemes proposed in the paper. The rigorous course option provides a comprehensive university-level introduction to communication networks with a dedicated lecture on vehicular communications, while the fast track offers a concise, terminology-focused playlist ideal for quickly grasping key concepts and vocabulary relevant to vehicular networks.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Communication Networks (ECO850)](https://www.youtube.com/playlist?list=PLWaZ79RwbKd2W5yLG5s6bo5leXYW19LNA) — Teaching Communication Engineering · 19 videos · 10.4h across 19 episodes

**Watch only this:** Lectures 01: Nodes_and_Links through 07: Protocol_Stack, plus Lecture 17: Vehicular Communications; about 4.5 hours total — this covers network basics, protocol stacks, and the dedicated vehicular communications lecture.

*Why it unblocks this paper:* This course covers communication networks from the ground up and includes a specific lecture on vehicular communications, directly addressing the networking principles and technologies underpinning the paper's V2X alert systems.

*If you want all of it:* 10.4 hours across all 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [TERMINOLOGIES USED IN COMMUNICATION NETWORKS](https://www.youtube.com/playlist?list=PLKw9Z1mxqeSs) — Nana Auto Diagnostics · 8 videos · 0.8h across 8 episodes

**Watch only this:** Episodes 1 through 4: Network Topology Explained, Multiplexing Explained, Encoding And Decoding Explained, Network impedance; about 20 minutes total — these cover core terms and concepts relevant to vehicular networks.

*Why it unblocks this paper:* This short playlist explains key communication network terminologies clearly and concisely, providing quick foundational knowledge on concepts and vocabulary essential for understanding vehicular communication networks.

*If you want all of it:* 0.8 hours across 8 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on reducing the environmental impact of midblock pedestrian crossings, start with foundational knowledge on vehicular communication systems, which underpin the alert dissemination mechanisms proposed. Next, grasp traffic simulation modeling, essential for appreciating the simulation environment used for evaluation. Then, study fuel consumption and emission modeling to comprehend how environmental impacts are quantified. Finally, focus on the core concept of speed adjustment schemes for eco-driving, culminating with the authors' own talk or related advanced presentations on pedestrian crossing safety and environmental impact mitigation.

### Vehicular communication systems *(prerequisite)*
Vehicular communication systems are fundamental to how alerts about pedestrian crossings are disseminated in the proposed schemes. Understanding the technology, applications, and security aspects of V2V, V2I, and V2P communications provides the necessary background to appreciate the communication framework enabling timely alerts.

*How the paper uses it:* The paper leverages vehicular communication technologies to send timely pedestrian crossing alerts to vehicles.

▶ [23C3: Vehicular Communication and VANETs](https://www.youtube.com/watch?v=SpSrjTxsHiE) — Christiaan008 · 1:02:54 · 15y ago

### Traffic simulation modeling *(prerequisite)*
Traffic simulation modeling is essential for understanding the simulation environment used to evaluate the proposed speed adjustment schemes. SUMO is the traffic simulator employed in the paper, so learning how to create and run simulations with SUMO will clarify the experimental setup and results interpretation.

*How the paper uses it:* The authors use SUMO traffic simulation to evaluate their speed adjustment schemes in various crossing scenarios.

▶ [SUMO ("Simulation of Urban MObility") Tutorial](https://www.youtube.com/watch?v=zQH1n0Fvxes) — Ethan Png · 40:44 · 5y ago

### Fuel consumption and emission modeling *(prerequisite)*
Fuel consumption and emission modeling is key to quantifying the environmental impact reductions achieved by the proposed schemes. Understanding how vehicle emissions are measured and modeled allows for a critical assessment of the paper's simulation results and environmental claims.

*How the paper uses it:* The paper uses physics-based fuel consumption and emission models to estimate environmental benefits of the schemes.

▶ [Vehicle Emission Basics - Mini Lecture by Professor Britt A. Holmén](https://www.youtube.com/watch?v=bZ3_MVchfiA) — UC Davis Institute of Transportation Studies · 28:53 · 6y ago

### Speed adjustment schemes for eco-driving
Speed adjustment schemes for eco-driving are central to the paper's methodology for reducing fuel consumption and emissions at midblock crossings. Studying advanced algorithmic and control approaches to eco-driving will provide insight into the design and effectiveness of the immediate and deferred deceleration schemes proposed.

*How the paper uses it:* The paper proposes two speed adjustment schemes to reduce environmental impact during pedestrian midblock crossings.

▶ [Eco-driving of Autonomous Vehicles for Non-stop Crossing of Signalized Intersections](https://www.youtube.com/watch?v=3fMuwfq-_IY) — Xiangyu Meng · 15:07 · 4y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk or closely related research presentations provide the most direct and authoritative explanation of the paper's contributions, methodology, and results. Such talks often include nuanced insights and contextualization not found in the paper alone.

*How the paper uses it:* Direct source for understanding the authors' presentation of their work on environmental impact reduction at midblock crossings.

▶ [Impact of Road Information Assistive Systems on Pedestrian Crossing Safety](https://www.youtube.com/watch?v=uJKgBD267jU) — SAFER-SIM UTC · 30:23 · 4y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on reducing environmental impact of midblock pedestrian crossings, start by learning about vehicular communication systems, which enable the timely alerts central to the proposed schemes. Next, grasp traffic simulation modeling to appreciate how the authors evaluated their methods. Then, study fuel consumption and emission modeling to understand how environmental impacts are quantified. Finally, explore speed adjustment schemes for eco-driving to see the practical methods used to reduce fuel use and emissions in the paper.

### Vehicular communication systems *(prerequisite)*
Vehicular communication systems allow vehicles to exchange information with each other, infrastructure, and pedestrians to improve safety and efficiency. Understanding these systems provides insight into how timely alerts about pedestrian crossings are disseminated to vehicles in the paper.

*How the paper uses it:* The paper relies on vehicle-to-infrastructure, vehicle-to-vehicle, and vehicle-to-pedestrian communications to send alerts about midblock pedestrian crossings.

▶ [Vehicular Communications: An Overview](https://www.youtube.com/watch?v=LfGX8sdDZro) — Wiseborn Danquah · 12:10 · 7mo ago

### Traffic simulation modeling *(prerequisite)*
Traffic simulation modeling uses software to create virtual traffic environments for testing and analysis. Learning about SUMO, a popular traffic simulator, helps understand how the authors simulated vehicle and pedestrian interactions to evaluate their speed adjustment schemes.

*How the paper uses it:* The authors used SUMO to simulate various crossing scenarios and test the effectiveness of their speed adjustment schemes.

▶ [SUMO ("Simulation of Urban MObility") Tutorial](https://www.youtube.com/watch?v=zQH1n0Fvxes) — Ethan Png · 40:44 · 5y ago

### Fuel consumption and emission modeling *(prerequisite)*
Fuel consumption and emission modeling quantifies how much fuel vehicles use and the pollutants they emit under different driving conditions. This knowledge is key to understanding how the paper measures environmental benefits from smoother vehicle speed adjustments.

*How the paper uses it:* The paper uses physics-based fuel consumption and emission models to estimate reductions achieved by their proposed schemes.

▶ [Vehicle Emission Basics - Mini Lecture by Professor Britt A. Holmén](https://www.youtube.com/watch?v=bZ3_MVchfiA) — UC Davis Institute of Transportation Studies · 28:53 · 6y ago

### Speed adjustment schemes for eco-driving
Speed adjustment schemes for eco-driving involve strategies to optimize vehicle speed to reduce fuel consumption and emissions without compromising safety. Understanding these schemes clarifies the core methods proposed in the paper to reduce environmental impact at midblock crossings.

*How the paper uses it:* The paper proposes two speed adjustment schemes that use pedestrian crossing alerts to help vehicles reduce speed smoothly and save fuel.

▶ [Eco-driving of Autonomous Vehicles for Non-stop Crossing of Signalized Intersections](https://www.youtube.com/watch?v=3fMuwfq-_IY) — Xiangyu Meng · 15:07 · 4y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's core idea: reducing environmental impact from midblock pedestrian crossings via vehicular communication and speed adjustment schemes. The beginner project reproduces a key simulation metric using your existing skills. The intermediate project implements the paper's core speed adjustment schemes in a simplified simulation and compares fuel consumption metrics. The advanced project extends the paper by incorporating uncertainty in pedestrian detection and communication delays, addressing a stated limitation and exploring real-world applicability.

### Beginner — Simulate Fuel Savings from Midblock Crossing Speed Adjustments
*Effort: a weekend, ~8 hours*

You build a simple Python simulation that models a single vehicle approaching a midblock pedestrian crossing and applies immediate speed reduction versus sudden stop scenarios. You calculate and compare estimated fuel consumption for both cases using a basic physics-based model. The simulation reproduces the paper's reported approximate 7.4% fuel savings from speed adjustment schemes.

**Why it shows you understood the paper:** This project shows you understand the environmental impact of midblock crossings and the benefit of speed adjustment schemes by reproducing a key quantitative result from the paper using a simplified model.

**Grounded in:** Both immediate and deferred deceleration schemes reduce fuel consumption by about 7.4% on average compared to sudden stops.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib

**Data:** Synthetic data generated by simulating vehicle speed and fuel consumption physics as described in the paper.

**Build it:**

1. Implement a simple vehicle speed profile simulator for approaching a pedestrian crossing with sudden stop and immediate deceleration scenarios.
2. Implement a physics-based fuel consumption model to estimate fuel use from speed and acceleration profiles.
3. Run simulations comparing fuel consumption for both scenarios over multiple runs.
4. Plot and report the percentage fuel savings from speed adjustment versus sudden stop.
5. Write a README explaining the simulation setup, assumptions, and how results relate to the paper.

**Ships as:** A Jupyter notebook or Python script with simulation code, plots showing fuel consumption comparison, and a README linking results to the paper's findings.

**Stretch goal:** Add deferred deceleration scheme simulation and compare its fuel savings as well.

### Intermediate — Reimplement Speed Adjustment Schemes in SUMO Simulation
*Effort: 2 weekends, ~20 hours*

You reimplement the paper's two speed adjustment schemes (immediate and deferred deceleration) in a SUMO traffic simulation environment. Using SUMO's APIs, you simulate a single-lane street with midblock pedestrian crossings and vehicles receiving alerts via simulated V2I communication. You compare fuel consumption and CO2 emissions metrics against a baseline of sudden stops, reproducing the paper's core evaluation.

**Why it shows you understood the paper:** This project demonstrates your ability to translate the paper's core methods into a traffic simulation, understand vehicular communication concepts, and evaluate environmental impact metrics as done in the paper.

**Grounded in:** The authors propose two speed reduction schemes for cars receiving alerts about midblock pedestrian crossings via vehicle-to-infrastructure (V2I), vehicle-to-vehicle (V2V), or vehicle-to-pedestrian (V2P) communications. They simulate these schemes in various scenarios using SUMO traffic simulation and physics-based fuel consumption and emission models.

**Tech stack:** Python 3.11, SUMO traffic simulator, TraCI Python API, matplotlib

**Data:** Synthetic traffic scenarios created in SUMO simulating midblock pedestrian crossings and vehicle approaches, as described in the paper.

**Build it:**

1. Install and set up SUMO and its Python TraCI API.
2. Create a simple SUMO network representing a single street with midblock pedestrian crossings.
3. Implement vehicle agents that receive pedestrian crossing alerts via simulated V2I communication.
4. Implement the immediate and deferred deceleration speed adjustment schemes controlling vehicle speed.
5. Run simulations comparing fuel consumption and CO2 emissions against a baseline with sudden stops.
6. Analyze and plot the fuel and emission savings, and write a report comparing results to the paper.

**Ships as:** A GitHub repository with SUMO configuration files, Python scripts implementing the schemes, simulation results, plots, and a README documenting the implementation and evaluation.

**Stretch goal:** Add variability in pedestrian crossing timing and locations to test robustness of schemes.

### Advanced — Model Uncertainty and Communication Delays in Speed Adjustment Schemes
*Effort: 3-4 weeks*

You extend the SUMO-based simulation by incorporating uncertainties in pedestrian detection and communication delays in alert dissemination. You model sensor detection failures and message latency probabilistically, then adapt the speed adjustment schemes to handle these uncertainties safely. You evaluate the impact on fuel consumption, emissions, and safety metrics, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction from the paper by integrating real-world factors into the simulation, demonstrating deep comprehension of the paper's assumptions and practical challenges in deploying the proposed schemes.

**Grounded in:** Simulations assume reliable pedestrian detection and alert dissemination systems, which may not reflect real-world sensor or communication failures. Future directions include integrating real-world sensor data and communication reliability factors.

**Tech stack:** Python 3.11, SUMO traffic simulator, TraCI Python API, NumPy, matplotlib

**Data:** Synthetic SUMO simulation data extended with probabilistic models for sensor and communication uncertainties.

**Build it:**

1. Extend the SUMO simulation environment from the intermediate project.
2. Implement probabilistic models for pedestrian detection failures and communication delays.
3. Modify speed adjustment schemes to incorporate uncertainty-aware decision logic.
4. Run simulations to measure effects on fuel consumption, emissions, and safety (e.g., collision risk).
5. Analyze trade-offs introduced by uncertainty and delays, and compare to idealized baseline.
6. Document methodology, results, and implications for real-world deployment.

**Ships as:** A comprehensive GitHub repository with extended simulation code, uncertainty models, evaluation scripts, detailed analysis, and a README discussing the impact of uncertainties on scheme effectiveness.

**Stretch goal:** Incorporate multiple simultaneous pedestrian alerts and develop adaptive algorithms optimizing speed adjustments dynamically.
