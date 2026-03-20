import { motion } from "motion/react";
import { Award, ExternalLink, Calendar } from "lucide-react";

export function Certifications() {
  const certifications = [
    {
      title: "Google IT Automation with Python",
      issuer: "Coursera",
      date: "May '25",
      link: "#",
      color: "cyan",
      icon: "🏆",
    },
    {
      title: "Java with OOPs",
      issuer: "CipherSchools",
      date: "Jul '25",
      link: "#",
      color: "purple",
      icon: "☕",
    },
    {
      title: "Legacy Responsive Web Design V8",
      issuer: "Free Code Camp",
      date: "Oct '23",
      link: "#",
      color: "pink",
      icon: "🎨",
    },
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
            ACHIEVEMENTS
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Badges & Trophies Collected</p>
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.title}
              initial={{ opacity: 0, scale: 0.8, rotateY: -90 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{
                delay: index * 0.2,
                type: "spring",
                stiffness: 100,
              }}
              whileHover={{ scale: 1.05, rotateZ: 2 }}
              className="relative group"
            >
              <div className={`absolute inset-0 bg-gradient-to-br from-${cert.color}-500/20 to-purple-500/20 rounded-lg blur-xl group-hover:blur-2xl transition-all`}></div>
              <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg overflow-hidden hover:border-cyan-500/60 transition-all">
                {/* Badge Icon */}
                <div className="absolute top-0 right-0 w-32 h-32 opacity-10 transform translate-x-8 -translate-y-8">
                  <div className="text-8xl">{cert.icon}</div>
                </div>

                <div className="p-8 relative z-10">
                  {/* Trophy Icon */}
                  <div className={`w-16 h-16 rounded-full bg-gradient-to-br from-${cert.color}-500/30 to-purple-500/30 border-2 border-${cert.color}-500/50 flex items-center justify-center mb-4 shadow-lg group-hover:shadow-${cert.color}-500/50 transition-all`}>
                    <span className="text-3xl">{cert.icon}</span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Issuer */}
                  <div className="flex items-center gap-2 mb-3">
                    <Award size={16} className="text-purple-400" />
                    <span className="text-purple-400 font-medium">{cert.issuer}</span>
                  </div>

                  {/* Date */}
                  <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
                    <Calendar size={16} />
                    <span>{cert.date}</span>
                  </div>

                  {/* Link */}
                  <motion.a
                    href={cert.link}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className={`flex items-center justify-center gap-2 w-full px-4 py-2 bg-gradient-to-r from-${cert.color}-500 to-purple-600 rounded-lg text-white font-medium text-sm shadow-lg hover:shadow-${cert.color}-500/50 transition-all`}
                  >
                    <span>View Certificate</span>
                    <ExternalLink size={16} />
                  </motion.a>
                </div>

                {/* Decorative Elements */}
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-500 via-purple-500 to-pink-500"></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8 }}
          className="mt-16 relative"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
          <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
            <h2 className="text-2xl font-bold text-center mb-8 text-cyan-400">
              Achievement Statistics
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-cyan-400 to-purple-500 bg-clip-text text-transparent mb-2">
                  3
                </div>
                <div className="text-gray-400">Certifications Earned</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent mb-2">
                  100+
                </div>
                <div className="text-gray-400">Hours of Learning</div>
              </div>
              <div className="text-center">
                <div className="text-5xl font-bold bg-gradient-to-r from-pink-400 to-cyan-500 bg-clip-text text-transparent mb-2">
                  5+
                </div>
                <div className="text-gray-400">Skills Validated</div>
              </div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
}
