const express = require('express')
const path = require('path')
const app = express()
const PORT = 8082

app.use(express.static(path.join(__dirname, "/dist")))

app.post('/*', (req, res) => {
  console.log(__dirname)
  res.sendFile(__dirname + 'dist/index.html');
});

async function start () {
  try {
    app.listen(PORT)
  } catch (e) {
    console.log(e)
  }
}
start()
