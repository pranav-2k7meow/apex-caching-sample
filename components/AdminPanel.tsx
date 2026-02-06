import React from 'react';
import { 
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, 
  LineChart, Line 
} from 'recharts';
import { Users, IndianRupee, BookOpen, TrendingUp, LogOut } from 'lucide-react';
import { Student, Course } from '../types';

interface AdminPanelProps {
  onLogout: () => void;
  students: Student[];
  courses: Course[];
}

const data = [
  { name: 'Jan', students: 40, revenue: 240000 },
  { name: 'Feb', students: 30, revenue: 139800 },
  { name: 'Mar', students: 20, revenue: 980000 },
  { name: 'Apr', students: 27, revenue: 390800 },
  { name: 'May', students: 18, revenue: 480000 },
  { name: 'Jun', students: 23, revenue: 380000 },
  { name: 'Jul', students: 34, revenue: 430000 },
];

export const AdminPanel: React.FC<AdminPanelProps> = ({ onLogout, students }) => {
  return (
    <div className="flex h-screen bg-slate-50 relative">
      {/* Sidebar */}
      <aside className="w-64 bg-emerald-900 text-white flex flex-col hidden md:flex shadow-xl z-10">
        <div className="p-6">
          <h2 className="text-2xl font-bold tracking-tight">Apex Admin</h2>
          <p className="text-emerald-300 text-xs mt-1 uppercase tracking-widest">Management Portal</p>
        </div>
        <nav className="flex-1 px-4 space-y-2">
          <a href="#" className="flex items-center gap-3 px-4 py-3 bg-emerald-800 rounded-xl text-white shadow-sm border border-emerald-700/50">
            <TrendingUp className="w-5 h-5" /> Dashboard
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-emerald-100 hover:bg-emerald-800 hover:text-white rounded-xl transition">
            <Users className="w-5 h-5" /> Students
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-emerald-100 hover:bg-emerald-800 hover:text-white rounded-xl transition">
            <BookOpen className="w-5 h-5" /> Courses
          </a>
          <a href="#" className="flex items-center gap-3 px-4 py-3 text-emerald-100 hover:bg-emerald-800 hover:text-white rounded-xl transition">
            <IndianRupee className="w-5 h-5" /> Finance
          </a>
        </nav>
        <div className="p-4 border-t border-emerald-800">
          <button 
            onClick={onLogout}
            className="flex items-center gap-3 px-4 py-2 text-emerald-200 hover:text-white hover:bg-emerald-800 rounded-lg w-full transition"
          >
            <LogOut className="w-5 h-5" /> Logout
          </button>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-y-auto">
        <header className="bg-white shadow-sm p-6 flex justify-between items-center md:hidden">
          <h1 className="text-xl font-bold text-slate-800">Dashboard</h1>
          <button onClick={onLogout}><LogOut className="w-5 h-5 text-slate-600" /></button>
        </header>

        <div className="p-8 space-y-8">
          
          {/* Stats Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-emerald-200 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 text-sm font-medium">Total Revenue</h3>
                <div className="p-2 bg-emerald-50 rounded-lg">
                  <IndianRupee className="w-5 h-5 text-emerald-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-slate-900">₹ 45,23,000</p>
              <p className="text-xs text-emerald-600 mt-2 font-medium flex items-center gap-1">
                 <TrendingUp className="w-3 h-3" /> +20.1% from last month
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-blue-200 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 text-sm font-medium">Active Students</h3>
                <div className="p-2 bg-blue-50 rounded-lg">
                  <Users className="w-5 h-5 text-blue-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-slate-900">{students.length + 142}</p>
              <p className="text-xs text-blue-600 mt-2 font-medium">+12 new enrollments</p>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-amber-200 transition">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-slate-500 text-sm font-medium">Course Completion</h3>
                <div className="p-2 bg-amber-50 rounded-lg">
                  <BookOpen className="w-5 h-5 text-amber-600" />
                </div>
              </div>
              <p className="text-3xl font-bold text-slate-900">84%</p>
              <p className="text-xs text-amber-600 mt-2 font-medium">Top performing: JEE Adv.</p>
            </div>
          </div>

          {/* Charts */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Revenue Overview</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip 
                      formatter={(value) => [`₹ ${value}`, 'Revenue']}
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                      cursor={{fill: '#f1f5f9'}}
                    />
                    <Bar dataKey="revenue" fill="#059669" radius={[6, 6, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="text-lg font-bold text-slate-800 mb-6">Student Enrollment Trend</h3>
              <div className="h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                    <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <YAxis axisLine={false} tickLine={false} tick={{fill: '#64748b', fontSize: 12}} />
                    <Tooltip 
                      contentStyle={{borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)'}} 
                    />
                    <Line type="monotone" dataKey="students" stroke="#0ea5e9" strokeWidth={3} dot={{r: 4, strokeWidth: 2, fill: '#fff'}} activeDot={{r: 6}} />
                  </LineChart>
                </ResponsiveContainer>
              </div>
            </div>
          </div>

          {/* Recent Students Table */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden">
            <div className="p-6 border-b border-slate-100 flex justify-between items-center">
              <h3 className="text-lg font-bold text-slate-800">Recent Enrollments</h3>
              <button className="text-sm text-emerald-600 font-medium hover:text-emerald-700">View All</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm text-slate-600">
                <thead className="bg-slate-50 text-xs uppercase font-semibold text-slate-500 tracking-wider">
                  <tr>
                    <th className="px-6 py-4">Student</th>
                    <th className="px-6 py-4">Course</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {students.map((student) => (
                    <tr key={student.id} className="hover:bg-slate-50 transition">
                      <td className="px-6 py-4 font-medium text-slate-900">
                        <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-bold text-slate-500">
                                {student.name.charAt(0)}
                            </div>
                            <div>
                                {student.name}<br/><span className="text-slate-400 font-normal text-xs">{student.email}</span>
                            </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">{student.courseId}</td>
                      <td className="px-6 py-4">{student.enrollmentDate}</td>
                      <td className="px-6 py-4">
                        <span className={`px-3 py-1 rounded-full text-xs font-bold ${
                          student.status === 'Active' ? 'bg-emerald-100 text-emerald-700' :
                          student.status === 'Pending' ? 'bg-amber-100 text-amber-700' :
                          'bg-slate-100 text-slate-700'
                        }`}>
                          {student.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          
        </div>
      </main>

      {/* Demo Badge */}
      <div className="fixed bottom-4 left-4 z-50 flex items-center gap-2 px-4 py-2 bg-slate-900/90 backdrop-blur text-white text-xs font-medium rounded-full shadow-lg border border-slate-700 pointer-events-none select-none">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
        </span>
        Demo Website by Krayora
      </div>
    </div>
  );
};