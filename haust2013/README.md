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
- b. HTTP, HTML and DNS
- c. SSL, HTTP, FTP and DNS
- d. ~~HTML, CSS, JavaScript and TCP/IP~~
---

**1.4 Hvað skrifast út þegar þessi JavaScript kóði er keyrður?**
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

**1.12 Hvað er URI (Uniform Resource Identifier)?**

- __a. Strengur sem skilgreinir auðlind með sérkenni, staðsetur hana eða bæði__
- b. ~~Strengur sem skilgreinir auðlind með sérkenni en staðsetur hana ekki~~
- c. ~~Strengur sem staðsetur auðlind en skilgreinir hana ekki með sérkenni~~
- d. ~~Strengur sem skilgreinir auðlind með sérkenni *eða* staðsetur hana~~

https://raw.githubusercontent.com/vefforritun/vef1-2018/master/fyrirlestrar/11/11.1.http.md

* Skilgreint í [RFC 3986](https://www.ietf.org/rfc/rfc3986.txt)
* Uniform Resource Identifier – strengur sem skilgreinir auðlind
  - Með nafni, staðsetningu eða bæði
  - _Auðlind_ er einhver eining sem við viljum nálgast, t.d. HTML skjal, mynd
---
