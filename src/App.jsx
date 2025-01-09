import { useState } from "react";
import Employee from "./components/Employee";
import { v4 as uuidv4 } from "uuid";
import Popup from "./components/Popup";
function App() {
  const emps = [
    {
      name: "John",
      role: "CEO",
      img: "https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "kai",
      role: "Manger",
      img: "https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Sara",
      role: "Product Manger",
      img: "https://images.pexels.com/photos/30124976/pexels-photo-30124976/free-photo-of-professional-woman-in-checkered-blazer-portrait.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Eman",
      role: "Sells Manger",
      img: "https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Ahmed",
      role: "S.Web Developer",
      img: "https://images.pexels.com/photos/2117283/pexels-photo-2117283.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
    {
      name: "Mai",
      role: "S.Mobile Dev",
      img: "https://images.pexels.com/photos/2169434/pexels-photo-2169434.jpeg?auto=compress&cs=tinysrgb&w=1200",
    },
  ];
  const [employees, setEmployees] = useState(emps);
  return (
    <div className="flex flex-wrap gap-4 py-8 px-5 bg-slate-200">
      {employees.map((employee) => (
        <Employee
          key={uuidv4()}
          name={employee.name}
          role={employee.role}
          img={employee.img}
        ></Employee>
      ))}
    </div>
  );
}
export default App;
