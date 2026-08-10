---
title: "176 · Let’s be friends! A rapport-building 3D embodied conversational agent for the Human Support Robot — Ubbo Visser"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ubbo-visser"
source_hash: "38f603df0b32f5a2521b6a31b39e00a64ca8d2394c1a607680ee620c600a5100"
sequence: 176
generator: "outreach-garden: managed"
---

# 176 · Let’s be friends! A rapport-building 3D embodied conversational agent for the Human Support Robot

## At a glance

- **Professor:** Ubbo Visser
- **Institution:** University of Miami
- **Paper:** [Let’s be friends! A rapport-building 3D embodied conversational agent for the Human Support Robot](https://arxiv.org/pdf/2103.04498)
- **Authors:** Katarzyna Pasternak, Zishi Wu, Ubbo Visser, Christine Lisetti
- **Year:** 2021

## Paper overview

This paper explores how integrating a 3D embodied conversational agent (ECA) that can mirror human facial expressions and head movements with a human-support robot can improve user experience and rapport during interactions. The authors developed a system combining an expressive ECA with the Toyota Human Support Robot (HSR) and conducted pilot studies showing that mirroring nonverbal behaviors enhances engagement and naturalness in human-robot interaction.

### Why it matters

**Research problem:** Whether integrating an ECA capable of mirroring interlocutor’s facial expressions and head movements with a human-support robot improves the user’s experience and rapport during interaction.

**Why it matters:** Human-support robots are expected to assist people in contexts requiring socio-emotional communication, such as helping elderly or disabled individuals. Establishing rapport through nonverbal cues like mirroring is essential for effective communication and user comfort, but little research has examined mirroring by ECAs integrated with robots.

**Key contributions:**

- Complex integration of a 3D expressive ECA with a human-support robot enabling real-time mirroring of facial expressions and head movements.
- Development of ROS nodes for face detection (DLib) and emotion classification (EmoPy) to drive ECA behavior.
- Pilot user studies assessing the impact of posture mimicking, facial expression mirroring, and their combination on user comfort and engagement.
- Empirical evidence suggesting that mirroring nonverbal behaviors improves user engagement and naturalness in human-robot interaction.

## About the professor

**Ubbo Visser** — Professor of Computer Science, Department of Computer Science, University of Miami.

Research interests: Artificial Intelligence and Robotics with the focus on knowledge representation and reasoning under real-time conditions; Semantic Web and Multi-Agent Systems

### Research links

- [Faculty/profile page](http://www.cs.miami.edu/~visser)
- [Resolved homepage](https://www.cs.miami.edu/home/visser/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Embodied Conversational Agents
**The paper assumes:** embodied conversational agents, nonverbal communication in HCI, real-time agent behavior modeling
**Already in this field?** Skip this entirely if you already understand the design and function of embodied conversational agents and their role in human-computer interaction.

To understand the integration and impact of embodied conversational agents (ECAs) in human-support robots, especially focusing on real-time facial expression mirroring and nonverbal communication, this background provides two viewing options. The rigorous course offers a deep dive into machine learning foundations that underpin emotion recognition and agent behavior, while the fast track delivers a concise, practical introduction to AI agents including embodied and physical world agents relevant to ECAs. Choose the rigorous course for foundational depth and the fast track for a focused, application-oriented overview.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

**Watch only this:** Lectures 1-3 and 10-12, about 6.5 hours — covering supervised learning basics, neural networks, backpropagation, and debugging ML models, which are key to understanding the machine learning components of the ECA system.

*Why it unblocks this paper:* Stanford CS229 by Andrew Ng covers core machine learning techniques essential for understanding the algorithms behind face detection, emotion classification, and agent behavior frameworks used in ECAs. This foundational knowledge is critical for grasping how the ECA mirrors expressions and adapts in real-time.

*If you want all of it:* 27.9 hours across 21 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [30 Agents Every Developer Should Build - Complete AI Agent Engineering Series (LangChain, LangGraph & More)](https://www.youtube.com/playlist?list=PLGZL5qA7O9-M) — onepagecode · 17 videos · 8.2h across 17 episodes

**Watch only this:** Episode 9: 'Embodied and Physical World Agents - Robotics & Real-World AI', about 28 minutes — this episode succinctly covers the embodied agent concepts crucial for understanding the paper's ECA integration.

*Why it unblocks this paper:* The '30 Agents Every Developer Should Build' series includes a focused episode on 'Embodied and Physical World Agents - Robotics & Real-World AI' that directly relates to embodied conversational agents integrated with robots, providing a practical and concise overview of agent engineering relevant to this paper.

*If you want all of it:* 8.2 hours across 17 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on integrating a 3D embodied conversational agent (ECA) with the Toyota Human Support Robot (HSR) for rapport-building, start by grounding yourself in the foundational topics of Human-Robot Interaction (HRI), Nonverbal Communication in HRI, Real-time Face and Emotion Recognition, and ROS Integration with Unity for Robotics. These prerequisites provide the technical and interaction context necessary to appreciate the system architecture and challenges. Finally, focus on the core concept of Embodied Conversational Agents to grasp the central technology, and conclude with the authors' own talk to get direct insights into their novel integration and pilot study findings.

### Human-Robot Interaction *(prerequisite)*
This section covers the fundamental principles and challenges of human-robot interaction, providing essential context for integrating social agents with assistive robots. Understanding HRI helps frame why rapport-building and nonverbal communication are critical in robotic assistance scenarios.

*How the paper uses it:* The paper integrates an ECA with the Toyota HSR to enhance human-robot interaction through socio-emotional communication.

▶ [RI Seminar: Heni Ben Amor : Human-Robot Interactive ...](https://www.youtube.com/watch?v=eIKAQH6cvi8) — CMU Robotics Institute · 54:01

### Nonverbal Communication in HRI *(prerequisite)*
Nonverbal cues such as facial expressions, gaze, and posture are key to building rapport and natural interaction in HRI. This section explores how robots can interpret and use these signals to improve communication effectiveness.

*How the paper uses it:* The paper’s core contribution is enabling the ECA to mirror facial expressions and head movements to build rapport via nonverbal communication.

▶ [Human-Robot Interaction: Non-Verbal Communication](https://www.youtube.com/watch?v=SwxVZytca3w) — Agility · 3 years ago

### Real-time Face and Emotion Recognition *(prerequisite)*
This section delves into the technical foundations of detecting and classifying human facial expressions and emotions in real time, which is critical for responsive and accurate mirroring by the ECA.

*How the paper uses it:* The system uses DLib for face detection and EmoPy for emotion classification to drive the ECA’s mirroring behavior.

▶ [Facial Emotion Recognition: Unlocking Human Emotions](https://www.youtube.com/watch?v=mm8l2NVaFF4) — LearnOpenCV · 8:46

### ROS Integration with Unity for Robotics *(prerequisite)*
Understanding how ROS nodes communicate with Unity-based agents is crucial for grasping the system architecture that enables real-time perception and behavior control in the integrated robot-ECA system.

*How the paper uses it:* The authors used Rosbridge to facilitate communication between ROS nodes and the Unity-based ECA.

▶ [(Updated) Unity Robotics Hub: Connecting ROS to a Unity ...](https://www.youtube.com/watch?v=mas9-xMoyGQ) — Bryce Ikeda · 12:48

### Embodied Conversational Agents
This section focuses on the design and capabilities of embodied conversational agents, which are central to enabling natural, multimodal social interaction between humans and robots.

*How the paper uses it:* The paper’s main innovation is the integration of a 3D expressive ECA with a human-support robot to improve engagement and rapport.

▶ [Keynote by Dipl.-Wi.-Inf. Weimann on Embodied Conversational Agents, 6. March 26](https://www.youtube.com/watch?v=2oT9CdwPX_I) — Centre for Digital Health Interventions · 4 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand this paper, start by learning the basics of Human-Robot Interaction (HRI) to grasp the context of social robots assisting humans. Then, build intuition on nonverbal communication in HRI, focusing on how robots use gestures and facial cues to build rapport. Next, explore real-time face and emotion recognition technologies that enable robots to perceive human expressions. Follow this with understanding how ROS integrates with Unity to connect perception and embodied agents. Finally, dive into Embodied Conversational Agents (ECAs), the core technology enabling the robot to mirror human expressions and movements, completing the path with insights into the paper's novel integration.

### Human-Robot Interaction *(prerequisite)*
Human-Robot Interaction studies how robots and humans communicate and collaborate effectively. It covers the challenges of making robots understand and respond to human behaviors naturally, which is essential for assistive robots like the Toyota HSR.

*How the paper uses it:* This paper integrates a social agent with a human-support robot, so understanding HRI fundamentals sets the stage for the system's goals.

▶ [Introduction to Human-Robot Interaction](https://www.youtube.com/watch?v=Lpp1FjkOyN4) — Christoph Bartneck · 9 years ago

### Nonverbal Communication in HRI *(prerequisite)*
Nonverbal communication includes facial expressions, gestures, and posture that convey emotions and intentions without words. In HRI, these cues are critical for building rapport and making interactions feel natural and engaging.

*How the paper uses it:* The paper’s key innovation is mirroring nonverbal cues like facial expressions and head movements to improve user engagement and rapport.

▶ [Human-Robot Interaction: Non-Verbal Communication](https://www.youtube.com/watch?v=SwxVZytca3w) — Agility · 3 years ago

### Real-time Face and Emotion Recognition *(prerequisite)*
Real-time face and emotion recognition technologies detect and classify human facial expressions and emotions from live video streams. This capability allows robots or agents to perceive user states and respond appropriately during interaction.

*How the paper uses it:* The system uses DLib for face detection and EmoPy for emotion classification to enable the ECA to mirror user expressions in real time.

▶ [Real-Time Face Emotion Detection Using Python | DeepFace ...](https://www.youtube.com/watch?v=v4ev5XGCYZ0) — The Cyber Gym · 11:44

### ROS Integration with Unity for Robotics *(prerequisite)*
ROS (Robot Operating System) is a middleware framework for robot software development, while Unity is a game engine used here to render the 3D embodied agent. Integrating ROS with Unity allows sensor data and robot commands to flow seamlessly between perception modules and the visual agent.

*How the paper uses it:* The paper’s system architecture relies on ROS nodes communicating with the Unity-based ECA via Rosbridge to synchronize robot and agent behaviors.

▶ [(Updated) Unity Robotics Hub: Connecting ROS to a Unity ...](https://www.youtube.com/watch?v=mas9-xMoyGQ) — Bryce Ikeda · 12:48

### Embodied Conversational Agents
Embodied Conversational Agents are virtual characters that simulate human-like conversation and social behaviors, including facial expressions and gestures. They enhance natural interaction by providing a relatable, expressive interface.

*How the paper uses it:* The core contribution is integrating a 3D expressive ECA with the Toyota HSR to mirror human nonverbal cues and build rapport.

▶ [Virtual Humans (Embodied Conversational Agents) - Computerphile](https://www.youtube.com/watch?v=42_lCOayS6s) — Computerphile · 7 years ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder of increasing complexity and fidelity to the paper "Let’s be friends! A rapport-building 3D embodied conversational agent for the Human Support Robot." The beginner project reproduces a core mirroring mechanism in a simplified web app to demonstrate understanding of nonverbal mirroring. The intermediate project reimplements the core real-time facial expression mirroring method integrated with a ROS-simulated robot head, comparing user engagement metrics. The advanced project extends the system by addressing latency and robustness limitations through edge computing and improved emotion recognition, exploring a key future direction of the paper.

### Beginner — Web Demo of Facial Expression Mirroring
*Effort: a weekend, ~8 hours*

You build a simple React web application that uses the webcam to detect the user's facial expressions and head movements in real time and mirrors them on a 3D avatar face rendered with Three.js. This demo reproduces the core idea of nonverbal mirroring by the ECA from the paper but without robot integration.

**Why it shows you understood the paper:** This project shows you understand the paper's key mechanism of real-time facial expression and head movement mirroring to build rapport, as well as the technical challenges of face detection and animation synchronization.

**Grounded in:** Key contribution: Complex integration of a 3D expressive ECA enabling real-time mirroring of facial expressions and head movements.

**Tech stack:** React, TypeScript, Three.js, TensorFlow.js (face-api.js)

**Data:** Live webcam video stream used for real-time face and expression detection; no external dataset required.

**Build it:**

1. Set up a React app with webcam access using getUserMedia API.
2. Integrate TensorFlow.js face-api.js to detect facial landmarks and classify basic expressions.
3. Render a simple 3D avatar face using Three.js that can animate expressions and head pose.
4. Map detected user expressions and head movements to avatar animations in real time.
5. Add UI controls to toggle mirroring on/off and display detected expressions.

**Ships as:** A GitHub repo with a React app demonstrating live facial expression and head movement mirroring on a 3D avatar, with a README explaining the mapping and limitations.

**Stretch goal:** Add emotion classification with EmoPy or a similar Python backend via WebSocket to improve expression accuracy.

### Intermediate — ROS-Unity Facial Expression Mirroring with User Engagement Logging
*Effort: 2 weekends, ~20 hours*

You reimplement the core method of the paper by integrating a Unity-based 3D ECA with ROS using Rosbridge. You build ROS nodes for face detection (using DLib) and emotion classification (using EmoPy or a substitute) that send mirroring commands to the Unity ECA. You simulate the robot head movement in ROS and log user engagement metrics during interaction sessions.

**Why it shows you understood the paper:** This project demonstrates you can reproduce the paper’s core technical approach of real-time mirroring via ROS-Unity integration and evaluate the impact on user engagement, showing grasp of the system architecture and experimental design.

**Grounded in:** Key contribution: Development of ROS nodes for face detection (DLib) and emotion classification (EmoPy) to drive ECA behavior; key result: combining posture mimicking and facial expression mirroring leads to longer user interaction times.

**Tech stack:** Python 3.11, ROS Noetic, DLib, EmoPy (or substitute), Unity, Rosbridge, TypeScript (optional for UI)

**Data:** Live webcam video for face detection and emotion classification; simulated user interaction data collected during pilot sessions.

**Build it:**

1. Set up ROS environment with Rosbridge and Unity integration.
2. Implement ROS nodes for real-time face detection using DLib and emotion classification using EmoPy or a similar Python library.
3. Develop Unity ECA that receives ROS messages to animate facial expressions and head movements.
4. Simulate robot head posture mimicking in ROS and synchronize with Unity ECA.
5. Conduct small user tests (3-5 participants) to log interaction durations and subjective engagement ratings.
6. Analyze and report engagement metrics comparing mirroring enabled vs disabled.

**Ships as:** A GitHub repo with ROS nodes, Unity project, and scripts to run the mirroring system plus a README documenting setup, usage, and engagement results.

**Stretch goal:** Replace EmoPy with a more accurate emotion recognition model and compare engagement improvements.

### Advanced — Edge-Computing Enhanced ECA for Robust Real-Time Mirroring
*Effort: 3+ weeks*

You extend the paper’s system by deploying face detection and emotion recognition on an edge device co-located with the robot to reduce latency and improve robustness. You integrate a more accurate emotion recognition model (e.g., a lightweight CNN trained on FER2013) and implement fallback strategies for partial face visibility. You evaluate the system’s responsiveness and user engagement compared to the original WiFi-based setup.

**Why it shows you understood the paper:** This project addresses the paper’s stated limitations and future directions by improving latency and emotion detection accuracy through architectural and model enhancements, demonstrating deep comprehension and innovation beyond replication.

**Grounded in:** Limitation: Latency issues due to WiFi connection and emotion detection inaccuracies; Future direction: Explore alternatives to EmoPy and reduce latency via edge computing.

**Tech stack:** Python 3.11, ROS Noetic, TensorFlow or PyTorch, OpenCV, Unity, Edge device (e.g., NVIDIA Jetson or Raspberry Pi 4)

**Data:** Public facial expression datasets like FER2013 for training improved emotion recognition; live webcam video for real-time testing.

**Build it:**

1. Set up an edge computing device integrated with the robot’s ROS network.
2. Develop or fine-tune a lightweight CNN emotion recognition model using FER2013 or similar dataset.
3. Implement face detection and emotion recognition pipelines on the edge device with OpenCV and TensorFlow/PyTorch.
4. Modify ROS nodes to communicate with the edge device instead of a WiFi backend.
5. Enhance the system to handle partial face visibility and orientation changes robustly.
6. Conduct user studies comparing latency, accuracy, and engagement metrics against baseline WiFi system.

**Ships as:** A comprehensive GitHub repo with edge computing code, improved emotion recognition model, ROS integration, Unity ECA updates, and a detailed README with evaluation results and discussion.

**Stretch goal:** Investigate additional nonverbal cues such as gaze or gesture mirroring to further improve rapport.
