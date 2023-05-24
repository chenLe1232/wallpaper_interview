
import './App.css'
import "@arco-design/web-react/dist/css/arco.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WallpaperIndex from '@/component/wallpaper'
import Wheel from '@/component/wheel'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WallpaperIndex />} />
        <Route path="/wheel" element={<Wheel />} />
      </Routes>
    </Router>
  );
}

export default App
