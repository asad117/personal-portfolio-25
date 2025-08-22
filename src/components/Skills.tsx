"use client";

import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Progress } from './ui/progress';
import { motion } from 'motion/react';

export function Skills() {
  const skillCategories = [
    {
      title: "Frontend",
      icon: "🎨",
      skills: [
        { name: "React.js", level: 95 },
        { name: "Next.js", level: 90 },
        { name: "TypeScript", level: 88 },
        { name: "Redux", level: 85 },
        { name: "Tailwind CSS", level: 92 }
      ]
    },
    {
      title: "Backend",
      icon: "⚙️",
      skills: [
        { name: "Node.js", level: 90 },
        { name: "Laravel", level: 88 },
        { name: "Django", level: 85 },
        { name: "Express.js", level: 87 },
        { name: "PHP", level: 80 }
      ]
    },
    {
      title: "Database",
      icon: "🗄️",
      skills: [
        { name: "MySQL", level: 90 },
        { name: "PostgreSQL", level: 88 },
        { name: "MongoDB", level: 85 },
        { name: "Redis", level: 75 },
        { name: "SQLite", level: 82 }
      ]
    },
    {
      title: "Tools & DevOps",
      icon: "🛠️",
      skills: [
        { name: "Git", level: 95 },
        { name: "GitHub", level: 92 },
        { name: "Docker", level: 78 },
        { name: "AWS", level: 75 },
        { name: "Vite", level: 88 }
      ]
    }
  ];

  const technologies = [
    { name: "React.js", color: "bg-blue-500" },
    { name: "Next.js", color: "bg-gray-800" },
    { name: "Node.js", color: "bg-green-500" },
    { name: "Laravel", color: "bg-red-500" },
    { name: "Django", color: "bg-green-600" },
    { name: "TypeScript", color: "bg-blue-600" },
    { name: "MySQL", color: "bg-orange-500" },
    { name: "PostgreSQL", color: "bg-blue-700" },
    { name: "MongoDB", color: "bg-green-600" },
    { name: "Redux", color: "bg-purple-500" },
    { name: "Tailwind CSS", color: "bg-cyan-500" },
    { name: "PHP", color: "bg-indigo-500" },
    { name: "Python", color: "bg-yellow-500" },
    { name: "JWT Auth", color: "bg-pink-500" },
    { name: "REST APIs", color: "bg-teal-500" },
    { name: "React Query", color: "bg-red-400" }
  ];

  return (
    <section id="skills" className="py-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Skills & Technologies</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A comprehensive toolkit for building modern, scalable web applications
          </p>
        </motion.div>

        {/* Technology Tags */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex flex-wrap gap-3 justify-center mb-16"
        >
          {technologies.map((tech, index) => (
            <motion.div
              key={tech.name}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.03 }}
              whileHover={{ scale: 1.05 }}
              className="px-4 py-2 bg-card border border-border rounded-full text-sm font-medium hover:shadow-md transition-all duration-200 cursor-default"
            >
              <span className={`inline-block w-2 h-2 rounded-full ${tech.color} mr-2`}></span>
              {tech.name}
            </motion.div>
          ))}
        </motion.div>

        {/* Skill Categories */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
            >
              <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                <CardHeader className="text-center pb-4">
                  <div className="text-3xl mb-2">{category.icon}</div>
                  <CardTitle className="text-lg">{category.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 0.4, 
                        delay: categoryIndex * 0.1 + skillIndex * 0.05 
                      }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-xs text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress 
                        value={skill.level} 
                        className="h-2"
                      />
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}