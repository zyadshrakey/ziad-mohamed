import Github from "lucide-react/dist/esm/icons/github";
import Linkedin from "lucide-react/dist/esm/icons/linkedin";
import Mail from "lucide-react/dist/esm/icons/mail";
import Download from "lucide-react/dist/esm/icons/download";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center pt-20 bg-gradient-to-br from-slate-50 to-blue-50 dark:from-gray-900 dark:to-gray-800"
    >
      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <div className="lg:w-1/2 text-center lg:text-left mb-12 lg:mb-0">
            <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6">
              Hello, I'm{" "}
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                Ziad Mohamed Rizk
              </span>
            </h1>
            <h2 className="text-2xl lg:text-3xl text-gray-600 dark:text-gray-300 mb-6">
              Frontend Engineer | React & Angular
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 mb-8 max-w-2xl">
              Frontend Developer with 2+ years of experience building scalable
              and responsive web applications using React.js, Angular and
              TypeScript. Strong experience in integrating RESTful APIs,
              implementing clean UI architectures, and collaborating with
              cross-functional teams to deliver high-quality products.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <a
                href="#contact"
                className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-lg font-semibold hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                Contact Me
              </a>
              <a
                href="/cv/Ziad-Mohamed-Rizk-Resume.pdf"
                download
                className="border-2 border-blue-600 text-blue-600 dark:text-blue-400 dark:border-blue-400 px-8 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white dark:hover:bg-blue-400 dark:hover:text-gray-900 transition-all duration-200 flex items-center gap-2 justify-center"
              >
                <Download size={20} />
                Download CV
              </a>
            </div>

            <div className="flex gap-6 justify-center lg:justify-start">
              <a
                href="https://github.com/zyadshrakey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <Github
                  size={24}
                  className="text-gray-700 dark:text-gray-300"
                />
              </a>
              <a
                href="https://linkedin.com/in/ziad-shrakey"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <Linkedin size={24} className="text-blue-600" />
              </a>
              <a
                href="mailto:zshrakey@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg hover:shadow-xl transform hover:-translate-y-1 transition-all duration-200"
              >
                <Mail size={24} className="text-green-600" />
              </a>
            </div>
          </div>

          <div className="lg:w-1/2 flex justify-center max-md:pb-6">
            <div className="relative">
              <div className="w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-8 border-white dark:border-gray-700">
                <img
                  src="/imgs/Hero.png"
                  alt="Ziad Mohamed Rizk"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 animate-pulse"></div>
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full opacity-20 animate-pulse delay-1000"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
