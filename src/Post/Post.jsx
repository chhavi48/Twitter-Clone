import { Avatar } from '@material-ui/core'
import VerifiedUserIcon from "@material-ui/icons/VerifiedUser";
import React from 'react';
import "./Post.css"
import ChatBubbleOutlineIcon from "@material-ui/icons/ChatBubbleOutline";
import RepeatIcon from "@material-ui/icons/Repeat";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import PublishIcon from "@material-ui/icons/Publish";
const Post = ({ displayName, username, verified, text, image, avatar }) => {
  return (
    <div className='post'>
        <div className="post_avtar">
            <Avatar src={avatar}/>
        </div>

        <div className="post_body">
            <div className="post_header">
                 <div className="header_headerText">
                    <h3>
                        {displayName}
                        <span>
                        {verified && <VerifiedUserIcon className="post__badge" />} 
                            @{username}
                        </span>
                    </h3>
                 </div>

                 <div className="post_headerDescription">
                    <p>{text}</p>
                 </div>
            </div>

            <img src={image} alt=''/>
       
       <div className="post_footer">
       <ChatBubbleOutlineIcon fontSize="small" />
            <RepeatIcon fontSize="small" />
            <FavoriteBorderIcon fontSize="small" />
            <PublishIcon fontSize="small" />
       </div>

        </div>
    </div>
  )
}

export default Post