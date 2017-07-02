var http = require('./http.js');
var constants = require('./constants.js');


var grabTvShows = function(list, cb) {
    var url = constants.API_BASE + '/tvshow?type=' + list + '&page=1&count=9999999';
    console.log('URL = ' + url);
    http.get(url, function(resBody) {
        var json;
        try {
            json = JSON.parse(resBody);
        }
        catch (err) {
            json = {};
        }
        cb(json);
    });
};

var grabMovies = function(list, cb) {
    var url = constants.API_BASE + '/movies?type=' + list + '&page=1&count=9999999';
    console.log('URL = ' + url);
    http.get(url, function(resBody) {
        var json;
        try {
            json = JSON.parse(resBody);
        }
        catch (err) {
            json = {};
        }
        cb(json);
    });
};

var getDetails = function(id, cb) {
    var url = constants.API_BASE + '/detail?id=' + id + '&page=1&count=-1';
    console.log('URL = ' + url);
    http.get(url, function(resBody) {
        var json;
        try {
            json = JSON.parse(resBody);
        }
        catch (err) {
            json = {};
        }
        cb(json);
    });
};

var getStreams = function(chapterId, cb) {
    var url = constants.API_BASE + '/stream?chapterid=' + chapterId + '&page=1&count=-1';
    console.log('URL = ' + url);
    http.get(url, function(resBody) {
        var json;
        try {
            json = JSON.parse(resBody);
        }
        catch (err) {
            json = {};
        }
        cb(json);
    });
};

exports.grabTvShows = grabTvShows;
exports.grabMovies = grabMovies;
exports.getDetails = getDetails;
exports.getStreams = getStreams;