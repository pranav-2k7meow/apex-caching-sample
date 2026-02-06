import React, { useState } from 'react';
import { HashRouter, Routes, Route, Navigate, useLocation, Link } from 'react-router-dom';
import { Navbar, Footer, HomePage, CoursesPage, AboutPage, WhyChooseUsPage, ContactPage, StudyMaterialPage } from './components/PublicPages';
import { AdminPanel } from './components/AdminPanel';
import { ChatWidget } from './components/ChatWidget';
import { Course, Student } from './types';
import { Lock, ArrowLeft } from 'lucide-react';

// Mock Data
const MOCK_COURSES: Course[] = [
  {
    id: 'c1',
    title: 'JEE Advanced Mastery',
    description: 'A rigorous 2-year program covering Physics, Chemistry, and Mathematics for IIT JEE aspirants. Includes daily practice sheets and mock tests.',
    duration: '2 Years',
    level: 'Advanced',
    fee: '₹ 1,80,000',
    image: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c2',
    title: 'NEET Medical Premier',
    description: 'Comprehensive coaching for medical entrance exams with special focus on Biology and organic Chemistry. Access to 3D anatomy models included.',
    duration: '2 Years',
    level: 'Intermediate',
    fee: '₹ 1,60,000',
    image: 'https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c3',
    title: 'Foundation Builder (Class 9-10)',
    description: 'Build a strong base in Science and Math. Perfect for students aiming for future competitive exams and Olympiads.',
    duration: '1 Year',
    level: 'Beginner',
    fee: '₹ 90,000',
    image: 'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c4',
    title: 'Olympiad Crash Course',
    description: 'Intensive preparation for Science and Math Olympiads. Focus on high-order thinking skills and problem-solving strategies.',
    duration: '6 Months',
    level: 'Advanced',
    fee: '₹ 45,000',
    image: 'https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c5',
    title: 'KVPY Scholars Program',
    description: 'Specialized research-oriented training for KVPY aspirants. Includes mentorship from research scholars.',
    duration: '1 Year',
    level: 'Intermediate',
    fee: '₹ 1,10,000',
    image: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: 'c6',
    title: 'Distance Learning Program',
    description: 'Complete study material package with online test series and video solutions for self-paced learning.',
    duration: 'Flexible',
    level: 'Beginner',
    fee: '₹ 25,000',
    image: 'https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&q=80&w=800'
  }
];

const MOCK_STUDENTS: Student[] = [
  { id: 's1', name: 'Alice Johnson', email: 'alice@example.com', courseId: 'JEE Advanced', enrollmentDate: '2023-08-15', status: 'Active' },
  { id: 's2', name: 'Bob Smith', email: 'bob@example.com', courseId: 'NEET Premier', enrollmentDate: '2023-09-01', status: 'Active' },
  { id: 's3', name: 'Charlie Brown', email: 'charlie@example.com', courseId: 'Foundation', enrollmentDate: '2023-09-10', status: 'Pending' },
  { id: 's4', name: 'Daisy Miller', email: 'daisy@example.com', courseId: 'JEE Advanced', enrollmentDate: '2023-08-20', status: 'Completed' },
];

const Layout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 font-sans text-slate-900">
      <Navbar />
      <main className="flex-grow">
        {children}
      </main>
      <ChatWidget />
      <Footer />
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

const LoginPage: React.FC<{ onLogin: () => void }> = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple mock auth
    if (username === 'admin' && password === 'admin') {
      onLogin();
    } else {
      setError('Invalid credentials (try admin/admin)');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-50 px-4 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-emerald-100/20 rounded-l-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-1/2 h-full bg-teal-100/20 rounded-r-full blur-3xl"></div>
      
      <div className="max-w-md w-full bg-white rounded-3xl shadow-2xl p-8 relative z-10 border border-slate-100">
        <div className="mb-6">
          <Link to="/" className="inline-flex items-center gap-2 text-sm text-slate-500 hover:text-emerald-600 font-medium transition-colors group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" /> Back to Home
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="bg-emerald-50 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-600 shadow-sm">
            <Lock className="w-10 h-10" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900">Admin Login</h2>
          <p className="text-slate-500 mt-2">Secure access for staff only</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          {error && <div className="p-4 bg-red-50 text-red-600 text-sm rounded-xl border border-red-100 text-center font-medium">{error}</div>}
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Username</label>
            <input 
              type="text" 
              value={username} 
              onChange={e => setUsername(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              placeholder="Enter username"
            />
          </div>
          <div>
            <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
            <input 
              type="password" 
              value={password} 
              onChange={e => setPassword(e.target.value)}
              className="w-full px-5 py-3.5 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 outline-none transition"
              placeholder="Enter password"
            />
          </div>
          <button type="submit" className="w-full py-4 bg-emerald-600 text-white rounded-xl font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 hover:shadow-emerald-300">
            Sign In
          </button>
        </form>
        <div className="mt-8 text-center">
            <p className="text-xs text-slate-400 font-medium bg-slate-50 py-2 rounded-lg inline-block px-4">Demo Credentials: admin / admin</p>
        </div>
      </div>
      
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

const App: React.FC = () => {
  const [isAdminAuthenticated, setIsAdminAuthenticated] = useState(false);

  return (
    <HashRouter>
      <Routes>
        {/* Public Routes */}
        <Route path="/" element={<Layout><HomePage /></Layout>} />
        <Route path="/courses" element={<Layout><CoursesPage courses={MOCK_COURSES} /></Layout>} />
        <Route path="/study-material" element={<Layout><StudyMaterialPage /></Layout>} />
        <Route path="/why-us" element={<Layout><WhyChooseUsPage /></Layout>} />
        <Route path="/about" element={<Layout><AboutPage /></Layout>} />
        <Route path="/contact" element={<Layout><ContactPage /></Layout>} />

        {/* Admin Routes */}
        <Route 
          path="/admin" 
          element={
            isAdminAuthenticated ? (
              <AdminPanel 
                onLogout={() => setIsAdminAuthenticated(false)} 
                students={MOCK_STUDENTS}
                courses={MOCK_COURSES}
              />
            ) : (
              <LoginPage onLogin={() => setIsAdminAuthenticated(true)} />
            )
          } 
        />
        
        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </HashRouter>
  );
};

export default App;