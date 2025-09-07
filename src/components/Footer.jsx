import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { useForm } from 'react-hook-form';
    import { zodResolver } from '@hookform/resolvers/zod';
    import { z } from 'zod';
    import { toast } from 'react-toastify';
    import { 
      Twitter, 
      Linkedin, 
      Github, 
      Mail, 
      ArrowRight,
      Heart
    } from 'lucide-react';

    const newsletterSchema = z.object({
      email: z.string().email('Please enter a valid email address')
    });

    const Footer = () => {
      const [isSubmitting, setIsSubmitting] = useState(false);

      const {
        register,
        handleSubmit,
        formState: { errors },
        reset
      } = useForm({
        resolver: zodResolver(newsletterSchema)
      });

      const onSubmit = async (data) => {
        setIsSubmitting(true);
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        console.log('Newsletter subscription:', data);
        toast.success('Successfully subscribed to our newsletter!');
        reset();
        setIsSubmitting(false);
      };

      const footerLinks = {
        Product: [
          { name: 'Features', href: '#features' },
          { name: 'Pricing', href: '#pricing' },
          { name: 'API Documentation', href: '#' },
          { name: 'Integrations', href: '#' },
          { name: 'Changelog', href: '#' }
        ],
        Company: [
          { name: 'About Us', href: '#' },
          { name: 'Careers', href: '#' },
          { name: 'Blog', href: '#' },
          { name: 'Press Kit', href: '#' },
          { name: 'Contact', href: '#contact' }
        ],
        Resources: [
          { name: 'Help Center', href: '#' },
          { name: 'Community', href: '#' },
          { name: 'Tutorials', href: '#' },
          { name: 'Webinars', href: '#' },
          { name: 'Case Studies', href: '#portfolio' }
        ],
        Legal: [
          { name: 'Privacy Policy', href: '#' },
          { name: 'Terms of Service', href: '#' },
          { name: 'Cookie Policy', href: '#' },
          { name: 'GDPR', href: '#' },
          { name: 'Security', href: '#' }
        ]
      };

      const socialLinks = [
        { name: 'Twitter', icon: Twitter, href: 'https://twitter.com' },
        { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com' },
        { name: 'GitHub', icon: Github, href: 'https://github.com' },
        { name: 'Email', icon: Mail, href: 'mailto:hello@saasflow.com' }
      ];

      return (
        <footer className="bg-zinc-900 text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {/* Newsletter Section */}
            <motion.div
              className="py-16 border-b border-zinc-800"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="max-w-4xl mx-auto text-center">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">
                  Stay Updated with
                  <span className="bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent"> SaaSFlow</span>
                </h3>
                <p className="text-xl text-zinc-400 mb-8">
                  Get the latest updates, tips, and insights delivered to your inbox.
                </p>

                <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto">
                  <div className="flex flex-col sm:flex-row gap-4">
                    <div className="flex-1">
                      <motion.input
                        type="email"
                        placeholder="Enter your email"
                        className={`w-full px-6 py-4 bg-zinc-800 border-2 rounded-full focus:outline-none focus:ring-0 transition-all duration-200 ${
                          errors.email 
                            ? 'border-red-400 focus:border-red-500' 
                            : 'border-zinc-700 focus:border-blue-500'
                        }`}
                        {...register('email')}
                        whileFocus={{ scale: 1.02 }}
                      />
                      {errors.email && (
                        <motion.p
                          className="text-red-400 text-sm mt-2 text-left"
                          initial={{ opacity: 0, y: -10 }}
                          animate={{ opacity: 1, y: 0 }}
                        >
                          {errors.email.message}
                        </motion.p>
                      )}
                    </div>

                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      className="bg-gradient-to-r from-blue-600 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center"
                      whileHover={{ scale: isSubmitting ? 1 : 1.05 }}
                      whileTap={{ scale: isSubmitting ? 1 : 0.95 }}
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        <>
                          Subscribe
                          <ArrowRight className="w-5 h-5 ml-2" />
                        </>
                      )}
                    </motion.button>
                  </div>
                </form>
              </div>
            </motion.div>

            {/* Main Footer Content */}
            <div className="py-16">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
                {/* Brand Section */}
                <motion.div
                  className="lg:col-span-2"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <motion.h2
                    className="text-3xl font-bold text-blue-400 font-mono mb-4"
                    whileHover={{ scale: 1.05 }}
                  >
                    SaaSFlow
                  </motion.h2>
                  <p className="text-zinc-400 mb-6 leading-relaxed">
                    Transform your workflow with our AI-powered SaaS platform. 
                    Scale your business beyond limits with enterprise-grade security and performance.
                  </p>

                  {/* Social Links */}
                  <div className="flex space-x-4">
                    {socialLinks.map((social) => (
                      <motion.a
                        key={social.name}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 bg-zinc-800 rounded-full flex items-center justify-center hover:bg-blue-600 transition-all duration-200"
                        whileHover={{ scale: 1.1, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        aria-label={social.name}
                      >
                        <social.icon className="w-5 h-5" />
                      </motion.a>
                    ))}
                  </div>
                </motion.div>

                {/* Footer Links */}
                {Object.entries(footerLinks).map(([category, links], index) => (
                  <motion.div
                    key={category}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                  >
                    <h4 className="font-semibold text-white mb-4">{category}</h4>
                    <ul className="space-y-3">
                      {links.map((link) => (
                        <li key={link.name}>
                          <motion.a
                            href={link.href}
                            className="text-zinc-400 hover:text-white transition-colors duration-200"
                            whileHover={{ x: 4 }}
                          >
                            {link.name}
                          </motion.a>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Bottom Section */}
            <motion.div
              className="py-8 border-t border-zinc-800 flex flex-col md:flex-row items-center justify-between"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <div className="text-zinc-400 text-sm mb-4 md:mb-0">
                © 2025 SaaSFlow. All rights reserved.
              </div>

              <div className="flex items-center text-zinc-400 text-sm">
                <span>Built with</span>
                <motion.div
                  className="mx-1"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 1, repeat: Infinity, repeatDelay: 2 }}
                >
                  <Heart className="w-4 h-4 text-red-500 fill-current" />
                </motion.div>
                <span>by</span>
                <motion.a
                  href="https://meku.dev"
                  target="_blank"
                  rel="nofollow"
                  className="ml-1 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                  whileHover={{ scale: 1.05 }}
                >
                  Meku.dev
                </motion.a>
              </div>
            </motion.div>
          </div>
        </footer>
      );
    };

    export default Footer;