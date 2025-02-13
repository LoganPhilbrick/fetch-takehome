export async function getMatch(ids: string[]) {
  const response = await fetch("https://frontend-take-home-service.fetch.com/dogs/match", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(ids),
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error(`Failed to match: ${response.status}`);
  }

  const matchId = await response.json(); //returns object with value "match"

  return matchId.match; //returns ID string
}
