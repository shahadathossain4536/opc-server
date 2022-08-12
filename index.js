const express = require("express");
const app = express();
const port = process.env.PORT || 3005;
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

app.use(express.json());
app.use(cors());

const uri = `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0.r6b45qw.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

async function run() {
  try {
    const userDataCollection = client.db("userData").collection("data");
  } finally {
  }
}
run().catch(console.dir);

app.get("/", (req, res) => {
  res.send("opc World!");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
