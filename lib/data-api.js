export async function getBooks() {
  const json = await rawData.json();

  const response = fetch(uri, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  });
  const data = response.json();

  return data;
}
