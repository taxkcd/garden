---
title: "176 · Let’s be friends! A rapport-building 3D embodied conversational agent for the Human Support Robot — Ubbo Visser"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ubbo-visser"
source_hash: "d1fdbc1363dc07ae276fb9f49d491ab26a9124996c9452373ab8bbcd1fe37e3d"
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
