const Customer = require("../models/customer");
const aqp = require('api-query-params');


const createCustomerService = async (customerData) => {
    console.log(">>> check customerData: ", customerData)
    try {
        let result = await Customer.create({
            name: customerData.name,
            address: customerData.address,
            phone: customerData.phone,
            email: customerData.email,
            description: customerData.description,
            image: customerData.image
        })
        return result;
    } catch (error) {
        console.log(error)
        return null
    }
}
const createarraycustomerservice = async (arr) => {
    try {
        let result = await Customer.insertMany(arr);
        return result;
    } catch (error) {
        console.log("error", error);
        return null;
    }
}
const getALLcustomerservice = async (limit, page, name, querystring) => {
    try {
        let result = null;
        if (limit && page) {
            let offset = (page - 1) * limit;
            const { filter } = aqp(querystring);
            delete filter.page;
            console.log(">>> check filter: ", filter);

            result = await Customer.find(filter).skip(offset).limit(limit).exec();
        } else {
            result = await Customer.find({});
        }

        return result;
    } catch (error) {
        console.log("check error: ", error);
        return null;
    }
}
const putupdatecustomerservice = async (id, name, email, address, phone) => {
    try {
        let result = await Customer.updateOne({ _id: id }, { name, email, address, phone });
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null
    }
}
const deleteacustomerservice = async (id) => {
    try {
        let result = await Customer.findByhoidanIT(id)
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null
    }
}
const deletearraycustomerservice = async (arrids) => {
    try {
        let result = await Customer.delete({ _id: { $in: arrids } });
        return result;
    } catch (error) {
        console.log(">>> check error: ", error);
        return null;
    }
}
module.exports = {
    createCustomerService, createarraycustomerservice, getALLcustomerservice,
    putupdatecustomerservice, deleteacustomerservice, deletearraycustomerservice
}