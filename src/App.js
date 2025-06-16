import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignIn from "./Component/SignIn";
import SignOut from "./Component/SignOut";
import Home from "./Component/Home";
import ProfilePage from "./Component/ProfilePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<SignIn />} />
        <Route path="/logout" element={<SignOut />} />
        <Route path="/home" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="*" element={<SignIn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
