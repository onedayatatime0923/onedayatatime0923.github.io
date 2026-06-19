---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <p class="home-hero__eyebrow">Berkeley EECS</p>
  <h2 class="home-hero__title">Kevin Chang</h2>
  <p class="home-hero__kicker">Trustworthy autonomy, designed with formal guarantees.</p>
  <p class="home-hero__lead">I am a Ph.D. candidate in the Department of Electrical Engineering and Computer Sciences at the University of California, Berkeley, advised by Prof. Pierluigi Nuzzo. My work connects formal methods, optimization, and machine learning so autonomous systems can be designed and analyzed with stronger guarantees.</p>
  <div class="home-command" aria-label="Primary navigation">
    <span class="home-command__text">Explore publications, research themes, and collaboration.</span>
    <div class="home-command__actions">
      <a class="btn btn--primary" href="/publications/">Publications</a>
      <a class="btn btn--secondary" href="/files/cv/resume.pdf" download="resume.pdf">CV</a>
    </div>
  </div>
  <nav class="home-tabs" aria-label="Homepage sections">
    <a href="#research">Research</a>
    <a href="#selected-work">Selected Work</a>
    <a href="#contact">Contact</a>
  </nav>
</section>

<section class="home-proof" aria-label="Research snapshot">
  <p>Research areas</p>
  <span>Formal Methods</span>
  <span>Optimization</span>
  <span>Learning-Enabled Control</span>
  <span>Cyber-Physical Systems</span>
</section>

<section class="home-grid" id="research" aria-label="Research overview">
  <article class="home-card">
    <p class="home-card__eyebrow">Research</p>
    <h3>Current focus areas</h3>
    <ul class="home-list">
      <li>Assume-guarantee contract frameworks for scalable and compositional CPS design.</li>
      <li>Verification and analysis of neural network controllers with formal and optimization-based methods.</li>
      <li>Control design for decentralized, distributed, and hybrid intelligent systems.</li>
      <li>Applications in robotics, aerial autonomy, and safety-critical infrastructure.</li>
    </ul>
  </article>
  <article class="home-card home-card--accent" id="selected-work">
    <p class="home-card__eyebrow">Selected Work</p>
    <h3>Start with these publications</h3>
    <div class="home-pill-row">
      <a href="/publication/equivalent-compact-dt-controllers">Decision-tree controller representations</a>
      <a href="/publication/passivity-hybrid-learning">Hybrid learning rules and passivity</a>
      <a href="/publication/nn-to-dt">Exact neural controller transformation</a>
      <a href="/publication/deep-rl-distillation">Deep RL controller distillation</a>
    </div>
  </article>
</section>

<section class="home-section" aria-label="Research workflow">
  <p class="home-card__eyebrow">Research Workflow</p>
  <h2>From specifications to verified autonomy</h2>
  <div class="home-feature-list">
    <article>
      <h3>Model the system</h3>
      <p>Use contracts, hybrid-system structure, and compositional abstractions to expose the design assumptions that matter.</p>
    </article>
    <article>
      <h3>Analyze the controller</h3>
      <p>Connect optimization, verification, and learning-based representations to reason about neural and decision-tree controllers.</p>
    </article>
    <article>
      <h3>Scale the guarantees</h3>
      <p>Build methods that remain useful for distributed, decentralized, and safety-critical cyber-physical systems.</p>
    </article>
  </div>
</section>

<section class="home-card home-card--wide home-contact" id="contact">
  <p class="home-card__eyebrow">Contact</p>
  <h3>Continue the conversation</h3>
  <p>I am interested in conversations around verification, safe autonomy, and compositional design methodologies.</p>
  <div class="contact-links">
    <a href="mailto:{{ site.author.email }}">Email</a>
    <a href="https://scholar.google.com/citations?user=mJg5s2oAAAAJ&hl=en">Google Scholar</a>
    <a href="https://github.com/onedayatatime0923">GitHub</a>
    <a href="https://www.linkedin.com/in/kevincmchang/">LinkedIn</a>
  </div>
</section>
