let express = require("express");
let load = require("express-load");
let bodyParser = require("body-parser"); 
let cookieParser = require("cookie-parser"); 
let expressSession = require("express-session"); 
let path = require("path");
let methodOverride = require("method-override");
let app = express();
let error = require("./middlewares/error");


app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser('pweb2')); 
app.use(expressSession()); 
app.use(bodyParser.json()); 
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, 'public')));

load('models')
  .then('controllers')
  .then('routes')
  .into(app);

  
//codigo acrescentado
app.listen(3001, function (){
  console.log("servidor rodando")
});