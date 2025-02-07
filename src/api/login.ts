export const login = async (setAuthenticated: React.Dispatch<React.SetStateAction<boolean>>) => {
  fetch("https://frontend-take-home-service.fetch.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: "John Doe",
      email: "john.doe@example.com",
    }),
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to authenticate");
      } else {
        setAuthenticated(true);
      }
      return response.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((error) => console.error("Error getting auth:", error));
};
