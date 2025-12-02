import { motion } from 'motion/react';
import emailjs from '@emailjs/browser';
import { Mail, MapPin, Phone, Send, Copy, Check } from 'lucide-react';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export function Contact() {
  const { t, i18n } = useTranslation();
  const lang = i18n.language.startsWith('zh') ? 'zh' : 'en';
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setError(null);

    try {
      // EmailJS credentials from environment variables
      const SERVICE_ID = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const PUBLIC_KEY = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      await emailjs.send(
        SERVICE_ID,
        TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        PUBLIC_KEY
      );

      console.log('Email sent successfully');
      setFormData({ name: '', email: '', message: '' });
      setShowSuccess(true);
      setTimeout(() => setShowSuccess(false), 3000);
    } catch (err) {
      console.error('Failed to send email:', err);
      setError(lang === 'zh' ? '發送失敗，請稍後再試。' : 'Failed to send message. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCopy = async (text: string, field: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedField(field);
      setTimeout(() => setCopiedField(null), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const email = 'auchergod@gmail.com';
  const phone = '+886 905991195';

  return (
    <div className="max-w-7xl mx-auto px-6 py-12">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-cyan-600 dark:text-cyan-400 mb-12"
      >
        {t('contact.title')}
      </motion.h2>

      <div className="grid grid-cols-12 gap-4">
        {/* Contact Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          onClick={() => handleCopy(email, 'email')}
          className="col-span-12 md:col-span-4 h-[140px] bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-6 flex items-center gap-4 cursor-pointer hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors group"
        >
          <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <Mail className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-neutral-500 dark:text-neutral-400 mb-1">{t('contact.info.email')}</p>
            <p className="text-cyan-600 dark:text-cyan-400 truncate">{email}</p>
          </div>
          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            {copiedField === 'email' ? (
              <Check className="w-5 h-5 text-emerald-500" />
            ) : (
              <Copy className="w-5 h-5 text-neutral-400" />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.15 }}
          onClick={() => handleCopy(phone, 'phone')}
          className="col-span-12 md:col-span-4 h-[140px] bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-6 flex items-center gap-4 cursor-pointer hover:border-cyan-600 dark:hover:border-cyan-400 transition-colors group"
        >
          <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <Phone className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-neutral-500 dark:text-neutral-400 mb-1">{t('contact.info.phone')}</p>
            <p className="text-cyan-600 dark:text-cyan-400 truncate">{phone}</p>
          </div>
          <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
            {copiedField === 'phone' ? (
              <Check className="w-5 h-5 text-emerald-500" />
            ) : (
              <Copy className="w-5 h-5 text-neutral-400" />
            )}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="col-span-12 md:col-span-4 h-[140px] bg-white dark:bg-neutral-900 border border-cyan-200 dark:border-cyan-500/20 rounded-3xl p-6 flex items-center gap-4"
        >
          <div className="w-12 h-12 bg-cyan-50 dark:bg-cyan-950/30 rounded-xl flex items-center justify-center flex-shrink-0">
            <MapPin className="w-6 h-6 text-cyan-600 dark:text-cyan-400" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-neutral-500 dark:text-neutral-400 mb-1">{t('contact.info.location')}</p>
            <p className="text-cyan-600 dark:text-cyan-400 truncate">{t('contact.info.city')}</p>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.25 }}
          className="col-span-12 bg-linear-to-br from-cyan-600 to-cyan-700 dark:from-cyan-500 dark:to-cyan-600 rounded-3xl p-8 md:p-12"
        >
          <h3 className="text-white mb-6">
            {t('contact.form.title')}
          </h3>

          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="name" className="block text-cyan-100 dark:text-cyan-50 mb-2">
                {t('contact.form.name')}
              </label>
              <input
                id="name"
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="w-full bg-cyan-700/50 dark:bg-cyan-800/50 border border-cyan-500 dark:border-cyan-400/30 rounded-xl px-4 py-3 text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-300"
                placeholder={t('contact.form.namePlaceholder')}
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-cyan-100 dark:text-cyan-50 mb-2">
                {t('contact.form.email')}
              </label>
              <input
                id="email"
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full bg-cyan-700/50 dark:bg-cyan-800/50 border border-cyan-500 dark:border-cyan-400/30 rounded-xl px-4 py-3 text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-300"
                placeholder={t('contact.form.emailPlaceholder')}
              />
            </div>

            <div className="md:col-span-2">
              <label htmlFor="message" className="block text-cyan-100 dark:text-cyan-50 mb-2">
                {t('contact.form.message')}
              </label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                rows={5}
                className="w-full bg-cyan-700/50 dark:bg-cyan-800/50 border border-cyan-500 dark:border-cyan-400/30 rounded-xl px-4 py-3 text-white placeholder-cyan-300 focus:outline-none focus:border-cyan-400 dark:focus:border-cyan-300 resize-none"
                placeholder={t('contact.form.messagePlaceholder')}
              />
            </div>

            <div className="md:col-span-2">
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full md:w-auto bg-white text-cyan-600 px-8 py-3 rounded-xl hover:bg-cyan-50 flex items-center justify-center gap-2 cursor-pointer disabled:opacity-70 disabled:cursor-not-allowed"
              >
                {isSubmitting ? (lang === 'zh' ? '傳送中...' : 'Sending...') : t('contact.form.submit')}
                {!isSubmitting && <Send className="w-4 h-4" />}
              </button>
              {error && (
                <p className="mt-2 text-red-300 text-sm">{error}</p>
              )}
            </div>
          </form>
        </motion.div>
      </div>

      {/* Toast for copy feedback */}
      {copiedField && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 px-4 py-2 rounded-xl shadow-lg flex items-center gap-2"
        >
          <Check className="w-4 h-4 text-emerald-500" />
          {lang === 'zh' ? '已複製到剪貼簿' : 'Copied to clipboard'}
        </motion.div>
      )}

      {/* Success Toast */}
      {showSuccess && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-6 right-6 bg-emerald-500 text-white px-6 py-3 rounded-xl shadow-lg flex items-center gap-2"
        >
          <Check className="w-5 h-5" />
          {lang === 'zh' ? '訊息已發送！' : 'Message Sent!'}
        </motion.div>
      )}
    </div>
  );
}
