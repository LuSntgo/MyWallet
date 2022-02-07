import { useState } from "react";
import UserContext from "./contexts/UserContext";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import HomePage from "./components/HomePage";
import LoginPage from "./components/LoginPage";
import SignUpPage from "./components/SignUpPage";
import Deposit from "./components/Deposit";
import Withdraw from "./components/Withdraw";

export default function App() {
  const [user, setUser] = useState("");

  return (
    <UserContext.Provider value={{ user, setUser }}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route path="/sign-up" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/home/deposit" element={<Deposit />} />
          <Route path="/home/withdraw" element={<Withdraw />} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
  );
}
