import { ArrowRight, Play, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Hero = () => {
  const { t } = useLanguage();
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/bgimage.jpg"
          alt="Peaceful yoga practice background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-overlay"></div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 left-10 w-32 h-32 rounded-full bg-accent/20 blur-xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-40 h-40 rounded-full bg-secondary/20 blur-xl animate-float" style={{ animationDelay: '2s' }}></div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">



      </div>


    </section>
  );
};

export default Hero;