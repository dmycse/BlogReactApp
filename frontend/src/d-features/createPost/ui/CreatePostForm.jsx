import { useMediaContent } from '../lib/useMediaContent';
import { useCreatePost } from '../lib/useCreatePost';
import { UploadMedia } from '@/s-shared/ui/UploadMedia';
import { categories } from '@/s-shared/constants';

import ReactQuill from 'react-quill-new';
import 'react-quill-new/dist/quill.snow.css';
import DOMPurify from 'dompurify';


export const CreatePostForm = () => {

  let {
      contentValue,
      setContentValue,
      cover,
      setCover,
      setImg,
      setVideo,
      progress,
      setProgress
    } = useMediaContent();
  
    let { createNewPost, isPending, error } = useCreatePost();
  
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
    let description = formData.get('description').trim();

    const newPost = {
      title: DOMPurify.sanitize(title), 
      img: cover.filePath || "",
      category: formData.get('category'),
      description: DOMPurify.sanitize(description), 
      content: DOMPurify.sanitize(contentValue.trim()),
    };
    
    createNewPost(newPost);

    e.currentTarget.reset();
    setContentValue('');
  };
  

  return (
  <form 
    className="mb-6 h-full flex-1 flex flex-col gap-6"
    onSubmit={handleSubmit} 
  >
    <UploadMedia 
      type="image" 
      setData={setCover} 
      setProgress={setProgress}
    >
      <span className="p-2 w-max shadow-md rounded-xl text-sm text-gray-500 bg-white">
        Add a cover image
      </span>
    </UploadMedia>
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
      className="p-4 min-h-16 rounded-xl bg-white shadow-md"
      name="description"
      placeholder="A Short Description"
    />
    <div className="flex-1 flex">
      <div className="mr-2 flex flex-col gap-2">
        <UploadMedia type="image" setProgress={setProgress} setData={setImg}>
          🌆
        </UploadMedia>
        <UploadMedia type="video" setProgress={setProgress} setData={setVideo}>
          🎬
        </UploadMedia>
      </div>
      <ReactQuill
          theme="snow"
          value={contentValue}
          onChange={setContentValue}
          readOnly={progress > 0 && progress < 100}
          className="flex-1 rounded-xl bg-white shadow-md"
        />
    </div>
      <button
        disabled={isPending || (progress > 0 && progress < 100)}
        className="mt-4 p-2 w-36 bg-purple-800 text-white font-medium rounded-xl disabled:bg-purple-400 disabled:cursor-not-allowed"
      >
        {isPending ? "Sending..." : "Send"}
      </button>
      {(progress > 0 && progress < 100) && "Progress: " + progress + "%"}
      {/* {error && <span>{error.message}</span>} */}
    </form>
  )
}
