import {BrowserRouter,Routes,Route} from"react-router-dom";
import SignupPage from "./pages/signup";
import LoginPage from "./pages/login";
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
      <Route path="/signup" element={<SignupPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  );
}

export default App;
