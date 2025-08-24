import { motion } from 'framer-motion';
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const HeroSection = () => {
  // Scroll functions
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToProjects = () => {
    const projectsSection = document.getElementById('projects');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Grid overlay */}
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      
      <div className="max-w-6xl mx-auto px-4 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Greeting */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-primary text-lg md:text-xl font-mono"
          >
            {'> Hello, I am'}
          </motion.div>

          {/* Name */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="text-5xl md:text-7xl lg:text-8xl font-bold"
          >
            <span className="neon-text">Anas</span>{' '}
            <span className="text-foreground">Zia</span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed"
          >
            Code meets{' '}
            <span className="text-accent font-semibold">intelligence,</span>{' '}
            Crafting AI-driven solutions for tomorrow.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            {/* Scroll to Projects */}
            <Button 
              size="lg" 
              className="glow-border px-8 py-6 text-lg font-semibold bg-primary/10 hover:bg-primary/20 transition-all duration-300"
              onClick={scrollToProjects}   // <-- scroll to projects
            >
              View My Work
            </Button>

            {/* Connect button */}
            <Button 
              variant="outline" 
              size="lg"
              className="glow-border px-8 py-6 text-lg font-semibold bg-background/5 hover:bg-background/10 transition-all duration-300"
              onClick={scrollToNext}       // scroll to about section if needed
            >
              Let's Connect
            </Button>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0 }}
            className="flex justify-center space-x-6 pt-8"
          >
            {[
              { icon: Github, href: 'https://github.com/anaszia60', label: 'GitHub' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/anas-zia-a31b021a7/', label: 'LinkedIn' },
              { icon: Mail, href: '#', label: 'Email' },
            ].map(({ icon: Icon, href, label }) => (
              <motion.a
                key={label}
                href={href}
                className="p-3 glow-border rounded-full hover:shadow-glow-cyan transition-all duration-300"
                whileHover={{ scale: 1.1, y: -2 }}
                whileTap={{ scale: 0.95 }}
                aria-label={label}
              >
                <Icon className="w-6 h-6" />
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          onClick={scrollToNext}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 p-2 rounded-full hover:shadow-glow-cyan transition-all duration-300 animate-bounce"
          whileHover={{ scale: 1.1 }}
        >
          <ArrowDown className="w-6 h-6" />
        </motion.button>
      </div>

      {/* Floating elements */}
      <div className="absolute top-1/4 left-10 animate-float-slow">
        <div className="w-4 h-4 border border-primary/50 rotate-45"></div>
      </div>
      <div className="absolute bottom-1/4 right-10 animate-float">
        <div className="w-6 h-6 border border-accent/50 rounded-full"></div>
      </div>
    </section>
  );
};
