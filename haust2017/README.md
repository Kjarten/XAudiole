# Haust 2017

**1.1 What semantic value can be deduced from the following HTML?**
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
- b. ~~Excerpt from content with the heading "Foo" and an unordered list with items "Bar" and "Baz"~~
- c. ~~Navigation on a site with the heading "Foo" and an ordered list with items "Bar and "Baz"~~
- d. ~~Navigation on a site with the heading "Foo" and an unordered list with items "Bar" and "Baz"~~


**1.2 You get the task of displaying text along with images on the web, which would be best to use?**

- a. Semantic HTML for content and CSS for layout
- b. ~~Only semantic HTML~~
- c. ~~Store test and paths to images in JSON, create the UI with JavaScript and CSS~~
- d. ~~All equally valid~~


**1.3 What are the dimensions (width and height) of the following according to the box model?**
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
- b. ~~320x220~~ 
- c. ~~340x240~~
- d. ~~360x260~~
  
  
**1.4 What is BEM?**
 
- a. ~~Bloody Elegant Markup, competitor to Markdown that is simpler and more usable~~
- b. ~~Blocks, elements, modified, method to write CSS that uses modified flexbox to order blocks and elements~~
- c. ~~Block Extansion Method, method to write methods in JavaScript that use asynchronous blocks in promises~~
- d. Block, element, modifer, method to write CSS classes and structure selectors
 
 
**1.5 If we se scrambled letters (e.g. A° instead of ð) on our website, what might be the problem?**
 
- a. ~~The browsers settings need to changed to support Unicode in complete~~
- b. Website is being rendered in a different character set that we saved our HTML in
- c. ~~The utf-8 definition of our text editor is wrong~~
- d. ~~There is nothing we can do (except for using ASCII)~~

  * Ef viÃ° lendum Ã­ Ã¾vÃ­ aÃ° fÃ¡ upp brenglaÃ°a stafi
  * Ef við lendum í því að fá upp brenglaða stafi
  * Þá er skjalið okkar vistað í öðru stafasetti en við birtum eða öfugt
  * Textaritillinn okkar sýnir í hvaða stafsetti skjal er og leyfir okkur að breyta
 
 
**1.6 Which of the following is not legal value for a color in CSS?**
 
- a. rgba(0, 255, 0);
- b. ~~blue~~
- c. ~~#0f0~~
- d. ~~All legal values~~
 
 
**1.7 When we compare values in JavaScript we need to keep what in mind?**
 
- a. Always use === for all comparison
- b. ~~Use == for comparison of values of the same type, otherwise ===~~
- c. ~~Always us == for all comparison~~
- d. ~~Use === for comparison of values of the same type, otherwise ==~~
 
 
**1.8 Git sees files in four ways, they are:**
 
- a. ~~Unmodified file, modified file, staged file and merge file~~
- b. ~~Unmodified file, modified file, staged file and remote file~~
- c. Unmodified file, modified file, staged file and untracked file
- d. ~~Unmodified file, modified file, staged file and branch file~~
 
 
**1.9 On what is responsive web design based, in order of importance?**
 
- a. Flexible layout, flexible images, and media and CSS3 media queries
- b. ~~CSS3 media queries, flexible layout, and flexible images and media~~
- c. ~~Grid and CSS3 media queries~~
- d. ~~First designing for the smalles supported resolution and then more~~
 
**1.10 What does the following ruleset do in CSS?**
```
section ul > li:nth-child(2n) {
  
  background-color: #000;
  }
```
- a. ~~Black background on even li that are descendant from ul that again are children of section~~
- b. Black background on even li that are children of ul that again are descendant from section
- c. ~~Black background on second li that is a child of ul that again are descendant from section~~
- d. ~~Black background on even li that are descendant from ul that again are descendant from section~~


**1.11 JavaScript is an interpreted programming language, what does that entail?**

- a. JavaScript code is interpreted every time it is run by an interpreter
- b. ~~JaveScript code is compiled in a build step by ab interpreter then that code is run by a browser~~
- c. ~~JavaScript code is compiled in a build step by an interpreter, then that code is run by a browser~~
- d. ~~JavaScript code is compiled in a build step by a compiler, that code is then interpreted by a browser before being run by a browser~~


**1.12 NaN is a special value in JavaScript, what does it stand for and when is it returned?**

- a. NaN stands for "Not a number" and is returned when a calculation or a function doing a calculation does not work
- b. ~~NaN stands for "Not accessible now" and is returned when type coercion is used ona an undefined or null value~~
- c. ~~NaN stands for "Not a number" and is only returned when parseInt can't parse a value from text~~
- d. ~~NaN stands for "Not accessible now" and is returned when type coercion does not work


**1.13 What is the result of running the following ES2015 JavaScript code?**
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
- a. ~~5~~
- b. ~~7~~
- c. 9
- d. ~~11~~


**1.14 What does it mean if we perform a request in HTTP and the status code of the response ranges from 400 through 499**

- a. ~~Request was successful, status code indicates how exactly~~
- b. ~~Request was redirect somewhere else~~
- c. Request was not successful and the error is on our side, in client
- d. ~~Request was not successful and the error is on server~~


**1.15 What is Sass?**

- a. ~~NPM package that helps us write valid CSS~~
- b. ~~Programming language that helps us write valid CSS~~
- c. ~~NPM package that adds functionality to CSS~~
- d. Programming language that gives access to additional functionality in CSS
