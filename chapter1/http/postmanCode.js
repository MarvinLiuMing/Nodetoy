// var request = require("request");

// var options = { method: 'POST',
//   url: 'http://dprmlocws1/Reports/Pages/Report.aspx',
//   qs: { ItemPath: '%2fOTPReports%2fCaptureUploadingReport' },
//   headers: 
//    { 'postman-token': 'c1c1eac6-bc4d-c31a-e787-de5bfc714196',
//      'x-microsoftajax': 'Delta=true',
//      'user-agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/54.0.2840.99 Safari/537.36',
//      referer: 'http://dprmlocws1/Reports/Pages/Report.aspx?ItemPath=%2fOTPReports%2fCaptureUploadingReport',
//      origin: 'http://dprmlocws1',
//      host: 'dprmlocws1',
//      'content-type': 'application/x-www-form-urlencoded; charset=UTF-8',
//      'content-length': '6429',
//      connection: 'keep-alive',
//      'cache-control': 'no-cache',
//      'accept-language': 'en-US,en;q=0.8',
//      'accept-encoding': 'gzip, deflate',
//      accept: '*/*' } };

// request(options, function (error, response, body) {

//   console.log('Status: '+response.statusCode)
//   console.log('Status: '+JSON.stringify(response.headers))
  
//   if (error) throw new Error(error);

//   console.log(body);
// });
var request = require("request");

var options = { method: 'GET',
  url: 'http://Reports/Pages/Report.aspx',
  qs: { ItemPath: '%2fOTPReports%2fCaptureUploadingReport' },
  language:'en-US',
  headers: 
   { 'postman-token': 'ed6e4b24-bffb-ac74-8714-ef124cf7abd1',
     'cache-control': 'no-cache',
     host: 'dprmlocws1',
     connection: 'Keep-Alive',
     authorization: 'NTLM TlRMTVNTUAADAAAAGAAYAIQAAACOAY4BnAAAAA4ADgBYAAAAEAAQAGYAAAAOAA4AdgAAAAAAAAAqAgAABYKIogoAOTgAAAAPze5to4ZWTS/AyYF8fuUnL0YAQQBSAEUAQQBTAFQAdgAtAG0AbgBnAGwAaQB1AEwASQBVAE0ASQBOAEcAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAbnAynDI83VguyS4Bd9X8OQEBAAAAAAAAJy084B5R0gGJkiNGJ01GxDAAMAACAA4AUgBFAEQATQBPAE4ARAABABQARABQAFIATQBMAE8AQwBXAFMAMQAEADQAcgBlAGQAbQBvAG4AZAAuAGMAbwByAHAALgBtAGkAYwByAG8AcwBvAGYAdAAuAGMAbwBtAAMASgBEAFAAUgBNAEwATwBDAFcAUwAxAC4AcgBlAGQAbQBvAG4AZAAuAGMAbwByAHAALgBtAGkAYwByAG8AcwBvAGYAdAAuAGMAbwBtAAUAJABjAG8AcgBwAC4AbQBpAGMAcgBvAHMAbwBmAHQALgBjAG8AbQAHAAgAJy084B5R0gEGAAQAAgAAAAgAMAAwAAAAAAAAAAEAAAAAIAAAVDd0jwC8W/WcPrzZvcD0nLjoTSsokunETX5jSyF/7G8KABAAAAAAAAAAAAAAAAAAAAAAAAkAHgBIAFQAVABQAC8AZABwAHIAbQBsAG8AYwB3AHMAMQAAAAAAAAAAADKFHQI=',
     'x-p2p-peerdistex': 'MinContentInformation=1.0, MaxContentInformation=2.0',
     'x-p2p-peerdist': 'Version=1.1',
     'user-agent': 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 10.0; WOW64; Trident/7.0; .NET4.0C; .NET4.0E; .NET CLR 2.0.50727; .NET CLR 3.0.30729; .NET CLR 3.5.30729)',
     'accept-language': 'en-US,en;q=0.8,zh-Hans-CN;q=0.5,zh-Hans;q=0.3',
     'accept-encoding': 'gzip, deflate, peerdist',
     accept: 'image/gif, image/jpeg, image/pjpeg, application/x-ms-application, application/xaml+xml, application/x-ms-xbap, */*' } };

request(options, function (error, response, body) {
  if (error) throw new Error(error);

  console.log(body);
});
