const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = 8000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use(express.static(__dirname + '/../client'));
app.listen(port, () => {
	console.log('listening on port', port);
})