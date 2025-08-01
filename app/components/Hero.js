export default function Hero() {
  return (
    <section className="relative flex flex-col lg:flex-row items-center justify-between pb-12 bg-white overflow-hidden">
      
      {/* Yellow background shape (narrower + more right aligned) */}
      <div className="absolute top-0 right-[-5%] w-[50%] h-full z-0">
        <img
          src="/introbg.jpg"
          alt="Curved Yellow Shape"
          className="object-cover w-full h-full mix-blend-multiply opacity-90"
        />
      </div>

      {/* Robot Image */}
      <div className="relative z-10 w-full lg:w-1/2 flex justify-center mb-8 lg:mb-0">
        <img
          src="/robot1.png"
          alt="AI Robot"
          className="h-auto object-contain"
        />
      </div>

      {/* Text Content */}
      <div className="relative z-10 w-full lg:w-1/2 text-center lg:text-left">
        <div className="w-[70%] m-auto">
          <p className="text-sm text-gray-600 uppercase mb-2">Future innovations</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            TECHNOLOGY <br /> REVOLUTION
          </h1>
          <p className="text-gray-700 text-base md:text-lg mb-4 w-[70%]">
            The future is fast approaching, and a new era of digital innovation and disruption is here.
          </p>
          <p className="text-sm text-gray-500 mb-6">Image from Claudeai</p>
          <button className="bg-cyan-500 text-white px-6 py-2 rounded-md text-sm hover:bg-cyan-600 transition cursor-pointer">
            LEARN MORE
          </button>
        </div>
      </div>
    </section>
  );
}
