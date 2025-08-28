import { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const { t } = useLanguage();

  const testimonials = [
    {
      name: 'Emily Rodriguez',
      role: 'Marketing Director',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b789?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Yoga Centre transformed my relationship with stress and anxiety. The instructors create such a welcoming space, and I've gained not just flexibility but true inner peace. This journey has been life-changing."
    },
    {
      name: 'Michael Chen',
      role: 'Software Engineer',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "As someone who sits at a desk all day, the physical benefits have been incredible. But what surprised me most was the mental clarity and focus I've developed. Yoga Centre's approach is truly holistic."
    },
    {
      name: 'Sarah Thompson',
      role: 'Teacher & Mother',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "The online classes fit perfectly into my busy schedule as a working mom. The community support is amazing, and my kids have even started joining some of the family-friendly sessions!"
    },
    {
      name: 'David Kumar',
      role: 'Entrepreneur',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "I was skeptical about online yoga, but Yoga Centre's platform is exceptional. The instruction quality rivals the best in-person studios, and the convenience is unmatched. Highly recommend!"
    },
    {
      name: 'Lisa Park',
      role: 'Wellness Coach',
      image: 'https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=150&h=150&fit=crop&crop=face',
      rating: 5,
      text: "Even as a wellness professional, I continue to learn from Yoga Centre's diverse instructors. The variety of styles and the depth of philosophical teachings keep my practice fresh and inspiring."
    }
  ];

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="section-padding bg-gradient-to-b from-muted/30 to-background">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            {t('testimonials.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('testimonials.description')}
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="max-w-4xl mx-auto mb-16">
          <div className="glass-card rounded-3xl p-8 lg:p-12 text-center animate-scale-in">
            {/* Quote Icon */}
            <Quote className="h-12 w-12 text-primary/30 mx-auto mb-6" />
            
            {/* Stars */}
            <div className="flex justify-center mb-6">
              {[...Array(currentTestimonial.rating)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
              ))}
            </div>

            {/* Testimonial Text */}
            <blockquote className="text-xl lg:text-2xl text-foreground/80 leading-relaxed mb-8 italic">
              "{currentTestimonial.text}"
            </blockquote>

            {/* Author */}
            <div className="flex items-center justify-center space-x-4">
              <img
                src={currentTestimonial.image}
                alt={currentTestimonial.name}
                className="w-16 h-16 rounded-full object-cover shadow-lg"
              />
              <div className="text-left">
                <div className="font-semibold text-lg">{currentTestimonial.name}</div>
                <div className="text-foreground/60">{currentTestimonial.role}</div>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4 mt-8">
            <Button
              variant="outline"
              size="sm"
              onClick={prevTestimonial}
              className="p-3 rounded-full hover-lift"
            >
              <ChevronLeft className="h-5 w-5" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary scale-125' 
                      : 'bg-foreground/20 hover:bg-foreground/40'
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="sm"
              onClick={nextTestimonial}
              className="p-3 rounded-full hover-lift"
            >
              <ChevronRight className="h-5 w-5" />
            </Button>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { number: '4.9/5', label: 'Average Rating' },
            { number: '2,500+', label: 'Happy Members' },
            { number: '98%', label: 'Retention Rate' },
            { number: '1M+', label: 'Classes Completed' }
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-3xl font-bold text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-foreground/60">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;