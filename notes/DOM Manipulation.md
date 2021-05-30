---
layout: note
title: DOM Manipulation
---
One of the most powerful features of Javascript is the ability to manipulate the DOM of an html document. Essentially, it can modify the DOM in a way that is not represented in the source code, but which can affect what information a browser displays. There are several pertinent commands here to be aware of.

Virtual DOMs seem to be the purview of specific frameworks like React. I'm not exactly sure what the difference is when it comes to a virtual DOM.

## document. commands
``` js
const selectedEement = document.getElementById('id-tag');
const newElement = document.createElement('tag');
selectedElement.appendChild(newElement);
```

This gets tricky, especially when pairing with CSS styles. Event listeners can be added to a number of different functions in very complex ways. In the canopy-copycat project I did not fully understand how to make content appear and disappear at will in specific divs. I'm afriad that I've got something conceptually wrong with my understanding of the page and how DOM manipulation works.