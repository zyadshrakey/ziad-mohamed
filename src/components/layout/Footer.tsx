import Heart from "lucide-react/dist/esm/icons/heart";

const Footer = () => {
  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Ziad Mohamed
            </h3>
            <p className="text-gray-400 text-sm">
              Frontend Engineer | React & Angular
            </p>
          </div>

          <div className="flex items-center text-gray-400 text-sm">
            <span>Made with</span>
            <Heart size={16} className="mx-2 text-red-500 fill-current" />
            <span>using React & Tailwind CSS</span>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Ziad Rizk. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
