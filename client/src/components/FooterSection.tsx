import { motion } from 'framer-motion';

export default function FooterSection() {
  return (
    <footer className="relative py-20 px-4 bg-gradient-to-b from-white to-secondary/30 overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute -top-20 -right-20 w-40 h-40 opacity-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/gold-ornament-pattern-grePg8bPhTyuKBqFKEVMmY.webp)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
          animate={{ rotate: 360 }}
          transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-40 h-40 opacity-10"
          style={{
            backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/gold-ornament-pattern-grePg8bPhTyuKBqFKEVMmY.webp)',
            backgroundSize: 'contain',
            backgroundRepeat: 'no-repeat',
          }}
          animate={{ rotate: -360 }}
          transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 container max-w-4xl mx-auto text-center">
        {/* Main quote */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="text-3xl md:text-4xl font-playfair italic text-accent mb-6">
            "الحب هو أجمل هدية من الله، والزواج هو تتويج هذا الحب"
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Couple names and date */}
        <motion.div
          className="mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h3 className="text-3xl font-cormorant font-bold text-foreground mb-2">
            ليان و محمد
          </h3>
          <p className="text-lg font-almarai text-muted-foreground mb-4">
            السبت، ٦ فبراير ٢٠٢٦
          </p>
          <p className="text-sm font-almarai text-muted-foreground">
            قاعة سوليتير الالماظة - القاهرة
          </p>
        </motion.div>

        {/* Decorative divider */}
        <motion.div
          className="flex items-center justify-center gap-4 mb-12"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent opacity-30" />
          <div className="w-8 h-8 rounded-full border-2 border-accent opacity-40 flex items-center justify-center">
            <div className="w-2 h-2 rounded-full bg-accent" />
          </div>
          <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent opacity-30" />
        </motion.div>

        {/* Thank you message */}
        <motion.div
          className="mb-12 p-8 bg-white rounded-lg border-2 border-accent/20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <p className="text-xl font-almarai text-foreground leading-relaxed mb-4">
            شكراً لكم على تشريفكم لنا بحضوركم
          </p>
          <p className="text-lg font-almarai text-muted-foreground">
            نتطلع لمشاركتكم أجمل لحظات حياتنا
          </p>
        </motion.div>

        {/* Islamic blessing */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
        >
          <p className="text-lg font-almarai text-accent italic">
            بسم الله الرحمن الرحيم
          </p>
        </motion.div>

        {/* Copyright */}
        <motion.div
          className="pt-8 border-t border-accent/20"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="text-sm font-almarai text-muted-foreground">
            © ٢٠٢٦ دعوة زفاف ليان و محمد | جميع الحقوق محفوظة
          </p>
          <p className="text-xs font-almarai text-muted-foreground mt-2">
            تم إنشاء هذه الدعوة بكل حب واهتمام
          </p>
        </motion.div>
      </div>
    </footer>
  );
}

