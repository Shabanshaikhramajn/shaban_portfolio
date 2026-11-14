import React, { useState, useRef } from "react";
import {
  motion,
  AnimatePresence,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion";
import {
  Github,
  ArrowUpRight,
  Sparkles,
  ChevronLeft,
  ChevronRight,
  Maximize2,
  CheckCircle2,
  Layers,
  Smartphone,
} from "lucide-react";
import { useToast } from "@/components/ui/use-toast";
import ImageGalleryModal from "@/components/ui/ImageGalleryModal";

const PlayStoreIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 0 1-.61-.92V2.734a1 1 0 0 1 .609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 0 1 0 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
  </svg>
);

const AppStoreIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.33c.64-.78 1.08-1.86.96-2.94-.93.04-2.06.62-2.72 1.4-.58.68-1.1 1.79-.96 2.84 1.04.08 2.08-.52 2.72-1.3z" />
  </svg>
);

export const projects = [
  {
    title: "Bellokey",
    subtitle: "AI-Powered Real Estate Super-App · Dubai & Global",
    category: "AI & PropTech",
    liveStore: true,
    developer: "THC FZE",
    icon: "/images/bellokey_icon.jpg",
    badge: "AI Super-App",
    description:
      "An AI-powered real estate super-app for buyers, renters, agents, and property investors across 10 languages with full Arabic RTL support. Features 'Ask Bello' conversational AI search, AI property valuation & ROI analysis, Voice-to-Listing for agents, heat maps, polygon area search, and in-app voice & video calls.",
    features: [
      "Ask Bello Conversational AI Search",
      "AI Valuation, Fraud Risk & Net ROI",
      "Voice-to-Listing for Real Estate Agents",
      "Polygon Map Search & Price Heatmaps",
      "In-App Voice/Video Calls & Scheduling",
      "10 Languages with Full Arabic RTL",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Conversational AI",
      "BLoC",
      "Google Maps",
      "WebRTC",
      "Firebase",
      "REST API",
    ],
    images: [
      "/images/bellokey_3.jpg",
      "/images/bellokey_5.jpg",
      "/images/bellokey_4.jpg",
      "/images/bellokey_6.jpg",
      "/images/bellokey_7.jpg",
      "/images/bellokey_1.jpg",
      "/images/bellokey_2.jpg",
    ],
    links: [
      {
        label: "Play Store",
        type: "play",
        url: "https://play.google.com/store/apps/details?id=com.thcfze.bellokey&hl=en_IN",
      },
      {
        label: "App Store",
        type: "apple",
        url: "https://apps.apple.com/in/app/bellokey/id6759926827",
      },
    ],
    githubUrl: null,
    accent: "#8b5cf6",
    accentSecondary: "#ec4899",
    accentMuted: "rgba(139,92,246,0.14)",
  },
  {
    title: "Blingram",
    subtitle: "Live Streaming, Social Media & Creator Monetization",
    category: "Social & Media",
    liveStore: true,
    developer: "THC FZE",
    icon: "/images/blingram_icon.jpg",
    badge: "5.0 ★ Rated",
    description:
      "Creator-first social networking platform combining broadcast-quality live streaming, virtual gifting monetization, 24-hour disappearing stories, unlimited group chats, and crystal-clear HD video & voice calls with real-time AR filters and creator analytics.",
    features: [
      "HD Live Streaming & Stream Overlays",
      "Animated Virtual Gifting & Creator Earnings",
      "Crystal-Clear HD Video & Voice Calls",
      "24-Hour Stories with Filters & Stickers",
      "Unlimited Group Chats & Voice Notes",
      "Live Creator Analytics & Multi-Device Sync",
    ],
    technologies: [
      "Flutter",
      "Dart",
      "Live Streaming",
      "WebRTC",
      "WebSockets",
      "BLoC",
      "Firebase",
      "In-App Purchases",
    ],
    images: [
      "/images/blingram_1.jpg",
      "/images/blingram_2.jpg",
      "/images/blingram_3.jpg",
      "/images/blingram_4.jpg",
      "/images/blingram_5.jpg",
      "/images/blingram_6.jpg",
      "/images/blingram_7.jpg",
    ],
    links: [
      {
        label: "Play Store",
        type: "play",
        url: "https://play.google.com/store/apps/details?id=com.thcfze.blingram&hl=en_IN",
      },
      {
        label: "App Store",
        type: "apple",
        url: "https://apps.apple.com/in/app/blingram/id6753362321",
      },
    ],
    githubUrl: null,
    accent: "#10b981",
    accentSecondary: "#eab308",
    accentMuted: "rgba(16,185,129,0.14)",
  },
  {
    title: "KoboTrade",
    subtitle: "International Payments · Canada → Nigeria",
    category: "FinTech",
    liveStore: true,
    developer: "Kobotrade Inc",
    icon: "/images/kobotrade_icon.jpg",
    badge: "FINTRAC Regulated",
    description:
      "Cross-platform mobile app enabling international wallet-based payments. Integrated Paga payment gateway with push notifications, biometric auth, KYC verification, and WebSocket real-time updates.",
    features: [
      "Multi-Currency CAD & NGN Wallets",
      "Real-Time Exchange Rates & Transfers",
      "Biometric Security & KYC Verification",
      "Instant Beneficiary Management",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider", "WebSockets"],
    images: [
      "/images/kobo_dashboard.jpeg",
      "/images/kobo_login.jpeg",
      "/images/kobo_sendmoney.jpeg",
    ],
    links: [
      {
        label: "Play Store",
        type: "play",
        url: "https://play.google.com/store/apps/details?id=com.org.KoboTrade&hl=en_IN",
      },
      {
        label: "App Store",
        type: "apple",
        url: "https://apps.apple.com/us/app/kobotrade/id6448278099",
      },
    ],
    githubUrl: null,
    accent: "#3b82f6",
    accentSecondary: "#06b6d4",
    accentMuted: "rgba(59,130,246,0.14)",
  },
  {
    title: "SomRemit",
    subtitle: "Cross-Border Remittance · Europe → Asia",
    category: "FinTech",
    liveStore: true,
    developer: "Well Remit LTD",
    icon: "/images/somremit_icon.jpg",
    badge: "UK Registered",
    description:
      "Multi-currency remittance platform supporting transfers across European and Asian corridors. Integrated Payceler, Google Pay, and Apple Pay with Sumsub KYC biometric validation.",
    features: [
      "Google Pay & Apple Pay Integration",
      "Sumsub KYC Biometric Verification",
      "Live Transfer Tracking & Notifications",
      "Referral Bonus & Multi-Corridor Support",
    ],
    technologies: ["Flutter", "Dart", "BLoC", "GetX", "REST API", "Apple/Google Pay"],
    images: [
      "/images/som_register.jpeg",
      "/images/som_send.jpeg",
      "/images/som_benefi.jpeg",
    ],
    links: [
      {
        label: "Play Store",
        type: "play",
        url: "https://play.google.com/store/apps/details?id=com.org.Somremit&hl=en_IN",
      },
      {
        label: "App Store",
        type: "apple",
        url: "https://apps.apple.com/us/app/somremit/id6677023765",
      },
    ],
    githubUrl: null,
    accent: "#06b6d4",
    accentSecondary: "#3b82f6",
    accentMuted: "rgba(6,182,212,0.14)",
  },
  {
    title: "AI - Suggestions App",
    subtitle: "AI-Powered Real-Time Topic & Chat Assistant",
    category: "AI & PropTech",
    liveStore: false,
    icon: null,
    badge: "Gemini AI",
    description:
      "An AI-powered chat application that delivers real-time conversations and intelligent suggestions on trending and hot topics. Leveraging advanced Gemini AI models, the app provides context-aware responses and personalized recommendations.",
    features: [
      "Context-Aware Gemini AI Conversations",
      "Trending Topic Smart Prompts",
      "Clean BLoC State Architecture",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Bloc", "Gemini"],
    images: [
      "/images/sugg_1.png",
      "/images/sugg_2.png",
      "/images/sugg_3.png",
      "/images/sugg_4.png",
      "/images/sugg_5.png",
    ],
    links: [],
    githubUrl: "https://github.com/Shabanshaikhramajn/AI_suggestions_app.git",
    accent: "#6366f1",
    accentSecondary: "#a855f7",
    accentMuted: "rgba(99,102,241,0.14)",
  },
  {
    title: "Shop App",
    subtitle: "Beauty and Cosmetics E-Commerce",
    category: "E-Commerce",
    liveStore: false,
    icon: null,
    badge: "Stripe Integrated",
    description:
      "E-commerce app for beauty products built with Flutter. Features product browsing, cart management, and secure checkout. Integrated Stripe for payments and Firebase for real-time updates and user authentication.",
    features: [
      "Stripe Checkout & Payment Processing",
      "Real-Time Cart & Inventory Sync",
      "Firebase Auth & Cloud Firestore",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider", "Stripe"],
    images: [
      "/images/shop_app1.png",
      "/images/shop_app2.png",
      "/images/shop_app3.png",
      "/images/shop_app4.png",
      "/images/shop_app5.png",
      "/images/shop_app6.png",
    ],
    links: [],
    githubUrl: "https://github.com/Shabanshaikhramajn/store_app_flutter.git",
    accent: "#f43f5e",
    accentSecondary: "#fb7185",
    accentMuted: "rgba(244,63,94,0.14)",
  },
  {
    title: "Ecommerce App",
    subtitle: "Fashion & Lifestyle Shopping Platform",
    category: "E-Commerce",
    liveStore: false,
    icon: null,
    badge: "Full-Stack Store",
    description:
      "A feature-rich fashion e-commerce app for men, women, and children. Includes secure authentication, product catalog browsing, ratings & reviews, cart management, wishlist functionality, and a smooth shopping experience.",
    features: [
      "Multi-Category Catalog & Search Filters",
      "Wishlist, Ratings & Customer Reviews",
      "Order Management & Secure Auth",
    ],
    technologies: ["Flutter", "Dart", "Firebase", "REST API", "Provider"],
    images: [
      "/images/ecom_1.png",
      "/images/ecom_2.png",
      "/images/ecom_3.png",
      "/images/ecom_4.png",
      "/images/ecom_5.png",
    ],
    links: [],
    githubUrl: "https://github.com/Shabanshaikhramajn/Ecommerce_Flutter.git",
    accent: "#ec4899",
    accentSecondary: "#f472b6",
    accentMuted: "rgba(236,72,153,0.14)",
  },
  {
    title: "Online Groceries Shopping",
    subtitle: "Native iOS Grocery Ordering & Delivery",
    category: "E-Commerce",
    liveStore: false,
    icon: null,
    badge: "SwiftUI + Node.js",
    description:
      "An end-to-end online grocery shopping platform developed using SwiftUI for iOS and Node.js for backend services. Enables users to browse fresh groceries, manage carts, place orders, and track order status in real time.",
    features: [
      "Native SwiftUI Animations & Layouts",
      "Node.js REST Backend Integration",
      "Real-Time Order Status Tracking",
    ],
    technologies: ["Swift", "SwiftUI", "Xcode", "Node.js"],
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
    links: [],
    githubUrl: "https://github.com/Shabanshaikhramajn/OnlineGroceries_Swift.git",
    accent: "#22c55e",
    accentSecondary: "#10b981",
    accentMuted: "rgba(34,197,94,0.14)",
  },
];

const ImageFan = ({ images, accent, projectTitle, openGallery }) => {
  const [active, setActive] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const total = images.length;

  const prevSlide = (e) => {
    e.stopPropagation();
    setActive((prev) => (prev === 0 ? total - 1 : prev - 1));
  };

  const nextSlide = (e) => {
    e.stopPropagation();
    setActive((prev) => (prev === total - 1 ? 0 : prev + 1));
  };

  // Determine left, center, and right indices for the 3D fan
  const leftIndex = (active - 1 + total) % total;
  const rightIndex = (active + 1) % total;

  const visibleIndices =
    total >= 3
      ? [
          { idx: leftIndex, role: "left" },
          { idx: active, role: "center" },
          { idx: rightIndex, role: "right" },
        ]
      : images.map((_, idx) => ({
          idx,
          role: idx === active ? "center" : idx < active ? "left" : "right",
        }));

  const getFanStyle = (role) => {
    if (role === "center") {
      return {
        rotate: 0,
        x: 0,
        y: isHovered ? -16 : -10,
        scale: isHovered ? 1.1 : 1.05,
        zIndex: 20,
        opacity: 1,
        filter: "brightness(1.03)",
      };
    }
    if (role === "left") {
      return {
        rotate: isHovered ? -12 : -7,
        x: isHovered ? -58 : -38,
        y: 6,
        scale: 0.88,
        zIndex: 10,
        opacity: 0.72,
        filter: "brightness(0.75)",
      };
    }
    return {
      rotate: isHovered ? 12 : 7,
      x: isHovered ? 58 : 38,
      y: 6,
      scale: 0.88,
      zIndex: 10,
      opacity: 0.72,
      filter: "brightness(0.75)",
    };
  };

  return (
    <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      style={{
        position: "relative",
        height: 310,
        display: "flex",
        alignItems: "flex-end",
        justifyContent: "center",
        paddingBottom: 22,
        userSelect: "none",
      }}
    >
      {/* Ambient glow behind active phone screenshot */}
      <motion.div
        animate={{
          scale: isHovered ? [1, 1.15, 1] : 1,
          opacity: isHovered ? 0.55 : 0.3,
        }}
        transition={{ duration: 2.5, repeat: Infinity, ease: "easeInOut" }}
        style={{
          position: "absolute",
          width: 190,
          height: 220,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}66 0%, transparent 70%)`,
          filter: "blur(24px)",
          zIndex: 1,
          pointerEvents: "none",
        }}
      />

      {/* Interactive Left / Right Arrows on Hover */}
      {total > 1 && (
        <>
          <motion.button
            initial={{ opacity: 0, x: 10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : 10 }}
            whileHover={{ scale: 1.12, backgroundColor: accent }}
            whileTap={{ scale: 0.92 }}
            onClick={prevSlide}
            aria-label="Previous screenshot"
            style={{
              position: "absolute",
              left: 4,
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 30,
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "rgba(15, 23, 42, 0.8)",
              border: `1px solid ${accent}66`,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            <ChevronLeft size={18} />
          </motion.button>

          <motion.button
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -10 }}
            whileHover={{ scale: 1.12, backgroundColor: accent }}
            whileTap={{ scale: 0.92 }}
            onClick={nextSlide}
            aria-label="Next screenshot"
            style={{
              position: "absolute",
              right: 4,
              top: "45%",
              transform: "translateY(-50%)",
              zIndex: 30,
              width: 34,
              height: 34,
              borderRadius: "50%",
              background: "rgba(15, 23, 42, 0.8)",
              border: `1px solid ${accent}66`,
              color: "#fff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              backdropFilter: "blur(8px)",
              boxShadow: "0 4px 16px rgba(0,0,0,0.4)",
            }}
          >
            <ChevronRight size={18} />
          </motion.button>
        </>
      )}

      {/* Fullscreen Gallery Pill */}
      <motion.button
        initial={{ opacity: 0, y: -6 }}
        animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : -6 }}
        whileHover={{ scale: 1.06 }}
        whileTap={{ scale: 0.95 }}
        onClick={(e) => {
          e.stopPropagation();
          openGallery(images, active, projectTitle);
        }}
        style={{
          position: "absolute",
          top: 4,
          right: 6,
          zIndex: 30,
          display: "flex",
          alignItems: "center",
          gap: 5,
          padding: "5px 10px",
          borderRadius: 999,
          fontSize: 11,
          fontWeight: 600,
          background: "rgba(15, 23, 42, 0.82)",
          color: "#f8fafc",
          border: `1px solid ${accent}66`,
          cursor: "pointer",
          backdropFilter: "blur(8px)",
        }}
      >
        <Maximize2 size={11} />
        {active + 1}/{total}
      </motion.button>

      {/* 3D Fan Cards */}
      {visibleIndices.map(({ idx, role }) => {
        const src = images[idx];
        const animStyle = getFanStyle(role);

        return (
          <motion.div
            key={idx}
            drag="x"
            dragConstraints={{ left: 0, right: 0 }}
            onDragEnd={(_, info) => {
              if (info.offset.x > 40) {
                setActive((prev) => (prev === 0 ? total - 1 : prev - 1));
              } else if (info.offset.x < -40) {
                setActive((prev) => (prev === total - 1 ? 0 : prev + 1));
              }
            }}
            onClick={() => {
              if (role === "center") {
                openGallery(images, idx, projectTitle);
              } else {
                setActive(idx);
              }
            }}
            animate={animStyle}
            transition={{
              type: "spring",
              stiffness: 280,
              damping: 24,
            }}
            style={{
              position: "absolute",
              height: 255,
              cursor: "pointer",
              transformOrigin: "bottom center",
            }}
          >
            <img
              src={src}
              alt={`${projectTitle} screenshot ${idx + 1}`}
              draggable={false}
              style={{
                height: "100%",
                width: "auto",
                maxWidth: 165,
                display: "block",
                objectFit: "cover",
                borderRadius: 14,
                border:
                  role === "center"
                    ? `1.5px solid ${accent}88`
                    : "1px solid rgba(255,255,255,0.12)",
                boxShadow:
                  role === "center"
                    ? `0 18px 40px -8px rgba(0,0,0,0.65), 0 0 20px ${accent}33`
                    : "0 10px 25px rgba(0,0,0,0.35)",
              }}
            />
          </motion.div>
        );
      })}

      {/* Interactive Dot Indicators for ALL images */}
      <div
        style={{
          position: "absolute",
          bottom: -2,
          display: "flex",
          gap: 6,
          zIndex: 25,
          padding: "4px 10px",
          borderRadius: 999,
          background: "rgba(15,23,42,0.55)",
          backdropFilter: "blur(6px)",
        }}
      >
        {images.map((_, i) => (
          <button
            key={i}
            onClick={(e) => {
              e.stopPropagation();
              setActive(i);
            }}
            aria-label={`View screenshot ${i + 1}`}
            style={{
              width: i === active ? 22 : 6,
              height: 6,
              borderRadius: 3,
              background: i === active ? accent : "rgba(255,255,255,0.28)",
              border: "none",
              padding: 0,
              cursor: "pointer",
              transition: "all 0.3s cubic-bezier(0.22, 1, 0.36, 1)",
            }}
          />
        ))}
      </div>
    </div>
  );
};

const ProjectCard = ({ project, index, openGallery }) => {
  const { toast } = useToast();
  const [showFeatures, setShowFeatures] = useState(false);
  const cardRef = useRef(null);

  // 3D tilt & spotlight motion values
  const mouseX = useMotionValue(0.5);
  const mouseY = useMotionValue(0.5);
  const spotlightX = useMotionValue(0);
  const spotlightY = useMotionValue(0);

  const rotateX = useSpring(useTransform(mouseY, [0, 1], [5, -5]), {
    stiffness: 200,
    damping: 25,
  });
  const rotateY = useSpring(useTransform(mouseX, [0, 1], [-5, 5]), {
    stiffness: 200,
    damping: 25,
  });

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    mouseX.set(x / rect.width);
    mouseY.set(y / rect.height);
    spotlightX.set(x);
    spotlightY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0.5);
    mouseY.set(0.5);
  };

  const handleLink = (url) => {
    if (url) {
      window.open(url, "_blank", "noopener,noreferrer");
    } else {
      toast({
        title: "🚧 Coming Soon",
        description: "This link isn't available yet.",
      });
    }
  };

  return (
    <motion.div
      ref={cardRef}
      layout
      initial={{ opacity: 0, y: 36, scale: 0.96 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, scale: 0.92, y: 20 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: (index % 6) * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
        position: "relative",
        borderRadius: 24,
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        background:
          "linear-gradient(180deg, rgba(30,41,59,0.55) 0%, rgba(15,23,42,0.82) 100%)",
        border: "1px solid rgba(255,255,255,0.09)",
        backdropFilter: "blur(16px)",
        transition: "border-color 0.3s ease, box-shadow 0.3s ease",
      }}
      whileHover={{
        boxShadow: `0 0 0 1px ${project.accent}66, 0 26px 68px -12px rgba(0,0,0,0.6), 0 0 36px ${project.accent}22`,
      }}
    >
      {/* Top animated gradient accent line */}
      <div
        style={{
          height: 3,
          background: `linear-gradient(90deg, ${project.accent}, ${
            project.accentSecondary || project.accent
          }, transparent)`,
        }}
      />

      {/* Top Status Bar: Live Badge + Category */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "14px 20px 0",
          zIndex: 10,
        }}
      >
        {project.liveStore ? (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 11px",
              borderRadius: 999,
              background: "rgba(16, 185, 129, 0.14)",
              border: "1px solid rgba(16, 185, 129, 0.35)",
              color: "#34d399",
              fontSize: 11,
              fontWeight: 600,
              letterSpacing: "0.03em",
            }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            Live on Play Store & App Store
          </div>
        ) : (
          <div
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              padding: "4px 11px",
              borderRadius: 999,
              background: "rgba(255,255,255,0.06)",
              border: "1px solid rgba(255,255,255,0.12)",
              color: "rgba(255,255,255,0.7)",
              fontSize: 11,
              fontWeight: 500,
            }}
          >
            <Smartphone size={12} />
            {project.category}
          </div>
        )}

        {project.badge && (
          <span
            style={{
              fontSize: 11,
              fontWeight: 600,
              padding: "3px 10px",
              borderRadius: 999,
              background: project.accentMuted,
              color: project.accent,
              border: `1px solid ${project.accent}44`,
            }}
          >
            {project.badge}
          </span>
        )}
      </div>

      {/* Image Fan Container */}
      <div
        style={{
          background: `radial-gradient(ellipse at 50% 105%, ${project.accentMuted} 0%, transparent 72%)`,
          padding: "12px 24px 18px",
        }}
      >
        <ImageFan
          images={project.images}
          accent={project.accent}
          projectTitle={project.title}
          openGallery={openGallery}
        />
      </div>

      {/* Divider */}
      <div
        style={{
          height: "1px",
          background:
            "linear-gradient(90deg, transparent, rgba(255,255,255,0.1), transparent)",
          margin: "0 20px",
        }}
      />

      {/* Content */}
      <div
        style={{
          padding: "18px 22px 22px",
          display: "flex",
          flexDirection: "column",
          flex: 1,
        }}
      >
        {/* App Icon + Title + Subtitle */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 14,
            marginBottom: 12,
          }}
        >
          {project.icon ? (
            <motion.div
              whileHover={{ scale: 1.08, rotate: -4 }}
              transition={{ type: "spring", stiffness: 300 }}
              style={{
                width: 52,
                height: 52,
                borderRadius: 14,
                overflow: "hidden",
                flexShrink: 0,
                border: `1.5px solid ${project.accent}55`,
                boxShadow: `0 8px 20px -4px ${project.accent}44`,
                background: "#0f172a",
              }}
            >
              <img
                src={project.icon}
                alt={`${project.title} icon`}
                style={{
                  width: "100%",
                  height: "100%",
                  objectFit: "cover",
                  display: "block",
                }}
              />
            </motion.div>
          ) : (
            <motion.div
              whileHover={{ scale: 1.08, rotate: 4 }}
              style={{
                width: 48,
                height: 48,
                borderRadius: 14,
                flexShrink: 0,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                background: project.accentMuted,
                border: `1.5px solid ${project.accent}44`,
                color: project.accent,
              }}
            >
              <Layers size={22} />
            </motion.div>
          )}

          <div style={{ minWidth: 0, flex: 1 }}>
            <p
              style={{
                fontSize: 11,
                fontWeight: 600,
                letterSpacing: "0.08em",
                textTransform: "uppercase",
                color: project.accent,
                marginBottom: 3,
                whiteSpace: "nowrap",
                overflow: "hidden",
                textOverflow: "ellipsis",
              }}
            >
              {project.subtitle}
            </p>
            <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
              <h3
                style={{
                  fontSize: 21,
                  fontWeight: 700,
                  color: "#f8fafc",
                  margin: 0,
                  letterSpacing: "-0.02em",
                }}
              >
                {project.title}
              </h3>
              {project.developer && (
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    fontWeight: 500,
                  }}
                >
                  · {project.developer}
                </span>
              )}
            </div>
          </div>
        </div>

        {/* Description */}
        <p
          style={{
            fontSize: 13.5,
            lineHeight: 1.68,
            color: "rgba(255,255,255,0.62)",
            marginBottom: 14,
            flex: 1,
          }}
        >
          {project.description}
        </p>

        {/* Interactive Key Features Accordion */}
        {project.features && project.features.length > 0 && (
          <div style={{ marginBottom: 14 }}>
            <button
              onClick={() => setShowFeatures((prev) => !prev)}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                fontSize: 12,
                fontWeight: 600,
                color: project.accent,
                background: "transparent",
                border: "none",
                padding: "2px 0",
                cursor: "pointer",
              }}
            >
              <Sparkles size={13} />
              {showFeatures
                ? "Hide Key Highlights"
                : `Explore ${project.features.length} Key Features`}
            </button>

            <AnimatePresence initial={false}>
              {showFeatures && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.25 }}
                  style={{ overflow: "hidden" }}
                >
                  <div
                    style={{
                      marginTop: 8,
                      padding: "10px 12px",
                      borderRadius: 12,
                      background: "rgba(15, 23, 42, 0.65)",
                      border: `1px solid ${project.accent}33`,
                      display: "grid",
                      gridTemplateColumns: "1fr",
                      gap: 6,
                    }}
                  >
                    {project.features.map((feat, idx) => (
                      <motion.div
                        key={idx}
                        initial={{ opacity: 0, x: -8 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.04 }}
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: 7,
                          fontSize: 12,
                          color: "rgba(255,255,255,0.8)",
                        }}
                      >
                        <CheckCircle2
                          size={13}
                          style={{ color: project.accent, flexShrink: 0 }}
                        />
                        <span>{feat}</span>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        )}

        {/* Tech Stack Pills */}
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 6,
            marginBottom: 18,
          }}
        >
          {project.technologies.map((tech, i) => (
            <motion.span
              key={i}
              whileHover={{ scale: 1.07, y: -1 }}
              style={{
                fontSize: 11,
                fontWeight: 500,
                padding: "4px 10px",
                borderRadius: 20,
                background: project.accentMuted,
                color: project.accent,
                border: `1px solid ${project.accent}33`,
                letterSpacing: "0.02em",
                cursor: "default",
              }}
            >
              {tech}
            </motion.span>
          ))}
        </div>

        {/* Store & Source Action Buttons */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {project.links.map((link, i) => {
            const isPlay =
              link.type === "play" ||
              link.label.toLowerCase().includes("play");
            return (
              <motion.button
                key={i}
                whileHover={{ scale: 1.04, y: -2 }}
                whileTap={{ scale: 0.96 }}
                onClick={() => handleLink(link.url)}
                style={{
                  flex: 1,
                  minWidth: 130,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 7,
                  padding: "10px 16px",
                  borderRadius: 12,
                  background: isPlay
                    ? `linear-gradient(135deg, ${project.accent}, ${
                        project.accentSecondary || project.accent
                      })`
                    : "rgba(255,255,255,0.08)",
                  color: "#fff",
                  fontSize: 13,
                  fontWeight: 600,
                  border: isPlay
                    ? "none"
                    : `1px solid ${project.accent}55`,
                  cursor: "pointer",
                  boxShadow: isPlay
                    ? `0 8px 20px -4px ${project.accent}66`
                    : "none",
                }}
              >
                {isPlay ? <PlayStoreIcon /> : <AppStoreIcon />}
                <span>{link.label}</span>
                <ArrowUpRight size={14} />
              </motion.button>
            );
          })}

          {project.githubUrl && (
            <motion.button
              whileHover={{ scale: 1.04, y: -2 }}
              whileTap={{ scale: 0.96 }}
              onClick={() => handleLink(project.githubUrl)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 7,
                padding: "10px 18px",
                borderRadius: 12,
                background: "rgba(255,255,255,0.07)",
                color: "rgba(255,255,255,0.85)",
                fontSize: 13,
                fontWeight: 600,
                border: "1px solid rgba(255,255,255,0.14)",
                cursor: "pointer",
              }}
            >
              <Github size={15} />
              Source Code
              <ArrowUpRight size={13} />
            </motion.button>
          )}
        </div>
      </div>
    </motion.div>
  );
};

const CATEGORIES = [
  { id: "all", label: "All Projects" },
  { id: "live", label: "Live on Store" },
  { id: "AI & PropTech", label: "AI & PropTech" },
  { id: "Social & Media", label: "Social & Live" },
  { id: "FinTech", label: "FinTech" },
  { id: "E-Commerce", label: "E-Commerce" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedImage, setSelectedImage] = useState(0);
  const [galleryTitle, setGalleryTitle] = useState("");

  const filteredProjects = projects.filter((p) => {
    if (selectedCategory === "all") return true;
    if (selectedCategory === "live") return p.liveStore;
    return p.category === selectedCategory;
  });

  const liveAppsCount = projects.filter((p) => p.liveStore).length;

  return (
    <section id="projects" style={{ padding: "36px 16px 64px" }}>
      <div style={{ maxWidth: 1160, margin: "0 auto" }}>
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{ textAlign: "center", marginBottom: 40 }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              padding: "6px 16px",
              borderRadius: 999,
              background: "rgba(59, 130, 246, 0.12)",
              border: "1px solid rgba(59, 130, 246, 0.3)",
              color: "#60a5fa",
              fontSize: 12,
              fontWeight: 600,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              marginBottom: 14,
            }}
          >
            <Sparkles size={14} />
            Production Portfolio · {liveAppsCount} Apps Live on Stores
          </motion.div>

          <h2
            style={{
              fontSize: "clamp(32px, 5vw, 52px)",
              fontWeight: 800,
              letterSpacing: "-0.03em",
              color: "#f1f5f9",
              margin: "0 0 14px",
            }}
          >
            Featured{" "}
            <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent">
              Mobile Applications
            </span>
          </h2>

          <p
            style={{
              color: "rgba(255,255,255,0.55)",
              fontSize: 15.5,
              maxWidth: 620,
              margin: "0 auto 28px",
              lineHeight: 1.6,
            }}
          >
            Real-world Flutter & native mobile apps deployed on{" "}
            <span className="text-slate-200 font-medium">
              Google Play Store
            </span>{" "}
            and{" "}
            <span className="text-slate-200 font-medium">Apple App Store</span>{" "}
            — spanning AI PropTech, Live Streaming Social, and Cross-Border
            FinTech.
          </p>

          {/* Interactive Category Filter Tabs */}
          <div
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              gap: 8,
              maxWidth: 760,
              margin: "0 auto",
            }}
          >
            {CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              const count =
                cat.id === "all"
                  ? projects.length
                  : cat.id === "live"
                  ? liveAppsCount
                  : projects.filter((p) => p.category === cat.id).length;

              return (
                <motion.button
                  key={cat.id}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.96 }}
                  onClick={() => setSelectedCategory(cat.id)}
                  style={{
                    position: "relative",
                    padding: "8px 16px",
                    borderRadius: 999,
                    fontSize: 13,
                    fontWeight: 600,
                    color: isActive ? "#fff" : "rgba(255,255,255,0.6)",
                    background: isActive
                      ? "transparent"
                      : "rgba(255,255,255,0.04)",
                    border: isActive
                      ? "1px solid rgba(59,130,246,0.5)"
                      : "1px solid rgba(255,255,255,0.08)",
                    cursor: "pointer",
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    overflow: "hidden",
                  }}
                >
                  {isActive && (
                    <motion.div
                      layoutId="activeProjectCategory"
                      transition={{
                        type: "spring",
                        stiffness: 350,
                        damping: 28,
                      }}
                      style={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(135deg, rgba(59,130,246,0.85), rgba(139,92,246,0.85))",
                        zIndex: -1,
                      }}
                    />
                  )}
                  <span>{cat.label}</span>
                  <span
                    style={{
                      fontSize: 11,
                      padding: "1px 7px",
                      borderRadius: 999,
                      background: isActive
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(255,255,255,0.08)",
                      color: isActive ? "#fff" : "rgba(255,255,255,0.5)",
                    }}
                  >
                    {count}
                  </span>
                </motion.button>
              );
            })}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          layout
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(340px, 1fr))",
            gap: 28,
          }}
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, i) => (
              <ProjectCard
                key={project.title}
                project={project}
                index={i}
                openGallery={(images, index, title) => {
                  setGalleryImages(images);
                  setSelectedImage(index);
                  setGalleryTitle(title || project.title);
                  setGalleryOpen(true);
                }}
              />
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {galleryOpen && galleryImages.length > 0 && (
        <ImageGalleryModal
          isOpen={galleryOpen}
          images={galleryImages}
          title={galleryTitle}
          currentIndex={selectedImage}
          setCurrentIndex={setSelectedImage}
          onClose={() => setGalleryOpen(false)}
        />
      )}
    </section>
  );
};

export default Projects;
