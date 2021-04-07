//express_demo.js 文件
var express = require('express');
var app = express();
app.use(express.static('public'));

app.get('/74960', function (req, res) {
    res.redirect('https://www.baidu.com');
})

var server = app.listen(9081, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
