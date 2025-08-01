// components/TeachingAI.js
export default function TeachingAI() {
  return (
    <section className="flex flex-col-reverse lg:flex-row items-center justify-between px-8 py-20 bg-white relative overflow-hidden">
      {/* Image Circle */}
      <div className="relative w-full lg:w-1/2 flex justify-center items-center z-10 mt-10 lg:mt-0">
        <div className="relative w-[300px] h-[300px] md:w-[360px] md:h-[360px] rounded-full border-[14px] border-yellow-400 overflow-hidden border-opacity-90 shadow-xl">
          <img
            src="/robot3.png"
            alt="AI Head"
            className="w-full h-full object-cover scale-[1.15]"
          />
        </div>
      </div>

      {/* Text Content */}
      <div className="w-full lg:w-1/2 z-10 text-center lg:text-left">
        <p className="text-sm text-gray-500 uppercase mb-2">Robotic engineering</p>
        <h2 className="text-3xl md:text-5xl font-semibold text-gray-900 leading-tight mb-4">
          Engineers Are <br /> Teaching AI
        </h2>
        <p className="text-gray-700 text-base md:text-lg mb-2">
          There&rsquo;s plenty of talk that robots can act as replacements for warehouse employees.
          But items have to be grabbed elsewhere, and Preferred Networks Inc. has an idea for a
          place covered with clothing and general filth: the home.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Image from <a className="underline text-gray-600" href="#">Claudeai</a>
        </p>
        <button className="bg-cyan-500 text-white px-6 py-2 rounded-md text-sm hover:bg-cyan-600 transition">
          READ MORE
        </button>
      </div>
    </section>
  );
}
