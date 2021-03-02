const express = require("express")
const path = require('path');
let  app = express()
app.get('/', (req, res) => {
    return res.sendFile(path.join(__dirname, './public/index.html'));
  });
app.use('/dist', express.static(path.join(__dirname, './dist')));
app.listen(3000,  () => console.log("Example app listening on port 3000!"));