import React, { useState, useEffect } from 'react'
import './AE.css';
import { useNavigate, useParams } from 'react-router-dom';
import EmployeeService from '../services/EmployeeService'

const UpdateEmployee = () => {
  const {id} = useParams();

  const [employee, setEmployee] = useState({
    id:id,
    name:"",
    phone:"",
    email:"",
  });

  const handleChange = (e) =>{
    const value = e.target.value;
    setEmployee({...employee, [e.target.name]: value})
  }

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await EmployeeService.getEmployeeById(employee.id);
        setEmployee(response.data);
      } catch (error) {
        console.log(error);
      }        
    };
    fetchData();
  }, []);

  const updateEmployee = (e) =>{
    e.preventDefault();
    EmployeeService.updateEmployee(employee, id)
    .then((response) => {
      console.log("Saved", response);
      navigate("/")
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const navigate = useNavigate();
  return (
     <div className="d-flex justify-content-center align-items-center vh-100">
      <div className="glass-card p-5">
        <h2 className="text-center mb-4">Update Employee</h2>

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
            onClick={updateEmployee}
            className="glass-button">Update</button>

          <button 
            onClick={()=> navigate("/")}
            className="glass-button">Cancel</button>
        </div>
      </div>
    </div>
  )
}

export default UpdateEmployee
