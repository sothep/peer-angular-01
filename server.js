var express = require('express');
var path = require('path');
var elephants = require('./public/data/repubs');
var donkeys = require('./public/data/dems');

var app = express();
app.use(express.static('public'));

app.get('/', function(request, response){
  response.sendFile(path.join(__dirname, 'public/views/index.html'));
});

app.get('/election', function(request, response){
  var newPrez = electPrez(winningParty());
  response.send(newPrez);
});

app.listen(5000, function(){
  console.log("listening on port: 5000");
});

function electPrez(party){
  var winner = randomNumber(0, party.candidates.length - 1);
  return party.candidates[winner];
}

function winningParty(){
    var result = randomNumber(0, 1);
    return (result) ? elephants : donkeys;
}

function randomNumber(min, max) {
	return Math.floor(Math.random() * (1 + max - min) + min);
}
