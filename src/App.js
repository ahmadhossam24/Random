import './App.css';
import SpinPage from "./pages/spin_page";
import { SpinProvider } from "./context/spin_context";

function App() {
  return (
  <SpinProvider>
    <SpinPage />
  </SpinProvider>
  )
  ;
}

export default App;

