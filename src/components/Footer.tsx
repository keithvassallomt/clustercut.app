import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="border-t border-black/5 dark:border-white/10 bg-white/70 dark:bg-black/50 backdrop-blur-md mt-auto py-12 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-600 dark:text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} <a href="https://keithvassallo.com" className="hover:text-gray-900 dark:hover:text-white transition-colors underline decoration-dashed decoration-gray-400 dark:decoration-gray-500/50 underline-offset-4">Keith Vassallo</a>.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/privacy" className="hover:text-gray-900 dark:hover:text-white transition-colors">Privacy Policy</Link>
            <a href="https://github.com/keithvassallomt/ClusterCut" className="hover:text-gray-900 dark:hover:text-white transition-colors">Open Source</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
