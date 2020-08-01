import React, { useRef, useState } from 'react';
import Footer from "../footer";
import SideBar from "../sideBar"
import "./style.css";

function Video({ url, likes, shares, messages, channel, description, song }) {
    const [playing, setPlaying] = useState(false)
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (playing) {
            videoRef.current.pause();
            setPlaying(false)
        } else {
            videoRef.current.play();
            setPlaying(true)
        }
    }
    return (
        <div className="video">
            <video
                loop
                ref={videoRef}
                onClick={onVideoPress}
                className="video__player"
                src={url}>
            </video>
            <Footer
                channel={channel}
                description={description}
                song={song}
            />
            <SideBar
                likes={likes}
                shares={shares}
                messages={messages}
            />
        </div>
    )
}

export default Video
