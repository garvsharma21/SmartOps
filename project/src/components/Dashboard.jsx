import { LogOut, Layers, TrendingUp, DollarSign, PieChart, BarChart3 } from 'lucide-react';
// import { useAuth } from '../contexts/AuthContext';

export default function Dashboard() {
  // const { profile, signOut } = useAuth();
  const profile = { full_name: "Guest User" };
  const signOut = () => {
    console.log("Sign out clicked (auth not wired yet)");
  };
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center transform -rotate-12">
                <Layers className="w-6 h-6 text-white" />
              </div>
              <h1 className="text-2xl font-bold text-gray-800">SmartOps</h1>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-gray-700">Welcome, {profile?.full_name}</span>
              <button
                onClick={signOut}
                className="flex items-center space-x-2 px-4 py-2 bg-gray-100 hover:bg-gray-200 rounded-lg transition-colors text-gray-700"
              >
                <LogOut className="w-4 h-4" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-800">Financial Dashboard</h2>
          <p className="text-gray-600 mt-2">Monitor your business performance at a glance</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                <DollarSign className="w-6 h-6 text-blue-600" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+12.5%</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Total Revenue</h3>
            <p className="text-3xl font-bold text-gray-800">$45,200</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                <TrendingUp className="w-6 h-6 text-green-600" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+8.2%</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Profit Margin</h3>
            <p className="text-3xl font-bold text-gray-800">28%</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center">
                <PieChart className="w-6 h-6 text-orange-600" />
              </div>
              <span className="text-red-600 text-sm font-semibold">-3.1%</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Expenses</h3>
            <p className="text-3xl font-bold text-gray-800">$32,540</p>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 bg-cyan-100 rounded-lg flex items-center justify-center">
                <BarChart3 className="w-6 h-6 text-cyan-600" />
              </div>
              <span className="text-green-600 text-sm font-semibold">+15.3%</span>
            </div>
            <h3 className="text-gray-600 text-sm mb-1">Cash Flow</h3>
            <p className="text-3xl font-bold text-gray-800">$12,660</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Monthly Revenue</h3>
            <div className="h-64 flex items-end justify-between space-x-2">
              {[
                { month: 'Jan', value: 40 },
                { month: 'Feb', value: 55 },
                { month: 'Mar', value: 45 },
                { month: 'Apr', value: 70 },
                { month: 'May', value: 60 },
                { month: 'Jun', value: 80 },
                { month: 'Jul', value: 75 },
                { month: 'Aug', value: 90 },
                { month: 'Sep', value: 85 },
                { month: 'Oct', value: 95 },
              ].map((item, i) => (
                <div key={i} className="flex-1 flex flex-col items-center">
                  <div
                    className="w-full bg-gradient-to-t from-blue-600 to-blue-400 rounded-t hover:from-blue-700 hover:to-blue-500 transition-colors"
                    style={{ height: `${item.value}%` }}
                  ></div>
                  <span className="text-xs text-gray-500 mt-2">{item.month}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-6">Expense Breakdown</h3>
            <div className="flex items-center justify-center h-64">
              <div className="relative w-48 h-48">
                <svg className="w-full h-full transform -rotate-90">
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#3B82F6"
                    strokeWidth="32"
                    strokeDasharray="251 502"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#10B981"
                    strokeWidth="32"
                    strokeDasharray="126 502"
                    strokeDashoffset="-251"
                  />
                  <circle
                    cx="96"
                    cy="96"
                    r="80"
                    fill="none"
                    stroke="#EF4444"
                    strokeWidth="32"
                    strokeDasharray="125 502"
                    strokeDashoffset="-377"
                  />
                </svg>
              </div>
              <div className="ml-8 space-y-4">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-blue-600 rounded-full"></div>
                  <span className="text-gray-700">Operations 50%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-green-600 rounded-full"></div>
                  <span className="text-gray-700">Marketing 25%</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-red-600 rounded-full"></div>
                  <span className="text-gray-700">Other 25%</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
