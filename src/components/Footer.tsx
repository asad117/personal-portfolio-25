"use client";

import { Button } from './ui/button';
import { Separator } from './ui/separator';
import { Github, Linkedin, Twitter, Mail, ArrowUp } from 'lucide-react';
import { motion } from 'motion/react';

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const quickLinks = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    { name: 'Skills', id: 'skills' },
    { name: 'Projects', id: 'projects' },
    { name: 'Experience', id: 'experience' },
    { name: 'Contact', id: 'contact' }
  ];

  const socialLinks = [
    { icon: Github, url: 'https://github.com/asad117', label: 'GitHub' },
    { icon: Linkedin, url: 'https://www.linkedin.com/in/asad11/', label: 'LinkedIn' },
    { icon: Twitter, url: 'https://twitter.com', label: 'Twitter' },
    { icon: Mail, url: 'mailto:asad4ahmad@gmail.com', label: 'Email' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="py-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Brand Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:col-span-2"
            >
              <div className="mb-4">
                <h3 className="text-xl font-bold">
                  <span className="text-primary">Asad</span>
                  <span className="text-muted-foreground">Ahmad</span>
                </h3>
              </div>
              <p className="text-muted-foreground mb-6 max-w-md">
                Full-stack developer passionate about creating exceptional web experiences 
                across healthcare, travel, and marketing industries. Let's build something amazing together.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Button
                    key={index}
                    variant="ghost"
                    size="sm"
                    className="h-10 w-10 p-0 hover:bg-primary/10"
                    asChild
                  >
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                    >
                      <social.icon className="h-5 w-5" />
                    </a>
                  </Button>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {quickLinks.map((link) => (
                  <li key={link.id}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-muted-foreground hover:text-primary transition-colors text-sm"
                    >
                      {link.name}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>
                  <a 
                    href="mailto:asad4ahmad@gmail.com"
                    className="hover:text-primary transition-colors"
                  >
                    asad4ahmad@gmail.com
                  </a>
                </li>
                <li>
                  <a 
                    href="tel:+14378084528"
                    className="hover:text-primary transition-colors"
                  >
                    +1 437 808 4528
                  </a>
                </li>
                <li>Toronto ON Canada</li>
              </ul>
            </motion.div>
          </div>
        </div>

        <Separator />

        {/* Bottom Section */}
        <div className="py-6 flex flex-col sm:flex-row justify-between items-center gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4 }}
            className="text-sm text-muted-foreground"
          >
            © {new Date().getFullYear()} Asad Ahmad. All rights reserved.
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <Button
              variant="ghost"
              size="sm"
              onClick={scrollToTop}
              className="flex items-center gap-2 hover:bg-primary/10"
            >
              <ArrowUp className="h-4 w-4" />
              Back to Top
            </Button>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}