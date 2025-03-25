import './App.scss';
import UserTypesCarouselPage from "./pages/user_types_carousel_page";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<UserTypesCarouselPage />} />
      </Routes>
    </Router>
  )
  ;
}

export default App;

