import "./App.css";
import { HomePage } from "./pages/Homepage";
import { Dashboard } from "./components/Layouts/Dashboard";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import { Progress } from "./components/Layouts/Progress";
import { Login } from "./pages/Login";
import { Templates } from "./pages/Templates";
import { DefaultTemp } from "./pages/Templates/DefaultTemp";
import { store } from "./redux/store";
import { Provider } from "react-redux";




const App = (): JSX.Element => {
  
  return (
    <Provider store={store}>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Dashboard />}>
          <Route index element={<HomePage />}></Route>
          <Route path="/templates" element={<Templates />}> </Route>
          <Route path="/1" element={<DefaultTemp />}></Route>
         
          <Route path="/resumeProgress" element={<Progress />}></Route>
        </Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
    </BrowserRouter>
    </Provider>
  );
};

export default App;
