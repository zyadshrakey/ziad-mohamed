export interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  liveUrl: string;
  githubUrl?: string; // Optional as some might not have it listed in resume text directly but usually do
  isKeyProject: boolean;
  category: "Angular" | "React" | "Native";
}

export const projects: Project[] = [
  {
    title: "Taw3ny – Graduation Project (FCI)",
    description:
      "Taw3ny links people with meaningful volunteer opportunities across various causes like education, healthcare, and conservation. Search by interest, track your impact, and connect with others making a difference.",
    image: "/imgs/taw3ny.png", // Placeholder, will need to check if image exists or use generic
    technologies: ["React.js", "JavaScript", "Ant Design"],
    liveUrl: "https://taw3ny.vercel.app/",
    githubUrl: "https://github.com/zyadshrakey/taw3ny",
    isKeyProject: true,
    category: "React",
  },
  {
    title: "Fresh Cart – Graduation Project (Route)",
    description:
      "Constructed a full-featured online store interface, incorporating product categories, shopping cart functionality, robust authentication, and favorites features.",
    image: "/imgs/freshcart.png", // Placeholder
    technologies: ["React.js", "JavaScript", "Ant Design", "React Query"],
    liveUrl: "https://fresh-cart-one-pearl.vercel.app/",
    githubUrl: "https://github.com/zyadshrakey/fresh_cart",
    isKeyProject: true,
    category: "React",
  },
  {
    title: "Foodmine",
    description:
      "A responsive e-commerce SPA simulating a food delivery ecosystem. Features include advanced filtering, real-time cart management via RxJS, JWT-ready authentication flows, and dynamic user profile customization.",
    image: "/imgs/foodmine.png", // Placeholder
    technologies: [
      "Angular 16",
      "TypeScript",
      "RxJS",
      "HTML5/CSS3",
      "LocalStorage",
    ],
    liveUrl: "https://foodmine-two.vercel.app/",
    githubUrl: "https://github.com/zyadshrakey/foodmine",
    isKeyProject: true,
    category: "Angular",
  },
  {
    title: "Yummy (Recipe Discovery App)",
    description:
      "Created a responsive recipe platform integrating a public API to fetch meal details using jQuery/AJAX, executed advanced search functionality and interactive UI components.",
    image: "/imgs/yummy.png", // Placeholder
    technologies: ["HTML5", "CSS3", "Bootstrap", "JavaScript", "jQuery"],
    liveUrl: "https://zyadshrakey.github.io/Yummy/",
    githubUrl: "https://github.com/zyadshrakey/Yummy",
    isKeyProject: true, // Resume lists it under KEY PROJECTS
    category: "Native", // It's technically JS/jQuery, putting in All or maybe React if we want to group JS? Let's keep 'All' or just 'React' if user considers it frontend. Resume says "Key Projects" are shown. User passed "React" or "Angular". This is vanilla JS. I'll stick to displaying it if category matches.
  },
];
