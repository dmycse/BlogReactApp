export const createComment = async (comment, token, postId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/comments/${postId}`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(comment),
  });
  
  return await res.json();
};