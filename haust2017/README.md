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

1.17.3 Sectioning - kaflar og svæði
https://github.com/vefforritun/book/blob/master/chapters/01.html.md

---

**1.2 You get the task of displaying text along with images on the web, which would be best to use?**

- a. Semantic HTML for content and CSS for layout
- b. ~~Only semantic HTML~~
- c. ~~Store test and paths to images in JSON, create the UI with JavaScript and CSS~~
- d. ~~All equally valid~~

1.18 Merkingarfræði
https://github.com/vefforritun/book/blob/master/chapters/01.html.md

---

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
  
CSS3 skilgreinir box-sizing sem breytir því hvernig box modelið er reiknað

- `content-box`; - sjálfgefið gildi, allt tekið með í reikninginn
- `border-box`; - aðeins margin er tekið með í reikninginn

2.11.5 Box sizing
https://github.com/vefforritun/book/blob/master/chapters/02.css.md
  
---
  
**1.4 What is BEM?**
 
- a. ~~Bloody Elegant Markup, competitor to Markdown that is simpler and more usable~~
- b. ~~Blocks, elements, modified, method to write CSS that uses modified flexbox to order blocks and elements~~
- c. ~~Block Extansion Method, method to write methods in JavaScript that use asynchronous blocks in promises~~
- d. Block, element, modifer, method to write CSS classes and structure selectors
 
 2.24.3 BEM
 https://github.com/vefforritun/book/blob/master/chapters/02.css.md
 
---
 
**1.5 If we se scrambled letters (e.g. A° instead of ð) on our website, what might be the problem?**
 
- a. ~~The browsers settings need to changed to support Unicode in complete~~
- b. Website is being rendered in a different character set that we saved our HTML in
- c. ~~The utf-8 definition of our text editor is wrong~~
- d. ~~There is nothing we can do (except for using ASCII)~~

  * Ef viÃ° lendum Ã­ Ã¾vÃ­ aÃ° fÃ¡ upp brenglaÃ°a stafi
  * Ef við lendum í því að fá upp brenglaða stafi
  * Þá er skjalið okkar vistað í öðru stafasetti en við birtum eða öfugt
  * Textaritillinn okkar sýnir í hvaða stafsetti skjal er og leyfir okkur að breyta
  
Brenglaðir stafir
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/01/01.2.inngangur.md
 
---
 
**1.6 Which of the following is not legal value for a color in CSS?**
 
- a. rgba(0, 255, 0);
- b. ~~blue~~
- c. ~~#0f0~~
- d. ~~All legal values~~
 
---
 
**1.7 When we compare values in JavaScript we need to keep what in mind?**
 
- a. Always use === for all comparison
- b. ~~Use == for comparison of values of the same type, otherwise ===~~
- c. ~~Always us == for all comparison~~
- d. ~~Use === for comparison of values of the same type, otherwise ==~~

---

**1.8 Git sees files in four ways, they are:**
 
- a. ~~Unmodified file, modified file, staged file and merge file~~
- b. ~~Unmodified file, modified file, staged file and remote file~~
- c. Unmodified file, modified file, staged file and untracked file
- d. ~~Unmodified file, modified file, staged file and branch file~~
 
 ---
 
**1.9 On what is responsive web design based, in order of importance?**
 
- a. Flexible layout, flexible images, and media and CSS3 media queries
- b. ~~CSS3 media queries, flexible layout, and flexible images and media~~
- c. ~~Grid and CSS3 media queries~~
- d. ~~First designing for the smalles supported resolution and then more~~

---

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

---

**1.11 JavaScript is an interpreted programming language, what does that entail?**

- a. JavaScript code is interpreted every time it is run by an interpreter
- b. ~~JaveScript code is compiled in a build step by ab interpreter then that code is run by a browser~~
- c. ~~JavaScript code is compiled in a build step by an interpreter, then that code is run by a browser~~
- d. ~~JavaScript code is compiled in a build step by a compiler, that code is then interpreted by a browser before being run by a browser~~

---

**1.12 NaN is a special value in JavaScript, what does it stand for and when is it returned?**

- a. NaN stands for "Not a number" and is returned when a calculation or a function doing a calculation does not work
- b. ~~NaN stands for "Not accessible now" and is returned when type coercion is used ona an undefined or null value~~
- c. ~~NaN stands for "Not a number" and is only returned when parseInt can't parse a value from text~~
- d. ~~NaN stands for "Not accessible now" and is returned when type coercion does not work

---

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

---

**1.14 What does it mean if we perform a request in HTTP and the status code of the response ranges from 400 through 499**

- a. ~~Request was successful, status code indicates how exactly~~
- b. ~~Request was redirect somewhere else~~
- c. Request was not successful and the error is on our side, in client
- d. ~~Request was not successful and the error is on server~~
---

**1.15 What is Sass?**

- a. ~~NPM package that helps us write valid CSS~~
- b. ~~Programming language that helps us write valid CSS~~
- c. ~~NPM package that adds functionality to CSS~~
- d. Programming language that gives access to additional functionality in CSS
---

## 2. Forritunarspurningar / Programming questions, 40%
**2.1 (10%) CSS**

Útfærið birtingu fyrir grind sem byggð er á 12 dálkum með efni inni í. Raðir geta innihaldið marga dálka og mega þeir flæða í nýjar línur `.grid__col` skal vera 12 dálkar ef gluggi er undir *600px* breiður, annars 6 dálkar. Grid skal ekki vera breiðara en *1200px* og skal vera miðjuð.

Efni `(<div class="content">)` skal raða öllum börnum sínum lóðrétt og staðsetja þau í miðju lárétt, sjá skýringarmynd að neðan

Implement a display for a grid with 12 columns with content. Rows can contain many columns and they can flow into new lines `.grid__col` should be 12 columns if the viewport is under *600px* wide, otherwise 6 columns. Grid shall not be wider than *1200px* and be centere aligned in its container.

Content `(<div class="content">)` shall order its children vertically and position them in the center horizontally, see diagram below.
```
-----------------------
|       Halló!        |   <- <h2>Halló!</h2>
|                     |
|       heimur        |   <- <span>heimur</span>
-----------------------
```

**Til minnis / Reminders:**
* `display: flex;`
  * flex-container með aðalás og krossás /flex-container with main axis and cross axis
* `min-width:` Xpx `OR` X%; / `max-width:` Xpx `OR` X%; / `width:` Xpx `OR` X%;
* `flex-direction:` `row` (default) `OR` `column;`
  * `row` setur aðalás frá vinstri til hægri, `column` setur aðalás frá toppi til botns / `row` sets main axis from left to right, `column` sets main axis from top to bottom
* `justify-content:` `flex-start` (default) `OR` `flex-end` `OR` `center` `OR` `space-between` `OR` `space-around;`
  * Skilgreinir hvernig flex item raðast á aðalás / defines how flex items are positioned on main axis
* `align-content:` `stretch` (default) `OR` `flex-start` `OR` `flex-end` `OR` `center` `OR` `baseline`
  * Skilgreinir *innan línu* á krossás / changes position *inside line* on cross axis
* `align-times:` `stretch` (default) `OR` `flex-start` `OR` `flex-end` `OR` `center` `OR` `space-between` `OR` `space-around`
  * Breytir staðsetningu *lína* á krossás / changes position of lines on the cross axis
* `@media (min-width: Ypx OR max-width: Xpx)`
  * Skilgreinir *media query* fyrir hámark eða lágmarks breidd skjás / defines a *media query* for max or min width of viewport
```
.grid {

}

.grid__row {

}

.grid__col {

}

.content {

}

@media ( ) {
  .grid__col {

  }
}
```
Sjá, `h16_2_1.html` og `h16_2_1.css`

---

**2.2 (10%) HTML & JavaScript**

Eftirfarandi er ókláruð virkni sem bætir við streng úr formi á síðu ef lengd strengs er 11 eða fleiri stafir.

Fyllið inn í `<main>` og `<form>` fyrir það HTML sem vantar en fyrir JavaScript hefur virkni sem vantar verið skipt út fyrir bókstafina A, B, C, D sem fylla skal inn í.

Ekki þarf að hugsa um CSS eða annað HTML en það sem virkni krefst. Gera má ráð fyrir að JavaScript kóði mun keyra.

Following is incomplete functionality that will add a string from a form on a page if its length is 11 or more characters.

Fill in `<main>` and `<form>` for the missing HTML but for the JavaScript part, some functionality has been switched out for the letters A, B, C and D that you will fill in.

It is not required to do anything regarding CSS or other HTML on the page. You can assume the JavaScript code will be executed.

Sjá, `h16_2_2.html` og `h16_2_2.js`

---

**2.3 (10%) JavaScript**

---

**2.4 (10%) HTML & CSS**

---

## 3. Ritgerðarspurningar / Essay questions, 30%
Þriðji hluti inniheldur fjórar spurningar en aðeins þarf að svara þrem sem hver um sig gildir 10%. Ef öllum spurningum er svarað er svarað gildi þrjú bestu svörin.
Vandið uppbyggingu og frágang. Stutt og hnitmiðuð svör.

Third section contains four questions but only three need to be answered, each for 10%. If all questions are answered, the three best are used.
Take care with structure. Short and concise answers.

**3.1 (10%) Í verkefnum haustsins höfum við mikið notað *lintera*. Hvaða lintera höfum við notað (nefnið a.m.k. tvo), hvaða verkefni leysa þeir og afhverju ættum við að nota þá? Hafa þeir ókosti?**

**This fall we've used linters quite a bit. What linters have we used (name at least two), what tasks do they solve and why should we use them? Do they have any disadvantages?**

Í verkefnum haustsins höfum við notað bæði Eslint og stylelint. Linterar skoða kóðan sem við höfum skrifað og leita af algengum villum t.d. ef gleymist að loka sviga, en þeir geta líka verið settir upp til að greina uppsetningu á kóða, t.d. bil milli setninga og annað eins þannig kóðinn lítur allur eins út. Það kemur sérstaklega af góðum notum ef fleiri en einn vinna í sama kóðanum. Flestir ættu að tileinka sér að nota lintera, þar sem þeir tryggja samræmi í kóðanum innan verkefnisins og milli verkefna. Það að vera með linter uppsettan í Text Editor, gefur tækifæri á því að laga villur þegar þær koma upp og þ.a.l. eyða minni tíma í að villuhreinsa kóðann. Einu ókostirnir eru mögulega erfiðleikar með uppsetningu og erfiðleikar með að breyta skilgreiningum á reglum innan þeirra.

---

**3.2 (10%) HTML, CSS og JavaScript bregðast mismunandi við því þegar við gerum villu (eitthvað sem ekki er samkvæmt *specification*). Hvernig er það og hvernig er það mismunandi? Hvað getum við gert til þess að minnka líkur á því að eitthvað brotni fyrir notendur okkar? Gefið dæmi fyrir hvert.**

**HTML, CSS and JavaScript react differently when we make mistakes (do something that is not correct according to specification). How do they react and how does it differ? What can we do to minimize the chance that it will adversely affect out users? Give examples for each.**

Þegar kemur að HTML og CSS, þá mun browserinn alltaf reyna að birta eitthvað. Browserinn fyrirgefur töluvert af villum í HTML þó forritarar ættu að tileinka sér það að skrifa HTML rétt, t.d. að loka elementum með tag.  Villur í CSS eru ekki fyrirgefnar jafn auðveldlega, þó litlar villur eins og að gleyma að enda setningar á ; eru fyrirgefnar. JavaScript villur geta hinsvegar stöðvað keyrslu á .js skrá alveg þannig að engin virkni úr þeirri skrá sé nothæf á vefsíðunni. Við getum minnkað líkurnar á að eitthvað brotni fyrir notendur með því að nota JavaScript og CSS linters og notkun á valitors.

---

**3.3 (10%) Afhverju ættum við að útbúa vefi með aðgengi í huga sem fylgja stöðum**

**Why should we create websites with accessibility in mind that follow standards?**

Til að byrja með, þá viljum við líklega að sem flestir hafi möguleika á að skoða og nota vefi sem við búum til. Það getur hinsvegar reynst erfitt að taka tillit til mismunandi hæfnigetu notanda og allar þær lausnir sem útfæra þarf fyrir mismunandi hæfnigetu. Þegar við notumst við staðla sem skrifaðir hafa verið með aðgengi í huga, þá fáum við lista yfir lausnir, aðferðir, prófanir sem hópur fólks hefur unnið við að skilgreina með sem fjölbreyttasta hóp notenda í huga. Þ.a.l. getum við fylgt þessum stöðlum og án þess að þurfa að fara í of mikla rannsóknarvinnu verið viss um að síðan sé aðgengileg sem flestum.

---

**3.4 (10%) Eftir að hafa rekið augun í lausn hópsins þín á seinaa hópverkefninu færð þú beiðni um að útfæra það aftur frá viðkomandi. Þú munt leiða hóp sem mun útfæra framenda og færð algjört frelsi til að skipleggja verkefnið. Hvernig myndir þú byggja það upp?**

**After having seen the solution you and your group did for the second group project, you get a request to re-implement it. You will lead a team that will implement the frontend you get a total freedom to plan it. How would you do it?**

1. Setja upp GitHub Repository
2. Bjóða liðsfélögum inn á Repository
3. Setja upp ReadMe, með eftirfarandi upplýsingum
  3. Tól og tæki fyrir verkefnið
    3. Val á linterum, uppsetning og keyrsla
  3. Uppsetning á verkefni (Folder structure)
  3. Nánari upplýsingar um structure á JavaScript, HTML og CSS. T.d. eiga ákveðin tegund af föll og skilgreiningar að vera sett upp í hjálparskrám
  3. Upplýsingar um stílbrigði
  3. Upplýsingar um hvaða staðlar skuli vera notaðir
 4. Ég myndi útdeila verkefnum eftir áhugasviði og hæfni liðsfélaga.
 5. Setja upp scope fyrir hvað hver hluti þarf að uppfylla áður en farið er að testa hann
 6. Skilgreina hvernig hver hluti skal vera testaður.
