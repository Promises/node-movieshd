var request = require('request');
var constants = require('./constants.js');
var crypto = require('./crypto.js');
var imei = require('./imei.js');

var token = '';

var time = Date.now().toString().substring(0, 10);

var get = function(url, cb) {
    url += generateAppendix();;

    var options = {
        url: url,
        headers: {
            'User-Agent': constants.USER_AGENT
        },
        timeout: 30000
    };

    request(options, function(err, res, body) {
        decryptResponse(body, function(decryptedRes) {
            cb(decryptedRes);
        });
    });
};

var decryptResponse = function(resBody, cb) {
    var decryptedRes = crypto.aesDec(resBody, constants.PRIVATE_KEY);
    cb(decryptedRes);
};

var generateAppendix = function() {
    if (token == '') {
        var preHash = constants.TOKEN_KEY.toString() + time.toString();
        token = crypto.md5(preHash).toUpperCase();
        console.log('Token = ' + token);
    }

    return '&os=android&version=' + constants.VERSION + '&token=' + token + '&time=' + time + '&ads=0&deviceid=' + imei.generate();
};

exports.get = get;
