export const developer = {
  name: "Muhammad Iqbal",
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
  resumeUrl: "#",
  photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&q=80"
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
    downloadLabel: "Download Architecture Doc",
    downloadUrl: "#",
    problem: "Building a production-grade mobile super-app (Ride-Hailing, Food Delivery, Logistics) from scratch demanded an architecture capable of real-time driver matching, low-latency GPS tracking, high-throughput order processing, and horizontal scalability — all without a monolith that would collapse under load.",
    solution: "Designed the entire system architecture from scratch. Decomposed into event-driven microservices: Flask (Auth), Go (Booking & Fare), Go (Matching), Node.js (Tracking), Java Spring Boot (Payment), fronted by KONG API Gateway. Chose best-fit databases per domain: PostgreSQL for relational data, MongoDB for catalogs/notifications, ElasticSearch for discovery, TimescaleDB for GPS time-series. Apache Kafka for event streaming, Redis Cluster for spatial coordinates, session management, and surge pricing. Deployed on Kubernetes with HPA, GitHub Actions CI/CD, Cloudflare CDN/WAF, and AWS infrastructure.",
    impact: "A fully event-driven architecture capable of handling high-throughput ride-hailing, food delivery, and logistics workloads simultaneously. Each service scales independently via Kubernetes HPA. Real-time GPS tracking, low-latency driver matching, and sub-second search powered by the right storage engine for each use case.",
    techStack: ["Flutter", "Flask", "Go", "Node.js", "Java Spring Boot", "KONG API Gateway", "PostgreSQL", "MongoDB", "ElasticSearch", "TimescaleDB", "Apache Kafka", "Redis Cluster", "Docker", "Kubernetes", "GitHub Actions", "Cloudflare", "AWS", "Amazon Route 53", "AWS S3"]
  }
];

export const skills = [
  { category: "Languages", items: [
    { name: "Node.js", icon: "server" },
    { name: "Python", icon: "code-2" },
    { name: "Go", icon: "zap" },
    { name: "TypeScript", icon: "file-code" }
  ]},
  { category: "Infrastructure", items: [
    { name: "Kubernetes", icon: "box" },
    { name: "AWS", icon: "cloud" },
    { name: "Terraform", icon: "layers" },
    { name: "Docker", icon: "package" }
  ]},
  { category: "Data", items: [
    { name: "PostgreSQL", icon: "database" },
    { name: "Redis", icon: "cpu" },
    { name: "Kafka", icon: "git-branch" },
    { name: "ElasticSearch", icon: "bar-chart-2" }
  ]},
  { category: "Architecture", items: [
    { name: "System Design", icon: "layout" },
    { name: "API Design", icon: "git-merge" },
    { name: "Microservices", icon: "network" },
    { name: "CI/CD", icon: "refresh-cw" }
  ]}
];