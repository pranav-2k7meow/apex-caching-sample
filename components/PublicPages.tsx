import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowRight, Book, Users, Award, CheckCircle, GraduationCap, 
  MapPin, Phone, Mail, Star, Quote, ChevronRight, Sparkles, Calendar,
  PlayCircle, Layers, Target, Cpu, Heart, Clock, Globe, Send, Map, Navigation,
  Search, FileText, Video, Download, Play, Filter
} from 'lucide-react';
import { Course } from '../types';

export const Navbar: React.FC = () => (
  <nav className="sticky top-0 z-40 bg-white/80 backdrop-blur-lg border-b border-emerald-100/50 shadow-sm transition-all">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between h-20 items-center">
        <Link to="/" className="flex items-center gap-3 group">
          <div className="bg-gradient-to-br from-emerald-600 to-teal-600 text-white p-2.5 rounded-xl shadow-lg shadow-emerald-200 group-hover:shadow-emerald-300 transition-all duration-300 group-hover:scale-105">
            <GraduationCap className="w-6 h-6" />
          </div>
          <span className="text-2xl font-bold text-emerald-900 tracking-tight transition-colors font-display">Apex</span>
        </Link>
        <div className="hidden md:flex items-center space-x-6">
          <Link to="/" className="text-slate-600 hover:text-emerald-600 font-medium transition duration-200">Home</Link>
          <Link to="/courses" className="text-slate-600 hover:text-emerald-600 font-medium transition duration-200">Courses</Link>
          <Link to="/study-material" className="text-slate-600 hover:text-emerald-600 font-medium transition duration-200">Study Material</Link>
          <Link to="/why-us" className="text-slate-600 hover:text-emerald-600 font-medium transition duration-200">Why Us</Link>
          <Link to="/about" className="text-slate-600 hover:text-emerald-600 font-medium transition duration-200">About</Link>
          <Link to="/contact" className="text-slate-600 hover:text-emerald-600 font-medium transition duration-200">Contact</Link>
          <Link to="/admin" className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-sm font-semibold hover:bg-emerald-800 transition duration-300 shadow-md hover:shadow-lg transform hover:-translate-y-0.5">
            Admin Portal
          </Link>
        </div>
      </div>
    </div>
  </nav>
);

export const Footer: React.FC = () => (
  <footer id="contact" className="bg-slate-900 text-slate-300 py-20 border-t-4 border-emerald-600">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-white">
            <div className="bg-emerald-600 p-2 rounded-lg">
              <GraduationCap className="w-5 h-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">Apex Institute</span>
          </div>
          <p className="text-sm leading-relaxed text-slate-400">
            Empowering students to achieve their academic dreams through excellence in education, personalized mentorship, and cutting-edge resources since 2010.
          </p>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Programs</h4>
          <ul className="space-y-3 text-sm">
            <li><Link to="/courses" className="hover:text-emerald-400 transition duration-300">JEE Main & Advanced</Link></li>
            <li><Link to="/courses" className="hover:text-emerald-400 transition duration-300">NEET Medical Prep</Link></li>
            <li><Link to="/courses" className="hover:text-emerald-400 transition duration-300">Foundation (Class 9-10)</Link></li>
            <li><Link to="/courses" className="hover:text-emerald-400 transition duration-300">Olympiad Crash Courses</Link></li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Contact Us</h4>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start gap-3 group">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-600 transition duration-300">
                <MapPin className="w-4 h-4 text-white"/> 
              </div>
              <span className="mt-1.5">BITS Pilani Goa Campus,<br/>Zuarinagar, Goa 403726</span>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-600 transition duration-300">
                <Phone className="w-4 h-4 text-white"/> 
              </div>
              <span>+91 123-456-7890</span>
            </li>
            <li className="flex items-center gap-3 group">
              <div className="p-2 bg-slate-800 rounded-lg group-hover:bg-emerald-600 transition duration-300">
                <Mail className="w-4 h-4 text-white"/> 
              </div>
              <span>admissions@apexcoaching.com</span>
            </li>
          </ul>
        </div>
        
        <div>
          <h4 className="text-white font-semibold mb-6 text-lg tracking-wide">Newsletter</h4>
          <p className="text-sm mb-4 text-slate-400">Subscribe to get exam tips and latest updates.</p>
          <div className="flex gap-2">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="bg-slate-800 border border-slate-700 rounded-xl px-4 py-3 text-sm w-full focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 transition" 
            />
            <button className="bg-emerald-600 text-white px-4 py-3 rounded-xl hover:bg-emerald-500 transition duration-300 shadow-lg shadow-emerald-900/20">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
      
      <div className="pt-8 border-t border-slate-800 text-center md:text-left flex flex-col md:flex-row justify-between items-center text-sm text-slate-500">
        <p>&copy; {new Date().getFullYear()} Apex Coaching Institute. All rights reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-emerald-400 transition">Privacy Policy</a>
          <a href="#" className="hover:text-emerald-400 transition">Terms of Service</a>
        </div>
      </div>
    </div>
  </footer>
);

export const HomePage: React.FC = () => {
  const offerings = [
    { title: "Classroom Programs", desc: "Intensive offline coaching for JEE (Main & Advanced) and NEET with expert faculty." },
    { title: "Foundation Courses", desc: "Building strong fundamentals in Science & Math for Class 9 & 10 students." },
    { title: "Distance Learning", desc: "Comprehensive study material packages and video lectures for self-paced study." },
    { title: "Olympiad Prep", desc: "Specialized training for ISO, IMO, NTSE, and other national level Olympiads." },
    { title: "Online Test Series", desc: "AI-powered mock tests with detailed performance analysis and benchmarking." },
    { title: "Doubt Clearing Cells", desc: "Dedicated 1-on-1 sessions with subject matter experts to resolve queries." }
  ];

  const stats = [
    { label: "Active Students", value: "5,000+" },
    { label: "IIT Selections", value: "1,200+" },
    { label: "Medical Seats", value: "850+" },
    { label: "Years of Trust", value: "14+" },
  ];

  const testimonials = [
    {
      name: "Rahul Sharma",
      role: "IIT Delhi, CSE",
      content: "Apex provided the perfect environment for my JEE preparation. The faculty's guidance was instrumental in my success.",
      rank: "AIR 45"
    },
    {
      name: "Priya Patel",
      role: "AIIMS Delhi",
      content: "The rigorous testing schedule and personalized doubt clearing sessions helped me crack NEET with flying colors.",
      rank: "AIR 12"
    },
    {
      name: "Amit Verma",
      role: "Parent",
      content: "Enrolling my son in the Foundation course was the best decision. His concepts are crystal clear now.",
      rank: "Foundation"
    }
  ];

  return (
    <div className="overflow-hidden bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-emerald-50 via-white to-teal-50 pt-20 pb-32 lg:pt-32 lg:pb-40">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-100/30 rounded-bl-[100px] -z-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-teal-100/30 rounded-tr-[100px] -z-10 blur-3xl"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            <div className="lg:w-1/2 space-y-8 animate-fade-in-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white rounded-full shadow-sm border border-emerald-100 text-emerald-700 font-bold text-xs uppercase tracking-wider">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <span>Admissions Open for 2024-25</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-extrabold text-slate-900 leading-[1.1] tracking-tight">
                Shape Your Future with <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-600 to-teal-500">Excellence</span>
              </h1>
              <p className="text-lg text-slate-600 max-w-xl leading-relaxed">
                Join the nation's most trusted coaching institute. We don't just teach; we mentor future leaders in Engineering and Medicine through personalized learning.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <Link to="/courses" className="px-8 py-4 bg-emerald-600 text-white rounded-full font-bold hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 hover:shadow-emerald-300 flex items-center justify-center gap-2 transform hover:-translate-y-0.5">
                  View All Courses <ArrowRight className="w-5 h-5"/>
                </Link>
                <a href="#contact" className="px-8 py-4 bg-white text-slate-700 border border-slate-200 rounded-full font-bold hover:bg-emerald-50 hover:border-emerald-200 hover:text-emerald-700 transition flex items-center justify-center gap-2">
                  <PlayCircle className="w-5 h-5" /> Book a Free Demo
                </a>
              </div>
              <div className="pt-8 flex gap-8 border-t border-emerald-100/60">
                <div>
                  <div className="flex -space-x-4">
                    {[1,2,3,4].map(i => (
                      <img key={i} className="w-10 h-10 rounded-full border-2 border-white object-cover" src={`https://i.pravatar.cc/100?img=${i+10}`} alt="Student" />
                    ))}
                    <div className="w-10 h-10 rounded-full border-2 border-white bg-teal-100 text-teal-700 flex items-center justify-center text-xs font-bold">+2k</div>
                  </div>
                  <p className="text-sm text-slate-500 mt-2 font-medium">Trusted by students nationwide</p>
                </div>
              </div>
            </div>
            
            <div className="lg:w-1/2 relative">
              <div className="absolute inset-0 bg-emerald-600 rounded-[2rem] rotate-3 opacity-5"></div>
              <div className="absolute inset-0 bg-teal-600 rounded-[2rem] -rotate-2 opacity-5"></div>
              <img 
                src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&q=80&w=2000" 
                alt="Happy Students" 
                className="relative rounded-[2rem] shadow-2xl w-full object-cover h-[500px] hover:scale-[1.01] transition duration-500"
              />
              <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl max-w-xs animate-bounce-slow hidden md:block border border-emerald-50">
                <div className="flex items-center gap-4 mb-3">
                  <div className="p-3 bg-amber-100 text-amber-600 rounded-full">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500">Highest Selections</p>
                    <p className="font-bold text-slate-900">JEE Advanced 2023</p>
                  </div>
                </div>
                <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-500 w-[92%]"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-emerald-950 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center divide-x divide-emerald-800/50">
            {stats.map((stat, idx) => (
              <div key={idx} className="p-4">
                <p className="text-3xl md:text-5xl font-bold mb-2 text-transparent bg-clip-text bg-gradient-to-b from-white to-emerald-300">{stat.value}</p>
                <p className="text-emerald-300 text-sm font-bold uppercase tracking-widest">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Offerings List Section */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
           <div className="mb-12 text-center md:text-left flex flex-col md:flex-row justify-between items-end gap-6">
              <div>
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Academic Programs</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">What We Offer</h2>
              </div>
              <Link to="/courses" className="flex items-center gap-2 text-emerald-600 font-bold hover:text-emerald-700 group bg-emerald-50 px-5 py-2 rounded-full transition-colors">
                  View Detailed Plans <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition" />
              </Link>
           </div>

           <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-100 hover:shadow-md transition duration-500">
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12">
                  {offerings.map((item, i) => (
                      <div key={i} className="flex items-start gap-4">
                          <div className="mt-1 p-3 bg-emerald-50 text-emerald-600 rounded-xl transition-colors">
                            <Layers className="w-6 h-6" />
                          </div>
                          <div>
                              <h3 className="text-lg font-bold text-slate-900 mb-2">{item.title}</h3>
                              <p className="text-slate-600 text-sm leading-relaxed">{item.desc}</p>
                          </div>
                      </div>
                  ))}
              </div>
           </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-24 bg-white relative">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-slate-50 -z-10 rounded-l-[100px] hidden lg:block"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">The Apex Advantage</span>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2 mb-4">Why Top Rankers Choose Us</h2>
            <p className="text-slate-600 text-lg">We combine traditional teaching values with modern technology to provide the best possible learning ecosystem.</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: Users, title: "Elite Faculty", desc: "Learn from the masters. Our teachers are IITians and Doctors with 15+ years of experience." },
              { icon: Book, title: "Study Material", desc: "Comprehensive, researched content that covers every aspect of the syllabus in depth." },
              { icon: CheckCircle, title: "Daily Practice", desc: "Regular testing and AI-driven performance analysis to identify and fix weak areas." },
              { icon: Calendar, title: "Structured Plan", desc: "A well-defined academic calendar ensuring timely syllabus completion and revision." }
            ].map((feature, idx) => (
              <div key={idx} className="p-8 rounded-2xl bg-white border border-slate-100 hover:border-emerald-200 hover:shadow-xl hover:shadow-emerald-900/5 transition-all duration-300 group">
                <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-600 group-hover:text-white transition duration-300 shadow-sm">
                  <feature.icon className="w-7 h-7" />
                </div>
                <h3 className="text-lg font-bold text-slate-900 mb-3">{feature.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-900 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-emerald-400 via-slate-900 to-slate-900"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-16">
             <span className="text-emerald-400 font-bold tracking-widest uppercase text-xs">Success Stories</span>
             <h2 className="text-3xl md:text-4xl font-bold text-white mt-2">Wall of Fame</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((t, idx) => (
              <div key={idx} className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700 relative hover:border-emerald-500/50 transition duration-300">
                <Quote className="absolute top-6 right-6 text-slate-700 w-8 h-8 opacity-50" />
                <div className="flex gap-1 text-amber-400 mb-6">
                  {[1,2,3,4,5].map(i => <Star key={i} className="w-4 h-4 fill-current" />)}
                </div>
                <p className="text-slate-300 italic mb-6 leading-relaxed">"{t.content}"</p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-emerald-500 to-teal-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-white font-bold">{t.name}</h4>
                    <p className="text-emerald-400 text-xs uppercase tracking-wide font-semibold">{t.rank} • {t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-emerald-700 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white opacity-5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-400 opacity-10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
        
        <div className="max-w-5xl mx-auto px-4 text-center relative z-10">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to Start Your Journey?</h2>
          <p className="text-xl text-emerald-100 mb-10 max-w-2xl mx-auto leading-relaxed">
            Get expert counseling, scholarship details, and a free demo class. Don't wait for success, prepare for it with Apex.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <button className="px-10 py-4 bg-white text-emerald-700 rounded-full font-bold text-lg hover:bg-emerald-50 transition shadow-xl hover:shadow-2xl transform hover:-translate-y-1">
               Enquire Now
             </button>
             <button className="px-10 py-4 bg-emerald-800/50 backdrop-blur border border-emerald-500 text-white rounded-full font-bold text-lg hover:bg-emerald-800 transition">
               Download Brochure
             </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export const StudyMaterialPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'All' | 'Physics' | 'Chemistry' | 'Mathematics'>('All');
  const [searchQuery, setSearchQuery] = useState('');

  const resources = [
    // Physics
    { id: 'p1', type: 'video', subject: 'Physics', title: 'Rotational Motion: Part 1', duration: '55m', author: 'Dr. H.C. Verma', thumbnail: 'https://images.unsplash.com/photo-1636466497217-26a8cbeaf0aa?auto=format&fit=crop&q=80&w=400' },
    { id: 'p2', type: 'video', subject: 'Physics', title: 'Ray Optics & Optical Instruments', duration: '1h 20m', author: 'Prof. Gupta', thumbnail: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=400' },
    { id: 'p3', type: 'pdf', subject: 'Physics', title: 'Electrostatics - Formula Sheet', size: '2.4 MB', author: 'Apex Faculty' },
    { id: 'p4', type: 'pdf', subject: 'Physics', title: 'Mechanics JEE Advanced PYQ 2018-2023', size: '5.1 MB', author: 'Apex Faculty' },
    
    // Chemistry
    { id: 'c1', type: 'video', subject: 'Chemistry', title: 'Organic Chemistry: Reaction Mechanisms', duration: '45m', author: 'Dr. R.K. Singh', thumbnail: 'https://images.unsplash.com/photo-1603126857599-f6e157fa2fe6?auto=format&fit=crop&q=80&w=400' },
    { id: 'c2', type: 'video', subject: 'Chemistry', title: 'Thermodynamics Crash Course', duration: '1h 10m', author: 'Dr. R.K. Singh', thumbnail: 'https://images.unsplash.com/photo-1532094349884-543bc11b234d?auto=format&fit=crop&q=80&w=400' },
    { id: 'c3', type: 'pdf', subject: 'Chemistry', title: 'Periodic Table Mind Map', size: '1.2 MB', author: 'Apex Faculty' },
    { id: 'c4', type: 'pdf', subject: 'Chemistry', title: 'Chemical Bonding Notes', size: '3.5 MB', author: 'Apex Faculty' },

    // Maths
    { id: 'm1', type: 'video', subject: 'Mathematics', title: 'Calculus: Limits & Continuity', duration: '1h 05m', author: 'Prof. R.D. Sharma', thumbnail: 'https://images.unsplash.com/photo-1509228468518-180dd4864904?auto=format&fit=crop&q=80&w=400' },
    { id: 'm2', type: 'video', subject: 'Mathematics', title: 'Probability & Statistics', duration: '50m', author: 'Prof. R.D. Sharma', thumbnail: 'https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=400' },
    { id: 'm3', type: 'pdf', subject: 'Mathematics', title: 'Trigonometry Cheat Sheet', size: '1.8 MB', author: 'Apex Faculty' },
    { id: 'm4', type: 'pdf', subject: 'Mathematics', title: 'Complex Numbers - Question Bank', size: '4.2 MB', author: 'Apex Faculty' },
  ];

  const filteredResources = resources.filter(resource => 
    (activeTab === 'All' || resource.subject === activeTab) &&
    resource.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const videos = filteredResources.filter(r => r.type === 'video');
  const pdfs = filteredResources.filter(r => r.type === 'pdf');

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <div className="bg-emerald-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Study Material Repository</h1>
          <p className="text-xl text-emerald-200 max-w-2xl mx-auto font-light">
            Access our premium collection of video lectures, revision notes, and question banks to boost your preparation.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-8 relative z-20">
        {/* Controls */}
        <div className="bg-white rounded-2xl shadow-xl p-6 border border-slate-100 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex gap-2 p-1 bg-slate-100 rounded-xl w-full md:w-auto overflow-x-auto">
            {['All', 'Physics', 'Chemistry', 'Mathematics'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab as any)}
                className={`px-6 py-2.5 rounded-lg text-sm font-bold transition-all whitespace-nowrap ${
                  activeTab === tab 
                  ? 'bg-white text-emerald-600 shadow-sm' 
                  : 'text-slate-500 hover:text-slate-700 hover:bg-slate-200/50'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          <div className="relative w-full md:w-96">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400" />
            <input 
              type="text" 
              placeholder="Search topics, chapters..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-emerald-500 transition"
            />
          </div>
        </div>

        {/* Content */}
        <div className="py-12 space-y-16">
          
          {/* Video Section */}
          {videos.length > 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-emerald-100 text-emerald-600 rounded-lg">
                  <Video className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Video Lectures</h2>
              </div>
              
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {videos.map(video => (
                  <div key={video.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition cursor-pointer">
                    <div className="relative aspect-video bg-slate-900 overflow-hidden">
                      <img src={video.thumbnail} alt={video.title} className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition duration-500" />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-12 h-12 bg-white/20 backdrop-blur rounded-full flex items-center justify-center group-hover:scale-110 transition duration-300">
                          <Play className="w-5 h-5 text-white fill-current ml-0.5" />
                        </div>
                      </div>
                      <span className="absolute bottom-3 right-3 px-2 py-1 bg-black/70 backdrop-blur text-white text-xs font-bold rounded">
                        {video.duration}
                      </span>
                    </div>
                    <div className="p-5">
                      <div className="flex items-center gap-2 mb-2">
                        <span className={`text-xs font-bold uppercase tracking-wider px-2 py-0.5 rounded ${
                          video.subject === 'Physics' ? 'bg-blue-50 text-blue-600' :
                          video.subject === 'Chemistry' ? 'bg-amber-50 text-amber-600' :
                          'bg-red-50 text-red-600'
                        }`}>
                          {video.subject}
                        </span>
                      </div>
                      <h3 className="font-bold text-slate-900 leading-snug mb-1 group-hover:text-emerald-600 transition">{video.title}</h3>
                      <p className="text-xs text-slate-500 font-medium">By {video.author}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* PDF Section */}
          {pdfs.length > 0 && (
            <div className="animate-in fade-in slide-in-from-bottom-4 duration-700">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
                  <FileText className="w-5 h-5" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">Study Notes & PDFs</h2>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                {pdfs.map(pdf => (
                  <div key={pdf.id} className="bg-white p-5 rounded-xl border border-slate-200 hover:border-emerald-300 shadow-sm hover:shadow-md transition flex items-center justify-between group">
                    <div className="flex items-center gap-4">
                      <div className="w-12 h-12 bg-red-50 text-red-500 rounded-xl flex items-center justify-center">
                        <FileText className="w-6 h-6" />
                      </div>
                      <div>
                        <h4 className="font-bold text-slate-900 group-hover:text-emerald-600 transition">{pdf.title}</h4>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs font-semibold text-slate-500">{pdf.subject}</span>
                          <span className="w-1 h-1 bg-slate-300 rounded-full"></span>
                          <span className="text-xs text-slate-400">{pdf.size}</span>
                        </div>
                      </div>
                    </div>
                    <button className="p-2.5 text-slate-400 hover:text-emerald-600 hover:bg-emerald-50 rounded-lg transition">
                      <Download className="w-5 h-5" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {videos.length === 0 && pdfs.length === 0 && (
            <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 border-dashed">
              <div className="w-16 h-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="w-8 h-8 text-slate-300" />
              </div>
              <h3 className="text-lg font-bold text-slate-900">No resources found</h3>
              <p className="text-slate-500">Try adjusting your search or filters.</p>
            </div>
          )}

        </div>
      </div>
    </div>
  );
};

export const CoursesPage: React.FC<{ courses: Course[] }> = ({ courses }) => (
  <div className="bg-slate-50 min-h-screen py-16">
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-16 max-w-3xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">Our Classroom Programs</h1>
        <p className="text-lg text-slate-600">
          Meticulously designed courses to help you crack the toughest exams. Choose the program that fits your goal.
        </p>
      </div>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {courses.map((course) => (
          <div key={course.id} className="group bg-white rounded-2xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col hover:border-emerald-200">
            <div className="h-52 overflow-hidden relative">
              <img src={course.image} alt={course.title} className="w-full h-full object-cover group-hover:scale-105 transition duration-500" />
              <div className="absolute top-4 right-4 bg-white/95 backdrop-blur px-3 py-1 rounded-lg text-xs font-bold text-slate-800 shadow-sm border border-slate-100">
                {course.duration}
              </div>
            </div>
            <div className="p-8 flex-1 flex flex-col">
              <div className="mb-4">
                <h3 className="text-2xl font-bold text-slate-900 group-hover:text-emerald-700 transition">{course.title}</h3>
              </div>
              <p className="text-slate-600 mb-6 line-clamp-4 leading-relaxed flex-grow text-[15px]">{course.description}</p>
              
              <div className="mt-auto pt-6 border-t border-slate-100 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-500 font-bold uppercase tracking-wider mb-0.5">Course Fee</p>
                  <p className="text-xl font-bold text-emerald-600">{course.fee}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

export const AboutPage: React.FC = () => (
  <div className="bg-white">
    {/* Header */}
    <div className="bg-emerald-950 text-white py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-emerald-900/50 pattern-grid-lg"></div>
      <div className="absolute top-0 right-0 w-1/3 h-full bg-emerald-600/10 blur-3xl"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">About Apex Institute</h1>
        <p className="text-xl text-emerald-200 max-w-2xl mx-auto">Building the foundation for a brighter tomorrow through education, innovation, and integrity.</p>
      </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-block px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full font-bold text-xs uppercase tracking-wider">Our Story</div>
          <h2 className="text-3xl font-bold text-slate-900">A Decade of Excellence</h2>
          <div className="space-y-4 text-slate-600 leading-relaxed text-lg">
            <p>
              Founded in 2010, Apex Coaching Institute has been a beacon of hope for students aspiring to crack competitive examinations in India. We started with a humble batch of 20 students and have grown to a family of over 10,000 successful alumni.
            </p>
            <p>
              Our philosophy is simple: <strong>Education is not just about rote learning; it's about understanding concepts and applying them.</strong> We believe in nurturing the unique potential of every student.
            </p>
            <p>
              With state-of-the-art infrastructure, a digital library, and AI-enabled performance tracking, we bring technology and tradition together to offer the best learning experience.
            </p>
          </div>
          
          <div className="grid grid-cols-2 gap-6 pt-6">
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50">
               <h4 className="font-bold text-3xl text-emerald-600 mb-1">10k+</h4>
               <p className="text-sm text-slate-500 font-medium">Alumni Network</p>
            </div>
            <div className="p-6 border border-slate-200 rounded-2xl bg-slate-50">
               <h4 className="font-bold text-3xl text-emerald-600 mb-1">50+</h4>
               <p className="text-sm text-slate-500 font-medium">Expert Faculty</p>
            </div>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-4 bg-emerald-100 rounded-3xl -z-10 rotate-2"></div>
          <div className="absolute -inset-4 bg-teal-50 rounded-3xl -z-20 -rotate-2"></div>
          <div className="grid grid-cols-2 gap-4">
            <img src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg mt-12 hover:scale-105 transition duration-500 border-4 border-white" alt="Campus" />
            <img src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?auto=format&fit=crop&q=80&w=600" className="rounded-2xl shadow-lg hover:scale-105 transition duration-500 border-4 border-white" alt="Library" />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export const WhyChooseUsPage: React.FC = () => (
  <div className="bg-slate-50 min-h-screen">
    {/* Hero */}
    <div className="bg-gradient-to-r from-emerald-900 to-teal-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Why Choose Apex?</h1>
            <p className="text-xl text-emerald-200 max-w-2xl mx-auto font-light">
                Because we don't just prepare you for exams; we prepare you for life.
                Discover the Apex difference.
            </p>
        </div>
    </div>

    {/* Features Grid */}
    <div className="max-w-7xl mx-auto px-4 py-24">
        <div className="grid md:grid-cols-3 gap-10">
            {[
                { icon: Target, title: "Result Oriented", desc: "Consistently producing top rankers in JEE & NEET for over a decade with our focused approach." },
                { icon: Users, title: "Expert Mentorship", desc: "1:1 mentorship program where every student gets personal attention and guidance from senior faculty." },
                { icon: Cpu, title: "Tech-Enabled Learning", desc: "AI-driven performance analysis, personalized improvement plans, and digital access to resources." },
                { icon: Book, title: "Comprehensive Material", desc: "Scientifically designed study material that covers everything from basics to advanced concepts." },
                { icon: Heart, title: "Holistic Development", desc: "Stress management workshops, motivational sessions, and counseling to keep student morale high." },
                { icon: Clock, title: "24/7 Doubt Resolution", desc: "Dedicated doubt clearing cells and app support ensuring no query goes unanswered." }
            ].map((feature, i) => (
                <div key={i} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 group">
                    <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-xl flex items-center justify-center mb-6 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                        <feature.icon className="w-7 h-7" />
                    </div>
                    <h3 className="text-xl font-bold text-slate-900 mb-3">{feature.title}</h3>
                    <p className="text-slate-600 leading-relaxed">{feature.desc}</p>
                </div>
            ))}
        </div>
    </div>
    
    {/* Methodology Section */}
    <div className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-4">
            <div className="text-center mb-16">
                <span className="text-emerald-600 font-bold tracking-widest uppercase text-xs">Our Process</span>
                <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mt-2">The 4-Step Methodology</h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8 relative">
                {/* Connecting Line (Desktop) */}
                <div className="hidden md:block absolute top-12 left-0 w-full h-0.5 bg-emerald-100 -z-10"></div>
                
                {[
                    { step: "01", title: "Learn", desc: "Concept building through interactive classroom sessions." },
                    { step: "02", title: "Practice", desc: "Daily problem sheets and home assignments." },
                    { step: "03", title: "Test", desc: "Weekly tests to benchmark performance." },
                    { step: "04", title: "Analyze", desc: "In-depth error analysis and remedial classes." }
                ].map((item, i) => (
                    <div key={i} className="text-center bg-white pt-4">
                        <div className="w-16 h-16 mx-auto bg-emerald-600 text-white rounded-full flex items-center justify-center text-xl font-bold shadow-lg shadow-emerald-200 mb-6 relative z-10">
                            {item.step}
                        </div>
                        <h3 className="text-xl font-bold text-slate-900 mb-2">{item.title}</h3>
                        <p className="text-slate-600 text-sm">{item.desc}</p>
                    </div>
                ))}
            </div>
        </div>
    </div>
  </div>
);

export const ContactPage: React.FC = () => (
  <div className="bg-slate-50 min-h-screen">
    {/* Hero */}
    <div className="bg-slate-900 text-white py-24 pb-48 relative overflow-hidden">
        <div className="absolute inset-0 bg-emerald-900/20"></div>
        <div className="max-w-7xl mx-auto px-4 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
            <p className="text-xl text-slate-300">We'd love to hear from you. Reach out to us for any queries.</p>
        </div>
    </div>

    <div className="max-w-7xl mx-auto px-4 -mt-32 relative z-20 pb-20">
        <div className="bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col lg:flex-row border border-slate-200">
            {/* Contact Form */}
            <div className="p-8 md:p-12 lg:w-3/5">
                <h2 className="text-2xl font-bold text-slate-900 mb-6">Send us a message</h2>
                <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Name</label>
                            <input type="text" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="Aditya Kumar" />
                        </div>
                        <div>
                            <label className="block text-sm font-semibold text-slate-700 mb-2">Email</label>
                            <input type="email" className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="aditya@example.com" />
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Subject</label>
                        <select className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none">
                            <option>Admissions Inquiry</option>
                            <option>Course Details</option>
                            <option>Fee Structure</option>
                            <option>Other</option>
                        </select>
                    </div>
                    <div>
                        <label className="block text-sm font-semibold text-slate-700 mb-2">Message</label>
                        <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-slate-50 border border-slate-200 focus:ring-2 focus:ring-emerald-500 outline-none" placeholder="How can we help you?"></textarea>
                    </div>
                    <button type="submit" className="px-8 py-3 bg-emerald-600 text-white font-bold rounded-xl hover:bg-emerald-700 transition shadow-lg shadow-emerald-200 flex items-center gap-2">
                        <Send className="w-4 h-4" /> Send Message
                    </button>
                </form>
            </div>
            
            {/* Info Panel */}
            <div className="bg-emerald-700 p-8 md:p-12 lg:w-2/5 text-white relative overflow-hidden">
                <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
                <div className="relative z-10">
                    <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                <MapPin className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Head Office</h3>
                                <p className="text-emerald-100 mt-1">BITS Pilani K K Birla Goa Campus,<br/>Zuarinagar, Goa 403726</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                <Phone className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Call Us</h3>
                                <p className="text-emerald-100 mt-1">+91 123-456-7890<br/>+91 098-765-4321</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-4">
                            <div className="p-3 bg-white/20 rounded-lg backdrop-blur-sm">
                                <Mail className="w-6 h-6" />
                            </div>
                            <div>
                                <h3 className="font-bold text-lg">Email Us</h3>
                                <p className="text-emerald-100 mt-1">admissions@apex-bits.com<br/>info@apex-bits.com</p>
                            </div>
                        </div>
                    </div>

                    <div className="mt-12 pt-12 border-t border-emerald-500/50">
                        <h3 className="font-bold text-lg mb-4 flex items-center gap-2">
                            <Globe className="w-5 h-5" /> Our Centers
                        </h3>
                        <ul className="space-y-2 text-emerald-100 text-sm">
                            <li className="flex items-center gap-2"><Navigation className="w-3 h-3" /> Panjim (North Goa)</li>
                            <li className="flex items-center gap-2"><Navigation className="w-3 h-3" /> Margao (South Goa)</li>
                            <li className="flex items-center gap-2"><Navigation className="w-3 h-3" /> Vasco (Main Campus)</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>

    {/* Map Section */}
    <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-4">
             <div className="mb-8 flex items-center gap-3">
                <Map className="w-6 h-6 text-emerald-600" />
                <h2 className="text-2xl font-bold text-slate-900">Visit Our Campus</h2>
             </div>
             <div className="h-[450px] w-full bg-slate-200 rounded-3xl overflow-hidden shadow-inner border border-slate-200 relative group">
                {/* Embed Google Map */}
                <iframe 
                    src="https://maps.google.com/maps?q=BITS+Pilani+K+K+Birla+Goa+Campus&t=&z=10&ie=UTF8&iwloc=&output=embed" 
                    width="100%" 
                    height="100%" 
                    style={{border:0}} 
                    allowFullScreen 
                    loading="lazy" 
                    title="Google Map"
                    className="grayscale group-hover:grayscale-0 transition duration-700"
                ></iframe>
                
                {/* Simulated Markers Overlay for demo aesthetics */}
                <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur p-4 rounded-xl shadow-lg border border-slate-100 max-w-xs pointer-events-none">
                    <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-2">Locations</p>
                    <div className="space-y-2">
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <span className="w-3 h-3 rounded-full bg-red-500"></span> Main Campus
                        </div>
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-800">
                            <span className="w-3 h-3 rounded-full bg-emerald-500"></span> Study Centers
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </div>
  </div>
);