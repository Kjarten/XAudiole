# Haust 2016

Yfirferð hjá Óla: https://www.youtube.com/watch?v=mOEL4vrK_Lg&t=2497s

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

Allar aðferðirnar virka, en þar sem við erum bara að vísa yfir á aðra síðu, er valmöguleiki a. bestur.

HTTP Aðferðir og `<form>`
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/11/11.1.http.md

---

**~~1.2 Code coverage is a concept that helps us to write unit tests by~~**

- a. It runs all our tests and lets us know their results
- b. We get to know the percentage of our code is under test and can get by without writing tests for the same function, braches or statements
- c. It runs selected tests and lets us know their results
- d. We get to know how many lines of our code are under test and can get by without writing tests for the same functions, braches and statements
---

**1.3 Arrow functions in ECMAScript 2015 are different from functions, how?**

- a. Do not bind `this` nor `arguements`
- b. ~~Do bind `this` but not `arguements`~~
- c. ~~Do not bind `this` only `arguements`~~
- d. ~~Do bind `this` and `arguements`~~

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

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

1.20 Aðgengi
https://github.com/vefforritun/book/blob/master/chapters/01.html.md

---

 **~~1.6 What is V8?~~**

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

1.10-1.15
https://github.com/vefforritun/book/blob/master/chapters/01.html.md

---
 
**1.8 Which of the following values are *falsy* in JavaScript**
 
- a. ~~"0"~~
- b. ~~[]~~
- c. __NaN__
- d. ~~1~~

Falsy
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/08/08.1.javascript.md

---
 
**1.9 The concepts *frontend*, *backend* and *HTTP* are related in what way?**
 
- a. __*Frontend* is shown to the user, the data is retrieved with *HTTP* on the *backend*__
- b. ~~*Backend* is shown by the user, the data is retrieved with *HTTP* on a *frontend*~~
- c. ~~*Frontend* is shown by the web server, the data is retrieved with *HTTP* from the *backend*~~
- d. ~~*Backend* creates the data that is sent with TCP/IP to the *frontend*, *HTTP* is a technology used to create forms~~

0.2.6 Framendi og Bakendi
https://github.com/vefforritun/book/blob/master/chapters/00.inngangur.md

Framendi VS Bakendi
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/11/11.1.http.md

--- 
 
**1.10 How do querySelector, querySelectorAll and ~~jQuery~~ relate?**

- a. ~~All use the DOM tree when searching for elements in websites~~
- b. ~~querySelector and querySelectorAll are methods in the jQuery library~~
- c. __All use selector syntax to find elements in the DOM tree__
- d. ~~Not related~~
---

**1.11 When we create an XMLHttpRequest and perform an Ajax request:**

- a. ~~We always get JSON as a response and must change it into a JavaScript object to work with~~
- b. ~~The web server we call must have a Cross-origin resource sharing (CORS) header~~
- c. __We must note that when we retrieve resources over a network, it can be slow__
- d. ~~We never get JSON as a response and must parse it into a JavaScript object~~

21:00
https://www.youtube.com/watch?v=F_yMkbA6A2M&feature=youtu.be

---

**1.12 What is flexbox?**

- a. ~~Way to create flexible layouts that replaces `position` and allows us to define layout easily on two axes~~
- b. __Way to create flexible layouts that works with `position` and allows us to define layout easily on two axes__
- c. ~~Way to create flexible layouts that replaces `position` and allows us to define layout easily on one axis~~
- d. ~~Way to create fixed layouts that works with `position` and allows us to define layout easily on two axes~~

2.22 Flexbox
https://github.com/vefforritun/book/blob/master/chapters/02.css.md

---

**1.13 When we use new features, we should:?**

- a. ~~Always setup a polyfill for the feature~~
- b. ~~Check the feature on *caniuse.com* and if it has over 90% support, use it~~
- c. __Evaluate the feature based on the project and the browsers supported__
- d. ~~All above~~
---

**1.14 To make our website more fun, we can use transitions and animations, in particular, we should:**

- a. ~~Stay clear of `transform` in CSS, since it can cause jank and lag~~
- b. ~~Have everything move, everywhere, all the time~~
- c. __Stick to transitioning and transforming things that are inexpensive & reasonable__
- d. ~~Use the 3D processing of the CPU by moving the null transform to a new layer~~
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

- a. __81, 64, 49, 36, 25, 16, 9, 4, 1__
- b. ~~1, 2, 3, 4, 5, 6, 7, 8, 9~~
- c. ~~1, 4, 9, 16, 25, 36, 49, 64, 81~~
- d. ~~9, 8, 7, 6, 5, 4, 3, 2, 1~~

See example: `h16_1_15.html` & `h16_1_15.js`

---

## 2. Forritunarspurningar, 40%

**2.1 (10%) JavaScript**

**Finna má ýmislegt að eftirfarandi JavaScript kóða í ES2015, nefndu a.m.k. fimm atriði og útskýrðu hvað mætti betur fara:**

**There is a plethora of errors in the following JavaScript code in ES2015, name at least five of them and describe why and how to fix them**
```
document.addEventListener('DOMContentLoaded',function()=> {

  let buttons = document.querySelectorAll('button');
  
  for(var foo = 0; foo < buttons.length; foo++) {
    button = buttons[foo];
    button.addEventListener('onclick', (e) => {
    button.setAttribute('data-clicked', true);
    });
  }
});
```
1. `let` ætti að vera `const`

2. `var` ætti að vera `let`

3. `onClick` ætti að vera `click`

4. `'data-clicked', True` ætti að vera `'class' , 'data-clicked`

5. Það mætti sleppa `button = button[foo]` og nota `button[foo].addEventListener`

6. `foo` er eitthvað sem við venjulega notum ekki til að skilgreina breyturnar okkar

7. Mætti vera með bil í `'DOMContentLoaded',function()=>`

8. Mætti sleppa að nota `e`, þar sem við notum síðan ekki `e`

---

**2.2 (10%) CSS**

Verið er að útbúa vef sem mun birta upplýsingar í *kortum* (e. card) sem raðast hlið við hlið einsog pláss leyfir. Skrifið CSS sem uppfyllir eftirfarandi:
* `card` skal hafa
      * hvítan bakgrunn(`#ffffff`)
      * `10px` margin til hægri og `10px` margin fyrir neðan
      * `20px` padding á alla kanta
      * `1px` fastann svartan ramma (border) (`1px solid #000000`)
      * takmörkun á hámarksbreidd, það má aldrei verða breiðara en `400px`
      * takmörkun á lágmarksbreidd, það má aldrei verða minna á breiddina en `200px`
* Almment skal `card` taka 1/3 af því lárétta plássi sem í boði er
* Undir `800px` skal `card` taka 1/2 af því lárétta plássi sem er í boði
* Undir `500px` skal `card` taka allt það lárétta pláss sem er í boði og ekki hafa neitt margin

You are setting up a web which will display info in *cards* that will stack side by side as room allows. Write CSS that satisfies the following:
* `card` shall have
      * white background(`#ffffff`)
      * `10px` margin to the right and `10px` margin at the bottom
      * `20px` padding on all sides
      * `1px` solid black border (`1px solid #000000`)
      * limitation of the maximum width, it can never be wider than `400px`
      * limitation of the maximum width, it can never be less than `200px`
* In general `card` shall take up 1/3 of the horizontal space available
* Under `800px` `card` shall take up 1/2 of the horizontal space available
* Under `500px` `card` shall take up all available horizontal space and not have any margin
```
/* width, max-width, min-width, padding, margin, border, background-color*/
.card {
      box-sizing: border-box;
      
 }
 
 @media only screen and (max-width: 800px) {
      .card {
      
      }
 }
  
 @media only screen and (max-width: 500px) {
      .card {
      
      }
 }
```
---

**2.3 (10%) HTML**

Þú ert að setja upp fréttasíðu þar sem eftirfarandi þarf að koma fram fyrir frétt:
* Titill
* Meginmál fréttar
* Mynd með frétt, ásamt myndatexta
* Listi af lýsigögnum fyrir frétt
  * Fréttamaður
  * Dagsetning
  * Flokkar sem frétt á við (t.d. "innlent, stjórnmál, kosningar")
Skrifaðu upp HTML beinagrind fyrir frétt þar sem öll atriðin kom fram. Notaðu merkingarfræðileg element og láttu inndrátt vera augljósan. Ekki þarf að hugsa um efni í meginmáli, nóg að skilgreina element sem mun innihalda efnið.

You are setting up a news site where the following must be included for the news:
* Title
* News body
* Image with news, along with a caption
* List of metadata for the news
  * Reporter
  * Date
  * Categories (e.g. "domestic, politics, election")
```
<!doctype html>
<html lang="is">
      <head>
            <meta charset="utf-8">
            <title> Er þetta frétt?</title>
      </head>
      <body>
```
---

**~~2.4 (10%) node.js~~**

---

## 3. Ritgerðarspurningar/ Essay questions, 30%

Þriðji hluti inniheldur fjórar spurningar en aðeins þarf að svara þrem sem hver um sig gilder 10%. Ef öllum spurningum er svarað gilda þrjú besut svörin.

Vandið uppbyggingu og frágang. Stutt og hnitmiðuð svör.

**3.1 (10%) Hvaða merkingu leggur þú í orð Sir Tim Berners-Lee hér að neðan? Hvernig tengjast þau því námsefni sem farið hefur verið yfir?**

**How do you interpret Sir Tim Berners-Lee's words below? How do they relate to the material we've covered?**
```
The primary design principle underlying the Web's usefulness and growth is universality. [...] And it should be accessible from any kind of hardware that can connect to the Internet: stationary or mobile, small screen or large.
-Tim Berners-Lee: Long Live the Web
```

The Web has made the world easier for example by connected people regardless of geographical locations and providing knowledge instantly where it is needed. The web has also overcome language barriers, with text translations and speech recognition and translations. It can be interfaced in more ways then can be imagined and any device with a screen an internet connection gives you access to it's cognetive mind. This transformation from computer screens to smart watches and smart refrigerators has made the Web a utility that modern people demand continuous access to. In this course we addapted the tools to make our website scalable, with use of flexible grids and flexboxes. We adopted the philosphy of seperating content and style, to adapt changes to style easier if the need rises. We also covered the necessity of making our website accessible by following international standards.

---

**3.2 (10%) *eslint*, *stylelint*, *babel* og *sass* eru tól sem við höfum skoðað og notað.
Hvaða verkefni leysa þau? Hvernig getum við sett upp verkefni þannig að þau hjálpi okkur sem mest? Hafa þau ókosti?**

**- *eslint*, *stylelint*, *babel* and *sass* are tools we've looked into and used. What tasks do they solve? How can we setup our projects so they help us the most? Do they have any disadvantages?**

*eslint* is a linter for JavaScript. It makes runs through our code and looks for common problems, that could otherwise result in a bug. it can also be set up to ensure that the code is written according to a certain standards. Which is very usefull, specially when more than one person is working on the code. It can be set up in the TextEditor, so errors can be fixed as they come up and save us time in corrected the code compared to having it run only after the code has been written.

*stylelint* is a linter for CSS. It has the same properties as *eslint*

*babel* provides us with functionality to use JavaScript features that are not currently supported by browser. After the code has been written, *babel* will re-write the new features we have used in a way they can be "understood" by the browser. *babel* can also rewrite features to be backwards compatible for old versions of browsers.

*sass* is a programming language that allows us to write CSS files in a "more" programming way. It gives us features such as *mixin* and *nesting* as well as the availability to define variables. This can save us a lot of time, as we do not have to write the same code multiple time.

By including these tools in a project from the beginning, we will most likely have to spend less time debugging code and the code will be uniformly written. We can use the latest features and be sure that it will work with today's browsers.

These tools do not have many disadvantages. The ones that I can think of is making the inital setup of the project more complex and incase we are using open-source software, we might run into more bugs then with professional software as well as the possibility that the community behind the software will stop working on it, therfore forcing us to adopt new tools.

---

**3.3 ~~(10%) Injection árásir eru flokkaðar sem helsta öruggshætta vefforrita skv. OWASP.
Í hverju felast þessar árásir? Hvað er ráðist á? Hvernig komum við í veg fyrir þær?~~**

**~~Injection attacks are classified as the main security threats to web apps according to OWASP. What are these attacks? What is attacked? How can we prevent them?~~**

Not covered in the current version of the course.

---

**3.4 ~~(10%) Eftir glimrandi frammistöðu í vefforritun, færð þú ásamt öðrum samnemendum þínum það verkefni að útbúa kennsluvef fyrir námskeiðið. Það sem vefurinn þyrfit að útfæra væri:~~**
* **~~Aðgengi að fyrirlestrum ásamt upptökum af þeim á einni síðu~~**
* **~~Gagnvirk dæmi þar sem hægt er að eiga við kóða til að skilja hvernig hann virkar~~**

**~~Hvernig myndir þú setja verkefnið m.v. að bæði væri skrifaður framenda og bakenda kóði og margir mynd vinna í því? Leitast er eftir almennri lýsingu sem sýnir heildarskilning á efni.~~**

**~~After a stellar performance in web development, you along with your classmates are tasked with preparing a website for the course. The website should implement:~~**
* **~~Access to lectures along with recordings on one page~~**
* **~~Interactive examples where you can change the code to understand how it works~~**

**~~How would you structure the project if both backend and frontend code would be written and a team of people would be working on it? General descriptions showing the overall understanding of the course.~~**

Backend is not covered in the current version of the course. However, 3.4 in Haust 2017 is a very similar questions, with only frontend in mind.





