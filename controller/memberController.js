const Member = require('../models/memberModel');

//"/member"
module.exports.newMember=async (req, res) => {
  try {
    if(!req.body){
      return res.status(400).send({message: "All fields are mandatory."});
    }
    const newMember = new Member({
        mobile: req.body.mobile,
        email: req.body.email,
        occupation: req.body.occupation,
        createpassword: req.body.createpassword
    })
    await newMember.save();
    res.status(201).send({ message: 'New member added successfully' });
  } catch (err) {
    res.status(500).send({ error: err.message });
  }
};

  //"/updatepassword"
  module.exports.updatePassword= async(req, res) => {
    try {
      const mobile = req.body.mobile; 
      const newPassword = req.body.password
      const updatedPassword = await Member.findOneAndUpdate({mobile: mobile} ,{createpassword: newPassword},{
        new: true,
        runValidators: true,
      });
      if (!updatedPassword) {
        return res.status(404).send({ message: "Member not found" });
      }
      res.status(200).send(updatedPassword);
      res.send({ message: 'Password updated.' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }

  //"/cancelmember"
  module.exports.removeMember=async (req, res) => {
    try {
      const mobile = req.body.mobile;
    if (!mobile) {
      return res.status(400).send({ message: "Mobile number is mandatory." });
    }
      const removeMember = await Member.findOneAndDelete({ mobile: mobile });
      // const deletedMember = await Member.findByIdAndDelete(req.body.mobile);
      if (!removeMember) {
        return res.status(404).send({ error: 'Member not found' });
      }
      res.send({ message: 'Membership cancelled.' });
    } catch (err) {
      res.status(500).send({ error: err.message });
    }
  }