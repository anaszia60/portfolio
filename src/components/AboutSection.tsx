import { motion } from 'framer-motion';
import { Code2, Rocket, Users, Award } from 'lucide-react';

const stats = [
  { icon: Code2, value: '50+', label: 'Projects Completed' },
  { icon: Rocket, value: '3+', label: 'Years Experience' },
  { icon: Users, value: '25+', label: 'Happy Clients' },
  { icon: Award, value: '10+', label: 'Awards Won' },
];

export const AboutSection = () => {
  return (
    <section id="about" className="py-20 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute top-0 left-1/4 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse-glow"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse-glow"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">About</span>{' '}
            <span className="neon-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-lg text-muted-foreground leading-relaxed">
              I'm a passionate <span className="text-primary font-semibold">full-stack developer</span> with 
              a love for creating innovative digital solutions. My journey in tech started with curiosity 
              and has evolved into a mission to build experiences that make a difference.
            </p>
            
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I'm not coding, you'll find me exploring the latest in{' '}
              <span className="text-accent font-semibold">AI and machine learning</span>, contributing to 
              open-source projects, or mentoring aspiring developers in the community.
            </p>

            <div className="flex flex-wrap gap-3 pt-4">
              {['React', 'TypeScript', 'Node.js', 'Python', 'AI/ML', 'Cloud'].map((tech) => (
                <span
                  key={tech}
                  className="px-4 py-2 glass-card glow-border rounded-full text-sm font-medium"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          {/* Stats grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map(({ icon: Icon, value, label }, index) => (
              <motion.div
                key={label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="glass-card p-6 text-center hover:glow-border transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
              >
                <Icon className="w-8 h-8 mx-auto mb-4 text-primary group-hover:text-accent transition-colors" />
                <div className="neon-text text-3xl font-bold mb-2">{value}</div>
                <div className="text-sm text-muted-foreground">{label}</div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};