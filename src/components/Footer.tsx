import { Mail, MapPin, Phone, ExternalLink } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Programs', href: '#programs' },
    { name: 'Events', href: '#events' },
    { name: 'Contact', href: '#contact' },
  ];

  const programs = [
    { name: 'Leadership Development', href: '#programs' },
    { name: 'Mentorship Network', href: '#programs' },
    { name: 'Business Workshops', href: '#programs' },
    { name: 'Professional Certification', href: '#programs' },
  ];

  return (
    <footer className="bg-gradient-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-3xl font-playfair font-bold text-gradient-gold mb-4">
              Asian Business Leaders
            </h3>
            <p className="text-primary-foreground/80 mb-6 leading-relaxed max-w-md">
              Empowering the next generation of Asian business leaders at the University of Guelph 
              through mentorship, networking, and professional development.
            </p>
            
            <div className="space-y-3">
              <div className="flex items-center">
                <Mail className="w-4 h-4 mr-3" />
                <span className="text-primary-foreground/80">info@ublasianleaders.ca</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-4 h-4 mr-3" />
                <span className="text-primary-foreground/80">University Centre, University of Guelph</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-4 h-4 mr-3" />
                <span className="text-primary-foreground/80">+1 (519) 824-4120</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <div className="space-y-2">
              {quickLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Programs */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Our Programs</h4>
            <div className="space-y-2">
              {programs.map((program) => (
                <a
                  key={program.name}
                  href={program.href}
                  className="block text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-200"
                >
                  {program.name}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* University Partnership */}
        <div className="border-t border-primary-foreground/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <span className="text-primary-foreground/80">
                Proudly affiliated with
              </span>
              <a
                href="https://www.uoguelph.ca"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-primary-foreground hover:text-primary-foreground/80 transition-colors duration-200 inline-flex items-center"
              >
                University of Guelph
                <ExternalLink className="w-4 h-4 ml-1" />
              </a>
            </div>
            
            <div className="text-primary-foreground/60 text-sm">
              © 2024 Asian Business Leaders. All rights reserved.
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;