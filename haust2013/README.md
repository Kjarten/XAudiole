# Haust 2013

**1.1 When we have system that accepts inputs from users, whom should we trust?**

- a. ~~Logged in users in our systems~~
- b. ~~All users~~
- c. ~~Only Óli~~
- d. __No one__
---

**1.2 Which of the following is among the roles of W3C**

- a. Standardize HTML
- b. Standardize CSS
- c. ~~Standardize JavaScript~~
- d. ~~Everything above~~
- e. __a. and b.__
---

**1.3 What did Time Berners-Lee use as the basis of the world wide web**

- a. TCP, DNS and the concept of HyperText
- b. ~~HTTP, HTML and DNS~~
- c. ~~SSL, HTTP, FTP and DNS~~
- d. ~~HTML, CSS, JavaScript and TCP/IP~~
---

**1.4 What is HTML5**

- a. __Only changes in HTML from HTML 4.01 and XHTML__
- b. ~~The natural progression of the web that inclues changes in HTML, extensions to CSS and changed syntax in JavaScript~~
- c. ~~Changes in HTML from HTML 3.01 and XHTML with extensions to CSS~~
- d. ~~The natural progression of the web that includes changes in HTML, extensions to CSS and new JavaScript APIs~~
---

**1.5 On what is responsive web design based, in order of importance?**

- a. __Flexible layout, flexible images and media and CSS3 media queries__
- b. ~~CSS3 media queries, flexible layout and, flexible images and media~~
- c. ~~Grid and CSS3 media queries~~
- d. ~~First designing for the smalles supported resolution and then more~~
---

**1.6 Which difference, if any, is there between HTML 4.01, XHTML and HTML5?**

- a. ~~HTML 4.01 and HTML5 are based on SGML but XHTML on XML~~
- b. ~~XHTML and HTML5 have much stricter rules about the structure of HTML but HTML4.01~~
- c. ~~No difference~~
- d. __HTML 4.01 is based on SGML, XHTML on XML but HTML5 on neither__
---

**1.7 What are polyfills?**

- a. ~~New functionality in CSS3 that offers the ability to draw filled polygons in a simple way~~
- b. ~~Concept that is about using JavaScript entirely to create CSS~~
- c. __Code that gives access to functionality that the browser does not yet support__
- d. ~~JavaScript API that gives access to drawing in 3D~~
---

**1.8 In general, in HTTP, if you send data with POST you can expect that...**

- a. A new record or entity is created
- b. It is safe to send the same data again without problems
- c. It is not safe to send the same data again without problems
- d. a. and b.
- e. a. and c.
---

**1.9 What is the result of running the following JavaScript code?**
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
- a. ~~Eftir 1 sekúndu verður gildið "9" skrifað í console~~
- b. ~~EFtir 10 sekúndur verður gildið "9" skrifað í console~~
- c. ~~Eftir 1 sekúndu verður gildið "45" skrifað í console~~
- d. __Eftir 10 sekúndur verður gildið "45" skrifað í console__
---

**~~1.10 What is wrong with the following PHP code?~~**

- a.
- b.
- c.
- d.
---

**1.11 What is NPM and what effect does it have on node.js**

- a. ~~NPM is a framework for node.js that makes it easy to write web applications~~
- b. ~~NPM is a framework for node.js that assists in manual tasks~~
- c. __NPM is the package manager of node.js that makes it really easy to fetch and create packages__
- d. ~~NPM is the package manager of node.js that has a strict version control so only well written packages are accepted~~
---

**1.12 Hvað er URI (Uniform Resource Identifier) / What is an URI?**

- a. __Strengur sem skilgreinir auðlind með sérkenni, staðsetur hana eða bæði__
- b. ~~Strengur sem skilgreinir auðlind með sérkenni en staðsetur hana ekki~~
- c. ~~Strengur sem staðsetur auðlind en skilgreinir hana ekki með sérkenni~~
- d. ~~Strengur sem skilgreinir auðlind með sérkenni *eða* staðsetur hana~~

https://raw.githubusercontent.com/vefforritun/vef1-2018/master/fyrirlestrar/11/11.1.http.md

* Skilgreint í [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)
* Uniform Resource Identifier – strengur sem skilgreinir auðlind
  - Með nafni, staðsetningu eða bæði
  - _Auðlind_ er einhver eining sem við viljum nálgast, t.d. HTML skjal, mynd
---

**1.16 Hvað gerir eftirfarandi JS fall? Föllin map (keyrir fall á öll gildi lista) og sum (skilar summu lista) eru skilgreind og _list_ er fylki af strengjum.**
```
function X(list)
{
return sum(map(list, function(i) { return i.length; })) / list.length;
}
```
- a. ~~Skilar heildarlengd allra strengja í list~~
- b. __Skilar meðaltalslengd allra strengja í list__
- c. ~~Skilar miðgildi lengdar strengja í list~~
- d. ~~Skilar summu allra hlutstrengja ílist sem eru lengri en list~~
---


