---
'note.njk'
title: Variable Types
---

# Variable Types
Javascript possesses a series of different variable types. 

`var` is the original type, and it is function scoped. That means if a `var` is declared within a function, its data is only accessible from within that function call (though nested functions can access var's contents). A `var` placed in an if statement, for example, will still be executed in the global context (unless that if statement is executed within a function call).

`let` and `const` are ES6 additions to the language. They are both **block scoped** rather than function-scoped. This means that in addition to being confined to the execution context in which they are executed, they are also scoped to their individual blocks of code. In this instance, a `let` or `const` identifier would be scoped to within an if statement, or a for loop, and so on. This gives them more limited scope but allows the data to be more effectively contained to avoid memory leaks or other problems.

`let` functions in the same manner as `var`, in that its contents, or its relation to data can be changed or modified at any point. 

`const` on the other hand, can never be reassigned. Once it has been assigned to a data block, that relationship is permanent. However, if a `const` is attached to an array or object, additional items can be added to that object. 

In other words...
``` js
const planet = 'Earth';
planet = 'Mars';
```
...would result in an error, because `const` planet is permanetly assigned to earth.

However...
``` js
const planets = ['Earth'];
planets.push('Mars');

console.log(planets);

> ['Earth', 'Mars']
```
...this code would not cause an error. The `const` planets is still assigned to the original array. But additional planets can be added to the array at any time.