import { motion } from "framer-motion";

interface OpeningScreenProps {
  onEnter: () => void;
}

const OpeningScreen = ({ onEnter }: OpeningScreenProps) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-background cursor-pointer"
      onClick={onEnter}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-primary/10"
            style={{
              width: Math.random() * 6 + 2 + "px",
              height: Math.random() * 6 + 2 + "px",
              left: Math.random() * 100 + "%",
              top: Math.random() * 100 + "%",
              animation: `sparkle ${Math.random() * 3 + 2}s ease-in-out infinite`,
              animationDelay: Math.random() * 3 + "s",
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 0.3 }}
        className="text-center z-10"
      >
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-4">
          You are invited to
        </p>
        <h1 className="font-script text-5xl md:text-7xl text-gold mb-2 text-shadow-gold">
          David & Anna
        </h1>
        <p className="font-serif text-lg text-muted-foreground tracking-widest mb-12">
          Wedding Celebration
        </p>

        <motion.div
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="inline-block"
        >
          <div className="px-8 py-4 border-2 border-gold rounded-full animate-pulse-glow transition-all duration-300 hover:bg-primary/10">
            <span className="text-gold font-serif tracking-[0.2em] uppercase text-sm">
              Tap to Open
            </span>
          </div>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="mt-8 text-muted-foreground/50 text-xs tracking-widest"
        >
          ✦ 15 . 08 . 2025 ✦
        </motion.p>
      </motion.div>
    </motion.div>
  );
};

export default OpeningScreen;
