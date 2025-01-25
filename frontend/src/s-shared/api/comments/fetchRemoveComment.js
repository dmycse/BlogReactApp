export const fetchRemoveComment = async (token, commentId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/comments/${commentId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    }
  });
  return await res.json();
};