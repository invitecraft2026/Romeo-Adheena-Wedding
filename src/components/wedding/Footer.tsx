const Footer = () => (
  <footer className="py-12 text-center">
    <p className="font-script text-3xl text-gold mb-2">Romeo & Atheena</p>
    <p className="text-muted-foreground text-sm tracking-widest">30 . 05 . 2026</p>
    <div className="mt-6 flex justify-center gap-1">
      {[...Array(3)].map((_, i) => (
        <span key={i} className="text-gold/40 text-xs">✦</span>
      ))}
    </div>
    <p className="text-muted-foreground/40 text-xs mt-4">#RomeoAndAtheena2026</p>
  </footer>
);

export default Footer;
