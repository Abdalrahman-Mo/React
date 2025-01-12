import { useState } from "react";
import Employee from "../components/Employee";
import AddEmployee from "../components/AddEmployee";
import employeesDB from "../components/dbForEmployees";
function App() {
  const allEmployees = employeesDB;
  const [employees, setEmployees] = useState(allEmployees);
  const updateEmployee = (id, newName, newRole) => {
    const updatedEmployees = employees.map((employee) => {
      if (employee.id == id) {
        return { ...employee, name: newName, role: newRole };
      } else {
        return employee;
      }
    });
    setEmployees(updatedEmployees);
  };
  const lastEmpID = employees[employees.length - 1].id;
  const addEmployee = (name, role, img) => {
    setEmployees([
      ...employees,
      {
        id: lastEmpID + 1,
        name: name,
        role: role,
        img: img,
      },
    ]);
  };

  return (
    <div className="min-h-screen bg-slate-200">
      <div className="flex flex-wrap gap-4 py-8 px-5 ">
        {employees.map((emp) => (
          <Employee
            key={emp.id}
            id={emp.id}
            name={emp.name}
            role={emp.role}
            img={emp.img}
            updateEmployee={updateEmployee}
          />
        ))}
      </div>
      <AddEmployee addEmployee={addEmployee} />
    </div>
  );
}
export default App;
