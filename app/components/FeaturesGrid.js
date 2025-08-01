// components/FeaturesGrid.js
export default function FeaturesGrid() {
  const features = [
    {
      title: "Concept",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 4.75c0-1.243-1.007-2.25-2.25-2.25S9.5 3.507 9.5 4.75M12 9.5a3 3 0 100-6 3 3 0 000 6zM8 21.25h8c.621 0 1.25-.379 1.25-1v-2.25a.75.75 0 00-.75-.75H7.5a.75.75 0 00-.75.75V20.25c0 .621.629 1 1.25 1z"
          />
        </svg>
      ),
    },
    {
      title: "Technology",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.5 3.75l3 3m9 13.5l3-3M6.75 4.5h10.5a1.5 1.5 0 011.5 1.5v3m-13.5 3v7.5A1.5 1.5 0 007.5 21h3m6-6v-3.75M3.75 12l6 6"
          />
        </svg>
      ),
    },
    {
      title: "AI Robots",
      description:
        "Sample text. Lorem ipsum dolor sit amet, consectetur adipiscing elit nullam nunc justo sagittis suscipit ultrices.",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-8 h-8"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 6.75a5.25 5.25 0 00-5.25 5.25v4.5a2.25 2.25 0 002.25 2.25h6a2.25 2.25 0 002.25-2.25v-4.5A5.25 5.25 0 0012 6.75z"
          />
          <circle cx="9" cy="12" r="0.5" fill="white" />
          <circle cx="15" cy="12" r="0.5" fill="white" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-16 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
        {features.map((item, idx) => (
          <div key={idx} className="flex flex-col items-center">
            <div className="w-[80px] h-[80px] bg-cyan-500 rounded-full flex items-center justify-center mb-4">
              {item.icon}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed max-w-xs">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
