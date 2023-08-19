//npm install express-async-handler
//No need to write try catch block to handle error once this package is installed and used
const asyncHandler=require('express-async-handler')
const Contact=require("../models/contactModel")

const getAllContacts = asyncHandler(async (req, res) => {
  const contacts=await Contact.find();
  res.status(200).json(contacts);
});

const getContactById =asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get Contact By ${req.params.id}` });
});

const createContact =asyncHandler(async (req, res) => {
    console.log(req.body)
    const {name,email,phone}=req.body
    if(!name || !phone || !email){
        res.status(400);
        throw new Error("Name field is mandatory")
    }
    const contact=await Contact.create({
      name,
      email,
      phone
    })
  res.status(201).json(contact);
});

const updateContact =asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact for ${req.params.id}` });
});

const deleteContact =asyncHandler(async (req,res)=>{
    res.status(200).json({"message":`Delete contact for ${req.params.id}`})})

module.exports = { getAllContacts, getContactById, createContact, updateContact,deleteContact };
