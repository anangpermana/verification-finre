const nodemailer = require('nodemailer')
require('dotenv').config()
const transporter = nodemailer.createTransport({
		//host: "smtp.mailtrap.io",
    //port: 2525,
		service: process.env.SERVICE_EMAIL,
    auth: {
      user: process.env.USER_EMAIL,
			pass: process.env.PASS_EMAIL,

    }
})

const kirimEmail = (email, subject, text) => {
	const mailOptions = {
		from: 'Finre <noreply@finre.com>',
		to: email,
		subject: subject,
		html:`
		<p>Please enter this verification code</p>
		<p style="font-size:32px"><b>${text}</b></p>
		<p style="margin-top: 20px">Thank,</p>
		<p><b>Finre</b></p>
		`
	}

	return new Promise((resolve, reject) => {

		transporter.sendMail(mailOptions, (err, info) => {
			if(err){
				reject(err)
			}else{
				resolve(info)
			}
		})

	})
}

module.exports = kirimEmail