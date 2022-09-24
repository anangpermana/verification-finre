const nodemailer = require('nodemailer')

const transporter = nodemailer.createTransport({
		//host: "smtp.mailtrap.io",
    //port: 2525,
		service:"gmail",
    auth: {
      user: "finreapp@gmail.com",
      pass: "ytneeuifyjbkxhtg"
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