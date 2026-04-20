import { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";

const CALENDAR_URL =
  "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Wedding+Ceremony&dates=20260530T093000Z/20260530T113000Z&details=Marriage+Ceremony&location=Roman+Catholic+Basilica+of+Our+Lady+of+Snow";

const ScratchCard = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [isScratching, setIsScratching] = useState(false);

  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width;
    canvas.height = rect.height;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const gradient = ctx.createLinearGradient(0, 0, canvas.width, canvas.height);
    gradient.addColorStop(0, "#C9A84C");
    gradient.addColorStop(0.5, "#E8D48B");
    gradient.addColorStop(1, "#C9A84C");

    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = "#A08030";
    ctx.font = "bold 16px serif";
    ctx.textAlign = "center";
    ctx.fillText("✦ Scratch to Reveal ✦", canvas.width / 2, canvas.height / 2 + 6);
  }, []);

  useEffect(() => {
    initCanvas();
  }, [initCanvas]);

  const scratch = (x: number, y: number) => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 25, 0, Math.PI * 2);
    ctx.fill();

    const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
    let transparent = 0;

    for (let i = 3; i < imageData.data.length; i += 4) {
      if (imageData.data[i] === 0) transparent++;
    }

    if (transparent / (imageData.data.length / 4) > 0.5) {
      setIsRevealed(true);
    }
  };

  const getPos = (e: any) => {
    const canvas = canvasRef.current!;
    const rect = canvas.getBoundingClientRect();

    const clientX = e.touches ? e.touches[0].clientX : e.clientX;
    const clientY = e.touches ? e.touches[0].clientY : e.clientY;

    return {
      x: clientX - rect.left,
      y: clientY - rect.top,
    };
  };

  return (
    <section className="py-20 px-4 text-center">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="max-w-sm mx-auto"
      >
        <p className="text-muted-foreground text-sm tracking-[0.3em] uppercase mb-6">
          Save the Date
        </p>

        <div className="relative w-full h-48 rounded-xl overflow-hidden border-2 border-gold glow-gold">
          
          {/* 🎉 Revealed Content */}
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-champagne px-4">
            <p className="font-serif text-sm uppercase text-muted-foreground mb-1">
              Marriage
            </p>

            <h3 className="font-script text-3xl text-gold mb-2">
              30 May 2026
            </h3>

            <p className="font-serif text-center">
              Roman Catholic Basilica of Our Lady of Snow
            </p>

            <p className="font-serif text-muted-foreground text-sm mt-1">
              3:00 PM
            </p>
          </div>

          {/* Scratch Layer */}
          {!isRevealed && (
            <canvas
              ref={canvasRef}
              className="absolute inset-0 w-full h-full cursor-pointer"
              onMouseDown={() => setIsScratching(true)}
              onMouseUp={() => setIsScratching(false)}
              onMouseLeave={() => setIsScratching(false)}
              onMouseMove={(e) => {
                if (!isScratching) return;
                const { x, y } = getPos(e);
                scratch(x, y);
              }}
              onTouchStart={() => setIsScratching(true)}
              onTouchEnd={() => setIsScratching(false)}
              onTouchMove={(e) => {
                if (!isScratching) return;
                const { x, y } = getPos(e);
                scratch(x, y);
              }}
            />
          )}
        </div>

        {/* 📅 Add to Calendar Button */}
        {isRevealed && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-6 px-6 py-3 rounded-full bg-primary text-primary-foreground shadow-lg hover:scale-105 transition"
            onClick={() => window.open(CALENDAR_URL, "_blank")}
          >
            Add to Calendar
          </motion.button>
        )}
      </motion.div>
    </section>
  );
};

export default ScratchCard;