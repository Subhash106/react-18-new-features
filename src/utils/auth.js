export const getAuthToken = () => {
  const token = localStorage.getItem("token");

  return token;
};

export const getExpirationDuration = () => {
  const expirationDate = new Date(localStorage.getItem("expirationDate"));

  const diff = expirationDate.getTime() - Date.now();
  if (diff > 0) return diff;

  return "EXPIRED";
};

export const logout = () => {
  localStorage.removeItem("token");
  localStorage.removeItem("expirationDate");
  window.location.href = "/";
};
