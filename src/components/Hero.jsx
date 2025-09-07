import React from 'react';
    import { motion } from 'framer-motion';
    import { ArrowRight, Play, Star } from 'lucide-react';

    const Hero = () => {
      const clientLogos = [
        'Microsoft', 'Google', 'Amazon', 'Spotify', 'Netflix'
      ];

      return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-blue-50 via-white to-cyan-50">
          {/* Background Elements */}
          <div className="absolute inset-0">
            <div className="absolute top-20 left-10 w-72 h-72 bg-blue-200/30 rounded-full blur-3xl animate-pulse"></div>
            <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-200/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-blue-100/20 to-cyan-100/20 rounded-full blur-3xl"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20">
            <div className="text-center">
              <motion.div
                className="inline-flex items-center px-4 py-2 bg-blue-100 text-blue-700 rounded-full text-sm font-medium mb-8"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              >
                <Star className="w-4 h-4 mr-2 fill-current" />
                Trusted by 10,000+ businesses worldwide
              </motion.div>

              <motion.h1
                className="text-4xl md:text-6xl lg:text-7xl font-bold text-zinc-900 mb-6 leading-tight"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                Scale Your Business
                <br />
                <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent">
                  Beyond Limits
                </span>
              </motion.h1>

              <motion.p
                className="text-xl md:text-2xl text-zinc-600 mb-12 max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Transform your workflow with our AI-powered SaaS platform. 
                Increase productivity by 300% and reduce operational costs while scaling effortlessly.
              </motion.p>

              <motion.div
                className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <motion.button
                  className="bg-blue-700 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-blue-800 transition-all duration-200 shadow-xl hover:shadow-2xl flex items-center group"
                  whileHover={{ scale: 1.05, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Start Free Trial
                  <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.button>

                <motion.button
                  className="flex items-center px-8 py-4 text-zinc-700 hover:text-blue-700 font-semibold text-lg transition-all duration-200 group"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg mr-3 group-hover:shadow-xl transition-all duration-200">
                    <Play className="w-5 h-5 text-blue-700 ml-1" />
                  </div>
                  Watch Demo
                </motion.button>
              </motion.div>

              {/* Social Proof */}
              <motion.div
                className="border-t border-slate-200 pt-12"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.8 }}
              >
                <p className="text-sm text-zinc-500 mb-6">Trusted by industry leaders</p>
                <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                  {clientLogos.map((logo, index) => (
                    <motion.div
                      key={logo}
                      className="text-2xl font-bold text-zinc-400 hover:text-zinc-600 transition-colors duration-200"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                      whileHover={{ scale: 1.1 }}
                    >
                      {logo}
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>

          {/* Floating Elements */}
          <motion.div
            className="absolute top-1/4 left-10 w-4 h-4 bg-blue-400 rounded-full"
            animate={{
              y: [0, -20, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
          <motion.div
            className="absolute top-1/3 right-20 w-6 h-6 bg-cyan-400 rounded-full"
            animate={{
              y: [0, 20, 0],
              opacity: [0.3, 0.8, 0.3]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }}
          />
        </section>
      );
    };

    export default Hero;