export const fetchNewestPosts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?featured=true&limit=4&sort=newest`);
  return await res.json();
};