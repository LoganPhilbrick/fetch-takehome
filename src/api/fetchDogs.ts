export const fetchDogs = async (ids: string[]) => {
  try {
    const response = await fetch("https://frontend-take-home-service.fetch.com/dogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(ids),
      credentials: "include",
    });

    if (!response.ok) {
      const errorText = await response.text(); // Get error details from the server
      throw new Error(`Failed to fetch IDs: ${response.status} ${response.statusText} - ${errorText}`);
    }

    return await response.json();
  } catch (error) {
    console.error("Error getting dogs:", error);
    throw error;
  }
};
