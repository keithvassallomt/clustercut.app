import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import { Download, Package, Command } from 'lucide-react';
import { motion } from 'framer-motion';
import ReactMarkdown from 'react-markdown';

interface GitHubAsset {
  id: number;
  name: string;
  browser_download_url: string;
  size: number;
  content_type: string;
}

interface GitHubRelease {
  id: number;
  name: string;
  tag_name: string;
  body: string;
  published_at: string;
  assets: GitHubAsset[];
  html_url: string;
}

import { FaLinux, FaWindows, FaApple } from "react-icons/fa";

const AppleIcon = () => <FaApple className="w-6 h-6" />;
const WindowsIcon = () => <FaWindows className="w-6 h-6" />;
const LinuxIcon = () => <FaLinux className="w-6 h-6" />; 


export default function Downloads() {
  const [release, setRelease] = useState<GitHubRelease | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetch('https://api.github.com/repos/keithvassallomt/ClusterCut/releases/latest')
      .then(res => {
        if (!res.ok) throw new Error('Failed to fetch release data');
        return res.json();
      })
      .then(data => {
        setRelease(data);
        setLoading(false);
      })
      .catch(err => {
        console.error(err);
        setError('Could not load latest release data from GitHub.');
        setLoading(false);
      });
  }, []);

  const formatSize = (bytes: number) => {
    const mb = bytes / (1024 * 1024);
    return `${mb.toFixed(1)} MB`;
  };

  const windowsAssets = release?.assets.filter(a => a.name.endsWith('.exe') || a.name.endsWith('.msi')) || [];
  const macAssets = release?.assets.filter(a => a.name.endsWith('.dmg')) || [];
  const linuxAssets = release?.assets.filter(a => a.name.endsWith('.deb') || a.name.endsWith('.rpm') || a.name.endsWith('.AppImage') || a.name.endsWith('.tar.gz') || a.name.endsWith('.flatpak')) || [];
  const otherAssets = release?.assets.filter(a => !windowsAssets.includes(a) && !macAssets.includes(a) && !linuxAssets.includes(a)) || [];

  const AssetLink = ({ asset, icon: Icon }: { asset: GitHubAsset, icon: React.ElementType }) => (
    <a
      href={asset.browser_download_url}
      className="group flex items-center p-4 bg-white/5 hover:bg-white/10 border border-white/5 hover:border-white/20 rounded-xl transition-all"
    >
      <div className="p-3 bg-white/5 rounded-lg mr-4 group-hover:scale-110 transition-transform">
        <Icon />
      </div>
      <div className="flex-grow min-w-0">
        <div className="font-medium truncate">{asset.name}</div>
        <div className="text-xs text-gray-400 flex items-center justify-between mt-1">
          <span>{formatSize(asset.size)}</span>
        </div>
      </div>
      <Download className="w-5 h-5 text-gray-500 group-hover:text-white ml-2 transition-colors" />
    </a>
  );

  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 px-4 max-w-7xl mx-auto w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="container mx-auto"
        >
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-4xl font-bold">Downloads</h1>
            {release && (
              <a 
                href={release.html_url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white flex items-center gap-2 transition-colors"
              >
                <span>View on GitHub</span>
                <Command className="w-4 h-4" />
              </a>
            )}
          </div>

          {loading && (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white"></div>
            </div>
          )}

          {error && (
            <div className="bg-red-500/10 border border-red-500/20 rounded-xl p-6 text-red-400">
              {error} - You can try visiting our <a href="https://github.com/keithvassallomt/ClusterCut/releases" className="underline hover:text-red-300">GitHub Releases page</a> directly.
            </div>
          )}

          {release && (
            <div className="space-y-12">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-8 backdrop-blur-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-8 border-b border-white/10 pb-8">
                  <div>
                    <div className="flex items-center gap-4 mb-2">
                       <h2 className="text-2xl font-semibold">{release.name || release.tag_name}</h2>
                       <span className="px-3 py-1 bg-blue-500/20 text-blue-400 text-sm font-medium rounded-full border border-blue-500/20">
                         {release.tag_name}
                       </span>
                    </div>
                    <p className="text-gray-400">
                      Released on {new Date(release.published_at).toLocaleDateString(undefined, { year: 'numeric', month: 'long', day: 'numeric' })}
                    </p>
                  </div>
                  
                  <div className="flex items-center gap-4">
                     <span className="text-sm text-gray-500">Latest Version</span>
                  </div>
                </div>

                <div className="space-y-8">
                   {/* Windows */}
                   {windowsAssets.length > 0 && (
                     <div>
                       <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                         <WindowsIcon /> Windows
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {windowsAssets.map(asset => <AssetLink key={asset.id} asset={asset} icon={WindowsIcon} />)}
                       </div>
                     </div>
                   )}

                   {/* macOS */}
                   {macAssets.length > 0 && (
                     <div>
                       <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                         <AppleIcon /> macOS
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {macAssets.map(asset => <AssetLink key={asset.id} asset={asset} icon={AppleIcon} />)}
                       </div>
                     </div>
                   )}

                   {/* Linux */}
                   {linuxAssets.length > 0 && (
                     <div>
                       <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                         <LinuxIcon /> Linux
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {linuxAssets.map(asset => <AssetLink key={asset.id} asset={asset} icon={LinuxIcon} />)}
                       </div>
                     </div>
                   )}

                   {/* Other */}
                   {otherAssets.length > 0 && (
                     <div>
                       <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                         <Package className="w-6 h-6" /> Other Assets
                       </h3>
                       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         {otherAssets.map(asset => <AssetLink key={asset.id} asset={asset} icon={Package} />)}
                       </div>
                     </div>
                   )}
                </div>
              </div>

              <div className="prose prose-invert max-w-none">
                <h3 className="text-2xl font-semibold mb-6">Release Notes</h3>
                <div className="bg-white/5 border border-white/10 rounded-2xl p-8 text-gray-300 overflow-x-auto">
                    <ReactMarkdown>{release.body}</ReactMarkdown>
                </div>
              </div>
            </div>
          )}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
}
