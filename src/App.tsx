import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import { ThemeProvider } from './hooks/useTheme';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import CommandPalette from './components/CommandPalette';
import Preloader from './components/Preloader';
import BackToTop from './components/BackToTop';
import PageTransition from './components/PageTransition';
import CustomCursor from './components/CustomCursor';
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
            <div className="flex items-center gap-3 text-sm font-bold font-mono text-neo-text-muted">
              <div className="flex gap-1.5">
                {[0, 1, 2].map((i) => (
                  <span
                    key={i}
                    className="w-2.5 h-2.5 bg-neo-accent border-2 border-neo-border"
                    style={{
                      animation: `neo-bounce 0.6s ease-in-out ${i * 0.15}s infinite`,
                    }}
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
        <div className="min-h-screen relative">
          {/* Global Grid Background */}
          <div className="fixed inset-0 neo-grid-pattern pointer-events-none z-[-1]" />
          <div className="fixed inset-0 neo-dotted-grid pointer-events-none z-[-1]" />
          <CustomCursor />
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