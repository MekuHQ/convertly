import React, { useState } from 'react';
    import { motion } from 'framer-motion';
    import { Check, Star, Zap } from 'lucide-react';

    const Pricing = () => {
      const [isYearly, setIsYearly] = useState(false);

      const plans = [
        {
          name: 'Starter',
          description: 'Perfect for small teams getting started',
          monthlyPrice: 29,
          yearlyPrice: 290,
          features: [
            'Up to 5 team members',
            'Basic analytics dashboard',
            '10GB storage',
            'Email support',
            'Basic integrations',
            'Mobile app access'
          ],
          color: 'from-slate-500 to-slate-700',
          popular: false
        },
        {
          name: 'Professional',
          description: 'Most popular for growing businesses',
          monthlyPrice: 79,
          yearlyPrice: 790,
          features: [
            'Up to 25 team members',
            'Advanced analytics & reporting',
            '100GB storage',
            'Priority support',
            'All integrations',
            'Custom workflows',
            'API access',
            'Advanced security'
          ],
          color: 'from-blue-600 to-cyan-600',
          popular: true
        },
        {
          name: 'Enterprise',
          description: 'For large organizations with custom needs',
          monthlyPrice: 199,
          yearlyPrice: 1990,
          features: [
            'Unlimited team members',
            'Custom analytics & AI insights',
            'Unlimited storage',
            '24/7 dedicated support',
            'Custom integrations',
            'White-label solution',
            'Advanced API access',
            'Enterprise security',
            'Custom training',
            'SLA guarantee'
          ],
          color: 'from-cyan-600 to-blue-600',
          popular: false
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
        <section id="pricing" className="py-24 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              className="text-center mb-16"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-zinc-900 mb-6">
                Simple, Transparent
                <span className="bg-gradient-to-r from-blue-700 to-cyan-500 bg-clip-text text-transparent"> Pricing</span>
              </h2>
              <p className="text-xl text-zinc-600 max-w-3xl mx-auto mb-12">
                Choose the perfect plan for your team. All plans include our core features with no hidden fees.
              </p>

              {/* Billing Toggle */}
              <motion.div
                className="inline-flex items-center bg-slate-100 rounded-full p-1"
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <button
                  onClick={() => setIsYearly(false)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 ${
                    !isYearly ? 'bg-white text-blue-700 shadow-sm' : 'text-zinc-600'
                  }`}
                >
                  Monthly
                </button>
                <button
                  onClick={() => setIsYearly(true)}
                  className={`px-6 py-2 rounded-full font-medium transition-all duration-200 relative ${
                    isYearly ? 'bg-white text-blue-700 shadow-sm' : 'text-zinc-600'
                  }`}
                >
                  Yearly
                  <span className="absolute -top-2 -right-2 bg-cyan-500 text-white text-xs px-2 py-1 rounded-full">
                    Save 20%
                  </span>
                </button>
              </motion.div>
            </motion.div>

            <motion.div
              className="grid grid-cols-1 md:grid-cols-3 gap-8"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  className={`relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border-2 ${
                    plan.popular 
                      ? 'border-blue-200 scale-105' 
                      : 'border-slate-100 hover:border-slate-200'
                  }`}
                  variants={itemVariants}
                  whileHover={{ y: -8 }}
                >
                  {plan.popular && (
                    <motion.div
                      className="absolute -top-4 left-1/2 transform -translate-x-1/2"
                      initial={{ opacity: 0, y: -10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                    >
                      <div className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                        <Star className="w-4 h-4 mr-1 fill-current" />
                        Most Popular
                      </div>
                    </motion.div>
                  )}

                  <div className="text-center mb-8">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${plan.color} flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 5, scale: 1.1 }}
                      transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    >
                      <Zap className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-2xl font-bold text-zinc-900 mb-2">{plan.name}</h3>
                    <p className="text-zinc-600 mb-6">{plan.description}</p>

                    <div className="mb-6">
                      <motion.div
                        className="text-5xl font-bold text-zinc-900"
                        key={isYearly ? 'yearly' : 'monthly'}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.3 }}
                      >
                        ${isYearly ? plan.yearlyPrice : plan.monthlyPrice}
                      </motion.div>
                      <div className="text-zinc-500">
                        per {isYearly ? 'year' : 'month'}
                        {isYearly && (
                          <span className="block text-sm text-cyan-600 font-medium">
                            Save ${(plan.monthlyPrice * 12) - plan.yearlyPrice}
                          </span>
                        )}
                      </div>
                    </div>

                    <motion.button
                      className={`w-full py-4 rounded-full font-semibold text-lg transition-all duration-200 ${
                        plan.popular
                          ? 'bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:shadow-xl'
                          : 'bg-slate-100 text-zinc-900 hover:bg-slate-200'
                      }`}
                      whileHover={{ scale: 1.02, y: -2 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {plan.popular ? 'Start Free Trial' : 'Get Started'}
                    </motion.button>
                  </div>

                  <div className="space-y-4">
                    <h4 className="font-semibold text-zinc-900 mb-4">Everything included:</h4>
                    {plan.features.map((feature, featureIndex) => (
                      <motion.div
                        key={feature}
                        className="flex items-center"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4, delay: featureIndex * 0.1 }}
                      >
                        <Check className="w-5 h-5 text-cyan-500 mr-3 flex-shrink-0" />
                        <span className="text-zinc-600">{feature}</span>
                      </motion.div>
                    ))}
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
              <p className="text-zinc-600 mb-6">
                All plans include a 14-day free trial. No credit card required.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <motion.button
                  className="text-blue-700 hover:text-blue-800 font-medium underline"
                  whileHover={{ scale: 1.05 }}
                >
                  Compare all features
                </motion.button>
                <span className="text-zinc-400">•</span>
                <motion.button
                  className="text-blue-700 hover:text-blue-800 font-medium underline"
                  whileHover={{ scale: 1.05 }}
                >
                  Contact sales for custom pricing
                </motion.button>
              </div>
            </motion.div>
          </div>
        </section>
      );
    };

    export default Pricing;