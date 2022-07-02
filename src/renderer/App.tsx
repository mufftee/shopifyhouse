import { MemoryRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import Hub from 'pages/Hub';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Hub />} />
      </Routes>
    </Router>
  );
}
