---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of the main pages on the site.

{% assign visible_pages = site.pages | where_exp: "item", "item.sitemap != false" %}
{% if visible_pages.size > 0 %}
<h2>Pages</h2>
{% for post in visible_pages %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}
