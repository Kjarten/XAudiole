function loadData() {
  console.log('function: loadData');
  function stringifyData(x) {
    console.log('function: parseData');
    var jsonData=JSON.stringify(x);
    console.log(jsonData);
  }
  function parseData() {
    console.log('function: parseData');
    var jsonData=JSON.parse(request.data);
    console.log(jsonData);
  }

  /*fetch('https://apis.is/isnic?domain=ruv.is')
  .then((response) => {
    if (response.ok) {
      return response.json();
    }
  })
  .then((data) => {
    stringifyData(data.results);
  })*/

  var request = new XMLHttpRequest();
  request.open('GET', 'https://apis.is/isnic?domain=ruv.is', true);
  console.log(request.response);
  request.load
  request.load = parseData(request.data);
}

document.addEventListener('DOMContentLoaded', function () {
  console.log('DOMContentLoaded');
  var delayInMs = 2000;
  window.setTimeout(loadData, delayInMs);
});
