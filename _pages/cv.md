---
layout: archive
title: "CV"
permalink: /cv/
author_profile: false
redirect_from:
  - /resume
---

{% include base_path %}

<style>
  .cv-page {
    color: #1f1b18;
    font-family: Georgia, "Times New Roman", serif;
  }

  .cv-shell {
    background: rgba(255, 255, 255, 0.88);
    border: 1px solid rgba(96, 78, 64, 0.14);
    border-radius: 18px;
    box-shadow: 0 18px 40px rgba(45, 34, 25, 0.08);
    padding: clamp(1.4rem, 3vw, 2.4rem);
  }

  .cv-header {
    border-bottom: 2px solid rgba(96, 78, 64, 0.16);
    margin-bottom: 1.8rem;
    padding-bottom: 1.4rem;
  }

  .cv-header__eyebrow {
    color: #7a5746;
    font-size: 0.76rem;
    font-weight: 700;
    letter-spacing: 0.18em;
    margin-bottom: 0.55rem;
    text-transform: uppercase;
  }

  .cv-header__title {
    color: #1d1714;
    font-family: "Fraunces", Georgia, serif;
    font-size: clamp(2.2rem, 4vw, 3.4rem);
    font-weight: 600;
    line-height: 1.03;
    margin: 0;
  }

  .cv-header__subtitle {
    color: #4a3c33;
    font-size: 1.02rem;
    line-height: 1.8;
    margin: 0.9rem 0 0;
    max-width: 48rem;
  }

  .cv-header__meta {
    color: #6e5a4d;
    display: flex;
    flex-wrap: wrap;
    font-size: 0.92rem;
    gap: 0.55rem 1rem;
    margin-top: 1rem;
  }

  .cv-section + .cv-section {
    margin-top: 1.8rem;
  }

  .cv-section-title {
    border-bottom: 1px solid rgba(96, 78, 64, 0.16);
    color: #241d19;
    font-family: "Fraunces", Georgia, serif;
    font-size: 1.55rem;
    margin: 0 0 1rem;
    padding-bottom: 0.45rem;
  }

  .cv-grid {
    display: grid;
    gap: 1.4rem;
    grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
  }

  .cv-card {
    background: rgba(250, 248, 245, 0.86);
    border: 1px solid rgba(96, 78, 64, 0.1);
    border-radius: 14px;
    padding: 1.2rem 1.25rem;
  }

  .cv-entry + .cv-entry {
    margin-top: 1.2rem;
    padding-top: 1.1rem;
    border-top: 1px solid rgba(96, 78, 64, 0.1);
  }

  .cv-entry__title {
    color: #1f1a17;
    font-size: 1.08rem;
    font-weight: 700;
    margin: 0;
  }

  .cv-entry__meta {
    color: #6d594c;
    font-size: 0.93rem;
    font-style: italic;
    margin: 0.18rem 0 0.55rem;
  }

  .cv-entry p,
  .cv-entry li,
  .cv-card p,
  .cv-card li {
    color: #302722;
    line-height: 1.72;
  }

  .cv-entry ul,
  .cv-card ul {
    margin: 0.55rem 0 0;
    padding-left: 1.15rem;
  }

  .cv-entry li + li,
  .cv-card li + li {
    margin-top: 0.35rem;
  }

  .cv-skills {
    display: flex;
    flex-wrap: wrap;
    gap: 0.55rem;
  }

  .cv-skill {
    background: rgba(122, 87, 70, 0.08);
    border: 1px solid rgba(122, 87, 70, 0.14);
    border-radius: 999px;
    color: #3b3029;
    font-size: 0.9rem;
    padding: 0.42rem 0.78rem;
  }

  .cv-awards {
    columns: 2;
    column-gap: 1.5rem;
  }

  .cv-awards li {
    break-inside: avoid;
    margin-bottom: 0.65rem;
  }

  @media (max-width: 900px) {
    .cv-grid {
      grid-template-columns: 1fr;
    }

    .cv-awards {
      columns: 1;
    }
  }
</style>

<div class="cv-page">
<div class="cv-shell">
  <section class="cv-header">
    <p class="cv-header__eyebrow">Curriculum Vitae</p>
    <h2 class="cv-header__title">Kevin Chiaming Chang</h2>
    <p class="cv-header__subtitle">Ph.D. candidate in Electrical Engineering and Computer Sciences at the University of California, Berkeley. Research focus: formal verification, learning-enabled cyber-physical systems, optimization, and compositional contract-based design for safety-critical autonomy.</p>
    <div class="cv-header__meta">
      <span>Berkeley, California</span>
      <span>University of California, Berkeley</span>
      <span><a href="mailto:{{ site.author.email }}">{{ site.author.email }}</a></span>
    </div>
  </section>

  <section class="cv-section">
    <h3 class="cv-section-title">Summary</h3>
    <div class="cv-card">
      <p>Researcher in cyber-physical systems with interests in formal verification, interpretable machine learning, optimization, and modular reasoning for learning-enabled control. Current work develops scalable methods for certifying safety, reliability, and explainability in autonomous and distributed systems.</p>
    </div>
  </section>

  <div class="cv-grid">
    <section class="cv-section">
      <h3 class="cv-section-title">Education</h3>
      <div class="cv-card">
        <div class="cv-entry">
          <p class="cv-entry__title">University of California, Berkeley</p>
          <p class="cv-entry__meta">Berkeley, CA | Ph.D. in Electrical and Computer Engineering | January 2021 - Present</p>
          <p>GPA: 3.91/4.00. Research focus: formal verification, learning-enabled cyber-physical systems, optimization, and contract-based design. Lab affiliation: DesCyPhy Lab, The Donald O. Pederson Center for Electronic Systems Design.</p>
        </div>
        <div class="cv-entry">
          <p class="cv-entry__title">National Taiwan University</p>
          <p class="cv-entry__meta">Taipei, Taiwan | B.S. in Electrical Engineering | September 2015 - January 2020</p>
          <p>GPA: 3.67/4.00; last 60 credits: 4.00/4.00. Coursework included physical design, integrated circuit design, computer architecture, machine learning, and deep learning for computer vision.</p>
        </div>
      </div>
    </section>

    <section class="cv-section">
      <h3 class="cv-section-title">Skills</h3>
      <div class="cv-card">
        <div class="cv-skills">
          <span class="cv-skill">Formal verification</span>
          <span class="cv-skill">Interpretable machine learning</span>
          <span class="cv-skill">Contract-based design</span>
          <span class="cv-skill">Reinforcement learning</span>
          <span class="cv-skill">SMT</span>
          <span class="cv-skill">MILP</span>
          <span class="cv-skill">Symbolic abstraction</span>
          <span class="cv-skill">Safe reachability</span>
          <span class="cv-skill">Python</span>
          <span class="cv-skill">SystemVerilog</span>
          <span class="cv-skill">MATLAB</span>
          <span class="cv-skill">C++</span>
          <span class="cv-skill">PyTorch</span>
          <span class="cv-skill">scikit-learn</span>
          <span class="cv-skill">Gurobi</span>
          <span class="cv-skill">CVX</span>
          <span class="cv-skill">JasperGold</span>
          <span class="cv-skill">Cadence Xcelium</span>
          <span class="cv-skill">Genus</span>
          <span class="cv-skill">VCS</span>
        </div>
      </div>
    </section>
  </div>

  <section class="cv-section">
    <h3 class="cv-section-title">Research Experience</h3>
    <div class="cv-card">
      <div class="cv-entry">
        <p class="cv-entry__title">Graduate Student Researcher, DesCyPhy Lab, advised by Prof. Pierluigi Nuzzo</p>
        <p class="cv-entry__meta">Berkeley, CA | January 2021 - Present</p>
        <ul>
          <li>Developed an exact transformation from ReLU neural-network controllers to soft decision-tree representations, improving interpretability and scalability for solver-based verification while preserving closed-loop behavior.</li>
          <li>Introduced contract-based robustness specifications that decouple plant dynamics from neural controllers for compositional safety verification, together with an SMT-based abstraction-refinement workflow.</li>
          <li>Formulated MILP-based contract-refinement methods to synthesize tighter assume-guarantee specifications and reduce verification complexity in multi-agent autonomous-driving settings.</li>
          <li>Designed a controller-distillation framework that extracts compact, interpretable control laws from deep RL policies while maintaining performance and strengthening the verification pipeline.</li>
        </ul>
      </div>
      <div class="cv-entry">
        <p class="cv-entry__title">Undergraduate Researcher, Electronic Design Automation Lab, advised by Prof. Yao-Wen Chang</p>
        <p class="cv-entry__meta">Taipei, Taiwan | September 2018 - February 2020</p>
        <ul>
          <li>Implemented a detailed-routing engine with concurrent track assignment and multithreaded routing, handling designs with up to 1M nets using less than 64 GB of memory in 10 hours on benchmark problems.</li>
          <li>Built a routability-driven hybrid global router and a system-level FPGA router with TDM optimization, contributing to recognition in ACM ISPD 2019 and ICCAD 2019 competitions and subsequent publication output.</li>
        </ul>
      </div>
    </div>
  </section>

  <div class="cv-grid">
    <section class="cv-section">
      <h3 class="cv-section-title">Additional Experience</h3>
      <div class="cv-card">
        <div class="cv-entry">
          <p class="cv-entry__title">Graduate Student Instructor, Introduction to Design Automation</p>
          <p class="cv-entry__meta">University of California, Berkeley | Berkeley, CA | January 2026 - May 2026</p>
          <p>Developed instructional examples covering synthesis, simulation, and verification, and supported students across RTL design, timing analysis, and EDA workflows.</p>
        </div>
        <div class="cv-entry">
          <p class="cv-entry__title">Graduate Student Instructor, Computer Architecture</p>
          <p class="cv-entry__meta">University of Southern California | Los Angeles, CA | January 2022 - May 2023</p>
          <p>Developed course materials illustrating processor pipelines, execution models, and memory hierarchy behavior, with repeated teaching support across three offerings.</p>
        </div>
        <div class="cv-entry">
          <p class="cv-entry__title">Software Researcher</p>
          <p class="cv-entry__meta">Institute of Information Science, Academia Sinica | Taipei, Taiwan | June 2018 - September 2018</p>
          <p>Implemented a semi-supervised domain-adaptation pipeline for semantic segmentation using unpaired image translation and segmentation models, improving mean IoU on Cityscapes.</p>
        </div>
      </div>
    </section>

    <section class="cv-section">
      <h3 class="cv-section-title">Selected Projects</h3>
      <div class="cv-card">
        <div class="cv-entry">
          <p class="cv-entry__title">Fantasy Football Performance Prediction with Expert Commentary</p>
          <p class="cv-entry__meta">Course Project, Pattern, Prediction, and Action | December 2025</p>
          <p>Built a unified dataset combining structured performance statistics, expert rankings, and qualitative commentary to model weekly and season-long NFL player outcomes.</p>
        </div>
        <div class="cv-entry">
          <p class="cv-entry__title">Sign Language Translation System</p>
          <p class="cv-entry__meta">Arm Design Contest | September 2018</p>
          <p>Built a real-time sign-language translation system using a single 9-DOF IMU for gesture recognition; awarded 2nd Place and Best Popularity Award.</p>
        </div>
      </div>
    </section>
  </div>

  <section class="cv-section">
    <h3 class="cv-section-title">Selected Awards</h3>
    <div class="cv-card">
      <ul class="cv-awards">
        <li><strong>Outstanding Performance Scholarship</strong>, National Taiwan University | November 2019</li>
        <li><strong>Top 5 and Honorable Mentions</strong>, CAD Contest Problem C | November 2019</li>
        <li><strong>2nd Place</strong>, ACM ISPD Contest | April 2019</li>
        <li><strong>2nd Place and Best Popularity Award</strong>, Arm Design Contest | November 2018</li>
      </ul>
    </div>
  </section>
</div>

</div>
