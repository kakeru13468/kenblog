import { motion } from 'motion/react';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { getProjectById } from '../../data/projects';

export function ProjectDetail() {
  const { i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en';
  
  const project = id ? getProjectById(id) : undefined;
  
  if (!project) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-cyan-600 dark:text-cyan-400 mb-4">
            {lang === 'zh' ? '找不到專案' : 'Project Not Found'}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            {lang === 'zh' ? '您要找的專案不存在或已被移除。' : 'The project you are looking for does not exist or has been removed.'}
          </p>
          <button
            onClick={() => navigate('/projects')}
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'zh' ? '返回專案列表' : 'Back to Projects'}
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/projects')}
        className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'zh' ? '返回專案列表' : 'Back to Projects'}
      </motion.button>

      {/* Cover Image */}
      {project.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 rounded-3xl overflow-hidden"
        >
          <img
            src={project.coverImage}
            alt={project.title[lang]}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </motion.div>
      )}

      {/* Project Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 rounded-lg">
            {project.category[lang]}
          </span>
          <span className="text-neutral-500 dark:text-neutral-400">
            {project.year}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
          {project.title[lang]}
        </h1>

        <p className="text-lg text-neutral-600 dark:text-neutral-400">
          {project.description[lang]}
        </p>
      </motion.header>

      {/* Technologies */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="mb-8"
      >
        <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-3">
          {lang === 'zh' ? '使用技術' : 'Technologies'}
        </h3>
        <div className="flex flex-wrap gap-2">
          {project.technologies.map((tech, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 rounded-lg text-sm"
            >
              {tech}
            </span>
          ))}
        </div>
      </motion.div>

      {/* Links */}
      {(project.liveUrl || project.githubUrl) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="flex gap-4 mb-12"
        >
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 dark:bg-cyan-500 text-white rounded-xl hover:bg-cyan-700 dark:hover:bg-cyan-600"
            >
              <ExternalLink className="w-4 h-4" />
              {lang === 'zh' ? '查看網站' : 'View Live'}
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 bg-neutral-800 dark:bg-neutral-700 text-white rounded-xl hover:bg-neutral-900 dark:hover:bg-neutral-600"
            >
              <Github className="w-4 h-4" />
              GitHub
            </a>
          )}
        </motion.div>
      )}

      {/* Project Images Gallery */}
      {project.images && project.images.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.22 }}
          className="mb-12"
        >
          <h3 className="text-sm font-medium text-neutral-500 dark:text-neutral-400 mb-4">
            {lang === 'zh' ? '專案截圖' : 'Screenshots'}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {project.images.map((image, index) => (
              <div
                key={index}
                className="rounded-2xl overflow-hidden border border-cyan-200 dark:border-cyan-500/20"
              >
                <img
                  src={image}
                  alt={`${project.title[lang]} screenshot ${index + 1}`}
                  className="w-full h-[200px] object-cover hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </motion.div>
      )}

      {/* Project Content (Markdown) */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.25 }}
        className="markdown-content"
      >
        <ReactMarkdown
          remarkPlugins={[remarkBreaks]}
          components={{
            h1: ({ children }) => (
              <h1 className="text-3xl font-bold text-cyan-600 dark:text-cyan-400 mb-6 mt-8 first:mt-0 leading-tight">
                {children}
              </h1>
            ),
            h2: ({ children }) => (
              <h2 className="text-2xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4 mt-8 leading-tight">
                {children}
              </h2>
            ),
            h3: ({ children }) => (
              <h3 className="text-xl font-semibold text-neutral-800 dark:text-neutral-200 mb-3 mt-6 leading-tight">
                {children}
              </h3>
            ),
            p: ({ children }) => (
              <p className="text-base text-neutral-700 dark:text-neutral-300 mb-5 leading-relaxed">
                {children}
              </p>
            ),
            ul: ({ children }) => (
              <ul className="list-disc list-outside ml-6 mb-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                {children}
              </ul>
            ),
            ol: ({ children }) => (
              <ol className="list-decimal list-outside ml-6 mb-6 space-y-2 text-neutral-700 dark:text-neutral-300">
                {children}
              </ol>
            ),
            li: ({ children }) => (
              <li className="leading-relaxed pl-2">
                {children}
              </li>
            ),
            strong: ({ children }) => (
              <strong className="font-semibold text-neutral-900 dark:text-neutral-100">
                {children}
              </strong>
            ),
            em: ({ children }) => (
              <em className="italic text-neutral-800 dark:text-neutral-200">
                {children}
              </em>
            ),
            a: ({ href, children }) => (
              <a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300 underline underline-offset-2 transition-colors"
              >
                {children}
              </a>
            ),
            hr: () => (
              <hr className="my-8 border-0 border-t border-cyan-200 dark:border-cyan-500/20" />
            ),
            img: ({ src, alt }) => (
              <img
                src={src}
                alt={alt}
                className="rounded-2xl border border-cyan-200 dark:border-cyan-500/20 my-6 w-full"
              />
            ),
            code: ({ children }) => (
              <code className="px-2 py-1 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-700 dark:text-cyan-300 rounded text-sm font-mono">
                {children}
              </code>
            ),
            pre: ({ children }) => (
              <pre className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-xl border border-cyan-200 dark:border-cyan-500/20 overflow-x-auto mb-6">
                {children}
              </pre>
            ),
          }}
        >
          {project.fullDescription[lang]}
        </ReactMarkdown>
      </motion.article>

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12 pt-8 border-t border-cyan-200 dark:border-cyan-500/20"
      >
        <button
          onClick={() => navigate('/projects')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 dark:bg-cyan-500 text-white rounded-xl hover:bg-cyan-700 dark:hover:bg-cyan-600"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'zh' ? '查看所有專案' : 'View All Projects'}
        </button>
      </motion.div>
    </div>
  );
}
