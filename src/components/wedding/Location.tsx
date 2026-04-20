import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const Location = () => (
  <section className="py-20 px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-center"
    >
      <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">
        Find
      </p>

      <h2 className="font-script text-4xl md:text-5xl text-gold mb-8 text-shadow-gold">
        Our Venue
      </h2>

      <div className="glass rounded-2xl overflow-hidden">
        {/* ✅ Updated Map Embed */}
        <iframe
          title="Wedding venue location"
          src="https://www.google.com/maps?q=Roman+Catholic+Basilica+of+Our+Lady+of+Snow&output=embed"
          className="w-full h-64 md:h-80 border-0"
          loading="lazy"
        />

        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gold" />

            <span className="font-serif text-foreground">
              Roman Catholic Basilica of Our Lady of Snow
            </span>
          </div>

          <p className="text-muted-foreground text-sm mb-4">
            Pallippuram, Cherai, Kerala, India
          </p>

          {/* ✅ Updated Directions */}
          <a
            href="https://www.google.com/maps/dir/?api=1&destination=Roman+Catholic+Basilica+of+Our+Lady+of+Snow"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-serif text-sm tracking-wider hover:bg-gold-dark transition-colors"
          >
            <Navigation className="w-4 h-4" />
            Get Directions
          </a>
        </div>
      </div>
    </motion.div>
  </section>
);

export default Location;