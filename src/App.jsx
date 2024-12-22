import "./App.css";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/ProtectedRoute";
import SingInPage from "./pages/SingInPage";
import SingUpPage from "./pages/SingUpPage";
import LayoutUser from "./Layouts/LayoutUser";
import Layoutglobal from "./Layouts/Layoutglobal";
import ThemeProvider from "./context/ThemeContext";
import HomePage from "./pages/HomePage";
import { MyProvider } from "./context/Context";
import { TodoProvider } from "./context/Todocontext";
import Results from "./components/Results";
import Important from "./components/Important";
import Complete from "./components/Complete";

function App() {
  return (
    <MyProvider>
      <ThemeProvider>
        <TodoProvider>
          <Routes>
            <Route element={<LayoutUser />}>
              <Route path="/signin" element={<SingInPage />} />
              <Route path="/signup" element={<SingUpPage />} />
            </Route>{" "}
            <Route element={<ProtectedRoute />}>
              <Route element={<Layoutglobal />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/results" element={<Results />} />
                <Route path="/important" element={<Important />} />
                <Route path="/complete" element={<Complete />} />{" "}
              </Route>
            </Route>
          </Routes>
        </TodoProvider>
      </ThemeProvider>
    </MyProvider>
  );
}

export default App;
