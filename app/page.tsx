import Image from "next/image";

export default function Home() {
  return (
    <section className="alignment py-10 md:py-20">
    <div className="border rounded flex flex-col items-center justify-center  border-gray-400 p-10 gap-y-4 md:gap-6">
      <h1 className="text-3xl md:text-4xl text-center">Interactive Builder Map</h1>
      <a href="/map" className="link">Explore Interactive Map</a>
    </div>
    </section>
  );
}
