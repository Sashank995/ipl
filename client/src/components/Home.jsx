const Home = () => {
  return (
    <div className="space-y-14">

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-blue-900 to-indigo-900 text-white rounded-2xl p-10 flex flex-col md:flex-row justify-between items-center">
        <div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Indian Premier League
          </h1>
          <p className="text-lg text-gray-200">
            Live scores, teams, players, match schedules & points table.
          </p>
        </div>

        <div className="mt-6 md:mt-0 text-6xl">
          🏏
        </div>
      </section>

      {/* QUICK STATS */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          { title: "Teams", value: "10+" },
          { title: "Matches", value: "70+" },
          { title: "Players", value: "250+" },
          { title: "Seasons", value: "17" },
        ].map((item, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow p-6 text-center hover:scale-105 transition"
          >
            <h3 className="text-gray-500">{item.title}</h3>
            <p className="text-3xl font-bold text-blue-900">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* FEATURED TEAMS */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          Popular IPL Teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {["CSK", "MI", "RCB"].map((team, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow p-6 hover:shadow-lg transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {team}
              </h3>
              <p className="text-gray-600">
                One of the most successful IPL franchises.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* UPCOMING MATCHES */}
      <section>
        <h2 className="text-3xl font-bold mb-6 text-blue-900">
          Upcoming Matches
        </h2>

        <div className="space-y-4">
          {[
            "CSK vs MI – 22 Mar",
            "RCB vs KKR – 24 Mar",
            "RR vs DC – 26 Mar",
          ].map((match, index) => (
            <div
              key={index}
              className="bg-white p-4 rounded-lg shadow flex justify-between items-center"
            >
              <span>{match}</span>
              <span className="text-sm text-gray-500">
                7:30 PM IST
              </span>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
};

export default Home;
