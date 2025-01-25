import Navbar from "./components/Navbar";
import Employees from "./pages/Employees";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
export default function App() {
  return (
    <>
      <Router>
        <Navbar>
          <Routes>
            <Route path="/" element={<Employees />} />
            <Route path="/employees" element={<Employees />} />
          </Routes>
        </Navbar>
      </Router>
    </>
  );
}
