import React from 'react'
import "./Widgets.css"
import SearchIcon from "@material-ui/icons/Search";
import {
  TwitterTimelineEmbed,
  TwitterShareButton,
  TwitterTweetEmbed,
} from "react-twitter-embed";
const Widgets = () => {
  return (
    <div className='widgets'>
      <div className="widgets_input">
      <SearchIcon className="widgets__searchIcon" />
        <input placeholder="Search Twitter" type="text" />
      </div>

      <div className="widgets_widgetContainer">
        <h2>what's Happening</h2>
        
        <TwitterTweetEmbed tweetId={"1403911617226493956"} />

        <TwitterTimelineEmbed
          sourceType="profile"
          screenName="SrivastavChhavi"
          
          options={{ height: 400 }}
        />

       <TwitterShareButton 
          url={"https://www.linkedin.com/in/chhavisrivastva/"}
          options={{ text: "Awesome clone 💥💥🎆", via: "SrivastavChhavi" }}
        /> 
      </div> 
    </div>
  )
}

export default Widgets