import React, { useState, useEffect } from "react";
import SearchBar from "./SearchBar";
import VideoList from "./Videolist";
import VideoDetail from "./VideoDetail";
import youtube from "../api/youtube";

const App = () => {
  const [videos, setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  const onTermSubmit = async (term) => {
    const { data } = await youtube.get("/search", {
      params: {
        q: term,
      },
    });

    setVideos(data.items);
    setSelectedVideo(data.items[0]);
  };

  useEffect(() => {
    onTermSubmit("cream heroes");
  }, []);

  return (
    <div className="ui container">
      <SearchBar whenSubmitted={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="eleven wide column">
            <VideoDetail selectedVideo={selectedVideo} />
          </div>
          <div className="five wide column">
            <VideoList onVideoSelect={selectedVideo} videos={videos} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
