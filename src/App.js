import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import SalesComponenet from "./component/SalesComponenet";
import Layout from "./component/Layout";
import Dashboard from "./component/Dashboard";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="sales" element={<SalesComponenet />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
