import React from 'react';
import Post from '../Post/Post';
import TweetBox from '../TweetBox/TweetBox';
import "./Feed.css";
const Feed = () => {
  return (
    <div className='feed'>
        <div className="feed_header">
        <h1>Home</h1>

        </div>
     <TweetBox/>
     <Post/>
     <Post
     image="https://media-exp2.licdn.com/dms/image/C5616AQED_la3mO9gTg/profile-displaybackgroundimage-shrink_200_800/0/1630232123426?e=1661385600&v=beta&t=82EVFqY82aoDN9MsGn52jpTr67CeTYh7ABhLHT9qPsM"
     />
    </div>
  )
}

export default Feed