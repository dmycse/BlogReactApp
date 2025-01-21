export const deletePost = async (token, postId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/${postId}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });

  return await res.json();
};