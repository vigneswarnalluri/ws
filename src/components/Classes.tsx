import { Clock, Users, Zap, Heart, Mountain, Waves } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

const Classes = () => {
  const { t } = useLanguage();
  
  const classTypes = [
    {
      icon: Heart,
      name: t('classes.hatha.name'),
      level: 'Beginner',
      duration: '60 min',
      students: '12-15',
      description: t('classes.hatha.desc'),
      benefits: ['Flexibility', 'Stress Relief', 'Mindfulness'],
      color: 'bg-red-100 dark:bg-red-900/20',
      iconColor: 'text-red-600 dark:text-red-400'
    },
    {
      icon: Waves,
      name: t('classes.vinyasa.name'),
      level: 'Intermediate',
      duration: '75 min',
      students: '10-12',
      description: t('classes.vinyasa.desc'),
      benefits: ['Strength', 'Cardiovascular', 'Balance'],
      color: 'bg-blue-100 dark:bg-blue-900/20',
      iconColor: 'text-blue-600 dark:text-blue-400'
    },
    {
      icon: Zap,
      name: t('classes.power.name'),
      level: 'Advanced',
      duration: '90 min',
      students: '8-10',
      description: t('classes.power.desc'),
      benefits: ['Power', 'Endurance', 'Core Strength'],
      color: 'bg-orange-100 dark:bg-orange-900/20',
      iconColor: 'text-orange-600 dark:text-orange-400'
    },
    {
      icon: Mountain,
      name: t('classes.yin.name'),
      level: 'All Levels',
      duration: '75 min',
      students: '15-20',
      description: t('classes.yin.desc'),
      benefits: ['Deep Stretching', 'Meditation', 'Relaxation'],
      color: 'bg-purple-100 dark:bg-purple-900/20',
      iconColor: 'text-purple-600 dark:text-purple-400'
    }
  ];

  const schedule = [
    { day: 'Monday', classes: ['Hatha Yoga - 9:00 AM', 'Vinyasa Flow - 7:00 PM'] },
    { day: 'Tuesday', classes: ['Power Yoga - 6:00 AM', 'Yin Yoga - 8:00 PM'] },
    { day: 'Wednesday', classes: ['Vinyasa Flow - 9:00 AM', 'Hatha Yoga - 6:30 PM'] },
    { day: 'Thursday', classes: ['Power Yoga - 6:00 AM', 'Yin Yoga - 7:30 PM'] },
    { day: 'Friday', classes: ['Hatha Yoga - 9:00 AM', 'Vinyasa Flow - 7:00 PM'] },
    { day: 'Saturday', classes: ['Power Yoga - 8:00 AM', 'Yin Yoga - 10:00 AM'] },
    { day: 'Sunday', classes: ['Gentle Flow - 10:00 AM', 'Meditation - 6:00 PM'] }
  ];

  return (
    <section id="classes" className="section-padding">
      <div className="container-custom">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-up">
            {t('classes.title')}
          </h2>
          <p className="text-xl text-foreground/70 max-w-3xl mx-auto animate-fade-up" style={{ animationDelay: '0.2s' }}>
            {t('classes.description')}
          </p>
        </div>

        {/* Class Types Grid */}
        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-8 mb-20">
          {classTypes.map((classType, index) => (
            <div
              key={index}
              className="group glass-card p-6 rounded-2xl hover-lift animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Header */}
              <div className="flex items-center justify-between mb-4">
                <div className={`p-3 rounded-full ${classType.color}`}>
                  <classType.icon className={`h-6 w-6 ${classType.iconColor}`} />
                </div>
                <Badge variant="secondary" className="text-xs">
                  {classType.level}
                </Badge>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold mb-3 group-hover:text-primary transition-colors">
                {classType.name}
              </h3>
              
              <p className="text-foreground/70 text-sm mb-4 leading-relaxed">
                {classType.description}
              </p>

              {/* Details */}
              <div className="space-y-2 mb-4 text-sm">
                <div className="flex items-center text-foreground/60">
                  <Clock className="h-4 w-4 mr-2" />
                  {classType.duration}
                </div>
                <div className="flex items-center text-foreground/60">
                  <Users className="h-4 w-4 mr-2" />
                  {classType.students} students
                </div>
              </div>

              {/* Benefits */}
              <div className="flex flex-wrap gap-1 mb-4">
                {classType.benefits.map((benefit, idx) => (
                  <Badge key={idx} variant="outline" className="text-xs">
                    {benefit}
                  </Badge>
                ))}
              </div>

              {/* CTA */}
              <Button 
                variant="outline" 
                className="w-full group-hover:border-primary group-hover:text-primary transition-colors"
              >
                {t('classes.book')}
              </Button>
            </div>
          ))}
        </div>

        {/* Weekly Schedule */}
        <div className="glass-card rounded-3xl p-8 lg:p-12 animate-fade-up">
          <h3 className="text-3xl font-bold text-center mb-12">
            {t('classes.schedule.title')}
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-7 gap-6">
            {schedule.map((day, index) => (
              <div
                key={index}
                className="text-center space-y-4 animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h4 className="font-semibold text-primary text-lg">
                  {day.day}
                </h4>
                <div className="space-y-2">
                  {day.classes.map((classInfo, idx) => (
                    <div key={idx} className="text-sm text-foreground/70 p-2 rounded-lg bg-muted/50">
                      {classInfo}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="gradient-primary text-primary-foreground px-8 py-3 hover-lift">
              {t('classes.view.schedule')}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Classes;