import E1 from "@/components/E1";
import F1 from "@/components/F1";
import P1 from "@/components/P1";
import T1 from "@/components/T1";
import MapImg from "@/public/Verona.jpg";
import Image from "next/image";

function BuilderMap() {

  return (
    <section className='alignment py-10 md:py-20'>
     {/* Map image wrapper */}
     <div className="relative w-full mb-10 aspect-[8/4]">
     {/* Next.js image wrapper */}
     <div className='relative w-full h-full'>
      <Image src={MapImg} alt='image of builder map'
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw' fill className="object-contain" />
     </div>
     <E1 />
     <F1 />
     <T1 />
     <P1 />
     </div>
     <a href="/" className="link">Home</a>
    </section>
  )
}

export default BuilderMap;