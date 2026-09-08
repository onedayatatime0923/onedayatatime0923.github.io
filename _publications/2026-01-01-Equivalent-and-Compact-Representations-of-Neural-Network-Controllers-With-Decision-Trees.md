---
title: "Equivalent and Compact Representations of Neural Network Controllers With Decision Trees"
collection: publications
permalink: /publication/equivalent-compact-dt-controllers
date: 2026-01-01
publication_year: 2026
venue: "IEEE Transactions on Automatic Control"
publication_type: "Journal article"
authors: "Kevin Chang, Nathan Dahlin, Rahul Jain, and Pierluigi Nuzzo"
summary: "An exact, pruning-aware transformation from discrete-output neural controllers to soft decision trees that can substantially reduce verification time."
description: "An exact transformation from discrete-output neural-network controllers to compact soft decision trees for interpretable and scalable formal verification."
paperurl: "https://doi.org/10.1109/TAC.2026.3676368"
doi: "10.1109/TAC.2026.3676368"
arxiv: "https://arxiv.org/abs/2304.06049"
---

Neural-network controllers can perform well while remaining difficult to inspect or verify. This work constructs soft decision-tree controllers that are exactly equivalent to discrete-output neural controllers, including networks with ReLU activations and argmax operations.

## Why it matters

The transformation preserves the controller's input-output behavior, so properties established on the tree apply to the original neural controller. Automatic branch pruning also makes the resulting representation more useful for solver-based analysis and implementation.

## Key contributions

- Establishes an exact equivalence result for discrete-output neural-network and soft decision-tree controllers.
- Develops an automated transformation that removes redundant branches during construction.
- Evaluates the method on MountainCar, CartPole, and CarRacing controllers.
- Reports verification-time improvements of up to 21x on MountainCar and 2x on CartPole.
