import Navbar from './Navbar';
import Footer from './Footer';

export default function Downloads() {
  return (
    <div className="min-h-screen bg-[#0A0A0A] text-white selection:bg-blue-500/30 flex flex-col">
      <Navbar />
      <main className="flex-grow pt-32 px-4 max-w-7xl mx-auto w-full">
        <h1 className="text-4xl font-bold mb-8">Downloads</h1>
        <p className="text-gray-400">Coming soon...</p>
      </main>
      <Footer />
    </div>
  );
}
