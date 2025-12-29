import Calendar from "lucide-react/dist/esm/icons/calendar";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Award from "lucide-react/dist/esm/icons/award";
import { useLanguage } from "../../contexts/LanguageContext";

const Experience = () => {
  const { t, language } = useLanguage();

  const experiences = [
    {
      title: t("experience.job1.title"),
      company: t("experience.job1.company"),
      location: t("experience.job1.location"),
      period: t("experience.job1.period"),
      description:
        language === "ar"
          ? [
              "تطوير وصيانة تطبيقات React باستخدام TypeScript والـ hooks الحديثة",
              "التعاون مع فرق متعددة التخصصات لتقديم واجهات مستخدم عالية الجودة",
              "تنفيذ تصاميم متجاوبة وتحسين أداء التطبيقات",
              "توجيه المطورين المبتدئين وإجراء مراجعات للكود",
            ]
          : [
              "Developed and maintained React applications using TypeScript and modern hooks",
              "Collaborated with cross-functional teams to deliver high-quality user interfaces",
              "Implemented responsive designs and optimized application performance",
              "Mentored junior developers and conducted code reviews",
            ],
    },
    {
      title: t("experience.job2.title"),
      company: t("experience.job2.company"),
      location: t("experience.job2.location"),
      period: t("experience.job2.period"),
      description:
        language === "ar"
          ? [
              "بناء تطبيقات ويب تفاعلية باستخدام React و JavaScript",
              "العمل بشكل وثيق مع المصممين لتنفيذ مكونات UI مطابقة للتصميم",
              "دمج RESTful APIs وإدارة حالة التطبيق باستخدام Redux",
              "المشاركة في عمليات التطوير المرنة وتخطيط السبرينت",
            ]
          : [
              "Built interactive web applications using React and JavaScript",
              "Worked closely with designers to implement pixel-perfect UI components",
              "Integrated RESTful APIs and managed application state with Redux",
              "Participated in agile development processes and sprint planning",
            ],
    },
    {
      title: t("experience.job3.title"),
      company: t("experience.job3.company"),
      location: t("experience.job3.location"),
      period: t("experience.job3.period"),
      description:
        language === "ar"
          ? [
              "تطوير مواقع ويب متجاوبة باستخدام HTML و CSS و JavaScript",
              "تعلم أساسيات React والمساهمة في مشاريع الفريق",
              "المساعدة في تصحيح الأخطاء واختبار تطبيقات الويب",
              "اكتساب خبرة في أنظمة التحكم في الإصدارات وعمليات النشر",
            ]
          : [
              "Developed responsive websites using HTML, CSS, and JavaScript",
              "Learned React fundamentals and contributed to team projects",
              "Assisted in debugging and testing web applications",
              "Gained experience with version control systems and deployment processes",
            ],
    },
  ];

  const achievements = [
    {
      title:
        language === "ar"
          ? "جائزة الأداء المتميز"
          : "Outstanding Performance Award",
      organization:
        language === "ar" ? "شركة تقنية متقدمة" : "Tech Solutions Inc.",
      year: "2023",
      description:
        language === "ar"
          ? "تقدير للمساهمة الاستثنائية في تسليم المشاريع والتعاون الجماعي"
          : "Recognized for exceptional contribution to project delivery and team collaboration",
    },
    {
      title: language === "ar" ? "شهادة React المتقدمة" : "React Certification",
      organization: "Meta",
      year: "2022",
      description:
        language === "ar"
          ? "إكمال برنامج شهادة تطوير React المتقدم"
          : "Completed advanced React development certification program",
    },
  ];

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("experience.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {t("experience.professional")}
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="relative pl-8 pb-8">
                  <div className="absolute left-0 top-0 w-4 h-4 bg-blue-600 rounded-full"></div>
                  {index < experiences.length - 1 && (
                    <div className="absolute left-2 top-4 w-0.5 h-full bg-blue-200 dark:bg-blue-800"></div>
                  )}

                  <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                      <h4 className="text-xl font-semibold text-gray-900 dark:text-white">
                        {exp.title}
                      </h4>
                      <div className="flex items-center text-blue-600 dark:text-blue-400 text-sm">
                        <Calendar
                          size={16}
                          className={language === "ar" ? "ml-1" : "mr-1"}
                        />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin
                        size={16}
                        className={language === "ar" ? "ml-2" : "mr-2"}
                      />
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => (
                        <li
                          key={idx}
                          className="text-gray-600 dark:text-gray-400 flex items-start"
                        >
                          <span
                            className={`w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 ${
                              language === "ar" ? "ml-3" : "mr-3"
                            }`}
                          ></span>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              {t("experience.achievements")}
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <Award
                      className={`w-6 h-6 text-yellow-600 mt-1 flex-shrink-0 ${
                        language === "ar" ? "ml-3" : "mr-3"
                      }`}
                    />
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-1">
                        {achievement.title}
                      </h4>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">
                        {achievement.organization} • {achievement.year}
                      </p>
                    </div>
                  </div>
                  <p className="text-gray-600 dark:text-gray-400 text-sm">
                    {achievement.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
