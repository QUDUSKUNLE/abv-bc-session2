getTimeZone = () => {
    var prompt = require("prompt");
    var colors = require("colors/safe");
    // Setting these properties customizes the prompt. 
    prompt.message = colors.rainbow("Question!");
    prompt.delimiter = colors.green("");
    prompt.start();
    prompt.get({
        properties: {
            name: {
                description: colors.magenta("Please, latitude and longitude of location in the format `latitude,longitude`?")
            }
        }
    }, function(err, result) {
        let location = result.name;
        const timezone = ((new Date()).getTime() / 1000).toString();
        const https = require("https");
        const apiKey = "AIzaSyAzlAJq3Y96B03Zx9pBuC_OLwToJeauy4U";
        let request = https.get("https://maps.googleapis.com/maps/api/timezone/json?location=" + location + "&timestamp=" + timezone + "&key=" + apiKey,
            function(response) {
                var body = "";
                response.on('data', function(output) {
                    body += output;
                });
                response.on('end', function() {
                    var display = JSON.parse(body);
                    console.log(display.timeZoneId);
                });

            });
    });

}
getTimeZone();