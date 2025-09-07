import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const testimonials = [
    {
      id: 1,
      name: 'Sarah Johnson',
      role: 'CEO, TechStart Inc.',
      company: 'TechStart',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?w=100&h=100&fit=crop&crop=face',
      content: 'Convertly transformed our entire workflow. We saw a 300% increase in productivity within the first month. The AI-powered analytics gave us insights we never had before.',
      rating: 5,
      metric: '300% productivity increase'
    },
    {
      id: 2,
      name: 'Michael Chen',
      role: 'CTO, DataFlow Solutions',
      company: 'DataFlow',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face',
      content: 'The scalability and performance are outstanding. We handle millions of transactions daily without any issues. Best investment we\'ve made for our infrastructure.',
      rating: 5,
      metric: '99.9% uptime achieved'
    },
    {
      id: 3,
      name: 'Emily Rodriguez',
      role: 'Operations Director, HealthTech Pro',
      company: 'HealthTech',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face',
      content: 'Security and compliance were our biggest concerns. Convertly exceeded all our expectations with bank-level encryption and HIPAA compliance out of the box.',
      rating: 5,
      metric: 'HIPAA compliant in 30 days'
    },
    {
      id: 4,
      name: 'David Park',
      role: 'Founder, E-commerce Plus',
      company: 'E-commerce Plus',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face',
      content: 'Our conversion rates doubled after implementing Convertly. The real-time analytics and AI recommendations are game-changers for our business.',
      rating: 5,
      metric: '200% conversion increase'
    },
    {
      id: 5,
      name: 'Lisa Thompson',
      role: 'VP of Engineering, FinanceFlow',
      company: 'FinanceFlow',
      avatar: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=100&h=100&fit=crop&crop=face',
      content: 'The integration process was seamless. Our team was up and running in days, not months. The support team is incredibly responsive and knowledgeable.',
      rating: 5,
      metric: '3-day implementation'
    }
  ];

  const clientLogos = [
    { name: 'Microsoft', logo: 'Microsoft' },
    { name: 'Google', logo: 'Google' },
    { name: 'Amazon', logo: 'Amazon' },
    { name: 'Spotify', logo: 'Spotify' },
    { name: 'Netflix', logo: 'Netflix' },
    { name: 'Airbnb', logo: 'Airbnb' },
    { name: 'Uber', logo: 'Uber' },
    { name: 'Slack', logo: 'Slack' }
  ];

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, testimonials.length]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section id="testimonials" className="py-24 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-20"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
            Loved by
            <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent"> 10,000+ Teams</span>
          </h2>
          <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
            See what industry leaders are saying about their transformation with Convertly.
          </p>
        </motion.div>

        {/* Main Testimonial */}
        <div className="relative mb-20">
          <div 
            className="flex items-center justify-center mb-8"
            onMouseEnter={() => setIsAutoPlaying(false)}
            onMouseLeave={() => setIsAutoPlaying(true)}
          >
            <button
              onClick={prevTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 mr-6 hover:bg-blue-50"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-6 h-6 text-blue-700" />
            </button>

            <div className="max-w-4xl mx-auto">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  className="bg-white rounded-3xl p-8 md:p-12 shadow-xl relative"
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -50 }}
                  transition={{ duration: 0.5 }}
                >
                  <Quote className="w-12 h-12 text-blue-200 mb-6" />
                  
                  <blockquote className="text-xl md:text-2xl text-zinc-700 leading-relaxed mb-8 font-medium">
                    "{testimonials[currentIndex].content}"
                  </blockquote>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center">
                      <img
                        src={testimonials[currentIndex].avatar}
                        alt={testimonials[currentIndex].name}
                        className="w-16 h-16 rounded-full object-cover mr-4"
                        loading="lazy"
                        decoding="async"
                        width="100"
                        height="100"
                      />
                      <div>
                        <div className="font-bold text-zinc-900 text-lg">
                          {testimonials[currentIndex].name}
                        </div>
                        <div className="text-zinc-600">
                          {testimonials[currentIndex].role}
                        </div>
                        <div className="flex items-center mt-1">
                          {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="text-right">
                      <div className="text-2xl font-bold text-blue-700">
                        {testimonials[currentIndex].metric}
                      </div>
                      <div className="text-sm text-zinc-500">
                        Key Result
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            <button
              onClick={nextTestimonial}
              className="p-3 rounded-full bg-white shadow-lg hover:shadow-xl transition-all duration-200 ml-6 hover:bg-blue-50"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-6 h-6 text-blue-700" />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                  index === currentIndex ? 'bg-blue-700 w-8' : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Client Logos */}
        <motion.div
          className="border-t border-slate-200 pt-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-center text-zinc-500 mb-12 text-lg">
            Trusted by industry leaders worldwide
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-8 items-center">
            {clientLogos.map((client, index) => (
              <motion.div
                key={client.name}
                className="flex items-center justify-center"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.1 }}
              >
                <div className="text-2xl font-bold text-zinc-400 hover:text-zinc-600 transition-colors duration-200">
                  {client.logo}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Testimonials;