---
title: "Rewriting jkbx from Angular 1.x to Vue"
date: "2018-02-15"
published: true
tags:
  - software-development
  - vue
  - angular
  - personal-projects
---

The framework [Vue](https://vuejs.org/) has constantly been flashing in my radar as a new shiny thing to learn.
I was still busy upping my React game and had no opportunity to learn new stuff (read: I'm a fucking slob).
But as a resolution of sorts I want to commit code at least once a day. This sets up a good excuse to learn Vue!

Vue was created by this chill dude [Evan You](https://github.com/yyx990803), who at the time was working for Google and Angular. 
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

### Batteries included

Unlike other JS frameworks, Vue has it's own ecosystem of official packages and plugins.
Just take a look at their [github organization page](https://github.com/vuejs) to see what I'm talking about.
From state management, router implementations, to browser dev tools they have all these things ready for your convenience. 
This is really interesting to me because I witnessed the [flux wars](https://github.com/voronianski/flux-comparison)
when React was just starting out, and boy have I used a lot of Flux implementations a while back, only for them to be
deprecated in a few months time. I think this is a new-developer-friendly move, you don't need to stress
about which plugin to go with what, because everything is laid out for you, and that I appreciate a lot.

For this project I used [vue-cli](https://github.com/vuejs/vue-cli), [vue-router](https://github.com/vuejs/vue-router), and 
the beautiful [vue-devtools](https://github.com/vuejs/vue-devtools). Unfortunately I wasn't able to try out
[vuex](https://github.com/vuejs/vuex) because most of my application state is in firebase.


### So what the ~~fuck~~ is jkbx anyways?

Ah, good question. For that I will gratuitously copy-paste a section of [jkbx](https://github.com/kendaganio/jkbx)'s README.
> This project started as a way for me to learn angular.js, we actually found it very useful for parties at the office and it became our own little office plaything. I haven't touched this project in a few years and thankfully it still works with no maintenance. So this 2018 I wanted to learn something aside from React, and decided to rewrite jkbx in Vue. Enjoy!

With all of that out of the way, I will now attempt to share my experience learning Vue.

### Get on with it already!

This project was fairly easy to bootstrap thanks to `vue-cli`. Unlike [create-react-app](https://github.com/facebook/create-react-app) 
where all the configurations are abstracted, `vue-cli` just scaffolds a project with good defaults and some scripts to get you
started quickly. 


```
src
├── App.vue
├── components
│   ├── Party.vue
│   ├── Player.vue
│   ├── SplashPage.vue
│   ├── TrackControls.vue
│   ├── TrackMedia.vue
│   └── TrackSearch.vue
├── main.js
└── router
    └── index.js
```

This is the entire `src` folder after all of jkbx's functionality have been ported over.
Vue has no prescribed opinions on how to structure your code, so I leave that discretion to you. 

So now I know what you're thinking, what the hell are `.vue` files! Good observation dear friend, 
allow me to show you!

### The Anatomy of a Vue Component

Initially I was adamant to use [Single File Components](https://vuejs.org/v2/guide/single-file-components.html)
just because they didn't fit with my `A E S T H E T I C S`. However as I was developing the app I slowly, and this is hard for me to admit,
grew a liking to the idea of having a component in a single file.

```javascript
// Hullo.vue

<template>
  <h1>{{ message }}</h1>
</template>

<script>
export default {
  name: 'Hullo',
  data: {
    message: 'What up pimps!'
  }
};
</script>

<style scoped>
h1 { font-weight: bold }
</style>
```

One thing that is still hard for me today is where do I put my CSS in React. With Single File Components I don't 
need to worry myself with such nonsense, instead I just dump everything in one file and let the fantastic [vue-loader](https://github.com/vuejs/vue-loader)
do it's job.

Each application starts with a Vue instance, this let's Vue know where to mount the application, and which template to use.
[Components](https://vuejs.org/v2/guide/components.html) much like in every other js framework nowadays are reusable nuggets of code, packed in a HTML-looking tag.
These components have lifecycle methods, data definition, and events. I won't go into much detail about how everything works,
the [Vue docs](https://vuejs.org/v2/guide/) is fantastic, and it is by far the easiest for me to use and understand.

### Things that I particulary liked

For every new framework that I learn, I see a different approach in doing literally the same things. So here I'd like to list out what piqued 
my curiosity:

**Event Handling**

In React, event handlers are functions passed from parent to child; or if you are using Redux you pass from a smart to dumb components.

```javascript
const handler = event => { /* do something */ }
export default (props) => {
  <SomeComponent clickHandler={handler} />
}
```
In Vue however, I like that component actions are emitted and a parent component reacts to a event.
```javascript
// Child Component
Vue.component('child-component', {
  methods: {
    excitingEvent() {
      this.$emit('woah')
    }
  }
})
```
```javascript
// Parent Template
<child-component v-on:woah="reactionMethod"/>
```
It's not that different with React, but in my mind this is much easier to understand. Because it explicitly tells you just by looking at it 
that an event is being reacted to by the parent, not unlike in React where behavior is passed on to a child.

**Computed Properties**

There are some things that you need to be evaluated before you use it in a view. Say, removing a few keys from an object, transforming text, 
you get the idea. [Computed Properties](https://vuejs.org/v2/guide/computed.html) in Vue act like regular properties but it passes through a
function whenever a re-render occurs.

```javascript
Vue.component('lol', {
  data: { message: 'i am so angry' }
  computed: {
    angryMessage: function() {
      return `${this.message}!!!!`.toUpperCase()
    }
  }
})
```
```javascript
<p>{{ angryMessage }}</p>
// => I AM SO ANGRY!!!!
```

*All caps make you look angry!!!!*

### Wrapping it up!

All in all, I enjoyed my time playing with Vue. It's simple enough to learn in a few days, and full featured enough for large and complex
applications. It might be worth considering Vue as a front-end framework of choice for your next project. You can check out the source code of
[jkbx at Github](http://github.com/kendaganio/jkbx) and you can play with it at [https://kendaganio.com/jkbx](https://kendaganio.com/jkbx).

**– Ken**
