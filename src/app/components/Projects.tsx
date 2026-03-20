import { motion } from "motion/react";
import { ExternalLink, Github, Calendar } from "lucide-react";

export function Projects() {
  const projects = [
    {
      title: "Pesticide Consumption Trends Analysis",
      description: "Analyzed global pesticide consumption dataset to identify country-wise and time-based trends. Performed data cleaning, preprocessing, and feature engineering using Python, Pandas, and NumPy to improve dataset quality.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Streamlit"],
      date: "Oct '25 - Dec '25",
      status: "Live",
      github: "https://github.com/mohit-dhiman-cs/Pesticide-Consumption-Trends-Analysis",
      demo: "https://pesticide-analysis.streamlit.app/",
      color: "cyan",
      features: [
        "Built interactive visualizations",
        "Developed Streamlit dashboard for dynamic filtering",
        "Performed statistical analysis",
      ],
    },
    {
      title: "NYPD Crime Data Analysis",
      description: "Analyzed 100,000+ NYPD crime incident records to uncover borough-wise and seasonal crime distribution patterns. Applied data preprocessing, feature extraction (month, hour, season), and statistical analysis to identify peak crime periods.",
      tech: ["Python", "Pandas", "NumPy", "Matplotlib", "Seaborn"],
      date: "Jul '25 - Aug '25",
      status: "Live",
      github: "https://github.com/mohit-dhiman-cs/NYPD-Data-Analysis",
      demo: "#",
      color: "purple",
      features: [
        "Designed visual dashboards",
        "Illustrated frequency distribution and hotspot areas",
        "Derived actionable insights for high-risk time slots",
      ],
    },
    {
      title: "Social Media Network (DSA)",
      description: "A console-based social networking application built with Java, utilizing Data Structures and Algorithms (DSA) to manage users and connections. It features user account creation, friend list management, and connection tracking using a graph data structure.",
      tech: ["Java", "DSA", "Graphs", "Algorithms"],
      date: "Sep '25 - Oct '25",
      status: "Completed",
      github: "https://github.com/mohit-dhiman-cs/Social-Media-Network",
      demo: "#",
      color: "blue",
      features: [
        "Graph-based connection tracking",
        "User account management system",
        "Optimized friend search algorithms",
      ],
    },
    {
      title: "Speed Racer",
      description: "A racing game developed using Python and the Pygame library. The project features engaging gameplay with computer-controlled opponents and dynamic obstacle dodging on the track.",
      tech: ["Python", "Pygame", "Game Development"],
      date: "Aug '25 - Sep '25",
      status: "Completed",
      github: "https://github.com/mohit-dhiman-cs/Speed-Racer",
      demo: "#",
      color: "orange",
      features: [
        "Computer-controlled opponents",
        "Dynamic obstacle dodging",
        "Engaging Pygame-based graphics",
      ],
    },
    {
      title: "Black Leo Ventures",
      description: "A full-stack platform project featuring client and server components. Developed primarily in JavaScript and deployed on Vercel, representing a substantial web application project.",
      tech: ["JavaScript", "Full-Stack", "Vercel", "Web App"],
      date: "Nov '25 - Present",
      status: "Ongoing",
      github: "https://github.com/mohit-dhiman-cs/Black-Leo-Ventures",
      demo: "#",
      color: "emerald",
      features: [
        "Client-server architecture",
        "Modern JavaScript frontend",
        "Vercel cloud deployment",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-7xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            PORTFOLIO PROJECTS
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Completed & Ongoing Works</p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2 }}
              whileHover={{ y: -5 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${project.color}-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all`}></div>
              <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-500/60 transition-all">
                {/* Status Badge */}
                <div className="absolute top-4 right-4 z-10">
                  <div className={`px-3 py-1 rounded-full text-xs font-bold ${
                    project.status === "Live" 
                      ? "bg-green-500/20 text-green-400 border border-green-500/50" 
                      : "bg-blue-500/20 text-blue-400 border border-blue-500/50"
                  }`}>
                    <span className="inline-block w-2 h-2 rounded-full bg-current mr-1 animate-pulse"></span>
                    {project.status}
                  </div>
                </div>

                <div className="p-8">
                  {/* Title */}
                  <h3 className={`text-2xl font-bold mb-3 text-${project.color}-400 group-hover:text-${project.color}-300 transition-colors`}>
                    {project.title}
                  </h3>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-4">
                    <Calendar size={16} />
                    <span>{project.date}</span>
                  </div>

                  {/* Description */}
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Features */}
                  <div className="mb-4">
                    <ul className="space-y-2">
                      {project.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm text-gray-400">
                          <span className="text-cyan-400 mt-1">▹</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-xs text-cyan-300 font-mono"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex gap-4">
                    <motion.a
                      href={project.github}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg text-gray-300 hover:bg-gray-700 hover:border-cyan-500/50 transition-all"
                    >
                      <Github size={18} />
                      <span className="text-sm font-medium">GitHub</span>
                    </motion.a>
                    <motion.a
                      href={project.demo}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-gradient-to-r from-${project.color}-500 to-purple-600 rounded-lg font-medium text-sm shadow-lg hover:shadow-${project.color}-500/50 transition-all`}
                    >
                      <ExternalLink size={18} />
                      <span>Live Demo</span>
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
}
