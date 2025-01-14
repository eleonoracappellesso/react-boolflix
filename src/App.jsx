// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import HomePage from "./pages/HomePage";

import { GlobalProvider } from "./contexts/GlobalContext";

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


{/* <GlobalProvider>
  <BrowserRouter>
    <Routes>
      <Route index Component={HomePage} />
    </Routes>
  </BrowserRouter>

</GlobalProvider> */}