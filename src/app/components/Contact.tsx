import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send, Linkedin, Github } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "dhimanmohit588@gmail.com",
      href: "mailto:dhimanmohit588@gmail.com",
      color: "cyan",
    },
    {
      icon: Phone,
      label: "Mobile",
      value: "+91 9450171160",
      href: "tel:+919450171160",
      color: "purple",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "Phagwara, Punjab",
      href: "#",
      color: "pink",
    },
  ];

  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/mohit-dhiman-74b7231ab/",
      color: "cyan",
    },
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/mohit-dhiman-cs",
      color: "purple",
    },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // In a real application, you would send this data to a backend
    alert("Message sent! (This is a demo)");
    setFormData({ name: "", email: "", message: "" });
  };

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
            CONTACT TERMINAL
          </motion.h1>
          <div className="w-24 h-1 bg-gradient-to-r from-cyan-500 to-purple-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Initiate Communication Protocol</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="relative mb-8">
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-purple-500/10 rounded-lg blur-xl"></div>
              <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-cyan-500/30 rounded-lg p-8">
                <h2 className="text-2xl font-bold text-cyan-400 mb-6">Get In Touch</h2>
                <p className="text-gray-300 mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. 
                  Feel free to reach out through any of the channels below.
                </p>

                <div className="space-y-4">
                  {contactInfo.map((info, index) => {
                    const Icon = info.icon;
                    return (
                      <motion.a
                        key={info.label}
                        href={info.href}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        whileHover={{ x: 5 }}
                        className="flex items-center gap-4 p-4 rounded-lg bg-cyan-500/5 border border-cyan-500/20 hover:border-cyan-500/50 transition-all group"
                      >
                        <div className={`w-12 h-12 rounded-lg bg-${info.color}-500/20 border border-${info.color}-500/50 flex items-center justify-center group-hover:bg-${info.color}-500/30 transition-all`}>
                          <Icon className={`text-${info.color}-400`} size={20} />
                        </div>
                        <div>
                          <div className="text-sm text-gray-400">{info.label}</div>
                          <div className="text-white font-medium">{info.value}</div>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>

                {/* Social Links */}
                <div className="mt-8 pt-8 border-t border-cyan-500/20">
                  <h3 className="text-lg font-bold text-purple-400 mb-4">Connect on Social</h3>
                  <div className="flex gap-4">
                    {socialLinks.map((social) => {
                      const Icon = social.icon;
                      return (
                        <motion.a
                          key={social.label}
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          whileHover={{ scale: 1.1, rotate: 5 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-14 h-14 rounded-lg bg-${social.color}-500/20 border border-${social.color}-500/50 flex items-center justify-center text-${social.color}-400 hover:bg-${social.color}-500/30 transition-all hover:shadow-lg hover:shadow-${social.color}-500/50`}
                        >
                          <Icon size={24} />
                        </motion.a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="relative"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-pink-500/10 rounded-lg blur-xl"></div>
            <div className="relative bg-[#0a0a0f]/80 backdrop-blur-sm border border-purple-500/30 rounded-lg p-8">
              <h2 className="text-2xl font-bold text-purple-400 mb-6">Send Message</h2>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <span className="text-cyan-400">&gt;</span> Your Name
                  </label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-cyan-500/30 rounded-lg text-white placeholder-gray-600 focus:border-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500/20 transition-all font-mono"
                    placeholder="Enter your name..."
                  />
                </div>

                {/* Email Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <span className="text-purple-400">&gt;</span> Email Address
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-purple-500/30 rounded-lg text-white placeholder-gray-600 focus:border-purple-500 focus:outline-none focus:ring-2 focus:ring-purple-500/20 transition-all font-mono"
                    placeholder="your.email@example.com"
                  />
                </div>

                {/* Message Input */}
                <div>
                  <label className="block text-sm font-medium text-gray-400 mb-2">
                    <span className="text-pink-400">&gt;</span> Message
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={6}
                    className="w-full px-4 py-3 bg-[#0a0a0f]/50 border border-pink-500/30 rounded-lg text-white placeholder-gray-600 focus:border-pink-500 focus:outline-none focus:ring-2 focus:ring-pink-500/20 transition-all resize-none font-mono"
                    placeholder="Type your message here..."
                  />
                </div>

                {/* Submit Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full px-6 py-4 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg font-bold text-lg shadow-lg shadow-cyan-500/50 hover:shadow-cyan-500/80 transition-all flex items-center justify-center gap-2 group"
                >
                  <span>SEND MESSAGE</span>
                  <Send className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" size={20} />
                </motion.button>
              </form>

              {/* Terminal Effect */}
              <div className="mt-6 p-4 bg-black/30 border border-green-500/30 rounded font-mono text-xs text-green-400">
                <div className="flex items-center gap-2 mb-2">
                  <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></span>
                  <span>System Status: ONLINE</span>
                </div>
                <div>&gt; Ready to receive transmission...</div>
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
