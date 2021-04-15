var express = require('express');
var cors = require('cors');
require('dotenv').config()

var app = express();

app.use(cors());
app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
    res.sendFile(process.cwd() + '/views/index.html');
});




const port = process.env.PORT || 3000;
app.listen(port, function () {
  console.log('Your app is listening on port ' + port)
});



// 1st SOLUTION ATTEMPT
let multer = require('multer')

//call multer -  no options
// specify single file
// placeholder upfile


app.post('/api/fileanalyse', multer().single('upfile'), (req, res) => {
  let resObject = {}
  resObject['name'] = req.file.originalname
  resObject['type'] = req.file.mimetype
  resObject['size'] = req.file.size

  res.json(resObject)
})
