webpackJsonp([0xb78efc302e55],{513:function(n,a){n.exports={data:{markdownRemark:{html:'<p>The framework <a href="https://vuejs.org/">Vue</a> has constantly been flashing in my radar as a new shiny thing to learn.\nI was still busy upping my React game and had no opportunity to learn new stuff (read: I\'m a fucking slob).\nBut as a resolution of sorts I want to commit code at least once a day. This sets up a good excuse to learn Vue!</p>\n<p>Vue was created by this chill dude <a href="https://github.com/yyx990803">Evan You</a>, who at the time was working for Google and Angular.\nHe pulled out what he liked about Angular, added in a virtual DOM, stripped it down to remove all the cruft he wouldn\'t\nneed, and made it really lightweight. My first impression was that it really reminds me of the Angular of yore.\nThe prefixed directives, the two-way binding, models, and controllers. Man, what a feels trip!</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span>div id<span class="token operator">=</span><span class="token string">"app"</span><span class="token operator">></span>\n  <span class="token punctuation">{</span><span class="token punctuation">{</span> message <span class="token punctuation">}</span><span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>div<span class="token operator">></span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">var</span> app <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Vue</span><span class="token punctuation">(</span><span class="token punctuation">{</span>\n  el<span class="token punctuation">:</span> <span class="token string">\'#app\'</span><span class="token punctuation">,</span>\n  data<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'Hello Vue!\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<p><em>Actual "Hello, world!" example from the <a href="https://vuejs.org/v2/guide/">docs</a></em></p>\n<h3>Batteries included</h3>\n<p>Unlike other JS frameworks, Vue has it\'s own ecosystem of official packages and plugins.\nJust take a look at their <a href="https://github.com/vuejs">github organization page</a> to see what I\'m talking about.\nFrom state management, router implementations, to browser dev tools they have all these things ready for your convenience.\nThis is really interesting to me because I witnessed the <a href="https://github.com/voronianski/flux-comparison">flux wars</a>\nwhen React was just starting out, and boy have I used a lot of Flux implementations a while back, only for them to be\ndeprecated in a few months time. I think this is a new-developer-friendly move, you don\'t need to stress\nabout which plugin to go with what, because everything is laid out for you, and that I appreciate a lot.</p>\n<p>For this project I used <a href="https://github.com/vuejs/vue-cli">vue-cli</a>, <a href="https://github.com/vuejs/vue-router">vue-router</a>, and\nthe beautiful <a href="https://github.com/vuejs/vue-devtools">vue-devtools</a>. Unfortunately I wasn\'t able to try out\n<a href="https://github.com/vuejs/vuex">vuex</a> because most of my application state is in firebase.</p>\n<h3>So what the <del>fuck</del> is jkbx anyways?</h3>\n<p>Ah, good question. For that I will gratuitously copy-paste a section of <a href="https://github.com/kendaganio/jkbx">jkbx</a>\'s README.</p>\n<blockquote>\n<p>This project started as a way for me to learn angular.js, we actually found it very useful for parties at the office and it became our own little office plaything. I haven\'t touched this project in a few years and thankfully it still works with no maintenance. So this 2018 I wanted to learn something aside from React, and decided to rewrite jkbx in Vue. Enjoy!</p>\n</blockquote>\n<p>With all of that out of the way, I will now attempt to share my experience learning Vue.</p>\n<h3>Get on with it already!</h3>\n<p>This project was fairly easy to bootstrap thanks to <code>vue-cli</code>. Unlike <a href="https://github.com/facebook/create-react-app">create-react-app</a>\nwhere all the configurations are abstracted, <code>vue-cli</code> just scaffolds a project with good defaults and some scripts to get you\nstarted quickly. </p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>src\n├── App.vue\n├── components\n│   ├── Party.vue\n│   ├── Player.vue\n│   ├── SplashPage.vue\n│   ├── TrackControls.vue\n│   ├── TrackMedia.vue\n│   └── TrackSearch.vue\n├── main.js\n└── router\n    └── index.js</code></pre>\n      </div>\n<p>This is the entire <code>src</code> folder after all of jkbx\'s functionality have been ported over.\nVue has no prescribed opinions on how to structure your code, so I leave that discretion to you. </p>\n<p>So now I know what you\'re thinking, what the hell are <code>.vue</code> files! Good observation dear friend,\nallow me to show you!</p>\n<h3>The Anatomy of a Vue Component</h3>\n<p>Initially I was adamant to use <a href="https://vuejs.org/v2/guide/single-file-components.html">Single File Components</a>\njust because they didn\'t fit with my <code>A E S T H E T I C S</code>. However as I was developing the app I slowly, and this is hard for me to admit,\ngrew a liking to the idea of having a component in a single file.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Hullo.vue</span>\n\n<span class="token operator">&lt;</span>template<span class="token operator">></span>\n  <span class="token operator">&lt;</span>h1<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> message <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>h1<span class="token operator">></span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>template<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>script<span class="token operator">></span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span>\n  name<span class="token punctuation">:</span> <span class="token string">\'Hullo\'</span><span class="token punctuation">,</span>\n  data<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    message<span class="token punctuation">:</span> <span class="token string">\'What up pimps!\'</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">;</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>\n\n<span class="token operator">&lt;</span>style scoped<span class="token operator">></span>\nh1 <span class="token punctuation">{</span> font<span class="token operator">-</span>weight<span class="token punctuation">:</span> bold <span class="token punctuation">}</span>\n<span class="token operator">&lt;</span><span class="token operator">/</span>style<span class="token operator">></span>\n</code></pre>\n      </div>\n<p>One thing that is still hard for me today is where do I put my CSS in React. With Single File Components I don\'t\nneed to worry myself with such nonsense, instead I just dump everything in one file and let the fantastic <a href="https://github.com/vuejs/vue-loader">vue-loader</a>\ndo it\'s job.</p>\n<p>Each application starts with a Vue instance, this let\'s Vue know where to mount the application, and which template to use.\n<a href="https://vuejs.org/v2/guide/components.html">Components</a> much like in every other js framework nowadays are reusable nuggets of code, packed in a HTML-looking tag.\nThese components have lifecycle methods, data definition, and events. I won\'t go into much detail about how everything works,\nthe <a href="https://vuejs.org/v2/guide/">Vue docs</a> is fantastic, and it is by far the easiest for me to use and understand.</p>\n<h3>Things that I particulary liked</h3>\n<p>For every new framework that I learn, I see a different approach in doing literally the same things. So here I\'d like to list out what piqued\nmy curiosity:</p>\n<p><strong>Event Handling</strong></p>\n<p>In React, event handlers are functions passed from parent to child; or if you are using Redux you pass from a smart to dumb components.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> <span class="token function-variable function">handler</span> <span class="token operator">=</span> event <span class="token operator">=></span> <span class="token punctuation">{</span> <span class="token comment">/* do something */</span> <span class="token punctuation">}</span>\n<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">(</span>props<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n  <span class="token operator">&lt;</span>SomeComponent clickHandler<span class="token operator">=</span><span class="token punctuation">{</span>handler<span class="token punctuation">}</span> <span class="token operator">/</span><span class="token operator">></span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>In Vue however, I like that component actions are emitted and a parent component reacts to a event.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Child Component</span>\nVue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">\'child-component\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  methods<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    <span class="token function">excitingEvent</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">$emit</span><span class="token punctuation">(</span><span class="token string">\'woah\'</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token comment">// Parent Template</span>\n<span class="token operator">&lt;</span>child<span class="token operator">-</span>component v<span class="token operator">-</span>on<span class="token punctuation">:</span>woah<span class="token operator">=</span><span class="token string">"reactionMethod"</span><span class="token operator">/</span><span class="token operator">></span>\n</code></pre>\n      </div>\n<p>It\'s not that different with React, but in my mind this is much easier to understand. Because it explicitly tells you just by looking at it\nthat an event is being reacted to by the parent, not unlike in React where behavior is passed on to a child.</p>\n<p><strong>Computed Properties</strong></p>\n<p>There are some things that you need to be evaluated before you use it in a view. Say, removing a few keys from an object, transforming text,\nyou get the idea. <a href="https://vuejs.org/v2/guide/computed.html">Computed Properties</a> in Vue act like regular properties but it passes through a\nfunction whenever a re-render occurs.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code>Vue<span class="token punctuation">.</span><span class="token function">component</span><span class="token punctuation">(</span><span class="token string">\'lol\'</span><span class="token punctuation">,</span> <span class="token punctuation">{</span>\n  data<span class="token punctuation">:</span> <span class="token punctuation">{</span> message<span class="token punctuation">:</span> <span class="token string">\'i am so angry\'</span> <span class="token punctuation">}</span>\n  computed<span class="token punctuation">:</span> <span class="token punctuation">{</span>\n    angryMessage<span class="token punctuation">:</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n      <span class="token keyword">return</span> <span class="token template-string"><span class="token string">`</span><span class="token interpolation"><span class="token interpolation-punctuation punctuation">${</span><span class="token keyword">this</span><span class="token punctuation">.</span>message<span class="token interpolation-punctuation punctuation">}</span></span><span class="token string">!!!!`</span></span><span class="token punctuation">.</span><span class="token function">toUpperCase</span><span class="token punctuation">(</span><span class="token punctuation">)</span>\n    <span class="token punctuation">}</span>\n  <span class="token punctuation">}</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span>\n</code></pre>\n      </div>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token operator">&lt;</span>p<span class="token operator">></span><span class="token punctuation">{</span><span class="token punctuation">{</span> angryMessage <span class="token punctuation">}</span><span class="token punctuation">}</span><span class="token operator">&lt;</span><span class="token operator">/</span>p<span class="token operator">></span>\n<span class="token comment">// => I AM SO ANGRY!!!!</span>\n</code></pre>\n      </div>\n<p><em>All caps make you look angry!!!!</em></p>\n<h3>Wrapping it up!</h3>\n<p>All in all, I enjoyed my time playing with Vue. It\'s simple enough to learn in a few days, and full featured enough for large and complex\napplications. It might be worth considering Vue as a front-end framework of choice for your next project. You can check out the source code of\n<a href="http://github.com/kendaganio/jkbx">jkbx at Github</a> and you can play with it at <a href="https://kendaganio.com/jkbx">https://kendaganio.com/jkbx</a>.</p>\n<p><strong>– Ken</strong></p>',frontmatter:{title:"Rewriting jkbx from Angular 1.x to Vue",date:"15 February, 2018",tags:["software-development","vue","angular","personal-projects"]}},site:{siteMetadata:{title:"Ken-Lauren Daganio"}}},pathContext:{slug:"/rewriting-jkbx/"}}}});
//# sourceMappingURL=path---rewriting-jkbx-b15a0bdf2e3c12eeb64e.js.map