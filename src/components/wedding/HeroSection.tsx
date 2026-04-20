import { motion } from "framer-motion";
import coupleImage from "@/assets/couple.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center py-20 overflow-hidden">
      {/* Glow behind couple */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] md:w-[500px] md:h-[500px] rounded-full bg-primary/10 blur-[80px]" />

      {/* Couple image */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="relative z-10 animate-float"
      >
        <img
          src={coupleImage}
          alt="Wedding Couple"
          className="w-64 md:w-80 lg:w-96 drop-shadow-2xl"
        />
      </motion.div>

      {/* Names */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.5 }}
        className="text-center mt-8 z-10"
      >
        <h2 className="font-script text-5xl md:text-7xl text-gold text-shadow-gold">David</h2>
        <p className="font-script text-3xl md:text-4xl text-gold/70 my-2">&</p>
        <h2 className="font-script text-5xl md:text-7xl text-gold text-shadow-gold">Anna</h2>
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="mt-8 text-center text-muted-foreground font-serif text-lg md:text-xl max-w-md px-4 leading-relaxed"
      >
        Together with their families
        <br />
        invite you to celebrate their wedding
      </motion.p>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 flex flex-col items-center gap-2"
      >
        <span className="text-muted-foreground/50 text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="w-px h-8 bg-gradient-to-b from-primary/50 to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default HeroSection;
