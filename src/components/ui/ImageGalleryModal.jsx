import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const ImageGalleryModal = ({
  isOpen,
  images,
  currentIndex,
  setCurrentIndex,
  onClose,
}) => {
  if (!isOpen) return null;

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        style={{
          position: "fixed",
          inset: 0,
          background: "rgba(0,0,0,0.95)",
          zIndex: 9999,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {/* Close */}
        <button
          onClick={onClose}
          style={{
            position: "absolute",
            top: 20,
            right: 20,
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          <X size={32} />
        </button>

        {/* Previous */}
        <button
          onClick={prevImage}
          style={{
            position: "absolute",
            left: 20,
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          <ChevronLeft size={40} />
        </button>

        {/* Current Image */}
        <motion.img
          key={currentIndex}
          src={images[currentIndex]}
          alt=""
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            maxWidth: "90%",
            maxHeight: "85vh",
            borderRadius: 16,
          }}
        />

        {/* Next */}
        <button
          onClick={nextImage}
          style={{
            position: "absolute",
            right: 20,
            background: "none",
            border: "none",
            color: "white",
            cursor: "pointer",
          }}
        >
          <ChevronRight size={40} />
        </button>

        {/* Thumbnails */}
        <div
          style={{
            position: "absolute",
            bottom: 30,
            display: "flex",
            gap: 12,
            overflowX: "auto",
            padding: "10px 20px",
          }}
        >
          {images.map((img, i) => (
            <img
              key={i}
              src={img}
              alt=""
              onClick={() => setCurrentIndex(i)}
              style={{
                width: 70,
                height: 120,
                objectFit: "cover",
                borderRadius: 8,
                cursor: "pointer",
                border:
                  currentIndex === i
                    ? "2px solid #3b82f6"
                    : "2px solid transparent",
              }}
            />
          ))}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default ImageGalleryModal;