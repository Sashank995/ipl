import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="space-y-24">

      {/* 1️⃣ HERO SECTION */}
      <section className="relative rounded-[2.5rem] overflow-hidden bg-gradient-to-r from-indigo-950 via-blue-900 to-indigo-900">
        <div className="absolute inset-0 bg-black/30" />

        <div className="relative z-10 px-12 py-24 max-w-4xl text-white">
          <h1 className="text-6xl font-extrabold leading-tight">
            IPL Cricket
            <span className="block text-yellow-400">
              Like Never Before
            </span>
          </h1>

          <p className="mt-6 text-xl text-gray-200">
            A premium platform for IPL fans to explore teams, players,
            match schedules and live standings in one place.
          </p>

          <div className="mt-10 flex gap-6 flex-wrap">
            <Link
              to="/teams"
              className="bg-yellow-400 text-black px-8 py-4 rounded-full font-semibold hover:scale-105 transition"
            >
              Explore Teams
            </Link>

            <Link
              to="/schedule"
              className="border border-white/40 px-8 py-4 rounded-full hover:bg-white/10 transition"
            >
              View Schedule
            </Link>
          </div>
        </div>
      </section>

      {/* 2️⃣ LIVE STATS */}
      <section className="grid grid-cols-1 md:grid-cols-4 gap-10">
        {[
          { label: "IPL Teams", value: "10" },
          { label: "Total Matches", value: "74" },
          { label: "Star Players", value: "250+" },
          { label: "Years of Legacy", value: "17" },
        ].map((item, i) => (
          <div
            key={i}
            className="backdrop-blur-xl bg-white/70 rounded-3xl shadow-lg p-10 text-center hover:-translate-y-2 transition"
          >
            <p className="text-gray-500">{item.label}</p>
            <p className="text-5xl font-bold text-indigo-900 mt-3">
              {item.value}
            </p>
          </div>
        ))}
      </section>

      {/* 3️⃣ FEATURED MATCH */}
      <section className="bg-white rounded-3xl shadow-xl p-12 flex flex-col md:flex-row justify-between items-center gap-8">
        <div>
          <h2 className="text-3xl font-bold text-indigo-900">
            Match of the Day
          </h2>
          <p className="mt-3 text-lg text-gray-600">
            Chennai Super Kings vs Mumbai Indians
          </p>
          <p className="text-gray-400 mt-1">
            March 22 • 7:30 PM IST
          </p>
        </div>

        <Link
          to="/schedule"
          className="bg-indigo-900 text-white px-10 py-4 rounded-full hover:bg-indigo-800 transition"
        >
          View Match Details
        </Link>
      </section>

      {/* 4️⃣ POPULAR TEAMS */}
      <section>
        <h2 className="text-4xl font-bold text-indigo-900 mb-10">
          Fan Favorite Teams
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["CSK", "MI", "RCB"].map((team, i) => (
            <div
              key={i}
              className="relative bg-gradient-to-br from-white to-slate-100 rounded-3xl shadow-lg p-10 hover:shadow-2xl transition"
            >
              <div className="text-6xl mb-6">🏏</div>
              <h3 className="text-2xl font-semibold">{team}</h3>
              <p className="text-gray-500 mt-3">
                One of the most successful franchises in IPL history.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 5️⃣ STAR PLAYERS */}
      <section>
        <h2 className="text-4xl font-bold text-indigo-900 mb-10">
          Star Players
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {["Virat Kohli", "MS Dhoni", "Rohit Sharma"].map((player, i) => (
            <div
              key={i}
              className="bg-white rounded-3xl shadow-lg p-10 text-center hover:scale-105 transition"
            >
              <div className="text-6xl mb-4">👤</div>
              <h3 className="text-xl font-semibold">{player}</h3>
              <p className="text-gray-500 mt-2">IPL Superstar</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6️⃣ FINAL CTA */}
      <section className="text-center bg-gradient-to-r from-indigo-900 to-blue-900 rounded-3xl p-16 text-white">
        <h2 className="text-4xl font-bold">
          Join the IPL Experience
        </h2>
        <p className="mt-4 text-lg text-gray-200">
          Stay updated with every match, team and player.
        </p>

        <Link
          to="/standings"
          className="inline-block mt-8 bg-yellow-400 text-black px-10 py-4 rounded-full font-semibold hover:scale-105 transition"
        >
          View Points Table
        </Link>
      </section>

    </div>
  );
};

export default Home;
