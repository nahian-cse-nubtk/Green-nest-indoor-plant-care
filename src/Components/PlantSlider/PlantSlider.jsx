"use client";
import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { MdOutlineKeyboardArrowLeft, MdOutlineKeyboardArrowRight } from "react-icons/md";

const PlantSlider = ({ plants }) => {
    //console.log(plants)
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(1); // +1 = right, -1 = left

  // Automatically change slide every 5 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  });

  const nextSlide = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % plants.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + plants.length) % plants.length);
  };

  const slogans = [
    "Grow green, breathe clean 🌿",
    "Nature at your fingertips 🌱",
    "Bring life into your space 🌸",
    "Plant joy, harvest calm 🍃",
    "Let nature stay close to heart 💚",
  ];

  // Animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? 200 : -200,
      opacity: 0,
      scale: 0.98,
    }),
    center: { x: 0, opacity: 1, scale: 1 },
    exit: (direction) => ({
      x: direction > 0 ? -200 : 200,
      opacity: 0,
      scale: 0.98,
    }),
  };

  return (
    <div className="relative w-full h-[500px] overflow-hidden rounded-2xl shadow-lg bg-green-50">
      <AnimatePresence custom={direction}>
        <motion.div
          key={index}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{ duration: 1, ease: "easeInOut" }}
          className="absolute inset-0"
        >
          <img
            src={plants[index].image}
            alt={plants[index].plantName}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-10 left-10 text-white space-y-3">
            <motion.h2
              key={plants[index].plantName}
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-3xl font-bold drop-shadow-lg"
            >
              {plants[index].plantName}
            </motion.h2>
            <p className="text-lg italic opacity-90">
              {slogans[index % slogans.length]}
            </p>
            <p className="text-sm opacity-80">
              Care Level: {plants[index].careLevel} | ${plants[index].price}
            </p>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Optional navigation buttons */}
      <div className="absolute inset-0 flex items-center justify-between px-6 text-white">
        <button
          onClick={prevSlide}
          className="bg-black/30 hover:bg-black/50 p-3 rounded-full"
        >
          {<MdOutlineKeyboardArrowLeft />}
        </button>
        <button
          onClick={nextSlide}
          className="bg-black/30 hover:bg-black/50 p-3 rounded-full"
        >
          {<MdOutlineKeyboardArrowRight />}
        </button>
      </div>
    </div>
  );
};

export default PlantSlider;
