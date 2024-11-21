import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import TwitterCard from "../components/TwitterCard";
import tweetData from "../data/tweets.json";
import NewTweet from "../components/NewTweet";
import { useState } from "react";

const Home = () => {
  const [tweets, setTweets] = useState(tweetData);
  const addTweet = (content) => {
    const newTweet = {
      id: tweets.length + 1,
      author: "Alumno",
      content: content,
    };
    setTweets([newTweet, ...tweets]);
  };

  return (
    <>
      <Navbar />
      <div>
        <h1 className="text-center p-2">Bienvenidos a nuestra app</h1>
        <NewTweet sendTweet={addTweet} />
        <div>
          {tweets.map((tweet) => (
            <TwitterCard
              key={tweet.id}
              author={tweet.author}
              content={tweet.content}
            />
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;
