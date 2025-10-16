"use client";
import { useState } from "react";

function F1() {
  const [hoveredBuilding, setHoveredBuilding] = useState<boolean>(false);
  const [hoveredLabel, setHoveredLabel] = useState<boolean>(false);

  return (
    <section>
     {/* hover area F1 */}
      <div
        className='absolute bottom-[25%] left-[53%] w-[18%] h-[20%] overflow-visible'
        onMouseEnter={() => setHoveredBuilding(true)}
        onMouseLeave={() => setHoveredBuilding(false)}
      >
        {/* clipped building shape */}
        <div
          className='relative w-full h-full cursor-pointer'
          style={{
            clipPath: "polygon(0 13%, 100% 1%, 100% 92%, 10% 100%)",
          }}
        >
          {/* Highlight overlay */}
          {hoveredBuilding && (
            <div className='absolute inset-0 bg-red-600/50'></div>
          )}
        </div>
      </div>

      {/* Label Area */}
      <div
        className='absolute bottom-[36%] md:bottom-[38%] lg:bottom-[39%] left-[60%] -translate-y-1/2 bg-red-600 text-white text-xs md:text-base font-semibold rounded-full px-2 py-1 md:px-4 md:py-3 flex items-center justify-center cursor-pointer'
        onMouseEnter={() => setHoveredLabel(true)}
        onMouseLeave={() => setHoveredLabel(false)}
      >
        <h2>F1</h2>

        {/* Tooltip */}
        {hoveredLabel && (
          <div className='absolute bottom-full left-[65%] -translate-x-1/2 mb-2 z-10 bg-red-600 text-white text-xs md:text-base font-normal rounded px-2 py-1 whitespace-nowrap'>
            22 apartments available
          </div>
        )}
      </div>
    </section>
  )
}

export default F1