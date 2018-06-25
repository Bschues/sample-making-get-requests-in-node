const http = require("http");

const logSpacing = "\n\n\n"

// Native HTTP library GET request demo
http.get("http://jservice.io/api/categories?count=1&offset=0", response => {
  let jsonBody = "";

  // make sure we're supporting international characters
  response.setEncoding("utf8");

  // build our jsonBody string from the chunks of data as they are downloaded
  response.on("data", chunk => (jsonBody += chunk));

  // finally, hydrate and log it
  response.on("end", () => {
    console.log(logSpacing);
    console.log("Native Node HTTP library way of making a GET request");
    console.log("Status code:", response.statusCode);

    const hydratedBody = JSON.parse(jsonBody);
    console.log(hydratedBody);
  });
});



// REQUEST library GET request demo
const request = require("request");

request(
  "http://jservice.io/api/categories?count=1&offset=1",
  (error, response, jsonBody) => {
    console.log(logSpacing);
    console.log("REQUEST library way of making a GET request");
    console.log("Status code:", response.statusCode);

    const hydratedBody = JSON.parse(jsonBody);
    console.log(hydratedBody);
  }
);



// NODE-FETCH library GET request demo with .then()
const fetch = require("node-fetch");
fetch("http://jservice.io/api/categories?count=1&offset=2")
  .then(response => {
    console.log(logSpacing);
    console.log("NODE-FETCH library way of making a GET request (using .then())");
    console.log("Status code:", response.status);
    return response.json();
  })
  .then(hydratedBody => {
    console.log(hydratedBody);
  });



// NODE-FETCH library GET request demo with ASYNC/AWAIT
const fetchWithAsyncAWait = async url => {
  const response = await fetch(url);
  const hydratedBody = await response.json();

  console.log(logSpacing);
  console.log("NODE-FETCH library way of making a GET request (using async/await)");
  console.log("Status code:", response.status);
  console.log(hydratedBody);
};

fetchWithAsyncAWait("http://jservice.io/api/categories?count=1&offset=3");



const axios = require("axios");

// AXIOS library GET request demo with .then()
axios
  .get("http://jservice.io/api/categories?count=1&offset=4")
  .then(response => {
    console.log(logSpacing);
    console.log("AXIOS library way of making a GET request (using async/await)");
    console.log("Status code:", response.status);

    // notice we can skip the .json() "hydration" step because AXIOS is doing it for us
    const hydratedBody = response.data;
    console.log(hydratedBody);
  });



// AXIOS library GET request demo with ASYNC/AWAIT
const axiosWithAsyncAWait = async url => {
  const response = await axios.get(url);
  const hydratedBody = response.data;

  console.log(logSpacing);
  console.log("AXIOS library way of making a GET request (using async/await)");
  console.log("Status code:", response.status);
  console.log(hydratedBody);
};

axiosWithAsyncAWait("http://jservice.io/api/categories?count=1&offset=5");
