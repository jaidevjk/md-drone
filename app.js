console.log("Application Started");
var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const mongoose = require("mongoose");

const bodyParser = require('body-parser');
var cors = require('cors');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var jwtRuter = require('./routes/jwt');

var galleryRuter = require('./routes/gallery');
var enquiryRuter = require('./routes/enquirey');
var sprayservicesenquiryRuter = require('./routes/sprayservicesenquiry');
var contactusRuter =require('./routes/contactus');
var app = express();



// Parses urlencoded bodies
app.use(bodyParser.json({limit: '50mb'}));
app.use(bodyParser.urlencoded({limit: '50mb', extended: true}));
app.use(express.json());

const corsOptions ={
   origin:'*', 
   credentials:true,            //access-control-allow-credentials:true
   optionSuccessStatus:200,
}

app.use(cors(corsOptions));

// Set EJS as templating engine 
app.set("view engine", "ejs");


let mongoConnUrl = "mongodb+srv://jaidevk:4AL15ME715@cluster0.kmhzh.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(mongoConnUrl, { useNewUrlParser: true });
let db = mongoose.connection;
db.on("error", function (error) {
  console.log("Error came in connecting" + error);
});
db.on("open", function () {
  console.log(`yes, we are connected to mongodb and the database`);
});


app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  next();
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// for connecing frontend in heroku
app.use(express.static(path.join(__dirname, '../client/public')));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, '../client/build', 'index.html'));
});

//app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/jwt',jwtRuter);
app.use('/gallery',galleryRuter);
app.use('/enquiry',enquiryRuter);sprayservicesenquiryRuter
app.use('/sprayservicesenquiry',sprayservicesenquiryRuter);
app.use('/contactusenquiry',contactusRuter);



//For cors error-policy
app.use(cors({
  origin: 'http://localhost:3000'
}))

app.disable('etag');

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;

// mongodb+srv://jaidevk:<password>@cluster0.kmhzh.mongodb.net/?retryWrites=true&w=majority

// mongodb://localhost/deltinuser
//mongodb://localhost:27017