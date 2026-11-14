import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Linkedin,
  Mail,
  Download,
  Github,
  Sparkles,
  ArrowUpRight,
  Smartphone,
  Award,
  Code2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import akashPhoto from "@/assets/shaban.jpg";

// Resume path (Vite / GitHub Pages safe)
const RESUME_PATH = `${import.meta.env.BASE_URL}resume/shaban_flutter_3y.pdf`;

const ROLES = [
  "Senior Flutter Developer",
  "Cross-Platform Mobile Architect",
  "AI & FinTech App Specialist",
  "iOS & Android Store Publisher",
];

const LIVE_STORE_APPS = [
  {
    name: "Bellokey",
    tag: "AI Real Estate",
    icon: "/images/bellokey_icon.jpg",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.thcfze.bellokey&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/in/app/bellokey/id6759926827",
    color: "#8b5cf6",
  },
  {
    name: "Blingram",
    tag: "Live & Social",
    icon: "/images/blingram_icon.jpg",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.thcfze.blingram&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/in/app/blingram/id6753362321",
    color: "#10b981",
  },
  {
    name: "KoboTrade",
    tag: "FinTech Wallet",
    icon: "/images/kobotrade_icon.jpg",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.org.KoboTrade&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/kobotrade/id6448278099",
    color: "#3b82f6",
  },
  {
    name: "SomRemit",
    tag: "Global Remittance",
    icon: "/images/somremit_icon.jpg",
    playUrl:
      "https://play.google.com/store/apps/details?id=com.org.Somremit&hl=en_IN",
    appStoreUrl: "https://apps.apple.com/us/app/somremit/id6677023765",
    color: "#06b6d4",
  },
];

const Hero = () => {
  const { toast } = useToast();
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setRoleIndex((prev) => (prev + 1) % ROLES.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleLinkedIn = () =>
    window.open(
      "https://www.linkedin.com/in/shaikhshabanali/",
      "_blank",
      "noopener,noreferrer"
    );

  const handleGitHub = () =>
    window.open(
      "https://github.com/Shabanshaikhramajn",
      "_blank",
      "noopener,noreferrer"
    );

  const handleContact = () => {
    const section = document.getElementById("contact");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleScrollToProjects = () => {
    const section = document.getElementById("projects");
    if (section) section.scrollIntoView({ behavior: "smooth" });
  };

  const handleDownloadResume = () => {
    const link = document.createElement("a");
    link.href = RESUME_PATH;
    link.download = "Shaban_flutter_3y.pdf";
    link.rel = "noopener noreferrer";

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    toast({
      title: "📄 Resume Downloaded",
      description: "Your resume has been downloaded successfully.",
    });
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.14,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 22 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.55,
        ease: "easeOut",
      },
    },
  };

  return (
    <section
      id="hero"
      className="min-h-[88vh] flex items-center px-4 sm:px-6 md:px-16 lg:px-24 pt-24 pb-12 bg-transparent transition-colors overflow-hidden"
    >
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center"
      >
        {/* LEFT CONTENT */}
        <div className="lg:col-span-7 text-center lg:text-left">
          {/* Availability Pill */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/25 text-blue-400 text-xs sm:text-sm font-medium mb-5"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Available for Flutter & Mobile Engineering Roles
          </motion.div>

          <motion.h1
            variants={itemVariants}
            className="text-3xl sm:text-5xl xl:text-6xl font-extrabold mb-3 text-gray-900 dark:text-slate-100 tracking-tight"
          >
            Hey, I'm{" "}
            <span className="bg-gradient-to-r from-orange-400 via-amber-400 to-blue-400 bg-clip-text text-transparent">
              Shaban Shaikh
            </span>
          </motion.h1>

          {/* Animated Role Switcher */}
          <motion.div
            variants={itemVariants}
            className="h-9 sm:h-10 flex items-center justify-center lg:justify-start mb-5"
          >
            <AnimatePresence mode="wait">
              <motion.h2
                key={roleIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.35 }}
                className="text-base sm:text-xl md:text-2xl font-semibold tracking-wide text-blue-500 dark:text-cyan-400 flex items-center gap-2"
              >
                <Sparkles className="w-5 h-5 text-orange-400 shrink-0" />
                {ROLES[roleIndex]}
              </motion.h2>
            </AnimatePresence>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 dark:text-slate-300 max-w-xl mb-4 leading-relaxed mx-auto lg:mx-0 text-sm sm:text-base"
          >
            I specialize in building high-performance, scalable, and visually
            engaging mobile & web applications using <b>Flutter</b>, with deep
            expertise in <b>BLoC</b>, <b>Provider</b>, <b>GetX</b>, and{" "}
            <b>Riverpod</b>.
          </motion.p>

          <motion.p
            variants={itemVariants}
            className="text-gray-700 dark:text-slate-400 max-w-xl mb-6 leading-relaxed mx-auto lg:mx-0 text-sm sm:text-base"
          >
            Creator of production apps across <b>AI PropTech (Bellokey)</b>,{" "}
            <b>Live Streaming & Social (Blingram)</b>, and{" "}
            <b>Cross-Border FinTech (KoboTrade & SomRemit)</b> deployed on both
            Google Play Store and Apple App Store.
          </motion.p>

          {/* Interactive Live Store Apps Dock */}
          <motion.div
            variants={itemVariants}
            className="mb-7 p-3.5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-md max-w-xl mx-auto lg:mx-0"
          >
            <div className="flex items-center justify-between mb-2.5 px-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                <Smartphone className="w-3.5 h-3.5 text-emerald-400" />
                Published Apps on Play Store & App Store
              </span>
              <button
                onClick={handleScrollToProjects}
                className="text-xs text-blue-400 hover:text-blue-300 font-medium flex items-center gap-1 transition-colors"
              >
                View All
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
              {LIVE_STORE_APPS.map((app) => (
                <motion.div
                  key={app.name}
                  whileHover={{ y: -4, scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() =>
                    window.open(app.playUrl, "_blank", "noopener,noreferrer")
                  }
                  className="group cursor-pointer flex items-center gap-2.5 p-2 rounded-xl bg-slate-800/70 hover:bg-slate-800 border border-slate-700/70 hover:border-blue-500/50 transition-all"
                >
                  <img
                    src={app.icon}
                    alt={app.name}
                    className="w-9 h-9 rounded-lg object-cover shrink-0 shadow-md"
                  />
                  <div className="min-w-0 text-left">
                    <p className="text-xs font-bold text-slate-100 truncate group-hover:text-blue-400 transition-colors">
                      {app.name}
                    </p>
                    <p className="text-[10px] text-slate-400 truncate">
                      {app.tag}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* CTA BUTTONS */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap justify-center lg:justify-start gap-3.5 mt-4"
          >
            <Button
              onClick={handleDownloadResume}
              className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-full flex items-center shadow-lg shadow-orange-500/25 transform transition-transform hover:scale-105"
            >
              <Download className="mr-2 w-4 h-4" /> Resume
            </Button>

            <Button
              onClick={handleLinkedIn}
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-full flex items-center shadow-lg shadow-blue-600/25 transform transition-transform hover:scale-105"
            >
              <Linkedin className="mr-2 w-4 h-4" /> LinkedIn
            </Button>

            <Button
              onClick={handleGitHub}
              variant="outline"
              className="px-6 py-3 rounded-full flex items-center border-slate-700 hover:border-blue-500/60 transform transition-transform hover:scale-105"
            >
              <Github className="mr-2 w-4 h-4" /> GitHub
            </Button>

            <Button
              onClick={handleContact}
              className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-full flex items-center shadow-lg shadow-cyan-600/25 transform transition-transform hover:scale-105"
            >
              <Mail className="mr-2 w-4 h-4" /> Contact
            </Button>
          </motion.div>
        </div>

        {/* RIGHT IMAGE WITH FLOATING INTERACTIVE BADGES */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="lg:col-span-5 flex justify-center lg:justify-end mt-6 lg:mt-0 relative"
        >
          <motion.div
            animate={{ y: [0, -14, 0] }}
            transition={{
              duration: 4.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="relative"
          >
            {/* Glowing backdrop aura */}
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-500/25 via-purple-500/20 to-orange-400/25 rounded-[2rem] blur-2xl -z-10" />

            <div
              className="relative w-60 sm:w-72 md:w-80 lg:w-[360px]
              h-72 sm:h-88 md:h-96 lg:h-[430px]
              rounded-3xl bg-white/10 dark:bg-slate-900/80 p-3 shadow-2xl border border-white/15 overflow-hidden group"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-orange-400/20 via-transparent to-blue-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none" />
              <img
                src={akashPhoto}
                alt="Shaban Shaikh"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
              />
            </div>

            {/* Floating Badge 1: Experience */}
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -left-4 sm:-left-8 top-8 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/40 flex items-center justify-center text-blue-400">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">3+ Years</p>
                <p className="text-[10px] text-slate-400">Flutter Experience</p>
              </div>
            </motion.div>

            {/* Floating Badge 2: Live Apps */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 3.8, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -right-3 sm:-right-6 bottom-10 bg-slate-900/90 backdrop-blur-md border border-slate-700/80 px-3.5 py-2.5 rounded-2xl shadow-xl flex items-center gap-2.5 z-20"
            >
              <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
                <Code2 className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-white">8+ Production Apps</p>
                <p className="text-[10px] text-slate-400">Play Store & iOS</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
