import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Profile from "./pages/Profile";
import SignIn from "./pages/SignIn"; // Correctly imported SignIn component
import SignUp from "./pages/SignUp"; // Correctly imported SignUp component

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/sign-in"
          element={<SignIn />} // Correctly used SignIn component
        />
        <Route
          path="/sign-up"
          element={<SignUp />} // Correctly used SignUp component
        />
        <Route
          path="/about"
          element={<About />}
        />
        <Route
          path="/profile"
          element={<Profile />}
        />
      </Routes>
    </BrowserRouter>
  );
}
