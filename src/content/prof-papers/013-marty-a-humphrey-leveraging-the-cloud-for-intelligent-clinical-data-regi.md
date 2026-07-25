---
title: "013 · Leveraging the Cloud for Intelligent Clinical Data Registries — Marty A. Humphrey"
date: 2026-07-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-humphrey-html"
source_hash: "6c18afea7a18824fa75e92f1a5aa7e745a73533362e9c5e983f4503c875c9212"
sequence: 13
generator: "outreach-garden: managed"
---

# 013 · Leveraging the Cloud for Intelligent Clinical Data Registries

## At a glance

- **Professor:** Marty A. Humphrey
- **Institution:** University of Virginia
- **Paper:** [Leveraging the Cloud for Intelligent Clinical Data Registries](https://doi.org/10.1145/3307339.3343464)
- **Authors:** Marty Humphrey, Vincent Lin, Shweta Notani, Jose Mattos
- **Year:** 2019

## Paper overview

This paper presents CPOP, a cloud-based platform designed to collect, store, and analyze clinical patient data, focusing on Chronic Rhinosinusitis (CRS). The platform enables doctors and patients to interact with medical data securely and efficiently using Amazon Web Services. It supports features like data visualization, patient surveys, and audio transcription of doctor-patient interactions. The system aims to improve quality of care by facilitating data collection and analysis across multiple clinics.

### Why it matters

**Research problem:** Collecting, tracking, and analyzing clinical data for chronic diseases like CRS is challenging due to resource constraints, data privacy concerns, and the complexity of managing longitudinal patient outcomes across multiple providers.

**Why it matters:** CRS affects 10-15% of North Americans and has significant health and economic impacts. Current data collection methods are burdensome and inefficient, limiting quality improvement initiatives and shared insights among physicians.

**Key contributions:**

- Design and implementation of CPOP, a scalable cloud architecture for clinical data registries.
- Application of CPOP to CRS (CPOP-CRS), demonstrating domain-specific customization.
- Integration of AWS services including Cognito for authentication, RDS for relational data storage, Lambda and API Gateway for serverless APIs.
- Evaluation of Amazon Transcribe for audio transcription with a measured word error rate of 15.6%.
- Detailed security architecture ensuring HIPAA compliance and data privacy.

## About the professor

**Marty A. Humphrey** — Associate Professor, Department of Management, University of Virginia.

Research interests: text mining, quality control, statistics, asymmetric distributions

### Research links

- [Faculty/profile page](https://datascience.virginia.edu/people/marty-humphrey)
- [Identity evidence](https://www.cs.virginia.edu/people/faculty/humphrey.html)
- [Identity evidence](https://engineering.virginia.edu/faculty/marty-humphrey)
- [Identity evidence](https://www.martyhumphrey.info/)
- [Identity evidence](https://scholar.google.com/citations?user=NaVxc4wAAAAJ)
- [Professor website](https://www.researchgate.net/profile/Triss_Ashton)
- [Resolved homepage](https://www.researchgate.net/profile/Triss-Ashton)
- [Lab website](https://www.researchgate.net/lab/Triss-Ashton-Lab)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the paper 'Leveraging the Cloud for Intelligent Clinical Data Registries,' start with foundational knowledge on cloud computing architectures specialized for healthcare, followed by security and privacy compliance with HIPAA in cloud environments. Then, explore serverless architectures like AWS Lambda, which underpin the system's scalable backend. Next, study medical audio transcription technologies, especially Amazon Transcribe, as they are key to the paper's audio transcription feature. Finally, focus on the core concept of cloud-based clinical data registries and the authors' own talk to grasp the specific design, implementation, and evaluation of the CPOP platform.

### cloud computing architecture for healthcare *(prerequisite)*
Understanding cloud architectures tailored for healthcare data is essential to appreciate the system design choices in CPOP. This includes concepts like scalability, reliability, and secure data handling in cloud environments, which form the backbone of the platform.

*How the paper uses it:* The paper builds on a scalable cloud architecture for clinical data registries using AWS services.

▶ [Cloud Adoption Essentials: Cloud Architecture Basics](https://www.youtube.com/watch?v=pM45hWKia5o) — A Cloud Guru · 15:39 · 5 years ago

### HIPAA compliance cloud security *(prerequisite)*
Security and privacy compliance under HIPAA is critical for clinical data systems. This section covers the regulatory requirements and best practices for securing healthcare data in the cloud, which is central to the paper's design.

*How the paper uses it:* The paper emphasizes a security architecture ensuring HIPAA compliance and data privacy.

▶ [HIPAA Rules and Compliance Training Video](https://www.youtube.com/watch?v=CRQwUlXMoqM) — SafetyVideos.com · 7 years ago

### serverless architectures AWS Lambda *(prerequisite)*
Serverless computing with AWS Lambda enables scalable, event-driven backend APIs without managing servers. Understanding this technology is key to grasping how CPOP implements its serverless APIs for data interaction and processing.

*How the paper uses it:* The paper uses AWS Lambda and API Gateway for serverless backend APIs in CPOP.

▶ [Introduction to AWS Lambda - Serverless Compute on Amazon Web Services](https://www.youtube.com/watch?v=eOBq__h4OJ4) — Amazon Web Services · 11 years ago

### medical audio transcription Amazon Transcribe *(prerequisite)*
Medical audio transcription technology, particularly Amazon Transcribe Medical, is crucial for converting doctor-patient conversations into text. This section explains the capabilities and challenges of such transcription services relevant to the paper's evaluation.

*How the paper uses it:* The paper evaluates Amazon Transcribe for doctor-patient audio transcription with a 15.6% word error rate.

▶ [AWS re:Invent 2019: [NEW LAUNCH!] Amazon Transcribe Medical: Transforming Healthcare w/ AI (AIM210)](https://www.youtube.com/watch?v=W_fDlbFlf14) — AWS Events · 42:46 · 6 years ago

### cloud-based clinical data registries
This section focuses on the central concept of the paper: using cloud platforms to manage clinical data registries. It covers the design, benefits, and challenges of cloud-based registries for healthcare data management and analytics.

*How the paper uses it:* The paper presents CPOP, a cloud-based platform for clinical data registries with patient and doctor interfaces.

▶ [Sources of RWD: An Introduction to Patient Registries](https://www.youtube.com/watch?v=mus4ig5O4eM) — nhcouncil · 47:35 · 5 years ago

### CPOP cloud clinical data platform talk *(the paper's own talk)*
The authors' own talk provides the most direct and detailed explanation of the CPOP system, including its architecture, implementation, and evaluation results. Watching this talk offers insights straight from the creators, complementing the paper's content.

*How the paper uses it:* This is the authors' own presentation explaining their system design and results for CPOP-CRS.

▶ [Overcoming Barriers: Capturing Clinical Data Using the Cloud](https://www.youtube.com/watch?v=L_Vds1YWCWs) — Executives for Health Innovation · 3 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces foundational cloud computing concepts and security compliance before focusing on specialized healthcare cloud architectures and serverless AWS Lambda functions. It then covers medical audio transcription technology and concludes with the core concept of cloud-based clinical data registries as applied in the paper. This order builds intuition step-by-step, enabling a clear understanding of how the paper's CPOP platform leverages cloud technologies for clinical data management.

### cloud computing architecture for healthcare *(prerequisite)*
Start by understanding the basics of cloud computing architecture, including how cloud systems are designed for scalability, reliability, and security. This foundation is essential to grasp how healthcare data platforms operate in the cloud.

*How the paper uses it:* The paper builds on cloud architecture principles to design a scalable and secure platform for clinical data registries.

▶ [Cloud Adoption Essentials: Cloud Architecture Basics](https://www.youtube.com/watch?v=pM45hWKia5o) — A Cloud Guru · 15:39 · 5 years ago

### HIPAA compliance cloud security *(prerequisite)*
Learn about HIPAA regulations and how cloud security practices ensure the privacy and protection of sensitive medical data. This knowledge is critical for understanding the security design of clinical data systems.

*How the paper uses it:* The paper emphasizes HIPAA-compliant security architecture to protect patient data in the cloud.

▶ [HIPAA Rules and Compliance Training Video](https://www.youtube.com/watch?v=CRQwUlXMoqM) — SafetyVideos.com · 7 years ago

### serverless architectures AWS Lambda *(prerequisite)*
Explore serverless computing with AWS Lambda, which allows running backend code without managing servers, enabling scalable and cost-efficient cloud applications. This concept underpins the paper's backend API implementation.

*How the paper uses it:* The paper uses AWS Lambda and API Gateway to implement serverless, scalable backend services for CPOP.

▶ [Introduction to AWS Lambda - Serverless Compute on Amazon Web Services](https://www.youtube.com/watch?v=eOBq__h4OJ4) — Amazon Web Services · 11 years ago

### medical audio transcription Amazon Transcribe *(prerequisite)*
Understand how Amazon Transcribe converts spoken medical conversations into text, a key feature for capturing doctor-patient interactions. This helps appreciate the challenges and performance metrics discussed in the paper.

*How the paper uses it:* The paper evaluates Amazon Transcribe's accuracy in transcribing clinical audio with a 15.6% word error rate.

▶ [AWS re:Invent 2019: [NEW LAUNCH!] Amazon Transcribe Medical: Transforming Healthcare w/ AI (AIM210)](https://www.youtube.com/watch?v=W_fDlbFlf14) — AWS Events · 42:46 · 6 years ago

### cloud-based clinical data registries
Learn what clinical data registries are and how cloud platforms enable centralized, scalable management of patient data for research and care improvement. This concept is central to the paper's contribution.

*How the paper uses it:* The paper presents CPOP, a cloud-based platform for managing clinical data registries focused on Chronic Rhinosinusitis.

▶ [What is a clinical data registry?](https://www.youtube.com/watch?v=xFfwCXe0iWo) — American Academy of Otolaryngology—Head and Neck Surgery · 10 years ago

### CPOP cloud clinical data platform talk *(the paper's own talk)*
Finally, watch a focused talk on cloud technologies applied to healthcare solutions, providing insight into the system design and results similar to those in the paper. This consolidates understanding of the paper's core platform.

*How the paper uses it:* This talk aligns with the paper's presentation of the CPOP platform and its application to clinical data registries.

▶ [Overcoming Barriers: Capturing Clinical Data Using the Cloud](https://www.youtube.com/watch?v=L_Vds1YWCWs) — Executives for Health Innovation · 3 years ago

## Already in your library

- [Medical Transcription Analysis with Machine Learning - Doctor/Patient Conversation Demo](https://www.youtube.com/watch?v=f5HVIALG5g4) — also for: Leveraging the Cloud for Intelligent Clinical Data Registries (Marty A. Humphrey)
