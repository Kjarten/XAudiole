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

**~~1.13 Which of the following applies to frameworks?~~**

- a. Collections of solutions to common and general tasks
- b. Libraries that protect us against attacks like XSS and SQL injections
- c. Collections of solutions to tasks that only apply to web programming
- d. All of the above
---

**~~1.14 REST puts some constraints on the architecture of web services, which of the following is *not* one of them?~~**

- a.
- b.
- c.
- d.
---

**~~1.15 Which of the following is the biggest benifit of MVC?~~**

- a.
- b.
- c.
- d.
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

**1.17 What can you read from the following HTTP example (intentionally shortened)**
```
Get /foo HTTP/1.1
Host: example.org
If-Modified-Since: Sun, 01 Dec 2013 23:00:00 GMT

HTTP/1.1 301 Moved Permanently
Date: Mon, 02 Dec 2013 00:01:00 GMT
Location: http://example.org/bar

```
- a. The request is for the rootpage of example.org that was last modified on the 1st of december 2013 at 23:00. The web server responded with it was moved to example.org/bar
- b. The request if for example.org/foo. The web server responded with it was moved to example.org/bar and that in future it should only be accessed there
- c. The request if for example.org/foo that was last modified on the 1st of december 2013 at 23:00. The web server responded with it was moved to example.org/bar and that in the future it should only be accessed there
- d. The resuest is for the rootpage of example.org that was last accessed on the 1st of december 2013 at 23:00. The web server responded with it was moved to example.org/bar and that in the future it should only be accessed there
---

**1.18 Which of the following should you consider when search engine optimizing (SEO)**

- a. ~~Discuss many keywords at once~~
- b. ~~Hide links with keywords on the page~~
- c. __Write good content__
- d. ~~All of the above~~
---

**1.19 Whivh of the following best describes the semantics of the following (summary) of the body of a page?**
```
<body>
    <h1>...</h1>
    <nav>...</nav>
    <aside>
        <ul>
              <li>...</li>
        </ul>
    </aside>
    <article>
        <h1>...</h1>
        <section>...</section>
        <section>...</section>
    </article>
</body>
```
- a. The page has a heading, navigation, an article in two chapters and some exceprt with an unordered list of content
- b. ~~The page has a heading, an article in two chapters and some excerpt with a list of content~~
- c. ~~The page has a heading, navigation, an article in two chapters and some excerpt with an ordered list of content~~
- d. ~~The page has a heading, an article in two chapters and some excerpt with an unordered list of content~~
---

**1.20 What is the difference between frontend and backend?**

- a. Backend is where all the programming happens in a web application, frontend is only the UI
- b. Frontend is the UI the user sees, implemented with HTML and CSS. Backend is all functionality the users uses, e.g. JavaScript and PHP
- c. ~~There is no difference between frontend and backend~~
- d. Backend resides on the web server and programs written there (e.g. in PHP) potentially read some data (e.g. from a database) and generate HTML, CSS or JavaScript that is sent to the frontend where the browser interprets it and the user interacts with it

---

## 3. Ritgerðarspurningar/ Essay questions, 30%

Þriðji hluti inniheldur fjórar spurningar en aðeins þarf að svara þrem sem hver um sig gildir 10%. Ef öllum spurningum er svarað gilda þrjú bestu svörin.

Vandið uppbyggingur og frágang. Stutt og hnitmiðuð svör.

The third part has four questions but you only need to answer three which each gives 10%. If you answer all the questions, the three best answers count.

Clear structure and delivery. Short and concise answer.

**3.1 (10%) Hvað er stigvaxandi aukning (progressive enhancement) og hvernig tengist hún aðskilnaði á HTML, CSS og JavaScript?**

**What is progressive enchancement and how does it relate to the seperation of HTML, CSS and JavaScript**

Stigvaxandi aukning er þegar við einbeitum okkur að upplifun sem krefst minnstu mögulegri tækni og bætum hana í lögum, *progressively*. Á hverju af þessum lögum nær notandi að upplifa efnið okkar.

Stigvaxandi aukning tengist aðskilnaði á HTML, CSS og JavaScript á eftirfarandi hátt:

* Skrifum skýrt og áhugavert efni
* Setjum upp aðgengilegt og merkingarfræðilegt HTML
* Setjum upp útlit með CSS sem er vel stutt
* Setjum upp flóknara útlit með CSS sem er e.t.v. minna stutt
* Bætum við aukinni virkni með JavaScript

Með því að aðskilja efni, frá útliti og frá aukinni virkni, er líklegra að vefsíðan okkar er aðgengilegri stærri hóp, sama hvort um sé að ræða einstakling í gömlum browser á lélegri tengingu og reikniheftur eða einstakling með nýjustu uppfærslu af Chrome, á ljósleiðara sem deilir vefsíðu útreikningum á 3 GPU í sinni daglegu internet notkun.

---

**3.2 (10%) Afhverju ættum við að útbúa vefi sem eru aðgengilegir sem flestum og fylgja stöðlum?**

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

---

**~~3.3 (10%) Hvað er XSS (cross-site scripting), hvernig virkar það og hvernig getum við verndað okkur gegn því?~~**

**~~What is XSS (cross-site scripting), how does it work and how can we protect against it?~~**

---

**~~3.4 (10%) Gunna frænka fékk frábæra hugmynd að nýjum vef og frétti að þú hefðir nýlega klárað áfanga í vefforritun og hefði nægan lausan tíma í jólafríi. Vefurinn á að sækja nýjustu jólafréttir í gegnum vefþjónustu frá "Jól allt árið" - stærstu fréttaveitu um jólin. Notendur vefsins eiga síðan að geta bætt við athugasemdum við fréttirnar og gefið þeim stig.
Hvernig myndir þú haga útfærslu miðað við lýsingu að ofan, bæði fyrir framenda og bakenda? Lýstu stuttlega og ekki fara í smáatriði~~**

