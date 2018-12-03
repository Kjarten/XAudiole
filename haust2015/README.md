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
- b. ~~The order of definitions for each element~~
- c. __Value for each rule that defines how default values *cascade* over it__
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
- d. ~~example.org:foo/?bar=~~**- URI, ekki URL og strengur má ekki fylgja `:`, bara tala
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

---

## 2. Forritunarspurningar / Programming questions, 40%

**2.1 (15%) HTML & CSS**

---

**2.2 (10%) JavaScript**

---

**2.3 (15%) Node.js & Express**

---

## 3. Ritgerðarspurningar / Essay questions, 30%

Þriðji hluti inniheldur fjórar spurningar en aðeins þarf að svara þrem sem hver um sig gildir 10%. Ef öllum spurningum er svarað gilda þrjú bestu svörin.
Vandið uppbyggingu og frágang. Stutt og hniðmiðuð svör.

The third part has four questions but you only need to answer three, each of which gives 10%. If you answer all the questions, the three best answers count.
Clear structure and delivery. Short and concise answers.

**3.1 (10%) Stigvaxandi aukning (progressive enhancement) og tignarlegt niðurbrot (graceful degradation) eru hugtök sem skilgreina leiðir til að eiga við stuðning vafra. Hvað þýða þau og hver er helsti munurinn? Gefið dæmi. / Progressive enhancement and graceful degradation are concepts that define ways to deal with browser support. What do they mean and what is their greatest difference? Give an example.**

Progressive enchanchment er hugtak sem segir að við eigum að einbeita okkur að upplifun sem krefst minnstu mögulegu tækni og bæta hana svo í lögum, *progressively*. Á hverjum af þessum lögum nær notandi að upplifa efnið okkar.

Það má hugsa í tilfelli vefforritunar svona:
1. Skrifum áhugavert, skýrt efni
2. Setjum það upp með aðgengilegu, merkingarfræðilegu HTML
3. Bætum við grunn útliti sem er vel stutt
4. Bætum við flóknara útliti sem er e.t.v. minna stutt
5. Bætum við aukinni virkni með JavaScript

Þetta á líka við um að skrifa kóðan fyrir minnstu skjáina og minnsta CPU fyrst og úfæra svo fyrir stærri og stærri skjái og meira CPU.

Graceful degradation er þegar við byggjum upplifunina á ákveðnum tækjum í huga og látum svo virkni brotna niður tignarlega og gefum síðri upplifun í eldri tækjum. Byrjum flókið og lögum okkar að virkni niður á við.

**3.2 (10%) Node.js er *atburðadrifið* og eru *event loop* notuð. Hvernig virkar hún og hvaða áhrif hefur það á það hvernig við skrifum forrit? / Node.js is *event* driven and uses and *event loop*. How does that work and what effects does it have on how we write programs?**

---

**3.3~~(10%) Hvað er XSS (Cross-Site Scripting)? Hvernig virkar *persistent* og *reflected* XSS árásir? Hvernig getum við varið okkur fyrir XSS? Gefið dæmi. / What is XSS (Cross-Site Scripting)? How do persistent and reflected XSS attacks work? How can we defend against XSS? Give an example.~~**

---

**3.4 (10%) Þú ásamt nokkrum öðrum aðilum í hóp fáið það verkefni að útfæra vefkerfi. Kerfið á að bjóða upp á að svara spurningum út frá vel skilgreindum lista þar sem hvert svar leiðir þig að ákveðinni útkomu (t.d. eins og persónuleikapróf, tveir aðilar sem svara alveg eins fá nákvæmlega sömu útkomu.)
Hvernig myndir þú:**
* **a. Setja upp verkefnið þ.a. auðvelt sé fyrir hópinn að vinna það?**
* **~~b. Haga útfærslu á framenda og bakend? Leitast er eftir almennri lýsingu sem sýnir heildarskilning á efni~~**

Backend is not covered in the current version of the course. However, 3.4 in Haust 2017 is a very similar questions, with only frontend in mind.
