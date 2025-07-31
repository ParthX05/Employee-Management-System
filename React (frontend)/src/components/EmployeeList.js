import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import EmployeeService from '../services/EmployeeService';

const EmployeeList = () => {

    const [loading, setLoading] = useState(true);
    const [employees, setEmployees] = useState(null);

    useEffect(() => {
      const fetchData = async () => {
        setLoading(true);
        try {
          const response = await EmployeeService.getEmployees();
          setEmployees(response.data);
        } catch (error) {
          console.log(error);
        }        
        setLoading(false);
      };
      fetchData();
    }, []);

    const deleteEmployee = (e, id) => {
      e.preventDefault();
      EmployeeService.deleteEmployeeById(id)
      .then(() => {
        if(employees){
          setEmployees((prevElement) => {
            return prevElement.filter((employee) => employee.id !== id);
          })
        }
      })   
    };

    const editEmployee = (e, id) => {
      e.preventDefault();
      navigate(`/editEmployee/${id}`)
    };

    const navigate = useNavigate();
  return (
    <div class="container">
        <div>
          <button 
            onClick={()=> navigate("/addEmployee")}
            class="glass-button">Add Employee</button>
        </div>
        <div>
          <table>
            <thead>
              <tr>
                <th>ID</th>
                <th>NAME</th>
                <th>PHONE NO</th>
                <th>EMAIL</th>
                <th>ACTION</th>
              </tr>
            </thead>
            {!loading && (
              <tbody>
                {employees.map((employee) => ( 
                  <tr key={employee.id}>
                    <td>{employee.id}</td>
                    <td>{employee.name}</td>
                    <td>{employee.phone}</td>
                    <td>{employee.email}</td>
                    <td>
                      <a 
                        onClick={(e) => editEmployee(e, employee.id)}
                        class="action-link edit-link">Edit</a>
                      <a 
                        onClick={(e) => deleteEmployee(e, employee.id)}                      
                        class="action-link delete-link">Delete</a>
                    </td>
                  </tr>
                ))}
              </tbody>
            )}
          </table>
        </div>
    </div>
  )
}

export default EmployeeList
