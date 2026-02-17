import { motion } from 'framer-motion';
import { Copy, FileDown, Settings, Globe, History } from 'lucide-react';

const features = [
  {
    icon: Copy,
    title: "Seamless Clipboard Sync",
    description: "Copy text on one device and paste it on another instantly, without any extra interactions. It just works.",
    image: "/feature_seamless.png",
    imageAlign: "right"
  },
  {
    icon: FileDown,
    title: "Smart File Transfers",
    description: "ClusterCut handles files intelligently. Small files are sent automatically—just copy and paste. For larger files, you'll receive a notification to download them when you're ready.",
    image: "/feature_files.png",
    imageAlign: "left"
  },
  {
    icon: History,
    title: "Clipboard History",
    description: "Never lose a clip again. ClusterCut automatically saves your clipboard history, so you can access and paste previous items whenever you need them.",
    image: "/feature_history.png",
    imageAlign: "right"
  },
  {
    icon: Settings,
    title: "Manual Mode",
    description: "Don't want to automatically send or receive everything? Enable manual mode to be in full control of your data flow.",
    image: "/feature_manual.png",
    imageAlign: "left"
  },
  {
    icon: Globe,
    title: "Works Remotely",
    description: "Your cluster isn't limited to one network. Manually add remote clusters to sync over a VPN or the internet securely.",
    image: "/feature_remote.png",
    imageAlign: "right"
  }
];

export default function MainFeatures() {
  return (
    <section className="py-24 bg-white dark:bg-[#0A0A0A] transition-colors duration-300 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="space-y-24">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: index * 0.1 }}
              className={`flex flex-col ${feature.imageAlign === 'left' ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12 lg:gap-20`}
            >
              <div className="flex-1 w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400">
                    <feature.icon className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
                    {feature.title}
                  </h3>
                </div>
                <p className="text-lg text-gray-600 dark:text-gray-400 leading-relaxed mb-8">
                  {feature.description}
                </p>
              </div>
              
              <div className="flex-1 w-full lg:w-1/2">
                <div className="aspect-[4/3] rounded-2xl bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 flex items-center justify-center p-2 relative overflow-hidden group hover:border-blue-500/30 transition-colors duration-500">
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <img 
                    src={feature.image} 
                    alt={feature.title}
                    className="w-full h-full object-contain rounded-xl shadow-lg transition-transform duration-500 group-hover:scale-[1.02]"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
