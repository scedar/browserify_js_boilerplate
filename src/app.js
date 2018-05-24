require("./assets/css/styles.css");
const _ = require("lodash");
const list = require("./modules/list");


console.log("__VERSION__");

console.log("Here is the list ", list);
console.log(_.map(list, (i) => i + 1));
