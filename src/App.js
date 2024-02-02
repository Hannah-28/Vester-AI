import './App.css';
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Form1 from './Pages/Form1';
import Form2 from './Pages/Form2';
import NotFound from './Pages/NotFound';

function App() {
  return (
    <>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/form-1" element={<Form1 />} />
      <Route path="/form-2" element={<Form2 />} />
      <Route path='*' element={<NotFound />}/>
    </Routes>
  </>
  );
}

export default App;
