
export const fetchPosts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  return await res.json();
};

let postLimit = 4;

export const fetchInfinityPosts = async (pageParam) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?page=${pageParam}&limit=${postLimit}`);
  return await res.json();
};
