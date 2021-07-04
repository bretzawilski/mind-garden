---
'note.njk'
title: Thread of Execution
---
# Thread of Execution

JavaScript is a single-threaded language that processes its code synchronously. That's a fancy way for saying that Javascript goes line-by-line through its code from top to bottom and can only process one instruction at a time. 

All code is executed within an execution context, or a specific environment. Code that is not embedded within a function will operate in the global execution context. Code within a function will operate within the execution context of that function. And once a function has been called and the thread of execution leaves that function call, the execution context of the function is deleted and no data is retained.

Exceptions to the above do not break this rule but make use of Closure.