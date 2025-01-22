export async function getBooks() {

  const url = "https://controltarea.azurewebsites.net/api/Books";

  const response = fetch(url)
      .then((resp) => resp.json())

  return response;
}

