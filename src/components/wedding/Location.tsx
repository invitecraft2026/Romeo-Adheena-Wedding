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
      <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">Find</p>
      <h2 className="font-script text-4xl md:text-5xl text-gold mb-8 text-shadow-gold">
        Our Venue
      </h2>

      <div className="glass rounded-2xl overflow-hidden">
        <iframe
          title="Wedding venue location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0977!2d-122.4194!3d37.7749!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzfCsDQ2JzI5LjYiTiAxMjLCsDI1JzA5LjgiVw!5e0!3m2!1sen!2sus!4v1600000000000!5m2!1sen!2sus"
          className="w-full h-64 md:h-80 border-0"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
        <div className="p-6 text-center">
          <div className="flex items-center justify-center gap-2 mb-3">
            <MapPin className="w-4 h-4 text-gold" />
            <span className="font-serif text-foreground">St. Mary's Church</span>
          </div>
          <p className="text-muted-foreground text-sm mb-4">
            123 Church Street, City Center
          </p>
          <a
            href="https://maps.google.com"
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
