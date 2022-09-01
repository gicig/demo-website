let fetchItems = function(items) {
    for (let item of items) {
        fetch('/' + item)
        .then((response) => console.log(response.text()));
    }
}

fetch('/list.json')
  .then((response) => fetchItems(response.json()));
