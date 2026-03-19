import React, { lazy, Suspense } from 'react';
import './index.css';

// Essential UI / Common (Directly imported for initial load)
import ProgressBar from './components/ui/ProgressBar';
import Cursor from './components/ui/Cursor';
import Navbar from './components/common/Navbar';
import Hero from './components/Hero';
import Footer from './components/common/Footer';
import Skeleton from './components/ui/Skeleton';

// Lazy loaded sections
const About = lazy(() => import('./components/About'));
const Projects = lazy(() => import('./components/Projects'));
const Services = lazy(() => import('./components/Services'));
const Contact = lazy(() => import('./components/Contact'));

export default function App() {
  return (
    <div className="app">
      <ProgressBar />
      <Cursor />
      <Navbar />
      <main>
        <Hero />
        <Suspense fallback={<Skeleton />}>
          <About />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <Projects />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <Services />
        </Suspense>
        <Suspense fallback={<Skeleton />}>
          <Contact />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
}
