import React from "react";
import LikeButton from "./likebutton";

const PostCard = ({ profilePic, username, content }) => {
  return (
    <div className="border p-4 rounded-lg shadow-lg bg-white max-w-md mx-auto">
      <div className="flex items-center space-x-3">
        <img
          src={profilePic}
          alt="Profile"
          className="w-12 h-12 rounded-full border"
        />
        <h2 className="text-lg font-bold">{username}</h2>
      </div>
      <p className="mt-3 text-gray-700">{content}</p>
      <LikeButton />
    </div>
  );
};

export default PostCard;
