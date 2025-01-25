import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useSavedPosts } from '../lib/useSavedPosts';
import { useSavePost } from "../lib/useSavePost";
import { useRemovePost } from '../lib/useRemovePost';
import { DeleteButton } from "@/s-shared/ui/deleteButton/DeleteButton";


export const PostActions = ({ post }) => {

  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.publicMetadata?.role === 'admin';
  
  const { savedPosts, error, isLoading } = useSavedPosts(getToken);
  const isSaved = savedPosts?.some(postId => postId === post._id);
  console.log('Saved posts: ', savedPosts);
  const { savePost, isSavePending, postSavingError} = useSavePost(getToken, post._id);

  const { removePost, isRemovePending, postRemovingError } = useRemovePost(getToken, post._id);

  let submitSavePost = () => {
    if (!user) {
      navigate('/login');
    } else {
      savePost();
    }
  }

  return (
    <div>
      <h2 className="mt-4 mb-2 text-sm font-medium">Actions</h2>
      {isLoading 
        ? 'Loading...' 
        : error
          ?  'Saved post fetching failed!'
          : (
            <button
              className="py-1 flex items-center gap-2 text-sm cursor-pointer"
              onClick={submitSavePost}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 48 48"
                width="20px"
                height="20px"
              >
                <path
                  d="M12 4C10.3 4 9 5.3 9 7v34l15-9 15 9V7c0-1.7-1.3-3-3-3H12z"
                  stroke="black"
                  strokeWidth="2"
                  fill={isSaved ? 'black' : 'none'}
                />
              </svg>
              {postSavingError
                ? <span className="text-xs">Error: {error?.message}</span>
                : <span>
                    {isSavePending 
                      ? 'Saving...' 
                      : isSaved 
                        ? 'Saved'
                        : 'Save Post'
                    }
                  </span>
              }
            </button>
          ) 
      }
      {user && (post.user.username === user.username || isAdmin) && (
        <DeleteButton onDeleteSubmit={() => removePost()}>
          { postRemovingError
            ? <span className="text-xs">Error: {error?.message}</span>
            : <span>{isRemovePending ? 'Deleting...' : 'Delete Post'}</span>
          }
        </DeleteButton>
      )}
    </div>
  )
}