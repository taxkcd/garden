---
title: "013 · Leveraging the Cloud for Intelligent Clinical Data Registries — Marty A. Humphrey"
date: 2026-07-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-humphrey-html"
source_hash: "5cfdaec305e2fd6ee1f05f6180a7e3166e857c377eb7959b73ce71a56e532245"
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

To deeply understand the paper 'Leveraging the Cloud for Intelligent Clinical Data Registries,' start with foundational knowledge on HIPAA-compliant cloud security and serverless computing with AWS Lambda, as these are critical for secure, scalable clinical data platforms. Next, explore the challenges of medical audio transcription to grasp the limitations and improvements needed for the paper's transcription feature. Finally, focus on the core concept of cloud-based clinical data registries, emphasizing the authors' own talk to gain direct insights into their system design and implementation.

## Recommended videos (in order)

### HIPAA compliant cloud security *(prerequisite)*
Understanding HIPAA compliance in cloud environments is essential for grasping the privacy and regulatory requirements that underpin the secure handling of clinical data in CPOP. This section covers the necessary security frameworks and best practices for healthcare data in the cloud.

*How the paper uses it:* Security and privacy are central to the system design, complying with HIPAA standards.

▶ [HIPAA Compliance in the Cloud with AWS for Healthcare Organizations | DevCom](https://www.youtube.com/watch?v=mGLWgP5_Zpw) — DevCom · 6 years ago

### Serverless computing AWS Lambda lecture *(prerequisite)*
Serverless computing, particularly AWS Lambda, is a key technology used in the paper's backend architecture for scalable and efficient API management. This section explains the serverless paradigm and contrasts it with traditional server-based approaches.

*How the paper uses it:* The paper uses AWS Lambda and API Gateway for serverless APIs in the platform architecture.

▶ [Lec-29 : What is Serverless? | AWS Lambda vs EC2 | Serverless Vs Server Based](https://www.youtube.com/watch?v=SDt36JcxTW4) — Gate Smashers · 9:08 · 1 year ago

### Medical audio transcription challenges *(prerequisite)*
This section addresses the technical challenges and current state of medical audio transcription, which is critical for understanding the paper's evaluation of Amazon Transcribe and its limitations in clinical settings.

*How the paper uses it:* The paper evaluates Amazon Transcribe for doctor-patient audio transcription with a 15.6% word error rate.

▶ [Medical Transcription Analysis with Machine Learning - Doctor/Patient Conversation Demo](https://www.youtube.com/watch?v=f5HVIALG5g4) — Amazon Web Services · 5:27 · 5 years ago

### Cloud-based clinical data registries architecture
Central to the paper is the design of scalable, secure cloud platforms for managing clinical data registries. This section provides architectural insights and design patterns relevant to building such systems, complementing the paper's contributions.

*How the paper uses it:* The paper presents CPOP, a scalable cloud architecture for clinical data registries.

▶ [Scalable Patient Data Curation with AI](https://www.youtube.com/watch?v=HPEZWk8o7wE) — John Snow Labs – Healthcare AI Company · 19:22
