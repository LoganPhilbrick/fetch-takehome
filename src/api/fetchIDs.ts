export const fetchIDs = async (pageLink: string) => {
  try {
    const response = await fetch(`https://frontend-take-home-service.fetch.com${pageLink}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the server
      throw new Error(`Failed to fetch IDs: ${response.status} ${response.statusText} - ${errorText}`);
    }

    const searchData = await response.json();

    return searchData;
  } catch (error) {
    console.error("Fetch error:", error);
    throw error; // Rethrow so calling code can handle it
  }
};
