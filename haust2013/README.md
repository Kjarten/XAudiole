# Haust 2013

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
