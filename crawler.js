// var axios = require('axios');
const fs = require('fs');
const Nightmare = require('nightmare');

const nightmare = Nightmare({ show: "false" });
const url = "https://s3-us-west-1.amazonaws.com/ra-training/test1.html";
let path = "./output/";
let filename = "index.html";

nightmare
  .goto(url)
  .evaluate(() => document.body.innerHTML)
  .end()
  .then((html) => {
    console.log(html);
    fs.writeFile(path + filename, html, (error) => {
      if (error) {
        console.log("Error writing a file");
        console.log(error);
      }
      console.log("Success");
    })
  })
  .catch((error) => {
    console.log(error)
  })
