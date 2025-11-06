import { useEffect, useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { BarChart3, RefreshCw, User, Shield } from 'lucide-react';

const features = [
  {
    icon: BarChart3,
    title: 'Dashboard',
    description: 'Visualisasi data interaktif dengan grafik real-time dan insight yang powerful',
    color: '#E60000',
    animation: 'hover',
  },
  {
    icon: RefreshCw,
    title: 'Seamless Sync',
    description: 'Sinkronisasi otomatis di semua perangkat dengan teknologi cloud terkini',
    color: '#E60000',
    animation: 'rotate',
  },
  {
    icon: User,
    title: 'Personalized Experience',
    description: 'Pengalaman yang disesuaikan dengan preferensi dan kebutuhan Anda',
    color: '#E60000',
    animation: 'parallax',
  },
  {
    icon: Shield,
    title: 'Fast & Secure',
    description: 'Performa cepat dengan keamanan tingkat enterprise dan enkripsi end-to-end',
    color: '#E60000',
    animation: 'pulse',
  },
];

export default function FeaturesSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={ref}
      className="py-20 md:py-32 bg-white relative overflow-hidden"
    >
      {/* Parallax Background */}
      <motion.div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'radial-gradient(circle, #E60000 1px, transparent 1px)',
          backgroundSize: '50px 50px',
        }}
        animate={{
          x: mousePosition.x * 0.01,
          y: mousePosition.y * 0.01,
        }}
        transition={{ duration: 0.3 }}
      />

      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-[#1C1C1C] mb-4">Powerful Features</h2>
          <p className="text-[#4D4D4D] max-w-2xl mx-auto">
            Semua yang Anda butuhkan dalam satu platform terintegrasi
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.title}
                className="bg-gradient-to-br from-white to-[#F9F9F9] p-8 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 relative overflow-hidden group"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 30px rgba(230, 0, 0, 0.15)',
                }}
              >
                {/* Background Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#E60000]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-400" />

                <motion.div
                  className="w-16 h-16 bg-gradient-to-br from-[#E60000] to-[#C50000] rounded-2xl flex items-center justify-center mb-6 relative z-10"
                  whileHover={
                    feature.animation === 'rotate'
                      ? { rotate: 360 }
                      : feature.animation === 'pulse'
                      ? { scale: [1, 1.1, 1] }
                      : {}
                  }
                  transition={
                    feature.animation === 'rotate'
                      ? { duration: 0.6, ease: 'easeInOut' }
                      : feature.animation === 'pulse'
                      ? { duration: 0.8, repeat: Infinity }
                      : {}
                  }
                >
                  <Icon className="text-white" size={28} />
                </motion.div>

                <h3 className="text-[#1C1C1C] mb-3 relative z-10">
                  {feature.title}
                </h3>
                <p className="text-[#4D4D4D] relative z-10">
                  {feature.description}
                </p>

                {/* Hover Accent Line */}
                <motion.div
                  className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-[#E60000] to-[#C50000]"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                  style={{ transformOrigin: 'left' }}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
