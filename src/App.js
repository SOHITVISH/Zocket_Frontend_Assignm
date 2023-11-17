import './App.css';
import Campaign from './components/campaign';
import Dashboard from './components/Navbar/dashboard';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
     <div style={{ marginBottom: "4rem" }}>
      <Dashboard>
        <Routes>
          <Route path="*" element={<Navigate to='/campaign' />}/>
          <Route path="/campaign" element={<Campaign />} />
        </Routes>
      </Dashboard>
      </div>
    </BrowserRouter>
  );
}

export default App;
