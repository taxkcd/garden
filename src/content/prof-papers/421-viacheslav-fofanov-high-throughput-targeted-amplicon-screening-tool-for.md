---
title: "421 · High-throughput targeted amplicon screening tool for characterizing intrahost diversity in Staphylococcus aureus directly from sample — Viacheslav Fofanov"
date: 2026-08-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-viacheslav-fofanov"
source_hash: "b6be9afe4fdb0fff999ca0a86939a5a241941dd3eb14eca25c900105219642a0"
sequence: 421
generator: "outreach-garden: managed"
---

# 421 · High-throughput targeted amplicon screening tool for characterizing intrahost diversity in Staphylococcus aureus directly from sample

## At a glance

- **Professor:** Viacheslav Fofanov
- **Institution:** Northern Arizona University
- **Paper:** [High-throughput targeted amplicon screening tool for characterizing intrahost diversity in Staphylococcus aureus directly from sample](https://doi.org/10.1099/mgen.0.001427)
- **Authors:** Tara N. Furstenau, Ryann Whealy, Skylar Timm, Alexander Roberts, Sara Maltinsky, Sydney J. Wells, Kylie Drake, Ann Ross, Candice Bolduc, Talima Pearson, Viacheslav Y. Fofanov
- **Year:** 2025

## Paper overview

This study developed a cost-effective, high-throughput amplicon sequencing assay to directly characterize the genetic diversity of Staphylococcus aureus strains within hosts from samples without culturing. The method enables tracking of strain diversity, detection of multiple strains, and identification of transmission and reservoirs, providing a scalable alternative to whole-genome sequencing for large epidemiological studies.

### Why it matters

**Research problem:** Characterizing the intrahost genetic diversity and transmission dynamics of Staphylococcus aureus is challenging due to the need for labor-intensive, costly whole-genome sequencing of multiple colonies from multiple body sites over time.

**Why it matters:** Staphylococcus aureus colonization is dynamic and linked to opportunistic infections and transmission. Understanding strain diversity, reservoirs, and transmission pathways is critical for infection control and treatment strategies, especially given antibiotic resistance concerns.

**Key contributions:**

- Designed a species-specific multiplexed AmpSeq assay targeting 27 genomic loci for high-resolution strain differentiation.
- Demonstrated that the AmpSeq phylogeny closely approximates whole-genome SNP phylogeny and outperforms MLST in resolution.
- Applied the assay to longitudinal nasal and oral samples from long-term care facility residents to characterize strain diversity and dynamics.
- Showed stability of colonizing strains and persistence of low-frequency variants over up to 18 weeks within individuals.
- Provided evidence that nasal populations harbor greater diversity and likely serve as reservoirs seeding oral populations.

## About the professor

**Viacheslav Fofanov** — Professor, Biological Sciences, Northern Arizona University.

Research interests: Microbiome Research, Bioinformatics Education, Research Software Engineering, Automating Bioinformatics

### Research links

- [Faculty/profile page](https://experts.nau.edu/en/persons/viacheslav-fofanov/)
- [Identity evidence](https://directory.nau.edu/person/vyf2)
- [Professor website](https://caporasolab.us/)
- [Resolved homepage](https://cap-lab.us)
- [Google Scholar](https://scholar.google.com/citations?hl=en&user=8wv9sLkAAAAJ)
- [GitHub](https://www.github.com/qiime2)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** genomic sequence analysis
**The paper assumes:** fundamentals of DNA sequencing technologies, sequence alignment, variant calling, phylogenetic tree construction, and microbial genomics
**Already in this field?** Skip this entirely if you already understand the basics of DNA sequencing data analysis and microbial genomic variation.

This background playlist selection is designed to equip readers with foundational and practical knowledge in genomic sequence analysis, essential for understanding targeted amplicon sequencing, SNP phylogeny, and variant detection in bacterial populations like Staphylococcus aureus. The rigorous course offers a deep, university-level lecture series for comprehensive understanding, while the fast track provides a concise, practical introduction to whole genome sequencing and bioinformatics workflows, ideal for quickly grasping key concepts and methods relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [MIT HST.508 Genomics and Computational Biology, Fall 2002](https://www.youtube.com/playlist?list=PLUl4u3cNGP61gaHWysmlYNeGsuUI8y5GV) — MIT OpenCourseWare · 21 videos · 18.4h across 21 episodes

**Watch only this:** Episodes 3A and 3B: 'DNA 1: Genome Sequencing, Polymorphisms, Populations, Statistics, Pharmacogenomics' (about 1.75 hours total) — these provide essential background on genome sequencing technologies, SNPs, and population-level genetic variation relevant to the assay design and analysis.

*Why it unblocks this paper:* MIT's HST.508 Genomics and Computational Biology course covers core concepts in genome sequencing, polymorphisms, population genetics, and computational methods that directly underpin the analysis of targeted amplicon sequencing data and phylogenetic inference used in this paper.

*If you want all of it:* All 21 episodes, approximately 18.4 hours.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Whole Genome Sequencing (WGS) from Raw Reads to Biological Insights](https://www.youtube.com/playlist?list=PLAlmIKxaq4ow) — BioGenOvo · 8 videos · 1.3h across 8 episodes

**Watch only this:** Episodes 1-4: 'Introduction to Next Generation Sequencing NGS', 'First Generation DNA Sequencing Sanger Sequencing Explained', 'Second Generation Sequencing NGS Explained Illumina Technology', and 'Third Generation DNA Sequencing Explained Nanopore' (about 36 minutes total) — these cover sequencing technologies and principles relevant to the paper's methods.

*Why it unblocks this paper:* The BioGenOvo 'Whole Genome Sequencing (WGS) from Raw Reads to Biological Insights' playlist offers a clear, step-by-step introduction to sequencing technologies and bioinformatics workflows, including quality control and alignment, which are foundational for understanding amplicon sequencing data processing and interpretation in this study.

*If you want all of it:* All 8 episodes, approximately 1.3 hours.

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand this paper on a high-throughput targeted amplicon sequencing assay for Staphylococcus aureus intrahost diversity, start by building foundational knowledge on bacterial intrahost genetic diversity, phylogenetic analysis of bacterial populations, whole-genome sequencing for pathogen epidemiology, and PCR amplification errors affecting variant detection. These prerequisites provide the biological, analytical, and technical context necessary to appreciate the assay's design and application. Finally, focus on the core concept of multiplexed targeted amplicon sequencing, including the authors' own talk if available, to grasp the novel assay methodology and its implications.

### Bacterial intrahost genetic diversity *(prerequisite)*
Understanding the complexity of genetic variation within bacterial populations inside a single host is crucial for interpreting how multiple strains coexist, evolve, and transmit. This section covers the biological basis and significance of intrahost diversity in pathogens like Staphylococcus aureus.

*How the paper uses it:* The paper characterizes intrahost diversity of S. aureus strains directly from samples, making this foundational knowledge essential.

▶ [SBS Science Retreat "The effect of host genetic diversity and environment on pathogen outbreaks"](https://www.youtube.com/watch?v=MEVK3eY-z_o) — School of Biological Sciences, University of Utah · 35:49 · 5 years ago

### Phylogenetic analysis of bacterial populations *(prerequisite)*
Phylogenetic methods are key to reconstructing evolutionary relationships among bacterial strains and understanding transmission patterns. This section introduces how to build and interpret phylogenetic trees, with examples relevant to S. aureus.

*How the paper uses it:* The paper compares AmpSeq phylogeny to whole-genome SNP phylogeny and MLST, relying on phylogenetic analysis to resolve strain relationships.

▶ [1. Phylogenetic analysis of pathogens(lecture - part1) -](https://www.youtube.com/watch?v=t1vAhQvukRY) — The Roslin Institute - Training · 7:18 · 11 years ago

### Whole-genome sequencing for pathogen epidemiology *(prerequisite)*
Whole-genome sequencing (WGS) is the benchmark for high-resolution strain typing and transmission confirmation in pathogen epidemiology. This section explains WGS technologies and their application in tracking bacterial outbreaks and diversity.

*How the paper uses it:* The paper uses WGS as a comparison standard to validate the resolution and accuracy of the AmpSeq assay.

▶ [2019 CCS Symposium: Dr Kelly Wyres - Whole genome sequencing in the battle against the superbugs](https://www.youtube.com/watch?v=DV4DF7DQn7E) — Translational Medicine, Monash University · 20:23 · 6 years ago

### PCR amplification errors and variant detection *(prerequisite)*
PCR amplification can introduce errors that complicate detection of rare variants, a critical consideration when interpreting low-frequency alleles in sequencing data. This section covers PCR principles and error sources relevant to variant calling.

*How the paper uses it:* The paper discusses PCR-induced artefacts as a limitation affecting rare variant detection in their AmpSeq assay.

▶ [PCR | Polymerase Chain Reaction | Video 3](https://www.youtube.com/watch?v=jIpsma2gwVE) — PoWer Of KnOwledge Academy · 13:55 · 4 years ago

### Multiplexed targeted amplicon sequencing
This core concept explains the methodology of multiplexed targeted amplicon sequencing, which enables simultaneous amplification and sequencing of multiple genomic loci for high-resolution strain differentiation without culturing. Understanding this technique is central to grasping the paper's novel assay.

*How the paper uses it:* The paper's main contribution is the development and application of a multiplexed AmpSeq assay targeting 27 loci in S. aureus.

▶ [rhAmpSeq™ CRISPR: Multiplexed Amplicon Sequencing & Analysis](https://www.youtube.com/watch?v=S3sxzvX-YVI) — NMIN NCE · 45:54 · 5 years ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This beginner-to-advanced path introduces key concepts to understand the paper's development of a high-throughput amplicon sequencing assay for characterizing Staphylococcus aureus diversity. We start with foundational knowledge of bacterial genetic diversity and phylogenetic analysis, then cover whole-genome sequencing as a benchmark method, PCR amplification and its errors, and multiplexed targeted amplicon sequencing as the core method enabling the study. This order builds intuition from basic microbial genetics to the specific sequencing techniques used in the paper.

### Bacterial intrahost genetic diversity *(prerequisite)*
Learn how bacterial populations vary genetically within a single host, which is crucial for understanding infection dynamics and evolution. This concept explains why detecting multiple strains and variants matters for tracking infections and treatment.

*How the paper uses it:* The paper focuses on characterizing the genetic diversity of Staphylococcus aureus strains within individual hosts over time.

▶ [Genetic Diversity in Prokaryotes | Ecology, Biodiversity & Evolution-II |  BT201_Topic005](https://www.youtube.com/watch?v=BvyV056i_wI) — Virtual University of Pakistan · 4:53 · 1 year ago

### Phylogenetic analysis of bacterial populations *(prerequisite)*
Understand how scientists build and interpret evolutionary trees to reveal relationships between bacterial strains. This helps in tracking transmission and strain differentiation.

*How the paper uses it:* The paper compares phylogenies from the AmpSeq assay to whole-genome SNP trees to validate strain resolution.

▶ [1. Phylogenetic analysis of pathogens(lecture - part1) -](https://www.youtube.com/watch?v=t1vAhQvukRY) — The Roslin Institute - Training · 7:18 · 11 years ago

### Whole-genome sequencing for pathogen epidemiology *(prerequisite)*
Whole-genome sequencing (WGS) provides the most detailed genetic information about pathogens and is the gold standard for confirming transmission and strain differences. Understanding WGS sets the context for why the paper develops a cost-effective alternative.

*How the paper uses it:* The paper benchmarks its AmpSeq assay against WGS to demonstrate comparable resolution at lower cost and effort.

▶ [Whole Genome Sequence Analysis | Bacterial Genome Analysis | Bioinformatics 101 for Beginners](https://www.youtube.com/watch?v=S_sRo_85jhs) — Bioinformatics Coach · 1:01:21 · 5 years ago

### PCR amplification errors and variant detection *(prerequisite)*
PCR is used to amplify DNA but can introduce errors that complicate detecting true rare genetic variants. Knowing this helps interpret the limitations of variant calls in sequencing assays.

*How the paper uses it:* The paper discusses PCR-induced errors as a limitation affecting rare variant detection in their AmpSeq assay.

▶ [PCR | Polymerase Chain Reaction | Video 3](https://www.youtube.com/watch?v=jIpsma2gwVE) — PoWer Of KnOwledge Academy · 13:55 · 4 years ago

### Multiplexed targeted amplicon sequencing
This method amplifies multiple specific DNA regions simultaneously to efficiently capture genetic variation without culturing bacteria. It enables high-throughput, cost-effective strain typing.

*How the paper uses it:* The core method developed in the paper is a multiplexed AmpSeq assay targeting 27 genomic loci for high-resolution strain differentiation.

▶ [Multiplex PCR explained](https://www.youtube.com/watch?v=8hTAsmk0nOE) — Shomu's Biology · 5:42 · 2 years ago

## Already in your library

- [NGS Explained: Next Generation Sequencing Step-by-Step](https://www.youtube.com/watch?v=WKAUtJQ69n8) — also for: SISTEM: simulation of tumor evolution, metastasis, and DNA-seq data under genotype-driven selection (Mukul S. Bansal)
- [Intro to Cladograms and Phylogenetic Trees](https://www.youtube.com/watch?v=cIQobFHFwcM) — also for: Exact Algorithms for No-Rainbow Coloring and Phylogenetic Decisiveness (David Fernández-Baca)
- [Creating a Phylogenetic Tree](https://www.youtube.com/watch?v=09eD4A_HxVQ) — also for: Exact Algorithms for No-Rainbow Coloring and Phylogenetic Decisiveness (David Fernández-Baca)


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of the paper's development and application of a multiplexed targeted amplicon sequencing (AmpSeq) assay for characterizing Staphylococcus aureus intrahost diversity. The beginner project reproduces a key metric comparing AmpSeq with MLST phylogenies using public tools. The intermediate project implements the core AmpSeq assay concept on a subset of publicly available sequencing data to characterize strain diversity and compare resolution with MLST. The advanced project extends the method to address PCR artefact limitations by simulating molecular barcoding and evaluating its impact on rare variant detection, aligning with the paper's future directions.

### Beginner — Phylogenetic Tree Comparison of AmpSeq and MLST on S. aureus Reference Genomes
*Effort: a weekend, ~8 hours*

You build a pipeline to download a set of Staphylococcus aureus reference genomes, extract MLST loci, and simulate AmpSeq loci by selecting 27 discriminatory genomic regions. Then you generate phylogenetic trees from both MLST and AmpSeq loci and compare their topologies using Robinson-Foulds distance to reproduce the paper's claim that AmpSeq provides higher resolution than MLST.

**Why it shows you understood the paper:** This project shows you understand the core comparative phylogenetic approach used in the paper to validate the AmpSeq assay's resolution advantage over MLST, including the use of SNP-based tree metrics.

**Grounded in:** AmpSeq tree topology largely preserved major phylogenetic groups seen in core genome SNP tree with higher resolution than MLST.

**Tech stack:** Python 3.11, Biopython, scikit-bio, ncbi-genome-download (third-party tool)

**Data:** A set of 961 S. aureus reference genomes downloaded from NCBI RefSeq using the ncbi-genome-download tool as cited in the paper.

**Build it:**

1. Use ncbi-genome-download to download complete S. aureus genomes from RefSeq.
2. Extract MLST loci sequences from each genome using known MLST allele definitions.
3. Simulate AmpSeq loci extraction by selecting 27 genomic regions described in the paper (approximate coordinates).
4. Construct multiple sequence alignments for MLST and AmpSeq loci separately.
5. Build phylogenetic trees from both alignments using a suitable method (e.g., neighbor-joining or maximum likelihood).
6. Calculate Robinson-Foulds distances between the MLST and AmpSeq trees to compare topologies.

**Verified links from the paper:**

- <https://github.com/kblin/ncbi-genome-download> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with scripts and a README showing phylogenetic trees, RF distance calculations, and a summary demonstrating AmpSeq's improved resolution over MLST.

**Stretch goal:** Add a visualization comparing the AmpSeq and MLST trees side-by-side with annotated major phylogenetic groups.

### Intermediate — Reimplementation of AmpSeq Assay on Public S. aureus Amplicon Data with MLST Comparison
*Effort: 1-3 weekends, ~20 hours*

You reimplement the core multiplexed targeted amplicon sequencing assay by processing publicly available amplicon sequencing reads from the paper's BioProject PRJNA1166327. You perform variant calling on the 27 targeted loci, reconstruct strain genotypes, and compare strain resolution and diversity metrics against MLST results derived from the same samples.

**Why it shows you understood the paper:** This project demonstrates your ability to apply the paper's core method on real sequencing data, reproducing key analyses of strain diversity and assay resolution, and understanding the bioinformatics pipeline from raw reads to phylogenetic inference.

**Grounded in:** Developed a custom multiplexed targeted amplicon sequencing (AmpSeq) assay targeting 27 highly discriminatory genomic regions of S. aureus optimized for species specificity and high resolution; AmpSeq tree topology largely preserved major phylogenetic groups seen in core genome SNP tree with higher resolution than MLST.

**Tech stack:** Python 3.11, FastAPI (optional for API wrapper), Biopython, pysam, scikit-bio, samtools, bcftools

**Data:** Amplicon sequencing reads from the long-term care facility samples deposited in NCBI SRA under BioProject PRJNA1166327.

**Build it:**

1. Download amplicon sequencing reads from PRJNA1166327 using SRA Toolkit.
2. Perform quality control and trimming of reads.
3. Align reads to the S. aureus reference genome (NCTC 8325) focusing on the 27 targeted loci.
4. Call variants within these loci using samtools and bcftools.
5. Reconstruct strain genotypes based on variant profiles across loci.
6. Obtain MLST sequence types from the same samples using the mlst tool.
7. Compare phylogenetic trees and diversity metrics derived from AmpSeq genotypes and MLST sequence types.

**Ships as:** A GitHub repo with scripts and a detailed README documenting the pipeline, variant calls, phylogenetic comparisons, and a report showing AmpSeq's improved resolution over MLST on real data.

**Stretch goal:** Incorporate a simple visualization dashboard to explore variant frequencies and strain dynamics longitudinally across samples.

### Advanced — Simulation and Evaluation of Molecular Barcoding to Reduce PCR Artefacts in AmpSeq Rare Variant Detection
*Effort: few weeks, ~40+ hours*

You develop a simulation framework to model PCR amplification errors in targeted amplicon sequencing and implement molecular barcoding strategies to reduce artefacts. You simulate amplicon sequencing data with and without barcoding, apply variant calling pipelines, and evaluate the impact on detection accuracy of low-frequency variants, addressing a key limitation noted in the paper.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of the paper by extending the AmpSeq method to incorporate molecular barcoding, demonstrating deep understanding of PCR error sources and advanced bioinformatics techniques to improve rare variant detection.

**Grounded in:** PCR amplification can introduce errors, complicating rare variant detection; no technical replicates or molecular barcoding were used to fully control for artefacts; future directions include refining methods to reduce PCR artefacts, possibly incorporating molecular barcoding.

**Tech stack:** Python 3.11, NumPy, pandas, scikit-learn, Biopython, matplotlib, seaborn

**Data:** Simulated amplicon sequencing reads generated in silico to model PCR errors and molecular barcoding effects; no real sequencing data required.

**Build it:**

1. Develop a simulation model for PCR amplification introducing random errors at rates consistent with literature.
2. Simulate amplicon sequencing reads for targeted loci with and without molecular barcodes tagging original DNA molecules.
3. Implement a variant calling pipeline that uses barcode information to collapse reads and reduce PCR-induced errors.
4. Compare variant detection accuracy and false positive rates between barcoded and non-barcoded simulated data.
5. Visualize the impact of molecular barcoding on rare variant detection sensitivity and specificity.
6. Write a detailed report discussing implications for improving AmpSeq assay reliability.

**Ships as:** A GitHub repo with simulation code, analysis notebooks, and a comprehensive README explaining the methodology, results, and recommendations for incorporating molecular barcoding in AmpSeq assays.

**Stretch goal:** Extend the simulation to model mixed-strain co-colonization scenarios and evaluate barcoding impact on detecting minor strain alleles.
