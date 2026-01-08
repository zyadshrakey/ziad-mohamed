import React, { createContext, useContext, useState, useEffect } from 'react';

type Language = 'ar' | 'en';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => string;
}

const translations = {
  ar: {
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.skills': 'Skills',
    'nav.projects': 'Projects',
    'nav.contact': 'Contact',
    
    // Hero Section
    'hero.greeting': "Hi, I'm ",
    'hero.name': 'Ziad Mohamed',
    'hero.title': 'React Developer & Frontend Engineer',
    'hero.description': 'Passionate about creating exceptional user experiences with modern web technologies. Specialized in React, TypeScript, and building scalable frontend applications.',
    'hero.contact': 'Get In Touch',
    'hero.download': 'Download CV',
    
    // About Section
    'about.title': 'About Me',
    'about.subtitle': 'Passionate React Developer with a Vision',
    'about.description1': "I'm a dedicated React developer with a strong foundation in modern web technologies. My journey in software development has been driven by a passion for creating intuitive, user-friendly applications that solve real-world problems.",
    'about.description2': 'With experience in both frontend and backend technologies, I bring a comprehensive understanding of the full development lifecycle. I\'m particularly passionate about React ecosystem, TypeScript, and modern development practices.',
    'about.description3': "When I'm not coding, you'll find me exploring new technologies, contributing to open-source projects, or sharing knowledge with the developer community.",
    'about.highlight1.title': 'Advanced Development',
    'about.highlight1.desc': 'Experience in React, TypeScript, and latest web development technologies',
    'about.highlight2.title': 'Creative Solutions',
    'about.highlight2.desc': 'Ability to find innovative solutions to complex technical problems',
    'about.highlight3.title': 'Team Collaboration',
    'about.highlight3.desc': 'Excellent communication skills and ability to work within a team',
    'about.highlight4.title': 'Results-Driven',
    'about.highlight4.desc': 'Commitment to delivering high-quality solutions that meet client needs',
    
    // Skills Section
    'skills.title': 'Skills & Technologies',
    'skills.description': 'Here are the technologies and tools I work with to bring ideas to life',
    'skills.frontend': 'Frontend Technologies',
    'skills.tools': 'Tools & Technologies',
    'skills.additional': 'Additional Skills',
    
    // Experience Section
    'experience.title': 'Experience & Achievements',
    'experience.professional': 'Professional Experience',
    'experience.achievements': 'Achievements',
    'experience.job1.title': 'React Developer',
    'experience.job1.company': 'Tech Solutions Inc.',
    'experience.job1.location': 'Remote',
    'experience.job1.period': '2023 - Present',
    'experience.job2.title': 'Frontend Developer',
    'experience.job2.company': 'Digital Agency',
    'experience.job2.location': 'Cairo, Egypt',
    'experience.job2.period': '2022 - 2023',
    'experience.job3.title': 'Junior Web Developer',
    'experience.job3.company': 'StartUp Hub',
    'experience.job3.location': 'Cairo, Egypt',
    'experience.job3.period': '2021 - 2022',
    
    // Projects Section
    'projects.title': 'Featured Projects',
    'projects.description': 'Here are some of my recent projects that showcase my skills and passion for development',
    'projects.liveDemo': 'Live Demo',
    'projects.sourceCode': 'Source Code',
    
    // Contact Section
    'contact.title': 'Get In Touch',
    'contact.description': "I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology.",
    'contact.connect': "Let's Connect",
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.name': 'Name',
    'contact.subject': 'Subject',
    'contact.message': 'Message',
    'contact.send': 'Send Message',
    'contact.namePlaceholder': 'Your Name',
    'contact.subjectPlaceholder': "What's this about?",
    'contact.messagePlaceholder': 'Tell me about your project or just say hello!',
    
    // Footer
    'footer.madeWith': 'Made with',
    'footer.using': 'using React & TypeScript',
    'footer.rights': 'All rights reserved.',
  }
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('ar');

  useEffect(() => {
    const savedLanguage = localStorage.getItem('language') as Language;
    if (savedLanguage && (savedLanguage === 'ar' || savedLanguage === 'en')) {
      setLanguage(savedLanguage);
      document.documentElement.dir = savedLanguage === 'ar' ? 'rtl' : 'ltr';
      document.documentElement.lang = savedLanguage;
    }
  }, []);

  const toggleLanguage = () => {
    const newLanguage = language === 'ar' ? 'en' : 'ar';
    setLanguage(newLanguage);
    document.documentElement.dir = newLanguage === 'ar' ? 'rtl' : 'ltr';
    document.documentElement.lang = newLanguage;
    localStorage.setItem('language', newLanguage);
  };

  const t = (key: string): string => {
    return translations[language][key as keyof typeof translations[typeof language]] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
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