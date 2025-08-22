"use client";

import { Card, CardContent } from './ui/card';
import { Avatar, AvatarFallback } from './ui/avatar';
import { Star } from 'lucide-react';
import { motion } from 'motion/react';

export function Testimonials() {
  const testimonials = [
    {
      name: "Dr. Rajesh Sharma",
      position: "Medical Director, HealthCare Plus",
      company: "HealthCare Plus",
      content: "Asad delivered an exceptional healthcare management system with Medicare. His understanding of our complex requirements and attention to detail resulted in a platform that significantly improved our patient management efficiency.",
      rating: 5,
      avatar: "RS"
    },
    {
      name: "Priya Mehta",
      position: "Founder, Green Hospitality Solutions",
      company: "Green Hospitality Solutions",
      content: "The My Green Butler platform exceeded our expectations. Asad's expertise in React and Node.js helped us create a sustainable solution that's both user-friendly and technically robust. Highly recommend his services!",
      rating: 5,
      avatar: "PM"
    },
    {
      name: "Carlos Rodriguez",
      position: "Villa Owner, Goa Properties",
      company: "Goa Properties",
      content: "Follow Goa has transformed our booking process. Asad built a comprehensive platform with Next.js and TypeScript that handles our complex booking requirements seamlessly. The system is fast, reliable, and easy to use.",
      rating: 5,
      avatar: "CR"
    },
    {
      name: "Sarah Thompson",
      position: "Sales Manager, PropoTech",
      company: "PropoTech",
      content: "Asad's work on our Proposal management system has streamlined our entire sales process. The Laravel-based solution he built increased our team productivity by 35%. Excellent technical skills and communication.",
      rating: 5,
      avatar: "ST"
    },
    {
      name: "Michael O'Brien",
      position: "Event Coordinator, Equestrian Club",
      company: "Equestrian Club",
      content: "The Horsey People platform has brought our equestrian community together like never before. Asad understood our unique requirements and delivered a solution that perfectly fits our needs. Great work!",
      rating: 5,
      avatar: "MO"
    },
    {
      name: "Anita Patel",
      position: "CEO, EduTech Innovations",
      company: "EduTech Innovations",
      content: "Asad's full-stack development skills are impressive. He built our e-learning platform with Django and React, handling everything from video streaming to user management. The result exceeded our expectations.",
      rating: 5,
      avatar: "AP"
    }
  ];

  return (
    <section id="testimonials" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Client Testimonials</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            What clients say about working with me across different industries
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  {/* Rating */}
                  <div className="flex gap-1 mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>

                  {/* Content */}
                  <blockquote className="text-muted-foreground mb-6 leading-relaxed">
                    "{testimonial.content}"
                  </blockquote>

                  {/* Author */}
                  <div className="flex items-center gap-3">
                    <Avatar className="h-10 w-10">
                      <AvatarFallback className="bg-primary/10 text-primary font-medium">
                        {testimonial.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <div className="font-medium">{testimonial.name}</div>
                      <div className="text-sm text-muted-foreground">
                        {testimonial.position}
                      </div>
                      <div className="text-xs text-muted-foreground">
                        {testimonial.company}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16"
        >
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">25+</div>
            <div className="text-muted-foreground">Projects Completed</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">15+</div>
            <div className="text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">100%</div>
            <div className="text-muted-foreground">Satisfaction Rate</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}