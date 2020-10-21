const express = require("express");
const app = express();

const port = 3000;
app.get("/api/login", (req: any, res: any) => {
  const data = {
    code: 200,
    data: {},
    msg: "",
  };
  console.log(req.query, "req");
  res.send(data);
});
app.listen(port, () => {
  console.log("success");
});
