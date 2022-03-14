"use strict";

const app = require("../app");

const port = process.env.PORT || 4002;

app.listen(port, () =>{
    console.log("서버 가동");
});
