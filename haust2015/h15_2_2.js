document.addEventListener('DOMContentLoaded', function() {

  var buttons = document.querySelectorAll('button');
  console.log(buttons);
  console.log(buttons.length);

  if (!(buttons.length>0)) {
    console.log('if statement');
    return;
  }
  console.log('if statement not triggered');

  for (var i=0; i<buttons.length; i++) {
    buttons[i].addEventListener('click', buttonHandler);
  }
})

function buttonHandler() {
  console.log('buttonHandler');
  bodyEl = document.querySelector('body');
  imgEl = document.createElement('img');
  imgEl.src = './foo.jpg';
  bodyEl.append(imgEl);

}

// A = document;

// B = "";

// C = querySelectorAll;

// D = 'button';

// E = buttons;

// F = for;

// G = buttons;

// H = addEventListener;

// I = 'click';

// J = buttonHandler
