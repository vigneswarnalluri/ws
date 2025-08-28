import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const { t } = useLanguage();

  const contactInfo = [
    {
      icon: Phone,
      title: t('contact.phone'),
      info: '+91-99919-00456',
      action: 'tel:+919991900456'
    },
    {
      icon: Mail,
      title: t('contact.email'),
      info: 'support@dhyandeepfoundation.com',
      action: 'mailto:support@dhyandeepfoundation.com'
    },
    {
      icon: MapPin,
      title: t('contact.visit'),
      info: '447, FF, Sector 4 Urban Estate, Karnal, Haryana, India',
      action: '#'
    }
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            {t('contact.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('contact.description')}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className="space-y-8 animate-slide-in-left">
            {contactInfo.map((info, index) => (
              <a
                key={index}
                href={info.action}
                className="flex items-start space-x-4 p-6 glass-card rounded-2xl hover-lift group transition-all duration-300"
              >
                <div className="p-3 rounded-full gradient-primary group-hover:animate-pulse-glow">
                  <info.icon className="h-6 w-6 text-primary-foreground" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                    {info.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {info.info}
                  </p>
                </div>
              </a>
            ))}
          </div>

          {/* Contact Form */}
          <form onSubmit={handleSubmit} className="space-y-6 animate-slide-in-right">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={t('contact.form.name')}
                  required
                />
              </div>
              
              <div>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={t('contact.form.email')}
                  required
                />
              </div>
              
              <div>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all"
                  placeholder={t('contact.form.phone')}
                />
              </div>
              
              <div className="md:col-span-2">
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border border-border/50 bg-background/50 focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20 transition-all resize-none"
                  placeholder={t('contact.form.message')}
                  required
                ></textarea>
              </div>

              <div className="md:col-span-2">
                <Button
                  type="submit"
                  className="gradient-primary text-primary-foreground px-8 py-3 hover-lift group"
                >
                  <Send className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                  {t('contact.form.send')}
                </Button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;