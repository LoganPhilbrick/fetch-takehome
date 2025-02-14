export async function getDogIDs(pageLink: string, selectedBreed: string, sort: string) {
  const baseUrl = `https://frontend-take-home-service.fetch.com${pageLink}`.split("&breeds")[0];

  const params = new URLSearchParams();
  if (selectedBreed) params.set("breeds", selectedBreed);
  if (sort) params.set("sort", sort);

  const separator = baseUrl.includes("?") ? "&" : "?";
  const url = params.toString() ? `${baseUrl}${separator}${params.toString()}` : baseUrl;

  try {
    const response = await fetch(`${url}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch: ${response.status}`);
    }

    return await response.json(); //returns array of Ids
  } catch (error) {
    console.error("Failed to fetch IDs:", error);
    return [];
  }
}
