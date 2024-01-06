import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import Projects from './components/Projects'

function App() {
  return (
    <BrowserRouter>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App;
