const { uploatsinglefile } = require('../services/fileservices');
const { createCustomerService,
    createarraycustomerservice
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
    }
}