import { motion } from "motion/react";
import { Code2, Database, Wrench, Target } from "lucide-react";

export function Skills() {
  const skillCategories = [
    {
      title: "Languages",
      icon: Code2,
      color: "cyan",
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "SQL", level: 85 },
        { name: "C/C++", level: 75 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      color: "purple",
      skills: [
        { name: "Pandas", level: 85 },
        { name: "NumPy", level: 85 },
        { name: "Matplotlib", level: 80 },
        { name: "Seaborn", level: 80 },
        { name: "Streamlit", level: 75 },
        { name: "ReactJS", level: 70 },
        { name: "Node.js", level: 70 },
        { name: "Tailwind CSS", level: 85 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      color: "pink",
      skills: [
        { name: "MySQL", level: 85 },
        { name: "Tableau", level: 75 },
        { name: "Power BI", level: 70 },
        { name: "Jupyter Notebook", level: 90 },
        { name: "Git", level: 80 },
        { name: "GitHub", level: 80 },
        { name: "Vercel", level: 75 },
        { name: "AWS (Basics)", level: 60 },
      ],
    },
    {
      title: "Core Fundamentals",
      icon: Target,
      color: "green",
      skills: [
        { name: "DBMS", level: 80 },
        { name: "OOPs", level: 85 },
        { name: "SQL", level: 85 },
        { name: "Data Cleaning", level: 90 },
        { name: "Exploratory Data Analysis", level: 85 },
      ],
    },
  ];

  const softSkills = [
    "Problem Solving",
    "Analytical Thinking",
    "Debugging",
    "Team Collaboration",
    "Time Management",
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
            SKILL TREE
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Abilities Unlocked & Mastered</p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          {skillCategories.map((category, categoryIndex) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, x: categoryIndex % 2 === 0 ? -20 : 20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: categoryIndex * 0.1 }}
                className="relative group"
              >
                <div className={`absolute inset-0 bg-gradient-to-br from-${category.color}-500/10 to-${category.color}-500/5 rounded-lg blur-xl group-hover:blur-2xl transition-all`}></div>
                <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-all">
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`w-12 h-12 rounded-lg bg-${category.color}-500/20 border border-${category.color}-500/50 flex items-center justify-center`}>
                      <Icon className={`text-${category.color}-400`} size={24} />
                    </div>
                    <h2 className={`text-xl font-bold text-${category.color}-400`}>
                      {category.title}
                    </h2>
                  </div>

                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name}>
                        <div className="flex justify-between mb-2">
                          <span className="text-gray-300 font-medium">{skill.name}</span>
                          <span className="text-cyan-400 font-mono text-sm">{skill.level}%</span>
                        </div>
                        <div className="w-full bg-gray-800 rounded-full h-2 overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            animate={{ width: `${skill.level}%` }}
                            transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05, duration: 1 }}
                            className={`h-full bg-gradient-to-r from-${category.color}-500 to-purple-500 rounded-full relative`}
                          >
                            <div className="absolute inset-0 bg-white/20 animate-pulse"></div>
                          </motion.div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg blur-xl"></div>
          <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-2">
              <span className="w-3 h-3 rounded-full bg-purple-400 animate-pulse"></span>
              Soft Skills
            </h2>
            <div className="flex flex-wrap gap-4">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                  whileHover={{ scale: 1.1, rotate: 2 }}
                  className="px-6 py-3 bg-gradient-to-r from-purple-500/20 to-pink-500/20 border border-purple-500/50 rounded-full text-purple-300 font-medium hover:shadow-lg hover:shadow-purple-500/50 transition-all cursor-default"
                >
                  {skill}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
