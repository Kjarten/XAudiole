function submit(e) {
  e.preventDefault();

  var input = document.A('input');
  var results = document.A('.results');

  if (B.length > 10) {
    var p = document.createElement('p');
    p.appendChild(document.createTextNode(input.value));
    results.C(p);
  }
}

D.addEventListener('DOMContentLoaded', function () {
  var form = D.querySelector('form');

  form.addEventListener('submit, submit');
});

A.

B.

C.

D.
