
import './App.css'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import WallpaperIndex from '@/component/wallpaper';
import Wheel from '@/component/wheel';
import NotFound from '@/component/notFound';


function App() {

  return (
    <Router>
      <Routes>
        {/*严格匹配 */}
        <Route path="/" element={<WallpaperIndex />} />
        <Route path="/wheel" element={<Wheel />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App
