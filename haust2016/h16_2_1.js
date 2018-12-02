/*
Finna má ýmislegt að eftirfarandi JavaScript kóða í ES2015,
nefndu a.m.k. fimm atriði og útskýrðu hvað mætti betur fara:

There is a piethora of errors in the following JavaScript code in
ES2015, name at least five of them and describe why and how to fix them
*/

function butt() {
  const buttons = document.querySelectorAll('button');
  let button = new Array(buttons.length)
  for(var foo = 0; foo < buttons.length; foo++) {
    button[foo] = buttons[foo];
    let temp = button[foo];
    console.log(foo);
    temp.addEventListener('change', (e) => {
    temp.setAttribute('class', 'data-clicked');
    });
  }
}


document.addEventListener('DOMContentLoaded', () => {
  console.log('DOMContentLoaded');
  butt()
});
