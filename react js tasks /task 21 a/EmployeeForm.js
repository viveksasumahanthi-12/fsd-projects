import React, { useState } from "react";
import "./EmployeeForm.css";

const EmployeeForm = () => {
  const [employees, setEmployees] = useState([
    { name: "John Doe", age: 30, salary: 50000, designation: "Manager" },
    { name: "Jane Smith", age: 25, salary: 40000, designation: "Developer" },
    { name: "Mike Johnson", age: 28, salary: 45000, designation: "Designer" }
  ]);

  const [newEmployee, setNewEmployee] = useState({
    name: "",
    age: "",
    salary: "",
    designation: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewEmployee({ ...newEmployee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newEmployee.name || !newEmployee.age || !newEmployee.salary || !newEmployee.designation) {
      alert("Please fill all fields!");
      return;
    }
    setEmployees([...employees, newEmployee]);
    setNewEmployee({ name: "", age: "", salary: "", designation: "" });
  };

  return (
    <div className="employee-container">
      <h2>Employee Data</h2>

      {/* Form to add new employee */}
      <form className="employee-form" onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={newEmployee.name}
          onChange={handleChange}
        />
        <input
          type="number"
          name="age"
          placeholder="Age"
          value={newEmployee.age}
          onChange={handleChange}
        />
        <input
          type="number"
          name="salary"
          placeholder="Salary"
          value={newEmployee.salary}
          onChange={handleChange}
        />
        <input
          type="text"
          name="designation"
          placeholder="Designation"
          value={newEmployee.designation}
          onChange={handleChange}
        />
        <button type="submit">Add Employee</button>
      </form>

      {/* Employee Table */}
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Salary</th>
            <th>Designation</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={index}>
              <td>{emp.name}</td>
              <td>{emp.age}</td>
              <td>${emp.salary}</td>
              <td>{emp.designation}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeForm;
