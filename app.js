let express = require("express");
let load = require("express-load");
let bodyParser = require("body-parser"); 
let cookieParser = require("cookie-parser"); 
let expressSession = require("express-session"); 
let path = require("path");
let methodOverride = require("method-override");
let app = express();
let error = require("./middlewares/error");
const KEY = 'pweb.agenda.sid';
const SECRET = 'super_secreto!'; 
let cookie = cookieParser(SECRET); 
let store = new expressSession.MemoryStore();
let mongoose = require('mongoose'); 

global.db = mongoose.connect('mongodb://127.0.0.1:27017/granadas');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(cookieParser('pweb2')); 
app.use(expressSession()); 
app.use(bodyParser.json()); 
app.use(methodOverride("_method"));
app.use(bodyParser.urlencoded({extended: true})); 
app.use(express.static(path.join(__dirname, 'public')));

load('models').then('controllers').then('routes').into(app);
  
app.listen(3000, ()=>{
  console.log("servidor rodando")
});