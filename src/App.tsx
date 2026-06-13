import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Home from './pages/Home';
import Certificates from './pages/Certificates';
import Dashboard from './pages/Dashboard';

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <div className="dotted-grid min-h-screen">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/certificates" element={<Certificates />} />
            <Route path="/dashboard" element={<Dashboard />} />
          </Routes>
          <Footer />
          <CommandPalette />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}