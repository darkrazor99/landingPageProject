# Landing Page Project

## Table of Contents

* [Summary](#Summary)
* [Instructions](#instructions)
* [Features](#Features)
* [Resourses](#Resourses)


## Summary

This project is a landing page with a dynamically generated navigation menu, the navigation menu has links that when clicked scrolls to the corresponding section.

## Instructions

In order to run this project you can simply download the zip file and drag the index.html into your browser.

## Features

1. create navigation menu dynamiclly 
2. scroll to corrosbonding section when a menu link is clicked
3. when scrolling the section being viewed is in an active state
4. the navigation menu is hidden when the user doesn't scroll or hover over it for 5 seconds.

## Resourses

I used the following documentations and resourses to help me 

* The MDN Web Docs documentation of Intersection Observer API
    * https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API
* The MDN Web Docs documentation of Element.scrollIntoView()
    * https://developer.mozilla.org/en-US/docs/Web/API/Element/scrollIntoView
* video made by Kevin Powell, great explination of IntersectionObserverApi 
    * https://www.youtube.com/watch?v=T8EYosX4NOo
* HTML global events
    * https://www.w3schools.com/tags/ref_eventattributes.asp
* This post gave me the idea to set the style property opacity to 0 instead of setting the display property to none or the visibility property to hidden, and by setting opacity to 0 I can use the mouseOver html event to fire an event on the element
    * https://stackoverflow.com/questions/8595311/hover-over-a-hidden-element-to-show-it
