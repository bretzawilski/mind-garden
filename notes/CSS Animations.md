---
layout: note
title: CSS Animations
---

# CSS Animations
JS animations are tricky territory, as they require the use of properties that seem to be somewhat browser specific. And then they require individual keyframe calls. I'm also not entirely sure of the difference between transitions and animations at this point. Perhaps I need to revisit this later.

Here's an example of this behavior.

``` css
.page-active {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(800px, 1fr));
  margin-top: -1000px;
  margin-left: 60px;
  animation: fadeIn ease 1.25s;
  -webkit-animation: fadeIn ease 1.25s;
  -moz-animation: fadeIn ease 1.25s;
  -o-animation: fadeIn ease 1.25s;
  -ms-animation: fadeIn ease 1.25s;
  animation-fill-mode: forwards;
}
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  50% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}
```