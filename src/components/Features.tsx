import { Shield, Zap, Monitor, Wifi, Lock, Github } from 'lucide-react';
import { motion } from 'framer-motion';

const features = [
  {
    icon: Shield,
    title: "End-to-End Encryption",
    description: "Your clipboard content is encrypted before it leaves your device. Only your trusted devices can read it."
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Built with Rust and optimized for local networks. Copy on one device, paste on another instantly."
  },
  {
    icon: Monitor,
    title: "Cross-Platform",
    description: "Native experience on macOS, Windows, and Linux. Your clipboard works everywhere you do."
  },
  {
    icon: Wifi,
    title: "Local Network Only",
    description: "No servers, no cloud, no internet required. Your data stays within your four walls."
  },
  {
    icon: Lock,
    title: "Zero Knowledge",
    description: "We don't collect data, telemetrics, or logs. Your privacy is our top priority."
  },
  {
    icon: Github,
    title: "Open Source",
    description: "ClusterCut is fully open source. Inspect the code, contribute, or build it yourself. No secrets, just code."
  }
];

export default function Features() {
  return (
    <section className="py-24 relative bg-gray-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 transition-colors">Built with ❤️</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto transition-colors">
            A quality app, built the right way
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-8 rounded-2xl bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 hover:bg-gray-50 dark:hover:bg-white/[0.07] transition-colors shadow-sm dark:shadow-none"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 transition-colors">
                <feature.icon className="w-6 h-6 text-blue-600 dark:text-blue-400 transition-colors" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3 transition-colors">{feature.title}</h3>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed transition-colors">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
