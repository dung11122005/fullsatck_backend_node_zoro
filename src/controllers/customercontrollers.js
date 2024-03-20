const { uploatsinglefile } = require('../services/fileservices');
const { createCustomerService, createarraycustomerservice, getALLcustomerservice,
    putupdatecustomerservice, deleteacustomerservice, deletearraycustomerservice
} = require('../services/customerservices');
//{key: value}
module.exports = {
    postcreatercustomer: async (req, res) => {

        let { name, address, phone, email, image, description } = req.body;//let name = req.bode.name

        let imageUrl = "";

        if (!req.files || Object.keys(req.files).length === 0) {
            // do notthing
        } else {
            let result = await uploatsinglefile(req.files.image);
            imageUrl = result.path;
        }

        let customerData = {
            name,
            address,
            phone,
            email,
            description,
            image: imageUrl
        }
        let customer = await createCustomerService(customerData);

        return res.status(200).json(
            {
                EC: 0,
                data: customer
            }
        )
    },
    postcreaterarraycustomer: async (req, res) => {
        let customers = await createarraycustomerservice(req.body.customers);
        if (customers) {
            return res.status(200).json(
                {
                    EC: 0,
                    data: customers
                }
            )
        } else {
            return res.status(200).json(
                {
                    EC: -1,
                    data: customers
                }
            )
        }
    },
    getALLcustomer: async (req, res) => {
        let result = await getALLcustomerservice();
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    },
    putupdatecustomer: async (req, res) => {
        let { id, name, email, address, phone } = req.body;
        let result = await putupdatecustomerservice(id, name, email, address, phone);
        return res.status(200).json(
            {
                EC: 0,
                date: result
            }
        )
    },
    deleteacustomer: async (req, res) => {
        let id = req.body.id;
        let result = await deleteacustomerservice(id);
        return res.status(200).json(
            {
                EC: 0,
                date: result
            }
        )
    },
    deletearraycustomer: async (req, res) => {
        let ids = req.body.customersID;
        let result = await deletearraycustomerservice(ids);
        return res.status(200).json(
            {
                EC: 0,
                data: result
            }
        )
    }
}