export const fetchDogIDs = async () => {
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
  const resultIds = data.resultIds;
  return resultIds;
};
