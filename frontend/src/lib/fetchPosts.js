
export const fetchPosts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  return await res.json();
};

export const fetchPost = async (slug) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/${slug}`);
  return await res.json();
};

export const createPost = async (post, token) => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(post),
  });
  
  return await res.json();
};