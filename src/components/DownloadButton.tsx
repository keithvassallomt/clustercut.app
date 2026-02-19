import { useState, useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const AppleIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M17.336 12.924c-.033-2.115 1.737-3.13 1.817-3.172-0.99-1.442-2.53-1.637-3.076-1.66-1.309-0.134-2.555 0.77-3.218 0.77-0.663 0-1.688-0.75-2.778-0.73-1.429 0.021-2.748 0.83-3.483 2.11-1.487 2.58-0.38 6.405 1.066 8.497 0.707 1.023 1.549 2.172 2.656 2.13 1.066-0.042 1.47-0.69 2.76-0.69 1.288 0 1.642 0.69 2.756 0.65 1.144-0.043 1.87-1.042 2.57-2.065 0.81-1.18 1.14-2.324 1.15-2.383-0.026-0.011-2.21-0.849-2.22-3.357zM15.467 4.957c0.592-0.718 0.99-1.716 0.88-2.716-0.852 0.034-1.886 0.567-2.497 1.284-0.548 0.635-1.027 1.649-0.898 2.624 0.952 0.074 1.924-0.477 2.515-1.192z"/>
  </svg>
);

const WindowsIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M0 3.449L9.75 2.1v9.451H0V3.449zm10.949-1.676L24 0v11.4H10.949V1.773zm-10.949 11.24h9.75V22.2L0 20.849v-7.836zm10.949 0H24V24l-13.051-1.928V13.013z"/>
  </svg>
);



const FlatpakIcon = () => (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0.75L2.25 5.625V18.375L12 23.25L21.75 18.375V5.625L12 0.75ZM12 2.45578L19.2942 6.10289L12 9.75L4.70578 6.10289L12 2.45578ZM3.75 7.42781L11.25 11.1778V16.8909L7.5 15.0159V11.55L3.75 9.675V7.42781ZM7.5 16.6909L11.25 18.5659V21.4997L3.75 17.7497V16.6909H7.5ZM12.75 11.1778L20.25 7.42781V9.675L16.5 11.55V15.0159L12.75 16.8909V11.1778ZM16.5 16.6909H20.25V17.7497L12.75 21.4997V18.5659L16.5 16.6909Z"/> 
        {/* Approximate cube/box shape */}
    </svg>
)


type OS = 'macOS' | 'Windows' | 'Linux' | 'Unknown';

export default function DownloadButton() {
  const [os, setOs] = useState<OS>('Unknown');

  useEffect(() => {
    const userAgent = window.navigator.userAgent;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    if (userAgent.includes('Win')) setOs('Windows');
    else if (userAgent.includes('Mac')) setOs('macOS');
    else if (userAgent.includes('Linux')) setOs('Linux');
  }, []);

  const getButtonContent = () => {
    switch (os) {
      case 'macOS':
        return { icon: AppleIcon, text: "Download for macOS", link: "/downloads/macos" };
      case 'Windows':
        return { icon: WindowsIcon, text: "Download for Windows", link: "/downloads/windows" };
      case 'Linux':
        return { icon: FlatpakIcon, text: "Get it on Flathub", link: "https://flathub.org/apps/com.keithvassallo.clustercut" }; // Real flathub link
      default:
        return { icon: ArrowRight, text: "Download ClusterCut", link: "/downloads" };
    }
  };

  const content = getButtonContent();
  const Icon = content.icon;

  return (
    <div className="flex flex-col items-center">
      <a 
        href={content.link}
        className="w-full sm:w-auto px-8 py-4 bg-white text-black font-semibold rounded-xl hover:bg-gray-100 transition-all transform hover:scale-105 shadow-lg shadow-white/10 flex items-center justify-center space-x-3 mb-3"
      >
        <Icon />
        <span>{content.text}</span>
      </a>
      <a href="/downloads" className="text-sm text-gray-500 hover:text-white transition-colors underline decoration-gray-700 underline-offset-4">
        View all downloads
      </a>
    </div>
  );
}
