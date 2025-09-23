
export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-muted mt-20">
      <div className="container mx-auto px-4 py-8">
        <div className="border-t border-border pt-8 text-center space-y-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Patellect IP Solutions. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
