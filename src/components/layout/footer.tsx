export function Footer() {
  return (
    <footer className="w-full border-t border-border/50 py-6 mt-16">
      <div className="container mx-auto px-4 md:px-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Antarctica Unveiled. All rights reserved.</p>
        <p className="mt-1">An educational project exploring the wonders of the southern continent.</p>
      </div>
    </footer>
  );
}
