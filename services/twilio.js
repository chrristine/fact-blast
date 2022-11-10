
const twilio = require('twilio');

const accountSid = process.env.TWILIO_ACCOUNT_SID; 
const authToken = process.env.TWILIO_AUTH_TOKEN; 
const christinePhoneNum = process.env.XT_PHONE_NUM;
const twilioPhoneNum = process.env.TWILIO_PHONE_NUM;


const client = new twilio(accountSid, authToken);

const sendMessage = () => {
  return (
    client.messages
      .create({
        body: 'Hello from Node',
        to: `+${christinePhoneNum}`, // Text this number
        from: `+${twilioPhoneNum}`, // From a Twilio number
      })
      .then((message) => console.log(message.sid))
  )
}


