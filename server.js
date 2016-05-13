var express = require('express');
var app = express();
var port = process.env.PORT || 2333;


var router = express.Router({
    caseSensitive: app.get('case sensitive routing'),
    strict: app.get('strict routing')
});



app.use(router);

app.use(express.static('_book'));

var server = app.listen(port, function() {

    var host = server.address().address;
    var port = server.address().port;

    console.log('Server listening at http://%s:%s', host, port);

});


router.get('/', function (req, res) {
  res.sendfile('_book/index.html');
});
