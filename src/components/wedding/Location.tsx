import { motion } from "framer-motion";
import { MapPin, Navigation } from "lucide-react";

const Location = () => (
  <section className="py-20 px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-4xl mx-auto text-center"
    >
      <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">
        Find
      </p>

      <h2 className="font-script text-4xl md:text-5xl text-gold mb-10 text-shadow-gold">
        Our Venues
      </h2>

      {/* ✅ Grid for 2 locations */}
      <div className="grid md:grid-cols-2 gap-8">
        
        {/* ================= WEDDING ================= */}
        <div className="glass rounded-2xl overflow-hidden">
          <iframe
            title="Wedding venue location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.3365459909783!2d76.1827642!3d10.167563999999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b081a21965ac783%3A0x26fa89a460ca667d!2sRoman%20Catholic%20Basilica%20of%20Our%20Lady%20of%20Snow!5e1!3m2!1sen!2sin!4v1776666821439!5m2!1sen!2sin"
            className="w-full h-56 border-0"
            loading="lazy"
          />

          <div className="p-6 text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Marriage
            </p>

            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-serif text-foreground">
                Roman Catholic Basilica of Our Lady of Snow
              </span>
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              Pallippuram, Cherai, Kerala
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Roman+Catholic+Basilica+of+Our+Lady+of+Snow"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs tracking-wider"
            >
              <Navigation className="w-4 h-4" />
              Directions
            </a>
          </div>
        </div>

        {/* ================= RECEPTION ================= */}
        <div className="glass rounded-2xl overflow-hidden">
          <iframe
            title="Reception venue location"
            src="https://www.google.com/maps?q=Indriya+Sands+Cherai&output=embed"
            className="w-full h-56 border-0"
            loading="lazy"
          />

          <div className="p-6 text-center">
            <p className="text-xs uppercase tracking-widest text-muted-foreground mb-2">
              Reception
            </p>

            <div className="flex items-center justify-center gap-2 mb-2">
              <MapPin className="w-4 h-4 text-gold" />
              <span className="font-serif text-foreground">
                Indriya Sands
              </span>
            </div>

            <p className="text-muted-foreground text-sm mb-4">
              Cherai, Kerala
            </p>

            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Indriya+Sands+Cherai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-2 rounded-full bg-primary text-primary-foreground text-xs tracking-wider"
            >
              <Navigation className="w-4 h-4" />
              Directions
            </a>
          </div>
        </div>

      </div>
    </motion.div>
  </section>
);

export default Location;