---
layout: blog
title: Making a Project My Own
date: 2021-06-07
tags: post
---

<!-- Excerpt Start -->
I would't say that I'm trapped in tutorial hell, but I am working through a series of resources that are teaching me more of the ins and outs of web development. Today was a #Javascript30 day, and I decided to make the first proejct in the series—the drum kit—my own.
<!-- Excerpt End -->

For the past four years, I've been making a podcast with a friend. We chat about movies in the Criterion Correction, and we usually have a good time. It's a small program, but we enjoy it. As I was looking at the #Javascript30 drum kit, I couldn't help but wonder: how can I make this my own? How can I extend it beyond its original functionality?

{% image "./blog/2021/06/07/soundboard.png", "A screenshot of the finished Criterion Correction soundboard app", "100vw", page.url %}

Well, first I decided to get rid of the deprecated keyCode property so I'd stop seeing strikethrough lines in my code. It was a really simple fix. Turns out the property.key works quite well and...just uses letters. 

I also decided that I wanted to change up the content. Instead of a drum kit, I wanted to make a soundboard with some clips from our podcast. This was a really easy substitution—the hardest part was locating audio clips in our old files, and that was just a matter of taking the time to do it. 

The second tricky (though not very) element was making the app work on mobile devices. See, the original uses `keydown` events to trigger the sounds and the visual transitions on the page. But on a mobile device, there isn't a keyboard to use. Instead, I needed to make a good old-fashioned click event on each of the triggers for the sounds.

The biggest takeaway I need to investigate is `document.getElementsByClassName` versus `document.querySelectorAll`. I thought they'd be equivalent, but the `forEach` command that works so well on querySelector...does not work on getElementsByClass. So, that will be something I plan to investigate further.

Additionally, I need to better understand the options for the css `transform` property. I first made changes to the size of objects individually, but seeing the use of `transform: scale(1.1);` was enlightening. 

So, another day of coding down, and a fun project as the result. 

If you're interested in boosting your own JavaScript skills, check out the entire [30 Days of JavaScript](https://javascript30.com/) challenge.


