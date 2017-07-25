const sendSMS = require('./semaphore');
const config = require('./config');

sendSMS.SendSMS(config.apikey, config.number, config.message, config.sendername, (res)=> {
  console.log(res);
});
