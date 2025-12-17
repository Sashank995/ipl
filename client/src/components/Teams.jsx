const teams = [
  {
    name: "Chennai Super Kings",
    short: "CSK",
    color: "from-yellow-400 to-yellow-500",
  },
  {
    name: "Mumbai Indians",
    short: "MI",
    color: "from-blue-600 to-blue-800",
  },
  {
    name: "Royal Challengers Bangalore",
    short: "RCB",
    color: "from-red-600 to-black",
  },
  {
    name: "Kolkata Knight Riders",
    short: "KKR",
    color: "from-purple-700 to-purple-900",
  },
  {
    name: "Rajasthan Royals",
    short: "RR",
    color: "from-pink-500 to-pink-700",
  },
  {
    name: "Delhi Capitals",
    short: "DC",
    color: "from-blue-500 to-red-500",
  },
];

const Teams = () => {
  return (
    <div className="space-y-12">

      {/* PAGE HEADER */}
      <div>
        <h1 className="text-4xl font-extrabold text-indigo-900">
          IPL Teams
        </h1>
        <p className="text-gray-500 mt-2">
          Official franchises of the Indian Premier League
        </p>
      </div>

      {/* TEAMS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {teams.map((team, i) => (
          <div
            key={i}
            className={`relative rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition hover:-translate-y-2 bg-gradient-to-br ${team.color}`}
          >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/20"></div>

            <div className="relative z-10 p-10 text-white">

              {/* LOGO CIRCLE */}
              <div className="w-20 h-20 rounded-full bg-white flex items-center justify-center text-2xl font-extrabold text-black mb-6">
                {team.short}
              </div>

              <h2 className="text-2xl font-bold leading-snug">
                {team.name}
              </h2>

              <p className="mt-3 text-sm text-gray-200">
                Official IPL Franchise Team
              </p>

              <button className="mt-6 px-6 py-3 bg-white/20 backdrop-blur rounded-full hover:bg-white/30 transition">
                View Team
              </button>

            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Teams;
