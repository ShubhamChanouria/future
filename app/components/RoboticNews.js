// components/RoboticNews.js
export default function RoboticNews() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-8 py-20 bg-white relative overflow-hidden">
      {/* Text Content */}
      <div className="m-auto w-[40%] z-10 mb-12 lg:mb-0 text-center lg:text-left">
        <p className="text-sm text-gray-500 uppercase mb-2">Robotic news</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
          The Robots <br /> Are Coming
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-6">
          There's plenty of talk that robots can act as replacements for warehouse employees.
          But items have to be grabbed elsewhere, and Preferred Networks Inc. has an idea
          for a place covered with clothing and general filth: the home.
        </p>
        <button className="bg-cyan-500 text-white px-6 py-2 rounded-md text-sm hover:bg-cyan-600 transition">
          READ MORE
        </button>
      </div>

      {/* Circular Robot Image with Yellow Border */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center z-10">
        <div className="relative w-[390px] h-[410px] md:w-[360px] md:h-[360px] rounded-full border-[14px] border-yellow-400 overflow-hidden border-opacity-90 shadow-xl">
          <img
            src="/robot2.png"
            alt="Robot"
            className="w-full h-full object-cover scale-[1.12]"
          />
        </div>
      </div>
    </section>
  );
}
