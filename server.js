// let fs = require("fs");

// fs.mkdirSync("hello", { recursive: true });

// fs.mkdirSync("garvit", { recursive: true });

// fs.writeFileSync("index.txt", "Hello my name is garvit");

// let result = fs.readFileSync("index.txt");

// console.log(result.toString());

// let os = require("os");

// console.log(os.hostname());

// console.log(os.platform());
// console.log(os.homedir());

// console.log(__dirname);

// let http = require("http");

// http
//   .createServer((req, res) => {
//     console.log(req.url, "req");

//     res.end("hello server start");
//   })
//   .listen(3001, () => {
//     console.log("server started succeess");
//   });

let express = require("express");
let http = require("http");

let app = express();

app.use(express.json());

// http.createServer(app).listen(3001, () => {
//   console.log("server started");
// });

app.get("/v1/user/get", (req, res) => {
  //   console.log(req);

  res.status(200).json({
    message: [
      {
        id: 1,
        name: "grvit",
      },
    ],
  });
});

app.post("/v1/user/create", (req, res) => {
  console.log(req.body);

  let body = req.body;

  res.status(201).json({
    message: "user created success",
    body,
  });
});

app.listen(3001, () => {
  console.log("server started");
});
