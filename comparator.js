var express = require('express'),
    ship = require('./controllers/ship'),
    app = express();
    
app.use(express.static(__dirname + '/assets'));
app.use(express.static(__dirname + '/model'));

app.engine('html', require('ejs').renderFile);

app.set('view engine', 'html');

app.set('views', __dirname + '/views');

app.get('/', ship.index);

app.get('/compare?', ship.compare);

app.listen(process.env.PORT || 8080);