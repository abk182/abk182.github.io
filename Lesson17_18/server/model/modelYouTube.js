var fs = require('fs');
var readline = require('readline');
var google = require('googleapis');
var googleAuth = require('google-auth-library');
var auth = require('../authYoutube/auth')


// (process.env.HOME || process.env.HOMEPATH ||
//     process.env.USERPROFILE)

// Load client secrets from a local file.
exports.getAuth = function (fn) {
    fs.readFile('server/authYoutube/client_secret_OtherType.json', function processClientSecrets(err, content) {
        if (err) {
            console.log('Error loading client secret file: ' + err);
            return;
        }
        // Authorize a client with the loaded credentials, then call the YouTube API.
        auth.authorize(JSON.parse(content), fn);
    });
};

/**
 * Lists the names and IDs of up to 10 files.
 *
 * @param {google.auth.OAuth2} auth An authorized OAuth2 client.
 */
exports.getChannel = function(auth) {
    return new Promise((resolve, reject) => {
        var service = google.youtube('v3');
        service.channels.list({
            auth: auth,
            part: 'snippet,contentDetails,statistics',
            forUsername: 'GoogleDevelopers'
        }, function(err, response) {
            if (err) {
                reject('The API returned an error: ' + err);
                return;
            }
            var channels = response.items;
            if (channels.length == 0) {
                reject('No channel found.');
            } else {
                resolve({
                    id: channels[0].id,
                    title: channels[0].snippet.title,
                    views: channels[0].statistics.viewCount
                })
            }
        });
    })
}