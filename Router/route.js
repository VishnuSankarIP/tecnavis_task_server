const express=require('express')
const userController=require('../Controller/userController.js')
const employeeController=require('../Controller/employeeController.js')
const router=new express.Router()
const jwtMiddleware = require('../Middleware/jwtMiddleware.js')

// register
router.post('/register',userController.register)

// add-project
router.post('/add-employee',jwtMiddleware,employeeController.addEmployee)

// get-employee
router.get('/get-employee',jwtMiddleware,employeeController.getUserEmployee)

// edit employee
router.put('/edit-employee/:pid',jwtMiddleware,employeeController.editEmployee)

// remove property
router.delete('/remove-employee/:pid',jwtMiddleware,employeeController.removeEmployee)

// search movie
router.get('/search', employeeController.searchEmployee);

// export router
module.exports=router 