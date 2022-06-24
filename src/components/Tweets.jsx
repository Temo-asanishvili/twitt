import React, { useState } from "react";
import { TweetsApi, UserApi } from "./ApiConnector";


export default function Tweets () {
    const [tweetsId, setTweetsId] = useState(null);
    const tweets = TweetsApi(tweetsId)
    const users = UserApi(tweetsId)
    return (
        <div>   
            
            {tweets.map((tweet) => {

                return (
                    <div key={tweet.id}>
                    tweet  title:
                     <p>{tweet.title}</p>
                    </div>
                )
            })}
            this is tweetss....
        </div>
    )
}
