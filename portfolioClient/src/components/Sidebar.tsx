import { Link, useLocation } from 'react-router-dom';

const Sidebar = () => {
  const location = useLocation();
  return (
    <div className="h-screen w-56 bg-gray-900 text-white p-6 fixed left-0 top-0 flex flex-col">
      <div className="text-2xl font-bold mb-10 tracking-tight">Portfolio</div>
      <nav className="flex-1">
        <ul className="space-y-2">
          <li>
            <Link to="/" className={`block py-2 px-4 rounded transition-colors ${location.pathname === '/' ? 'bg-gray-800 font-semibold' : 'hover:bg-gray-800'}`}>About Me</Link>
          </li>
          <li>
            <Link to="/history" className={`block py-2 px-4 rounded transition-colors ${location.pathname === '/history' ? 'bg-gray-800 font-semibold' : 'hover:bg-gray-800'}`}>History</Link>
          </li>
          <li>
            <div className="py-2 px-4">
              <div className="font-semibold mb-2">Projects</div>
              <ul className="pl-2 space-y-1">
                {[1,2,3,4,5, 6].map(num => (
                  <li key={num}>
                    <Link to={`/projects/${num}`} className={`block py-1 px-2 rounded text-sm transition-colors ${location.pathname === `/projects/${num}` ? 'bg-gray-800 font-semibold' : 'hover:bg-gray-800'}`}>Project {num}</Link>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar; 