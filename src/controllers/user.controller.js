const User = require('../models/user.model.js')
const kirimEmail = require('../utility/mail.js')

const create = async (req ,res) => {
  const getRandomPin = (chars, len)=>[...Array(len)].map(
    (i)=>chars[Math.floor(Math.random()*chars.length)]
  ).join('');
  
    const code = getRandomPin('0123456789', 6)

    const data = new User({
      name: req.body.name,
      email: req.body.email,
      code: code
    })
    // res.status(200).json({data: data})
    try {
      kirimEmail(req.body.email, `${code} is your Finre Verification Code`, code).then(async(response) => {
        const dataToSave = await data.save();
        res.status(200).json({status:true, data:response});

      }).catch(err => {
        res.status(500).json({status:false,data:err})
      })

    } catch (error) {
      res.status(400).json({message: error.message})
    }
}

const verification = async(req, res) => {
  const {code} = req.body
  try {
    const data = await User.findOne({code: code}).exec()
    // res.status(200).json(data)

    if(data !== null) {
      if(data.code === code) {

        res.status(200).json({status:true,data:data})
      }
    }else{
  
      res.status(404).json({status:false})
    }
  } catch (error) {
    res.status(400).json({message: error.message})
    
  }

  // res.status(200).json(code)
}

const user = (req, res) => {
    User.find()
    .then(result => res.status(200).json({result}))
    .catch(error => res.status(500).json({msg: error}))
}
module.exports = {
    create,
    verification,
    user
}