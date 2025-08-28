import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'hi';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

const translations = {
  en: {
    // Navbar
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.classes': 'Classes',
    'nav.pricing': 'Pricing',
    'nav.contact': 'Contact',
    'nav.login': 'Login',
    'nav.trial': 'Start Free Trial',

    // Hero
    'hero.title': 'Transform Your Life Through',
    'hero.subtitle': 'Mindful Yoga Practice',
    'hero.description': 'Discover inner peace and physical vitality with our expert-guided yoga classes. Join thousands who have transformed their lives through ancient wisdom and modern wellness.',
    'hero.cta.join': 'Join Now',
    'hero.cta.trial': 'Start Free Trial',

    // About
    'about.title': 'Our Philosophy',
    'about.description': 'At Yoga Centre, we believe yoga is more than physical exercise—it\'s a transformative journey toward self-discovery, balance, and inner peace.',
    'about.mission.title': 'Transforming Lives Through Ancient Wisdom',
    'about.mission.p1': 'For over a decade, we\'ve been dedicated to sharing the profound benefits of yoga with our community. Our approach combines traditional techniques with modern understanding, creating a practice that honors the past while embracing the present.',
    'about.mission.p2': 'Whether you\'re beginning your yoga journey or deepening an existing practice, our experienced instructors provide personalized guidance to help you achieve your wellness goals.',
    'about.mission.cta': 'Learn More About Us',
    'about.values.mindful.title': 'Mindful Practice',
    'about.values.mindful.desc': 'Every pose, every breath is an opportunity to connect with your inner self and find peace.',
    'about.values.community.title': 'Community Focus',
    'about.values.community.desc': 'Build lasting connections with fellow practitioners on a shared journey of growth and wellness.',
    'about.values.expert.title': 'Expert Guidance',
    'about.values.expert.desc': 'Learn from certified instructors with decades of experience in traditional and modern yoga.',
    'about.values.personal.title': 'Personal Journey',
    'about.values.personal.desc': 'Discover your unique path to wellness with personalized guidance and support.',

    // Classes
    'classes.title': 'Our Classes',
    'classes.description': 'Discover the perfect practice for your journey. From gentle beginnings to dynamic flows, we offer something for every body and every level.',
    'classes.hatha.name': 'Hatha Yoga',
    'classes.hatha.desc': 'Gentle, slow-paced practice focusing on basic postures and breathing techniques.',
    'classes.vinyasa.name': 'Vinyasa Flow',
    'classes.vinyasa.desc': 'Dynamic flowing sequences that connect breath with movement.',
    'classes.power.name': 'Power Yoga',
    'classes.power.desc': 'Intense, athletic practice that builds strength and endurance.',
    'classes.yin.name': 'Yin Yoga',
    'classes.yin.desc': 'Passive practice with long-held poses to improve flexibility and calm the mind.',
    'classes.schedule.title': 'Weekly Schedule',
    'classes.book': 'Book Class',
    'classes.view.schedule': 'View Full Schedule',

    // Pricing
    'pricing.title': 'Simple Pricing',
    'pricing.description': 'Choose the perfect plan for your wellness journey. All plans include access to our supportive community and expert guidance.',
    'pricing.trial.name': 'Free Trial',
    'pricing.trial.desc': 'Perfect for exploring our yoga community',
    'pricing.monthly.name': 'Monthly',
    'pricing.monthly.desc': 'Great for regular practitioners',
    'pricing.yearly.name': 'Yearly',
    'pricing.yearly.desc': 'Best value for committed yogis',
    'pricing.popular': 'Most Popular',
    'pricing.savings': 'Save ₹490',
    'pricing.includes': 'All Plans Include:',
    'pricing.cancel': 'Cancel anytime',
    'pricing.refund': '30-day money back',
    'pricing.support': 'Expert support',
    'pricing.questions': 'Have questions?',
    'pricing.contact': 'Contact our team',

    // Testimonials
    'testimonials.title': 'What Our Community Says',
    'testimonials.description': 'Real stories from real people who have transformed their lives through yoga practice with Yoga Centre.',

    // Contact
    'contact.title': 'Get in Touch',
    'contact.description': 'Ready to begin your wellness journey? We\'d love to hear from you. Reach out with any questions or to schedule your first class.',
    'contact.form.name': 'Full Name',
    'contact.form.email': 'Email Address',
    'contact.form.phone': 'Phone Number',
    'contact.form.message': 'Your Message',
    'contact.form.send': 'Send Message',
    'contact.phone': 'Call Us',
    'contact.email': 'Email Us',
    'contact.visit': 'Visit Us',

    // Footer
    'footer.description': 'Transform your life through mindful yoga practice. Join our community of wellness seekers on the journey to inner peace and physical vitality.',
    'footer.quick': 'Quick Links',
    'footer.resources': 'Resources',
    'footer.newsletter.title': 'Stay Updated',
    'footer.newsletter.desc': 'Get weekly wellness tips, new class announcements, and exclusive content.',
    'footer.newsletter.placeholder': 'Enter your email',
    'footer.newsletter.subscribe': 'Subscribe',
    'footer.copyright': '© 2024 Yoga Centre. All rights reserved.',

    // Currency
    'currency': '₹'
  },
  hi: {
    // Navbar
    'nav.home': 'होम',
    'nav.about': 'हमारे बारे में',
    'nav.classes': 'योग कक्षाएं',
    'nav.pricing': 'मूल्य निर्धारण',
    'nav.contact': 'संपर्क',
    'nav.login': 'लॉगिन',
    'nav.trial': 'निःशुल्क ट्रायल शुरू करें',

    // Hero
    'hero.title': 'अपने जीवन को बदलें',
    'hero.subtitle': 'सचेत योग अभ्यास के माध्यम से',
    'hero.description': 'हमारे विशेषज्ञ-निर्देशित योग कक्षाओं के साथ आंतरिक शांति और शारीरिक जीवंतता की खोज करें। हजारों लोगों के साथ जुड़ें जिन्होंने प्राचीन ज्ञान और आधुनिक कल्याण के माध्यम से अपने जीवन को बदला है।',
    'hero.cta.join': 'अभी शामिल हों',
    'hero.cta.trial': 'निःशुल्क ट्रायल शुरू करें',

    // About
    'about.title': 'हमारा दर्शन',
    'about.description': 'योग केंद्र में, हम मानते हैं कि योग केवल शारीरिक व्यायाम से कहीं अधिक है—यह आत्म-खोज, संतुलन और आंतरिक शांति की दिशा में एक परिवर्तनकारी यात्रा है।',
    'about.mission.title': 'प्राचीन ज्ञान के माध्यम से जीवन को बदलना',
    'about.mission.p1': 'एक दशक से अधिक समय से, हम अपने समुदाय के साथ योग के गहन लाभों को साझा करने के लिए समर्पित हैं। हमारा दृष्टिकोण पारंपरिक तकनीकों को आधुनिक समझ के साथ जोड़ता है।',
    'about.mission.p2': 'चाहे आप अपनी योग यात्रा शुरू कर रहे हों या मौजूदा अभ्यास को गहरा कर रहे हों, हमारे अनुभवी प्रशिक्षक आपके कल्याण लक्ष्यों को प्राप्त करने में व्यक्तिगत मार्गदर्शन प्रदान करते हैं।',
    'about.mission.cta': 'हमारे बारे में और जानें',
    'about.values.mindful.title': 'सचेत अभ्यास',
    'about.values.mindful.desc': 'हर आसन, हर सांस अपने आंतरिक स्व से जुड़ने और शांति पाने का अवसर है।',
    'about.values.community.title': 'समुदायिक फोकस',
    'about.values.community.desc': 'विकास और कल्याण की साझा यात्रा पर साथी अभ्यासकर्ताओं के साथ स्थायी संबंध बनाएं।',
    'about.values.expert.title': 'विशेषज्ञ मार्गदर्शन',
    'about.values.expert.desc': 'पारंपरिक और आधुनिक योग में दशकों के अनुभव वाले प्रमाणित प्रशिक्षकों से सीखें।',
    'about.values.personal.title': 'व्यक्तिगत यात्रा',
    'about.values.personal.desc': 'व्यक्तिगत मार्गदर्शन और सहायता के साथ कल्याण के लिए अपना अनूठा रास्ता खोजें।',

    // Classes
    'classes.title': 'हमारी कक्षाएं',
    'classes.description': 'अपनी यात्रा के लिए सही अभ्यास खोजें। कोमल शुरुआत से लेकर गतिशील प्रवाह तक, हम हर शरीर और हर स्तर के लिए कुछ न कुछ प्रदान करते हैं।',
    'classes.hatha.name': 'हठ योग',
    'classes.hatha.desc': 'बुनियादी आसनों और श्वास तकनीकों पर ध्यान देने वाला कोमल, धीमी गति का अभ्यास।',
    'classes.vinyasa.name': 'विन्यास फ्लो',
    'classes.vinyasa.desc': 'गतिशील प्रवाहित अनुक्रम जो श्वास को गति के साथ जोड़ते हैं।',
    'classes.power.name': 'पावर योग',
    'classes.power.desc': 'तीव्र, एथलेटिक अभ्यास जो शक्ति और धीरज का निर्माण करता है।',
    'classes.yin.name': 'यिन योग',
    'classes.yin.desc': 'लचीलेपन में सुधार और मन को शांत करने के लिए लंबे समय तक आसन धारण करने वाला निष्क्रिय अभ्यास।',
    'classes.schedule.title': 'साप्ताहिक अनुसूची',
    'classes.book': 'कक्षा बुक करें',
    'classes.view.schedule': 'पूरा शेड्यूल देखें',

    // Pricing
    'pricing.title': 'सरल मूल्य निर्धारण',
    'pricing.description': 'अपनी कल्याण यात्रा के लिए सही योजना चुनें। सभी योजनाओं में हमारे सहायक समुदाय और विशेषज्ञ मार्गदर्शन तक पहुंच शामिल है।',
    'pricing.trial.name': 'निःशुल्क ट्रायल',
    'pricing.trial.desc': 'हमारे योग समुदाय की खोज के लिए बिल्कुल सही',
    'pricing.monthly.name': 'मासिक',
    'pricing.monthly.desc': 'नियमित अभ्यासकर्ताओं के लिए बेहतरीन',
    'pricing.yearly.name': 'वार्षिक',
    'pricing.yearly.desc': 'प्रतिबद्ध योगियों के लिए सबसे अच्छा मूल्य',
    'pricing.popular': 'सबसे लोकप्रिय',
    'pricing.savings': '₹490 बचाएं',
    'pricing.includes': 'सभी योजनाओं में शामिल:',
    'pricing.cancel': 'कभी भी रद्द करें',
    'pricing.refund': '30-दिन पैसा वापसी',
    'pricing.support': 'विशेषज्ञ सहायता',
    'pricing.questions': 'कोई प्रश्न हैं?',
    'pricing.contact': 'हमारी टीम से संपर्क करें',

    // Testimonials
    'testimonials.title': 'हमारे समुदाय क्या कहते हैं',
    'testimonials.description': 'योग केंद्र के साथ योग अभ्यास के माध्यम से अपने जीवन को बदलने वाले वास्तविक लोगों की वास्तविक कहानियां।',

    // Contact
    'contact.title': 'संपर्क में रहें',
    'contact.description': 'अपनी कल्याण यात्रा शुरू करने के लिए तैयार हैं? हमें आपसे सुनना अच्छा लगेगा। किसी भी प्रश्न के लिए या अपनी पहली कक्षा निर्धारित करने के लिए संपर्क करें।',
    'contact.form.name': 'पूरा नाम',
    'contact.form.email': 'ईमेल पता',
    'contact.form.phone': 'फोन नंबर',
    'contact.form.message': 'आपका संदेश',
    'contact.form.send': 'संदेश भेजें',
    'contact.phone': 'हमें कॉल करें',
    'contact.email': 'हमें ईमेल करें',
    'contact.visit': 'हमसे मिलें',

    // Footer
    'footer.description': 'सचेत योग अभ्यास के माध्यम से अपने जीवन को बदलें। आंतरिक शांति और शारीरिक जीवंतता की यात्रा पर कल्याण चाहने वालों के हमारे समुदाय में शामिल हों।',
    'footer.quick': 'त्वरित लिंक',
    'footer.resources': 'संसाधन',
    'footer.newsletter.title': 'अपडेट रहें',
    'footer.newsletter.desc': 'साप्ताहिक कल्याण सुझाव, नई कक्षा घोषणाएं और विशेष सामग्री प्राप्त करें।',
    'footer.newsletter.placeholder': 'अपना ईमेल दर्ज करें',
    'footer.newsletter.subscribe': 'सब्सक्राइब करें',
    'footer.copyright': '© 2024 योग केंद्र। सभी अधिकार सुरक्षित।',

    // Currency
    'currency': '₹'
  }
};

export const LanguageProvider = ({ children }: { children: ReactNode }) => {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations['en']] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};