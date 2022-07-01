import sgMail from "@sendgrid/mail";
import dotenv from "dotenv";
import generateMsg from "./generateMsg.js"

dotenv.config()

sgMail.setApiKey(process.env.MAIL_API_KEY);

const sendMsg = (mailTo, link) => {

    const msg = {
        to: mailTo,
        from: process.env.MAIL_ACCOUNT,
        subject: '[No-Reply] Mailp Registration Verification',
        text: 'Hello! Click the link below to verify your mailp account.\r\n\r\n' + link,
        html: '<h3>Hello!</h3><p>Click the link below to verify your mailp account.</p><p><a href="' + link + '">Verify</a></p><p>This is an auto-generated message. If you did not register on mailp, please do not click the link.</p>'
      };
      
      (async () => {
          try {
            await sgMail.send(msg);
          } catch (error) {
            console.error(error);
        
            if (error.response) {
              console.error(error.response.body)
            }
          }
        })();
}


export default sendMsg