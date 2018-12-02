# XAudiole
Svör við spurningum úr gömlum lokaprófum

# Haust 2015

**~~1.1 What is Gulp used for?~~**

- a. ~~It's a framework for Node.js~~
- b. Task runner that makes the manual things automatic
- c. ~~It helps consume more drinks faster~~
- d. ~~Task runner that makes sure we write good JavaScript code~~
---

**1.2 JSHint is a tool that can help us write better JavaScript code, how does it work?**

- a. ~~It changes the type system of JavaScript from being *dynamic* into being *static*~~
- b. ~~Adds functionality to our text editor that allows us to do code completion~~
- c. ~~Sends our code to jshint.com were veteran programmers go over our code and send back improvements~~
- d. __Alerts us to common errors we can do while writing JavaScript__
```
NOTE: JSHint is a linter, has same purpose as Eslint did in current course.
```
---

**1.3 Hver af eftirtöldum fullyrðingum um HTTP er rétt?**

- a. ~~HTTP requires that only the client stores state~~
- b. ~~HTTP uses JavaScript for frontend functionality~~
- c. __HTTP is based on clients sending requests and servers sending responses__
- d. ~~HTTP has methods that are categorized, e.g. methods in the 300 category are used for redirection~~
---
  
**~~1.4 When we deploy our programs that connect to a database on different platforms, the connection strings can be different. To help us change them it is good to:~~**

- a. Collect all the settings in one place in the program, hardcode them there and change for each deployment
- b. Store settings in an isolated function and change for each deployment
- c. Hardcode settings where they're used in the program and change them for each deployment
- d. Store settings in the environment and change for each deployment
---
 
 **1.5 `<div>` and `<span>` are elements that stand alone, about them we can assert that:**
 
- a. ~~They do not have any semantic meaning so they should absolutely not be used~~
- b. ~~They have semantic meaning but it is not rational so they should absolutely not be used~~
- c. __They do not have any semantic meaning but if needed, they're okay to use__
- d. ~~They do have semantic meaning and it's so general that we can use them for anything~~
```
1.18.1 Merkingarfræðileg siðvendni
https://github.com/vefforritun/book/blob/master/chapters/01.html.md
```
---
 
 **1.6 The concept of the cascade in CSS defines:**

- a. ~~Value for each selector in CSS that determines how important it is~~
- b. __The order of definitions for each element__
- c. ~~Value for each rule that defines how default values *cascade* over it~~
- d. ~~The order of definitions in the document~~
```
2.9 Cascade – „flóðið“
https://github.com/vefforritun/book/blob/master/chapters/02.css.md
```
---
 
**1.7 ~~Many frameworks offer some kind of a templating language, which of the following is a good reason to use them?~~**
 
- a. They guarantee that the SEO (search engine optimization) and accessibility of our website is good
- b. They guarantee that the HTML of our website is always valid
- c. They allow us to send data to the template and display it, regardless of the functionality of the program
- d. All of the above
---
 
**~~1.8 Unit tests are used to:~~**
 
- a. Increase our confidence while making changes to programs
- b. Document the real functionality of a program
- c. Give us fast feedback on the functionality of a program while we write it
- d. All of the above
--- 
 
**~~1.9 When we implement a user system, one thing we need to think specially about is:~~**
 
- a. Using a trusted and good programming language
- b. Encrypting passwords
- c. Use trusted user systems from a third party
- d. Hide all URLs the user cannot see
--- 
 
**1.10 Which of the following is a valid URL?**

- a. __http://example.org/foo?bar=baz__
- b. ~~example.org/foo?bar=baz~~ **- URI, ekki URL**
- c. ~~http://example.org:foo/?bar=baz~~ **- `:`, á að vera `/`**
- d. ~~example.org:foo/?bar=~~**- URI, ekki URL og `:`, á að vera `/`**
```
URI vs URL
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/11/11.1.http.md
```
---
**~~1.11 Which of the following is *not* correct about the module system in Node.js~~**

- a. You can include a module from NPM by using `require('<name of module>');`
- b. You can include a module stored in a directory with index.js by doing `require('<name of directory>');`
- c. You can include a program from a directory that includes app.js with `require('<name of directory>');`
- d. You can include a JSON file by doing `require('./<name of JSON file>.json');`
---

**1.12 One of the things Sass does *not* offer is:**

- a. __Define *grids*__
- b. ~~Define *mixin* for functions~~
- c. ~~Define variables~~
- d. ~~Defining *nested* selectors~~
---

**1.13 The following CSS selector selects:**
`main > selection h2.important`

- a. __All `h2` headings with `class important` that are a descendant of `section` that is the child of `main`__
- b. ~~All `h2` headings with `id important` that are a descendant of `section` that is the child of `main`~~
- c. ~~All `h2` headings with `class important` that are the descendant of `section` that is the descendant of `main`~~
- d. ~~All `h2` headings with `id important` that are the descendant of `section` that is the descendant of `main`~~
```
2.4.1 Selectors
https://github.com/vefforritun/book/blob/master/chapters/02.css.md
```
* ` ` þýðir að seinni selector velur element sem er afkomandi fyrri
* `>` er fyrir _strangt barn_, seinni selector verður að vera barn fyrri
* `+` er fyrir _systkini_, seinni selector velur element sem er systkini sem kemur **beint á eftir** fyrri selector
* `~` er almennur systkina selector, seinni selector velur element sem er syskini fyrri

```css
*              /* öll element */
div            /* öll div */
div p          /* öllu p, afkomendur p */
div > p        /* öll p sem eru börn div */
p + p          /* öll p með p sem fyrra systkyni */
div.foo        /* öll div með class foo */
a:hover        /* öll a sem verið að hovera á */
div#foo        /* öll div með id foo */
div[foo="bar"] /* öll div með attribute foo=bar */
```
---

**1.14 What tasks do NPM and Bower solve**

- a. Define what modules from third parties we use
- b. Assist us in finding, fetching and updating modules from third parties
- c. Allow us to publish our own modules to public repositories for others to use
- d. __All of the above__
```
NOTE: Bower is a package manager, has same purpose as NPM did in current course.

2.27.2 npm
https://github.com/vefforritun/book/blob/master/chapters/02.css.md
```
---

**1.15 What is the result of running the following JavaScript code?**
```
function calc(f, g, x) {
      return f(x) + g(x);
}

var x = 5;
var square = function (x) { return x*x; }
var result = calc(square, function (y) {
      return x + y + 10;
}, 2);

console.log(result);
```

- a. 21
- b. ~~18~~
- c. ~~NaN~~
- d. ~~42~~
```
    square(2) + g(2)

=>  4 + x + 2 + 10

þ.s. x = 5, skilgreint global variable
```

See example: `h15_1_15.html` & `h15_1_15.js`


**[Haust 2016] If we are linking to example.org, it would be best to use**

- a. `<a href="http://example.org">example.org</a>`
- b. 
```
<form method="post" action="http://example.org">
      <button>example.org</button>
</form>
```
- c.
```
<form method="get" action="http://example.org">
      <button>example.org</button>
</form>
```
- d. All methods are equally good
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

**[Haust 2016] What fundamental difference is there between HTML 4.01 and XHTML?**
 
- a. HTML 4.01 is based on XML but XHTML on SGML
- b. XHTML is based on HTML5 but HTML 4.01 on SGML
- c. XHTML is based on XML but HTML 4.01 on SGML
- d. None fundamental difference
---

## Web Accessibility

 **[Haust 2016] When we are checking for web accessibility, we can use:**
 
- a. Standards containing guidelines and recommendations on accessibility
- b. Listening to the website with a screen reader
- c. Using only keyboard to navigate the website
- d. All of the above
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

**[Haust 2016] For the following CSS, what are the width X height of the box in pixels according to the box model?**
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
- a. 542x372
- b. 552x343
- c. 353x542
- d. 342x552
---

**[Haust 2015] Dæmi 2.1**

---

**[Haust 2014] Dæmi 2.1**

---

**[Sumar 2014] Dæmi 2.1**

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

**[Haust 2016] Arrow functions in ECMAScript 2015 are different from functions, how?**

- a. Do not bind `this` nor `arguements`
- b. Do bind `this` but not `arguements`
- c. Do not bind `this` only `arguements`
- d. Do bind `this` and `arguements`
---

**[Haust 2016] What is V8?**

- a. JavaScript engine that Chrome uses
- b. HTML parser that Chrome uses
- c. CSS interpreter that Chrome uses
- d. None of the above
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

**[Haust 2016] Which of the following values are *falsy* in JavaScript**
 
- a. "0"
- b. []
- c. NaN
- d. 1
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
