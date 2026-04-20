import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import OpeningScreen from "@/components/wedding/OpeningScreen";
import HeroSection from "@/components/wedding/HeroSection";
import ScratchCard from "@/components/wedding/ScratchCard";
import Countdown from "@/components/wedding/Countdown";
import WeddingDetails from "@/components/wedding/WeddingDetails";
import Gallery from "@/components/wedding/Gallery";
import Location from "@/components/wedding/Location";
import MusicPlayer from "@/components/wedding/MusicPlayer";
import FloatingPetals from "@/components/wedding/FloatingPetals";
import Footer from "@/components/wedding/Footer";
import DressCode from "@/components/wedding/DressCode";

const Index = () => {
  const [entered, setEntered] = useState(false);

  return (
    <div className="min-h-screen bg-background overflow-x-hidden">
      <AnimatePresence>
        {!entered && (
          <motion.div key="opening" exit={{ opacity: 0 }} transition={{ duration: 0.8 }}>
            <OpeningScreen onEnter={() => setEntered(true)} />
          </motion.div>
        )}
      </AnimatePresence>

      {entered && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          <FloatingPetals />
          <MusicPlayer autoPlay />
          <HeroSection />
          <ScratchCard />
          <Countdown />
          <WeddingDetails />
          <DressCode/>
          <Gallery />
          <Location />
          <Footer />
        </motion.div>
      )}
    </div>
  );
};

export default Index;
