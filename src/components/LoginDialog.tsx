import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, Lock, Mail, Eye, EyeOff } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

interface LoginDialogProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function LoginDialog({ isOpen, onClose }: LoginDialogProps) {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle SSO login logic here
    console.log('SSO Login attempt with:', { email, password });
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Dialog */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              className="bg-white rounded-3xl shadow-2xl max-w-md w-full overflow-hidden relative"
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            >
              {/* Close Button */}
              <button
                onClick={onClose}
                className="absolute top-6 right-6 text-[#4D4D4D] hover:text-[#E60000] transition-colors duration-300 z-10"
              >
                <X size={24} />
              </button>

              {/* Header with Gradient */}
              <div className="bg-gradient-to-br from-[#E60000] to-[#C50000] p-8 pb-12 relative">
                <div className="absolute inset-0 opacity-10">
                  <div className="absolute inset-0" style={{
                    backgroundImage: 'radial-gradient(circle, white 1px, transparent 1px)',
                    backgroundSize: '20px 20px',
                  }} />
                </div>
                
                <motion.div
                  className="relative z-10"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  <div className="w-16 h-16 bg-white/20 rounded-2xl flex items-center justify-center mb-4 backdrop-blur-sm">
                    <Lock className="text-white" size={32} />
                  </div>
                  <h2 className="text-white mb-2">Welcome Back</h2>
                  <p className="text-white/80">Sign in with your SSO credentials</p>
                </motion.div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="p-8 -mt-6 relative z-10">
                <motion.div
                  className="bg-white rounded-2xl shadow-lg p-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  {/* Email Input */}
                  <div className="mb-4">
                    <label className="block text-[#1C1C1C] text-sm mb-2">
                      Email Address
                    </label>
                    <div className="relative">
                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4D4D4D]" size={18} />
                      <Input
                        type="email"
                        placeholder="user@telkominfra.co.id"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="pl-10 border-gray-200 focus:border-[#E60000] focus:ring-[#E60000]"
                        required
                      />
                    </div>
                  </div>

                  {/* Password Input */}
                  <div>
                    <label className="block text-[#1C1C1C] text-sm mb-2">
                      Password
                    </label>
                    <div className="relative">
                      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 text-[#4D4D4D]" size={18} />
                      <Input
                        type={showPassword ? 'text' : 'password'}
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        className="pl-10 pr-10 border-gray-200 focus:border-[#E60000] focus:ring-[#E60000]"
                        required
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 text-[#4D4D4D] hover:text-[#E60000] transition-colors"
                      >
                        {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
                      </button>
                    </div>
                  </div>

                  {/* Remember Me & Forgot Password */}
                  <div className="flex items-center justify-between mt-4">
                    <label className="flex items-center gap-2 text-sm text-[#4D4D4D] cursor-pointer">
                      <input
                        type="checkbox"
                        className="w-4 h-4 rounded border-gray-300 text-[#E60000] focus:ring-[#E60000]"
                      />
                      Remember me
                    </label>
                    <a href="#" className="text-sm text-[#E60000] hover:underline">
                      Forgot password?
                    </a>
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button
                    type="submit"
                    className="w-full bg-gradient-to-r from-[#E60000] to-[#C50000] hover:from-[#C50000] hover:to-[#A00000] text-white py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    Sign In with SSO
                  </Button>
                </motion.div>

                {/* Divider */}
                <div className="relative my-6">
                  <div className="absolute inset-0 flex items-center">
                    <div className="w-full border-t border-gray-200" />
                  </div>
                  <div className="relative flex justify-center">
                    <span className="bg-white px-4 text-sm text-[#4D4D4D]">
                      or continue with
                    </span>
                  </div>
                </div>

                {/* Social Login Options */}
                <motion.div
                  className="grid grid-cols-2 gap-4"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                >
                  <Button
                    type="button"
                    variant="outline"
                    className="border-2 border-gray-200 hover:border-[#E60000] hover:text-[#E60000] transition-all duration-300"
                  >
                    Google
                  </Button>
                  <Button
                    type="button"
                    variant="outline"
                    className="border-2 border-gray-200 hover:border-[#E60000] hover:text-[#E60000] transition-all duration-300"
                  >
                    Microsoft
                  </Button>
                </motion.div>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-[#4D4D4D] mt-6">
                  Don't have an account?{' '}
                  <a href="#" className="text-[#E60000] hover:underline">
                    Request Access
                  </a>
                </p>
              </form>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  );
}
