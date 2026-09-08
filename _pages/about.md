---
permalink: /
author_profile: true
title: "Formal Methods for Trustworthy Autonomy"
description: "Research by Kevin Chiaming Chang on formal verification, contract-based design, and interpretable control for learning-enabled cyber-physical systems."
hide_title: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <div class="home-hero__visual" aria-hidden="true">
    <img src="{{ '/images/research-hero.webp' | relative_url }}" width="1800" height="1100" alt="" decoding="async">
  </div>
  <p class="home-hero__eyebrow">UC Berkeley EECS · Formal Methods · Intelligent Systems</p>
  <h1 class="home-hero__title">Building autonomy<br>we can reason about.</h1>
  <p class="home-hero__lead">I am Kevin Chiaming Chang, a Ph.D. candidate advised by Prof. Pierluigi Nuzzo. I develop formal and optimization-based methods that make learning-enabled controllers more verifiable, interpretable, and compositional.</p>
  <div class="home-actions">
    <a class="btn btn--primary" href="#research">Explore my research</a>
    <a class="btn btn--secondary" href="{{ '/publications/' | relative_url }}">View publications</a>
    <a class="btn btn--secondary" href="{{ '/files/cv/resume.pdf' | relative_url }}" download="Kevin-Chang-CV.pdf">Download CV</a>
  </div>
</section>

<section class="home-section" id="research" aria-labelledby="research-heading">
  <div class="home-section__intro">
    <p class="home-card__eyebrow">Research agenda</p>
    <h2 id="research-heading">From learned behavior to defensible guarantees</h2>
    <p>My research asks how we can retain the performance of modern learning systems while recovering the structure needed to analyze, verify, and safely compose them.</p>
  </div>
  <div class="research-grid">
    <article class="research-card">
      <span class="research-card__number" aria-hidden="true">01</span>
      <h3>Interpretable controllers</h3>
      <p>Transform neural-network policies into compact decision-tree representations while preserving their input-output behavior.</p>
    </article>
    <article class="research-card">
      <span class="research-card__number" aria-hidden="true">02</span>
      <h3>Compositional verification</h3>
      <p>Use robustness contracts and assume-guarantee reasoning to separate component-level analysis from system-level safety.</p>
    </article>
    <article class="research-card">
      <span class="research-card__number" aria-hidden="true">03</span>
      <h3>Solver-backed design</h3>
      <p>Develop SMT- and MILP-based refinement methods that turn formal specifications into scalable design and verification workflows.</p>
    </article>
  </div>
</section>

<section class="home-section home-section--split" id="selected-work" aria-labelledby="work-heading">
  <div class="home-section__intro">
    <p class="home-card__eyebrow">Selected work</p>
    <h2 id="work-heading">A research thread from distillation to exact equivalence</h2>
    <p>Recent work develops a path from learned controllers to representations that are easier to inspect, deploy, and verify.</p>
    <a class="text-link" href="{{ '/publications/' | relative_url }}">See all publications <span aria-hidden="true">&rarr;</span></a>
  </div>
  <div class="featured-work">
    <article class="featured-paper">
      <p class="featured-paper__meta">IEEE Transactions on Automatic Control · 2026</p>
      <h3><a href="{{ '/publication/equivalent-compact-dt-controllers' | relative_url }}">Equivalent and Compact Representations of Neural Network Controllers With Decision Trees</a></h3>
      <p>Exact neural-to-tree transformation with automatic pruning for more practical verification and deployment.</p>
    </article>
    <article class="featured-paper">
      <p class="featured-paper__meta">Automatica · 2026</p>
      <h3><a href="{{ '/publication/passivity-hybrid-learning' | relative_url }}">Passivity Tools for Hybrid Learning Rules in Large Populations</a></h3>
      <p>A systems-theoretic framework for studying stability under hybrid and discontinuous learning dynamics.</p>
    </article>
  </div>
</section>

<section class="home-section home-section--experience" aria-labelledby="experience-heading">
  <div class="home-section__intro">
    <p class="home-card__eyebrow">Across theory and practice</p>
    <h2 id="experience-heading">Formal reasoning at multiple scales</h2>
  </div>
  <div class="experience-strip">
    <div>
      <strong>Research</strong>
      <span>Formal verification, learning-enabled control, and EDA optimization</span>
    </div>
    <div>
      <strong>Engineering</strong>
      <span>CPU microarchitecture verification and solver-backed workflows</span>
    </div>
    <div>
      <strong>Teaching</strong>
      <span>Design automation and computer architecture at Berkeley and USC</span>
    </div>
  </div>
</section>

<section class="home-contact" id="contact" aria-labelledby="contact-heading">
  <p class="home-card__eyebrow">Contact</p>
  <h2 id="contact-heading">Let’s talk about trustworthy intelligent systems.</h2>
  <p>I welcome conversations about formal verification, learning-enabled autonomy, contract-based design, and research collaborations.</p>
  <div class="contact-links">
    <a href="mailto:{{ site.author.email }}"><i class="fa-solid fa-envelope" aria-hidden="true"></i>Email</a>
    <a href="{{ site.author.googlescholar }}"><i class="ai ai-google-scholar" aria-hidden="true"></i>Google Scholar</a>
    <a href="https://github.com/{{ site.author.github }}"><i class="fab fa-github" aria-hidden="true"></i>GitHub</a>
    <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}/"><i class="fab fa-linkedin" aria-hidden="true"></i>LinkedIn</a>
  </div>
</section>
