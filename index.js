var express = require('express');
var app = express();
const wsInstance = require('express-ws')(app);
var logger = require('morgan');
app.use(logger());
app.use(express.static('public'));

app.get('/74960', function (req, res) {
    res.redirect('https://www.douyu.com/74960');
});
app.get('/longdd', function (req, res) {
    res.redirect('https://www.huya.com/longdd');
});
app.get('/9999', function (req, res) {
    res.redirect('https://www.douyu.com/9999');
});

app.ws('/rtc', ws => {
    ws.on('message', data => {
        // 未做业务处理，收到消息后直接广播
        wsInstance.getWss().clients.forEach(server => {
            if (server !== ws) {
                server.send(data);
            }
        });
    });
});

var server = app.listen(8888, function () {

    var host = server.address().address
    var port = server.address().port

    console.log("应用实例，访问地址为 http://%s:%s", host, port)

})
