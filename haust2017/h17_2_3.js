function loadData() {
  function parseData() {
    var jsonData=JSON.parse();
    displayData(jsonData);
  }

  var request = new XMLHttpRequest();
  request.open('GET', 'https://example.org/data.json', true);
  request.onload = parseData;
}

document.addEventListener('DOMContentLoaded', function () {
  var delayInMs = 2000;
  window.setTimeout(loadData, delayInMs);
});
