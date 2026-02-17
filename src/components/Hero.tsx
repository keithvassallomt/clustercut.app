import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Book } from 'lucide-react';
import DownloadButton from './DownloadButton';

export default function Hero() {
  const [releaseTag, setReleaseTag] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/keithvassallomt/ClusterCut/releases/latest')
      .then(res => res.json())
      .then(data => {
        if (data.tag_name) {
          setReleaseTag(data.tag_name);
        }
      })
      .catch(() => setReleaseTag(null));
  }, []);

  return (
    <section className="relative pt-32 pb-20 overflow-hidden bg-white dark:bg-black transition-colors duration-300">
      {/* Background gradients */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-500/10 dark:bg-blue-500/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute top-40 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-indigo-500/10 dark:bg-indigo-500/10 blur-[100px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {releaseTag && (
            <div className="inline-flex items-center space-x-2 bg-black/5 dark:bg-white/5 border border-black/5 dark:border-white/10 rounded-full px-3 py-1 mb-8 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-green-500 animate-pulse"></span>
              <span className="text-xs text-gray-600 dark:text-gray-300 font-medium tracking-wide">{releaseTag} is live</span>
            </div>
          )}

          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-gray-900 dark:text-white mb-8 transition-colors">
            Sync your clipboard, <br />
            <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-400 dark:to-purple-400 bg-clip-text text-transparent">
              securely & locally.
            </span>
          </h1>

          <p className="max-w-2xl mx-auto text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 leading-relaxed transition-colors">
            ClusterCut keeps your clipboard in sync across Windows, macOS, and Linux without your data ever leaving your local network. No clouds, no accounts, just seamless productivity.
          </p>

          <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center space-y-4 sm:space-y-0 sm:space-x-4">
            <DownloadButton />
            <a href="https://docs.clustercut.app/getting-started" className="w-full sm:w-auto px-8 py-4 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-900 dark:text-white font-semibold rounded-xl hover:bg-gray-200 dark:hover:bg-white/10 transition-colors flex items-center justify-center space-x-2 backdrop-blur-sm">
              <Book className="w-4 h-4" />
              <span>Read the Docs</span>
            </a>
          </div>
        </motion.div>

        {/* Media Placeholder */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="mt-20 relative"
        >
          <div className="aspect-video max-w-5xl mx-auto bg-gray-100 dark:bg-gray-900/50 border border-gray-200 dark:border-white/10 rounded-2xl overflow-hidden shadow-2xl backdrop-blur-sm">
            <video 
              src="/clustercut_promo.mp4" 
              className="w-full h-full object-cover"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
