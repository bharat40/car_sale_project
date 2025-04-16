import {BrowserRouter,Routes,Route} from"react-router-dom";
import SignupPage from "./pages/signup.js";
import LoginPage from "./pages/login.js";
import Home from "./pages/Home.jsx";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home />}/>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
