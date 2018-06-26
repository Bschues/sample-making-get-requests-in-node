module.exports = function (uri) {

    const fetch = require("node-fetch");
    const logSpacing = "\n\n\n";

    fetch(uri)
        .then(response => {
            console.log(logSpacing);
            console.log("NODE-FETCH library way of making a GET request (using .then())");
            console.log("Status code:", response.status);
            return response.json();
        })
        .then(hydratedBody => {
            console.log(hydratedBody);
        });

}
