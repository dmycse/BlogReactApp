export const fetchSavePost = async (token, postId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/users/save`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({ postId }),
  });

  return await res.json();
};