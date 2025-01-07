import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { useUser, useAuth } from '@clerk/clerk-react';
import { toast } from 'react-toastify';
import { categories } from '../../constants/constants'

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import { createPost } from '../../lib/fetchPosts';


export const Write = () => {

  const navigate = useNavigate();

  const { getToken } = useAuth();

  const [contentValue, setContentValue] = useState('');

  const {mutate: createNewPost, isPending} = useMutation({
    mutationFn: async (newPost) => {
      let token = await getToken();
      return createPost(newPost, token);
    },
    onSuccess: (res) => {
      toast.success('Post created successfully');
      navigate(`/posts/${res.slug}`);
    }
  });

  // const {isLoaded, isSignedIn} = useUser();
  
  // if (!isLoaded) {
  //   return <div>Loading...</div>
  // }

  // if (isLoaded &&!isSignedIn) {
  //   return <div>You should login!</div>
  // }

  const handleSubmit = (e) => {
    e.preventDefault();
 
    const formData = new FormData(e.currentTarget);
    
    let title = formData.get('title').trim().charAt(0).toUpperCase() + formData.get('title').trim().slice(1);

    const newPost = {
      title, 
      category: formData.get('category'),
      description: formData.get('description').trim(), 
      content: contentValue.trim()
    };

    createNewPost(newPost);

    e.currentTarget.reset();
    setContentValue('');
  }
  return (
    <div className="h-[calc(100vh-64px)] md:h-[calc(100vh-80px)] flex flex-col gap-6">
      <h1 className="text-cl font-light">Create a New Post</h1>
      <form 
        className="mb-6 h-full flex-1 flex flex-col gap-6"
        onSubmit={handleSubmit} 
      >
        <button className="p-2 w-max shadow-md rounded-xl text-sm text-gray-500 bg-white">
            Add a cover image
          </button>
        <input
          type="text"
          name="title"
          className="text-4xl font-semibold bg-transparent outline-none"
          placeholder="My Awesome Story"
        />
        <div className="flex items-center gap-4">
          <label htmlFor="category" className="text-sm">
            Choose a category:
          </label>
          <select
            name="category"
            id="category"
            className="p-2 rounded-xl bg-white shadow-md"
          >
            {categories.map(item => (
              <option key={item.id} value={item.selector}>{item.title}</option>
            ))}
          </select>
        </div>
        <textarea
          className="p-4 rounded-xl bg-white shadow-md"
          name="description"
          placeholder="A Short Description"
        />
        <div className="flex">
          <div className="mr-2 flex flex-col gap-2">
            <div className="cursor-pointer">🎇</div>
            <div className="cursor-pointer">🎬</div>
          </div>
          <ReactQuill
              theme="snow"
              value={contentValue}
              onChange={setContentValue}
              className="flex-1 rounded-xl bg-white shadow-md"
            />
        </div>
        {/* <div className="flex-1 flex">
          <div className="flex flex-col gap-2">
            
          </div>
          <ReactQuill
            theme="snow"
            className="flex-1 rounded-xl bg-white shadow-md"
            // value={value}
            // onChange={setValue}
            // readOnly={0 < progress && progress < 100}
          />
        </div> */}
        <button
          // disabled={isPending || (0 < progress && progress < 100)}
          disabled={isPending}
          className="mt-4 p-2 w-36 bg-purple-800 text-white font-medium rounded-xl disabled:bg-purple-400 disabled:cursor-not-allowed"
        >
          {isPending ? "Sending..." : "Send"}
        </button>
        {/* {"Progress:"}
        {mutation.isError && <span>{mutation.error.message}</span>} */}
      </form>
    </div>
  )
}
