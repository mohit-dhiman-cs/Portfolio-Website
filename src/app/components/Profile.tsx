import { motion } from "motion/react";
import { GraduationCap, Award, Code, TrendingUp } from "lucide-react";

export function Profile() {
  const stats = [
    { label: "Education Level", value: "Bachelor's", icon: GraduationCap, color: "cyan" },
    { label: "CGPA", value: "6.14", icon: Award, color: "purple" },
    { label: "Skills Unlocked", value: "20+", icon: Code, color: "pink" },
    { label: "Projects Completed", value: "5+", icon: TrendingUp, color: "green" },
  ];

  return (
    <div className="container mx-auto px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-6xl mx-auto"
      >
        {/* Header */}
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent"
          >
            PLAYER PROFILE
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="relative group"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all"></div>
                <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-6 hover:border-cyan-500/60 transition-all">
                  <div className={`w-12 h-12 rounded-lg bg-${stat.color}-500/20 border border-${stat.color}-500/50 flex items-center justify-center mb-4`}>
                    <Icon className={`text-${stat.color}-400`} size={24} />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-sm text-gray-400">{stat.label}</div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* About Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="relative mb-12"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
          <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4 text-cyan-400 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              About Me
            </h2>
            <p className="text-gray-300 leading-relaxed mb-6">
              I'm a passionate software developer and AI enthusiast currently pursuing my Bachelor of Technology 
              in Computer Science and Engineering from Lovely Professional University. With a strong foundation in 
              Python, Java, and modern web technologies, I specialize in building data-driven applications and 
              machine learning solutions.
            </p>
            <p className="text-gray-300 leading-relaxed">
              My expertise spans across full-stack development, data analysis, and AI/ML implementation. I'm 
              particularly interested in solving complex problems using analytical thinking, debugging, and 
              collaborative teamwork. Always eager to learn new technologies and contribute to innovative projects.
            </p>
          </div>
        </motion.div>

        {/* Education Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg blur-xl"></div>
          <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-6 text-purple-400 flex items-center gap-2">
              <GraduationCap size={28} />
              Education
            </h2>
            
            <div className="space-y-6">
              {/* University */}
              <div className="border-l-2 border-cyan-500 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-cyan-500 border-4 border-[#0a0a0f]"></div>
                <div className="text-sm text-cyan-400 mb-1">Aug '23 - Present</div>
                <h3 className="text-xl font-bold text-white mb-1">Lovely Professional University</h3>
                <div className="text-gray-400 mb-2">Bachelor of Technology</div>
                <div className="text-gray-300">Computer Science and Engineering</div>
                <div className="text-purple-400 font-semibold mt-2">CGPA: 6.14</div>
                <div className="text-sm text-gray-500 mt-1">Phagwara, Punjab</div>
              </div>

              {/* Intermediate */}
              <div className="border-l-2 border-purple-500 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-purple-500 border-4 border-[#0a0a0f]"></div>
                <div className="text-sm text-purple-400 mb-1">Aug '21 - May '23</div>
                <h3 className="text-xl font-bold text-white mb-1">The Doon Valley Public School</h3>
                <div className="text-gray-400 mb-2">Intermediate</div>
                <div className="text-gray-300">CBSE: Percentage: 64%</div>
                <div className="text-sm text-gray-500 mt-1">Deoband, Uttar Pradesh</div>
              </div>

              {/* Matriculation */}
              <div className="border-l-2 border-pink-500 pl-6 relative">
                <div className="absolute -left-2 top-0 w-4 h-4 rounded-full bg-pink-500 border-4 border-[#0a0a0f]"></div>
                <div className="text-sm text-pink-400 mb-1">Mar '20 - May '21</div>
                <h3 className="text-xl font-bold text-white mb-1">The Doon Valley Public School</h3>
                <div className="text-gray-400 mb-2">Matriculation</div>
                <div className="text-gray-300">Percentage: 88.4%</div>
                <div className="text-sm text-gray-500 mt-1">Deoband, Uttar Pradesh</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
