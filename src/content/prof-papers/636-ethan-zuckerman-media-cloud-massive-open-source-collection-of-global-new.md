---
title: "636 · Media Cloud: Massive Open Source Collection of Global News on the Open Web — Ethan Zuckerman"
date: 2026-10-15
tags:
  - research-paper
  - learning-path
  - professor-outreach
draft: false
source_workspace: "outreach-ethan-zuckerman"
source_hash: "15f4e8b021949e21733539653a087880625ebf4da40239d63e1b2a3d9b413023"
sequence: 636
generator: "outreach-garden: managed"
---

# 636 · Media Cloud: Massive Open Source Collection of Global News on the Open Web

## At a glance

- **Professor:** Ethan Zuckerman
- **Institution:** Univ. of Massachusetts Amherst
- **Paper:** [Media Cloud: Massive Open Source Collection of Global News on the Open Web](https://ojs.aaai.org/index.php/ICWSM/article/download/18127/17930)
- **Authors:** Hal Roberts, Rahul Bhargava, Linas Valiukas, Dennis Jen, Momin M. Malik, Cindy Sherman Bishop, Emily B. Ndulue, Aashka Dave, Justin Clark, Bruce Etling, Robert Faris, Anushka Shah, Jasmin Rubinovitz, Alexis Hope, Catherine D’Ignazio, Fernando Bermejo, Yochai Benkler, Ethan Zuckerman
- **Year:** 2021

## Paper overview

Media Cloud is an open source platform that collects and analyzes over 1.7 billion news stories from more than a million media sources worldwide. It provides free tools and an API for researchers to study online news ecosystems, including attention, influence, and representation in media. The platform uses web crawling and RSS feed ingestion to gather data, supports topic-specific datasets, and offers web-based and programmatic access. Media Cloud aims to democratize access to media data for research on social change, misinformation, and media polarization.

### Why it matters

**Research problem:** Studying the production and dissemination of news on the open web is challenging due to the vast volume of content, diversity of sources, proprietary platforms, and limitations of commercial data providers. Researchers need an accessible, comprehensive, and transparent tool to collect, analyze, and understand online media ecosystems globally.

**Why it matters:** News media significantly influence democracy, public beliefs, and behaviors. Understanding media attention, representation, influence, and language is crucial for addressing misinformation, media polarization, and social change. Existing commercial databases are costly, limited in coverage, and lack transparency, restricting academic and activist research.

**Key contributions:**

- Creation of a large-scale, open source, and freely accessible media dataset with over 1.7 billion stories from 1.1 million media sources.
- Development of a scalable architecture combining feed ingestion and hyperlink spidering to discover and collect diverse media content globally.
- Provision of multiple access points including a rich API, web-based research tools, and downloadable datasets enabling broad usability.
- Support for topic-specific dataset generation and influence metrics based on hyperlink and social media sharing analysis.
- Adherence to FAIR principles ensuring findability, accessibility, interoperability, and reusability of media data.

## About the professor

**Ethan Zuckerman** — Univ. of Massachusetts Amherst.

### Research links

- [Faculty/profile page](https://cyber.harvard.edu/people/ezuckerman)
- [Identity evidence](http://www.ethanzuckerman.com/blog)
- [Professor website](http://www.ethanzuckerman.com)

## Learning path

## Foundations playlist — start here

_The background this paper assumes and never explains. Two ways in — a full course, or a short-form series covering the same ground. Pick one lane; you do not need both, and you do not need all of either._

**What you're missing:** web data mining
**The paper assumes:** web crawling, hyperlink analysis, and large-scale web data collection techniques
**Already in this field?** Skip this entirely if you already understand the principles and methods of web data mining and large-scale web crawling architectures.

This background focuses on web data mining, essential for understanding how Media Cloud collects and processes massive online news content via syndicated feed crawling and hyperlink spidering. The rigorous course offers a deep, structured dive into language modeling and data collection techniques relevant to large-scale web data, while the fast track provides a concise, practical introduction to web mining concepts and methods, suitable for quickly grasping the core ideas without extensive time investment.

### The fast track
_Same ground, a fraction of the time — for when you just need to read the paper._

▶ [Web crawler](https://www.youtube.com/playlist?list=PLORfVXJ8PtaTUE3iuy-OGeww1vSELAMgL) — Mayank Saxena · 10 videos · 1.4h across 10 episodes

**Watch only this:** Episodes 1 (Make your Own Web Crawler - Part 1 - The Basics), 2 (Web Crawler - CS101 - Udacity), 4 (Web Crawling vs. Web Scraping - What is the Difference?), and 5 (Python Scrapy Tutorial- 1 - Web Scraping, Spiders and Crawling), about 32 minutes total — these give a fast yet solid introduction to web crawling and scraping techniques.

*Why it unblocks this paper:* This short playlist provides clear, concise explanations of web crawling and scraping fundamentals, including practical tutorials and conceptual overviews, which quickly build intuition about the data collection methods used by Media Cloud.

*If you want all of it:* 1.4 hours across 10 episodes

## Track 1 — Academic deep-dives (long-form)

_Rigorous lectures, seminars and conference talks. Deeper, but longer._

To deeply understand the Media Cloud platform and its research contributions, start by grasping the foundational concepts of web crawling and spidering, which are essential for the platform's data collection. Next, explore the analysis of news media ecosystems to comprehend the context and significance of the collected data. Then, study APIs for large-scale data access to appreciate how Media Cloud enables programmatic research. Finally, focus on the core concept of the Media Cloud platform itself, prioritizing the authors' own detailed webinar introducing the system.

### Web crawling and spidering *(prerequisite)*
Web crawling and spidering are the primary technical methods Media Cloud uses to discover and collect news stories from the open web. Understanding these techniques provides insight into how the platform achieves its massive scale and topical focus.

*How the paper uses it:* Media Cloud's data collection relies on a syndicated feed crawler and a topic-specific spidering engine to gather diverse media content globally.

▶ [Design a Web Crawler System Design Interview w/ a Ex-Meta Staff Engineer](https://www.youtube.com/watch?v=krsuaUp__pM) — Hello Interview · 1:05:04 · 2y ago

### News media ecosystems analysis *(prerequisite)*
Analyzing news media ecosystems helps contextualize the structure, influence, and interactions among media sources, which is central to Media Cloud's research applications. This understanding is crucial for interpreting the platform's datasets and influence metrics.

*How the paper uses it:* Media Cloud supports research on media influence, misinformation, and polarization by providing data on media ecosystems and their interactions.

▶ ["Media Cloud and Quantitative News Media Analysis" (CRCS Lunch Seminar)](https://www.youtube.com/watch?v=1RyNYNunABY) — Harvard's CRCS · 1:09:33 · 13y ago

### APIs for large-scale data access *(prerequisite)*
APIs enable researchers to programmatically access and analyze large datasets like those in Media Cloud. Learning about API design and usage is important to leverage the platform's open API and web tools effectively.

*How the paper uses it:* Media Cloud offers open APIs and web-based tools to facilitate broad usability and diverse research needs.

▶ [How to Design APIs Like a Senior Engineer (REST, GraphQL, Auth, Security)](https://www.youtube.com/watch?v=7iHl71nt49o) — Hayk Simonyan · 1:23:21 · 1y ago

### Media Cloud authors talk *(paper-talk search result; attribution unverified)*
The authors' own introductory webinar provides a comprehensive and authoritative overview of the Media Cloud platform, its architecture, data collection methods, and research applications. This talk is the best resource to understand the paper's contributions directly from the creators.

*How the paper uses it:* This webinar is a direct presentation by Media Cloud authors explaining the platform and its research utility.

▶ [Media Cloud: Intro Webinar](https://www.youtube.com/watch?v=A6ZJkC6sjfY) — Rahul B · 55:11 · 8y ago

## Track 2 — Beginner → Advanced (short-form)

_Concise, high-quality explainers that build intuition — for when time is short._

This learning path introduces the foundational concepts needed to understand the Media Cloud platform, starting with how web crawling and spidering work to collect data from the open web. Next, it covers how news media ecosystems are analyzed to understand media influence and interactions. Then, it explains APIs for accessing large-scale datasets programmatically, culminating in a focused understanding of Media Cloud's architecture that integrates these components to support media research.

### Web crawling and spidering *(prerequisite)*
Web crawling and spidering are automated methods to discover and collect web content by following links and fetching pages systematically. Understanding these techniques is essential because Media Cloud uses them to gather millions of news stories daily from diverse sources on the open web.

*How the paper uses it:* Media Cloud collects data via a syndicated feed crawler and a topic-specific spidering engine that recursively follows hyperlinks to gather relevant stories.

▶ [Design a Web Crawler System Design Interview w/ a Ex-Meta Staff Engineer](https://www.youtube.com/watch?v=krsuaUp__pM) — Hello Interview · 1:05:04 · 2y ago

### News media ecosystems analysis *(prerequisite)*
News media ecosystems refer to the network of media sources, their interactions, and how information flows among them. Analyzing these ecosystems helps researchers understand media influence, representation, and polarization, which are key goals of the Media Cloud platform.

*How the paper uses it:* Media Cloud supports research on media influence, misinformation, and political discourse by providing data on media ecosystems and their interactions.

▶ ["Media Cloud and Quantitative News Media Analysis" (CRCS Lunch Seminar)](https://www.youtube.com/watch?v=1RyNYNunABY) — Harvard's CRCS · 1:09:33 · 13y ago

### APIs for large-scale data access *(prerequisite)*
APIs (Application Programming Interfaces) allow programmatic access to large datasets, enabling researchers to query, analyze, and integrate data efficiently. Media Cloud offers open APIs that provide flexible access to its massive media dataset, making this concept critical for leveraging the platform.

*How the paper uses it:* Media Cloud provides open APIs and web-based tools for data access and analysis, enabling broad usability for researchers.

▶ [How to Design APIs Like a Senior Engineer (REST, GraphQL, Auth, Security)](https://www.youtube.com/watch?v=7iHl71nt49o) — Hayk Simonyan · 1:23:21 · 1y ago


## Build it — 3 projects to showcase this paper

_A beginner, an intermediate and an advanced project, each tied to a specific claim in this paper. Build one and it becomes concrete evidence that the paper was understood, not just read._

These three projects form a ladder to demonstrate your understanding of the Media Cloud platform and its approach to collecting and analyzing large-scale online news data. The beginner project reproduces a small-scale version of Media Cloud's feed crawling and content extraction. The intermediate project implements a simplified topic-specific spidering engine and compares its coverage against a baseline. The advanced project extends Media Cloud's framework by integrating social media sharing metrics to approximate media influence, addressing one of the paper's stated future directions.

### Beginner — Mini Media Cloud Feed Crawler and Content Extractor
*Effort: a weekend, ~8 hours*

You build a small-scale web crawler that ingests RSS feeds from a handful of freely available news sources, extracts article content using a readability parser, and detects the language of each article. This reproduces the core data collection and processing pipeline of Media Cloud on a tiny scale.

**Why it shows you understood the paper:** This project demonstrates you understand Media Cloud's approach to collecting news stories via syndicated feed crawling, content extraction, and language detection, which are foundational to the platform's large-scale data ingestion.

**Grounded in:** Media Cloud collects data via a syndicated feed crawler ingesting about a million stories daily from 60,000 sources and processes story content with text extraction and language detection.

**Tech stack:** Python 3.11, feedparser, python-readability, cld2 (language detection)

**Data:** Use publicly available RSS feeds from major news websites (e.g., BBC, NPR) as input data.

**Build it:**

1. Select 5-10 public RSS feeds from diverse news sources.
2. Implement a Python script to fetch and parse RSS feed entries using feedparser.
3. For each article URL, download the page and extract main content using python-readability.
4. Detect the language of the extracted content using the CLD2 library.
5. Store the article metadata, content, and language in a simple JSON or CSV format.
6. Write a README explaining the pipeline and showing sample outputs.

**Verified links from the paper:**

- <https://github.com/buriy/python-readability> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/CLD2Owners/cld2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with a Python crawler script, requirements, sample data output, and README documenting the process and results.

**Stretch goal:** Add simple deduplication of articles by URL or content hash to mimic Media Cloud's deduplication step.

### Intermediate — Topic-Specific Spidering and Coverage Comparison
*Effort: 1-3 weekends*

You implement a recursive spidering engine that starts from a small set of seed URLs on a specific news topic, follows hyperlinks to discover related stories, extracts content, and builds a topic-specific dataset. You then compare the coverage of your spidered dataset against a baseline feed crawl dataset by counting unique stories and sources.

**Why it shows you understood the paper:** This project replicates Media Cloud's core method of topic-specific spidering to collect relevant news stories beyond syndicated feeds, and demonstrates understanding of how the platform supports topic dataset generation and coverage analysis.

**Grounded in:** Media Cloud uses a topic-specific spidering engine that recursively follows hyperlinks to gather relevant stories, supporting creation of large topic-specific datasets.

**Tech stack:** Python 3.11, requests, beautifulsoup4, python-readability, cld2

**Data:** Seed URLs on a current news topic (e.g., COVID-19 vaccine news) from public news websites; baseline feed crawl data can be simulated by collecting RSS feed articles on the same topic.

**Build it:**

1. Choose a topical seed set of URLs related to a current news event.
2. Implement a spidering script that downloads each page, extracts hyperlinks, and recursively visits new URLs up to a depth limit.
3. Extract article content and metadata using readability and language detection.
4. Aggregate all collected stories into a dataset with source and publish date info.
5. Collect a baseline dataset by fetching RSS feed articles on the same topic.
6. Compare the two datasets by counting unique stories, sources, and overlap.
7. Document the spidering approach, comparison results, and limitations.

**Verified links from the paper:**

- <https://github.com/buriy/python-readability> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/CLD2Owners/cld2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with the spidering code, baseline feed crawl script, datasets, comparison analysis notebook, and README.

**Stretch goal:** Add simple influence metrics by counting hyperlink references between stories in the spidered dataset.

### Advanced — Integrating Social Media Sharing Metrics to Approximate Media Influence
*Effort: a few weeks*

You extend the topic-specific spidering framework by integrating social media sharing data (e.g., Twitter share counts or public Facebook shares) for collected news stories to approximate media influence beyond production data. You analyze correlations between hyperlink networks and social sharing metrics to explore influence patterns.

**Why it shows you understood the paper:** This project addresses a key limitation and future direction of Media Cloud by attempting to incorporate consumption or engagement metrics, demonstrating deep comprehension of the platform's architecture and research challenges.

**Grounded in:** Future directions include indexing social media platforms directly to better connect traditional news with social sharing and influence metrics; limitations include Media Cloud's inability to measure media consumption directly.

**Tech stack:** Python 3.11, requests, beautifulsoup4, python-readability, cld2, tweepy (Twitter API) or other social media API

**Data:** Topic-specific news story URLs collected via spidering; social media sharing counts retrieved via public APIs or scraping for these URLs.

**Build it:**

1. Reuse or build a topic-specific spidering engine to collect news stories on a chosen topic.
2. For each collected story URL, query social media APIs to retrieve share counts or engagement metrics.
3. Construct a hyperlink network graph among collected stories based on extracted links.
4. Analyze correlations between hyperlink influence metrics and social media sharing counts.
5. Visualize influence patterns and discuss implications for measuring media influence.
6. Write a detailed README explaining methodology, challenges, and findings.

**Verified links from the paper:**

- <https://github.com/buriy/python-readability> — a third-party/baseline artifact the paper cites — not the authors' own code
- <https://github.com/CLD2Owners/cld2> — a third-party/baseline artifact the paper cites — not the authors' own code

**Ships as:** A GitHub repo with spidering and social media integration code, analysis notebooks, visualizations, and comprehensive documentation.

**Stretch goal:** Incorporate additional engagement signals such as comments or user reactions if accessible, or extend to multiple social media platforms.
