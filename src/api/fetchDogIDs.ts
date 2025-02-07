export const fetchDogIDs = async (setDogs: React.Dispatch<React.SetStateAction<string[]>>) => {
  try {
    const response = await fetch("https://frontend-take-home-service.fetch.com/dogs/search", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch dogs");
    }

    const data = await response.json();
    const resultIds = data.resultIds; // Assuming the response has resultIds

    if (Array.isArray(resultIds)) {
      setDogs(resultIds); // Update state in the parent component
    } else {
      console.error("Expected resultIds to be an array");
    }
  } catch (error) {
    console.error("Error fetching dogs:", error);
  }
};
