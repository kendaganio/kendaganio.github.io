---
title: "Rewriting jkbx from Angular 1.x to Vue"
date: "2018-02-15"
published: false
tags:
  - software-development
  - vue
  - angular
  - personal-projects
---

The framework [Vue](https://vuejs.org/) has constantly been flashing in my radar as a new shiny thing to learn.
I was still busy upping my React game and had no opportunity to learn new stuff (read: I'm a fucking slob).
But as a resolution of sorts I want to commit code at least once a day. This sets up a good excuse to learn Vue!

Vue was created by this dude [Evan You](https://github.com/yyx990803), who at the time was working for Google and Angular. 
He pulled out what he liked about Angular, added in a virtual DOM, stripped it down to remove all the cruft he wouldn't
need, and made it really lightweight. My first impression was that it really reminds me of the Angular of yore. 
The prefixed directives, the two-way binding, models, and controllers. Man, what a feels trip!


```javascript
<div id="app">
  {{ message }}
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!'
  }
})
```
*Actual "Hello, world!" example from the [docs](https://vuejs.org/v2/guide/)*

### The ~~Master~~ Plan
