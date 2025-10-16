"use client";
import { useState } from "react";

function E1() {
  const [hoveredBuilding, setHoveredBuilding] = useState<boolean>(false);
  const [hoveredLabel, setHoveredLabel] = useState<boolean>(false);

  return (
    <section>
     {/* hover area E1 */}
      <div
        className='absolute bottom-[5%] left-[18%] w-[10%] h-[15%] overflow-visible'
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
          {/* highlight overlay */}
          {hoveredBuilding && (
            <div className='absolute inset-0 bg-purple-600/50'></div>
          )}
        </div>
      </div>

      {/* Label Area */}
      <div
        className='absolute bottom-[14%] md:bottom-[15%] left-[24%] -translate-y-1/2 bg-purple-600 text-white text-xs md:text-base font-semibold rounded-full px-2 py-1 md:px-4 md:py-3 flex items-center justify-center cursor-pointer'
        onMouseEnter={() => setHoveredLabel(true)}
        onMouseLeave={() => setHoveredLabel(false)}
      >
        <h2>E1</h2>

        {/* Tooltip */}
        {hoveredLabel && (
          <div className='absolute bottom-full left-[25%] -translate-x-1/2 mb-2 z-10 bg-purple-600 text-white text-xs md:text-base font-normal rounded px-2 py-1 whitespace-nowrap'>
            10 apartments available
          </div>
        )}
      </div>
    </section>
  )
}

export default E1