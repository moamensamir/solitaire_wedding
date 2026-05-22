import { motion } from 'framer-motion';

export default function StorySection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-b from-secondary/20 to-white">
      <div className="container max-w-4xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-cormorant font-bold text-accent mb-4">
            قصتنا
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Story content */}
        <div className="space-y-12">
          {/* Intro paragraph */}
          <motion.div
            className="text-right"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-xl font-almarai text-foreground leading-relaxed mb-6">
              بدأت قصتنا بلقاء عابر، لكنه كان البداية لرحلة جميلة مليئة بالحب والتفاهم والاحترام المتبادل. 
              في كل لحظة معاً، اكتشفنا أننا نكمل بعضنا البعض، وأن الحب الحقيقي هو ما يجمعنا.
            </p>
            <p className="text-xl font-almarai text-foreground leading-relaxed">
              اليوم، نشعر بسعادة غامرة بأن نشارككم أجمل لحظات حياتنا، ونأمل أن تكونوا جزءاً من هذا اليوم المميز.
            </p>
          </motion.div>

          {/* Decorative divider */}
          <motion.div
            className="flex items-center justify-center gap-4"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="flex-1 h-px bg-gradient-to-r from-transparent to-accent opacity-30" />
            <div
              className="w-12 h-12 opacity-40"
              style={{
                backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/gold-ornament-pattern-grePg8bPhTyuKBqFKEVMmY.webp)',
                backgroundSize: 'contain',
                backgroundRepeat: 'no-repeat',
              }}
            />
            <div className="flex-1 h-px bg-gradient-to-l from-transparent to-accent opacity-30" />
          </motion.div>

          {/* Couple names and roles */}
          <motion.div
            className="grid md:grid-cols-2 gap-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            {/* Bride */}
            <motion.div
              className="text-center p-8 bg-white rounded-lg border-2 border-accent/20 hover:border-accent/50 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-cormorant font-bold text-accent mb-2">ليان</h3>
              <p className="font-almarai text-muted-foreground mb-4">العروس</p>
              <p className="font-almarai text-foreground text-sm leading-relaxed">
                فتاة بقلب طيب وروح جميلة، تؤمن بقوة الحب والعائلة، وتحمل أحلاماً كبيرة لمستقبل مشرق.
              </p>
            </motion.div>

            {/* Groom */}
            <motion.div
              className="text-center p-8 bg-white rounded-lg border-2 border-accent/20 hover:border-accent/50 transition-colors"
              whileHover={{ y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <h3 className="text-3xl font-cormorant font-bold text-accent mb-2">محمد</h3>
              <p className="font-almarai text-muted-foreground mb-4">العريس</p>
              <p className="font-almarai text-foreground text-sm leading-relaxed">
                شاب طموح وقلبه نقي، يسعى للتميز في كل ما يفعله، ويؤمن أن الحب الحقيقي يبني أساساً قوياً للحياة.
              </p>
            </motion.div>
          </motion.div>

          {/* Quote section */}
          <motion.div
            className="text-center py-12 px-8 bg-gradient-to-r from-secondary/30 to-muted/30 rounded-lg border-r-4 border-accent"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <p className="text-2xl font-playfair italic text-accent mb-4">
              "الحب ليس فقط شعوراً، بل هو اختيار يومي لنكون أفضل نسخة من أنفسنا"
            </p>
            <p className="font-almarai text-muted-foreground">— ليان و محمد</p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

