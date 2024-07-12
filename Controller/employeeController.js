const employee=require('../Models/employeeModel')

// add employee
exports.addEmployee=async(req,res)=>{
    console.log("Inside Add Employee request");
    console.log(req.payload);
    console.log(req.body);

    const {name,email,phonenumber} = req.body
    const userId = req.payload
    try {

        const existingProject = await employee.findOne({email})
        if (existingProject) {
            res.status(406).json("Employee already available in this Account,Kindly use another email")
        }
        else {
            const newEmployee = new employee({
                name,email,phonenumber,userId
            })
            await newEmployee.save()
            res.status(200).json(newEmployee)
        }
    }
    catch (err) {
        res.status(401).json(err)
    }
}

// get employee

exports.getUserEmployee=async(req,res)=>{
    const userId=req.payload
    try{
        const allEmployee=await employee.find({userId})
        res.status(200).json(allEmployee)
    }
    catch(err)
    {
        res.status(401).json(err)
    }
}


// edit employee
exports.editEmployee = async (req, res) => {
    console.log("Inside edit employee");
    const { pid } = req.params;
    const userId = req.payload;
    const { name, email, phonenumber } = req.body;
  
    try {
      const updatedEmployee = await employee.findByIdAndUpdate(
        pid,
        { name, email, phonenumber, userId },
        { new: true }
      );
      res.status(200).json(updatedEmployee);
    } catch (err) {
      res.status(401).json(err);
    }
  };

  // remove employee
  exports.removeEmployee = async (req, res) => {
    console.log("Inside remove employee");
    const { pid } = req.params;
    try {
      const EmployeeDetails = await employee.findByIdAndDelete(pid);
      res.status(200).json(EmployeeDetails);
    } catch (err) {
      res.status(401).json(err);
    }
  };

  // search employee

exports.searchEmployee = async (req, res) => {
    try {
        const name = req.query.name;
        const searchEmployee = await employee.find({ name: new RegExp(name, 'i') });
        res.status(200).json(searchEmployee);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};



