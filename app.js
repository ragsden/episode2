/**
 * Created by raghu on 3/1/14.
 */

/**
 * learning series name : nymyway
 * episode 2 : blockinge
 *
 * Here the code loops for 6 seconds before responding. When you open two browsers and browse the app,
 * you will notice that the requests are serialized.
 * */
var http = require('http');

http.createServer(function (req, res) {
sleep(res);
}).listen(Number(process.env.PORT || 5000));
console.log('Server running at http://127.0.0.1:3000/');

sleep = function (res)
{
    var mins = new Date().getMinutes();
    var secs = new Date().getSeconds();

    res.write( "Start time = " + mins + ":" + secs + "\n");

    while(true)
    {
        if(Math.abs((new Date().getSeconds() - secs)) > 6)
        break;
    }
    res.end("end time = " + new Date().getMinutes() + ":" + new Date().getSeconds()  + "\n")
}