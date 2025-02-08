type UserCredentials = { name: string; email: string };

export const login = async (UserCredentials: UserCredentials) => {
  fetch("https://frontend-take-home-service.fetch.com/auth/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: UserCredentials.name,
      email: UserCredentials.email,
    }),
    credentials: "include",
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }
      return response.text();
    })
    .then((text) => {
      console.log(text);
    })
    .catch((error) => console.error("Error getting auth:", error));
};
