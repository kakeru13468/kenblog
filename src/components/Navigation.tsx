import { motion } from 'motion/react';
import { Moon, Sun } from 'lucide-react';
import { useTheme } from './ThemeProvider';
import { useTranslation } from 'react-i18next';
import { LanguageSwitcher } from './LanguageSwitcher';
import { Link } from 'react-router-dom';
import avatar from '../assets/avatar.png';

interface NavigationProps {
  currentPage: string;
}

export function Navigation({ currentPage }: NavigationProps) {
  const { theme, toggleTheme } = useTheme();
  const { t } = useTranslation();
  
  const navItems = [
    { id: 'home', label: t('nav.home'), path: '/' },
    { id: 'about', label: t('nav.about'), path: '/about' },
    { id: 'projects', label: t('nav.projects'), path: '/projects' },
    { id: 'services', label: t('nav.services'), path: '/services' },
    { id: 'contact', label: t('nav.contact'), path: '/contact' },
    { id: 'blog', label: t('nav.blog'), path: '/blog' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 bg-white/80 dark:bg-neutral-900/80 backdrop-blur-md border-b border-cyan-200 dark:border-cyan-500/20 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/">
            <motion.img
              src={avatar}
              alt="Avatar"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
              className="w-10 h-10 rounded-xl object-cover cursor-pointer hover:opacity-80 transition-opacity"
          />
          </Link>
          
          <div className="flex items-center gap-4">
            <div className="flex gap-2">
              {navItems.map((item) => (
                <Link
                  key={item.id}
                  to={item.path}
                  className={`px-4 py-2 rounded-xl relative ${
                    currentPage === item.id
                      ? 'text-cyan-600 dark:text-cyan-400'
                      : 'text-neutral-500 dark:text-neutral-400 hover:text-cyan-600 dark:hover:text-cyan-400'
                  }`}
                >
                  {item.label}
                  {currentPage === item.id && (
                    <motion.div
                      layoutId="activeTab"
                      className="absolute inset-0 bg-cyan-50 dark:bg-cyan-950/50 rounded-xl -z-10"
                      transition={{ type: 'spring', duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </div>
            
            <LanguageSwitcher />
            
            <button
              onClick={toggleTheme}
              className="w-10 h-10 rounded-xl bg-cyan-50 dark:bg-cyan-950/50 flex items-center justify-center text-cyan-600 dark:text-cyan-400 hover:bg-cyan-100 dark:hover:bg-cyan-900/50 transition-colors"
              aria-label="Toggle theme"
            >
              {theme === 'light' ? (
                <Moon className="w-5 h-5" />
              ) : (
                <Sun className="w-5 h-5" />
              )}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
