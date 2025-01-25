export async function getBooks() {

  const url = "https://controltarea.azurewebsites.net/api/Books";

  const response = await fetch(url)
    .then((resp) => resp.json())

  return response;
}

export async function getBooksId(_id) {

  const url = `https://controltarea.azurewebsites.net/api/Books/${_id}`;

  const response = await fetch(url)
    .then((response) => response.json())

  return response;
}

export async function postBook(_nombre, _nombreAutor, _edicion, _precio) {

  const url = "https://controltarea.azurewebsites.net/api/Books/";

  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Accept': 'application/json',
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

export async function putBook(_bookId, _nombre, _nombreAutor, _edicion, _precio) {

  const url = `https://controltarea.azurewebsites.net/api/Books/${_bookId}`;

  const response = await fetch(url, {
    method: 'PUT',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      bookId: _bookId,
      nombre: _nombre,
      nombreAutor: _nombreAutor,
      edicion: _edicion,
      precio: _precio,
    }),
  });

  return response;
}

export async function deleteBook(_bookId) {

  const url = `https://controltarea.azurewebsites.net/api/Books/${_bookId}`;

  const response = await fetch(url, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
    },
  });

  return response;
}