const resSend = (res, error, data, message) => {
    res.send({error, data, message});
}

const userDb = require("../schemas/userSchema");
const serviceDb = require("../schemas/servicesSchema");

module.exports = {
    addNewService: async (req, res) => {
        const {name, price, description} = req.body;
        const service = new serviceDb({
            name,
            price: Number(price),
            description
        });
        try {
            await service.save();
            resSend(res, false, null, null);
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
    },
    deleteService: async (req, res) => {
        const {id} = req.params
        try {
            const serviceToDelete = await serviceDb.findOneAndDelete({_id : id});
            if (serviceToDelete) {
                resSend(res, false, null, 'Membership deleted');
            } else {
                resSend(res, true, null, 'Deletion failed');
            }
        } catch (err) {
            resSend(res, true, null, 'Server error');
        }
    },
    addNewUser: async (req, res) => {
        const {name, surname, email, service_id} = req.body;
        const user = new userDb({
            name,
            surname,
            email,
            service_id
        })
        try {
            await user.save();
            resSend(res, false, null, null);
        } catch (err) {
            resSend(res, true, null, 'Failed to save')
        }
    },
    getAllUsers: async (req, res) => {
        try {
            const allUsers = await userDb.find();
            resSend(res, false, allUsers, null);
        } catch (err) {
            resSend(res, true, null, 'Server error')
        }
    }
}