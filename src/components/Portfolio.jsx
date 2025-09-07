import React, { useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { ExternalLink, Filter } from 'lucide-react';

    const Portfolio = () => {
      const [activeFilter, setActiveFilter] = useState('All');
      const [selectedProject, setSelectedProject] = useState(null);

      const filters = ['All', 'E-commerce', 'SaaS', 'Healthcare', 'Finance'];

      const projects = [
        {
          id: 1,
          title: 'E-commerce Platform',
          category: 'E-commerce',
          description: 'Complete online shopping solution with AI recommendations',
          image: 'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center',
          results: '300% increase in conversion rate',
          tech: ['React', 'Node.js', 'AI/ML']
        },
        {
          id: 2,
          title: 'Healthcare Management',
          category: 'Healthcare',
          description: 'Patient management system with telemedicine features',
          image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=600&h=400&fit=crop&crop=center',
          results: '50% reduction in administrative time',
          tech: ['Vue.js', 'Python', 'HIPAA Compliant']
        },
        {
          id: 3,
          title: 'Financial Dashboard',
          category: 'Finance',
          description: 'Real-time trading and portfolio management platform',
          image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center',
          results: '99.9% uptime with real-time data',
          tech: ['Angular', 'Java', 'WebSocket']
        },
        {
          id: 4,
          title: 'SaaS Analytics Tool',
          category: 'SaaS',
          description: 'Advanced analytics platform for business intelligence',
          image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=center',
          results: '200% faster data processing',
          tech: ['React', 'GraphQL', 'Machine Learning']
        },
        {
          id: 5,
          title: 'Retail Management',
          category: 'E-commerce',
          description: 'Inventory and supply chain optimization system',
          image: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=600&h=400&fit=crop&crop=center',
          results: '40% reduction in inventory costs',
          tech: ['Next.js', 'PostgreSQL', 'AI Optimization']
        },
        {
          id: 6,
          title: 'Banking Solution',
          category: 'Finance',
          description: 'Digital banking platform with advanced security',
          image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&h=400&fit=crop&crop=center',
          results: 'Bank-level security compliance',
          tech: ['React Native', 'Blockchain', 'Biometric Auth']
        }
      ];

      const filteredProjects = activeFilter === 'All' 
        ? projects 
        : projects.filter(project => project.category === activeFilter);

      return (
        <section id="portfolio" className="py-24 bg-slate-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                Success Stories &
                <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent"> Case Studies</span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto">
                See how we've helped businesses transform their operations and achieve remarkable results.
              </p>
            </motion.div>

            {/* Filter Buttons */}
            <motion.div
              className="flex flex-wrap justify-center gap-4 mb-12"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              {filters.map((filter) => (
                <motion.button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-6 py-3 rounded-full font-medium transition-all duration-300 ${
                    activeFilter === filter
                      ? 'bg-blue-700 text-white shadow-lg'
                      : 'bg-white text-zinc-600 hover:bg-slate-100 hover:text-blue-700'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Filter className="w-4 h-4 inline mr-2" />
                  {filter}
                </motion.button>
              ))}
            </motion.div>

            {/* Projects Grid */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
              layout
            >
              <AnimatePresence>
                {filteredProjects.map((project) => (
                  <motion.div
                    key={project.id}
                    className="group bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    whileHover={{ y: -8 }}
                    onClick={() => setSelectedProject(project)}
                  >
                    <div className="relative overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                        loading="lazy"
                        decoding="async"
                        width="600"
                        height="400"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="absolute bottom-4 left-4 right-4">
                          <div className="flex items-center text-white">
                            <ExternalLink className="w-5 h-5 mr-2" />
                            <span className="font-medium">View Details</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-center justify-between mb-3">
                        <span className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full">
                          {project.category}
                        </span>
                      </div>

                      <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-blue-700 transition-colors duration-300">
                        {project.title}
                      </h3>

                      <p className="text-zinc-600 mb-4 line-clamp-2">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-2 mb-4">
                        {project.tech.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-1 bg-slate-100 text-slate-600 text-xs font-medium rounded"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      <div className="text-sm font-semibold text-cyan-600">
                        {project.results}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>
            </motion.div>

            {/* Project Modal */}
            <AnimatePresence>
              {selectedProject && (
                <motion.div
                  className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setSelectedProject(null)}
                >
                  <motion.div
                    className="bg-white rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto"
                    initial={{ scale: 0.9, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    exit={{ scale: 0.9, opacity: 0 }}
                    onClick={(e) => e.stopPropagation()}
                  >
                    <img
                      src={selectedProject.image}
                      alt={selectedProject.title}
                      className="w-full h-64 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="600"
                      height="400"
                    />
                    <div className="p-8">
                      <h3 className="text-2xl font-bold text-zinc-900 mb-4">
                        {selectedProject.title}
                      </h3>
                      <p className="text-zinc-600 mb-6">
                        {selectedProject.description}
                      </p>
                      <div className="mb-6">
                        <h4 className="font-semibold text-zinc-900 mb-2">Results:</h4>
                        <p className="text-cyan-600 font-medium">{selectedProject.results}</p>
                      </div>
                      <div className="mb-6">
                        <h4 className="font-semibold text-zinc-900 mb-2">Technologies:</h4>
                        <div className="flex flex-wrap gap-2">
                          {selectedProject.tech.map((tech) => (
                            <span
                              key={tech}
                              className="px-3 py-1 bg-blue-100 text-blue-700 text-sm font-medium rounded-full"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="w-full bg-blue-700 text-white py-3 rounded-full font-semibold hover:bg-blue-800 transition-colors duration-200"
                      >
                        Close
                      </button>
                    </div>
                  </motion.div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </section>
      );
    };

    export default Portfolio;