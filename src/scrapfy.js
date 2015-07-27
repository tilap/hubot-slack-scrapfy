// Description:
//   Create Scrapfy room from slack
//
// Commands:
//   hubot code - Create a scrapfy room
//   hubot code {code} - Create a scrapfy room with {code} syntax
//   hubot code infos - Display some infos

var request = require('request');

var serviceUrl = 'http://api.scrapfy.io:80/scraps';
var availableLang = ['plain_text', 'sh', 'c_cpp', 'coffe', 'csharp', 'css', 'golang', 'html', 'html_ruby', 'java', 'javascript', 'json', 'perl', 'php', 'python', 'ruby', 'sql', 'stylus', 'xml', 'yaml'];

var pck = require('../package.json');

module.exports = function(robot) {

  robot.respond(/code( (\w+))?$/, function(res) {
    var lang = '';
    if(res.match[2]) {
      lang = res.match[2].toLowerCase();
      if('infos'===lang) {
        return;
      }
      if(availableLang.indexOf(lang) < 0) {
        res.send('"' + lang + '" is not a supported langage. Available langages are: "' + availableLang.join('", "') + '"');
        return;
      }
    }

    var data = {lang: lang};
    request.post({url: serviceUrl, form: data}, function(err, httpResponse, body){
      if(err) {
        res.send('Error occured while creating the room on "' + serviceUrl + '"');
        return;
      }
      if(!JSON.parse(body) || !JSON.parse(body).url) {
        res.send('Error occured while creating the room, I cannot understand the server response');
        return;
      }
      res.send('Here is your code screen: ' + JSON.parse(body).url);
    });
  });

  robot.respond(/code infos$/, function(res) {
    if(pck.name && pck.description && pck.version) {
      res.send(pck.name + ' (v' + pck.version  + ') ' + pck.description);
    }
    res.send('Available languages: "' + availableLang.join('", "') + '"');
    if(pck.bugs && pck.bugs.url) {
      res.send('Please indly report any bug/suggestion on ' + pck.bugs.url);
    }
  });
};
