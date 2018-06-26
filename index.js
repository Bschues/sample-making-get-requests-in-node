const theNativeWay = require("./HTTPClients/nativeHTTPWay.js");
const theRequestWay = require("./HTTPClients/requestWay.js");
const theFetchWay_Then = require("./HTTPClients/fetchWay_Then.js");
const theFetchWay_AsyncAwait = require("./HTTPClients/fetchWay_AsyncAwait.js");
const theAxiosWay_Then = require("./HTTPClients/axiosWay_Then.js");
const theAxiosWay_AsyncAwait = require("./HTTPClients/axiosWay_AsyncAwait.js");

// In the "requires" above, notice that I'm calling local files that I've written.
// Look at how I'm doing this in each of those files. I'm setting "module.exports"
// to an object (in this case a function), and this object is what gets imported
// into this file and used below.
//
// Read: https://blog.risingstack.com/node-js-at-scale-module-system-commonjs-require/

const categoryURI = "http://jservice.io/api/categories?count=1&offset=";

theNativeWay(categoryURI + "0");
theRequestWay(categoryURI + "1");
theFetchWay_Then(categoryURI + "2");
theFetchWay_AsyncAwait(categoryURI + "3");
theAxiosWay_Then(categoryURI + "4");
theAxiosWay_AsyncAwait(categoryURI + "5");
