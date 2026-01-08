import Calendar from "lucide-react/dist/esm/icons/calendar";
import MapPin from "lucide-react/dist/esm/icons/map-pin";
import Award from "lucide-react/dist/esm/icons/award";
import { experiences, achievements } from "../../data/experience";

const Experience = () => {
  // const { t } = useLanguage();

  return (
    <section
      id="experience"
      className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 dark:from-gray-800 dark:to-gray-900"
    >
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Professional Experience
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-600 to-purple-600 mx-auto mb-8"></div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Experience Timeline */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Work Experience
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
                        <Calendar size={16} className="mr-1" />
                        {exp.period}
                      </div>
                    </div>

                    <div className="flex items-center text-gray-600 dark:text-gray-400 mb-4">
                      <MapPin size={16} className="mr-2" />
                      <span className="font-medium">{exp.company}</span>
                      <span className="mx-2">•</span>
                      <span>{exp.location}</span>
                    </div>

                    <ul className="space-y-2">
                      {exp.description.map((item, idx) => {
                        // Simple bold parsing for "Title:" pattern
                        // const parts = item.split(":"); // Unused
                        // const hasTitle = parts.length > 1 && item.includes("**"); // Unused

                        return (
                          <li
                            key={idx}
                            className="text-gray-600 dark:text-gray-400 flex items-start"
                          >
                            <span className="w-2 h-2 bg-blue-400 rounded-full mt-2 flex-shrink-0 mr-3"></span>
                            <span>
                              {item.includes("**") ? (
                                <>
                                  <strong>{item.split("**")[1]}</strong>
                                  {item.split("**")[2]}
                                </>
                              ) : (
                                item
                              )}
                            </span>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Achievements */}
          <div>
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8">
              Leadership & Volunteering
            </h3>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div
                  key={index}
                  className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <div className="flex items-start mb-4">
                    <Award className="w-6 h-6 text-yellow-600 mt-1 flex-shrink-0 mr-3" />
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
