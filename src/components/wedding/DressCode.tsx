import { motion } from "framer-motion";
import { Shirt, Sparkles } from "lucide-react";

const DressCode = () => {
  return (
    <section className="py-20 px-4 bg-background">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto text-center"
      >
        {/* Heading */}
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">
          Dress Code
        </p>

        <h2 className="font-script text-4xl md:text-5xl text-gold mb-10 animate-float">
          Style Guide
        </h2>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-3 gap-8 items-center">

          {/* 👗 Female (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <img
              src="/maledresscode.png" // 👉 replace with your image
              alt="Female Dress Code"
              className="w-48 md:w-60 object-contain drop-shadow-xl"
            />
          </motion.div>

          {/* 💎 Center Card */}
          <div className="relative glass rounded-2xl p-8 md:p-10 border border-border/40 bg-card/60 backdrop-blur-md shadow-lg">

            {/* Glow */}
            <div className="absolute inset-0 rounded-2xl pointer-events-none animate-pulse-glow" />

            {/* Icon */}
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gold/10 flex items-center justify-center">
              <Shirt className="w-7 h-7 text-gold" />
            </div>

            {/* Theme */}
            <div className="mb-6">
              <p className="text-muted-foreground uppercase tracking-widest text-xs mb-2">
                Theme
              </p>
              <h3 className="font-serif text-xl md:text-2xl text-foreground">
                Western • Black & White
              </h3>
            </div>

            {/* Divider */}
            <div className="flex items-center justify-center gap-2 my-6">
              <div className="h-px w-10 bg-gold/40" />
              <Sparkles className="w-4 h-4 text-gold" />
              <div className="h-px w-10 bg-gold/40" />
            </div>

            {/* Description */}
            <p className="font-serif text-muted-foreground leading-relaxed text-sm md:text-base max-w-md mx-auto">
              We kindly request all our guests to dress in{" "}
              <span className="text-gold font-semibold">
                formal Western attire
              </span>{" "}
              following a{" "}
              <span className="text-gold font-semibold">
                Black & White theme
              </span>{" "}
              to make the celebration elegant and memorable.
            </p>

            {/* Colors */}
            <div className="flex justify-center gap-4 mt-8">
              <div className="w-10 h-10 rounded-full bg-black border border-border shadow-inner" />
              <div className="w-10 h-10 rounded-full bg-white border border-border shadow-inner" />
            </div>
          </div>

          {/* 🤵 Male (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="flex justify-center"
          >
            <img
              src="/femaledresscode.png" // 👉 replace with your image
              alt="Male Dress Code"
              className="w-48 md:w-60 object-contain drop-shadow-xl"
            />
          </motion.div>

        </div>
      </motion.div>
    </section>
  );
};

export default DressCode;