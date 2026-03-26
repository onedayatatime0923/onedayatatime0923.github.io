---
layout: archive
title: "CV"
permalink: /cv/
author_profile: true
redirect_from:
  - /resume
---

{% include base_path %}

## Summary

Ph.D. candidate at UC Berkeley building scalable formal-methods and machine-learning research for safety-critical systems. Experience spans neural network verification, contract-based design, optimization, and interpretable controller synthesis, with a focus on translating theory into solver-backed algorithms and rigorous empirical evaluation.

## Skills

* Research Areas: Formal verification, interpretable ML, contract-based design, reinforcement learning
* Methods: SMT, MILP, assume-guarantee reasoning, symbolic abstraction, safe reachability
* Programming: Python, SystemVerilog, MATLAB, C++
* ML / Data: PyTorch, scikit-learn, reinforcement learning, semantic segmentation, domain adaptation
* Tools: Gurobi, CVX, JasperGold, Cadence Xcelium, Genus, VCS

## Research Experience

### Graduate Student Researcher, DesCyPhy Lab, Prof. Pierluigi Nuzzo
Berkeley, CA | January 2021 - Present

* Neural Controller Transformation for Formal Verification: Developed a provably exact transformation from ReLU neural-network controllers to soft decision-tree representations, making solver-based verification more scalable and interpretable. Proved correctness and demonstrated closed-loop safety certification on CartPole, MountainCar, and CarRacing benchmarks, resulting in a CDC 2023 publication.
* Robustness Contracts for Learning-Enabled CPS: Introduced contract-based robustness specifications that decouple plant dynamics from neural controllers for compositional safety verification. Designed an SMT-based refinement algorithm that incrementally tightens layer-wise abstraction bounds to accelerate safe-reachability analysis under bounded uncertainty.
* Assume-Guarantee Contract Optimization: Formulated MILP-based contract-refinement techniques to automatically synthesize tighter assume-guarantee specifications. Improved realizability and reduced verification complexity in multi-agent autonomous-driving scenarios.
* Deep RL Controller Distillation for Verifiability: Developed a controller-distillation framework that extracts compact, interpretable control laws from deep RL policies. Applied optimization-based refinement to preserve task performance while improving closed-loop stability and formal verifiability, resulting in an Allerton 2022 publication.

### Undergraduate Researcher, Electronic Design Automation Lab, Prof. Yao-Wen Chang
Taipei, Taiwan | September 2018 - February 2020

* Implemented an initial detailed-routing engine with concurrent track assignment and multithreaded routing; handled designs with up to 1M nets using less than 64 GB of memory in 10 hours on most benchmarks.
* Built a routability-driven hybrid global router and a system-level FPGA router with TDM optimization; contributed to 2nd place at ACM ISPD 2019, Top 5 / Honorable Mention at ICCAD 2019, and an ICCAD 2021 publication.

## Education

* **University of California, Berkeley**, Berkeley, CA
  Ph.D. in Electrical and Computer Engineering, GPA 3.91/4.00 | January 2021 - Present
  Research focus: formal verification, ML-enabled cyber-physical systems, optimization, and contract-based design. Lab: DesCyPhy Lab, The Donald O. Pederson Center for Electronic Systems Design.
* **National Taiwan University**, Taipei, Taiwan
  B.S. in Electrical Engineering, GPA 3.67/4.00, Last 60 credits 4.00/4.00 | September 2015 - January 2020
  Relevant coursework: physical design, integrated circuit design, computer architecture, machine learning, deep learning for computer vision.

## Additional Experience

* **Graduate Student Instructor of Introduction to Design Automation**, University of California, Berkeley, Berkeley, CA | January 2026 - May 2026
  Developed end-to-end instructional examples demonstrating the EDA toolchain workflow across synthesis, simulation, and verification. Supported course delivery across RTL design, logic synthesis, timing analysis, and verification workflows.
* **Graduate Student Instructor (3x) of Computer Architecture**, University of Southern California, Los Angeles, CA | January 2022 - May 2023
  Developed instructional examples illustrating processor pipelines and the transition from in-order to out-of-order execution. Supported students across pipelining, hazards, caching, and memory hierarchy reasoning.
* **Software Researcher**, Institute of Information Science, Academia Sinica, Taipei, Taiwan | June 2018 - September 2018
  Implemented a semi-supervised domain-adaptation pipeline for semantic segmentation using unpaired image translation and segmentation modeling. Improved mean IoU on the Cityscapes benchmark by combining segmentation training with CycleGAN-generated domain information.

## Selected Projects

* **Fantasy Football Performance Prediction with Expert Commentary** | Course Project, Pattern, Prediction, and Action | December 2025
  Modeled weekly and season-long NFL player performance by combining box-score statistics, expert rankings, and qualitative commentary. Built a unified dataset for supervised prediction and derived text embeddings to capture signals beyond structured numerical features.
* **Sign Language Translation System** | Arm Design Contest | September 2018
  Built a real-time sign-language translation system using a single 9-DOF IMU for gesture recognition. Won 2nd Place and the Best Popularity Award.

## Publications

<ul>{% for post in site.publications reversed %}
  {% include archive-single-cv.html %}
{% endfor %}</ul>

## Selected Awards

* **Outstanding Performance Scholarship**, National Taiwan University | November 2019
  Awarded for outstanding academic performance in electrical engineering.
* **Top 5 and Honorable Mentions**, CAD Contest Problem C | November 2019
  Recognized in an ACM/IEEE contest field of 100+ teams.
* **2nd Place**, ACM ISPD Contest | April 2019
  Placed 2nd among 33 international teams in a leading EDA routing competition.
* **2nd Place and Best Popularity Award**, Arm Design Contest | November 2018
  Placed in the top 3 among 130+ teams in a hardware and embedded-systems design competition.
  
