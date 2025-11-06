import { useRef, useState } from 'react';
import { motion, useInView } from 'motion/react';
import { Database, Briefcase, Zap, Shield, Star, ExternalLink } from 'lucide-react';

const applications = [
  {
    name: 'KEPO',
    fullName: 'Knowledge Portal',
    description: 'Portal pengetahuan terpadu untuk akses informasi dan dokumentasi perusahaan',
    icon: Database,
    color: '#E60000',
    gradient: 'from-[#E60000] to-[#C50000]',
  },
  {
    name: 'SAP',
    fullName: 'System Application & Products',
    description: 'Sistem enterprise resource planning untuk manajemen bisnis terintegrasi',
    icon: Briefcase,
    color: '#4D4D4D',
    gradient: 'from-[#4D4D4D] to-[#1C1C1C]',
  },
  {
    name: 'PRIMA',
    fullName: 'Project Management App',
    description: 'Aplikasi manajemen proyek untuk tracking dan kolaborasi tim yang efisien',
    icon: Zap,
    color: '#E60000',
    gradient: 'from-[#E60000] to-[#FF4444]',
  },
  {
    name: 'PRITA',
    fullName: 'Priority Task App',
    description: 'Manajemen prioritas tugas dengan AI-powered scheduling dan reminder',
    icon: Star,
    color: '#4D4D4D',
    gradient: 'from-[#1C1C1C] to-[#4D4D4D]',
  },
  {
    name: 'SAFIRA',
    fullName: 'Security & Firewall App',
    description: 'Sistem keamanan tingkat enterprise dengan monitoring real-time 24/7',
    icon: Shield,
    color: '#E60000',
    gradient: 'from-[#C50000] to-[#E60000]',
  },
];

export default function ApplicationPreview() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });
  const [flippedCards, setFlippedCards] = useState<number[]>([]);

  const handleCardClick = (index: number) => {
    setFlippedCards((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  return (
    <section
      id="apps"
      ref={ref}
      className="py-20 md:py-32 bg-gradient-to-br from-[#F5F5F5] to-[#FFFFFF]"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-[#1C1C1C] mb-4">Application Suite</h2>
          <p className="text-[#4D4D4D] max-w-2xl mx-auto">
            Ekosistem aplikasi terintegrasi untuk produktivitas maksimal
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            const isFlipped = flippedCards.includes(index);

            return (
              <motion.div
                key={app.name}
                className="perspective-1000 h-[320px]"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <motion.div
                  className="relative w-full h-full cursor-pointer"
                  animate={{ rotateY: isFlipped ? 180 : 0 }}
                  transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
                  style={{ transformStyle: 'preserve-3d' }}
                  onClick={() => handleCardClick(index)}
                  whileHover={{ scale: 1.02 }}
                >
                  {/* Front Side */}
                  <div
                    className="absolute inset-0 bg-white rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] p-8 backface-hidden"
                    style={{ backfaceVisibility: 'hidden' }}
                  >
                    <motion.div
                      className={`w-16 h-16 bg-gradient-to-br ${app.gradient} rounded-2xl flex items-center justify-center mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="text-white" size={32} />
                    </motion.div>

                    <h3 className="text-[#1C1C1C] mb-2">{app.name}</h3>
                    <p className="text-[#4D4D4D] mb-4">{app.fullName}</p>

                    <div className="absolute bottom-8 left-8 right-8">
                      <p className="text-sm text-[#4D4D4D]/60">
                        Click to see details
                      </p>
                    </div>

                    {/* Decorative Corner */}
                    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${app.gradient} opacity-10 rounded-bl-full rounded-tr-2xl`} />
                  </div>

                  {/* Back Side */}
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${app.gradient} rounded-2xl shadow-[0_8px_30px_rgba(230,0,0,0.2)] p-8 backface-hidden`}
                    style={{
                      backfaceVisibility: 'hidden',
                      transform: 'rotateY(180deg)',
                    }}
                  >
                    <div className="h-full flex flex-col justify-between text-white">
                      <div>
                        <h3 className="mb-4">{app.name}</h3>
                        <p className="mb-6">{app.description}</p>
                      </div>

                      <motion.button
                        className="flex items-center gap-2 text-white bg-white/20 hover:bg-white/30 px-6 py-3 rounded-xl transition-all duration-300"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Launch App
                        <ExternalLink size={18} />
                      </motion.button>

                      <p className="text-sm text-white/60 mt-4">
                        Click again to flip back
                      </p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </div>

        {/* 3D Mockup Placeholder */}
        <motion.div
          className="mt-20 relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={isInView ? { opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 0.6 }}
        >
          <div className="bg-gradient-to-br from-[#1C1C1C] to-[#4D4D4D] rounded-3xl p-12 shadow-2xl relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-[#E60000]/20 to-transparent" />
            
            <div className="relative z-10 text-center text-white">
              <h3 className="mb-4">Integrated Ecosystem</h3>
              <p className="max-w-2xl mx-auto mb-8">
                Semua aplikasi terhubung dalam satu platform yang seamless dan mudah diakses
              </p>
              
              <div className="flex flex-wrap gap-4 justify-center">
                {applications.map((app, index) => (
                  <motion.div
                    key={app.name}
                    className="bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg border border-white/20"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: 0.8 + index * 0.1 }}
                    whileHover={{ scale: 1.1, backgroundColor: 'rgba(230, 0, 0, 0.3)' }}
                  >
                    {app.name}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
