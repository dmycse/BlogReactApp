
export const fetchPosts = async (pageParam) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  return await res.json();
};

export const fetchInfinityPosts = async (pageParam) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?page=${pageParam}`);
  return await res.json();
};
