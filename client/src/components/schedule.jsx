const matches = [
  {
    matchNo: 1,
    teams: "Chennai Super Kings vs Mumbai Indians",
    short: "CSK vs MI",
    venue: "MA Chidambaram Stadium, Chennai",
    date: "22 March 2025",
    time: "7:30 PM IST",
  },
  {
    matchNo: 2,
    teams: "Royal Challengers Bangalore vs Kolkata Knight Riders",
    short: "RCB vs KKR",
    venue: "M. Chinnaswamy Stadium, Bengaluru",
    date: "24 March 2025",
    time: "7:30 PM IST",
  },
  {
    matchNo: 3,
    teams: "Rajasthan Royals vs Delhi Capitals",
    short: "RR vs DC",
    venue: "Sawai Mansingh Stadium, Jaipur",
    date: "26 March 2025",
    time: "7:30 PM IST",
  },
];

const Schedule = () => {
  return (
    <div className="space-y-12">

      {/* PAGE HEADER */}
      <div>
        <h1 className="text-4xl font-extrabold text-indigo-900">
          IPL Match Schedule
        </h1>
        <p className="text-gray-500 mt-2">
          Official fixtures of the Indian Premier League
        </p>
      </div>

      {/* MATCH LIST */}
      <div className="space-y-6">
        {matches.map((match, index) => (
          <div
            key={index}
            className="bg-white rounded-3xl shadow-lg p-8 flex flex-col md:flex-row justify-between items-center gap-6 hover:shadow-2xl transition"
          >
            {/* LEFT SECTION */}
            <div className="space-y-2">
              <p className="text-sm text-gray-400">
                Match {match.matchNo}
              </p>

              <h2 className="text-2xl font-bold text-indigo-900">
                {match.short}
              </h2>

              <p className="text-gray-500 text-sm">
                {match.venue}
              </p>
            </div>

            {/* RIGHT SECTION */}
            <div className="text-center md:text-right space-y-2">
              <p className="text-lg font-semibold">
                {match.date}
              </p>

              <p className="text-gray-500">
                {match.time}
              </p>

              <button className="mt-3 px-6 py-2 rounded-full bg-indigo-900 text-white hover:bg-indigo-800 transition">
                Match Center
              </button>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
};

export default Schedule;
