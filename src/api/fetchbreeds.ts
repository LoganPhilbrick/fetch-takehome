export async function fetchBreeds() {
  const response = await fetch("https://frontend-take-home-service.fetch.com/dogs/breeds", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }
  return response.json();
}
