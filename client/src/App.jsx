import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Store from "./pages/Store";
import Success from "./components/Success";
import Cancel from "./components/Cancel";

function App() {
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<Store />} />
        </Route>
        <Route path="/success" element={<Success />} />
        <Route path="/cancel" element={<Cancel />} />
      </Routes>
    </>
  );
}

export default App;
