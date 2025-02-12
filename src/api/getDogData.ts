export async function getDogData(arr: string[]) {
  const response = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(arr),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to fetch: ${response.status}`);
  }

  return response.json(); //returns array of Dog objects
}
