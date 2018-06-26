module.exports = function (uri) {

    const fetch = require("node-fetch");
    const logSpacing = "\n\n\n";

    const fetchWithAsyncAWait = async uri => {
        const response = await fetch(uri);
        const hydratedBody = await response.json();
      
        console.log(logSpacing);
        console.log("NODE-FETCH library way of making a GET request (using async/await)");
        console.log("Status code:", response.status);
        console.log(hydratedBody);
    };
      
    fetchWithAsyncAWait(uri);

}
