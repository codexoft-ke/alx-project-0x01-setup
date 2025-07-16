import React from 'react';

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostCardProps {
  post: Post;
}

const PostCard: React.FC<PostCardProps> = ({ post }) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-6 mb-4 border border-gray-200">
      <h2 className="text-xl font-semibold text-gray-800 mb-2">{post.title}</h2>
      <p className="text-gray-600 mb-4">{post.body}</p>
      <div className="text-sm text-gray-500">
        <span>Post ID: {post.id}</span> | <span>User ID: {post.userId}</span>
      </div>
    </div>
  );
};

export default PostCard;
