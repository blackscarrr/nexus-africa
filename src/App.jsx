import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Home from './pages/Home';
import Community from './pages/Community';
import ActivityDetail from './pages/ActivityDetail';
import Nexart from './pages/Nexart';
import Artists from './pages/Artists';
import ArtistProfile from './pages/ArtistProfile';
import NexTech from './pages/NexTech';
import Curations from './pages/Curations';
import Media from './pages/Media';
import NotFound from './pages/NotFound';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/community/:slug" element={<ActivityDetail />} />
          <Route path="/nexart" element={<Nexart />} />
          <Route path="/artists" element={<Artists />} />
          <Route path="/artists/:slug" element={<ArtistProfile />} />
          <Route path="/nextech" element={<NexTech />} />
          <Route path="/curations" element={<Curations />} />
          <Route path="/media" element={<Media />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
