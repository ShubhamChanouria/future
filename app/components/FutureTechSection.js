// components/FutureTechSection.js
export default function FutureTechSection() {
  return (
    <section className="relative bg-cover bg-center text-white py-24 px-6" style={{ backgroundImage: "url('/bg4.jpg')" }}>
      
      {/* Black overlay */}
      <div className="absolute inset-0 bg-[#000000a1] bg-opacity-60 z-0" />

      {/* Text content */}
      <div className="relative z-10 max-w-4xl mx-auto text-center md:text-left">
        <h2 className="text-3xl md:text-4xl font-semibold mb-6 relative inline-block">
          5 Future Technologies That Will Be Mainstream
          <span className="block w-16 h-[3px] bg-yellow-400 mt-2 mx-auto md:mx-0" />
        </h2>
        <p className="text-base md:text-lg leading-relaxed text-white/90">
          Tech companies rang in the start of the new year by unveiling some of their ambitious
          plans for the coming months. Startups and multinational companies alike are beginning to
          feel the ripple effects of innovation in the industry, with technology becoming more
          intertwined in everyday lives each year.
        </p>
        <p className="text-base md:text-lg mt-4 text-white/90">
          As 2018 progresses, here are 5 future technologies you can expect to reach the public in
          the next couple of years
        </p>
      </div>
    </section>
  );
}
