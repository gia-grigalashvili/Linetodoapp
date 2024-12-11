import "./App.css";
import { Route, Routes } from "react-router-dom";

import SingInPage from "./pages/SingInPage";
import SingUpPage from "./pages/SingUpPage";
import LayoutUser from "./Layouts/LayoutUser";
import Layoutglobal from "./Layouts/Layoutglobal";
import Protecktroute from "./components/Protecktroute";
import HomePage from "./pages/HomePage";
import { MyProvider } from "./context/Context";

function App() {
  return (
    <MyProvider>
      <Routes>
        <Route element={<LayoutUser />}>
          <Route path="/signin" element={<SingInPage />} />
          <Route path="/signup" element={<SingUpPage />} />
        </Route>
        <Route element={<Protecktroute />}>
          <Route element={<Layoutglobal />}>
            <Route path="/" element={<HomePage />} />
          </Route>
        </Route>
      </Routes>
    </MyProvider>
  );
}

export default App;
