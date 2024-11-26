module.exports = (app) => {
    const servicesController = require("../controller/serviceController.js")
    const requestsController = require("../controller/requestController.js")
    const membersController = require("../controller/memberController.js")

    //1.
    app.get('/allservices', servicesController.getAllServices)

    //2.
    app.get('/service/:type', servicesController.getServiceByType)

    //3.
    app.post('/service/:type/form', requestsController.createRequest)

    //4.
    app.post('/member', membersController.newMember)

    //5.
    app.post('/service/:type/calculate', requestsController.emiCalculator)

    //6.
    app.put('/updaterequest', requestsController.updateRequest)

    //7.
    app.put('/updatepassword', membersController.updatePassword)

    //8.
    app.delete('/deleterequest', requestsController.deleteRequest)

    //9.
    app.delete('/cancelmember', membersController.removeMember)
}