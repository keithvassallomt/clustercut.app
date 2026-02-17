import { motion } from 'framer-motion';
import Navbar from './Navbar';
import Footer from './Footer';

export default function PrivacyPolicy() {
  return (
    <>
      <Navbar />
      <main className="pt-32 pb-24 min-h-screen bg-white dark:bg-[#0A0A0A] transition-colors duration-300">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-8">
              Privacy Policy
            </h1>
            
            <div className="prose prose-lg dark:prose-invert max-w-none">
              <p className="text-xl text-gray-600 dark:text-gray-400 mb-12 leading-relaxed">
                At ClusterCut, we believe privacy is a fundamental right, not a feature. Our application is designed from the ground up to ensure your data never leaves your control.
              </p>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  No Data Collection
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-4">
                  ClusterCut does not collect, store, or transmit any personal data, usage statistics, or telemetry. We do not have servers to store your data, and we do not track how you use the application.
                </p>
                <div className="bg-green-50 dark:bg-green-500/10 border border-green-200 dark:border-green-500/20 rounded-xl p-6 mt-6">
                  <p className="text-green-800 dark:text-green-300 font-medium m-0">
                    Your clipboard content and files are transferred directly between your devices over your local network using end-to-end encryption. Use of a VPN or similar tool is supported, but the data remains peer-to-peer.
                  </p>
                </div>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Local Operation
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  All synchronization happens directly between your devices. No third-party servers are involved in the transfer of your data. The application operates entirely within your local network environment.
                </p>
              </section>

              <section className="mb-12">
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Open Source
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  ClusterCut is fully open source. You don't have to take our word for it—you can inspect the code yourself on <a href="https://github.com/keithvassallomt/ClusterCut" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub</a> using the provided build instructions. We believe in transparency and community trust.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Contact Us
                </h2>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                  If you have any questions about our privacy practices or the application's security, please open an issue on our <a href="https://github.com/keithvassallomt/ClusterCut/issues" className="text-blue-600 dark:text-blue-400 hover:underline">GitHub repository</a>.
                </p>
              </section>
            </div>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
