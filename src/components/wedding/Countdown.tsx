import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Countdown = () => {

  // create random future time
  const generateRandomDate = () => {
    const now = new Date();

    const randomDays = Math.floor(Math.random() * 30) + 1; // 1–30 days
    const randomHours = Math.floor(Math.random() * 24);
    const randomMinutes = Math.floor(Math.random() * 60);
    const randomSeconds = Math.floor(Math.random() * 60);

    const future = new Date(now);
    future.setDate(now.getDate() + randomDays);
    future.setHours(now.getHours() + randomHours);
    future.setMinutes(now.getMinutes() + randomMinutes);
    future.setSeconds(now.getSeconds() + randomSeconds);

    return future;
  };

  const [targetDate] = useState(generateRandomDate());
  const [time, setTime] = useState(getTimeLeft());

  function getTimeLeft() {
    const diff = Math.max(0, targetDate.getTime() - Date.now());

    return {
      days: Math.floor(diff / (1000 * 60 * 60 * 24)),
      hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((diff / (1000 * 60)) % 60),
      seconds: Math.floor((diff / 1000) % 60),
    };
  }

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
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-8">
          Counting Down To
        </p>

        <div className="flex justify-center gap-3 md:gap-6">
          {units.map((u) => (
            <div
              key={u.label}
              className="glass rounded-xl p-4 md:p-6 min-w-[70px] md:min-w-[90px] border-gold/20"
            >
              <span className="font-serif text-3xl md:text-5xl font-bold text-gold block">
                {String(u.value).padStart(2, "0")}
              </span>

              <span className="text-muted-foreground text-xs tracking-[0.15em] uppercase mt-1 block">
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