const Footer = () => (
  <footer className="py-12 text-center">
    <p className="font-script text-3xl text-gold mb-2">David & Anna</p>
    <p className="text-muted-foreground text-sm tracking-widest">15 . 08 . 2025</p>
    <div className="mt-6 flex justify-center gap-1">
      {[...Array(3)].map((_, i) => (
        <span key={i} className="text-gold/40 text-xs">✦</span>
      ))}
    </div>
    <p className="text-muted-foreground/40 text-xs mt-4">#DavidAndAnna2025</p>
  </footer>
);

export default Footer;
