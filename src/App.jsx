import "./App.css";
import Login from "./components/Auth/Login";
import EmployeeDash from "./components/Dashboard/EmployeeDashboard.jsx";
import AdminDash from "./components/Dashboard/AdminDash.jsx";
import { useContext, useEffect, useState } from "react";
import { setLocalStorage } from "./utils/localstorage.jsx";
import { getLocalStorage } from "./utils/localstorage.jsx";
import { AuthContext } from "./context/AuthProvider.jsx";
function App() {

  const [user, setuser] = useState(null);
  const [loggedInUserData, setloggedInUserData] = useState(null);
  
  const authData = useContext(AuthContext);
  
  useEffect(() => {
    const loggedInUser =JSON.parse(localStorage.getItem('loggedInUser'));
    if (loggedInUser) {
      setuser(loggedInUser.role);
      setloggedInUserData(loggedInUser);
    }
  }, []);

  
  const handleLogin = (email, password) => {
    if (authData) {
      const adminData = authData.admin.find((e) => email === e.email && password === e.password);
      const employee = authData.employees.find((e) => email === e.email && password === e.password);
    
      if (adminData) {
        const adminWithRole = { ...adminData, role: 'admin' };
        localStorage.setItem('loggedInUser', JSON.stringify(adminWithRole));
        setloggedInUserData(adminWithRole);
        setuser('admin');
      } else if (employee) {
        const employeeWithRole = { ...employee, role: 'employee' };
        localStorage.setItem('loggedInUser', JSON.stringify(employeeWithRole));
        setloggedInUserData(employeeWithRole);
        setuser('employee');
      } else {
        alert('Invalid Credentials');
      }
    }
  };
  
  return (
    <>
      {!user && <Login handleLogin={handleLogin} />}
      {user === 'admin' && <AdminDash changeUser={setuser} value={loggedInUserData} />}
      {user === 'employee' && <EmployeeDash value={loggedInUserData} changeUser={setuser} />}
    </>
  );
};  

export default App;
