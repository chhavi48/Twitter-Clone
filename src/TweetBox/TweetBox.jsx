import React from 'react'
import "./TweetBox.css";
import { Avatar, Button } from "@material-ui/core";
const TweetBox = () => {
  return (
    <div className='tweetBox'>
        <form className='form'>
            <div className="tweetBox_input">
                <Avatar src="https://avatars.githubusercontent.com/u/77965216?v=4"/>
                <input
            placeholder="What's happening?"
            type="text"/>
            </div>
  
            <Button className='tweetBox_tweetButton'>tweet</Button>
        </form>
    </div>
  )
}

export default TweetBox