import { useState, useEffect, useRef } from "react";
import CardAnimAvon from "./CadrdAnimAvon";

const CardAnim = () => {
  // State and Ref setup
  const [offset, setOffset] = useState(0);
  const [activeCard, setActiveCard] = useState(null);
  const containerRef = useRef(null);

  useEffect(() => {
    // Effect for handling animation and transitions
    const containerWidth = containerRef.current.offsetWidth;
    const cardWidth = 96; // Width of each card

    const resetAnimation = () => {
      // Hide all cards and start animation from right to left
      setOffset(containerWidth);
      setTimeout(() => {
        setOffset(0); // Reset offset to initial position
      }, 100); // Delay before resetting to give time for transition
    };

    const interval = setInterval(() => {
      // Update offset to slide cards
      if (activeCard === null) {
        setOffset((prevOffset) => {
          const newOffset = prevOffset - cardWidth;
          // Reset offset when animation completes
          if (newOffset <= -(containerWidth - cardWidth)) {
            setTimeout(resetAnimation, 2000); // Reset animation after 2 seconds
            return 0;
          }
          return newOffset;
        });
      }
    }, 2000); // Animation duration

    // Cleanup
    return () => clearInterval(interval); // Clear interval
  }, [activeCard]); // Dependency on activeCard state

  // Function to handle mouse entering a card
  const handleMouseEnter = (index) => {
    setActiveCard(index);
  };

  // Function to handle mouse leaving a card
  const handleMouseLeave = () => {
    setActiveCard(null);
  };

  // Rendering cards with sliding animation
  return (
    <>
      {" "}
      <div className="flex overflow-hidden p-4" ref={containerRef}>
        {[...Array(7)].map((_, index) => (
          <div
            key={index}
            className="w-full sm:w-1/1 md:w-1/2 lg:w-2/5 xl:w-1/3 h-48 bg-gray-300 mr-4 rounded-sm"
            style={{
              transform: `translateX(${offset}px)`, // Translate based on offset
              transition: "transform 2s linear", // Animation duration and easing
              boxShadow:
                activeCard === index ? "0 0 3px rgba(0, 0, 0, 0.5)" : "none", // Add shadow when active
              filter:
                activeCard === index ? "brightness(0.9)" : "brightness(1)",
            }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            Hello
          </div>
        ))}
      </div>
      <CardAnimAvon />
    </>
  );
};

export default CardAnim;
