
import { Footer } from './components/Footer';
import { Header } from './components/Header';
import { Route, Routes } from "react-router-dom";
import { HomePage } from './pages/HomePage';
import { AboutPage } from './pages/AboutPage';
import { RegisterPage } from './pages/RegisterPage';
import { LoginPage } from './pages/LoginPage';
import { SchedulePage } from './pages/SchedulePage';

function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/schedule" element={<SchedulePage />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
