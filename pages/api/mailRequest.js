import nodemailer from 'nodemailer'

export default function (req, res) {

  const myEmail = process.env.MYEMAIL
  const dummyEmail = process.env.DUMMYEMAIL
  
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      type: 'OAuth2',
      user: dummyEmail,
      pass: process.env.EMAILPASS,
    },
    secure: true,
  })

  const mailData = {
    from: dummyEmail,
    to: myEmail,
    subject: `PettMatt: Message From ${req.body.name} | subject "${req.body.subject}"`,
    text: req.body.message,
    html: <div>{req.body.message}</div>
  }

  transporter.sendMail(mailData, function (err, res) {
    if(err)
      console.log(err)
    else
      console.log(res)
  })

  // A way to tell browser that request has been ended successfully
  res.status(200)
}