import React from "react";
import "./StoryReel.css";
import Story from "../Story";

function StoryReel() {
  return (
    <div className="storyReel">
      <Story
        image="https://picsum.photos/200"
        profileSrc="https://picsum.photos/200/300"
        title="Vicky Sharma"
      />
      <Story
        image="https://picsum.photos/200"
        profileSrc="https://picsum.photos/200/300"
        title="John Doe"
      />
      <Story
        image="https://picsum.photos/200"
        profileSrc="https://picsum.photos/200/300"
        title="Anshul Kumar"
      />
      <Story
        image="https://picsum.photos/200"
        profileSrc="https://picsum.photos/200/300"
        title="Harmeet kaur"
      />
      <Story
        image="https://picsum.photos/200"
        profileSrc="https://picsum.photos/200/300"
        title="Vivek Debnath"
      />
    </div>
  );
}

export default StoryReel;
