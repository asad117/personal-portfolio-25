"use client";

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Calendar, MapPin } from 'lucide-react';
import { motion } from 'motion/react';

export function Experience() {
  const experiences = [
    {
      title: "Full-Stack Developer",
      company: "Freelance & Contract Work",
      location: "Remote",
      duration: "2021 - Present",
      type: "Freelance",
      description: "Delivering custom web applications for healthcare, travel, and marketing industries. Leading development of scalable platforms and optimizing system architecture for performance.",
      achievements: [
        "Built Medicare healthcare management system serving 1000+ patients",
        "Developed Follow Goa travel platform with 500+ villa bookings",
        "Created sustainable hospitality solutions for My Green Butler",
        "Optimized API performance reducing response times by 50%",
        "Implemented secure authentication systems with JWT"
      ],
      technologies: ["React", "Next.js", "Node.js", "Laravel", "Django", "MySQL", "PostgreSQL"]
    },
    {
      title: "Full-Stack Web Developer",
      company: "Various Projects & Startups",
      location: "India",
      duration: "2021 - 2024",
      type: "Contract",
      description: "Worked on diverse projects including equestrian community platforms, sales management systems, and booking engines. Focused on building responsive, production-grade applications.",
      achievements: [
        "Developed Horsey People community platform with 200+ active users",
        "Built Proposal CRM system increasing sales efficiency by 35%",
        "Implemented real-time features using WebSocket technology",
        "Established code standards and best practices for teams",
        "Mentored junior developers on React and Laravel projects"
      ],
      technologies: ["React.js", "PHP", "Laravel", "TypeScript", "MongoDB", "Redux"]
    },
    {
      title: "Graduate Engineer Trainee",
      company: "Sugar Plant Manufacturing",
      location: "India",
      duration: "2020 - 2021",
      type: "Full-time",
      description: "Gained technical experience in mechanical systems including pumps, boilers, and compressors. Built strong problem-solving foundation before transitioning into software development.",
      achievements: [
        "Optimized mechanical system operations improving efficiency by 15%",
        "Developed maintenance schedules reducing downtime by 20%",
        "Learned system integration and process optimization",
        "Built strong analytical and troubleshooting skills",
        "Transitioned technical knowledge to software architecture"
      ],
      technologies: ["Process Engineering", "System Analysis", "Technical Documentation"]
    },
    {
      title: "Self-Taught Developer",
      company: "Personal Learning Journey",
      location: "India",
      duration: "2020 - 2021",
      type: "Learning",
      description: "Intensive self-learning period focusing on modern web development technologies. Built foundation projects and contributed to open-source while transitioning from mechanical engineering.",
      achievements: [
        "Mastered React, Node.js, and full-stack development",
        "Built 10+ personal projects to practice new skills",
        "Completed online courses and certifications",
        "Started freelancing with small client projects",
        "Established presence in developer communities"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "React", "Node.js", "Git"]
    }
  ];

  return (
    <section id="experience" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Professional Experience</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            My journey from mechanical engineering to full-stack development
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-px h-full w-0.5 bg-border"></div>

          <div className="space-y-8">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`relative flex items-center ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-4 md:left-1/2 md:transform md:-translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-background shadow-lg z-10"></div>

                {/* Content */}
                <div className={`w-full md:w-1/2 ml-12 md:ml-0 ${
                  index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'
                }`}>
                  <Card className="hover:shadow-lg transition-shadow duration-300">
                    <CardHeader>
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                        <Badge variant={
                          experience.type === 'Freelance' ? 'default' : 
                          experience.type === 'Learning' ? 'secondary' : 'outline'
                        }>
                          {experience.type}
                        </Badge>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {experience.duration}
                        </div>
                      </div>
                      <CardTitle className="text-xl">{experience.title}</CardTitle>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <span className="font-medium">{experience.company}</span>
                        <span>•</span>
                        <div className="flex items-center gap-1">
                          <MapPin className="h-4 w-4" />
                          {experience.location}
                        </div>
                      </div>
                    </CardHeader>
                    
                    <CardContent>
                      <p className="text-muted-foreground mb-4">
                        {experience.description}
                      </p>
                      
                      <div className="space-y-3">
                        <h4 className="font-medium">Key Achievements:</h4>
                        <ul className="space-y-1">
                          {experience.achievements.map((achievement, achievementIndex) => (
                            <li key={achievementIndex} className="text-sm text-muted-foreground flex items-start gap-2">
                              <span className="text-primary mt-1.5">•</span>
                              {achievement}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <div className="mt-4">
                        <h4 className="font-medium mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {experience.technologies.map((tech) => (
                            <Badge key={tech} variant="outline" className="text-xs">
                              {tech}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}