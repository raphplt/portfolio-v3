import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import submarine from "../../public/assets/images/submarine.png";
import Image from "next/image";

export default function MovingSubmarin() {
  const [x, setX] = useState(300);
  const [y, setY] = useState(1000);
  const [speedX, setSpeedX] = useState(0);
  const [speedY, setSpeedY] = useState(0);

  useEffect(() => {
    const initialSpeedX = Math.random() * 2 - 1; // Valeur entre -1 et 1
    const initialSpeedY = Math.random() * 2 - 1; // Valeur entre -1 et 1
    setSpeedX(initialSpeedX);
    setSpeedY(initialSpeedY);
  }, []);

  useEffect(() => {
    const moveImage = () => {
      setX((x) => x + speedX);
      setY((y) => y + speedY);
    };

    const interval = setInterval(moveImage, 30);

    return () => clearInterval(interval);
  }, [speedX, speedY]);

  useEffect(() => {
    const generateNewSpeeds = () => {
      const newSpeedX = Math.random() * 2 - 1;
      const newSpeedY = Math.random() * 2 - 1;
      setSpeedX(newSpeedX);
      setSpeedY(newSpeedY);
    };

    const directionChangeInterval = setInterval(generateNewSpeeds, 5000); // Changement de direction toutes les 5 secondes

    return () => clearInterval(directionChangeInterval);
  }, []);

  return (
    <div>
      <motion.div
        style={{
          position: "absolute",
          top: `${y}px`,
          left: `${x}px`,
          transform: `scaleX(${speedX < 0 ? -1 : 1})`,
        }}
      >
        <Image src={submarine} alt="submarine" height={300} width={300} />
      </motion.div>
    </div>
  );
}
