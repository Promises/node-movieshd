var crypto = require('crypto');
var aes = require('aes-cross');
aes.setKeySize(256);

exports.aesDec = function(str, key) {
    var buffer;
    try {
        //It may need ".toString('ascii')". Optional.
        buffer = aes.decBytes(new Buffer(str, 'base64').toString('binary'), new Buffer(key));
    }
    catch (err) {
        buffer = new Buffer('');
    }
    return buffer;
};

exports.md5 = function(str) {
    return crypto.createHash('md5').update(str).digest("hex");
};