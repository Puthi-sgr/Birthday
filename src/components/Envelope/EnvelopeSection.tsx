import { useEffect, useRef } from "react";
import "./Envelope.css";

export const EnvelopeSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const frontRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    const card = cardRef.current;

    const handleClick = () => {
      if (!card) return;

      if (card.style.top === "-90px") {
        card.style.top = "0";
      } else {
        card.style.top = "-90px";
      }
    };

    if (container) {
      container.addEventListener("click", handleClick);
      console.log("Hello world");

      return () => {
        container.removeEventListener("click", handleClick);
      };
    }
  }, []);

  return (
    <div className="envelope-container" ref={containerRef}>
      <div className="valentines">
        <div className="envelope"></div>
        <div className="front" ref={frontRef}></div>
        <div className="card" ref={cardRef}>
          <div className="text">
            Happy
            <br /> Bi
            <br /> Day!
          </div>
          <div className="heart"></div>
        </div>
        <div className="hearts">
          <div className="one"></div>
          <div className="two"></div>
          <div className="three"></div>
          <div className="four"></div>
          <div className="five"></div>
        </div>
      </div>
      <div className="shadow"></div>
    </div>
  );
};
