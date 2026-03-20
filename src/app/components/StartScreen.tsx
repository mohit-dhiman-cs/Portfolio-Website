import { motion } from "motion/react";
import { Link } from "react-router";
import { ChevronRight, Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

export function StartScreen() {
  const [displayText, setDisplayText] = useState("");
  const fullText = "Welcome to the Portfolio";

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayText(fullText.slice(0, index));
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="min-h-[calc(100vh-5rem)] flex items-center justify-center px-4">
      <div className="max-w-5xl w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <div className="text-cyan-400 text-sm font-mono mb-4">{displayText}_</div>
          
          {/* Glowing Avatar */}
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, type: "spring" }}
            className="w-32 h-32 mx-auto mb-8 relative"
          >
            <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-500 via-purple-500 to-pink-500 p-1 shadow-2xl shadow-cyan-500/50 overflow-hidden">
              <div className="w-full h-full rounded-full bg-[#0a0a0f] flex items-center justify-center overflow-hidden">
                <img 
                  src="/avatar.jpg" 
                  alt="Mohit Dhiman" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="absolute inset-0 rounded-full bg-cyan-500/20 blur-xl animate-pulse"></div>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-6xl md:text-8xl font-bold mb-4 bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent"
          >
            Mohit Dhiman
          </motion.h1>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="text-xl md:text-2xl text-gray-300 mb-8 font-mono"
          >
            <span className="text-cyan-400">&lt;</span>
            Software Developer | AI Engineer
            <span className="text-cyan-400">/&gt;</span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.9 }}
            className="text-gray-400 max-w-2xl mx-auto mb-8"
          >
            Data Science enthusiast with expertise in Python, Machine Learning, and Web Development.
            Passionate about building innovative solutions and solving complex problems.
          </motion.p>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.1 }}
            className="flex flex-wrap justify-center gap-4 mb-12 text-sm text-gray-400"
          >
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <Mail size={16} className="text-cyan-400" />
              <span>dhimanmohit588@gmail.com</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <Phone size={16} className="text-cyan-400" />
              <span>+91 9450171160</span>
            </div>
            <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-500/30">
              <MapPin size={16} className="text-cyan-400" />
              <span>Phagwara, Punjab</span>
            </div>
          </motion.div>

          {/* Action Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.3 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            <Link to="/profile">
              <motion.button
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0, 255, 255, 0.5)" }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold text-lg shadow-lg shadow-cyan-500/50 flex items-center gap-2 group"
              >
                <span>ENTER PORTFOLIO</span>
                <ChevronRight className="group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </Link>

            <motion.a
              href="/resume.pdf"
              download="Mohit_Dhiman_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.button className="px-8 py-4 bg-transparent border-2 border-cyan-500 text-cyan-400 rounded-lg font-bold text-lg hover:bg-cyan-500/10 transition-all">
                DOWNLOAD RESUME
              </motion.button>
            </motion.a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="flex justify-center gap-6"
          >
            <motion.a
              href="https://www.linkedin.com/in/mohit-dhiman-74b7231ab/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 hover:bg-cyan-500/20 transition-all hover:shadow-lg hover:shadow-cyan-500/50"
            >
              <Linkedin size={24} />
            </motion.a>

            <motion.a
              href="https://github.com/mohit-dhiman-cs"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              className="w-12 h-12 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 hover:bg-purple-500/20 transition-all hover:shadow-lg hover:shadow-purple-500/50"
            >
              <Github size={24} />
            </motion.a>

            <motion.a
              href="mailto:dhimanmohit588@gmail.com"
              whileHover={{ scale: 1.2, rotate: 5 }}
              className="w-12 h-12 rounded-lg bg-pink-500/10 border border-pink-500/30 flex items-center justify-center text-pink-400 hover:bg-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/50"
            >
              <Mail size={24} />
            </motion.a>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2, repeat: Infinity, duration: 2 }}
          className="text-center text-cyan-400 text-sm font-mono"
        >
          <div className="inline-block animate-bounce">↓ Explore ↓</div>
        </motion.div>
      </div>
    </div>
  );
}