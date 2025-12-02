import { motion } from 'motion/react';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import kakeruPhoto from '../../assets/kakeru.png';
import avatarPhoto from '../../assets/avatar.png';

export function About() {
  const { t } = useTranslation();
  const [showFullPhoto, setShowFullPhoto] = useState(false);
  const [rotation, setRotation] = useState(0);

  const handlePhotoClick = () => {
    setShowFullPhoto(!showFullPhoto);
    setRotation(prev => prev + 360);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-cyan-600 dark:text-cyan-400 mb-12"
      >
        {t('about.title')}
      </motion.h2>

      <div className="grid grid-cols-12 gap-4 auto-rows-[180px] md:auto-rows-[180px]">
        {/* Main Bio - 2 rows */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="col-span-12 md:col-span-7 row-span-3 md:row-span-2 bg-linear-to-br from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 rounded-3xl p-8 md:p-12 flex flex-col justify-center overflow-y-auto"
        >
          <h1 className="text-cyan-100 dark:text-cyan-50 mb-4">{t('about.bio.h1')}</h1>
          <p className="text-cyan-100 dark:text-cyan-50 mb-4">
            {t('about.bio.p1')}
          </p>
          <p className="text-cyan-100 dark:text-cyan-50 mb-4">
            {t('about.bio.p2')}
          </p>
          <p className="text-cyan-100 dark:text-cyan-50 mb-4">
            {t('about.bio.p3')}
          </p>
          <p className="text-cyan-100 dark:text-cyan-50">
            {t('about.bio.p4')}
          </p>
        </motion.div>

        {/* Photo Card - 3 rows on right */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          className="col-span-12 md:col-span-5 row-span-2 md:row-span-3 rounded-3xl overflow-hidden relative group cursor-pointer"
          onClick={handlePhotoClick}
          style={{ perspective: '1000px' }}
        >
          <motion.div
            animate={{ rotateY: rotation }}
            transition={{
              duration: 0.8,
              ease: [0.4, 0, 0.2, 1]
            }}
            style={{
              transformStyle: 'preserve-3d',
              width: '100%',
              height: '100%',
              position: 'relative'
            }}
          >
            {/* Front side */}
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
              }}
            >
              <img
                src={showFullPhoto ? kakeruPhoto : avatarPhoto}
                alt={showFullPhoto ? "Kakeru" : "Avatar"}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>

            {/* Back side */}
            <div
              className="absolute inset-0"
              style={{
                backfaceVisibility: 'hidden',
                WebkitBackfaceVisibility: 'hidden',
                transform: 'rotateY(180deg)'
              }}
            >
              <img
                src={showFullPhoto ? avatarPhoto : kakeruPhoto}
                alt={showFullPhoto ? "Avatar" : "Kakeru"}
                className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </motion.div>
          <div className="absolute inset-0 bg-black/20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none z-10">
            <p className="text-white text-sm font-medium">
              {showFullPhoto ? t('about.photo.clickToReturn') : t('about.photo.clickToView')}
            </p>
          </div>
        </motion.div>

        {/* Work Experience - Below Bio */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 md:col-span-7 row-span-1 bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-6 flex gap-8"
        >
          <div className="flex-1">
            <p className="text-neutral-500 dark:text-neutral-400 mb-3">{t('about.experience.title')}</p>
            <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-1">{t('about.experience.position')}</p>
            <p className="text-neutral-600 dark:text-neutral-400 text-sm mb-2">{t('about.experience.company')}</p>
            <p className="text-neutral-500 dark:text-neutral-500 text-sm">{t('about.experience.period')}</p>
          </div>
          <div className="flex-1">
            <p className="text-neutral-500 dark:text-neutral-400 mb-3">{t('about.education.title')}</p>
            <p className="text-cyan-600 dark:text-cyan-400 font-medium mb-1">{t('about.education.degree')}</p>
            <p className="text-neutral-600 dark:text-neutral-400">{t('about.education.university')}</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
