import ProjectCard from "./project-item";

interface Project {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  technologies: string[];
  details?: string[];
  link?: string;
}

const PROJECTS: Project[] = [
  {
    id: '1',
    image: '/ecommerce-analytics-dashboard.png',
    title: 'E-Commerce Dashboard',
    shortDescription: 'A modern dashboard for managing online store operations. A modern dashboard for managing online store operations. ',
    fullDescription:
      'Built a comprehensive e-commerce dashboard with real-time analytics, inventory management, and order tracking. This project demonstrates full-stack development expertise with modern web technologies and scalable architecture.',
    details: [
      'Real-time analytics with interactive charts and metrics',
      'Inventory management system with automated alerts',
      'Complete order tracking and customer management',
      'Integration with multiple payment gateways',
      'Advanced customer segmentation and reporting',
      'Responsive design for desktop and tablet users',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Chart.js', 'Next.js'],
    link: 'https://example.com/ecommerce',
  },
  {
    id: '2',
    image: '/ai-chat-interface.png',
    title: 'AI Chat Application',
    shortDescription: 'Intelligent chatbot powered by machine learning models',
    fullDescription:
      'Developed an AI-powered chat application with natural language processing capabilities. The system supports multi-language conversations with context awareness and seamless API integrations for real-time data.',
    details: [
      'Natural language processing with context awareness',
      'Multi-language support with automatic detection',
      'Real-time data fetching from various APIs',
      'User authentication and session management',
      'Chat history persistence and search functionality',
      'Responsive interface optimized for all devices',
    ],
    technologies: ['Next.js', 'TypeScript', 'OpenAI API', 'Supabase', 'Vercel'],
    link: 'https://example.com/ai-chat',
  },
  {
    id: '3',
    image: '/project-management-collaborative-tool.jpg',
    title: 'Project Management Tool',
    shortDescription: 'Collaborative platform for team project tracking',
    fullDescription:
      'Created a full-featured project management platform with real-time collaboration, task assignments, and progress tracking. Enables seamless team communication with visual project timelines and analytics.',
    details: [
      'Real-time collaboration with live updates',
      'Task assignment and progress tracking system',
      'Gantt charts and calendar views',
      'Team communication and commenting features',
      'Detailed project analytics and reporting',
      'Mobile-responsive design for on-the-go access',
    ],
    technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io', 'Redux'],
    link: 'https://example.com/pm-tool',
  },
  {
    id: '4',
    image: '/music-streaming-platform.jpg',
    title: 'Music Streaming Service',
    shortDescription: 'Full-featured music streaming application',
    fullDescription:
      'Built a Spotify-like music streaming application with playlist management and personalized recommendations. Includes high-quality audio streaming and social features for sharing and collaboration.',
    details: [
      'High-quality audio streaming with adaptive bitrate',
      'Playlist management and creation tools',
      'AI-powered personalized recommendations',
      'Social sharing and collaborative playlists',
      'User profile and listening history',
      'Full responsive design across all devices',
    ],
    technologies: ['Next.js', 'TypeScript', 'PostgreSQL', 'AWS', 'Tailwind CSS'],
    link: 'https://example.com/music',
  },
  {
    id: '5',
    image: '/fitness-tracking-app.png',
    title: 'Fitness Tracking App',
    shortDescription: 'Comprehensive health and workout tracking application',
    fullDescription:
      'Developed a fitness app that tracks workouts, nutrition, and health metrics with personalized plans. Features community challenges and integration with wearable devices for comprehensive health monitoring.',
    details: [
      'Workout tracking and performance analytics',
      'Personalized workout plans based on goals',
      'Nutrition tracking and meal planning',
      'Integration with wearable devices',
      'Community challenges and leaderboards',
      'Progress visualization with detailed charts',
    ],
    technologies: ['React Native', 'TypeScript', 'Firebase', 'Redux', 'Expo'],
    link: 'https://example.com/fitness',
  },
  {
    id: '6',
    image: '/real-estate-website.png',
    title: 'Real Estate Platform',
    shortDescription: 'Modern property listing and management platform',
    fullDescription:
      'Created a comprehensive real estate platform with property listings, virtual tours, and agent management. Features advanced search capabilities and pricing analytics for better decision making.',
    details: [
      'Property listing with high-quality images',
      'Virtual tours and 3D property visualization',
      'Advanced search filters and sorting',
      'Agent management and client communication',
      'Pricing analytics and market insights',
      'Fully responsive across all screen sizes',
    ],
    technologies: ['Next.js', 'TypeScript', 'Stripe', 'Prisma', 'Vercel'],
    link: 'https://example.com/real-estate',
  },
];

export default function ProjectsSection() {
  return (
    <section className="w-full bg-background">
      <div className="mx-auto max-w-5xl">
        {/* Section Header */}
        {/* <div className="mb-12 text-center md:mb-16">
          <h2 className="mb-4 text-3xl font-bold text-foreground md:text-4xl lg:text-5xl">
            My <span className="text-primary">Projects</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-muted-foreground md:text-lg">
            Explore a selection of my recent work showcasing expertise in web development,
            design, and problem-solving
          </p>
        </div> */}

        <div className="divide-y divide-dashed divide-border">
          {PROJECTS.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
}


//projects
//real estate
//travel buddy
//roadmap hero to zero
//multi auth
//productivity app

//progress indicator