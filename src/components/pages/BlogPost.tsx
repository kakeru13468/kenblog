import { motion } from 'motion/react';
import { Calendar, Clock, ArrowLeft, Tag } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useParams, useNavigate } from 'react-router-dom';
import ReactMarkdown from 'react-markdown';
import remarkBreaks from 'remark-breaks';
import { getPostById } from '../../data/posts';

export function BlogPost() {
  const { t, i18n } = useTranslation();
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en';
  
  const post = id ? getPostById(id) : undefined;
  
  if (!post) {
    return (
      <div className="max-w-4xl mx-auto px-6 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center"
        >
          <h2 className="text-cyan-600 dark:text-cyan-400 mb-4">
            {lang === 'zh' ? '找不到文章' : 'Post Not Found'}
          </h2>
          <p className="text-neutral-600 dark:text-neutral-400 mb-8">
            {lang === 'zh' ? '您要找的文章不存在或已被移除。' : 'The post you are looking for does not exist or has been removed.'}
          </p>
          <button
            onClick={() => navigate('/blog')}
            className="inline-flex items-center gap-2 text-cyan-600 dark:text-cyan-400 hover:text-cyan-700 dark:hover:text-cyan-300"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'zh' ? '返回部落格' : 'Back to Blog'}
          </button>
        </motion.div>
      </div>
    );
  }
  
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12">
      {/* Back Button */}
      <motion.button
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        onClick={() => navigate('/blog')}
        className="inline-flex items-center gap-2 text-neutral-500 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400 mb-8"
      >
        <ArrowLeft className="w-4 h-4" />
        {lang === 'zh' ? '返回部落格' : 'Back to Blog'}
      </motion.button>

      {/* Cover Image */}
      {post.coverImage && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-8 rounded-3xl overflow-hidden"
        >
          <img
            src={post.coverImage}
            alt={post.title[lang]}
            className="w-full h-[300px] md:h-[400px] object-cover"
          />
        </motion.div>
      )}

      {/* Article Header */}
      <motion.header
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="mb-12"
      >
        <div className="flex items-center gap-3 mb-4">
          <span className="px-3 py-1 bg-cyan-50 dark:bg-cyan-950/30 text-cyan-600 dark:text-cyan-400 rounded-lg">
            {post.category[lang]}
          </span>
          <span className="text-neutral-500 dark:text-neutral-400 flex items-center gap-1">
            <Clock className="w-4 h-4" />
            {post.readTime} {t('blog.readTime')}
          </span>
        </div>

        <h1 className="text-3xl md:text-4xl font-semibold text-cyan-600 dark:text-cyan-400 mb-4">
          {post.title[lang]}
        </h1>

        <div className="flex items-center gap-4 text-neutral-500 dark:text-neutral-400">
          <span className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {formatDate(post.date)}
          </span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </motion.header>

      {/* Article Content */}
      <motion.article
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
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
            blockquote: ({ children }) => (
              <blockquote className="border-l-4 border-cyan-500 dark:border-cyan-400 pl-4 py-2 my-6 italic text-neutral-700 dark:text-neutral-300 bg-cyan-50/50 dark:bg-cyan-950/20 rounded-r">
                {children}
              </blockquote>
            ),
          }}
        >
          {post.content[lang]}
        </ReactMarkdown>
      </motion.article>

      {/* Tags */}
      {post.tags && post.tags.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 pt-8 border-t border-cyan-200 dark:border-cyan-500/20"
        >
          <div className="flex items-center gap-2 flex-wrap">
            <Tag className="w-4 h-4 text-neutral-500 dark:text-neutral-400" />
            {post.tags.map((tag, index) => (
              <span
                key={index}
                className="px-3 py-1 bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 rounded-lg text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.div>
      )}

      {/* Navigation */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="mt-12 pt-8 border-t border-cyan-200 dark:border-cyan-500/20"
      >
        <button
          onClick={() => navigate('/blog')}
          className="inline-flex items-center gap-2 px-6 py-3 bg-cyan-600 dark:bg-cyan-500 text-white rounded-xl hover:bg-cyan-700 dark:hover:bg-cyan-600"
        >
          <ArrowLeft className="w-4 h-4" />
          {lang === 'zh' ? '查看所有文章' : 'View All Posts'}
        </button>
      </motion.div>
    </div>
  );
}
