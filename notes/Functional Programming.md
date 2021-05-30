---
layout: note
title: Functional Programming
---

# Functional Programming
Functional programming is a paradigm of programming that looks to create pure functions, or rather functions that only take in input and produce output. This is done without side effects. This page will primarily look at functional coding as it relates to JavaScript.

## Major Concepts
- Functional programming looks at programs as pipelines of functions through which data flows. 
	- All communication with the outside world—or side effects—are left until the very end of the programs so that the data can be handled without errors or complication.
- Some languages support functional programming, while others don't.
- [[javascript index]] is not a functional language by default, but it can act as one, which means it can be a useful laboratory to explore functional concepts.
- Functional programming is a kind of declarative programming in that we are less concerned with the individual steps of how some goal is achieved through coding? **Is this correct?**
- Functional programming strives for "pure functions" that do not look outside of the function for additional data. They may refer to global functions, but they will not make use of global data, such as variables or objects.
	- In other words, even if a global function is used, that global function must itself be a "pure" function in order for the container function to be considered "pure".
- Only thing a pure function does is return data, through a `return` statement.
- Because all of our side effects are pushed until the end of the program, all of the logic of the program and manipulating the data becomes easier because it's done without communicating with the outside world / global context.