/* eslint-disable react/prop-types */
import { useState } from "react";

function NewTweet({ sendTweet }) {
  const [newTweet, setNewTweet] = useState("");
  const handleClick = () => {
    if (newTweet.trim() === "") {
      alert("Debes escribir algo");
      return;
    }
    sendTweet(newTweet);
    setNewTweet("");
  };

  return (
    <div className="m-4">
      <input
        type="text"
        className="border p-2 w-full"
        placeholder="Tweetea algo"
        value={newTweet}
        onChange={(e) => setNewTweet(e.target.value)}
      />
      <button
        className="border bg-blue-400 w-full mt-2 text-white rounded"
        onClick={handleClick}
      >
        Enviar
      </button>
    </div>
  );
}

export default NewTweet;
