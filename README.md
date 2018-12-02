# XAudiole
Svör við spurningum úr gömlum lokaprófum

**1.1 If we are linking to example.org, it would be best to use**

- a. `<a href="http://example.org">example.org</a>`
- ~~b.~~ 
```
<form method="post" action="http://example.org">
      <button>example.org</button>
</form>
```
- ~~c.~~
```
<form method="get" action="http://example.org">
      <button>example.org</button>
</form>
```
- d. ~~All methods are equally good~~

See example: `h16_1_1.html`.
```
HTTP Aðferðir og <form>
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/11/11.1.http.md
```
---

**~~1.2 Code coverage is a concept that helps us to write unit tests by~~**

- a. It runs all our tests and lets us know their results
- b. We get to know the percentage of our code is under test and can get by without writing tests for the same function, braches or statements
- c. It runs selected tests and lets us know their results
- d. We get to know how many lines of our code are under test and can get by without writing tests for the same functions, braches and statements
---

**1.3 Arrow functions in ECMAScript 2015 are different from functions, how?**

- a. Do not bind `this` nor `arguements`
- b. Do bind `this` but not `arguements`
- c. Do not bind `this` only `arguements`
- d. Do bind `this` and `arguements`
---
  
**1.4 For the following CSS, what are the width X height of the box in pixels according to the box model?**
```
.item {
  width: 500px;
  height: 300px;
  margin: 20px;
  margin-right: 0;
  border: 1px solid #000;
  padding: 10px;
  padding-bottom: 20px;
  }
```
- a. __542x372__
- b. ~~552x343~~
- c. ~~353x542~~
- d. ~~342x552~~

See example: `h16_1_4.html` & `h16_1_4.css`.

* `content-box;` - sjálfgefið gildi, allt tekið með í reikninginn
* `border-box;` - aðeins margin er tekið með í reikninginn
---
 
 **1.5 When we are checking for web accessibility, we can use:**
 
- a. Standards containing guidelines and recommendations on accessibility
- b. Listening to the website with a screen reader
- c. Using only keyboard to navigate the website
- d. __All of the above__
```
1.20 Aðgengi
https://github.com/vefforritun/book/blob/master/chapters/01.html.md
```
---

 **1.6 What is V8?**

- a. __JavaScript engine that Chrome uses__
- b. ~~HTML parser that Chrome uses~~
- c. ~~CSS interpreter that Chrome uses~~
- d. ~~None of the above~~
 ---
 
**1.7 What fundamental difference is there between HTML 4.01 and XHTML?**
 
- a. ~~HTML 4.01 is based on XML but XHTML on SGML~~
- b. ~~XHTML is based on HTML5 but HTML 4.01 on SGML~~
- c. __XHTML is based on XML but HTML 4.01 on SGML__
- d. ~~None fundamental difference~~
```
1.10-1.15
https://github.com/vefforritun/book/blob/master/chapters/01.html.md
```
---
 
**1.8 Which of the following values are *falsy* in JavaScript**
 
- a. ~~"0"~~
- b. ~~[]~~
- c. __NaN__
- d. ~~1~~
```
Falsy
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/08/08.1.javascript.md
```
---
 


**[Haust 2016] When we create an XMLHttpRequest and perform an Ajax request:**

- a. We always get JSON as a response and must change it into a JavaScript object to work with
- b. The web server we call must have a Cross-origin resource sharing (CORS) header
- c. We must note that when we retrieve resources over a network, it can be slow
- d. We never get JSON as a response and must parse it into a JavaScript object
---



**[Haust 2016] When we use new features, we should:?**

- a. Always setup a polyfill for the feature
- b. Check the feature on *caniuse.com* and if it has over 90% support, use it
- c. Evaluate the feature based on the project and the browsers supported
- d. All above
---




## HTML

**[Haust 2017] What semantic value can be deduced from the following HTML?**
```
<aside>
  <h2>Foo</h2>
  <ol>
    <li>Bar</li>
    <li>Baz</li>
  </ol>
</aside>
```
- a. Excerpt from content with the heading "Foo" and an ordered list with items "Bar" and "Baz"
- b. Excerpt from content with the heading "Foo" and an unordered list with items "Bar" and "Baz"
- c. Navigation on a site with the heading "Foo" and an ordered list with items "Bar and "Baz"
- d. Navigation on a site with the heading "Foo" and an unordered list with items "Bar" and "Baz"
---

**[Haust 2017] If we se scrambled letters (e.g. A° instead of ð) on our website, what might be the problem?**
 
- a. The browsers settings need to changed to support Unicode in complete
- b. Website is being rendered in a different character set that we saved our HTML in
- c. The utf-8 definition of our text editor is wrong
- d. There is nothing we can do (except for using ASCII)
---

**[Haust 2017] You get the task of displaying text along with images on the web, which would be best to use?**

- a. Semantic HTML for content and CSS for layout
- b. Only semantic HTML
- c. Store test and paths to images in JSON, create the UI with JavaScript and CSS
- d. All equally valid
---

## CSS - Box model
**[Haust 2017] What are the dimensions (width and height) of the following according to the box model?**
```
div {
  margin: 50px;
  border: 10px solid #000;
  padding: 20px;
  width: 200px;
  height: 100px;
  box-sizing: border-box;
  }
```
- a. 300x200
- b. 320x220 
- c. 340x240
- d. 360x260
---

**[Haust 2015] Dæmi 2.1

---
  
## CSS - Theory

**[Haust 2017] What does the following ruleset do in CSS?**
```
section ul > li:nth-child(2n) {
  
  background-color: #000;
  }
```
- a. Black background on even li that are descendant from ul that again are children of section
- b. Black background on even li that are children of ul that again are descendant from section
- c. Black background on second li that is a child of ul that again are descendant from section
- d. Black background on even li that are descendant from ul that again are descendant from section
---

**[Haust 2017] 1.9 On what is responsive web design based, in order of importance?**
 
- a. Flexible layout, flexible images, and media and CSS3 media queries
- b. CSS3 media queries, flexible layout, and flexible images and media
- c. Grid and CSS3 media queries
- d. First designing for the smalles supported resolution and then more
---

**[Haust 2017] Which of the following is not legal value for a color in CSS?**
 
- a. rgba(0, 255, 0);
- b. blue
- c. #0f0
- d. All legal values
--- 

**[Haust 2017] What is BEM?**
 
- a. Bloody Elegant Markup, competitor to Markdown that is simpler and more usable
- b. Blocks, elements, modified, method to write CSS that uses modified flexbox to order blocks and elements
- c. Block Extansion Method, method to write methods in JavaScript that use asynchronous blocks in promises
- d. Block, element, modifer, method to write CSS classes and structure selectors
---

**[Haust 2016] To make our website more fun, we can use transitions and animations, in particular, we should:**

- a. Stay clear of `transform` in CSS, since it can cause jank and lag
- b. Have everything move, everywhere, all the time
- c. Stick to transitioning and transforming things that are inexpensive & reasonable
- d. Use the 3D processing of the CPU by moving the null transform to a new layer
---

**[Haust 2016] What is flexbox?**

- a. Way to create flexible layouts that replaces `position` and allows us to define layout easily on two axes
- b. Way to create flexible layouts that works with `position` and allows us to define layout easily on two axes
- c. Way to create flexible layouts that replaces `position` and allows us to define layout easily on one axis
- d. Way to create fixed layouts that works with `position` and allows us to define layout easily on two axes
---

## JavaScript - Theory

**[Haust 2017] JavaScript is an interpreted programming language, what does that entail?**

- a. JavaScript code is interpreted every time it is run by an interpreter
- b. JaveScript code is compiled in a build step by ab interpreter then that code is run by a browser
- c. JavaScript code is compiled in a build step by an interpreter, then that code is run by a browser
- d. JavaScript code is compiled in a build step by a compiler, that code is then interpreted by a browser before being run by a browser
---

## JavaScript - Variables

**[Haust 2017] NaN is a special value in JavaScript, what does it stand for and when is it returned?**

- a. NaN stands for "Not a number" and is returned when a calculation or a function doing a calculation does not work
- b. NaN stands for "Not accessible now" and is returned when type coercion is used ona an undefined or null value
- c. NaN stands for "Not a number" and is only returned when parseInt can't parse a value from text
- d. NaN stands for "Not accessible now" and is returned when type coercion does not work
---

**[Haust 2017] When we compare values in JavaScript we need to keep what in mind?**
 
- a. Always use === for all comparison
- b. Use == for comparison of values of the same type, otherwise ===
- c. Always us == for all comparison
- d. Use === for comparison of values of the same type, otherwise ==
---

## JavaScript - Functions

**[Haust 2017] What is the result of running the following ES2015 JavaScript code?**
```
function calc(a,b) {
  var x = a.map(i => i+b);
  var y = x[1] + x[2];
  
  return b + y;
}

var x = 1;
var y = calc([1, 2, 3], x);

console.log(x + y);
```
- a. 5
- b. 7
- c. 9
- d. 11
---

**[Haust 2016] What is logged when the following JavaScript code is run?**
```
const values = [1, 2, 3, 4, 5, 6, 7, 8, 9].map((value) => {
      return value * value;
});
const results = [];

for (let i = values.length - 1; i>=0; i--) {
      const value = values[i];
      results.push(value);
}
console.log(results.join(', '));
```

- a. 81, 64, 49, 36, 25, 16, 9, 4, 1
- b. 1, 2, 3, 4, 5, 6, 7, 8, 9
- c. 1, 4, 9, 16, 25, 36, 49, 64, 81
- d. 9, 8, 7, 6, 5, 4, 3, 2, 1
---

## Git

**[Haust 2017] Git sees files in four ways, they are:**
 
- a. Unmodified file, modified file, staged file and merge file
- b. Unmodified file, modified file, staged file and remote file
- c. Unmodified file, modified file, staged file and untracked file
- d. Unmodified file, modified file, staged file and branch file

## NPM

**[Haust 2017] What is Sass?**

- a. NPM package that helps us write valid CS
- b. Programming language that helps us write valid CSS
- c. NPM package that adds functionality to CSS
- d. Programming language that gives access to additional functionality in CSS
---

## HTTP

**[Haust 2017] What does it mean if we perform a request in HTTP and the status code of the response ranges from 400 through 499**

- a. Request was successful, status code indicates how exactly
- b. Request was redirect somewhere else
- c. Request was not successful and the error is on our side, in client
- d. Request was not successful and the error is on server
---

**[Haust 2016] The concepts *frontend*, *backend* and *HTTP* are related in what way?**
 
- a. *Frontend* is shown to the user, the data is retrieved with *HTTP* on the *backend*
- b. *Backend* is shown by the user, the data is retrieved with *HTTP* on a *frontend*
- c. *Frontend* is shown by the web server, the data is retrieved with *HTTP* from the *backend*
- d. *Backend* creates the data that is sent with TCP/IP to the *frontend*, *HTTP* is a technology used to create forms
--- 

## DOM

**[Haust 2016] How do querySelector, querySelectorAll and ~~jQuery~~ relate?**

- a. All use the DOM tree when searching for elements in websites
- b. querySelector and querySelectorAll are methods in the jQuery library
- c. All use selector syntax to find elements in the DOM tree
- d. Not related
---
