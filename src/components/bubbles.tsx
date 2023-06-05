import { useEffect, useState } from "react";
import Bubble from "./bubble";

export default function Bubbles() {
  const [bubbleArray, setBubbleArray] = useState([]);
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  let bubbles = 10;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWidth(window.innerWidth - 100);
      setHeight(window.innerHeight);
    }
  }, []);

  useEffect(() => {
    const newBubbleArray: any = [];
    for (let i = 0; i < bubbles; i++) {
      let x = Math.random() * width;
      let y = Math.random() * height + 100;
      newBubbleArray.push({ x, y });
    }
    setBubbleArray(newBubbleArray);
  }, [bubbles, height, width]);

  return (
    <div>
      {bubbleArray.map((bubble: any, index) => {
        return <Bubble key={index} x={bubble.x} y={bubble.y} />;
      })}
    </div>
  );
}
