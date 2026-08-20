---
title: "Practical Control Design for the Deep Learning Age: Distillation of Deep RL-Based Controllers"
collection: publications
permalink: /publication/deep-rl-distillation
date: 2022-09-27
venue: "2022 58th Annual Allerton Conference on Communication, Control, and Computing"
publication_type: "Conference paper"
authors: "Nathan Dahlin, Kevin Chang, Krishna Chaitanya Kalagarla, Rahul Jain, and Pierluigi Nuzzo"
summary: "A practical workflow for distilling deep-RL controllers into simpler decision-tree and kernel models that are easier to validate and deploy."
description: "A controller-design workflow that distills deep reinforcement-learning policies into interpretable decision-tree and support-vector-machine controllers."
paperurl: "https://doi.org/10.1109/Allerton49937.2022.9929399"
doi: "10.1109/Allerton49937.2022.9929399"
---

This paper proposes a control-design workflow in which deep reinforcement learning produces a high-performance reference policy, then imitation learning distills that policy into a simpler non-neural controller for validation and deployment.

## Why it matters

The workflow separates performance-oriented learning from the final controller representation. That makes it possible to use deep RL during design while deploying models that are smaller, more interpretable, and more amenable to verification and validation.

## Key contributions

- Shows the existence of exactly equivalent soft decision trees for a class of neural controllers.
- Distills deep-Q-network policies into decision trees and Gaussian-kernel support vector machines.
- Introduces metrics for evaluating the fidelity and performance of distilled controllers.
- Studies MountainCar, CartPole, and CarRacing benchmarks.
