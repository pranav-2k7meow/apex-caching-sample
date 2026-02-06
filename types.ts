export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  fee: string;
  image: string;
}

export interface Student {
  id: string;
  name: string;
  email: string;
  courseId: string;
  enrollmentDate: string;
  status: 'Active' | 'Completed' | 'Pending';
}

export interface StatData {
  name: string;
  students: number;
  revenue: number;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'model';
  text: string;
  isStreaming?: boolean;
}