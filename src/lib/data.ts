export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  year: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  image: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export const WORKS: Project[] = [
  {
    id: "agencify",
    title: "AGENCIFY",
    category: "Web Design",
    image: "https://framerusercontent.com/images/Xyz9ZajOvx2Jkil7svnjyBV8g4.png",
    year: "2024",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
  },
  {
    id: "antony",
    title: "ANTONY",
    category: "Web Design",
    image: "https://framerusercontent.com/images/yeQftXfJhwhw4Bbfm8TWmIzhIo4.png",
    year: "2024",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
  },
  {
    id: "sotto",
    title: "SOTTO",
    category: "Web Design",
    image: "https://framerusercontent.com/images/AyD50FVUK0Kcr3QN933KyT1w0.png",
    year: "2024",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
  },
  {
    id: "bruno",
    title: "BRUNO",
    category: "Web Design",
    image: "https://framerusercontent.com/images/YNzxxqcZ44y9ODf86g58VeaWs.png",
    year: "2024",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
  },
  {
    id: "candreva",
    title: "CANDREVA",
    category: "Web Design",
    image: "https://framerusercontent.com/images/jqYqkEmOSG3FD1HqaBV5yD3N9Y.png",
    year: "2024",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
  },
  {
    id: "zcf",
    title: "ZCF",
    category: "App Design",
    image: "https://framerusercontent.com/images/lKa8azFClQci6NPBjSvbm1Uq4.png",
    year: "2024",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
  },
  {
    id: "tesla",
    title: "TESLA",
    category: "App Design",
    image: "https://framerusercontent.com/images/8Ee0mlo50DWbx6whg75UjJLuwQ.png",
    year: "2024",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
  },
];

export const SERVICES: Service[] = [
  {
    id: "branding",
    title: "BRANDING",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
    image: "https://framerusercontent.com/images/GDIChbZo9PBXRFPkHaw1wyeFpd8.png",
  },
  {
    id: "ui-ux",
    title: "UI/UX",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
    image: "https://framerusercontent.com/images/9TbhJb8rvtOFT4om4V0Ar1PpUQ.png",
  },
  {
    id: "animation",
    title: "ANIMATION",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
    image: "https://framerusercontent.com/images/lfGOvVBpVonaVYkXWJSGqrBEA.png",
  },
  {
    id: "framer",
    title: "FRAMER",
    description: "A sleek and modern Framer template designed for creative professionals, freelancers, and agencies who want to showcase their work with style and impact.",
    image: "https://framerusercontent.com/images/L1yfrGxPOMKvL0gIaJz3cTEf68.png",
  },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "WHAT DO I NEED TO GET STARTED?",
    answer: "To get started, simply share your project details and goals with us. We'll guide you through the process and provide the tools and support needed to bring your vision to life."
  },
  {
    question: "WHAT KIND OF CUSTOMIZATION IS AVAILABLE?",
    answer: "Our templates are fully customizable. You can adjust colors, fonts, layouts, and animations to match your brand's identity perfectly."
  },
  {
    question: "HOW EASY IS IT TO EDIT FOR BEGINNERS?",
    answer: "Very easy! Our templates are built with user-friendliness in mind. No coding knowledge is required, and we provide documentation to help you along the way."
  },
  {
    question: "LET ME KNOW MORE ABOUT MONEYBACK GUARANTEE?",
    answer: "We offer a 30-day money-back guarantee if you are not satisfied with our services. Please refer to our terms and conditions for more details."
  },
  {
    question: "DO I NEED TO KNOW HOW TO CODE?",
    answer: "No, you don't need to know how to code. Our platform is designed for visual editing, allowing you to create stunning websites without writing a single line of code."
  },
  {
    question: "WHAT WILL I GET AFTER PURCHASING THE TEMPLATE?",
    answer: "You will receive the complete template files, documentation, and access to our support team for any questions or assistance you may need."
  }
];
