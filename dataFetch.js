const express = require("express");
const app = express();
const fs = require("fs");
const axios = require("axios");
const { response } = require("express");

axios.get("http://jsonplaceholder.typicode.com/posts").then((response)=>{
  let json = response.data;

  newJson = JSON.stringify(json);
  fs.writeFileSync("results/post.json", newJson,(err, res)=>{
    if (err) {
      console.log(err)
    }else{
      console.log('Hello world');
    }
  })
})