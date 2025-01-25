export async function getBooks() {

  const url = "https://controltarea.azurewebsites.net/api/Books";

  const response = fetch(url)
    .then((resp) => resp.json())

  return response;
}

export async function getBooksId(_id) {

  const url = `https://controltarea.azurewebsites.net/api/Books/${_id}`;

  const response = fetch(url)
    .then((response) => response.json())

  return response;
}

export async function postBook(_nombre, _nombreAutor, _edicion, _precio) {

  const url = "https://controltarea.azurewebsites.net/api/Books";

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bookId: 0,
      nombre: _nombre,
      nombreAutor: _nombreAutor,
      edicion: _edicion,
      precio: _precio,
    }),
  });

  return response;
}

//https://controltarea.azurewebsites.net/api/Books/105


/*
const getDetails = (id) => {
   return api.Get(`/api/details/${id}`);
}

*/


//.then((resp) => resp.json());
//alert(JSON.stringify(response))
//status = 201
// ok  = true