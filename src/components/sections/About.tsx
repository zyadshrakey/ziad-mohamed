import Code from "lucide-react/dist/esm/icons/code";
import Lightbulb from "lucide-react/dist/esm/icons/lightbulb";
import Users from "lucide-react/dist/esm/icons/users";
import Target from "lucide-react/dist/esm/icons/target";
import { useLanguage } from "../../contexts/LanguageContext";

const About = () => {
  const { t } = useLanguage();

  const highlights = [
    {
      icon: <Code className="w-8 h-8 text-blue-600" />,
      title: t("about.highlight1.title"),
      description: t("about.highlight1.desc"),
    },
    {
      icon: <Lightbulb className="w-8 h-8 text-yellow-600" />,
      title: t("about.highlight2.title"),
      description: t("about.highlight2.desc"),
    },
    {
      icon: <Users className="w-8 h-8 text-green-600" />,
      title: t("about.highlight3.title"),
      description: t("about.highlight3.desc"),
    },
    {
      icon: <Target className="w-8 h-8 text-purple-600" />,
      title: t("about.highlight4.title"),
      description: t("about.highlight4.desc"),
    },
  ];

  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("about.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              {t("about.subtitle")}
            </h3>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {t("about.description1")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 mb-6 leading-relaxed">
              {t("about.description2")}
            </p>
            <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {t("about.description3")}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {highlights.map((item, index) => (
              <div
                key={index}
                className="p-6 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2"
              >
                <div className="mb-4">{item.icon}</div>
                <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">
                  {item.title}
                </h4>
                <p className="text-gray-600 dark:text-gray-400 text-sm">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
