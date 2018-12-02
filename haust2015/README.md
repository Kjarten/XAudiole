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

NOTE: `JSHint` is a linter, has same purpose as `Eslint` did in current course.
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
 
**1.7 Many frameworks offer some kind of a templating language, which of the following is a good reason to use them?**
 
- a. They guarantee that the SEO (search engine optimization) and accessibility of our website is good
- b. They guarantee that the HTML of our website is always valid
- c. They allow us to send data to the template and display it, regardless of the functionality of the program
- d. All of the above
---
 
**1.8 Unit tests are used to:**
 
- a. Increase our confidence while making changes to programs
- b. Document the real functionality of a program
- c. Give us fast feedback on the functionality of a program while we write it
- d. All of the above
--- 
 
**1.9 When we implement a user system, one thing we need to think specially about is:**
 
- a. Using a trusted and good programming language
- b. Encrypting passwords
- c. Use trusted user systems from a third party
- d. Hide all URLs the user cannot see
--- 
 
**1.10 Which of the following is a valid URL?**

- a. http://example.org/foo?bar=baz
- b. example.org/foo?bar=baz
- c. http://example.org:foo/?bar=baz
- d. example.org:foo/?bar=baz
---

**1.11 Which of the following is *not* correct about the module system in Node.js**

- a. You can include a module from NPM by using `require('<name of module>');`
- b. You can include a module stored in a directory with index.js by doing `require('<name of directory>');`
- c. You can include a program from a directory that includes app.js with `require('<name of directory>');`
- d. You can include a JSON file by doing `require('./<name of JSON file>.json');`
---

**1.12 One of the things Sass does *not* offer is:**

- a. Define *grids*
- b. Define *mixin* for functions
- c. Define variables
- d. Defining *nested* selectors
---

**1.13 The following CSS selector selects:**
`main > selection h2.important`

- a. All `h2` headings with `class important` that are a descendant of `section` that is the child of `main`
- b. All `h2` headings with `id important` that are a descendant of `section` that is the child of `main`
- c. All `h2` headings with `class important` that are the descendant of `section` that is the descendant of `main`
- d. All `h2` headings with `id important` that are the descendant of `section` that is the descendant of `main`
---

**1.14 What tasks do NPM and Bower solve**

- a. Define what modules from third parties we use
- b. Assist us in finding, fetching and updating modules from third parties
- c. Allow us to publish our own modules to public repositories for others to use
- d. All of the above

NOTE: `Bower` is a package manager, has same purpose as `NPM` did in current course.
---

**1.15 What is the result of running the following JavaScript code?**
```
function calc(f, g, x) {
      return f(x) + g(x);
}

var x =5;
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

See example: `h15_1_15.html` & `h15_1_15.js`
