import { motion } from 'framer-motion';
import { useState } from 'react';

export default function GallerySection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const galleryItems = [
    {
      id: 1,
      title: 'اللحظات الأولى',
      description: 'بداية القصة الجميلة',
      color: 'from-accent/20 to-secondary/20',
    },
    {
      id: 2,
      title: 'الذكريات الحلوة',
      description: 'لحظات لا تُنسى',
      color: 'from-secondary/20 to-muted/20',
    },
    {
      id: 3,
      title: 'الحب والرومانسية',
      description: 'قصة حب خاصة',
      color: 'from-muted/20 to-accent/20',
    },
    {
      id: 4,
      title: 'اللحظات الثمينة',
      description: 'ذكريات غالية',
      color: 'from-accent/20 to-muted/20',
    },
    {
      id: 5,
      title: 'معاً للأبد',
      description: 'بداية حياة جديدة',
      color: 'from-secondary/20 to-accent/20',
    },
    {
      id: 6,
      title: 'الحلم الحقيقي',
      description: 'تحقق الأحلام',
      color: 'from-muted/20 to-secondary/20',
    },
  ];

  return (
    <section className="py-20 px-4 bg-white">
      <div className="container max-w-6xl mx-auto">
        {/* Section title */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-5xl font-cormorant font-bold text-accent mb-4">
            معرض الصور
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-accent to-transparent mx-auto" />
        </motion.div>

        {/* Gallery grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              className="relative h-64 rounded-lg overflow-hidden cursor-pointer group"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              whileHover={{ y: -8 }}
            >
              {/* Background gradient */}
              <div
                className={`absolute inset-0 bg-gradient-to-br ${item.color} transition-all duration-300`}
              />

              {/* Content overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
                {/* Icon placeholder */}
                <motion.div
                  className="mb-4"
                  animate={hoveredIndex === index ? { scale: 1.2 } : { scale: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="w-12 h-12 rounded-full bg-accent/20 flex items-center justify-center">
                    <div className="w-6 h-6 rounded-full bg-accent" />
                  </div>
                </motion.div>

                {/* Title */}
                <h3 className="text-xl font-cormorant font-bold text-foreground mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <motion.p
                  className="font-almarai text-sm text-muted-foreground"
                  animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0.7 }}
                  transition={{ duration: 0.3 }}
                >
                  {item.description}
                </motion.p>
              </div>

              {/* Hover border effect */}
              <motion.div
                className="absolute inset-0 border-2 border-accent rounded-lg"
                animate={hoveredIndex === index ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.3 }}
              />
            </motion.div>
          ))}
        </div>

        {/* Bottom decorative element */}
        <motion.div
          className="flex justify-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div
            className="w-16 h-16 opacity-30"
            style={{
              backgroundImage: 'url(https://d2xsxph8kpxj0f.cloudfront.net/310519663632622673/L2W5gaRC8kwpTby4Q3mBRy/gold-ornament-pattern-grePg8bPhTyuKBqFKEVMmY.webp)',
              backgroundSize: 'contain',
              backgroundRepeat: 'no-repeat',
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}

