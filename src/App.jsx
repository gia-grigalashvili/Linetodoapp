import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import SingInPage from "./pages/SingInPage";
import SingUpPage from "./pages/SingUpPage";
import LayoutUser from "./Layouts/LayoutUser";

function App() {
  return (
    <Router>
      <Routes>
        <Route element={<LayoutUser />}>
          <Route path="/signin" element={<SingInPage />} />
          <Route path="/signup" element={<SingUpPage />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
