import React, { useEffect, useState } from "react";

const logos = [
  "../../public/assets/logos/CSS.png",
  "../../public/assets/logos/HTML.png",
  "../../public/assets/logos/JavaScript.png",
  "../../public/assets/logos/ReactJS.png",
  "../../public/assets/logos/TypeScript.png",
  "../../public/assets/logos/NextJS.png",
  "../../public/assets/logos/MongoDB.png",
  "../../public/assets/logos/MySQL.png",
  "../../public/assets/logos/nodeJS.png",
  "../../public/assets/logos/VSCode.png",
  "../../public/assets/logos/VSCode.png",
  "../../public/assets/logos/SQL.png",
  "../../public/assets/logos/Windows.png",
  "../../public/assets/logos/Linux.png",
];

export default function Bubbles() {
  const [bubbles, setBubbles] = useState<
    Array<{ x: number; y: number; logo: string }>
  >([]);

  const addBubble = () => {
    const logoIndex = Math.floor(Math.random() * logos.length);
    const bubble = {
      x: Math.random() * window.innerWidth - 150,
      y: Math.random() * window.innerHeight + 300,
      logo: String(logos[logoIndex]), // Conversion en chaîne de caractères
    };
    console.log(bubble);
    setBubbles((prevBubbles) => [...prevBubbles, bubble]);
  };

  useEffect(() => {
    const interval = setInterval(addBubble, 2000); // Ajoute une bulle toutes les 2 secondes

    return () => clearInterval(interval); // Nettoie l'intervalle lorsque le composant est démonté
  }, []);

  return (
    <>
      {bubbles.map((bubble, index) => (
        <Bubble key={index} x={bubble.x} y={bubble.y} logo={bubble.logo} />
      ))}
    </>
  );
}

function Bubble(props: any) {
  return (
    <div
      className="h-4 w-4 bg-white rounded-full opacity-0"
      style={{
        animation: `circleAnimation 2s`,
        left: `${props.x}px`,
        top: `${props.y}px`,
        position: "absolute",
        // background: `url(${props.logo}) no-repeat center/contain`,
        boxSizing: "border-box",
      }}
    >
      <style>{styles}</style>
    </div>
  );
}

const styles = `
@keyframes circleAnimation {
  0% {
    transform: scale(1);
    opacity: .4;
  }
  95% {
    transform: scale(10);
    opacity: 1;
  }
  100% {
    transform: scale(0);
    opacity: 0;
  }
}
`;
