import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import CustomCursor from './components/CustomCursor';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import PageTransition from './components/PageTransition';
import Home from './pages/Home';

// Lazy load secondary pages
const ProjectsPage = lazy(() => import('./pages/ProjectsPage'));

const NotFound = lazy(() => import('./pages/NotFound'));

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Suspense
        key={location.pathname}
        fallback={
          <div className="min-h-screen flex items-center justify-center">
            <div className="flex items-center gap-3 text-xs font-mono text-text-muted">
              <div className="flex gap-1">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-1.5 h-1.5 rounded-full bg-electric-indigo/50 animate-pulse"
                    style={{ animationDelay: `${i * 0.15}s` }}
                  />
                ))}
              </div>
              <span>Loading module...</span>
            </div>
          </div>
        }
      >
        <Routes location={location} key={location.pathname}>
          <Route
            path="/"
            element={
              <PageTransition>
                <Home />
              </PageTransition>
            }
          />
          <Route
            path="/projects"
            element={
              <PageTransition>
                <ProjectsPage />
              </PageTransition>
            }
          />
          <Route
            path="*"
            element={
              <PageTransition>
                <NotFound />
              </PageTransition>
            }
          />
        </Routes>
      </Suspense>
    </AnimatePresence>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <BrowserRouter>
        <Preloader />
        <CustomCursor />
        <div className="dotted-grid min-h-screen">
          <Navbar />
          <AnimatedRoutes />
          <Footer />
          <CommandPalette />
          <BackToTop />
        </div>
      </BrowserRouter>
    </ThemeProvider>
  );
}