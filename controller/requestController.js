const Requests = require('../models/requestModel');

//"service/:type/form"
exports.createRequest = async (req, res) => {
  try {
    if (!req.body){
      return res.status(400).send({ message: "Body cannot be empty." });
    }
      
    const newRequest = new Requests({
      mobile: req.body.mobile,
      email: req.body.email,
      amt: req.body.amt,
      type: req.body.type,
      msg: req.body.msg,
      code: req.body.code,
    });

    await newRequest.save()
    .then((data) => {
      res.status(201).send({ message: 'Request created successfully', request: newRequest });
    });
  } catch (err) {
    console.err("Error occure!");
    res.status(500).send({ message: err.message });
  }
};


//"/service/:type/calculate"
exports.emiCalculator = (req, res) => {
  const { amt, tenure} = req.body;
  const type = req.params.type
  try {
    if (!req.body) {
      res.status(400).send("All fields are mandatory.");
    }

    if (type === "Credit Card") {
      res.status(200).json(((amt * tenure) / 100) * 12);
    } else if (type === "studyloan") {
      res.status(200).send(((amt * tenure) / 100) * 16);
    }
  } catch (err) {
    console.err("Error occured! EMI not calculated.");
    res.status(500).send({ error: err.message });
  }
};

//"/updaterequest"
exports.updateRequest = async (req, res) => {
  if (!req.body) {
    return res.status(400).send({ message: "Data is mandatory." });
  }
  try {
    const { code } = req.body;
    const updatedRequest = await Requests.findOneAndUpdate(
        { code: code },
        req.body,
        {
            new: true,
            runValidators: true,
        }
    );
    if (!updatedRequest) {
        return res.status(404).json({ message: "Request not found" });
    }
    res.status(200).send(updatedRequest);
  } catch (err) {
    console.err("Error occurred!", err.message);
    res.status(500).send({ message: "Error occurred!", error: err.message });
  }
};

//"/deleterequest"
exports.deleteRequest = async (req, res) => {
  try {
    const mobile = req.body.mobile;

    if (!mobile) {
      return res.status(400).send({ message: "Mobile number is mandatory." });
    }

    const deletedRequest = await Requests.findOneAndDelete({ mobile: mobile });
    if (!deletedRequest) {
      return res.status(404).send({ message: "No such mobile number found!" });
    }

    res.status(200).send({ message: "Request deleted successfully.", data: deletedRequest });
  } catch (err) {
    console.err("Error occurred!", err);
    res.status(500).send({ message: err.message });
  }
};

























