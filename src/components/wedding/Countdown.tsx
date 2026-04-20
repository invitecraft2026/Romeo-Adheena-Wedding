import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {
  // ✅ Fixed wedding date (IST)
  const targetDate = new Date("2026-05-30T15:00:00");

  const getTimeLeft = () => {
    const diff = Math.max(0, targetDate.getTime() - Date.now());

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  };

  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(getTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const units = [
    { label: "Days", value: time.days },
    { label: "Hours", value: time.hours },
    { label: "Minutes", value: time.minutes },
    { label: "Seconds", value: time.seconds },
  ];

  return (
    <section className="py-20 px-4">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center"
      >
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-2">
          Counting Down To
        </p>

        {/* ✅ Show date */}
        <h2 className="font-serif text-xl md:text-2xl mb-6 text-gold">
          May 30, 2026 • 3:00 PM
        </h2>

        <div className="grid grid-cols-4 gap-2 sm:gap-3 md:flex md:justify-center md:gap-6 px-2">
  {units.map((u) => (
    <div
      key={u.label}
      className="glass rounded-xl p-2 sm:p-3 md:p-6 border-gold/20 text-center 
                 md:w-28 lg:w-32"
    >
      <span className="font-serif text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-gold block leading-none">
        {String(u.value).padStart(2, "0")}
      </span>

      <span className="text-muted-foreground text-[10px] sm:text-xs tracking-[0.15em] uppercase mt-1 block">
        {u.label}
      </span>
    </div>
  ))}
</div>
      </motion.div>
    </section>
  );
};

export default Countdown;
