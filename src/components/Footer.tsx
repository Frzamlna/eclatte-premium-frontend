import { motion } from 'framer-motion';
import { Instagram, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const footerLinks = {
    company: [
      { name: 'Tentang Kami', href: '#about' },
      { name: 'Karir', href: '#' },
      { name: 'Press', href: '#' },
      { name: 'Kebijakan Privasi', href: '#' },
    ],
    help: [
      { name: 'Panduan Ukuran', href: '#' },
      { name: 'Pengiriman', href: '#' },
      { name: 'Pengembalian', href: '#' },
      { name: 'FAQ', href: '#' },
    ],
    connect: [
      { name: 'Instagram', href: '#', icon: Instagram },
      { name: 'Email', href: '#', icon: Mail },
      { name: 'Lokasi', href: '#', icon: MapPin },
      { name: 'Telepon', href: '#', icon: Phone },
    ],
  };

  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <h3 className="text-3xl font-serif font-bold mb-4">Eclatte</h3>
            <p className="text-primary-foreground/80 mb-6 max-w-md leading-relaxed">
              Menghadirkan koleksi fashion pria premium dengan sentuhan old money yang elegan. 
              Setiap piece dirancang untuk pria modern yang menghargai kualitas dan gaya timeless.
            </p>
            <div className="flex space-x-4">
              {footerLinks.connect.map((item) => {
                const Icon = item.icon;
                return (
                  <motion.a
                    key={item.name}
                    href={item.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="p-2 bg-primary-foreground/10 rounded-full hover:bg-primary-foreground/20 transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Perusahaan</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Help Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold mb-4">Bantuan</h4>
            <ul className="space-y-3">
              {footerLinks.help.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-primary-foreground/80 hover:text-primary-foreground transition-colors duration-300 relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-accent transition-all duration-300 group-hover:w-full"></span>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="border-t border-primary-foreground/20 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
        >
          <p className="text-primary-foreground/60 text-sm mb-4 md:mb-0">
            © 2024 Eclatte. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm">
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Syarat & Ketentuan
            </a>
            <a href="#" className="text-primary-foreground/60 hover:text-primary-foreground transition-colors">
              Kebijakan Privasi
            </a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;