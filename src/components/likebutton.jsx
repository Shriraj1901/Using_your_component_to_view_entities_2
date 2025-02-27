import React, { useState } from "react";

const LikeButton = () => {
  const [liked, setLiked] = useState(false);

  return (
    <button
      className={`px-4 py-2 mt-2 rounded-lg text-white font-semibold transition-all ${
        liked ? "bg-red-500" : "bg-gray-400"
      }`}
      onClick={() => setLiked(!liked)}
    >
      {liked ? "❤️ Liked" : "🤍 Like"}
    </button>
  );
};

export default LikeButton;
