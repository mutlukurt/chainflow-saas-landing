import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Check, Star } from 'lucide-react';

const Pricing: React.FC = () => {
  const [isYearly, setIsYearly] = useState(false);

  const plans = [
    {
      name: "Starter",
      price: "Free",
      yearlyPrice: "Free",
      description: "Perfect for trying out workflow chains",
      features: [
        "100 runs per month",
        "5 active workflows",
        "Basic integrations",
        "Community support",
        "Workflow templates"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "$12",
      yearlyPrice: "$10",
      description: "For individuals and small teams",
      features: [
        "5,000 runs per month",
        "Unlimited workflows",
        "All integrations",
        "Priority queue",
        "Email support",
        "Advanced AI nodes",
        "Webhook triggers",
        "Custom schedules"
      ],
      cta: "Start Pro Trial",
      popular: true
    },
    {
      name: "Team",
      price: "$39",
      yearlyPrice: "$32",
      description: "For growing teams and companies",
      features: [
        "25,000 runs per month",
        "Team collaboration",
        "Role-based access",
        "Audit logs",
        "Priority support",
        "SSO integration",
        "Advanced analytics",
        "Custom integrations"
      ],
      cta: "Start Team Trial",
      popular: false
    }
  ];

  return (
    <section id="pricing" className="py-12 md:py-20 lg:py-32 bg-bg-primary relative z-10">
      <div className="container mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-text-primary mb-4 md:mb-6"
          >
            Simple, transparent pricing
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="text-base sm:text-lg text-text-muted mb-6 md:mb-8 max-w-2xl mx-auto px-4"
          >
            Start free, scale as you grow. No hidden fees or surprises.
          </motion.p>

          {/* Billing Toggle */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-3 sm:gap-4 mb-8 md:mb-12"
          >
            <span className={`text-xs sm:text-sm ${!isYearly ? 'text-text-primary' : 'text-text-muted'}`}>
              Monthly
            </span>
            <button
              onClick={() => setIsYearly(!isYearly)}
              className={`relative w-10 h-5 sm:w-12 sm:h-6 rounded-full transition-colors ${
                isYearly ? 'bg-primary' : 'bg-gray-600'
              }`}
            >
              <div
                className={`absolute top-0.5 left-0.5 sm:top-1 sm:left-1 w-3 h-3 sm:w-4 sm:h-4 bg-white rounded-full transition-transform ${
                  isYearly ? 'translate-x-5 sm:translate-x-6' : 'translate-x-0'
                }`}
              />
            </button>
            <span className={`text-xs sm:text-sm ${isYearly ? 'text-text-primary' : 'text-text-muted'}`}>
              Yearly <span className="text-spark text-xs">(-20%)</span>
            </span>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.05,
                y: -10,
                transition: { duration: 0.3, ease: "easeOut" }
              }}
              whileTap={{ 
                scale: 0.98,
                transition: { duration: 0.1 }
              }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={`glass-card p-4 sm:p-6 md:p-8 rounded-2xl relative ${
                plan.popular 
                  ? 'border-primary/50 shadow-lg shadow-primary/20' 
                  : ''
              } flex flex-col cursor-pointer hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300 ${
                index === 2 ? 'sm:col-span-2 lg:col-span-1' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <div className="bg-primary px-3 sm:px-4 py-1 rounded-full flex items-center gap-1">
                    <Star className="w-3 h-3 text-white fill-current" />
                    <span className="text-white text-xs font-medium">Most Popular</span>
                  </div>
                </div>
              )}

              <div className="mb-6 sm:mb-8">
                <h3 className="text-lg sm:text-xl font-semibold text-text-primary mb-2">
                  {plan.name}
                </h3>
                <p className="text-text-muted text-xs sm:text-sm mb-3 sm:mb-4">
                  {plan.description}
                </p>
                <div className="flex items-baseline gap-2">
                  <span className="text-2xl sm:text-3xl md:text-4xl font-bold text-text-primary">
                    {isYearly ? plan.yearlyPrice : plan.price}
                  </span>
                  {plan.price !== "Free" && (
                    <span className="text-text-muted text-sm">/month</span>
                  )}
                </div>
              </div>

              <ul className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center gap-3">
                    <Check className="w-4 h-4 text-spark flex-shrink-0" />
                    <span className="text-text-muted text-xs sm:text-sm">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="mt-auto">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`w-full py-2 sm:py-3 rounded-xl font-medium text-sm sm:text-base transition-all ${
                  plan.popular
                    ? 'btn-primary text-white'
                    : 'btn-ghost'
                }`}
              >
                {plan.cta}
              </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;