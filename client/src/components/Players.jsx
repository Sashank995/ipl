const players = [
  { name: "Virat Kohli", role: "Batsman" },
  { name: "MS Dhoni", role: "Wicket Keeper" },
  { name: "Rohit Sharma", role: "Batsman" },
];

const Players = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Players</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {players.map((p, i) => (
          <div
            key={i}
            className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
          >
            <div className="text-5xl mb-4">👤</div>
            <h3 className="text-xl font-semibold">{p.name}</h3>
            <p className="text-gray-500">{p.role}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Players;
