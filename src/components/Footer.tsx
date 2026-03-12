const Footer = () => (
  <footer className="border-t border-border py-8 px-4">
    <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
      <p className="text-[10px] text-muted-foreground font-mono">
        <span className="text-primary/50">©</span> {new Date().getFullYear()} Hire Bikila — built with passion & playlists
      </p>
      <p className="text-[10px] text-muted-foreground/40 font-mono">
        v2.0.0 | last_deploy: {new Date().toISOString().split("T")[0]}
      </p>
    </div>
  </footer>
);

export default Footer;
