/*
Finna má ýmislegt að eftirfarandi JavaScript kóða í ES2015,
nefndu a.m.k. fimm atriði og útskýrðu hvað mætti betur fara:

There is a piethora of errors in the following JavaScript code in
ES2015, name at least five of them and describe why and how to fix them
*/

document.addEventListener('DOMContentLoaded',function(){
  let buttons = document. querySelectorAll('button');

  for(var foo = 0; foo < buttons.length; foo++) {
    button = buttons[foo];
    button.addEventListener('onclick', (e) => {
      button.setAttribute('data-clicked', true);
    });
  }
});
