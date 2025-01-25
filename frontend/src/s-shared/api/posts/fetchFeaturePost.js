export const fetchFeaturePost = async (token, postId) => {  
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts/feature`, {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({postId}),
  });

  return await res.json();
};