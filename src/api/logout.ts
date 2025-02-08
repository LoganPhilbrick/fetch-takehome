export const logout = () => {
  fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    credentials: "include",
  });
};
