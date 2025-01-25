import { useNavigate } from "react-router-dom";
import { useAuth, useUser } from "@clerk/clerk-react";
import { useSavedPosts } from '../lib/useSavedPosts';
import { useSavePost } from "../lib/useSavePost";
import { useRemovePost } from '../lib/useRemovePost';
import { useFuturePost } from '../lib/useFuturePost';
import { DeleteButton } from "@/s-shared/ui/deleteButton/DeleteButton";


export const PostActions = ({ post }) => {

  const { user } = useUser();
  const { getToken } = useAuth();
  const navigate = useNavigate();

  const isAdmin = user?.publicMetadata?.role === 'admin';
  
  const { savedPosts, error, isLoading } = useSavedPosts(getToken);
  const isSaved = savedPosts?.some(postId => postId === post._id);
  
  const { savePost, isSavePending, postSavingError} = useSavePost(getToken, post._id);
  const { removePost, isRemovePending, postRemovingError } = useRemovePost(getToken, post._id);
  const { futurePost, isFuturePending, postFutureError } = useFuturePost(getToken, post._id, post.slug);

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
      {isAdmin && (
        <button
            className="py-1 flex items-center gap-2 text-sm cursor-pointer"
            onClick={() => futurePost()}
          >
            <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 48 48"
            width="20px"
            height="20px"
          >
            <path
              d="M24 2L29.39 16.26L44 18.18L33 29.24L35.82 44L24 37L12.18 44L15 29.24L4 18.18L18.61 16.26L24 2Z"
              stroke="black"
              strokeWidth="2"
              fill={
                isFuturePending
                  ? post.isFeatured
                    ? "none"
                    : "black"
                  : post.isFeatured
                    ? "black"
                    : "none"
              }
            />
          </svg>
          <span>{post.isFeatured ? 'Featured' : 'Feature post'}</span>
          {isFuturePending && (
            <span className="text-xs">(in progress)</span>
          )}
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