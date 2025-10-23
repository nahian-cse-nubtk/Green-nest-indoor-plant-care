import { motion } from "framer-motion";
import { Leaf, Droplet, Sun } from "lucide-react";

const PlantOfTheWeek = () => {
  const plant = {
    name: "Peace Lily",
    image:
      "https://i.ibb.co.com/DH7RKLq2/peace-lily.jpg",
    description:
      "The Peace Lily symbolizes purity, tranquility, and renewal. It thrives in shade and cleanses indoor air—making your home a calm and fresh sanctuary.",
    careTips: [
      { icon: <Sun className="text-yellow-500" />, text: "Indirect sunlight" },
      { icon: <Droplet className="text-blue-500" />, text: "Water weekly" },
      { icon: <Leaf className="text-green-600" />, text: "Keep soil moist" },
    ],
  };

  return (
    <section className="py-16 bg-linear-to-br from-green-50 to-white">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-3xl md:text-4xl font-bold text-green-700 mb-4"
        >
          🌿 Plant of the Week
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-10 max-w-2xl mx-auto"
        >
          Discover this week’s special plant that brings peace, beauty, and balance to your home.
        </motion.p>

        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src={plant.image}
              alt={plant.name}
              className="rounded-3xl shadow-xl w-full max-w-sm object-cover"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="text-left"
          >
            <h3 className="text-2xl font-semibold text-green-800 mb-3">
              {plant.name}
            </h3>
            <p className="text-gray-600 mb-6">{plant.description}</p>

            <ul className="space-y-3">
              {plant.careTips.map((tip, index) => (
                <li
                  key={index}
                  className="flex items-center gap-3 text-gray-700"
                >
                  {tip.icon}
                  {tip.text}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default PlantOfTheWeek;
