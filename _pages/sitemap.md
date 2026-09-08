---
layout: archive
title: "Sitemap"
description: "A concise index of pages on Kevin Chiaming Chang's research portfolio."
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

An index of the main pages on this site.

{% assign visible_pages = site.pages | where_exp: "item", "item.sitemap != false" | where_exp: "item", "item.title" %}
{% if visible_pages.size > 0 %}
<h2>Pages</h2>
{% for post in visible_pages %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}

<h2>Publications</h2>
{% assign publications = site.publications | sort: "date" | reverse %}
<ul>
{% for publication in publications %}
  <li><a href="{{ publication.url | relative_url }}">{{ publication.title }}</a></li>
{% endfor %}
</ul>
