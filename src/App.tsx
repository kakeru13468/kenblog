import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { LoadingAnimation } from './components/LoadingAnimation';
import { Navigation } from './components/Navigation';
import { Home } from './components/pages/Home';
import { About } from './components/pages/About';
import { Projects } from './components/pages/Projects';
import { ProjectDetail } from './components/pages/ProjectDetail';
import { Services } from './components/pages/Services';
import { Contact } from './components/pages/Contact';
import { Blog } from './components/pages/Blog';
import { BlogPost } from './components/pages/BlogPost';
import { ThemeProvider } from './components/ThemeProvider';

// 滾動到頂部的元件
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

// 主要內容元件
function AppContent() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  // 根據路徑判斷當前頁面
  const getCurrentPage = () => {
    const path = location.pathname;
    if (path === '/') return 'home';
    if (path.startsWith('/about')) return 'about';
    if (path.startsWith('/projects')) return 'projects';
    if (path.startsWith('/services')) return 'services';
    if (path.startsWith('/contact')) return 'contact';
    if (path.startsWith('/blog')) return 'blog';
    return 'home';
  };

  useEffect(() => {
    // Simulate loading
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingAnimation />;
  }

  return (
    <ThemeProvider>
      <div className="min-h-screen">
        <ScrollToTop />
        <Navigation currentPage={getCurrentPage()} />
        <main className="pt-20">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/projects/:id" element={<ProjectDetail />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:id" element={<BlogPost />} />
            {/* 404 - 重導向到首頁 */}
            <Route path="*" element={<Home />} />
          </Routes>
        </main>
      </div>
    </ThemeProvider>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}
