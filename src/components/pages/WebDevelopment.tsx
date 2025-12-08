import { motion } from 'motion/react';
import { Code, Globe, Zap, Shield, Palette } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';

export function WebDevelopment() {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const services = [
    {
      icon: Globe,
      title: t('webDev.services.responsive.title'),
      description: t('webDev.services.responsive.desc'),
      features: (t('webDev.services.responsive.features', { returnObjects: true }) || []) as string[],
    },
    {
      icon: Code,
      title: t('webDev.services.modern.title'),
      description: t('webDev.services.modern.desc'),
      features: (t('webDev.services.modern.features', { returnObjects: true }) || []) as string[],
    },
    {
      icon: Zap,
      title: t('webDev.services.performance.title'),
      description: t('webDev.services.performance.desc'),
      features: (t('webDev.services.performance.features', { returnObjects: true }) || []) as string[],
    },
    {
      icon: Shield,
      title: t('webDev.services.security.title'),
      description: t('webDev.services.security.desc'),
      features: (t('webDev.services.security.features', { returnObjects: true }) || []) as string[],
    },
    {
      icon: Palette,
      title: t('webDev.services.custom.title'),
      description: t('webDev.services.custom.desc'),
      features: (t('webDev.services.custom.features', { returnObjects: true }) || []) as string[],
    },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-center mb-16"
      >
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="text-4xl md:text-5xl font-bold text-cyan-600 dark:text-cyan-400 mb-4"
        >
          {t('webDev.hero.title')}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto mb-8"
        >
          {t('webDev.hero.description')}
        </motion.p>
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          onClick={() => navigate('/contact')}
          className="bg-cyan-600 dark:bg-cyan-500 text-white px-8 py-3 rounded-xl hover:bg-cyan-700 dark:hover:bg-cyan-600 transition-colors font-medium"
        >
          {t('webDev.hero.cta')}
        </motion.button>
      </motion.div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors"
            >
              <div className="w-14 h-14 bg-cyan-600 dark:bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-cyan-600 dark:text-cyan-400 mb-3 text-xl font-semibold">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {Array.isArray(service.features) && service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <div className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}
      </div>

      {/* Process Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7 }}
        className="bg-cyan-50 dark:bg-cyan-950/30 rounded-3xl p-12 mb-16"
      >
        <h2 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-8 text-center">
          {t('webDev.process.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[1, 2, 3, 4].map((step) => (
            <motion.div
              key={step}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 + step * 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-cyan-600 dark:bg-cyan-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white text-2xl font-bold">
                {step}
              </div>
              <h3 className="text-cyan-600 dark:text-cyan-400 font-semibold mb-2">
                {t(`webDev.process.step${step}.title`)}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm">
                {t(`webDev.process.step${step}.desc`)}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* CTA Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.1 }}
        className="bg-linear-to-br from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 rounded-3xl p-12 text-center"
      >
        <h3 className="text-white text-3xl font-bold mb-4">
          {t('webDev.cta.title')}
        </h3>
        <p className="text-cyan-100 dark:text-cyan-50 mb-6 max-w-2xl mx-auto text-lg">
          {t('webDev.cta.desc')}
        </p>
        <button
          onClick={() => navigate('/contact')}
          className="bg-white text-cyan-600 px-8 py-3 rounded-xl hover:bg-cyan-50 cursor-pointer font-medium"
        >
          {t('webDev.cta.button')}
        </button>
      </motion.div>
    </div>
  );
}

