module.exports = function (uri) {

    const axios = require("axios");
    const logSpacing = "\n\n\n";
    
    const axiosWithAsyncAWait = async uri => {
        const response = await axios.get(uri);
        const hydratedBody = response.data;
      
        console.log(logSpacing);
        console.log("AXIOS library way of making a GET request (using async/await)");
        console.log("Status code:", response.status);
        console.log(hydratedBody);
    };
      
    axiosWithAsyncAWait(uri);

}
