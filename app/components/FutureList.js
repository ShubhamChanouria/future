// components/FutureList.js
export default function FutureList() {
  const items = [
    {
      title: "1. The Internet",
      description:
        "The Internet of Things has long been talked about amongst tech insiders as the next big innovation in home technology.",
    },
    {
      title: "2. Automation",
      description:
        "While large-scale innovation in automation has traditionally been limited to the production side of society",
    },
    {
      title: "3. Cryptocurrency",
      description:
        "After Bitcoin’s meteoric price jump in 2017, major tech players have begun to take cryptocurrencies seriously.",
    },
    {
      title: "4. Blockchain",
      description:
        "Blockchain, the decentralized ledger that holds together cryptocurrencies, has applications reaching far beyond.",
    },
    {
      title: "5. AI",
      description:
        "Artificial intelligence is seeing the light and applications of the technology are already being worked on",
    },
  ];

  return (
    <section className="bg-cyan-400 text-white py-16 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 text-left">
        {items.map((item, idx) => (
          <div key={idx}>
            <h3 className="font-bold text-lg mb-2">{item.title}</h3>
            <p className="italic text-white/90 text-sm leading-relaxed">{item.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
