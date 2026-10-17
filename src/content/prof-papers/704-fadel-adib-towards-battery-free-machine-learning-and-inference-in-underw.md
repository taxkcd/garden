---
title: "704 · Towards Battery-Free Machine Learning and Inference in Underwater Environments — Fadel Adib"
date: 2026-10-17
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-fadel-adib"
source_hash: "5201441016a93a0117302a695d2b150b2df5ea8ac4bb240ccc495259fb7ddb90"
sequence: 704
generator: "outreach-garden: managed"
---

# 704 · Towards Battery-Free Machine Learning and Inference in Underwater Environments

## At a glance

- **Professor:** Fadel Adib
- **Institution:** Massachusetts Inst. of Technology
- **Paper:** [Towards Battery-Free Machine Learning and Inference in Underwater Environments](https://arxiv.org/pdf/2202.08174)
- **Authors:** Yuchen Zhao, Sayed Saad Afzal, Waleed Akbar, Osvy Rodriguez, Fan Mo, David Boyle, Fadel Adib, Hamed Haddadi
- **Year:** 2022

## Paper overview

This paper explores the design and feasibility of underwater devices that can perform machine learning and inference without batteries by harvesting energy from underwater sound. The authors built a prototype that uses a lightweight deep neural network to recognize marine mammal sounds locally and communicate results via underwater backscatter, demonstrating a new approach to sustainable underwater sensing and monitoring.

### Why it matters

**Research problem:** Can battery-free devices perform machine learning and inference in underwater environments, overcoming challenges of limited energy harvesting and communication bandwidth?

**Why it matters:** Battery-free underwater sensing can enable long-term, pollution-free monitoring for environmental, scientific, and climate applications in remote ocean areas where replacing batteries is difficult and communication bandwidth is limited.

**Key contributions:**

- Proposed and prototyped the first battery-free underwater device capable of on-board machine learning inference.
- Designed an end-to-end pipeline from underwater sound harvesting to local inference and backscatter communication.
- Demonstrated feasibility of running lightweight CNN models on ultra-low-power microcontrollers powered solely by harvested underwater sound energy.
- Showed that on-board inference reduces energy consumption and latency compared to transmitting raw data underwater.
- Provided a detailed power and accuracy evaluation of the prototype in a marine mammal recognition use case.

## About the professor

**Fadel Adib** — Professor, MIT Media Lab & Electrical Engineering and Computer Science, Massachusetts Inst. of Technology.

Research interests: My team's current research on wireless and sensor technologies focuses on three main areas: Ocean IoT, Imaging with Wireless Signals, and Robot/Drone Perception and Manipulation.

### Research links

- [Faculty/profile page](http://www.mit.edu/~fadel)
- [Professor website](https://www.mit.edu/~fadel/index.html)
- [Lab website](https://signal-kinetics.media.mit.edu/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** Embedded Machine Learning
**The paper assumes:** embedded machine learning, ultra-low-power neural network inference, microcontroller-based ML deployment
**Already in this field?** Skip this entirely if you already understand how machine learning models are optimized and deployed on resource-constrained embedded systems.

This background focuses on Embedded Machine Learning, essential for understanding how lightweight convolutional neural networks are designed, optimized, and deployed on ultra-low-power microcontrollers in battery-free underwater sensing devices. The rigorous course provides a deep, structured foundation in deep learning concepts and practical model deployment, while the fast track offers a concise, practical introduction specifically tailored to embedded ML, ideal for quickly grasping key ideas and workflows.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT 15.773 Hands-On Deep Learning Spring 2024](https://www.youtube.com/playlist?list=PLUl4u3cNGP60YyhMjYmXuVmX562QcClSp) — MIT OpenCourseWare · 11 videos · 13.8h across 11 episodes

**Watch only this:** Lectures 1 through 4, about 5 hours — covering introduction to neural networks, training deep neural networks, and convolutional neural networks for computer vision, which provide the core concepts needed to understand model design and inference on constrained devices.

*Why it unblocks this paper:* MIT 15.773 Hands-On Deep Learning Spring 2024 covers deep learning fundamentals and practical CNN model building and deployment, directly relevant to understanding the lightweight CNN inference on microcontrollers in the paper.

*If you want all of it:* 13.8 hours across 11 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Course: Introduction to Embedded Machine Learning](https://www.youtube.com/playlist?list=PL7VEa1KauMQqZFj_nWRfsCZNXaBbkuurG) — Edge Impulse · 32 videos · 4.3h across 32 episodes

**Watch only this:** Episodes 1.1.1 through 2.3.3, about 2.5 hours — covering what ML is, ML on embedded devices, hardware/software frameworks, model training, evaluation, inference, and deployment to microcontrollers, which directly supports understanding the paper's device design and ML pipeline.

*Why it unblocks this paper:* The Edge Impulse 'Introduction to Embedded Machine Learning' playlist offers a focused, practical introduction to embedded ML concepts, hardware, software frameworks, and deployment workflows, matching the paper's emphasis on running lightweight ML models on ultra-low-power microcontrollers.

*If you want all of it:* 4.3 hours across 32 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper on battery-free machine learning and inference in underwater environments, start by building foundational knowledge on energy harvesting from underwater sound and ultra-low-power microcontrollers, which are critical hardware enablers. Then, explore underwater backscatter communication to grasp the low-power communication method used. Finally, focus on the core concept of the paper by watching the authors' own talk about their novel battery-free underwater ML system, which integrates all these components for sustainable underwater sensing.

### Energy harvesting from underwater sound *(prerequisite)*
Understanding how ambient underwater sound can be converted into usable electrical energy is fundamental to the paper's battery-free device design. This section covers the principles and practical methods of underwater acoustic energy harvesting, especially using piezoelectric materials, which power the sensing and computation components.

*How the paper uses it:* The paper's device harvests energy from underwater sound using piezoelectric materials to power the microcontroller and sensors.

▶ [Energy Harvesting In Underwater Acoustic Wireless Sensor Networks](https://www.youtube.com/watch?v=T9mLQysLijk) — Rahul k Sarthy · 13:41 · 3 yr ago

### Ultra-low-power microcontrollers *(prerequisite)*
This section introduces the hardware platforms capable of running machine learning inference with minimal energy consumption, a key enabler for battery-free operation. It covers design considerations and features of ultra-low-power microcontrollers suitable for embedded ML tasks.

*How the paper uses it:* The paper runs lightweight CNN inference on an ultra-low-power microcontroller powered solely by harvested underwater sound energy.

▶ [STM32U3 demo workshop - 04 Ultra Low Power benchmark](https://www.youtube.com/watch?v=WwHdRELIWTo) — STMicroelectronics - Learning · 12:17

### Underwater backscatter communication *(prerequisite)*
Backscatter communication is a critical low-power method for transmitting data underwater by reflecting existing signals rather than generating new ones. This section explains the principles and challenges of underwater backscatter communication, which enables the device to send inference results efficiently.

*How the paper uses it:* The paper uses underwater backscatter to communicate inference results with minimal power consumption.

▶ [underwater backscattering networking - backscatter overview](https://www.youtube.com/watch?v=ZgpzHviJx4s) — Marine Navigation & Instruments · 6 yr ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
This talk by the paper's authors provides direct insight into their novel battery-free underwater machine learning system, detailing the design, implementation, and evaluation of their prototype. It is the most authoritative and comprehensive resource to understand the paper's contributions and challenges.

*How the paper uses it:* This is the authors' own recorded talk on their battery-free underwater ML system, directly explaining their approach and results.

▶ [tinyML Talks Pakistan: Machine Learning without batteries: the case for light-powered tinyML](https://www.youtube.com/watch?v=3QTx-WfvFvo) — EDGE AI FOUNDATION · 1:01:06 · 4 yr ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts needed to understand battery-free underwater machine learning devices, starting with how energy can be harvested from underwater sound, then exploring the ultra-low-power microcontrollers that enable on-device computation, followed by underwater backscatter communication for low-energy data transmission, and concluding with lightweight convolutional neural networks that perform local inference on constrained hardware. The sequence builds intuition from hardware energy sources to communication and finally to the machine learning methods deployed on the device.

### Energy harvesting from underwater sound *(prerequisite)*
Learn how ambient underwater acoustic energy can be converted into electrical power using piezoelectric materials, enabling devices to operate without batteries. This foundational knowledge explains how the device in the paper powers itself sustainably from the environment.

*How the paper uses it:* The paper’s device harvests energy from underwater sound to power sensing, computation, and communication components.

▶ [Energy Harvesting In Underwater Acoustic Wireless Sensor Networks](https://www.youtube.com/watch?v=T9mLQysLijk) — Rahul k Sarthy · 13:41 · 3 yr ago

### Ultra-low-power microcontrollers *(prerequisite)*
Understand the design and operation of microcontrollers optimized for minimal energy consumption, which are critical for running machine learning models on harvested power. These microcontrollers balance computational capability with strict power budgets.

*How the paper uses it:* The paper uses an ultra-low-power microcontroller to run the lightweight CNN inference within the harvested energy constraints.

▶ [STM32U3 demo workshop - 04 Ultra Low Power benchmark](https://www.youtube.com/watch?v=WwHdRELIWTo) — STMicroelectronics - Learning · 12:17

### Underwater backscatter communication *(prerequisite)*
Explore how underwater devices communicate by reflecting existing acoustic signals rather than generating new ones, drastically reducing power consumption. This method is essential for transmitting inference results efficiently in underwater environments.

*How the paper uses it:* The paper’s device transmits inference results via underwater backscatter to minimize energy use.

▶ [underwater backscattering networking - backscatter overview](https://www.youtube.com/watch?v=ZgpzHviJx4s) — Marine Navigation & Instruments · 6 yr ago

### Lightweight convolutional neural networks on embedded devices
Discover how convolutional neural networks can be designed and optimized to run efficiently on devices with limited memory and power, enabling local inference without offloading data. This concept is key to performing machine learning directly on the underwater sensor node.

*How the paper uses it:* The paper deploys a lightweight CNN model on an ultra-low-power microcontroller for marine mammal sound classification.

▶ [MobileNet V1 & V2 - How Lightweight CNNs Actually Work](https://www.youtube.com/watch?v=84GAhf8b9Uk) — ByteQuest · 6:59 · 7 mo ago

### Paper authors talk *(paper-talk search result; attribution unverified)*
Gain direct insights from the authors about their novel battery-free underwater machine learning system, including design challenges and experimental results. This talk contextualizes the technical concepts within the real-world prototype and research goals.

*How the paper uses it:* The authors explain their integrated approach combining energy harvesting, ultra-low-power computing, and backscatter communication for sustainable underwater sensing.

▶ [tinyML Talks Pakistan: Machine Learning without batteries: the case for light-powered tinyML](https://www.youtube.com/watch?v=3QTx-WfvFvo) — EDGE AI FOUNDATION · 1:01:06 · 4 yr ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progression to demonstrate your understanding of battery-free underwater machine learning and inference as presented in the paper. The beginner project reproduces a core measurement of power consumption from the prototype using simulated data and basic analysis. The intermediate project implements a lightweight CNN for marine mammal sound classification on a public dataset, replicating the paper's core ML pipeline and accuracy metric. The advanced project extends the paper by exploring on-device model personalization to adapt to local underwater environments, addressing a key limitation and future direction.

### Beginner — Power Profiling of Ultra-Low-Power Underwater Sensor Components
*Effort: a weekend, ~8 hours*

You build a simple Python script and Jupyter notebook that simulates and visualizes power consumption profiles of the microcontroller during ADC sampling, inference, and backscatter communication as reported in the paper. You reproduce the paper's power consumption figures and calculate total energy use for on-board inference versus raw data transmission.

**Why it shows you understood the paper:** This project shows you understand the energy constraints and power budgeting critical to battery-free underwater devices, a foundational aspect of the paper's contribution.

**Grounded in:** Power measurements showed microcontroller consumed 932 μW during ADC sampling, 1.3 mW during inference, and 902 μW during backscatter communication. Total energy consumption for on-board inference and communication was 5.40 mJ, which is 30.19% less than sending raw data underwater.

**Tech stack:** Python 3.11, Jupyter Notebook, matplotlib, numpy

**Data:** Simulated power consumption values based on the paper's reported measurements; no real dataset required.

**Build it:**

1. Extract power consumption values from the paper for ADC sampling, inference, and backscatter communication.
2. Write Python functions to calculate energy consumption for each phase given power and duration.
3. Simulate total energy consumption for on-board inference and raw data transmission scenarios.
4. Visualize power and energy consumption using matplotlib charts.
5. Document the calculations and plots in a Jupyter notebook with explanations.

**Ships as:** A GitHub repo containing a Jupyter notebook that reproduces the paper's power consumption analysis with clear visualizations and explanations.

**Stretch goal:** Add sensitivity analysis to explore how varying power or duration affects total energy consumption.

### Intermediate — Lightweight CNN for Marine Mammal Sound Classification
*Effort: 2 weekends, ~20 hours*

You implement a lightweight convolutional neural network in Python using TensorFlow or PyTorch to classify marine mammal sounds into four species, inspired by the paper's core ML model. You train and evaluate the model on the Watkins Marine Mammal Sound Database, a public dataset cited in the paper, and report accuracy metrics comparable to the paper's offline results.

**Why it shows you understood the paper:** This project demonstrates your ability to reproduce the paper's core machine learning pipeline and accuracy evaluation on a real marine mammal sound dataset, showing comprehension of model design and constraints.

**Grounded in:** Offline CNN models achieved up to 88% accuracy classifying four marine mammal species with input size N=16 fitting the device memory.

**Tech stack:** Python 3.11, TensorFlow or PyTorch, librosa (audio processing), scikit-learn, Jupyter Notebook

**Data:** The Watkins Marine Mammal Sound Database (publicly accessible, cited in the paper) used as a substitute for the paper's marine mammal sound data.

**Build it:**

1. Download and preprocess the Watkins Marine Mammal Sound Database audio samples.
2. Extract features such as Mel spectrograms or MFCCs suitable for CNN input.
3. Design and implement a lightweight CNN architecture with input size constraints similar to the paper.
4. Train the CNN on the dataset and evaluate classification accuracy on a test split.
5. Compare results to a simple baseline such as logistic regression or random guess.
6. Document the model architecture, training process, and accuracy results in a notebook or README.

**Verified links from the paper:**

- <https://github.com/saadafzal24/Underwater-Backscatter> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code to preprocess data, train and evaluate a lightweight CNN for marine mammal classification, including accuracy metrics and comparison to baseline.

**Stretch goal:** Quantize or prune the CNN model to simulate deployment on an ultra-low-power microcontroller.

### Advanced — Battery-Free On-Device Model Personalization for Underwater Sound Classification
*Effort: 3+ weeks*

You develop a prototype system that implements lightweight on-device model personalization for marine mammal sound classification to adapt to local underwater environments. Starting from the baseline CNN, you implement incremental fine-tuning or federated learning techniques suitable for ultra-low-power microcontrollers. You evaluate improvements in classification accuracy on simulated or publicly available underwater sound data with domain shifts.

**Why it shows you understood the paper:** This project tackles a key limitation and future direction from the paper by exploring adaptive, personalized models on battery-free underwater devices, demonstrating deep comprehension and research potential.

**Grounded in:** Current models are static and deployed uniformly; they do not adapt to local environmental variations or personalized data. Future directions include developing battery-free on-device model personalization to adapt to local underwater environments and data distributions.

**Tech stack:** Python 3.11, TensorFlow Lite Micro or PyTorch Mobile, librosa, scikit-learn, Jupyter Notebook, C++ (optional for microcontroller simulation)

**Data:** Use the Watkins Marine Mammal Sound Database and simulate domain shifts or environmental variations to test personalization approaches.

**Build it:**

1. Reimplement or reuse the lightweight CNN model from the intermediate project.
2. Research and select lightweight on-device personalization techniques (e.g., incremental fine-tuning, federated averaging).
3. Implement a simulation of on-device personalization adapting the model to shifted or personalized data distributions.
4. Evaluate improvements in classification accuracy compared to static models.
5. Document the methodology, code, and evaluation results with discussion of energy and computational trade-offs.
6. Optionally, prototype deployment on a microcontroller simulator or embedded platform.

**Verified links from the paper:**

- <https://github.com/saadafzal24/Underwater-Backscatter> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo demonstrating on-device model personalization techniques for underwater sound classification, with code, evaluation, and discussion of feasibility for battery-free devices.

**Stretch goal:** Integrate a simulated energy harvesting model to evaluate the impact of personalization on device power consumption.

_The paper's authors did not release code or datasets for their prototype; the intermediate and advanced projects rely on the publicly cited Watkins Marine Mammal Sound Database as a substitute dataset._
