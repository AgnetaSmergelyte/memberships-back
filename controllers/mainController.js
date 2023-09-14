const resSend = (res, error, data, message) => {
    res.send({error, data, message});
}

const userDb = require("../schemas/userSchema");
const serviceDb = require("../schemas/servicesSchema");

module.exports = {
    addNewService: async (req, res) => {
        const {name, price, description} = req.body;
        console.log(name, price, description)
        const service = new serviceDb({
            name,
            price: Number(price),
            description
        });
        console.log(service)
        try {
            await service.save();
            resSend(res, false, service, null);
        } catch (err) {
            resSend(res, true, null, 'Failed to save')
        }
    },
    getAllServices: async (req, res) => {
        try {
            const allServices = await serviceDb.find();
            resSend(res, false, allServices, null);
        } catch (err) {
            resSend(res, true, null, 'Server error')
        }
    }
}