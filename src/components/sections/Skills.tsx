const Skills = () => {
  const skillCategories = [
    {
      title: "Languages & Core",
      skills: [
        { name: "JavaScript (ES6+)" },
        { name: "TypeScript" },
        { name: "HTML5/CSS3" },
      ],
    },
    {
      title: "Frameworks & State",
      skills: [
        { name: "React.js" },
        { name: "Angular (v14+)" },
        { name: "Redux" },
        { name: "React Query" },
        { name: "RxJS" },
      ],
    },
    {
      title: "UI & Tools",
      skills: [
        { name: "Tailwind CSS" },
        { name: "Ant Design" },
        { name: "Material UI" },
        { name: "Git & GitHub" },
        { name: "Keycloak" },
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
              className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-gray-700"
            >
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6 flex items-center gap-2">
                <span className="w-2 h-8 bg-blue-600 rounded-full"></span>
                {category.title}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-700 dark:text-gray-300 rounded-lg text-sm font-medium hover:bg-blue-50 dark:hover:bg-gray-600 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200 cursor-default border border-gray-100 dark:border-gray-600"
                  >
                    {skill.name}
                  </span>
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
