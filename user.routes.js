
const express=require("express");
const { userGet } = require("./user.controller");

const userRoutes=express.Router();

userRoutes.get("/",userGet)

module.exports={userRoutes}