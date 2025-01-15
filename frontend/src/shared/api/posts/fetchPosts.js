
export const fetchPosts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  return await res.json();
};
