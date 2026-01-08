const Skills = () => {
  // const { t } = useLanguage();

  const skillCategories = [
    {
      title: "Languages & Core",
      skills: [
        { name: "JavaScript (ES6+)", level: 85 },
        { name: "TypeScript", level: 80 },
        { name: "HTML5/CSS3", level: 90 },
      ],
    },
    {
      title: "Frameworks & State",
      skills: [
        { name: "React.js", level: 85 },
        { name: "Angular (v14+)", level: 75 },
        { name: "Redux", level: 75 },
        { name: "React Query", level: 70 },
        { name: "RxJS", level: 65 },
      ],
    },
    {
      title: "UI & Tools",
      skills: [
        { name: "Tailwind CSS", level: 85 },
        { name: "Ant Design", level: 80 },
        { name: "Material UI", level: 80 },
        { name: "Git & GitHub", level: 80 },
        { name: "Keycloak", level: 65 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Technical Skills
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and tools I use.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-700 rounded-xl p-6 hover:shadow-lg transition-all duration-300"
            >
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-6">
                {category.title}
              </h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="text-gray-700 dark:text-gray-300 font-medium">
                        {skill.name}
                      </span>
                      <span className="text-blue-600 dark:text-blue-400 text-sm font-semibold">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-200 dark:bg-gray-600 rounded-full h-2">
                      <div
                        className="bg-gradient-to-r from-blue-600 to-purple-600 h-2 rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
