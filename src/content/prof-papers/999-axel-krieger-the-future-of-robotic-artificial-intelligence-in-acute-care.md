---
title: "999 · The future of robotic artificial intelligence in acute care surgery: an early proving ground and a final frontier for autonomous surgical robotics — Axel Krieger"
date: 2026-11-02
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-axel-krieger"
source_hash: "4c113dab4dd2a6dce6ad157091d97e11bdb3f2cae450c8ee0b829b2a185042d3"
sequence: 999
generator: "outreach-garden: managed"
---

# 999 · The future of robotic artificial intelligence in acute care surgery: an early proving ground and a final frontier for autonomous surgical robotics

## At a glance

- **Professor:** Axel Krieger
- **Institution:** Johns Hopkins University
- **Paper:** [The future of robotic artificial intelligence in acute care surgery: an early proving ground and a final frontier for autonomous surgical robotics](https://f.oaes.cc/xmlpdf/published/article/6403f9da61b448f18af9204e5757dcec/ais6074.pdf)
- **Authors:** Joel Grunhut, Ruhika Iyer, Jesse Haworth, Gabriel Brat, Axel Krieger, Jeffrey K. Jopling
- **Year:** 2026

## Paper overview

This review paper discusses the current state and future prospects of artificial intelligence (AI) and autonomous robotics in acute care surgery (ACS), which involves emergency and trauma surgeries. ACS presents unique challenges such as unstable patient conditions and complex anatomy, making it a difficult but important area for AI-driven surgical automation. The authors analyze the levels of autonomy in surgical AI, technical feasibility, ethical considerations, and regulatory challenges. They propose an incremental approach to deploying AI in ACS, starting with supervised task autonomy in well-bounded tasks to ensure safety and reliability before expanding to more autonomous functions. The paper also highlights the importance of human oversight, ethical accountability, and equitable access to these technologies.

### Why it matters

**Research problem:** How to safely and effectively integrate autonomous artificial intelligence and robotic systems into acute care surgery, which is characterized by high-risk, time-critical, and complex operative environments.

**Why it matters:** ACS involves emergency surgeries with unstable patients and unpredictable conditions, where surgical errors can have immediate and severe consequences. Autonomous AI could reduce cognitive burden, standardize technically sensitive tasks, and extend surgical capabilities, especially in resource-limited settings. However, the complexity and variability of ACS make deploying autonomous systems safely a significant challenge that must be addressed to improve patient outcomes and surgical efficiency.

**Key contributions:**

- Proposed a level-based framework for surgical autonomy adapted to ACS.
- Developed a task-autonomy readiness matrix mapping ACS subtasks to current evidence, uncertainty sources, failure modes, and fallback behaviors.
- Identified six critical translational gaps (data, validation, uncertainty quantification, fallback protocols, regulation, consent) with proposed paths forward.
- Reviewed notable preclinical demonstrations of autonomous surgery relevant to ACS, including the Smart Tissue Autonomous Robot (STAR) for intestinal anastomosis.
- Outlined ethical and regulatory challenges unique to autonomous ACS systems, including accountability, patient trust, and emergency consent.

## About the professor

**Axel Krieger** — Associate Professor, Mechanical Engineering, Johns Hopkins University.

Research interests: Research and development of surgical robotic systems, robotic tools, and laparoscopic devices. Projects include autonomous robotic surgery systems, 3D printed patient-specific implants, and magnetically controlled microsurgery.

### Research links

- [Faculty/profile page](https://me.jhu.edu/faculty/axel-krieger)
- [Professor website](https://imerse.lcsr.jhu.edu/)
- [Resolved homepage](https://imerse.lcsr.jhu.edu/professor-axel-krieger/)
- [Google Scholar](https://scholar.google.com/citations?user=ezJ0eHAAAAAJ&hl=en)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Autonomous Surgical Robotics
**The paper assumes:** autonomous surgical robotics, levels of surgical autonomy, surgical AI system design
**Already in this field?** Skip this entirely if you already understand the principles and challenges of autonomous robotic systems applied to surgery, including autonomy levels and safety protocols.

To understand the integration and deployment of autonomous AI-driven robotic systems in acute care surgery, foundational knowledge in robotic autonomy principles and AI applications in robotics is essential. The rigorous course provides a deep, structured university-level foundation on robotic autonomy principles, while the fast track offers a concise, focused introduction to the same core concepts for quicker comprehension. Choose the rigorous course for comprehensive technical depth and the fast track for a time-efficient overview that still covers key ideas relevant to autonomous surgical robotics.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford AA274A Principles of Robotic Autonomy | Autumn 2019](https://www.youtube.com/playlist?list=PLR9iNyexfIkk) — Stanford Online · 20 videos · 21.3h across the first 17 episodes

**Watch only this:** Episodes 1-8, about 10 hours — covering overview, robot kinematics, ROS, trajectory optimization and tracking, motion planning methods, and sensors including computer vision, which form the core technical foundation for autonomous surgical robotics.

*Why it unblocks this paper:* Stanford's 'Principles of Robotic Autonomy' course by Professor Marco Pavone covers fundamental concepts of robot sensing, decision-making, and safe autonomous action, directly relevant to understanding surgical autonomy levels, task readiness, and fallback protocols discussed in the paper.

*If you want all of it:* 21.3 hours across the first 17 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [🧠🤖 Research Insights - Robot Autonomy](https://www.youtube.com/playlist?list=PL0anXc69FEETCedkxzZQ1irccWGkhVUY7) — ARS Project · 10 videos

**Watch only this:** First 4 episodes, about 1.5 hours — enough to cover core autonomy concepts, challenges, and examples relevant to surgical robotics autonomy.

*Why it unblocks this paper:* The 'Research Insights - Robot Autonomy' playlist provides concise, focused explainers on robot autonomy concepts, suitable for quickly grasping the key ideas behind autonomous surgical robotics without the depth of a full university course.

*If you want all of it:* Approximately 4 hours for all 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on autonomous AI in acute care surgery (ACS), start by building foundational knowledge on the levels of surgical autonomy, uncertainty quantification in AI, ethical frameworks for autonomous systems, and challenges in simulation-to-real-world transfer in robotics. These prerequisites provide the necessary context on autonomy frameworks, safety, ethics, and technical challenges. Finally, focus on the paper's core concept of task-autonomy readiness matrix and the authors' own talk to directly connect with their novel contributions and insights.

### Levels of surgical autonomy *(prerequisite)*
Understanding the taxonomy and framework of surgical autonomy is essential to grasp the paper's analysis of autonomy levels in ACS. The selected university lecture provides a rigorous, detailed overview of autonomy levels, human-robot collaboration, and regulatory considerations, including case studies like the STAR system, directly relevant to the paper.

*How the paper uses it:* The paper proposes a level-based framework for surgical autonomy adapted to ACS and discusses current systems' autonomy levels.

▶ [Lecture 3.5.1 | Surgical Robot Autonomy & Intelligent Systems | Masters in Medical Robotics](https://www.youtube.com/watch?v=KL_BF9ss4DA) — Universal Digital Health · 46:51 · 2mo ago

### Uncertainty quantification in AI *(prerequisite)*
Uncertainty quantification is critical for ensuring safety and reliability in autonomous ACS systems, especially given the unpredictable and high-risk environment. The Alan Turing Institute seminar offers an advanced, in-depth treatment of physics-informed machine learning approaches to uncertainty quantification, suitable for an advanced reader.

*How the paper uses it:* The paper emphasizes the importance of uncertainty-aware autonomy and fallback protocols to ensure safety in ACS.

▶ [Arka Daw - Uncertainty Quantification with Physics-informed Machine Learning](https://www.youtube.com/watch?v=jXoJJExl-2Y) — The Alan Turing Institute · 1:02:44 · 3y ago

### Ethical frameworks for autonomous systems *(prerequisite)*
Ethical accountability, human oversight, and trust are central challenges for autonomous surgical systems. The IEEE Robotics and Automation Society keynote by Elena De Momi provides a recent, research-focused discussion on open ethical questions on the road to autonomous surgery, aligning well with the paper's ethical considerations.

*How the paper uses it:* The paper outlines ethical and regulatory challenges unique to autonomous ACS systems, including accountability and patient trust.

▶ [Elena De Momi - Open Questions on the Road to Autonomous Surgery](https://www.youtube.com/watch?v=KE_aITrJaXA) — IEEE Robotics and Automation Society · 29:14 · 4d ago

### Simulation to real-world transfer in robotics *(prerequisite)*
Deploying autonomous systems in ACS requires overcoming sim-to-real transfer challenges due to pathological variability. The Stanford Online seminar on soft material robotics and next-generation surgical robots offers a comprehensive academic perspective on the technical challenges and advances in surgical robotics relevant to this problem.

*How the paper uses it:* The paper discusses simulation-to-real transfer challenges and the need for ACS-specific validation of autonomous tasks.

▶ [Stanford Seminar - Soft Material Robotics and Next-Generation Surgical Robots](https://www.youtube.com/watch?v=iw629hk4EV8) — Stanford Online · 47:44 · 3y ago

### Task-autonomy readiness matrix
The task-autonomy readiness matrix is the paper's core methodological contribution to assess ACS autonomy feasibility. While no direct video from the authors exists, a research seminar on surgical activity recognition models provides relevant insights into surgical task modeling and readiness assessment, complementing the paper's approach.

*How the paper uses it:* The paper develops a task-autonomy readiness matrix mapping ACS subtasks to evidence and failure modes.

▶ [MedAI #66: Adaptation of Surgical Activity Recognition Models Across Operating Rooms | Ali Mottaghi](https://www.youtube.com/watch?v=m-SZkoYCdUQ) — Stanford MedAI · 1:02:59 · 3y ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
The authors' own talk is the most direct and authoritative source to understand their perspectives, findings, and proposed frameworks in this paper. It offers a focused presentation on autonomous robotic surgery in acute care settings, including discussion of the STAR system and incremental deployment strategies.

*How the paper uses it:* This talk aligns directly with the paper's content and provides the authors' own presentation of their work.

▶ [Fully Autonomous Robot Surgery with No Human Surgeon Controller?](https://www.youtube.com/watch?v=U1fUrsQNSiM) — SpeakMD w/Dr. Ajay Balaram,MD · 14:01 · 6mo ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the integration of autonomous AI and robotics in acute care surgery (ACS). Starting with the levels of surgical autonomy to grasp the framework of robot capabilities, it then covers uncertainty quantification to appreciate safety and reliability challenges, followed by ethical frameworks essential for responsible deployment. Next, it addresses simulation-to-real-world transfer challenges critical for ACS variability, and concludes with the paper's core method, the task-autonomy readiness matrix, to assess feasibility and readiness of autonomous tasks in ACS.

### Levels of surgical autonomy *(prerequisite)*
Understanding the different levels of autonomy in surgical robotics helps clarify what tasks robots can perform independently versus under human supervision. This framework ranges from simple teleoperation to full autonomy, providing a foundation to evaluate current capabilities and future potential in surgery.

*How the paper uses it:* The paper proposes a level-based framework for surgical autonomy specifically adapted to the challenges of ACS.

▶ [Lecture 3.5.1 | Surgical Robot Autonomy & Intelligent Systems | Masters in Medical Robotics](https://www.youtube.com/watch?v=KL_BF9ss4DA) — Universal Digital Health · 46:51 · 2mo ago

### Uncertainty quantification in AI *(prerequisite)*
Uncertainty quantification methods help AI systems recognize when their predictions might be unreliable, which is crucial for safety-critical applications like surgery. This ensures autonomous systems can signal when human intervention is needed, improving trust and robustness.

*How the paper uses it:* The paper emphasizes uncertainty-aware autonomy and fallback protocols to ensure safety in unpredictable ACS environments.

▶ [Introduction to Uncertainty Quantification for Deep Learning](https://www.youtube.com/watch?v=LUPPsyspBS0) — ASHISH DHIMAN · 20:23 · 3y ago

### Ethical frameworks for autonomous systems *(prerequisite)*
Ethical frameworks guide the responsible development and deployment of autonomous surgical systems, focusing on human oversight, accountability, and patient trust. Understanding these principles is essential to address the unique challenges posed by autonomous ACS robots.

*How the paper uses it:* The paper outlines ethical challenges including meaningful human control, rapid takeover, and clear accountability in autonomous ACS systems.

▶ [Would you trust a robot surgeon? | The Royal Society](https://www.youtube.com/watch?v=WiiamYp2WuU) — The Royal Society · 12:18 · 5y ago

### Simulation to real-world transfer in robotics *(prerequisite)*
Simulation-to-real transfer involves adapting AI and robotic systems trained in controlled environments to perform reliably in the complex, variable conditions of real surgery. This is a key technical challenge for deploying autonomous systems in ACS.

*How the paper uses it:* The paper discusses the difficulty of sim-to-real transfer due to pathological variability in ACS tissues and the need for ACS-specific validation.

▶ [Lecture 2.4.3A | Computer Vision for Medical Robotics | Masters in Medical Robotics](https://www.youtube.com/watch?v=vQMZ0rfQ4-g) — Universal Digital Health · 51:09 · 3w ago

## Already in your library

- [Methods for Calibrated Uncertainty Quantification in Probabilistic Regression](https://www.youtube.com/watch?v=YXJN5Nc1sFo) — also for: Beyond Time Series: Spatial Reasoning for Epidemic Forecasting via Multimodal Learning (Alexander Rodríguez)
- [Uncertainty Quantification & Machine Learning](https://www.youtube.com/watch?v=Q83PcGVsRWs) — also for: Accurate and Reliable Uncertainty Estimates for Deterministic Predictions: Extensions to Under and Overpredictions (Rebecca E. Morrison)
- [Mini Tutorial 6: An Introduction to Uncertainty Quantification for Modeling & Simulation](https://www.youtube.com/watch?v=7w-K_EF2j64) — also for: Uncertainty-Aware Elastic Virtual Machine Scheduling for Stream Processing Systems (Carlos Varela)
- [Sim-to-Real Transfer Explained: How Robots Learn in Simulation and Survive the Real World](https://www.youtube.com/watch?v=nCLXJcuXYJY) — also for: Skill2Real: Agentic Skill Learning for Zero-Shot Sim-to-Real Robot Manipulation (Chenfanfu Jiang)
- [How Robots Learn to Be Robots: Training, Simulation, and Real World Deployment](https://www.youtube.com/watch?v=S4tvirlG8sQ) — also for: AgAID Institute—AI for agricultural labor and decision support (Anantharaman Kalyanaraman)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive learning path to demonstrate your understanding of autonomous AI integration in acute care surgery (ACS) as discussed in the paper. The beginner project focuses on reproducing and visualizing the task-autonomy readiness matrix, a core conceptual contribution. The intermediate project involves implementing a simplified uncertainty quantification method for a surgical task simulation, reflecting the paper's emphasis on uncertainty-aware autonomy. The advanced project tackles a future direction by designing and simulating fallback protocols for autonomous surgical task failures, addressing safety and ethical concerns in ACS autonomy deployment.

### Beginner — Task-Autonomy Readiness Matrix Visualization
*Effort: a weekend (~8 hours)*

You build an interactive web-based visualization of the task-autonomy readiness matrix introduced in the paper, mapping ACS subtasks to their readiness levels, uncertainty sources, and fallback behaviors. This project involves structuring the matrix data and creating a React frontend to explore the matrix interactively.

**Why it shows you understood the paper:** This project shows you grasp the paper's key framework for assessing surgical autonomy readiness and can translate a complex expert-opinion matrix into an accessible, interactive tool.

**Grounded in:** Proposed a task-autonomy readiness matrix mapping ACS subtasks to current evidence, uncertainty sources, failure modes, and fallback behaviors.

**Tech stack:** TypeScript, React, CSS

**Data:** Matrix data synthesized from the paper's descriptions and tables; no external dataset required.

**Build it:**

1. Extract and structure the task-autonomy readiness matrix data from the paper's text and tables into JSON format.
2. Set up a React project with TypeScript and CSS for styling.
3. Implement an interactive UI that displays ACS subtasks categorized by readiness levels with filters for uncertainty sources and fallback behaviors.
4. Add tooltips or modals to explain matrix elements and their implications.
5. Test responsiveness and usability of the visualization.

**Ships as:** A GitHub repository with a React app that visually and interactively presents the task-autonomy readiness matrix, documented with a README explaining the matrix and how to use the tool.

**Stretch goal:** Add a feature to allow users to simulate changes in readiness levels or uncertainty factors and see updated matrix views.

### Intermediate — Uncertainty Quantification for Simulated ACS Task
*Effort: 1-3 weekends (~20 hours)*

You implement a simplified uncertainty quantification method for a simulated surgical task relevant to ACS, such as tissue classification or force estimation, using a public dataset as a proxy. You compare a baseline deterministic model against a model that outputs uncertainty estimates and evaluate their performance and reliability.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's emphasis on uncertainty-aware autonomy by implementing and evaluating uncertainty quantification methods tailored to ACS-like tasks.

**Grounded in:** Highlighted the importance of uncertainty-aware autonomy and the need for ACS-specific validation of vision-based force estimation and autonomous exposure/retraction.

**Tech stack:** Python 3.11, PyTorch, Jupyter Notebook, scikit-learn

**Data:** Use a publicly available medical imaging or force-sensing dataset (e.g., a subset of the MICCAI challenge datasets) as a substitute for ACS task data, since no ACS-specific dataset is provided.

**Build it:**

1. Select a public dataset relevant to surgical tissue classification or force estimation.
2. Implement a baseline supervised learning model (e.g., CNN) for the task.
3. Implement an uncertainty quantification method such as Monte Carlo Dropout or Deep Ensembles.
4. Evaluate and compare the baseline and uncertainty-aware models using metrics like accuracy and calibration error.
5. Visualize uncertainty maps or confidence intervals and discuss implications for ACS autonomy.
6. Document the methodology, results, and limitations.

**Ships as:** A GitHub repository containing code notebooks, model implementations, evaluation scripts, and a report README demonstrating uncertainty quantification on a simulated ACS task.

**Stretch goal:** Extend the model to detect out-of-distribution samples simulating pathological variability as discussed in the paper.

### Advanced — Simulation and Design of Fallback Protocols for Autonomous ACS Tasks
*Effort: a few weeks (~40+ hours)*

You design and simulate fallback protocols for autonomous surgical task failures in ACS, implementing a software framework that models task execution with uncertainty and triggers fallback behaviors (e.g., human takeover or safe abort) under failure conditions. The simulation includes configurable parameters for takeover time and information visibility, reflecting ethical and safety requirements.

**Why it shows you understood the paper:** This project addresses a key future direction and limitation from the paper by operationalizing fallback protocols and human oversight mechanisms critical for safe ACS autonomy deployment.

**Grounded in:** Highlighted the importance of fallback protocols, meaningful human control, rapid takeover capability, and explicit accountability structures for ethical deployment in ACS.

**Tech stack:** Python 3.11, FastAPI, TypeScript, React, Docker

**Data:** Simulated task execution data generated within the framework; no external dataset required.

**Build it:**

1. Design a software simulation framework modeling an ACS autonomous task with probabilistic failure modes and uncertainty.
2. Implement fallback protocols that trigger human takeover or safe abort based on uncertainty thresholds and failure detection.
3. Develop a frontend dashboard (React) to visualize task status, uncertainty levels, and takeover controls in real time.
4. Implement API endpoints (FastAPI) to simulate task execution and control fallback mechanisms.
5. Test different scenarios varying takeover time limits and information visibility to evaluate safety and responsiveness.
6. Document the design decisions, ethical considerations, and simulation results.

**Ships as:** A full-stack GitHub repository with a simulation backend, interactive frontend dashboard, and documentation illustrating fallback protocol design and evaluation for ACS autonomy.

**Stretch goal:** Integrate a simple machine learning model to predict failure likelihood dynamically and adapt fallback triggers accordingly.
