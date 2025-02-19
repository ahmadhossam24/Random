import './App.css';
import SpinPage from "./pages/spin_page";
import { SpinProvider } from "./context/spin_context";
import PrepareTablesPage from './pages/prepare_tables_page';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <SpinProvider>
      <Router>
        <Routes>
          <Route path='/' element={<SpinPage />} />
          <Route path='/prepare-table' element={<PrepareTablesPage />} />
        </Routes>
      </Router>
    </SpinProvider>
  )
  ;
}

export default App;

