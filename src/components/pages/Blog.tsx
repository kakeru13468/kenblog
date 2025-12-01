import { useState } from 'react';
import { motion } from 'motion/react';
import { Calendar, Clock } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { useNavigate } from 'react-router-dom';
import { getAllPosts } from '../../data/posts';
import { addSubscriber } from '../../data/subscribers';

export function Blog() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en';
  const posts = getAllPosts();

  const [email, setEmail] = useState('');
  const [subscribeStatus, setSubscribeStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [subscribeMessage, setSubscribeMessage] = useState('');

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString(lang === 'zh' ? 'zh-TW' : 'en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    const result = addSubscriber(email);

    if (result.success) {
      setSubscribeStatus('success');
      setSubscribeMessage(lang === 'zh' ? '訂閱成功！感謝您的支持。' : 'Subscribed successfully! Thank you for your support.');
      setEmail('');
    } else {
      setSubscribeStatus('error');
      if (result.message === 'already_subscribed') {
        setSubscribeMessage(lang === 'zh' ? '此 Email 已訂閱過了。' : 'This email is already subscribed.');
      } else {
        setSubscribeMessage(lang === 'zh' ? '請輸入有效的 Email 地址。' : 'Please enter a valid email address.');
      }
    }

    // 3 秒後重置狀態
    setTimeout(() => {
      setSubscribeStatus('idle');
      setSubscribeMessage('');
    }, 3000);
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-cyan-600 dark:text-cyan-400 mb-12"
      >
        {t('blog.title')}
      </motion.h2>

      <div className="grid grid-cols-1 md:grid-cols-12 gap-4 auto-rows-auto md:auto-rows-[260px]">
        {posts.map((post, index) => (
          <motion.article
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            onClick={() => navigate(`/blog/${post.id}`)}
            className={`${index === 0
                ? 'col-span-12 md:col-span-8 row-span-1'
                : 'col-span-12 md:col-span-4 row-span-1'
              } bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-8 hover:border-cyan-600 dark:hover:border-cyan-400 cursor-pointer group`}
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

            <h3 className="text-cyan-600 dark:text-cyan-400 mb-3 group-hover:text-cyan-700 dark:group-hover:text-cyan-300">
              {post.title[lang]}
            </h3>

            <p className="text-neutral-600 dark:text-neutral-400 mb-4 line-clamp-2">
              {post.excerpt[lang]}
            </p>

            <div className="flex items-center gap-2 text-neutral-500 dark:text-neutral-400">
              <Calendar className="w-4 h-4" />
              {formatDate(post.date)}
            </div>
          </motion.article>
        ))}

        {/* Newsletter Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="col-span-12 md:col-span-8 bg-linear-to-br from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-white mb-3">
            {t('blog.newsletter.title')}
          </h3>
          <p className="text-cyan-100 dark:text-cyan-50 mb-6 max-w-2xl">
            {t('blog.newsletter.desc')}
          </p>
          <form onSubmit={handleSubscribe} className="flex flex-col md:flex-row gap-3">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder={t('blog.newsletter.placeholder')}
              className="flex-1 bg-cyan-700/50 dark:bg-cyan-800/50 border border-cyan-500 dark:border-cyan-400/30 rounded-xl px-4 py-3 text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-300"
            />
            <button
              type="submit"
              className="bg-white text-cyan-600 px-6 py-3 rounded-xl hover:bg-cyan-50 whitespace-nowrap cursor-pointer"
            >
              {t('blog.newsletter.button')}
            </button>
          </form>
          {subscribeMessage && (
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className={`mt-4 text-sm ${subscribeStatus === 'success' ? 'text-cyan-100' : 'text-red-200'
                }`}
            >
              {subscribeMessage}
            </motion.p>
          )}
        </motion.div>
      </div>
    </div>
  );
}
