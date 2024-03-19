const Customer = require("../models/customer");

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
const getALLcustomerservice = async () => {
    try {
        let result = await Customer.find({});
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

module.exports = {
    createCustomerService,
    createarraycustomerservice, getALLcustomerservice, putupdatecustomerservice
}