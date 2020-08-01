import React, { useState } from 'react';
import "./style.css";
import FavoriteBorderRoundedIcon from '@material-ui/icons/FavoriteBorderRounded';
import FavoriteRoundedIcon from '@material-ui/icons/FavoriteRounded';
import ChatRoundedIcon from '@material-ui/icons/ChatRounded';
import ShareRoundedIcon from '@material-ui/icons/ShareRounded';

function SideBar({ likes, shares, messages }) {
    const [liked, setLiked] = useState(false);

    return (
        <div className="videoSidebar">
            <div className="videoSidebar__button">
                {liked ? (
                    <FavoriteRoundedIcon fontSize="large"
                        onClick={e => setLiked(false)}
                    />
                ) : (
                        <FavoriteBorderRoundedIcon fontSize="large"
                            onClick={e => setLiked(true)}
                        />
                    )}

                <p className="likes">{liked ? likes + 1 : likes}</p>
            </div>
            <div className="videoSidebar__button">
                <ChatRoundedIcon fontSize="large" />
                <p className="likes">{messages}</p>
            </div>
            <div className="videoSidebar__button">
                <ShareRoundedIcon fontSize="large" />
                <p className="likes">{shares}</p>
            </div>

        </div>
    )
}

export default SideBar
