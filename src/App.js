import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Api from './Components/Api'
import ApiSingleProduct from './Components/ApiSingleProduct';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Api />} />
        <Route path="/:id" element={<ApiSingleProduct />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
