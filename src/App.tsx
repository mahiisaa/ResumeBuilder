import "./App.css";
import { HomePage } from "./components/Homepage";
import { Dashboard } from "./components/Layouts/Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Progress } from "./components/Layouts/Progress";


const App = (): JSX.Element => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage/>}></Route>
          <Route path="/resumeProgress" element={<Progress/>}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
