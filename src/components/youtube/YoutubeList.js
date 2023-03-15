import React from "react";
import { YoutubeData } from "../../data";
import YoutubeItem from "./YoutubeItem";

const YoutubeList = (props) => {
  // Layout: Header, Footer
  return (
    <div className="youtube-list">
      {props.children}
      {YoutubeData.map((item, index) => (
        <YoutubeItem
          key={item.id}
          image={item.image}
          avatar={item.avatar || item.image}
          author={item.author}
        />
      ))}
    </div>
  );
};

export default YoutubeList;
