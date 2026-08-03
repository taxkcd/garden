---
title: "163 · An integrated, scaled approach to resolve TSC2 variants of uncertain significance — Predrag Radivojac"
date: 2026-08-03
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-predrag-radivojac"
source_hash: "056e216991690c35fe8500a2137758618096e7a688b8ee3a5bec7782c39e53ad"
sequence: 163
generator: "outreach-garden: managed"
---

# 163 · An integrated, scaled approach to resolve TSC2 variants of uncertain significance

## At a glance

- **Professor:** Predrag Radivojac
- **Institution:** Northeastern University
- **Paper:** [An integrated, scaled approach to resolve TSC2 variants of uncertain significance](https://doi.org/10.1038/s41467-026-75442-6)
- **Authors:** Carina G. Biar, Ziyu R. Wang, Nathan D. Camp, Daniel L. Holmes, Melinda K. Wheelock, Sriram Pendyala, Abby V. McGee, Pankhuri Gupta, Abbye E. McEwen, Malvika Tejura, Marcy E. Richardson, Jamie D. Weyandt, Taylor Coleman, Alan F. Rubin, Nick Moore, Ross Stewart, Daniel Zeiberg, Allyssa J. Vandi, Samantha Dawson, Predrag Radivojac, Lea M. Starita, Gemma L. Carvill, Richard G. James, Douglas M. Fowler, Jeffrey D. Calhoun
- **Year:** 2026

## Paper overview

This study developed high-throughput assays to measure the effects of thousands of TSC2 gene variants on protein abundance and activity, enabling reclassification of many uncertain variants. This improves genetic diagnosis of tuberous sclerosis complex (TSC), a disorder caused by TSC2 mutations, and can guide clinical management and treatment.

### Why it matters

**Research problem:** Many missense variants in the TSC2 gene are classified as variants of uncertain significance (VUS), making genetic diagnosis of tuberous sclerosis complex challenging due to insufficient evidence to determine their pathogenicity or benignity.

**Why it matters:** Accurate classification of TSC2 variants is critical for confirming TSC diagnosis, enabling precision treatments such as mTOR inhibitors, informing clinical management, family planning, and participation in clinical trials.

**Key contributions:**

- Developed high-throughput VAMP-seq assay measuring steady-state abundance of 8,864 TSC2 missense variants.
- Developed two genome editing-based assays (SGE and cliPE) measuring mTORC1 activity via pS6 phosphorylation for 391 missense variants.
- Demonstrated strong correlation between variant effects on abundance and activity, with some variants affecting activity but not abundance.
- Calibrated functional data using OddsPath framework to assign evidence strength for variant classification.
- Created a decision tree combining abundance and activity data to guide ACMG/AMP variant classification.

## About the professor

**Predrag Radivojac** — Professor, Associate Dean for Research, Khoury College of Computer Sciences, Northeastern University.

Research interests: Computational biology, Machine learning

### Research links

- [Faculty/profile page](https://www.khoury.northeastern.edu/people/predrag-radivojac/)
- [Identity evidence](https://www.ccis.northeastern.edu/people/predrag-radivojac)

## Learning path

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the integrated, scaled approach for resolving TSC2 variants of uncertain significance, start by building foundational knowledge on genome editing techniques and mTOR pathway signaling, which are critical for the functional assays used in the study. Next, explore the key assay measuring protein abundance (VAMP-seq) to grasp how variant effects on protein levels are quantified. Finally, focus on the core concept of multiplexed assays of variant effect (MAVEs) and the authors' own talk to appreciate the integrated methodology and its impact on variant classification.

### Genome editing based functional assays *(prerequisite)*
Understanding CRISPR-Cas9 genome editing technology is essential as it forms the basis for the SGE and cliPE assays used in this study to measure TSC2 variant effects on mTOR pathway activity. These assays rely on precise genome editing combined with functional readouts, so a solid grasp of genome editing principles and challenges is foundational.

*How the paper uses it:* The study uses genome editing-based assays (SGE and cliPE) to measure TSC2 activity via mTOR pathway signaling.

▶ [Genome Editing with CRISPR-Cas9](https://www.youtube.com/watch?v=2pp17E4E-O8) — McGovern Institute · 4:13

### mTOR pathway signaling and TSC2 function *(prerequisite)*
A detailed understanding of the mTOR signaling pathway and TSC2's role within it is critical for interpreting how variants affect protein function and downstream signaling. This biological context helps explain why certain variants impact mTORC1 activity and how this relates to tuberous sclerosis complex pathology.

*How the paper uses it:* The functional assays measure mTOR pathway activity to assess TSC2 variant effects relevant to disease.

▶ [ITSCRC2021: Growth control by the TSC-mTOR pathway and ...](https://www.youtube.com/watch?v=D0U744fTjQM) — Tuberous Sclerosis Association TSA · 11:49

### Multiplexed assays of variant effect
Multiplexed assays of variant effect (MAVEs) are central to the paper's methodology, enabling simultaneous functional characterization of thousands of variants. Learning about MAVEs provides insight into the high-throughput experimental and computational strategies that underpin the integrated variant classification approach.

*How the paper uses it:* The study uses MAVEs including VAMP-seq, SGE, and cliPE to functionally characterize TSC2 variants at scale.

▶ [MSS 2024 Day 1 Talk 05 Jeffrey Calhoun](https://www.youtube.com/watch?v=BRmVPsm1K7Y) — Variant Effects · 18:26

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces the biological and technical foundations needed to understand how the paper functionally characterizes TSC2 gene variants. It starts with the biological context of the mTOR pathway and TSC2's role, then explains genome editing techniques foundational to the assays used, followed by the specific protein abundance assay (VAMP-seq). Finally, it covers multiplexed assays of variant effect (MAVEs), the core method enabling high-throughput functional assessment of thousands of variants.

### mTOR pathway signaling and TSC2 function *(prerequisite)*
Learn the biological role of the mTOR signaling pathway and how TSC2 regulates cell growth and metabolism through this pathway. Understanding this provides the disease context and why measuring TSC2 activity is critical.

*How the paper uses it:* The paper measures TSC2 variant effects on mTOR pathway activity to assess pathogenicity.

▶ [mTOR Signaling Pathway: mTOR Complexes, Regulation and Downstream effects](https://www.youtube.com/watch?v=-2pXbSpDPQE) — JJ Medicine · 18:38 · 9 years ago

### Genome editing based functional assays *(prerequisite)*
Understand CRISPR-Cas9 genome editing technology, which enables precise modification of DNA to study gene function. This knowledge is essential to grasp how the paper's SGE and cliPE assays measure TSC2 activity in cells.

*How the paper uses it:* The paper uses genome editing-based assays (SGE and cliPE) to measure functional effects of TSC2 variants on mTOR activity.

▶ [Genome Editing with CRISPR-Cas9](https://www.youtube.com/watch?v=2pp17E4E-O8) — McGovern Institute · 4:13

### Multiplexed assays of variant effect
Multiplexed assays of variant effect (MAVEs) enable simultaneous functional testing of thousands of genetic variants, providing large-scale data to interpret variant pathogenicity. This approach integrates multiple functional readouts for comprehensive variant classification.

*How the paper uses it:* The paper integrates VAMP-seq and genome editing assays as MAVEs to classify TSC2 variants under clinical guidelines.

▶ [Revolutionizing Variant Curation with MAVEs (multiplexed ...](https://www.youtube.com/watch?v=unDAF_wfNFk) — DNA Today · 34:57

### Paper authors talk *(the paper's own talk)*
Gain direct insight from experts on the challenges of classifying variants of uncertain significance and the integrated approach developed to resolve TSC2 variants. This contextualizes the study's impact on genetic diagnosis and clinical management.

*How the paper uses it:* The paper addresses the clinical challenge of TSC2 VUS classification and presents a scalable functional solution.

▶ [What is a Variant of Uncertain Significance (VUS)? | Dana-Farber Cancer Institute](https://www.youtube.com/watch?v=hogQTrqgPnE) — Dana-Farber Cancer Institute · 8 years ago
