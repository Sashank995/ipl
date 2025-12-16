const matches = [
  { match: "CSK vs MI", date: "22 March 2025" },
  { match: "RCB vs KKR", date: "24 March 2025" },
  { match: "RR vs DC", date: "26 March 2025" },
];

const Schedule = () => {
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold mb-6 text-blue-900">Match Schedule</h2>

      <table className="w-full border">
        <thead className="bg-blue-900 text-white">
          <tr>
            <th className="p-2 border">Match</th>
            <th className="p-2 border">Date</th>
          </tr>
        </thead>
        <tbody>
          {matches.map((m, index) => (
            <tr key={index} className="text-center">
              <td className="border p-2">{m.match}</td>
              <td className="border p-2">{m.date}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;
