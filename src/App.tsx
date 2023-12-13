import "./App.css";
import { HomePage } from "./components/Homepage";
import { Dashboard } from "./components/Layouts/Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Progress } from "./components/Layouts/Progress";
import { Signup } from "./components/Signup";
import { Login } from "./components/Login";


const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage/>}></Route>
          <Route path="/resumeProgress" element={<Progress/>}>
          </Route>
          <Route path="/login" element={<Login/>}></Route>
          <Route path="/siginup" element={<Signup/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
