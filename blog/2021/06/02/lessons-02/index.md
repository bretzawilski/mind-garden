---
layout: blog
title: Lessons from the IDE — Justify, Align, and Decisions
date: 2021-06-02
tags: post
---
_Welcome to Lessons from the IDE, a recap of successes, failures, and glitches (so, so many glitches) from my daily coding. This article was originally posted at [bret.design]()_ 

<!-- Excerpt Start -->
Another day, another battle with CSS. I finished the Frontend Mentor "Stats Preview Card Component" today, and you can see my solution [here](https://stats-preview-card-pi.vercel.app/). I'm going to try to take this concept and re-work it for my own site with another image and some separate text. 
<!-- Excerpt End -->

In the classes I teach, I often talk about writing as remix. Originality isn't a matter of thinking of what no one else has considered. It's really about combining ideas that haven't been brought together before. In that way, creativity doesn't have to be some mystical talent that and individual possesses or doesn't possess. It's a process of gathering a library of sources to mix together.

<a href="https://everythingisaremix.info" target="_blank">{% image "./blog/2021/06/02/remix.png", "Title card from the online documentary, Everything is a Remix", "100vw", page.url %}</a>

Coding is the same, in more ways than I thought. `package.json` files are testaments to the power of remix, letting us pull from the work of so many other creators. Even working in isolation as a solo coder, it's impossible to escape working with others' ideas, and that's a huge benefit.

As a novice developer, I often have to remind myself:
- My job isn't to invent what has never existed before
- I'm building to learn and to repurpose what I learn
- Tutorials are always stage one; stage two is making it your own

## Blast from the past
I also decided to take a look at two websites that I made back in the dark ages of the web. They're both hosted by Tripod, which through some demonic power has managed to stay online despite the collapse of its contemporary peer, Geocities. Both sites make use of framesets and I also managed to make link image-buttons that change from monochrome to color renders when you hover on them. 

I need to look at the code, because I'm fairly certain CSS wasn't a part of that feature, and I sure didn't know javascript back then. Unless I pulled a copy/paste job in the code. However, it did make me want to do two things.

1. I need to archive those sites, scrape the code, and put them up on github; maybe I'll even check the Wayback Machine to see if I can grab different renditions.

I mean, these sites are prime archaeological relics of the past, from a time when Netscape Navigator was the browser of choice and the web itself felt very...gray. No, really, my predominant memory of the internet in those days were gray pages in a gray browser. That and webcrawler.

2. I need to rebuild those sites without the frames, and with a little better design, but in the spirit of the originals. Perhaps I can think of it as communing with my teenage self.

## Alignment glitches
Of course, the day wouldn't be complete without a maddening CSS issue with a simple solution. In my attempts to center content in divs, I spent quite a long time trying to get my text to center itself using all of the CSS Grid tactics I could think of, referring to several cheatsheets along the way.

But, in my haste to make use of Grid, I forgot that `text-align` is a property in CSS. Whenever I tried to do a `justify-items: center;` call, content that fit on a single line would behave nicely and move to the middle of the div. But if the content extended across several lines, it would become justified but the last line would hang to the left. 

{% image "./blog/2021/06/02/text-align.png", "An excerpt of css code featuring the text-align property", "100vw", page.url %}

At long last, I remembered that I could simpel call `text-align: center;` and be done with it. 

## Choices and Dilemmas
Finally, I found myself running into a debate that I'd avoided up to this point. Since coming back to code, I decided that I would angle myself towards React development, since it's the most popular frontend JS framework. However, in these early stages, I won't lie; some of the tutorials I've watched practice dark magic that I can't yet understand in terms of passing props and managing state. 

So I looked at some introductory resources on Vue and...it started making a little more sense. I'm not deep into React right now, but so many of the resources I passively encounter on daily.dev focus on React. Yet, if Vue makes more sense, should I start learning that framework instead? 

In the end, I decided to do the only rationale thing: double down on vanilla JS basics and delay the decision. 

## Lessons to Remember
1. Remember the basics and don't aim for the flashiest solutions: you'll forget something like `text-align: center;` and kick yourself once you fix the code.
2. There is too much to learn.
3. But that's a good thing, because it means there's always a direction to pursue and growth mindsets are real.
4. Community is important, even if it starts by talking to yourself in blog posts.

{% image "./blog/2021/06/02/reveal.png", "RevealJS logo", "100vw", page.url %}

## Conclusion
Thanks for taking the time to read through _Lessons from the IDE_. Tomorrow I'm hoping to do something slightly different and write up a comparison of two prominent developer-facing slide-deck applications: RevealJS and sli.dev.

Which one will become the markdown-driven slide-deck builder of my dreams?

{% image "./blog/2021/06/02/slidev.png", "A screenshot of a markdown file used by sli.dev", "100vw", page.url %}