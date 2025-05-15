import React from 'react';
import { useAuth } from '../context/AuthContext';
import { Navigate } from 'react-router-dom';

const DashboardPage = () => {
  const { isAuthenticated } = useAuth();

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="bg-white shadow-md">
        <nav className="mt-4">
          <ul>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Dashboard</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Settings</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Tables</li>
            <li className="px-4 py-2 hover:bg-gray-200 cursor-pointer">Maps</li>
          </ul>
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6">
        {/* Top Bar */}
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <input
            type="text"
            placeholder="Search here..."
            className="border rounded-lg px-4 py-2"
          />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold">TRAFFIC</h2>
            <p className="text-2xl font-bold">350,897</p>
            <p className="text-green-500">↑ 3.48% Since last month</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold">NEW USERS</h2>
            <p className="text-2xl font-bold">2,356</p>
            <p className="text-red-500">↓ 3.48% Since last week</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold">SALES</h2>
            <p className="text-2xl font-bold">924</p>
            <p className="text-red-500">↓ 1.10% Since yesterday</p>
          </div>
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold">PERFORMANCE</h2>
            <p className="text-2xl font-bold">49.65%</p>
            <p className="text-green-500">↑ 12% Since last month</p>
          </div>
        </div>

        {/* Tables */}
        <div className="grid grid-cols-2 gap-6">
          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold mb-4">Page Visits</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b p-2">Page Name</th>
                  <th className="border-b p-2">Visitors</th>
                  <th className="border-b p-2">Unique Users</th>
                  <th className="border-b p-2">Bounce Rate</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">/argon/</td>
                  <td className="p-2">4,569</td>
                  <td className="p-2">340</td>
                  <td className="p-2 text-green-500">46.53%</td>
                </tr>
                <tr>
                  <td className="p-2">/argon/index.html</td>
                  <td className="p-2">3,985</td>
                  <td className="p-2">319</td>
                  <td className="p-2 text-red-500">46.53%</td>
                </tr>
                <tr>
                  <td className="p-2">/argon/charts.html</td>
                  <td className="p-2">3,513</td>
                  <td className="p-2">294</td>
                  <td className="p-2 text-red-500">36.49%</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-white p-4 shadow rounded-lg">
            <h2 className="text-lg font-bold mb-4">Social Traffic</h2>
            <table className="w-full text-left">
              <thead>
                <tr>
                  <th className="border-b p-2">Referral</th>
                  <th className="border-b p-2">Visitors</th>
                  <th className="border-b p-2">%</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-2">Facebook</td>
                  <td className="p-2">1,480</td>
                  <td className="p-2">60%</td>
                </tr>
                <tr>
                  <td className="p-2">Google</td>
                  <td className="p-2">4,807</td>
                  <td className="p-2">80%</td>
                </tr>
                <tr>
                  <td className="p-2">Instagram</td>
                  <td className="p-2">3,678</td>
                  <td className="p-2">75%</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;