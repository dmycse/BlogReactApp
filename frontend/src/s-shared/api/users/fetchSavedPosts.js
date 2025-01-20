export const fetchSavedPosts = async (token) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/saved`, {
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};