import DOMPurify from 'dompurify';


export const CommentItem = ({ user, description, createdAt }) => {

  let cleanDescription = DOMPurify.sanitize(description);

  return (
    <div className="p-4 bg-slate-50 rounded-xl">
      <div className="flex items-center gap-4">
        {user.img && (
          <img 
            src={user.img} 
            alt="user image"
            className="w-6 h-6 rounded-full object-cover" 
          />
        )}
        <span className="font-medium">{user?.username}</span>
        <span className="text-sm text-gray-500">
          {new Date(createdAt).toLocaleDateString()}
        </span>
      </div>
      <div className="mt-4">
        <p>{cleanDescription}</p>
      </div>
    </div>
  )
}
