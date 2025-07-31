package com.springProject.em_project;

import java.util.List;

public interface EmpService {
    String createEmployee(Employee employee);

    List<Employee> readEmployees();

    Employee readEmployee(int id);

    boolean deleteEmployee(int id);

    String updateEmployee(int id, Employee employee);
}
