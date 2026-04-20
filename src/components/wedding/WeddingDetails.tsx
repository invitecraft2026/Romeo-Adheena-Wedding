import { motion } from "framer-motion";
import { Church, PartyPopper } from "lucide-react";

const details = [
  {
    icon: Church,
    title: "Marriage",
    venue: "Roman Catholic Basilica of Our Lady of Snow",
    time: "May 30, 2026 • 3:00 PM",
    desc: "Join us as we exchange our vows and begin our new journey together",
  },
  {
    icon: PartyPopper,
    title: "Reception",
    venue: "Indriya Sands, Cherai",
    time: "6:00 PM – 10:00 PM",
    desc: "Reception to follow with dinner, music, and celebration",
  },
];

const WeddingDetails = () => (
  <section className="py-20 px-4">
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="max-w-2xl mx-auto text-center"
    >
      <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">
        Wedding
      </p>

      <h2 className="font-script text-4xl md:text-5xl text-gold mb-12 text-shadow-gold">
        Details
      </h2>

      <div className="grid md:grid-cols-2 gap-6">
        {details.map((d, i) => (
          <motion.div
            key={d.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2 }}
            className="glass rounded-2xl p-8 text-center"
          >
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <d.icon className="w-6 h-6 text-gold" />
            </div>

            <h3 className="font-serif text-xl font-semibold text-foreground mb-1">
              {d.title}
            </h3>

            <p className="text-gold font-serif text-lg">
              {d.venue}
            </p>

            <p className="text-muted-foreground font-serif mt-1">
              {d.time}
            </p>

            <p className="text-muted-foreground/70 text-sm mt-3">
              {d.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </section>
);

export default WeddingDetails;