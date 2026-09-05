const express = require('express');
const app = express();
app.use(express.json());

app.post('/', (req, res) => {
  console.log(req.body); // Logs the sent data to your terminal
  res.status(200).send({ success: true }); // Responds with OK status
});

app.listen(8888, () => console.log("Server running at http://127.0.0.1:8888"));
