import './App.css';
import Greeting from './components/Greeting';
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path="/" element={<h1>Home</h1>} />
      <Route path="/greet" element={<Greeting greeting="hi" />} />
    </Routes>
  );
}

export default App;
