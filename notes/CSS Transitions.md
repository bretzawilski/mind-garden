---
'note.njk'
title: CSS Transitions
---
# CSS Transitions
CSS has the ability to create animations on different styles. There are two components to keep in mind here. 
[[CSS Index]]

## Transition
The first is the `transition` property that can be placed on a particular head. This property ensures that any further transitions are applied over a specific amount of time. I do need to explore this selector further.

`transition` is a shorthand for several properties, meaning that it can apply multiple settings at once:
`transition-delay`:
`transition-duration`:
`transition-property`:
`transition-timing-function`:

The first argument for `transition` can be `none`, `all`, or a specific css property, such as margin or font size

### Examples
The following code sets an animation. The first block determines default settings of a button and sets transition properties for any animations that are enacted.

The second block sets the conditions for activation of the animation and sets it to hover. because the button object has already had a transition declared, the change to its state in the hover pseudoclass ensures that the font-size change will be animated as described in the first code block.
``` css

button {
	font-size: 1em;
	transition: font-size, 1s;
}

hover:button {
	font-size: 2em;
}
```

