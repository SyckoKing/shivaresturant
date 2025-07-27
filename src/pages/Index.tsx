import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Contact from "@/components/Contact";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-primary text-primary-foreground py-8">
        <div className="container mx-auto px-4 text-center">
          <div className="flex justify-center space-x-6 mb-4">
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              GitHub
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="hover:text-secondary transition-colors">
              LinkedIn
            </a>
            <a href="mailto:hello@aryalshiva.com.np" className="hover:text-secondary transition-colors">
              Email
            </a>
          </div>
          <p className="text-sm opacity-80">
            © 2024 Arya Shiva. All rights reserved. Made with ❤️ in Nepal.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
