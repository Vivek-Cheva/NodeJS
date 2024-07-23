const fs = require("fs");
// we should not prefer Sync tasks

// fs.writeFileSync("./test.txt","heyy testing..");

let res = fs.readFileSync("./contacts.txt","utf-8");
fs.appendFileSync("./test.txt","lets do it");
console.log(res);