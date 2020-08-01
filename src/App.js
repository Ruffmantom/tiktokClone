import React, { useState, useEffect } from 'react';
import Video from "./components/videoCard"
import './App.css';
import db from "./firebase";

function App() {
  const [videos, setVideos] = useState([])

  useEffect(()=>{
    db.collection("videos").onSnapshot(snapshot =>{
      setVideos(snapshot.docs.map(doc=> doc.data()))
    })
  }, [videos])

  return (
    <div className="app">
      <div className="app__videos">
        {videos.map(
          ({ url, channel, song, likes, messages, description, shares }) => (
            <Video
              url={url}
              channel={channel}
              description={description}
              song={song}
              likes={likes}
              messages={messages}
              shares={shares} 
            />
          )
        )}
        
      </div>
    </div>
  );
}

export default App;
