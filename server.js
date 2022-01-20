const express = require('express');
const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const fs = require('fs');
const mime = require('mime');
 
// parse application/x-www-form-urlencoded
app.use(bodyParser.json());
// app.use(bodyParser.urlencoded({limit: '100mb', extended: true}));
// parse application/json
app.use(bodyParser.json());
const uploadImage = async (req, res, next) => {
try {
let matches = req.body.base64image.match(/^data:([A-Za-z-+\/]+);base64,(.+)$/),
response = {};
 
if (matches.length !== 3) {
return new Error('Invalid input string');
}
response.type = matches[1];
response.data = new Buffer(matches[2],'base64');
let decodedImg = response;
let imageBuffer = decodedImg.data;
let type = decodedImg.type;
let extension = mime.extension(type);
let fileName = "image." + extension;
fs.writeFileSync("./images" + fileName, imageBuffer, 'utf8');
return res.send({"status":"success"});
} catch (e) {
return res.send({"status":"failed"});
}
}
 
app.post('/upload/image', uploadImage)
 
app.listen(port, () => console.log(`Server is listening on port ${port}`))