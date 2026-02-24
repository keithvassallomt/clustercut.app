import { Github, Book, Moon, Sun, Monitor } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTheme } from '../hooks/useTheme';

export default function Navbar() {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    if (theme === 'system') setTheme('light');
    else if (theme === 'light') setTheme('dark');
    else setTheme('system');
  };

  const getThemeIcon = () => {
    // Show the icon for the *next* state
    if (theme === 'system') return <Sun className="w-4 h-4" />;
    if (theme === 'light') return <Moon className="w-4 h-4" />;
    return <Monitor className="w-4 h-4" />;
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-white/70 dark:bg-black/50 backdrop-blur-md border-b border-black/5 dark:border-white/10 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center space-x-3">
            <Link to="/" className="flex items-center space-x-3">
              <img src="/logo.png" alt="ClusterCut Logo" className="w-8 h-8" />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-500 bg-clip-text text-transparent">
                ClusterCut
              </span>
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            <a 
              href="https://docs.clustercut.app" 
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Book className="w-4 h-4" />
              <span>Documentation</span>
            </a>
            <a 
              href="https://github.com/keithvassallomt/ClusterCut" 
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Github className="w-4 h-4" />
              <span>GitHub</span>
            </a>
            <button
                onClick={toggleTheme}
                className="p-2 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors rounded-full hover:bg-black/5 dark:hover:bg-white/10"
                aria-label="Toggle theme"
            >
                {getThemeIcon()}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
