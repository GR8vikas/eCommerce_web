import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Header from "./componetns/Header";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path={"/"} exact={true} element={<Dashboard />}></Route>
          <Route
            path={"/dashboard"}
            exact={true}
            element={<Dashboard />}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
