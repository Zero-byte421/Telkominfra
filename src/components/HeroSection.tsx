import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Button } from './ui/button';

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#FFFFFF] via-[#F5F5F5] to-[#EEEEEE] pt-20"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            <motion.div
              className="inline-block mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <span className="bg-[#E60000]/10 text-[#E60000] px-6 py-2 rounded-full">
                Layout App Infra
              </span>
            </motion.div>

            <motion.h1
              className="text-[#1C1C1C] mb-6"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
            >
              One App to Simplify Your Life
            </motion.h1>

            <motion.p
              className="text-[#4D4D4D] mb-10 max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
            >
              With a clean design, powerful features, and fast performance
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.7, ease: [0.4, 0, 0.2, 1] }}
            >
              <Button className="bg-[#E60000] hover:bg-[#C50000] text-white px-8 py-6 rounded-2xl group">
                Get Started
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" size={20} />
              </Button>
              <Button variant="outline" className="border-2 border-[#E60000] text-[#E60000] hover:bg-[#E60000] hover:text-white px-8 py-6 rounded-2xl">
                Learn More
              </Button>
            </motion.div>
          </motion.div>

          {/* Decorative Elements */}
          <motion.div
            className="mt-16 relative"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.9 }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-[#E60000]/20 to-transparent blur-3xl opacity-30" />
            <div className="grid grid-cols-3 gap-4 max-w-2xl mx-auto">
              {[1, 2, 3].map((item) => (
                <motion.div
                  key={item}
                  className="bg-white rounded-2xl p-6 shadow-lg"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + item * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    boxShadow: '0 20px 40px rgba(230, 0, 0, 0.15)',
                  }}
                >
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E60000] to-[#C50000] rounded-xl mx-auto" />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
