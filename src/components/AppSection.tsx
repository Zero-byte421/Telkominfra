import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import GeometricPattern from './GeometricPattern';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { LucideIcon } from 'lucide-react';

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface AppSectionProps {
  variant: 'maroon' | 'teal';
  appName: string;
  tagline: string;
  description: string;
  features: Feature[];
  mockupImage?: string;
  reverse?: boolean;
}

export default function AppSection({
  variant,
  appName,
  tagline,
  description,
  features,
  mockupImage,
  reverse = false,
}: AppSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  const bgColor = variant === 'maroon' 
    ? 'bg-gradient-to-br from-[#8B1538] via-[#6B1129] to-[#4D0D1F]'
    : 'bg-gradient-to-br from-[#1B7A8E] via-[#156773] to-[#0F4A55]';

  return (
    <section ref={ref} className={`${bgColor} text-white py-20 md:py-32 relative overflow-hidden`}>
      {/* Geometric Pattern Background */}
      <GeometricPattern variant="dots" />
      
      {/* Decorative Circles */}
      <div className="absolute top-20 left-10 w-32 h-32 border-4 border-white/10 rounded-full" />
      <div className="absolute bottom-20 right-10 w-24 h-24 border-4 border-white/10 rounded-full" />
      <div className="absolute top-1/2 right-1/4 w-16 h-16 border-4 border-white/5 rounded-full" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Content Side */}
          <motion.div
            className={reverse ? 'lg:order-2' : ''}
            initial={{ opacity: 0, x: reverse ? 50 : -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
          >
            {/* App Header */}
            <motion.div
              className="mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="inline-block bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full mb-4 border border-white/20">
                <span className="text-sm tracking-wide">{tagline}</span>
              </div>
              <h2 className="text-white mb-4">{appName}</h2>
              <p className="text-white/80 text-lg leading-relaxed max-w-xl">
                {description}
              </p>
            </motion.div>

            {/* Application Preview Cards */}
            <motion.div
              className="grid grid-cols-3 gap-4 mb-8"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {features.slice(0, 3).map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    className="bg-white rounded-2xl p-6 aspect-square flex flex-col items-center justify-center text-center group hover:scale-105 transition-transform duration-300"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={isInView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.4, delay: 0.5 + index * 0.1 }}
                  >
                    <div className={`w-12 h-12 ${variant === 'maroon' ? 'bg-[#8B1538]' : 'bg-[#1B7A8E]'} rounded-xl flex items-center justify-center mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="text-white" size={24} />
                    </div>
                    <h4 className="text-gray-900 text-sm font-semibold">{feature.title}</h4>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Feature Descriptions */}
            <motion.div
              className="space-y-4"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-5 border border-white/10"
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.4, delay: 0.7 + index * 0.1 }}
                >
                  <h4 className="text-white mb-1">{feature.title}</h4>
                  <p className="text-white/70 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Mockup Side */}
          <motion.div
            className={reverse ? 'lg:order-1' : ''}
            initial={{ opacity: 0, x: reverse ? -50 : 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1], delay: 0.3 }}
          >
            <div className="relative">
              {/* Device Frame */}
              <div className="bg-white rounded-3xl p-4 shadow-2xl transform hover:scale-105 transition-transform duration-500">
                <div className="bg-gray-100 rounded-2xl overflow-hidden aspect-video relative">
                  {mockupImage ? (
                    <ImageWithFallback
                      src={mockupImage}
                      alt={`${appName} Interface`}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 flex items-center justify-center">
                      <div className="text-center">
                        <div className={`w-20 h-20 ${variant === 'maroon' ? 'bg-[#8B1538]' : 'bg-[#1B7A8E]'} rounded-2xl mx-auto mb-4 flex items-center justify-center`}>
                          <span className="text-white text-2xl font-bold">{appName.charAt(0)}</span>
                        </div>
                        <p className="text-gray-600 font-semibold">{appName}</p>
                      </div>
                    </div>
                  )}
                </div>
                
                {/* Browser Bar Decoration */}
                <div className="absolute top-6 left-6 right-6 h-8 bg-white/50 rounded-lg flex items-center px-3 gap-2">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-red-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-yellow-500" />
                    <div className="w-2.5 h-2.5 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 bg-white/50 rounded h-4" />
                </div>
              </div>

              {/* Floating Badge */}
              <motion.div
                className="absolute -top-4 -right-4 bg-white text-gray-900 px-6 py-3 rounded-full shadow-lg font-semibold"
                initial={{ scale: 0, rotate: -180 }}
                animate={isInView ? { scale: 1, rotate: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.8, type: 'spring' }}
              >
                {appName}
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
