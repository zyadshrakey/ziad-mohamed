export interface ExperienceItem {
  title: string;
  company: string;
  location: string;
  period: string;
  description: string[];
}

export interface AchievementItem {
  title: string;
  organization: string;
  year: string;
  description: string;
}

export const experiences: ExperienceItem[] = [
  {
    title: "Frontend Developer",
    company: "MegaDev",
    location: "Tanta, Egypt",
    period: "10/2023 – Present",
    description: [
      "Collaborated with backend developers and designers to build responsive, accessible interfaces using Tailwind CSS, Ant Design, and NG-ZORRO.",
      "**IDIF (ERP System):** Established the initial frontend structure and integrated Keycloak for secure authentication. Built extensive UI modules for Sales, Warehouses, Production, and Purchasing. Implemented dynamic routing and view permissions (RBAC) across the application.",
      "**Wink (Clinic Management System):** Engineered a multi-clinic platform with role-based access (Doctors/Nurses) and reporting features, improving data efficiency. (Angular, TypeScript, Tailwind CSS, NG-ZORRO).",
      "**Dar El Sokar (Medical Tracking):** Built a specialized patient tracking system featuring complex medical history logs and secure Keycloak authentication. (Angular, TypeScript, Tailwind CSS, Keycloak).",
      "**Accounting Module (Financial System):** Spearheaded the integration of Keycloak to secure the application, managing user authentication, session handling, and role-based access control (RBAC). (React.js, TypeScript, Keycloak).",
      "**Tender (Construction Tracker):** Engineered a cost-management application with detailed breakdowns, sub-item calculations, and Excel export capabilities. (React.js, Ant Design).",
      "**HR Management System:** Created an internal tool for managing attendance, overtime, leave approvals, and CV uploads, significantly reducing manual administrative errors. (React.js, Ant Design).",
    ],
  },
];

export const achievements: AchievementItem[] = [
  {
    title: "Front-End Mentor",
    organization: "GDSC Tanta",
    year: "12/2023 – 03/2024",
    description:
      "Guided mentees in overcoming challenges by sharing personal experiences and offering practical advice.",
  },
  {
    title: "Front-End Development Training",
    organization: "ITI",
    year: "07/2023 - 09/2023",
    description: "Intensive training in Front-End Development technologies.",
  },
  {
    title: "Front-End Development",
    organization: "Route Academy",
    year: "09/2023 – 02/2024",
    description: "Professional diploma in Front-End Development.",
  },
];
