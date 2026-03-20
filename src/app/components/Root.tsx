import { Outlet, Link, useLocation } from "react-router";
import { motion } from "motion/react";
import { User, Trophy, Briefcase, Code, Mail, Target, Home } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function Root() {
  const location = useLocation();

  const navItems = [
    { path: "/", icon: Home, label: "Start" },
    { path: "/profile", icon: User, label: "Profile" },
    { path: "/skills", icon: Code, label: "Skills" },
    { path: "/projects", icon: Target, label: "Projects" },
    { path: "/experience", icon: Briefcase, label: "Experience" },
    { path: "/certifications", icon: Trophy, label: "Achievements" },
    { path: "/contact", icon: Mail, label: "Contact" },
  ];

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white relative overflow-hidden">
      <ParticleBackground />
      
      {/* Cyberpunk grid background */}
      <div className="fixed inset-0 opacity-20 pointer-events-none">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(0, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0, 255, 255, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-[#0a0a0f]/80 border-b border-cyan-500/30">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center gap-2 group">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/80 transition-all">
                <span className="font-bold text-lg">MD</span>
              </div>
              <div>
                <div className="font-bold text-cyan-400">Mohit Dhiman</div>
                <div className="text-xs text-gray-400">Software Developer</div>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-2">
              {navItems.map((item) => {
                const Icon = item.icon;
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group"
                  >
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all ${
                        isActive
                          ? "bg-cyan-500/20 text-cyan-400 shadow-lg shadow-cyan-500/30"
                          : "text-gray-400 hover:text-cyan-400 hover:bg-cyan-500/10"
                      }`}
                    >
                      <Icon size={18} />
                      <span className="text-sm font-medium">{item.label}</span>
                    </motion.div>
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-cyan-500 to-purple-500"
                      />
                    )}
                  </Link>
                );
              })}
            </div>

            {/* Download Resume Button */}
            <motion.a
              href="/resume.pdf"
              download="Mohit_Dhiman_Resume.pdf"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-medium text-sm shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all"
            >
              Download Resume
            </motion.a>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      <nav className="fixed bottom-0 left-0 right-0 z-50 md:hidden backdrop-blur-md bg-[#0a0a0f]/90 border-t border-cyan-500/30">
        <div className="flex justify-around py-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = location.pathname === item.path;
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex flex-col items-center gap-1 px-3 py-2 rounded-lg transition-all ${
                  isActive ? "text-cyan-400" : "text-gray-400"
                }`}
              >
                <Icon size={20} />
                <span className="text-xs">{item.label}</span>
              </Link>
            );
          })}
        </div>
      </nav>

      {/* Main Content */}
      <main className="relative z-10 pt-20 pb-20 md:pb-8">
        <Outlet />
      </main>
    </div>
  );
}