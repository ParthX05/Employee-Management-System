import React, { useState } from 'react'
import './AE.css';
import { useNavigate } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    id:"",
    name:"",
    phone:"",
    email:"",
  });

  const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value})
  }

  const saveEmployee = (e) =>{
    e.preventDefault();
    EmployeeService.saveEmployee(employee)
    .then((response) => {
      console.log("Saved", response);
      navigate("/")
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const reset = (e) =>{
    e.preventDefault();
    setEmployee({
      id:"",
      name:"",
      phone:"",
      email:"",
    });
  }

  const navigate = useNavigate();
  return (
     <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="glass-card p-5">
        <h2 className="text-center mb-4">Add Employee</h2>

        <input 
          onChange={(e)=>handleChange(e)}
          value={employee.id}
          name="id" type="number" placeholder="ID" className="form-control glass-input mb-3" />

        <input 
          onChange={(e)=>handleChange(e)}
          value={employee.name}
          name="name" type="text" placeholder="Name" className="form-control glass-input mb-3" />

        <input 
          onChange={(e)=>handleChange(e)}
          value={employee.phone}
          name="phone" type="number" placeholder="Phone No." className="form-control glass-input mb-3" />

        <input 
          onChange={(e)=>handleChange(e)}
          value={employee.email}
          name="email" type="email" placeholder="Email" className="form-control glass-input mb-4" />

        <div className="d-flex justify-content-between">
          <button 
            onClick={saveEmployee}
            className="glass-button">Save</button>

          <button 
            onClick={reset}
            className="glass-button">Clear</button>

          <button 
            onClick={()=> navigate("/")}
            className="glass-button">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default AddEmployee
