import { useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FaHeart } from "react-icons/fa";

/* eslint-disable react/prop-types */
function TwitterCard({ author, content }) {
  const [liked, setLiked] = useState(false);

  const toggleClick = () => {
    setLiked(!liked);
  };

  return (
    <>
      <div className="border p-4 rounded flex m-2 justify-between">
        <div>
          <h3 className="font-bold">{author}</h3>
          <p>{content}</p>
        </div>
        <button onClick={toggleClick}>
          {liked ? <FaHeart /> : <FaRegHeart />}
        </button>
      </div>
    </>
  );
}

export default TwitterCard;
