import { motion } from 'motion/react';
import { useRef } from 'react';
import { useInView } from 'motion/react';
import GeometricPattern from './GeometricPattern';

export default function ModernFooter() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <footer ref={ref} className="bg-gradient-to-br from-[#1C1C1C] via-[#2D2D2D] to-[#1C1C1C] text-white py-16 relative overflow-hidden">
      <GeometricPattern variant="grid" />
      
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 lg:px-20 relative z-10">
        <motion.div
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          {/* Logo */}
          <div className="mb-8">
            <div className="w-16 h-16 bg-gradient-to-br from-[#8B1538] to-[#1B7A8E] rounded-2xl flex items-center justify-center mx-auto mb-4">
              <span className="text-white text-2xl font-bold">T</span>
            </div>
            <h3 className="text-white mb-2">Telkominfra</h3>
            <p className="text-white/60">Simplifying Infrastructure Management</p>
          </div>

          {/* Quick Links */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12 max-w-4xl mx-auto">
            {[
              { title: 'Product', links: ['e-BASte', 'Upload 8G', 'Dashboard', 'KEPO'] },
              { title: 'Company', links: ['About Us', 'Careers', 'News', 'Contact'] },
              { title: 'Resources', links: ['Documentation', 'API', 'Support', 'Community'] },
              { title: 'Legal', links: ['Privacy', 'Terms', 'Security', 'Compliance'] },
            ].map((section, index) => (
              <motion.div
                key={section.title}
                className="text-left"
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.2 + index * 0.1 }}
              >
                <h4 className="text-white mb-4">{section.title}</h4>
                <ul className="space-y-2">
                  {section.links.map((link) => (
                    <li key={link}>
                      <a href="#" className="text-white/60 hover:text-white transition-colors duration-300 text-sm">
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>

          {/* Bottom Bar */}
          <motion.div
            className="border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <p className="text-white/50 text-sm">
              © 2025 Telkominfra. All rights reserved. | Privacy Policy | Terms of Service
            </p>
          </motion.div>
        </motion.div>
      </div>
    </footer>
  );
}
