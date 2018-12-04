# XAudiole
Svör við spurningum úr gömlum lokaprófum

## General

**[Haust 2017] You get the task of displaying text along with images on the web, which would be best to use?**

- a. Semantic HTML for content and CSS for layout
- b. Only semantic HTML
- c. Store test and paths to images in JSON, create the UI with JavaScript and CSS
- d. All equally valid
---

**[Sumar 2014](https://github.com/Kjarten/XAudiole/blob/master/sumar2014/README.md#11-which-of-the-following-is-not-among-the-roles-of-the-w3c) - Which of the following is *not* among the roles of the W3C?**

- a. Standardize HTML
- b. Standardize CSS
- c. Standardize JavaScript
- d. a. and b.
---

**[Haust 2016] When we use new features, we should:?**

- a. Always setup a polyfill for the feature
- b. Check the feature on *caniuse.com* and if it has over 90% support, use it
- c. Evaluate the feature based on the project and the browsers supported
- d. All above
---

**[Haust 2013] What are polyfills?**

- a. New functionality in CSS3 that offers the ability to draw filled polygons in a simple way
- b. Concept that is about using JavaScript entirely to create CSS
- c. Code that gives access to functionality that the browser does not yet support
- d. JavaScript API that gives access to drawing in 3D
---

**[Haust 2013] Which of the following is among the roles of W3C**

- a. Standardize HTML
- b. Standardize CSS
- c. Standardize JavaScript
- d. Everything above
- e. a. and b.
---

**[Sumar 2014](https://github.com/Kjarten/XAudiole/blob/master/sumar2014/README.md#15-what-did-tim-berners-lee-use-as-the-basis-of-the-world-wide-web-along-side-tcp-and-dns) - What did Tim Berners-Lee use as the basis of the world wide web along side TCP and DNS**
 
- a. The concept of HyperText
- b. HTML
- c. SSL
- d. HTML, CSS and JavaScript
---

**[Haust 2013] What did Time Berners-Lee use as the basis of the world wide web**

- a. TCP, DNS and the concept of HyperText
- b. HTTP, HTML and DNS
- c. SSL, HTTP, FTP and DNS
- d. HTML, CSS, JavaScript and TCP/IP
---

## Not Categorized

**[Haust 2014] JSON stendur fyrir JavaScript Object Notation en það er munur á JSON og JavaScript hlutum, þar er helst að nefna:**

- a. Lyklar í JSON verða að vera strengir
- b. Lyklar í JSON mega vera úr lista frátekinna orða
- c. Gildi í JSON mega ekki vera föll
- d. Allt að ofan
---

**[Haust 2016] When we create an XMLHttpRequest and perform an Ajax request:**

- a. We always get JSON as a response and must change it into a JavaScript object to work with
- b. The web server we call must have a Cross-origin resource sharing (CORS) header
- c. We must note that when we retrieve resources over a network, it can be slow
- d. We never get JSON as a response and must parse it into a JavaScript object
---

## HTML

### HTML4, HTML5, XML, SGML & XHTML

**[Haust 2016] What fundamental difference is there between HTML 4.01 and XHTML?**
 
- a. HTML 4.01 is based on XML but XHTML on SGML
- b. XHTML is based on HTML5 but HTML 4.01 on SGML
- c. XHTML is based on XML but HTML 4.01 on SGML
- d. None fundamental difference
---

**[Haust 2013] Which difference, if any, is there between HTML 4.01, XHTML and HTML5?**

- a. HTML 4.01 and HTML5 are based on SGML but XHTML on XML
- b. XHTML and HTML5 have much stricter rules about the structure of HTML but HTML 4.01
- c. No difference
- d. HTML 4.01 is based on SGML, XHTML on XML but HTML5 on neither
---

**[Sumar 2014](https://github.com/Kjarten/XAudiole/blob/master/sumar2014/README.md#13-html5-is-the-natural-progression-of-the-web-but-what-does-the-concept-encompass) - HTML5 is the natural progression of the web, but what does the concept encompass**

- a. Changes in HTML from HTML 4.01 and XHTML
- b. Changes in HTML, extensions to CSS and new JavaScript APIs
- c. Changes in HTML, extensions to CSS and changed syntax in JavaScript
- d. Changes in HTML from HTML 4.01 and XHTML with extensions to CSS
---

**[Haust 2013] What is HTML5**

- a. Only changes in HTML from HTML 4.01 and XHTML
- b. The natural progression of the web that inclues changes in HTML, extensions to CSS and changed syntax in JavaScript
- c. Changes in HTML from HTML 3.01 and XHTML with extensions to CSS
- d. The natural progression of the web that includes changes in HTML, extensions to CSS and new JavaScript APIs
---

### HTML Syntax

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

**[Haust 2015] `<div>` and `<span>` are elements that stand alone, about them we can assert that:**
 
- a. They do not have any semantic meaning so they should absolutely not be used
- b. They have semantic meaning but it is not rational so they should absolutely not be used
- c. They do not have any semantic meaning but if needed, they're okay to use
- d. They do have semantic meaning and it's so general that we can use them for anything
---

**[Haust 2014] Hvað af eftirfarandi á við þetta HTML:**
```
<p class="intro">Hello world!</p>
```
- a. *p* er *tag* með *class* *attribute*
- b. *p* er *element* með *class* *tag*
- c. Byrjunar og enda *element* er *p*, *class* er *attribute* og öll heildin er *p* *tag*
- d. Byrjunar og enda *tag* er *p*, *class* er *attribute* og öll heildin er *p* *element*
---

**[Sumar 2014] What is the difference between `<head>` and `<body>`**

- a. In general we define the metadata for the page in `<head>` and content in `<body>`
- b. Metadata must only be in `<head>` but content in `<body>`
- c. We only define connections to other files (e.g. CSS) in `<head>` and content in `<body>`
- d. No difference between `<head>` and `<body>`
---

## Web Accessibility

### Practice

 **[Haust 2016] When we are checking for web accessibility, we can use:**
 
- a. Standards containing guidelines and recommendations on accessibility
- b. Listening to the website with a screen reader
- c. Using only keyboard to navigate the website
- d. All of the above
---

**[Sumar 2014] Which of the following needs to be considered for accessibility**
 
- a. Describe images with *alt* text
- b. Define language for content
- c. Write descriptive text for links
- d. All of the above
---

### Standards

**[Haust 2014] Hvað er WCAG?**

- a. Listi af tilmælum til að gera vefi aðgengilegri, skilgreindur af W3C
- b. Listi af tilmælum til að gera vefi öruggari, skilgreindur af W3C
- c. Listi af tilmælum til að gera vefi aðgengilegri, skilgreindur af ECMA
- d. Listi af tilmælum til að gera vefi öruggari, skilgreindur af ECMA
---

**[Sumar 2014] What is ARIA?**

- a. Standard from W3C that increases accessibility of web applications
- b. Standard from ISO that increases accessibility of web applications
- c. Standard from W3C that increases functionality in new browsers
- d. Standard from ISO that increases functionality in new browsers
---

## CSS

### CSS - Box model
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

**[Haust 2013] Dæmi 2.1**

---
  
### CSS - Theory

**[Haust 2015] The concept of the cascade in CSS defines:**

- a. Value for each selector in CSS that determines how important it is
- b. The order of definitions for each element
- c. Value for each rule that defines how default values *cascade* over it
- d. The order of definitions in the document
---

**[Haust 2016] To make our website more fun, we can use transitions and animations, in particular, we should:**

- a. Stay clear of `transform` in CSS, since it can cause jank and lag
- b. Have everything move, everywhere, all the time
- c. Stick to transitioning and transforming things that are inexpensive & reasonable
- d. Use the 3D processing of the CPU by moving the null transform to a new layer
---

**[Haust 2017] What is BEM?**
 
- a. Bloody Elegant Markup, competitor to Markdown that is simpler and more usable
- b. Blocks, elements, modified, method to write CSS that uses modified flexbox to order blocks and elements
- c. Block Extansion Method, method to write methods in JavaScript that use asynchronous blocks in promises
- d. Block, element, modifer, method to write CSS classes and structure selectors
---

### CSS - Syntax

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

**[Haust 2017] Which of the following is not legal value for a color in CSS?**
 
- a. rgba(0, 255, 0);
- b. blue
- c. #0f0
- d. All legal values
--- 

**[Haust 2015] The following CSS selector selects:**
`main > selection h2.important`

- a. All `h2` headings with `class important` that are a descendant of `section` that is the child of `main`
- b. All `h2` headings with `id important` that are a descendant of `section` that is the child of `main`
- c. All `h2` headings with `class important` that are the descendant of `section` that is the descendant of `main`
- d. All `h2` headings with `id important` that are the descendant of `section` that is the descendant of `main`
---

**[Haust 2014] Hvað er CSS *shorthand*?**

- a. Virkni sem CSS *preprocessorar* gefa okkur aðgang að, til að skrifa styttra og skipulagðara CSS
- b. Skilgreining í einni yfirlýsingu fyrir mörg gildi með svipaða virkni
- c. Það þegar allar CSS yfirlýsingar eru skrifaðar í einni línu fyrir hverja reglu
- d. Ný CSS3 virkni sem skilgreinir styttri leiðir til að skrifa CSS
---

**Aukaspurning: Skilgreindu eftirfarandi sambönd:**

- `*`
- `div`
- `div p`
- `div > p`
- `div ~ p`
- `p + p`
- `div.foo`
- `a:hover`
- `div#foo`
- `div[foo="bar"]`
---

### Skalanlegir vefir (responsive web design)

**[Haust 2017] 1.9 On what is responsive web design based, in order of importance?**
 
- a. Flexible layout, flexible images, and media and CSS3 media queries
- b. CSS3 media queries, flexible layout, and flexible images and media
- c. Grid and CSS3 media queries
- d. First designing for the smalles supported resolution and then more
---

**[Haust 2013] On what is responsive web design based, in order of importance?**

- a. Flexible layout, flexible images and media and CSS3 media queries
- b. CSS3 media queries, flexible layout and, flexible images and media
- c. Grid and CSS3 media queries
- d. First designing for the smalles supported resolution and then more
---

**[Haust 2016] What is flexbox?**

- a. Way to create flexible layouts that replaces `position` and allows us to define layout easily on two axes
- b. Way to create flexible layouts that works with `position` and allows us to define layout easily on two axes
- c. Way to create flexible layouts that replaces `position` and allows us to define layout easily on one axis
- d. Way to create fixed layouts that works with `position` and allows us to define layout easily on two axes
---

**[Haust 2014] Þegar við útfærum skalanlega vefi (responsive web design) þá þurfum við að:**
 
- a. Skilgreina grind með föstum stærðum og nota media-queries
- b. Skilgreina grind með hlutfallslegum stærðum og nota media-queries
- c. Skilgreina box með föstum stærðum, nota JavaScript og media-queries
- d. Skilgreina box með hlutfallslegum stærðum, nota JavaScript og media-queries
---

## JavaScript

### JavaScript - Theory

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
 
**[Haust 2014] Þegar við biðjum um eigindi á hlut í JavaScript kemur prótótýpukeðjan til sögunnar, nánar tiltekið þá**
 
- a. Ef eigindi er á hlut er því skilað, ef ekki er leitað upp prótótýpu keðjuna og leitað þar, ef ekkert finnst er `undefined` skilað
- b. Ef eigindi er á hlut efst í prótótýpu keðjunni er því skilað, annars er leitað niður keðjuna þar til komið er að hlutnum sjálfum, ef ekkert finnst er `undefined` skilað
- c. Ef eigindi er á hlut er því skilað annars er `undefined` skilað
- d. Ef eigindi er á hlut efst í prótótýpu keðjunni er því skilað annars er `undefined` skilað
---

### JavaScript - Syntax

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

### JavaScript - Asynchronous

**[Sumar 2014] Which of the following are advantages to caching in web applications?**

- a. Can increase speed in applications by reducing the number of long calculations
- b. Increases the user experience since waiting is decreased
- c. Can increase speed in applications by reducing the calls to a database
- d. All of the above
---

**[Haust 2014] Hvað eru callbacks og promises?**

- a. Aðferðir til að vinna með *ósamstilltan* (asynchronous) kóða
- b. Aðferir til að vinna með *ekki-blokkandi* (non-blocking) I/O
- c. Aðferðir til að vinna með *strauma* (streams)
- d. Aðferðir til að vinna með *atburði* (events)
---

### JavaScript - Functions

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

**[Haust 2015] What is the result of running the following JavaScript code?**
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
- b. 18
- c. NaN
- d. 42
---

**[Haust 2014] Hvað skrifast út þegar þessi JavaScript kóði er keyrður?**
```
function multiplier(x) {
  return function (y) { return x * y; }
}

var y = 10;
var m = multiplier(2);

console.log(y + m(5));
```
- a. 20
- b. 60
- c. 25
- d. 52
---

**[Sumar 2014] What is the result of running the following JavaScript code?**
 ```
 function foo(i) {
    i = bar(i);
    function bar(n) {
        var result = 1;
        foo (var i = 1; i <= n; i++)
        {
            result *= i;
        }
        return result;
    }
    setTimeout(function() { console.log(i); ), 10000)
}
foo(3);
 ```
- a. In 1 second the value "6" will be written to console
- b. In 10 seconds the value "6" will be written to console
- c. In 1 second the value "45" will be written to console
- d. In 10 seconds the value "45" will be written to console
---

**[Sumar 2014] What does the following JavaScript function do? The functions *filter* (returns a list where items satisfy conditions), *sum* (returns the sum of a list ) are defined and *list* is an array of numbers.**
```
function X(list)
{
  return sum(list.filter(function(i) { return i > 0; }));
}
```
- a. Returns the sum of all the numbers in list
- b. Returns the sum of all positive numbers in list
- c. Returns the average of all numbers in list
- d. Returns the sum of all negatve numbers in list
---

**[Haust 2013] Hvað skrifast út þegar þessi JavaScript kóði er keyrður?**
```
funciton foo(i) {
  i = bar(i);
  function bar(n) {
    var result = 0;
    for (var i = 0; i < n; i++)
    {
      result += 1;
    }
    return result;
  }
  setTimeout(funciton() { console.log(i); }, 1000)
}

```
- a. Eftir 1 sekúndu verður gildið "9" skrifað í console
- b. EFtir 10 sekúndur verður gildið "9" skrifað í console
- c. Eftir 1 sekúndu verður gildið "45" skrifað í console
- d. Eftir 10 sekúndur verður gildið "45" skrifað í console
---

**[Haust 2013] Hvað gerir eftirfarandi JS fall? Föllin map (keyrir fall á öll gildi lista) og sum (skilar summu lista) eru skilgreind og _list_ er fylki af strengjum.**
```
function X(list)
{
return sum(map(list, function(i) { return i.length; })) / list.length;
}
```
- a. Skilar heildarlengd allra strengja í list
- b. Skilar meðaltalslengd allra strengja í list
- c. Skilar miðgildi lengdar strengja í list
- d. Skilar summu allra hlutstrengja ílist sem eru lengri en list
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

**[Haust 2015] One of the things Sass does *not* offer is:**

- a. Define *grids*
- b. Define *mixin* for functions
- c. Define variables
- d. Defining *nested* selectors
---

**[Haust 2015] What tasks do NPM and Bower solve**

- a. Define what modules from third parties we use
- b. Assist us in finding, fetching and updating modules from third parties
- c. Allow us to publish our own modules to public repositories for others to use
- d. All of the above
```
NOTE: Bower is a package manager, has same purpose as NPM did in current course.
```
---

**[Sumar 2014] What is NPM and what effect does it have on node.js**

- a. NPM is a framework for node.js that makes it easy to write web applications
- b. NPM is a framework for node.js that assists in manual tasks
- c. NPM is the package manager of node.js that makes it really easy to fetch and create packages
- d. NPM is the package manager of node.js that has a strict version control so only well written packages are accepted
---

**[Haust 2013] What is NPM and what effect does it have on node.js**

- a. NPM is a framework for node.js that makes it easy to write web applications
- b. NPM is a framework for node.js that assists in manual tasks
- c. NPM is the package manager of node.js that makes it really easy to fetch and create packages
- d. NPM is the package manager of node.js that has a strict version control so only well written packages are accepted
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

**[Haust 2015] Hver af eftirtöldum fullyrðingum um HTTP er rétt?**

- a. HTTP requires that only the client stores state
- b. HTTP uses JavaScript for frontend functionality
- c. HTTP is based on clients sending requests and servers sending responses
- d. HTTP has methods that are categorized, e.g. methods in the 300 category are used for redirection
---

**[Haust 2014] Ef við framkvæmum aðgerð í HTTP og stöðukóðinn sem kemur til baka er með tölugildið 500 eða hærra, gefur það til kynna að:**

- a. Aðgerð tókst, kóði gefur til kynna hvernig það nákvæmlega tókst
- b. Aðgerð var beint eitthvað annað, *redirect*
- c. Aðgerð tókst ekki og villuna má finna hjá okkur, í client
- d. Aðgerð tókst ekki og villuna má finna hjá vefþjón, á server
---

**[Sumar 2014] What does it mean that HTTP is stateless?**

- a. A web server does not need to store any state between requests from user
- b. A web server must store all state between requests from users since the browser does not
- c. A web browser can not store any state between requests from user
- d. A web browser must store all state between requests from users since the web server does not
---

**[Sumar 2014] What is the difference between frontend and backend?**
 
- a. Backend resides on the web server and programs written there generate HTML, CSS or JavaScript that is sent to the frontend where the browser interprets it and the user interacts with it
- b. Frontend is the UI the user sees, implemented with HTML and CSS. Backend is all the code, e.g. JavaScript and PHP
- c. Backend is where all the programming happens in a web application, frontend is only the UI
- d. There is no difference between frontend and backend
---

**[Sumar 2014](https://github.com/Kjarten/XAudiole/blob/master/sumar2014/README.md#12-in-general-in-http-if-you-fetch-a-webpage-with-get-you-can-expect-that) - In general, in HTTP, if you fetch a webpage with GET you can expect that...**

- a. A new record or entity is created
- b. It is safe to fetch the same webpage again without problems
- c. It is not safe to fetch the same webpage again without problems
- d. a. and b.
---

**[Haust 2013] In general, in HTTP, if you send data with POST you can expect that...**

- a. A new record or entity is created
- b. It is safe to send the same data again without problems
- c. It is not safe to send the same data again without problems
- d. a. and b.
- e. a. and c.
---

**[Haust 2014] Með CSRF, Cross-Site Request Forgery, geta óprúttnir aðilar látið notanda framkvæma aðgerðir á öðrum vefjum, óafvitandi, með því að:**
 
- a. nýta XSS holur
- b. nýta injection árásir
- c. útbúa faldar HTTP beiðnir
- d. nýta þekktar villur í hugbúnaði
---

**Aukaspurning: Hvað þýða eftirfarandi stöðukóðar:**

* [1xx](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Information_responses)
* [2xx](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Successful_responses)
* [3xx](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Redirection_messages)
* [4xx](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Client_error_responses)
* [5xx](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Server_error_responses)
---

## DOM

**[Haust 2016] How do querySelector, querySelectorAll and ~~jQuery~~ relate?**

- a. All use the DOM tree when searching for elements in websites
- b. querySelector and querySelectorAll are methods in the jQuery library
- c. All use selector syntax to find elements in the DOM tree
- d. Not related
---

## URL & URI

**[Haust 2016] If we are linking to example.org, it would be best to use**

- a. `<a href="http://example.org">example.org</a>`
- b. 
```
<form method="post" action="http://example.org">
      <button>example.org</button>
</form>
```
- c.Vafrar geta birt efni á nytsamlegan hátt sem höfundur hafði ekki dottið í hug
```
<form method="get" action="http://example.org">
      <button>example.org</button>
</form>
```
- d. All methods are equally good
---

**[Haust 2015] Which of the following is a valid URL?**

- a. http://example.org/foo?bar=baz
- b. example.org/foo?bar=baz
- c. http://example.org:foo/?bar=baz
- d. example.org:foo/?bar=
---

**[Sumar 2014] Which of the following is correct URL?**

- a. http://example.org/&foo=bar&baz
- b. http://example.org/?foo=bar&baz
- c. http://example.org:8000/#foo
- d. b and c
---

**[Haust 2013] Hvað er URI (Uniform Resource Identifier)?**

- a. Strengur sem skilgreinir auðlind með sérkenni, staðsetur hana eða bæði
- b. Strengur sem skilgreinir auðlind með sérkenni en staðsetur hana ekki
- c. Strengur sem staðsetur auðlind en skilgreinir hana ekki með sérkenni
- d. Strengur sem skilgreinir auðlind með sérkenni *eða* staðsetur hana

## Ritgerðir

### Progressive Enhancement
- Upplifun / minnsta tækni
(Viljum að sem flestir geti upplifað vefsíðu, óháð tæki og og stuðningi)
- Byrja einfalt
- Bæta við (Bæta í lögum progressively þannig að í hverju af þessum lögum er bætt við útliti og virkni sem eykur mögulega upplifun)
- Hvernig?
- Vefhönnun
  * efni
    (áhugavert og skýrt efni)
   * merkingafræði
    (merkingarfræðilegt og aðgengilegt HTML)
   * vel stutt
   (vel stutt grunn útlit skilgreint í CSS)
   * flóknara
   (flóknara og mögulega verr stutt útlit í CSS)
   * aukin virkni
   (bætum við aukinni virkni með JS)
-aðgengi manna og véla
  (auðveldar fólki að nýta sér síðuna og vélum að vinna úr henni)
- Skjástærð / Mobile-first
   * ákvarðanir
   (þvíngar ákvarðanir)
   * content
   (setur efni í fyrsta sæti, ekki pláss fyrir óþarfa)
- Skalanleg hönnun
   * umbrot
   (sveigjanlegt umbrot byggt á grind)
   * myndir
   (sveigjanlegar myndir og miðlar)
   * media
   (css media queries)
   
-Graceful degradation er þegar við byggjum upplifunina á ákveðnum tækjum í huga og látum svo virkni brotna niður tignarlega og gefum síðri upplifun í eldri tækjum. Byrjum flókið og lögum okkar að virkni niður á við.

   
### [Sumar2014] 3.2 (10%) Hvað er merkingarfræði, í tengslum við HTML, og afhverju er hún mikilvæg?

**What is semantics in relation to HTML, and why is important?**

**Kjartan:**
* Merkingarfræðilegt HTML er þegar við notum skilgreinda merkingu *elementa* sem eru til.
* HTML skjalið tjáir merkingu, ekki framsetningu.
* Framsetning á gögnum er stjórnað með CSS, þannig næst hrein skipting efnis og útlits.
* Skipting á efni og útliti auðveldar alla vinnu þar sem breytingar á öðru hefur ekki áhrif á hitt.
* Merkingarfræðilegt HTML eykur líka aðgengi á síðunni þar sem mörgu tól og tæki byggja á merkingarfræðilegu HTML.
* Ýmsir bottar (bots) vinna líka á merkingarfræðilegu HTML og geta því betur unnið og greint innihald síðu.
* Það eykur lesanleika kóðans.
* Vafrar geta birt efni á nytsamlegan hátt sem höfundur hafði ekki dottið í hug.
* Að lokum er það snyrtilegra og fagmannlegra.

Stikkorð:
* Skilgreind merking *elementa*
* Tjá merkingu, ekki framsetningu
* Framsetning CSS
* Hrein skipting
* Aðgengi
* Bots
* Lesanleiki
* Birting
* S og F

**Máni:**
**Merkingarfræði**

* Það er sterklega mælst til þess að markup í HTML skjali sé aðeins notað til að tjá merkingu en ekki framsetningu
* Framsetning á gögnum er stýrt með CSS og fáum við því hreina skiptingu á milli efnis og útlits
* Mörg element til sem skilgreina merkingu en annars er hægt að nota attributes

**Af hverju merkingarfræði?**

* Aðskilnaður á milli merkingar og útlits gerir manni auðveldara að breyta öðru án þess að hafa áhrif á hitt
* Einfaldar viðhald, breytingar eru dýrar
* Góð merkingarfræði getur aukið aðgengi að vef

* Vélar sem skoða vef með merkingarfræðilega réttu HTML geta dregið ályktanir um efnið sem getur gagnast þér og öðrum
  - T.d. Googlebot, Pocket, Instapaper
* Vafrar geta birt efni á nytsamlegan hátt sem höfundur hafði ekki dottið í hug
* Það er _snyrtilegra_ og _faglegra_

### [Haust 2016] 3.2 *eslint*, *stylelint*, *babel* and *sass* are tools we've looked into and used. What tasks do they solve? How can we setup our projects so they help us the most? Do they have any disadvantages?

*eslint* is a linter for JavaScript. It makes runs through our code and looks for common problems, that could otherwise result in a bug. it can also be set up to ensure that the code is written according to a certain standards. Which is very usefull, specially when more than one person is working on the code. It can be set up in the TextEditor, so errors can be fixed as they come up and save us time in corrected the code compared to having it run only after the code has been written.

*stylelint* is a linter for CSS. It has the same properties as *eslint*

*babel* provides us with functionality to use JavaScript features that are not currently supported by browser. After the code has been written, *babel* will re-write the new features we have used in a way they can be "understood" by the browser. *babel* can also rewrite features to be backwards compatible for old versions of browsers.

*sass* is a programming language that allows us to write CSS files in a "more" programming way. It gives us features such as *mixin* and *nesting* as well as the availability to define variables. This can save us a lot of time, as we do not have to write the same code multiple time.

By including these tools in a project from the beginning, we will most likely have to spend less time debugging code and the code will be uniformly written. We can use the latest features and be sure that it will work with today's browsers.

These tools do not have many disadvantages. The ones that I can think of is making the inital setup of the project more complex and incase we are using open-source software, we might run into more bugs then with professional software as well as the possibility that the community behind the software will stop working on it, therfore forcing us to adopt new tools.


### [Haust 2016] 3.1 (10%) Hvaða merkingu leggur þú í orð Sir Tim Berners-Lee hér að neðan? Hvernig tengjast þau því námsefni sem farið hefur verið yfir?**

**How do you interpret Sir Tim Berners-Lee's words below? How do they relate to the material we've covered?**
```
The primary design principle underlying the Web's usefulness and growth is universality. [...] And it should be accessible from any kind of hardware that can connect to the Internet: stationary or mobile, small screen or large.
-Tim Berners-Lee: Long Live the Web
```

The Web has made the world easier for example by connected people regardless of geographical locations and providing knowledge instantly where it is needed. The web has also overcome language barriers, with text translations and speech recognition and translations. It can be interfaced in more ways then can be imagined and any device with a screen an internet connection gives you access to it's cognetive mind. This transformation from computer screens to smart watches and smart refrigerators has made the Web a utility that modern people demand continuous access to. In this course we addapted the tools to make our website scalable, with use of flexible grids and flexboxes. We adopted the philosphy of seperating content and style, to adapt changes to style easier if the need rises. We also covered the necessity of making our website accessible by following international standards.

### [Haust 2017] 3.1 (10%) Í verkefnum haustsins höfum við mikið notað *lintera*. Hvaða lintera höfum við notað (nefnið a.m.k. tvo), hvaða verkefni leysa þeir og afhverju ættum við að nota þá? Hafa þeir ókosti?

**This fall we've used linters quite a bit. What linters have we used (name at least two), what tasks do they solve and why should we use them? Do they have any disadvantages?**

Í verkefnum haustsins höfum við notað bæði Eslint og stylelint. Linterar skoða kóðan sem við höfum skrifað og leita af algengum villum t.d. ef gleymist að loka sviga, en þeir geta líka verið settir upp til að greina uppsetningu á kóða, t.d. bil milli setninga og annað eins þannig kóðinn lítur allur eins út. Það kemur sérstaklega af góðum notum ef fleiri en einn vinna í sama kóðanum. Flestir ættu að tileinka sér að nota lintera, þar sem þeir tryggja samræmi í kóðanum innan verkefnisins og milli verkefna. Það að vera með linter uppsettan í Text Editor, gefur tækifæri á því að laga villur þegar þær koma upp og þ.a.l. eyða minni tíma í að villuhreinsa kóðann. Einu ókostirnir eru mögulega erfiðleikar með uppsetningu og erfiðleikar með að breyta skilgreiningum á reglum innan þeirra.

Linting: Forrit sem nýtir *static analysis* á forritunarkóða.
* Mögulegar villur og vandamál (errors & warnings) sem kæmu upp við keyrslu
* Brot á kóðastíl verkefnis

---

### [Haust 2017] 3.2 (10%) HTML, CSS og JavaScript bregðast mismunandi við því þegar við gerum villu (eitthvað sem ekki er samkvæmt *specification*). Hvernig er það og hvernig er það mismunandi? Hvað getum við gert til þess að minnka líkur á því að eitthvað brotni fyrir notendur okkar? Gefið dæmi fyrir hvert.

**HTML, CSS and JavaScript react differently when we make mistakes (do something that is not correct according to specification). How do they react and how does it differ? What can we do to minimize the chance that it will adversely affect out users? Give examples for each.**

Þegar kemur að HTML og CSS, þá mun browserinn alltaf reyna að birta eitthvað. Browserinn fyrirgefur töluvert af villum í HTML þó forritarar ættu að tileinka sér það að skrifa HTML rétt, t.d. að loka elementum með tag.  Villur í CSS eru ekki fyrirgefnar jafn auðveldlega, þó litlar villur eins og að gleyma að enda setningar á ; eru fyrirgefnar. JavaScript villur geta hinsvegar stöðvað keyrslu á .js skrá alveg þannig að engin virkni úr þeirri skrá sé nothæf á vefsíðunni. Við getum minnkað líkurnar á að eitthvað brotni fyrir notendur með því að nota JavaScript og CSS linters og notkun á valitors.

CSS er hannað til að fyrirgefa minniháttar villur, t.d. fyrir yfirlýsingar:

* Ef tvípunkt eða semíkommu vantar í yfirlýsingu
* Ef heiti eigindis er óþekkt
* Ef gildi er óþekkt eða ekki er hægt að vinna úr því
* Er yfirlýsingin öll hunsuð og haldið áfram að næstu.

Meiriháttar villur stoppa lestur á skjali frá þeim stað sem þær eiga sér stað. Þetta gerist yfirleitt þegar { og } eru ekki í jafnvægi.

---

### [Haust 2017] 3.3 (10%) Afhverju ættum við að útbúa vefi með aðgengi í huga sem fylgja stöðum

**Why should we create websites with accessibility in mind that follow standards?**

Til að byrja með, þá viljum við líklega að sem flestir hafi möguleika á að skoða og nota vefi sem við búum til. Það getur hinsvegar reynst erfitt að taka tillit til mismunandi hæfnigetu notanda og allar þær lausnir sem útfæra þarf fyrir mismunandi hæfnigetu. Þegar við notumst við staðla sem skrifaðir hafa verið með aðgengi í huga, þá fáum við lista yfir lausnir, aðferðir, prófanir sem hópur fólks hefur unnið við að skilgreina með sem fjölbreyttasta hóp notenda í huga. Þ.a.l. getum við fylgt þessum stöðlum og án þess að þurfa að fara í of mikla rannsóknarvinnu verið viss um að síðan sé aðgengileg sem flestum.

---

[Haust 2017] 3.4 (10%) Eftir að hafa rekið augun í lausn hópsins þín á seinaa hópverkefninu færð þú beiðni um að útfæra það aftur frá viðkomandi. Þú munt leiða hóp sem mun útfæra framenda og færð algjört frelsi til að skipleggja verkefnið. Hvernig myndir þú byggja það upp?

**After having seen the solution you and your group did for the second group project, you get a request to re-implement it. You will lead a team that will implement the frontend you get a total freedom to plan it. How would you do it?**

* Ásamt hópfélögum (liðsmönnum) ákveða eftirfarandi atriði:
  * Val á *platform* fyrir *version control* s.s. *github*
  * Val á samskiptamáta milli liðsmanna fyrir verkefnið, s.s *slack*
  * Skoða umfang verkefnis og brjóta niður í eðlislíka hluta svo samnýta megi virkni þeirra. Það er að segja að liðsmenn séu ekki að vinna að nákvæmlega sama hlutnum fyrir mismunandi hluta verkefnis.
  * Val á *linterum* og uppsetningu á þeim (kóðastíll)
  * Val á tólum og tækjum sem nýta skal við verkefnið
  * Tryggja það að öll tól og tæki séu rétt upp sett og að liðsmenn skilji og kunni á notkun þeirra frá upphafi
  * Ákveða hvaða staðla skal fylgja
  * Ákveða hvaða CSS viðmiðunarreglur skal nota
  * Ákveða hvaða stuðning sé gert ráð fyrir
  * Ákveða uppbyggingu á verkefni, þ.e.a.s. möppur og skrár fyrir ýmisleg hjálparföll og sameiginlegt CSS (.scss)
  * Útdeila verkefnum til liðsmanna eftir hæfni og áhuga
  * Áætla tíma fyrir helstu verkefni og setja *dead lines*
  * Ákveða hver sé ábyrgur fyrir *merge* á *pull request*
  * Setja upp *ReadMe* skrá með öllum helstu upplýsingum að ofan og þar að auki leiðbeiningum um skilvirka .git notkun.
  * Setja upp greinargóða verkefnalýsingu
* Fylgjast með framvindu mála og vera sveigjanlegur með forgangsröð, til að tryggja að verkefnið dragist ekki á langinn.

### [Haust 2013] 3.2 (10%) Afhverju ættum við að útbúa vefi sem eru aðgengilegir sem flestum og fylgja stöðlum?

**Why should we create websites that are accessible to as many as possible and follow standards?**

Til að byrja með, þá viljum við líklega að sem flestir hafi möguleika á að skoða og nota vefi sem við búum til. Það getur hinsvegar reynst erfitt að taka tillit til mismunandi hæfnigetu notanda og allar þær lausnir sem útfæra þarf fyrir mismunandi hæfnigetu. Þegar við notumst við staðla sem skrifaðir hafa verið með aðgengi í huga, þá fáum við lista yfir lausnir, aðferðir, prófanir sem hópur fólks hefur unnið við að skilgreina með sem fjölbreyttasta hóp notenda í huga. Þ.a.l. getum við fylgt þessum stöðlum og án þess að þurfa að fara í of mikla rannsóknarvinnu verið viss um að síðan sé aðgengileg sem flestum.


**Aðgengi**

* Aðgengi snýst ekki um að fatlað fólk geti notað vefina okkar
* Aðgengi snýst um að _fólk_ geti notað vefina okkar
* Við getum öll orðið „fötluð“ tímabundið

**Afhverju aðgengi?**

* Viljum ekki mismuna fólki vegna fötlunar
* Getur verið mjög dýrt að gera aðgengilegt eftir á
* Samlegðaráhrif! Vefurinn okkar verður betri fyrir alla
* Lagasetningar (munu?) banna okkur að mismuna fólki á vefnum

**WCAG 2.0**

* W3C staðall
* Listi af tilmælum og prinsippum til að gera vefi aðgengilegri
* Þrjár tegundir:
  - A, minnsta stig
  - AA, það stig sem við ættum að stefna að
  - AAA, öll skilyrði uppfyllt

**Lyklaborð**

* Höfum allt aðgengilegt með lyklaborði
* Margir nota ekki mús eða álíka og reiða sig á lyklaborðið
* Allar upplýsingar og aðgerðir skulu aðgengilegar með lyklaborði
* Fjarlægjum ekki öll sjónræn merki um hvar fókus er
