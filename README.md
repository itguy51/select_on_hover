select_on_hover
===============

Select text in elements that are hovered over.

Usage
=====
Just make sure that the items that want this functionality have a unique ID along with the class `selectable`
This will take care of the rest.

To re-focus on the body, hover over something else, or click anywhere.

Why?
====
I made this because I was trying to copy-paste a code snippet that was in a `<pre>` element, and I kept instinctively
doing ctrl+a to select it, and to my frustration, it would select the entire page. I would like to see some elements
in HTML naturally behave similar to this, such as larger `<pre>` elements, but for the time being, I just wrote a 
tiny fix.