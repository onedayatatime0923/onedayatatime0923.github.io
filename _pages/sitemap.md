---
layout: archive
title: "Sitemap"
description: "A concise index of pages on Kevin Chiaming Chang's research portfolio."
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

An index of the main pages on this site.

{% assign visible_pages = site.pages | where_exp: "item", "item.sitemap != false" %}
{% if visible_pages.size > 0 %}
<h2>Pages</h2>
{% for post in visible_pages %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}
