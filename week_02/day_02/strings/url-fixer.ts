"use strict";
// Accidentally I got the wrong URL for a funny subreddit. It's probably "odds" and not "bots"
// Also, the URL is missing a crucial component, find out what it is and insert it too!

let url: string = "https//www.reddit.com/r/nevertellmethebots";

console.log(url.substring(0, 5) + ":" + url.substring(5, 38) + "odds");
