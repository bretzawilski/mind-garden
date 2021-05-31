---
layout: blog
title: Using Zettelkasten and Obsidian to Learn More Effectively
date: 2021-05-31
tags: post
---
{% image "./blog/2021/05/31/obsidian-screenshot.png", "A screenshot image of Obsidian with text context equivalent to the first two paragraphs of this post", "100vw", page.url %}
Personal knowledge management (PKM) is on the rise, with popular applications like [Roam Research](https://roamresearch.com/), [Obsidian MD](https://obsidian.md/), and [Notion](https://www.notion.so/) leading the charge into a new kind of note-taking. Except, it's not exactly new. Well, not all of it, at least.

<!-- Excerpt Start -->
If you've ever kept track of valuable information through a bullet journal, word document, or an online task manager, then congratulations: you've had some experience with personal knowledge management. The gist of it is that we're surrounded by information, and without a system to handle that information, it's easy to become overwhelmed. 
<!-- Excerpt End -->

Writers like Nicholas Carr have warned us about the dangers of easy access to information. If it's so easy and instantaneous to Google what we want to know, then why bother committing that information to memory? Carr's argument is something I resisted for a long time, but his main assertion—that the tools we use to think shape how we think—is hard to ignore. 

And if there's one thing we know about the tech industry, if there's a problem to be solved, then numerous products will likely be developed to solve the issue. In this case, one of the answers is straightforward. 

All we need are index cards.

## Enter The Zettelkasten
Well, maybe we need more than just index cards. We need a system to make those index cards work together. 

Niklas Luhmann was a German sociologist who developed such a system—a catalogue containing nearly 90,000 individual notes on index cards that were organized in a loose structure that Luhmann described as a "web-like" system. The system was ingenious for its results as much as for its simplicity. 

Zettelkasten simply means "slip box," as in a box in which you could file slips of paper. Index cards, in this case. Those index cards would be labeled with an arbitrary designation. And because the information had to fit on a single index card, the content of those cards was brief by necessity. 

Let's say I wanted to take notes on Javascript. Well, the first card I make might be `1. JavaScript`. On that card, I might write a brief definition of JavaScript, noting that it is a dynamically typed language used for web development. 

Then, let's say I want to provide some more information on closure in JavaScript. Card `1A. Closure` might be next. But let's say I deviate to thinking about CSS. Card `2. CSS` would be added to my slip box after `1A. Closure`. Now I go back and want to talk about JavaScript classes, so I create card `1B. Javascript Classes`. But then I decide to go further into Closure and discuss the concept of "the backpack", so I create card `1A1. The Backpack`. 

Don't worry if you're not following. The main idea is to create a system that is not rigidly structured. If I later decide to expand upon any of these notes, I can simply add one to the box with a more specific designation. Card `1A1a. Closure Execution Contexts` can be added regardless how "far down" I go into closure. 

In many ways, this replicates some of the strengths of the card catalog systems that dominated library search and retrieval systems before digital cataloging was a thing. And in addition to the relational positioning of notes, it was also possible to link related notes by adding a list of "relevant cards" at the bottom of any entry. In that case, if I create card `30A. Python Classes` and want to link to class similarities in JavaScript, I can just write the reference `1B` at the bottom of that card to know to look elsewhere.

---
{% image "./blog/2021/05/31/aaron-burden.jpg", "A photo of a notebook with the label 'Write Ideas' on its front cover", "100vw", page.url %}
_Photo by <a href="https://unsplash.com/@aaronburden?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Aaron Burden</a> on <a href="https://unsplash.com/s/photos/notebook?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText">Unsplash</a>_
  

Sonke Ahrens provides a fully fleshed out description of Zettelkasten in his book, which I joke is the best book with the most boring title: _[How to Write Smart Notes](https://www.amazon.com/How-Take-Smart-Notes-Nonfiction/dp/1542866502)_. Luhmann used this system, largely before widespread adoption of the internet, to compose over 500 scholarly publications, including numerous books, over the course of his life. He would often describe his thinking process as a matter of engaging in conversation with his Zettelkasten (Schmidt, 2018, "Niklas Luhmann’s Card Index: The Fabrication of Serendipity").

Of course, a wealth of applications have attempted to take this method and rework it for the digital era. Wikis in themselves are a similar undertaking in theory, as they are intensely interlinked documents containing information. With a Zettelkasten, though, the process becomes more individualized, and a large portion of the work of making a Zettelkasten comes from finding and taking note of the linkages between ideas.

For that reason, I like to think of Zettelkasten as serendipity machines—tools that help us connect ideas that we wouldn't have otherwise linked if we weren't actively trying to do so. While [Roam Research](https://roamresearch.com/) wasn't the first application to work with this kind of linking structure, it exploded on the scene during its early days of 2019, finding a market of individuals desperate to get their thoughts in order, and while it didn't model itself strictly on the Zettelkasten, its goal was to create intricately linked notes that could be connected together and traced for inspiration. 

The general mindset behind tools like [Roam](https://roamresearch.com/) and [Obsidian](https://obsidian.md/) is that if we make the attempt to connect our thoughts together, we'll profit immensely from the rich intersections of ideas. And the beauty of these tools is that they aren't prescriptive in how they function. 

[Obsidian](https://obsidian.md/), in particular, lets users decide how to organize their thoughts. If you like folders, you can create folders. But if you want to have a "flat" system like the Zettelkasten, where notes are placed near other similar notes and linked to other relevant ideas, then that's possible too.

## Obsidian and Learning to Code
This is all a long introduction to get to a somewhat simple point. Tools like Obsidian—or Roam, or Notion, or Zettlr—can help us be more productive in our thinking and our learning. It assists us in using the knowledge we come across so that we don't forget what we've learned quite so quickly, and it serves as a relational database for our brains in which we can quickly retrieve data and trace previous thought processes. 

While I've been using Obsidian for quite a few months to organize my research for writing projects, I just began to use it for learning to code better. At first, it felt a little counterproductive, since there are some fantastic resoures like the Mozilla MDN out there to grasp the basics of web development.

But the benefit of a Zettelkasten-like system is that we have to synthesize the ideas we encounter in our own words. We have to ensure they make sense to us, and that means while I might grasp a really important concept about the `array.prototype.map()` method from the Mozilla MDN, I'm going to remember it better if I can write out my understanding of how `.map()` works.

Another aspect of modern PKM tools is backlinking. Again, drawing on the features of a wiki, platforms like [Roam](https://roamresearch.com/), [Obsidian](https://obsidian.md/), and even [Notion](https://www.notion.so/) have enabled automatic backlinking. That means, if you create a digital link from one note to an earlier note, the program will recognize that connection and display it on the earlier note without any additional work on your part. Arguably, the idea is to render very clear the connections between ideas with as little friction as possible.

## Obsidian and Writing
Even better, Obsidian makes use of markdown files—plaintext documents that are readable from essentially any computer device made in the past 40+ years. They'll never go obsolete, and you'll never have to worry about support for them disappearing. Additionally, there are a variety of tools that let users take Markdown files and output them as Microsoft Word or Adobe PDF documents (among a variety of other document types). 

In fact, this blog post was written in Markdown within Obsidian. In the end, though, the software is less important than the engagement. As Niklas Luhmann proved, you can create a highly effective personal knowledge management system without touching any digital tools. The important aspect is trying to build connections across concepts and putting complex ideas into your own words for better understanding. 

In the end, I've found a lot of benefits to building out my own digital Zettelkasten in Obsidian, and I'll be curious to see how it helps me better understand the world of development. But, if you're interested in learning new concepts more effectively, then I'd encourage you to check out one of the tools listed in this post. 

A lot of guru-esque figures have appeared in the personal knowledge management arena, but once you reach past some of the marketing bluster, there's a lot to be gained by taking up a note-taking system to help organize your thoughts.