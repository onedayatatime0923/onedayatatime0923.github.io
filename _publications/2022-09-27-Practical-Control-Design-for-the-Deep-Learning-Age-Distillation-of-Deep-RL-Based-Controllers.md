---
title: "Practical Control Design for the Deep Learning Age: Distillation of Deep RL-Based Controllers"
collection: publications
permalink: /publication/deep-rl-distillation
date: 2022-09-27
venue: "Allerton Conference on Communication, Control, and Computing"
---

This paper studies how to turn high-performing deep reinforcement learning controllers into simpler controllers that are easier to analyze, verify, and deploy in safety-critical settings. The core idea is to distill a learned policy into a more compact control representation while preserving closed-loop behavior closely enough to remain useful in practice.

Key contributions:
* Proposes a distillation pipeline that converts deep RL controllers into more interpretable and verification-friendly control laws.
* Preserves strong task performance while reducing policy complexity and improving analytical tractability.
* Connects learned control with classical control-design reasoning, including stability and robustness analysis.
* Demonstrates the method on representative continuous-control benchmarks relevant to autonomous and cyber-physical systems.
