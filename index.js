const { WebClient } = require('@slack/web-api');
const axios = require('axios');
 console.log("Getting started...")


// Create a new instance of the WebClient class with the token read from your environment variable
const web = new WebClient(process.env.SLACK_TOKEN);
// The current date
const currentTime = new Date().toTimeString();

(async () => {
    try {
        await web.chat.postMessage({
            channel: 'general',
            text: '@AcroKnow bot here to help you find the meaning of acronyms and Indeed. use /help to see what all I can do!'
        });
    } catch (error) {
        console.log(error)
    }
})();