---
permalink: /
author_profile: true
redirect_from: 
  - /about/
  - /about.html
---

<section class="home-hero">
  <div class="home-hero__visual" aria-hidden="true">
    <img src="{{ '/images/research-hero.png' | relative_url }}" alt="">
  </div>
  <p class="home-hero__eyebrow">Berkeley EECS</p>
  <h2 class="home-hero__title">Kevin Chang</h2>
  <p class="home-hero__kicker">Trustworthy autonomy, designed with formal guarantees.</p>
  <p class="home-hero__lead">I am a Ph.D. candidate in the Department of Electrical Engineering and Computer Sciences at the University of California, Berkeley, advised by Prof. Pierluigi Nuzzo. My work connects formal methods, optimization, and machine learning so autonomous systems can be designed and analyzed with stronger guarantees.</p>
  <nav class="home-tabs" aria-label="Homepage sections">
    <a href="#research">Research</a>
    <a href="#selected-work">Selected Work</a>
    <a href="#contact">Contact</a>
  </nav>
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
      <a href="{{ '/publication/equivalent-compact-dt-controllers' | relative_url }}">Decision-tree controller representations</a>
      <a href="{{ '/publication/passivity-hybrid-learning' | relative_url }}">Hybrid learning rules and passivity</a>
      <a href="{{ '/publication/nn-to-dt' | relative_url }}">Exact neural controller transformation</a>
      <a href="{{ '/publication/deep-rl-distillation' | relative_url }}">Deep RL controller distillation</a>
    </div>
  </article>
</section>

<section class="home-contact" id="contact">
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
