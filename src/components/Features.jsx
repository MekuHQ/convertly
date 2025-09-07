import React from 'react';
    import { motion } from 'framer-motion';
    import { Zap, Shield, BarChart3, Users, Rocket, Brain } from 'lucide-react';

    const Features = () => {
      const features = [
        {
          icon: Brain,
          title: 'AI-Powered Analytics',
          description: 'Get intelligent insights and predictions that help you make data-driven decisions faster.',
          color: 'from-blue-500 to-blue-700'
        },
        {
          icon: Zap,
          title: 'Lightning Fast Performance',
          description: 'Experience blazing-fast load times and real-time updates across all your workflows.',
          color: 'from-cyan-500 to-cyan-700'
        },
        {
          icon: Shield,
          title: 'Enterprise Security',
          description: 'Bank-level encryption and compliance with SOC 2, GDPR, and HIPAA standards.',
          color: 'from-slate-500 to-slate-700'
        },
        {
          icon: BarChart3,
          title: 'Advanced Reporting',
          description: 'Create custom dashboards and reports that provide actionable insights for your team.',
          color: 'from-blue-600 to-cyan-600'
        },
        {
          icon: Users,
          title: 'Team Collaboration',
          description: 'Seamlessly collaborate with your team using real-time editing and communication tools.',
          color: 'from-cyan-600 to-blue-600'
        },
        {
          icon: Rocket,
          title: 'Scalable Infrastructure',
          description: 'Automatically scale your resources up or down based on demand without any downtime.',
          color: 'from-slate-600 to-zinc-600'
        }
      ];

      const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: 0.2
          }
        }
      };

      const itemVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.6,
            ease: "easeOut"
          }
        }
      };

      return (
        <section id="features" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-20"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                Powerful Features for
                <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent"> Modern Teams</span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                Everything you need to streamline your workflow, boost productivity, and scale your business efficiently.
              </p>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="group relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-slate-200"
                  variants={itemVariants}
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                >
                  <div className="relative">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 5 }}
                    >
                      <feature.icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold text-zinc-900 mb-4 group-hover:text-blue-700 transition-colors duration-300">
                      {feature.title}
                    </h3>

                    <p className="text-zinc-600 leading-relaxed">
                      {feature.description}
                    </p>

                    {/* Hover Effect Background */}
                    <div className="absolute inset-0 bg-gradient-to-br from-blue-50/50 to-cyan-50/50 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
                  </div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              className="text-center mt-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <motion.button
                className="bg-gradient-to-r from-blue-700 to-cyan-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                Explore All Features
              </motion.button>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Features;