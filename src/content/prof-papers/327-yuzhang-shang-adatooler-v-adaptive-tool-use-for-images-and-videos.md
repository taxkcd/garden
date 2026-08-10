---
title: "327 · AdaTooler-V: Adaptive Tool-Use for Images and Videos — Yuzhang Shang"
date: 2026-08-08
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-yuzhang-shang"
source_hash: "e3e4459c80fc554b762ae4209dcf3cf43be9d7a4775e935b451a97142fa52199"
sequence: 327
generator: "outreach-garden: managed"
---

# 327 · AdaTooler-V: Adaptive Tool-Use for Images and Videos

## At a glance

- **Professor:** Yuzhang Shang
- **Institution:** University of Central Florida
- **Paper:** [AdaTooler-V: Adaptive Tool-Use for Images and Videos](https://aclanthology.org/2026.findings-acl.898.pdf)
- **Authors:** Chaoyang Wang, Kaituo Feng, Dongyang Chen, Zhongyu Wang, Zhixun Li, Sicheng Gao, Meng Meng, Xu Zhou, Manyuan Zhang, Yuzhang Shang, Xiangyu Yue
- **Year:** 2026

## Paper overview

AdaTooler-V is a multimodal large language model designed to improve visual reasoning on images and videos by adaptively deciding when to use vision tools like image cropping or video frame extraction. Unlike previous models that use tools blindly, AdaTooler-V learns to invoke tools only when they genuinely improve performance, reducing unnecessary computation and improving accuracy. This is achieved through a novel reinforcement learning algorithm called AT-GRPO, which uses a Tool Benefit Score to reward or penalize tool use. The model is trained on large datasets covering diverse visual reasoning tasks and modalities, and it outperforms existing state-of-the-art models including proprietary ones like GPT-4o.

### Why it matters

**Research problem:** Existing multimodal large language models often invoke vision tools blindly during reasoning, even when such tools are unnecessary. This leads to increased computational overhead, degraded model performance due to overthinking, and weaker reliance on original visual inputs.

**Why it matters:** Blind tool-use causes inefficiency and can degrade reasoning quality by making models explore unnecessary reasoning paths and lose focus on critical visual cues. Efficient and adaptive tool-use is essential for improving both the accuracy and computational cost of multimodal reasoning systems.

**Key contributions:**

- Proposed AdaTooler-V, a multimodal large language model with adaptive tool-use capability.
- Developed AT-GRPO, a reinforcement learning algorithm that modulates rewards based on a Tool Benefit Score to encourage necessary tool invocation.
- Constructed two large-scale datasets, AdaTooler-V-CoT-100k for supervised fine-tuning and AdaTooler-V-300k for reinforcement learning, covering diverse visual reasoning tasks and modalities.
- Demonstrated state-of-the-art performance on 12 benchmarks, surpassing proprietary models like GPT-4o.

## About the professor

**Yuzhang Shang** — Assistant Professor, Computer Science, University of Central Florida.

Research interests: Artificial Intelligence, Computer Science

### Research links

- [Faculty/profile page](https://www.ucf.edu/expert/yuzhang-shang)
- [Resolved homepage](https://www.ucf.edu/expert/yuzhang-shang/#content)
- [LinkedIn](https://www.linkedin.com/in/yuzhang-shang-644b82283/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** reinforcement learning
**The paper assumes:** foundations of reinforcement learning, policy gradient methods, reward shaping, and actor-critic algorithms
**Already in this field?** Skip this entirely if you already understand reinforcement learning fundamentals and policy gradient algorithms.

This background focuses on reinforcement learning (RL), which is central to understanding the AT-GRPO algorithm used in AdaTooler-V for adaptive tool-use. The rigorous course option offers a deep, structured university-level introduction to modern deep RL methods, ideal for readers seeking comprehensive mastery. The fast track provides a concise, visually intuitive series that covers core RL concepts and the specific Group Relative Policy Optimization (GRPO) method relevant to the paper, suitable for readers who want a quick yet solid grasp.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford CS224R Deep Reinforcement Learning](https://www.youtube.com/playlist?list=PLoROMvodv4rPwxE0ONYRa_itZFdaKCylL) — Stanford Online · 19 videos · 20.6h across 19 episodes

**Watch only this:** Lectures 1-5 (Class Intro, Imitation Learning, Policy Gradients, Actor-Critic Methods, Off-Policy Actor Critic), about 5.4 hours — these cover foundational RL algorithms and policy optimization methods essential to understanding AT-GRPO.

*Why it unblocks this paper:* Stanford CS224R Deep Reinforcement Learning is a recent, authoritative university course that covers deep RL algorithms including policy gradients and actor-critic methods, which underpin AT-GRPO. It also includes lectures specifically on RL for LLMs and reasoning, directly relevant to AdaTooler-V's training approach.

*If you want all of it:* 20.6 hours across all 19 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Reinforcement learning VIsualized.](https://www.youtube.com/playlist?list=PL059o-2XfQvfgy4OsGADaCoYRc6OV_DxA) — AGI Lambda · 6 videos · 0.8h across 6 episodes

**Watch only this:** Episodes 1-4 (Where to use Reinforcement Learning | Part 1, Approximating a World Model with Neural Networks | overview, When AI Developed its own Language | Part 1, Group Relative Policy Optimization(GRPO) Visualized), about 28 minutes — covers RL basics and the GRPO method critical for understanding the paper's approach.

*Why it unblocks this paper:* The 'Reinforcement learning VIsualized.' series by AGI Lambda is a concise, visually rich explainer set that includes an episode on Group Relative Policy Optimization (GRPO), the core technique behind AT-GRPO. It efficiently introduces classical RL concepts and the specific algorithmic innovation used in the paper.

*If you want all of it:* About 48 minutes across all 6 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand AdaTooler-V, start with foundational knowledge on reinforcement learning reward shaping to grasp the AT-GRPO algorithm's reward modulation mechanism. Next, build understanding of multimodal large language models that integrate vision and language, which form the backbone of AdaTooler-V's architecture. Then, study visual reasoning in AI to appreciate the core task domain where adaptive tool-use improves performance. Finally, focus on the paper's core concept of adaptive tool-use in AI systems, culminating with the authors' own talk or the best available advanced presentation on adaptive tool-use and multimodal AI agents.

### Reinforcement learning with reward shaping *(prerequisite)*
This section covers advanced reinforcement learning concepts focusing on reward design and shaping, which are critical to understanding how AT-GRPO dynamically adjusts rewards based on the Tool Benefit Score. The selected lectures from MIT and Stanford provide rigorous academic treatments of reward shaping techniques and their impact on sample efficiency and policy learning.

*How the paper uses it:* AT-GRPO uses reward shaping to encourage adaptive tool invocation only when beneficial.

▶ [CSL Spring'21 - Lecture 8: Reward Design & Shaping](https://www.youtube.com/watch?v=hj5GWf69h10) — MIT Improbable AI Group · 1:25:14

### Multimodal large language models *(prerequisite)*
This section introduces state-of-the-art Transformer-based models that integrate multiple modalities such as vision and language for reasoning tasks. The selected university lectures and seminars provide a deep dive into the architectures and challenges of multimodal LLMs, laying the groundwork for understanding AdaTooler-V's multimodal reasoning capabilities.

*How the paper uses it:* AdaTooler-V is a multimodal large language model designed for images and videos.

▶ [CMU Advanced NLP Spring 2026 (12): Multimodal LLMs II](https://www.youtube.com/watch?v=tvZyZ2uNZqY) — Sean Welleck · 1:07:00

### Visual reasoning in AI *(prerequisite)*
Visual reasoning is the core task domain where AdaTooler-V applies adaptive tool-use to improve model performance. The chosen videos provide advanced insights into visual reasoning challenges and methods, including spatial reasoning and visual mathematical reasoning, which are directly relevant to the paper's benchmarks and tasks.

*How the paper uses it:* AdaTooler-V improves visual reasoning accuracy on images and videos through adaptive tool-use.

▶ [Visual Agentic AI for Spatial Reasoning with a Dynamic API](https://www.youtube.com/watch?v=6241eFtjjE8) — Xiaol.x · 22:35

### Adaptive tool-use in AI systems
This section focuses on the central concept of adaptive tool-use, which enables efficient and accurate invocation of vision tools in AdaTooler-V. The selected advanced talks discuss AI agents' tool-use mechanisms and adaptive behaviors, providing context for the paper's novel reinforcement learning approach to tool invocation.

*How the paper uses it:* AdaTooler-V's core innovation is adaptive tool-use enabled by AT-GRPO.

▶ [AI Agents In-Depth – Function Calling, MCP and Tool Use ...](https://www.youtube.com/watch?v=Mvcxa35_PMA) — NDC Conferences · 1:01:26

### AdaTooler-V authors talk *(the paper's own talk)*
Direct insight from the authors about their novel adaptive tool-use model would be ideal for understanding the paper's contributions and results. However, no exact author talk on AdaTooler-V was found. The best available advanced talk on multimodal AI agents is included to approximate the authors' perspective on adaptive tool-use in multimodal reasoning.

*How the paper uses it:* Direct or closely related author talks provide the most precise understanding of AdaTooler-V.

▶ [Multi-Modal AI Agents Explained | Open-Vocabulary Alignment | Anupam Rawat](https://www.youtube.com/watch?v=pWEe8flsEQo) — CSharpCorner · 23:49 · 3 months ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand AdaTooler-V, start by learning the basics of multimodal large language models that combine vision and language reasoning. Next, build intuition on reinforcement learning with reward shaping, which underpins the adaptive tool-use training method AT-GRPO. Finally, explore the core concept of adaptive tool-use in AI systems, which enables efficient and accurate invocation of vision tools only when beneficial.

### Multimodal large language models *(prerequisite)*
Multimodal large language models integrate multiple types of data, such as images and text, to perform reasoning tasks that require understanding both visual and linguistic information. This foundational knowledge helps grasp how AdaTooler-V processes and reasons over images and videos alongside language.

*How the paper uses it:* AdaTooler-V is a multimodal large language model designed to improve visual reasoning by combining vision and language inputs.

▶ [What Are Vision Language Models? How AI Sees & Understands Images](https://www.youtube.com/watch?v=lOD_EE96jhM) — IBM Technology · 1 year ago

### Reinforcement learning with reward shaping *(prerequisite)*
Reinforcement learning with reward shaping involves designing reward functions that guide an AI agent to learn desired behaviors more efficiently by providing structured feedback. Understanding this helps explain how AdaTooler-V's AT-GRPO algorithm uses a Tool Benefit Score to reward or penalize tool use adaptively.

*How the paper uses it:* AT-GRPO uses reward modulation based on a Tool Benefit Score to encourage tool invocation only when it improves performance.

▶ [CSL Spring'21 - Lecture 8: Reward Design & Shaping](https://www.youtube.com/watch?v=hj5GWf69h10) — MIT Improbable AI Group · 1:25:14

### Adaptive tool-use in AI systems
Adaptive tool-use in AI refers to systems that decide when and how to use external tools dynamically to improve task performance while avoiding unnecessary computation. This concept is central to AdaTooler-V, which learns to invoke vision tools like image cropping or frame extraction only when beneficial.

*How the paper uses it:* AdaTooler-V adaptively invokes vision tools to improve accuracy and efficiency, avoiding blind or redundant tool use.

▶ [AI Agents In-Depth – Function Calling, MCP and Tool Use ...](https://www.youtube.com/watch?v=Mvcxa35_PMA) — NDC Conferences · 1:01:26

## Already in your library

- [Stanford CS25: V4 I From Large Language Models to Large ...](https://www.youtube.com/watch?v=cYfKQ6YG9Qo) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Zhe Gan - How to Build Your Multimodal LLMs: From Pre ...](https://www.youtube.com/watch?v=Sblp_U1qI7g) — also for: A MANDA: Agentic Medical Knowledge Augmentation for Data-Efficient Medical Visual Question Answering (Yuan Luo)
- [Large Language Models explained briefly](https://www.youtube.com/watch?v=LPZh9BOjkQs) — also for: On-demand generation of high-quality software engineering datasets using large language models and ontologies (Suranjan Chakraborty)
- [What is Multimodal AI? How LLMs Process Text, Images, and More](https://www.youtube.com/watch?v=J51oZYcNvP8) — also for: Automated Grading of Handwritten Mathematics Using Vision-Capable LLMs (Craig B. Zilles)
- [Lec-26: Knowledge Representation and Reasoning | Logic ...](https://www.youtube.com/watch?v=9iN3O_oL2ac) — also for: A Community-driven vision for a new Knowledge Resource for AI (Michael R. Genesereth)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a practical learning ladder to demonstrate your understanding of AdaTooler-V's adaptive tool-use mechanism for visual reasoning. The beginner project recreates a simplified adaptive tool invocation mechanism on images, the intermediate project implements the core AT-GRPO reinforcement learning algorithm on a public visual reasoning dataset, and the advanced project extends adaptive tool-use to incorporate an external knowledge retrieval tool, addressing a key future direction of the paper.

### Beginner — Adaptive Tool Invocation Simulation for Image Reasoning
*Effort: a weekend, ~8 hours*

You build a simplified simulation of adaptive tool-use for image reasoning by implementing a heuristic-based decision module that decides whether to invoke a vision tool (e.g., image cropping) based on input image features. You then measure the impact of tool invocation on a small set of image classification or reasoning tasks using a pretrained vision-language model.

**Why it shows you understood the paper:** This project demonstrates your grasp of the core idea that tool invocation should be adaptive and beneficial rather than blind, reflecting the paper's motivation and the Tool Benefit Score concept in a simplified form.

**Grounded in:** Claim: AdaTooler-V adaptively invokes vision tools only when they provide genuine improvements.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), OpenCV

**Data:** Use a small subset of publicly available image classification datasets such as CIFAR-10 or a few images from MS COCO to simulate visual reasoning tasks.

**Build it:**

1. Set up a pretrained vision-language model (e.g., CLIP) for image classification or reasoning.
2. Implement a simple heuristic function that decides whether to apply an image cropping tool based on image properties (e.g., object size or complexity).
3. Apply the tool adaptively according to the heuristic and compare model performance with and without tool invocation.
4. Measure and report accuracy and computational cost differences.
5. Write a README explaining how adaptive tool invocation improves efficiency and accuracy compared to blind tool use.

**Ships as:** A GitHub repo with code demonstrating adaptive tool invocation on images, performance metrics comparing adaptive vs. blind tool use, and a clear explanation linking the implementation to the paper's adaptive tool-use concept.

**Stretch goal:** Add a simple reward mechanism that learns to invoke the tool based on performance feedback instead of a fixed heuristic.

### Intermediate — Reimplementation of AT-GRPO for Adaptive Tool-Use on Visual Reasoning
*Effort: 2 weekends, ~20 hours*

You reimplement the core Adaptive Tool-use GRPO (AT-GRPO) reinforcement learning algorithm described in the paper to train a multimodal model that adaptively decides when to invoke vision tools on a public visual reasoning dataset. You compare adaptive tool-use against a baseline model that uses tools blindly and report accuracy improvements and tool invocation efficiency.

**Why it shows you understood the paper:** This project shows you can implement the paper's main technical contribution—AT-GRPO—and validate its effectiveness on real data, demonstrating comprehension of the reinforcement learning reward shaping and adaptive tool-use mechanism.

**Grounded in:** Key contribution: Developed AT-GRPO, a reinforcement learning algorithm that modulates rewards based on a Tool Benefit Score to encourage necessary tool invocation.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), OpenCV, Gym or custom RL environment

**Data:** Use a public visual reasoning dataset such as VQA v2 or a subset of MS COCO with question-answer pairs to simulate visual reasoning tasks; this substitutes for the paper's AdaTooler-V datasets.

**Build it:**

1. Implement a multimodal model pipeline integrating vision and language inputs.
2. Implement vision tools such as image cropping and frame extraction as callable modules.
3. Implement the AT-GRPO reinforcement learning algorithm with a Tool Benefit Score reward shaping mechanism.
4. Train the model on the chosen dataset with adaptive tool invocation and compare against a baseline that always uses tools.
5. Evaluate and report accuracy and tool-use efficiency metrics.
6. Document the implementation details, results, and how they relate to the paper's findings.

**Verified links from the paper:**

- <https://github.com/CYWang735/AdaTooler-V> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code for AT-GRPO training, evaluation scripts comparing adaptive vs. blind tool-use, and a detailed README linking results to the paper's core method and metrics.

**Stretch goal:** Extend the model to handle multi-image inputs or simple video frame sequences to mimic the paper's multimodal scope.

### Advanced — Extending Adaptive Tool-Use with External Knowledge Retrieval
*Effort: 3+ weeks*

You extend the adaptive tool-use framework by integrating an external knowledge retrieval tool (e.g., an image search API or web-based retrieval) into the multimodal reasoning pipeline. You adapt the AT-GRPO algorithm to decide when to invoke this external tool alongside vision tools, aiming to improve reasoning accuracy on a multimodal dataset. This addresses the paper's stated future direction of incorporating agentic multimodal tools beyond vision-centric operations.

**Why it shows you understood the paper:** This project demonstrates deep understanding by tackling a key limitation and future direction of the paper, showing ability to extend the adaptive tool-use paradigm to new modalities and external knowledge sources with reinforcement learning.

**Grounded in:** Future direction: Incorporating more agentic multimodal tools such as image search or web-based retrieval to enable active acquisition of external knowledge and reasoning beyond perceptual inputs.

**Tech stack:** Python 3.11, PyTorch, transformers (Hugging Face), OpenCV, FastAPI or Node.js for API integration, External image search API (e.g., Bing Image Search)

**Data:** Use a public visual question answering dataset augmented with external knowledge questions or simulate queries requiring external information; no direct dataset from the paper is available for this extension.

**Build it:**

1. Build or adapt a multimodal reasoning model with adaptive tool-use capability based on AT-GRPO.
2. Integrate an external knowledge retrieval tool via API (e.g., image search) as an additional tool the model can invoke.
3. Extend the reward shaping mechanism to include benefits from external tool invocation.
4. Train and evaluate the model on tasks requiring external knowledge, comparing adaptive invocation of vision and external tools against baselines.
5. Analyze trade-offs in accuracy and computational cost.
6. Document challenges faced in integrating external tools and how adaptive tool-use mitigates unnecessary invocations.

**Verified links from the paper:**

- <https://github.com/CYWang735/AdaTooler-V> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with code demonstrating adaptive invocation of vision and external knowledge tools, evaluation results on extended tasks, and a comprehensive README discussing the extension's motivation, implementation, and relation to the paper's future directions.

**Stretch goal:** Incorporate audio-visual inputs to further generalize adaptive tool-use across modalities as another future direction.

_The paper's own datasets and code are not publicly released by the authors; the intermediate and advanced projects rely on reimplementation and public datasets as substitutes._
