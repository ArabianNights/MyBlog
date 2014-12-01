//模块导入
var express = require('express');
var _ = require('lodash');
var path = require('path');
var favicon = require('static-favicon');
var logger = require('morgan');
var flash = require('connect-flash');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var MongoStore = require('connect-mongo')(session);

var routes = require('./routes/index');
//配置导入
var config = require('./config');
console.error(config.dbConfig.db);
var app = express();

// app设置
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(favicon());
app.use(logger('dev'));
app.use(flash());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(session(
    _.assign(config.cookieConfig,{
        store : new MongoStore(
            {db : config.dbConfig.db}
        )
    })
));

app.use('/',router);




module.exports = app;