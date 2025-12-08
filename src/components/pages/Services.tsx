import { motion } from 'motion/react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { FadeInExample } from '../animations/FadeInExample';
import { StaggerExample } from '../animations/StaggerExample';
import { HoverScaleExample } from '../animations/HoverScaleExample';
import { LayoutAnimationExample } from '../animations/LayoutAnimationExample';
import { PathMorphingExample } from '../animations/PathMorphingExample';
import { FloatingBubblesExample } from '../animations/FloatingBubblesExample';
import { ColorInterpolationExample } from '../animations/ColorInterpolationExample';
import { AnimatePresenceExample } from '../animations/AnimatePresenceExample';
import { CardHoverExample } from '../animations/CardHoverExample';

type Category = 'all' | 'fundamentals' | 'loading' | 'interactions' | 'svg' | 'scroll';

interface AnimationExample {
  id: string;
  category: Category[];
  component: React.ComponentType;
}

export function Services() {
  const { t } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<Category>('all');

  const examples: AnimationExample[] = [
    {
      id: 'fadeIn',
      category: ['fundamentals'],
      component: FadeInExample,
    },
    {
      id: 'stagger',
      category: ['fundamentals'],
      component: StaggerExample,
    },
    {
      id: 'hoverScale',
      category: ['interactions'],
      component: HoverScaleExample,
    },
    {
      id: 'layoutAnimation',
      category: ['interactions'],
      component: LayoutAnimationExample,
    },
    {
      id: 'pathMorphing',
      category: ['svg', 'loading'],
      component: PathMorphingExample,
    },
    {
      id: 'floatingBubbles',
      category: ['interactions'],
      component: FloatingBubblesExample,
    },
    {
      id: 'colorInterpolation',
      category: ['interactions'],
      component: ColorInterpolationExample,
    },
    {
      id: 'animatePresence',
      category: ['interactions'],
      component: AnimatePresenceExample,
    },
    {
      id: 'cardHover',
      category: ['interactions'],
      component: CardHoverExample,
    },
  ];

  const categories: { id: Category; label: string }[] = [
    { id: 'all', label: t('services.filters.all') },
    { id: 'fundamentals', label: t('services.filters.fundamentals') },
    { id: 'loading', label: t('services.filters.loading') },
    { id: 'interactions', label: t('services.filters.interactions') },
    { id: 'svg', label: t('services.filters.svg') },
    { id: 'scroll', label: t('services.filters.scroll') },
  ];

  const filteredExamples = examples.filter((example) =>
    selectedCategory === 'all' ? true : example.category.includes(selectedCategory)
  );

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-cyan-600 dark:text-cyan-400 mb-4"
      >
        {t('services.title')}
      </motion.h2>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-neutral-600 dark:text-neutral-400 mb-8"
      >
        {t('services.subtitle')}
      </motion.p>

      {/* Category Filters */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="flex flex-wrap gap-2 mb-8"
      >
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
              selectedCategory === category.id
                ? 'bg-cyan-600 dark:bg-cyan-500 text-white'
                : 'bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 text-neutral-600 dark:text-neutral-400 hover:border-cyan-600 dark:hover:border-cyan-400'
            }`}
          >
            {category.label}
          </button>
        ))}
      </motion.div>

      {/* Animation Examples Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredExamples.map((example, index) => {
          const ExampleComponent = example.component;
          return (
            <motion.div
              key={example.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-6 hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors"
            >
              <div className="h-48 mb-4 bg-neutral-50 dark:bg-neutral-800 rounded-2xl overflow-hidden">
                <ExampleComponent />
              </div>
              <h3 className="text-cyan-600 dark:text-cyan-400 mb-2 font-medium">
                {t(`services.examples.${example.id}.title`)}
              </h3>
              <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">
                {t(`services.examples.${example.id}.desc`)}
              </p>
              <p className="text-neutral-500 dark:text-neutral-500 text-xs">
                {t(`services.examples.${example.id}.usage`)}
              </p>
            </motion.div>
          );
        })}
      </div>

      {/* CTA Section */}
      {filteredExamples.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mt-12 bg-linear-to-br from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 rounded-3xl p-12 text-center"
        >
          <h3 className="text-white mb-4 text-xl">
            {t('services.cta.title')}
          </h3>
          <p className="text-cyan-100 dark:text-cyan-50 mb-6 max-w-2xl mx-auto">
            {t('services.cta.desc')}
          </p>
          <button
            className="bg-white text-cyan-600 px-8 py-3 rounded-xl hover:bg-cyan-50 cursor-pointer font-medium"
            onClick={() => window.location.href = '/contact'}
          >
            {t('services.cta.button')}
          </button>
        </motion.div>
      )}
    </div>
  );
}
