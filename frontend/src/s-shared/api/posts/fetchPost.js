export const fetchPost = async (slug) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return await res.json();
};