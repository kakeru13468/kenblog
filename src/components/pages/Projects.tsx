import { motion } from 'motion/react';
import { ExternalLink } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getAllProjects } from '../../data/projects';

export function Projects() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en';
  const projects = getAllProjects();

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-cyan-600 dark:text-cyan-400 mb-12"
      >
        {t('projects.title')}
      </motion.h2>

      <div className="grid grid-cols-12 gap-4 auto-rows-[240px]">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/projects/${project.id}`)}
            className={`${
              index === 0 || index === 3
                ? 'col-span-12 md:col-span-8'
                : 'col-span-12 md:col-span-4'
            } bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-8 hover:shadow-lg dark:hover:shadow-cyan-500/10 cursor-pointer group relative overflow-hidden`}
          >
            <div className="absolute inset-0 bg-linear-to-br from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 opacity-0 group-hover:opacity-100 transition-opacity rounded-3xl" />
            
            <div className="relative z-10">
              <div className="flex justify-between items-start mb-4">
                <span className="text-neutral-500 dark:text-neutral-400 group-hover:text-cyan-100 group-hover:dark:text-cyan-50">
                  {project.category[lang]}
                </span>
                <ExternalLink className="w-5 h-5 text-cyan-400 group-hover:text-white" />
              </div>
              
              <h3 className="text-cyan-600 dark:text-cyan-400 group-hover:text-white mb-2">
                {project.title[lang]}
              </h3>
              
              <p className="text-neutral-600 dark:text-neutral-400 group-hover:text-cyan-100 group-hover:dark:text-cyan-50 mb-4">
                {project.description[lang]}
              </p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.slice(0, 3).map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 group-hover:bg-cyan-600/30 group-hover:text-white rounded"
                  >
                    {tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs text-neutral-400 group-hover:text-cyan-200">
                    +{project.technologies.length - 3}
                  </span>
                )}
              </div>
              
              <span className="text-neutral-400 group-hover:text-cyan-200">
                {project.year}
              </span>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
