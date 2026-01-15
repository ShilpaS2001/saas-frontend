export const login = (email) => {
  if (typeof window !== "undefined") {
    localStorage.setItem("token", "fake-auth-token-123");
    localStorage.setItem("user", JSON.stringify({ email, loginDate: new Date().toISOString() }));
  }
};

export const logout = () => {
  if (typeof window !== "undefined") {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    // Optional: Force a refresh to clear state across the app
    window.location.href = "/login";
  }
};

export const isAuthenticated = () => {
  if (typeof window === "undefined") return false;
  return !!localStorage.getItem("token");
};

export const getUser = () => {
  if (typeof window === "undefined") return null;
  const user = localStorage.getItem("user");
  try {
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error("Error parsing user from localStorage", error);
    return null;
  }
};