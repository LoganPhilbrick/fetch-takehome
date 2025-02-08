export const logout = () => {
  try {
    fetch("https://frontend-take-home-service.fetch.com/auth/logout", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      credentials: "include",
    });
  } catch (error) {
    console.error("Logout failed:", error);
  }
};
