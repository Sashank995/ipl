import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-blue-950 text-white">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <h1 className="text-2xl font-bold">🏏 IPL</h1>

        <nav className="space-x-6 hidden md:block">
          <Link to="/" className="hover:text-yellow-400">Home</Link>
          <Link to="/teams" className="hover:text-yellow-400">Teams</Link>
          <Link to="/players" className="hover:text-yellow-400">Players</Link>
          {/* <Link to="/schedule" className="hover:text-yellow-400">Schedule</Link> */}
          <Link to="/standings" className="hover:text-yellow-400">Standings</Link>
        </nav>

      </div>
    </header>
  );
};

export default Header;
