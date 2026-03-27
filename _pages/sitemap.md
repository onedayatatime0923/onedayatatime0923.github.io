---
layout: archive
title: "Sitemap"
permalink: /sitemap/
author_profile: true
---

{% include base_path %}

A list of the pages and collections found on the site.

{% assign visible_pages = site.pages | where_exp: "item", "item.sitemap != false" %}
{% if visible_pages.size > 0 %}
<h2>Pages</h2>
{% for post in visible_pages %}
  {% include archive-single.html %}
{% endfor %}
{% endif %}

{% for collection in site.collections %}
{% unless collection.output == false or collection.label == "posts" or collection.label == "portfolio" or collection.label == "teaching" or collection.label == "talks" %}
  {% assign visible_docs = collection.docs | where_exp: "item", "item.sitemap != false" %}
  {% if visible_docs.size > 0 %}
  <h2>{{ collection.label }}</h2>
  {% for post in visible_docs %}
  {% include archive-single.html %}
  {% endfor %}
  {% endif %}
{% endunless %}
{% endfor %}
