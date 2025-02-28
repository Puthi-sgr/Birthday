import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import romdoul from "../../assets/doul-bg.png";
import "./PersonalitySection.css";

gsap.registerPlugin(ScrollTrigger);

const traits = [
  {
    trait: "Compassionate",
    description:
      "Your heart beats with endless empathy, always ready to understand and support others in their times of need.",
  },
  {
    trait: "Radiant",
    description:
      "Your presence lights up every room, spreading joy and warmth to everyone around you.",
  },
  {
    trait: "Resilient",
    description:
      "With unwavering strength, you face life's challenges head-on, emerging stronger and more determined.",
  },
  {
    trait: "Creative",
    description:
      "Your imagination knows no bounds, bringing fresh perspectives and innovative solutions to everything you do.",
  },
  {
    trait: "Graceful",
    description:
      "You move through life with natural elegance, handling every situation with poise and dignity.",
  },
];

export const PersonalitySection = () => {
  const sectionRefs = useRef<(HTMLElement | null)[]>([]);
  const pinWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const animWrapRefs = useRef<(HTMLDivElement | null)[]>([]);
  const containerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const horizontalSections = sectionRefs.current.filter(
      (ref): ref is HTMLDivElement => ref !== null
    );

    // Create container for floating flowers
    const container = document.createElement("div");
    container.style.cssText = `
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 100vh;
      pointer-events: none;
      z-index: 1;
      opacity: 0;
    `;
    document.body.appendChild(container);
    containerRef.current = container;

    // Create floating flowers
    const flowers = Array.from({ length: 20 }).map(() => {
      const flower = document.createElement("div");
      flower.className = "flower";
      flower.style.cssText = `
        width: 20px;
        aspect-ratio: 1;
        --g:/37.02% 37.02% radial-gradient(#000 calc(71% - 1px),#0000 71%) no-repeat;
        mask: 100% 50% var(--g),65.451% 97.553% var(--g),9.549% 79.389% var(--g),9.549% 20.611% var(--g),65.451% 2.447% var(--g),radial-gradient(100% 100%,#000 25.476%,#0000 calc(25.476% + 1px));
        position: absolute;
        left: ${Math.random() * 100}%;
        top: 100vh;
        opacity: 0;
        background: rgba(255, 215, 0, 0.3);
      `;

      container.appendChild(flower);
      return flower;
    });

    // Create ScrollTrigger for container visibility
    ScrollTrigger.create({
      trigger: ".personality-section",
      start: "top center",
      end: "bottom center",
      onEnter: () => {
        gsap.to(container, {
          opacity: 1,
          duration: 0.5,
        });

        flowers.forEach((flower) => {
          gsap.to(flower, {
            opacity: 1,
            duration: 2,
            y: -window.innerHeight - 20,
            rotation: "+=360",
            repeat: -1,
            ease: "none",
            delay: Math.random() * 3,
          });
        });
      },
      onLeave: () => {
        gsap.to(container, {
          opacity: 0,
          duration: 0.5,
        });
      },
      onEnterBack: () => {
        gsap.to(container, {
          opacity: 1,
          duration: 0.5,
        });
      },
      onLeaveBack: () => {
        gsap.to(container, {
          opacity: 0,
          duration: 0.5,
        });
      },
    });

    horizontalSections.forEach((sec, i) => {
      const thisPinWrap = pinWrapRefs.current[i];
      const thisAnimWrap = animWrapRefs.current[i];

      if (!thisPinWrap || !thisAnimWrap) return;
      ScrollTrigger.create({
        trigger: sec,
        start: "top 30%",
        end: () => `+=${thisAnimWrap.scrollWidth - window.innerWidth}`,
        pin: true,
        pinSpacing: true,
        scrub: 3,
        animation: gsap.to(thisAnimWrap, {
          x: () => -(thisAnimWrap.scrollWidth - window.innerWidth),
          ease: "none",
        }),
        invalidateOnRefresh: true,
      });

      gsap.to(".boxies", {
        rotation: 1440,
        scrollTrigger: {
          trigger: sec,
          start: "top 30%",
          end: () => `+=${thisAnimWrap.scrollWidth - window.innerWidth + 100}`,
          scrub: 1,
          onUpdate: (self) => {
            const boxies = document.querySelector(".boxies");
            if (boxies) {
              (boxies as HTMLElement).style.transform = `rotate(${
                self.progress * 1200
              }deg)`;
              (boxies as HTMLElement).style.zIndex = "10";
            }
          },
        },
      });
    });
    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
      container.remove();
    };
  }, []);

  return (
    <div className="personality-section">
      <section className="blank">
        <h1>Extraordinary Qualities</h1>
        <p>Scroll to explore the traits</p>
      </section>

      <section
        className="horizontal"
        ref={(el) => (sectionRefs.current[0] = el)}
      >
        <div
          className="pin-wrap"
          ref={(el) => (pinWrapRefs.current[0] = el)}
          style={{ overflow: "hidden", position: "relative" }}
        >
          <div className="boxies w-32 h-auto" style={{ margin: "0 auto" }}>
            <img src={romdoul} alt="romdoul" />
          </div>
          <div
            className="animation-wrap"
            ref={(el) => (animWrapRefs.current[0] = el)}
            style={{ display: "flex", gap: "2rem", padding: "2rem" }}
          >
            {traits.map((trait, index) => (
              <div
                className="item trait-card"
                key={index}
                style={{ flex: "0 0 auto", width: "300px" }}
              >
                <h3 className="cursive text-2xl md:text-3xl text-purple-800 mb-3 text-center pb-3">
                  {trait.trait}
                </h3>
                <p className="serif text-gray-700 text-lg leading-relaxed text-center">
                  {trait.description}
                </p>
              </div>
            ))}
          </div>{" "}
        </div>
      </section>
    </div>
  );
};
