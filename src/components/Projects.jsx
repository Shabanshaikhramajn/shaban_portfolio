import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import ImageGalleryModal from "@/components/ui/ImageGalleryModal";

const projects = [
  
   {
    title: "Shop App",
    subtitle: "Beauty and Cosmetics E-commerce",
    description:
      "Ecommerce app for beauty products with Flutter. Features product browsing, cart management, and secure checkout. Integrated Stripe for payments and Firebase for real-time updates and user authentication.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider"],
    images: [
      "/images/shop_app1.png",
      "/images/shop_app2.png",
      "/images/shop_app3.png",
      "/images/shop_app4.png",
      "/images/shop_app5.png",
      "/images/shop_app6.png",
    ],
    links: [
      // {
      //   label: "Play Store",
      //   url: "https://play.google.com/store/apps/details?id=com.org.KoboTrade&hl=en_IN",
      // },
    ],
    githubUrl: "https://github.com/Shabanshaikhramajn/store_app_flutter.git",
    accent: "#3b82f6",
    accentMuted: "rgba(59,130,246,0.12)",
  },
       {
    title: "AI - Suggestions App",
    subtitle: "AI based suggestions app for all kind of hot topics",
    description:
  "An AI-powered chat application that delivers real-time conversations and intelligent suggestions on trending and hot topics. Leveraging advanced AI models, the app provides context-aware responses, personalized recommendations",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Bloc", "Gemini"],
    images: [
      "/images/sugg_1.png",
      "/images/sugg_2.png",
      "/images/sugg_3.png",
      "/images/sugg_4.png",
      "/images/sugg_5.png",
    ],
    links: [
      // {
      //   label: "Play Store",
      //   url: "https://play.google.com/store/apps/details?id=com.org.KoboTrade&hl=en_IN",
      // },
    ],
    githubUrl: "https://github.com/Shabanshaikhramajn/AI_suggestions_app.git",
    accent: "#3b82f6",
    accentMuted: "rgba(59,130,246,0.12)",
  },
  {
    title: "KoboTrade",
    subtitle: "International Payments · Canada → Nigeria",
    description:
      "Cross-platform mobile app enabling international wallet-based payments. Integrated Paga payment gateway with push notifications, biometric auth, KYC verification, and WebSocket real-time updates.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider"],
    images: [
      "/images/kobo_dashboard.jpeg",
      "/images/kobo_login.jpeg",
      "/images/kobo_sendmoney.jpeg",
    ],
    links: [
      {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.org.KoboTrade&hl=en_IN",
      },
       {
        label: "App Store",
        url: "https://apps.apple.com/us/app/kobotrade/id6448278099",
      },
    ],
    githubUrl: null,
    accent: "#3b82f6",
    accentMuted: "rgba(59,130,246,0.12)",
  },
     {
    title: "Ecommerce App",
    subtitle: "Clothing shopping app for children and womens",
    description:
  "A feature-rich fashion e-commerce app for men, women, and children. Includes secure authentication, product catalog browsing, ratings & reviews, cart management, wishlist functionality, and a user-friendly shopping experience powered by Flutter and Firebase.",
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider"],
    images: [
      "/images/ecom_1.png",
      "/images/ecom_2.png",
      "/images/ecom_3.png",
      "/images/ecom_4.png",
      "/images/ecom_5.png",
    ],
    links: [
      // {
      //   label: "Play Store",
      //   url: "https://play.google.com/store/apps/details?id=com.org.KoboTrade&hl=en_IN",
      // },
    ],
    githubUrl: "https://github.com/Shabanshaikhramajn/Ecommerce_Flutter.git",
    accent: "#f9a8d4",
accentMuted: "rgba(249,168,212,0.12)",
  },
  {
    title: "Online Groceries Shopping",
    subtitle: "Online Groceries ordering",
   description:
  "An end-to-end online grocery shopping platform developed using Swift for iOS and Node.js for backend services. The app enables users to browse products, manage carts, place orders, and track order status in real time.",
    technologies: ["Swift", "SwiftUI", "XCode", "Node.Js"],
    images: [
      "/images/online_1.png",
       "/images/online_2.png",
        "/images/online_3.png",
         "/images/online_4.png",
          "/images/online_5.png",
           "/images/online_6.png",
            "/images/online_7.png",
              "/images/online_8.png",
               "/images/online_9.png",
    ],
    links: [
      // {
      //   label: "Play Store",
      //   url: "https://play.google.com/store/apps/details?id=com.app.eghczqwwknkvlouzpdcrfihlasbajenuymtvosqjbxgyf&hl=en_IN",
      // },
    ],
    githubUrl: "https://github.com/Shabanshaikhramajn/OnlineGroceries_Swift.git",
    accent: "#22c55e",
accentMuted: "rgba(34,197,94,0.12)",
  },
  {
    title: "SomRemit",
    subtitle: "Cross-Border Remittance · Europe → Asia",
    description:
      "Multi-currency remittance platform supporting transfers across European and Asian corridors. Integrated Payceler, Google Pay, and Apple Pay with Sumsub KYC biometric validation.",
    technologies: ["Flutter", "Dart", "BLoC", "GetX", "REST API"],
    images: [
      "/images/som_register.jpeg",
      "/images/som_send.jpeg",
      "/images/som_benefi.jpeg"
  
    ],
    links: [
       {
        label: "Play Store",
        url: "https://play.google.com/store/apps/details?id=com.org.Somremit&hl=en_IN",
      },
       {
        label: "App Store",
        url: "https://apps.apple.com/us/app/somremit/id6677023765",
      },
    ],
    githubUrl: null,
    aaccent: "#3b82f6",
    accentMuted: "rgba(139,92,246,0.12)",
  },
];

const ImageFan = ({
  images,
  accent,
  openGallery,
}) => {
  const [active, setActive] = useState(0);

  const offsets = [
    { rotate: -6, x: -28, z: 0 },
    { rotate: -2, x: -10, z: 1 },
    { rotate: 2,  x: 10,  z: 2 },
    { rotate: 6,  x: 28,  z: 3 },
  ];

  return (
    <div
      style={{
        position: "relative",
        height: 320,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: 16,
      }}
    >
      {images.slice(0, 3).map((src, i) => {
        const o = offsets[i] || offsets[offsets.length - 1];
        const isActive = i === active;
        return (
      <motion.div
  key={i}
  drag="x"
  dragConstraints={{ left: 0, right: 0 }}
  onDragEnd={(event, info) => {
    if (info.offset.x > 50) {
      setActive((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    } else if (info.offset.x < -50) {
      setActive((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }
  }}
onClick={() => {
  setActive(i);
  openGallery(images, i);
}}
  animate={{
    rotate: isActive ? 0 : o.rotate,
    x: isActive ? 0 : o.x,
    y: isActive ? -12 : 0,
    scale: isActive ? 1.08 : 0.92,
    zIndex: isActive ? 10 : o.z,
  }}
  transition={{
    type: "spring",
    stiffness: 300,
    damping: 22,
  }}
>
            <img
  src={src}
  alt={`screenshot ${i + 1}`}
  style={{
    height: "100%",
    width: "auto",
    display: "block",
    objectFit: "cover",
    borderRadius: "10px", // rounded corners
    boxShadow: "0 10px 30px rgba(0,0,0,0.25)",
  }}
/>
          </motion.div>
        );
      })}

      {/* dot indicators */}
      <div
        style={{
          position: "absolute",
          bottom: -4,
          display: "flex",
          gap: 6,
          zIndex: 20,
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={() => setActive(i)}
            style={{
              width: i === active ? 20 : 6,
              height: 6,
              borderRadius: 3,
              background: i === active ? accent : "rgba(255,255,255,0.25)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s ease",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({
  project,
  index,
  openGallery,
}) => {
  const { toast } = useToast();

  const handleLink = (url) => {
    if (url) {
      window.open(url, "_blank");
    } else {
      toast({
        title: "🚧 Coming Soon",
        description: "This link isn't available yet.",
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.12 }}
      style={{
        position: "relative",
        borderRadius: 20,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.08)",
        backdropFilter: "blur(12px)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      whileHover={{
        boxShadow: `0 0 0 1px ${project.accent}55, 0 24px 64px rgba(0,0,0,0.4)`,
      }}
    >
      {/* top accent line */}
      <div
        style={{
          height: 2,
          background: `linear-gradient(90deg, ${project.accent}, transparent)`,
        }}
      />

      {/* image fan */}
      <div
        style={{
          background: `radial-gradient(ellipse at 50% 110%, ${project.accentMuted} 0%, transparent 70%)`,
         padding: "20px 24px 20px",
        }}
      >
       <ImageFan
  images={project.images}
  accent={project.accent}
  openGallery={openGallery}
/>
      </div>

      {/* divider */}
      <div style={{ height: "1px", background: "rgba(255,255,255,0.06)", margin: "0 24px" }} />

      {/* content */}
      <div style={{ padding: "20px 24px 24px", display: "flex", flexDirection: "column", flex: 1 }}>
        <div style={{ marginBottom: 12 }}>
          <p
            style={{
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: project.accent,
              marginBottom: 4,
            }}
          >
            {project.subtitle}
          </p>
          <h3
            style={{
              fontSize: 22,
              fontWeight: 700,
              color: "#f1f5f9",
              margin: 0,
              letterSpacing: "-0.02em",
            }}
          >
            {project.title}
          </h3>
        </div>

        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.7,
            color: "rgba(255,255,255,0.5)",
            marginBottom: 16,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* tech tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 6, marginBottom: 18 }}>
          {project.technologies.map((tech, i) => (
            <span
              key={i}
              style={{
                fontSize: 11,
                fontWeight: 500,
                padding: "4px 10px",
                borderRadius: 20,
                background: project.accentMuted,
                color: project.accent,
                border: `1px solid ${project.accent}33`,
                letterSpacing: "0.02em",
              }}
            >
              {tech}
            </span>
          ))}
        </div>

        {/* links */}
        <div style={{ display: "flex", gap: 10 }}>
          {project.links.map((link, i) => (
            <button
              key={i}
              onClick={() => handleLink(link.url)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 18px",
                borderRadius: 10,
                background: `linear-gradient(135deg, ${project.accent}, ${project.accent}bb)`,
                color: "#fff",
                fontSize: 13,
                fontWeight: 600,
                border: "none",
                cursor: "pointer",
                transition: "opacity 0.2s, transform 0.1s",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
              onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
            >
              <ExternalLink size={14} />
              {link.label}
              <ArrowUpRight size={13} />
            </button>
          ))}

          {project.githubUrl && (
            <button
              onClick={() => handleLink(project.githubUrl)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 6,
                padding: "9px 18px",
                borderRadius: 10,
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.7)",
                fontSize: 13,
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.12)",
                cursor: "pointer",
              }}
            >
              <Github size={14} />
              Source
            </button>
          )}

          {project.links.length === 0 && !project.githubUrl && (
            <span
              style={{
                fontSize: 12,
                color: "rgba(255,255,255,0.3)",
                padding: "9px 0",
                fontStyle: "italic",
              }}
            >
              Links coming soon
            </span>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  
const [galleryOpen, setGalleryOpen] = useState(false);
const [galleryImages, setGalleryImages] = useState([]);
const [selectedImage, setSelectedImage] = useState(0);
  return (
    <section
      id="projects"
      style={{ padding: "20px 16px 50px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        {/* header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 64 }}
        >
          <p
            style={{
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.15em",
              textTransform: "uppercase",
              color: "#3b82f6",
              marginBottom: 12,
            }}
          >
            Portfolio
          </p>
          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f1f5f9",
              margin: "0 0 16px",
            }}
          >
            Featured Projects
          </h2>
          <div
            style={{
              width: 48,
              height: 3,
              borderRadius: 2,
              background: "linear-gradient(90deg, #3b82f6, #06b6d4)",
              margin: "0 auto 20px",
            }}
          />
          <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 15, maxWidth: 500, margin: "0 auto" }}>
            Real-world Flutter applications deployed on Play Store & App Store
          </p>
        </motion.div>

        {/* grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
            gap: 24,
          }}
        >
          {projects.map((project, i) => (
            <ProjectCard
  key={i}
  project={project}
  index={i}
  openGallery={(images, index) => {
    setGalleryImages(images);
    setSelectedImage(index);
    setGalleryOpen(true);
  }}
/>
          ))}
        </div>
      </div>
      {galleryOpen && galleryImages.length > 0 && (
  <ImageGalleryModal
    isOpen={galleryOpen}
    images={galleryImages}
    currentIndex={selectedImage}
    setCurrentIndex={setSelectedImage}
    onClose={() => setGalleryOpen(false)}
  />
)}
    </section>
  );
};

export default Projects;
