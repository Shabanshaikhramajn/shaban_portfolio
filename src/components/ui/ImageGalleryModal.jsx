import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";

const ImageGalleryModal = ({
  isOpen,
  images,
  title,
  currentIndex,
  setCurrentIndex,
  onClose,
}) => {
  const [zoomed, setZoomed] = useState(false);

  const nextImage = () => {
    setZoomed(false);
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const prevImage = () => {
    setZoomed(false);
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight") nextImage();
      if (e.key === "ArrowLeft") prevImage();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, images.length]);

  if (!isOpen) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        onClick={onClose}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(2, 6, 23, 0.92)",
          backdropFilter: "blur(16px)",
          zIndex: 9999,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: "20px",
        }}
      >
        {/* Top Bar */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            top: 20,
            left: 24,
            right: 24,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            zIndex: 20,
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            {title && (
              <span
                style={{
                  fontSize: 16,
                  fontWeight: 700,
                  color: "#f8fafc",
                }}
              >
                {title}
              </span>
            )}
            <span
              style={{
                fontSize: 12,
                fontWeight: 600,
                padding: "4px 12px",
                borderRadius: 999,
                background: "rgba(255,255,255,0.1)",
                color: "#94a3b8",
              }}
            >
              {currentIndex + 1} / {images.length}
            </span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <motion.button
              whileHover={{ scale: 1.08 }}
              whileTap={{ scale: 0.94 }}
              onClick={() => setZoomed((z) => !z)}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Toggle zoom"
            >
              {zoomed ? <ZoomOut size={18} /> : <ZoomIn size={18} />}
            </motion.button>

            <motion.button
              whileHover={{ scale: 1.08, backgroundColor: "rgba(239,68,68,0.25)" }}
              whileTap={{ scale: 0.94 }}
              onClick={onClose}
              style={{
                width: 40,
                height: 40,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.15)",
                color: "white",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                cursor: "pointer",
              }}
              aria-label="Close gallery"
            >
              <X size={20} />
            </motion.button>
          </div>
        </div>

        {/* Previous Button */}
        <motion.button
          whileHover={{ scale: 1.12, backgroundColor: "rgba(59,130,246,0.35)" }}
          whileTap={{ scale: 0.92 }}
          onClick={(e) => {
            e.stopPropagation();
            prevImage();
          }}
          style={{
            position: "absolute",
            left: 24,
            zIndex: 20,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label="Previous image"
        >
          <ChevronLeft size={28} />
        </motion.button>

        {/* Active Screenshot */}
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt={`${title || "App"} screenshot ${currentIndex + 1}`}
          onClick={(e) => {
            e.stopPropagation();
            setZoomed((z) => !z);
          }}
          initial={{ opacity: 0, scale: 0.9, y: 12 }}
          animate={{
            opacity: 1,
            scale: zoomed ? 1.25 : 1,
            y: 0,
          }}
          transition={{ type: "spring", stiffness: 260, damping: 24 }}
          style={{
            maxWidth: "85%",
            maxHeight: "74vh",
            borderRadius: 18,
            cursor: zoomed ? "zoom-out" : "zoom-in",
            boxShadow: "0 25px 70px rgba(0,0,0,0.7)",
            border: "1px solid rgba(255,255,255,0.14)",
          }}
        />

        {/* Next Button */}
        <motion.button
          whileHover={{ scale: 1.12, backgroundColor: "rgba(59,130,246,0.35)" }}
          whileTap={{ scale: 0.92 }}
          onClick={(e) => {
            e.stopPropagation();
            nextImage();
          }}
          style={{
            position: "absolute",
            right: 24,
            zIndex: 20,
            width: 48,
            height: 48,
            borderRadius: "50%",
            background: "rgba(255,255,255,0.08)",
            border: "1px solid rgba(255,255,255,0.15)",
            color: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            cursor: "pointer",
          }}
          aria-label="Next image"
        >
          <ChevronRight size={28} />
        </motion.button>

        {/* Thumbnails Strip */}
        <div
          onClick={(e) => e.stopPropagation()}
          style={{
            position: "absolute",
            bottom: 20,
            display: "flex",
            gap: 10,
            overflowX: "auto",
            maxWidth: "90vw",
            padding: "8px 14px",
            borderRadius: 16,
            background: "rgba(15, 23, 42, 0.75)",
            border: "1px solid rgba(255,255,255,0.1)",
          }}
        >
          {images.map((img, i) => (
            <motion.img
              key={i}
              src={img}
              alt=""
              whileHover={{ scale: 1.08, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                setZoomed(false);
                setCurrentIndex(i);
              }}
              style={{
                width: 48,
                height: 82,
                objectFit: "cover",
                borderRadius: 8,
                cursor: "pointer",
                opacity: currentIndex === i ? 1 : 0.5,
                border:
                  currentIndex === i
                    ? "2px solid #3b82f6"
                    : "2px solid transparent",
                transition: "opacity 0.2s ease, border-color 0.2s ease",
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGalleryModal;
