---
permalink: /feed/feed.xml
---
<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0">
    <channel>
        <title>FormularSumo</title>
        <subtitle>James Heppell's personal blog</subtitle>
        <link href="https://formularsumo.co.uk/feed/feed.xml" rel="self" type="application/rss+xml"/>
        <link href="https://formularsumo.co.uk/blog/"/>
        <id>https://formularsumo.co.uk</id>
        <author>
            <name>James Heppell</name>
        </author>
        <generator>{{eleventy.generator}}</generator>
        
{% for post in collections.post reversed -%}
    {% if post.data.tags contains "en" -%}
        <item>
            <title>{{post.data.title}}</title>
            <link>{{post.url}}</link>
            <id>{{post.url}}</id>
            <description>{{post.data.description}}</description>
            <content type="html">{{post.content}}</content>
        </item>
    {% endif -%}
{% endfor -%}
    </channel>
</rss>