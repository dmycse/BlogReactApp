
export const fetchPosts = async (pageParam) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  return await res.json();
};

let postLimit = 3;

export const fetchInfinityPosts = async (pageParam) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts?page=${pageParam}&limit=${postLimit}`);
  return await res.json();
};
