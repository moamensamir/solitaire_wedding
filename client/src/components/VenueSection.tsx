import { motion } from 'framer-motion';
import { MapPin, Clock } from 'lucide-react';

export default function VenueSection() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-cormorant font-bold text-accent mb-4">
            مكان الحفل
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Venue details grid */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Details */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            {/* Venue name */}
            <div className="mb-8">
              <h3 className="text-3xl font-cormorant font-bold text-foreground mb-4">
                قاعة سوليتير الالماظة
              </h3>
              <p className="text-lg font-almarai text-muted-foreground leading-relaxed">
                قاعة فاخرة متخصصة في الحفلات الملكية والمناسبات الراقية
              </p>
            </div>

            {/* Location details */}
            <div className="space-y-6 mb-8">
              {/* Address */}
              <motion.div
                className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg border-r-4 border-accent"
                whileHover={{ x: -8 }}
                transition={{ duration: 0.3 }}
              >
                <MapPin className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-almarai font-bold text-foreground mb-1">العنوان</p>
                  <p className="font-almarai text-muted-foreground">الالماظة، القاهرة</p>
                </div>
              </motion.div>

              {/* Time */}
              <motion.div
                className="flex items-start gap-4 p-4 bg-secondary/30 rounded-lg border-r-4 border-accent"
                whileHover={{ x: -8 }}
                transition={{ duration: 0.3 }}
              >
                <Clock className="w-6 h-6 text-accent flex-shrink-0 mt-1" />
                <div>
                  <p className="font-almarai font-bold text-foreground mb-1">الوقت</p>
                  <p className="font-almarai text-muted-foreground">السبت، ٦ فبراير ٢٠٢٦</p>
                  <p className="font-almarai text-muted-foreground text-sm">الساعة ٨ مساءً</p>
                </div>
              </motion.div>
            </div>

            {/* Decorative element */}
            <div className="flex justify-end mb-4">
              <div
                className="w-12 h-12 opacity-30"
                style={{
                  backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/gold-ornament-pattern-grePg8bPhTyuKBqFKEVMmY.webp)',
                  backgroundSize: 'contain',
                  backgroundRepeat: 'no-repeat',
                }}
              />
            </div>
          </motion.div>

          {/* Right - Map placeholder */}
          <motion.div
            className="relative h-96 rounded-lg overflow-hidden shadow-xl border-4 border-accent/20"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Map background - using a static image for now */}
            <div
              className="w-full h-full bg-gradient-to-br from-muted to-secondary flex items-center justify-center"
              style={{
                backgroundImage: 'linear-gradient(135deg, #E8DFF5 0%, #F8F6F1 100%)',
              }}
            >
              <div className="text-center">
                <MapPin className="w-12 h-12 text-accent mx-auto mb-4 opacity-50" />
                <p className="font-almarai text-muted-foreground">خريطة الموقع</p>
                <p className="font-almarai text-sm text-muted-foreground mt-2">
                  الالماظة، القاهرة
                </p>
              </div>
            </div>

            {/* Decorative overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-white/20 to-transparent pointer-events-none" />
          </motion.div>
        </div>

        {/* Additional info */}
        <motion.div
          className="bg-secondary/40 rounded-lg p-8 text-right border-r-4 border-accent"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h4 className="text-xl font-cormorant font-bold text-accent mb-4">معلومات مهمة</h4>
          <ul className="space-y-3 font-almarai text-foreground">
            <li className="flex items-center justify-end gap-3">
              <span>يرجى الالتزام بالموعد المحدد</span>
              <div className="w-2 h-2 rounded-full bg-accent" />
            </li>
            <li className="flex items-center justify-end gap-3">
              <span>الحفل سيكون بحضور العائلة والأصدقاء المقربين</span>
              <div className="w-2 h-2 rounded-full bg-accent" />
            </li>
            <li className="flex items-center justify-end gap-3">
              <span>يتوفر موقف سيارات واسع بالقاعة</span>
              <div className="w-2 h-2 rounded-full bg-accent" />
            </li>
          </ul>
        </motion.div>
      </div>
    </section>
  );
}

