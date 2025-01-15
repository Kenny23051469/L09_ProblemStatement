const diplomas = [
  {
    name: "Information Technology (R47)",
    id: "infocomm",
    banner: "https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/dit-e.jpg",
    sessions: [
      {
        name: "AI Essentials and Innovations",
        id: "C240",
        desc: "This module teaches students the essential skills and knowledge of artificial intelligence (AI) and its applications in various fields. Students will learn the AI terminology and landscape, the basic concepts and history of AI, and how to evaluate AI outputs. Students will also explore different generative models and how to prompt them. Students will use various tools and technologies related to AI, such as GitHub, Hugging Face, APIs, and LangChain. Students will also understand the ethical and societal implications of AI in business and society. The module is divided into four parts, each with a mini project that assesses the learning outcomes of that part. The mini projects will involve practical applications of AI in text and image synthesis, API interactions, and ethical considerations.",
      },
      {
        name: "Software Application Development",
        id: "C237",
        desc: "This module equips students with the skills and knowledge required to develop software applications for both web and mobile platforms. Students will employ both front-end and back-end software frameworks, programming languages and libraries to design and develop an application that has both role-based authentication and functionality. These functionalities will involve the creation, retrieval, updating, and deletion of data from databases. Students will also learn to test and deploy software applications.",
      },
      {
        name: "IT Security and Management",
        id: "C235",
        desc: "This module addresses the best practices of the development and management of effective security systems with coverage on information, personnel, physical security, and risk analysis for information protection. It provides a broad overview of the principles and elements of information technology security. It covers the basic principles of the CIA model – Confidentiality, Integrity and Availability. Topics covered include IT security threats, security techniques, security services, and system security features. Students will also be introduced to the different information security standards available in the IT industry such as ISO 27001 that implements a security framework for organisations.",
      },
    ],
  },
  {
    name: "Financial Technology (R18)",
    id: "fintech",
    banner: "https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/dft-e.jpg",
    sessions: [
      {
        name: "Financial Ecosystem",
        id: "C368",
        desc: "This module introduces students to the financial industry and its ecosystem. Students will learn about the different types of financial institutions, their roles and functions in the financial industry, how they interact with each other and their significance to the economy. The module will also cover financial products and services and their processes. Students will be exposed to the concepts of financial technologies (FinTech) and how it is changing the ecosystem as well.",
      },
      {
        name: "Payment Technologies",
        id: "C372",
        desc: "This module introduces students to different payment technologies and systems. Students will learn to apply or integrate these payment technologies and systems via a web application. For the latter, students will develop a web application, integrated with front-end and/or back-end payment modules. The development of this web application will involve students using various payment application programming interfaces (APIs) to facilitate or implement the payment process.",
      },
      {
        name: "Financial Technologies",
        id: "C369",
        desc: "This module provides an overview of the financial technologies that are being used in the financial services industry today. Students will explore the impact of these financial technologies on various industry segments using case studies. Students will apply the various technological advancements in financial technology (FinTech) that are disrupting the industry in solving business problems.",
      },
    ],
  },

  {
    name: "Applied AI & Analytics (R13)",
    id: "aianalytics",
    banner: "https://www.rp.edu.sg/images/default-source/soi-images/full-time-courses-img/soi-main-photos--2024/daaa-e.jpg",
    sessions: [
      {
        name: "Deep Learning for Visual Intelligence",
        id: "C384",
        desc: "This module aims to equip students with a comprehensive understanding of deep learning techniques and their applications in visual intelligence. Students will be introduced to the fundamental concepts of deep learning, including neural networks and convolutional neural networks. They will also learn about various visual intelligence tasks such as image classification and object detection. The module will also cover the latest trends in deep learning and visual intelligence, and how these technologies are transforming various industries.",
      },
      {
        name: "Machine Learning for Predictive Analytics",
        id: "C387",
        desc: "This module aims to equip students with a comprehensive foundation of data mining processes, algorithms and hands-on experience working with analytics & ML tools. Using supervised and unsupervised machine learning techniques, students will learn to resolve business problems using data mining and predictive modelling by going through the entire cycle of business understanding, data understanding and preparation, data modelling, and testing and evaluation of models.",
      },
      {
        name: "Applied Large Language Models",
        id: "C388",
        desc: "This module aims to provide students with a comprehensive understanding of language models and their applications in natural language processing. Students will be introduced to the fundamental concepts of language models. They will also learn about various tasks in natural language processing such as text classification and sentiment analysis. The module will also cover the latest trends in language modelling and how these models are revolutionizing the field of natural language processing.",
      },
    ],
  },
];

// FAQ data
const faqs = [
  {
    question: "What do Republic Polytechnic students do in a day?",
    answer: "Republic Polytechnic uses a PBL (Problem-Based Learning) approach to learning. Students are exposed to problem statements every 1-3 lessons which allow students to engage in real-world problems and tackle them with innovative solutions.",
  },
  {
    question: "What is the duration of a course?",
    answer: "Courses will run for 3 years, with a 10 month / 6 month internship in the final year.",
  },
  {
    question: "How do I register for a course?",
    answer: "Visit the registration page and complete the online form, you may also contact us via email at ",
  },
  {
    question: "Can I save courses I am interested in?",
    answer: "Yes, use the 'Favourites' feature to save courses for easy reference.",
  },
];

export function getSession({ sessionId, dipId }) {
  return diplomas
    .find(({ id }) => id === dipId)
    .sessions.find(({ id }) => id === sessionId);
}

export function getDiploma(dipId) {
  return diplomas.find(({ id }) => id === dipId);
}

export function getDiplomas() {
  return diplomas.map(({ name, id, banner }) => ({ name, id, banner }));
}

export function getFaqs() {
  return faqs;
}
