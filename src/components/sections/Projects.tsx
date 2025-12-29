import ExternalLink from "lucide-react/dist/esm/icons/external-link";
import Github from "lucide-react/dist/esm/icons/github";
import Code from "lucide-react/dist/esm/icons/code";
import { useLanguage } from "../../contexts/LanguageContext";

const Projects = () => {
  const { t, language } = useLanguage();

  const projects = [
    {
      title:
        language === "ar" ? "منصة التجارة الإلكترونية" : "E-Commerce Platform",
      description:
        language === "ar"
          ? "تطبيق تجارة إلكترونية متكامل مبني بـ React و TypeScript و Node.js. يتضمن مصادقة المستخدمين، كتالوج المنتجات، عربة التسوق، ودمج الدفع."
          : "A full-featured e-commerce application built with React, TypeScript, and Node.js. Features include user authentication, product catalog, shopping cart, and payment integration.",
      image:
        "https://images.pexels.com/photos/230544/pexels-photo-230544.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Node.js", "MongoDB", "Stripe"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: language === "ar" ? "تطبيق إدارة المهام" : "Task Management App",
      description:
        language === "ar"
          ? "تطبيق إدارة مهام تعاوني مع تحديثات فورية، وظيفة السحب والإفلات، وميزات التعاون الجماعي."
          : "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image:
        "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Firebase", "Material-UI", "Socket.io"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: language === "ar" ? "لوحة معلومات الطقس" : "Weather Dashboard",
      description:
        language === "ar"
          ? "لوحة معلومات طقس متجاوبة تعرض الأحوال الجوية الحالية والتوقعات لعدة مدن مع تصورات بيانات جميلة."
          : "A responsive weather dashboard that displays current weather conditions and forecasts for multiple cities with beautiful data visualizations.",
      image:
        "https://images.pexels.com/photos/1118873/pexels-photo-1118873.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "Chart.js", "OpenWeather API", "Tailwind CSS"],
      liveUrl: "#",
      githubUrl: "#",
    },
    {
      title: language === "ar" ? "موقع البورتفوليو" : "Portfolio Website",
      description:
        language === "ar"
          ? "موقع بورتفوليو حديث ومتجاوب يعرض أعمالي ومهاراتي. مبني بـ React ويتميز بالرسوم المتحركة السلسة والتصميم العصري."
          : "A modern, responsive portfolio website showcasing my work and skills. Built with React and featuring smooth animations and modern design.",
      image:
        "https://images.pexels.com/photos/196644/pexels-photo-196644.jpeg?auto=compress&cs=tinysrgb&w=800",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Framer Motion"],
      liveUrl: "#",
      githubUrl: "#",
    },
  ];

  return (
    <section
      id="projects"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            {t("projects.title")}
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t("projects.description")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end">
                  <div className="p-4 flex gap-3">
                    <a
                      href={project.liveUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <ExternalLink size={20} className="text-white" />
                    </a>
                    <a
                      href={project.githubUrl}
                      className="p-2 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                    >
                      <Github size={20} className="text-white" />
                    </a>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                  {project.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300 text-sm rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4">
                  <a
                    href={project.liveUrl}
                    className="flex items-center gap-2 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 font-medium transition-colors"
                  >
                    <ExternalLink size={16} />
                    {t("projects.liveDemo")}
                  </a>
                  <a
                    href={project.githubUrl}
                    className="flex items-center gap-2 text-gray-600 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 font-medium transition-colors"
                  >
                    <Code size={16} />
                    {t("projects.sourceCode")}
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
