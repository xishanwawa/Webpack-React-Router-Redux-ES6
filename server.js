var http = require('http');
var path = require('path');
var compression = require('compression');
var express = require('express');
var app = express();
app.use(compression());
app.use(express.static(__dirname + '/build/'));
// 创建服务端
app.listen(8888, function () {
    console.log('listen port 8888');
});
