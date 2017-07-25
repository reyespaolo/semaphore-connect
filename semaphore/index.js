var request = require('request');

const SendSMS = (apiKey,number,message,sendername,callback) => {

request.post({
  url:     'http://api.semaphore.co/api/v4/messages',
  form:    { apikey: apiKey, number:number,message:message,sendername:sendername  }
}, function(error, response, body){
  callback(body)
});

}

module.exports = {
  SendSMS: SendSMS,
};
