import { Heart, Mail, Phone, MapPin, Instagram, Facebook, Twitter, Youtube } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Footer = () => {
  const { t } = useLanguage();
  
  const quickLinks = [
    { name: t('nav.home'), href: '#home' },
    { name: t('nav.about'), href: '#about' },
    { name: t('nav.classes'), href: '#classes' },
    { name: t('nav.pricing'), href: '#pricing' },
    { name: t('nav.contact'), href: '#contact' }
  ];

  const resources = [
    { name: 'Beginner Guide', href: '#' },
    { name: 'Blog', href: '#' },
    { name: 'Wellness Tips', href: '#' },
    { name: 'Community', href: '#' },
    { name: 'FAQ', href: '#' }
  ];

  const legal = [
    { name: 'Privacy Policy', href: '#' },
    { name: 'Terms of Service', href: '#' },
    { name: 'Cookie Policy', href: '#' },
    { name: 'Refund Policy', href: '#' }
  ];

  const socialLinks = [
    { icon: Instagram, url: '#', label: 'Instagram' },
    { icon: Facebook, url: '#', label: 'Facebook' },
    { icon: Twitter, url: '#', label: 'Twitter' },
    { icon: Youtube, url: '#', label: 'YouTube' }
  ];

  return (
    <footer className="bg-gradient-to-b from-background to-muted/30 border-t border-border/50">
      <div className="container-custom section-padding">
        <div className="grid lg:grid-cols-4 gap-12 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-3xl font-bold text-gradient mb-4">Dhyandeep Yog Foundation</h3>
              <p className="text-foreground/70 leading-relaxed">
                {t('footer.description')}
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-sm">
                <Phone className="h-4 w-4 text-primary" />
                <span className="text-foreground/70">+91-99919-00456</span>
              </div>
              <div className="flex items-center space-x-3 text-sm">
                <Mail className="h-4 w-4 text-primary" />
                <span className="text-foreground/70">support@dhyandeepfoundation.com</span>
              </div>
              <div className="flex items-start space-x-3 text-sm">
                <MapPin className="h-4 w-4 text-primary mt-0.5" />
                <span className="text-foreground/70">
                  447, FF, Sector 4 Urban Estate<br />
                  Karnal, Haryana, India
                </span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-3">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.url}
                  className="p-2 rounded-full bg-primary/10 hover:bg-primary hover:text-primary-foreground transition-all hover-scale"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.quick')}</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.resources')}</h4>
            <ul className="space-y-3">
              {resources.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-foreground/70 hover:text-primary transition-colors duration-200"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-semibold text-lg mb-6">{t('footer.newsletter.title')}</h4>
            <p className="text-foreground/70 text-sm mb-4">
              {t('footer.newsletter.desc')}
            </p>
            <div className="space-y-3">
              <input
                type="email"
                placeholder={t('footer.newsletter.placeholder')}
                className="w-full px-4 py-3 rounded-lg bg-background/50 border border-border/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
              />
              <Button className="w-full gradient-primary text-primary-foreground">
                {t('footer.newsletter.subscribe')}
              </Button>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-border/50 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            {/* Copyright */}
            <div className="flex items-center space-x-2 text-foreground/60 text-sm">
              <span>{t('footer.copyright')}</span>
            </div>

            {/* Legal Links */}
            <div className="flex flex-wrap justify-center lg:justify-end space-x-6 text-sm">
              {legal.map((link, index) => (
                <a
                  key={index}
                  href={link.href}
                  className="text-foreground/60 hover:text-primary transition-colors duration-200"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;