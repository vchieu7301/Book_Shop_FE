
import ReactDOM from "react-dom/client";
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import LoginForm from "./Component/LoginForm"
import Dashboard from "./Component/Dashboard";

// const Login

function App() {

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<LoginForm />}>
        <Route index element={<Dashboard />} />
        
      </Route>
    </Routes>
    </BrowserRouter>
  
}

export default App;
