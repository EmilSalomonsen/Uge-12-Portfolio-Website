import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const Layout = () => {
  return (
    <div className="flex min-h-screen bg-gray-100">
      <Sidebar />
      <main className="flex-1 ml-64 flex justify-center items-start bg-gray-50 min-h-screen p-8">
        <div className="w-full max-w-5xl">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default Layout; 