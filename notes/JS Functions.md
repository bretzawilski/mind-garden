---
'note.njk'
title: Javascript Functions
---
# Javascript Functions
Functions are called by placing parentheses at the end of the function identifier. Any constant or variable attached to a function call is uninitialized until a separate function execution context is completed. 

Functions are like miniature programs that have a local memory and their own linear set of instructions as dictated by the function declaration. Functions can take in variables called parameters. Parameter inputs are called arguments. 

A better way of phrasing this is that parameters accept arguments.

When a function is called, it is placed on the "Call Stack", which signals where the linear body of Javascript is currently executing code. When the code within the function has run, the execution context is destroyed and the function comes off the call stack, returning us to the global context.