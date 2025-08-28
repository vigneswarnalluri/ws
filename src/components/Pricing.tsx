import { Check, Star, Zap, Crown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Pricing = () => {
  const { t } = useLanguage();
  
  const plans = [
    {
      name: t('pricing.trial.name'),
      price: '0',
      period: '7 days',
      icon: Star,
      popular: false,
      description: t('pricing.trial.desc'),
      features: [
        '3 live classes',
        'Basic video library access',
        'Community forum',
        'Beginner guides',
        'Mobile app access'
      ],
      buttonText: t('nav.trial'),
      buttonVariant: 'outline' as const,
      gradient: 'from-gray-400 to-gray-500'
    },
    {
      name: t('pricing.monthly.name'),
      price: '290',
      period: 'month',
      icon: Zap,
      popular: true,
      description: t('pricing.monthly.desc'),
      features: [
        'Unlimited live classes',
        'Full video library',
        'Personal progress tracking',
        'Priority booking',
        'Community events',
        'Monthly wellness workshop'
      ],
      buttonText: 'Choose Monthly',
      buttonVariant: 'default' as const,
      gradient: 'from-primary to-primary-light'
    },
    {
      name: t('pricing.yearly.name'),
      price: '2990',
      period: 'year',
      icon: Crown,
      popular: false,
      description: t('pricing.yearly.desc'),
      features: [
        'Everything in Monthly',
        '2 months free',
        'Personal coaching session',
        'Exclusive retreats access',
        'Custom meal plans',
        'Priority customer support',
        'Guest pass privileges'
      ],
      buttonText: 'Choose Yearly',
      buttonVariant: 'default' as const,
      gradient: 'from-accent to-orange-500',
      savings: t('pricing.savings')
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-gradient-to-b from-background to-muted/30">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            {t('pricing.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('pricing.description')}
          </p>
        </div>

        {/* Pricing Cards */}
        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative glass-card rounded-3xl p-8 hover-lift transition-all duration-300 animate-fade-up ${
                plan.popular ? 'border-2 border-primary animate-pulse-glow' : ''
              }`}
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="gradient-primary text-primary-foreground px-4 py-1">
                    {t('pricing.popular')}
                  </Badge>
                </div>
              )}

              {/* Savings Badge */}
              {plan.savings && (
                <div className="absolute -top-4 right-4">
                  <Badge variant="secondary" className="bg-accent text-accent-foreground">
                    {plan.savings}
                  </Badge>
                </div>
              )}

              {/* Header */}
              <div className="text-center mb-8">
                <div className={`inline-flex p-4 rounded-full bg-gradient-to-br ${plan.gradient} mb-4`}>
                  <plan.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
                <p className="text-foreground/60 text-sm">{plan.description}</p>
              </div>

              {/* Price */}
              <div className="text-center mb-8">
                <div className="flex items-baseline justify-center">
                  <span className="text-4xl font-bold">{t('currency')}{plan.price}</span>
                  <span className="text-foreground/60 ml-2">/{plan.period}</span>
                </div>
              </div>

              {/* Features */}
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start">
                    <Check className="h-5 w-5 text-primary mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/80">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                variant={plan.buttonVariant}
                className={`w-full py-3 ${
                  plan.buttonVariant === 'default' 
                    ? 'gradient-primary text-primary-foreground hover:opacity-90' 
                    : 'hover:border-primary hover:text-primary'
                }`}
              >
                {plan.buttonText}
              </Button>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="text-center space-y-6 animate-fade-up" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card rounded-2xl p-6 max-w-2xl mx-auto">
            <h4 className="font-semibold mb-3">{t('pricing.includes')}</h4>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-foreground/70">
              <div className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                {t('pricing.cancel')}
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                {t('pricing.refund')}
              </div>
              <div className="flex items-center">
                <Check className="h-4 w-4 text-primary mr-2" />
                {t('pricing.support')}
              </div>
            </div>
          </div>
          
          <p className="text-foreground/60">
            {t('pricing.questions')} <Button variant="link" className="p-0 text-primary">{t('pricing.contact')}</Button> for personalized guidance.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;