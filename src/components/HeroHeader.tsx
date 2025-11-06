import { motion } from 'motion/react';
import GeometricPattern from './GeometricPattern';

export default function HeroHeader() {
  return (
    <section className="bg-gradient-to-br from-[#8B1538] via-[#6B1129] to-[#4D0D1F] text-white min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Geometric Pattern */}
      <GeometricPattern variant="dots" />
      
      {/* Decorative Elements */}
      <div className="absolute top-10 left-10 w-40 h-40 border-4 border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-20 w-32 h-32 border-4 border-white/10 rounded-full" />
      <div className="absolute top-1/2 left-1/4 w-24 h-24 border-4 border-white/5 rounded-full" />
      <div className="absolute bottom-1/4 left-1/2 w-16 h-16 border-4 border-white/5 rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10 text-center py-20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          {/* Logo */}
          <motion.div
            className="mb-8 inline-block"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-20 h-20 bg-white rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-[#8B1538] text-3xl font-bold">T</span>
            </div>
            <h3 className="text-white">Telkominfra</h3>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="text-white mb-6 max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            e-BASTE Material
          </motion.h1>

          <motion.p
            className="text-white/90 text-xl md:text-2xl mb-12 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            One app to simplify your life<br />
            <span className="text-white/70 text-lg">
              With a clean design, powerful features, and fast performance
            </span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <motion.button
              className="bg-white text-[#8B1538] px-10 py-4 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
            </motion.button>
            <motion.button
              className="border-2 border-white text-white px-10 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Learn More
            </motion.button>
          </motion.div>

          {/* Application List Preview */}
          <motion.div
            className="mt-20 inline-block bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl px-8 py-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <p className="text-white/70 text-sm mb-3">Available Applications</p>
            <div className="flex flex-wrap gap-3 justify-center">
              {['e-BAST e-Materai', 'Dashboard Dismantle Radio IP', 'KEPO', 'MyTelkominfra', 'Presensi'].map((app, index) => (
                <motion.div
                  key={app}
                  className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg text-white text-sm font-medium border border-white/10"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 1.1 + index * 0.1 }}
                  whileHover={{ scale: 1.1, backgroundColor: 'rgba(255, 255, 255, 0.2)' }}
                >
                  {app}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5, repeat: Infinity, repeatType: 'reverse' }}
        >
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center pt-2">
            <div className="w-1.5 h-3 bg-white/50 rounded-full" />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
