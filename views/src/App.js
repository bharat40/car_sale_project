
import {BrowserRouter,Routes,Route} from"react-router-dom";
import SignupPage from "./pages/signup.js";
import LoginPage from "./pages/login.js";
import Home from "./pages/Home.jsx";
import UserManagement from "./pages/UserManagement";
import CarManagement from "./pages/CarManagement";
function App() {
  return (
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      <Route path="/admin/users" element={<UserManagement />} />
        <Route path="/admin/cars" element={<CarManagement />} />
     </Routes>
     </BrowserRouter>
)

export default App;
