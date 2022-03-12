const sanitizeHtml = require('sanitize-html')
const mail = require('@sendgrid/mail')
mail.setApiKey(process.env.SENDGRID_API_KEY)

async function emailResponse(req, res) {
  const body = JSON.parse(req.body)

  const message = `
    Name: ${sanitizeHtml(body.name)}\r\n
    Email: ${body.email}\r\n
    Message: ${sanitizeHtml(body.message)}
  `

  const data = {
    to: 'petterimattila4@outlook.com',
    from: {
      name: 'PettMatt',
      email: 'hey@pettmatt.com'
    },
    subject: `New message send by ${body.name} [pettmatt.com]`,
    text: message,
    html: message.replace(/\r\n/g, '<br>'),
  }

  await mail.send(data).then(() => {
    res.status(200).json({ status: 'Ok' })
  })
}

export default emailResponse