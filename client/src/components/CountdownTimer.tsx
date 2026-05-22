import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const arabicNumbers = ['٠', '١', '٢', '٣', '٤', '٥', '٦', '٧', '٨', '٩'];

const convertToArabic = (num: number): string => {
  return String(num)
    .split('')
    .map(digit => arabicNumbers[parseInt(digit)])
    .join('');
};

interface TimeRemaining {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

export default function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<TimeRemaining>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const calculateTimeRemaining = () => {
      const weddingDate = new Date(2026, 1, 6, 0, 0, 0).getTime();
      const now = new Date().getTime();
      const difference = weddingDate - now;

      if (difference > 0) {
        setTimeRemaining({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60),
        });
      }
    };

    calculateTimeRemaining();
    const timer = setInterval(calculateTimeRemaining, 1000);

    return () => clearInterval(timer);
  }, []);

  const TimeUnit = ({ value, label }: { value: number; label: string }) => (
    <motion.div
      className="flex flex-col items-center"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="relative">
        {/* Gold background circle */}
        <div className="absolute inset-0 bg-accent rounded-lg opacity-10 blur-lg" />
        
        {/* Number container */}
        <div className="relative bg-white border-2 border-accent rounded-lg px-6 py-4 min-w-24">
          <motion.div
            key={value}
            animate={{ scale: [1, 1.1, 1] }}
            transition={{ duration: 0.3 }}
            className="text-4xl font-cormorant font-bold text-accent text-center"
          >
            {convertToArabic(value).padStart(2, '٠')}
          </motion.div>
        </div>
      </div>
      
      {/* Label */}
      <p className="mt-3 text-sm font-almarai text-muted-foreground text-center">{label}</p>
    </motion.div>
  );

  return (
    <section className="py-16 px-4 bg-gradient-to-b from-white via-white to-secondary/20">
      <div className="container max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-cormorant font-bold text-accent mb-4">
            العد التنازلي
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Countdown grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 mb-12">
          <TimeUnit value={timeRemaining.days} label="يوم" />
          <TimeUnit value={timeRemaining.hours} label="ساعة" />
          <TimeUnit value={timeRemaining.minutes} label="دقيقة" />
          <TimeUnit value={timeRemaining.seconds} label="ثانية" />
        </div>

        {/* Decorative divider */}
        <div className="flex items-center justify-center gap-4 mb-8">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent opacity-30" />
          <div className="w-8 h-8 rounded-full border-2 border-accent opacity-40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent opacity-30" />
        </div>

        {/* Wedding date in Arabic */}
        <motion.div
          className="text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-lg md:text-xl font-almarai text-foreground mb-2">
            السبت، ٦ فبراير ٢٠٢٦
          </p>
          <p className="text-sm font-almarai text-muted-foreground">
            الموافق ١٦ جمادى الثانية ١٤٤٧ هـ
          </p>
        </motion.div>
      </div>
    </section>
  );
}

