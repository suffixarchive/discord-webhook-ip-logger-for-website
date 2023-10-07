# discord-webhook-ip-logger-for-website
ip logger i made cuz i was bored using some skids ipgoelocation api key.
use this an example of how to properly use the fetch api in javascript.

How to edit:
```javascript
// how to remove objects / items
data.ip_info = ipInfo;
if (data.ip_info.country_flag) {
     delete data.ip_info.country_flag;
}

// add webhook and changing style
fetch("web-hook-here", { // your webhook here
    method: "POST", 
    headers: {"Content-Type": "application/json"}, 
    body: JSON.stringify({embeds: [{title: "I'm Bored" /*title*/, description: "```json\n" + formattedData + "\n```" /*only add on do not remove shit*/, color: 3066993 /*color: int value of hex code*/}]})
});
```

## I can't stop you skids from using this maliciously, but i can tell you not to.

### preview
https://media.discordapp.net/attachments/1152526852200615989/1160144075635298344/image.png?ex=6533975e&is=6521225e&hm=7ceb0d79c4e84c9af589f0e1a0fdbe8f41a9930bcb8a777d3583886b0040fd9c&=&width=513&height=683

# fuck you skid
