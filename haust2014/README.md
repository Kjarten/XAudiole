# Haust 2014

**1.1 Hvað er CSS *shorthand*?**

- a. Virkni sem CSS *preprocessorar* gefa okkur aðgang að, til að skrifa styttra og skipulagðara CSS
- b. Skilgreining í einni yfirlýsingu fyrir mörg gildi með svipaða virkni
- c. Það þegar allar CSS yfirlýsingar eru skrifaðar í einni línu fyrir hverja reglu
- d. Ný CSS3 virkni sem skilgreinir styttri leiðir til að skrifa CSS


**1.2 Hvað eru callbacks og promises?**

- a. Aðferðir til að vinna með *ósamstilltan* (asynchronous) kóða
- b. Aðferir til að vinna með *ekki-blokkandi* (non-blocking) I/O
- c. Aðferðir til að vinna með *strauma* (streams)
- d. Aðferðir til að vinna með *atburði* (events)


**1.3 Hvað af eftirfarandi á við þetta HTML:**
```
<p class="intro">Hello world!</p>
```
- a. *p* er *tag* með *class* *attribute*
- b. *p* er *element* með *class* *tag*
- c. Byrjunar og enda *element* er *p*, *class* er *attribute* og öll heildin er *p* *tag*
- d. Byrjunar og enda *tag* er *p*, *class* er *attribute* og öll heildin er *p* *element*
```
<p>foo bar</p> is an element, not a tag. An element consists of a start tag, content, and an end tag. In case of <p>foo bar</p>, <p> is a start tag, foo bar is content, and </p> is an end tag.

http://perfectionkills.com/tag-is-not-an-element-or-is-it/
```
  
**1.4 Hvað skrifast út þegar þessi JavaScript kóði er keyrður?**
```
function multiplier(x) {
  return function (y) { return x * y; }
}

var y = 10;
var m = multiplier(2);

console.log(y + m(5));
```

- a. 20
- b. 60
- c. 25
- d. 52

 
 **1.5 Hvað af eftirarandi á við SQLite**
 
- a. Lítill gagnagrunnur sem útfærir aðeins lítinn hluta af SQL staðlinum, með takmarkaðar týpur og er ekki RDBMS (Relational Database Management System)
- b. Lítill gagnagrunnur sem útfærir mesta allan af SQL staðlinum, með dýnamískar týpur og er ekki RDBMS
- c. Lítill gagnagrunnur sem útfærir aðeins hluta af SQL staðlinum, með takmarkaðar týpur og er RDBMS
- d. Lítill gagnagrunnur sem útfærir mest allan hluta af SQL staðinum, með dýnamískar týpur og er RDBMS
 
 **1.6 Hvað er WCAG?**

- a. Listi af tilmælum til að gera vefi aðgengilegri, skilgreindur af W3C
- b. Listi af tilmælum til að gera vefi öruggari, skilgreindur af W3C
- c. Listi af tilmælum til að gera vefi aðgengilegri, skilgreindur af ECMA
- d. Listi af tilmælum til að gera vefi öruggari, skilgreindur af ECMA
 
 
**1.7 Þegar við útfærum skalanlega vefi (responsive web design) þá þurfum við að:**
 
- a. Skilgreina grind með föstum stærðum og nota media-queries
- b. Skilgreina grind með hlutfallslegum stærðum og nota media-queries
- c. Skilgreina box með föstum stærðum, nota JavaScript og media-queries
- d. Skilgreina box með hlutfallslegum stærðum, nota JavaScript og media-queries
 
 
**1.8 Þegar við biðjum um eigindi á hlut í JavaScript kemur prótótýpukeðjan til sögunnar, nánar tiltekið þá**
 
- a. Ef eigindi er á hlut er því skilað, ef ekki er leitað upp prótótýpu keðjuna og leitað þar, ef ekkert finnst er `undefined` skilað
- b. Ef eigindi er á hlut efst í prótótýpu keðjunni er því skilað, annars er leitað niður keðjuna þar til komið er að hlutnum sjálfum, ef ekkert finnst er `undefined` skilað
- c. Ef eigindi er á hlut er því skilað annars er `undefined` skilað
- d. Ef eigindi er á hlut efst í prótótýpu keðjunni er því skilað annars er `undefined` skilað
 
 
**1.9 Með CSRF, Cross-Site Request Forgery, geta óprúttnir aðilar látið notanda framkvæma aðgerðir á öðrum vefjum, óafvitandi, með því að:**
 
- a. nýta XSS holur
- b. nýta injection árásir
- c. útbúa faldar HTTP beiðnir
- d. nýta þekktar villur í hugbúnaði
 
 
**1.10 Kökur eða *cookies* eru notaðar til að**

- a. Geyma stöðu í HTTP
- b. Geyma gögn á forminu nafn og gildi
- c. Fylgjast með notanda
- d. Allt að ofan


**1.11 HATEOAS eða Hypermeda as the engine of application state er takmörkun í REST, hún snýst um að**

- a. Client fær allar upplýsingar frá vefþjónustu í byrjun og notar tengla til að breyta stöðum
- b. Client þarf engar frekari upplýsingar en þær sem hann fær í byrjun og notar tengla til að breyta stöðum og fá frekari upplýsingar
- c. Client fær allar upplýsingar frá vefþjónustu í byrjun
- d. Client þarf engar frekari upplýsingar en þær sem hann fær í byrjun


**1.12 Sniðmát eða *templating* er eitthvað sem mörg framework bjóða upp, hver er hugsunin með þeim?**

- a. Sjá um að útbúa útlit óháð virkni
- b. Sjá um að útbúa góðar og skýrar slóðir, *URL*
- c. Sjá um að setja upp stuðning við þýðingar
- d. Sjá um að gera vinnu með gagnagrunaa einfaldari


**1.13 JSON stendur fyrir JavaScript Object Notation en það er munur á JSON og JavaScript hlutum, þar er helst að nefna:**
`main > selection h2.important`

- a. Lykar í JSON verða að vera strengir
- b. Lyklar í JSON mega vera úr lista frátekinna orða
- c. Gildi í JSON mega ekki vera föll
- d. Allt að ofan


**1.14 Hvað er skrifað út ef við keyrum þennan PHP kóða?**
```
$a = array("foo" => "10");

$a[] = 10;

var_dump($a["foo"] + $a[0]);
```

- a. `int` 20
- b. `string` "1010"
- c. `string` "202
- d. Villa, ekkert skrifast út


**1.15 Ef við framkvæmum aðgerð í HTTP og stöðukóðinn sem kemur til baka er með tölugildið 500 eða hærra, gefur það til kynna að:**

- a. Aðgerð tókst, kóði gefur til kynna hvernig það nákvæmlega tókst
- b. Aðgerð var beint eitthvað annað, *redirect*
- c. Aðgerð tókst ekki og villuna má finna hjá okkur, í client
- d. Aðgerð tókst ekki og villuna má finna hjá vefþjón, á server
