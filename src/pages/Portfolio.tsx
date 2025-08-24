import { Background3D } from '@/components/Background3D';
import { Navigation } from '@/components/Navigation';
import { HeroSection } from '@/components/HeroSection';
import { AboutSection } from '@/components/AboutSection';
import { SkillsSection } from '@/components/SkillsSection';
import { ProjectsSection } from '@/components/ProjectsSection';
import { ContactSection } from '@/components/ContactSection';

export const Portfolio = () => {
  return (
    <div className="relative min-h-screen">
      {/* 3D Background */}
      <Background3D />
      
      {/* Navigation */}
      <Navigation />
      
      {/* Main Content */}
      <main className="relative z-10">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative z-10 py-8 text-center text-muted-foreground">
        <div className="max-w-6xl mx-auto px-4">
          <div className="glass-card py-6">
            <p className="text-sm">
              © 2024 Alex Developer. Built with React, Three.js, and lots of ☕
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};