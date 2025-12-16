const pointsTable = [
  { team: "CSK", points: 14 },
  { team: "MI", points: 12 },
  { team: "RCB", points: 10 },
  { team: "KKR", points: 8 },
];

const Standings = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">
        Points Table
      </h2>

      <table className="w-full border">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="border p-2">Team</th>
            <th className="border p-2">Points</th>
          </tr>
        </thead>
        <tbody>
          {pointsTable.map((row, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{row.team}</td>
              <td className="border p-2">{row.points}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Standings;
