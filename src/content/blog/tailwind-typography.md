---
title: "Tailwind-typography"
description: "How to style your Markdown (*.md) files"
pubDate: "Oct 12 2023"
isFeatured: true
---

My first blog article is about a recent issue I encountered during the development of this same project.

In my last project with nextjs I thought it would be easier to load my posts/articles from dev.to instead of having them in markdown docs. Now I want them to be read from MD files and displayed on their own /blog/slug URLs.

## The problem

You cannot easily add class names to your md files. You could have a css file to target the tags in those docs, like h1 and paragraphs, but **_how do you do it with tailwind?_**, which requires a class attribute.

## The solution

I was looking at [this post](https://dev.to/ewatch/styling-markdown-generated-html-with-tailwind-css-and-parsedown-328d) by the user [ewatch](https://dev.to/ewatch), and in the comments section, I found my solution by [bitofuniverse](https://dev.to/bitofuniverse).

## Tailwind/typography plugin

In the [tailwind docs](https://tailwindcss.com/docs/typography-plugin), we can see the use of this plugin. In order to make it work, just add the directive 'prose' and then 'prose-{element}:newDirective'.

```html
<article class="prose prose-h1:text-bold">...</article>
```

This directive will apply the 'bold' directive to every 'h1' tag within this article.

It works by checking which tag has the prose atributte in the class name, and updating the values for those cases. For more information, visit their GitHub repository [here](https://github.com/tailwindlabs/tailwindcss-typography/blob/master/src/index.js).
