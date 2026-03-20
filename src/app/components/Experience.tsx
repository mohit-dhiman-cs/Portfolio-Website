import { motion } from "motion/react";
import { Briefcase, Calendar, MapPin } from "lucide-react";

export function Experience() {
  const experiences = [
    {
      role: "Web Developer Intern",
      company: "orbosisglobal",
      location: "Remote",
      date: "Oct '25 - Dec '25",
      description: "Developed a responsive multi-page WordPress-based website replicating real-world UI/UX standards.",
      achievements: [
        "Customized design, templates, and plugins to enhance performance and user experience",
        "Configured hosting, implemented SEO optimization, and applied basic security measures for stable deployment",
      ],
      color: "cyan",
    },
  ];

  const training = [
    {
      title: "CSE Pathsala - Unvealing Basic Python towards ML/AI",
      duration: "Feb '24 - Mar '24",
      description: "Completed a 25-hour AI training focused on Python programming and ML foundations.",
      skills: [
        "Practiced structured coding, functions, loops, and OOP principles through hands-on assignments",
        "Built mini-projects to apply Python in data handling and logical automation tasks",
        "Strengthened analytical thinking and real-world problem-solving skills",
      ],
      color: "purple",
    },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-5xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            EXPERIENCE LOG
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Journey Through Internships & Training</p>
        </div>

        {/* Internship Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-12"
        >
          <h2 className="text-3xl font-bold text-cyan-400 mb-8 flex items-center gap-3">
            <Briefcase size={32} />
            <span>INTERNSHIP</span>
          </h2>

          {experiences.map((exp, index) => (
            <motion.div
              key={exp.company}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 + index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${exp.color}-500/10 to-purple-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all`}></div>
              <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8 hover:border-cyan-500/60 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <div className="text-xl text-cyan-400 font-semibold mb-3">{exp.company}</div>
                  </div>
                  <div className="flex flex-col gap-2 text-sm">
                    <div className="flex items-center gap-2 text-gray-400">
                      <Calendar size={16} className="text-cyan-400" />
                      <span>{exp.date}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400">
                      <MapPin size={16} className="text-cyan-400" />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </div>

                <p className="text-gray-300 mb-4">{exp.description}</p>

                <div className="space-y-2">
                  {exp.achievements.map((achievement, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-cyan-400 mt-1">▹</span>
                      <span className="text-gray-300">{achievement}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Training Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-purple-400 mb-8 flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-purple-500/20 border border-purple-500/50 flex items-center justify-center">
              <span className="text-2xl">🎓</span>
            </div>
            <span>TRAINING</span>
          </h2>

          {training.map((train, index) => (
            <motion.div
              key={train.title}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6 + index * 0.2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${train.color}-500/10 to-pink-500/10 rounded-lg blur-xl group-hover:blur-2xl transition-all`}></div>
              <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8 hover:border-purple-500/60 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">{train.title}</h3>
                    <p className="text-gray-300 mb-4">{train.description}</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-gray-400">
                    <Calendar size={16} className="text-purple-400" />
                    <span>{train.duration}</span>
                  </div>
                </div>

                <div className="space-y-2">
                  {train.skills.map((skill, idx) => (
                    <div key={idx} className="flex items-start gap-3">
                      <span className="text-purple-400 mt-1">▹</span>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
}