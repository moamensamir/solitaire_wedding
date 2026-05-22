import { motion } from 'framer-motion';

interface HeroSectionProps {
  couplePhotoUrl?: string;
}

export default function HeroSection({ couplePhotoUrl }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with hero image */}
      <div
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/hero-background-ZAb5r2bUknwuPYv3wyBcgC.webp)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      />

      {/* Overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/20 to-white/40 z-10" />

      {/* Content */}
      <div className="relative z-20 container max-w-4xl mx-auto px-4 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left side - Text content */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Decorative top element */}
            <motion.div
              className="mb-6 flex justify-end"
              animate={{ opacity: [0.3, 0.6, 0.3] }}
              transition={{ duration: 4, repeat: Infinity }}
            >
              <div
                className="w-16 h-16 opacity-40"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/gold-ornament-pattern-grePg8bPhTyuKBqFKEVMmY.webp)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </motion.div>

            {/* Main heading */}
            <h1 className="text-5xl md:text-6xl font-cormorant font-bold text-accent mb-6 leading-tight">
              ليان و محمد
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl font-almarai text-foreground mb-8 leading-relaxed">
              بسم الله الرحمن الرحيم
            </p>

            {/* Description */}
            <p className="text-lg font-almarai text-foreground/80 mb-8 leading-relaxed">
              يسعدنا أن ندعوكم لحضور حفل زفافنا بكل الحب والتقدير
            </p>

            {/* Decorative line */}
            <div className="w-24 h-1 bg-gradient-to-l from-accent to-transparent mb-8" />

            {/* Quote */}
            <p className="text-accent text-lg font-playfair italic mb-8">
              "ومن آياته أن خلق لكم من أنفسكم أزواجاً لتسكنوا إليها"
            </p>
          </motion.div>

          {/* Right side - Couple photo */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Photo frame */}
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl">
              {couplePhotoUrl ? (
                <img
                  src={couplePhotoUrl}
                  alt="الزوجان"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-secondary to-muted flex items-center justify-center">
                  <p className="text-muted-foreground text-center px-4">صورة الزوجان</p>
                </div>
              )}

              {/* Gold border frame effect */}
              <div className="absolute inset-0 border-8 border-accent opacity-30 pointer-events-none" />

              {/* Decorative corner elements */}
              <motion.div
                className="absolute -top-4 -right-4 w-8 h-8 border-t-4 border-r-4 border-accent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity }}
              />
              <motion.div
                className="absolute -bottom-4 -left-4 w-8 h-8 border-b-4 border-l-4 border-accent"
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
              />
            </div>

            {/* Floating particles around photo */}
            {[...Array(4)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 rounded-full bg-accent"
                animate={{
                  y: [0, -30, 0],
                  x: [0, Math.cos((i * Math.PI) / 2) * 40, 0],
                  opacity: [0, 0.6, 0],
                }}
                transition={{
                  duration: 4 + i,
                  repeat: Infinity,
                  ease: 'easeInOut',
                  delay: i * 0.3,
                }}
                style={{
                  right: `${-20 + i * 15}%`,
                  top: `${20 + i * 20}%`,
                }}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}

