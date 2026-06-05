/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import FeaturedProject from './components/FeaturedProject';
import Skills from './components/Skills';
import Projects from './components/Projects';
import GithubActivity from './components/GithubActivity';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <main className="min-h-screen bg-white text-[#0a192f] font-sans selection:bg-emerald-500/20">
      <Navbar />
      <div className="pt-12">
        <Hero />
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 px-6 md:px-12 pb-12 max-w-[1400px] mx-auto">
          <div className="md:col-span-4 flex flex-col gap-6">
            <About />
            <Skills />
          </div>
          <div className="md:col-span-8 flex">
            <FeaturedProject />
          </div>
        </div>
        <Projects />
        <GithubActivity />
        <Testimonials />
        <Contact />
      </div>
      <Footer />
    </main>
  );
}
