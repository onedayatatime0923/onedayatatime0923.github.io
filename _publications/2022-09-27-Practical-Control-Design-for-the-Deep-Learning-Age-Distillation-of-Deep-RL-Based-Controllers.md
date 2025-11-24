---
title: "Practical Control Design for the Deep Learning Age: Distillation of Deep RL-Based Controllers"
collection: publications
permalink: /publication/deep-rl-distillation
date: 2022-09-27
venue: "IEEE Transactions on Automatic Control (TAC)"
---

This paper bridges **deep reinforcement learning (Deep RL)** and **classical control theory** by introducing a **distillation framework** that translates neural network controllers into interpretable, verifiable control structures such as decision trees or linear feedback laws.  
The approach enables the application of **formal verification**, **robustness guarantees**, and **analytical stability analysis** to data-driven control policies.

Key contributions:
* Proposes a **model distillation method** to convert Deep RL controllers into compact symbolic forms.  
* Demonstrates **performance-preserving equivalence** between the neural controller and its distilled counterpart.  
* Provides theoretical guarantees for **stability**, **robustness**, and **implementation efficiency** in real-time systems.  
* Validates the approach through case studies on continuous-control benchmarks (e.g., CartPole, MountainCar, and CarRacing).
