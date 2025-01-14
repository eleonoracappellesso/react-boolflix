//import { BrowserRouter, Routes, Route } from "react-router-dom";

//import { useState, useEffect } from "react";

import { GlobalContext, GlobalProvider } from "./contexts/GlobalContext";

import HeaderComponent from "./components/HeaderComponent";
import MainComponent from "./components/MainComponent";



function App() {

  return (
    <GlobalProvider>
      <HeaderComponent />
      <MainComponent />
    </GlobalProvider>
  )
}

export default App;
