const players = [
  { name: "Virat Kohli", role: "Batsman", team: "RCB" },
  { name: "MS Dhoni", role: "Wicket Keeper", team: "CSK" },
  { name: "Rohit Sharma", role: "Batsman", team: "MI" },
  { name: "Jasprit Bumrah", role: "Bowler", team: "MI" },
  { name: "Ravindra Jadeja", role: "All-Rounder", team: "CSK" },
  { name: "KL Rahul", role: "Batsman", team: "LSG" },
  { name: "pant", role: "Batsman", team: "DC" },
];

const Players = () => {
  return (
    <div className="space-y-12">

      {/* PAGE HEADER */}
      <div>
        <h1 className="text-4xl font-extrabold text-indigo-900">
          IPL Players
        </h1>
        <p className="text-gray-500 mt-2">
          Official players from Indian Premier League franchises
        </p>
      </div>

      {/* PLAYERS GRID */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {players.map((player, i) => (
          <div
            key={i}
            className="relative bg-white rounded-3xl shadow-lg p-8 hover:shadow-2xl transition hover:-translate-y-2"
          >
            {/* PLAYER IMAGE PLACEHOLDER */}
            <div className="w-24 h-24 rounded-full bg-gradient-to-br from-indigo-200 to-indigo-300 flex items-center justify-center text-4xl mx-auto mb-6">
              🏏
            </div>

            {/* PLAYER INFO */}
            <h3 className="text-xl font-bold text-center">
              {player.name}
            </h3>

            <p className="text-center text-gray-500 mt-1">
              {player.role}
            </p>

            {/* BADGES */}
            <div className="flex justify-center gap-3 mt-5">
              <span className="px-4 py-1 text-sm rounded-full bg-indigo-50 text-indigo-700">
                {player.team}
              </span>

              <span className="px-4 py-1 text-sm rounded-full bg-yellow-100 text-yellow-700">
                IPL
              </span>
            </div>

            {/* VIEW BUTTON */}
            <button className="mt-6 w-full py-3 rounded-full bg-indigo-900 text-white hover:bg-indigo-800 transition">
              View Profile
            </button>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Players;
