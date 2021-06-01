---
layout: blog
title: Lessons from the IDE — :root, Boxes, and SRCSETs
date: 2021-06-01
tags: post
---
_Welcome to Lessons from the IDE, a recap of successes, failures, and glitches (so, so many glitches) from my daily coding._
 
<!-- Excerpt Start -->
Today I started working through one of the free challenges from [Frontend Mentor](https://www.frontendmentor.io/), the "Stats preview card component." It was listed as a "newbie" difficulty, so I thought as a newbie, it wouldn't cause too much of a problem. Spoiler: I was wrong.
<!-- Excerpt End -->

That said, the value of any project is locating gaps of knowledge. In this case, I found quite a few gaps in my understanding of CSS and divs. I've been trying to strengthen my Grid and Flexbox skills over the past few days, so setting up the initial card wasn't too painful. 

{% image "./blog/2021/06/01/desktop-design.jpg", "An image mockup of what the final stats preview card should look like", "100vw", page.url %}

Oh, and I almost forgot. Today marks my first entry for [#100DaysOfCode](https://twitter.com/search?q=%23100DaysOfCode)!

## Let's get to the :root of it
First, I decided to capture some of the colors of the design through css variables. The `:root` pseudo-class was one of the first quality of life improvements I encountered when I started coding again. Rather than having to update a whole list of color hexcodes or property values for each element (I hadn't tried SASS or another pre-processor in the past), global variables let you declare properties that you can slot into nearly any selector. 

I've seen them most commonly used for setting up a color palette (or dark/light mode color options), but if there's a particular margin or padding setup you plan to use across various elements, you can also declare those in a variable. 

They look something like this:

``` css
:root {
    --primary-color: blue; 
    --secondary-color: rgb(173, 94, 215);
    --accent-color: #f72585;
    --card-padding: 1rem 2rem;
}
```

After establishing the variables, they can be dropped elsewhere in the stylesheet, which is incredibly helpful if you decide to change your colors later on. If you apply the `--accent-color` in three different places, then you don't need to hunt down each of those instances in the code. Change the global variable and your work is done.

Here's a look at variables in action:

``` css
main {
	background-color: var(--secondary-color);
	padding: var(--card-padding);
}

a {
	color: var(--accent-color);
}
```

## Quick Headache Prevention
I don't know much, but I know box sizing used to be a huge pain. Setting the size of divs meant having to calculate not just image content, but also padding, borders, and margins. Thankfully there's a way to change the box-sizing model that means you only have to worry about the content size and padding, which makes life a lot easier.

Many programmers suffered for this fix, so I give my obligatory thanks here:
``` css
html {
    box-sizing: border-box;
}

*,
*:before,
*:after {
    box-sizing: inherit;
}
```

This did seem to make aligning the two main divs of the project simpler. But, as I said before, glitches are part of life. And not all content plays nicely.

## Boxes and boxes of fun
Another issue I came across was having an image fill a div. For the main image of the card project, I had to find a way to use CSS to add a tint to a black-and-white photograph. At first I tried to use the `background` property of a div to set the photo as the background image for the `div` and put a semi-transparent fill over it. 

This works, but you can't just apply a color for some reason. It needs to be a linear gradient, even if you're looking for a solid fill color...

``` css
#image-container {
	background: linear-gradient(var(--image-tint-color), var(--image-tint-color)), url(images/image-header-desktop.jpg);
}
```

But, there's a bit of an unintended side-effect. If you're not interested in responsive fluid resizing, you can set the `width` and `height` of the div and you'll be all set. However, you need to use fixed values like pixels, or else the div registers as empty and doesn't render properly. 

I saw a solution for this involving setting the `padding` of the div to a percentage representing the ratio of the background-image, but I also decided to see if there was another way to tint an image.

Yes, there is. 

You can plug in an old fashioned image into a div container and set the container's background color to appear in front of the container's items through the `object-fit: cover` property. From there, use an `rgba` color assignment to select a semi-transparent fill color and you've got a basic image tint. Voila.

``` css
  .image-container {
    background-color: rgba(165, 62, 255, 0.536);
    object-fit: cover;
    overflow: hidden;
  }
```

However, I did run into one final issue that took a bit of Googling to fix. The image in my div wasn't exactly aligned with the boundaries of the div itself. I learned that an `<img>` tag automatically displayed in-line has a phantom line-height value attached to it. So the fix for my pixel-imperfect alignment was to set my image to display as a block. 

I'm noting this because I can see it causing me a lot of stress in the future if I were to forget this simple fact. 

``` css
img {
  display: block;
}
```

## Curse you gods of responsive images...
Of course we all know this isn't the end of images, and I'm still grappling with the syntax of the following code. Basically, I knew that srcsets were a thing from a prior project, but I still didn't understand how to set them up without simultaneously displaying them overlapping on the page. 

I know, this stinks of newbie problems, but I spent longer than I'd care to admit looking at several different templates to get responsive images to work and serve different images to different screen resolutions. I'm not even sure my current solution is optimized as it stands, but this did the trick for my project.

``` html
<picture
  ><source
	srcset="images/image-header-desktop.jpg"
	media="(min-width:1000px)"
  />
  <source
	srcset="images/image-header-mobile.jpg"
	media="(max-width: 999px)"
  />
  <img src="images/image-header-desktop.jpg" alt="Please, just work!" />
</picture>
```

The two `source` tags list the images that are part of the `srcset` and the `media` property determines how those images are displayed. In this instance, the larger of my images, `image-header-desktop.jpg` will display any time a user's browser resolution is greater than 1000 pixels.

If the user's browser resolution is lower than 1000 pixels, the second `source` tag sets it so that they will be served the smaller `image-header-mobile.jpg` instead. 

I'm going to have to investigate this further, but it worked for my current purposes, so I'm going to call this a tentative success on the day. I'm somewhat spoiled because I let the `eleventy-img` package take care of this on my personal site rather than having to handcode it. 

## Lessons to Remember
1. If you run into alignment problems, try implementing the `box-sizing: border box` fix.
2. Don't assume the first solution you find is the best solution. I tried working with image-tinting the background-image of a div for a long time before discovering the `object-fit` approach for a standard `<img />` tag. 
3. Images need to be displayed as a `block` in order to correctly fill a div!
4. srcsets are powerful, but I'd be lying if I said I fully understood the intricacies of the syntax since I believe I'm missing a few properties here...

## Conclusion
I've still got some work left to do on the challenge project, but it's nearing its completion. I'll either wrap up work on it tonight or tomorrow, but I'll be sure to keep track of any additional bugs I encounter. There's bound to be more than few.

Thanks for reading and I'll be back tomorrow with more Lessons from the IDE.