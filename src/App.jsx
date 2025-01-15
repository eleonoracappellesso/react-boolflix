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
