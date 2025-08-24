import { motion } from 'framer-motion';
import { ExternalLink, Github, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';

const projects = [
  {
    title: 'AI-Powered Analytics Dashboard',
    description: 'A comprehensive analytics platform leveraging machine learning to provide real-time business insights with interactive visualizations.',
    tech: ['React', 'TypeScript', 'Python', 'TensorFlow', 'D3.js'],
    image: '/placeholder.svg',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'NFT Marketplace',
    description: 'Decentralized marketplace for digital collectibles with smart contract integration and seamless user experience.',
    tech: ['Next.js', 'Solidity', 'Web3', 'IPFS', 'Tailwind'],
    image: '/placeholder.svg',
    github: '#',
    demo: '#',
    featured: true
  },
  {
    title: 'Real-time Collaboration Tool',
    description: 'Multi-user collaborative workspace with live editing, video calls, and project management features.',
    tech: ['React', 'Socket.io', 'Node.js', 'MongoDB', 'WebRTC'],
    image: '/placeholder.svg',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    title: 'Mobile Fitness App',
    description: 'Cross-platform fitness tracking app with AR workout guidance and social challenges.',
    tech: ['React Native', 'ARKit', 'Firebase', 'Redux', 'Stripe'],
    image: '/placeholder.svg',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    title: 'E-commerce Platform',
    description: 'Full-stack e-commerce solution with advanced inventory management and personalized recommendations.',
    tech: ['Vue.js', 'Laravel', 'MySQL', 'Redis', 'AWS'],
    image: '/placeholder.svg',
    github: '#',
    demo: '#',
    featured: false
  },
  {
    title: 'IoT Monitoring System',
    description: 'Industrial IoT platform for monitoring equipment health with predictive maintenance alerts.',
    tech: ['React', 'Node.js', 'InfluxDB', 'MQTT', 'Docker'],
    image: '/placeholder.svg',
    github: '#',
    demo: '#',
    featured: false
  }
];

export const ProjectsSection = () => {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-20 relative">
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">Featured</span>{' '}
            <span className="neon-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A showcase of my recent work, from concept to deployment
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {featuredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:glow-border transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Project image */}
              <div className="relative mb-6 overflow-hidden rounded-lg bg-gradient-card">
                <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <Play className="w-12 h-12 text-primary opacity-60 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>

              {/* Project info */}
              <div className="space-y-4">
                <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {project.description}
                </p>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Actions */}
                <div className="flex space-x-4 pt-4">
                  <Button variant="outline" size="sm" className="flex items-center space-x-2">
                    <Github className="w-4 h-4" />
                    <span>Code</span>
                  </Button>
                  <Button size="sm" className="flex items-center space-x-2">
                    <ExternalLink className="w-4 h-4" />
                    <span>Demo</span>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Other Projects Grid */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h3 className="text-2xl font-bold text-center mb-8">More Projects</h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {otherProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 hover:glow-border transition-all duration-300 group"
                whileHover={{ scale: 1.02 }}
              >
                <h4 className="text-lg font-bold mb-3 group-hover:text-primary transition-colors">
                  {project.title}
                </h4>
                
                <p className="text-sm text-muted-foreground mb-4">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1 mb-4">
                  {project.tech.slice(0, 3).map((tech) => (
                    <span
                      key={tech}
                      className="px-2 py-1 text-xs bg-accent/10 text-accent rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.tech.length > 3 && (
                    <span className="px-2 py-1 text-xs text-muted-foreground">
                      +{project.tech.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex space-x-3">
                  <button className="p-2 hover:text-primary transition-colors">
                    <Github className="w-4 h-4" />
                  </button>
                  <button className="p-2 hover:text-primary transition-colors">
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
