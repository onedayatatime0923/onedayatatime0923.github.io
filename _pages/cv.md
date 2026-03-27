---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-page {
    color: #1f1a17;
  }

  .cv-shell {
    display: grid;
    gap: 1.4rem;
  }

  .cv-hero,
  .cv-panel {
    background: rgba(255, 255, 255, 0.84);
    border: 1px solid rgba(107, 83, 63, 0.12);
    border-radius: 26px;
    box-shadow: 0 18px 40px rgba(49, 34, 20, 0.08);
  }

  .cv-hero {
    background:
      radial-gradient(circle at top right, rgba(187, 90, 60, 0.14), transparent 32%),
      linear-gradient(135deg, rgba(255, 250, 246, 0.98) 0%, rgba(246, 236, 228, 0.94) 100%);
    padding: 1.8rem;
  }

  .cv-hero__eyebrow,
  .cv-panel__eyebrow {
    color: #8d3e28;
    font-size: 0.76rem;
    font-weight: 800;
    letter-spacing: 0.16em;
    margin-bottom: 0.7rem;
    text-transform: uppercase;
  }

  .cv-hero__title {
    color: #1d1714;
    font-family: "Fraunces", serif;
    font-size: clamp(2rem, 4vw, 3.2rem);
    line-height: 1.02;
    margin: 0 0 0.8rem;
  }

  .cv-hero__lead,
  .cv-panel p,
  .cv-panel li,
  .cv-panel strong,
  .cv-panel em {
    color: #2f2722;
  }

  .cv-hero__meta,
  .cv-tag-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.7rem;
  }

  .cv-hero__meta span,
  .cv-tag-row span {
    background: rgba(187, 90, 60, 0.1);
    border: 1px solid rgba(141, 62, 40, 0.16);
    border-radius: 999px;
    color: #3a3029;
    font-size: 0.92rem;
    font-weight: 700;
    padding: 0.5rem 0.85rem;
  }

  .cv-grid {
    display: grid;
    gap: 1.2rem;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  }

  .cv-panel {
    padding: 1.4rem 1.5rem;
  }

  .cv-panel h2 {
    border: 0;
    color: #241b15;
    font-family: "Fraunces", serif;
    font-size: 1.75rem;
    margin: 0 0 1rem;
    padding: 0;
  }

  .cv-panel h3 {
    color: #241b15;
    font-size: 1.08rem;
    margin-bottom: 0.2rem;
    margin-top: 1.1rem;
  }

  .cv-panel h3:first-of-type {
    margin-top: 0;
  }

  .cv-meta-line {
    color: #6b5243;
    font-size: 0.94rem;
    font-weight: 700;
    margin-bottom: 0.6rem;
  }

  .cv-panel ul {
    margin: 0.65rem 0 0;
    padding-left: 1.2rem;
  }

  .cv-panel li + li {
    margin-top: 0.45rem;
  }

  .cv-stack {
    display: grid;
    gap: 1.2rem;
  }
</style>

<div class="cv-page">
<div class="cv-shell">
  <section class="cv-hero">
    <p class="cv-hero__eyebrow">Curriculum Vitae</p>
    <h2 class="cv-hero__title">Research, verification, and learning-enabled control for safety-critical systems.</h2>
    <p class="cv-hero__lead">Ph.D. candidate at UC Berkeley building scalable formal-methods and machine-learning research for safety-critical systems. Experience spans neural network verification, contract-based design, optimization, and interpretable controller synthesis, with a focus on translating theory into solver-backed algorithms and rigorous empirical evaluation.</p>
    <div class="cv-hero__meta">
      <span>UC Berkeley</span>
      <span>Formal Verification</span>
      <span>Neural Controllers</span>
      <span>Contracts for CPS</span>
    </div>
  </section>

  <div class="cv-grid">
    <section class="cv-panel">
      <p class="cv-panel__eyebrow">Toolbox</p>
      <h2>Skills</h2>
      <div class="cv-tag-row">
        <span>Formal verification</span>
        <span>Interpretable ML</span>
        <span>Contract-based design</span>
        <span>Reinforcement learning</span>
        <span>SMT</span>
        <span>MILP</span>
        <span>Symbolic abstraction</span>
        <span>Safe reachability</span>
        <span>Python</span>
        <span>SystemVerilog</span>
        <span>MATLAB</span>
        <span>C++</span>
        <span>PyTorch</span>
        <span>scikit-learn</span>
        <span>Gurobi</span>
        <span>CVX</span>
        <span>JasperGold</span>
        <span>Cadence Xcelium</span>
        <span>Genus</span>
        <span>VCS</span>
      </div>
    </section>

    <section class="cv-panel">
      <p class="cv-panel__eyebrow">Academic Path</p>
      <h2>Education</h2>
      <h3>University of California, Berkeley</h3>
      <p class="cv-meta-line">Berkeley, CA | Ph.D. in Electrical and Computer Engineering | January 2021 - Present</p>
      <p>GPA 3.91/4.00. Research focus: formal verification, ML-enabled cyber-physical systems, optimization, and contract-based design. Lab: DesCyPhy Lab, The Donald O. Pederson Center for Electronic Systems Design.</p>

      <h3>National Taiwan University</h3>
      <p class="cv-meta-line">Taipei, Taiwan | B.S. in Electrical Engineering | September 2015 - January 2020</p>
      <p>GPA 3.67/4.00, last 60 credits 4.00/4.00. Relevant coursework includes physical design, integrated circuit design, computer architecture, machine learning, and deep learning for computer vision.</p>
    </section>
  </div>

  <section class="cv-panel">
    <p class="cv-panel__eyebrow">Core Work</p>
    <h2>Research Experience</h2>
    <div class="cv-stack">
      <div>
        <h3>Graduate Student Researcher, DesCyPhy Lab, Prof. Pierluigi Nuzzo</h3>
        <p class="cv-meta-line">Berkeley, CA | January 2021 - Present</p>
        <ul>
          <li>Developed a provably exact transformation from ReLU neural-network controllers to soft decision-tree representations, improving scalability and interpretability for solver-based verification while preserving closed-loop behavior.</li>
          <li>Introduced contract-based robustness specifications that decouple plant dynamics from neural controllers for compositional safety verification, with an SMT-based refinement algorithm for tighter abstraction bounds.</li>
          <li>Formulated MILP-based contract-refinement techniques to synthesize tighter assume-guarantee specifications, improving realizability and reducing verification complexity in multi-agent autonomy settings.</li>
          <li>Built a controller-distillation framework that extracts compact, interpretable control laws from deep RL policies while preserving task performance and improving verifiability.</li>
        </ul>
      </div>

      <div>
        <h3>Undergraduate Researcher, Electronic Design Automation Lab, Prof. Yao-Wen Chang</h3>
        <p class="cv-meta-line">Taipei, Taiwan | September 2018 - February 2020</p>
        <ul>
          <li>Implemented a detailed-routing engine with concurrent track assignment and multithreaded routing, handling designs with up to 1M nets using less than 64 GB of memory in 10 hours on most benchmarks.</li>
          <li>Built a routability-driven hybrid global router and a system-level FPGA router with TDM optimization, contributing to ACM ISPD 2019 and ICCAD 2019 competition recognition and an ICCAD 2021 publication.</li>
        </ul>
      </div>
    </div>
  </section>

  <div class="cv-grid">
    <section class="cv-panel">
      <p class="cv-panel__eyebrow">Teaching + Industry</p>
      <h2>Additional Experience</h2>
      <h3>Graduate Student Instructor of Introduction to Design Automation</h3>
      <p class="cv-meta-line">University of California, Berkeley | Berkeley, CA | January 2026 - May 2026</p>
      <p>Developed end-to-end instructional examples demonstrating the EDA workflow across synthesis, simulation, and verification, and supported students across RTL design, timing analysis, and verification topics.</p>

      <h3>Graduate Student Instructor (3x) of Computer Architecture</h3>
      <p class="cv-meta-line">University of Southern California | Los Angeles, CA | January 2022 - May 2023</p>
      <p>Developed instructional examples covering processor pipelines and the transition from in-order to out-of-order execution, with support across pipelining, hazards, caching, and memory hierarchy reasoning.</p>

      <h3>Software Researcher</h3>
      <p class="cv-meta-line">Institute of Information Science, Academia Sinica | Taipei, Taiwan | June 2018 - September 2018</p>
      <p>Implemented a semi-supervised domain-adaptation pipeline for semantic segmentation using unpaired image translation and segmentation modeling, improving mean IoU on Cityscapes.</p>
    </section>

    <section class="cv-panel">
      <p class="cv-panel__eyebrow">Selected Work</p>
      <h2>Projects</h2>
      <h3>Fantasy Football Performance Prediction with Expert Commentary</h3>
      <p class="cv-meta-line">Course Project, Pattern, Prediction, and Action | December 2025</p>
      <p>Modeled weekly and season-long NFL player performance by combining box-score statistics, expert rankings, and qualitative commentary. Built a unified dataset for supervised prediction and derived text embeddings to capture signals beyond structured numerical features.</p>

      <h3>Sign Language Translation System</h3>
      <p class="cv-meta-line">Arm Design Contest | September 2018</p>
      <p>Built a real-time sign-language translation system using a single 9-DOF IMU for gesture recognition, winning 2nd Place and the Best Popularity Award.</p>
    </section>
  </div>

  <section class="cv-panel">
    <p class="cv-panel__eyebrow">Recognition</p>
    <h2>Selected Awards</h2>
    <ul>
      <li><strong>Outstanding Performance Scholarship</strong>, National Taiwan University | November 2019</li>
      <li><strong>Top 5 and Honorable Mentions</strong>, CAD Contest Problem C | November 2019</li>
      <li><strong>2nd Place</strong>, ACM ISPD Contest | April 2019</li>
      <li><strong>2nd Place and Best Popularity Award</strong>, Arm Design Contest | November 2018</li>
    </ul>
  </section>
</div>

</div>
