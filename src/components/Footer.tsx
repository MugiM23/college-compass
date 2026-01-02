import { GraduationCap } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12">
      <div className="container px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center">
              <GraduationCap className="w-5 h-5 text-primary-foreground" />
            </div>
            <span className="font-display text-xl font-bold text-background">
              CollegeGuide
            </span>
          </div>

          {/* Copyright */}
          <p className="text-background/60 text-sm text-center">
            © {new Date().getFullYear()} CollegeGuide. All rights reserved.
          </p>

          {/* Links */}
          <div className="flex items-center gap-6">
            <a
              href="#services"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              Services
            </a>
            <a
              href="#contact"
              className="text-sm text-background/60 hover:text-background transition-colors"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
