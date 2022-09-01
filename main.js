let fetchItems = function(items) {
    for (let item of items) {
        fetch('/' + item, {headers: {}})
        .then((response) => console.log(response.text()));
    }
}

fetch('/list.json')
  .then((response) => response.json().then((data) => fetchItems(data)));
