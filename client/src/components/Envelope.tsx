import { useState } from 'react';
import { motion } from 'framer-motion';

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  const [isOpening, setIsOpening] = useState(false);

  const handleClick = () => {
    if (!isOpening) {
      setIsOpening(true);
      setTimeout(() => {
        onOpen();
      }, 1000);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-white">
      {/* Floating particles background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full bg-accent opacity-30"
            animate={{
              y: [0, -300, 0],
              x: [0, Math.sin(i) * 100, 0],
              opacity: [0, 0.6, 0],
            }}
            transition={{
              duration: 8 + i,
              repeat: Infinity,
              ease: 'easeInOut',
              delay: i * 0.5,
            }}
            style={{
              left: `${(i / 8) * 100}%`,
              top: '50%',
            }}
          />
        ))}
      </div>

      {/* Main envelope container */}
      <motion.div
        className="relative w-80 h-56 cursor-pointer"
        onClick={handleClick}
        animate={{
          y: isOpening ? -100 : 0,
          opacity: isOpening ? 0 : 1,
        }}
        transition={{
          duration: 0.8,
          ease: [0.34, 1.56, 0.64, 1],
        }}
      >
        {/* Envelope body */}
        <motion.div
          className="absolute inset-0 bg-white rounded-lg shadow-2xl overflow-hidden"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/envelope-design-dQZiK6dmwPAhxKfeUSDCEJ.webp)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          animate={isOpening ? { rotateX: 90 } : { rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        >
          {/* Decorative gold border */}
          <div className="absolute inset-0 border-4 border-accent opacity-40" />

          {/* Click hint text */}
          {!isOpening && (
            <motion.div
              className="absolute inset-0 flex items-center justify-center"
              animate={{ opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <p className="text-accent text-lg font-cormorant text-center px-8">
                اضغط لفتح الدعوة
              </p>
            </motion.div>
          )}
        </motion.div>

        {/* Envelope flap */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-b from-white to-gray-50 rounded-t-lg shadow-xl origin-top"
          style={{
            clipPath: 'polygon(0 0, 100% 0, 50% 100%)',
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/envelope-design-dQZiK6dmwPAhxKfeUSDCEJ.webp)',
            backgroundSize: 'cover',
          }}
          animate={isOpening ? { rotateX: -90 } : { rotateX: 0 }}
          transition={{ duration: 0.8, ease: [0.34, 1.56, 0.64, 1] }}
        />
      </motion.div>

      {/* Decorative gold ornaments */}
      <motion.div
        className="absolute top-20 left-10 w-12 h-12 opacity-20"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/gold-ornament-pattern-grePg8bPhTyuKBqFKEVMmY.webp)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </motion.div>

      <motion.div
        className="absolute bottom-20 right-10 w-16 h-16 opacity-15"
        animate={{ rotate: -360 }}
        transition={{ duration: 25, repeat: Infinity, ease: 'linear' }}
      >
        <div
          className="w-full h-full"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/gold-ornament-pattern-grePg8bPhTyuKBqFKEVMmY.webp)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </motion.div>
    </div>
  );
}
