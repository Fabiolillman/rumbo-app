// import { query } from "./db";

// export const getEmployees = async () => {
//     const sqlQuery = `SELECT * FROM public.employees`;
//     return await query(sqlQuery);
// };


import Mongoose from "mongoose";
// import EmployeeModel, {EmployeeType} from "./model/employee"
export const getEmployees = async () => {
    // const newEmployee = new EmployeeModel(employee);
    // await newEmployee.save()
//   return newEmployee
  return Mongoose.model("employee").find()
};
