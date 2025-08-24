import { motion } from 'framer-motion';
import { 
  Code2, 
  Palette, 
  Database, 
  Cloud, 
  Smartphone, 
  Brain,
  Globe,
  Zap
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend',
    icon: Code2,
    skills: ['React', 'TypeScript', 'Next.js', 'Tailwind CSS', 'Three.js', 'Framer Motion'],
    color: 'primary'
  },
  {
    title: 'Backend',
    icon: Database,
    skills: ['Node.js', 'Python', 'PostgreSQL', 'MongoDB', 'GraphQL', 'REST APIs'],
    color: 'accent'
  },
  {
    title: 'Design',
    icon: Palette,
    skills: ['UI/UX Design', 'Figma', 'Adobe Creative Suite', 'Prototyping', 'Design Systems'],
    color: 'neon-green'
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Kubernetes', 'CI/CD', 'Terraform', 'Monitoring'],
    color: 'electric-blue'
  },
  {
    title: 'Mobile',
    icon: Smartphone,
    skills: ['React Native', 'Flutter', 'iOS', 'Android', 'Cross-platform', 'App Store'],
    color: 'neon-purple'
  },
  {
    title: 'AI & ML',
    icon: Brain,
    skills: ['TensorFlow', 'PyTorch', 'OpenAI API', 'Computer Vision', 'NLP', 'Data Science'],
    color: 'neon-cyan'
  }
];

export const SkillsSection = () => {
  return (
    <section id="skills" className="py-20 relative">
      {/* Background grid */}
      <div className="absolute inset-0 tech-grid opacity-10"></div>
      
      <div className="max-w-6xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-foreground">My</span>{' '}
            <span className="neon-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent mx-auto mb-8"></div>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A comprehensive toolkit for building modern, scalable applications
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="glass-card p-6 hover:glow-border transition-all duration-300 group"
              whileHover={{ scale: 1.02, y: -5 }}
            >
              {/* Category header */}
              <div className="flex items-center mb-6">
                <div className={`p-3 rounded-lg bg-${category.color}/10 group-hover:bg-${category.color}/20 transition-colors`}>
                  <category.icon className={`w-6 h-6 text-${category.color}`} />
                </div>
                <h3 className="text-xl font-bold ml-4">{category.title}</h3>
              </div>

              {/* Skills list */}
              <div className="space-y-3">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (skillIndex * 0.05) }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3 group/skill"
                  >
                    <div className={`w-2 h-2 rounded-full bg-${category.color} opacity-60 group-hover/skill:opacity-100 transition-opacity`}></div>
                    <span className="text-muted-foreground group-hover/skill:text-foreground transition-colors">
                      {skill}
                    </span>
                  </motion.div>
                ))}
              </div>

              {/* Animated accent */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className={`h-1 bg-gradient-to-r from-${category.color}/0 via-${category.color}/60 to-${category.color}/0 rounded-full transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom accent */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center space-x-2 glass-card px-6 py-3 glow-border">
            <Zap className="w-5 h-5 text-primary animate-pulse" />
            <span className="text-lg font-semibold">Always Learning, Always Growing</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
};