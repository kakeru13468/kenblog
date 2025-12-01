import { motion } from 'motion/react';
import { Globe, Layout } from 'lucide-react';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();

  const services = [
    {
      icon: Globe,
      title: t('services.webDev.title'),
      description: t('services.webDev.desc'),
      features: t('services.webDev.features', { returnObjects: true }) as string[],
    },
    {
      icon: Layout,
      title: t('services.uiux.title'),
      description: t('services.uiux.desc'),
      features: t('services.uiux.features', { returnObjects: true }) as string[],
    },
  
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-cyan-600 dark:text-cyan-400 mb-12"
      >
        {t('services.title')}
      </motion.h2>

      <div className="grid grid-cols-12 gap-4 auto-rows-[280px]">
        {services.map((service, index) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="col-span-12 md:col-span-6 bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-600 dark:hover:border-cyan-400 cursor-pointer"
            >
              <div className="w-14 h-14 bg-cyan-600 dark:bg-cyan-500 rounded-2xl flex items-center justify-center mb-6">
                <Icon className="w-7 h-7 text-white" />
              </div>
              
              <h3 className="text-cyan-600 dark:text-cyan-400 mb-3">
                {service.title}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-400 mb-6">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                    <div className="w-1.5 h-1.5 bg-cyan-600 dark:bg-cyan-400 rounded-full" />
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          );
        })}

        {/* CTA Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="col-span-12 bg-linear-to-br from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 rounded-3xl p-12 text-center"
        >
          <h3 className="text-white mb-4">
            {t('services.cta.title')}
          </h3>
          <p className="text-cyan-100 dark:text-cyan-50 mb-6 max-w-2xl mx-auto">
            {t('services.cta.desc')}
          </p>
          <button
            className="bg-white text-cyan-600 px-8 py-3 rounded-xl hover:bg-cyan-50 cursor-pointer"
            onClick={() => window.location.href = '/contact'}
          >
            {t('services.cta.button')}
          </button>
        </motion.div>
      </div>
    </div>
  );
}

