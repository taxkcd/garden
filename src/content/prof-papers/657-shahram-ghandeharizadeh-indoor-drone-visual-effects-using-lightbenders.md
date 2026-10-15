---
title: "657 · Indoor Drone Visual Effects Using LightBenders — Shahram Ghandeharizadeh"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-shahram-ghandeharizadeh"
source_hash: "69e29e5bd140691b9c2130b19d20fbeaf012007dcfd642b4a457e22cd5372757"
sequence: 657
generator: "outreach-garden: managed"
---

# 657 · Indoor Drone Visual Effects Using LightBenders

## At a glance

- **Professor:** Shahram Ghandeharizadeh
- **Institution:** University of Southern California
- **Paper:** [Indoor Drone Visual Effects Using LightBenders](https://doi.org/10.1145/3799825.3818746)
- **Authors:** Hamed Alimohammadzadeh, Shahram Ghandeharizadeh
- **Year:** 2026

## Paper overview

This paper introduces a system called LightBenders, which are drones equipped with LED rods that can be controlled to create indoor visual effects like line drawings and words. The authors developed seven different visual effects and a Blender add-on tool that allows artists to design and preview these effects before deploying them with the drones. The system supports complex animations by controlling LED colors, rod angles, and drone positions in 3D space.

### Why it matters

**Research problem:** Creating synchronized, visually appealing indoor drone light shows that go beyond simple points of light by using actuated LED rods on drones, and providing tools to efficiently author and choreograph complex visual effects.

**Why it matters:** Indoor drone light shows with line and shape capabilities can enable new forms of immersive multimedia displays and artistic expression. However, choreographing such effects manually is labor-intensive and error-prone, limiting creative exploration and practical deployment.

**Key contributions:**

- Definition of a design space for visual effects using LightBenders, parameterized by LED color, rod angles, and 3D position.
- Introduction of Fold, a novel visual effect leveraging the actuation of LightBender rods.
- Implementation of six other visual effects: Pulse, Sparkle, Color Cycle, Color Chase, Draw/Erase, and Fly-Out/Fly-In.
- Development of a Blender add-on authoring tool for designing and previewing these effects.
- Open sourcing the authoring software.

## About the professor

**Shahram Ghandeharizadeh** — Associate Professor, Computer Science, University of Southern California.

Research interests: design, implementation and evaluation of novel architectures for high performance data intensive applications, intelligent 3D multimedia displays, physical AI using Flying Light Specks, multimedia based social networking systems, transaction processing systems, and human computer interaction

### Research links

- [Faculty/profile page](https://viterbi.usc.edu/directory/faculty/Ghandeharizadeh/Shahram)
- [Identity evidence](https://www.flslab.org)
- [Professor website](https://www.flslab.org/personnel)
- [Lab website](https://www.flslab.org/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Swarm robotics and multi-agent control
**The paper assumes:** multi-agent systems, swarm robotics fundamentals, decentralized control algorithms, drone swarm choreography
**Already in this field?** Skip this entirely if you already understand the basics of swarm robotics and multi-agent control systems, including decentralized coordination and localization.

This background focuses on swarm robotics and multi-agent control, essential for understanding how multiple drones can be precisely synchronized to create complex indoor visual effects as in the LightBenders system. The rigorous course offers a deep, structured university-level foundation, while the fast track provides a concise, intuition-driven introduction to key concepts in swarm robotics, suitable for quickly grasping the essentials before diving into the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Mobile Robot Systems Course - Amanda Prorok, University of Cambridge](https://www.youtube.com/playlist?list=PLaTKfS3-bDpDyOwrxLcQRGxY9XJw33ANo) — Prorok Lab · 10 videos · 11.6h across 10 episodes

**Watch only this:** Lectures 1 through 9 (Introduction to Robotics; Control Architectures; Motion Control; Sensors and Perception; Localization; Multi-Robot Systems & Collective Motion; Multi-Robot Assignment Methods; Multi-Robot Path Planning), about 9.5 hours — these cover the core principles of multi-agent coordination, sensing, and planning needed to understand the paper's system.

*Why it unblocks this paper:* This University of Cambridge course by Amanda Prorok covers foundational topics in multi-robot systems, including multi-robot systems & collective motion, multi-robot path planning, assignment methods, and localization, directly relevant to the decentralized control and choreography challenges in LightBenders.

*If you want all of it:* All 10 lectures, about 11.6 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Swarm Robotics](https://www.youtube.com/playlist?list=PLKz3_ng4JoFTi7JHSEqgwsXADcWMW30B3) — Jacob Perron · 6 videos · 0.8h across 6 episodes

**Watch only this:** All 6 episodes, about 0.8 hours total — the entire playlist is concise and covers the essential intuition and examples of swarm robotics relevant to the paper.

*Why it unblocks this paper:* This short-form series by Jacob Perron provides a clear, visual introduction to swarm robotics concepts including cooperation, collective behavior, and trajectory planning for aerial robot teams, giving an accessible overview of the key ideas behind drone swarm coordination in under an hour.

*If you want all of it:* Same as minimum watch, 0.8 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Indoor Drone Visual Effects Using LightBenders,' start by building foundational knowledge on drone swarm choreography, indoor drone localization techniques, and aerodynamic downwash effects, as these are critical challenges addressed in the paper. Next, gain familiarity with Blender animation authoring tools since the paper introduces a Blender add-on for effect design. Finally, focus on the core concept of LightBenders indoor drone visual effects, prioritizing the authors' own presentation or closest related academic talks to grasp the system's unique contributions and implementations.

### drone swarm choreography lecture *(prerequisite)*
Understanding coordinated multi-drone movement is essential for synchronized effects in drone light shows. This section covers swarm intelligence, formation control, and challenges in multi-agent drone choreography, providing the necessary background to appreciate the complex choreographies enabled by LightBenders.

*How the paper uses it:* The paper supports complex choreographies involving multiple drones with synchronized control, making swarm choreography knowledge foundational.

▶ [Escorting Drone Swarm Formation: A Swarm Intelligence and Evolutionary Optimisation Approach](https://www.youtube.com/watch?v=Z6HiawKr3tE) — Daniel H. Stolfi · 21:39 · 1 yr ago

### indoor drone localization techniques talk *(prerequisite)*
Precise indoor localization is critical for drone positioning and effect accuracy, especially since GPS is unavailable indoors. This section explores vision-based guidance, sensor fusion, and wireless localization methods relevant to the paper's centralized and future decentralized localization approaches.

*How the paper uses it:* The paper relies on centralized motion capture for localization and discusses future decentralized localization using onboard cameras.

▶ [Autonomous indoor navigation for drones using vision-based guidance](https://www.youtube.com/watch?v=1xtriWsR5u4) — TKJ Electronics · 8 yr ago

### aerodynamic downwash effects drones lecture *(prerequisite)*
Downwash effects cause instability when drones fly in close proximity, a key physical challenge for indoor drone swarms. This section explains the aerodynamic principles behind downwash and ground effect, which are crucial for understanding the flight constraints and future choreography challenges addressed in the paper.

*How the paper uses it:* The paper highlights downwash as a challenge for close-proximity flight of LightBenders.

▶ [What is Ground Effect? | Impact on Aircraft & Helicopters | Understanding Downwash & Induced Drag |](https://www.youtube.com/watch?v=XS_n9q9Lzwk) — JxJ AVIATION · 4 yr ago

### LightBenders indoor drone visual effects talk *(paper-talk search result; attribution unverified)*
This section focuses on the authors' own presentation or closest related academic talks about the LightBenders system, providing direct insights into the design space, visual effects, and authoring tools. It is the core resource to understand the novel contributions and experimental results of the paper.

*How the paper uses it:* Directly targets the authors' presentation for detailed insights on the LightBenders system and effects.

▶ [Indoor Drone Show Promo - MultiVisual + Astranate](https://www.youtube.com/watch?v=PqkJ5hWseRM) — MultiVisual · 2 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand the paper on Indoor Drone Visual Effects Using LightBenders, start by learning the basics of drone swarm choreography and indoor localization techniques, which are essential for coordinated multi-drone flight and precise positioning. Then, grasp aerodynamic downwash effects that challenge close-proximity drone flight stability. Next, explore Blender animation authoring tools to appreciate how the visual effects are designed and previewed. Finally, dive into the core concept of actuated LED rod drone visual effects, which enable the complex 3D light animations central to the paper's contributions.

### drone swarm choreography lecture *(prerequisite)*
This section introduces how multiple drones coordinate their movements in a swarm to create synchronized visual effects. Understanding swarm choreography helps grasp how drones can be controlled collectively to form complex patterns and animations.

*How the paper uses it:* The paper relies on synchronized control of multiple LightBender drones to create coordinated indoor visual effects.

▶ [How Drone Shows Work](https://www.youtube.com/watch?v=7fKfBb7x9WQ) — Julius Moorman · 2 yr ago

### indoor drone localization techniques talk *(prerequisite)*
Indoor localization techniques explain how drones determine their precise positions without GPS, often using cameras, markers, or sensor networks. This is crucial for accurate drone placement in indoor environments where GPS is unavailable.

*How the paper uses it:* The system currently uses centralized motion capture for drone localization, which is critical for effect accuracy.

▶ [Precise XYZ tracking for indoor drone swarms and indoor drone shows](https://www.youtube.com/watch?v=yTwdIF_LYyw) — Marvelmind Robotics · 3 yr ago

### aerodynamic downwash effects drones lecture *(prerequisite)*
Downwash is the airflow created by drone rotors that affects nearby drones, causing instability especially in close formations. Understanding downwash is important to appreciate the challenges in flying drones close together indoors.

*How the paper uses it:* The paper highlights downwash as a key challenge for close-proximity flight of LightBender drones.

▶ [Drone AirFlow, Ground Effect, Hover and Translational Lift Explained](https://www.youtube.com/watch?v=sds8qRnrlWc) — AviAssist · 5 yr ago

### Blender animation authoring tool seminar *(prerequisite)*
Blender is a 3D animation software used here as an authoring tool to design and preview drone visual effects. Learning the basics of Blender animation helps understand how artists create and edit the drone light animations before deployment.

*How the paper uses it:* The authors developed a Blender add-on to enable efficient authoring and previewing of LightBender visual effects.

▶ [First Steps in Blender Animation – A Comprehensive Tutorial](https://www.youtube.com/watch?v=PGvyBlgXHi8) — ProductionCrate · 3 yr ago

### actuated LED rod drone visual effects
This concept covers how drones equipped with actuated LED rods can create complex 3D light animations beyond simple point lights. It explains the technology and control of LED colors and rod angles to form shapes and animations in space.

*How the paper uses it:* LightBenders use actuated LED rods to produce the novel indoor visual effects presented in the paper.

▶ [Creating 3D droneshows for the real world](https://www.youtube.com/watch?v=F2ccAyOsZkA) — Blender · 21:56 · 2 yr ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the LightBenders system for indoor drone visual effects. The beginner project recreates a simple visual effect animation using the Blender add-on, the intermediate project involves running and extending the authors' open-source LightBender visual effects code to compare effects, and the advanced project tackles a future direction by exploring decentralized localization simulation to address close-proximity flight challenges.

### Beginner — Animate Draw/Erase Effect in Blender
*Effort: a weekend, ~8 hours*

You build a small Blender animation using the LightBenders add-on to create and preview the Draw/Erase visual effect. This involves setting LED colors and rod angles on a virtual drone to replicate the effect of drawing and erasing simple shapes or words in 3D space.

**Why it shows you understood the paper:** This project shows you understand how the LightBenders system parameterizes visual effects through LED color and rod angle control, and how the Blender add-on facilitates authoring and previewing these effects before physical deployment.

**Grounded in:** The Draw/Erase visual effect reduces authoring time from about one hour manually to less than a second using the tool.

**Tech stack:** Blender 3.x, Python 3.11, LightBenders Blender add-on

**Data:** No external data needed; you use the LightBenders Blender add-on to create animations.

**Build it:**

1. Install Blender 3.x and the LightBenders Blender add-on from (link removed — unverified)
2. Familiarize yourself with the add-on interface and how to set keyframes for LED colors and rod angles
3. Create a simple animation that draws and erases a basic shape or word using the Draw/Erase effect parameters
4. Use Blender's preview to visualize the animation and adjust timing and parameters
5. Export or save the animation project and document the steps and effect parameters used

**Ships as:** A Blender project file demonstrating the Draw/Erase effect animation with a README explaining the effect parameters and authoring process.

**Stretch goal:** Add a second drone to the animation and choreograph synchronized Draw/Erase effects between them.

### Intermediate — Run and Extend LightBenders Visual Effects
*Effort: 1-3 weekends, ~20 hours*

You clone and run the authors' open-source LightBenders software to reproduce several visual effects such as Pulse, Sparkle, and Fold. Then you extend the code to implement a simple new parameter variation or a combined effect. You compare animation authoring time or visual complexity against a baseline manual approach.

**Why it shows you understood the paper:** This project demonstrates you can work with the actual LightBenders codebase, understand the parameterization of drone LED rods and positions, and appreciate the efficiency gains from the Blender add-on authoring tool.

**Grounded in:** We implement the visual effects ... using a custom Blender add-on ... The visual effects include Pulse, Sparkle, Color Cycle, Color Chase, Draw/Erase, Fold, and Fly-Out/Fly-In.

**Tech stack:** Python 3.11, Blender 3.x, Git, LightBenders codebase

**Data:** No external dataset; you use the LightBenders software and Blender add-on from the authors' repository.

**Build it:**

1. Clone the LightBenders repository from (link removed — unverified)
2. Set up the development environment with Blender and Python dependencies
3. Run example animations for at least three visual effects (e.g., Pulse, Sparkle, Fold) using the Blender add-on
4. Modify parameters or combine two effects to create a new animation variant
5. Measure or estimate authoring time and complexity compared to manual animation without the tool
6. Document your findings and code changes in a README

**Ships as:** A forked LightBenders repository with your extended effect implementation and a report comparing authoring efficiency and effect complexity.

**Stretch goal:** Add a simple UI feature in the Blender add-on to toggle between effects or adjust parameters dynamically.

### Advanced — Simulate Decentralized Localization for Close-Proximity Drone Flight
*Effort: few weeks, ~60+ hours*

You develop a simulation prototype that models decentralized localization for LightBender drones using onboard camera markers, addressing the paper's limitation of centralized motion capture. The simulation includes basic drone position estimation and collision avoidance logic to mitigate aerodynamic downwash effects during close-proximity flight.

**Why it shows you understood the paper:** This project tackles a key future direction from the paper, showing you grasp the challenges of drone swarm localization and control, and can design and implement decentralized algorithms to improve scalability and reliability of indoor drone visual effects.

**Grounded in:** We are exploring decentralized localization techniques ... equipping each LightBender with a camera and marker for relative localization. Flying LightBenders in close proximity ... is challenging because of downwash, a region of instability generated by the flight of a LightBender.

**Tech stack:** Python 3.11, ROS (Robot Operating System) or a drone simulation framework, OpenCV, NumPy, Matplotlib

**Data:** No real drone data; simulate drone positions and camera observations with synthetic data representing relative marker detections.

**Build it:**

1. Research decentralized localization algorithms using onboard cameras and markers for relative positioning
2. Set up a simulation environment to model multiple drones with relative pose estimation using synthetic camera data
3. Implement a basic decentralized localization algorithm where each drone estimates its position relative to neighbors
4. Incorporate simple collision avoidance and downwash-aware spacing heuristics to simulate stable close-proximity flight
5. Visualize drone trajectories and localization accuracy over time
6. Document the simulation design, algorithms used, and limitations

**Ships as:** A simulation codebase demonstrating decentralized localization and control for a small drone swarm, with visualizations and a detailed README discussing the approach and challenges.

**Stretch goal:** Integrate a simple autonomous choreography planner that uses the decentralized localization to coordinate complex visual effects.
