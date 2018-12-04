function submit(e) {
  e.preventDefault();
  console.log('Function: submit');
  console.log(e);

  var input = document.querySelector('input');
  var results = document.querySelector('.results');

  console.log(input);
  console.log(input.value);
  console.log(input.length);

  if (input.value.length > 10) {
    console.log('if statement')
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(input.value));
    results.appendChild(p);
  }
}

document.addEventListener('DOMContentLoaded', function () {
  var form = document.querySelector('form');

  form.addEventListener('submit', submit);
});
