module.exports = function (uri) {
    
    const request = require("request");
    const logSpacing = "\n\n\n";
    
    request(uri, (error, response, jsonBody) => {
        console.log(logSpacing);
        console.log("REQUEST library way of making a GET request");
        console.log("Status code:", response.statusCode);

        const hydratedBody = JSON.parse(jsonBody);
        console.log(hydratedBody);
    });

}
