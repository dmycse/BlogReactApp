
export const fetchPosts = async () => {
  const res = await fetch(`${import.meta.env.VITE_API_URL}/posts`);
  return await res.json();
};

let postsLimit = 10;

export const fetchInfinityPosts = async (pageParam, searchParams) => {
  
  const searchParamsQuery = {...Object.fromEntries(searchParams)};
  
  const url = new URL(`${import.meta.env.VITE_API_URL}/posts`);
  
  const params = { 
    page: pageParam, 
    limit: postsLimit, 
    ...searchParamsQuery 
  };
  
  Object.entries(params).forEach(([key, value]) => url.searchParams.append(key, value));
  
  const res = await fetch(url.toString());
  return await res.json();
};
