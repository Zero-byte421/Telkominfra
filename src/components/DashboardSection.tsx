import { useRef } from 'react';
import { motion, useInView } from 'motion/react';
import { TrendingUp, Users, Activity, DollarSign } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    label: 'Total Revenue',
    value: 'Rp 2.4M',
    change: '+12.5%',
    positive: true,
  },
  {
    icon: Users,
    label: 'Active Users',
    value: '8,426',
    change: '+8.2%',
    positive: true,
  },
  {
    icon: Activity,
    label: 'Performance',
    value: '98.5%',
    change: '+2.1%',
    positive: true,
  },
  {
    icon: DollarSign,
    label: 'Total Projects',
    value: '156',
    change: '+4.3%',
    positive: true,
  },
];

export default function DashboardSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      id="dashboard"
      ref={ref}
      className="py-20 md:py-32 bg-white"
    >
      <div className="max-w-[1440px] mx-auto px-5 md:px-10 lg:px-20">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <h2 className="text-[#1C1C1C] mb-4">Analytics Dashboard</h2>
          <p className="text-[#4D4D4D] max-w-2xl mx-auto">
            Monitor performa bisnis Anda dengan visualisasi data real-time
          </p>
        </motion.div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-white to-[#F9F9F9] p-6 rounded-2xl shadow-[0_4px_20px_rgba(0,0,0,0.08)] border border-gray-100 group cursor-pointer"
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                  ease: [0.4, 0, 0.2, 1],
                }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: '0 8px 30px rgba(230, 0, 0, 0.12)',
                }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-[#E60000] to-[#C50000] rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <Icon className="text-white" size={24} />
                  </div>
                  <span className={`text-sm px-2 py-1 rounded-lg ${
                    stat.positive
                      ? 'bg-green-100 text-green-700'
                      : 'bg-red-100 text-red-700'
                  }`}>
                    {stat.change}
                  </span>
                </div>
                
                <p className="text-[#4D4D4D] text-sm mb-1">{stat.label}</p>
                <h3 className="text-[#1C1C1C]">{stat.value}</h3>
              </motion.div>
            );
          })}
        </div>

        {/* Dashboard Preview */}
        <motion.div
          className="bg-gradient-to-br from-[#1C1C1C] to-[#4D4D4D] rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage:
                  'radial-gradient(circle, white 1px, transparent 1px)',
                backgroundSize: '30px 30px',
              }}
            />
          </div>

          {/* Content */}
          <div className="relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="text-white">
                <motion.h3
                  className="mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 }}
                >
                  Real-time Insights
                </motion.h3>
                <motion.p
                  className="text-white/80 mb-6"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.7 }}
                >
                  Dapatkan insight mendalam tentang performa bisnis Anda dengan
                  dashboard interaktif yang dapat disesuaikan dengan kebutuhan.
                </motion.p>

                <motion.ul
                  className="space-y-3"
                  initial={{ opacity: 0, x: -30 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.8 }}
                >
                  {[
                    'Customizable widgets dan layout',
                    'Export data dalam berbagai format',
                    'Collaborative sharing & reports',
                    'AI-powered analytics',
                  ].map((feature, index) => (
                    <motion.li
                      key={feature}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -20 }}
                      animate={isInView ? { opacity: 1, x: 0 } : {}}
                      transition={{ duration: 0.4, delay: 0.9 + index * 0.1 }}
                    >
                      <div className="w-2 h-2 bg-[#E60000] rounded-full" />
                      <span className="text-white/90">{feature}</span>
                    </motion.li>
                  ))}
                </motion.ul>
              </div>

              {/* Chart Visualization Mockup */}
              <motion.div
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.8, delay: 0.6 }}
              >
                <div className="aspect-video bg-gradient-to-br from-white/5 to-transparent rounded-xl flex items-end justify-around p-4 gap-2">
                  {[40, 70, 50, 90, 60, 80, 55].map((height, index) => (
                    <motion.div
                      key={index}
                      className="flex-1 bg-gradient-to-t from-[#E60000] to-[#FF4444] rounded-t-lg"
                      initial={{ height: 0 }}
                      animate={isInView ? { height: `${height}%` } : {}}
                      transition={{
                        duration: 0.8,
                        delay: 1 + index * 0.1,
                        ease: [0.4, 0, 0.2, 1],
                      }}
                      whileHover={{ scale: 1.1, opacity: 0.8 }}
                    />
                  ))}
                </div>
                
                <div className="mt-4 flex justify-between text-white/60 text-sm">
                  <span>Mon</span>
                  <span>Tue</span>
                  <span>Wed</span>
                  <span>Thu</span>
                  <span>Fri</span>
                  <span>Sat</span>
                  <span>Sun</span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
