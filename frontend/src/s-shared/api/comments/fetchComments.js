export const fetchComments = async (postId) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/comments/${postId}`);
  return await res.json();
};