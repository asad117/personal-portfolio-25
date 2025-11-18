"use client";

import { Card, CardContent, CardFooter, CardHeader, CardTitle } from './ui/card';
import { Button } from './ui/button';
import { Badge } from './ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';


export function Projects() {
  const projects = [
    {
      title: "Medicare - Healthcare Management System",
      description: "A centralized platform for managing healthcare facilities, patient records, appointments, and telemedicine consultations. Features comprehensive scheduling system, doctor/patient dashboards, and admin management tools.",
      image: "/assets/images/projects/mediconnect.png",
      technologies: ["React", "Vite", "Django", "Node.js", "JWT Auth", "PostgreSQL"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "My Green Butler - Sustainability Platform",
      description: "A sustainability-focused platform providing eco-friendly hospitality solutions. Features carbon footprint tracking, energy-saving reports, and guest engagement tools for hotels and resorts.",
      image: "/assets/images/projects/mgb.png",
      technologies: ["React.js", "Next.js", "Laravel", "MySQL", "REST APIs"],
      liveUrl: "#",
      githubUrl: "#"
      
    },
    {
      title: "Proposal - Sales & Marketing System",
      description: "A comprehensive proposal and client engagement system designed for streamlining sales and marketing operations. Features proposal generation, CRM-style tracking, and dynamic analytics dashboard.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTU3NTcxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Laravel", "React.js", "MySQL", "PHP", "Bootstrap"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Follow Goa - Travel & Booking Platform",
      description: "A comprehensive villa, events, and experiences booking website for Goa tourism. Features advanced booking engine, villa rentals, events calendar, and secure payment integration.",
      image: "https://images.unsplash.com/photo-1692699203597-b5a4464f3f9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMHByb2plY3QlMjBtb2NrdXB8ZW58MXx8fHwxNzU1ODM0MTY3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Next.js", "TypeScript", "Node.js", "MySQL", "Stripe"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "Horsey People - Equestrian Community",
      description: "An equestrian-focused community site with event promotions, giveaways, and social features. Includes event listings, giveaway system, membership management, and promotion tools.",
      image: "https://images.unsplash.com/photo-1718220216044-006f43e3a9b1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBvZmZpY2UlMjB3b3Jrc3BhY2V8ZW58MXx8fHwxNzU1NzM3ODkwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React.js", "PHP", "MySQL", "Laravel", "jQuery"],
      liveUrl: "#",
      githubUrl: "#"
    },
    {
      title: "E-Learning Management Portal",
      description: "A comprehensive educational platform for online courses with video streaming, quizzes, progress tracking, and certificate generation. Built for scalability with multiple user roles and permissions.",
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBkZXZlbG9wbWVudHxlbnwxfHx8fDE3NTU3NTcxNTR8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["Django", "React", "PostgreSQL", "Redis", "AWS S3"],
      liveUrl: "#",
      githubUrl: "#"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A showcase of my work across healthcare, travel, marketing, and community platforms
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="group"
            >
              <Card className="h-full overflow-hidden hover:shadow-xl transition-all duration-300">
                <div className="relative overflow-hidden">
                  <ImageWithFallback
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
                </div>
                
                <CardHeader>
                  <CardTitle className="text-lg leading-tight">{project.title}</CardTitle>
                </CardHeader>
                
                <CardContent className="flex-1">
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
                
                <CardFooter className="flex gap-2">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 flex items-center gap-2"
                  >
                    <ExternalLink className="h-4 w-4" />
                    Live Demo
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="flex-1 flex items-center gap-2"
                  >
                    <Github className="h-4 w-4" />
                    Code
                  </Button>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-center mt-12"
        >
          <Button variant="outline" size="lg">
            View All Projects
          </Button>
        </motion.div>
      </div>
    </section>
  );
}