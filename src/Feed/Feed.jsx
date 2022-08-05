import React from 'react';
import TweetBox from '../TweetBox/TweetBox';
import "./Feed.css";
const Feed = () => {
  return (
    <div className='feed'>
        <div className="feed_header">
        <h1>Home</h1>

        </div>
     <TweetBox/>
    </div>
  )
}

export default Feed