const teams = [
  { name: "CSK", color: "bg-yellow-400" },
  { name: "MI", color: "bg-blue-500" },
  { name: "RCB", color: "bg-red-500" },
];

const Teams = () => {
  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-blue-900">IPL Teams</h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {teams.map((team, i) => (
          <div
            key={i}
            className={`rounded-xl p-6 text-white shadow hover:scale-105 transition ${team.color}`}
          >
            <h3 className="text-2xl font-bold">{team.name}</h3>
            <p className="mt-2 text-sm">Popular IPL Franchise</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Teams;
