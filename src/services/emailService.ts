import * as nodemailer from 'nodemailer'
import config from '../config'
import { IMail, IMailRecord } from '../types'
import fakeDBService from './fakeDBService'
import SMTPTransport from 'nodemailer/lib/smtp-transport'

const sendEmail = () => {
  const mailRecords = fakeDBService.getMails()

  if (mailRecords.length > 0) {
    let mailContent = ''
    mailRecords.forEach((m: IMailRecord) => {
      mailContent += '\n======== Start ========'
      mailContent += '\nName: ' + m.name
      mailContent += '\nAddress: ' + m.address
      mailContent += '\nWish: ' + m.wish
      mailContent += '\n======== End ========='
    })

    const mail: IMail = {
      from: 'do_not_reply@northpole.com',
      to: 'santa@northpole.com',
      subject: 'Wish Letters to Santa',
      text: mailContent,
    }

    const transporter = nodemailer.createTransport({
      host: 'smtp.ethereal.email',
      port: 587,
      auth: {
        user: 'judd21@ethereal.email',
        pass: 'SCgzsqguXn9cFA61ZB',
      },
    })

    // Send the email
    transporter.sendMail(mail, (err, info) => {
      if (err) {
        console.error('Error sending email:', err);
      } else {
        console.log('Messages sent successfully! Preview URL for mail: => \n', nodemailer.getTestMessageUrl(info as SMTPTransport.SentMessageInfo));
      }
    });

    fakeDBService.deleteMails()
  }
}

export default {
  sendEmail
}
