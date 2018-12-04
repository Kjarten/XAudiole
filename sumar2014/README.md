# Vefforritun - TÖL306G - Sumar 2014 (Sjúkrapróf/endurtektarpróf)

## 1. Krossaspurningar / multiple choice, 40%

### 1.1 Which of the following is *not* among the roles of the W3C?

- a. ~~Standardize HTML~~
- b. ~~Standardize CSS~~
- c. __Standardize JavaScript__
- d. ~~a. and b.~~

Staðlað hjá ECMA, sem ECMAScript árið 1997
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/08/08.1.javascript.md

---

### 1.2 In general, in HTTP, if you fetch a webpage with GET you can expect that...

- a. A new record or entity is created
- b. ~~It is safe to fetch the same webpage again without problems~~
- c. ~~It is not safe to fetch the same webpage again without problems~~
- d. ~~a. and b.~~

---

### 1.3 HTML5 is the natural progression of the web, but what does the concept encompass

- a. __Changes in HTML from HTML 4.01 and XHTML__
- b. ~~Changes in HTML, extensions to CSS and new JavaScript APIs~~
- c. ~~Changes in HTML, extensions to CSS and changed syntax in JavaScript~~
- d. ~~Changes in HTML from HTML 4.01 and XHTML with extensions to CSS~~

---

### 1.4 ~~What is OWASP~~

- a. ~~Accessibility standard published by W3C~~
- b. ~~Open organization that lobbies for better support of standards in browsers~~
- c. ~~New JavaScript API that can increase the security of web apps~~
- d. __Open organization that focuses on improving the security of software__
---
 
### 1.5 What did Tim Berners-Lee use as the basis of the world wide web along side TCP and DNS
 
- a. ~~The concept of HyperText~~ <- Held að þetta gæti mögulega verið svarið
- b. __HTML__
- c. ~~SSL~~
- d. ~~HTML, CSS and JavaScript~~

Í kringum 1990 var Sir Tim Berners-Lee að vinna hjá CERN sem eðlisfræðingur. Hann skrifaði minnisblað um kerfi sem hann sá fyrir sér að myndi auka möguleika á samvinnu með því að deila skjölum á einfaldan hátt. Í framhaldinu skilgreindi hann HTML, t.d. í skjalinu „HTML Tags“ og skrifaði fyrsta vafrann og vefþjóninn sem túlkuðu og birtu HTML (skrifaður í Objective-C á NeXT tölvu).

 ---
 
### 1.6 ~~REST puts some constraints on the architecture of web services, which of the following is one of them?~~

- a. 
- b. 
- c. 
- d. 

---
 
### 1.7 What is the result of running the following JavaScript code?
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
- a. ~~In 1 second the value "6" will be written to console~~
- b. __In 10 seconds the value "6" will be written to console__
- c. ~~In 1 second the value "45" will be written to console~~
- d. ~~In 10 seconds the value "45" will be written to console~~

setTimeout og setInterval

* Leiðir í JavaScript til að búa til föll sem keyra í framtíðinni
* `setTimeout(callback, delay)` kallar í `callback` fallið eftir `delay` millisekúndur
* `setInterval(callback, interval)` kallar í `callback` á `interval` millisekúndu fresti

Fyrirlestur 10.1 – Ósamstillt forritun
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/10/10.1.async.md

---

### 1.8 Which of the following needs to be considered for accessibility
 
- a. Describe images with *alt* text
- b. Define language for content
- c. Write descriptive text for links
- d. __All of the above__

1.20.3 Að smíða vef með aðgengi í huga
https://github.com/vefforritun/book/blob/master/chapters/01.html.md

---

### 1.9 What is the difference between frontend and backend?
 
- a. __Backend resides on the web server and programs written there generate HTML, CSS or JavaScript that is sent to the frontend where the browser interprets it and the user interacts with it__
- b. ~~Frontend is the UI the user sees, implemented with HTML and CSS. Backend is all the code, e.g. JavaScript and PHP~~
- c. ~~Backend is where all the programming happens in a web application, frontend is only the UI~~
- d. ~~There is no difference between frontend and backend~~

Framendi (e. front-end eða client-side) er einsog áður segir sá partur vefsins sem notendur sjá og eiga við. Í grunninn er framendi búinn til með HTML, CSS og Javascript. Til þess að einfalda og flýta fyrir smíðum á stærri og flóknari vefjum eru til margskonar framework eða libraries sem hjálpa. Dæmi um þetta sem eru vinsæl í dag eru React, Angular og Vue. Þó svo að þessi tól geti hjálpað okkur, þurfum við alltaf að vita hvað gerist í grunninn og því byrjum við á að læra HTML, CSS og Javascript án nokkura hjálpartækja.

Bakendi (e. back-end eða server-side) er sá partur vefsins sem er sendur yfir HTTP til framenda. Bakendinn samanstendur yfirleitt af vefþjón, forriti sem útbýr framenda og einhverri gagnageymslu (t.d. gagnagrunnur). Vefþjónar geta stutt margskonar forritunarmál (t.d. C# eða Python) og forritunarumhverfi (t.d. .NET eða Django).

0.2.6 Framendi og Bakendi
https://github.com/vefforritun/book/blob/master/chapters/00.inngangur.md

---
 
### What is NPM and what effect does it have on node.js

- a. ~~NPM is a framework for node.js that makes it easy to write web applications~~
- b. ~~NPM is a framework for node.js that assists in manual tasks~~
- c. __NPM is the package manager of node.js that makes it really easy to fetch and create packages__
- d. ~~NPM is the package manager of node.js that has a strict version control so only well written packages are accepted~~

#### npm

* npm er _pakkastjóri_ (package manager) fyrir JavaScript
  - leyfir okkur líka að setja upp og nota allskonar tól sem byggð eru með JavaScript
* Sett upp með _[node.js](https://nodejs.org/)_

***

#### Pakkastjóri

* Pakkastjóri sér um að sjálfvirknivæða það að setja upp, stilla og fjarlægja hugbúnað
  - í staðinn fyrir að þurfa að sækja einhvern hugbúnað...
  - finna hvert við sóttum hann...
  - keyra eitthvað uppsetningarforrit...
  - síðan keyra forritið

***

* Keyrum í staðin eina skipun og höfum aðgang að forriti
* Vistar einnig _hvaða_ forrit verkefni notar svo aðrir geta sótt

***

#### NPM

* Hellingur til af NPM módúlum/pökkum sem geta einfaldað okkur lífið
* Sækjum með npm og tilgreinum þannig að forritið okkar þarfnist þessa pakka
  - Skilgreinum _dependency_ á pakkann
  - Vistað í `package.json` ásamt útgáfunúmeri

---

### 1.11 What does the following JavaScript function do? The functions *filter* (returns a list where items satisfy conditions), *sum* (returns the sum of a list ) are defined and *list* is an array of numbers.
```
function X(list)
{
  return sum(list.filter(function(i) { return i > 0; }));
}
```
- a. ~~Returns the sum of all the numbers in list~~
- b. __Returns the sum of all positive numbers in list__
- c. ~~Returns the average of all numbers in list~~
- d. ~~Returns the sum of all negatve numbers in list~~
---

### 1.12 Which of the following is correct URL?

- a. ~~http://example.org/&foo=bar&baz~~
- b. __http://example.org/?foo=bar&baz__
- c. ~~http://example.org:8000/#foo~~
- d. ~~b and c~~
---

### ~~1.13 Which of the following applies to frameworks?~~

- a. Collections of solutions to common and general tasks
- b. Libraries that protect us against attacks like XSS and SQL injections
- c. Collections of solutions to task that only aplly to web programming
- d. All of the above

---

### 1.14 What is the difference between `<head>` and `<body>`

- a. __In general we define the metadata for the page in `<head>` and content in `<body>`__
- b. ~~Metadata must only be in `<head>` but content in `<body>`~~
- c. ~~We only define connections to other files (e.g. CSS) in `<head>` and content in `<body>`~~
- d. ~~No difference between `<head>` and `<body>`~~

---

### .15 What is ARIA?

- a. __Standard from W3C that increases accessibility of web applications__
- b. ~~Standard from ISO that increases accessibility of web applications~~
- c. ~~Standard from W3C that increases functionality in new browsers~~
- d. ~~Standard from ISO that increases functionality in new browsers~~

---

### ~~1.16 If you are making a web for an international market in PHP, which of the following do you need to pay special attention to~~

- a.
- b.
- c.
- d.

---

### 1.17 ~~What is a web services?~~

- a. All the different services you can use on the internet, e.g. Google and Twitter
- b. Services that satisfy the requirements of REST
- c. Service designed to communicate between applications over a network
- d. Services that use XML or JSON for data transfer

---

### ~~1.18 What is SQLite?~~

- a.
- b.
- c.
- d.

---

### 1.19 Which of the following are advantages to caching in web applications?

- a. Can increase speed in applications by reducing the number of long calculations
- b. Increases the user experience since waiting is decreased
- c. Can increase speed in applications by reducing the calls to a database
- d. __All of the above__

---

### 1.20 What does it mean that HTTP is stateless?

- a. __A web server does not need to store any state between requests from user__
- b. ~~A web server must store all state between requests from users since the browser does not~~
- c. ~~A web browser can not store any state between requests from user~~
- d. ~~A web browser must store all state between requests from users since the web server does not~~

#### Stateless

* HTTP er hannað sem stöðulaus prótókoll
* Server þarf **ekki** að geyma neinar upplýsingar á milli beiðna
* Stöður geta þó verið geymdar á nokkra máta, förum ekki nánar í það

Fyrirlestur 11.1 – HTTP
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/11/11.1.http.md

##3. Ritgerðarspurningar / Essay questions, 30%

Þriðji hluti inniheldur fjórar spurningar en aðeins þarf að svara þrem sem hver um sig gildir 10%. Ef öllum spurningum er svarað gilda þrjú bestu svörin.

Vandið uppbyggingu og frágang. Stutt og hnitmiðuð svör.

The third part has four questions but you only need to answer three which each gives 10%. If you answer all the questions, the three best answers count.

Clear structure and delivery. Short and concise answers.

**3.1 (10%) Hvað er skalanleg vefhönnun (responsive web design)? Hvað þarf að gera, hvernig forritum við þannig vefi og hvernig er það ólíkt "venjulegri" vefhönnun?
Hvaða kosti og galla hefur það í för með sér?**

**What is responsive web design? What do we need to do, how do we program them and how is it different from "traditional" web design?
What are the pros and cons?**

Skalanleg vefhönnun er þegar vefhönnun er gerð með þeim forsendum að hægt sé að birta vefsíðuna í öllum eða nær öllum mismunandi skjástærðum. Til þess að vefurinn birtist rétt og að efni sé skýrt og lesanlegt í mismunandi skjástærðum, þurfum við að notast við hlutfallslegar stærðir á grind, boxum og leturstærð. Þegar við forritum vef samkvæmt skalanlegri vefhönnun, getum við notast við progressive enhancement, þar sem við byrjum að því að útbúa vefsíðuna fyrir minnstu mögulegu skjástærð. Við notumst síðan við media queries til að uppbygging vefsíðunnar breytist eins og við viljum eftir því sem skjástærðin stækkar. Þetta er ólíkt "hefðbundinni" vefsíðugerð, því í "hefðbundinni" vefsíðugerð er síðan hönnuð með ákveðinni skjástærð í huga.

---

**3.2 (10%) Hvað er merkingarfræði, í tengslum við HTML, og afhverju er hún mikilvæg?**

**What is semantics in relation to HTML, and why is important?**

Merkingarfræði er það að hver hlutur hafi einhverjar merkingu (eða allavega hver mikilvægur hlutur). Í tenglsum við HTML er það að notast við merkingarfræðilega rétt tags á elementum. T.d. að notast við `<p>` þegar átt er við paragraph, `<nav>` þegar átt er við navigation o.s.frv. Þetta er í raun það sama og að halda sér frá því að nota hluti sem hafa ekki merkingu eoms pg `<div>` og `<span>`, þó að það sé í lagi að notast við þau element þar sem það er reasonable. Það er t.d. mikilvægt að notast við merkingarfræði til þess að gera HTML læsilegt, einnig eru ákveðin "attribute" sem eiga við ákveðin "element" og til að nýta okkur HTML til fulls, er það í okkar hag að notast við merkingarfræðilega rétt HTML.


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

---

**~~3.3 (10%) Hvað eru *injection* árásir, hvernig virka þær (með dæmi) og hvernig getum við verndað okkur gegn þeim?~~**

---

**~~3.4 (10%) Þú ert beðin um að setja upp vef sem geyma þarf upplýsingar sem hægt er að vinna með á aðgangsstýrðu svæði og birta síðan öllum.
Hvernig myndir þú haga útfærslu á framenda og bakenda?
Leitast er eftir almennri lýsingu sem sýnir heildar skilning á efni.~~**


