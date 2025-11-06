import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import GeometricPattern from './GeometricPattern';
import { ImageWithFallback } from './figma/ImageWithFallback';
import heroImage from 'figma:asset/e538cc35821b92adc6a6186f1ae79c16dc956c97.png';

export default function MyTelkominfraSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y1 = useTransform(scrollYProgress, [0, 1], [100, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [-50, 50]);
  const rotate1 = useTransform(scrollYProgress, [0, 1], [15, 25]);
  const rotate2 = useTransform(scrollYProgress, [0, 1], [-15, -25]);

  return (
    <section ref={ref} className="relative min-h-screen bg-white overflow-hidden py-20 md:py-32">
      {/* Geometric Pattern Background */}
      <GeometricPattern variant="dots" />
      
      {/* Additional Decorative Pattern */}
      <div className="absolute inset-0 opacity-5">
        <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="mytelkominfra-pattern" x="0" y="0" width="80" height="80" patternUnits="userSpaceOnUse">
              <circle cx="10" cy="10" r="2" fill="#6B7280"/>
              <circle cx="50" cy="10" r="2" fill="#6B7280"/>
              <circle cx="30" cy="30" r="2" fill="#6B7280"/>
              <circle cx="70" cy="30" r="2" fill="#6B7280"/>
              <circle cx="10" cy="50" r="2" fill="#6B7280"/>
              <circle cx="50" cy="50" r="2" fill="#6B7280"/>
              <circle cx="30" cy="70" r="2" fill="#6B7280"/>
              <circle cx="70" cy="70" r="2" fill="#6B7280"/>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#mytelkominfra-pattern)" />
        </svg>
      </div>

      {/* Green Decorative Curves */}
      <motion.div
        className="absolute top-10 right-0 w-64 h-64 bg-gradient-to-br from-green-400 to-green-600 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.2, 1],
          x: [0, -50, 0],
          y: [0, 30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />
      <motion.div
        className="absolute bottom-20 left-0 w-48 h-48 bg-gradient-to-tr from-green-300 to-green-500 rounded-full blur-3xl opacity-20"
        animate={{
          scale: [1, 1.3, 1],
          x: [0, 30, 0],
          y: [0, -50, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: 'easeInOut',
        }}
      />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* Logo */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-gradient-to-br from-[#E60000] to-[#8B1538] rounded-xl flex items-center justify-center shadow-lg">
                  <span className="text-white font-bold text-xl">T</span>
                </div>
                <div>
                  <h3 className="text-[#1C1C1C]">Telkominfra</h3>
                </div>
              </div>
            </motion.div>

            {/* Headline */}
            <motion.h1
              className="text-[#1C1C1C] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              One app to simplify your life
            </motion.h1>

            <motion.p
              className="text-gray-600 text-lg leading-relaxed mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              With a clean design, powerful features, and lightning-fast performance. 
              MyTelkominfra brings everything you need in one unified platform - from personal 
              dashboard to self-service portal, making your daily tasks effortless and keeping 
              you stay connected effortlessly.
            </motion.p>

            {/* Feature Pills */}
            <motion.div
              className="flex flex-wrap gap-3 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.5 }}
            >
              {['Clean Design', 'Powerful Features', 'Fast Performance', 'Stay Connected'].map((feature, index) => (
                <motion.div
                  key={feature}
                  className="bg-gradient-to-r from-red-50 to-pink-50 px-5 py-2.5 rounded-full border border-red-100"
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    backgroundColor: '#FEE2E2',
                    boxShadow: '0 4px 12px rgba(220, 38, 38, 0.2)',
                  }}
                >
                  <span className="text-[#8B1538] text-sm font-medium">{feature}</span>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.button
              className="bg-gradient-to-r from-[#E60000] to-[#8B1538] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.9 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Explore MyTelkominfra
            </motion.button>
          </motion.div>

          {/* Right Side - Diagonal Phone Mockups */}
          <div className="relative h-[650px] hidden lg:block">
            {/* Phone 1 - Front (Red Theme) */}
            <motion.div
              className="absolute top-0 right-0 w-72 z-20"
              style={{ y: y1, rotate: rotate1 }}
              initial={{ opacity: 0, y: 100, rotate: 20 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: 15 } : {}}
              transition={{ duration: 1, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ 
                scale: 1.05, 
                rotate: 10,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-2 border-8 border-gray-900">
                {/* Phone Notch */}
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-32 h-6 bg-gray-900 rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                  <ImageWithFallback
                    src={heroImage}
                    alt="MyTelkominfra Interface"
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Phone Buttons */}
                <div className="absolute right-0 top-24 w-1 h-16 bg-gray-800 rounded-l" />
                <div className="absolute right-0 top-44 w-1 h-12 bg-gray-800 rounded-l" />
                <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r" />
              </div>
              
              {/* Phone Reflection */}
              <div className="absolute -bottom-4 left-0 right-0 h-24 bg-gradient-to-b from-black/10 to-transparent blur-xl rounded-full" />
            </motion.div>

            {/* Phone 2 - Back Left (White/Light Theme) */}
            <motion.div
              className="absolute top-40 left-0 w-64 z-10"
              style={{ y: y2, rotate: rotate2 }}
              initial={{ opacity: 0, y: 100, rotate: -20 }}
              animate={isInView ? { opacity: 1, y: 0, rotate: -15 } : {}}
              transition={{ duration: 1, delay: 0.5, ease: [0.4, 0, 0.2, 1] }}
              whileHover={{ 
                scale: 1.05, 
                rotate: -10,
                z: 30,
                transition: { duration: 0.3 }
              }}
            >
              <div className="relative bg-white rounded-[2.5rem] shadow-2xl p-2 border-8 border-gray-900 opacity-90">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-28 h-6 bg-gray-900 rounded-b-2xl z-10" />
                
                <div className="relative bg-gradient-to-br from-gray-50 to-white rounded-[2rem] overflow-hidden aspect-[9/19]">
                  {/* Mock Light Theme Interface */}
                  <div className="w-full h-full p-4 pt-8">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-gray-100 to-gray-50 rounded-2xl p-4 mb-4 shadow-sm">
                      <div className="w-32 h-3 bg-gray-300 rounded mb-2" />
                      <div className="w-24 h-2 bg-gray-200 rounded" />
                    </div>

                    {/* Content Cards */}
                    <div className="space-y-3">
                      <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                        <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                        <div className="w-2/3 h-2 bg-gray-200 rounded mb-3" />
                        <div className="grid grid-cols-3 gap-2">
                          <div className="aspect-square bg-gradient-to-br from-blue-100 to-blue-50 rounded-lg" />
                          <div className="aspect-square bg-gradient-to-br from-green-100 to-green-50 rounded-lg" />
                          <div className="aspect-square bg-gradient-to-br from-orange-100 to-orange-50 rounded-lg" />
                        </div>
                      </div>
                      <div className="bg-white rounded-2xl p-4 shadow-md border border-gray-100">
                        <div className="w-full h-2 bg-gray-200 rounded mb-2" />
                        <div className="w-1/2 h-2 bg-gray-200 rounded" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Phone Buttons */}
                <div className="absolute right-0 top-24 w-1 h-16 bg-gray-800 rounded-l" />
                <div className="absolute left-0 top-32 w-1 h-8 bg-gray-800 rounded-r" />
              </div>
            </motion.div>

            {/* Floating Badge */}
            <motion.div
              className="absolute top-10 left-1/2 transform -translate-x-1/2 bg-white px-6 py-3 rounded-full shadow-lg z-30"
              initial={{ scale: 0, rotate: -180 }}
              animate={isInView ? { scale: 1, rotate: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
            >
              <span className="text-[#E60000] font-bold">MyTelkominfra</span>
            </motion.div>

            {/* Floating Decorative Elements */}
            <motion.div
              className="absolute top-32 left-10 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-2xl shadow-lg"
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            <motion.div
              className="absolute bottom-32 right-10 w-12 h-12 bg-gradient-to-br from-[#E60000] to-[#8B1538] rounded-full shadow-lg"
              animate={{
                y: [0, 20, 0],
                scale: [1, 1.1, 1],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />

            {/* Geometric Circle Decorations */}
            <div className="absolute top-20 right-32 w-24 h-24 border-4 border-gray-200 rounded-full opacity-50" />
            <div className="absolute bottom-40 left-24 w-32 h-32 border-4 border-green-200 rounded-full opacity-40" />
          </div>
        </div>
      </div>
    </section>
  );
}
