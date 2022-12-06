fetch('../../products.json')
  .then((response) => response.json())
  .then((data) => console.log(data.products));
