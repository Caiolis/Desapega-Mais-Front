import { GlobalStyle } from "./styles/GlobalStyles";
import { ChakraProvider } from '@chakra-ui/react'
import SplashPage from "./pages/SplashPage/SplashPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import SignupPage from "./pages/SignupPage/SignupPage.js";
import HomePage from "./pages/HomePage/HomePage";
import ProductDetailsPage from "./pages/ProductDetailsPage/ProductDetailsPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthContext from "./contexts/AuthContext";
import { useState } from "react";




export default function App() {
  const [token, setToken] = useState(localStorage.getItem("token"));

  return (
    <AuthContext.Provider value={{token, setToken}}>
      <ChakraProvider>
        <BrowserRouter>
          <GlobalStyle />

          <Routes>
            <Route path="/" element={<SplashPage />}/>
            <Route path="/login" element={<LoginPage />}/>
            <Route path="/signup" element={<SignupPage />}/>
            <Route path="/home" element={<HomePage />}/>
            <Route path="/products/:idProduct" element={<ProductDetailsPage />}/>
          </Routes>
        </BrowserRouter>
      </ChakraProvider>
    </AuthContext.Provider>
  );
}