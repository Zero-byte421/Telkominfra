import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import { FileCheck, Radio, BookOpen, User, Calendar } from 'lucide-react';
import GeometricPattern from './GeometricPattern';

const applications = [
  {
    name: 'e-BAST e-Materai',
    icon: FileCheck,
    color: 'from-[#8B1538] to-[#6B1129]',
    description: 'Digital signature & material management',
  },
  {
    name: 'Dashboard Dismantle Radio IP',
    icon: Radio,
    color: 'from-[#8B1538] to-[#6B1129]',
    description: 'Radio IP monitoring & analytics',
  },
  {
    name: 'KEPO',
    icon: BookOpen,
    color: 'from-[#1B7A8E] to-[#156773]',
    description: 'Knowledge & information portal',
  },
  {
    name: 'MyTelkominfra',
    icon: User,
    color: 'from-[#1B7A8E] to-[#156773]',
    description: 'Personal dashboard & profile',
  },
  {
    name: 'Presensi',
    icon: Calendar,
    color: 'from-[#8B1538] to-[#6B1129]',
    description: 'Attendance & presence system',
  },
];

export default function ApplicationListSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section
      ref={ref}
      className="bg-white py-20 md:py-32 relative overflow-hidden"
    >
      {/* Decorative Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 to-white" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
        >
          <motion.div
            className="inline-block bg-gradient-to-r from-[#8B1538] to-[#1B7A8E] bg-clip-text text-transparent mb-4"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={isInView ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="text-[#1C1C1C]">Application List</h2>
          </motion.div>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Explore our comprehensive suite of integrated applications designed to streamline your workflow
          </p>
        </motion.div>

        {/* Application Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {applications.map((app, index) => {
            const Icon = app.icon;
            return (
              <motion.div
                key={app.name}
                className="group relative"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: index * 0.15,
                  ease: [0.4, 0, 0.2, 1],
                }}
              >
                <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  {/* Background Gradient on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${app.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500`} />
                  
                  {/* Icon */}
                  <div className="relative z-10">
                    <motion.div
                      className={`w-20 h-20 bg-gradient-to-br ${app.color} rounded-2xl flex items-center justify-center mb-6 shadow-lg`}
                      whileHover={{ scale: 1.1, rotate: 5 }}
                      transition={{ duration: 0.3 }}
                    >
                      <Icon className="text-white" size={36} />
                    </motion.div>

                    <h3 className="text-[#1C1C1C] mb-3 min-h-[3.5rem]">{app.name}</h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {app.description}
                    </p>

                    {/* Action Button */}
                    <motion.button
                      className="mt-6 text-[#8B1538] font-semibold text-sm flex items-center gap-2 group-hover:gap-3 transition-all duration-300"
                      whileHover={{ x: 5 }}
                    >
                      View Details
                      <svg
                        className="w-4 h-4"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    </motion.button>
                  </div>

                  {/* Decorative Corner */}
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-gray-100 to-transparent rounded-bl-full opacity-50" />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <p className="text-gray-600 mb-6">
            Looking for more information about our applications?
          </p>
          <motion.button
            className="bg-gradient-to-r from-[#8B1538] to-[#6B1129] text-white px-8 py-4 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Contact Us
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
