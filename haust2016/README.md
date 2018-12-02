# Haust 2016

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
 
**1.9 The concepts *frontend*, *backend* and *HTTP* are related in what way?**
 
- a. __*Frontend* is shown to the user, the data is retrieved with *HTTP* on the *backend*__
- b. ~~*Backend* is shown by the user, the data is retrieved with *HTTP* on a *frontend*~~
- c. ~~*Frontend* is shown by the web server, the data is retrieved with *HTTP* from the *backend*~~
- d. ~~*Backend* creates the data that is sent with TCP/IP to the *frontend*, *HTTP* is a technology used to create forms~~
```
0.2.6 Framendi og Bakendi
https://github.com/vefforritun/book/blob/master/chapters/00.inngangur.md

Framendi VS Bakendi
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/11/11.1.http.md
```
--- 
 
**1.10 How do querySelector, querySelectorAll and jQuery relate?**

- a. __All use the DOM tree when searching for elements in websites__
- b. ~~querySelector and querySelectorAll are methods in the jQuery library~~
- c. ~~All use selector syntax to find elements in the DOM tree~~
- d. ~~Not related~~
---

**1.11 When we create an XMLHttpRequest and perform an Ajax request:**

- a. ~~We always get JSON as a response and must change it into a JavaScript object to work with~~
- b. ~~The web server we call must have a Cross-origin resource sharing (CORS) header~~
- c. __We must note that when we retrieve resources over a network, it can be slow__
- d. We never get JSON as a response and must parse it into a JavaScript object
---

**1.12 What is flexbox?**

- a. Way to create flexible layouts that replaces `position` and allows us to define layout easily on two axes
- b. Way to create flexible layouts that works with `position` and allows us to define layout easily on two axes
- c. Way to create flexible layouts that replaces `position` and allows us to define layout easily on one axis
- d. Way to create fixed layouts that works with `position` and allows us to define layout easily on two axes
---

**1.13 When we use new features, we should:?**

- a. Always setup a polyfill for the feature
- b. Check the feature on *caniuse.com* and if it has over 90% support, use it
- c. Evaluate the feature based on the project and the browsers supported
- d. All above
---

**1.14 To make our website more fun, we can use transitions and animations, in particular, we should:**

- a. Stay clear of `transform` in CSS, since it can cause jank and lag
- b. Have everything move, everywhere, all the time
- c. Stick to transitioning and transforming things that are inexpensive & reasonable
- d. Use the 3D processing of the CPU by moving the null transform to a new layer
---

**1.15 What is logged when the following JavaScript code is run?**
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

See example: `h16_1_15.html` & `h16_1_15.js`
