---
title: "362 · FASTR: Reimagining FASTQ via Compact Image-inspired Representation — Alex Zelikovsky"
date: 2026-08-11
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-alex-zelikovsky"
source_hash: "16e01723c352e4e57ba6fb38440b61e69b8109191b8da054b83b44595730d3fd"
sequence: 362
generator: "outreach-garden: managed"
---

# 362 · FASTR: Reimagining FASTQ via Compact Image-inspired Representation

## At a glance

- **Professor:** Alex Zelikovsky
- **Institution:** Georgia State University
- **Paper:** [FASTR: Reimagining FASTQ via Compact Image-inspired Representation](https://arxiv.org/pdf/2601.17184)
- **Authors:** Adrian Tkachenko, Sepehr Salem, Ayotomiwa Ezekiel Adeniyi, Zülal Bingöl, Mohammed Nayeem Uddin, Akshat Prasanna, Alexander Zelikovsky, Serghei Mangul, Can Alkan, Mohammed Alser
- **Year:** 2026

## Paper overview

FASTR is a new file format designed to efficiently store and process DNA sequencing data by encoding nucleotide bases and their quality scores into a single byte, reducing file sizes by at least half compared to the traditional FASTQ format. It supports faster compression and decompression, is compatible with existing analysis tools, and facilitates real-time and machine learning applications.

### Why it matters

**Research problem:** The standard FASTQ format for storing high-throughput sequencing data is inefficient due to large file sizes, redundant metadata, and slow parsing caused by storing one byte per base and one byte per quality score, leading to bottlenecks in storage, transfer, and analysis.

**Why it matters:** Sequencing technologies generate massive datasets (tens of petabases) that continue to grow exponentially, outpacing computational advances. Efficient storage and fast processing are critical for scalable genomic analyses, real-time sequencing workflows, and downstream applications such as population-scale genomics and metagenomics.

**Key contributions:**

- Introduction of FASTR, a lossless, computation-native successor to FASTQ encoding bases and quality scores into single 8-bit values.
- Novel implicit partitioned range encoding scheme that achieves over 2× file size reduction while preserving all information.
- Design of a flexible FASTR file header capturing essential sequencing metadata and eliminating redundant read headers.
- Development of a highly parallel software ecosystem for FASTQ–FASTR conversion supporting multiple modes.
- Demonstration of FASTR's compatibility with existing tools like minimap2 with minimal interface changes and no performance overhead.

## About the professor

**Alex Zelikovsky** — College of Arts & Sciences, Georgia State University.

Research interests: Discrete algorithms, VLSI CAD, combinatorial optimization, computational geometry, computational biology, graph theory

### Research links

- [Faculty/profile page](https://cas.gsu.edu/profile/alex-zelikovsky)
- [Identity evidence](http://cs.gsu.edu/profile/alex-zelikovsky)
- [Resolved homepage](https://cas.gsu.edu/profile/alex-zelikovsky/)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** data compression algorithms
**The paper assumes:** data compression algorithms, entropy coding, range encoding, lossless compression techniques
**Already in this field?** Skip this entirely if you already understand lossless data compression methods and entropy coding principles.

This background focuses on data compression algorithms, essential for understanding the novel implicit partitioned range encoding scheme used in FASTR to efficiently encode nucleotide bases and quality scores. The rigorous course provides a deep theoretical and practical foundation in lossless data compression, while the fast track offers a concise, intuition-driven introduction to key compression algorithms, suitable for quickly grasping the core concepts relevant to the paper.

### The course
_Rigorous, and the one to pick if you want to hold this material properly._

▶ [Stanford EE274 I Data Compression: Theory and Applications I 2023](https://www.youtube.com/playlist?list=PLoROMvodv4rPj4uhbgUAaEKwNNak8xgkz) — Stanford Online · 18 videos · 23.7h across 18 episodes

**Watch only this:** Lectures 1 through 7, about 9 hours — covering lossless compression basics, prefix codes, entropy, Huffman codes, arithmetic coding, and ANS, which are foundational to grasping the paper's encoding innovations.

*Why it unblocks this paper:* Stanford EE274 is a comprehensive, authoritative university course on data compression theory and applications, covering entropy coding, arithmetic coding, and advanced compression techniques directly relevant to understanding FASTR's encoding scheme.

*If you want all of it:* 23.7 hours across 18 episodes

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Compression Algorithms](https://www.youtube.com/playlist?list=PLccgyJkIeFcAu4n8IRWZMEgflOTNIExpB) — Leohang Rai · 13 videos · 2.9h across the first 12 episodes

**Watch only this:** First 5 episodes, about 1.2 hours — covering Huffman coding, greedy methods, and basic compression concepts, sufficient for a quick but meaningful understanding of the paper's compression context.

*Why it unblocks this paper:* Leohang Rai's Compression Algorithms playlist offers clear, concise explanations of core compression methods including Huffman coding and Lempel-Ziv, providing an accessible yet solid introduction to the key concepts underlying FASTR's compression approach.

*If you want all of it:* 2.9 hours across 12 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand FASTR, start with foundational knowledge on high-throughput sequencing data formats to grasp the context and limitations of FASTQ. Then, study lossless compression techniques in bioinformatics to appreciate the importance of preserving data integrity while reducing size. Next, learn about range encoding algorithms, which underpin FASTR's novel implicit partitioned range encoding scheme. Finally, focus on the core concept of FASTR's implicit partitioned range encoding, which is the key innovation enabling its compact and efficient representation of sequencing data.

### High-throughput sequencing data formats *(prerequisite)*
Understanding the standard formats used in sequencing data storage, such as FASTQ, is essential to appreciate the improvements FASTR offers. These videos from the Broad Institute provide academic-level introductions to sequencing data formats and methods, suitable for advanced readers familiar with genomics.

*How the paper uses it:* FASTR is designed as a successor to FASTQ, addressing its inefficiencies in storing sequencing data.

▶ [BroadE: GATK/Introduction to High-Throughput Sequencing data formats and methods (2015)](https://www.youtube.com/watch?v=kCeV8qjW6fM) — Broad Institute · 10y ago

### Lossless compression in bioinformatics *(prerequisite)*
Lossless compression is critical in bioinformatics to ensure no data is lost during compression, preserving the integrity of sequencing data. The selected webinar and lecture provide rigorous academic insights into lossless compression techniques relevant to genomics data.

*How the paper uses it:* FASTR achieves lossless compression of sequencing data, preserving all original information while reducing file size.

▶ [Lossless Compression Tools for Genomics Data](https://www.youtube.com/watch?v=9L9xM5B5CbM) — كلية علوم الحاسب ونظم المعلومات بجامعة نجران · 5y ago

### Range encoding algorithms *(prerequisite)*
Range encoding is a fundamental technique in data compression that FASTR leverages through its implicit partitioned range encoding scheme. The chosen university-level lecture explains arithmetic coding, a core range encoding method, with theoretical depth suitable for advanced readers.

*How the paper uses it:* FASTR’s implicit partitioned range encoding scheme relies on principles of range encoding to efficiently encode base-quality pairs.

▶ [Data Compression: Arithmetic Coding Explained with an Example](https://www.youtube.com/watch?v=hOY6j217iwQ) — Advanced Maths · 5mo ago

### FASTR implicit partitioned range encoding
This concept covers the novel encoding method developed in FASTR that enables its compact representation of nucleotide bases and quality scores. The selected MIT OpenCourseWare lecture on 3-Partition II provides advanced algorithmic insights into partitioning techniques relevant to understanding FASTR’s encoding approach.

*How the paper uses it:* The core innovation of FASTR is its implicit partitioned range encoding scheme that encodes each base-quality pair into a single byte.

▶ [3. 3-Partition II](https://www.youtube.com/watch?v=TZSBHuy8yhQ) — MIT OpenCourseWare · 1:20:58 · 10y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

To understand FASTR, start by learning about high-throughput sequencing data formats like FASTQ to grasp the data context and challenges. Next, explore lossless compression principles in bioinformatics to appreciate the importance of preserving data integrity while reducing size. Then, study range encoding algorithms, which underpin FASTR's novel implicit partitioned range encoding scheme. This path builds foundational knowledge step-by-step, culminating in the core compression technique enabling FASTR's efficiency.

### High-throughput sequencing data formats *(prerequisite)*
Learn what FASTQ and related sequencing data formats are, how they store nucleotide sequences and quality scores, and why their large size and redundancy create bottlenecks in genomic workflows. This context is essential to appreciate why FASTR was developed.

*How the paper uses it:* FASTR improves on the standard FASTQ format by reducing file size and redundant metadata.

▶ [BroadE: GATK - Introduction to High-Throughput Sequencing Data](https://www.youtube.com/watch?v=QB8VGnN1s_A) — Broad Institute · 7y ago

### Lossless compression in bioinformatics *(prerequisite)*
Understand lossless compression basics and why it is critical in bioinformatics to preserve exact sequencing data without information loss. This knowledge helps grasp the importance of FASTR's lossless encoding approach.

*How the paper uses it:* FASTR achieves lossless compression critical for preserving sequencing data integrity.

▶ [Lossless Compression Tools for Genomics Data](https://www.youtube.com/watch?v=9L9xM5B5CbM) — كلية علوم الحاسب ونظم المعلومات بجامعة نجران · 5y ago

### Range encoding algorithms *(prerequisite)*
Explore range encoding, a lossless compression technique that encodes data into intervals of probabilities, enabling efficient representation. This forms the theoretical basis for FASTR's implicit partitioned range encoding scheme.

*How the paper uses it:* FASTR’s implicit partitioned range encoding scheme relies on range encoding principles.

▶ [Data Compression: Arithmetic Coding Explained with an Example](https://www.youtube.com/watch?v=hOY6j217iwQ) — Advanced Maths · 5mo ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a progressive ladder to demonstrate your understanding of FASTR's core innovations and practical impact. The beginner project focuses on reproducing the key encoding mechanism on a small synthetic dataset, the intermediate project implements the full FASTR encoding and compares compression metrics against FASTQ on a public sequencing dataset, and the advanced project extends FASTR by exploring metadata encoding improvements or performance optimizations as suggested in the paper's future directions.

### Beginner — FASTR Byte Encoding Prototype
*Effort: a weekend, ~8 hours*

You build a small Python script that implements the core FASTR implicit partitioned range encoding scheme to encode nucleotide bases and quality scores into single 8-bit values on a synthetic small FASTQ-like dataset. The script will decode back to verify lossless reconstruction.

**Why it shows you understood the paper:** This project demonstrates you understand the fundamental encoding innovation of FASTR and can implement the key algorithmic step that reduces storage from two bytes per base-quality pair to one byte.

**Grounded in:** Introduction of FASTR, a lossless, computation-native successor to FASTQ encoding bases and quality scores into single 8-bit values.

**Tech stack:** Python 3.11

**Data:** Synthetic FASTQ-like data with a few reads, manually created to simulate nucleotide bases and quality scores.

**Build it:**

1. Create a small synthetic FASTQ dataset with a few reads including nucleotide bases and quality scores.
2. Implement the implicit partitioned range encoding scheme to combine each base and quality score into a single 8-bit integer.
3. Implement the decoding function to reconstruct the original base and quality score from the 8-bit value.
4. Verify lossless round-trip encoding and decoding on the synthetic data.
5. Write a README explaining the encoding scheme and demonstrating the results.

**Ships as:** A Python script and README showing lossless encoding and decoding of base-quality pairs using FASTR's encoding on synthetic data.

**Stretch goal:** Add a simple visualization of the encoded byte distribution as a grayscale image to connect to the image-inspired representation concept.

### Intermediate — FASTR Encoding and Compression Benchmark
*Effort: 2 weekends, ~20 hours*

You implement the full FASTR encoding pipeline in Python to convert a small public FASTQ dataset into FASTR format, then apply general-purpose compression tools (e.g., gzip, zstd) on both FASTQ and FASTR files. You compare file sizes and compression/decompression times, reporting metrics similar to those in the paper.

**Why it shows you understood the paper:** This project shows you can reimplement the core method described in the paper and quantitatively evaluate its compression benefits and speed advantages over FASTQ, demonstrating comprehension of the paper's key results.

**Grounded in:** FASTR reduces file size by 2-3.15× compared to FASTQ depending on the processing mode; Applying general-purpose compression tools on FASTR yields higher compression ratios and faster compression/decompression than on FASTQ.

**Tech stack:** Python 3.11, gzip, zstd, time measurement tools

**Data:** A small publicly available FASTQ dataset from a public repository (e.g., a small Illumina run from NCBI SRA) used as a substitute for the paper's sequencing data.

**Build it:**

1. Select and download a small public FASTQ dataset (~few MB).
2. Implement the FASTR encoding scheme to convert FASTQ reads into the single-byte base-quality representation and global header format.
3. Save the encoded data as a FASTR file in one of the modes described (e.g., mode 0 or 1).
4. Compress both the original FASTQ and the FASTR file using gzip and zstd, measuring compression ratio and time.
5. Decompress both files and measure decompression time.
6. Write a report comparing file sizes and compression/decompression speeds, discussing how results align with the paper.

**Verified links from the paper:**

- <https://github.com/ALSER-Lab/FASTR> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A Python tool that converts FASTQ to FASTR, compression benchmarks, and a README with quantitative comparison and analysis.

**Stretch goal:** Add support for multiple FASTR modes and compare their impact on compression and metadata retention.

### Advanced — Extending FASTR with Metadata Encoding and Performance Optimization
*Effort: 3+ weeks*

You develop an extended version of FASTR that encodes additional metadata within the single-byte representation, exploring the paper's future direction of incorporating evolving quality score ranges. You also reimplement critical parts of the encoding in C or Cython to improve performance. You evaluate compression, reconstruction fidelity, and runtime improvements.

**Why it shows you understood the paper:** This project tackles a stated limitation and future direction of FASTR, demonstrating deep understanding of the encoding scheme, metadata optimization, and performance engineering, positioning you to contribute novel improvements to the method.

**Grounded in:** Future directions: Encoding additional metadata within the single byte as sequencing accuracy improves and quality score ranges shrink; Reimplementing FASTR software in C for improved performance.

**Tech stack:** Python 3.11, C or Cython, zstd, profiling tools

**Data:** Same small public FASTQ dataset as intermediate project, used for evaluation and benchmarking.

**Build it:**

1. Study the current FASTR encoding scheme and identify how to embed additional metadata bits within the 8-bit encoding without losing losslessness.
2. Design and implement an extended encoding scheme that incorporates extra metadata (e.g., refined quality score bins or sequencing run info).
3. Reimplement performance-critical encoding and decoding functions in C or Cython to accelerate processing.
4. Integrate the extended encoding with the existing FASTR pipeline and ensure lossless reconstruction.
5. Benchmark compression ratios, encoding/decoding speed, and metadata fidelity against the baseline FASTR implementation.
6. Document the design decisions, implementation details, and evaluation results in a detailed README.

**Verified links from the paper:**

- <https://github.com/ALSER-Lab/FASTR> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** An extended FASTR implementation with metadata encoding and C-accelerated core functions, plus benchmarks and documentation.

**Stretch goal:** Develop a prototype visualization tool that leverages the numeric image-inspired format for interactive exploration of sequencing data quality.
