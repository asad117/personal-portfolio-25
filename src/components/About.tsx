"use client";

import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Download, Award, Users, Clock } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  const achievements = [
    {
      icon: Clock,
      title: "4+ Years",
      description: "Development Experience"
    },
    {
      icon: Award,
      title: "25+ Projects",
      description: "Successfully Delivered"
    },
    {
      icon: Users,
      title: "15+ Clients",
      description: "Satisfied Worldwide"
    }
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">About Me</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Full-stack developer passionate about building scalable web applications across diverse industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Bio Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <p className="text-lg leading-relaxed">
                I'm a passionate full-stack developer with over 4 years of experience creating 
                innovative web solutions across healthcare, travel, marketing, and event booking platforms. 
                My journey began with a mechanical engineering background before transitioning into 
                software development.
              </p>
              
              <p className="text-lg leading-relaxed">
                I specialize in modern JavaScript frameworks like React and Next.js for frontend 
                development, coupled with Node.js, Laravel, and Django for robust backend systems. 
                My experience spans both freelance projects and full-time development roles, 
                delivering impactful solutions that drive business growth.
              </p>
              
              <p className="text-lg leading-relaxed">
                From building healthcare management systems to creating travel booking platforms, 
                I focus on writing clean, scalable code and implementing best practices for 
                performance optimization. I'm always eager to learn new technologies and 
                tackle challenging problems.
              </p>

              <div className="pt-6">
                <Button size="lg" className="flex items-center gap-2">
                  <Download className="h-5 w-5" />
                  Download Resume
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Achievements */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {achievements.map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4">
                      <div className="p-3 bg-primary/10 rounded-lg">
                        <achievement.icon className="h-6 w-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-semibold mb-1">{achievement.title}</h3>
                        <p className="text-muted-foreground">{achievement.description}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}

            {/* Additional Info Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <h3 className="text-lg font-semibold mb-3">Current Focus</h3>
                  <ul className="space-y-2 text-muted-foreground">
                    <li>• Building healthcare and travel platforms</li>
                    <li>• Exploring advanced React patterns and TypeScript</li>
                    <li>• Optimizing API performance and system architecture</li>
                    <li>• Contributing to open-source projects</li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}