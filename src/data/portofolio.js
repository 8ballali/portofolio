export const developer = {
  name: "Muhammad\nIqbal Ali\nSa'idil Muna",
  title: "Full Stack Developer — Backend & Systems",
  headline: "Architecting robust digital foundations.",
  subheadline: "I own the entire backend: APIs, databases, infrastructure, and integrations end-to-end.",
  bio: [
    "I'm a full-stack backend lead with a passion for building systems that don't just work — they scale. My work lives at the intersection of engineering rigor and product thinking.",
    "I've architected high-throughput API gateways processing millions of daily requests, designed distributed data pipelines that cut processing time by 60%, and built cloud infrastructure that maintains 99.9% uptime under peak load.",
    "When I'm not designing systems, I'm thinking about them. I believe the most elegant code is invisible to the user and unbreakable under pressure."
  ],
  email: "iqbalalisaidil@gmail.com",
  github: "https://github.com/8ballali",
  linkedin: "https://linkedin.com/in/saidilmuna",
  resumeUrl: "https://drive.google.com/drive/folders/15ctYFDGCDaSfAweZ3LrhubEwEjjcLMvi?usp=sharing",
  photo: "https://res.cloudinary.com/dzfsjfs2v/image/upload/v1782801032/developer-portrait_wpyu5v.jpg"
};

export const projects = [
  {
    id: "plaris-api",
    index: "01",
    title: "Plaris API",
    subtitle: "Mobile ERP — Inventory & Transactions",
    metric: "Real-Time",
    metricLabel: "Inventory Sync",
    tags: ["Laravel", "PHP", "MySQL", "PostgreSQL"],
    shortDescription: "Backend for a comprehensive mobile ERP application handling real-time inventory management, automated transaction logging, and multi-location stock monitoring.",
    iconType: "layers",
    problem: "A growing business needed a reliable mobile ERP backbone capable of managing real-time inventory across multiple locations, automating transaction logging, and generating strategic business reports — all without data loss or latency.",
    solution: "Served as Backend Developer designing, building, and maintaining high-performance RESTful APIs to support mobile clients. Architected the data layer for real-time inventory sync, multi-location stock tracking, and automated transaction pipelines integrated with business reporting modules.",
    impact: "Delivered a production-grade ERP API layer enabling real-time inventory visibility across all locations. Automated transaction logging eliminated manual data entry overhead. Business reporting became available on-demand from mobile, accelerating decision-making.",
    restriction: true,
    techStack: ["PHP", "Laravel", "MySQL", "PostgreSQL", "RESTful API"]
  },
  {
    id: "sti-publikasi",
    index: "02",
    title: "STI Publikasi",
    subtitle: "Bengkel Koding — UDINUS Web Portal",
    metric: "Decoupled",
    metricLabel: "Microservice Architecture",
    tags: ["Laravel", "FastAPI", "MySQL"],
    shortDescription: "Architected an automated data crawling service and core database for the UDINUS STI web portal, bridging FastAPI microservices with a legacy Laravel backend via unified auth.",
    iconType: "git-merge",
    problem: "The Universitas Dian Nuswantoro (UDINUS) STI portal needed an automated data crawling infrastructure and a unified API layer that could enable seamless, decoupled communication between modern FastAPI microservices and a pre-existing legacy Laravel backend — including a shared, secure authentication layer.",
    solution: "Architected the automated data crawling service and designed the core database schema for the web portal. Established decoupled communication strategies between FastAPI microservices and the legacy Laravel backend. Implemented secure unified Authentication APIs to allow both systems to share identity without coupling.",
    impact: "Enabled seamless interoperability between the new microservice layer and the legacy system. Automated data ingestion replaced manual processes. The unified auth layer reduced security surface area and simplified session management across both stacks.",
    restriction: true,
    techStack: ["Laravel", "FastAPI", "MySQL", "Python", "RESTful API", "JWT Authentication"]
  },
  {
    id: "ramasakti",
    index: "03",
    title: "Ramasakti",
    subtitle: "Ticketing & Financial ERP Integration",
    metric: "-20% Redundancy",
    metricLabel: "DB Tables Eliminated",
    tags: ["Flask", "CakePHP", "PostgreSQL", "GCP Pub/Sub"],
    shortDescription: "Led the migration and integration of a 120+ module legacy ticketing system with a centralized financial ecosystem, including real-time DB sync, WhatsApp notifications, and ERP automation.",
    iconType: "workflow",
    problem: "A highly complex legacy ticketing system with 120+ modules and 100+ tables needed to be connected to a centralized financial reporting ecosystem. Critical booking bugs from third-party OTA channels (Traveloka, RedBus) were causing revenue loss. Data across two distinct databases had no synchronization, and financial processes like invoice generation, tax calculations, and refunds were entirely manual.",
    solution: "Spearheaded the full migration and integration project. Developed high-complexity features: ticket cancellations, seat swaps, rescheduling, and automated refunds. Resolved critical OTA booking bugs. Engineered a real-time data synchronization mechanism between two databases with rigorous normalization. Implemented automated WhatsApp notifications for agents and passengers. Integrated financial pipelines with Accurate Online ERP for automated invoicing, tax, and refunds. Optimized complex search queries and enhanced Pub/Sub architecture for inter-service communication.",
    impact: "Database normalization reduced redundant tables and empty columns by 20%. Real-time sync eliminated data inconsistencies between systems. Automated financial pipelines (invoicing, tax, refunds) replaced entirely manual processes. OTA booking bugs resolved, protecting revenue from Traveloka and RedBus channels.",
    restriction: true,
    techStack: ["Flask", "CakePHP", "PostgreSQL", "MySQL", "Google Cloud Pub/Sub", "Google Cloud Storage", "Accurate Online API", "WhatsApp API"]
  },
  {
    id: "super-trip",
    index: "04",
    title: "Super Trip",
    subtitle: "Event-Driven Microservices Super-App",
    metric: "7 Microservices",
    metricLabel: "Designed from Scratch",
    tags: ["Go", "Flask", "Node.js", "Kafka", "Kubernetes"],
    shortDescription: "Designed the entire system architecture for a production-grade super-app covering Ride-Hailing, Food Delivery, and Logistics — decomposed from monolith into a high-throughput, event-driven microservices platform.",
    iconType: "cloud",
    problem: "Building a production-grade mobile super-app (Ride-Hailing, Food Delivery, Logistics) from scratch demanded an architecture capable of real-time driver matching, low-latency GPS tracking, high-throughput order processing, and horizontal scalability — all without a monolith that would collapse under load.",
    solution: "Designed the entire system architecture from scratch. Decomposed into event-driven microservices: Flask (Auth), Go (Booking & Fare), Go (Matching), Node.js (Tracking), Java Spring Boot (Payment), fronted by KONG API Gateway. Chose best-fit databases per domain: PostgreSQL for relational data, MongoDB for catalogs/notifications, ElasticSearch for discovery, TimescaleDB for GPS time-series. Apache Kafka for event streaming, Redis Cluster for spatial coordinates, session management, and surge pricing. Deployed on Kubernetes with HPA, GitHub Actions CI/CD, Cloudflare CDN/WAF, and AWS infrastructure.",
    impact: "A fully event-driven architecture capable of handling high-throughput ride-hailing, food delivery, and logistics workloads simultaneously. Each service scales independently via Kubernetes HPA. Real-time GPS tracking, low-latency driver matching, and sub-second search powered by the right storage engine for each use case.",
    resources: [
      { label: "System Design", url: "https://res.cloudinary.com/dzfsjfs2v/image/upload/v1782829378/KnovaTrip_SystemDesign_agwile.pdf" },
    ],
    restriction: true,
    techStack: ["Flutter", "Flask", "Go", "Node.js", "Java Spring Boot", "KONG API Gateway", "PostgreSQL", "MongoDB", "ElasticSearch", "TimescaleDB", "Apache Kafka", "Redis Cluster", "Docker", "Kubernetes", "GitHub Actions", "Cloudflare", "AWS", "Amazon Route 53", "AWS S3"]
  }
];

export const personalProjects = [
  {
    id: "Blockchain Agriculture",
    index: "01",
    title: "Blockchain Agriculture",
    subtitle: "Decentralized Farming Solutions",
    metric: "Blockchain",
    metricLabel: "Smart Contracts",
    tags: ["React", "Vite", "Tailwind", "Framer Motion"],
    shortDescription: "A personal portfolio built with a strong visual system, modular sections, and fluid motion to present engineering work with more clarity.",
    iconType: "cloud",
    problem: "In traditional smart farming setups, sensor data stored on centralized servers remains vulnerable to data manipulation, single points of failure, and unauthorized interference. For digital farmers, this lack of immutable transparency risks compromised monitoring accuracy, making it difficult to guarantee untampered, high-fidelity environmental records for agricultural decision-making.",
    solution: "Developed a decentralized IoT monitoring system that pairs DHT22 and LM35 sensors with an Arduino over a local Wi-Fi network. The architecture utilizes a Flask backend integrated with Ether.js to securely bridge the hardware data directly into a local Ethereum blockchain network, ensuring immutable logging of environmental metrics.",
    impact: "The network establishes a fully tamper-proof and transparent data pipeline, making it impossible for unauthorized entities to modify or erase sensor history. By eliminating data fraud and external interference, the system provides digital farmers with verifiable, absolute truth regarding their crop conditions.",
    techStack: ["IOT", "EtherJS", "Flask", "Ethereum", "ESP32", "DHT22", "LM35"]  
  },
  {
    id: "LMS API",
    index: "02",
    title: "LMS API",
    subtitle: "Learning Management System Backend",
    metric: "Robust & Scalable",
    metricLabel: "Containerized Architecture",
    tags: ["Django", "MySQL", "Docker"],
    shortDescription: "A scalable and containerized backend service providing core LMS functionalities including secure enrollment, analytics dashboards, and interactive course management.",
    iconType: "layers",
    problem: "Building a scalable educational platform requires managing complex relational data—such as multi-user enrollments, activity tracking, and analytics—while maintaining consistent and isolated development environments.",
    solution: "Developed a robust REST API using Django and MySQL, containerized entirely with Docker to streamline deployment and ensure environment consistency across features like batch enrollment and data tracking.",
    impact: "Delivers a secure, containerized backend capable of processing complex queries for activity dashboards and course analytics, ensuring zero deployment discrepancies and high data integrity.",
    techStack: ["Python", "Django", "MySQL", "Docker", "REST API"]
  },
  {
    id: "Diabetes Prediction",
    index: "03",
    title: "Diabetes Risk Prediction",
    subtitle: "Deep Learning Model for Health Indicators Classification",
    metric: "74.59% Validation",
    metricLabel: "Optimal Hyperparameters",
    tags: ["Python", "TensorFlow", "Keras"],
    shortDescription: "An optimized Deep Learning model leveraging a Multilayer Perceptron (MLP) architecture to classify and predict early-onset diabetes risks from massive behavioral health datasets.",
    iconType: "workflow",
    problem: "Early detection of diabetes is critical to prevent severe chronic complications, yet clinical data often suffers from high-dimensional complexity and neural network training is highly prone to severe overfitting.",
    solution: "Developed a deep Multilayer Perceptron (MLP) classifier featuring 128-64-32 neuron hidden layers, integrated with a 0.3 Dropout rate and 0.001 Kernel Regularizer, optimized via automated Random Search hyperparameter tuning.",
    impact: "Successfully mitigates model overfitting, stabilizing the validation loss and delivering a high-fidelity classification model that achieves a peak validation accuracy of 74.59% on public health records.",
    resources: [
      { label: "Source Code", url: "https://www.kaggle.com/code/hanifcahyoprasetyo/diabetes-kelompok-7" },
      { label: "Paper", url: "https://res.cloudinary.com/dzfsjfs2v/image/upload/v1782825928/Laporan_Kelompok_7_Tugas_Akhir_Pembelajaran_Mesin_Mendalam_auzryb.pdf" },
      { label: "Poster", url: "https://res.cloudinary.com/dzfsjfs2v/image/upload/v1782825928/Poster_Kelompok_7_Pembelajaran_Mesin_Mendalam_vs3sra.pdf" },
    ],
    techStack: ["Python", "TensorFlow", "Keras", "StandardScaler", "Random Search"]
  },
  {
    id: "Software Reverse Engineering",
    index: "04",
    title: "Executable Vulnerability Assessment",
    subtitle: "Binary Analysis & Registration Bypass",
    metric: "Binary Patching",
    metricLabel: "Validation Bypass",
    tags: ["x32dbg", "Assembly (x86)", "Reverse Engineering"],
    shortDescription: "A security assessment on a compiled executable to analyze registration check logic, execute control-flow patching, and identify client-side validation vulnerabilities.",
    iconType: "shield",
    problem: "Analyzing local execution flow without source code access to expose how unsafe client-side logic can be fully exploited and manipulated at the assembly level[cite: 807, 822].",
    solution: "Conducted static and dynamic analysis using x32dbg to locate string references[cite: 827, 830, 831]. Intercepted the validation routine by forcing control-flow redirection (patching conditional `JNE` to unconditional `JMP`) and modifying instructions to dump memory contents[cite: 966, 1046, 1225].",
    resources: [
      { label: "Report", url: "https://res.cloudinary.com/dzfsjfs2v/image/upload/v1782828571/Laporan_Praktikum_Reverse_Engineering_maefgi.pdf" },
    ],
    impact: "Successfully bypassed the software's registration lock and repurposed the error routine into a deterministic runtime key generator, proving the high risks of lacking anti-tampering defenses[cite: 1212, 1336, 1377, 1381].",
    techStack: ["x32dbg", "Assembly x86", "Dynamic Debugging", "Binary Patching"]
  }
];

export const skills = [
  { category: "Languages", items: [
    { name: "Javascript", icon: "server" },
    { name: "Python", icon: "code-2" },
    { name: "Go", icon: "zap" },
    { name: "Java", icon: "file-code" }
  ]},
    { category: "Frameworks", items: [
    { name: "Express", icon: "server" },
    { name: "Flask & FastAPI", icon: "code-2" },
    { name: "Gin", icon: "zap" },
    { name: "Spring Boot", icon: "file-code" }
  ]},
  { category: "Infrastructure", items: [
    { name: "Kubernetes", icon: "box" },
    { name: "AWS", icon: "cloud" },
    { name: "GCP", icon: "cloudy" },
    { name: "Linux Server", icon: "package" }
  ]},
  { category: "Data", items: [
    { name: "PostgreSQL", icon: "database" },
    { name: "Redis", icon: "cpu" },
    { name: "MySQL", icon: "database" },
    { name: "ElasticSearch", icon: "bar-chart-2" }
  ]},
  { category: "Architecture", items: [
    { name: "System Design", icon: "layout" },
    { name: "API Design", icon: "git-merge" },
    { name: "Microservices", icon: "network" },
    { name: "CI/CD", icon: "refresh-cw" }
  ]}
];