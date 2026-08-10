---
title: "017 · An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI — Abhijit S. Pandya"
date: 2026-07-16
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-dr-pandya-php"
source_hash: "09d8d057472952842339b13feb35d4cbeb685a9698fe3dd19672d8fcc2e14d5c"
sequence: 17
generator: "outreach-garden: managed"
---

# 017 · An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI

## At a glance

- **Professor:** Abhijit S. Pandya
- **Institution:** Florida Atlantic University
- **Paper:** [An Empirical Analysis of Diffusion, Autoencoders, and Adversarial Deep Learning Models for Predicting Dementia Using High-Fidelity MRI](https://doi.org/10.1109/ACCESS.2024.3354724)
- **Authors:** Pranshav Gajjar, Manav Garg, Shivani Desai, Hitesh Chhinkaniwala, Harshal A. Sanghvi, Riki H. Patel, Shailesh Gupta, Abhijit S. Pandya
- **Year:** 2024

## Paper overview

This study compares advanced deep learning generative models—Generative Adversarial Networks (GANs), Variational Autoencoders (VAEs), and Diffusion Models—to generate synthetic MRI images for dementia detection, focusing on Alzheimer's and Parkinson's diseases. It evaluates these models' ability to create realistic images and improve disease classification accuracy, finding diffusion models and data-efficient GANs particularly effective.

### Why it matters

**Research problem:** The scarcity of large, high-quality medical imaging datasets limits the development and accuracy of predictive models for neurodegenerative diseases like Alzheimer's and Parkinson's. Generating realistic synthetic MRI data can augment existing datasets and improve disease detection models.

**Why it matters:** Early and accurate detection of dementia-related diseases has significant societal value, enabling timely intervention and better patient outcomes. However, limited data availability hampers the training of robust machine learning models.

**Key contributions:**

- Comprehensive comparison of GANs, VAEs, and diffusion models for synthetic MRI generation related to dementia.
- Introduction of data-efficient GANs (GAN2) and their superior performance in generating dementia images.
- Validation of generative models through downstream classification tasks using ResNet and DenseNet architectures.
- Demonstration that diffusion models yield the best classification accuracy when their generated images are used for training.
- Application of fine-tuning generative models trained on Alzheimer's data to Parkinson's data to address limited Parkinson's dataset size.

## About the professor

**Abhijit S. Pandya** — Professor, Computer Science & Engineering, Florida Atlantic University.

Research interests: Drug Discovery: Apply computational intelligence algorithms and pattern recognition techniques, including neural networks to identify the optimum drug compositions based on individual's genetic data. Study effects of combinational multi-component drug therapies. Neural Circuitry: Study neural circuitry and build models of oscillatory neural networks with a disease specific treatment. e.g., tinnitus (ringing tone in the ear), aphasia etc.

### Research links

- [Faculty/profile page](http://pire.fiu.edu/faculty/Dr_Pandya.php)
- [Professor website](http://www.cse.fau.edu/~abhi/)

## Learning path

## Foundations playlist — start here

_Everything the paper assumes you already know, in the order you should learn it. Some stages have no visible connection to the paper's title — that is the point: this is the background the paper never explains._

This foundational playlist prepares you with the essential mathematical, statistical, and machine learning concepts needed to understand advanced generative models and their application to medical imaging for dementia prediction. Work through the stages in order, starting with calculus and linear algebra, then probability and statistics, followed by core machine learning and deep learning concepts, and finally advanced generative models including GANs, VAEs, and diffusion models. Each stage builds the necessary background to grasp the paper's methodology and results.

**The paper assumes:** linear algebra, multivariate calculus, probability theory, machine learning fundamentals, deep learning architectures, convolutional neural networks, generative models including GANs and VAEs, diffusion probabilistic models, medical imaging basics, MRI data characteristics, and evaluation metrics for generative models
**Time to work through:** roughly 90-110 hours if you watch everything, about 60-70 hours if you follow the selective episode guidance
**Already in this field?** Skip stages 1-3 if you already have a solid foundation in mathematics and machine learning basics; skip stages 4-6 if you have prior experience with deep generative models and medical image analysis.

### Stage 1 · Linear Algebra and Multivariate Calculus *(foundational)*
Understanding neural network operations, optimization algorithms, and image data representations requires solid knowledge of vectors, matrices, derivatives, and gradients, which are foundational to all deep learning models used in the paper.

▶ **Course:** [MIT 18.02 Multivariable Calculus, Fall 2007](https://www.youtube.com/playlist?list=PL4C4C8A7D06566F38) — MIT OpenCourseWare · 35 videos · 28.3h across 35 episodes

*What to watch:* Focus on the MIT 18.02 Multivariable Calculus playlist, especially lectures 1-24 which cover dot products, matrices, partial derivatives, gradients, and Lagrange multipliers. These topics are crucial for understanding backpropagation and optimization in neural networks.

*Move on when you can:* Derive the gradient of a multivariate function and perform matrix multiplications relevant to neural network forward and backward passes.

### Stage 2 · Probability and Statistics for Machine Learning *(foundational)*
Generative models like VAEs, GANs, and diffusion models rely heavily on probabilistic concepts such as distributions, likelihoods, and sampling; evaluation metrics like Frechet Inception Distance also require statistical understanding.

▶ **Course:** [Stanford CS109 Introduction to Probability for Computer Scientists I 2022 I Chris Piech](https://www.youtube.com/playlist?list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg) — Stanford Online · 29 videos · 35.4h across 29 episodes

*What to watch:* Use the Stanford CS109 Introduction to Probability for Computer Scientists I 2022 playlist, focusing on lectures 1-19 which cover combinatorics, probability basics, random variables, distributions, inference, and evaluation metrics. This will build a strong foundation for understanding probabilistic modeling and evaluation in generative models.

*Move on when you can:* Explain probability distributions and compute likelihoods; interpret evaluation metrics like FID in the context of generative models.

### Stage 3 · Introduction to Machine Learning and Deep Learning *(core)*
The paper assumes familiarity with supervised learning, neural networks, backpropagation, and convolutional neural networks (CNNs), which are essential for understanding the classification models (ResNet, DenseNet) and the training of generative models.

▶ **Course:** [Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018](https://www.youtube.com/playlist?list=PLoROMvodv4rMiGQp3WXShtMGgzqpfVfbU) — Stanford Online · 21 videos · 27.9h across 21 episodes

*What to watch:* Focus on the Stanford CS229: Machine Learning led by Andrew Ng | Autumn 2018 playlist, especially lectures 10 and 11 covering neural networks and backpropagation. This will provide a solid understanding of the core deep learning concepts used in the paper's classification models.

*Move on when you can:* Implement a basic CNN for image classification and explain backpropagation and gradient descent.

### Stage 4 · Generative Models: GANs and Variational Autoencoders *(advanced)*
The paper compares GANs, data-efficient GANs, and VAEs for synthetic MRI generation; understanding their architectures, training challenges, and latent space representations is critical to grasping the experimental setup and results.

▶ **Course:** [Stanford CS236: Deep Generative Models I 2023 I Stefano Ermon](https://www.youtube.com/playlist?list=PLoROMvodv4rPOWA-omMM6STXaWW4FvJT8) — Stanford Online · 18 videos · 23.6h across 18 episodes

*What to watch:* Watch the Stanford CS236: Deep Generative Models I 2023 playlist, focusing on lectures 5-6 for VAEs and 9-10 for GANs. These lectures explain the architecture, training, and challenges of these generative models, directly relevant to the paper's comparisons.

*Move on when you can:* Explain the architecture and training procedure of GANs and VAEs; implement a simple GAN and VAE on image data.

_Work through the stages in order. Once the last one lands, the paper — and the two tracks below — should read cleanly._

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper, start by grounding yourself in the foundational generative models relevant to the study: Generative Adversarial Networks (GANs) and Variational Autoencoders (VAEs), as these are key baselines compared in the paper. Next, explore MRI-based dementia classification methods to appreciate the downstream application validating synthetic data utility. Finally, focus on the core concept of generative diffusion models, which the paper identifies as producing the highest quality synthetic MRI images, and conclude with the authors' own related talks or closely aligned advanced research presentations to gain direct insights into their methodology and findings.

### Generative adversarial networks *(prerequisite)*
GANs are a fundamental generative model baseline in this study, used for synthetic MRI image generation. Understanding their adversarial training framework and applications in medical imaging is crucial for appreciating the comparative analysis in the paper.

*How the paper uses it:* The paper empirically compares standard GANs and data-efficient GANs as key generative models for synthetic MRI generation.

▶ [Synthesizing medical images using generative adversarial ...](https://www.youtube.com/watch?v=O6J9zdbL7NM) — Institute for Advanced Study · 28:11

### Variational autoencoders *(prerequisite)*
VAEs provide an important generative modeling approach analyzed in the paper, especially for their trade-offs between image quality and computational efficiency. A solid understanding of VAEs will clarify why they performed differently compared to GANs and diffusion models.

*How the paper uses it:* The paper evaluates VAEs for synthetic MRI generation, noting their poorer FID scores but faster training and testing times.

▶ [Variational Autoencoders](https://www.youtube.com/watch?v=Zkv_YuzEVfs) — Machine Learning in the Nanoworld · 1:51:16 · 2 years ago

### MRI-based dementia classification *(prerequisite)*
This concept covers the downstream classification tasks that validate the utility of synthetic images generated by the models. Understanding MRI-based dementia detection methods contextualizes the practical impact of the generative models evaluated.

*How the paper uses it:* The paper uses ResNet and DenseNet classifiers trained on synthetic images to detect Alzheimer's and Parkinson's diseases, validating generative model effectiveness.

▶ [Advancing Alzheimer's Diagnosis with Dr. Samaneh Abolpour ...](https://www.youtube.com/watch?v=5gWOfozdpaE) — SAIConference · 8:31

### Generative diffusion models
Diffusion models are the core generative approach in the paper, producing the highest quality synthetic MRI images and best classification accuracy. A detailed understanding of diffusion models is essential to grasp the paper's main contributions and results.

*How the paper uses it:* Diffusion models yielded the lowest FID scores and highest classification accuracy in the study, making them central to the paper's findings.

▶ [Stanford CS231N Deep Learning for Computer Vision | Spring ...](https://www.youtube.com/watch?v=Edr4uZFh4EE) — Stanford Online · 1:12:09

### Paper authors talk *(the paper's own talk)*
Direct talks by the paper authors or closely related advanced research presentations provide the most precise insights into their methodology, experimental setup, and nuanced findings. These talks can clarify complex aspects and contextualize the empirical results.

*How the paper uses it:* While no direct talk by the authors on this exact paper is available, related advanced diffusion MRI talks provide relevant domain context.

▶ [“Advanced diffusion MRI methods for studying white matter integrity in Aphasia”, Emilie McKinnon](https://www.youtube.com/watch?v=l6GTwt_-ZC0) — C-STAR Lecture Series · 8 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational concepts in deep learning generative models and their application to MRI-based dementia detection. Starting with core generative models like GANs and VAEs, it then covers MRI-based dementia classification to understand the medical context, and culminates with diffusion models, the paper's key method for generating high-quality synthetic MRI images. Each step builds intuition with clear, concise explainers tailored to the paper's focus.

### Generative adversarial networks *(prerequisite)*
Generative Adversarial Networks (GANs) are a class of deep learning models where two neural networks compete—the generator creates synthetic data, and the discriminator evaluates its authenticity. This adversarial process helps GANs generate realistic images, making them a foundational technique for synthetic MRI generation in medical imaging.

*How the paper uses it:* The paper compares standard and data-efficient GANs for generating synthetic MRI images to augment dementia datasets.

▶ [Understanding GANs (Generative Adversarial Networks)](https://www.youtube.com/watch?v=RAa55G-oEuk) — DeepBean · 1 year ago

### Variational autoencoders *(prerequisite)*
Variational Autoencoders (VAEs) are generative models that learn to compress data into a latent space and then reconstruct it, enabling the generation of new, similar data samples. VAEs trade off image quality for faster training and inference, which is important for understanding their role in medical image synthesis.

*How the paper uses it:* The paper evaluates VAEs for synthetic MRI generation, noting their speed advantage but poorer image quality compared to GANs and diffusion models.

▶ [Variational Autoencoders | Generative AI Animated](https://www.youtube.com/watch?v=qJeaCHQ1k2w) — Deepia · 1 year ago

### MRI-based dementia classification *(prerequisite)*
MRI-based dementia classification involves using machine learning models to analyze brain MRI scans and detect signs of neurodegenerative diseases like Alzheimer's and Parkinson's. Understanding this task provides context for why synthetic MRI data generation is valuable for improving classification accuracy.

*How the paper uses it:* The paper validates synthetic images by training classifiers to detect dementia from MRI scans, demonstrating the practical utility of generated data.

▶ [MRI And Dementia: Why A Normal Scan Isn't Enough](https://www.youtube.com/watch?v=OyYh1NdRKrU) — Rosabel Unscripted · 5:50

### Generative diffusion models
Diffusion models are a newer class of generative models that iteratively refine random noise into realistic images through a learned denoising process. They have recently achieved state-of-the-art results in image synthesis, producing higher-quality and more diverse samples than GANs or VAEs.

*How the paper uses it:* Diffusion models in the paper produced the highest-quality synthetic MRI images and led to the best dementia classification accuracy.

▶ [Diffusion Models: DDPM | Generative AI Animated](https://www.youtube.com/watch?v=EhndHhIvWWw) — Deepia · 1 year ago

## Already in your library

- [Stanford CS236: Deep Generative Models I 2023 I Lecture 18 - Diffusion Models for Discrete Data](https://www.youtube.com/watch?v=mCaRNnEnYwA) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [What are Diffusion Models?](https://www.youtube.com/watch?v=fbLgFrlTnGU) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)
- [Generative Adversarial Networks (GANs) - Computerphile](https://www.youtube.com/watch?v=Sw9r8CL98N0) — also for: Geometry Preserving Loss Functions Promote Improved Adaptation of Blackbox Generative Models (Pavan K. Turaga)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate understanding of the paper's empirical comparison of generative models for synthetic MRI data in dementia detection. The beginner project reproduces a key evaluation metric (FID score) on synthetic MRI images using a simple GAN baseline. The intermediate project implements and compares diffusion models and data-efficient GANs on a substitute public MRI dataset, reporting classification accuracy with DenseNet. The advanced project extends the paper by developing a data-efficient diffusion model variant to address computational efficiency and tests it on a small Parkinson's-like MRI dataset, exploring a stated future direction.

### Beginner — Compute FID Scores for Synthetic MRI Images Using a Simple GAN
*Effort: a weekend, ~8 hours*

You build a pipeline to train a simple GAN on a small MRI dataset substitute (e.g., OASIS-1 for Alzheimer's-like brain MRI), generate synthetic images, and compute the Frechet Inception Distance (FID) score to evaluate image quality. This reproduces the paper's use of FID as a key metric for generative model quality.

**Why it shows you understood the paper:** This project shows you understand the importance of quantitative metrics like FID in evaluating synthetic medical images and can implement a basic GAN training and evaluation pipeline relevant to dementia MRI data.

**Grounded in:** Demonstrates the use of Frechet Inception Distance (FID) to evaluate synthetic MRI image quality, a key metric used in the paper's comparison of generative models.

**Tech stack:** Python 3.11, PyTorch, scikit-image, numpy, matplotlib

**Data:** Use the OASIS-1 MRI dataset (publicly available) as a substitute for Alzheimer's MRI data to train the GAN and generate synthetic images.

**Build it:**

1. Download and preprocess a subset of the OASIS-1 MRI dataset focusing on healthy and dementia-labeled images.
2. Implement or adapt a simple GAN architecture in PyTorch to train on the MRI images.
3. Train the GAN to generate synthetic MRI images over several epochs.
4. Generate a synthetic image set from the trained GAN.
5. Compute the FID score between real and synthetic images using a standard FID implementation.
6. Document the pipeline, results, and interpretation of the FID score in the README.

**Ships as:** A GitHub repo with code to train a GAN on MRI data, generate synthetic images, compute FID scores, and a README explaining the process and results.

**Stretch goal:** Add Inception Score computation or visualize synthetic images alongside real images for qualitative comparison.

### Intermediate — Implement and Compare Diffusion Models and Data-Efficient GANs for Dementia MRI Classification
*Effort: 2 weekends, ~20 hours*

You implement diffusion models and data-efficient GANs to generate synthetic MRI images from a public Alzheimer's MRI dataset substitute, then train DenseNet classifiers on these synthetic images to detect dementia. You compare classification accuracies and FID scores between the two generative approaches, replicating the paper's core empirical comparison.

**Why it shows you understood the paper:** This project demonstrates your ability to implement advanced generative models, apply them to medical imaging, and validate their utility via downstream classification tasks, directly reflecting the paper's main contributions.

**Grounded in:** Reimplements the paper's core method of comparing diffusion models and data-efficient GANs for synthetic MRI generation and validating with DenseNet classification accuracy.

**Tech stack:** Python 3.11, PyTorch, timm (for DenseNet), numpy, scikit-learn

**Data:** Use the Alzheimer's subset of the OASIS-1 MRI dataset as a substitute for the paper's Alzheimer's MRI data.

**Build it:**

1. Preprocess the Alzheimer's MRI dataset to prepare training and testing splits.
2. Implement or adapt a diffusion model and a data-efficient GAN architecture for MRI image generation.
3. Train both generative models separately on the Alzheimer's MRI training data.
4. Generate synthetic MRI images from each trained model.
5. Train DenseNet classifiers on the synthetic images from each model to classify dementia vs. non-dementia.
6. Evaluate and compare classification accuracy and FID scores for both generative approaches.
7. Write a detailed README documenting methodology, results, and comparison.

**Ships as:** A GitHub repo with implementations of diffusion and data-efficient GAN models, DenseNet classifiers trained on synthetic images, evaluation scripts, and a report comparing results.

**Stretch goal:** Add fine-tuning of generative models on a small Parkinson's MRI subset to explore transfer learning effects as in the paper.

### Advanced — Develop a Data-Efficient Diffusion Model for Parkinson's MRI with Transfer Learning
*Effort: 3+ weeks*

You develop a novel data-efficient diffusion model variant aimed at reducing training time and computational cost, addressing the paper's limitation of slow diffusion model training. You pretrain on Alzheimer's MRI data (using a public substitute) and fine-tune on a small Parkinson's MRI-like dataset (simulated or public substitute). You evaluate synthetic image quality and downstream classification accuracy, extending the paper's future direction.

**Why it shows you understood the paper:** This project shows deep comprehension of the paper's limitations and future directions by innovating on diffusion model efficiency and applying transfer learning to small Parkinson's datasets, potentially contributing novel insights.

**Grounded in:** Targets the paper's stated limitation of diffusion model training time and the future direction of developing data-efficient diffusion models and fine-tuning on small Parkinson's datasets.

**Tech stack:** Python 3.11, PyTorch, timm, numpy, scikit-learn, optuna (for hyperparameter tuning)

**Data:** Use OASIS-1 Alzheimer's MRI data as pretraining data substitute; simulate or find a small Parkinson's MRI subset from public sources or create synthetic Parkinson's-like images for fine-tuning.

**Build it:**

1. Research and implement a data-efficient diffusion model variant (e.g., fewer diffusion steps, improved noise schedules).
2. Pretrain the model on Alzheimer's MRI data substitute.
3. Obtain or simulate a small Parkinson's MRI dataset substitute for fine-tuning.
4. Fine-tune the pretrained diffusion model on the Parkinson's data.
5. Generate synthetic Parkinson's MRI images and evaluate image quality with FID and classification accuracy using DenseNet.
6. Compare results to baseline diffusion models without data efficiency improvements.
7. Document methodology, experiments, and findings in a comprehensive README.

**Ships as:** A GitHub repo containing the data-efficient diffusion model code, pretrained and fine-tuned weights, evaluation scripts, and a detailed report on efficiency gains and classification performance.

**Stretch goal:** Integrate neural circuitry simulation data or models to explore multimodal generative approaches for personalized therapy as suggested in the paper's thoughtful question.
