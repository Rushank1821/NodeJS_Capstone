const Services = require("../models/serviceModel.js")

//"/allservices"
exports.getAllServices = async (req, res) => { 
    try {
        const services = await Services.find();
        res.status(200).send(services);
    } catch (err) {
        console.err('Error occured! Failed to fetch services');
        res.status(500);
    }
}

//"/service/:type"
exports.getServiceByType = async (req, res) => {
    try {
        const service = await Services.find({type: req.params.type})
        if (!service) {
            return res.status(404).send({ error: 'Error occured! Service not found' });
        }
        res.status(200).send(service);
    } catch (error) {
        res.status(500).send({ error: 'Error occured! Failed to fetch service' });
    }
}


