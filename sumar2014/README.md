# Sumar 2014

**1.1 Which of the following is *not* among the roles of the W3C?**

- a. ~~Standardize HTML~~
- b. ~~Standardize CSS~~
- c. __Standardize JavaScript__
- d. ~~a. and b.~~

Staðlað hjá ECMA, sem ECMAScript árið 1997
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/08/08.1.javascript.md

---

**1.2 In general, in HTTP, if you fetch a webpage with GET you can expect that...**

- a. A new record or entity is created
- b. It is safe to fetch the same webpage again without problems
- c. It is not safe to fetch the same webpage again without problems
- d. a. and b.

---

**1.3 HTML5 is the natural progression of the web, but what does the concept encompass**

- a. __Changes in HTML from HTML 4.01 and XHTML__
- b. ~~Changes in HTML, extensions to CSS and new JavaScript APIs~~
- c. ~~Changes in HTML, extensions to CSS and changed syntax in JavaScript~~
- d. ~~Changes in HTML from HTML 4.01 and XHTML with extensions to CSS~~

---

**1.4 ~~What is OWASP~~**

- a. ~~Accessibility standard published by W3C~~
- b. ~~Open organization that lobbies for better support of standards in browsers~~
- c. ~~New JavaScript API that can increase the security of web apps~~
- d. __Open organization that focuses on improving the security of software__
---
 
 **1.5 What did Tim Berners-Lee use as the basis of the world wide web along side TCP and DNS**
 
- a. ~~The concept of HyperText~~
- b. __HTML__
- c. ~~SSL~~
- d. ~~HTML, CSS and JavaScript~~

Í kringum 1990 var Sir Tim Berners-Lee að vinna hjá CERN sem eðlisfræðingur. Hann skrifaði minnisblað um kerfi sem hann sá fyrir sér að myndi auka möguleika á samvinnu með því að deila skjölum á einfaldan hátt. Í framhaldinu skilgreindi hann HTML, t.d. í skjalinu „HTML Tags“ og skrifaði fyrsta vafrann og vefþjóninn sem túlkuðu og birtu HTML (skrifaður í Objective-C á NeXT tölvu).

 ---
 
 **1.6 ~~REST puts some constraints on the architecture of web services, which of the following is one of them?~~**

- a. 
- b. 
- c. 
- d. 

---
 
**1.7 What is the result of running the following JavaScript code?**
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

**1.8 Which of the following needs to be considered for accessibility**
 
- a. Describe images with *alt* text
- b. Define language for content
- c. Write descriptive text for links
- d. __All of the above__

1.20.3 Að smíða vef með aðgengi í huga
https://github.com/vefforritun/book/blob/master/chapters/01.html.md

---

**1.9 What is the difference between frontend and backend?**
 
- a. __Backend resides on the web server and programs written there generate HTML, CSS or JavaScript that is sent to the frontend where the browser interprets it and the user interacts with it__
- b. ~~Frontend is the UI the user sees, implemented with HTML and CSS. Backend is all the code, e.g. JavaScript and PHP~~
- c. ~~Backend is where all the programming happens in a web application, frontend is only the UI~~
- d. ~~There is no difference between frontend and backend~~

Framendi (e. front-end eða client-side) er einsog áður segir sá partur vefsins sem notendur sjá og eiga við. Í grunninn er framendi búinn til með HTML, CSS og Javascript. Til þess að einfalda og flýta fyrir smíðum á stærri og flóknari vefjum eru til margskonar framework eða libraries sem hjálpa. Dæmi um þetta sem eru vinsæl í dag eru React, Angular og Vue. Þó svo að þessi tól geti hjálpað okkur, þurfum við alltaf að vita hvað gerist í grunninn og því byrjum við á að læra HTML, CSS og Javascript án nokkura hjálpartækja.

Bakendi (e. back-end eða server-side) er sá partur vefsins sem er sendur yfir HTTP til framenda. Bakendinn samanstendur yfirleitt af vefþjón, forriti sem útbýr framenda og einhverri gagnageymslu (t.d. gagnagrunnur). Vefþjónar geta stutt margskonar forritunarmál (t.d. C# eða Python) og forritunarumhverfi (t.d. .NET eða Django).

0.2.6 Framendi og Bakendi
https://github.com/vefforritun/book/blob/master/chapters/00.inngangur.md


---
 
**What is NPM and what effect does it have on node.js**

- a. ~~NPM is a framework for node.js that makes it easy to write web applications~~
- b. ~~NPM is a framework for node.js that assists in manual tasks~~
- c. __NPM is the package manager of node.js that makes it really easy to fetch and create packages__
- d. ~~NPM is the package manager of node.js that has a strict version control so only well written packages are accepted~~

## npm

* npm er _pakkastjóri_ (package manager) fyrir JavaScript
  - leyfir okkur líka að setja upp og nota allskonar tól sem byggð eru með JavaScript
* Sett upp með _[node.js](https://nodejs.org/)_

***

## Pakkastjóri

* Pakkastjóri sér um að sjálfvirknivæða það að setja upp, stilla og fjarlægja hugbúnað
  - í staðinn fyrir að þurfa að sækja einhvern hugbúnað...
  - finna hvert við sóttum hann...
  - keyra eitthvað uppsetningarforrit...
  - síðan keyra forritið

***

* Keyrum í staðin eina skipun og höfum aðgang að forriti
* Vistar einnig _hvaða_ forrit verkefni notar svo aðrir geta sótt

***

## NPM

* Hellingur til af NPM módúlum/pökkum sem geta einfaldað okkur lífið
* Sækjum með npm og tilgreinum þannig að forritið okkar þarfnist þessa pakka
  - Skilgreinum _dependency_ á pakkann
  - Vistað í `package.json` ásamt útgáfunúmeri

---

**1.11 What does the following JavaScript function do? The functions *filter* (returns a list where items satisfy conditions), *sum* (returns the sum of a list ) are defined and *list* is an array of numbers.**
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

**Which of the following is correct URL?**

- a. http://example.org/&foo=bar&baz
- b. http://example.org/?foo=bar&baz
- c. http://example.org:8000/#foo
- d. b and c
---

**1.13 JSON stendur fyrir JavaScript Object Notation en það er munur á JSON og JavaScript hlutum, þar er helst að nefna:**

- a. Lykar í JSON verða að vera strengir
- b. Lyklar í JSON mega vera úr lista frátekinna orða
- c. Gildi í JSON mega ekki vera föll
- d. __Allt að ofan__
```
Munur á JSON og JS hlutum

* Lyklar verða að vera strengir, vegna frátekinna orða
* Strengir verða að vera skilgreindir með `"`, ekki `'`
* Takmarkanir á tölum, t.d. hex form ekki leyft (`0xea`)
* Búið að takmarka týpur, t.d. ekki `undefined` eða `RegExp`

Fyrirlestur 11.2
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/11/11.2.ajax.md
```
---

**~~1.14 Hvað er skrifað út ef við keyrum þennan PHP kóða?~~**
```
$a = array("foo" => "10");

$a[] = 10;

var_dump($a["foo"] + $a[0]);
```

- a. `int` 20
- b. `string` "1010"
- c. `string` "202
- d. Villa, ekkert skrifast út
---

**1.15 Ef við framkvæmum aðgerð í HTTP og stöðukóðinn sem kemur til baka er með tölugildið 500 eða hærra, gefur það til kynna að:**

- a. ~~Aðgerð tókst, kóði gefur til kynna hvernig það nákvæmlega tókst~~
- b. ~~Aðgerð var beint eitthvað annað, *redirect*~~
- c. ~~Aðgerð tókst ekki og villuna má finna hjá okkur, í client~~
- d. __Aðgerð tókst ekki og villuna má finna hjá vefþjón, á server__

Þegar þjónn svarar með response gefur hann upp stöðukóða, sem tölu og lesanlegan texta

* `1xx` – Til upplýsinga
* `2xx` – Gekk, success
* `3xx` – Áframsending, redirection
* `4xx` – Villa hjá client
* `5xx` – Villa hjá server

Fyrirlestur 11.1 – HTTP
https://github.com/vefforritun/vef1-2018/blob/master/fyrirlestrar/11/11.1.http.md
