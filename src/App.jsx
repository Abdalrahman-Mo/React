import { useState } from "react";
import Employee from "./components/Employee";
import AddEmployee from "./components/AddEmployee";
function App() {
  const [employees, setEmployees] = useState([
    {
      id: 1,
      name: "John",
      role: "CEO",
      img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 2,
      name: "kai",
      role: "Manger",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 3,
      name: "Sara",
      role: "Product Manger",
      img: "https://images.pexels.com/photos/30124976/pexels-photo-30124976/free-photo-of-professional-woman-in-checkered-blazer-portrait.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 4,
      name: "Eman",
      role: "Sells Manger",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 5,
      name: "Ahmed",
      role: "S.Web Developer",
      img: "https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      id: 6,
      name: "Mai",
      role: "S.Mobile Dev",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ]);
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
    console.log(lastEmpID + 1, name, role);
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
    <>
      <div className="flex flex-wrap gap-4 py-8 px-5 bg-slate-200">
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
    </>
  );
}
export default App;
