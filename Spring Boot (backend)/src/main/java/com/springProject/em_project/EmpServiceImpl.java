package com.springProject.em_project;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.dao.DataIntegrityViolationException;

import java.util.ArrayList;
import java.util.List;

@Service
public class EmpServiceImpl implements EmpService {

    @Autowired
    private EmpRepository employeeRepository;

    @Override
    public String createEmployee(Employee employee) {
        EmpEntity empEntity = new EmpEntity();
        BeanUtils.copyProperties(employee, empEntity);

        try {
            employeeRepository.save(empEntity);
            return "Saved successfully";
        } catch (DataIntegrityViolationException e) {
            return "Error: ID already exists.";
        }
    }

    @Override
    public Employee readEmployee(int id){
        EmpEntity empEntity = employeeRepository.findById(id).get();
        Employee employee = new Employee();
        BeanUtils.copyProperties(empEntity, employee);
        return employee;
    }

    @Override
    public List<Employee> readEmployees() {
        List<EmpEntity> employeesList = employeeRepository.findAll();
        List<Employee> employees = new ArrayList<>();

        for(EmpEntity empEntity : employeesList){
            Employee emp = new Employee();
            emp.setId(empEntity.getId());
            emp.setName(empEntity.getName());
            emp.setPhone(empEntity.getPhone());
            emp.setEmail(empEntity.getEmail());
            employees.add(emp);
        }
        return employees;
    }

    @Override
    public boolean deleteEmployee(int id) {
        if (employeeRepository.existsById(id)) {
            employeeRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public String updateEmployee(int id, Employee employee) {
        EmpEntity existingEmployee = employeeRepository.findById(id).get();

        existingEmployee.setName(employee.getName());
        existingEmployee.setPhone(employee.getPhone());
        existingEmployee.setEmail(employee.getEmail());

        employeeRepository.save(existingEmployee);
        return "Updated successfully";
    }
}
