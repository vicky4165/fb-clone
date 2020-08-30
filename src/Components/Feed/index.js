import React, { useState, useEffect } from "react";
import "./feed.css";
import StoryReel from "../StoryReel";
import MessageSender from "../MessageSender";
import Post from "../Post";
import db from "../../firebase";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    db.collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, data: doc.data() };
          })
        );
      });
  }, []);

  return (
    <div className="feed">
      <StoryReel />
      <MessageSender />
      {posts.map((post) => (
        <Post
          key={post.id}
          image={post.data.image}
          message={post.data.message}
          timestamp={post.data.timestamp}
          username={post.data.username}
          profilePic={post.data.profilePic}
        />
      ))}
    </div>
  );
}

export default Feed;
